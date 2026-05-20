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
  accent: "bg-[#00D4FF]",
  amber: "bg-[#F59E0B]",
  green: "bg-[#22C55E]",
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

  const heights = { sm: "h-1", md: "h-1.5", lg: "h-2" };
  const clampedScore = Math.max(0, Math.min(100, score));

  return (
    <div ref={ref} className="w-full">
      {(showLabel || label) && (
        <div className="flex justify-between items-center mb-1">
          {label && <span className="text-[11px] text-[#8888A0]">{label}</span>}
          {showLabel && (
            <span className="text-[11px] font-mono font-semibold text-[#F0F0F5]">
              {clampedScore.toFixed(0)}
            </span>
          )}
        </div>
      )}
      <div className={`w-full bg-[#1E1E2E] rounded-pill overflow-hidden ${heights[size]}`}>
        <div
          className={`${heights[size]} rounded-pill ${COLOR_MAP[color]} transition-all duration-1000 ease-out`}
          style={{ width: visible ? `${clampedScore}%` : "0%" }}
        />
      </div>
    </div>
  );
}
