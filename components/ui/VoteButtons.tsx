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
  toolId,
  categoryId,
  initialUpvotes,
  initialDownvotes,
  userVote: initialUserVote,
  userId,
  onAuthRequired,
}: VoteButtonsProps) {
  const [upvotes, setUpvotes] = useState(initialUpvotes);
  const [downvotes, setDownvotes] = useState(initialDownvotes);
  const [currentVote, setCurrentVote] = useState<1 | -1 | null>(initialUserVote);
  const [isPending, startTransition] = useTransition();

  const handleVote = (value: 1 | -1) => {
    if (!userId) {
      onAuthRequired?.();
      return;
    }

    const prevVote = currentVote;
    const prevUp = upvotes;
    const prevDown = downvotes;

    // Optimistic update
    let newVote: 1 | -1 | null = value;
    let newUp = upvotes;
    let newDown = downvotes;

    if (currentVote === value) {
      // Un-vote
      newVote = null;
      if (value === 1) newUp--;
      else newDown--;
    } else {
      if (currentVote === 1) newUp--;
      if (currentVote === -1) newDown--;
      if (value === 1) newUp++;
      else newDown++;
    }

    setCurrentVote(newVote);
    setUpvotes(newUp);
    setDownvotes(newDown);

    startTransition(async () => {
      const supabase = createClient();
      try {
        if (newVote === null) {
          await supabase
            .from("votes")
            .delete()
            .match({ user_id: userId, tool_id: toolId, category_id: categoryId });
        } else if (prevVote !== null) {
          await supabase
            .from("votes")
            .update({ value: newVote })
            .match({ user_id: userId, tool_id: toolId, category_id: categoryId });
        } else {
          await supabase.from("votes").insert({
            user_id: userId,
            tool_id: toolId,
            category_id: categoryId,
            value: newVote,
          });
        }
      } catch {
        // Revert on error
        setCurrentVote(prevVote);
        setUpvotes(prevUp);
        setDownvotes(prevDown);
      }
    });
  };

  return (
    <div className="flex items-center gap-1">
      <button
        onClick={() => handleVote(1)}
        disabled={isPending}
        title={userId ? "Upvote" : "Login to vote"}
        className={`flex items-center gap-1 px-2 py-1.5 rounded-lg text-xs font-semibold transition-all min-w-[44px] min-h-[44px] justify-center ${
          currentVote === 1
            ? "bg-[#00D4FF]/20 text-[#00D4FF] border border-[#00D4FF]/40"
            : "bg-[#1E1E2E] text-[#8888A0] border border-transparent hover:border-[#00D4FF]/30 hover:text-[#00D4FF]"
        }`}
      >
        <span className="text-sm">▲</span>
        <span className="font-mono">{upvotes}</span>
      </button>
      <button
        onClick={() => handleVote(-1)}
        disabled={isPending}
        title={userId ? "Downvote" : "Login to vote"}
        className={`flex items-center gap-1 px-2 py-1.5 rounded-lg text-xs font-semibold transition-all min-w-[44px] min-h-[44px] justify-center ${
          currentVote === -1
            ? "bg-red-500/20 text-red-400 border border-red-500/40"
            : "bg-[#1E1E2E] text-[#8888A0] border border-transparent hover:border-red-500/30 hover:text-red-400"
        }`}
      >
        <span className="text-sm">▼</span>
        <span className="font-mono">{downvotes}</span>
      </button>
    </div>
  );
}
