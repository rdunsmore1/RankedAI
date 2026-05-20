"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const STORAGE_KEY = "rankedai_cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-xl animate-fadeInUp">
      <div className="bg-[#13131A] border border-[#1E1E2E] rounded-card shadow-2xl px-5 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-3">
        <div className="flex-1 text-xs text-[#8888A0] leading-relaxed">
          <span className="text-[#F0F0F5] font-semibold">We use essential cookies only.</span>{" "}
          These keep you logged in and maintain your session. We do not use advertising or tracking cookies.{" "}
          <Link href="/privacy" className="text-[#00D4FF] hover:underline">
            Privacy Policy
          </Link>
        </div>
        <button
          onClick={accept}
          className="shrink-0 text-xs font-semibold bg-[#00D4FF] text-[#0A0A0F] px-4 py-2 rounded-lg hover:bg-[#00c4ef] transition-colors"
        >
          Got it
        </button>
      </div>
    </div>
  );
}
