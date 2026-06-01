"use client";

import Link from "next/link";
import ToolLogo from "./ToolLogo";
import PricingPill from "./PricingPill";
import ScoreBar from "./ScoreBar";
import ScoreBreakdownTooltip from "./ScoreBreakdownTooltip";
import VoteButtons from "./VoteButtons";
import { RankedTool } from "@/types/database";

interface RankingCardProps {
  tool: RankedTool;
  rank: number;
  staggerIndex?: number;
  userId?: string;
  onAuthRequired?: () => void;
  compact?: boolean;
}

export default function RankingCard({
  tool,
  rank,
  staggerIndex = 0,
  userId,
  onAuthRequired,
  compact = false,
}: RankingCardProps) {
  return (
    <div
      className={`card-hover group bg-[#13131A] border border-[#1E1E2E] rounded-card p-4 flex items-center gap-4 opacity-0 animate-fadeInUp stagger-${Math.min(staggerIndex + 1, 5)}`}
    >
      {/* Rank */}
      <div className="shrink-0 w-8 text-center">
        <span className="font-mono font-bold text-lg text-[#2a2a3e]">
          #{rank}
        </span>
      </div>

      {/* Logo */}
      <ToolLogo name={tool.name} slug={tool.slug} logoUrl={tool.logo_url} size={compact ? 40 : 48} />

      {/* Main info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <Link
            href={`/tool/${tool.slug}`}
            className="font-syne font-semibold text-[#F0F0F5] hover:text-[#00D4FF] transition-colors text-sm leading-tight"
          >
            {tool.name}
          </Link>
          <PricingPill model={tool.pricing_model} />
        </div>
        {tool.tagline && (
          <p className="text-xs text-[#8888A0] mt-0.5 line-clamp-1">{tool.tagline}</p>
        )}
        {!compact && (
          <div className="mt-2">
            <ScoreBreakdownTooltip
              compositeScore={tool.composite_score}
              benchmarkScore={tool.benchmark_score ?? 0}
              communityScore={tool.community_component ?? tool.benchmark_score ?? 0}
              editorialScore={tool.editorial_score ?? 70}
            >
              <div className="w-32 cursor-help">
                <ScoreBar score={tool.composite_score} color="accent" size="sm" />
              </div>
            </ScoreBreakdownTooltip>
          </div>
        )}
      </div>

      {/* Score */}
      <div className="shrink-0 text-right hidden sm:block">
        <ScoreBreakdownTooltip
          compositeScore={tool.composite_score}
          benchmarkScore={tool.benchmark_score ?? 0}
          communityScore={tool.community_component ?? tool.benchmark_score ?? 0}
          editorialScore={tool.editorial_score ?? 70}
        >
          <button className="cursor-help">
            <div className="font-mono font-bold text-2xl text-[#00D4FF] leading-none">
              {tool.composite_score.toFixed(0)}
            </div>
            <div className="text-[10px] text-[#8888A0] mt-0.5">score</div>
          </button>
        </ScoreBreakdownTooltip>
      </div>

      {/* Votes */}
      <div className="shrink-0">
        <VoteButtons
          toolId={tool.id}
          categoryId={tool.category_id}
          initialUpvotes={Number(tool.upvotes)}
          initialDownvotes={Number(tool.downvotes)}
          userVote={tool.user_vote ?? null}
          userId={userId}
          onAuthRequired={onAuthRequired}
        />
      </div>

      {/* View Details */}
      <Link
        href={`/tool/${tool.slug}`}
        className="shrink-0 text-xs font-semibold text-[#8888A0] hover:text-[#00D4FF] transition-colors hidden md:block whitespace-nowrap"
      >
        View →
      </Link>
    </div>
  );
}
