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
  compositeScore, benchmarkScore, communityScore, editorialScore, children,
}: ScoreBreakdownTooltipProps) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const show = () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); setOpen(true); };
  const hide = () => { timeoutRef.current = setTimeout(() => setOpen(false), 120); };

  return (
    <div className="relative inline-flex items-center" onMouseEnter={show} onMouseLeave={hide} onFocus={show} onBlur={hide}>
      {children}
      {open && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 w-52 bg-[#FAF7F2] border border-[#D9CFC4] rounded-card shadow-lg p-3 pointer-events-none animate-fadeIn">
          <div className="text-[11px] font-semibold text-[#1A1A1A] mb-2.5 text-center tracking-tight">Score Breakdown</div>
          <div className="space-y-2">
            <ScoreBar score={benchmarkScore} label="Benchmark (40%)" color="accent" showLabel animated={false} />
            <ScoreBar score={communityScore} label="Community (45%)" color="green"  showLabel animated={false} />
            <ScoreBar score={editorialScore} label="Editorial (15%)"  color="amber"  showLabel animated={false} />
          </div>
          <div className="mt-2.5 pt-2 border-t border-[#D9CFC4] flex justify-between items-center">
            <span className="text-[10px] text-[#8A7F74]">Composite</span>
            <span className="text-[13px] font-semibold tabular-nums text-[#6B1E2E]">{compositeScore.toFixed(1)}</span>
          </div>
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#D9CFC4]" />
        </div>
      )}
    </div>
  );
}
