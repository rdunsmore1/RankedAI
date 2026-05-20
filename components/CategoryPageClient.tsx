"use client";

import { useState } from "react";
import Link from "next/link";
import RankingCard from "@/components/ui/RankingCard";
import SponsoredCard from "@/components/ui/SponsoredCard";
import CategoryTabs from "@/components/ui/CategoryTabs";
import AuthModal from "@/components/ui/AuthModal";
import PricingPill from "@/components/ui/PricingPill";
import AffiliateBanner from "@/components/ui/AffiliateBanner";
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

export default function CategoryPageClient({
  category,
  categories,
  tools,
  userId,
}: CategoryPageClientProps) {
  const [pricingFilter, setPricingFilter] = useState<PricingFilter>("All");
  const [sortMode, setSortMode] = useState<SortMode>("top");
  const [authOpen, setAuthOpen] = useState(false);
  const [page, setPage] = useState(1);
  const PAGE_SIZE = 20;

  const sponsored = tools.find((t) => t.is_sponsored);
  let organic = tools.filter((t) => !t.is_sponsored);

  // Filter
  if (pricingFilter !== "All") {
    organic = organic.filter((t) => t.pricing_model === pricingFilter);
  }

  // Sort
  if (sortMode === "votes") {
    organic = [...organic].sort((a, b) => Number(b.total_votes) - Number(a.total_votes));
  } else if (sortMode === "newest") {
    organic = [...organic].sort(
      (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
  }

  const paginated = organic.slice(0, page * PAGE_SIZE);
  const hasMore = organic.length > page * PAGE_SIZE;

  return (
    <>
      {/* Category header */}
      <div className="border-b border-[#1E1E2E] bg-[#0A0A0F]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-8 pb-6">
          <div className="flex items-center gap-2 text-xs text-[#8888A0] mb-3">
            <Link href="/" className="hover:text-[#F0F0F5] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#F0F0F5]">{category.name}</span>
          </div>
          <div className="flex items-center gap-3 mb-5">
            <span className="text-3xl">{category.icon}</span>
            <div>
              <h1 className="font-syne font-bold text-2xl text-[#F0F0F5]">{category.name}</h1>
              {category.description && (
                <p className="text-xs text-[#8888A0] mt-0.5">{category.description}</p>
              )}
            </div>
            <span className="ml-auto font-mono text-sm text-[#8888A0]">
              {organic.length} tools
            </span>
          </div>

          {/* Category tabs navigation */}
          <CategoryTabs categories={categories} activeSlug={category.slug} linkMode />
        </div>
      </div>

      {/* Filters */}
      <div className="sticky top-16 z-30 bg-[#0A0A0F]/95 backdrop-blur-xl border-b border-[#1E1E2E]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-3 flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-1.5 flex-wrap">
            {PRICING_FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => { setPricingFilter(f); setPage(1); }}
                className={`text-xs px-3 py-1.5 rounded-pill font-semibold transition-colors ${
                  pricingFilter === f
                    ? "bg-[#00D4FF]/15 text-[#00D4FF] border border-[#00D4FF]/30"
                    : "text-[#8888A0] hover:text-[#F0F0F5] border border-[#1E1E2E] hover:border-[#8888A0]"
                }`}
              >
                {f === "All" ? "All Pricing" : <PricingPill model={f} />}
              </button>
            ))}
          </div>
          <div className="ml-auto flex items-center gap-2">
            <span className="text-xs text-[#8888A0] hidden sm:block">Sort:</span>
            {(["top", "votes", "newest"] as SortMode[]).map((s) => (
              <button
                key={s}
                onClick={() => { setSortMode(s); setPage(1); }}
                className={`text-xs px-3 py-1.5 rounded-pill transition-colors ${
                  sortMode === s
                    ? "text-[#F0F0F5] font-semibold"
                    : "text-[#8888A0] hover:text-[#F0F0F5]"
                }`}
              >
                {s === "top" ? "Top Rated" : s === "votes" ? "Most Voted" : "Newest"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tool list */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-6">
        <AffiliateBanner />
        <div className="space-y-2">
          {sponsored && pricingFilter === "All" && (
            <SponsoredCard
              tool={sponsored}
              userId={userId}
              onAuthRequired={() => setAuthOpen(true)}
            />
          )}

          {paginated.map((tool, i) => (
            <RankingCard
              key={tool.id}
              tool={tool}
              rank={tool.rank}
              staggerIndex={i % 5}
              userId={userId}
              onAuthRequired={() => setAuthOpen(true)}
            />
          ))}

          {paginated.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[#8888A0] text-sm">No tools match the current filter.</p>
              <button
                onClick={() => setPricingFilter("All")}
                className="mt-2 text-sm text-[#00D4FF] hover:underline"
              >
                Clear filter
              </button>
            </div>
          )}
        </div>

        {hasMore && (
          <div className="text-center mt-6">
            <button
              onClick={() => setPage((p) => p + 1)}
              className="px-6 py-2.5 bg-[#13131A] border border-[#1E1E2E] text-sm font-semibold text-[#8888A0] hover:text-[#F0F0F5] rounded-lg transition-colors"
            >
              Load more
            </button>
          </div>
        )}
      </div>

      <AuthModal
        open={authOpen}
        onClose={() => setAuthOpen(false)}
        message="Sign in to vote for your favorite AI tools."
      />
    </>
  );
}
