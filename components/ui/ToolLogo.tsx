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
  "claude":              "https://claude.ai/favicon.ico",
  "chatgpt":             "https://chat.openai.com/favicon.ico",
  "chatgpt-o3":          "https://chat.openai.com/favicon.ico",
  "dalle-3":             "https://chat.openai.com/favicon.ico",
  "gemini":              "https://www.gstatic.com/lamda/images/favicon_v1_150160cddff7f294ce30.svg",
  "grok":                "https://x.ai/favicon.ico",
  "github-copilot":      "https://github.com/favicon.ico",
  "cursor":              "https://cursor.com/favicon.ico",
  "jasper":              "https://jasper.ai/favicon.ico",
  "copyai":              "https://copy.ai/favicon.ico",
  "grammarly":           "https://grammarly.com/favicon.ico",
  "midjourney":          "https://midjourney.com/favicon.ico",
  "stable-diffusion-xl": "https://stability.ai/favicon.ico",
  "adobe-firefly":       "https://www.adobe.com/favicon.ico",
  "ideogram":            "https://ideogram.ai/favicon.ico",
  "perplexity":          "https://perplexity.ai/favicon.ico",
  "consensus":           "https://consensus.app/favicon.ico",
  "wolfram-alpha":       "https://wolframalpha.com/favicon.ico",
  "runway-ml":           "https://runwayml.com/favicon.ico",
  "kling-ai":            "https://kling.ai/favicon.ico",
  "elevenlabs":          "https://elevenlabs.io/favicon.ico",
  "heygen":              "https://heygen.com/favicon.ico",
  "meta-ai":             "https://ai.meta.com/favicon.ico",
};

export default function ToolLogo({ name, slug, logoUrl, size = 48 }: ToolLogoProps) {
  const [imgFailed, setImgFailed] = useState(false);

  const resolvedUrl = logoUrl ?? (slug ? TOOL_FAVICONS[slug] : null);
  const showImage = !!resolvedUrl && !imgFailed;

  const padding = Math.round(size * 0.14);
  const initials = name.slice(0, 2).toUpperCase();

  if (showImage) {
    return (
      <div
        className="rounded-lg shrink-0 flex items-center justify-center overflow-hidden"
        style={{ width: size, height: size, background: "#13131A", padding }}
      >
        <img
          src={resolvedUrl}
          alt={`${name} logo`}
          width={size - padding * 2}
          height={size - padding * 2}
          loading="lazy"
          className="object-contain w-full h-full"
          onError={() => setImgFailed(true)}
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
        background: "#13131A",
        color: "#00D4FF",
        fontSize: size * 0.33,
        border: "1px solid rgba(0, 212, 255, 0.2)",
      }}
    >
      {initials}
    </div>
  );
}
