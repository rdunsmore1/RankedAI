"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import StarRating from "./StarRating";

interface ReviewFormProps {
  toolId: string;
  categoryId: string;
  userId?: string;
  onAuthRequired?: () => void;
  onSuccess?: () => void;
}

export default function ReviewForm({ toolId, categoryId, userId, onAuthRequired, onSuccess }: ReviewFormProps) {
  const [rating, setRating] = useState(0);
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userId) { onAuthRequired?.(); return; }
    if (rating === 0) { setError("Please select a rating"); return; }

    setLoading(true);
    setError(null);

    const supabase = createClient();
    const { error: err } = await supabase.from("reviews").insert({
      user_id: userId,
      tool_id: toolId,
      category_id: categoryId,
      rating,
      body: body.trim() || null,
    });

    setLoading(false);
    if (err) {
      setError(err.message.includes("unique") ? "You've already reviewed this tool in this category." : err.message);
    } else {
      setRating(0);
      setBody("");
      onSuccess?.();
    }
  };

  if (!userId) {
    return (
      <div className="bg-[#13131A] border border-[#1E1E2E] rounded-card p-4 text-center">
        <p className="text-sm text-[#8888A0] mb-3">Sign in to leave a review</p>
        <button
          onClick={onAuthRequired}
          className="text-sm font-semibold text-[#00D4FF] hover:underline"
        >
          Sign in →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-[#13131A] border border-[#1E1E2E] rounded-card p-4 space-y-3">
      <h3 className="font-syne font-semibold text-sm text-[#F0F0F5]">Write a Review</h3>
      <div className="flex items-center gap-2">
        <StarRating value={rating} onChange={setRating} size="lg" />
        <span className="text-xs text-[#8888A0]">{rating > 0 ? `${rating}/5` : "Select rating"}</span>
      </div>
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Share your experience with this tool... (optional)"
        rows={3}
        maxLength={1000}
        className="w-full bg-[#0A0A0F] border border-[#1E1E2E] rounded-lg px-3 py-2 text-sm text-[#F0F0F5] placeholder-[#8888A0] focus:border-[#00D4FF]/50 focus:outline-none transition-colors resize-none"
      />
      {error && <p className="text-red-400 text-xs">{error}</p>}
      <button
        type="submit"
        disabled={loading || rating === 0}
        className="px-4 py-2 bg-[#00D4FF] text-[#0A0A0F] font-syne font-bold text-sm rounded-lg hover:bg-[#00c4ef] transition-colors disabled:opacity-50"
      >
        {loading ? "Submitting..." : "Submit Review"}
      </button>
    </form>
  );
}
