import React, { useEffect, useMemo, useRef, useState } from "react";

/**
 * Inkarp Group Companies – 3 Unique UI Variants
 * -------------------------------------------------
 * How to use:
 * 1) Replace the demo `subsidiaries` with your real array (name, image, optional text[])
 * 2) Replace `centerLogo` with your Group logo import
 * 3) Drop <InkarpGroupShowcase /> anywhere. Use the tabs to preview each variant.
 *
 * Tech:
 * - Pure React + Tailwind classes (no external deps)
 * - Accessible buttons, reduced-motion aware, responsive
 */

// ---- Demo Data (swap with your imports) ------------------------------------
const demoSubsidiaries = [
  { name: "Group Company", image: "https://via.placeholder.com/180x120?text=Spark" },
  { name: "Group Company", image: "https://via.placeholder.com/180x120?text=Telecom" },
  { name: "Group Company", image: "https://via.placeholder.com/180x120?text=Services" },
  { name: "Collaborative Venture", image: "https://via.placeholder.com/180x120?text=Verder" },
  { name: "Collaborative Venture", image: "https://via.placeholder.com/180x120?text=Advion" },
];
const demoCenterLogo = "https://via.placeholder.com/260x260.png?text=INKARP+GROUP";

// ----------------------------------------------------------------------------
// Variant A: RadialOrbitWheel – continuous orbit, hover glow, pause on hover
// ----------------------------------------------------------------------------
function RadialOrbitWheel({ items, centerLogo }) {
  // respects prefers-reduced-motion
  const prefersReducedMotion = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  return (
    <section className="w-full max-w-5xl mx-auto p-4">
      <h4 className="px-4 py-1 text-center text-xs uppercase border text-black rounded-full font-[MaxOT] w-fit mx-auto">Our Group Companies & Collaborations</h4>

      <div className="relative mx-auto mt-6 aspect-square max-w-[720px]">
        {/* Outer halo */}
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(230,57,70,0.12),rgba(230,57,70,0)_55%)]" />

        {/* Orbiting cards */}
        <ul className="list-none m-0 p-0 absolute inset-0 group">
          {items.map((it, i) => {
            const count = items.length;
            const angle = (360 / count) * i; // deg
            return (
              <li
                key={i}
                className="absolute left-1/2 top-1/2 will-change-transform"
                style={{
                  transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                }}
              >
                <div
                  className={[
                    "relative",
                    "w-40 max-w-[42vw]", // responsive cap
                    "-translate-y-[min(16.5cqw,16.5vh)]", // push outward along radius
                    "transition-transform duration-300",
                    "[transform-origin:50%_calc(50%+16.5cqw)]",
                    prefersReducedMotion ? "" : "animate-[orbit_28s_linear_infinite] group-hover:[animation-play-state:paused]",
                  ].join(" ")}
                  style={{
                    animationDelay: `-${i * 0.6}s`,
                  }}
                >
                  <article className="rounded-2xl shadow-[0_6px_20px_rgba(0,0,0,.12)] bg-white p-4 text-center border border-zinc-100 hover:shadow-[0_10px_28px_rgba(0,0,0,.16)]">
                    <figure className="aspect-[4/3] w-full overflow-hidden rounded-xl">
                      <img src={it.image} alt={it.name} className="w-full h-full object-contain" />
                    </figure>
                    <figcaption className="mt-2 font-[MaxOT] text-[10px] tracking-wide text-[#E63949]">{it.name}</figcaption>
                  </article>

                  {/* glow */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(closest-side,rgba(230,57,70,.25),transparent)]" />
                </div>
              </li>
            );
          })}
        </ul>

        {/* Middle ring */}
        <div className="absolute inset-[8%] rounded-full border border-zinc-200" />
        {/* Center card */}
        <div className="absolute inset-[30%] rounded-full bg-white shadow-xl flex items-center justify-center p-6 text-center">
          <img src={centerLogo} alt="Inkarp Group" className="w-3/4 h-auto object-contain" />
        </div>
      </div>

      {/* keyframes */}
      <style>{`
        @keyframes orbit { to { transform: translateY(-50%) rotate(360deg) } }
      `}</style>
    </section>
  );
}

// ----------------------------------------------------------------------------
// Variant B: SpokeBurst – radial spokes; hover brings a card inward with details
// ----------------------------------------------------------------------------
function SpokeBurst({ items, centerLogo }) {
  const radius = 220; // base radius in px
  const inward = 120; // how far card rides inward on hover
  return (
    <section className="w-full max-w-5xl mx-auto p-4">
      <h4 className="px-4 py-1 text-center text-xs uppercase border text-black rounded-full font-[MaxOT] w-fit mx-auto">Our Group Companies & Collaborations</h4>

      <div className="relative mx-auto mt-6 aspect-square max-w-[720px]">
        {/* Spokes */}
        {items.map((it, i) => {
          const angle = (360 / items.length) * i;
          return (
            <div
              key={i}
              className="absolute left-1/2 top-1/2"
              style={{ transform: `translate(-50%,-50%) rotate(${angle}deg)` }}
            >
              {/* line */}
              <div className="h-px bg-zinc-300 origin-left" style={{ width: radius + 48 }} />
            </div>
          );
        })}

        {/* Nodes */}
        {items.map((it, i) => {
          const angle = (360 / items.length) * i;
          const rad = (angle * Math.PI) / 180;
          const x = Math.cos(rad) * radius;
          const y = Math.sin(rad) * radius;
          return (
            <button
              key={i}
              className="absolute rounded-full outline-none focus-visible:ring-2 focus-visible:ring-[#E63946]"
              style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
              aria-label={it.name}
            >
              <div className="group relative">
                <div className="size-14 rounded-full bg-white border border-zinc-200 shadow-md grid place-items-center overflow-hidden">
                  <img src={it.image} alt="" className="w-10 h-10 object-contain" />
                </div>
                {/* hover card riding inward */}
                <div
                  className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300"
                  style={{ transform: `translate(-50%,-50%) rotate(${-angle}deg)` }}
                >
                  <div className="translate-y-0 group-hover:-translate-y-[${inward}px]">
                    <article className="w-56 rounded-2xl bg-white shadow-xl border border-zinc-100 p-3 text-center">
                      <figure className="aspect-[4/3] w-full overflow-hidden rounded-lg">
                        <img src={it.image} alt={it.name} className="w-full h-full object-contain" />
                      </figure>
                      <div className="mt-2 font-[MaxOT] text-[10px] tracking-wide text-[#E63949]">{it.name}</div>
                    </article>
                  </div>
                </div>
              </div>
            </button>
          );
        })}

        {/* Center */}
        <div className="absolute inset-[32%] rounded-full bg-white shadow-xl flex items-center justify-center p-6">
          <img src={centerLogo} alt="Inkarp Group" className="w-3/4 h-auto object-contain" />
        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------------
// Variant C: ArcNavigator – semi-circular dock with left/right controls
// ----------------------------------------------------------------------------
function ArcNavigator({ items, centerLogo }) {
  const [offset, setOffset] = useState(0); // shifts which item is centered
  const visible = Math.max(5, Math.min(8, items.length));
  const arcStart = 200; // degrees
  const arcEnd = 340; // degrees – bottom arc
  const radius = 240;

  const positioned = useMemo(() => {
    const arr = Array.from({ length: items.length }, (_, i) => ({ idx: i, ...items[(i + offset) % items.length] }));
    return arr;
  }, [items, offset]);

  return (
    <section className="w-full max-w-5xl mx-auto p-4">
      <h4 className="px-4 py-1 text-center text-xs uppercase border text-black rounded-full font-[MaxOT] w-fit mx-auto">Our Group Companies & Collaborations</h4>

      <div className="relative mx-auto mt-6 aspect-[1.6/1] max-w-[900px]">
        {/* Center content */}
        <div className="absolute left-1/2 top-[35%] -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-white shadow-xl flex items-center justify-center p-6">
          <img src={centerLogo} alt="Inkarp Group" className="w-3/4 h-auto object-contain" />
        </div>

        {/* Arc items */}
        {positioned.slice(0, visible).map((it, i) => {
          const t = i / (visible - 1);
          const angle = arcStart + (arcEnd - arcStart) * t; // degrees along arc
          const rad = (angle * Math.PI) / 180;
          const x = Math.cos(rad) * radius;
          const y = Math.sin(rad) * radius;
          const scale = 0.85 + 0.15 * (i === Math.floor(visible / 2) ? 1 : 0); // center emphasis
          return (
            <div
              key={i}
              className="absolute transition-transform duration-300"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(70% + ${y}px)`,
                transform: `translate(-50%,-50%) scale(${scale})`,
                zIndex: i === Math.floor(visible / 2) ? 10 : 5,
              }}
            >
              <article className="w-48 rounded-2xl bg-white shadow-lg border border-zinc-100 p-3 text-center hover:shadow-xl">
                <figure className="aspect-[4/3] w-full overflow-hidden rounded-lg">
                  <img src={it.image} alt={it.name} className="w-full h-full object-contain" />
                </figure>
                <div className="mt-2 font-[MaxOT] text-[10px] tracking-wide text-[#E63949]">{it.name}</div>
              </article>
            </div>
          );
        })}

        {/* Controls */}
        <div className="absolute left-1/2 bottom-3 -translate-x-1/2 flex gap-3">
          <button
            onClick={() => setOffset((p) => (p - 1 + items.length) % items.length)}
            className="px-3 py-1 rounded-full bg-white border border-zinc-200 shadow hover:shadow-md active:scale-95"
            aria-label="Previous"
          >
            ‹
          </button>
          <button
            onClick={() => setOffset((p) => (p + 1) % items.length)}
            className="px-3 py-1 rounded-full bg-white border border-zinc-200 shadow hover:shadow-md active:scale-95"
            aria-label="Next"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------------
// Showcase container with tabs (default export)
// ----------------------------------------------------------------------------
export default function InkarpGroupShowcase() {
  const [tab, setTab] = useState("orbit");
  const tabs = [
    { id: "orbit", label: "Variant A – RadialOrbitWheel" },
    { id: "spokes", label: "Variant B – SpokeBurst" },
    { id: "arc", label: "Variant C – ArcNavigator" },
  ];
  return (
    <div className="w-full">
      <div className="mx-auto w-full max-w-5xl px-4 pt-4">
        <div className="flex flex-wrap gap-2 justify-center">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={[
                "px-3 py-1 rounded-full border text-sm",
                tab === t.id ? "bg-black text-white border-black" : "bg-white text-black border-zinc-300 hover:bg-zinc-50",
              ].join(" ")}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {tab === "orbit" && <RadialOrbitWheel items={demoSubsidiaries} centerLogo={demoCenterLogo} />}
      {tab === "spokes" && <SpokeBurst items={demoSubsidiaries} centerLogo={demoCenterLogo} />}
      {tab === "arc" && <ArcNavigator items={demoSubsidiaries} centerLogo={demoCenterLogo} />}
    </div>
  );
}
