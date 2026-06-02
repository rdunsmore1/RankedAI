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

export default function CategoryTabs({ categories, activeSlug, onTabChange, linkMode = false }: CategoryTabsProps) {
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);
  const activeTabRef = useRef<HTMLButtonElement | HTMLAnchorElement | null>(null);

  useEffect(() => {
    if (activeTabRef.current && containerRef.current) {
      const tab = activeTabRef.current;
      const container = containerRef.current;
      const scrollLeft = tab.offsetLeft - container.offsetWidth / 2 + tab.offsetWidth / 2;
      container.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
  }, [activeSlug]);

  return (
    <div ref={containerRef} className="flex gap-0.5 overflow-x-auto pb-1" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
      {categories.map((cat) => {
        const isActive = activeSlug ? cat.slug === activeSlug : pathname === `/${cat.slug}`;
        const tabClass = `flex items-center gap-1.5 px-4 py-2 text-[13px] font-medium whitespace-nowrap transition-all relative shrink-0 border-b-2 ${
          isActive
            ? "text-[#6B1E2E] border-[#6B1E2E]"
            : "text-[#8A7F74] border-transparent hover:text-[#1A1A1A]"
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
          <button key={cat.id} onClick={() => onTabChange?.(cat.slug)} className={tabClass}>
            <span>{cat.icon}</span>
            <span>{cat.name.split(" & ")[0]}</span>
          </button>
        );
      })}
    </div>
  );
}
