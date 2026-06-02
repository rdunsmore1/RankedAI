"use client";

import { useState, useTransition } from "react";
import { createClient } from "@/lib/supabase/client";

interface VoteButtonsProps {
  toolId: string;
  categoryId: string;
  initialUpvotes: number;
  initialDownvotes: number;
  userVote: 1 | -1 | null;
  userId?: string;
  onAuthRequired?: () => void;
}

export default function VoteButtons({
  toolId, categoryId, initialUpvotes, initialDownvotes,
  userVote: initialUserVote, userId, onAuthRequired,
}: VoteButtonsProps) {
  const [upvotes, setUpvotes] = useState(initialUpvotes);
  const [downvotes, setDownvotes] = useState(initialDownvotes);
  const [currentVote, setCurrentVote] = useState<1 | -1 | null>(initialUserVote);
  const [isPending, startTransition] = useTransition();

  const handleVote = (value: 1 | -1) => {
    if (!userId) { onAuthRequired?.(); return; }
    const prevVote = currentVote, prevUp = upvotes, prevDown = downvotes;
    let newVote: 1 | -1 | null = value;
    let newUp = upvotes, newDown = downvotes;
    if (currentVote === value) {
      newVote = null;
      if (value === 1) newUp--; else newDown--;
    } else {
      if (currentVote === 1) newUp--;
      if (currentVote === -1) newDown--;
      if (value === 1) newUp++; else newDown++;
    }
    setCurrentVote(newVote); setUpvotes(newUp); setDownvotes(newDown);
    startTransition(async () => {
      const supabase = createClient();
      try {
        if (newVote === null)
          await supabase.from("votes").delete().match({ user_id: userId, tool_id: toolId, category_id: categoryId });
        else if (prevVote !== null)
          await supabase.from("votes").update({ value: newVote }).match({ user_id: userId, tool_id: toolId, category_id: categoryId });
        else
          await supabase.from("votes").insert({ user_id: userId, tool_id: toolId, category_id: categoryId, value: newVote });
      } catch {
        setCurrentVote(prevVote); setUpvotes(prevUp); setDownvotes(prevDown);
      }
    });
  };

  const base = "flex items-center gap-1 px-2 py-1.5 rounded text-xs font-medium transition-all min-w-[40px] min-h-[36px] justify-center border";
  return (
    <div className="flex items-center gap-1">
      <button onClick={() => handleVote(1)} disabled={isPending} title={userId ? "Upvote" : "Sign in to vote"}
        className={`${base} ${currentVote === 1
          ? "bg-[#6B1E2E]/10 text-[#6B1E2E] border-[#6B1E2E]/30"
          : "bg-transparent text-[#8A7F74] border-[#D9CFC4] hover:border-[#6B1E2E]/30 hover:text-[#6B1E2E]"}`}>
        <span>▲</span><span className="tabular-nums">{upvotes}</span>
      </button>
      <button onClick={() => handleVote(-1)} disabled={isPending} title={userId ? "Downvote" : "Sign in to vote"}
        className={`${base} ${currentVote === -1
          ? "bg-red-50 text-red-600 border-red-200"
          : "bg-transparent text-[#8A7F74] border-[#D9CFC4] hover:border-red-200 hover:text-red-500"}`}>
        <span>▼</span><span className="tabular-nums">{downvotes}</span>
      </button>
    </div>
  );
}
