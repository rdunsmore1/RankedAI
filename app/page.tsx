import Link from "next/link";
import { getCategories, getRankedTools, getToolCount } from "@/lib/data";
import { createClient } from "@/lib/supabase/server";
import HomepageTabs from "@/components/HomepageTabs";
import HeroNetwork from "@/components/HeroNetwork";

export const revalidate = 60;

export default async function HomePage() {
  const [categories, toolCount] = await Promise.all([getCategories(), getToolCount()]);
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const firstCat = categories[0];
  const initialTools = firstCat ? await getRankedTools(firstCat.slug, user?.id) : [];

  return (
    <>
      {/* Hero */}
      <section className="max-w-[1200px] mx-auto px-6 pt-20 pb-12">
        {/* Two-column hero: text left, network right */}
        <div className="grid lg:grid-cols-[1fr_480px] gap-10 xl:gap-16 items-center mb-14">
          {/* Left: text content */}
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "rgba(107,30,46,0.3)" }} />
              <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#6B1E2E]">
                Benchmark-anchored · Community-voted · Always current
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-semibold leading-[1.08] tracking-[-0.03em] mb-7" style={{ fontSize: "clamp(36px, 6vw, 56px)" }}>
              <span className="block text-[#1A1A1A]">The AI rankings</span>
              <span className="block">
                <span className="text-[#B5A898]">you can </span>
                <span className="text-[#1A1A1A]">actually</span>
              </span>
              <span className="block text-[#6B1E2E]">trust.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base text-[#8A7F74] leading-[1.6] max-w-[460px] mb-10">
              Stop guessing which AI to use. We rank every major AI tool by subject — anchored by public benchmarks, fine-tuned by the people who use them daily.
            </p>

            {/* CTAs */}
            <div className="flex items-center gap-4">
              <a href="#rankings"
                className="px-6 py-3 font-medium text-[14px] rounded-lg hover:bg-[#8B2438] transition-colors"
                style={{ background: "#6B1E2E", color: "#FAF7F2" }}>
                Explore rankings →
              </a>
              <a href="#how-it-works"
                className="px-6 py-3 font-medium text-[14px] rounded-lg transition-colors text-[#8A7F74] hover:text-[#1A1A1A]"
                style={{ border: "0.5px solid #D9CFC4" }}>
                How it works
              </a>
            </div>
          </div>

          {/* Right: interactive particle network */}
          <div className="hidden lg:block">
            <HeroNetwork />
          </div>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-0" style={{ borderTop: "0.5px solid #D9CFC4", borderBottom: "0.5px solid #D9CFC4" }}>
          {[
            { num: toolCount, accent: "+", label: "tools ranked across", sub: `${categories.length} categories` },
            { num: 3,         accent: "",  label: "scoring layers", sub: "benchmark · community · editorial" },
            { num: 0,         accent: "%", label: "marketing influence", sub: "on our scores" },
            { num: categories.length, accent: "", label: "tabs", sub: "coding to healthcare AI" },
          ].map((s, i) => (
            <div key={i} className="py-5 px-4"
              style={{ borderRight: i < 3 ? "0.5px solid #D9CFC4" : undefined }}>
              <div className="font-medium text-[28px] tabular-nums text-[#1A1A1A] leading-none mb-1">
                {s.num}<span className="text-[#6B1E2E]">{s.accent}</span>
              </div>
              <div className="text-xs text-[#8A7F74]">{s.label}</div>
              <div className="text-xs text-[#B5A898]">{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Rankings */}
      <section id="rankings" className="max-w-[1200px] mx-auto px-6 pb-16">
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-semibold text-xl text-[#1A1A1A] tracking-tight">Top Rankings</h2>
          <span className="text-xs text-[#B5A898]">Updated every 60 seconds</span>
        </div>
        <HomepageTabs categories={categories} initialTools={initialTools}
          initialCategorySlug={firstCat?.slug ?? "coding"} userId={user?.id} />
      </section>

      {/* How It Works */}
      <section id="how-it-works" style={{ background: "#F0EBE1", borderTop: "0.5px solid #D9CFC4", borderBottom: "0.5px solid #D9CFC4" }}>
        <div className="max-w-[1200px] mx-auto px-6 py-16">
          <div className="mb-10">
            <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#8A7F74] mb-3">Methodology</div>
            <h2 className="font-semibold text-[28px] text-[#1A1A1A] tracking-tight mb-3">How rankings work</h2>
            <p className="text-sm text-[#8A7F74] max-w-lg leading-relaxed">
              A transparent three-part system designed to resist gaming and surface the genuinely best tools.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { step: "01", title: "Benchmark Baseline", weight: "40%", color: "#6B1E2E",
                desc: "Every tool starts with a score derived from public benchmarks — Arena AI Elo, MMLU, HumanEval — normalized to 0–100. Users cannot inflate it." },
              { step: "02", title: "Community Votes", weight: "45%", color: "#2D6A4F",
                desc: "Registered users upvote and review tools within each category. Community score only activates after 5+ votes, preventing manipulation." },
              { step: "03", title: "Editorial Score", weight: "15%", color: "#B8963C",
                desc: "Our team adds a score for UX quality, pricing fairness, and support quality. Small enough not to override the data, but enough to surface hidden gems." },
            ].map((item) => (
              <div key={item.step} className="rounded-card p-6" style={{ background: "#FAF7F2", border: "0.5px solid #D9CFC4" }}>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-[#B5A898]">Step {item.step}</span>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-pill"
                    style={{ color: item.color, background: `${item.color}12`, border: `0.5px solid ${item.color}30` }}>
                    {item.weight}
                  </span>
                </div>
                <h3 className="font-semibold text-[#1A1A1A] text-base mb-2 tracking-tight">{item.title}</h3>
                <p className="text-sm text-[#8A7F74] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-card p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4"
            style={{ background: "#FAF7F2", border: "0.5px solid #D9CFC4" }}>
            <div className="shrink-0">
              <div className="text-[11px] text-[#8A7F74] uppercase tracking-wider mb-1">Formula</div>
              <code className="text-sm font-medium" style={{ color: "#6B1E2E", fontFamily: "inherit" }}>
                (benchmark × 0.40) + (community × 0.45) + (editorial × 0.15)
              </code>
            </div>
            <div className="flex-1 text-xs text-[#8A7F74]">
              Sponsored tools appear above organic rankings with a clear badge. Sponsorship{" "}
              <strong className="text-[#1A1A1A]">does not affect</strong> the composite score.
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="max-w-[1200px] mx-auto px-6 py-16">
        {user ? (
          <div className="rounded-card p-8 sm:p-12 relative overflow-hidden" style={{ border: "0.5px solid #D9CFC4", background: "#F0EBE1" }}>
            <div className="flex flex-col sm:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="text-[11px] font-semibold uppercase tracking-widest text-[#8A7F74] mb-2">Your impact</div>
                <h2 className="font-semibold text-2xl sm:text-3xl text-[#1A1A1A] mb-3 tracking-tight">
                  Tried one of these tools?<br />Tell the community.
                </h2>
                <p className="text-[#8A7F74] text-sm leading-relaxed max-w-md">
                  Your reviews directly shape the community score — the more detail you share, the more accurate the rankings become for everyone.
                </p>
              </div>
              <div className="shrink-0 flex flex-col gap-2 w-full sm:w-auto">
                {[{ name: "ElevenLabs", slug: "elevenlabs" }, { name: "ChatGPT", slug: "chatgpt" }, { name: "Midjourney", slug: "midjourney" }].map((t) => (
                  <Link key={t.slug} href={`/tool/${t.slug}`}
                    className="flex items-center justify-between gap-4 px-4 py-3 rounded-lg transition-colors group"
                    style={{ background: "#FAF7F2", border: "0.5px solid #D9CFC4" }}>
                    <span className="text-sm font-medium text-[#1A1A1A]">{t.name}</span>
                    <span className="text-xs text-[#6B1E2E] group-hover:translate-x-0.5 transition-transform">Review →</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="rounded-card p-8 sm:p-12 text-center" style={{ border: "0.5px solid #D9CFC4", background: "#F0EBE1" }}>
            <h2 className="font-semibold text-3xl text-[#1A1A1A] mb-3 tracking-tight">Help rank the world&apos;s AI tools</h2>
            <p className="text-[#8A7F74] mb-6 max-w-md mx-auto text-sm">
              Sign up for free to cast votes, write reviews, and help the community find the best AI for every task.
            </p>
            <Link href="/login"
              className="inline-flex px-8 py-3 font-semibold text-sm rounded-lg hover:bg-[#8B2438] transition-colors"
              style={{ background: "#6B1E2E", color: "#FAF7F2" }}>
              Join the community →
            </Link>
          </div>
        )}
      </section>
    </>
  );
}
