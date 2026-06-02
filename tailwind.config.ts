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
        // Ivory Vault palette
        bg:       "#FAF7F2",
        surface:  "#F0EBE1",
        border:   "#D9CFC4",
        primary:  "#6B1E2E",
        "primary-hover": "#8B2438",
        gold:     "#B8963C",
        silver:   "#8A7F74",
        bronze:   "#A0784A",
        ink:      "#1A1A1A",
        muted:    "#8A7F74",
        faint:    "#B5A898",
        success:  "#2D6A4F",
        warning:  "#A0522D",
        info:     "#1B3A5C",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "Inter", "sans-serif"],
        sans:  ["var(--font-inter)", "Inter", "-apple-system", "sans-serif"],
      },
      borderRadius: {
        card: "10px",
        pill: "999px",
      },
      keyframes: {
        fadeInUp: {
          "0%":   { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInLeft: {
          "0%":   { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        fadeInUp:    "fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        fadeIn:      "fadeIn 0.4s ease forwards",
        slideInLeft: "slideInLeft 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};
export default config;
