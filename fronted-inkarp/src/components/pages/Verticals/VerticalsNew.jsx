import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useTransform } from "framer-motion";

/** Your data, unchanged */
const verticalsList = [
  { name: "Synthesis and Flow Chemistry", key: "synthesis-and-flow-chemistry" },
  { name: "Analytical and Chromatography Solutions", key: "analytical-and-chromatography-solutions" },
  { name: "Analytical Chemistry and Weighing", key: "analytical-chemistry-and-weighing" },
  { name: "Material Science and Battery", key: "material-science-and-battery" },
  { name: "General Laboratory Instrument", key: "general-laboratory-instrument" },
  { name: "Lifesciences", key: "lifesciences" },
  { name: "Extrusion and Homogenization", key: "extrusion-and-homogenization" },
  { name: "Rheology and Thermal Analysis", key: "rheology-and-thermal-analysis" },
  { name: "Pilot Plants and Automation", key: "pilot-plants-and-automation" },
];

export default function VerticalsOrbitWheel() {
  const n = verticalsList.length;
  const [selected, setSelected] = useState(0);
  const [rot, setRot] = useState(0);       // degrees
  const dragging = useRef(false);

  // auto-rotate
  useEffect(() => {
    const id = setInterval(() => setRot(r => r + 0.25), 30); // gentle spin
    return () => clearInterval(id);
  }, []);

  // framer for drag
  const dx = useMotionValue(0);
  const spinDeg = useTransform(dx, [-200, 200], [-60, 60]);

  useEffect(() => {
    const unsub = spinDeg.on("change", v => {
      if (dragging.current) setRot(r => r + v * 0.08);
    });
    return () => unsub();
  }, [spinDeg]);

  // angle step
  const step = 360 / n;

  // center the selected at the top if clicked
  const rotateToSelected = (idx) => {
    const targetAngle = 270; // top (0 is at 3 o'clock; 270 puts item at 12 o'clock)
    // current absolute angle of idx:
    const current = (rot + idx * step) % 360;
    const delta = normalize(targetAngle - current);
    setRot(r => r + delta);
  };

  // normalize to [-180, 180]
  const normalize = (d) => {
    let a = ((d + 180) % 360) - 180;
    if (a < -180) a += 360;
    return a;
  };

  // radius responsive via CSS var
  const ringRef = useRef(null);

  return (
    <div className="relative w-full min-h-[580px] sm:min-h-[620px] md:min-h-[680px] flex items-center justify-center overflow-hidden">
      {/* subtle background */}
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-[#E63946]/10 blur-[80px]" />
        <div className="absolute -bottom-24 -right-24 w-[420px] h-[420px] rounded-full bg-[#E63946]/10 blur-[80px]" />
      </div>

      {/* Heading */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 text-center">
        <h4 className="px-4 py-1 text-sm font-[MaxOT] font-semibold uppercase border border-[#E63946] text-[#E63946] rounded-full">
          Verticals We Serve
        </h4>
        <h1 className="mt-2 text-2xl sm:text-3xl font-[MaxOT] text-[#e63946]">
          Explore Our Scientific Focus Areas
        </h1>
      </div>

      {/* Orbit ring */}
      <style>{`
        .orbit-wrap { --r: 220px; }
        @media (min-width: 640px) { .orbit-wrap { --r: 260px; } }
        @media (min-width: 768px) { .orbit-wrap { --r: 300px; } }
        @media (min-width: 1024px){ .orbit-wrap { --r: 330px; } }
      `}</style>

      <motion.div
        className="orbit-wrap relative w-[760px] max-w-full aspect-square"
        ref={ringRef}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragStart={() => (dragging.current = true)}
        onDragEnd={() => {
          dragging.current = false;
          dx.set(0);
        }}
        style={{ x: dx }}
        onWheel={(e) => setRot(r => r + e.deltaY * 0.1)}
        onMouseEnter={() => {/* hover pauses: handled by interval, we can ignore */}}
        onMouseLeave={() => {/* resume auto handled by interval */}}
      >
        {/* ring guide */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            border: "1px dashed rgba(230,57,70,0.25)",
            transform: `rotate(${rot}deg)`,
            transition: dragging.current ? "none" : "transform 300ms ease",
          }}
        />

        {/* items */}
        {verticalsList.map((v, i) => {
          const baseAngle = i * step;        // position on ring
          const total = baseAngle + rot;     // world angle
          return (
            <div
              key={v.key}
              className="absolute left-1/2 top-1/2"
              style={{
                transform: `
                  rotate(${total}deg)
                  translate(var(--r))
                  rotate(${-total}deg)
                `,
                transformOrigin: "0 0",
                transition: dragging.current ? "none" : "transform 300ms ease",
              }}
            >
              <button
                onClick={() => {
                  setSelected(i);
                  rotateToSelected(i);
                }}
                className={`group relative w-[150px] sm:w-[170px] lg:w-[190px] 
                  rounded-2xl border bg-white text-left p-4 shadow-[0_12px_30px_rgba(0,0,0,0.08)]
                  transition hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.10)]
                  ${i === selected ? "border-[#E63946] ring-2 ring-[#E63946]/30" : "border-[#E63946]/20"}`}
              >
                {/* top accent */}
                <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#E63946] via-rose-500 to-[#E63946] opacity-90 rounded-t-2xl" />
                <div className="flex items-start gap-2">
                  <span className={`inline-flex h-7 min-w-7 px-2 items-center justify-center rounded-full text-white text-xs font-[MaxOT] 
                    ${i === selected ? "bg-[#E63946]" : "bg-[#E63946]/70"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <p className="font-[MaxOT] text-[#E63946] text-sm leading-snug">{v.name}</p>
                    <p className="text-[11px] text-gray-600 mt-1">Tap to view details</p>
                  </div>
                </div>
              </button>
            </div>
          );
        })}
      </motion.div>

      {/* Center card */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="pointer-events-auto w-[80%] max-w-[520px] rounded-3xl bg-white/80 backdrop-blur-md border border-[#E63946]/20 shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <span className="inline-flex h-8 min-w-8 px-2 items-center justify-center rounded-full bg-[#E63946] text-white text-sm font-semibold font-[MaxOT]">
              {String(selected + 1).padStart(2, "0")}
            </span>
            <div className="flex-1">
              <h3 className="font-[MaxOT] text-[#E63946] text-lg sm:text-xl leading-snug">
                {verticalsList[selected].name}
              </h3>
              <p className="text-sm text-gray-700 mt-1">
                Explore products, use-cases, and application notes tailored to this vertical.
              </p>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-3">
            <Link
              to={`/verticals/${verticalsList[selected].key}`}
              className="inline-flex items-center gap-2 bg-[#E63946] text-white rounded-full px-5 py-2.5 text-sm font-semibold hover:bg-red-700 transition"
            >
              Explore
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M8 5l8 7-8 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <button
              onClick={() => setRot(r => r - step)}
              className="rounded-full border border-[#E63946]/30 text-[#E63946] px-3 py-2 text-sm hover:bg-[#E63946]/5"
              type="button"
            >
              ◀ Prev
            </button>
            <button
              onClick={() => setRot(r => r + step)}
              className="rounded-full border border-[#E63946]/30 text-[#E63946] px-3 py-2 text-sm hover:bg-[#E63946]/5"
              type="button"
            >
              Next ▶
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
