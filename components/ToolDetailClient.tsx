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
import BenchmarkDisclaimerTooltip from "@/components/ui/BenchmarkDisclaimerTooltip";
import ComplianceBadges from "@/components/ui/ComplianceBadges";
import { createClient } from "@/lib/supabase/client";

interface ToolDetailClientProps {
  tool: {
    id: string; name: string; slug: string; tagline: string | null;
    description: string | null; logo_url: string | null; website_url: string | null;
    affiliate_url: string | null; pricing_model: string | null; price_details: string | null;
    is_sponsored: boolean; sponsored_label: string | null; benchmark_score: number | null;
  };
  toolCategories: Array<{ category_id: string; editorial_score: number | null; categories: unknown }>;
  stats: { upvotes: number; downvotes: number; totalVotes: number; avgRating: number | null; reviewCount: number };
  reviews: Array<{ id: string; rating: number; body: string | null; created_at: string; profiles: unknown }>;
  rankData: Array<{ category: string; rank: number; composite_score: number }>;
  userId?: string;
  userVote: 1 | -1 | null;
  isSaved: boolean;
  firstCategoryId: string | null;
}

const PRICING_URLS: Record<string, string> = {
  "claude":              "https://claude.ai/upgrade",
  "chatgpt":             "https://chatgpt.com/pricing/",
  "chatgpt-o3":          "https://chatgpt.com/pricing/",
  "gemini":              "https://one.google.com/about/plans",
  "grok":                "https://x.ai/grok",
  "github-copilot":      "https://github.com/features/copilot",
  "cursor":              "https://cursor.com/pricing",
  "jasper":              "https://jasper.ai/pricing",
  "copyai":              "https://copy.ai/pricing",
  "grammarly":           "https://grammarly.com/upgrade",
  "midjourney":          "https://midjourney.com/account",
  "dalle-3":             "https://chatgpt.com/pricing/",
  "stable-diffusion-xl": "https://stability.ai/pricing",
  "adobe-firefly":       "https://firefly.adobe.com/pricing",
  "ideogram":            "https://ideogram.ai/pricing",
  "perplexity":          "https://perplexity.ai/pro",
  "consensus":           "https://consensus.app/home/pricing/",
  "wolfram-alpha":       "https://wolframalpha.com/pro",
  "runway-ml":           "https://runwayml.com/pricing",
  "kling-ai":            "https://kling.ai/pricing",
  "heygen":              "https://heygen.com/pricing",
  "fish-audio":          "https://fish.audio/pricing",
  "speechma":            "https://speechma.com",
  "fellow-ai":           "https://fellow.ai/pricing",
  "fathom":              "https://fathom.ai/pricing",
  "fireflies-ai":        "https://fireflies.ai/pricing",
  "otter-ai":            "https://otter.ai/pricing",
  "jamie":               "https://meetjamie.ai/pricing",
  "granola":             "https://granola.ai/pricing",
  "google-stitch":       "https://stitch.withgoogle.com",
  "wispr-flow":          "https://wisprflow.ai/pricing",
};

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

export default function ToolDetailClient({
  tool, toolCategories, stats, reviews, rankData, userId, userVote, isSaved, firstCategoryId,
}: ToolDetailClientProps) {
  const [authOpen, setAuthOpen] = useState(false);
  const [saved, setSaved] = useState(isSaved);
  const primaryRank = rankData[0];
  // affiliate_url is intentionally public — users click it directly in the browser
  const ctaUrl = tool.affiliate_url || tool.website_url || "#";
  const isSpeechGen   = toolCategories.some((tc) => (tc.categories as { slug: string } | null)?.slug === "speech-generation");
  const isMeetingNotes = toolCategories.some((tc) => (tc.categories as { slug: string } | null)?.slug === "ai-meeting-notes");

  const handleSave = async () => {
    if (!userId) { setAuthOpen(true); return; }
    const supabase = createClient();
    if (saved) { await supabase.from("saved_tools").delete().match({ user_id: userId, tool_id: tool.id }); setSaved(false); }
    else        { await supabase.from("saved_tools").insert({ user_id: userId, tool_id: tool.id }); setSaved(true); }
  };

  const handleCtaClick = async () => {
    try {
      await fetch("/api/track-click", { method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tool_id: tool.id, category_id: firstCategoryId,
          session_id: typeof window !== "undefined" ? (sessionStorage.getItem("sid") ?? undefined) : undefined }) });
    } catch {}
  };

  const cardClass = "bg-[#F0EBE1] rounded-card p-5 mb-6" ;
  const cardStyle = { border: "0.5px solid #D9CFC4" };

  return (
    <>
      {/* Breadcrumb */}
      <div style={{ borderBottom: "0.5px solid #D9CFC4" }}>
        <div className="max-w-[1200px] mx-auto px-6 py-4">
          <div className="flex items-center gap-2 text-xs text-[#8A7F74]">
            <Link href="/" className="hover:text-[#1A1A1A] transition-colors">Home</Link>
            <span>/</span>
            {primaryRank && (
              <>
                <Link href={`/${(toolCategories[0]?.categories as { slug: string })?.slug ?? ""}`}
                  className="hover:text-[#1A1A1A] transition-colors">{primaryRank.category}</Link>
                <span>/</span>
              </>
            )}
            <span className="text-[#1A1A1A]">{tool.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-[1fr_300px] gap-10">
          {/* Left */}
          <div>
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-3 min-w-0">
                  <ToolLogo name={tool.name} slug={tool.slug} logoUrl={tool.logo_url} variant="logo" />
                  {tool.is_sponsored && (
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-pill shrink-0"
                      style={{ background: "rgba(184,150,60,0.12)", color: "#B8963C", border: "0.5px solid rgba(184,150,60,0.3)" }}>
                      {tool.sponsored_label ?? "Sponsored"}
                    </span>
                  )}
                </div>
                <button onClick={handleSave} title={saved ? "Remove from saved" : "Save tool"}
                  className={`shrink-0 p-2.5 rounded-lg transition-colors text-lg`}
                  style={{ border: "0.5px solid #D9CFC4", background: saved ? "rgba(107,30,46,0.08)" : "#F0EBE1", color: saved ? "#6B1E2E" : "#8A7F74" }}>
                  {saved ? "★" : "☆"}
                </button>
              </div>
              <h1 className="sr-only">{tool.name}</h1>
              {tool.tagline && <p className="text-sm text-[#8A7F74] mb-3 leading-relaxed">{tool.tagline}</p>}
              <ComplianceBadges slug={tool.slug} size="md" className="mb-3" />
              <div className="flex items-center gap-2 flex-wrap">
                <PricingPill model={tool.pricing_model} size="md" />
                {toolCategories.map((tc) => {
                  const cat = tc.categories as { name: string; slug: string } | null;
                  if (!cat) return null;
                  return (
                    <Link key={tc.category_id} href={`/${cat.slug}`}
                      className="text-xs px-2 py-0.5 rounded-pill transition-colors hover:text-[#6B1E2E]"
                      style={{ background: "#F0EBE1", color: "#8A7F74", border: "0.5px solid #D9CFC4" }}>
                      {cat.name}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* CTA */}
            <a href={ctaUrl} target="_blank" rel="noopener noreferrer" onClick={handleCtaClick}
              className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-sm rounded-lg hover:bg-[#8B2438] transition-colors mb-2"
              style={{ background: "#6B1E2E", color: "#FAF7F2" }}>
              Visit {tool.name} →
            </a>
            <p className="text-[10px] text-[#B5A898] mb-8">
              {tool.affiliate_url && "This link may be an affiliate link. "}
              <Link href="/affiliate-disclosure" className="hover:underline text-[#8A7F74]">Affiliate disclosure</Link>
            </p>

            {/* Description */}
            {tool.description && (
              <div className="mb-8 prose-dark" dangerouslySetInnerHTML={{ __html: renderMarkdown(tool.description) }} />
            )}

            {/* Pricing card */}
            <div className={cardClass} style={cardStyle}>
              <h2 className="font-semibold text-base text-[#1A1A1A] mb-3 tracking-tight">Pricing</h2>
              <div className="flex items-center gap-3 mb-4">
                <PricingPill model={tool.pricing_model} size="md" />
                {tool.price_details && <span className="text-sm text-[#8A7F74]">{tool.price_details}</span>}
              </div>
              {PRICING_URLS[tool.slug] && (
                <a href={PRICING_URLS[tool.slug]} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 font-semibold text-sm rounded-lg hover:bg-[#8B2438] transition-colors mb-3"
                  style={{ background: "#6B1E2E", color: "#FAF7F2" }}>
                  View Current Pricing →
                </a>
              )}
              <p className="text-[11px] text-[#B5A898] leading-relaxed">
                Pricing may change. Always check the official pricing page for the latest rates.
              </p>
            </div>

            {/* Vote */}
            {firstCategoryId && (
              <div className={cardClass} style={cardStyle}>
                <h2 className="font-semibold text-base text-[#1A1A1A] mb-3 tracking-tight">Rate this tool</h2>
                <VoteButtons toolId={tool.id} categoryId={firstCategoryId}
                  initialUpvotes={stats.upvotes} initialDownvotes={stats.downvotes}
                  userVote={userVote} userId={userId} onAuthRequired={() => setAuthOpen(true)} />
              </div>
            )}

            {/* Reviews */}
            <div>
              <h2 className="font-semibold text-lg text-[#1A1A1A] mb-4 tracking-tight">Reviews ({stats.reviewCount})</h2>
              {firstCategoryId && (
                <div className="mb-4">
                  <ReviewForm toolId={tool.id} categoryId={firstCategoryId}
                    userId={userId} onAuthRequired={() => setAuthOpen(true)} onSuccess={() => window.location.reload()} />
                </div>
              )}
              <div className="space-y-3">
                {reviews.map((review) => {
                  const profile = review.profiles as { email: string } | null;
                  const emailInitial = profile?.email?.[0]?.toUpperCase() ?? "?";
                  const emailDisplay = profile?.email?.split("@")[0] ?? "Anonymous";
                  return (
                    <div key={review.id} className="rounded-card p-4" style={{ background: "#F0EBE1", border: "0.5px solid #D9CFC4" }}>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-semibold text-[#6B1E2E]"
                          style={{ background: "rgba(107,30,46,0.09)" }}>
                          {emailInitial}
                        </div>
                        <span className="text-xs text-[#8A7F74]">{emailDisplay}</span>
                        <StarRating value={review.rating} readonly size="sm" />
                        <span className="ml-auto text-[10px] text-[#B5A898]">
                          {new Date(review.created_at).toLocaleDateString()}
                        </span>
                      </div>
                      {review.body && <p className="text-sm text-[#8A7F74]">{review.body}</p>}
                    </div>
                  );
                })}
                {reviews.length === 0 && (
                  <p className="text-sm text-[#8A7F74] text-center py-6">No reviews yet. Be the first!</p>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {primaryRank && (
              <div className="rounded-card p-5" style={{ background: "#F0EBE1", border: "0.5px solid #D9CFC4" }}>
                <div className="text-center mb-4">
                  <div className="font-semibold text-5xl tabular-nums leading-none mb-1" style={{ color: "#6B1E2E" }}>
                    {primaryRank.composite_score.toFixed(1)}
                  </div>
                  <div className="text-xs text-[#8A7F74] flex items-center justify-center gap-1">
                    Composite Score
                    {isSpeechGen && <BenchmarkDisclaimerTooltip />}
                    {isMeetingNotes && (
                      <BenchmarkDisclaimerTooltip message="Benchmark scores for AI meeting tools are estimated from independent reviews and head-to-head comparisons rather than a single public benchmark source. Compliance badges are based on publicly documented certifications from each vendor. Community votes carry extra weight in this category as a result." />
                    )}
                  </div>
                </div>
                <div className="space-y-2.5">
                  <ScoreBar score={tool.benchmark_score ?? 0} label="Benchmark (40%)" color="accent" showLabel animated />
                  <ScoreBar score={stats.totalVotes >= 5
                    ? Math.min(100, Math.max(0, ((stats.upvotes - stats.downvotes) / (stats.totalVotes || 1)) * 50 + 50))
                    : tool.benchmark_score ?? 50}
                    label="Community (45%)" color="green" showLabel animated />
                  <ScoreBar score={toolCategories[0]?.editorial_score ?? 70} label="Editorial (15%)" color="amber" showLabel animated />
                </div>
              </div>
            )}

            {rankData.length > 0 && (
              <div className="rounded-card p-4" style={{ background: "#F0EBE1", border: "0.5px solid #D9CFC4" }}>
                <h3 className="text-[11px] font-semibold text-[#8A7F74] uppercase tracking-widest mb-3">Rankings</h3>
                <div className="space-y-2">
                  {rankData.map((rd) => (
                    <div key={rd.category} className="flex items-center justify-between">
                      <span className="text-xs text-[#8A7F74]">{rd.category}</span>
                      <span className="font-semibold text-sm tabular-nums text-[#1A1A1A]">#{rd.rank}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="rounded-card p-4" style={{ background: "#F0EBE1", border: "0.5px solid #D9CFC4" }}>
              <h3 className="text-[11px] font-semibold text-[#8A7F74] uppercase tracking-widest mb-3">Stats</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Total Votes", value: stats.totalVotes },
                  { label: "Avg Rating", value: stats.avgRating ? `${stats.avgRating.toFixed(1)}/5` : "—" },
                  { label: "Reviews", value: stats.reviewCount },
                  { label: "Pricing", value: tool.pricing_model ?? "—" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="text-[10px] text-[#B5A898] mb-0.5">{s.label}</div>
                    <div className="font-medium text-sm tabular-nums text-[#1A1A1A]">{s.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <a href={ctaUrl} target="_blank" rel="noopener noreferrer" onClick={handleCtaClick}
              className="w-full flex items-center justify-center gap-2 py-3 font-semibold text-sm rounded-lg hover:bg-[#8B2438] transition-colors"
              style={{ background: "#6B1E2E", color: "#FAF7F2" }}>
              Visit {tool.name} ↗
            </a>
            <p className="text-[10px] text-[#B5A898] text-center -mt-2">
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
