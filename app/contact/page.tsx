import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact — RankedAI™",
};

const contactMethods = [
  {
    label: "General & Privacy",
    value: "privacy@rankdai.com",
    href: "mailto:privacy@rankdai.com",
    desc: "Questions about your data, privacy policy, or account",
  },
  {
    label: "Legal",
    value: "legal@rankdai.com",
    href: "mailto:legal@rankdai.com",
    desc: "Terms of service, intellectual property, and legal enquiries",
  },
];

export default function ContactPage() {
  return (
    <div className="max-w-[760px] mx-auto px-4 sm:px-6 py-16">
      {/* Header */}
      <div className="mb-10">
        <h1 className="font-syne font-bold text-3xl text-[#F0F0F5] mb-3">Contact Us</h1>
        <p className="text-sm text-[#8888A0] leading-relaxed">
          Have a question, a tool suggestion, or a partnership inquiry? Reach out using the contact information below.
        </p>
        <div className="mt-4 h-px bg-gradient-to-r from-[#00D4FF]/40 via-[#A855F7]/20 to-transparent" />
      </div>

      {/* Contact methods */}
      <div className="space-y-4">
        {contactMethods.map((method) => (
          <div
            key={method.label}
            className="bg-[#13131A] border border-[#1E1E2E] rounded-lg p-5 flex flex-col sm:flex-row sm:items-center gap-3"
          >
            <div className="flex-1">
              <div className="font-mono text-xs text-[#8888A0] mb-0.5">{method.label}</div>
              <a
                href={method.href}
                className="font-syne font-semibold text-[#00D4FF] hover:underline text-base"
              >
                {method.value}
              </a>
              <p className="text-xs text-[#8888A0] mt-1">{method.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Nav */}
      <div className="mt-12 pt-6 border-t border-[#1E1E2E] flex gap-4 text-xs">
        <Link href="/" className="text-[#8888A0] hover:text-[#F0F0F5] transition-colors">← Home</Link>
        <Link href="/privacy" className="text-[#8888A0] hover:text-[#F0F0F5] transition-colors">Privacy Policy</Link>
        <Link href="/affiliate-disclosure" className="text-[#8888A0] hover:text-[#F0F0F5] transition-colors">Affiliate Disclosure</Link>
      </div>
    </div>
  );
}
