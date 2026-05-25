"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Category } from "@/types/database";

interface CategoryTabsProps {
  categories: Category[];
  activeSlug?: string;
  onTabChange?: (slug: string) => void;
  linkMode?: boolean;
}

export default function CategoryTabs({
  categories,
  activeSlug,
  onTabChange,
  linkMode = false,
}: CategoryTabsProps) {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const activeTabRef = useRef<HTMLButtonElement | HTMLAnchorElement | null>(null);

  // Scroll active tab into view
  useEffect(() => {
    if (activeTabRef.current && containerRef.current) {
      const tab = activeTabRef.current;
      const container = containerRef.current;
      const tabLeft = tab.offsetLeft;
      const tabWidth = tab.offsetWidth;
      const containerWidth = container.offsetWidth;
      const scrollLeft = tabLeft - containerWidth / 2 + tabWidth / 2;
      container.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
  }, [activeSlug]);

  return (
    <div
      ref={containerRef}
      className="flex gap-1 overflow-x-auto scrollbar-hide pb-1"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      {categories.map((cat) => {
        const isActive = activeSlug
          ? cat.slug === activeSlug
          : pathname === `/${cat.slug}`;

        const tabClass = `flex items-center gap-1.5 px-4 py-2 rounded-pill text-sm font-semibold whitespace-nowrap transition-all relative shrink-0 ${
          isActive
            ? "bg-[#00D4FF]/15 text-[#00D4FF] border border-[#00D4FF]/30"
            : "text-[#8888A0] hover:text-[#F0F0F5] hover:bg-[#1E1E2E] border border-transparent"
        }`;

        if (linkMode) {
          return (
            <Link key={cat.id} href={`/${cat.slug}`} className={tabClass}>
              <span>{cat.icon}</span>
              <span className="hidden sm:inline">{cat.name.split(" ")[0]}</span>
            </Link>
          );
        }

        return (
          <button
            key={cat.id}
            onClick={() => onTabChange?.(cat.slug)}
            className={tabClass}
          >
            <span>{cat.icon}</span>
            <span>{cat.name.split(" & ")[0]}</span>
          </button>
        );
      })}
    </div>
  );
}
