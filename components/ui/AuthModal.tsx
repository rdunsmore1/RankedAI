"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

interface AuthModalProps {
  open: boolean;
  onClose: () => void;
  defaultMode?: "signin" | "signup";
  message?: string;
}

export default function AuthModal({ open, onClose, defaultMode = "signin", message }: AuthModalProps) {
  const [mode, setMode] = useState<"signin" | "signup">(defaultMode);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ageConfirmed, setAgeConfirmed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  if (!open) return null;

  const supabase = createClient();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);

    try {
      if (mode === "signup" && !ageConfirmed) {
        setError("You must confirm you are 13 or older to create an account.");
        setLoading(false);
        return;
      }
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: `${window.location.origin}/auth/callback` },
        });
        if (error) throw error;
        setSuccess("Check your email for a confirmation link!");
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        onClose();
        window.location.reload();
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${window.location.origin}/auth/callback` },
    });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-[#13131A] border border-[#1E1E2E] rounded-card w-full max-w-sm p-6 shadow-2xl animate-fadeInUp">
        <div className="flex justify-between items-center mb-5">
          <h2 className="font-syne font-bold text-xl text-[#F0F0F5]">
            {mode === "signin" ? "Sign in" : "Create account"}
          </h2>
          <button onClick={onClose} className="text-[#8888A0] hover:text-[#F0F0F5] transition-colors text-xl leading-none">
            ×
          </button>
        </div>

        {message && (
          <p className="text-sm text-[#8888A0] bg-[#1E1E2E] rounded-lg p-3 mb-4">{message}</p>
        )}

        <button
          onClick={handleGoogle}
          className="w-full flex items-center justify-center gap-2 bg-white text-[#0A0A0F] rounded-lg py-2.5 font-semibold text-sm hover:bg-gray-100 transition-colors mb-4"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          Continue with Google
        </button>

        <div className="relative flex items-center gap-3 mb-4">
          <div className="flex-1 h-px bg-[#1E1E2E]" />
          <span className="text-xs text-[#8888A0]">or</span>
          <div className="flex-1 h-px bg-[#1E1E2E]" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className="w-full bg-[#0A0A0F] border border-[#1E1E2E] rounded-lg px-3 py-2.5 text-sm text-[#F0F0F5] placeholder-[#8888A0] focus:border-[#00D4FF]/50 focus:outline-none transition-colors"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            minLength={6}
            className="w-full bg-[#0A0A0F] border border-[#1E1E2E] rounded-lg px-3 py-2.5 text-sm text-[#F0F0F5] placeholder-[#8888A0] focus:border-[#00D4FF]/50 focus:outline-none transition-colors"
          />
          {mode === "signup" && (
            <label className="flex items-start gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                checked={ageConfirmed}
                onChange={(e) => setAgeConfirmed(e.target.checked)}
                className="mt-0.5 accent-[#00D4FF] shrink-0"
              />
              <span className="text-xs text-[#8888A0] leading-relaxed">
                I confirm I am 13 years of age or older
              </span>
            </label>
          )}
          {mode === "signup" && (
            <p className="text-xs text-[#8888A0] leading-relaxed">
              By creating an account you agree to our{" "}
              <a href="/terms" target="_blank" rel="noopener noreferrer" className="text-[#00D4FF] hover:underline">Terms of Service</a>
              {" "}and{" "}
              <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-[#00D4FF] hover:underline">Privacy Policy</a>.
            </p>
          )}
          {error && <p className="text-red-400 text-xs">{error}</p>}
          {success && <p className="text-green-400 text-xs">{success}</p>}
          <button
            type="submit"
            disabled={loading || (mode === "signup" && !ageConfirmed)}
            className="w-full bg-[#00D4FF] text-[#0A0A0F] font-syne font-bold rounded-lg py-2.5 text-sm hover:bg-[#00c4ef] transition-colors disabled:opacity-60"
          >
            {loading ? "..." : mode === "signin" ? "Sign in" : "Create account"}
          </button>
        </form>

        <p className="text-center text-xs text-[#8888A0] mt-4">
          {mode === "signin" ? "Don't have an account? " : "Already have an account? "}
          <button
            onClick={() => { setMode(mode === "signin" ? "signup" : "signin"); setError(null); }}
            className="text-[#00D4FF] hover:underline"
          >
            {mode === "signin" ? "Sign up" : "Sign in"}
          </button>
        </p>
      </div>
    </div>
  );
}
