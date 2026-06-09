import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import AdminClient from "@/components/AdminClient";

export default async function AdminPage() {
  const supabase = await createClient();

  const { data: { user }, error: userError } = await supabase.auth.getUser();
  console.log("[admin] getUser result:", JSON.stringify({ user: user ? { id: user.id, email: user.email } : null, error: userError?.message }));

  if (!user) redirect("/login?redirect=/admin");

  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  console.log("[admin] profile query result:", JSON.stringify({ profile, error: profileError?.message, code: profileError?.code }));
  console.log("[admin] is_admin value:", (profile as Record<string, unknown> | null)?.is_admin);
  console.log("[admin] role value:", (profile as Record<string, unknown> | null)?.role);

  const isAdmin =
    (profile as Record<string, unknown> | null)?.is_admin === true ||
    (profile as Record<string, unknown> | null)?.role === "admin";

  console.log("[admin] isAdmin check result:", isAdmin, "— redirecting:", !isAdmin);

  if (!isAdmin) redirect("/");

  const [toolsResult, categoriesResult, clicksResult] = await Promise.all([
    supabase.from("tools").select("*").order("name"),
    supabase.from("categories").select("*").order("sort_order"),
    supabase
      .from("click_events")
      .select("tool_id, tools(name, slug)")
      .order("created_at", { ascending: false })
      .limit(1000),
  ]);

  // Aggregate click counts per tool
  const clickMap = new Map<string, { name: string; slug: string; count: number }>();
  for (const click of (clicksResult.data ?? [])) {
    const tool = click.tools as unknown as { name: string; slug: string } | null;
    if (!tool) continue;
    const existing = clickMap.get(click.tool_id) ?? { name: tool.name, slug: tool.slug, count: 0 };
    existing.count++;
    clickMap.set(click.tool_id, existing);
  }
  const clickStats = Array.from(clickMap.values()).sort((a, b) => b.count - a.count);

  return (
    <AdminClient
      tools={toolsResult.data ?? []}
      categories={categoriesResult.data ?? []}
      clickStats={clickStats}
    />
  );
}
