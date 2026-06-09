import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Claude Fable 5 Review 2026 — Anthropic's Most Powerful Public AI | RankedAI™",
  description:
    "Claude Fable 5 launched June 9 2026 with an 80.3% SWE-bench Pro score — the highest ever for a public model. Free on Pro plans through June 22. Full review on RankedAI™.",
  openGraph: {
    title: "Claude Fable 5 Review 2026 — Anthropic's Most Powerful Public AI | RankedAI™",
    description:
      "Claude Fable 5 launched June 9 2026 with an 80.3% SWE-bench Pro score — the highest ever for a public model. Free on Pro plans through June 22.",
    type: "article",
  },
};

const faqItems = [
  {
    question: "What is Claude Fable 5?",
    answer:
      "Claude Fable 5 is Anthropic's most powerful publicly available AI model, released on June 9, 2026. It is the first Mythos-class model to be made public — sitting above the Opus family in raw capability. It achieves an 80.3% score on SWE-bench Pro, the highest ever recorded by a publicly released model, and supports a 1 million token context window. The API model ID is claude-fable-5.",
  },
  {
    question: "Is Claude Fable 5 free?",
    answer:
      "Claude Fable 5 is free for all Pro, Max, Team, and Enterprise plan subscribers through June 22, 2026. After that date it requires usage credits. For API access, pricing is $10 per million input tokens and $50 per million output tokens. There is no free tier for Fable 5 access — a Pro plan or higher is required.",
  },
  {
    question: "How do I access Claude Fable 5?",
    answer:
      "You can access Claude Fable 5 directly at claude.ai on any Pro, Max, Team, or Enterprise plan. Select 'Claude Fable 5' from the model picker. For API access, use the model ID claude-fable-5 via the Anthropic API, AWS Bedrock, Google Vertex AI, Microsoft Foundry, or GitHub Copilot.",
  },
  {
    question: "What is the Claude Fable 5 API ID?",
    answer:
      "The Claude Fable 5 API model ID is claude-fable-5. Use this in the model parameter of any Anthropic API request. It is also available on AWS Bedrock as anthropic.claude-fable-5-v1, on Google Vertex AI as claude-fable-5@20260609, and on Microsoft Foundry under the Claude Fable 5 deployment.",
  },
  {
    question: "How does Fable 5 compare to GPT-5?",
    answer:
      "Claude Fable 5 outperforms GPT-5 on coding benchmarks, with an 80.3% SWE-bench Pro score versus GPT-5's published figures. Fable 5 also offers a significantly larger context window — 1 million tokens versus GPT-5's 128K. On multi-step reasoning and long-horizon agentic tasks, independent evaluations consistently place Fable 5 ahead. GPT-5 retains advantages in certain creative writing and multimodal tasks. For software engineering and research, Fable 5 is the stronger model.",
  },
  {
    question: "What is the difference between Claude Fable 5 and Claude Mythos 5?",
    answer:
      "Claude Mythos 5 is Anthropic's restricted frontier model, available only to select research partners and government clients. Claude Fable 5 uses the same underlying architecture with additional safety classifiers applied for general public deployment. In practice, Fable 5 delivers capability within 2–3% of Mythos 5 on benchmarks, making it the highest-capability model available without a restricted access agreement.",
  },
  {
    question: "Is Claude Fable 5 the best AI available?",
    answer:
      "On coding and multi-step reasoning benchmarks, yes — Claude Fable 5 holds the highest public benchmark scores as of June 9, 2026. It ranks #1 on RankedAI™ across Coding, Writing, Research, and Math & Science categories, each with a composite score of 95. For everyday chat tasks and image generation, other models may be more cost-effective. But for technically demanding tasks requiring depth, precision, and long context, Fable 5 is currently the best publicly available model.",
  },
  {
    question: "When does the free window close?",
    answer:
      "The free access window for Claude Fable 5 on Pro, Max, Team, and Enterprise plans closes on June 22, 2026. After that date, usage will draw from your plan's usage credit allowance. Anthropic has not announced post-window pricing for non-API plan tiers beyond the $10/M input, $50/M output API rates.",
  },
];

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Claude Fable 5 Review 2026 — Anthropic's Most Powerful Public AI",
      description:
        "Claude Fable 5 launched June 9 2026 with an 80.3% SWE-bench Pro score — the highest ever for a public model. Free on Pro plans through June 22.",
      datePublished: "2026-06-09",
      dateModified: "2026-06-09",
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

const bestAtItems = [
  {
    icon: "💻",
    color: "#6B1E2E",
    title: "Coding — 80.3% SWE-bench Pro",
    body: "Claude Fable 5 achieves 80.3% on SWE-bench Pro — the highest score ever recorded by a publicly released model. It handles complex multi-file refactors, debugging across large codebases, and generating production-ready code from natural language specifications. Engineers using Fable 5 report it resolves issues that previous models, including Sonnet 4.6 and GPT-5, consistently failed to complete independently.",
  },
  {
    icon: "🔗",
    color: "#B8963C",
    title: "Long-horizon agentic tasks",
    body: "Fable 5 is the first public model capable of reliably completing agentic workflows spanning dozens of sequential steps without deviation from the original objective. It maintains accurate state across long task chains, handles ambiguous intermediate results, and recovers from tool failures without human intervention. For autonomous coding agents, research agents, and multi-step business process automation, Fable 5 operates at a fundamentally different level of reliability than previous public models.",
  },
  {
    icon: "🧠",
    color: "#6B1E2E",
    title: "Difficult multi-step reasoning",
    body: "On reasoning-intensive tasks — mathematical proofs, legal analysis, scientific hypothesis evaluation, and structured argumentation — Fable 5 demonstrates a step change in quality over Sonnet 4.6. It sustains coherent chains of reasoning across thousands of tokens, catches its own logical errors mid-generation, and produces conclusions with explicitly traceable justification. It is the first public model that researchers regularly trust with end-to-end reasoning tasks without intermediate checking.",
  },
  {
    icon: "📄",
    color: "#2D6A4F",
    title: "1 million token context",
    body: "Fable 5 supports a 1 million token context window — equivalent to approximately 750,000 words, or a full law firm's case file, an entire software repository, or a multi-volume research corpus. Unlike smaller context models, Fable 5 maintains coherent attention across the full context window, accurately answering questions about content at any position in the document. For legal review, codebase analysis, and research synthesis, this context capability is transformative.",
  },
  {
    icon: "🔬",
    color: "#6B1E2E",
    title: "Complex research and analysis",
    body: "Fable 5 processes and synthesises information from dense academic papers, technical documentation, and large datasets with a depth that makes it genuinely useful for professional research. It identifies contradictions between sources, generates structured literature reviews, and proposes novel research directions with explicit grounding in existing literature. Research teams at leading institutions have used Fable 5 for systematic reviews and technical due diligence that previously required specialist human analysts.",
  },
  {
    icon: "✍️",
    color: "#8A7F74",
    title: "Long-form professional writing",
    body: "Fable 5 produces the most coherent long-form writing of any public model. For white papers, technical documentation, grant applications, and strategic reports requiring sustained argumentative structure across 10,000+ words, it maintains consistency of voice, argument, and style in ways that shorter-context models cannot. It also excels at adapting tone and register to specific audiences — from technical to executive — within a single document.",
  },
];

const rankingItems = [
  { category: "Coding & Development", href: "/coding", score: "95", rank: "#1", color: "#6B1E2E" },
  { category: "Writing & Content", href: "/writing", score: "95", rank: "#1", color: "#6B1E2E" },
  { category: "Research & Summarization", href: "/research", score: "95", rank: "#1", color: "#6B1E2E" },
  { category: "Math & Science", href: "/math-science", score: "95", rank: "#1", color: "#6B1E2E" },
];

const comparison = [
  {
    feature: "SWE-bench Pro score",
    fable5: "80.3% — highest public",
    claude: "~70% (Sonnet 4.6)",
    chatgpt: "~71.7% (o3)",
  },
  {
    feature: "Context window",
    fable5: "1,000,000 tokens",
    claude: "200,000 tokens",
    chatgpt: "128,000 tokens",
  },
  {
    feature: "Pricing (consumer)",
    fable5: "Free on Pro through Jun 22",
    claude: "Included on Pro ($20/mo)",
    chatgpt: "Included on Plus ($20/mo)",
  },
  {
    feature: "API pricing (output)",
    fable5: "$50 / M tokens",
    claude: "$15 / M tokens",
    chatgpt: "$60 / M tokens (o3)",
  },
  {
    feature: "Best use case",
    fable5: "Complex coding & agentic tasks",
    claude: "Balanced everyday AI",
    chatgpt: "Reasoning & math",
  },
  {
    feature: "Availability",
    fable5: "claude.ai + API + Bedrock/Vertex/Azure",
    claude: "claude.ai + API",
    chatgpt: "chatgpt.com + API",
  },
  {
    feature: "RankedAI™ Coding score",
    fable5: "95",
    claude: "88 (Sonnet 4.6)",
    chatgpt: "87 (o3)",
  },
];

export default function ClaudeFable5Review2026() {
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
          <Link href="/blog/claude-ai-review-2026" className="hover:text-[#1A1A1A] transition-colors">Guides</Link>
          <span>/</span>
          <span className="text-[#1A1A1A]">Claude Fable 5 Review 2026</span>
        </div>

        {/* ── HERO ─────────────────────────────────────────── */}
        <section className="mb-8">
          {/* Breaking news eyebrow */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span
              className="tabular-nums text-[11px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-pill"
              style={{ color: "#6B1E2E", background: "rgba(107,30,46,0.08)", border: "0.5px solid rgba(107,30,46,0.25)" }}
            >
              🔴 Breaking
            </span>
            <span className="w-1 h-1 rounded-full bg-[#D9CFC4]" />
            <span
              className="tabular-nums text-[11px] font-semibold tracking-widest uppercase"
              style={{ color: "#6B1E2E" }}
            >
              Released June 9, 2026 · Updated today
            </span>
            <span className="w-1 h-1 rounded-full bg-[#D9CFC4]" />
            <span className="tabular-nums text-[11px] text-[#8A7F74]">RankedAI™ Editorial</span>
          </div>

          {/* Model badge */}
          <div className="inline-flex items-center gap-2 rounded-xl px-5 py-3 mb-6"
            style={{ background: "rgba(107,30,46,0.06)", border: "0.5px solid rgba(107,30,46,0.2)" }}>
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center font-semibold text-white text-xs"
              style={{ background: "#6B1E2E" }}
            >
              F5
            </div>
            <div>
              <div className="text-xs font-semibold text-[#1A1A1A]">Claude Fable 5</div>
              <div className="text-[10px] text-[#8A7F74] tabular-nums">by Anthropic · model id: claude-fable-5</div>
            </div>
          </div>

          <h1 className="font-semibold text-5xl sm:text-6xl leading-[1.05] tracking-tight text-[#1A1A1A] mb-6">
            Claude Fable 5 Review —{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(100deg, #6B1E2E 0%, #B8963C 100%)" }}
            >
              Anthropic&apos;s Most Powerful AI Is Now Public
            </span>
          </h1>

          <p className="text-lg text-[#8A7F74] leading-relaxed border-l-2 pl-4 max-w-[680px]"
            style={{ borderColor: "rgba(107,30,46,0.4)" }}>
            Anthropic today released Claude Fable 5, the first publicly available Mythos-class model in the Claude family. With an 80.3% SWE-bench Pro score — the highest ever recorded for a public model — Fable 5 represents a meaningful step change over its predecessors. We reviewed it across every major use case on the day of launch.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {["Coding", "Agentic AI", "Reasoning", "Research", "1M Context", "Anthropic"].map((tag) => (
              <span
                key={tag}
                className="text-[11px] tabular-nums font-semibold px-2.5 py-1 rounded-pill border border-[#D9CFC4] text-[#8A7F74]"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* ── QUICK ANSWER ─────────────────────────────────── */}
        <div
          className="rounded-card p-5 mb-12"
          style={{ background: "rgba(107,30,46,0.04)", border: "0.5px solid rgba(107,30,46,0.2)" }}
        >
          <div
            className="tabular-nums text-[10px] font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#6B1E2E" }}
          >
            Quick Answer
          </div>
          <p className="text-sm text-[#1A1A1A] leading-relaxed">
            <strong>Claude Fable 5 is Anthropic&apos;s first publicly available Mythos-class AI model</strong>, released June 9, 2026. It scores 80.3% on SWE-bench Pro — the highest of any public model ever — and is free on Pro plans through June 22, 2026. API model ID:{" "}
            <code
              className="text-xs px-1.5 py-0.5 rounded font-mono"
              style={{ background: "rgba(107,30,46,0.08)", color: "#6B1E2E" }}
            >
              claude-fable-5
            </code>
          </p>
        </div>

        {/* Divider */}
        <div
          className="h-px mb-20"
          style={{ background: "linear-gradient(90deg, rgba(107,30,46,0.3) 0%, rgba(184,150,60,0.2) 50%, transparent 100%)" }}
        />

        {/* ── 01 WHAT IS CLAUDE FABLE 5 ────────────────────── */}
        <section className="mb-20">
          <div className="flex items-baseline gap-3 mb-4">
            <span className="tabular-nums text-xs" style={{ color: "#6B1E2E" }}>01</span>
            <h2 className="font-semibold text-2xl sm:text-3xl leading-tight text-[#1A1A1A]">What is Claude Fable 5?</h2>
          </div>
          <div className="pl-6 border-l border-[#D9CFC4] space-y-4 text-[#8A7F74] leading-relaxed">
            <p>
              Claude Fable 5 is the <strong className="text-[#1A1A1A]">first Mythos-class model made publicly available</strong> by Anthropic. It sits above the entire Opus family in raw capability — a distinction that has not previously been offered to general public users. Released on June 9, 2026, it represents the most significant public model release in Anthropic&apos;s history.
            </p>
            <p>
              The <strong className="text-[#1A1A1A]">Mythos architecture</strong> was previously restricted to select government and research partners under Anthropic&apos;s controlled access programme. Fable 5 uses the same underlying model with additional safety classifiers applied for general deployment — delivering capability within 2–3% of the restricted Claude Mythos 5 on benchmark tasks.
            </p>
            <p>
              The model achieves <strong className="text-[#1A1A1A]">80.3% on SWE-bench Pro</strong> — the most rigorous real-world coding benchmark available — surpassing every previously released public model. It supports a <strong className="text-[#1A1A1A]">1 million token context window</strong>, enabling analysis of entire codebases, legal document sets, and research corpora in a single conversation.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-2">
              {[
                { label: "Model class", value: "Mythos (first public release)" },
                { label: "Released", value: "June 9, 2026" },
                { label: "API model ID", value: "claude-fable-5" },
                { label: "Context window", value: "1,000,000 tokens" },
                { label: "SWE-bench Pro", value: "80.3% — highest ever public" },
                { label: "Free access until", value: "June 22, 2026 (Pro+)" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-3 rounded-lg p-3"
                  style={{ background: "#F0EBE1", border: "0.5px solid #D9CFC4" }}
                >
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-widest text-[#8A7F74] mb-0.5">{item.label}</div>
                    <div className="text-sm font-semibold text-[#1A1A1A]">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="rounded-lg p-4 mt-2"
              style={{ background: "#F0EBE1", border: "0.5px solid #D9CFC4" }}
            >
              <div className="tabular-nums text-xs text-[#8A7F74] mb-1">RankedAI™ Composite Score</div>
              <div className="flex items-center gap-3">
                <span className="tabular-nums font-bold text-3xl" style={{ color: "#6B1E2E" }}>95</span>
                <div className="flex-1 h-2 bg-[#D9CFC4] rounded-full overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: "95%", background: "#6B1E2E" }} />
                </div>
                <span className="text-xs text-[#8A7F74]">/ 100</span>
              </div>
              <p className="text-xs text-[#8A7F74] mt-2">#1 in Coding, Writing, Research, and Math &amp; Science on RankedAI™. Highest composite score across all tracked categories.</p>
            </div>
          </div>
        </section>

        {/* ── 02 WHAT IS FABLE 5 BEST AT ───────────────────── */}
        <section className="mb-20">
          <div className="flex items-baseline gap-3 mb-4">
            <span className="tabular-nums text-xs" style={{ color: "#6B1E2E" }}>02</span>
            <h2 className="font-semibold text-2xl sm:text-3xl leading-tight text-[#1A1A1A]">What is Claude Fable 5 best at?</h2>
          </div>
          <div className="pl-6 border-l border-[#D9CFC4] space-y-6 text-[#8A7F74] leading-relaxed">
            <p>
              Fable 5 delivers its largest performance gains over previous public models on tasks requiring depth, persistence, and scale. Here is where it excels most.
            </p>
            {bestAtItems.map((item) => (
              <div
                key={item.title}
                className="rounded-card p-5"
                style={{ background: "#F0EBE1", border: "0.5px solid #D9CFC4" }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{item.icon}</span>
                  <h3 className="font-semibold text-base" style={{ color: item.color }}>{item.title}</h3>
                </div>
                <p className="text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 03 PRICING ───────────────────────────────────── */}
        <section className="mb-20">
          <div className="flex items-baseline gap-3 mb-4">
            <span className="tabular-nums text-xs" style={{ color: "#6B1E2E" }}>03</span>
            <h2 className="font-semibold text-2xl sm:text-3xl leading-tight text-[#1A1A1A]">Claude Fable 5 pricing</h2>
          </div>
          <div className="pl-6 border-l border-[#D9CFC4] space-y-4 text-[#8A7F74] leading-relaxed">
            <p>
              Claude Fable 5 is available at no additional cost through June 22, 2026 on qualifying Anthropic plans — the most powerful model Anthropic has ever offered at no premium.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-2">
              {[
                {
                  tier: "Pro / Max",
                  price: "Free",
                  period: "through Jun 22",
                  color: "#6B1E2E",
                  note: "Free Fable 5 access included with existing Pro or Max subscription",
                  features: [
                    "Unlimited Fable 5 access until June 22",
                    "Then draws from usage credits",
                    "Full 1M context window",
                    "All capabilities unlocked",
                  ],
                  highlight: true,
                },
                {
                  tier: "Team / Enterprise",
                  price: "Free",
                  period: "through Jun 22",
                  color: "#B8963C",
                  note: "Included for all seats on Team or Enterprise plans through June 22",
                  features: [
                    "Available for all team members",
                    "Admin usage controls",
                    "Data privacy guarantees",
                    "Priority capacity access",
                  ],
                },
                {
                  tier: "API",
                  price: "$10",
                  period: "/ M input tokens",
                  color: "#8A7F74",
                  note: "Output tokens: $50 per million",
                  features: [
                    "$10 / M input tokens",
                    "$50 / M output tokens",
                    "Available on Bedrock, Vertex AI",
                    "Microsoft Foundry · GitHub Copilot",
                  ],
                },
                {
                  tier: "After June 22",
                  price: "Credits",
                  period: "required",
                  color: "#8A7F74",
                  note: "Usage credit drawdown; Pro plan credit rates not yet announced",
                  features: [
                    "Usage credits from plan balance",
                    "Credit rates TBA by Anthropic",
                    "API rates unchanged",
                    "Monitor Anthropic pricing page",
                  ],
                },
              ].map((item) => (
                <div
                  key={item.tier}
                  className="rounded-card p-5 relative"
                  style={{
                    background: item.highlight ? "rgba(107,30,46,0.04)" : "#F0EBE1",
                    border: item.highlight ? "0.5px solid rgba(107,30,46,0.3)" : "0.5px solid #D9CFC4",
                  }}
                >
                  {item.highlight && (
                    <div
                      className="absolute top-3 right-3 text-[10px] font-semibold px-2 py-0.5 rounded-pill"
                      style={{ background: "rgba(107,30,46,0.1)", color: "#6B1E2E", border: "0.5px solid rgba(107,30,46,0.2)" }}
                    >
                      Best value
                    </div>
                  )}
                  <div className="text-xs font-semibold uppercase tracking-widest text-[#8A7F74] mb-1">{item.tier}</div>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-2xl font-bold" style={{ color: item.color }}>{item.price}</span>
                    <span className="text-xs text-[#8A7F74]">{item.period}</span>
                  </div>
                  <p className="text-xs text-[#8A7F74] mb-3 leading-relaxed">{item.note}</p>
                  <ul className="space-y-1.5">
                    {item.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs text-[#8A7F74]">
                        <span className="mt-px" style={{ color: item.color }}>—</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div
              className="rounded-lg p-4 mt-4"
              style={{ background: "rgba(107,30,46,0.04)", border: "0.5px solid rgba(107,30,46,0.2)" }}
            >
              <p className="text-sm text-[#8A7F74] leading-relaxed">
                <strong className="text-[#1A1A1A]">Available on:</strong> Anthropic API (direct), AWS Bedrock, Google Vertex AI, Microsoft Foundry, and GitHub Copilot. No configuration changes are required — simply update the model ID to{" "}
                <code
                  className="text-xs px-1.5 py-0.5 rounded font-mono"
                  style={{ background: "rgba(107,30,46,0.08)", color: "#6B1E2E" }}
                >
                  claude-fable-5
                </code>{" "}
                in any existing Claude API integration.
              </p>
            </div>
          </div>
        </section>

        {/* ── 04 RANKINGS ──────────────────────────────────── */}
        <section className="mb-20">
          <div className="flex items-baseline gap-3 mb-4">
            <span className="tabular-nums text-xs" style={{ color: "#6B1E2E" }}>04</span>
            <h2 className="font-semibold text-2xl sm:text-3xl leading-tight text-[#1A1A1A]">How Claude Fable 5 ranks on RankedAI™</h2>
          </div>
          <div className="pl-6 border-l border-[#D9CFC4] space-y-4 text-[#8A7F74] leading-relaxed">
            <p>
              Claude Fable 5 enters RankedAI™ rankings today at #1 across four major categories — the first model in RankedAI™ history to hold the top position in multiple categories simultaneously at launch with a composite score of 95.
            </p>

            <div className="space-y-3 mt-2">
              {rankingItems.map((item) => (
                <Link
                  key={item.category}
                  href={item.href}
                  className="flex items-center gap-4 rounded-card p-4 group transition-all hover:shadow-sm"
                  style={{ background: "#F0EBE1", border: "0.5px solid #D9CFC4" }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-sm shrink-0"
                    style={{ background: item.color }}
                  >
                    {item.rank}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-sm text-[#1A1A1A] group-hover:text-[#6B1E2E] transition-colors">{item.category}</div>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex-1 h-1.5 bg-[#D9CFC4] rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{ width: `${item.score}%`, background: item.color }}
                        />
                      </div>
                      <span className="tabular-nums text-xs font-semibold text-[#8A7F74] shrink-0">{item.score}/100</span>
                    </div>
                  </div>
                  <span className="text-xs text-[#8A7F74] group-hover:text-[#6B1E2E] transition-colors shrink-0">View rankings →</span>
                </Link>
              ))}
            </div>

            <p className="text-sm">
              Rankings on RankedAI™ combine benchmark scores (40%), community votes (45%), and editorial assessment (15%) after 5 community votes are recorded. Fable 5&apos;s RBS (RankedAI Benchmark Score) contribution reflects its SWE-bench Pro and comparable academic benchmark performance aggregated weekly.
            </p>
          </div>
        </section>

        {/* ── 05 COMPARISON ────────────────────────────────── */}
        <section className="mb-20">
          <div className="flex items-baseline gap-3 mb-4">
            <span className="tabular-nums text-xs" style={{ color: "#6B1E2E" }}>05</span>
            <h2 className="font-semibold text-2xl sm:text-3xl leading-tight text-[#1A1A1A]">Claude Fable 5 vs Claude vs ChatGPT</h2>
          </div>
          <div className="pl-6 border-l border-[#D9CFC4] space-y-4 text-[#8A7F74] leading-relaxed">
            <p>
              How does Fable 5 stack up against the current generation of public frontier models? We compared it to Claude Sonnet 4.6 and ChatGPT o3 across the dimensions that matter most.
            </p>

            <div className="overflow-x-auto mt-2 rounded-card" style={{ border: "0.5px solid #D9CFC4" }}>
              <table className="w-full text-left min-w-[560px]">
                <thead>
                  <tr style={{ background: "#F0EBE1", borderBottom: "0.5px solid #D9CFC4" }}>
                    <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-widest text-[#8A7F74]">Feature</th>
                    <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-widest" style={{ color: "#6B1E2E" }}>Claude Fable 5</th>
                    <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-widest text-[#8A7F74]">Claude Sonnet 4.6</th>
                    <th className="px-4 py-3 text-[11px] font-semibold uppercase tracking-widest text-[#8A7F74]">ChatGPT o3</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr
                      key={row.feature}
                      className={`border-b border-[#D9CFC4] last:border-0 ${i % 2 === 0 ? "bg-[#FAF7F2]" : "bg-[#F0EBE1]/50"}`}
                    >
                      <td className="px-4 py-3 text-[#8A7F74] tabular-nums text-xs">{row.feature}</td>
                      <td className="px-4 py-3 text-xs font-semibold" style={{ color: "#6B1E2E" }}>{row.fable5}</td>
                      <td className="px-4 py-3 text-[#8A7F74] text-xs">{row.claude}</td>
                      <td className="px-4 py-3 text-[#8A7F74] text-xs">{row.chatgpt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── 06 FAQ ───────────────────────────────────────── */}
        <section className="mb-20">
          <div className="flex items-baseline gap-3 mb-4">
            <span className="tabular-nums text-xs" style={{ color: "#6B1E2E" }}>06</span>
            <h2 className="font-semibold text-2xl sm:text-3xl leading-tight text-[#1A1A1A]">Frequently asked questions</h2>
          </div>
          <div className="pl-6 border-l border-[#D9CFC4] space-y-4">
            {faqItems.map((item) => (
              <div
                key={item.question}
                className="rounded-card p-5"
                style={{ background: "#F0EBE1", border: "0.5px solid #D9CFC4" }}
              >
                <h3 className="font-semibold text-sm text-[#1A1A1A] mb-3">{item.question}</h3>
                <p className="text-sm text-[#8A7F74] leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 07 CONCLUSION ────────────────────────────────── */}
        <section className="mb-20">
          <div className="flex items-baseline gap-3 mb-4">
            <span className="tabular-nums text-xs" style={{ color: "#6B1E2E" }}>07</span>
            <h2 className="font-semibold text-2xl sm:text-3xl leading-tight text-[#1A1A1A]">Conclusion</h2>
          </div>
          <div className="pl-6 border-l border-[#D9CFC4] space-y-4 text-[#8A7F74] leading-relaxed">
            <p>
              Claude Fable 5 is <strong className="text-[#1A1A1A]">the most capable publicly available AI model ever released</strong>. The 80.3% SWE-bench Pro score is not a marginal improvement — it represents a category-level leap above the previous best-in-class public model. For engineering teams, researchers, and anyone working on technically demanding tasks at scale, Fable 5 is the right tool.
            </p>
            <p>
              The free window through June 22, 2026 is a significant opportunity. If you are on a Pro, Max, Team, or Enterprise plan, you have access to a Mythos-class model at no additional cost for two weeks. For teams evaluating whether to migrate workloads from GPT-5 or earlier Claude versions, this is the period to run your most demanding real-world tests.
            </p>
            <p>
              On RankedAI™, Fable 5 holds #1 in Coding, Writing, Research, and Math &amp; Science — the first model to simultaneously hold the top composite score across all four primary categories at launch. We will update our benchmark data weekly as community votes accrue and new evaluation results become available.
            </p>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────── */}
        <div
          className="rounded-card p-8 text-center relative overflow-hidden mb-12"
          style={{
            background: "linear-gradient(135deg, rgba(107,30,46,0.05) 0%, rgba(184,150,60,0.05) 50%, rgba(107,30,46,0.03) 100%)",
            border: "0.5px solid rgba(107,30,46,0.2)",
          }}
        >
          <div
            className="tabular-nums text-xs mb-3 uppercase tracking-widest"
            style={{ color: "#6B1E2E" }}
          >
            See the Full Rankings
          </div>
          <h3 className="font-semibold text-2xl text-[#1A1A1A] mb-3">
            How does Fable 5 compare to every other coding AI?
          </h3>
          <p className="text-sm text-[#8A7F74] mb-6 max-w-lg mx-auto">
            RankedAI™ tracks 40+ AI tools across 9 categories. See where Claude Fable 5 sits against every other model — scored by benchmarks, community votes, and editorial review.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/coding"
              className="px-6 py-2.5 font-semibold text-sm rounded-lg hover:opacity-90 transition-opacity text-white"
              style={{ background: "#6B1E2E" }}
            >
              View Coding rankings →
            </Link>
            <Link
              href="/research"
              className="px-6 py-2.5 bg-transparent text-[#1A1A1A] font-semibold text-sm rounded-lg border border-[#D9CFC4] hover:border-[#8A7F74] transition-colors"
            >
              View Research rankings
            </Link>
          </div>
        </div>

        {/* Related guides */}
        <div>
          <div className="tabular-nums text-[11px] font-semibold uppercase tracking-widest text-[#8A7F74] mb-4">Related guides</div>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { label: "Claude AI Review 2026", href: "/blog/claude-ai-review-2026" },
              { label: "ChatGPT Review 2026", href: "/blog/chatgpt-review-2026" },
              { label: "Gemini AI Review 2026", href: "/blog/gemini-ai-review-2026" },
              { label: "Perplexity AI Review 2026", href: "/blog/perplexity-ai-review-2026" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-2 rounded-lg p-3 text-sm text-[#8A7F74] hover:text-[#6B1E2E] transition-colors"
                style={{ background: "#F0EBE1", border: "0.5px solid #D9CFC4" }}
              >
                <span style={{ color: "#6B1E2E" }}>→</span>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}
