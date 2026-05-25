import Link from "next/link";

const CATEGORIES = [
  { label: "Coding", href: "/coding" },
  { label: "Writing", href: "/writing" },
  { label: "Image Gen", href: "/image-gen" },
  { label: "Research", href: "/research" },
  { label: "Math & Science", href: "/math-science" },
  { label: "Video & Audio", href: "/video-audio" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#1E1E2E] mt-16 bg-[#0A0A0F]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-3">
              <img src="/logo-icon.png" alt="RankedAI" className="h-7 w-7 rounded object-cover" />
              <span className="font-syne font-bold text-[#F0F0F5]">RankedAI<sup className="text-[9px] text-[#8888A0] font-normal">™</sup></span>
            </Link>
            <p className="text-xs text-[#8888A0] leading-relaxed max-w-[200px]">
              The trusted guide to the best AI tools, ranked by benchmarks and community votes.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-xs font-syne font-semibold text-[#F0F0F5] mb-3 uppercase tracking-wider">Categories</h4>
            <ul className="space-y-2">
              {CATEGORIES.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className="text-xs text-[#8888A0] hover:text-[#F0F0F5] transition-colors">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Site */}
          <div>
            <h4 className="text-xs font-syne font-semibold text-[#F0F0F5] mb-3 uppercase tracking-wider">Site</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-xs text-[#8888A0] hover:text-[#F0F0F5] transition-colors">Home</Link></li>
              <li><Link href="/#how-it-works" className="text-xs text-[#8888A0] hover:text-[#F0F0F5] transition-colors">How It Works</Link></li>
              <li><Link href="/account" className="text-xs text-[#8888A0] hover:text-[#F0F0F5] transition-colors">Account</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-syne font-semibold text-[#F0F0F5] mb-3 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/affiliate-disclosure" className="text-xs text-[#8888A0] hover:text-[#F0F0F5] transition-colors">Affiliate Disclosure</Link></li>
              <li><Link href="/privacy" className="text-xs text-[#8888A0] hover:text-[#F0F0F5] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-xs text-[#8888A0] hover:text-[#F0F0F5] transition-colors">Terms of Service</Link></li>
              <li><Link href="/contact" className="text-xs text-[#8888A0] hover:text-[#F0F0F5] transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-[#1E1E2E] flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-[#8888A0]">
            © {new Date().getFullYear()} RankedAI™. All rights reserved.
          </p>
          <p className="text-xs text-[#8888A0]">
            Some links are{" "}
            <Link href="/affiliate-disclosure" className="text-[#00D4FF] hover:underline">
              affiliate links
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
