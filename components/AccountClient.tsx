"use client";

import { useState } from "react";
import Link from "next/link";
import ToolLogo from "@/components/ui/ToolLogo";
import StarRating from "@/components/ui/StarRating";
import type { User } from "@supabase/supabase-js";

interface AccountClientProps {
  user: User;
  profile: { is_pro: boolean; is_admin: boolean } | null;
  savedTools: Array<{
    tool_id: string;
    tools: { name: string; slug: string; tagline: string | null; logo_url: string | null; pricing_model: string | null } | null;
  }>;
  votes: Array<{
    value: number;
    tool_id: string;
    category_id: string;
    tools: { name: string; slug: string } | null;
    categories: { name: string; slug: string } | null;
  }>;
  reviews: Array<{
    id: string;
    rating: number;
    body: string | null;
    created_at: string;
    tools: { name: string; slug: string } | null;
    categories: { name: string; slug: string } | null;
  }>;
}

export default function AccountClient({ user, profile, savedTools, votes, reviews }: AccountClientProps) {
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState<string | null>(null);

  const handleDeleteAccount = async () => {
    setDeleting(true);
    setDeleteError(null);
    try {
      const res = await fetch("/api/delete-account", { method: "DELETE" });
      if (!res.ok) {
        const body = await res.json();
        throw new Error(body.error ?? "Failed to delete account");
      }
      window.location.href = "/";
    } catch (err) {
      setDeleteError(err instanceof Error ? err.message : "Something went wrong");
      setDeleting(false);
    }
  };

  const sections = [
    { id: "saved", label: "Saved Tools", count: savedTools.length },
    { id: "votes", label: "Vote History", count: votes.length },
    { id: "reviews", label: "Reviews", count: reviews.length },
  ];

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-10">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8 pb-8 border-b border-[#1E1E2E]">
        <div className="w-14 h-14 rounded-full bg-[#00D4FF]/15 border border-[#00D4FF]/30 flex items-center justify-center">
          <span className="font-syne font-bold text-xl text-[#00D4FF]">
            {user.email?.[0]?.toUpperCase() ?? "?"}
          </span>
        </div>
        <div>
          <h1 className="font-syne font-bold text-xl text-[#F0F0F5]">
            {user.email?.split("@")[0]}
          </h1>
          <p className="text-sm text-[#8888A0]">{user.email}</p>
          <div className="flex items-center gap-2 mt-1">
            {profile?.is_pro ? (
              <span className="text-[10px] font-mono font-bold bg-[#F59E0B]/15 text-[#F59E0B] border border-[#F59E0B]/30 px-2 py-0.5 rounded-pill">PRO</span>
            ) : (
              <span className="text-[10px] text-[#8888A0]">Free plan</span>
            )}
            {profile?.is_admin && (
              <Link href="/admin" className="text-[10px] font-mono font-bold bg-[#00D4FF]/15 text-[#00D4FF] border border-[#00D4FF]/30 px-2 py-0.5 rounded-pill hover:bg-[#00D4FF]/25 transition-colors">
                ADMIN
              </Link>
            )}
          </div>
        </div>

      </div>

      <div className="grid lg:grid-cols-[240px_1fr] gap-8">
        {/* Sidebar nav */}
        <div className="space-y-1">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-[#8888A0] hover:text-[#F0F0F5] hover:bg-[#1E1E2E] transition-colors"
            >
              <span>{s.label}</span>
              <span className="font-mono text-xs bg-[#1E1E2E] px-1.5 py-0.5 rounded">{s.count}</span>
            </a>
          ))}
          <a
            href="#danger"
            className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-red-400/70 hover:text-red-400 hover:bg-[#1E1E2E] transition-colors"
          >
            <span>Danger Zone</span>
          </a>
        </div>

        {/* Content */}
        <div className="space-y-10">
          {/* Saved Tools */}
          <section id="saved">
            <h2 className="font-syne font-bold text-lg text-[#F0F0F5] mb-4">
              Saved Tools ({savedTools.length})
            </h2>
            {savedTools.length === 0 ? (
              <p className="text-sm text-[#8888A0]">
                You haven&apos;t saved any tools yet.{" "}
                <Link href="/coding" className="text-[#00D4FF] hover:underline">Browse rankings</Link>
              </p>
            ) : (
              <div className="grid sm:grid-cols-2 gap-3">
                {savedTools.map((st) => {
                  const tool = st.tools;
                  if (!tool) return null;
                  return (
                    <Link
                      key={st.tool_id}
                      href={`/tool/${tool.slug}`}
                      className="flex items-center gap-3 bg-[#13131A] border border-[#1E1E2E] rounded-card p-3 hover:border-[#00D4FF]/30 transition-colors"
                    >
                      <ToolLogo name={tool.name} logoUrl={tool.logo_url} size={36} />
                      <div>
                        <div className="font-semibold text-sm text-[#F0F0F5]">{tool.name}</div>
                        {tool.tagline && <div className="text-[11px] text-[#8888A0] line-clamp-1">{tool.tagline}</div>}
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </section>

          {/* Vote history */}
          <section id="votes">
            <h2 className="font-syne font-bold text-lg text-[#F0F0F5] mb-4">
              Vote History ({votes.length})
            </h2>
            {votes.length === 0 ? (
              <p className="text-sm text-[#8888A0]">No votes yet. Vote on tools in any category!</p>
            ) : (
              <div className="space-y-2">
                {votes.map((v) => (
                  <div key={`${v.tool_id}-${v.category_id}`} className="flex items-center gap-3 bg-[#13131A] border border-[#1E1E2E] rounded-lg p-3">
                    <span className={`font-bold text-lg ${v.value === 1 ? "text-[#00D4FF]" : "text-red-400"}`}>
                      {v.value === 1 ? "▲" : "▼"}
                    </span>
                    <div className="flex-1">
                      {v.tools && (
                        <Link href={`/tool/${v.tools.slug}`} className="text-sm font-semibold text-[#F0F0F5] hover:text-[#00D4FF] transition-colors">
                          {v.tools.name}
                        </Link>
                      )}
                      {v.categories && (
                        <span className="text-xs text-[#8888A0] ml-2">in {v.categories.name}</span>
                      )}
                    </div>
                    <span className={`text-xs font-semibold ${v.value === 1 ? "text-[#00D4FF]" : "text-red-400"}`}>
                      {v.value === 1 ? "Upvote" : "Downvote"}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Danger Zone */}
          <section id="danger">
            <h2 className="font-syne font-bold text-lg text-red-400 mb-4">Danger Zone</h2>
            <div className="bg-[#13131A] border border-red-500/20 rounded-card p-5">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex-1">
                  <div className="font-semibold text-sm text-[#F0F0F5] mb-1">Delete account</div>
                  <p className="text-xs text-[#8888A0] leading-relaxed">
                    Permanently removes your account, votes, reviews, and saved tools within 30 days as required by our{" "}
                    <Link href="/privacy" className="text-[#00D4FF] hover:underline">privacy policy</Link>.
                    This action cannot be undone.
                  </p>
                </div>
                {!deleteConfirm ? (
                  <button
                    onClick={() => setDeleteConfirm(true)}
                    className="shrink-0 text-xs font-semibold text-red-400 border border-red-500/30 px-4 py-2 rounded-lg hover:bg-red-500/10 transition-colors"
                  >
                    Delete account
                  </button>
                ) : (
                  <div className="shrink-0 flex flex-col gap-2 items-end">
                    <p className="text-xs text-red-400 font-semibold">Are you sure? This is permanent.</p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setDeleteConfirm(false)}
                        className="text-xs text-[#8888A0] px-3 py-1.5 border border-[#1E1E2E] rounded-lg hover:text-[#F0F0F5] transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleDeleteAccount}
                        disabled={deleting}
                        className="text-xs font-semibold text-white bg-red-600 hover:bg-red-700 px-3 py-1.5 rounded-lg transition-colors disabled:opacity-60"
                      >
                        {deleting ? "Deleting..." : "Yes, delete everything"}
                      </button>
                    </div>
                    {deleteError && <p className="text-xs text-red-400">{deleteError}</p>}
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Reviews */}
          <section id="reviews">
            <h2 className="font-syne font-bold text-lg text-[#F0F0F5] mb-4">
              Reviews ({reviews.length})
            </h2>
            {reviews.length === 0 ? (
              <p className="text-sm text-[#8888A0]">No reviews yet.</p>
            ) : (
              <div className="space-y-3">
                {reviews.map((r) => (
                  <div key={r.id} className="bg-[#13131A] border border-[#1E1E2E] rounded-card p-4">
                    <div className="flex items-center gap-2 mb-2">
                      {r.tools && (
                        <Link href={`/tool/${r.tools.slug}`} className="font-semibold text-sm text-[#F0F0F5] hover:text-[#00D4FF] transition-colors">
                          {r.tools.name}
                        </Link>
                      )}
                      {r.categories && (
                        <span className="text-xs text-[#8888A0]">in {r.categories.name}</span>
                      )}
                      <StarRating value={r.rating} readonly size="sm" />
                      <span className="ml-auto text-[10px] text-[#8888A0]">
                        {new Date(r.created_at).toLocaleDateString()}
                      </span>
                    </div>
                    {r.body && <p className="text-sm text-[#8888A0]">{r.body}</p>}
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
