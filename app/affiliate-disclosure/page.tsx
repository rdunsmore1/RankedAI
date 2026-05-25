import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Affiliate Disclosure — RankedAI™",
};

export default function AffiliatePage() {
  return (
    <div className="max-w-[760px] mx-auto px-4 sm:px-6 py-16">
      {/* Header */}
      <div className="mb-10">
        <h1 className="font-syne font-bold text-3xl text-[#F0F0F5] mb-3">Affiliate Disclosure</h1>
        <div className="flex flex-wrap gap-4 text-xs text-[#8888A0] font-mono">
          <span>RankedAI™</span>
          <span>Effective Date: May 25, 2026</span>
        </div>
        <div className="mt-4 h-px bg-gradient-to-r from-[#00D4FF]/40 via-[#A855F7]/20 to-transparent" />
      </div>

      <div className="space-y-6 text-sm text-[#8888A0] leading-relaxed">
        <p>
          RankedAI™ participates in affiliate marketing programs. When you click on certain links on this site and
          make a purchase or sign up for a service, we may receive a commission at no additional cost to you.
        </p>
        <p>
          <strong className="text-[#F0F0F5]">Our rankings are not influenced by affiliate relationships.</strong>{" "}
          Tools are ranked based on a transparent formula combining benchmark scores (40%), community votes (45%),
          and editorial scores (15%). Affiliate commissions have zero weight in this formula.
        </p>
        <p>
          Sponsored tools are clearly labeled with a &ldquo;Sponsored&rdquo; badge and appear above the organic
          rankings in a visually distinct card. This placement is paid for, but the tool&apos;s composite score
          is calculated identically to all other tools. Sponsorship never affects a tool&apos;s ranking number.
        </p>
        <p>
          We only include affiliate links for tools we believe are genuinely useful to our users. We will never
          rank a tool higher or lower based on its affiliate commission rate.
        </p>
        <p>
          If you have questions about our affiliate relationships, please contact us at{" "}
          <a href="mailto:legal@rankdai.com" className="text-[#00D4FF] hover:underline">legal@rankdai.com</a>.
        </p>
      </div>

      {/* Nav */}
      <div className="mt-12 pt-6 border-t border-[#1E1E2E] flex gap-4 text-xs">
        <Link href="/" className="text-[#8888A0] hover:text-[#F0F0F5] transition-colors">← Home</Link>
        <Link href="/privacy" className="text-[#8888A0] hover:text-[#F0F0F5] transition-colors">Privacy Policy</Link>
        <Link href="/terms" className="text-[#8888A0] hover:text-[#F0F0F5] transition-colors">Terms of Service</Link>
        <Link href="/contact" className="text-[#8888A0] hover:text-[#F0F0F5] transition-colors">Contact</Link>
      </div>
    </div>
  );
}
