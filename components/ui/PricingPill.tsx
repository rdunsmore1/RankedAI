"use client";

interface PricingPillProps {
  model: string | null;
  size?: "sm" | "md";
}

const CONFIG: Record<string, { label: string; color: string; bg: string; border: string }> = {
  Free:     { label: "Free",     color: "#2D6A4F", bg: "rgba(45,106,79,0.08)",   border: "rgba(45,106,79,0.25)"  },
  Freemium: { label: "Freemium", color: "#1B3A5C", bg: "rgba(27,58,92,0.07)",    border: "rgba(27,58,92,0.22)"   },
  Paid:     { label: "Paid",     color: "#A0522D", bg: "rgba(160,82,45,0.08)",   border: "rgba(160,82,45,0.25)"  },
  API:      { label: "API",      color: "#6B1E2E", bg: "rgba(107,30,46,0.07)",   border: "rgba(107,30,46,0.22)"  },
};

export default function PricingPill({ model, size = "sm" }: PricingPillProps) {
  if (!model) return null;
  const cfg = CONFIG[model] ?? { label: model, color: "#8A7F74", bg: "rgba(138,127,116,0.08)", border: "rgba(138,127,116,0.25)" };
  const sizeClass = size === "sm" ? "text-[10px] px-2 py-0.5" : "text-[11px] px-2.5 py-1";

  return (
    <span
      className={`inline-flex items-center font-semibold rounded-pill whitespace-nowrap border ${sizeClass}`}
      style={{ color: cfg.color, background: cfg.bg, borderColor: cfg.border }}
    >
      {cfg.label}
    </span>
  );
}
