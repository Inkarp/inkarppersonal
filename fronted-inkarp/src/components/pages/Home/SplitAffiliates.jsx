import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";

// Replace with your real imports
import Inkarp from "/inkarp.png";
import Spark from "/Spark.svg";
import InkarpTelecom from "/InkarpTelecom.svg";
import InkarpServices from "/InkarpServices.svg";
import Verder from "/Verder.svg";
import Advion from "/src/assets/PrincipalLogos/RowOne/advion.png";

/**
 * Split columns, asymmetric weight
 * Left: 2 larger Subsidiary cards
 * Right: 3 compact Joint Company cards
 * Section headers use gradient pill; cards have gradient top borders
 * Hover: lift card + highlight its relationship line from center parent (INKARP)
 * Palette: #BE0010, #E63946, #F5F5F5, #FFFFFF only
 */

const subsidiaries = [
  { id: "subs-0", type: "subsidiary", name: "Inkarp Services", logo: InkarpServices, href: "#" },
  { id: "subs-1", type: "subsidiary", name: "Inkarp Telecom", logo: InkarpTelecom, href: "#" },
];

const joints = [
  { id: "joint-0", type: "joint", name: "Spark", logo: Spark, href: "#" },
  { id: "joint-1", type: "joint", name: "Verder", logo: Verder, href: "#" },
  { id: "joint-2", type: "joint", name: "Advion", logo: Advion, href: "#" },
];

export default function SplitAffiliates() {
  const wrapRef = useRef(null);
  const parentRef = useRef(null);
  const targetRefs = useRef({});
  const [paths, setPaths] = useState([]);
  const [hoverId, setHoverId] = useState(null);

  const all = useMemo(() => [...subsidiaries, ...joints], []);

  useEffect(() => {
    if (!wrapRef.current || !parentRef.current) return;

    const compute = () => {
      const root = wrapRef.current.getBoundingClientRect();
      const p = parentRef.current.getBoundingClientRect();
      const pX = p.left - root.left + p.width / 2;
      const pY = p.top - root.top + p.height / 2;

      const next = all.map((item) => {
        const el = targetRefs.current[item.id];
        if (!el) return null;
        const b = el.getBoundingClientRect();
        const tX = b.left - root.left + b.width / 2;
        const tY = b.top - root.top + b.height / 2;
        // curved connector with soft bend away from center; control points at 35%/65%
        const dx = tX - pX;
        const dy = tY - pY;
        const c1x = pX + dx * 0.35 + (item.type === "joint" ? 20 : -20);
        const c1y = pY + dy * 0.15;
        const c2x = pX + dx * 0.65 + (item.type === "joint" ? 30 : -10);
        const c2y = pY + dy * 0.75;
        return { id: item.id, type: item.type, d: `M ${pX},${pY} C ${c1x},${c1y} ${c2x},${c2y} ${tX},${tY}` };
      }).filter(Boolean);

      setPaths(next);
    };

    const ro = new ResizeObserver(compute);
    ro.observe(wrapRef.current);
    all.forEach((i) => {
      const el = targetRefs.current[i.id];
      if (el) ro.observe(el);
    });
    if (parentRef.current) ro.observe(parentRef.current);

    compute();
    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute);
    return () => {
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
      ro.disconnect();
    };
  }, [all]);

  return (
    <section className="relative w-[98%] mx-auto py-10 md:px-10 lg:px-20">
      {/* Soft stage background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(230,57,70,0.08),transparent),radial-gradient(1200px_600px_at_80%_110%,rgba(230,57,70,0.08),transparent)]" />

      {/* Heading */}
      <div className="text-center flex flex-col justify-center items-center gap-3">
        <span
          className="px-4 py-1 text-xs sm:text-sm font-[MaxOT] uppercase rounded-full bg-white"
          style={{ borderImage: "linear-gradient(90deg,#BE0010,#E63946) 1", borderWidth: 1, borderStyle: "solid" }}
        >
          Our Group Companies & Collaborations
        </span>
        <h1 className="text-xl sm:text-2xl font-[MaxOT] text-[#E63946] leading-tight">
          Subsidiaries & Joint Companies
        </h1>
      </div>

      {/* Frame */}
      <div className="mt-6 rounded-3xl p-[1.5px] bg-[linear-gradient(135deg,rgba(190,0,16,0.9),rgba(230,57,70,0.9))]">
        <div ref={wrapRef} className="relative rounded-[20px] bg-white/70 backdrop-blur-xl border border-white/60 p-5 sm:p-6 lg:p-8">
          {/* Parent (INKARP) badge centered above columns */}
          <div ref={parentRef} className="absolute left-1/2 -translate-x-1/2 -top-6 sm:-top-8">
            <div className="flex items-center gap-2 bg-white rounded-full border border-[#F5F5F5] px-3 py-1 shadow">
              <span className="h-7 w-7 rounded-full bg-white flex items-center justify-center border border-[#F5F5F5] overflow-hidden">
                <img src={Inkarp} alt="INKARP" className="h-5 w-5 object-contain" />
              </span>
              <span className="text-xs font-[MaxOT] text-[#E63946]">INKARP</span>
            </div>
          </div>

          {/* SVG connectors overlay */}
          <svg className="pointer-events-none absolute inset-0" width="100%" height="100%">
            {paths.map((p) => (
              <path
                key={p.id}
                d={p.d}
                fill="none"
                stroke="#E63946"
                strokeWidth={hoverId && hoverId !== p.id ? 0.75 : 1.5}
                opacity={hoverId && hoverId !== p.id ? 0.25 : 0.55}
                style={{ transition: "opacity 200ms ease, stroke-width 200ms ease" }}
              />
            ))}
          </svg>

          {/* Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left: Subsidiaries (bigger) */}
            <div className="lg:col-span-7">
              <div className="mb-3">
                <span
                  className="px-3 py-1 text-[11px] sm:text-xs font-[MaxOT] uppercase rounded-full bg-white"
                  style={{ borderImage: "linear-gradient(90deg,#BE0010,#E63946) 1", borderWidth: 1, borderStyle: "solid" }}
                >
                  Subsidiaries
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {subsidiaries.map((s) => (
                  <motion.a
                    key={s.id}
                    href={s.href}
                    onMouseEnter={() => setHoverId(s.id)}
                    onMouseLeave={() => setHoverId(null)}
                    ref={(el) => (targetRefs.current[s.id] = el)}
                    whileHover={{ y: -3 }}
                    transition={{ type: "spring", stiffness: 260, damping: 18 }}
                    className="block rounded-2xl overflow-hidden bg-white border border-[#F5F5F5] shadow-sm"
                  >
                    {/* gradient top border */}
                    <div className="h-1 w-full bg-gradient-to-r from-[#BE0010] to-[#E63946]" />
                    <div className="p-4 flex items-center gap-3">
                      <span className="h-10 w-10 rounded-full bg-[#E63946] text-white flex items-center justify-center overflow-hidden">
                        <img src={s.logo} alt={s.name} className="h-6 w-6 object-contain" />
                      </span>
                      <div>
                        <h3 className="text-sm sm:text-base font-[MaxOT] text-[#E63946]">{s.name}</h3>
                        <p className="text-xs text-black/70">100% INKARP subsidiary</p>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Right: Joint Companies (compact) */}
            <div className="lg:col-span-5">
              <div className="mb-3">
                <span
                  className="px-3 py-1 text-[11px] sm:text-xs font-[MaxOT] uppercase rounded-full bg-white"
                  style={{ borderImage: "linear-gradient(90deg,#BE0010,#E63946) 1", borderWidth: 1, borderStyle: "solid" }}
                >
                  Joint Companies
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
                {joints.map((j) => (
                  <motion.a
                    key={j.id}
                    href={j.href}
                    onMouseEnter={() => setHoverId(j.id)}
                    onMouseLeave={() => setHoverId(null)}
                    ref={(el) => (targetRefs.current[j.id] = el)}
                    whileHover={{ y: -3 }}
                    transition={{ type: "spring", stiffness: 260, damping: 18 }}
                    className="block rounded-xl overflow-hidden bg-white border border-[#F5F5F5] shadow-sm"
                  >
                    {/* gradient top border */}
                    <div className="h-1 w-full bg-gradient-to-r from-[#BE0010] to-[#E63946]" />
                    <div className="p-3 flex items-center gap-3">
                      <span className="h-9 w-9 rounded-full flex items-center justify-center overflow-hidden text-white"
                            style={{ background: "linear-gradient(90deg,#BE0010,#E63946)" }}>
                        <img src={j.logo} alt={j.name} className="h-5 w-5 object-contain bg-white/0" />
                      </span>
                      <div>
                        <h4 className="text-sm font-[MaxOT] text-[#E63946]">{j.name}</h4>
                        <p className="text-[11px] text-black/70">Joint venture partner</p>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
