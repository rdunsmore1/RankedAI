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

function BenchmarkNote() {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const show = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };
  const hide = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div
      className="relative inline-flex items-center ml-1 cursor-help"
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
      tabIndex={0}
    >
      <span className="text-[10px] text-[#8888A0] border border-[#1E1E2E] rounded-full w-3.5 h-3.5 flex items-center justify-center font-mono leading-none select-none">
        ?
      </span>
      {open && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 w-60 bg-[#13131A] border border-[#1E1E2E] rounded-card shadow-2xl p-3 pointer-events-none">
          <p className="text-[11px] text-[#8888A0] leading-relaxed">
            Design &amp; Build tools have no standardised AI benchmark (no SWE-bench equivalent). Scores are editorial — assessed by the RankedAI™ team on output quality, usability, and feature depth.
          </p>
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#1E1E2E]" />
        </div>
      )}
    </div>
  );
}

const DESCRIPTION = `## What is Google Stitch?
Google Stitch is an AI-powered web design tool from Google that generates complete UI layouts from natural language prompts. Powered by Gemini, it lets you describe a website or app screen and receive a fully editable design in seconds — no Figma experience required.

## Key Features
- **Prompt-to-design:** Describe your site in plain language and Stitch generates a complete layout with components, typography, and colour
- **Editable output:** Every generated element is adjustable in a visual drag-and-drop editor
- **Material Design components:** Pre-built Google Material Design components baked in
- **Export-ready:** Export to HTML/CSS or copy components directly into your workflow
- **Responsive by default:** Designs adapt automatically across desktop and mobile

## Who Is It For?
- Solo founders and non-designers who need a web presence quickly
- Product teams prototyping landing pages or new features
- Developers who want a design starting point without the Figma overhead
- Marketers creating one-off campaign pages

## Honest Assessment
Google Stitch is impressive for zero-friction UI generation — particularly for standard informational layouts and landing pages. The Gemini integration makes iterative prompting feel natural. Where it falls short is complex custom designs: heavy interactivity, highly bespoke layouts, or advanced animations require exporting to code and finishing manually.

For simple websites and rapid prototyping, Stitch punches well above its weight as a free tool. It is not yet a Webflow or Framer replacement, but it does not pretend to be.

## Pricing
Google Stitch is currently **free during beta** with no account required to generate designs.`;

function renderMarkdown(text: string): string {
  return text
    .replace(
      /^### (.+)$/gm,
      '<h3 class="font-syne font-bold text-base text-[#F0F0F5] mt-5 mb-2">$1</h3>'
    )
    .replace(
      /^## (.+)$/gm,
      '<h2 class="font-syne font-bold text-lg text-[#F0F0F5] mt-6 mb-3">$1</h2>'
    )
    .replace(
      /^- (.+)$/gm,
      '<li class="text-sm text-[#8888A0] ml-4 list-disc">$1</li>'
    )
    .replace(/(<li.*<\/li>\n?)+/g, '<ul class="space-y-1 mb-3">$&</ul>')
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-[#F0F0F5]">$1</strong>')
    .replace(
      /^(?!<[h|u|l])(.+)$/gm,
      '<p class="text-sm text-[#8888A0] leading-relaxed mb-3">$1</p>'
    )
    .replace(/<p class[^>]+><\/p>/g, "");
}

export default function GoogleStitchClient({
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
      ? Math.min(
          100,
          Math.max(
            0,
            ((stats.upvotes - stats.downvotes) / (stats.totalVotes || 1)) * 50 + 50
          )
        )
      : (editorialScore ?? 70);

  const displayComposite = compositeScore ?? (editorialScore ?? 70);

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
          session_id:
            typeof window !== "undefined"
              ? (sessionStorage.getItem("sid") ?? undefined)
              : undefined,
        }),
      });
    } catch {}
  };

  return (
    <>
      {/* Breadcrumb */}
      <div className="border-b border-[#1E1E2E]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center gap-2 text-xs text-[#8888A0]">
            <Link href="/" className="hover:text-[#F0F0F5] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/design-and-build"
              className="hover:text-[#F0F0F5] transition-colors"
            >
              Design &amp; Build
            </Link>
            <span>/</span>
            <span className="text-[#F0F0F5]">Google Stitch</span>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-8">
        <div className="grid lg:grid-cols-[1fr_320px] gap-8">
          {/* Left: Main content */}
          <div>
            {/* Header */}
            <div className="flex items-start gap-4 mb-6">
              {/* GS logo in burgundy */}
              <div
                className="rounded-lg flex items-center justify-center font-syne font-bold text-white select-none shrink-0"
                style={{ width: 64, height: 64, backgroundColor: "#6B1E2E", fontSize: 22 }}
              >
                GS
              </div>

              <div className="flex-1">
                <h1 className="font-syne font-bold text-2xl text-[#F0F0F5] mb-1">
                  Google Stitch
                </h1>
                <p className="text-sm text-[#8888A0] mb-2">
                  AI-powered web design tool by Google
                </p>
                <div className="flex items-center gap-2 flex-wrap">
                  <PricingPill model="Free" size="md" />
                  {/* Subcategory badge */}
                  <span className="text-xs bg-[#6B1E2E]/20 text-[#C46070] border border-[#6B1E2E]/40 px-2 py-0.5 rounded-pill">
                    Website Builders
                  </span>
                  {/* Category badge */}
                  <Link
                    href="/design-and-build"
                    className="text-xs bg-[#1E1E2E] text-[#8888A0] hover:text-[#F0F0F5] px-2 py-0.5 rounded-pill transition-colors"
                  >
                    Design &amp; Build
                  </Link>
                </div>
              </div>

              <button
                onClick={handleSave}
                title={saved ? "Remove from saved" : "Save tool"}
                className={`shrink-0 p-2.5 rounded-lg border transition-colors ${
                  saved
                    ? "bg-[#00D4FF]/15 border-[#00D4FF]/30 text-[#00D4FF]"
                    : "bg-[#13131A] border-[#1E1E2E] text-[#8888A0] hover:border-[#8888A0]"
                }`}
              >
                {saved ? "★" : "☆"}
              </button>
            </div>

            {/* CTA Button */}
            <a
              href="https://stitch.withgoogle.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCtaClick}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#00D4FF] text-[#0A0A0F] font-syne font-bold text-sm rounded-lg hover:bg-[#00c4ef] transition-colors mb-8"
            >
              Try Google Stitch Free →
            </a>
            <p className="text-[10px] text-[#8888A0] mb-8 -mt-6">
              <Link href="/affiliate-disclosure" className="hover:underline">
                Affiliate disclosure
              </Link>
            </p>

            {/* Description */}
            <div className="mb-8">
              <div
                className="prose-dark"
                dangerouslySetInnerHTML={{ __html: renderMarkdown(DESCRIPTION) }}
              />
            </div>

            {/* Pricing */}
            <div className="bg-[#13131A] border border-[#1E1E2E] rounded-card p-5 mb-6">
              <h2 className="font-syne font-bold text-base text-[#F0F0F5] mb-3">
                Pricing
              </h2>
              <div className="flex items-center gap-3">
                <PricingPill model="Free" size="md" />
                <span className="text-sm text-[#8888A0]">Free during beta</span>
              </div>
              <a
                href="https://stitch.withgoogle.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 mt-3 text-xs text-[#8888A0] hover:text-[#00D4FF] transition-colors"
              >
                Try Google Stitch Free → ↗
              </a>
            </div>

            {/* Vote */}
            {toolId && categoryId && (
              <div className="bg-[#13131A] border border-[#1E1E2E] rounded-card p-5 mb-6">
                <h2 className="font-syne font-bold text-base text-[#F0F0F5] mb-3">
                  Rate this tool
                </h2>
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
              <h2 className="font-syne font-bold text-lg text-[#F0F0F5] mb-4">
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
                  const emailInitial = profile?.email?.[0]?.toUpperCase() ?? "?";
                  const emailDisplay = profile?.email?.split("@")[0] ?? "Anonymous";
                  return (
                    <div
                      key={review.id}
                      className="bg-[#13131A] border border-[#1E1E2E] rounded-card p-4"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-7 h-7 rounded-full bg-[#1E1E2E] flex items-center justify-center text-xs font-bold text-[#8888A0]">
                          {emailInitial}
                        </div>
                        <span className="text-xs text-[#8888A0]">{emailDisplay}</span>
                        <StarRating value={review.rating} readonly size="sm" />
                        <span className="ml-auto text-[10px] text-[#8888A0]">
                          {new Date(review.created_at).toLocaleDateString()}
                        </span>
                      </div>
                      {review.body && (
                        <p className="text-sm text-[#8888A0]">{review.body}</p>
                      )}
                    </div>
                  );
                })}
                {reviews.length === 0 && (
                  <p className="text-sm text-[#8888A0] text-center py-6">
                    No reviews yet. Be the first!
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Right: Sidebar */}
          <div className="space-y-4">
            {/* Score card */}
            <div className="bg-[#13131A] border border-[#1E1E2E] rounded-card p-5">
              <div className="text-center mb-4">
                <div className="font-mono font-black text-5xl text-[#00D4FF] leading-none mb-1">
                  {displayComposite.toFixed(1)}
                </div>
                <div className="text-xs text-[#8888A0]">Composite Score</div>
              </div>

              <div className="space-y-2.5">
                {/* Benchmark row — N/A with transparency tooltip */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center">
                      <span className="text-[11px] text-[#8888A0]">Benchmark</span>
                      <BenchmarkNote />
                    </div>
                    <span className="text-[11px] font-mono font-semibold text-[#8888A0]">
                      N/A
                    </span>
                  </div>
                  <div className="w-full bg-[#1E1E2E] rounded-pill overflow-hidden h-1.5">
                    <div className="h-1.5 rounded-pill bg-[#1E1E2E]" style={{ width: "0%" }} />
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
                  score={editorialScore ?? 70}
                  label="Editorial (15%)"
                  color="amber"
                  showLabel
                  animated
                />
              </div>
            </div>

            {/* Rank badge */}
            {rank !== null && (
              <div className="bg-[#13131A] border border-[#1E1E2E] rounded-card p-4">
                <h3 className="font-syne font-semibold text-xs text-[#8888A0] uppercase tracking-wider mb-3">
                  Rankings
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#8888A0]">Design &amp; Build</span>
                  <span className="font-mono font-bold text-sm text-[#F0F0F5]">
                    #{rank}
                  </span>
                </div>
              </div>
            )}

            {/* Quick stats */}
            <div className="bg-[#13131A] border border-[#1E1E2E] rounded-card p-4">
              <h3 className="font-syne font-semibold text-xs text-[#8888A0] uppercase tracking-wider mb-3">
                Stats
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Total Votes", value: stats.totalVotes },
                  {
                    label: "Avg Rating",
                    value: stats.avgRating
                      ? `${stats.avgRating.toFixed(1)}/5`
                      : "—",
                  },
                  { label: "Reviews", value: stats.reviewCount },
                  { label: "Pricing", value: "Free" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="text-[10px] text-[#8888A0] mb-0.5">{s.label}</div>
                    <div className="font-mono font-semibold text-sm text-[#F0F0F5]">
                      {s.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar CTA */}
            <a
              href="https://stitch.withgoogle.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCtaClick}
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#00D4FF] text-[#0A0A0F] font-syne font-bold text-sm rounded-lg hover:bg-[#00c4ef] transition-colors"
            >
              Try Google Stitch Free ↗
            </a>
            <p className="text-[10px] text-[#8888A0] text-center -mt-2">
              <Link href="/affiliate-disclosure" className="hover:underline">
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
