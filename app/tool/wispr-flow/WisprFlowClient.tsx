"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import PricingPill from "@/components/ui/PricingPill";
import ScoreBar from "@/components/ui/ScoreBar";
import StarRating from "@/components/ui/StarRating";
import ReviewForm from "@/components/ui/ReviewForm";
import VoteButtons from "@/components/ui/VoteButtons";
import AuthModal from "@/components/ui/AuthModal";
import { createClient } from "@/lib/supabase/client";

interface Props {
  toolId: string | null;
  categoryId: string | null;
  userId?: string;
  stats: {
    upvotes: number;
    downvotes: number;
    totalVotes: number;
    avgRating: number | null;
    reviewCount: number;
  };
  reviews: Array<{
    id: string;
    rating: number;
    body: string | null;
    created_at: string;
    profiles: unknown;
  }>;
  userVote: 1 | -1 | null;
  isSaved: boolean;
  compositeScore: number | null;
  editorialScore: number | null;
  rank: number | null;
}

// Tooltip explaining independently estimated benchmark score
function BenchmarkNote() {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const show = () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); setOpen(true); };
  const hide = () => { timeoutRef.current = setTimeout(() => setOpen(false), 120); };

  return (
    <div
      className="relative inline-flex items-center ml-1 cursor-help"
      onMouseEnter={show} onMouseLeave={hide}
      onFocus={show} onBlur={hide}
      tabIndex={0}
    >
      <span
        className="text-[10px] rounded-full w-3.5 h-3.5 flex items-center justify-center font-mono leading-none select-none"
        style={{ color: "#8A7F74", border: "0.5px solid #D9CFC4" }}
      >
        ?
      </span>
      {open && (
        <div
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 w-64 rounded-card shadow-lg p-3 pointer-events-none"
          style={{ background: "#FAF7F2", border: "0.5px solid #D9CFC4" }}
        >
          <p className="text-[11px] text-[#8A7F74] leading-relaxed">
            Wispr Flow&apos;s benchmark score is independently estimated by the RankedAI™ team based on transcription accuracy, command recognition reliability, and real-world performance across apps. No formal published benchmark exists.
          </p>
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent" style={{ borderTopColor: "#D9CFC4" }} />
        </div>
      )}
    </div>
  );
}

function renderMarkdown(text: string): string {
  return text
    .replace(/^### (.+)$/gm, '<h3 class="font-semibold text-base text-[#1A1A1A] mt-5 mb-2 tracking-tight">$1</h3>')
    .replace(/^## (.+)$/gm,  '<h2 class="font-semibold text-lg text-[#1A1A1A] mt-6 mb-3 tracking-tight">$1</h2>')
    .replace(/^- (.+)$/gm,   '<li class="text-sm text-[#8A7F74] ml-4 list-disc">$1</li>')
    .replace(/(<li.*<\/li>\n?)+/g, '<ul class="space-y-1 mb-3">$&</ul>')
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-[#1A1A1A]">$1</strong>')
    .replace(/^(?!<[h|u|l])(.+)$/gm, '<p class="text-sm text-[#8A7F74] leading-relaxed mb-3">$1</p>')
    .replace(/<p class[^>]+><\/p>/g, "");
}

const DESCRIPTION = `## What is Wispr Flow?
Wispr Flow is an AI-powered voice dictation tool that works system-wide across every app on macOS. Activate it with a keyboard shortcut, speak naturally, and it converts your voice to polished, formatted text directly in any text field — from Notion to Gmail to VS Code.

Unlike basic transcription tools, Wispr Flow uses AI to understand context and intent. It removes filler words, corrects grammar, and formats output to match the register of whatever you are writing — a Slack message reads like a Slack message, a formal email reads like a formal email.

## Key Features
- **System-wide dictation:** Works in any text input on macOS — no copy-paste required
- **AI post-processing:** Removes filler words, fixes grammar, adapts tone to context
- **Custom vocabulary:** Learns your terminology, names, and abbreviations over time
- **Hotkey activation:** Trigger with a configurable keyboard shortcut — no clicking required
- **Command support:** Voice commands for punctuation, formatting, and navigation
- **Multi-language:** Supports 100+ languages with high accuracy

## Who Is It For?
- Writers and content creators who draft long-form content daily
- Professionals who send a high volume of emails and messages
- Developers who dictate code comments, documentation, and Slack replies
- Anyone whose typing speed is a bottleneck to their output
- Users with RSI, carpal tunnel, or other conditions limiting keyboard use

## Honest Assessment
Wispr Flow is the closest thing to a professional dictation tool that actually disappears into your workflow. The system-wide integration is its defining advantage — you speak, and text appears where your cursor is, with no intermediary steps. The AI post-processing produces text that is noticeably cleaner than raw transcription.

It is not flawless: accuracy drops on highly technical vocabulary without custom training, and Windows users are not yet supported. But for macOS-based professionals who write a lot, Wispr Flow meaningfully increases output per hour.`;

export default function WisprFlowClient({
  toolId,
  categoryId,
  userId,
  stats,
  reviews,
  userVote,
  isSaved: initialSaved,
  compositeScore,
  editorialScore,
  rank,
}: Props) {
  const [authOpen, setAuthOpen] = useState(false);
  const [saved, setSaved] = useState(initialSaved);

  const communityScore =
    stats.totalVotes >= 5
      ? Math.min(100, Math.max(0,
          ((stats.upvotes - stats.downvotes) / (stats.totalVotes || 1)) * 50 + 50
        ))
      : (editorialScore ?? 72);

  const displayComposite = compositeScore ?? (editorialScore ?? 72);

  const card = { background: "#F0EBE1", border: "0.5px solid #D9CFC4" };

  const handleSave = async () => {
    if (!userId) { setAuthOpen(true); return; }
    if (!toolId) return;
    const supabase = createClient();
    if (saved) {
      await supabase.from("saved_tools").delete().match({ user_id: userId, tool_id: toolId });
      setSaved(false);
    } else {
      await supabase.from("saved_tools").insert({ user_id: userId, tool_id: toolId });
      setSaved(true);
    }
  };

  const handleCtaClick = async () => {
    if (!toolId) return;
    try {
      await fetch("/api/track-click", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tool_id: toolId,
          category_id: categoryId,
          session_id: typeof window !== "undefined"
            ? (sessionStorage.getItem("sid") ?? undefined)
            : undefined,
        }),
      });
    } catch {}
  };

  return (
    <>
      {/* Breadcrumb */}
      <div style={{ borderBottom: "0.5px solid #D9CFC4" }}>
        <div className="max-w-[1200px] mx-auto px-6 py-4">
          <div className="flex items-center gap-2 text-xs text-[#8A7F74]">
            <Link href="/" className="hover:text-[#1A1A1A] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/writing" className="hover:text-[#1A1A1A] transition-colors">Writing &amp; Content</Link>
            <span>/</span>
            <span className="text-[#1A1A1A]">Wispr Flow</span>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-[1fr_300px] gap-10">

          {/* ── Left column ── */}
          <div>
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center justify-between gap-4 mb-4">
                {/* WF logo placeholder in burgundy */}
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className="rounded-lg flex items-center justify-center font-semibold text-white select-none shrink-0"
                    style={{ width: 56, height: 56, backgroundColor: "#6B1E2E", fontSize: 18, letterSpacing: "0.02em" }}
                  >
                    WF
                  </div>
                </div>
                <button
                  onClick={handleSave}
                  title={saved ? "Remove from saved" : "Save tool"}
                  className="shrink-0 p-2.5 rounded-lg transition-colors text-lg"
                  style={{
                    border: "0.5px solid #D9CFC4",
                    background: saved ? "rgba(107,30,46,0.08)" : "#F0EBE1",
                    color: saved ? "#6B1E2E" : "#8A7F74",
                  }}
                >
                  {saved ? "★" : "☆"}
                </button>
              </div>

              <h1 className="font-semibold text-2xl text-[#1A1A1A] tracking-tight mb-1">
                Wispr Flow
              </h1>
              <p className="text-sm text-[#8A7F74] mb-3 leading-relaxed">
                AI voice dictation that works in every app on macOS
              </p>

              <div className="flex items-center gap-2 flex-wrap">
                <PricingPill model="Freemium" size="md" />
                <Link
                  href="/writing"
                  className="text-xs px-2 py-0.5 rounded-pill transition-colors hover:text-[#6B1E2E]"
                  style={{ background: "#F0EBE1", color: "#8A7F74", border: "0.5px solid #D9CFC4" }}
                >
                  Writing &amp; Content
                </Link>
              </div>
            </div>

            {/* CTA */}
            <a
              href="https://wisprflow.ai"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCtaClick}
              className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-sm rounded-lg hover:bg-[#8B2438] transition-colors mb-2"
              style={{ background: "#6B1E2E", color: "#FAF7F2" }}
            >
              Try Wispr Flow →
            </a>
            <p className="text-[10px] text-[#B5A898] mb-8">
              <Link href="/affiliate-disclosure" className="hover:underline text-[#8A7F74]">
                Affiliate disclosure
              </Link>
            </p>

            {/* Description */}
            <div
              className="mb-8 prose-dark"
              dangerouslySetInnerHTML={{ __html: renderMarkdown(DESCRIPTION) }}
            />

            {/* Pricing card */}
            <div className="rounded-card p-5 mb-6" style={card}>
              <h2 className="font-semibold text-base text-[#1A1A1A] mb-3 tracking-tight">Pricing</h2>
              <div className="flex items-center gap-3 mb-4">
                <PricingPill model="Freemium" size="md" />
                <span className="text-sm text-[#8A7F74]">Free plan · Pro from ~$15/mo</span>
              </div>
              <a
                href="https://wisprflow.ai/pricing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 font-semibold text-sm rounded-lg hover:bg-[#8B2438] transition-colors mb-3"
                style={{ background: "#6B1E2E", color: "#FAF7F2" }}
              >
                View Current Pricing →
              </a>
              <p className="text-[11px] text-[#B5A898] leading-relaxed">
                Pricing may change. Always check the official pricing page for the latest rates.
              </p>
            </div>

            {/* Vote */}
            {toolId && categoryId && (
              <div className="rounded-card p-5 mb-6" style={card}>
                <h2 className="font-semibold text-base text-[#1A1A1A] mb-3 tracking-tight">Rate this tool</h2>
                <VoteButtons
                  toolId={toolId}
                  categoryId={categoryId}
                  initialUpvotes={stats.upvotes}
                  initialDownvotes={stats.downvotes}
                  userVote={userVote}
                  userId={userId}
                  onAuthRequired={() => setAuthOpen(true)}
                />
              </div>
            )}

            {/* Reviews */}
            <div>
              <h2 className="font-semibold text-lg text-[#1A1A1A] mb-4 tracking-tight">
                Reviews ({stats.reviewCount})
              </h2>
              {toolId && categoryId && (
                <div className="mb-4">
                  <ReviewForm
                    toolId={toolId}
                    categoryId={categoryId}
                    userId={userId}
                    onAuthRequired={() => setAuthOpen(true)}
                    onSuccess={() => window.location.reload()}
                  />
                </div>
              )}
              <div className="space-y-3">
                {reviews.map((review) => {
                  const profile = review.profiles as { email: string } | null;
                  const initial = profile?.email?.[0]?.toUpperCase() ?? "?";
                  const displayName = profile?.email?.split("@")[0] ?? "Anonymous";
                  return (
                    <div key={review.id} className="rounded-card p-4" style={card}>
                      <div className="flex items-center gap-2 mb-2">
                        <div
                          className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold text-[#8A7F74]"
                          style={{ background: "#FAF7F2", border: "0.5px solid #D9CFC4" }}
                        >
                          {initial}
                        </div>
                        <span className="text-xs text-[#8A7F74]">{displayName}</span>
                        <StarRating value={review.rating} readonly size="sm" />
                        <span className="ml-auto text-[10px] text-[#B5A898]">
                          {new Date(review.created_at).toLocaleDateString()}
                        </span>
                      </div>
                      {review.body && (
                        <p className="text-sm text-[#8A7F74]">{review.body}</p>
                      )}
                    </div>
                  );
                })}
                {reviews.length === 0 && (
                  <p className="text-sm text-[#8A7F74] text-center py-6">
                    No reviews yet. Be the first!
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* ── Right sidebar ── */}
          <div className="space-y-4">
            {/* Score card */}
            <div className="rounded-card p-5" style={card}>
              <div className="text-center mb-5">
                <div
                  className="font-semibold text-5xl leading-none mb-1 tabular-nums"
                  style={{ color: "#6B1E2E" }}
                >
                  {displayComposite.toFixed(1)}
                </div>
                <div className="text-xs text-[#8A7F74]">Composite Score</div>
              </div>

              <div className="space-y-3">
                {/* Benchmark row with transparency tooltip */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center">
                      <span className="text-[11px] text-[#8A7F74]">Benchmark (40%)</span>
                      <BenchmarkNote />
                    </div>
                    <span className="text-[11px] font-semibold tabular-nums text-[#B5A898]">est.</span>
                  </div>
                  <div
                    className="w-full rounded-pill overflow-hidden h-1.5"
                    style={{ background: "#D9CFC4" }}
                  >
                    <div
                      className="h-1.5 rounded-pill transition-all duration-1000"
                      style={{ width: "68%", background: "#6B1E2E", opacity: 0.5 }}
                    />
                  </div>
                </div>

                <ScoreBar
                  score={communityScore}
                  label="Community (45%)"
                  color="green"
                  showLabel
                  animated
                />
                <ScoreBar
                  score={editorialScore ?? 72}
                  label="Editorial (15%)"
                  color="amber"
                  showLabel
                  animated
                />
              </div>
            </div>

            {/* Rank badge */}
            {rank !== null && (
              <div className="rounded-card p-4" style={card}>
                <h3
                  className="text-[11px] font-semibold uppercase tracking-widest mb-3"
                  style={{ color: "#8A7F74" }}
                >
                  Rankings
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#8A7F74]">Writing &amp; Content</span>
                  <span className="font-semibold text-sm tabular-nums text-[#1A1A1A]">
                    #{rank}
                  </span>
                </div>
              </div>
            )}

            {/* Quick stats */}
            <div className="rounded-card p-4" style={card}>
              <h3
                className="text-[11px] font-semibold uppercase tracking-widest mb-3"
                style={{ color: "#8A7F74" }}
              >
                Stats
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Total Votes", value: stats.totalVotes },
                  { label: "Avg Rating", value: stats.avgRating ? `${stats.avgRating.toFixed(1)}/5` : "—" },
                  { label: "Reviews", value: stats.reviewCount },
                  { label: "Pricing", value: "Freemium" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="text-[10px] text-[#B5A898] mb-0.5">{s.label}</div>
                    <div className="font-semibold text-sm tabular-nums text-[#1A1A1A]">{s.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar CTA */}
            <a
              href="https://wisprflow.ai"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCtaClick}
              className="w-full flex items-center justify-center gap-2 py-3 font-semibold text-sm rounded-lg hover:bg-[#8B2438] transition-colors"
              style={{ background: "#6B1E2E", color: "#FAF7F2" }}
            >
              Try Wispr Flow ↗
            </a>
            <p className="text-[10px] text-[#B5A898] text-center -mt-2">
              <Link href="/affiliate-disclosure" className="hover:underline text-[#8A7F74]">
                Disclosure
              </Link>
            </p>
          </div>
        </div>
      </div>

      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
    </>
  );
}
