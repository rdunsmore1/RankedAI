import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Affiliate Disclosure — RankedAI™" };

export default function AffiliatePage() {
  return (
    <div className="max-w-[720px] mx-auto px-6 py-16">
      <div className="mb-10">
        <div className="text-[11px] font-semibold uppercase tracking-widest text-[#8A7F74] mb-3">Legal</div>
        <h1 className="font-semibold text-3xl text-[#1A1A1A] tracking-tight mb-3">Affiliate Disclosure</h1>
        <div className="flex flex-wrap gap-4 text-xs text-[#8A7F74]">
          <span>RankedAI™</span><span>Effective Date: May 25, 2026</span>
        </div>
        <div className="mt-4 h-px bg-[#D9CFC4]" />
      </div>
      <div className="space-y-5 text-sm text-[#8A7F74] leading-[1.8]">
        <p>RankedAI™ participates in affiliate marketing programs. When you click on certain links on this site and make a purchase or sign up for a service, we may receive a commission at no additional cost to you.</p>
        <p><strong className="text-[#1A1A1A]">Our rankings are not influenced by affiliate relationships.</strong>{" "}Tools are ranked based on a transparent formula combining benchmark scores (40%), community votes (45%), and editorial scores (15%). Affiliate commissions have zero weight in this formula.</p>
        <p>Sponsored tools are clearly labeled with a &ldquo;Sponsored&rdquo; badge and appear above the organic rankings. This placement is paid for, but the tool&apos;s composite score is calculated identically to all other tools.</p>
        <p>We only include affiliate links for tools we believe are genuinely useful to our users. We will never rank a tool higher or lower based on its affiliate commission rate.</p>
        <p>Questions? Contact us at <a href="mailto:legal@rankdai.com" className="text-[#6B1E2E] hover:underline">legal@rankdai.com</a>.</p>
      </div>
      <div className="mt-12 pt-6 flex gap-4 text-xs" style={{ borderTop: "0.5px solid #D9CFC4" }}>
        <Link href="/" className="text-[#8A7F74] hover:text-[#6B1E2E] transition-colors">← Home</Link>
        <Link href="/privacy" className="text-[#8A7F74] hover:text-[#6B1E2E] transition-colors">Privacy Policy</Link>
        <Link href="/terms" className="text-[#8A7F74] hover:text-[#6B1E2E] transition-colors">Terms of Service</Link>
        <Link href="/contact" className="text-[#8A7F74] hover:text-[#6B1E2E] transition-colors">Contact</Link>
      </div>
    </div>
  );
}
