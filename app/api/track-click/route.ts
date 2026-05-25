import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => ({}));
  const { tool_id, category_id, session_id } = body;

  if (!tool_id) {
    return NextResponse.json({ error: "tool_id required" }, { status: 400 });
  }

  const supabase = await createClient();
  await supabase.from("click_events").insert({
    tool_id,
    category_id: category_id ?? null,
    session_id: session_id ?? null,
  });

  return NextResponse.json({ ok: true });
}
