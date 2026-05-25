-- Enable UUID generation
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Tools table
CREATE TABLE IF NOT EXISTS tools (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name          text NOT NULL,
  slug          text UNIQUE NOT NULL,
  tagline       text,
  description   text,
  logo_url      text,
  website_url   text,
  affiliate_url text,
  pricing_model text CHECK (pricing_model IN ('Free', 'Freemium', 'Paid', 'API')),
  price_details text,
  is_sponsored  boolean DEFAULT false,
  sponsored_label text,
  benchmark_score numeric(5,2),
  created_at    timestamptz DEFAULT now(),
  updated_at    timestamptz DEFAULT now()
);

-- Categories table
CREATE TABLE IF NOT EXISTS categories (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name        text NOT NULL,
  slug        text UNIQUE NOT NULL,
  icon        text,
  description text,
  sort_order  integer DEFAULT 0
);

-- Tool-Category join table
CREATE TABLE IF NOT EXISTS tool_categories (
  tool_id      uuid REFERENCES tools(id) ON DELETE CASCADE,
  category_id  uuid REFERENCES categories(id) ON DELETE CASCADE,
  editorial_score numeric(5,2),
  PRIMARY KEY (tool_id, category_id)
);

-- Votes table
CREATE TABLE IF NOT EXISTS votes (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id     uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  tool_id     uuid REFERENCES tools(id) ON DELETE CASCADE,
  category_id uuid REFERENCES categories(id) ON DELETE CASCADE,
  value       integer CHECK (value IN (-1, 1)),
  created_at  timestamptz DEFAULT now(),
  UNIQUE (user_id, tool_id, category_id)
);

-- Reviews table
CREATE TABLE IF NOT EXISTS reviews (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id     uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  tool_id     uuid REFERENCES tools(id) ON DELETE CASCADE,
  category_id uuid REFERENCES categories(id) ON DELETE CASCADE,
  rating      integer CHECK (rating BETWEEN 1 AND 5),
  body        text,
  created_at  timestamptz DEFAULT now()
);

-- Saved tools table (Pro feature)
CREATE TABLE IF NOT EXISTS saved_tools (
  user_id  uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  tool_id  uuid REFERENCES tools(id) ON DELETE CASCADE,
  PRIMARY KEY (user_id, tool_id)
);

-- User profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id         uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email      text,
  is_pro     boolean DEFAULT false,
  is_admin   boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Click events table (affiliate tracking)
CREATE TABLE IF NOT EXISTS click_events (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  tool_id     uuid REFERENCES tools(id) ON DELETE CASCADE,
  category_id uuid REFERENCES categories(id) ON DELETE SET NULL,
  session_id  text,
  created_at  timestamptz DEFAULT now()
);

-- Auto-create profile on user signup
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO profiles (id, email)
  VALUES (new.id, new.email);
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_trigger WHERE tgname = 'on_auth_user_created'
  ) THEN
    CREATE TRIGGER on_auth_user_created
      AFTER INSERT ON auth.users
      FOR EACH ROW EXECUTE PROCEDURE handle_new_user();
  END IF;
END $$;

-- Updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS trigger AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DO $$ BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_trigger WHERE tgname = 'tools_updated_at'
  ) THEN
    CREATE TRIGGER tools_updated_at
      BEFORE UPDATE ON tools
      FOR EACH ROW EXECUTE PROCEDURE update_updated_at();
  END IF;
END $$;

-- Composite score function
CREATE OR REPLACE FUNCTION get_ranked_tools(category_slug text)
RETURNS TABLE (
  id uuid,
  name text,
  slug text,
  tagline text,
  description text,
  logo_url text,
  website_url text,
  affiliate_url text,
  pricing_model text,
  price_details text,
  is_sponsored boolean,
  sponsored_label text,
  benchmark_score numeric,
  editorial_score numeric,
  upvotes bigint,
  downvotes bigint,
  total_votes bigint,
  avg_rating numeric,
  review_count bigint,
  community_score numeric,
  composite_score numeric,
  category_id uuid
) AS $$
DECLARE
  cat_id uuid;
BEGIN
  SELECT c.id INTO cat_id FROM categories c WHERE c.slug = category_slug;

  RETURN QUERY
  SELECT
    t.id,
    t.name,
    t.slug,
    t.tagline,
    t.description,
    t.logo_url,
    t.website_url,
    t.affiliate_url,
    t.pricing_model,
    t.price_details,
    t.is_sponsored,
    t.sponsored_label,
    t.benchmark_score,
    tc.editorial_score,
    COALESCE(SUM(CASE WHEN v.value = 1 THEN 1 ELSE 0 END), 0)::bigint AS upvotes,
    COALESCE(SUM(CASE WHEN v.value = -1 THEN 1 ELSE 0 END), 0)::bigint AS downvotes,
    COALESCE(COUNT(v.id), 0)::bigint AS total_votes,
    AVG(r.rating)::numeric AS avg_rating,
    COUNT(DISTINCT r.id)::bigint AS review_count,
    CASE
      WHEN COUNT(v.id) < 5 THEN COALESCE(t.benchmark_score, 50)
      ELSE LEAST(100, GREATEST(0,
        ((COALESCE(SUM(CASE WHEN v.value = 1 THEN 1 ELSE 0 END), 0)::numeric
          - COALESCE(SUM(CASE WHEN v.value = -1 THEN 1 ELSE 0 END), 0)::numeric)
          / NULLIF(COUNT(v.id)::numeric, 0) * 50 + 50)
        * 0.5
        + COALESCE(AVG(r.rating) / 5 * 50, 50) * 0.5
      ))
    END::numeric AS community_score,
    LEAST(100, GREATEST(0,
      COALESCE(t.benchmark_score, 50) * 0.40
      + CASE
          WHEN COUNT(v.id) < 5 THEN COALESCE(t.benchmark_score, 50)
          ELSE LEAST(100, GREATEST(0,
            ((COALESCE(SUM(CASE WHEN v.value = 1 THEN 1 ELSE 0 END), 0)::numeric
              - COALESCE(SUM(CASE WHEN v.value = -1 THEN 1 ELSE 0 END), 0)::numeric)
              / NULLIF(COUNT(v.id)::numeric, 0) * 50 + 50)
            * 0.5
            + COALESCE(AVG(r.rating) / 5 * 50, 50) * 0.5
          ))
        END * 0.45
      + COALESCE(tc.editorial_score, 70) * 0.15
    ))::numeric AS composite_score,
    cat_id AS category_id
  FROM tools t
  JOIN tool_categories tc ON tc.tool_id = t.id AND tc.category_id = cat_id
  LEFT JOIN votes v ON v.tool_id = t.id AND v.category_id = cat_id
  LEFT JOIN reviews r ON r.tool_id = t.id AND r.category_id = cat_id
  GROUP BY t.id, t.name, t.slug, t.tagline, t.description, t.logo_url,
           t.website_url, t.affiliate_url, t.pricing_model, t.price_details,
           t.is_sponsored, t.sponsored_label, t.benchmark_score, tc.editorial_score
  ORDER BY t.is_sponsored DESC, composite_score DESC;
END;
$$ LANGUAGE plpgsql;

-- Row Level Security
ALTER TABLE votes ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE saved_tools ENABLE ROW LEVEL SECURITY;
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE click_events ENABLE ROW LEVEL SECURITY;

-- Votes policies
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname = 'public' AND tablename = 'votes' AND policyname = 'Users can view all votes') THEN
    CREATE POLICY "Users can view all votes" ON votes FOR SELECT USING (true);
  END IF;
END $$;
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname = 'public' AND tablename = 'votes' AND policyname = 'Users can insert own votes') THEN
    CREATE POLICY "Users can insert own votes" ON votes FOR INSERT WITH CHECK (auth.uid() = user_id);
  END IF;
END $$;
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname = 'public' AND tablename = 'votes' AND policyname = 'Users can update own votes') THEN
    CREATE POLICY "Users can update own votes" ON votes FOR UPDATE USING (auth.uid() = user_id);
  END IF;
END $$;
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname = 'public' AND tablename = 'votes' AND policyname = 'Users can delete own votes') THEN
    CREATE POLICY "Users can delete own votes" ON votes FOR DELETE USING (auth.uid() = user_id);
  END IF;
END $$;

-- Reviews policies
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname = 'public' AND tablename = 'reviews' AND policyname = 'Reviews are public') THEN
    CREATE POLICY "Reviews are public" ON reviews FOR SELECT USING (true);
  END IF;
END $$;
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname = 'public' AND tablename = 'reviews' AND policyname = 'Users can insert own reviews') THEN
    CREATE POLICY "Users can insert own reviews" ON reviews FOR INSERT WITH CHECK (auth.uid() = user_id);
  END IF;
END $$;
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname = 'public' AND tablename = 'reviews' AND policyname = 'Users can update own reviews') THEN
    CREATE POLICY "Users can update own reviews" ON reviews FOR UPDATE USING (auth.uid() = user_id);
  END IF;
END $$;
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname = 'public' AND tablename = 'reviews' AND policyname = 'Users can delete own reviews') THEN
    CREATE POLICY "Users can delete own reviews" ON reviews FOR DELETE USING (auth.uid() = user_id);
  END IF;
END $$;

-- Saved tools policy
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname = 'public' AND tablename = 'saved_tools' AND policyname = 'Users can manage own saved tools') THEN
    CREATE POLICY "Users can manage own saved tools" ON saved_tools FOR ALL USING (auth.uid() = user_id);
  END IF;
END $$;

-- Profiles policies
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname = 'public' AND tablename = 'profiles' AND policyname = 'Users can view own profile') THEN
    CREATE POLICY "Users can view own profile" ON profiles FOR SELECT USING (auth.uid() = id);
  END IF;
END $$;
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname = 'public' AND tablename = 'profiles' AND policyname = 'Users can update own profile') THEN
    CREATE POLICY "Users can update own profile" ON profiles FOR UPDATE USING (auth.uid() = id);
  END IF;
END $$;

-- Click events policies
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname = 'public' AND tablename = 'click_events' AND policyname = 'Anyone can insert click events') THEN
    CREATE POLICY "Anyone can insert click events" ON click_events FOR INSERT WITH CHECK (true);
  END IF;
END $$;
DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE schemaname = 'public' AND tablename = 'click_events' AND policyname = 'Admins can view click events') THEN
    CREATE POLICY "Admins can view click events" ON click_events FOR SELECT USING (
      EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND is_admin = true)
    );
  END IF;
END $$;
