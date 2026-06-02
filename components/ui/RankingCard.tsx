"use client";

import Link from "next/link";
import ToolLogo from "./ToolLogo";
import PricingPill from "./PricingPill";
import ScoreBar from "./ScoreBar";
import ScoreBreakdownTooltip from "./ScoreBreakdownTooltip";
import VoteButtons from "./VoteButtons";
import ComplianceBadges from "./ComplianceBadges";
import { RankedTool } from "@/types/database";

interface RankingCardProps {
  tool: RankedTool;
  rank: number;
  staggerIndex?: number;
  userId?: string;
  onAuthRequired?: () => void;
  compact?: boolean;
}

const RANK_COLOR: Record<number, string> = { 1: "#B8963C", 2: "#8A7F74", 3: "#A0784A" };

export default function RankingCard({ tool, rank, staggerIndex = 0, userId, onAuthRequired, compact = false }: RankingCardProps) {
  const rankColor = RANK_COLOR[rank] ?? "#B5A898";
  const rankWeight = rank <= 3 ? "font-semibold" : "font-normal";

  return (
    <div className={`card-hover group bg-[#F0EBE1] border border-[#D9CFC4] rounded-card p-4 flex items-center gap-4 opacity-0 animate-fadeInUp stagger-${Math.min(staggerIndex + 1, 5)}`}>
      {/* Rank */}
      <div className="shrink-0 w-7 text-center">
        <span className={`text-sm tabular-nums ${rankWeight}`} style={{ color: rankColor }}>
          {rank}
        </span>
      </div>

      {/* Logo */}
      <ToolLogo name={tool.name} slug={tool.slug} logoUrl={tool.logo_url} size={36} />

      {/* Main info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <Link href={`/tool/${tool.slug}`}
            className="font-medium text-sm text-[#1A1A1A] hover:text-[#6B1E2E] transition-colors leading-tight">
            {tool.name}
          </Link>
          <PricingPill model={tool.pricing_model} />
        </div>
        <ComplianceBadges slug={tool.slug} size="sm" className="mt-1.5" />
        {tool.tagline && (
          <p className="text-xs text-[#8A7F74] mt-1 line-clamp-1">{tool.tagline}</p>
        )}
        {!compact && (
          <div className="mt-2">
            <ScoreBreakdownTooltip
              compositeScore={tool.composite_score}
              benchmarkScore={tool.benchmark_score ?? 0}
              communityScore={tool.community_component ?? tool.benchmark_score ?? 0}
              editorialScore={tool.editorial_score ?? 70}>
              <div className="w-28 cursor-help">
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
          editorialScore={tool.editorial_score ?? 70}>
          <button className="cursor-help text-right">
            <div className="text-lg font-semibold tabular-nums leading-none" style={{ color: rank === 1 ? "#6B1E2E" : "#8A7F74" }}>
              {tool.composite_score.toFixed(0)}
            </div>
            <div className="text-[10px] text-[#B5A898] mt-0.5">score</div>
          </button>
        </ScoreBreakdownTooltip>
      </div>

      {/* Votes */}
      <div className="shrink-0">
        <VoteButtons
          toolId={tool.id} categoryId={tool.category_id}
          initialUpvotes={Number(tool.upvotes)} initialDownvotes={Number(tool.downvotes)}
          userVote={tool.user_vote ?? null} userId={userId} onAuthRequired={onAuthRequired} />
      </div>

      {/* View link */}
      <Link href={`/tool/${tool.slug}`}
        className="shrink-0 text-xs text-[#8A7F74] hover:text-[#6B1E2E] transition-colors hidden md:block whitespace-nowrap">
        View →
      </Link>
    </div>
  );
}
