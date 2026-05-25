import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Disclosure — RankedAI™",
};

export default function AffiliatePage() {
  return (
    <div className="max-w-[760px] mx-auto px-4 sm:px-6 py-16">
      <h1 className="font-syne font-bold text-3xl text-[#F0F0F5] mb-6">Affiliate Disclosure — RankedAI™</h1>
      <div className="space-y-4 text-sm text-[#8888A0] leading-relaxed">
        <p>
          AI Hub participates in affiliate marketing programs. When you click on certain links and make a purchase,
          we may receive a commission at no additional cost to you.
        </p>
        <p>
          <strong className="text-[#F0F0F5]">Our rankings are not influenced by affiliate relationships.</strong>{" "}
          Tools are ranked based on a transparent formula combining benchmark scores (40%), community votes (45%),
          and editorial scores (15%). Affiliate commissions have zero weight in this formula.
        </p>
        <p>
          Sponsored tools are clearly labeled with a &ldquo;Sponsored&rdquo; badge and appear above the organic rankings
          in a visually distinct card. This placement is paid for, but the tool&apos;s composite score is calculated
          identically to all other tools.
        </p>
        <p>
          We only include affiliate links for tools we believe are genuinely useful. We will never rank a tool
          higher or lower based on its affiliate commission rate.
        </p>
        <p>
          If you have questions about our affiliate relationships, please{" "}
          <a href="mailto:contact@aihub.com" className="text-[#00D4FF] hover:underline">contact us</a>.
        </p>
      </div>
    </div>
  );
}
