import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/ui/CookieBanner";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RankedAI™ — Find the Best AI for Every Task",
  icons: { icon: "/favicon.png", apple: "/logo.png" },
  description:
    "Ranked AI tools by category, benchmarks, and community votes. Find the right AI for coding, writing, image generation, research, and more.",
  openGraph: {
    title: "RankedAI™",
    description: "Find the right AI for the job — ranked by benchmarks and community votes.",
    type: "website",
  },
  other: {
    "impact-site-verification": "5bd362c2-c2ee-4b68-89f7-6b55b768e154",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-[#FAF7F2] text-[#1A1A1A]`}
            style={{ fontFamily: "var(--font-inter), Inter, -apple-system, sans-serif" }}>
        <Header />
        <main className="relative z-10">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
