import { TOOL_COMPLIANCE } from "@/lib/compliance";

const BADGE_STYLES: Record<string, { label: string; color: string; bg: string; border: string }> = {
  "soc2":   { label: "SOC 2",  color: "#1B3A5C", bg: "rgba(27,58,92,0.07)",    border: "rgba(27,58,92,0.22)"   },
  "hipaa":  { label: "HIPAA",  color: "#2D6A4F", bg: "rgba(45,106,79,0.08)",   border: "rgba(45,106,79,0.25)"  },
  "gdpr":   { label: "GDPR",   color: "#6B1E2E", bg: "rgba(107,30,46,0.07)",   border: "rgba(107,30,46,0.22)"  },
  "no-bot": { label: "No Bot", color: "#A0522D", bg: "rgba(160,82,45,0.08)",   border: "rgba(160,82,45,0.25)"  },
};

interface ComplianceBadgesProps {
  slug: string;
  size?: "sm" | "md";
  className?: string;
}

export default function ComplianceBadges({ slug, size = "sm", className = "" }: ComplianceBadgesProps) {
  const badges = TOOL_COMPLIANCE[slug];
  if (!badges || badges.length === 0) return null;

  return (
    <div className={`flex items-center flex-wrap ${size === "sm" ? "gap-1.5" : "gap-2"} ${className}`}>
      {badges.map((badge) => {
        const s = BADGE_STYLES[badge];
        return (
          <span key={badge}
            className={`font-semibold rounded-pill whitespace-nowrap border ${
              size === "sm" ? "text-[9px] px-1.5 py-0.5" : "text-[10px] px-2 py-0.5"
            }`}
            style={{ color: s.color, background: s.bg, borderColor: s.border }}>
            {s.label}
          </span>
        );
      })}
    </div>
  );
}
