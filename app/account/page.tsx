import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import AccountClient from "@/components/AccountClient";

export default async function AccountPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login?redirect=/account");

  const [savedResult, votesResult, reviewsResult, profileResult] = await Promise.all([
    supabase
      .from("saved_tools")
      .select("tool_id, tools(name, slug, tagline, logo_url, pricing_model)")
      .eq("user_id", user.id),
    supabase
      .from("votes")
      .select("value, tool_id, category_id, tools(name, slug), categories(name, slug)")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false })
      .limit(30),
    supabase
      .from("reviews")
      .select("id, rating, body, created_at, tool_id, category_id, tools(name, slug), categories(name, slug)")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false })
      .limit(30),
    supabase.from("profiles").select("*").eq("id", user.id).single(),
  ]);

  // Cast Supabase's inferred joined types to the shape AccountClient expects
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const savedTools = (savedResult.data ?? []) as any[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const votes = (votesResult.data ?? []) as any[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const reviews = (reviewsResult.data ?? []) as any[];

  return (
    <AccountClient
      user={user}
      profile={profileResult.data}
      savedTools={savedTools}
      votes={votes}
      reviews={reviews}
    />
  );
}
