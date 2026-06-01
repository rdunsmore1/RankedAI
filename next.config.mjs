/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "storage.googleapis.com" },
      { protocol: "https", hostname: "assets-global.website-files.com" },
      { protocol: "https", hostname: "framerusercontent.com" },
      { protocol: "https", hostname: "static.grammarly.com" },
      { protocol: "https", hostname: "www.perplexity.ai" },
      { protocol: "https", hostname: "consensus.app" },
      { protocol: "https", hostname: "www.wolframalpha.com" },
      { protocol: "https", hostname: "runwayml.com" },
      { protocol: "https", hostname: "elevenlabs.io" },
      { protocol: "https", hostname: "github.com" },
      { protocol: "https", hostname: "cursor.com" },
      { protocol: "https", hostname: "heygen.com" },
      { protocol: "https", hostname: "kling.ai" },
      { protocol: "https", hostname: "stability.ai" },
      { protocol: "https", hostname: "www.adobe.com" },
      { protocol: "https", hostname: "ideogram.ai" },
      { protocol: "https", hostname: "x.ai" },
      { protocol: "https", hostname: "jasper.ai" },
      { protocol: "https", hostname: "copy.ai" },
      { protocol: "https", hostname: "chat.openai.com" },
      { protocol: "https", hostname: "www.gstatic.com" },
      { protocol: "https", hostname: "ai.meta.com" },
      { protocol: "https", hostname: "claude.ai" },
    ],
  },
  experimental: {
    serverComponentsExternalPackages: [],
  },
};

export default nextConfig;
