"use client";

import { useState, useRef } from "react";
import ScoreBar from "./ScoreBar";

interface ScoreBreakdownTooltipProps {
  compositeScore: number;
  benchmarkScore: number;
  communityScore: number;
  editorialScore: number;
  children: React.ReactNode;
}

export default function ScoreBreakdownTooltip({
  compositeScore,
  benchmarkScore,
  communityScore,
  editorialScore,
  children,
}: ScoreBreakdownTooltipProps) {
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
      className="relative inline-flex items-center"
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
    >
      {children}
      {open && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 w-52 bg-[#13131A] border border-[#1E1E2E] rounded-card shadow-2xl p-3 pointer-events-none animate-fadeIn">
          <div className="text-[11px] font-syne font-semibold text-[#F0F0F5] mb-2.5 text-center">
            Score Breakdown
          </div>
          <div className="space-y-2">
            <ScoreBar score={benchmarkScore} label="Benchmark (40%)" color="accent" showLabel animated={false} />
            <ScoreBar score={communityScore} label="Community (45%)" color="green" showLabel animated={false} />
            <ScoreBar score={editorialScore} label="Editorial (15%)" color="amber" showLabel animated={false} />
          </div>
          <div className="mt-2.5 pt-2 border-t border-[#1E1E2E] flex justify-between items-center">
            <span className="text-[10px] text-[#8888A0]">Composite</span>
            <span className="text-[13px] font-mono font-bold text-[#00D4FF]">{compositeScore.toFixed(1)}</span>
          </div>
          {/* Arrow */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#1E1E2E]" />
        </div>
      )}
    </div>
  );
}
