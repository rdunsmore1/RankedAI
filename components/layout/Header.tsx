"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import AuthModal from "@/components/ui/AuthModal";
import type { User } from "@supabase/supabase-js";

export default function Header() {
  const [user, setUser] = useState<User | null>(null);
  const [authOpen, setAuthOpen] = useState(false);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data }) => setUser(data.user));
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, session) => {
      setUser(session?.user ?? null);
    });
    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    window.location.href = "/";
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-[8px]" style={{ borderBottom: "0.5px solid #D9CFC4" }}>
        <div className="max-w-[1200px] mx-auto px-6 h-14 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-7 h-7 rounded flex items-center justify-center text-sm font-semibold text-[#6B1E2E]"
              style={{ background: "rgba(107,30,46,0.09)", border: "0.5px solid #6B1E2E" }}>
              R
            </div>
            <span className="font-semibold text-[#1A1A1A] text-base tracking-tight hidden sm:block">
              RankedAI<sup className="text-[9px] text-[#8A7F74] font-normal">™</sup>
            </span>
          </Link>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/coding" className="text-[13px] text-[#8A7F74] hover:text-[#1A1A1A] transition-colors">Rankings</Link>
            <Link href="/#how-it-works" className="text-[13px] text-[#8A7F74] hover:text-[#1A1A1A] transition-colors">How It Works</Link>
          </nav>

          {/* Auth */}
          <div className="flex items-center gap-3">
            {user ? (
              <div className="flex items-center gap-2">
                <Link href="/account" className="text-[13px] text-[#8A7F74] hover:text-[#1A1A1A] transition-colors hidden sm:block">Account</Link>
                <button onClick={handleSignOut}
                  className="text-[13px] font-medium text-[#8A7F74] hover:text-[#1A1A1A] px-3 py-1.5 rounded-md transition-colors"
                  style={{ border: "0.5px solid #D9CFC4" }}>
                  Sign out
                </button>
              </div>
            ) : (
              <>
                <button onClick={() => setAuthOpen(true)}
                  className="text-[13px] text-[#8A7F74] hover:text-[#1A1A1A] transition-colors hidden sm:block">
                  Sign in
                </button>
                <button onClick={() => setAuthOpen(true)}
                  className="text-[13px] font-medium bg-[#6B1E2E] text-[#FAF7F2] px-4 py-1.5 rounded-md hover:bg-[#8B2438] transition-colors">
                  Get started
                </button>
              </>
            )}
          </div>
        </div>
      </header>
      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
    </>
  );
}
