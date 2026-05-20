"use client";

import Link from "next/link";

export default function AffiliateBanner() {
  return (
    <div className="flex items-center gap-2 text-[11px] text-[#8888A0] bg-[#13131A] border border-[#1E1E2E] rounded-lg px-3 py-2 mb-4">
      <span className="shrink-0 text-[#F59E0B] font-bold text-xs">ℹ</span>
      <span>
        RankedAI may earn a commission when you click affiliate links. This never affects our rankings.{" "}
        <Link href="/affiliate-disclosure" className="text-[#00D4FF] hover:underline">
          Learn more
        </Link>
      </span>
    </div>
  );
}
