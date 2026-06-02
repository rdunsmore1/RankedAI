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
    value: number; tool_id: string; category_id: string;
    tools: { name: string; slug: string } | null;
    categories: { name: string; slug: string } | null;
  }>;
  reviews: Array<{
    id: string; rating: number; body: string | null; created_at: string;
    tools: { name: string; slug: string } | null;
    categories: { name: string; slug: string } | null;
  }>;
}

export default function AccountClient({ user, profile, savedTools, votes, reviews }: AccountClientProps) {
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState<string | null>(null);

  const handleDeleteAccount = async () => {
    setDeleting(true); setDeleteError(null);
    try {
      const res = await fetch("/api/delete-account", { method: "DELETE" });
      if (!res.ok) { const body = await res.json(); throw new Error(body.error ?? "Failed to delete account"); }
      window.location.href = "/";
    } catch (err) {
      setDeleteError(err instanceof Error ? err.message : "Something went wrong");
      setDeleting(false);
    }
  };

  const sections = [
    { id: "saved",   label: "Saved Tools",  count: savedTools.length },
    { id: "votes",   label: "Vote History", count: votes.length },
    { id: "reviews", label: "Reviews",      count: reviews.length },
  ];

  const card = { background: "#F0EBE1", border: "0.5px solid #D9CFC4" };

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-10">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8 pb-8" style={{ borderBottom: "0.5px solid #D9CFC4" }}>
        <div className="w-14 h-14 rounded-full flex items-center justify-center font-semibold text-xl text-[#6B1E2E]"
          style={{ background: "rgba(107,30,46,0.09)", border: "0.5px solid rgba(107,30,46,0.2)" }}>
          {user.email?.[0]?.toUpperCase() ?? "?"}
        </div>
        <div>
          <h1 className="font-semibold text-xl text-[#1A1A1A] tracking-tight">{user.email?.split("@")[0]}</h1>
          <p className="text-sm text-[#8A7F74]">{user.email}</p>
          <div className="flex items-center gap-2 mt-1">
            {profile?.is_pro
              ? <span className="text-[10px] font-semibold px-2 py-0.5 rounded-pill" style={{ background: "rgba(184,150,60,0.12)", color: "#B8963C", border: "0.5px solid rgba(184,150,60,0.3)" }}>PRO</span>
              : <span className="text-[10px] text-[#8A7F74]">Free plan</span>}
            {profile?.is_admin && (
              <Link href="/admin" className="text-[10px] font-semibold px-2 py-0.5 rounded-pill hover:opacity-80 transition-opacity"
                style={{ background: "rgba(107,30,46,0.09)", color: "#6B1E2E", border: "0.5px solid rgba(107,30,46,0.2)" }}>ADMIN</Link>
            )}
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-[220px_1fr] gap-8">
        {/* Sidebar */}
        <div className="space-y-0.5">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`}
              className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-[#8A7F74] hover:text-[#1A1A1A] hover:bg-[#F0EBE1] transition-colors">
              <span>{s.label}</span>
              <span className="text-xs text-[#B5A898] tabular-nums">{s.count}</span>
            </a>
          ))}
          <a href="#danger" className="flex items-center px-3 py-2 rounded-lg text-sm text-red-400/60 hover:text-red-500 hover:bg-red-50 transition-colors">
            Danger Zone
          </a>
        </div>

        {/* Content */}
        <div className="space-y-10">
          {/* Saved Tools */}
          <section id="saved">
            <h2 className="font-semibold text-lg text-[#1A1A1A] mb-4 tracking-tight">Saved Tools ({savedTools.length})</h2>
            {savedTools.length === 0 ? (
              <p className="text-sm text-[#8A7F74]">You haven&apos;t saved any tools yet.{" "}
                <Link href="/coding" className="text-[#6B1E2E] hover:underline">Browse rankings</Link></p>
            ) : (
              <div className="grid sm:grid-cols-2 gap-3">
                {savedTools.map((st) => {
                  const tool = st.tools; if (!tool) return null;
                  return (
                    <Link key={st.tool_id} href={`/tool/${tool.slug}`}
                      className="flex items-center gap-3 rounded-card p-3 transition-colors hover:border-[#6B1E2E]/20"
                      style={card}>
                      <ToolLogo name={tool.name} slug={tool.slug} logoUrl={tool.logo_url} size={36} />
                      <div>
                        <div className="font-medium text-sm text-[#1A1A1A]">{tool.name}</div>
                        {tool.tagline && <div className="text-[11px] text-[#8A7F74] line-clamp-1">{tool.tagline}</div>}
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </section>

          {/* Vote history */}
          <section id="votes">
            <h2 className="font-semibold text-lg text-[#1A1A1A] mb-4 tracking-tight">Vote History ({votes.length})</h2>
            {votes.length === 0 ? (
              <p className="text-sm text-[#8A7F74]">No votes yet. Vote on tools in any category!</p>
            ) : (
              <div className="space-y-2">
                {votes.map((v) => (
                  <div key={`${v.tool_id}-${v.category_id}`} className="flex items-center gap-3 rounded-lg p-3" style={card}>
                    <span className={`font-semibold text-lg ${v.value === 1 ? "text-[#2D6A4F]" : "text-red-500"}`}>
                      {v.value === 1 ? "▲" : "▼"}
                    </span>
                    <div className="flex-1">
                      {v.tools && (
                        <Link href={`/tool/${v.tools.slug}`} className="text-sm font-medium text-[#1A1A1A] hover:text-[#6B1E2E] transition-colors">
                          {v.tools.name}
                        </Link>
                      )}
                      {v.categories && <span className="text-xs text-[#8A7F74] ml-2">in {v.categories.name}</span>}
                    </div>
                    <span className={`text-xs font-medium ${v.value === 1 ? "text-[#2D6A4F]" : "text-red-500"}`}>
                      {v.value === 1 ? "Upvote" : "Downvote"}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Reviews */}
          <section id="reviews">
            <h2 className="font-semibold text-lg text-[#1A1A1A] mb-4 tracking-tight">Reviews ({reviews.length})</h2>
            {reviews.length === 0 ? (
              <p className="text-sm text-[#8A7F74]">No reviews yet.</p>
            ) : (
              <div className="space-y-3">
                {reviews.map((r) => (
                  <div key={r.id} className="rounded-card p-4" style={card}>
                    <div className="flex items-center gap-2 mb-2">
                      {r.tools && (
                        <Link href={`/tool/${r.tools.slug}`} className="font-medium text-sm text-[#1A1A1A] hover:text-[#6B1E2E] transition-colors">
                          {r.tools.name}
                        </Link>
                      )}
                      {r.categories && <span className="text-xs text-[#8A7F74]">in {r.categories.name}</span>}
                      <StarRating value={r.rating} readonly size="sm" />
                      <span className="ml-auto text-[10px] text-[#B5A898]">{new Date(r.created_at).toLocaleDateString()}</span>
                    </div>
                    {r.body && <p className="text-sm text-[#8A7F74]">{r.body}</p>}
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* Danger Zone */}
          <section id="danger">
            <h2 className="font-semibold text-lg text-red-500 mb-4 tracking-tight">Danger Zone</h2>
            <div className="rounded-card p-5" style={{ background: "#FEF2F2", border: "0.5px solid #FECACA" }}>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex-1">
                  <div className="font-medium text-sm text-[#1A1A1A] mb-1">Delete account</div>
                  <p className="text-xs text-[#8A7F74] leading-relaxed">
                    Permanently removes your account, votes, reviews, and saved tools within 30 days as required by our{" "}
                    <Link href="/privacy" className="text-[#6B1E2E] hover:underline">privacy policy</Link>. This cannot be undone.
                  </p>
                </div>
                {!deleteConfirm ? (
                  <button onClick={() => setDeleteConfirm(true)}
                    className="shrink-0 text-xs font-medium text-red-500 border border-red-200 px-4 py-2 rounded-lg hover:bg-red-50 transition-colors">
                    Delete account
                  </button>
                ) : (
                  <div className="shrink-0 flex flex-col gap-2 items-end">
                    <p className="text-xs text-red-500 font-semibold">Are you sure? This is permanent.</p>
                    <div className="flex gap-2">
                      <button onClick={() => setDeleteConfirm(false)}
                        className="text-xs text-[#8A7F74] px-3 py-1.5 rounded-lg hover:text-[#1A1A1A] transition-colors"
                        style={{ border: "0.5px solid #D9CFC4" }}>Cancel</button>
                      <button onClick={handleDeleteAccount} disabled={deleting}
                        className="text-xs font-semibold text-white bg-red-600 hover:bg-red-700 px-3 py-1.5 rounded-lg transition-colors disabled:opacity-60">
                        {deleting ? "Deleting..." : "Yes, delete everything"}
                      </button>
                    </div>
                    {deleteError && <p className="text-xs text-red-500">{deleteError}</p>}
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
