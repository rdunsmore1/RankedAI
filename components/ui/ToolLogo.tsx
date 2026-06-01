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
  "claude":              "/logos/claude-icon.png",
  "chatgpt":             "/logos/chatgpt-icon.png",
  "chatgpt-o3":          "/logos/chatgpt-icon.png",
  "dalle-3":             "/logos/dalle-icon.png",
  "gemini":              "/logos/gemini-icon.png",
  "grok":                "/logos/grok-icon.png",
  "github-copilot":      "/logos/copilot-icon.png",
  "cursor":              "/logos/cursor-icon.png",
  "jasper":              "/logos/jasper-icon.png",
  "copyai":              "/logos/copyai-icon.png",
  "grammarly":           "/logos/grammarly-icon.png",
  "midjourney":          "/logos/midjourney-icon.png",
  "stable-diffusion-xl": "/logos/stablediffusion-icon.png",
  "adobe-firefly":       "/logos/firefly-icon.png",
  "ideogram":            "/logos/ideogram-icon.png",
  "perplexity":          "/logos/perplexity-icon.png",
  "consensus":           "/logos/consensus-icon.png",
  "wolfram-alpha":       "/logos/wolfram-icon.png",
  "runway-ml":           "/logos/runway-icon.png",
  "kling-ai":            "/logos/kling-icon.png",
  "elevenlabs":          "/logos/elevenlabs-icon.png",
  "heygen":              "/logos/heygen-icon.png",
  "meta-ai":             "/logos/metaai-icon.png",
};

// Logo versions — symbol + wordmark, auto width at fixed 40px height
const TOOL_LOGOS: Record<string, string> = {
  "claude":              "/logos/claude-logo.png",
  "chatgpt":             "/logos/chatgpt-logo.png",
  "chatgpt-o3":          "/logos/chatgpt-logo.png",
  "dalle-3":             "/logos/dalle-logo.png",
  "gemini":              "/logos/gemini-logo.png",
  "grok":                "/logos/grok-logo.png",
  "github-copilot":      "/logos/copilot-logo.png",
  "cursor":              "/logos/cursor-logo.png",
  "jasper":              "/logos/jasper-logo.png",
  "copyai":              "/logos/copyai-logo.png",
  "grammarly":           "/logos/grammarly-logo.png",
  "midjourney":          "/logos/midjourney-logo.png",
  "stable-diffusion-xl": "/logos/stablediffusion-logo.png",
  "adobe-firefly":       "/logos/firefly-logo.png",
  "ideogram":            "/logos/ideogram-logo.png",
  "perplexity":          "/logos/perplexity-logo.png",
  "consensus":           "/logos/consensus-logo.png",
  "wolfram-alpha":       "/logos/wolfram-logo.png",
  "runway-ml":           "/logos/runway-logo.png",
  "kling-ai":            "/logos/kling-logo.png",
  "elevenlabs":          "/logos/elevenlabs-logo.png",
  "heygen":              "/logos/heygen-logo.png",
  "meta-ai":             "/logos/metaai-logo.png",
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
            style={{ height: "100%", width: "auto", objectFit: "contain" }}
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
