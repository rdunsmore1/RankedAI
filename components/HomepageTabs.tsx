"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import CategoryTabs from "@/components/ui/CategoryTabs";
import RankingCard from "@/components/ui/RankingCard";
import SponsoredCard from "@/components/ui/SponsoredCard";
import AuthModal from "@/components/ui/AuthModal";
import AffiliateBanner from "@/components/ui/AffiliateBanner";
import { Category, RankedTool } from "@/types/database";

interface HomepageTabsProps {
  categories: Category[];
  initialTools: RankedTool[];
  initialCategorySlug: string;
  userId?: string;
}

export default function HomepageTabs({
  categories,
  initialTools,
  initialCategorySlug,
  userId,
}: HomepageTabsProps) {
  const [activeSlug, setActiveSlug] = useState(initialCategorySlug);
  const [toolsCache, setToolsCache] = useState<Record<string, RankedTool[]>>({
    [initialCategorySlug]: initialTools,
  });
  const [loading, setLoading] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);

  const handleTabChange = useCallback(
    async (slug: string) => {
      setActiveSlug(slug);
      if (toolsCache[slug]) return;
      setLoading(true);
      try {
        const res = await fetch(`/api/tools?category=${slug}`);
        const data = await res.json();
        setToolsCache((prev) => ({ ...prev, [slug]: data }));
      } catch {
        setToolsCache((prev) => ({ ...prev, [slug]: [] }));
      } finally {
        setLoading(false);
      }
    },
    [toolsCache]
  );

  const currentTools = toolsCache[activeSlug] ?? [];
  const sponsored = currentTools.find((t) => t.is_sponsored);
  const organic = currentTools.filter((t) => !t.is_sponsored).slice(0, 5);
  const activeCategory = categories.find((c) => c.slug === activeSlug);

  return (
    <>
      {/* Tab bar */}
      <div className="mb-6">
        <CategoryTabs
          categories={categories}
          activeSlug={activeSlug}
          onTabChange={handleTabChange}
        />
      </div>

      <AffiliateBanner />

      {/* Tool list */}
      <div className="space-y-2">
        {loading ? (
          Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="skeleton h-20 rounded-card" />
          ))
        ) : (
          <>
            {sponsored && (
              <SponsoredCard
                tool={sponsored}
                userId={userId}
                onAuthRequired={() => setAuthOpen(true)}
              />
            )}
            {organic.map((tool, i) => (
              <RankingCard
                key={tool.id}
                tool={tool}
                rank={tool.rank}
                staggerIndex={i}
                userId={userId}
                onAuthRequired={() => setAuthOpen(true)}
              />
            ))}
            {organic.length === 0 && !loading && (
              <div className="text-center py-12 text-[#8888A0] text-sm">
                No tools yet in this category.
              </div>
            )}
          </>
        )}
      </div>

      {/* See all link */}
      {organic.length > 0 && (
        <div className="mt-4 text-center">
          <Link
            href={`/${activeSlug}`}
            className="inline-flex items-center gap-1 text-sm font-semibold text-[#8888A0] hover:text-[#00D4FF] transition-colors"
          >
            See all in {activeCategory?.name ?? activeSlug} →
          </Link>
        </div>
      )}

      <AuthModal
        open={authOpen}
        onClose={() => setAuthOpen(false)}
        message="Sign in to vote for your favorite AI tools."
      />
    </>
  );
}
