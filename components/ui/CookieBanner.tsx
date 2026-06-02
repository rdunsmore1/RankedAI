"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const STORAGE_KEY = "rankedai_cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
  }, []);

  const accept = () => { localStorage.setItem(STORAGE_KEY, "1"); setVisible(false); };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-xl animate-fadeInUp">
      <div className="bg-[#F0EBE1] border border-[#D9CFC4] rounded-card shadow-lg px-5 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-3">
        <div className="flex-1 text-xs text-[#8A7F74] leading-relaxed">
          <span className="text-[#1A1A1A] font-semibold">We use essential cookies only.</span>{" "}
          These keep you logged in and maintain your session. We do not use advertising or tracking cookies.{" "}
          <Link href="/privacy" className="text-[#6B1E2E] hover:underline">Privacy Policy</Link>
        </div>
        <button onClick={accept}
          className="shrink-0 text-xs font-semibold bg-[#6B1E2E] text-[#FAF7F2] px-4 py-2 rounded-lg hover:bg-[#8B2438] transition-colors">
          Got it
        </button>
      </div>
    </div>
  );
}
