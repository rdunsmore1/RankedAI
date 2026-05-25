import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — RankedAI™",
};

const sections = [
  {
    number: "1",
    title: "Acceptance of Terms",
    content: (
      <p>
        By accessing or using the RankedAI™ website located at rankdai.com (the &ldquo;Site&rdquo;), you agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;). If you do not agree to these Terms in their entirety, you must not access or use the Site.
        <br /><br />
        These Terms constitute a legally binding agreement between you and RankedAI™, owned and operated by Roanin Dunsmore (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). Your continued use of the Site following any updates to these Terms constitutes your acceptance of the revised Terms. We recommend reviewing this page periodically.
        <br /><br />
        If you are using the Site on behalf of an organization, you represent that you have the authority to bind that organization to these Terms, and references to &ldquo;you&rdquo; include that organization.
      </p>
    ),
  },
  {
    number: "2",
    title: "Description of Service",
    content: (
      <div className="space-y-3">
        <p>
          RankedAI™ is an AI tool directory and ranking platform. The Site provides users with:
        </p>
        <ul className="space-y-2 list-none">
          {[
            "A curated directory of artificial intelligence tools organised by subject category",
            "Composite ranking scores derived from benchmark data, community votes, and editorial assessment",
            "The ability for registered users to cast upvotes and downvotes for AI tools within specific categories",
            "The ability for registered users to submit written reviews and star ratings for AI tools",
            "Tool detail pages containing descriptions, pricing information, and outbound links",
            "Affiliate links to third-party AI tool providers, through which we may earn a commission",
            "Clearly labelled sponsored placements for tools that pay for featured positioning",
          ].map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-[#00D4FF] shrink-0">—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p>
          Rankings on RankedAI™ are provided for informational purposes only. We do not endorse any specific AI tool, and rankings do not constitute professional advice of any kind. RankedAI™ is not responsible for the products, services, or content offered by any third-party AI tool listed on the Site.
        </p>
      </div>
    ),
  },
  {
    number: "3",
    title: "User Accounts",
    content: (
      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-semibold text-[#F0F0F5] mb-2">3.1 Registration</h3>
          <p>
            Certain features of the Site — including voting, submitting reviews, and saving tools — require you to create an account. When registering, you agree to provide accurate, current, and complete information. You must be at least 13 years of age to create an account. By creating an account, you represent that all information you provide is truthful.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#F0F0F5] mb-2">3.2 Account Responsibilities</h3>
          <p>You are solely responsible for:</p>
          <ul className="space-y-1.5 list-none mt-2">
            {[
              "Maintaining the confidentiality of your login credentials",
              "All activity that occurs under your account",
              "Notifying us immediately at legal@rankdai.com if you suspect unauthorized access to your account",
              "Ensuring your account is not used in violation of these Terms",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-[#00D4FF] shrink-0">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3">
            We reserve the right to suspend or terminate any account at our sole discretion, including accounts that violate these Terms, engage in fraudulent activity, or create risk or legal exposure for RankedAI™.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#F0F0F5] mb-2">3.3 Account Termination</h3>
          <p>
            You may delete your account at any time via the Account page. Upon deletion, your personal data will be removed in accordance with our{" "}
            <Link href="/privacy" className="text-[#00D4FF] hover:underline">Privacy Policy</Link>. Aggregated and anonymised voting data may be retained to preserve ranking integrity. We may terminate or suspend your account immediately, without prior notice, if you breach these Terms.
          </p>
        </div>
      </div>
    ),
  },
  {
    number: "4",
    title: "Acceptable Use Policy",
    content: (
      <div className="space-y-4">
        <p>
          By using the Site, you agree not to engage in any of the following prohibited activities:
        </p>
        <div>
          <h3 className="text-sm font-semibold text-[#F0F0F5] mb-2">4.1 Vote and Review Integrity</h3>
          <ul className="space-y-2 list-none">
            {[
              "Submitting false, misleading, or fabricated reviews about any AI tool",
              "Creating multiple accounts to cast additional votes for the same tool",
              "Paying, incentivising, or coordinating with others to vote for or against any tool",
              "Using automated scripts, bots, or other non-human means to cast votes or submit reviews",
              "Manipulating the ranking system in any way not expressly permitted by these Terms",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-[#EF4444] shrink-0">✕</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#F0F0F5] mb-2">4.2 Content and Data</h3>
          <ul className="space-y-2 list-none">
            {[
              "Scraping, crawling, or harvesting any content, rankings, scores, or data from the Site by automated means",
              "Reproducing, copying, or republishing our rankings, scoring methodology, editorial content, or tool data without prior written permission",
              "Using Site content to build a competing product or service without a formal licence agreement",
              "Reverse engineering, decompiling, or attempting to extract the source code or scoring algorithms of the Site",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-[#EF4444] shrink-0">✕</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#F0F0F5] mb-2">4.3 General Conduct</h3>
          <ul className="space-y-2 list-none">
            {[
              "Uploading or transmitting viruses, malware, or any code designed to disrupt the Site",
              "Attempting to gain unauthorised access to any part of the Site or its infrastructure",
              "Harassing, threatening, or abusing other users",
              "Using the Site in any way that violates applicable local, national, or international law",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-[#EF4444] shrink-0">✕</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <p>
          Violation of this Acceptable Use Policy may result in immediate account suspension, permanent ban, and, where applicable, legal action.
        </p>
      </div>
    ),
  },
  {
    number: "5",
    title: "Intellectual Property",
    content: (
      <div className="space-y-3">
        <p>
          All content on the Site — including but not limited to the composite ranking scores, the hybrid scoring methodology, editorial assessments, tool descriptions, written content, graphical design, user interface, logo, branding, source code, and the RankedAI™ name and trademark — is the exclusive intellectual property of RankedAI™ and its founder, Roanin Dunsmore, and is protected by applicable copyright, trademark, and trade secret laws.
        </p>
        <p>
          The three-component hybrid ranking algorithm (benchmark weighting, community scoring formula, and editorial scoring system), including its specific weightings, anti-manipulation thresholds, and category-scoped architecture, constitutes proprietary and confidential intellectual property of RankedAI™.
        </p>
        <p>
          You are granted a limited, non-exclusive, non-transferable licence to access and use the Site for your personal, non-commercial use only. This licence does not include:
        </p>
        <ul className="space-y-2 list-none">
          {[
            "Reproducing, copying, or distributing any portion of the Site or its content without prior written permission from RankedAI™",
            "Using our rankings, scores, methodology, or content for commercial purposes",
            "Creating derivative works based on any content from the Site",
            "Using our trademarks, logos, or branding in any way without written authorisation",
          ].map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-[#EF4444] shrink-0">✕</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p>
          To request permission to reproduce any content from RankedAI™, contact us at{" "}
          <a href="mailto:legal@rankdai.com" className="text-[#00D4FF] hover:underline">legal@rankdai.com</a>.
        </p>
        <div className="mt-2 bg-[#13131A] border border-[#1E1E2E] rounded-lg p-4">
          <p className="text-xs text-[#8888A0]">
            <strong className="text-[#F0F0F5]">User-submitted content:</strong> By submitting a review or any content to RankedAI™, you grant us a perpetual, royalty-free, worldwide licence to display, reproduce, and use that content on the Site and in promotional materials. You represent that you own or have the right to submit such content and that it does not infringe any third-party rights.
          </p>
        </div>
      </div>
    ),
  },
  {
    number: "6",
    title: "Community Voting Rules",
    content: (
      <div className="space-y-3">
        <p>
          The integrity of RankedAI™&apos;s ranking system depends on authentic community participation. The following rules govern all voting and review activity:
        </p>
        <ul className="space-y-2 list-none">
          {[
            { rule: "One vote per user, per tool, per category.", detail: "Each registered account may cast one vote (upvote or downvote) for a given AI tool within a given category. You may change your vote at any time, but you may not hold multiple simultaneous votes." },
            { rule: "No bots or automated voting.", detail: "Votes must be cast manually by a human user. The use of scripts, browser automation, bots, or any programmatic mechanism to cast votes is strictly prohibited." },
            { rule: "No coordinated voting campaigns.", detail: "Organising groups of users — whether through social media, messaging platforms, forums, or any other means — to vote for or against a specific tool constitutes vote manipulation and is a material breach of these Terms." },
            { rule: "No incentivised voting.", detail: "Offering or receiving compensation, gifts, discounts, or any other benefit in exchange for casting a vote or writing a review is prohibited." },
            { rule: "Reviews must reflect genuine experience.", detail: "Written reviews must be based on your authentic, personal experience with the tool. Reviews written without real use of the tool, or written on behalf of the tool's creators or competitors, will be removed." },
            { rule: "Minimum vote threshold.", detail: "Community scoring only activates after a tool receives 5 or more votes within a category. This threshold exists to prevent early-stage manipulation and ensure scores reflect meaningful community consensus." },
          ].map((item) => (
            <li key={item.rule} className="flex gap-2">
              <span className="text-[#22C55E] shrink-0 mt-0.5">✓</span>
              <span><strong className="text-[#F0F0F5]">{item.rule}</strong> {item.detail}</span>
            </li>
          ))}
        </ul>
        <p>
          We reserve the right to remove any votes or reviews we determine, in our sole discretion, to be inauthentic, manipulative, or in violation of these rules. Accounts found to be engaged in vote manipulation will be permanently banned.
        </p>
      </div>
    ),
  },
  {
    number: "7",
    title: "Affiliate and Sponsored Content Disclosure",
    content: (
      <div className="space-y-3">
        <div>
          <h3 className="text-sm font-semibold text-[#F0F0F5] mb-2">7.1 Affiliate Links</h3>
          <p>
            RankedAI™ participates in affiliate programmes with various AI tool providers. Some outbound links on the Site are affiliate links — when you click one and subsequently make a purchase or sign up for a service, we may earn a commission at no additional cost to you. Affiliate relationships are disclosed on our{" "}
            <Link href="/affiliate-disclosure" className="text-[#00D4FF] hover:underline">Affiliate Disclosure</Link>{" "}page.
            <br /><br />
            Affiliate status does <strong className="text-[#F0F0F5]">not</strong> influence a tool&apos;s composite ranking score. Rankings are determined solely by the hybrid scoring algorithm described in our public How It Works section.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#F0F0F5] mb-2">7.2 Sponsored Placements</h3>
          <p>
            Some AI tool providers pay RankedAI™ a fee for a sponsored or featured placement that positions their tool above the organic ranked results within one or more categories. All sponsored placements are clearly labelled with a &ldquo;Sponsored&rdquo; or &ldquo;Featured&rdquo; badge in the UI.
            <br /><br />
            Sponsorship status does <strong className="text-[#F0F0F5]">not</strong> affect a tool&apos;s composite score. The composite score formula is applied identically to sponsored and organic tools. Sponsors pay for visibility, not for a higher ranking number.
          </p>
        </div>
      </div>
    ),
  },
  {
    number: "8",
    title: "Limitation of Liability",
    content: (
      <div className="space-y-3">
        <p>
          The rankings, scores, reviews, and all other content on RankedAI™ are provided for <strong className="text-[#F0F0F5]">informational purposes only</strong>. They do not constitute professional, technical, financial, legal, or business advice. You should not rely solely on RankedAI™ rankings when making purchasing, licensing, or technology decisions.
        </p>
        <p>
          To the fullest extent permitted by applicable law, RankedAI™ and its founder Roanin Dunsmore shall not be liable for:
        </p>
        <ul className="space-y-2 list-none">
          {[
            "Any direct, indirect, incidental, special, consequential, or punitive damages arising from your use of or reliance on the Site",
            "Any decisions made based on rankings, scores, reviews, or content found on the Site",
            "The accuracy, completeness, or timeliness of any benchmark data or editorial assessment",
            "The quality, performance, security, or fitness for purpose of any third-party AI tool listed on the Site",
            "Any loss of data, revenue, or business opportunity arising from your use of the Site",
            "Interruptions to the Site's availability or errors in its content",
          ].map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-[#00D4FF] shrink-0">—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p>
          The Site is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.
        </p>
        <p>
          In jurisdictions that do not allow the exclusion or limitation of liability for consequential or incidental damages, our liability shall be limited to the maximum extent permitted by law.
        </p>
      </div>
    ),
  },
  {
    number: "9",
    title: "Changes to Terms",
    content: (
      <p>
        We reserve the right to modify these Terms of Service at any time. When we make changes, we will update the &ldquo;Effective Date&rdquo; at the top of this page. For material changes, we will make reasonable efforts to notify registered users via email prior to the changes taking effect.
        <br /><br />
        Your continued use of the Site after updated Terms are posted constitutes your binding acceptance of those changes. If you do not agree to updated Terms, you must stop using the Site and may delete your account at any time via the Account page.
        <br /><br />
        We encourage you to review this page periodically. The most current version of these Terms will always be available at rankdai.com/terms.
      </p>
    ),
  },
  {
    number: "10",
    title: "Governing Law",
    content: (
      <p>
        These Terms of Service and any dispute arising out of or related to your use of the Site shall be governed by and construed in accordance with the laws of the <strong className="text-[#F0F0F5]">State of Nebraska, United States</strong>, without regard to its conflict of law provisions.
        <br /><br />
        You agree that any legal action or proceeding between you and RankedAI™ shall be brought exclusively in the state or federal courts of competent jurisdiction located in Nebraska, and you consent to the personal jurisdiction of those courts.
        <br /><br />
        Notwithstanding the foregoing, RankedAI™ reserves the right to seek injunctive or other equitable relief in any court of competent jurisdiction to prevent the actual or threatened infringement of its intellectual property rights.
      </p>
    ),
  },
  {
    number: "11",
    title: "Contact Information",
    content: (
      <div className="space-y-2">
        <p>
          For questions, legal notices, intellectual property concerns, or requests relating to these Terms of Service, please contact us at:
        </p>
        <div className="mt-3 bg-[#13131A] border border-[#1E1E2E] rounded-lg p-4 inline-block">
          <p className="font-semibold text-[#F0F0F5]">RankedAI™</p>
          <p>Legal enquiries: <a href="mailto:legal@rankdai.com" className="text-[#00D4FF] hover:underline">legal@rankdai.com</a></p>
          <p>Website: rankdai.com</p>
        </div>
        <p className="mt-3">
          We will endeavour to respond to all legal enquiries within 10 business days. For general support questions, please use the{" "}
          <Link href="/contact" className="text-[#00D4FF] hover:underline">Contact</Link>{" "}page.
        </p>
      </div>
    ),
  },
];

export default function TermsPage() {
  return (
    <div className="max-w-[760px] mx-auto px-4 sm:px-6 py-16">
      {/* Header */}
      <div className="mb-10">
        <h1 className="font-syne font-bold text-3xl text-[#F0F0F5] mb-3">Terms of Service</h1>
        <div className="flex flex-wrap gap-4 text-xs text-[#8888A0] font-mono">
          <span>RankedAI™</span>
          <span>Effective Date: May 25, 2026</span>
          <span>Last Updated: May 25, 2026</span>
        </div>
        <div className="mt-4 h-px bg-gradient-to-r from-[#00D4FF]/40 via-[#A855F7]/20 to-transparent" />
      </div>

      {/* Sections */}
      <div className="space-y-10">
        {sections.map((section) => (
          <div key={section.number} className="group">
            <div className="flex items-baseline gap-3 mb-3">
              <span className="font-mono text-xs text-[#00D4FF] shrink-0">{section.number.padStart(2, "0")}</span>
              <h2 className="font-syne font-bold text-lg text-[#F0F0F5]">{section.title}</h2>
            </div>
            <div className="pl-6 text-sm text-[#8888A0] leading-relaxed border-l border-[#1E1E2E] group-hover:border-[#00D4FF]/30 transition-colors">
              {section.content}
            </div>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <div className="mt-12 pt-6 border-t border-[#1E1E2E] text-xs text-[#8888A0] italic">
        This Terms of Service document was prepared for informational purposes. For legal advice specific to your situation, consult a qualified attorney.
      </div>

      {/* Nav */}
      <div className="mt-8 flex gap-4 text-xs">
        <Link href="/" className="text-[#8888A0] hover:text-[#F0F0F5] transition-colors">← Home</Link>
        <Link href="/privacy" className="text-[#8888A0] hover:text-[#F0F0F5] transition-colors">Privacy Policy</Link>
        <Link href="/affiliate-disclosure" className="text-[#8888A0] hover:text-[#F0F0F5] transition-colors">Affiliate Disclosure</Link>
        <Link href="/contact" className="text-[#8888A0] hover:text-[#F0F0F5] transition-colors">Contact</Link>
      </div>
    </div>
  );
}
