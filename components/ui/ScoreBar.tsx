"use client";

import { useEffect, useRef, useState } from "react";

interface ScoreBarProps {
  score: number;
  color?: "accent" | "amber" | "green";
  size?: "sm" | "md" | "lg";
  animated?: boolean;
  showLabel?: boolean;
  label?: string;
}

const COLOR_MAP = {
  accent: "#6B1E2E",
  amber:  "#B8963C",
  green:  "#2D6A4F",
};

export default function ScoreBar({
  score,
  color = "accent",
  size = "md",
  animated = true,
  showLabel = false,
  label,
}: ScoreBarProps) {
  const [visible, setVisible] = useState(!animated);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!animated) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [animated]);

  const heights = { sm: "h-[2px]", md: "h-[3px]", lg: "h-1" };
  const clampedScore = Math.max(0, Math.min(100, score));

  return (
    <div ref={ref} className="w-full">
      {(showLabel || label) && (
        <div className="flex justify-between items-center mb-1">
          {label && <span className="text-[11px] text-[#8A7F74]">{label}</span>}
          {showLabel && (
            <span className="text-[11px] font-medium tabular-nums text-[#1A1A1A]">
              {clampedScore.toFixed(0)}
            </span>
          )}
        </div>
      )}
      <div className={`w-full bg-[#D9CFC4] rounded-full overflow-hidden ${heights[size]}`}>
        <div
          className={`${heights[size]} rounded-full transition-all duration-1000 ease-out`}
          style={{ width: visible ? `${clampedScore}%` : "0%", background: COLOR_MAP[color] }}
        />
      </div>
    </div>
  );
}
