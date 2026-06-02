import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Claude AI Review 2026 | RankedAI™",
  description:
    "Read our independent Claude AI review for 2026. See how Claude ranks across coding, writing, research and more on RankedAI™.",
  openGraph: {
    title: "Claude AI Review 2026 | RankedAI™",
    description:
      "Read our independent Claude AI review for 2026. See how Claude ranks across coding, writing, research and more on RankedAI™.",
    type: "article",
  },
};

const pros = [
  "Best-in-class long context (200K+ tokens)",
  "Nuanced, thoughtful reasoning",
  "Exceptional at complex writing and editing",
  "Strong coding across all major languages",
  "Honest about uncertainty — rarely hallucinates confidently",
  "Generous free tier with no login wall for basic use",
];

const cons = [
  "No real-time web search on free tier",
  "No native image generation",
  "API can be expensive at scale",
  "Slower than some competitors at high load",
  "No built-in voice mode",
  "Less plugin/extension ecosystem than ChatGPT",
];

const rankings = [
  { category: "Coding & Development", href: "/coding", position: "#1", color: "#6B1E2E", score: "91" },
  { category: "Writing & Content", href: "/writing", position: "#1", color: "#2D6A4F", score: "91" },
  { category: "Research & Summarisation", href: "/research", position: "#2", color: "#B8963C", score: "89" },
  { category: "Math & Science", href: "/math-science", position: "#3", color: "#6B1E2E", score: "88" },
];

const comparison = [
  {
    feature: "Context window",
    claude: "200K tokens",
    chatgpt: "128K tokens (GPT-4o)",
    gemini: "1M tokens (Gemini 1.5)",
  },
  {
    feature: "Free tier",
    claude: "Yes — Claude.ai",
    chatgpt: "Yes — GPT-4o limited",
    gemini: "Yes — Gemini 1.5 Flash",
  },
  {
    feature: "Pro price",
    claude: "$20/month",
    chatgpt: "$20/month",
    gemini: "$20/month (Advanced)",
  },
  {
    feature: "Coding",
    claude: "★★★★★",
    chatgpt: "★★★★☆",
    gemini: "★★★★☆",
  },
  {
    feature: "Long-form writing",
    claude: "★★★★★",
    chatgpt: "★★★★☆",
    gemini: "★★★☆☆",
  },
  {
    feature: "Real-time web search",
    claude: "Pro only",
    chatgpt: "Plus & above",
    gemini: "All tiers",
  },
  {
    feature: "Image generation",
    claude: "No",
    chatgpt: "Yes (DALL-E 3)",
    gemini: "Yes (Imagen)",
  },
  {
    feature: "API availability",
    claude: "Yes — Anthropic API",
    chatgpt: "Yes — OpenAI API",
    gemini: "Yes — Google AI API",
  },
  {
    feature: "RankedAI™ benchmark score",
    claude: "91",
    chatgpt: "85",
    gemini: "82",
  },
];

const faqItems = [
  {
    question: "What is Claude AI?",
    answer: "Claude is a large language model developed by Anthropic, an AI safety company founded in 2021. It is available at claude.ai and via the Anthropic API. The model family includes Claude 3.5 Sonnet (the primary model for most users), Claude 3.5 Haiku (fast), and Claude 3 Opus (most capable for demanding tasks).",
  },
  {
    question: "Is Claude better than ChatGPT?",
    answer: "For coding, long-form writing, and long-context analysis, Claude scores higher than ChatGPT on RankedAI™ benchmarks. ChatGPT leads on ecosystem breadth — image generation, voice mode, and the GPT store. Claude is the better choice for quality-first output; ChatGPT for the widest feature set.",
  },
  {
    question: "Is Claude free to use?",
    answer: "Yes. Claude offers a free tier at claude.ai with access to Claude 3.5 Sonnet and a daily message limit — no credit card required. Claude Pro costs $20/month and provides five times more usage, priority access at peak times, and all models including Opus.",
  },
  {
    question: "What is Claude best used for?",
    answer: "Claude is best used for complex writing and editing, software development and code review, long-document analysis, and tasks requiring careful reasoning. It holds the #1 position in both Coding and Writing on RankedAI™.",
  },
  {
    question: "What is Claude's context window?",
    answer: "Claude supports up to 200,000 tokens — roughly 150,000 words — in a single context window. This is significantly larger than GPT-4o's 128K limit and makes Claude particularly effective for analysing full documents, large codebases, and multiple research papers in a single session.",
  },
  {
    question: "Who made Claude?",
    answer: "Claude is made by Anthropic, founded in 2021 by Dario Amodei, Daniela Amodei, and other former OpenAI researchers. Anthropic's research focus on AI safety — including its Constitutional AI training technique — directly shapes Claude's careful, accuracy-focused behaviour.",
  },
  {
    question: "Does Claude have an API?",
    answer: "Yes. The Anthropic API provides access to all Claude models on a usage-based pricing model, starting at $3 per million input tokens for Claude 3.5 Sonnet. New accounts receive trial credits to test the API before committing to paid usage.",
  },
  {
    question: "Is Claude safe to use for professional work?",
    answer: "Claude is designed to be more conservative than most AI models — it flags uncertainty, acknowledges the limits of its knowledge, and declines ethically questionable requests. This makes it more reliable for professional use cases where accuracy and appropriate caution matter more than always providing a confident answer.",
  },
];

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Claude AI Review 2026 — Is It the Best AI Available?",
      description: "An independent review of Claude AI for 2026, covering pricing, use cases, benchmark performance, and how it compares to ChatGPT and Gemini.",
      datePublished: "2026-05-25",
      dateModified: "2026-05-25",
      author: { "@type": "Organization", name: "RankedAI™" },
      publisher: { "@type": "Organization", name: "RankedAI™" },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ],
};

export default function ClaudeReview2026() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
      <div className="max-w-[860px] mx-auto px-4 sm:px-6 py-20">

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-[#8A7F74] tabular-nums mb-8">
        <Link href="/" className="hover:text-[#1A1A1A] transition-colors">Home</Link>
        <span>/</span>
        <span className="text-[#1A1A1A]">Claude AI Review 2026</span>
      </div>

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="mb-20">
        <div className="flex flex-wrap items-center gap-3 mb-5">
          <span className="tabular-nums text-[11px] font-semibold tracking-widest uppercase text-[#6B1E2E]">Independent Review</span>
          <span className="w-1 h-1 rounded-full bg-[#D9CFC4]" />
          <span className="tabular-nums text-[11px] text-[#8A7F74]">May 2026</span>
          <span className="w-1 h-1 rounded-full bg-[#D9CFC4]" />
          <span className="tabular-nums text-[11px] text-[#8A7F74]">RankedAI™ Editorial</span>
        </div>

        <h1 className="font-semibold font-black text-5xl sm:text-6xl leading-[1.05] tracking-tight text-[#1A1A1A] mb-6">
          Claude AI Review 2026 —{" "}
          <span
            className="text-transparent bg-clip-text"
            style={{ backgroundImage: "linear-gradient(100deg, #6B1E2E 0%, #6B1E2E 100%)" }}
          >
            Is It the Best AI Available?
          </span>
        </h1>

        <p className="text-lg text-[#8A7F74] leading-relaxed border-l-2 border-[#6B1E2E]/40 pl-4 max-w-[680px]">
          Claude has quietly become the AI that serious users reach for when quality matters more than speed. Built by Anthropic with a focus on safety and nuance, it consistently tops our rankings for coding, writing, and research. But is it right for you? We break down everything — performance, pricing, and where it fits in the current AI landscape.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {["Coding", "Writing", "Research", "Long Context", "API"].map((tag) => (
            <span
              key={tag}
              className="text-[11px] tabular-nums font-semibold px-2.5 py-1 rounded-pill border border-[#D9CFC4] text-[#8A7F74]"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-[#6B1E2E]/30 via-[#6B1E2E]/20 to-transparent mb-20" />

      {/* ── WHAT IS CLAUDE ───────────────────────────────── */}
      <section className="mb-20">
        <div className="flex items-baseline gap-3 mb-4">
          <span className="tabular-nums text-xs text-[#6B1E2E]">01</span>
          <h2 className="font-semibold text-2xl sm:text-3xl leading-tight text-[#1A1A1A]">What is Claude?</h2>
        </div>
        <div className="pl-6 border-l border-[#D9CFC4] space-y-4 text-[#8A7F74] leading-relaxed">
          <p>
            Claude is a family of large language models developed by <strong className="text-[#1A1A1A]">Anthropic</strong>, an AI safety company founded in 2021 by former OpenAI researchers including Dario Amodei and Daniela Amodei. The core philosophy behind Claude is building AI that is helpful, harmless, and honest — a principle that shapes its behaviour in measurable ways.
          </p>
          <p>
            Unlike models that optimise primarily for engagement, Claude is trained using a technique called <strong className="text-[#1A1A1A]">Constitutional AI</strong>, which teaches the model to reason about ethics and self-correct based on a set of guiding principles. In practice, this means Claude tends to give more nuanced, carefully reasoned responses — and is notably more willing to say &ldquo;I&apos;m not sure&rdquo; than to confidently hallucinate an answer.
          </p>
          <p>
            The current model family — <strong className="text-[#1A1A1A]">Claude 3.5 Sonnet, Claude 3.5 Haiku, and Claude 3 Opus</strong> — offers a range of performance and cost trade-offs. Claude 3.5 Sonnet is the sweet spot for most users: fast, capable, and available on the free tier. Opus is the most powerful, designed for demanding analytical and reasoning tasks.
          </p>
          <div className="bg-[#F0EBE1] border border-[#D9CFC4] rounded-lg p-4 mt-2">
            <div className="tabular-nums text-xs text-[#8A7F74] mb-1">RankedAI™ Benchmark Score</div>
            <div className="flex items-center gap-3">
              <span className="tabular-nums font-bold text-3xl text-[#6B1E2E]">91</span>
              <div className="flex-1 h-2 bg-[#D9CFC4] rounded-full overflow-hidden">
                <div className="h-full rounded-full bg-[#6B1E2E]" style={{ width: "91%" }} />
              </div>
              <span className="text-xs text-[#8A7F74]">/ 100</span>
            </div>
            <p className="text-xs text-[#8A7F74] mt-2">Derived from LMSYS Arena Elo, MMLU, and HumanEval benchmarks.</p>
          </div>
        </div>
      </section>

      {/* ── WHAT IS CLAUDE BEST AT ───────────────────────── */}
      <section className="mb-20">
        <div className="flex items-baseline gap-3 mb-4">
          <span className="tabular-nums text-xs text-[#6B1E2E]">02</span>
          <h2 className="font-semibold text-2xl sm:text-3xl leading-tight text-[#1A1A1A]">What is Claude best at?</h2>
        </div>
        <div className="pl-6 border-l border-[#D9CFC4] space-y-6 text-[#8A7F74] leading-relaxed">
          <p>Claude excels across four use cases more than any other AI currently available.</p>

          {[
            {
              icon: "💻",
              color: "#6B1E2E",
              title: "Coding",
              body: "Claude is our top-ranked coding AI on RankedAI™, edging out GitHub Copilot on overall composite score. It understands large codebases without losing context, writes clean idiomatic code across 40+ languages, and explains its reasoning rather than just dumping code. For debugging, architecture decisions, and code review it is particularly strong — it will tell you when your approach is flawed rather than just doing what you asked.",
            },
            {
              icon: "✍️",
              color: "#2D6A4F",
              title: "Writing & Content",
              body: "Claude is the best AI writing assistant available for long-form, nuanced, and tone-sensitive writing. It follows complex style instructions precisely, maintains voice consistency across thousands of words, and produces prose that doesn't feel AI-generated. Whether you're drafting essays, marketing copy, technical documentation, or fiction, Claude's outputs require less editing than any competitor.",
            },
            {
              icon: "🔬",
              color: "#B8963C",
              title: "Research & Analysis",
              body: "Claude's 200K token context window is a genuine research superpower. You can paste an entire 150-page PDF, a full codebase, or multiple research papers and ask questions across all of it simultaneously. It synthesises information accurately, draws connections between sources, and — critically — flags when it is uncertain rather than inventing citations.",
            },
            {
              icon: "📄",
              color: "#6B1E2E",
              title: "Long Context Tasks",
              body: "No AI handles long context as reliably as Claude. At 200K tokens (roughly 150,000 words), it maintains coherence across extremely long documents with minimal degradation. Summarising annual reports, reviewing legal contracts, analysing full academic papers, or working with large codebases — these are tasks where Claude's lead over the competition is most pronounced.",
            },
          ].map((item) => (
            <div key={item.title} className="bg-[#F0EBE1] border border-[#D9CFC4] rounded-card p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{item.icon}</span>
                <h3 className="font-semibold text-[#1A1A1A] text-base" style={{ color: item.color }}>{item.title}</h3>
              </div>
              <p className="text-sm leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────────── */}
      <section className="mb-20">
        <div className="flex items-baseline gap-3 mb-4">
          <span className="tabular-nums text-xs text-[#6B1E2E]">03</span>
          <h2 className="font-semibold text-2xl sm:text-3xl leading-tight text-[#1A1A1A]">Claude pricing</h2>
        </div>
        <div className="pl-6 border-l border-[#D9CFC4] space-y-4 text-[#8A7F74] leading-relaxed">
          <p>Claude offers three tiers. The free tier is genuinely useful — not a crippled trial.</p>

          <div className="grid sm:grid-cols-3 gap-4 mt-2">
            {[
              {
                tier: "Free",
                price: "$0",
                period: "forever",
                color: "#8A7F74",
                features: ["Claude 3.5 Sonnet access", "Limited daily messages", "claude.ai web interface", "No credit card required"],
              },
              {
                tier: "Pro",
                price: "$20",
                period: "/month",
                color: "#6B1E2E",
                features: ["5× more usage than free", "Priority access at peak times", "Access to all Claude models", "Projects & memory features"],
                highlight: true,
              },
              {
                tier: "API",
                price: "Usage",
                period: "based",
                color: "#B8963C",
                features: ["All Claude models via API", "From $3 per 1M input tokens", "Full programmatic access", "High rate limits available"],
              },
            ].map((plan) => (
              <div
                key={plan.tier}
                className={`rounded-card p-5 border overflow-hidden ${plan.highlight ? "border-[#6B1E2E]/40 bg-[#6B1E2E]/5" : "border-[#D9CFC4] bg-[#F0EBE1]"}`}
              >
                <div className="tabular-nums text-xs text-[#8A7F74] mb-1">{plan.tier}</div>
                <div className="flex items-baseline gap-1 mb-4 flex-wrap">
                  <span className="font-semibold font-black text-3xl" style={{ color: plan.color }}>{plan.price}</span>
                  <span className="text-xs text-[#8A7F74]">{plan.period}</span>
                </div>
                <ul className="space-y-1.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-2 text-xs">
                      <span className="text-[#2D6A4F] shrink-0">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-sm mt-2">
            For most individuals and small teams, <strong className="text-[#1A1A1A]">Claude Pro at $20/month</strong> is the sweet spot. The API is worth considering if you are building applications or need to process large volumes of text programmatically.
          </p>
        </div>
      </section>

      {/* ── PROS & CONS ──────────────────────────────────── */}
      <section className="mb-20">
        <div className="flex items-baseline gap-3 mb-4">
          <span className="tabular-nums text-xs text-[#6B1E2E]">04</span>
          <h2 className="font-semibold text-2xl sm:text-3xl leading-tight text-[#1A1A1A]">Claude pros and cons</h2>
        </div>
        <div className="pl-6 border-l border-[#D9CFC4]">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-[#F0EBE1] border border-[#2D6A4F]/20 rounded-card p-5">
              <h3 className="font-semibold text-[#2D6A4F] text-sm mb-4 uppercase tracking-wider">Pros</h3>
              <ul className="space-y-2.5">
                {pros.map((pro) => (
                  <li key={pro} className="flex gap-2.5 text-sm text-[#8A7F74]">
                    <span className="text-[#2D6A4F] shrink-0 mt-0.5">✓</span>
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#F0EBE1] border border-[#EF4444]/20 rounded-card p-5">
              <h3 className="font-semibold text-[#EF4444] text-sm mb-4 uppercase tracking-wider">Cons</h3>
              <ul className="space-y-2.5">
                {cons.map((con) => (
                  <li key={con} className="flex gap-2.5 text-sm text-[#8A7F74]">
                    <span className="text-[#EF4444] shrink-0 mt-0.5">✕</span>
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW CLAUDE RANKS ─────────────────────────────── */}
      <section className="mb-20">
        <div className="flex items-baseline gap-3 mb-4">
          <span className="tabular-nums text-xs text-[#6B1E2E]">05</span>
          <h2 className="font-semibold text-2xl sm:text-3xl leading-tight text-[#1A1A1A]">How Claude ranks on RankedAI™</h2>
        </div>
        <div className="pl-6 border-l border-[#D9CFC4] space-y-4 text-[#8A7F74] leading-relaxed">
          <p>
            Claude appears in four of RankedAI™&apos;s six category rankings. Scores are calculated using our{" "}
            <Link href="/#how-it-works" className="text-[#6B1E2E] hover:underline">hybrid algorithm</Link>
            {" "}combining public benchmarks (40%), community votes (45%), and editorial assessment (15%).
          </p>
          <div className="grid sm:grid-cols-2 gap-3 mt-2">
            {rankings.map((r) => (
              <Link
                key={r.category}
                href={r.href}
                className="group bg-[#F0EBE1] border border-[#D9CFC4] hover:border-[#6B1E2E]/30 rounded-card p-4 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs tabular-nums text-[#8A7F74]">{r.category}</span>
                  <span className="text-xs tabular-nums font-bold" style={{ color: r.color }}>{r.position}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-1.5 bg-[#D9CFC4] rounded-full overflow-hidden">
                    <div className="h-full rounded-full transition-all" style={{ width: `${r.score}%`, backgroundColor: r.color }} />
                  </div>
                  <span className="tabular-nums font-bold text-lg text-[#1A1A1A]">{r.score}</span>
                </div>
                <div className="text-[10px] text-[#8A7F74] mt-2 group-hover:text-[#6B1E2E] transition-colors">
                  View full rankings →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ─────────────────────────────── */}
      <section className="mb-20">
        <div className="flex items-baseline gap-3 mb-4">
          <span className="tabular-nums text-xs text-[#6B1E2E]">06</span>
          <h2 className="font-semibold text-2xl sm:text-3xl leading-tight text-[#1A1A1A]">Claude vs ChatGPT vs Gemini</h2>
        </div>
        <div className="pl-6 border-l border-[#D9CFC4]">
          <p className="text-sm text-[#8A7F74] leading-relaxed mb-5">
            The three dominant general-purpose AI assistants each have a different profile. Here&apos;s how they compare on the dimensions that matter most.
          </p>
          <div className="overflow-x-auto rounded-card border border-[#D9CFC4]">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#D9CFC4] bg-[#F0EBE1]">
                  <th className="text-left px-4 py-3 font-semibold font-semibold text-[#8A7F74] text-xs uppercase tracking-wider">Feature</th>
                  <th className="text-left px-4 py-3 font-semibold font-semibold text-[#6B1E2E] text-xs uppercase tracking-wider">Claude</th>
                  <th className="text-left px-4 py-3 font-semibold font-semibold text-[#8A7F74] text-xs uppercase tracking-wider">ChatGPT</th>
                  <th className="text-left px-4 py-3 font-semibold font-semibold text-[#8A7F74] text-xs uppercase tracking-wider">Gemini</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-[#D9CFC4] last:border-0 ${i % 2 === 0 ? "bg-[#FAF7F2]" : "bg-[#F0EBE1]/50"}`}
                  >
                    <td className="px-4 py-3 text-[#8A7F74] tabular-nums text-xs">{row.feature}</td>
                    <td className="px-4 py-3 text-[#1A1A1A] font-semibold text-xs">{row.claude}</td>
                    <td className="px-4 py-3 text-[#8A7F74] text-xs">{row.chatgpt}</td>
                    <td className="px-4 py-3 text-[#8A7F74] text-xs">{row.gemini}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── CONCLUSION ───────────────────────────────────── */}
      <section className="mb-20">
        <div className="flex items-baseline gap-3 mb-4">
          <span className="tabular-nums text-xs text-[#6B1E2E]">07</span>
          <h2 className="font-semibold text-2xl sm:text-3xl leading-tight text-[#1A1A1A]">Verdict</h2>
        </div>
        <div className="pl-6 border-l border-[#D9CFC4] space-y-4 text-[#8A7F74] leading-relaxed">
          <p>
            Claude is the best all-round AI assistant available in 2026 for users who prioritise <strong className="text-[#1A1A1A]">quality of output over breadth of features</strong>. It doesn&apos;t generate images, it doesn&apos;t have a plugin marketplace the size of ChatGPT&apos;s, and it isn&apos;t integrated into every Google product like Gemini. What it does — reasoning, writing, coding, and long-context analysis — it does better than anything else available.
          </p>
          <p>
            If you write for a living, build software, or regularly need to synthesise large amounts of information, Claude Pro at $20/month is one of the highest-ROI tools you can buy. If you need an AI that can browse the web, generate images, and integrate with your existing Google Workspace, Gemini may serve you better.
          </p>
          <p>
            On RankedAI™, Claude holds the top spot in both Coding and Writing, and places in the top three in every category it appears in. No other AI achieves that consistency across categories.
          </p>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section className="mb-20">
        <div className="flex items-baseline gap-3 mb-4">
          <span className="tabular-nums text-xs text-[#6B1E2E]">08</span>
          <h2 className="font-semibold text-2xl sm:text-3xl leading-tight text-[#1A1A1A]">Frequently asked questions</h2>
        </div>
        <div className="pl-6 border-l border-[#D9CFC4] space-y-4">
          {faqItems.map((item) => (
            <div key={item.question} className="bg-[#F0EBE1] border border-[#D9CFC4] rounded-card p-5">
              <h3 className="font-semibold text-sm text-[#1A1A1A] mb-3">{item.question}</h3>
              <p className="text-sm text-[#8A7F74] leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div
        className="rounded-card p-8 text-center relative overflow-hidden border border-[#6B1E2E]/20 mb-12"
        style={{ background: "linear-gradient(135deg, #6B1E2E08 0%, #6B1E2E08 50%, #B8963C08 100%)" }}
      >
        <div className="tabular-nums text-xs text-[#6B1E2E] mb-3 uppercase tracking-widest">See where Claude ranks</div>
        <h3 className="font-semibold text-2xl sm:text-3xl leading-tight text-[#1A1A1A] mb-3">
          Compare Claude against every AI tool
        </h3>
        <p className="text-sm text-[#8A7F74] mb-6 max-w-md mx-auto">
          RankedAI™ ranks 22+ AI tools by benchmark scores, community votes, and editorial assessment across six task categories.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="/"
            className="px-6 py-2.5 bg-[#6B1E2E] text-[#FAF7F2] font-semibold text-sm rounded-lg hover:bg-[#8B2438] transition-colors"
          >
            Explore all rankings →
          </Link>
          <Link
            href="/coding"
            className="px-6 py-2.5 bg-transparent text-[#1A1A1A] font-semibold font-semibold text-sm rounded-lg border border-[#D9CFC4] hover:border-[#8A7F74] transition-colors"
          >
            Claude in Coding
          </Link>
        </div>
      </div>

      {/* Nav */}
      <div className="pt-6 border-t border-[#D9CFC4] flex flex-wrap gap-4 text-xs">
        <Link href="/" className="text-[#8A7F74] hover:text-[#1A1A1A] transition-colors">← Home</Link>
        <Link href="/coding" className="text-[#8A7F74] hover:text-[#1A1A1A] transition-colors">Coding Rankings</Link>
        <Link href="/writing" className="text-[#8A7F74] hover:text-[#1A1A1A] transition-colors">Writing Rankings</Link>
        <Link href="/research" className="text-[#8A7F74] hover:text-[#1A1A1A] transition-colors">Research Rankings</Link>
        <Link href="/tool/claude" className="text-[#8A7F74] hover:text-[#1A1A1A] transition-colors">Claude tool page</Link>
      </div>
    </div>
    </>
  );
}
