import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/ui/CookieBanner";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500", "600", "700"],
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${syne.variable} ${dmSans.variable} ${jetbrains.variable} antialiased bg-[#0A0A0F] text-[#F0F0F5]`}
      >
        <Header />
        <main className="relative z-10">{children}</main>
        <Footer />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
