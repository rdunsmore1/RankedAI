export type ComplianceBadge = "soc2" | "hipaa" | "gdpr" | "no-bot";

export const BADGE_CONFIG: Record<
  ComplianceBadge,
  { label: string; color: string; bg: string; border: string }
> = {
  "soc2":   { label: "SOC 2",  color: "#3B82F6", bg: "rgba(59,130,246,0.08)",  border: "rgba(59,130,246,0.25)"  },
  "hipaa":  { label: "HIPAA",  color: "#22C55E", bg: "rgba(34,197,94,0.08)",   border: "rgba(34,197,94,0.25)"   },
  "gdpr":   { label: "GDPR",   color: "#A855F7", bg: "rgba(168,85,247,0.08)",  border: "rgba(168,85,247,0.25)"  },
  "no-bot": { label: "No Bot", color: "#F59E0B", bg: "rgba(245,158,11,0.08)",  border: "rgba(245,158,11,0.25)"  },
};

export const TOOL_COMPLIANCE: Record<string, ComplianceBadge[]> = {
  "fellow-ai":    ["soc2", "hipaa", "gdpr", "no-bot"],
  "fathom":       ["soc2"],
  "fireflies-ai": ["soc2"],
  "otter-ai":     ["soc2"],
  "jamie":        ["gdpr", "no-bot"],
  "granola":      ["no-bot"],
};
