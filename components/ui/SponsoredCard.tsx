"use client";

import Link from "next/link";
import ToolLogo from "./ToolLogo";
import PricingPill from "./PricingPill";
import ScoreBar from "./ScoreBar";
import VoteButtons from "./VoteButtons";
import { RankedTool } from "@/types/database";

interface SponsoredCardProps {
  tool: RankedTool;
  userId?: string;
  onAuthRequired?: () => void;
}

export default function SponsoredCard({ tool, userId, onAuthRequired }: SponsoredCardProps) {
  return (
    <div className="bg-[#13131A] border border-[#F59E0B]/30 rounded-card p-4 flex items-center gap-4 relative overflow-hidden">
      {/* Amber glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#F59E0B]/5 to-transparent pointer-events-none" />

      {/* Sponsored badge */}
      <div className="absolute top-2 right-3">
        <span className="text-[10px] font-mono font-semibold bg-[#F59E0B]/15 text-[#F59E0B] border border-[#F59E0B]/30 px-2 py-0.5 rounded-pill">
          {tool.sponsored_label ?? "Sponsored"}
        </span>
      </div>

      {/* Rank — Featured */}
      <div className="shrink-0 w-8 text-center">
        <span className="text-[#F59E0B] text-xs font-bold">★</span>
      </div>

      <ToolLogo name={tool.name} slug={tool.slug} logoUrl={tool.logo_url} size={48} />

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <Link
            href={`/tool/${tool.slug}`}
            className="font-syne font-semibold text-[#F0F0F5] hover:text-[#F59E0B] transition-colors text-sm"
          >
            {tool.name}
          </Link>
          <PricingPill model={tool.pricing_model} />
        </div>
        {tool.tagline && (
          <p className="text-xs text-[#8888A0] mt-0.5 line-clamp-1">{tool.tagline}</p>
        )}
        <div className="mt-2 w-32">
          <ScoreBar score={tool.composite_score} color="amber" size="sm" />
        </div>
      </div>

      <div className="shrink-0 text-right hidden sm:block">
        <div className="font-mono font-bold text-2xl text-[#F59E0B] leading-none">
          {tool.composite_score.toFixed(0)}
        </div>
        <div className="text-[10px] text-[#8888A0] mt-0.5">score</div>
      </div>

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

      <Link
        href={`/tool/${tool.slug}`}
        className="shrink-0 text-xs font-semibold text-[#8888A0] hover:text-[#F59E0B] transition-colors hidden md:block"
      >
        View →
      </Link>
    </div>
  );
}
