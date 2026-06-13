import { createClient } from "@/lib/supabase/server";

export interface ToolPageData {
  toolId: string | null;
  categoryId: string | null;
  editorialScore: number | null;
  compositeScore: number | null;
  rank: number | null;
  stats: {
    upvotes: number;
    downvotes: number;
    totalVotes: number;
    avgRating: number | null;
    reviewCount: number;
  };
  reviews: Array<{
    id: string;
    rating: number;
    body: string | null;
    created_at: string;
    profiles: unknown;
  }>;
  userVote: 1 | -1 | null;
  isSaved: boolean;
  userId?: string;
}

export async function fetchToolPageData(slug: string): Promise<ToolPageData> {
  const supabase = await createClient();

  const [{ data: authData }, { data: toolRow }] = await Promise.all([
    supabase.auth.getUser(),
    supabase.from("tools").select("id").eq("slug", slug).maybeSingle(),
  ]);

  const user = authData?.user ?? null;
  const toolId = toolRow?.id ?? null;

  let categoryId: string | null = null;
  let editorialScore: number | null = null;
  let compositeScore: number | null = null;
  let rank: number | null = null;
  let stats = {
    upvotes: 0, downvotes: 0, totalVotes: 0,
    avgRating: null as number | null, reviewCount: 0,
  };
  let reviews: ToolPageData["reviews"] = [];
  let userVote: 1 | -1 | null = null;
  let isSaved = false;

  if (toolId) {
    const { data: toolCats } = await supabase
      .from("tool_categories")
      .select("category_id, editorial_score, categories(name, slug)")
      .eq("tool_id", toolId)
      .limit(1);

    if (toolCats && toolCats.length > 0) {
      categoryId = toolCats[0].category_id;
      editorialScore = toolCats[0].editorial_score ?? null;

      const cat = toolCats[0].categories as unknown as { slug: string } | null;
      if (cat?.slug) {
        const { data: ranked } = await supabase.rpc("get_ranked_tools", {
          category_slug: cat.slug,
        });
        if (ranked) {
          const list = ranked as Array<{ id: string; composite_score: number }>;
          const idx = list.findIndex((r) => r.id === toolId);
          if (idx !== -1) {
            rank = idx + 1;
            compositeScore = list[idx].composite_score;
          }
        }
      }
    }

    const [upRes, downRes, ratingsRes, reviewsRes] = await Promise.all([
      supabase.from("votes").select("*", { count: "exact", head: true }).eq("tool_id", toolId).eq("value", 1),
      supabase.from("votes").select("*", { count: "exact", head: true }).eq("tool_id", toolId).eq("value", -1),
      supabase.from("reviews").select("rating").eq("tool_id", toolId),
      supabase.from("reviews")
        .select("id, rating, body, created_at, profiles(email)")
        .eq("tool_id", toolId)
        .order("created_at", { ascending: false })
        .limit(20),
    ]);

    const upvotes = upRes.count ?? 0;
    const downvotes = downRes.count ?? 0;
    const ratings = ratingsRes.data ?? [];
    const avgRating = ratings.length > 0
      ? ratings.reduce((s, r) => s + r.rating, 0) / ratings.length
      : null;

    stats = { upvotes, downvotes, totalVotes: upvotes + downvotes, avgRating, reviewCount: ratings.length };
    reviews = (reviewsRes.data ?? []) as ToolPageData["reviews"];

    if (user && categoryId) {
      const [voteRes, savedRes] = await Promise.all([
        supabase.from("votes").select("value")
          .eq("user_id", user.id).eq("tool_id", toolId).eq("category_id", categoryId).maybeSingle(),
        supabase.from("saved_tools").select("tool_id")
          .eq("user_id", user.id).eq("tool_id", toolId).maybeSingle(),
      ]);
      userVote = (voteRes.data as { value: 1 | -1 } | null)?.value ?? null;
      isSaved = !!savedRes.data;
    }
  }

  return { toolId, categoryId, editorialScore, compositeScore, rank, stats, reviews, userVote, isSaved, userId: user?.id };
}
