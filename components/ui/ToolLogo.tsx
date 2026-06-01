"use client";

/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useState } from "react";

interface ToolLogoProps {
  name: string;
  slug?: string;
  logoUrl?: string | null;
  size?: number;           // applies to icon variant only
  variant?: "icon" | "logo";
}

// Icon versions — symbol only, fixed square on cards and category pages
const TOOL_ICONS: Record<string, string> = {
  "claude":              "/logos/Claude-icon.png",
  "chatgpt":             "/logos/OpenAi-icon.png",
  "chatgpt-o3":          "/logos/OpenAi-icon.png",
  "dalle-3":             "/logos/OpenAi-icon.png",       // no dedicated DALL-E file
  "gemini":              "/logos/Gemini-icon.png",
  "grok":                "/logos/Grok-icon.png",
  "github-copilot":      "/logos/GitHub-icon.png",
  "cursor":              "/logos/CursorAi-icon.png",
  "jasper":              "/logos/Jasper-logo.png",       // no icon file — using logo
  // copyai: no icon file — falls through to letter fallback
  "grammarly":           "/logos/Grammarly-icon.png",
  "midjourney":          "/logos/MidJourney-icon.png",
  "stable-diffusion-xl": "/logos/StabilityAi-icon.png",
  "adobe-firefly":       "/logos/AdobeFireFly-icon.png",
  "ideogram":            "/logos/Ideogram-icon.png",
  "perplexity":          "/logos/Perplexity-icon.png",
  "consensus":           "/logos/Consensus-icon.png",
  "wolfram-alpha":       "/logos/WolframAlpha-icon.png",
  "runway-ml":           "/logos/Runway-icon.png",
  "kling-ai":            "/logos/Kling-icon.png",
  "elevenlabs":          "/logos/ElevenLabs-icon.png",
  "heygen":              "/logos/HeyGen-icon.jpeg",
  "copyai":              "/logos/copyai-logo.png",        // no icon file — using logo
};


// Logo versions — symbol + wordmark, auto width at fixed 40px height
const TOOL_LOGOS: Record<string, string> = {
  "claude":              "/logos/Claude-logo.png",
  "chatgpt":             "/logos/OpenAi-logo.png",
  "chatgpt-o3":          "/logos/OpenAi-logo.png",
  "dalle-3":             "/logos/OpenAi-logo.png",       // no dedicated DALL-E file
  "gemini":              "/logos/Gemini-logo.png",
  "grok":                "/logos/Grok-logo.png",
  "github-copilot":      "/logos/GitHub-logo.png",
  "cursor":              "/logos/CursorAi-logo.png",
  "jasper":              "/logos/Jasper-logo.png",
  "copyai":              "/logos/copyai-logo.png",
  "grammarly":           "/logos/Grammarly-logo.png",
  "midjourney":          "/logos/MidJourney-logo.png",
  "stable-diffusion-xl": "/logos/StabilityAi-logo.png",
  "adobe-firefly":       "/logos/AdobeFireFly-logo.png",
  "ideogram":            "/logos/Ideogram-logo.png",
  "perplexity":          "/logos/Perplexity-logo.png",
  "consensus":           "/logos/Consensus-logo.png",
  "wolfram-alpha":       "/logos/WolframAlpha-logo.png",
  "runway-ml":           "/logos/RunWay-logo.png",
  "kling-ai":            "/logos/Kling-logo.png",
  "elevenlabs":          "/logos/ElevenLabs-icon.png",    // icon (white) works on dark bg
  "heygen":              "/logos/HeyGen-logo.jpeg",
};

// Add slugs here for any logos whose image is black/dark and needs a white pill
const NEEDS_WHITE_BG = new Set<string>([]);

// Custom initials for tools where name.slice(0,2) isn't ideal
const CUSTOM_INITIALS: Record<string, string> = {
  "copyai":     "CP",
  "midjourney": "MJ",
};

// Module-level: URLs known to fail — survives remounts and auth state changes
const failedUrls = new Set<string>();

export default function ToolLogo({
  name,
  slug,
  logoUrl,
  size = 48,
  variant = "icon",
}: ToolLogoProps) {
  const localMap = variant === "logo" ? TOOL_LOGOS : TOOL_ICONS;
  const resolvedUrl = (slug ? localMap[slug] : null) ?? logoUrl ?? null;

  // Lazy initialiser checks module cache so remounts skip known-broken URLs
  const [imgFailed, setImgFailed] = useState(
    () => !!resolvedUrl && failedUrls.has(resolvedUrl)
  );

  const showImage = !!resolvedUrl && !imgFailed;
  const needsWhiteBg = !!slug && NEEDS_WHITE_BG.has(slug);
  const initials =
    (slug ? CUSTOM_INITIALS[slug] : null) ?? name.slice(0, 2).toUpperCase();

  const handleError = () => {
    if (resolvedUrl) failedUrls.add(resolvedUrl);
    setImgFailed(true);
  };

  // ── Logo variant: auto-width, fixed 40px height ───────────────────────────
  if (variant === "logo") {
    if (showImage) {
      return (
        <div
          className="rounded-lg shrink-0 inline-flex items-center justify-center overflow-hidden"
          style={{
            height: 40,
            padding: "6px 10px",
            background: needsWhiteBg ? "#ffffff" : "#1E1E2E",
            maxWidth: 220,
          }}
        >
          <img
            src={resolvedUrl}
            alt={`${name} logo`}
            style={{ height: "100%", width: "auto", objectFit: "contain", mixBlendMode: "screen" }}
            loading="lazy"
            onError={handleError}
          />
        </div>
      );
    }

    // Logo fallback — pill shape showing initials
    return (
      <div
        className="rounded-lg inline-flex items-center justify-center font-syne font-bold select-none shrink-0"
        style={{
          height: 40,
          padding: "0 14px",
          background: "#1E1E2E",
          color: "#00D4FF",
          fontSize: 15,
          border: "1px solid rgba(0, 212, 255, 0.2)",
          letterSpacing: "0.05em",
        }}
      >
        {initials}
      </div>
    );
  }

  // ── Icon variant: fixed square ────────────────────────────────────────────
  const padding = Math.round(size * 0.14);
  const innerSize = size - padding * 2;

  if (showImage) {
    return (
      <div
        className="rounded-lg shrink-0 flex items-center justify-center overflow-hidden"
        style={{
          width: size,
          height: size,
          background: needsWhiteBg ? "#ffffff" : "#1E1E2E",
        }}
      >
        <Image
          src={resolvedUrl}
          alt={`${name} logo`}
          width={innerSize}
          height={innerSize}
          className="object-contain"
          style={{ mixBlendMode: "screen" }}
          onError={handleError}
        />
      </div>
    );
  }

  return (
    <div
      className="rounded-lg flex items-center justify-center font-syne font-bold select-none shrink-0"
      style={{
        width: size,
        height: size,
        background: "#1E1E2E",
        color: "#00D4FF",
        fontSize: size * 0.33,
        border: "1px solid rgba(0, 212, 255, 0.2)",
      }}
    >
      {initials}
    </div>
  );
}
