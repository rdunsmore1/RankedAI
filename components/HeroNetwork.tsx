"use client";

import { useEffect, useRef } from "react";

// Actual filenames from /public/logos/
const LOGOS = [
  "/logos/Claude-icon.png",
  "/logos/OpenAi-icon.png",
  "/logos/Gemini-icon.png",
  "/logos/MidJourney-icon.png",
  "/logos/Perplexity-icon.png",
  "/logos/Grok-icon.png",
  "/logos/GitHub-icon.png",
  "/logos/ElevenLabs-icon.png",
  "/logos/Runway-icon.png",
  "/logos/CursorAi-icon.png",
  "/logos/StabilityAi-icon.png",
  "/logos/WolframAlpha-icon.png",
];

const NODE_R = 18;          // 36px diameter
const CONNECT_DIST = 150;
const REPEL_DIST = 120;
const BASE_SPEED = 0.4;

interface Node {
  x: number; y: number;
  vx: number; vy: number;
  phase: number;
  img: HTMLImageElement;
}

export default function HeroNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    // Respect prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    let width = 0;
    let height = 0;

    const setSize = () => {
      width = container.offsetWidth;
      height = container.offsetHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    setSize();

    // Preload images
    const images: HTMLImageElement[] = LOGOS.map((src) => {
      const img = new Image();
      img.src = src;
      return img;
    });

    // Seed nodes after first size is known
    const nodes: Node[] = images.map((img, i) => ({
      x: NODE_R + Math.random() * (width - NODE_R * 2),
      y: NODE_R + Math.random() * (height - NODE_R * 2),
      vx: (Math.random() - 0.5) * BASE_SPEED * 2,
      vy: (Math.random() - 0.5) * BASE_SPEED * 2,
      phase: (i / LOGOS.length) * Math.PI * 2,
      img,
    }));

    let mouseX = -9999;
    let mouseY = -9999;
    let rafId = 0;
    let paused = false;

    const tick = () => {
      rafId = requestAnimationFrame(tick);
      if (paused) return;

      ctx.clearRect(0, 0, width, height);

      // ── Update positions ───────────────────────────────
      for (const n of nodes) {
        // Mouse / touch repulsion
        const dx = n.x - mouseX;
        const dy = n.y - mouseY;
        const d2 = dx * dx + dy * dy;
        if (d2 < REPEL_DIST * REPEL_DIST && d2 > 0) {
          const d = Math.sqrt(d2);
          const force = ((REPEL_DIST - d) / REPEL_DIST) * 0.6;
          n.vx += (dx / d) * force;
          n.vy += (dy / d) * force;
        }

        // Dampen
        n.vx *= 0.98;
        n.vy *= 0.98;

        // Clamp speed band
        const spd = Math.sqrt(n.vx * n.vx + n.vy * n.vy);
        if (spd > 0) {
          const target = spd < BASE_SPEED * 0.3 ? BASE_SPEED * 0.3 : spd > BASE_SPEED * 4 ? BASE_SPEED * 4 : spd;
          n.vx = (n.vx / spd) * target;
          n.vy = (n.vy / spd) * target;
        } else {
          n.vx = (Math.random() - 0.5) * BASE_SPEED;
          n.vy = (Math.random() - 0.5) * BASE_SPEED;
        }

        n.x += n.vx;
        n.y += n.vy;

        // Bounce
        if (n.x < NODE_R)          { n.x = NODE_R;          n.vx = Math.abs(n.vx); }
        if (n.x > width - NODE_R)  { n.x = width - NODE_R;  n.vx = -Math.abs(n.vx); }
        if (n.y < NODE_R)          { n.y = NODE_R;           n.vy = Math.abs(n.vy); }
        if (n.y > height - NODE_R) { n.y = height - NODE_R; n.vy = -Math.abs(n.vy); }

        // Pulse phase
        n.phase += 0.018;
      }

      // ── Draw connections ───────────────────────────────
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[j].x - nodes[i].x;
          const dy = nodes[j].y - nodes[i].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECT_DIST) {
            const alpha = (1 - dist / CONNECT_DIST) * 0.15;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(107,30,46,${alpha.toFixed(3)})`;
            ctx.lineWidth = 1;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // ── Draw nodes ────────────────────────────────────
      for (const n of nodes) {
        // pulse: 1.0 → 1.05
        const scale = 1 + ((Math.sin(n.phase) * 0.5 + 0.5) * 0.05);
        const r = NODE_R * scale;

        ctx.save();
        ctx.translate(n.x, n.y);

        // White circle
        ctx.beginPath();
        ctx.arc(0, 0, r, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.fill();

        // Logo clipped inside
        if (n.img.complete && n.img.naturalWidth > 0) {
          ctx.save();
          ctx.beginPath();
          ctx.arc(0, 0, r - 1.5, 0, Math.PI * 2);
          ctx.clip();
          const inner = r - 1.5;
          ctx.drawImage(n.img, -inner, -inner, inner * 2, inner * 2);
          ctx.restore();
        }

        // Border on top
        ctx.beginPath();
        ctx.arc(0, 0, r, 0, Math.PI * 2);
        ctx.strokeStyle = "#D9CFC4";
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.restore();
      }
    };

    tick();

    // ── Visibility API ─────────────────────────────────
    const onVisibility = () => { paused = document.hidden; };
    document.addEventListener("visibilitychange", onVisibility);

    // ── Mouse ──────────────────────────────────────────
    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };
    const onMouseLeave = () => { mouseX = -9999; mouseY = -9999; };
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);

    // ── Touch ──────────────────────────────────────────
    const onTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      mouseX = e.touches[0].clientX - rect.left;
      mouseY = e.touches[0].clientY - rect.top;
    };
    const onTouchEnd = () => { mouseX = -9999; mouseY = -9999; };
    canvas.addEventListener("touchmove", onTouchMove, { passive: false });
    canvas.addEventListener("touchend", onTouchEnd);

    // ── Resize ─────────────────────────────────────────
    const ro = new ResizeObserver(() => {
      setSize();
      for (const n of nodes) {
        n.x = Math.max(NODE_R, Math.min(width - NODE_R, n.x));
        n.y = Math.max(NODE_R, Math.min(height - NODE_R, n.y));
      }
    });
    ro.observe(container);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("visibilitychange", onVisibility);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
      canvas.removeEventListener("touchmove", onTouchMove);
      canvas.removeEventListener("touchend", onTouchEnd);
      ro.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative rounded-2xl overflow-hidden w-full"
      style={{
        height: "clamp(280px, 40vw, 420px)",
        background: "rgba(240,235,225,0.6)",
        border: "0.5px solid #D9CFC4",
      }}
    >
      <canvas
        ref={canvasRef}
        className="block w-full h-full"
        style={{ touchAction: "none" }}
      />
    </div>
  );
}
