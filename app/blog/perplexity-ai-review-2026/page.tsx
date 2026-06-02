import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Perplexity AI Review 2026 | RankedAI™",
  description:
    "Read our independent Perplexity AI review for 2026. See how Perplexity ranks as the best AI research tool on RankedAI™.",
  openGraph: {
    title: "Perplexity AI Review 2026 | RankedAI™",
    description:
      "Read our independent Perplexity AI review for 2026. See how Perplexity ranks as the best AI research tool on RankedAI™.",
    type: "article",
  },
};

const pros = [
  "Real-time web search with cited, clickable sources on every answer",
  "Dramatically reduces hallucinations by grounding responses in live data",
  "Free tier is genuinely useful for everyday research",
  "Pro plan unlocks GPT-4o, Claude, and other frontier models inside one interface",
  "Academic paper search built in — surfaces peer-reviewed sources directly",
  "Clean, distraction-free interface designed around getting answers fast",
];

const cons = [
  "Not suited for creative writing, long-form content, or complex coding",
  "Reasoning depth trails Claude and ChatGPT on multi-step problems",
  "Pro at $17/month is a lot if you only occasionally need cited answers",
  "Dependent on live web — less useful for sensitive or private research topics",
  "Source quality varies — requires critical evaluation of cited pages",
  "Smaller company than Google or OpenAI — longer-term platform risk",
];

const rankings = [
  { category: "Research & Summarisation", href: "/research", position: "#1", color: "#14B8A6", score: "91" },
];

const comparison = [
  {
    feature: "Real-time web search",
    perplexity: "Always on — every query",
    google: "Always on",
    chatgpt: "Plus & above only",
  },
  {
    feature: "Source citations",
    perplexity: "Inline citations on every answer",
    google: "Links only — no synthesis",
    chatgpt: "When browsing is enabled",
  },
  {
    feature: "AI-synthesised answers",
    perplexity: "Always — core feature",
    google: "AI Overviews (limited)",
    chatgpt: "Yes — full LLM responses",
  },
  {
    feature: "Free tier",
    perplexity: "Yes — limited Pro searches/day",
    google: "Yes — unlimited",
    chatgpt: "Yes — limited GPT-4o",
  },
  {
    feature: "Pro pricing",
    perplexity: "$17/mo Pro · $34/mo Ent.",
    google: "$19.99/mo (Google One AI)",
    chatgpt: "$20/month (Plus)",
  },
  {
    feature: "Multiple AI models",
    perplexity: "GPT-4o, Claude, Sonar (Pro)",
    google: "Gemini family only",
    chatgpt: "GPT-4o, o3, o4-mini",
  },
  {
    feature: "File uploads",
    perplexity: "Yes (Pro)",
    google: "Yes (Advanced)",
    chatgpt: "Yes (Plus & above)",
  },
  {
    feature: "Best for",
    perplexity: "Cited research & fact-checking",
    google: "General browsing & discovery",
    chatgpt: "Reasoning & creative tasks",
  },
  {
    feature: "RankedAI™ Research score",
    perplexity: "91",
    google: "N/A",
    chatgpt: "85",
  },
];

const idealUsers = [
  {
    icon: "🎓",
    color: "#14B8A6",
    title: "Students",
    body: "Perplexity transforms the research phase of writing essays and papers. Instead of opening ten browser tabs and manually synthesising sources, you get a structured answer with numbered citations you can verify and quote. It surfaces peer-reviewed academic papers directly via its Academic mode, making it a serious upgrade over Google Scholar for initial research passes.",
  },
  {
    icon: "🔬",
    color: "#6B1E2E",
    title: "Researchers & Academics",
    body: "For researchers who need to stay on top of a fast-moving field, Perplexity's ability to synthesise current literature and news in real time is genuinely powerful. You can ask nuanced questions about recent developments in a field and receive structured, sourced summaries of the current state of knowledge — updated to the hour, not the year of a training cut-off.",
  },
  {
    icon: "📰",
    color: "#B8963C",
    title: "Journalists",
    body: "Fact-checking and background research are among Perplexity's strongest suits. Journalists can rapidly verify claims, trace the origin of a story, find primary sources, and get up-to-date context on a topic under deadline pressure. The cited answers also make it easy to distinguish Perplexity's synthesis from the raw source material — important for editorial accuracy.",
  },
  {
    icon: "💼",
    color: "#6B1E2E",
    title: "Professionals",
    body: "Lawyers, analysts, consultants, and finance professionals use Perplexity for rapid background research on topics outside their core expertise. It is particularly effective for understanding regulatory developments, market data, technical standards, and sector-specific news — areas where Google returns a mix of ads and SEO-optimised noise rather than direct, sourced answers.",
  },
];

const faqItems = [
  {
    question: "What is Perplexity AI?",
    answer: "Perplexity AI is an AI-powered answer engine that combines real-time web search with large language model synthesis to deliver direct, cited answers. Unlike Google, which returns a list of links, Perplexity synthesises current web sources into a structured answer with numbered citations you can verify in one click.",
  },
  {
    question: "Is Perplexity better than Google for research?",
    answer: "For complex questions that benefit from synthesis, Perplexity is faster and more useful than Google — you get a structured answer with citations rather than ten links to evaluate manually. For simple queries and general browsing, Google remains faster. Perplexity is best used as a complement to Google, not a replacement.",
  },
  {
    question: "Is Perplexity AI free?",
    answer: "Yes. Perplexity offers a free tier with unlimited standard searches and approximately 5 Pro searches per day. Pro costs $17/month and unlocks unlimited Pro searches, access to GPT-4o and Claude models within Perplexity, and file upload capabilities.",
  },
  {
    question: "How does Perplexity cite its sources?",
    answer: "Perplexity embeds numbered citations inline within answers — every factual claim is followed by a superscript number linking to the original source page. A full source list appears below the answer. This makes every statement in a Perplexity response directly traceable to its origin.",
  },
  {
    question: "Does Perplexity hallucinate?",
    answer: "Perplexity is significantly less prone to hallucination than standalone LLMs because responses are grounded in live web sources. It can still misinterpret a source, so critical evaluation of citations remains worthwhile — but confident factual errors are far less common than with ChatGPT or Claude on the same queries.",
  },
  {
    question: "Can Perplexity search academic papers?",
    answer: "Yes. Perplexity has an Academic mode that prioritises peer-reviewed sources, academic papers, and arXiv pre-prints in search results. This is more useful for literature review than standard web search, which often surfaces SEO-optimised content above primary sources.",
  },
  {
    question: "What makes Perplexity different from ChatGPT?",
    answer: "The core difference is grounding: Perplexity searches the web in real time and cites every source; ChatGPT draws from training data with a knowledge cut-off. For current events, fact-checking, and research requiring verifiable sources, Perplexity is superior. For creative tasks, coding, and complex reasoning, ChatGPT leads.",
  },
];

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Perplexity AI Review 2026 — The Google Killer?",
      description: "An independent review of Perplexity AI for 2026, covering pricing, how its citation model works, and how it compares to Google and ChatGPT.",
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

export default function PerplexityReview2026() {
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
        <span className="text-[#1A1A1A]">Perplexity AI Review 2026</span>
      </div>

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="mb-20">
        <div className="flex flex-wrap items-center gap-3 mb-5">
          <span className="tabular-nums text-[11px] font-semibold tracking-widest uppercase text-[#14B8A6]">Independent Review</span>
          <span className="w-1 h-1 rounded-full bg-[#D9CFC4]" />
          <span className="tabular-nums text-[11px] text-[#8A7F74]">May 2026</span>
          <span className="w-1 h-1 rounded-full bg-[#D9CFC4]" />
          <span className="tabular-nums text-[11px] text-[#8A7F74]">RankedAI™ Editorial</span>
        </div>

        <h1 className="font-semibold font-black text-5xl sm:text-6xl leading-[1.05] tracking-tight text-[#1A1A1A] mb-6">
          Perplexity AI Review 2026 —{" "}
          <span
            className="text-transparent bg-clip-text"
            style={{ backgroundImage: "linear-gradient(100deg, #14B8A6 0%, #6B1E2E 100%)" }}
          >
            The Google Killer?
          </span>
        </h1>

        <p className="text-lg text-[#8A7F74] leading-relaxed border-l-2 border-[#14B8A6]/40 pl-4 max-w-[680px]">
          Google has been the default starting point for online research for over two decades. Perplexity AI is the most credible challenger to that position yet — not because it does everything Google does, but because it does the one thing that matters most better: it answers your question directly, with sources you can verify, in the time it takes to finish reading. We put Perplexity through two years&apos; worth of real research tasks to find out whether it genuinely earns the &ldquo;Google Killer&rdquo; label.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {["Research", "Fact-Checking", "Current Events", "Academic", "Sourced Answers"].map((tag) => (
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
      <div className="h-px bg-gradient-to-r from-[#14B8A6]/30 via-[#6B1E2E]/20 to-transparent mb-20" />

      {/* ── WHAT IS PERPLEXITY ───────────────────────────── */}
      <section className="mb-20">
        <div className="flex items-baseline gap-3 mb-4">
          <span className="tabular-nums text-xs text-[#14B8A6]">01</span>
          <h2 className="font-semibold text-2xl sm:text-3xl leading-tight text-[#1A1A1A]">What is Perplexity AI?</h2>
        </div>
        <div className="pl-6 border-l border-[#D9CFC4] space-y-4 text-[#8A7F74] leading-relaxed">
          <p>
            Perplexity AI is an <strong className="text-[#1A1A1A]">AI-powered answer engine</strong> — a category that sits between a traditional search engine and a conversational AI assistant. Founded in 2022 by Aravind Srinivas, Denis Yarats, Johnny Ho, and Andy Konwinski, Perplexity combines real-time web search with large language model synthesis to give you direct, sourced answers rather than a page of links to sift through manually.
          </p>
          <p>
            The core experience is deceptively simple: you ask a question in natural language, and Perplexity searches the web, reads the most relevant current sources, and returns a structured answer with <strong className="text-[#1A1A1A]">numbered inline citations</strong> linking directly to the original pages. You always know where the information came from and can verify it yourself in one click. It is the difference between being handed a stack of books and being handed a well-researched memo.
          </p>
          <p>
            This approach solves two of the biggest problems with both traditional search and standalone AI. Google returns too many undifferentiated links with no synthesis. ChatGPT synthesises fluently but its knowledge has a training cut-off and it can hallucinate facts with false confidence. Perplexity gives you <strong className="text-[#1A1A1A]">live synthesis with traceable sources</strong> — the best of both worlds for research tasks where accuracy is non-negotiable.
          </p>
          <div className="bg-[#F0EBE1] border border-[#D9CFC4] rounded-lg p-4 mt-2">
            <div className="tabular-nums text-xs text-[#8A7F74] mb-1">RankedAI™ Research Score</div>
            <div className="flex items-center gap-3">
              <span className="tabular-nums font-bold text-3xl text-[#14B8A6]">91</span>
              <div className="flex-1 h-2 bg-[#D9CFC4] rounded-full overflow-hidden">
                <div className="h-full rounded-full bg-[#14B8A6]" style={{ width: "91%" }} />
              </div>
              <span className="text-xs text-[#8A7F74]">/ 100</span>
            </div>
            <p className="text-xs text-[#8A7F74] mt-2">#1 in RankedAI™ Research & Summarisation. Derived from benchmark evaluations and community voting.</p>
          </div>
        </div>
      </section>

      {/* ── WHAT IS PERPLEXITY BEST AT ───────────────────── */}
      <section className="mb-20">
        <div className="flex items-baseline gap-3 mb-4">
          <span className="tabular-nums text-xs text-[#14B8A6]">02</span>
          <h2 className="font-semibold text-2xl sm:text-3xl leading-tight text-[#1A1A1A]">What is Perplexity best at?</h2>
        </div>
        <div className="pl-6 border-l border-[#D9CFC4] space-y-6 text-[#8A7F74] leading-relaxed">
          <p>Perplexity is purpose-built for research. Its use cases cluster around situations where accuracy, recency, and source transparency matter more than creativity or reasoning depth.</p>

          {[
            {
              icon: "🔍",
              color: "#14B8A6",
              title: "Research & Fact-Checking",
              body: "Perplexity is the fastest way to get a sourced, accurate answer to a factual question. Rather than opening multiple browser tabs and reading through pages of search results, you ask your question and receive a synthesised answer with numbered citations. Every claim is traceable to a source. For fact-checking — verifying statistics, claims in articles, or background on current events — this workflow is significantly faster and more reliable than either Google or unaided ChatGPT.",
            },
            {
              icon: "📡",
              color: "#6B1E2E",
              title: "Summarising Current Events",
              body: "Perplexity's real-time web access makes it an unusually effective tool for getting up to speed on a fast-moving story. Rather than reading five different news articles, you can ask Perplexity to summarise what has happened, who the key players are, and what the current state of play is — with links back to the source articles for context. It is particularly strong for international news, tech industry developments, and financial events where context evolves rapidly.",
            },
            {
              icon: "🎓",
              color: "#B8963C",
              title: "Academic Research",
              body: "In Academic mode, Perplexity prioritises peer-reviewed sources, academic papers, and scholarly publications. It surfaces relevant research from journals, pre-print archives, and institutional sources that Google often buries below SEO-optimised content. For students writing papers or researchers exploring a new field, the ability to ask a research question and receive a structured answer citing primary academic sources is a genuine step-change in the initial literature review process.",
            },
            {
              icon: "❓",
              color: "#6B1E2E",
              title: "Replacing Google for Complex Questions",
              body: "For simple queries — a restaurant address, a sports score, a quick definition — Google remains faster. But for questions with nuance, context, or multiple dimensions, Perplexity consistently outperforms. &ldquo;What are the current tax implications of selling shares in a small business in the UK?&rdquo; returns a sourced, structured answer from Perplexity. Google returns 10 links to legal firms&apos; SEO-optimised blog posts. For complex questions that benefit from synthesis, the difference is substantial.",
            },
            {
              icon: "📎",
              color: "#2D6A4F",
              title: "Sourced Professional Answers",
              body: "Professionals across law, medicine, finance, and engineering use Perplexity for rapid, sourced background research. The Pro plan&apos;s file upload capability extends this to internal documents — you can upload a contract, a report, or a dataset and ask Perplexity to answer questions about it in the context of live web information. The combination of document understanding and real-time research makes it an unusually capable professional research assistant.",
            },
          ].map((item) => (
            <div key={item.title} className="bg-[#F0EBE1] border border-[#D9CFC4] rounded-card p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{item.icon}</span>
                <h3 className="font-semibold text-base" style={{ color: item.color }}>{item.title}</h3>
              </div>
              <p className="text-sm leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────────── */}
      <section className="mb-20">
        <div className="flex items-baseline gap-3 mb-4">
          <span className="tabular-nums text-xs text-[#14B8A6]">03</span>
          <h2 className="font-semibold text-2xl sm:text-3xl leading-tight text-[#1A1A1A]">Perplexity pricing</h2>
        </div>
        <div className="pl-6 border-l border-[#D9CFC4] space-y-4 text-[#8A7F74] leading-relaxed">
          <p>Perplexity offers a genuinely capable free tier — more useful than most AI free plans — with paid options for power users who need unlimited access and model choice.</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-2">
            {[
              {
                tier: "Free",
                price: "$0",
                period: "forever",
                color: "#8A7F74",
                note: "",
                features: [
                  "Unlimited standard searches",
                  "~5 Pro searches per day",
                  "Real-time web access",
                  "No credit card required",
                ],
              },
              {
                tier: "Pro",
                price: "$17",
                period: "/month",
                color: "#14B8A6",
                note: "per user",
                features: [
                  "Unlimited Pro searches",
                  "GPT-4o, Claude & Sonar models",
                  "File & document uploads",
                  "Image generation included",
                ],
                highlight: true,
              },
              {
                tier: "Enterprise Pro",
                price: "$34",
                period: "/month",
                color: "#B8963C",
                note: "per seat",
                features: [
                  "Everything in Pro",
                  "Team management & SSO",
                  "Centralised billing",
                  "Advanced admin controls",
                ],
              },
              {
                tier: "Enterprise Max",
                price: "$271",
                period: "/month",
                color: "#6B1E2E",
                note: "per seat",
                features: [
                  "Everything in Enterprise Pro",
                  "Maximum usage limits",
                  "Dedicated priority support",
                  "Advanced security & compliance",
                ],
              },
            ].map((plan) => (
              <div
                key={plan.tier}
                className={`rounded-card p-5 border overflow-hidden ${plan.highlight ? "border-[#14B8A6]/40 bg-[#14B8A6]/5" : "border-[#D9CFC4] bg-[#F0EBE1]"}`}
              >
                <div className="tabular-nums text-xs text-[#8A7F74] mb-1">{plan.tier}</div>
                <div className="flex items-baseline gap-1 mb-1 flex-wrap">
                  <span className="font-semibold font-black text-3xl" style={{ color: plan.color }}>{plan.price}</span>
                  <span className="text-xs text-[#8A7F74]">{plan.period}</span>
                </div>
                <div className="tabular-nums text-[10px] text-[#8A7F74] mb-3">{plan.note}</div>
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
            For most users, <strong className="text-[#1A1A1A]">the free tier is worth trying first</strong> — five Pro searches per day is enough to evaluate whether Perplexity fits your workflow. The Pro plan at $17/month is worth it if you research daily and want access to frontier models like GPT-4o and Claude inside the Perplexity interface. Enterprise plans are designed for teams that need shared billing, SSO, and higher usage ceilings.
          </p>
        </div>
      </section>

      {/* ── PROS & CONS ──────────────────────────────────── */}
      <section className="mb-20">
        <div className="flex items-baseline gap-3 mb-4">
          <span className="tabular-nums text-xs text-[#14B8A6]">04</span>
          <h2 className="font-semibold text-2xl sm:text-3xl leading-tight text-[#1A1A1A]">Perplexity pros and cons</h2>
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

      {/* ── HOW PERPLEXITY RANKS ─────────────────────────── */}
      <section className="mb-20">
        <div className="flex items-baseline gap-3 mb-4">
          <span className="tabular-nums text-xs text-[#14B8A6]">05</span>
          <h2 className="font-semibold text-2xl sm:text-3xl leading-tight text-[#1A1A1A]">How Perplexity ranks on RankedAI™</h2>
        </div>
        <div className="pl-6 border-l border-[#D9CFC4] space-y-4 text-[#8A7F74] leading-relaxed">
          <p>
            Perplexity holds the <strong className="text-[#14B8A6]">#1 position</strong> in RankedAI™&apos;s Research &amp; Summarisation category. Scores are calculated using our{" "}
            <Link href="/#how-it-works" className="text-[#6B1E2E] hover:underline">hybrid algorithm</Link>
            {" "}combining public benchmarks (40%), community votes (45%), and editorial assessment (15%).
          </p>
          <div className="mt-2">
            {rankings.map((r) => (
              <Link
                key={r.category}
                href={r.href}
                className="group bg-[#F0EBE1] border border-[#D9CFC4] hover:border-[#14B8A6]/30 rounded-card p-4 transition-colors block max-w-sm"
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
                <div className="text-[10px] text-[#8A7F74] mt-2 group-hover:text-[#14B8A6] transition-colors">
                  View full rankings →
                </div>
              </Link>
            ))}
          </div>
          <p className="text-sm mt-1">
            Perplexity&apos;s top position in Research reflects what it was designed to do. Its real-time web grounding gives it a structural accuracy advantage over purely LLM-based tools in this category, and the community vote weighting reflects genuine professional adoption across research-heavy fields. No other AI tool in our rankings earns its top position as cleanly — its design and its category are perfectly aligned.
          </p>
        </div>
      </section>

      {/* ── COMPARISON TABLE ─────────────────────────────── */}
      <section className="mb-20">
        <div className="flex items-baseline gap-3 mb-4">
          <span className="tabular-nums text-xs text-[#14B8A6]">06</span>
          <h2 className="font-semibold text-2xl sm:text-3xl leading-tight text-[#1A1A1A]">Perplexity vs Google vs ChatGPT</h2>
        </div>
        <div className="pl-6 border-l border-[#D9CFC4]">
          <p className="text-sm text-[#8A7F74] leading-relaxed mb-5">
            These three tools occupy different positions on the search-to-AI spectrum. Choosing between them depends on what you prioritise: breadth of discovery, depth of reasoning, or sourced accuracy.
          </p>
          <div className="overflow-x-auto rounded-card border border-[#D9CFC4]">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#D9CFC4] bg-[#F0EBE1]">
                  <th className="text-left px-4 py-3 font-semibold font-semibold text-[#8A7F74] text-xs uppercase tracking-wider">Feature</th>
                  <th className="text-left px-4 py-3 font-semibold font-semibold text-[#14B8A6] text-xs uppercase tracking-wider">Perplexity</th>
                  <th className="text-left px-4 py-3 font-semibold font-semibold text-[#8A7F74] text-xs uppercase tracking-wider">Google</th>
                  <th className="text-left px-4 py-3 font-semibold font-semibold text-[#8A7F74] text-xs uppercase tracking-wider">ChatGPT</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-[#D9CFC4] last:border-0 ${i % 2 === 0 ? "bg-[#FAF7F2]" : "bg-[#F0EBE1]/50"}`}
                  >
                    <td className="px-4 py-3 text-[#8A7F74] tabular-nums text-xs">{row.feature}</td>
                    <td className="px-4 py-3 text-[#1A1A1A] font-semibold text-xs">{row.perplexity}</td>
                    <td className="px-4 py-3 text-[#8A7F74] text-xs">{row.google}</td>
                    <td className="px-4 py-3 text-[#8A7F74] text-xs">{row.chatgpt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── WHO SHOULD USE PERPLEXITY ────────────────────── */}
      <section className="mb-20">
        <div className="flex items-baseline gap-3 mb-4">
          <span className="tabular-nums text-xs text-[#14B8A6]">07</span>
          <h2 className="font-semibold text-2xl sm:text-3xl leading-tight text-[#1A1A1A]">Who should use Perplexity?</h2>
        </div>
        <div className="pl-6 border-l border-[#D9CFC4] space-y-6 text-[#8A7F74] leading-relaxed">
          <p>Perplexity is not a general-purpose AI — it is a specialised research tool. It is best suited to people whose work demands current, sourced, accurate information rather than creative output or complex reasoning.</p>

          {idealUsers.map((item) => (
            <div key={item.title} className="bg-[#F0EBE1] border border-[#D9CFC4] rounded-card p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{item.icon}</span>
                <h3 className="font-semibold text-base" style={{ color: item.color }}>{item.title}</h3>
              </div>
              <p className="text-sm leading-relaxed">{item.body}</p>
            </div>
          ))}

          <div className="bg-[#14B8A6]/5 border border-[#14B8A6]/20 rounded-card p-4">
            <div className="tabular-nums text-xs text-[#14B8A6] mb-2 uppercase tracking-wider">Not ideal for</div>
            <p className="text-sm leading-relaxed">
              Perplexity is <strong className="text-[#1A1A1A]">not the right tool</strong> for creative writing, software development, complex multi-step reasoning, or tasks where you need a model to hold extended context over a long conversation. For those use cases, Claude or ChatGPT will serve you better.
            </p>
          </div>
        </div>
      </section>

      {/* ── VERDICT ──────────────────────────────────────── */}
      <section className="mb-20">
        <div className="flex items-baseline gap-3 mb-4">
          <span className="tabular-nums text-xs text-[#14B8A6]">08</span>
          <h2 className="font-semibold text-2xl sm:text-3xl leading-tight text-[#1A1A1A]">Verdict</h2>
        </div>
        <div className="pl-6 border-l border-[#D9CFC4] space-y-4 text-[#8A7F74] leading-relaxed">
          <p>
            Perplexity AI is the <strong className="text-[#1A1A1A]">best AI tool for research in 2026</strong> — a category it has created rather than competed in. It does not replace Claude for reasoning, ChatGPT for creative breadth, or Gemini for Google Workspace users. What it does — give you fast, cited, accurate answers to factual questions using live web data — it does better than anything else available.
          </p>
          <p>
            The free tier is a genuine product, not a trial. Five Pro searches per day is enough to make Perplexity your default for research-type queries without spending a penny. The Pro plan at $17/month is worth it the moment your research needs outpace the daily limit — and the ability to run GPT-4o and Claude inside Perplexity&apos;s cited-answer interface makes it more valuable than either of those tools alone for research-heavy use cases.
          </p>
          <p>
            On RankedAI™, Perplexity holds the #1 position in Research &amp; Summarisation with a score of 91. Our answer to the headline question: not a Google killer in the broad sense — Google still wins for discovery, browsing, and general web navigation. But for the specific task of getting a reliable, sourced answer to a complex question? Perplexity wins, and it is not particularly close.
          </p>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section className="mb-20">
        <div className="flex items-baseline gap-3 mb-4">
          <span className="tabular-nums text-xs text-[#14B8A6]">09</span>
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
        className="rounded-card p-8 text-center relative overflow-hidden border border-[#14B8A6]/20 mb-12"
        style={{ background: "linear-gradient(135deg, #14B8A608 0%, #6B1E2E08 50%, #6B1E2E08 100%)" }}
      >
        <div className="tabular-nums text-xs text-[#14B8A6] mb-3 uppercase tracking-widest">See how Perplexity ranks</div>
        <h3 className="font-semibold text-2xl text-[#1A1A1A] mb-3">
          Compare Perplexity against every AI research tool
        </h3>
        <p className="text-sm text-[#8A7F74] mb-6 max-w-md mx-auto">
          RankedAI™ ranks 22+ AI tools by benchmark scores, community votes, and editorial assessment across six task categories.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="/research"
            className="px-6 py-2.5 bg-[#14B8A6] text-[#FAF7F2] font-semibold text-sm rounded-lg hover:bg-[#0d9488] transition-colors"
          >
            View Research rankings →
          </Link>
          <Link
            href="/"
            className="px-6 py-2.5 bg-transparent text-[#1A1A1A] font-semibold font-semibold text-sm rounded-lg border border-[#D9CFC4] hover:border-[#8A7F74] transition-colors"
          >
            Explore all rankings
          </Link>
        </div>
      </div>

      {/* Also read */}
      <div className="bg-[#F0EBE1] border border-[#D9CFC4] rounded-card p-5 mb-12">
        <div className="tabular-nums text-xs text-[#8A7F74] mb-4 uppercase tracking-wider">Also on RankedAI™</div>
        <div className="space-y-3">
          {[
            { href: "/blog/claude-ai-review-2026", label: "Claude AI Review 2026 — Is It the Best AI Available?", color: "#6B1E2E" },
            { href: "/blog/chatgpt-review-2026", label: "ChatGPT Review 2026 — Still the King of AI?", color: "#B8963C" },
            { href: "/blog/gemini-ai-review-2026", label: "Google Gemini Review 2026 — Google's Most Powerful AI Yet?", color: "#6B1E2E" },
            { href: "/blog/midjourney-review-2026", label: "Midjourney Review 2026 — Still the Best AI Image Generator?", color: "#EC4899" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center justify-between group hover:text-[#1A1A1A] transition-colors"
            >
              <span className="text-sm text-[#8A7F74] group-hover:text-[#1A1A1A]">{link.label}</span>
              <span className="text-sm shrink-0 ml-4 transition-colors" style={{ color: link.color }}>→</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Nav */}
      <div className="pt-6 border-t border-[#D9CFC4] flex flex-wrap gap-4 text-xs">
        <Link href="/" className="text-[#8A7F74] hover:text-[#1A1A1A] transition-colors">← Home</Link>
        <Link href="/research" className="text-[#8A7F74] hover:text-[#1A1A1A] transition-colors">Research Rankings</Link>
        <Link href="/tool/perplexity" className="text-[#8A7F74] hover:text-[#1A1A1A] transition-colors">Perplexity tool page</Link>
      </div>
    </div>
    </>
  );
}
