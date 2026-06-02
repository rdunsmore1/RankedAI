import { createClient } from "@/lib/supabase/server";
import { RankedTool, Category } from "@/types/database";

export async function getToolCount(): Promise<number> {
  const supabase = await createClient();
  const { count } = await supabase
    .from("tools")
    .select("*", { count: "exact", head: true });
  return count ?? 0;
}

export async function getCategories(): Promise<Category[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .order("sort_order");
  if (error) return [];
  return data ?? [];
}

export async function getRankedTools(categorySlug: string, userId?: string): Promise<RankedTool[]> {
  const supabase = await createClient();
  const { data, error } = await supabase.rpc("get_ranked_tools", {
    category_slug: categorySlug,
  });
  if (error || !data) return [];

  const tools = data as RankedTool[];

  // Attach user votes if logged in
  if (userId && tools.length > 0) {
    const toolIds = tools.map((t) => t.id);
    const categoryId = tools[0]?.category_id;
    const { data: votes } = await supabase
      .from("votes")
      .select("tool_id, value")
      .eq("user_id", userId)
      .eq("category_id", categoryId)
      .in("tool_id", toolIds);

    const voteMap = new Map((votes ?? []).map((v) => [v.tool_id, v.value]));
    return tools.map((t, i) => ({
      ...t,
      rank: i + 1,
      user_vote: (voteMap.get(t.id) as 1 | -1 | undefined) ?? null,
      community_component: Number(t.community_score ?? t.benchmark_score ?? 50),
    }));
  }

  return tools.map((t, i) => ({
    ...t,
    rank: i + 1,
    user_vote: null,
    community_component: Number(t.community_score ?? t.benchmark_score ?? 50),
  }));
}

export async function getToolBySlug(slug: string) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("tools")
    .select("*")
    .eq("slug", slug)
    .single();
  if (error) return null;
  return data;
}

export async function getToolCategories(toolId: string) {
  const supabase = await createClient();
  const { data } = await supabase
    .from("tool_categories")
    .select("category_id, editorial_score, categories(name, slug)")
    .eq("tool_id", toolId);
  return data ?? [];
}

export async function getToolReviews(toolId: string, categoryId?: string) {
  const supabase = await createClient();
  let query = supabase
    .from("reviews")
    .select("*, profiles(email)")
    .eq("tool_id", toolId)
    .order("created_at", { ascending: false })
    .limit(20);

  if (categoryId) query = query.eq("category_id", categoryId);
  const { data } = await query;
  return data ?? [];
}

export async function getToolStats(toolId: string) {
  const supabase = await createClient();
  const [votes, reviews] = await Promise.all([
    supabase.from("votes").select("value").eq("tool_id", toolId),
    supabase.from("reviews").select("rating").eq("tool_id", toolId),
  ]);

  const upvotes = (votes.data ?? []).filter((v) => v.value === 1).length;
  const downvotes = (votes.data ?? []).filter((v) => v.value === -1).length;
  const avgRating =
    reviews.data && reviews.data.length > 0
      ? reviews.data.reduce((s, r) => s + r.rating, 0) / reviews.data.length
      : null;

  return { upvotes, downvotes, totalVotes: upvotes + downvotes, avgRating, reviewCount: (reviews.data ?? []).length };
}
