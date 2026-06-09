import Link from "next/link";

const CATEGORIES = [
  { label: "Coding", href: "/coding" },
  { label: "Writing", href: "/writing" },
  { label: "Image Gen", href: "/image-gen" },
  { label: "Research", href: "/research" },
  { label: "Math & Science", href: "/math-science" },
  { label: "Video & Audio", href: "/video-audio" },
  { label: "Speech Generation", href: "/speech-generation" },
  { label: "AI Meeting Notes", href: "/ai-meeting-notes" },
];

export default function Footer() {
  return (
    <footer className="bg-[#F0EBE1] mt-16" style={{ borderTop: "0.5px solid #D9CFC4" }}>
      <div className="max-w-[1200px] mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded flex items-center justify-center text-xs font-semibold text-[#6B1E2E]"
                style={{ background: "rgba(107,30,46,0.09)", border: "0.5px solid #6B1E2E" }}>R</div>
              <span className="font-semibold text-[#1A1A1A]">RankedAI<sup className="text-[9px] text-[#8A7F74] font-normal">™</sup></span>
            </Link>
            <p className="text-xs text-[#8A7F74] leading-relaxed max-w-[200px]">
              The trusted guide to the best AI tools, ranked by benchmarks and community votes.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-[11px] font-semibold text-[#1A1A1A] mb-3 uppercase tracking-widest">Categories</h4>
            <ul className="space-y-2">
              {CATEGORIES.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className="text-xs text-[#8A7F74] hover:text-[#6B1E2E] transition-colors">{c.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Site */}
          <div>
            <h4 className="text-[11px] font-semibold text-[#1A1A1A] mb-3 uppercase tracking-widest">Site</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-xs text-[#8A7F74] hover:text-[#6B1E2E] transition-colors">Home</Link></li>
              <li><Link href="/#how-it-works" className="text-xs text-[#8A7F74] hover:text-[#6B1E2E] transition-colors">How It Works</Link></li>
              <li><Link href="/account" className="text-xs text-[#8A7F74] hover:text-[#6B1E2E] transition-colors">Account</Link></li>
            </ul>
          </div>

          {/* Guides */}
          <div>
            <h4 className="text-[11px] font-semibold text-[#1A1A1A] mb-3 uppercase tracking-widest">Guides</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/blog/claude-fable-5-review-2026" className="text-xs text-[#8A7F74] hover:text-[#6B1E2E] transition-colors inline-flex items-center gap-1.5">
                  Claude Fable 5 Review 2026
                  <span className="text-[9px] font-semibold px-1.5 py-0.5 rounded-pill" style={{ background: "rgba(107,30,46,0.1)", color: "#6B1E2E", border: "0.5px solid rgba(107,30,46,0.2)" }}>New</span>
                </Link>
              </li>
              {[
                ["Claude AI Review 2026", "/blog/claude-ai-review-2026"],
                ["ChatGPT Review 2026", "/blog/chatgpt-review-2026"],
                ["Gemini Review 2026", "/blog/gemini-ai-review-2026"],
                ["Midjourney Review 2026", "/blog/midjourney-review-2026"],
                ["Perplexity AI Review 2026", "/blog/perplexity-ai-review-2026"],
                ["ElevenLabs Review 2026", "/blog/elevenlabs-review-2026"],
              ].map(([label, href]) => (
                <li key={href}><Link href={href} className="text-xs text-[#8A7F74] hover:text-[#6B1E2E] transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[11px] font-semibold text-[#1A1A1A] mb-3 uppercase tracking-widest">Legal</h4>
            <ul className="space-y-2">
              {[
                ["Affiliate Disclosure", "/affiliate-disclosure"],
                ["Privacy Policy", "/privacy"],
                ["Terms of Service", "/terms"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={href}><Link href={href} className="text-xs text-[#8A7F74] hover:text-[#6B1E2E] transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-2" style={{ borderTop: "0.5px solid #D9CFC4" }}>
          <p className="text-xs text-[#B5A898]">© {new Date().getFullYear()} RankedAI™. All rights reserved.</p>
          <p className="text-xs text-[#B5A898]">
            Some links are{" "}
            <Link href="/affiliate-disclosure" className="text-[#6B1E2E] hover:underline">affiliate links</Link>.
          </p>
        </div>
      </div>
    </footer>
  );
}
