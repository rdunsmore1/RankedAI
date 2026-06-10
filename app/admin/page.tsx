import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import AdminClient from "@/components/AdminClient";

export default async function AdminPage() {
  // Step 1: get the authenticated user via the cookie-based server client
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login?redirect=/admin");

  // Step 2: check admin role via service-role client (bypasses RLS)
  const admin = createAdminClient();
  const { data: profile } = await admin
    .from("profiles")
    .select("role, is_admin")
    .eq("id", user.id)
    .single();

  const isAdmin =
    profile?.role === "admin" || profile?.is_admin === true;

  if (!isAdmin) redirect("/");

  // Step 3: fetch admin data (also via service-role so RLS never blocks)
  const [toolsResult, categoriesResult, clicksResult] = await Promise.all([
    admin.from("tools").select("*").order("name"),
    admin.from("categories").select("*").order("sort_order"),
    admin
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
