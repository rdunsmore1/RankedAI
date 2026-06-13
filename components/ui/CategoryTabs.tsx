"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  IconCode, IconPencil, IconPhoto, IconMicroscope,
  IconCalculator, IconVideo, IconMicrophone, IconNotes, IconBolt,
} from "@tabler/icons-react";
import { Category } from "@/types/database";

interface CategoryTabsProps {
  categories: Category[];
  activeSlug?: string;
  onTabChange?: (slug: string) => void;
  linkMode?: boolean;
}

const SLUG_ICON: Record<string, React.FC<{ size?: string | number; stroke?: string | number; color?: string }>> = {
  "coding":            IconCode,
  "writing":           IconPencil,
  "image-gen":         IconPhoto,
  "research":          IconMicroscope,
  "math-science":      IconCalculator,
  "video-audio":       IconVideo,
  "speech-generation": IconMicrophone,
  "ai-meeting-notes":  IconNotes,
  "ai-automation":     IconBolt,
};

const SLUG_LABEL: Record<string, string> = {
  "ai-meeting-notes":  "Meeting Notes",
  "design-build":      "Design & Build",
  "design-and-build":  "Design & Build",
  "ai-automation":     "Automation",
  "image-gen":         "Image Gen",
  "speech-generation": "Speech Gen",
};

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
        const Icon = SLUG_ICON[cat.slug];
        const iconColor = isActive ? "#6B1E2E" : "#8A7F74";

        const tabClass = `flex items-center gap-1.5 px-4 py-2 text-[13px] font-medium whitespace-nowrap transition-all relative shrink-0 border-b-2 ${
          isActive ? "text-[#6B1E2E] border-[#6B1E2E]" : "text-[#8A7F74] border-transparent hover:text-[#1A1A1A]"
        }`;

        const content = (
          <>
            {Icon ? (
              <Icon size={15} stroke={1.75} color={iconColor} />
            ) : (
              <span className="text-sm">{cat.icon}</span>
            )}
            <span className={linkMode ? "hidden sm:inline" : undefined}>
              {SLUG_LABEL[cat.slug] ?? cat.name.split(" & ")[0].split(" ")[0]}
            </span>
          </>
        );

        if (linkMode) {
          return (
            <Link key={cat.id} href={`/${cat.slug}`} className={tabClass}>
              {content}
            </Link>
          );
        }

        return (
          <button key={cat.id} onClick={() => onTabChange?.(cat.slug)} className={tabClass}>
            {content}
          </button>
        );
      })}
    </div>
  );
}
