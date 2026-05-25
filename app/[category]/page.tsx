import { notFound } from "next/navigation";
import { getCategories, getRankedTools } from "@/lib/data";
import { createClient } from "@/lib/supabase/server";
import CategoryPageClient from "@/components/CategoryPageClient";
import type { Metadata } from "next";

export const revalidate = 60;

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const categories = await getCategories();
  const cat = categories.find((c) => c.slug === category);
  if (!cat) return {};
  return {
    title: `Best AI for ${cat.name} — RankedAI™`,
    description: `Ranked AI tools for ${cat.name}. Scored by benchmarks, community votes, and editorial quality.`,
  };
}

export async function generateStaticParams() {
  try {
    const { createClient: createSupabase } = await import("@supabase/supabase-js");
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (!url || !key) return [];
    const client = createSupabase(url, key);
    const { data } = await client.from("categories").select("slug").order("sort_order");
    return (data ?? []).map((c: { slug: string }) => ({ category: c.slug }));
  } catch {
    return [];
  }
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const categories = await getCategories();
  const cat = categories.find((c) => c.slug === category);
  if (!cat) notFound();

  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const tools = await getRankedTools(category, user?.id);

  return (
    <CategoryPageClient
      category={cat}
      categories={categories}
      tools={tools}
      userId={user?.id}
    />
  );
}
