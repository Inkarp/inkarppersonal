import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";

// Logos (replace with your real imports)
import Inkarp from "/inkarp.png";
import Spark from "/Spark.svg";
import InkarpTelecom from "/InkarpTelecom.svg";
import InkarpServices from "/InkarpServices.svg";
import Verder from "/Verder.svg";
import Advion from "/src/assets/PrincipalLogos/RowOne/advion.png";

/**
 * Honeycomb cluster:
 *  - Center = INKARP
 *  - Two adjacent hexes = Subsidiaries (solid #F5F5F5 fill + #E63946 outline)
 *  - Three outer hexes = Joint companies (soft glass fill + gradient outline)
 *  - Interaction: click highlights logo, ripples from center to card, and expands a spec sheet.
 *  - Palette only: #BE0010, #E63946, #F5F5F5, #FFFFFF
 */

const subsidiaries = [
  { id: "subs-0", type: "subsidiary", name: "Inkarp Services", logo: InkarpServices, href: "#", blurb: "Services arm for turnkey installations, validation and AMC." },
  { id: "subs-1", type: "subsidiary", name: "Inkarp Telecom", logo: InkarpTelecom, href: "#", blurb: "Telecom solutions supporting critical infra & connectivity." },
];

const joints = [
  { id: "joint-0", type: "joint", name: "Spark", logo: Spark, href: "#", blurb: "Joint venture driving instrumentation innovation." },
  { id: "joint-1", type: "joint", name: "Verder", logo: Verder, href: "#", blurb: "Fluid handling & process technology collaboration." },
  { id: "joint-2", type: "joint", name: "Advion", logo: Advion, href: "#", blurb: "Mass spectrometry & prep tools partnership." },
];

export default function HoneyCombAffiliates() {
  const wrapRef = useRef(null);
  const centerRef = useRef(null);
  const targetRefs = useRef({});
  const [paths, setPaths] = useState([]);
  const [activeId, setActiveId] = useState(null);

  const all = useMemo(() => [...subsidiaries, ...joints], []);

  // Compute connector paths from center to each card (for highlight/ripple)
  useEffect(() => {
    if (!wrapRef.current || !centerRef.current) return;

    const compute = () => {
      const root = wrapRef.current.getBoundingClientRect();
      const c = centerRef.current.getBoundingClientRect();
      const cx = c.left - root.left + c.width / 2;
      const cy = c.top - root.top + c.height / 2;

      const next = all.map((item) => {
        const el = targetRefs.current[item.id];
        if (!el) return null;
        const b = el.getBoundingClientRect();
        const tx = b.left - root.left + b.width / 2;
        const ty = b.top - root.top + b.height / 2;
        // Slight S-curve
        const dx = tx - cx;
        const dy = ty - cy;
        const c1x = cx + dx * 0.35;
        const c1y = cy + dy * 0.2;
        const c2x = cx + dx * 0.7;
        const c2y = cy + dy * 0.85;
        return { id: item.id, d: `M ${cx},${cy} C ${c1x},${c1y} ${c2x},${c2y} ${tx},${ty}` };
      }).filter(Boolean);
      setPaths(next);
    };

    const ro = new ResizeObserver(compute);
    ro.observe(wrapRef.current);
    ro.observe(centerRef.current);
    all.forEach((i) => targetRefs.current[i.id] && ro.observe(targetRefs.current[i.id]));

    compute();
    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute);
    return () => {
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
      ro.disconnect();
    };
  }, [all]);

  // Hex helper styles
  const hexClass = "[clip-path:polygon(25%_5%,75%_5%,100%_50%,75%_95%,25%_95%,0%_50%)]";

  // Cards
  const HexCard = ({ item }) => {
    const isSubs = item.type === "subsidiary";
    const isActive = activeId === item.id;

    return (
      <motion.a
        href={item.href}
        ref={(el) => (targetRefs.current[item.id] = el)}
        onClick={(e) => { e.preventDefault(); setActiveId(item.id); }}
        whileHover={{ y: -3 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
        className={`relative mx-auto ${hexClass} w-40 h-44 sm:w-48 sm:h-52 flex items-center justify-center text-center group`}
        style={
          isSubs
            ? { background: "#F5F5F5", border: "1.5px solid #E63946" }
            : { background: "rgba(255,255,255,0.75)", backdropFilter: "blur(8px)", border: "1.5px solid transparent", backgroundImage: "linear-gradient(rgba(255,255,255,0.75),rgba(255,255,255,0.75)) ,linear-gradient(90deg,#BE0010,#E63946)", backgroundOrigin: "border-box", backgroundClip: "padding-box, border-box" }
        }
      >
        {/* ripple ring when active */}
        <span
          className={`pointer-events-none absolute inset-0 ${hexClass} ${isActive ? "animate-ping" : ""}`}
          style={{ background: "rgba(230,57,70,0.12)" }}
        />

        {/* logo */}
        <span className="relative z-10 inline-flex flex-col items-center gap-2">
          <span className={`h-12 w-12 rounded-full flex items-center justify-center overflow-hidden transition-transform ${
            isActive ? "scale-110" : "scale-100"
          } ${isSubs ? "bg-white" : "bg-white/90"}`}
          >
            <img src={item.logo} alt={item.name} className="h-8 w-8 object-contain" />
          </span>
          <span className="text-xs font-[MaxOT] text-[#E63946]">{item.name}</span>
        </span>

        {/* light glow on hover/active */}
        <span className={`absolute -inset-1 ${hexClass} pointer-events-none transition-opacity ${isActive ? "opacity-40" : "opacity-0 group-hover:opacity-25"}`} style={{ background: "linear-gradient(90deg,rgba(190,0,16,0.35),rgba(230,57,70,0.35))" }} />
      </motion.a>
    );
  };

  return (
    <section className="relative w-[98%] mx-auto py-10 md:px-10 lg:px-20">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(230,57,70,0.08),transparent),radial-gradient(1200px_600px_at_80%_110%,rgba(230,57,70,0.08),transparent)]" />

      {/* Heading */}
      <div className="text-center flex flex-col justify-center items-center gap-3">
        <span
          className="px-4 py-1 text-xs sm:text-sm font-[MaxOT] uppercase rounded-full bg-white"
          style={{ borderImage: 'linear-gradient(90deg,#BE0010,#E63946) 1', borderWidth: 1, borderStyle: 'solid' }}
        >
          Network Snapshot
        </span>
        <h1 className="text-xl sm:text-2xl font-[MaxOT] text-[#E63946] leading-tight text-center">Honeycomb of Partnerships</h1>
      </div>

      {/* Frame */}
      <div className="mt-6 rounded-3xl p-[1.5px] bg-[linear-gradient(135deg,rgba(190,0,16,0.9),rgba(230,57,70,0.9))]">
        <div ref={wrapRef} className="relative rounded-[20px] bg-white/70 backdrop-blur-xl border border-white/60 p-6">
          {/* SVG connectors */}
          <svg className="pointer-events-none absolute inset-0" width="100%" height="100%">
            {paths.map((p) => (
              <motion.path
                key={p.id}
                d={p.d}
                fill="none"
                stroke="#E63946"
                strokeWidth={activeId && activeId !== p.id ? 1 : 1.75}
                initial={{ pathLength: 0, opacity: 0.15 }}
                animate={{ pathLength: activeId ? 1 : 0.85, opacity: activeId ? 0.55 : 0.35 }}
                transition={{ duration: 0.6 }}
              />
            ))}
          </svg>

          {/* GRID: Rowed honeycomb: row1(2 subs), row2(3 with center), row3(1 joint) */}
          <div className="grid place-items-center gap-y-4">
            {/* Row 1: two subsidiaries, offset */}
            <div className="flex gap-6 translate-x-6 sm:translate-x-8">
              <HexCard item={subsidiaries[0]} />
              <HexCard item={subsidiaries[1]} />
            </div>

            {/* Row 2: left joint, center, right joint */}
            <div className="flex items-center gap-6">
              <HexCard item={joints[0]} />

              {/* Center – INKARP */}
              <div ref={centerRef} className={`relative ${hexClass} w-44 h-48 sm:w-52 sm:h-56 bg-white border border-[#F5F5F5] shadow-[0_12px_35px_rgba(0,0,0,0.08)] flex items-center justify-center text-center`}>
                <div className="absolute inset-0 ${hexClass} pointer-events-none opacity-20 bg-[radial-gradient(200px_120px_at_50%_10%,rgba(230,57,70,0.25),transparent)]" />
                <span className="inline-flex flex-col items-center gap-2">
                  <span className="h-12 w-12 rounded-full bg-white border border-[#F5F5F5] flex items-center justify-center overflow-hidden">
                    <img src={Inkarp} alt="INKARP" className="h-8 w-8 object-contain" />
                  </span>
                  <span className="text-xs font-[MaxOT] text-[#E63946]">INKARP</span>
                </span>
              </div>

              <HexCard item={joints[1]} />
            </div>

            {/* Row 3: last joint centered, offset */}
            <div className="flex gap-6 -translate-x-6 sm:-translate-x-8">
              <HexCard item={joints[2]} />
            </div>
          </div>

          {/* Spec sheet */}
          <div className="mt-6">
            {activeId ? (
              (() => {
                const picked = all.find((x) => x.id === activeId);
                if (!picked) return null;
                const isSubs = picked.type === 'subsidiary';
                return (
                  <motion.div
                    key={picked.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-2xl overflow-hidden"
                  >
                    <div className="h-1 w-full bg-gradient-to-r from-[#BE0010] to-[#E63946]" />
                    <div className="p-4 flex items-center gap-4 bg-white/90 backdrop-blur border border-[#F5F5F5]">
                      <span className={`h-12 w-12 rounded-full flex items-center justify-center overflow-hidden ${isSubs ? 'bg-white border border-[#E63946]' : ''}`} style={!isSubs ? { background: 'linear-gradient(90deg,#BE0010,#E63946)' } : undefined}>
                        <img src={picked.logo} alt={picked.name} className="h-8 w-8 object-contain" />
                      </span>
                      <div className="flex-1">
                        <h3 className="text-sm sm:text-base font-[MaxOT] text-[#E63946]">{picked.name}</h3>
                        <p className="text-xs sm:text-sm text-black/75">{picked.blurb}</p>
                      </div>
                      <a href={picked.href} className="text-xs font-[MaxOT] px-3 py-1 rounded-full text-white" style={{ background: 'linear-gradient(90deg,#BE0010,#E63946)' }}>
                        Visit
                      </a>
                    </div>
                  </motion.div>
                );
              })()
            ) : (
              <div className="text-center text-xs text-black/60 font-[Roboto]">Click a company to see details.</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
