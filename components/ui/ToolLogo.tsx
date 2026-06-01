"use client";

/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

interface ToolLogoProps {
  name: string;
  slug?: string;
  logoUrl?: string | null;
  size?: number;
}

const TOOL_FAVICONS: Record<string, string> = {
  "claude":              "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/anthropic-logo.max-500x500.png",
  "chatgpt":             "https://chat.openai.com/favicon.ico",
  "chatgpt-o3":          "https://chat.openai.com/favicon.ico",
  "dalle-3":             "https://chat.openai.com/favicon.ico",
  "gemini":              "https://www.gstatic.com/lamda/images/favicon_v1_150160cddff7f294ce30.svg",
  "grok":                "https://x.ai/favicon.ico",
  "github-copilot":      "https://github.com/favicon.ico",
  "cursor":              "https://cursor.com/favicon.ico",
  "jasper":              "https://assets-global.website-files.com/60e5f2de011b86acebc30db7/60e5f2de011b8631b2c30dbd_jasper-favicon.png",
  "copyai":              "https://framerusercontent.com/images/copy-ai-logo.png",
  "grammarly":           "https://static.grammarly.com/assets/files/cb5e4b2693cf8eb5c1e7706a323e18a2/grammarly_logo.svg",
  // midjourney: intentionally omitted — uses letter fallback per brand policy
  "stable-diffusion-xl": "https://stability.ai/favicon.ico",
  "adobe-firefly":       "https://www.adobe.com/favicon.ico",
  "ideogram":            "https://ideogram.ai/favicon.ico",
  "perplexity":          "https://www.perplexity.ai/favicon.svg",
  "consensus":           "https://consensus.app/images/favicon/favicon-32x32.png",
  "wolfram-alpha":       "https://www.wolframalpha.com/images/favicon_450961.png",
  "runway-ml":           "https://runwayml.com/favicon-32x32.png",
  "kling-ai":            "https://kling.ai/favicon.ico",
  "elevenlabs":          "https://elevenlabs.io/favicon.ico",
  "heygen":              "https://heygen.com/favicon.ico",
  "meta-ai":             "https://ai.meta.com/favicon.ico",
};

// Logos that are dark/black — need a white background to be visible on the dark theme
const NEEDS_WHITE_BG = new Set(["github-copilot", "elevenlabs"]);

// Custom fallback initials when the tool name's first two letters aren't ideal
const CUSTOM_INITIALS: Record<string, string> = {
  "midjourney": "M",
  "copyai":     "CP",
};

// Module-level cache of URLs known to fail — persists across remounts and auth state changes
const failedUrls = new Set<string>();

export default function ToolLogo({ name, slug, logoUrl, size = 48 }: ToolLogoProps) {
  // Midjourney always uses letter fallback — no public favicon available
  const resolvedUrl =
    slug === "midjourney" ? null : (logoUrl ?? (slug ? TOOL_FAVICONS[slug] : null));

  // Initialise from module-level cache so remounts never retry known-broken URLs
  const [imgFailed, setImgFailed] = useState(() =>
    !!resolvedUrl && failedUrls.has(resolvedUrl)
  );

  const showImage = !!resolvedUrl && !imgFailed;
  const needsWhiteBg = !!slug && NEEDS_WHITE_BG.has(slug);
  const padding = Math.round(size * 0.14);
  const initials = (slug ? CUSTOM_INITIALS[slug] : null) ?? name.slice(0, 2).toUpperCase();

  if (showImage) {
    return (
      <div
        className="rounded-lg shrink-0 flex items-center justify-center overflow-hidden"
        style={{
          width: size,
          height: size,
          background: needsWhiteBg ? "#ffffff" : "#13131A",
          padding,
        }}
      >
        <img
          src={resolvedUrl}
          alt={`${name} logo`}
          width={size - padding * 2}
          height={size - padding * 2}
          loading="lazy"
          className="object-contain w-full h-full"
          onError={() => { if (resolvedUrl) failedUrls.add(resolvedUrl); setImgFailed(true); }}
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
