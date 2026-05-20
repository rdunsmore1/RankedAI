import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0A0A0F",
        surface: "#13131A",
        "surface-2": "#1A1A24",
        accent: "#00D4FF",
        amber: "#F59E0B",
        "text-primary": "#F0F0F5",
        "text-secondary": "#8888A0",
        border: "#1E1E2E",
        "border-accent": "#00D4FF33",
        green: "#22C55E",
        purple: "#A855F7",
      },
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        dm: ["var(--font-dm-sans)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      borderRadius: {
        card: "12px",
        pill: "999px",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(0,212,255,0)" },
          "50%": { boxShadow: "0 0 20px 4px rgba(0,212,255,0.15)" },
        },
        orb1: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(40px, -60px) scale(1.1)" },
          "66%": { transform: "translate(-30px, 40px) scale(0.95)" },
        },
        orb2: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(-50px, 30px) scale(1.05)" },
          "66%": { transform: "translate(40px, -40px) scale(1.1)" },
        },
        countUp: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 0.5s ease forwards",
        fadeIn: "fadeIn 0.4s ease forwards",
        glowPulse: "glowPulse 2s ease-in-out infinite",
        orb1: "orb1 18s ease-in-out infinite",
        orb2: "orb2 22s ease-in-out infinite",
        countUp: "countUp 0.6s ease forwards",
      },
    },
  },
  plugins: [],
};
export default config;
