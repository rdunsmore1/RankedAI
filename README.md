# AI Hub

A full-stack AI tool ranking directory — curated by benchmarks, fine-tuned by community votes.

Built with Next.js 14, Tailwind CSS, and Supabase.

## Tech Stack

- **Framework**: Next.js 14 (App Router) + TypeScript
- **Styling**: Tailwind CSS + custom CSS variables
- **Database & Auth**: Supabase (PostgreSQL + Auth)
- **Fonts**: Syne, DM Sans, JetBrains Mono (Google Fonts)
- **Deployment target**: Vercel

## Quick Start

### 1. Create a Supabase Project

Go to [supabase.com](https://supabase.com) → New project. Copy your project URL and anon key from **Settings → API**.

### 2. Configure Environment Variables

```bash
cp .env.local.example .env.local
```

Fill in `.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 3. Run Database Migrations

In the Supabase dashboard → **SQL Editor**, run in order:

1. `supabase/migrations/001_initial_schema.sql` — tables, RLS, ranking function
2. `supabase/migrations/002_seed_data.sql` — 22 AI tools across 6 categories

### 4. Enable Google OAuth (optional)

In Supabase → **Authentication → Providers → Google**, enable it and add your credentials.

Add `http://localhost:3000/auth/callback` to your Google OAuth redirect URIs.

### 5. Grant Admin Access

After signing up, run this in the Supabase SQL editor:

```sql
UPDATE profiles SET is_admin = true WHERE email = 'your@email.com';
```

### 6. Run the Dev Server

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
app/
  page.tsx                  # Homepage (hero + tabbed rankings + how it works)
  [category]/page.tsx       # Category ranking page (/coding, /writing, etc.)
  tool/[slug]/page.tsx      # Tool detail page (two-column layout)
  login/page.tsx            # Auth page
  account/page.tsx          # User profile, votes, saved tools
  admin/page.tsx            # Admin panel (tool CRUD, analytics)
  api/tools/route.ts        # Ranked tools JSON endpoint
  api/track-click/route.ts  # Affiliate click tracking
  auth/callback/route.ts    # OAuth callback handler

components/
  HomepageTabs.tsx          # Client tab switcher (fetches per-category)
  CategoryPageClient.tsx    # Filters + sort + pagination
  ToolDetailClient.tsx      # Detail page with vote, review, save
  AccountClient.tsx         # Saved tools, vote history, reviews
  AdminClient.tsx           # Tool CRUD + click analytics
  layout/Header.tsx         # Sticky header + auth state
  layout/Footer.tsx
  ui/                       # Reusable component library
    RankingCard.tsx
    SponsoredCard.tsx       # Amber border, above organic #1
    CategoryTabs.tsx
    ScoreBar.tsx            # Animated progress bar
    ScoreBreakdownTooltip.tsx
    VoteButtons.tsx         # Optimistic UI upvote/downvote
    PricingPill.tsx
    StarRating.tsx
    ReviewForm.tsx
    AuthModal.tsx
    ToolLogo.tsx

lib/
  supabase/client.ts        # Browser client
  supabase/server.ts        # Server client (cookies-based)
  data.ts                   # Server data fetching helpers

types/database.ts           # All DB table types

supabase/migrations/
  001_initial_schema.sql
  002_seed_data.sql
```

## Ranking Algorithm

```
composite_score = (benchmark × 0.40) + (community × 0.45) + (editorial × 0.15)
```

| Component | Weight | Source |
|---|---|---|
| Benchmark | 40% | Admin-seeded from public benchmarks (Arena AI Elo, MMLU, HumanEval) |
| Community | 45% | Upvotes, downvotes, star ratings. Requires 5+ votes to activate. |
| Editorial | 15% | Admin score per tool per category (UX, pricing, support quality) |

Sponsored tools appear **above** organic #1 with a clear amber "Sponsored" badge. Sponsorship has **zero weight** in the composite score.

## Monetization

- **Affiliate links**: All "Visit Tool" CTAs use `affiliate_url` (falls back to `website_url`). Clicks logged to `click_events` table. View in admin panel.
- **Sponsored slots**: Set `is_sponsored = true` in admin. Max 1 per category. Distinct amber card above organic rankings.
- **Pro membership**: Saving tools requires Pro. Stripe integration skeleton is in place — wire up `STRIPE_SECRET_KEY` and set `is_pro = true` via webhook.

## Deployment

1. Push to GitHub
2. Import in [Vercel](https://vercel.com)
3. Add environment variables
4. Add `https://yourdomain.com/auth/callback` to Supabase redirect URLs
