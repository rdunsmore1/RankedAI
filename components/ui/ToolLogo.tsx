"use client";

import Image from "next/image";
import { useState } from "react";

interface ToolLogoProps {
  name: string;
  slug?: string;
  logoUrl?: string | null;
  size?: number;
  variant?: "icon" | "logo";
}

// Icon versions — symbol only, used on ranking cards and category pages
const TOOL_ICONS: Record<string, string> = {
  "claude":              "/images/tools/claude-icon.png",
  "chatgpt":             "/images/tools/chatgpt-icon.png",
  "chatgpt-o3":          "/images/tools/chatgpt-icon.png",
  "dalle-3":             "/images/tools/dalle-icon.png",
  "gemini":              "/images/tools/gemini-icon.png",
  "grok":                "/images/tools/grok-icon.png",
  "github-copilot":      "/images/tools/copilot-icon.png",
  "cursor":              "/images/tools/cursor-icon.png",
  "jasper":              "/images/tools/jasper-icon.png",
  "copyai":              "/images/tools/copyai-icon.png",
  "grammarly":           "/images/tools/grammarly-icon.png",
  "midjourney":          "/images/tools/midjourney-icon.png",
  "stable-diffusion-xl": "/images/tools/stablediffusion-icon.png",
  "adobe-firefly":       "/images/tools/firefly-icon.png",
  "ideogram":            "/images/tools/ideogram-icon.png",
  "perplexity":          "/images/tools/perplexity-icon.png",
  "consensus":           "/images/tools/consensus-icon.png",
  "wolfram-alpha":       "/images/tools/wolfram-icon.png",
  "runway-ml":           "/images/tools/runway-icon.png",
  "kling-ai":            "/images/tools/kling-icon.png",
  "elevenlabs":          "/images/tools/elevenlabs-icon.png",
  "heygen":              "/images/tools/heygen-icon.png",
  "meta-ai":             "/images/tools/metaai-icon.png",
};

// Logo versions — symbol + wordmark, used on tool detail page headers
const TOOL_LOGOS: Record<string, string> = {
  "claude":              "/images/tools/claude-logo.png",
  "chatgpt":             "/images/tools/chatgpt-logo.png",
  "chatgpt-o3":          "/images/tools/chatgpt-logo.png",
  "dalle-3":             "/images/tools/dalle-logo.png",
  "gemini":              "/images/tools/gemini-logo.png",
  "grok":                "/images/tools/grok-logo.png",
  "github-copilot":      "/images/tools/copilot-logo.png",
  "cursor":              "/images/tools/cursor-logo.png",
  "jasper":              "/images/tools/jasper-logo.png",
  "copyai":              "/images/tools/copyai-logo.png",
  "grammarly":           "/images/tools/grammarly-logo.png",
  "midjourney":          "/images/tools/midjourney-logo.png",
  "stable-diffusion-xl": "/images/tools/stablediffusion-logo.png",
  "adobe-firefly":       "/images/tools/firefly-logo.png",
  "ideogram":            "/images/tools/ideogram-logo.png",
  "perplexity":          "/images/tools/perplexity-logo.png",
  "consensus":           "/images/tools/consensus-logo.png",
  "wolfram-alpha":       "/images/tools/wolfram-logo.png",
  "runway-ml":           "/images/tools/runway-logo.png",
  "kling-ai":            "/images/tools/kling-logo.png",
  "elevenlabs":          "/images/tools/elevenlabs-logo.png",
  "heygen":              "/images/tools/heygen-logo.png",
  "meta-ai":             "/images/tools/metaai-logo.png",
};

// Logos whose images are dark/black — need white background on the dark theme
const NEEDS_WHITE_BG = new Set(["github-copilot", "elevenlabs"]);

// Custom initials for tools where name.slice(0,2) isn't ideal
const CUSTOM_INITIALS: Record<string, string> = {
  "copyai":     "CP",
  "midjourney": "MJ",
};

// Module-level set of URLs known to fail — survives remounts and auth state changes
const failedUrls = new Set<string>();

export default function ToolLogo({
  name,
  slug,
  logoUrl,
  size = 48,
  variant = "icon",
}: ToolLogoProps) {
  // Local maps take priority over DB logo_url
  const localMap = variant === "logo" ? TOOL_LOGOS : TOOL_ICONS;
  const resolvedUrl = (slug ? localMap[slug] : null) ?? logoUrl ?? null;

  // Lazy initialiser checks module cache so remounts skip known-broken URLs
  const [imgFailed, setImgFailed] = useState(
    () => !!resolvedUrl && failedUrls.has(resolvedUrl)
  );

  const showImage = !!resolvedUrl && !imgFailed;
  const needsWhiteBg = !!slug && NEEDS_WHITE_BG.has(slug);
  const padding = Math.round(size * 0.14);
  const innerSize = size - padding * 2;
  const initials =
    (slug ? CUSTOM_INITIALS[slug] : null) ?? name.slice(0, 2).toUpperCase();

  if (showImage) {
    return (
      <div
        className="rounded-lg shrink-0 flex items-center justify-center overflow-hidden"
        style={{
          width: size,
          height: size,
          background: needsWhiteBg ? "#ffffff" : "#13131A",
        }}
      >
        <Image
          src={resolvedUrl}
          alt={`${name} logo`}
          width={innerSize}
          height={innerSize}
          className="object-contain"
          onError={() => {
            failedUrls.add(resolvedUrl);
            setImgFailed(true);
          }}
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
