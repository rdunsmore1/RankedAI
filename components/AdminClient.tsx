"use client";

import { useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import PricingPill from "@/components/ui/PricingPill";

interface AdminClientProps {
  tools: Array<{
    id: string;
    name: string;
    slug: string;
    tagline: string | null;
    pricing_model: string | null;
    benchmark_score: number | null;
    is_sponsored: boolean;
    sponsored_label: string | null;
    website_url: string | null;
    affiliate_url: string | null;
  }>;
  categories: Array<{
    id: string;
    name: string;
    slug: string;
    icon: string | null;
    sort_order: number;
  }>;
  clickStats: Array<{ name: string; slug: string; count: number }>;
}

type Tab = "tools" | "categories" | "clicks";

export default function AdminClient({ tools: initialTools, categories, clickStats }: AdminClientProps) {
  const [tab, setTab] = useState<Tab>("tools");
  const [tools, setTools] = useState(initialTools);
  const [editingTool, setEditingTool] = useState<string | null>(null);
  const [editData, setEditData] = useState<Record<string, unknown>>({});
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  const supabase = createClient();

  const startEdit = (tool: (typeof initialTools)[0]) => {
    setEditingTool(tool.id);
    setEditData({
      name: tool.name,
      tagline: tool.tagline ?? "",
      benchmark_score: tool.benchmark_score ?? "",
      is_sponsored: tool.is_sponsored,
      sponsored_label: tool.sponsored_label ?? "",
      website_url: tool.website_url ?? "",
      affiliate_url: tool.affiliate_url ?? "",
      pricing_model: tool.pricing_model ?? "Freemium",
    });
  };

  const saveEdit = async (toolId: string) => {
    setSaving(true);
    const { error } = await supabase
      .from("tools")
      .update({
        name: editData.name,
        tagline: editData.tagline || null,
        benchmark_score: editData.benchmark_score ? Number(editData.benchmark_score) : null,
        is_sponsored: editData.is_sponsored,
        sponsored_label: editData.sponsored_label || null,
        website_url: editData.website_url || null,
        affiliate_url: editData.affiliate_url || null,
        pricing_model: editData.pricing_model || null,
      })
      .eq("id", toolId);

    if (error) {
      setMsg(`Error: ${error.message}`);
    } else {
      setMsg("Saved successfully");
      setTools((prev) =>
        prev.map((t) =>
          t.id === toolId ? { ...t, ...(editData as Partial<typeof t>) } : t
        )
      );
      setEditingTool(null);
    }
    setSaving(false);
    setTimeout(() => setMsg(null), 3000);
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-syne font-bold text-2xl text-[#F0F0F5]">Admin Panel</h1>
        <Link href="/" className="text-sm text-[#8888A0] hover:text-[#F0F0F5] transition-colors">← Back to site</Link>
      </div>

      {msg && (
        <div className={`mb-4 px-4 py-2.5 rounded-lg text-sm ${msg.startsWith("Error") ? "bg-red-500/15 text-red-400" : "bg-green-500/15 text-green-400"}`}>
          {msg}
        </div>
      )}

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        {(["tools", "categories", "clicks"] as Tab[]).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-2 rounded-lg text-sm font-semibold capitalize transition-colors ${
              tab === t
                ? "bg-[#00D4FF]/15 text-[#00D4FF] border border-[#00D4FF]/30"
                : "text-[#8888A0] border border-[#1E1E2E] hover:text-[#F0F0F5]"
            }`}
          >
            {t} {t === "tools" ? `(${tools.length})` : t === "clicks" ? `(${clickStats.reduce((s, c) => s + c.count, 0)})` : `(${categories.length})`}
          </button>
        ))}
      </div>

      {/* Tools tab */}
      {tab === "tools" && (
        <div className="space-y-2">
          {tools.map((tool) =>
            editingTool === tool.id ? (
              <div key={tool.id} className="bg-[#13131A] border border-[#00D4FF]/30 rounded-card p-4">
                <div className="grid sm:grid-cols-2 gap-3 mb-3">
                  {[
                    { key: "name", label: "Name", type: "text" },
                    { key: "tagline", label: "Tagline", type: "text" },
                    { key: "benchmark_score", label: "Benchmark Score (0-100)", type: "number" },
                    { key: "sponsored_label", label: "Sponsored Label", type: "text" },
                    { key: "website_url", label: "Website URL", type: "url" },
                    { key: "affiliate_url", label: "Affiliate URL", type: "url" },
                  ].map((f) => (
                    <div key={f.key}>
                      <label className="text-[10px] text-[#8888A0] mb-1 block">{f.label}</label>
                      <input
                        type={f.type}
                        value={String(editData[f.key] ?? "")}
                        onChange={(e) => setEditData((d) => ({ ...d, [f.key]: e.target.value }))}
                        className="w-full bg-[#0A0A0F] border border-[#1E1E2E] rounded px-2.5 py-1.5 text-xs text-[#F0F0F5] focus:border-[#00D4FF]/50 focus:outline-none"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="text-[10px] text-[#8888A0] mb-1 block">Pricing Model</label>
                    <select
                      value={String(editData.pricing_model ?? "")}
                      onChange={(e) => setEditData((d) => ({ ...d, pricing_model: e.target.value }))}
                      className="w-full bg-[#0A0A0F] border border-[#1E1E2E] rounded px-2.5 py-1.5 text-xs text-[#F0F0F5] focus:outline-none"
                    >
                      {["Free", "Freemium", "Paid", "API"].map((m) => (
                        <option key={m} value={m}>{m}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id={`sponsored-${tool.id}`}
                      checked={Boolean(editData.is_sponsored)}
                      onChange={(e) => setEditData((d) => ({ ...d, is_sponsored: e.target.checked }))}
                      className="w-4 h-4"
                    />
                    <label htmlFor={`sponsored-${tool.id}`} className="text-xs text-[#F0F0F5]">
                      Sponsored
                    </label>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => saveEdit(tool.id)}
                    disabled={saving}
                    className="px-4 py-1.5 bg-[#00D4FF] text-[#0A0A0F] font-bold text-xs rounded-lg hover:bg-[#00c4ef] disabled:opacity-60"
                  >
                    {saving ? "Saving..." : "Save"}
                  </button>
                  <button
                    onClick={() => setEditingTool(null)}
                    className="px-4 py-1.5 text-[#8888A0] text-xs border border-[#1E1E2E] rounded-lg hover:text-[#F0F0F5]"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div key={tool.id} className="flex items-center gap-3 bg-[#13131A] border border-[#1E1E2E] rounded-card p-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm text-[#F0F0F5]">{tool.name}</span>
                    <PricingPill model={tool.pricing_model} />
                    {tool.is_sponsored && (
                      <span className="text-[10px] font-mono bg-[#F59E0B]/15 text-[#F59E0B] border border-[#F59E0B]/30 px-1.5 py-0.5 rounded-pill">
                        Sponsored
                      </span>
                    )}
                  </div>
                  {tool.tagline && <p className="text-xs text-[#8888A0] mt-0.5 truncate">{tool.tagline}</p>}
                </div>
                <div className="font-mono text-sm text-[#8888A0] hidden sm:block">
                  {tool.benchmark_score?.toFixed(0) ?? "—"}/100
                </div>
                <button
                  onClick={() => startEdit(tool)}
                  className="text-xs font-semibold text-[#8888A0] hover:text-[#00D4FF] transition-colors px-2 py-1"
                >
                  Edit
                </button>
              </div>
            )
          )}
        </div>
      )}

      {/* Categories tab */}
      {tab === "categories" && (
        <div className="space-y-2">
          {categories.map((cat) => (
            <div key={cat.id} className="flex items-center gap-3 bg-[#13131A] border border-[#1E1E2E] rounded-card p-3">
              <span className="text-xl">{cat.icon}</span>
              <div className="flex-1">
                <span className="font-semibold text-sm text-[#F0F0F5]">{cat.name}</span>
                <span className="text-xs text-[#8888A0] ml-2">/{cat.slug}</span>
              </div>
              <span className="font-mono text-xs text-[#8888A0]">order: {cat.sort_order}</span>
              <Link
                href={`/${cat.slug}`}
                className="text-xs text-[#8888A0] hover:text-[#00D4FF] transition-colors"
              >
                View →
              </Link>
            </div>
          ))}
        </div>
      )}

      {/* Clicks tab */}
      {tab === "clicks" && (
        <div>
          <h2 className="font-syne font-bold text-base text-[#F0F0F5] mb-4">
            Affiliate Click Totals (last 1000 events)
          </h2>
          <div className="space-y-2">
            {clickStats.length === 0 && (
              <p className="text-sm text-[#8888A0]">No clicks tracked yet.</p>
            )}
            {clickStats.map((c) => (
              <div key={c.slug} className="flex items-center gap-3 bg-[#13131A] border border-[#1E1E2E] rounded-card p-3">
                <Link href={`/tool/${c.slug}`} className="font-semibold text-sm text-[#F0F0F5] hover:text-[#00D4FF] flex-1 transition-colors">
                  {c.name}
                </Link>
                <div className="flex-1 hidden sm:block">
                  <div className="h-1.5 bg-[#1E1E2E] rounded-pill overflow-hidden">
                    <div
                      className="h-full bg-[#00D4FF] rounded-pill"
                      style={{ width: `${Math.min(100, (c.count / (clickStats[0]?.count || 1)) * 100)}%` }}
                    />
                  </div>
                </div>
                <span className="font-mono font-bold text-sm text-[#00D4FF]">{c.count}</span>
                <span className="text-xs text-[#8888A0]">clicks</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
