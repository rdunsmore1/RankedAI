export interface Tool {
  id: string;
  name: string;
  slug: string;
  tagline: string | null;
  description: string | null;
  logo_url: string | null;
  website_url: string | null;
  affiliate_url: string | null;
  pricing_model: "Free" | "Freemium" | "Paid" | "API" | null;
  price_details: string | null;
  is_sponsored: boolean;
  sponsored_label: string | null;
  benchmark_score: number | null;
  created_at: string;
  updated_at: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string | null;
  description: string | null;
  sort_order: number;
}

export interface ToolCategory {
  tool_id: string;
  category_id: string;
  editorial_score: number | null;
}

export interface Vote {
  id: string;
  user_id: string;
  tool_id: string;
  category_id: string;
  value: 1 | -1;
  created_at: string;
}

export interface Review {
  id: string;
  user_id: string;
  tool_id: string;
  category_id: string;
  rating: number;
  body: string;
  created_at: string;
}

export interface RankedTool extends Tool {
  composite_score: number;
  benchmark_component: number;
  community_component: number;
  community_score: number;
  editorial_component: number;
  total_votes: number;
  upvotes: number;
  downvotes: number;
  avg_rating: number | null;
  review_count: number;
  editorial_score: number | null;
  rank: number;
  category_id: string;
  user_vote?: 1 | -1 | null;
}

export interface Profile {
  id: string;
  email: string;
  is_pro: boolean;
  is_admin: boolean;
  created_at: string;
}

export interface ClickEvent {
  id: string;
  tool_id: string;
  category_id: string | null;
  session_id: string | null;
  created_at: string;
}
