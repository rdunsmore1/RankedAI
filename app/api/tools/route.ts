import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");

  if (!category) {
    return NextResponse.json({ error: "category required" }, { status: 400 });
  }

  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const { data, error } = await supabase.rpc("get_ranked_tools", {
    category_slug: category,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const tools = (data ?? []).map((t: Record<string, unknown>, i: number) => ({
    ...t,
    rank: i + 1,
    user_vote: null,
    community_component: Number(t.community_score ?? t.benchmark_score ?? 50),
  }));

  // Attach user votes
  if (user && tools.length > 0) {
    const categoryId = tools[0]?.category_id;
    const toolIds = tools.map((t: Record<string, unknown>) => t.id);
    const { data: votes } = await supabase
      .from("votes")
      .select("tool_id, value")
      .eq("user_id", user.id)
      .eq("category_id", categoryId)
      .in("tool_id", toolIds);

    const voteMap = new Map((votes ?? []).map((v: { tool_id: string; value: number }) => [v.tool_id, v.value]));
    tools.forEach((t: Record<string, unknown>) => {
      t.user_vote = voteMap.get(t.id as string) ?? null;
    });
  }

  return NextResponse.json(tools);
}
