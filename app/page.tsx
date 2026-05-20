import Link from "next/link";
import { getCategories, getRankedTools } from "@/lib/data";
import { createClient } from "@/lib/supabase/server";
import HomepageTabs from "@/components/HomepageTabs";

export const revalidate = 60;

export default async function HomePage() {
  const categories = await getCategories();

  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const firstCat = categories[0];
  const initialTools = firstCat
    ? await getRankedTools(firstCat.slug, user?.id)
    : [];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full opacity-20 animate-orb1"
            style={{ background: "radial-gradient(circle, #00D4FF 0%, transparent 70%)", filter: "blur(80px)" }}
          />
          <div
            className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full opacity-15 animate-orb2"
            style={{ background: "radial-gradient(circle, #F59E0B 0%, transparent 70%)", filter: "blur(80px)" }}
          />
          <div
            className="absolute top-[40%] right-[30%] w-[300px] h-[300px] rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, #A855F7 0%, transparent 70%)", filter: "blur(60px)" }}
          />
        </div>

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-16 pb-10 relative z-10">
          {/* Two-column hero */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left — headline */}
            <div>
              <div className="flex items-center gap-3 mb-6 animate-fadeIn">
                <span className="text-[11px] font-mono font-semibold tracking-[0.2em] uppercase text-[#8888A0]">Discover</span>
                <span className="w-1 h-1 rounded-full bg-[#00D4FF]" />
                <span className="text-[11px] font-mono font-semibold tracking-[0.2em] uppercase text-[#8888A0]">Compare</span>
                <span className="w-1 h-1 rounded-full bg-[#00D4FF]" />
                <span className="text-[11px] font-mono font-semibold tracking-[0.2em] uppercase text-[#8888A0]">Decide</span>
              </div>

              <h1 className="font-syne font-black leading-[1.1] tracking-tight animate-fadeInUp">
                <span className="block text-5xl sm:text-6xl lg:text-7xl text-[#F0F0F5]">
                  The AI Rankings
                </span>
                <span
                  className="block text-5xl sm:text-6xl lg:text-7xl text-transparent bg-clip-text"
                  style={{ backgroundImage: "linear-gradient(100deg, #00D4FF 0%, #38bdf8 40%, #A855F7 100%)" }}
                >
                  People Actually
                </span>
                <span className="block text-6xl sm:text-7xl lg:text-8xl text-[#F59E0B]">
                  Trust.
                </span>
              </h1>
            </div>

            {/* Right — supporting content */}
            <div className="flex flex-col justify-center gap-8 animate-fadeInUp stagger-2">
              <p className="text-base sm:text-lg text-[#8888A0] leading-relaxed border-l-2 border-[#00D4FF]/40 pl-4">
                Benchmark-verified scores meet real community votes — so you always know which AI wins for your specific task. No guessing. No marketing spin.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#rankings"
                  className="px-6 py-3 bg-[#00D4FF] text-[#0A0A0F] font-syne font-bold text-sm rounded-lg hover:bg-[#00c4ef] transition-colors"
                >
                  Explore Rankings
                </a>
                <a
                  href="#how-it-works"
                  className="px-6 py-3 bg-transparent text-[#F0F0F5] font-syne font-semibold text-sm rounded-lg border border-[#1E1E2E] hover:border-[#8888A0] transition-colors"
                >
                  How It Works
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#1E1E2E]">
                {[
                  { value: "22+", label: "AI tools ranked" },
                  { value: "6", label: "Categories" },
                  { value: "100%", label: "Transparent scoring" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="font-mono font-bold text-3xl text-[#F0F0F5]">{stat.value}</div>
                    <div className="text-xs text-[#8888A0] mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rankings — pulled up tight */}
      <section id="rankings" className="max-w-[1200px] mx-auto px-4 sm:px-6 pt-6 pb-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-syne font-bold text-2xl text-[#F0F0F5]">Top Rankings</h2>
          <span className="text-xs text-[#8888A0]">Updated in real time</span>
        </div>
        <HomepageTabs
          categories={categories}
          initialTools={initialTools}
          initialCategorySlug={firstCat?.slug ?? "coding"}
          userId={user?.id}
        />
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-[#13131A] border-y border-[#1E1E2E]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="font-syne font-bold text-3xl text-[#F0F0F5] mb-3">How Rankings Work</h2>
            <p className="text-[#8888A0] text-sm max-w-xl mx-auto">
              A transparent, three-part system designed to resist gaming and surface the genuinely best tools.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                icon: "📊",
                title: "Benchmark Baseline",
                weight: "40%",
                color: "#00D4FF",
                desc: "Every tool starts with a score derived from public benchmarks — Arena AI Elo, MMLU, HumanEval, and others normalized to 0–100. This is our anti-gaming foundation. Users cannot inflate it.",
              },
              {
                step: "02",
                icon: "🗳️",
                title: "Community Votes",
                weight: "45%",
                color: "#22C55E",
                desc: "Registered users upvote and review tools within each category. Community score only activates after 5+ votes, preventing manipulation. The category context matters — a tool great for writing may rank differently in coding.",
              },
              {
                step: "03",
                icon: "✏️",
                title: "Editorial Score",
                weight: "15%",
                color: "#F59E0B",
                desc: "Our team adds a score for UX quality, pricing fairness, support quality, and factors benchmarks miss. Small enough to not override the data, but enough to surface hidden gems.",
              },
            ].map((item) => (
              <div key={item.step} className="bg-[#0A0A0F] border border-[#1E1E2E] rounded-card p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{item.icon}</span>
                  <span
                    className="font-mono text-xs font-bold px-2 py-1 rounded-pill border"
                    style={{ color: item.color, borderColor: `${item.color}40`, background: `${item.color}15` }}
                  >
                    {item.weight}
                  </span>
                </div>
                <div className="font-mono text-xs text-[#8888A0] mb-1">Step {item.step}</div>
                <h3 className="font-syne font-bold text-[#F0F0F5] text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-[#8888A0] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-[#0A0A0F] border border-[#1E1E2E] rounded-card p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="shrink-0">
              <div className="font-mono text-xs text-[#8888A0] mb-1">Composite Score Formula</div>
              <code className="text-[#00D4FF] text-sm font-mono">
                (benchmark × 0.40) + (community × 0.45) + (editorial × 0.15)
              </code>
            </div>
            <div className="flex-1 text-xs text-[#8888A0]">
              Sponsored tools appear above organic rankings with a clear badge. Sponsorship{" "}
              <strong className="text-[#F0F0F5]">does not affect</strong> the composite score.
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-16">
        {user ? (
          <div
            className="rounded-card p-8 sm:p-12 relative overflow-hidden border border-[#22C55E]/20"
            style={{ background: "linear-gradient(135deg, #22C55E08 0%, #00D4FF08 50%, #A855F708 100%)" }}
          >
            <div className="flex flex-col sm:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="text-xs font-mono text-[#22C55E] uppercase tracking-widest mb-2">Your impact</div>
                <h2 className="font-syne font-bold text-2xl sm:text-3xl text-[#F0F0F5] mb-3">
                  Tried one of these tools?<br />Tell the community.
                </h2>
                <p className="text-[#8888A0] text-sm leading-relaxed max-w-md">
                  Your reviews directly shape the community score — the more detail you share, the more accurate the rankings become for everyone.
                </p>
              </div>
              <div className="shrink-0 flex flex-col gap-3 w-full sm:w-auto">
                {[
                  { name: "ElevenLabs", slug: "elevenlabs" },
                  { name: "ChatGPT", slug: "chatgpt" },
                  { name: "Midjourney", slug: "midjourney" },
                ].map((tool) => (
                  <Link
                    key={tool.slug}
                    href={`/tool/${tool.slug}`}
                    className="flex items-center justify-between gap-4 px-4 py-3 bg-[#13131A] border border-[#1E1E2E] hover:border-[#22C55E]/40 rounded-lg transition-colors group"
                  >
                    <span className="text-sm font-semibold text-[#F0F0F5]">{tool.name}</span>
                    <span className="text-xs text-[#22C55E] group-hover:translate-x-0.5 transition-transform">Review →</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div
            className="rounded-card p-8 sm:p-12 text-center relative overflow-hidden border border-[#00D4FF]/20"
            style={{ background: "linear-gradient(135deg, #00D4FF08 0%, #A855F708 50%, #F59E0B08 100%)" }}
          >
            <h2 className="font-syne font-bold text-3xl text-[#F0F0F5] mb-3">
              Help rank the world&apos;s AI tools
            </h2>
            <p className="text-[#8888A0] mb-6 max-w-md mx-auto text-sm">
              Sign up for free to cast votes, write reviews, and help the community find the best AI for every task.
            </p>
            <Link
              href="/login"
              className="inline-flex px-8 py-3 bg-[#00D4FF] text-[#0A0A0F] font-syne font-bold text-sm rounded-lg hover:bg-[#00c4ef] transition-colors"
            >
              Join the community →
            </Link>
          </div>
        )}
      </section>
    </>
  );
}
