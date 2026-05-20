"use client";

interface PricingPillProps {
  model: string | null;
  size?: "sm" | "md";
}

const CONFIG: Record<string, { label: string; className: string }> = {
  Free: { label: "Free", className: "bg-green-500/15 text-green-400 border-green-500/20" },
  Freemium: { label: "Freemium", className: "bg-blue-500/15 text-blue-400 border-blue-500/20" },
  Paid: { label: "Paid", className: "bg-amber-500/15 text-amber-400 border-amber-500/20" },
  API: { label: "API", className: "bg-purple-500/15 text-purple-400 border-purple-500/20" },
};

export default function PricingPill({ model, size = "sm" }: PricingPillProps) {
  if (!model) return null;
  const config = CONFIG[model] ?? { label: model, className: "bg-[#1E1E2E] text-[#8888A0] border-[#1E1E2E]" };
  const sizeClass = size === "sm" ? "text-[10px] px-2 py-0.5" : "text-xs px-2.5 py-1";

  return (
    <span className={`inline-flex items-center font-mono font-semibold border rounded-pill ${config.className} ${sizeClass} whitespace-nowrap`}>
      {config.label}
    </span>
  );
}
