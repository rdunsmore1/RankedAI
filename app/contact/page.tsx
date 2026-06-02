import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Contact — RankedAI™" };

const contactMethods = [
  { label: "General & Privacy", value: "privacy@rankdai.com", href: "mailto:privacy@rankdai.com", desc: "Questions about your data, privacy policy, or account" },
  { label: "Legal", value: "legal@rankdai.com", href: "mailto:legal@rankdai.com", desc: "Terms of service, intellectual property, and legal enquiries" },
];

export default function ContactPage() {
  return (
    <div className="max-w-[720px] mx-auto px-6 py-16">
      <div className="mb-10">
        <div className="text-[11px] font-semibold uppercase tracking-widest text-[#8A7F74] mb-3">Contact</div>
        <h1 className="font-semibold text-3xl text-[#1A1A1A] tracking-tight mb-3">Get in touch</h1>
        <p className="text-sm text-[#8A7F74] leading-relaxed">Have a question, a tool suggestion, or a partnership inquiry? Reach out below.</p>
        <div className="mt-4 h-px bg-[#D9CFC4]" />
      </div>
      <div className="space-y-4">
        {contactMethods.map((m) => (
          <div key={m.label} className="rounded-card p-5 flex flex-col sm:flex-row sm:items-center gap-3"
            style={{ background: "#F0EBE1", border: "0.5px solid #D9CFC4" }}>
            <div className="flex-1">
              <div className="text-[11px] font-semibold uppercase tracking-widest text-[#8A7F74] mb-0.5">{m.label}</div>
              <a href={m.href} className="font-semibold text-[#6B1E2E] hover:underline text-base">{m.value}</a>
              <p className="text-xs text-[#8A7F74] mt-1">{m.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 pt-6 flex gap-4 text-xs" style={{ borderTop: "0.5px solid #D9CFC4" }}>
        <Link href="/" className="text-[#8A7F74] hover:text-[#6B1E2E] transition-colors">← Home</Link>
        <Link href="/privacy" className="text-[#8A7F74] hover:text-[#6B1E2E] transition-colors">Privacy Policy</Link>
        <Link href="/affiliate-disclosure" className="text-[#8A7F74] hover:text-[#6B1E2E] transition-colors">Affiliate Disclosure</Link>
      </div>
    </div>
  );
}
