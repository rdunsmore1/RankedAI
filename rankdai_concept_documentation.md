# RankedAI™ — Business Concept Documentation

**Document Type:** Proof of Concept & Intellectual Property Record  
**Founder:** Roanin Dunsmore  
**Date of Authorship:** 25 May 2026  
**Time of Creation:** Generated at document-creation time for timestamped record  
**Project Repository:** ai-hub (private)  
**Status:** Built and ready for production deployment  

---

> *This document constitutes a formal record of the original concept, architecture, and intellectual property associated with RankedAI™, authored and owned by Roanin Dunsmore. It is intended to serve as a timestamped proof of concept and ownership.*

---

## Table of Contents

1. [Original Concept & Problem Statement](#1-original-concept--problem-statement)
2. [The Six Category Tabs](#2-the-six-category-tabs)
3. [The Proprietary Hybrid Ranking Algorithm](#3-the-proprietary-hybrid-ranking-algorithm)
4. [Revenue Model & Monetization Streams](#4-revenue-model--monetization-streams)
5. [Full Tech Stack & Architecture Decisions](#5-full-tech-stack--architecture-decisions)
6. [Deployment Status & Live URL](#6-deployment-status--live-url)
7. [Database Schema Overview](#7-database-schema-overview)
8. [Key Differentiators from Competitors](#8-key-differentiators-from-competitors)

---

## 1. Original Concept & Problem Statement

### The Problem

The AI tool landscape has exploded in 2024–2026, producing hundreds of competing products across every knowledge-work category — coding assistants, writing tools, image generators, research engines, math solvers, and video/audio generators. Discovering the genuinely best tool for a specific task has become nearly impossible for the average user because:

1. **Marketing noise dominates discovery.** Most "best AI tools" lists are SEO-optimised affiliate content, paid placements presented as editorial, or flat-out outdated. There is no systematic methodology disclosed.

2. **Benchmark data is siloed.** Public benchmark results (LMSYS Arena Elo, MMLU, HumanEval, etc.) exist but are scattered across academic papers, leaderboard sites, and blog posts. Non-technical users cannot parse or apply them.

3. **Community opinions are decontextualised.** Reddit threads and Twitter discussions surface strong opinions but lack category specificity — whether a model is great for *coding* versus *creative writing* requires different evaluations, and general sentiment aggregators (e.g., star ratings on app stores) conflate these use cases.

4. **Sponsorship and rankings are mixed without disclosure.** Many aggregator sites rank paid partners above genuinely superior tools with no visible disclosure, eroding trust and misdirecting users.

5. **No single trusted source exists** that combines quantitative benchmarks, community consensus, and editorial quality scoring into one transparent, gaming-resistant composite.

### The Solution: RankedAI™

RankedAI™ is a structured, transparent AI tool ranking platform that solves the discovery problem through a **proprietary hybrid scoring system** combining:

- **Objective benchmark data** as an immovable baseline
- **Category-contextual community voting and reviews** from registered users
- **Editorial quality scoring** for dimensions benchmarks cannot capture
- **Clear, permanent separation** of sponsored placements from organic rankings

The platform covers six high-demand task categories, ranks tools within each category on a 0–100 composite score, and makes the full score breakdown visible to every user. Sponsorship is disclosed with a badge and listed above organic results — it never contaminates the ranking formula.

The tagline captures the positioning: **"The AI Rankings People Actually Trust."**

---

## 2. The Six Category Tabs

The platform organises all ranked tools into exactly six category tabs, each of which surfaces a distinct set of tools evaluated on category-specific editorial criteria. The same underlying tool can appear in multiple categories and may rank differently in each, because editorial scores and community votes are scoped per-category.

---

### Tab 1 — Coding & Development 💻

**Slug:** `coding`  
**Description:** AI tools for writing, debugging, and reviewing code.

This category targets software engineers, data scientists, and technical users who use AI to accelerate their development workflow. Tools are evaluated for code completion accuracy, IDE integration depth, context window utilisation, multi-language support, and speed of generation.

**Seeded tools at launch:**
| Tool | Benchmark Score | Editorial Score |
|---|---|---|
| GitHub Copilot | 87 | 90 |
| Claude | 91 | 88 |
| Cursor AI | 79 | 85 |
| ChatGPT | 85 | 82 |
| Gemini | 82 | 78 |

Key differentiator for this tab: GitHub Copilot leads on editorial score due to its deep IDE integration (VS Code, JetBrains, Neovim), while Claude leads on benchmark score due to its broader reasoning capabilities applied to code.

---

### Tab 2 — Writing & Content ✍️

**Slug:** `writing`  
**Description:** AI tools for drafting, editing, and creating content.

This category serves content creators, marketers, journalists, copywriters, and knowledge workers. Tools are evaluated for tone flexibility, long-form coherence, instruction-following precision, editing assistance, and content-specific features (brand voice, SEO integration).

**Seeded tools at launch:**
| Tool | Benchmark Score | Editorial Score |
|---|---|---|
| Claude | 91 | 90 |
| ChatGPT | 85 | 85 |
| Grammarly | 68 | 75 |
| Jasper | 74 | 72 |
| Copy.ai | 70 | 68 |

Key differentiator for this tab: Claude ranks highest due to a combination of nuanced instruction-following and long-context coherence. Grammarly, while having a lower benchmark score, earns editorial credit for its real-time inline editing, browser extension ubiquity, and plagiarism detection.

---

### Tab 3 — Image Generation 🎨

**Slug:** `image-gen`  
**Description:** AI tools for generating and editing images.

This category targets designers, marketers, artists, filmmakers, and social media creators. Tools are evaluated on aesthetic output quality, prompt adherence, style consistency, resolution, commercial licensing, and speed.

**Seeded tools at launch:**
| Tool | Benchmark Score | Editorial Score |
|---|---|---|
| Midjourney | 90 | 88 |
| DALL-E 3 | 85 | 82 |
| Adobe Firefly | 77 | 80 |
| Stable Diffusion XL | 80 | 78 |
| Ideogram | 74 | 76 |

Key differentiator for this tab: Midjourney leads on benchmark score due to its aesthetic quality and community-validated output. Adobe Firefly earns a high editorial score relative to its benchmark because of commercially safe, licensed training data — a critical differentiator for professional use cases.

---

### Tab 4 — Research & Summarisation 🔬

**Slug:** `research`  
**Description:** AI tools for research, analysis, and summarisation.

This category targets academics, journalists, analysts, consultants, and students. Tools are evaluated on citation quality, real-time web access, source credibility, summarisation accuracy, and depth of analysis.

**Seeded tools at launch:**
| Tool | Benchmark Score | Editorial Score |
|---|---|---|
| Perplexity AI | 89 | 92 |
| Gemini | 82 | 82 |
| Claude | 91 | 85 |
| ChatGPT | 85 | 80 |
| Consensus | 74 | 88 |

Key differentiator for this tab: Perplexity AI leads editorially due to its real-time web search with inline citations — the canonical research use case. Consensus earns a high editorial score despite a lower benchmark because it is purpose-built for peer-reviewed science, searching 200M+ academic papers with consensus-meter visualisation.

---

### Tab 5 — Math & Science 🧮

**Slug:** `math-science`  
**Description:** AI tools for solving maths problems and scientific analysis.

This category serves students, researchers, engineers, and data scientists. Tools are evaluated on computational accuracy, step-by-step problem decomposition, symbolic computation, scientific data access, and code execution for numerical analysis.

**Seeded tools at launch:**
| Tool | Benchmark Score | Editorial Score |
|---|---|---|
| Wolfram Alpha | 92 | 95 |
| ChatGPT o3 | 90 | 90 |
| Claude | 91 | 84 |
| Gemini | 82 | 82 |
| Grok | 80 | 76 |

Key differentiator for this tab: Wolfram Alpha leads both benchmark and editorial scoring. Its curated knowledge base and symbolic computation engine make it uniquely suited to verifiable, step-by-step mathematical work — a domain where hallucination from LLMs is especially costly. ChatGPT o3 is positioned as the frontier LLM reasoning challenger.

---

### Tab 6 — Video & Audio Creation 🎬

**Slug:** `video-audio`  
**Description:** AI tools for generating and editing video and audio.

This category targets filmmakers, YouTubers, podcasters, social media creators, and marketing teams. Tools are evaluated on video realism, motion consistency, audio naturalness, lip-sync accuracy, generation speed, and ease of use.

**Seeded tools at launch:**
| Tool | Benchmark Score | Editorial Score |
|---|---|---|
| ElevenLabs | 84 | 90 |
| Runway ML | 85 | 88 |
| Sora | 88 | 85 |
| HeyGen | 78 | 82 |
| Kling AI | 81 | 80 |

Key differentiator for this tab: ElevenLabs leads editorially as the gold standard for AI voice synthesis and cloning (voice from a 1-minute sample, 30+ languages, real-time voice changing). Sora leads on benchmark score as OpenAI's frontier video generation model. Runway leads on editorial for professional-grade video editing tooling layered on top of generation.

---

## 3. The Proprietary Hybrid Ranking Algorithm

RankedAI™'s core intellectual property is its **three-component composite scoring system**. The algorithm is designed around three explicit goals:

1. **Anti-gaming:** No single actor — not users, not sponsored brands — can unilaterally move a tool to the top of the rankings.
2. **Category specificity:** A tool's rank reflects its utility for the *specific task category*, not general popularity.
3. **Transparency:** Every user can see the full score breakdown at any time by hovering the composite score on any ranking card.

---

### Component 1 — Benchmark Score (40% weight)

**What it is:** A normalised 0–100 score derived from publicly available, independent AI benchmarks. Sources include:

- **LMSYS Chatbot Arena Elo ratings** — crowdsourced human preference comparisons
- **MMLU (Massive Multitask Language Understanding)** — academic knowledge breadth
- **HumanEval** — code generation accuracy (primary for the Coding category)
- **Additional benchmarks** applied per category as the tool landscape evolves

**Why 40%:** The benchmark score is the incorruptible floor of the algorithm. It is set by the editorial team from external data sources and cannot be influenced by community voting or sponsored agreements. It prevents gaming — a tool with a terrible benchmark score cannot float to the top through coordinated upvoting.

**Default behaviour:** Tools without a benchmark score assigned default to 50 (the midpoint), ensuring they receive a neutral position rather than being excluded or artificially elevated.

**Implementation:** Stored as `benchmark_score numeric(5,2)` on the `tools` table. Applied globally across all categories — a tool carries the same benchmark score everywhere it appears.

---

### Component 2 — Community Score (45% weight)

**What it is:** A real-time score calculated from registered user upvotes, downvotes, and star ratings (1–5 stars) within a specific category.

**The community score formula:**

```
vote_ratio = (upvotes - downvotes) / total_votes
vote_component = (vote_ratio × 50 + 50) × 0.5

rating_component = (avg_star_rating / 5 × 50) × 0.5

community_score = LEAST(100, GREATEST(0, vote_component + rating_component))
```

This produces a 0–100 score that balances vote sentiment with review quality. A tool with a perfect +1.0 vote ratio and 5-star average achieves 100. A tool with a –1.0 ratio and 1-star average achieves 0.

**Anti-manipulation threshold:** Community scoring only activates after a tool has received **5 or more votes** within a category. Below this threshold, the benchmark score is used in place of the community score, preventing early coordinated votes from artificially inflating a tool that has not been meaningfully evaluated. This is implemented directly in the PostgreSQL ranking function with a `CASE WHEN COUNT(v.id) < 5 THEN benchmark_score ELSE community_formula END` clause.

**Category specificity:** Votes and reviews are scoped to `(tool_id, category_id)` pairs. A user voting for Claude in the Coding tab does not affect Claude's community score in the Writing tab. This allows the community to express nuanced preferences — a tool may be excellent for one task and mediocre for another.

**One vote per user per category:** Enforced by a unique constraint on `(user_id, tool_id, category_id)` in the `votes` table. Users can change their vote (upvote ↔ downvote) but cannot vote multiple times.

**Why 45%:** Community score carries the highest weight because it represents the most direct signal of real-world utility at scale. When the community has spoken with sufficient votes, that signal outweighs both the benchmark baseline and editorial opinion — the platform is built on the thesis that aggregated authentic user experience is the most valuable ranking signal.

---

### Component 3 — Editorial Score (15% weight)

**What it is:** A 0–100 score set by the RankedAI™ editorial team, stored per `(tool_id, category_id)` pair so it can differ across categories.

**What it measures** (dimensions benchmarks and votes cannot capture):
- **UX quality** — onboarding friction, interface clarity, workflow integration
- **Pricing fairness** — free tier generosity, value-for-money, pricing transparency
- **Support quality** — documentation quality, response times, community support
- **Hidden gem factor** — surfacing tools that have not yet accumulated community votes but demonstrate clear merit

**Why 15%:** The editorial score is intentionally the smallest component. It is designed to be a tiebreaker and a signal-amplifier for underrepresented tools — not a mechanism for overriding benchmark or community signals. The 15% cap means that even a perfect editorial score (100) can move a tool's composite score by at most 15 points.

**Implementation:** Stored as `editorial_score numeric(5,2)` on the `tool_categories` join table, allowing per-category editorial judgements. Default value is 70 when no editorial score has been set.

---

### The Composite Score Formula

```
composite_score = LEAST(100, GREATEST(0,
    (benchmark_score × 0.40)
  + (community_score × 0.45)
  + (editorial_score × 0.15)
))
```

This is the final ranking signal. All tools within a category are sorted descending by composite score. The formula is implemented as the `get_ranked_tools(category_slug text)` PostgreSQL function, executed server-side via Supabase RPC.

---

### Sponsored Listings — Complete Separation

Sponsored tools are stored with `is_sponsored = true` and an optional `sponsored_label` (e.g., "Featured Partner") on the `tools` table.

**Critical architectural decision:** The `ORDER BY` clause in `get_ranked_tools` is:

```sql
ORDER BY t.is_sponsored DESC, composite_score DESC
```

This means:
1. Sponsored tools are sorted to the **top of the list** above all organic results.
2. Within sponsored tools, they are sorted by their own composite score.
3. Within organic tools, they are sorted by their own composite score.

**Sponsorship does not touch the composite score formula at all.** A sponsored tool's composite score is calculated identically to every other tool. A sponsor cannot pay to improve their score — they pay only for guaranteed placement above the organic list, with a clearly visible sponsored badge rendered on the frontend.

This separation is the platform's integrity guarantee. It is disclosed in the UI via the "How Rankings Work" section on the homepage and in the footer affiliate disclosure link.

---

## 4. Revenue Model & Monetization Streams

RankedAI™ has been designed with four distinct revenue streams, each operating independently and without compromising ranking integrity.

---

### Stream 1 — Affiliate Commissions (Primary, active at launch)

**How it works:** When a user clicks through to a tool's website from a RankedAI™ ranking card or tool detail page, the link routes through an affiliate URL. When that user subsequently signs up or makes a purchase, RankedAI™ earns a commission.

**Implementation:**
- The `tools` table stores both `website_url` (the direct link) and `affiliate_url` (the tracked referral link).
- The `click_events` table logs every affiliate click with `(tool_id, category_id, session_id, created_at)` for analytics and commission verification.
- A dedicated `/api/track-click` API endpoint handles click tracking asynchronously, ensuring the user is not delayed by analytics.
- Row Level Security on `click_events` allows anyone to insert (log a click) but only admins to read (view the analytics dashboard).

**Active affiliate partnerships at launch:**
- **ElevenLabs** — affiliate link: `https://try.elevenlabs.io/h3ioc1p5e7vz` (confirmed active)

**Expansion path:** Every tool in the database has an `affiliate_url` field ready to populate. As the platform grows in traffic, affiliate programmes can be applied for and activated for ChatGPT (OpenAI), Jasper, Cursor, GitHub Copilot, Midjourney, and others. The infrastructure requires no code changes to activate new partners.

**Revenue characteristics:** Passive, scales linearly with traffic, zero ongoing maintenance per partner once the link is set. Affiliate commissions in the AI tools space typically range from 20–40% of first-year subscription revenue per referred user.

---

### Stream 2 — Sponsored Listings (Secondary, architecture-ready)

**How it works:** AI companies pay a monthly or annual fee to have their tool appear above the organic rankings within one or more categories. The placement is clearly marked with a badge (e.g., "Featured Partner") but does not affect the tool's composite score.

**Implementation:**
- Toggled via `is_sponsored = true` and `sponsored_label = "Sponsored"` on the `tools` table.
- The sort order in the ranking query (`ORDER BY t.is_sponsored DESC`) ensures sponsored tools always appear first.
- Frontend renders a `SponsoredCard` component variant with distinct visual styling (border colour, badge label) to maintain disclosure compliance.

**Pricing model (planned):** Per-category monthly placement fee. A tool appearing in two categories pays for two placements. Rate card TBD based on traffic benchmarks.

**Integrity safeguard:** Because sponsorship and scoring are architecturally separate (different database fields, separate query clauses), it is technically impossible for the sponsorship flag to influence the composite score without a deliberate code change. This is auditable by any technical reviewer.

---

### Stream 3 — Pro Subscriptions (Future, infrastructure exists)

**How it works:** A Pro tier unlocks premium features for power users at a monthly subscription fee.

**Features tied to the Pro tier (in schema today):**
- **Saved Tools** — the `saved_tools` table (`user_id`, `tool_id`) is explicitly designed as a Pro feature. Free users can browse and vote; Pro users can bookmark tools into a personal list.
- The `profiles` table includes an `is_pro` boolean column, giving the system a clean flag to gate Pro features at the application layer.

**Planned additional Pro features:**
- Side-by-side tool comparison view
- Email alerts when a tool's ranking changes significantly
- Access to full vote/review history per tool
- CSV export of rankings

**Pricing model (planned):** ~$7–9/month or ~$60/year.

---

### Stream 4 — Data API & White-Label (Future)

**How it works:** As the platform accumulates community votes, reviews, and click-through data across tens of thousands of users, the dataset becomes independently valuable.

**Planned offerings:**
- **Public API** — developers and researchers can query rankings programmatically (rate-limited free tier, paid for higher volume)
- **White-label rankings** — media companies, newsletters, and SaaS platforms embed RankedAI™ rankings into their own products under a data licence

**Pricing model:** API credits or flat monthly data licence fee.

---

## 5. Full Tech Stack & Architecture Decisions

### Frontend Framework

**Next.js 14 (App Router)** — `next@14.2.35`

All pages use the App Router (`app/` directory) with a mix of React Server Components (RSC) and Client Components. Server Components handle data fetching directly (no useEffect, no client-side loading states for initial renders). Client Components are used only where interactivity is required (voting, tab switching, auth modal).

**Key architectural decision:** The homepage uses `export const revalidate = 60`, meaning the full ranking list is regenerated from the database at most once per minute and served as static HTML to subsequent visitors. This provides near-static performance without stale data.

**React 18** — concurrent features, Suspense boundaries

---

### Styling

**Tailwind CSS 3.4** with a custom design system defined in `tailwind.config.ts`:

- **Colour palette:** `#0A0A0F` (near-black background), `#13131A` (card surface), `#1E1E2E` (border), `#F0F0F5` (primary text), `#8888A0` (muted text), `#00D4FF` (accent/cyan), `#F59E0B` (amber/highlight), `#A855F7` (purple/gradient)
- **Typography:** Syne (headings — geometric, bold), DM Sans (body — clean, readable), JetBrains Mono (code, scores, monospaced data)
- **Custom utilities:** `rounded-card`, `rounded-pill`, `card-hover` (CSS transition on hover), custom `animate-fadeIn`, `animate-fadeInUp`, `animate-orb1`, `animate-orb2` keyframe animations
- **Responsive:** Mobile-first grid with breakpoints at `sm` (640px), `md` (768px), `lg` (1024px). Max content width 1200px.

---

### Backend & Database

**Supabase** (hosted PostgreSQL + Auth + Row Level Security)

Supabase provides the entire backend infrastructure:

- **PostgreSQL database** — all application data (tools, categories, votes, reviews, profiles, click events)
- **Supabase Auth** — magic link and OAuth (Google, GitHub) authentication; session management via JWT cookies
- **Row Level Security (RLS)** — all user-specific tables enforce RLS policies at the database layer, independent of application code
- **Supabase RPC** — the composite ranking is computed server-side as a `get_ranked_tools(category_slug)` PostgreSQL function, called via Supabase's `.rpc()` client method. This keeps the scoring logic in the database (not in JavaScript) and ensures it cannot be bypassed.

**Client libraries:**
- `@supabase/supabase-js@2.106.0` — core JavaScript client
- `@supabase/ssr@0.10.3` — server-side session handling for Next.js App Router (cookie-based auth)
- `@supabase/auth-helpers-nextjs@0.15.0` — supplementary auth helpers

---

### Content Rendering

**react-markdown@10.1.0** with **remark-gfm@4.0.1**

Tool descriptions are stored as Markdown in the database and rendered using `react-markdown` with GitHub Flavoured Markdown support. This allows rich tool descriptions (headings, bullet lists, bold text) without a CMS or rich text editor, while keeping storage simple.

---

### Authentication & Authorisation

**Supabase Auth** (magic link + OAuth)

- Users sign in via email magic link or OAuth providers
- On signup, a `profiles` row is automatically created via a PostgreSQL trigger (`handle_new_user`) — no application-side profile creation code needed
- `profiles.is_pro` gates Pro features; `profiles.is_admin` gates the admin dashboard
- Middleware (`middleware.ts`) handles session refresh on every request to keep JWT tokens current

---

### API Routes

Next.js App Router API routes (`app/api/`):

| Route | Method | Purpose |
|---|---|---|
| `/api/tools` | GET | Returns ranked tools for a category (JSON, used for client-side tab switching) |
| `/api/track-click` | POST | Logs affiliate link click events to `click_events` table |
| `/api/delete-account` | DELETE | Permanently deletes the authenticated user's account and all associated data |
| `/auth/callback` | GET | Handles Supabase OAuth callback and session establishment |

---

### Deployment Platform

**Vercel** (Next.js-native hosting)

- Zero-configuration deployment for Next.js App Router
- Automatic preview deployments on every branch push
- Environment variables managed via Vercel dashboard (`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`)
- ISR (Incremental Static Regeneration) supported natively via `revalidate` export

---

### TypeScript

TypeScript 5 throughout, with strict mode. All database types manually modelled in `types/database.ts` matching the Supabase schema exactly. No `any` types in production paths.

---

## 6. Deployment Status & Live URL

**Current Status:** Application fully built, all migrations written, seed data prepared. Ready for production deployment to Vercel.

**Deployment steps required:**
1. `vercel deploy --prod` (Vercel project creation and DNS assignment)
2. `supabase db push` to run migrations against the hosted Supabase project
3. Environment variables set in Vercel dashboard

**Environment variables required:**
```
NEXT_PUBLIC_SUPABASE_URL=<supabase project url>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<supabase anon key>
SUPABASE_SERVICE_ROLE_KEY=<supabase service role key>
```

**Domain:** To be assigned post-deployment. Intended domain: `rankedai.co` or equivalent.

**Live URL:** Pending deployment — document authored at pre-launch stage as proof of concept and IP record.

**Revalidation strategy:** Homepage and category pages use `revalidate = 60` (ISR, 60-second cache). Tool detail pages are statically generated with on-demand revalidation. API routes are uncached (real-time).

---

## 7. Database Schema Overview

The full schema is defined in `supabase/migrations/001_initial_schema.sql`. Eight tables, two triggers, one stored function, and comprehensive RLS policies.

---

### Table: `tools`

The master catalogue of AI tools.

| Column | Type | Description |
|---|---|---|
| `id` | `uuid` (PK) | Auto-generated via `gen_random_uuid()` |
| `name` | `text` | Display name (e.g., "Claude") |
| `slug` | `text` (unique) | URL-safe identifier (e.g., "claude") |
| `tagline` | `text` | One-line marketing description |
| `description` | `text` | Full Markdown description rendered on tool detail page |
| `logo_url` | `text` | Path to logo image (local `/public/logos/` or external URL) |
| `website_url` | `text` | Direct link to the tool's homepage |
| `affiliate_url` | `text` | Tracked referral link for affiliate commission |
| `pricing_model` | `text` (enum) | One of: `Free`, `Freemium`, `Paid`, `API` |
| `price_details` | `text` | Human-readable pricing summary |
| `is_sponsored` | `boolean` | Whether this tool pays for placement above organic results |
| `sponsored_label` | `text` | Badge label shown on sponsored cards (e.g., "Featured Partner") |
| `benchmark_score` | `numeric(5,2)` | 0–100 normalised benchmark score set by editorial team |
| `created_at` | `timestamptz` | Auto-set on insert |
| `updated_at` | `timestamptz` | Auto-updated via trigger |

**Trigger:** `tools_updated_at` — automatically sets `updated_at = now()` on every `UPDATE`.

**At launch:** 23 tools seeded across all six categories.

---

### Table: `categories`

The six task categories displayed as tabs.

| Column | Type | Description |
|---|---|---|
| `id` | `uuid` (PK) | Auto-generated |
| `name` | `text` | Display name (e.g., "Coding & Development") |
| `slug` | `text` (unique) | URL segment (e.g., "coding") |
| `icon` | `text` | Emoji icon displayed in the tab UI |
| `description` | `text` | Short description of the category |
| `sort_order` | `integer` | Controls tab display order |

---

### Table: `tool_categories`

Many-to-many join between tools and categories, extended with a per-category editorial score.

| Column | Type | Description |
|---|---|---|
| `tool_id` | `uuid` (FK → tools) | |
| `category_id` | `uuid` (FK → categories) | |
| `editorial_score` | `numeric(5,2)` | 0–100 editorial score for this tool **within this category** |

**Primary key:** `(tool_id, category_id)` — a tool can only appear once per category.  
**Architectural significance:** Storing `editorial_score` here (not on `tools`) enables per-category editorial judgements — a coding tool can have a different editorial score in the Coding tab versus the Research tab.

---

### Table: `votes`

User upvotes (+1) and downvotes (–1) scoped per category.

| Column | Type | Description |
|---|---|---|
| `id` | `uuid` (PK) | |
| `user_id` | `uuid` (FK → auth.users) | Authenticated user |
| `tool_id` | `uuid` (FK → tools) | |
| `category_id` | `uuid` (FK → categories) | Scope: vote is per-category |
| `value` | `integer` (check: –1 or +1) | Upvote or downvote |
| `created_at` | `timestamptz` | |

**Unique constraint:** `(user_id, tool_id, category_id)` — one vote per user per tool per category, enforced at DB level.

**RLS policies:** Users can SELECT all votes (for transparency), INSERT/UPDATE/DELETE only their own.

---

### Table: `reviews`

Written reviews with star ratings, scoped per category.

| Column | Type | Description |
|---|---|---|
| `id` | `uuid` (PK) | |
| `user_id` | `uuid` (FK → auth.users) | |
| `tool_id` | `uuid` (FK → tools) | |
| `category_id` | `uuid` (FK → categories) | Scope: review is per-category |
| `rating` | `integer` (1–5 check) | Star rating |
| `body` | `text` | Written review content |
| `created_at` | `timestamptz` | |

**RLS policies:** Reviews are public (SELECT). Users can INSERT/UPDATE/DELETE only their own reviews.

---

### Table: `saved_tools`

Pro feature — users bookmark tools they want to revisit.

| Column | Type | Description |
|---|---|---|
| `user_id` | `uuid` (FK → auth.users) | |
| `tool_id` | `uuid` (FK → tools) | |

**Primary key:** `(user_id, tool_id)` — a tool can only be saved once per user.  
**RLS policy:** Users can only manage their own saved tools (`ALL` operations scoped to `auth.uid() = user_id`).

---

### Table: `profiles`

One profile per authenticated user, auto-created on signup.

| Column | Type | Description |
|---|---|---|
| `id` | `uuid` (PK, FK → auth.users) | Matches Supabase auth user ID |
| `email` | `text` | Copied from auth.users on creation |
| `is_pro` | `boolean` | Pro subscription flag — gates saved tools and future Pro features |
| `is_admin` | `boolean` | Admin flag — gates the admin dashboard |
| `created_at` | `timestamptz` | |

**Trigger:** `on_auth_user_created` — PostgreSQL trigger on `auth.users` INSERT that automatically creates a `profiles` row, ensuring every authenticated user has a profile record without any application-side logic.

**RLS policies:** Users can only view and update their own profile row.

---

### Table: `click_events`

Affiliate click tracking for analytics and commission verification.

| Column | Type | Description |
|---|---|---|
| `id` | `uuid` (PK) | |
| `tool_id` | `uuid` (FK → tools) | Which tool was clicked |
| `category_id` | `uuid` (FK → categories, SET NULL on delete) | Which category the click originated from |
| `session_id` | `text` | Anonymous session identifier for deduplication |
| `created_at` | `timestamptz` | Timestamp of the click |

**RLS policies:** Anyone (including anonymous users) can INSERT click events. Only admins (`profiles.is_admin = true`) can SELECT click events.

---

### The `get_ranked_tools` PostgreSQL Function

The core ranking engine. Called via `supabase.rpc('get_ranked_tools', { category_slug })`.

It performs a single query that:
1. Resolves the category slug to a category ID
2. JOINs `tools` → `tool_categories` (for editorial score)
3. LEFT JOINs `votes` (for upvote/downvote aggregation)
4. LEFT JOINs `reviews` (for average star rating)
5. Applies the community score formula with the 5-vote activation threshold
6. Applies the composite score formula
7. Returns a complete result set ordered by `is_sponsored DESC, composite_score DESC`

This function encapsulates all ranking logic server-side. The JavaScript application layer receives pre-computed scores and merely renders them.

---

## 8. Key Differentiators from Competitors

The AI tool aggregator space has several existing players. RankedAI™ differentiates on the following dimensions:

---

### 1. Category-Contextual Ranking (Unique)

**Competitors:** Product Hunt, There's An AI For That, Futurepedia, Toolify.ai  
**Their approach:** Tools are ranked globally by upvotes, traffic, or recency. A tool's score is the same regardless of what task you're trying to accomplish.

**RankedAI™ difference:** Every ranking is scoped to a specific task category. Claude may rank #1 in Writing but #2 in Coding. Votes and editorial scores are collected *within a category context*, reflecting the community's evaluation of a tool for that specific use case. No competitor offers category-specific community voting.

---

### 2. Immovable Benchmark Floor (Unique)

**Competitors:** Most aggregators use only votes/reviews or only editorial picks. Neither prevents gaming.

**RankedAI™ difference:** The 40% benchmark component is sourced from external, independently verifiable benchmarks and cannot be manipulated by users or sponsors. This creates a floor beneath which no amount of coordinated voting can drag a high-quality tool, and a ceiling above which no amount of spending can raise a low-quality tool. It is the structural anti-gaming mechanism.

---

### 3. Transparent Score Breakdown (Unique)

**Competitors:** Nearly all aggregators present a single score, star rating, or rank position with no explanation of how it was derived.

**RankedAI™ difference:** Every ranking card displays the composite score with a hover tooltip (`ScoreBreakdownTooltip`) showing all three components — benchmark, community, and editorial — alongside their weights. The formula itself is displayed on the homepage. Users can verify exactly why a tool ranks where it does.

---

### 4. Sponsored Placement vs. Organic Score — Structural Separation

**Competitors:** Many aggregator sites sell "featured" or "sponsored" placements that effectively swap tools into top positions, often without clear disclosure. The distinction between paid and earned ranking is invisible to users.

**RankedAI™ difference:** Sponsorship is a display-layer flag (`is_sponsored`). It moves a tool above the organic list but never touches the scoring formula. The ranking formula in `get_ranked_tools` applies identically to sponsored and organic tools. The disclosure is explicit in the UI ("Sponsorship does not affect the composite score") and in the footer. This is auditable — the SQL is a matter of record.

---

### 5. Vote Activation Threshold

**Competitors:** Aggregators using community voting are typically vulnerable to launch-day manipulation where a new tool's team votes it to the top on day one.

**RankedAI™ difference:** Community scoring only activates after 5+ votes. Below this threshold the benchmark score is used in place of the community score, making launch-day manipulation fruitless. A tool must earn a minimum level of community engagement before the community signal influences its rank.

---

### 6. Per-Category Editorial Scores (vs. Global Editorial)

**Competitors:** Editorial sites like The Rundown AI, AI Valley, or Zapier's AI tool guides assign a general quality score or recommendation to a tool.

**RankedAI™ difference:** Editorial scores are stored on the `tool_categories` join table, not on `tools` directly. This means the editorial team can assign different editorial scores to the same tool in different categories — reflecting the tool's quality specifically for each use case, not just its overall quality. A general-purpose tool like ChatGPT might receive an editorial score of 85 in Research and 82 in Coding, reflecting nuanced per-category assessment.

---

### 7. No Friction Discovery — Tab-First UX

**Competitors:** Most AI tool directories require users to search, browse a paginated catalogue, or read long articles to find a recommendation.

**RankedAI™ difference:** The homepage presents ranked results immediately on page load, organised into six task-oriented tabs. A user lands on the page and within two seconds sees the top 5 tools for their task category, ranked transparently. No search query required. No account required to view rankings.

---

### 8. Full-Stack Ownership with Minimal Infrastructure

**Architectural differentiator:** The entire platform — frontend, backend, database, auth, and analytics — runs on two services: Vercel (Next.js hosting) and Supabase (PostgreSQL + Auth). There is no separate backend server, no Redis cache, no separate auth service, no analytics platform, and no CMS. This means:

- Near-zero operational overhead for a solo founder
- Single source of truth for all data
- Zero cold-start latency on the data layer (Supabase persistent connections)
- Row Level Security enforced at the database layer, independent of application bugs

---

## Document Certification

This document was authored by **Roanin Dunsmore** on **25 May 2026** as a formal record of the original concept, architecture, intellectual property, and business design of **RankedAI™**.

The concepts described herein — including but not limited to the three-component hybrid ranking algorithm (benchmark + community + editorial), the category-scoped voting system, the structural separation of sponsored placement from organic scoring, the 5-vote activation threshold, and the per-category editorial scoring system — are original works conceived and implemented by Roanin Dunsmore.

**Founder:** Roanin Dunsmore  
**Email:** roanin.dunsmore@gmail.com  
**Date:** 25 May 2026  
**Document Hash:** To be generated by email provider timestamp on receipt  

---

*RankedAI™ is a trademark of Roanin Dunsmore. All rights reserved.*
