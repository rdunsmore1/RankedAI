"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
      <header className="sticky top-0 z-40 bg-[#0A0A0F]/80 backdrop-blur-xl border-b border-[#1E1E2E]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image src="/logo-icon.png" alt="RankedAI" width={32} height={32} className="rounded-lg object-cover" />
            <span className="font-syne font-bold text-[#F0F0F5] text-lg hidden sm:block">
              RankedAI<sup className="text-[10px] text-[#8888A0] font-normal">™</sup>
            </span>
          </Link>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/coding" className="text-sm text-[#8888A0] hover:text-[#F0F0F5] transition-colors">
              Rankings
            </Link>
            <Link href="/#how-it-works" className="text-sm text-[#8888A0] hover:text-[#F0F0F5] transition-colors">
              How It Works
            </Link>
          </nav>

          {/* Auth */}
          <div className="flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-2">
                <Link
                  href="/account"
                  className="text-sm text-[#8888A0] hover:text-[#F0F0F5] transition-colors hidden sm:block"
                >
                  Account
                </Link>
                <button
                  onClick={handleSignOut}
                  className="text-xs font-semibold text-[#8888A0] hover:text-[#F0F0F5] px-3 py-1.5 border border-[#1E1E2E] rounded-lg transition-colors"
                >
                  Sign out
                </button>
              </div>
            ) : (
              <>
                <button
                  onClick={() => setAuthOpen(true)}
                  className="text-sm font-semibold text-[#8888A0] hover:text-[#F0F0F5] transition-colors hidden sm:block"
                >
                  Sign in
                </button>
                <button
                  onClick={() => setAuthOpen(true)}
                  className="text-sm font-semibold bg-[#00D4FF] text-[#0A0A0F] px-4 py-1.5 rounded-lg hover:bg-[#00c4ef] transition-colors"
                >
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
