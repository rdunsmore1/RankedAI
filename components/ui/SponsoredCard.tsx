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
    <div className="bg-[#FAF7F2] border border-[#B8963C]/40 rounded-card p-4 flex items-center gap-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#B8963C]/4 to-transparent pointer-events-none" />
      <div className="absolute top-2 right-3">
        <span className="text-[10px] font-semibold bg-[#B8963C]/10 text-[#B8963C] border border-[#B8963C]/30 px-2 py-0.5 rounded-pill">
          {tool.sponsored_label ?? "Sponsored"}
        </span>
      </div>
      <div className="shrink-0 w-7 text-center">
        <span className="text-[#B8963C] text-xs font-semibold">★</span>
      </div>
      <ToolLogo name={tool.name} slug={tool.slug} logoUrl={tool.logo_url} size={36} />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <Link href={`/tool/${tool.slug}`}
            className="font-medium text-sm text-[#1A1A1A] hover:text-[#B8963C] transition-colors">
            {tool.name}
          </Link>
          <PricingPill model={tool.pricing_model} />
        </div>
        {tool.tagline && (
          <p className="text-xs text-[#8A7F74] mt-0.5 line-clamp-1">{tool.tagline}</p>
        )}
        <div className="mt-2 w-28">
          <ScoreBar score={tool.composite_score} color="amber" size="sm" />
        </div>
      </div>
      <div className="shrink-0 text-right hidden sm:block">
        <div className="text-lg font-semibold tabular-nums text-[#B8963C] leading-none">
          {tool.composite_score.toFixed(0)}
        </div>
        <div className="text-[10px] text-[#B5A898] mt-0.5">score</div>
      </div>
      <div className="shrink-0">
        <VoteButtons toolId={tool.id} categoryId={tool.category_id}
          initialUpvotes={Number(tool.upvotes)} initialDownvotes={Number(tool.downvotes)}
          userVote={tool.user_vote ?? null} userId={userId} onAuthRequired={onAuthRequired} />
      </div>
      <Link href={`/tool/${tool.slug}`}
        className="shrink-0 text-xs text-[#8A7F74] hover:text-[#B8963C] transition-colors hidden md:block">
        View →
      </Link>
    </div>
  );
}
