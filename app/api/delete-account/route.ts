import { NextResponse } from "next/server";
import { createClient as createServerClient } from "@/lib/supabase/server";
import { createClient } from "@supabase/supabase-js";

export async function DELETE() {
  // Verify the calling user is authenticated
  const supabase = await createServerClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  // Service role client is required to delete from auth.users
  const admin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { autoRefreshToken: false, persistSession: false } }
  );

  // Delete all personal data rows
  await Promise.all([
    admin.from("saved_tools").delete().eq("user_id", user.id),
    admin.from("reviews").delete().eq("user_id", user.id),
    admin.from("votes").delete().eq("user_id", user.id),
    admin.from("profiles").delete().eq("id", user.id),
  ]);

  // Finally delete the auth user — this invalidates their session
  const { error } = await admin.auth.admin.deleteUser(user.id);
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
