"use client";

import { useState } from "react";
import Link from "next/link";
import RankingCard from "@/components/ui/RankingCard";
import SponsoredCard from "@/components/ui/SponsoredCard";
import CategoryTabs from "@/components/ui/CategoryTabs";
import AuthModal from "@/components/ui/AuthModal";
import PricingPill from "@/components/ui/PricingPill";
import AffiliateBanner from "@/components/ui/AffiliateBanner";
import BenchmarkDisclaimerTooltip from "@/components/ui/BenchmarkDisclaimerTooltip";
import { TOOL_COMPLIANCE } from "@/lib/compliance";
import { Category, RankedTool } from "@/types/database";

const PRICING_FILTERS = ["All", "Free", "Freemium", "Paid", "API"] as const;
type PricingFilter = (typeof PRICING_FILTERS)[number];
type SortMode = "top" | "votes" | "newest";

interface CategoryPageClientProps {
  category: Category;
  categories: Category[];
  tools: RankedTool[];
  userId?: string;
}

export default function CategoryPageClient({ category, categories, tools, userId }: CategoryPageClientProps) {
  const [pricingFilter, setPricingFilter] = useState<PricingFilter>("All");
  const [sortMode, setSortMode] = useState<SortMode>("top");
  const [hipaaOnly, setHipaaOnly] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [page, setPage] = useState(1);
  const PAGE_SIZE = 20;

  const sponsored = tools.find((t) => t.is_sponsored);
  let organic = tools.filter((t) => !t.is_sponsored);
  if (pricingFilter !== "All") organic = organic.filter((t) => t.pricing_model === pricingFilter);
  if (hipaaOnly) organic = organic.filter((t) => TOOL_COMPLIANCE[t.slug]?.includes("hipaa"));
  if (sortMode === "votes") organic = [...organic].sort((a, b) => Number(b.total_votes) - Number(a.total_votes));
  else if (sortMode === "newest") organic = [...organic].sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

  const paginated = organic.slice(0, page * PAGE_SIZE);
  const hasMore = organic.length > page * PAGE_SIZE;

  const pillBtn = (active: boolean) =>
    `text-xs px-3 py-1.5 rounded-pill font-medium transition-colors border ${
      active
        ? "bg-[#6B1E2E]/10 text-[#6B1E2E] border-[#6B1E2E]/25"
        : "text-[#8A7F74] hover:text-[#1A1A1A] border-[#D9CFC4] hover:border-[#B5A898]"
    }`;

  return (
    <>
      {/* Category header */}
      <div className="bg-[#FAF7F2]" style={{ borderBottom: "0.5px solid #D9CFC4" }}>
        <div className="max-w-[1200px] mx-auto px-6 pt-8 pb-6">
          <div className="flex items-center gap-2 text-xs text-[#8A7F74] mb-3">
            <Link href="/" className="hover:text-[#1A1A1A] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#1A1A1A]">{category.name}</span>
          </div>
          <div className="flex items-center gap-3 mb-5">
            <span className="text-3xl">{category.icon}</span>
            <div>
              <h1 className="font-semibold text-2xl text-[#1A1A1A] tracking-tight">{category.name}</h1>
              {category.description && <p className="text-xs text-[#8A7F74] mt-0.5">{category.description}</p>}
            </div>
            <div className="ml-auto flex items-center gap-2">
              {category.slug === "speech-generation" && <BenchmarkDisclaimerTooltip />}
              {category.slug === "ai-meeting-notes" && (
                <BenchmarkDisclaimerTooltip message="Benchmark scores for AI meeting tools are estimated from independent reviews and head-to-head comparisons rather than a single public benchmark source. Compliance badges are based on publicly documented certifications from each vendor. Community votes carry extra weight in this category as a result." />
              )}
              {category.slug === "ai-automation" && (
                <BenchmarkDisclaimerTooltip message="Benchmark scores for AI automation tools are estimated from independent reviews, head-to-head comparisons, and community testing rather than a single public benchmark source. Community votes carry extra weight in this category." />
              )}
              <span className="text-sm text-[#8A7F74] tabular-nums">{organic.length} tools</span>
            </div>
          </div>
          <CategoryTabs categories={categories} activeSlug={category.slug} linkMode />
        </div>
      </div>

      {/* Sticky filter bar */}
      <div className="sticky top-14 z-30 bg-[#FAF7F2]/95 backdrop-blur-[8px]" style={{ borderBottom: "0.5px solid #D9CFC4" }}>
        <div className="max-w-[1200px] mx-auto px-6 py-3 flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-1.5 flex-wrap">
            {PRICING_FILTERS.map((f) => (
              <button key={f} onClick={() => { setPricingFilter(f); setPage(1); }} className={pillBtn(pricingFilter === f)}>
                {f === "All" ? "All Pricing" : <PricingPill model={f} />}
              </button>
            ))}
            {category.slug === "ai-meeting-notes" && (
              <button onClick={() => { setHipaaOnly((v) => !v); setPage(1); }} className={pillBtn(hipaaOnly)}>
                🏥 HIPAA Only
              </button>
            )}
          </div>
          <div className="ml-auto flex items-center gap-1">
            <span className="text-xs text-[#B5A898] hidden sm:block mr-1">Sort:</span>
            {(["top", "votes", "newest"] as SortMode[]).map((s) => (
              <button key={s} onClick={() => { setSortMode(s); setPage(1); }}
                className={`text-xs px-3 py-1.5 rounded-pill transition-colors ${
                  sortMode === s ? "text-[#1A1A1A] font-medium" : "text-[#8A7F74] hover:text-[#1A1A1A]"
                }`}>
                {s === "top" ? "Top Rated" : s === "votes" ? "Most Voted" : "Newest"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tool list */}
      <div className="max-w-[1200px] mx-auto px-6 py-6">
        {category.slug === "ai-meeting-notes" && (
          <div className="flex items-start gap-3 rounded-lg px-4 py-3 mb-4"
            style={{ background: "rgba(45,106,79,0.06)", border: "0.5px solid rgba(45,106,79,0.2)" }}>
            <span className="text-base shrink-0 mt-0.5">🏥</span>
            <p className="text-xs text-[#8A7F74] leading-relaxed">
              <strong className="text-[#2D6A4F]">Healthcare teams:</strong>{" "}
              Filter by the <span className="text-[#2D6A4F] font-semibold">HIPAA</span> badge to find tools safe for clinical conversations involving patient health information (PHI). Only HIPAA compliant tools should be used in patient-facing environments.
            </p>
          </div>
        )}
        <AffiliateBanner />
        <div className="space-y-2">
          {sponsored && pricingFilter === "All" && (
            <SponsoredCard tool={sponsored} userId={userId} onAuthRequired={() => setAuthOpen(true)} />
          )}
          {paginated.map((tool, i) => (
            <RankingCard key={tool.id} tool={tool} rank={tool.rank} staggerIndex={i % 5}
              userId={userId} onAuthRequired={() => setAuthOpen(true)} />
          ))}
          {paginated.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[#8A7F74] text-sm">No tools match the current filter.</p>
              <button onClick={() => setPricingFilter("All")} className="mt-2 text-sm text-[#6B1E2E] hover:underline">
                Clear filter
              </button>
            </div>
          )}
        </div>
        {hasMore && (
          <div className="text-center mt-6">
            <button onClick={() => setPage((p) => p + 1)}
              className="px-6 py-2.5 bg-[#F0EBE1] border text-sm font-medium text-[#8A7F74] hover:text-[#1A1A1A] rounded-lg transition-colors"
              style={{ borderColor: "#D9CFC4", borderWidth: "0.5px" }}>
              Load more
            </button>
          </div>
        )}
      </div>
      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} message="Sign in to vote for your favorite AI tools." />
    </>
  );
}
