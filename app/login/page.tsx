"use client";

import { useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";

function LoginForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const redirect = searchParams.get("redirect") ?? "/";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); setLoading(true);
    const supabase = createClient();
    if (mode === "signup") {
      const { error } = await supabase.auth.signUp({ email, password, options: { emailRedirectTo: `${window.location.origin}/auth/callback` } });
      if (error) setError(error.message); else setSuccess("Check your email to confirm your account!");
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) setError(error.message); else router.push(redirect);
    }
    setLoading(false);
  };

  const handleGoogle = async () => {
    const supabase = createClient();
    await supabase.auth.signInWithOAuth({ provider: "google", options: { redirectTo: `${window.location.origin}/auth/callback?next=${redirect}` } });
  };

  const inputClass = "w-full bg-[#FAF7F2] rounded-lg px-3 py-2.5 text-sm text-[#1A1A1A] placeholder-[#B5A898] focus:outline-none transition-colors";

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-5">
            <div className="w-8 h-8 rounded flex items-center justify-center font-semibold text-[#6B1E2E]"
              style={{ background: "rgba(107,30,46,0.09)", border: "0.5px solid #6B1E2E" }}>R</div>
            <span className="font-semibold text-[#1A1A1A]">RankedAI<sup className="text-[9px] text-[#8A7F74] font-normal">™</sup></span>
          </Link>
          <h1 className="font-semibold text-2xl text-[#1A1A1A] tracking-tight mb-1">
            {mode === "signin" ? "Welcome back" : "Join RankedAI™"}
          </h1>
          <p className="text-sm text-[#8A7F74]">
            {mode === "signin" ? "Sign in to vote and review AI tools" : "Create an account to start ranking AI tools"}
          </p>
        </div>

        <div className="rounded-card p-6" style={{ background: "#F0EBE1", border: "0.5px solid #D9CFC4" }}>
          <button onClick={handleGoogle}
            className="w-full flex items-center justify-center gap-2 bg-white border rounded-lg py-2.5 font-medium text-sm hover:bg-[#FAF7F2] transition-colors mb-4"
            style={{ borderColor: "#D9CFC4", borderWidth: "0.5px", color: "#1A1A1A" }}>
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </button>

          <div className="relative flex items-center gap-3 mb-4">
            <div className="flex-1 h-px bg-[#D9CFC4]" />
            <span className="text-xs text-[#B5A898]">or</span>
            <div className="flex-1 h-px bg-[#D9CFC4]" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address" required className={inputClass}
              style={{ border: "0.5px solid #D9CFC4" }}
              onFocus={(e) => e.target.style.borderColor = "#6B1E2E"}
              onBlur={(e) => e.target.style.borderColor = "#D9CFC4"} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
              placeholder="Password" required minLength={6} className={inputClass}
              style={{ border: "0.5px solid #D9CFC4" }}
              onFocus={(e) => e.target.style.borderColor = "#6B1E2E"}
              onBlur={(e) => e.target.style.borderColor = "#D9CFC4"} />
            {error   && <p className="text-red-600 text-xs">{error}</p>}
            {success && <p className="text-[#2D6A4F] text-xs">{success}</p>}
            <button type="submit" disabled={loading}
              className="w-full font-semibold rounded-lg py-2.5 text-sm hover:bg-[#8B2438] transition-colors disabled:opacity-60"
              style={{ background: "#6B1E2E", color: "#FAF7F2" }}>
              {loading ? "..." : mode === "signin" ? "Sign in" : "Create account"}
            </button>
          </form>

          <p className="text-center text-xs text-[#8A7F74] mt-4">
            {mode === "signin" ? "Don't have an account? " : "Already have an account? "}
            <button onClick={() => { setMode(mode === "signin" ? "signup" : "signin"); setError(null); }}
              className="text-[#6B1E2E] hover:underline">
              {mode === "signin" ? "Sign up" : "Sign in"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return <Suspense><LoginForm /></Suspense>;
}
