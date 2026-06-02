"use client";

import { useState } from "react";

export default function BenchmarkDisclaimerTooltip() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-flex items-center">
      <button
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        onClick={() => setOpen((v) => !v)}
        aria-label="Benchmark score methodology"
        className="text-[11px] text-[#8888A0] hover:text-[#00D4FF] transition-colors leading-none select-none"
      >
        ℹ
      </button>

      {open && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 w-72 bg-[#13131A] border border-[#1E1E2E] rounded-card shadow-2xl p-3 animate-fadeIn pointer-events-none">
          <p className="text-[11px] text-[#8888A0] leading-relaxed">
            Benchmark scores for speech generation tools are estimated from independent reviews and MOS scoring rather than a single public benchmark source. Community votes carry extra weight in this category as a result.
          </p>
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#1E1E2E]" />
        </div>
      )}
    </div>
  );
}
