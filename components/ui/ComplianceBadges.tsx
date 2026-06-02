import { TOOL_COMPLIANCE, BADGE_CONFIG } from "@/lib/compliance";

interface ComplianceBadgesProps {
  slug: string;
  size?: "sm" | "md";
}

export default function ComplianceBadges({ slug, size = "sm" }: ComplianceBadgesProps) {
  const badges = TOOL_COMPLIANCE[slug];
  if (!badges || badges.length === 0) return null;

  return (
    <div className="flex items-center gap-1 flex-wrap">
      {badges.map((badge) => {
        const cfg = BADGE_CONFIG[badge];
        return (
          <span
            key={badge}
            className={`font-mono font-semibold rounded-pill ${
              size === "sm" ? "text-[9px] px-1.5 py-0.5" : "text-[11px] px-2 py-1"
            }`}
            style={{ color: cfg.color, background: cfg.bg, border: `1px solid ${cfg.border}` }}
          >
            {cfg.label}
          </span>
        );
      })}
    </div>
  );
}
