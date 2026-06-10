import { createClient } from "@supabase/supabase-js";

// Service-role client — bypasses RLS. Use only in server contexts
// for privileged operations (e.g. admin role checks). Never import
// this from client components.
export function createAdminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    }
  );
}
