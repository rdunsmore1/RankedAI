"use client";

import { useState } from "react";
import Link from "next/link";
import ToolLogo from "@/components/ui/ToolLogo";
import PricingPill from "@/components/ui/PricingPill";
import ScoreBar from "@/components/ui/ScoreBar";
import StarRating from "@/components/ui/StarRating";
import ReviewForm from "@/components/ui/ReviewForm";
import VoteButtons from "@/components/ui/VoteButtons";
import AuthModal from "@/components/ui/AuthModal";
import { createClient } from "@/lib/supabase/client";

interface ToolDetailClientProps {
  tool: {
    id: string;
    name: string;
    slug: string;
    tagline: string | null;
    description: string | null;
    logo_url: string | null;
    website_url: string | null;
    affiliate_url: string | null;
    pricing_model: string | null;
    price_details: string | null;
    is_sponsored: boolean;
    sponsored_label: string | null;
    benchmark_score: number | null;
  };
  toolCategories: Array<{
    category_id: string;
    editorial_score: number | null;
    categories: unknown;
  }>;
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
  rankData: Array<{ category: string; rank: number; composite_score: number }>;
  userId?: string;
  userVote: 1 | -1 | null;
  isSaved: boolean;
  firstCategoryId: string | null;
}

const PRICING_URLS: Record<string, string> = {
  "claude":               "https://claude.ai/upgrade",
  "chatgpt":              "https://chatgpt.com/pricing/",
  "chatgpt-o3":           "https://chatgpt.com/pricing/",
  "gemini":               "https://one.google.com/about/plans",
  "grok":                 "https://x.ai/grok",
  "github-copilot":       "https://github.com/features/copilot",
  "cursor":               "https://cursor.com/pricing",
  "jasper":               "https://jasper.ai/pricing",
  "copyai":               "https://copy.ai/pricing",
  "grammarly":            "https://grammarly.com/upgrade",
  "midjourney":           "https://midjourney.com/account",
  "dalle-3":              "https://chatgpt.com/pricing/",
  "stable-diffusion-xl":  "https://stability.ai/pricing",
  "adobe-firefly":        "https://firefly.adobe.com/pricing",
  "ideogram":             "https://ideogram.ai/pricing",
  "perplexity":           "https://perplexity.ai/pro",
  "consensus":            "https://consensus.app/home/pricing/",
  "wolfram-alpha":        "https://wolframalpha.com/pro",
  "runway-ml":            "https://runwayml.com/pricing",
  "kling-ai":             "https://kling.ai/pricing",
  "heygen":               "https://heygen.com/pricing",
  "meta-ai":              "https://ai.meta.com",
};

function renderMarkdown(text: string): string {
  return text
    .replace(/^### (.+)$/gm, '<h3 class="font-syne font-bold text-base text-[#F0F0F5] mt-5 mb-2">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 class="font-syne font-bold text-lg text-[#F0F0F5] mt-6 mb-3">$1</h2>')
    .replace(/^- (.+)$/gm, '<li class="text-sm text-[#8888A0] ml-4 list-disc">$1</li>')
    .replace(/(<li.*<\/li>\n?)+/g, '<ul class="space-y-1 mb-3">$&</ul>')
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-[#F0F0F5]">$1</strong>')
    .replace(/^(?!<[h|u|l])(.+)$/gm, '<p class="text-sm text-[#8888A0] leading-relaxed mb-3">$1</p>')
    .replace(/<p class[^>]+><\/p>/g, "");
}

export default function ToolDetailClient({
  tool,
  toolCategories,
  stats,
  reviews,
  rankData,
  userId,
  userVote,
  isSaved,
  firstCategoryId,
}: ToolDetailClientProps) {
  const [authOpen, setAuthOpen] = useState(false);
  const [saved, setSaved] = useState(isSaved);
  const primaryRank = rankData[0];
  const ctaUrl = tool.affiliate_url || tool.website_url || "#";

  const handleSave = async () => {
    if (!userId) { setAuthOpen(true); return; }
    const supabase = createClient();
    if (saved) {
      await supabase.from("saved_tools").delete().match({ user_id: userId, tool_id: tool.id });
      setSaved(false);
    } else {
      await supabase.from("saved_tools").insert({ user_id: userId, tool_id: tool.id });
      setSaved(true);
    }
  };

  const handleCtaClick = async () => {
    try {
      await fetch("/api/track-click", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tool_id: tool.id,
          category_id: firstCategoryId,
          session_id: typeof window !== "undefined" ? (sessionStorage.getItem("sid") ?? undefined) : undefined,
        }),
      });
    } catch {}
  };

  const handleReviewSuccess = () => {
    window.location.reload();
  };

  return (
    <>
      {/* Breadcrumb */}
      <div className="border-b border-[#1E1E2E]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center gap-2 text-xs text-[#8888A0]">
            <Link href="/" className="hover:text-[#F0F0F5] transition-colors">Home</Link>
            <span>/</span>
            {primaryRank && (
              <>
                <Link
                  href={`/${(toolCategories[0]?.categories as { slug: string })?.slug ?? ""}`}
                  className="hover:text-[#F0F0F5] transition-colors"
                >
                  {primaryRank.category}
                </Link>
                <span>/</span>
              </>
            )}
            <span className="text-[#F0F0F5]">{tool.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-8">
        <div className="grid lg:grid-cols-[1fr_320px] gap-8">
          {/* Left: Main content */}
          <div>
            {/* Header */}
            <div className="flex items-start gap-4 mb-6">
              <ToolLogo name={tool.name} slug={tool.slug} logoUrl={tool.logo_url} size={64} variant="logo" />
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <h1 className="font-syne font-bold text-2xl text-[#F0F0F5]">{tool.name}</h1>
                  {tool.is_sponsored && (
                    <span className="text-[10px] font-mono font-semibold bg-[#F59E0B]/15 text-[#F59E0B] border border-[#F59E0B]/30 px-2 py-0.5 rounded-pill">
                      {tool.sponsored_label ?? "Sponsored"}
                    </span>
                  )}
                </div>
                {tool.tagline && (
                  <p className="text-sm text-[#8888A0] mb-2">{tool.tagline}</p>
                )}
                <div className="flex items-center gap-2 flex-wrap">
                  <PricingPill model={tool.pricing_model} size="md" />
                  {toolCategories.map((tc) => {
                    const cat = tc.categories as { name: string; slug: string } | null;
                    if (!cat) return null;
                    return (
                      <Link
                        key={tc.category_id}
                        href={`/${cat.slug}`}
                        className="text-xs bg-[#1E1E2E] text-[#8888A0] hover:text-[#F0F0F5] px-2 py-0.5 rounded-pill transition-colors"
                      >
                        {cat.name}
                      </Link>
                    );
                  })}
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
              href={ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCtaClick}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#00D4FF] text-[#0A0A0F] font-syne font-bold text-sm rounded-lg hover:bg-[#00c4ef] transition-colors mb-8"
            >
              Visit {tool.name} →
            </a>
            <p className="text-[10px] text-[#8888A0] mb-8 -mt-6">
              {tool.affiliate_url && "This link may be an affiliate link. "}
              <Link href="/affiliate-disclosure" className="hover:underline">Affiliate disclosure</Link>
            </p>

            {/* Description */}
            {tool.description && (
              <div className="mb-8">
                <div
                  className="prose-dark"
                  dangerouslySetInnerHTML={{ __html: renderMarkdown(tool.description) }}
                />
              </div>
            )}

            {/* Pricing */}
            <div className="bg-[#13131A] border border-[#1E1E2E] rounded-card p-5 mb-6">
              <h2 className="font-syne font-bold text-base text-[#F0F0F5] mb-3">Pricing</h2>
              <div className="flex items-center gap-3 mb-4">
                <PricingPill model={tool.pricing_model} size="md" />
                {tool.price_details && (
                  <span className="text-sm text-[#8888A0]">{tool.price_details}</span>
                )}
              </div>
              {PRICING_URLS[tool.slug] && (
                <a
                  href={PRICING_URLS[tool.slug]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#00D4FF] text-[#0A0A0F] font-syne font-bold text-sm rounded-lg hover:bg-[#00c4ef] transition-colors mb-3"
                >
                  View Current Pricing →
                </a>
              )}
              <p className="text-[11px] text-[#8888A0] leading-relaxed">
                Pricing may change. Always check the official pricing page for the latest rates.
              </p>
            </div>

            {/* Vote in context */}
            {firstCategoryId && (
              <div className="bg-[#13131A] border border-[#1E1E2E] rounded-card p-5 mb-6">
                <h2 className="font-syne font-bold text-base text-[#F0F0F5] mb-3">
                  Rate this tool
                </h2>
                <VoteButtons
                  toolId={tool.id}
                  categoryId={firstCategoryId}
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

              {firstCategoryId && (
                <div className="mb-4">
                  <ReviewForm
                    toolId={tool.id}
                    categoryId={firstCategoryId}
                    userId={userId}
                    onAuthRequired={() => setAuthOpen(true)}
                    onSuccess={handleReviewSuccess}
                  />
                </div>
              )}

              <div className="space-y-3">
                {reviews.map((review) => {
                  const profile = review.profiles as { email: string } | null;
                  const emailInitial = profile?.email?.[0]?.toUpperCase() ?? "?";
                  const emailDisplay = profile?.email?.split("@")[0] ?? "Anonymous";
                  return (
                    <div key={review.id} className="bg-[#13131A] border border-[#1E1E2E] rounded-card p-4">
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
                      {review.body && <p className="text-sm text-[#8888A0]">{review.body}</p>}
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
            {/* Main score card */}
            {primaryRank && (
              <div className="bg-[#13131A] border border-[#1E1E2E] rounded-card p-5">
                <div className="text-center mb-4">
                  <div className="font-mono font-black text-5xl text-[#00D4FF] leading-none mb-1">
                    {primaryRank.composite_score.toFixed(1)}
                  </div>
                  <div className="text-xs text-[#8888A0]">Composite Score</div>
                </div>

                <div className="space-y-2.5">
                  <ScoreBar score={tool.benchmark_score ?? 0} label="Benchmark (40%)" color="accent" showLabel animated />
                  <ScoreBar
                    score={stats.totalVotes >= 5
                      ? Math.min(100, Math.max(0,
                          ((stats.upvotes - stats.downvotes) / (stats.totalVotes || 1)) * 50 + 50
                        ))
                      : tool.benchmark_score ?? 50}
                    label="Community (45%)"
                    color="green"
                    showLabel
                    animated
                  />
                  <ScoreBar
                    score={toolCategories[0]?.editorial_score ?? 70}
                    label="Editorial (15%)"
                    color="amber"
                    showLabel
                    animated
                  />
                </div>
              </div>
            )}

            {/* Rank badges */}
            {rankData.length > 0 && (
              <div className="bg-[#13131A] border border-[#1E1E2E] rounded-card p-4">
                <h3 className="font-syne font-semibold text-xs text-[#8888A0] uppercase tracking-wider mb-3">Rankings</h3>
                <div className="space-y-2">
                  {rankData.map((rd) => (
                    <div key={rd.category} className="flex items-center justify-between">
                      <span className="text-xs text-[#8888A0]">{rd.category}</span>
                      <span className="font-mono font-bold text-sm text-[#F0F0F5]">#{rd.rank}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Quick stats */}
            <div className="bg-[#13131A] border border-[#1E1E2E] rounded-card p-4">
              <h3 className="font-syne font-semibold text-xs text-[#8888A0] uppercase tracking-wider mb-3">Stats</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Total Votes", value: stats.totalVotes },
                  { label: "Avg Rating", value: stats.avgRating ? `${stats.avgRating.toFixed(1)}/5` : "—" },
                  { label: "Reviews", value: stats.reviewCount },
                  { label: "Pricing", value: tool.pricing_model ?? "—" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="text-[10px] text-[#8888A0] mb-0.5">{s.label}</div>
                    <div className="font-mono font-semibold text-sm text-[#F0F0F5]">{s.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Sidebar */}
            <a
              href={ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCtaClick}
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#00D4FF] text-[#0A0A0F] font-syne font-bold text-sm rounded-lg hover:bg-[#00c4ef] transition-colors"
            >
              Visit {tool.name} ↗
            </a>
            <p className="text-[10px] text-[#8888A0] text-center -mt-2">
              {tool.affiliate_url && "Affiliate link · "}
              <Link href="/affiliate-disclosure" className="hover:underline">Disclosure</Link>
            </p>
          </div>
        </div>
      </div>

      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
    </>
  );
}
