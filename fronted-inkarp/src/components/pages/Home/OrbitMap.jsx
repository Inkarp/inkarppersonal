import React, { useMemo, useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

// Example logos (replace with your imports)
import Spark from "/Spark.svg";
import InkarpTelecom from "/InkarpTelecom.svg";
import InkarpServices from "/InkarpServices.svg";
import Verder from "/Verder.svg";
import Advion from "/src/assets/PrincipalLogos/RowOne/advion.png";
import Inkarp from "/inkarp.png";

/**
 * Orbit map with INKARP at the center, inner ring (2) for Subsidiaries,
 * outer ring (3) for Joint Companies. On-brand colors only:
 * #BE0010, #E63946, #F5F5F5, #FFFFFF.
 */

const subsidiaries = [
  { type: "subsidiary", name: "Inkarp Services", logo: InkarpServices, href: "#" },
  { type: "subsidiary", name: "Inkarp Telecom", logo: InkarpTelecom, href: "#" },
];

const jointCompanies = [
  { type: "joint", name: "Spark", logo: Spark, href: "#" },
  { type: "joint", name: "Verder", logo: Verder, href: "#" },
  { type: "joint", name: "Advion", logo: Advion, href: "#" },
];

export default function OrbitMap() {
  const containerRef = useRef(null);
  const [size, setSize] = useState(560); // px; updated by ResizeObserver

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      const { width } = entries[0].contentRect;
      setSize(width);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Geometry
  const cx = size / 2;
  const cy = size / 2;
  const rInner = size * 0.28; // inner ring radius
  const rOuter = size * 0.42; // outer ring radius

  // Angles for nice spacing (degrees)
  const innerAngles = [-35, 215]; // 2 nodes
  const outerAngles = [10, 140, 270]; // 3 nodes

  const innerNodes = useMemo(
    () => subsidiaries.map((n, i) => ({ ...n, angle: innerAngles[i] })),
    []
  );
  const outerNodes = useMemo(
    () => jointCompanies.map((n, i) => ({ ...n, angle: outerAngles[i] })),
    []
  );

  // Helpers
  const toXY = (r, deg) => {
    const rad = (deg * Math.PI) / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  };

  const makeCurve = (r, deg) => {
    // Quadratic curve from center to (x,y) with a slight bend
    const { x, y } = toXY(r, deg);
    const midX = (cx + x) / 2;
    const midY = (cy + y) / 2;
    // Control point offset outward by 10% of radius, rotated 90°
    const normalRad = ((deg + 90) * Math.PI) / 180;
    const off = r * 0.1;
    const cpx = midX + off * Math.cos(normalRad);
    const cpy = midY + off * Math.sin(normalRad);
    return `M ${cx},${cy} Q ${cpx},${cpy} ${x},${y}`;
  };

  // Node component
  const Node = ({ item, r, deg }) => {
    const { x, y } = toXY(r, deg);
    const isSubsidiary = item.type === "subsidiary";

    return (
      <a
        href={item.href}
        className="group"
        style={{ position: "absolute", left: x, top: y, transform: "translate(-50%, -50%)" }}
        aria-label={item.name}
      >
        <motion.div
          whileHover={{ y: -2 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className={`relative flex items-center gap-2 px-3 py-2 rounded-full shadow border ${
            isSubsidiary
              ? "bg-[#E63946] text-white border-[#E63946]"
              : "text-white border-transparent"
          }`}
          style={
            isSubsidiary
              ? undefined
              : { background: "linear-gradient(90deg,#BE0010,#E63946)" }
          }
        >
          <span className="h-8 w-8 rounded-full bg-white/95 flex items-center justify-center overflow-hidden">
            <img src={item.logo} alt={item.name} className="h-6 w-6 object-contain" />
          </span>
          <span className="text-xs font-[MaxOT] whitespace-nowrap">{item.name}</span>
        </motion.div>
      </a>
    );
  };

  return (
    <section className="relative w-[98%] mx-auto py-10 md:px-10 lg:px-20">
      {/* Soft stage background (on-brand) */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(230,57,70,0.08),transparent),radial-gradient(1200px_600px_at_80%_110%,rgba(230,57,70,0.08),transparent)]" />

      {/* Heading – on-brand pill */}
      <div className="text-center flex flex-col justify-center items-center gap-3">
        <span
          className="px-4 py-1 text-xs sm:text-sm font-[MaxOT] uppercase rounded-full bg-white"
          style={{
            borderImage: 'linear-gradient(90deg,#BE0010,#E63946) 1',
            borderWidth: 1,
            borderStyle: 'solid',
          }}
        >
          Our Group Companies & Collaborations
        </span>
        <h1 className="text-xl sm:text-2xl font-[MaxOT] text-[#E63946] leading-tight text-center">
          Orbit of Partnerships Around INKARP
        </h1>
      </div>

      {/* Frame with gradient border + glass */}
      <div className="mt-6 rounded-3xl p-[1.5px] bg-[linear-gradient(135deg,rgba(190,0,16,0.9),rgba(230,57,70,0.9))]">
        <div className="rounded-[20px] bg-white/70 backdrop-blur-xl border border-white/60 p-4 sm:p-6 lg:p-8">
          <div className="w-full mx-auto max-w-5xl">
            <div
              ref={containerRef}
              className="relative mx-auto aspect-square w-full max-w-[720px]"
            >
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border border-[#F5F5F5]" />
              <div className="absolute inset-6 rounded-full border border-[#F5F5F5]" />

              {/* SVG connectors */}
              <svg className="absolute inset-0" width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
                {/* inner curves */}
                {innerNodes.map((n, i) => (
                  <path key={`in-${i}`} d={makeCurve(rInner, n.angle)} fill="none" stroke="#E63946" strokeWidth="1.25" strokeOpacity="0.6" />
                ))}
                {/* outer curves */}
                {outerNodes.map((n, i) => (
                  <path key={`out-${i}`} d={makeCurve(rOuter, n.angle)} fill="none" stroke="#E63946" strokeWidth="1" strokeOpacity="0.45" />
                ))}
              </svg>

              {/* Center – INKARP */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative h-28 w-28 sm:h-32 sm:w-32 rounded-full bg-white shadow-[0_12px_35px_rgba(0,0,0,0.08)] border border-[#F5F5F5] flex items-center justify-center overflow-hidden">
                  <img src={Inkarp} alt="INKARP" className="h-14 w-14 object-contain" />
                  <div className="absolute -inset-2 rounded-full pointer-events-none opacity-20 bg-[radial-gradient(200px_120px_at_50%_10%,rgba(230,57,70,0.25),transparent)]" />
                </div>
              </div>

              {/* Nodes – inner ring (Subsidiaries) */}
              {innerNodes.map((item, i) => (
                <Node key={`inner-${i}`} item={item} r={rInner} deg={item.angle} />
              ))}

              {/* Nodes – outer ring (Joint Companies) */}
              {outerNodes.map((item, i) => (
                <Node key={`outer-${i}`} item={item} r={rOuter} deg={item.angle} />
              ))}
            </div>

            {/* Legend */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#E63946] bg-[#E63946] text-white">
                <span className="h-2.5 w-2.5 rounded-full bg-white" /> Subsidiary
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-white" style={{ background: 'linear-gradient(90deg,#BE0010,#E63946)' }}>
                <span className="h-2.5 w-2.5 rounded-full bg-white/90" /> Joint Company
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
