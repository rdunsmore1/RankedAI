const MOVERS = [
  { label: "Kling AI rose to #1 in Video",          dir: "up"   },
  { label: "Fish Audio added to Speech",             dir: "up"   },
  { label: "Fellow AI added to Meeting Notes",       dir: "up"   },
  { label: "Sora removed — shut down",               dir: "down" },
];

export default function WeeklyMovers() {
  return (
    <div className="bg-[#F0EBE1] border border-[#D9CFC4] rounded-card px-5 py-3 flex items-center gap-5 flex-wrap"
      style={{ borderWidth: "0.5px" }}>
      <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#8A7F74] shrink-0">This week</span>
      <div className="flex items-center gap-5 flex-wrap">
        {MOVERS.map((m) => (
          <span key={m.label} className="flex items-center gap-1.5 text-[12px]">
            <span className={m.dir === "up" ? "text-[#2D6A4F]" : "text-red-500"} aria-hidden>
              {m.dir === "up" ? "▲" : "▼"}
            </span>
            <span className={m.dir === "up" ? "text-[#1A1A1A]" : "text-[#8A7F74]"}>{m.label}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
