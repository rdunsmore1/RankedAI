"use client";

import Link from "next/link";

export default function AffiliateBanner() {
  return (
    <div className="flex items-center gap-2 text-[11px] text-[#8A7F74] bg-[#F0EBE1] border border-[#D9CFC4] rounded-lg px-3 py-2 mb-4">
      <span className="shrink-0 text-[#B8963C] font-semibold text-xs">ℹ</span>
      <span>
        RankedAI may earn a commission when you click affiliate links. This never affects our rankings.{" "}
        <Link href="/affiliate-disclosure" className="text-[#6B1E2E] hover:underline">
          Learn more
        </Link>
      </span>
    </div>
  );
}
