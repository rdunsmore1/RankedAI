import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — RankedAI™",
};

const sections = [
  {
    number: "1",
    title: "Introduction",
    content: (
      <p>
        Welcome to RankedAI™ (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). We operate the website located at rankdai.com (the &ldquo;Site&rdquo;), a curated AI tool directory that ranks artificial intelligence tools by subject category based on benchmark data and community input.
        <br /><br />
        We are committed to protecting your personal information. This Privacy Policy explains what data we collect, how we use it, and your rights regarding that data. By using our Site, you agree to the practices described in this policy.
      </p>
    ),
  },
  {
    number: "2",
    title: "Information We Collect",
    content: (
      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-semibold text-[#1A1A1A] mb-2">2.1 Information You Provide Directly</h3>
          <ul className="space-y-2 list-none">
            <li className="flex gap-2"><span className="text-[#6B1E2E] shrink-0">—</span><span><strong className="text-[#1A1A1A]">Account registration:</strong> When you create an account, we collect your email address and a hashed password. We never store your password in plain text.</span></li>
            <li className="flex gap-2"><span className="text-[#6B1E2E] shrink-0">—</span><span><strong className="text-[#1A1A1A]">Votes and reviews:</strong> When you upvote, downvote, or submit a written review for an AI tool, we store that vote or review along with your user ID and the date submitted.</span></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#1A1A1A] mb-2">2.2 Information We Collect Automatically</h3>
          <ul className="space-y-2 list-none">
            <li className="flex gap-2"><span className="text-[#6B1E2E] shrink-0">—</span><span><strong className="text-[#1A1A1A]">Click tracking:</strong> When you click an outbound affiliate link on our Site, we log the tool clicked, the category page you were on, a timestamp, and an anonymized session identifier. This data is used solely for measuring affiliate performance and improving our rankings. We do not sell this data.</span></li>
            <li className="flex gap-2"><span className="text-[#6B1E2E] shrink-0">—</span><span><strong className="text-[#1A1A1A]">Usage data:</strong> We may collect standard web analytics data such as pages visited, time on page, browser type, and general geographic region (country/state level only) through privacy-respecting analytics tools.</span></li>
            <li className="flex gap-2"><span className="text-[#6B1E2E] shrink-0">—</span><span><strong className="text-[#1A1A1A]">Cookies:</strong> We use essential cookies to keep you logged in and maintain your session. We do not use third-party advertising cookies.</span></li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    number: "3",
    title: "How We Use Your Information",
    content: (
      <div className="space-y-4">
        <p>We use the information we collect to:</p>
        <ul className="space-y-1.5 list-none">
          {[
            "Operate and maintain your account",
            "Display your votes and reviews on the Site",
            "Calculate community ranking scores for AI tools",
            "Track affiliate link clicks for revenue reporting",
            "Improve the Site's features and user experience",
            "Send you account-related emails (e.g., email verification, password reset)",
            "Detect and prevent fraudulent voting or abuse of our ranking system",
          ].map((item) => (
            <li key={item} className="flex gap-2"><span className="text-[#22C55E] shrink-0">✓</span><span>{item}</span></li>
          ))}
        </ul>
        <p className="mt-4">We do <strong className="text-[#1A1A1A]">not</strong> use your information to:</p>
        <ul className="space-y-1.5 list-none">
          {[
            "Sell your personal data to third parties",
            "Serve targeted advertising",
            "Share your data with AI companies for marketing purposes",
          ].map((item) => (
            <li key={item} className="flex gap-2"><span className="text-[#EF4444] shrink-0">✕</span><span>{item}</span></li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    number: "4",
    title: "Affiliate Disclosure",
    content: (
      <p>
        RankedAI™ participates in affiliate programs with various AI tool providers. When you click an outbound link marked as an affiliate link and subsequently sign up for or purchase a product, we may earn a commission at no additional cost to you.
        <br /><br />
        Affiliate relationships do <strong className="text-[#1A1A1A]">not</strong> influence our rankings. Rankings are determined by our hybrid scoring system (benchmark data, community votes, and editorial scores) and sponsored placements are clearly labeled as &ldquo;Sponsored&rdquo; and are separate from organic rankings.
      </p>
    ),
  },
  {
    number: "5",
    title: "Sponsored Listings",
    content: (
      <p>
        Some AI tools on our Site may pay for a &ldquo;Sponsored&rdquo; or &ldquo;Featured&rdquo; placement. These placements are always clearly labeled. Sponsored status does not affect a tool&apos;s organic composite ranking score. We maintain this separation to protect the integrity of our rankings.
      </p>
    ),
  },
  {
    number: "6",
    title: "Data Sharing",
    content: (
      <div className="space-y-3">
        <p>We do not sell your personal information. We may share your data only in the following limited circumstances:</p>
        <ul className="space-y-2 list-none">
          <li className="flex gap-2"><span className="text-[#6B1E2E] shrink-0">—</span><span><strong className="text-[#1A1A1A]">Service providers:</strong> We use Supabase (database and authentication) to operate the Site. These providers process your data on our behalf under strict data processing agreements.</span></li>
          <li className="flex gap-2"><span className="text-[#6B1E2E] shrink-0">—</span><span><strong className="text-[#1A1A1A]">Legal requirements:</strong> We may disclose your information if required by law, court order, or to protect the rights and safety of our users or the public.</span></li>
          <li className="flex gap-2"><span className="text-[#6B1E2E] shrink-0">—</span><span><strong className="text-[#1A1A1A]">Business transfers:</strong> If RankedAI™ is acquired or merges with another company, your data may be transferred as part of that transaction. We will notify you before your data becomes subject to a different privacy policy.</span></li>
        </ul>
      </div>
    ),
  },
  {
    number: "7",
    title: "Data Retention",
    content: (
      <p>
        We retain your account data for as long as your account is active. If you delete your account, we will delete your personal information within 30 days, except where we are required to retain it by law or for legitimate business purposes (such as fraud prevention records).
        <br /><br />
        Vote and review data may be retained in anonymized, aggregated form after account deletion to preserve the integrity of our ranking history.
      </p>
    ),
  },
  {
    number: "8",
    title: "Your Rights",
    content: (
      <div className="space-y-3">
        <p>As a user based in or visiting from the United States, you have the following rights regarding your data:</p>
        <ul className="space-y-2 list-none">
          {[
            { label: "Access", desc: "You may request a copy of the personal data we hold about you." },
            { label: "Correction", desc: "You may request that we correct inaccurate data." },
            { label: "Deletion", desc: "You may request that we delete your account and associated personal data." },
            { label: "Opt-out", desc: "You may opt out of any non-essential communications from us at any time." },
          ].map((r) => (
            <li key={r.label} className="flex gap-2"><span className="text-[#6B1E2E] shrink-0">—</span><span><strong className="text-[#1A1A1A]">{r.label}:</strong> {r.desc}</span></li>
          ))}
        </ul>
        <p className="mt-2">
          To exercise any of these rights, contact us at the email address listed in Section 11.
        </p>
        <p>
          If you are a resident of California, you have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information is collected, the right to delete personal information, and the right to opt out of the sale of personal information. We do not sell personal information.
        </p>
      </div>
    ),
  },
  {
    number: "9",
    title: "Data Security",
    content: (
      <div className="space-y-3">
        <p>We take reasonable technical and organizational measures to protect your personal information, including:</p>
        <ul className="space-y-1.5 list-none">
          {[
            "Encrypted storage of passwords (bcrypt hashing)",
            "HTTPS encryption for all data transmitted to and from the Site",
            "Row-level security policies in our database to ensure users can only access their own data",
            "Regular review of our security practices",
          ].map((item) => (
            <li key={item} className="flex gap-2"><span className="text-[#22C55E] shrink-0">✓</span><span>{item}</span></li>
          ))}
        </ul>
        <p>No method of transmission over the internet is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.</p>
      </div>
    ),
  },
  {
    number: "10",
    title: "Children's Privacy",
    content: (
      <p>
        RankedAI™ is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that a child under 13 has provided us with personal information, we will delete it promptly. If you believe a child under 13 has submitted information to us, please contact us immediately.
      </p>
    ),
  },
  {
    number: "11",
    title: "Contact Us",
    content: (
      <div className="space-y-2">
        <p>If you have any questions, concerns, or requests regarding this Privacy Policy, please contact us at:</p>
        <div className="mt-3 bg-[#F0EBE1] border border-[#D9CFC4] rounded-lg p-4 inline-block">
          <p className="font-semibold text-[#1A1A1A]">RankedAI™</p>
          <p>Email: <a href="mailto:privacy@rankdai.com" className="text-[#6B1E2E] hover:underline">privacy@rankdai.com</a></p>
          <p>Website: rankdai.com</p>
        </div>
      </div>
    ),
  },
  {
    number: "12",
    title: "Changes to This Policy",
    content: (
      <p>
        We may update this Privacy Policy from time to time. When we do, we will update the &ldquo;Last Updated&rdquo; date at the top of this page. For significant changes, we will notify registered users by email. Your continued use of the Site after changes are posted constitutes your acceptance of the updated policy.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <div className="max-w-[760px] mx-auto px-4 sm:px-6 py-16">
      {/* Header */}
      <div className="mb-10">
        <h1 className="font-semibold text-3xl text-[#1A1A1A] mb-3">Privacy Policy</h1>
        <div className="flex flex-wrap gap-4 text-xs text-[#8A7F74] font-mono">
          <span>RankedAI™</span>
          <span>Effective Date: May 19, 2026</span>
          <span>Last Updated: May 19, 2026</span>
        </div>
        <div className="mt-4 h-px bg-gradient-to-r from-[#6B1E2E]/40 via-[#A855F7]/20 to-transparent" />
      </div>

      {/* Sections */}
      <div className="space-y-10">
        {sections.map((section) => (
          <div key={section.number} className="group">
            <div className="flex items-baseline gap-3 mb-3">
              <span className="text-xs text-[#6B1E2E] shrink-0">{section.number.padStart(2, "0")}</span>
              <h2 className="font-semibold text-lg text-[#1A1A1A]">{section.title}</h2>
            </div>
            <div className="pl-6 text-sm text-[#8A7F74] leading-relaxed border-l border-[#D9CFC4] group-hover:border-[#6B1E2E]/30 transition-colors">
              {section.content}
            </div>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <div className="mt-12 pt-6 border-t border-[#D9CFC4] text-xs text-[#8A7F74] italic">
        This privacy policy was prepared for informational purposes. For legal advice specific to your situation, consult a qualified attorney.
      </div>

      {/* Nav */}
      <div className="mt-8 flex gap-4 text-xs">
        <Link href="/" className="text-[#8A7F74] hover:text-[#1A1A1A] transition-colors">← Home</Link>
        <Link href="/affiliate-disclosure" className="text-[#8A7F74] hover:text-[#1A1A1A] transition-colors">Affiliate Disclosure</Link>
        <Link href="/contact" className="text-[#8A7F74] hover:text-[#1A1A1A] transition-colors">Contact</Link>
      </div>
    </div>
  );
}
