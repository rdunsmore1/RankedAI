"use client";

/* eslint-disable @next/next/no-img-element */
interface ToolLogoProps {
  name: string;
  logoUrl: string | null;
  size?: number;
}

const INITIALS_COLORS: Record<string, string> = {
  C: "#00D4FF",
  G: "#F59E0B",
  J: "#A855F7",
  M: "#22C55E",
  P: "#F97316",
  W: "#3B82F6",
  S: "#EC4899",
  E: "#10B981",
  R: "#8B5CF6",
  H: "#EF4444",
};

export default function ToolLogo({ name, logoUrl, size = 48 }: ToolLogoProps) {
  const initial = name.charAt(0).toUpperCase();
  const color = INITIALS_COLORS[initial] ?? "#8888A0";

  if (logoUrl) {
    const needsLightBg = logoUrl.includes("elevenlabs");
    return (
      <div
        className="rounded-lg shrink-0 flex items-center justify-center overflow-hidden"
        style={{
          width: size,
          height: size,
          background: needsLightBg ? "#ffffff" : "transparent",
          padding: needsLightBg ? size * 0.1 : 0,
        }}
      >
        <img
          src={logoUrl}
          alt={name}
          width={size}
          height={size}
          className="object-contain w-full h-full"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      </div>
    );
  }

  return (
    <div
      className="rounded-lg flex items-center justify-center font-syne font-bold text-[#0A0A0F] select-none shrink-0"
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        fontSize: size * 0.4,
      }}
    >
      {initial}
    </div>
  );
}
