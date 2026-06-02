"use client";

import { useState } from "react";

interface BenchmarkDisclaimerTooltipProps {
  message?: string;
}

const DEFAULT_MESSAGE =
  "Benchmark scores for speech generation tools are estimated from independent reviews and MOS scoring rather than a single public benchmark source. Community votes carry extra weight in this category as a result.";

export default function BenchmarkDisclaimerTooltip({ message = DEFAULT_MESSAGE }: BenchmarkDisclaimerTooltipProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-flex items-center">
      <button
        onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)} onBlur={() => setOpen(false)}
        onClick={() => setOpen((v) => !v)}
        aria-label="Benchmark score methodology"
        className="text-[11px] text-[#B5A898] hover:text-[#6B1E2E] transition-colors leading-none select-none">
        ℹ
      </button>
      {open && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 w-72 bg-[#FAF7F2] border border-[#D9CFC4] rounded-card shadow-lg p-3 animate-fadeIn pointer-events-none">
          <p className="text-[11px] text-[#8A7F74] leading-relaxed">{message}</p>
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#D9CFC4]" />
        </div>
      )}
    </div>
  );
}
