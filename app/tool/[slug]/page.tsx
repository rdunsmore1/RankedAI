import { notFound } from "next/navigation";
import { getToolBySlug, getToolCategories, getToolStats, getToolReviews } from "@/lib/data";
import { createClient } from "@/lib/supabase/server";
import ToolDetailClient from "@/components/ToolDetailClient";
import type { Metadata } from "next";

export const revalidate = 60;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tool = await getToolBySlug(slug);
  if (!tool) return {};
  return {
    title: `${tool.name} — RankedAI™`,
    description: tool.tagline ?? `${tool.name}: ranked AI tool on AI Hub.`,
  };
}

export default async function ToolDetailPage({ params }: Props) {
  const { slug } = await params;

  const [tool, toolCats] = await Promise.all([
    getToolBySlug(slug),
    (async () => {
      const t = await getToolBySlug(slug);
      if (!t) return [];
      return getToolCategories(t.id);
    })(),
  ]);

  if (!tool) notFound();

  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const firstCatId = toolCats[0]?.category_id ?? null;
  const [stats, reviews, userVote, savedCheck] = await Promise.all([
    getToolStats(tool.id),
    getToolReviews(tool.id, firstCatId ?? undefined),
    user && firstCatId
      ? supabase
          .from("votes")
          .select("value")
          .eq("user_id", user.id)
          .eq("tool_id", tool.id)
          .eq("category_id", firstCatId)
          .maybeSingle()
      : Promise.resolve({ data: null }),
    user
      ? supabase
          .from("saved_tools")
          .select("tool_id")
          .eq("user_id", user.id)
          .eq("tool_id", tool.id)
          .maybeSingle()
      : Promise.resolve({ data: null }),
  ]);

  // Get ranked positions
  const rankData: Array<{ category: string; rank: number; composite_score: number }> = [];
  for (const tc of toolCats) {
    const cat = tc.categories as unknown as { name: string; slug: string } | null;
    if (!cat) continue;
    const { data: ranked } = await supabase.rpc("get_ranked_tools", {
      category_slug: cat.slug,
    });
    if (ranked) {
      const idx = (ranked as Array<{ id: string }>).findIndex((r) => r.id === tool.id);
      if (idx !== -1) {
        rankData.push({
          category: cat.name,
          rank: idx + 1,
          composite_score: (ranked[idx] as { composite_score: number }).composite_score,
        });
      }
    }
  }

  return (
    <ToolDetailClient
      tool={tool}
      toolCategories={toolCats}
      stats={stats}
      reviews={reviews}
      rankData={rankData}
      userId={user?.id}
      userVote={(userVote?.data as { value: 1 | -1 } | null)?.value ?? null}
      isSaved={!!savedCheck?.data}
      firstCategoryId={firstCatId}
    />
  );
}
