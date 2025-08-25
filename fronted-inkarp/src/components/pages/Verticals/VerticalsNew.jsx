import React, { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, Beaker, Microscope, Scale, Battery, FlaskConical, HeartPulse, TestTube2, Thermometer, Building2 } from "lucide-react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

const VERTICALS = [
  { name: "Synthesis and Flow Chemistry", key: "synthesis-and-flow-chemistry", icon: FlaskConical },
  { name: "Analytical and Chromatography Solutions", key: "analytical-and-chromatography-solutions", icon: TestTube2 },
  { name: "Analytical Chemistry and Weighing", key: "analytical-chemistry-and-weighing", icon: Scale },
  { name: "Material Science and Battery", key: "material-science-and-battery", icon: Battery },
  { name: "General Laboratory Instrument", key: "general-laboratory-instrument", icon: Beaker },
  { name: "Lifesciences", key: "lifesciences", icon: HeartPulse },
  { name: "Extrusion and Homogenization", key: "extrusion-and-homogenization", icon: Building2 },
  { name: "Rheology and Thermal Analysis", key: "rheology-and-thermal-analysis", icon: Thermometer },
  { name: "Pilot Plants and Automation", key: "pilot-plants-and-automation", icon: Microscope },
];

const VIEW_MODES = ["grid", "list"]; // simple JS array

const VerticalsNew = () => {
  const { subpage } = useParams();
  const selectedKey = subpage || "synthesis-and-flow-chemistry";
  const [query, setQuery] = useState("");
  const [view, setView] = useState("orbit");

  const items = useMemo(() => {
    const q = query.trim().toLowerCase();
    const filtered = q ? VERTICALS.filter(v => v.name.toLowerCase().includes(q)) : VERTICALS;
    const idx = filtered.findIndex(v => v.key === selectedKey);
    if (idx > 0) {
      const clone = [...filtered];
      const [sel] = clone.splice(idx, 1);
      clone.unshift(sel);
      return clone;
    }
    return filtered;
  }, [query, selectedKey]);

  return (
    <div className="relative  overflow-clip bg-[#0b1020] text-white">
      <Helmet>
        <title>Verticals – Inkarp Instruments Private Ltd</title>
        <meta name="description" content="Explore Inkarp's scientific focus areas with an immersive, interactive showcase across synthesis, analytics, life sciences, and more." />
      </Helmet>

      {/* Animated hero backdrop */}
      {/* <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[36rem] w-[36rem] rounded-full blur-3xl opacity-30 bg-gradient-to-tr from-[#E63946] via-[#ff9f9f] to-transparent animate-pulse" />
        <div className="absolute -bottom-40 right-1/2 translate-x-1/2 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-20 bg-gradient-to-tr from-[#FFEAA7] via-[#b3ffd9] to-transparent animate-pulse" />
      </div> */}

      <main className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 py-5">
        {/* Header */}
        <section className="py-3 text-center">
          <h1 className="text-3xl font-[MaxOT] tracking-tight">
            Explore Our <span className="text-[#E63946]">Scientific Verticals</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg font-[Roboto] text-white/80">
            From research to production, discover how our technologies support every lab need.
          </p>

          {/* Controls */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center">
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2 w-full sm:w-[26rem] focus-within:ring-2 ring-[#E63946]/50">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="opacity-70"><path d="M21 21l-4.3-4.3M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z" stroke="currentColor" strokeWidth="1.5"/></svg>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search a vertical…"
                className="bg-transparent outline-none flex-1 placeholder-white/50"
                aria-label="Search verticals"
              />
            </div>

            <div role="tablist" aria-label="View modes" className="flex gap-2 bg-white/5 border border-white/10 rounded-xl p-1">
              {VIEW_MODES.map((m) => (
                <button
                  key={m}
                  onClick={() => setView(m)}
                  role="tab"
                  aria-selected={view === m}
                  className={`px-3 py-2 rounded-lg text-sm capitalize transition ${view===m?"bg-[#E63946] text-white":"text-white/80 hover:bg-white/10"}`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="mt-12">
          {view === "grid" && <GridView items={items} />}
          {/* {view === "orbit" && <OrbitView items={items} />} */}
          {view === "list" && <ListView items={items} />}
        </section>
      </main>
    </div>
  );
};

export default VerticalsNew;

// -----------------
// Grid View
// -----------------
const GridView = ({ items }) => {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((v, i) => (
        <motion.div
          key={v.key}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05 }}
        >
          <VerticalCard v={v} index={i} />
        </motion.div>
      ))}
    </div>
  );
};

// -----------------
// Orbit View
// -----------------
// const OrbitView = ({ items }) => {
//   const RINGS = useMemo(() => {
//     const count = items.length;
//     const radiusRem = Math.max(10, Math.min(16, 10 + Math.floor(count/2)));
//     const angleStep = 360 / Math.max(1, count);
//     return items.map((v, idx) => {
//       const angle = -90 + idx * angleStep; // start at top
//       const rad = angle * (Math.PI/180);
//       const x = Math.cos(rad) * radiusRem;
//       const y = Math.sin(rad) * radiusRem;
//       return { v, idx, angle, x, y };
//     });
//   }, [items]);

//   return (
//     <div className="relative mx-auto max-w-5xl h-[34rem] sm:h-[38rem]">
//       {/* center node */}
//       <div className="absolute left-50% top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
//         <div className="h-28 w-28 sm:h-36 sm:w-36 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/15 backdrop-blur-md grid place-items-center shadow-2xl">
//           <span className="text-center font-[MaxOT] text-sm sm:text-base leading-tight">
//             Inkarp
//             <span className="block text-[#E63946] font-semibold">Verticals</span>
//           </span>
//         </div>
//       </div>

//       {/* orbit trail */}
//       <div className="absolute inset-0 grid place-items-center">
//         <div className="h-[22rem] sm:h-[26rem] w-[22rem] sm:w-[26rem] rounded-full border border-dashed border-white/10" />
//       </div>

//       {/* nodes */}
//       <div className="absolute inset-0">
//         {RINGS.map((p, i) => (
//           <motion.div
//             key={p.v.key}
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: i * 0.05 }}
//             className="absolute"
//             style={{
//               left: "50%",
//               top: "50%",
//               transform: `translate(calc(-50% + ${p.x}rem), calc(-50% + ${p.y}rem))`,
//             }}
//           >
//             <OrbitNode v={p.v} index={i} />
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// -----------------
// List View
// -----------------
const ListView = ({ items }) => {
  return (
    <ul className="divide-y divide-white/10 rounded-2xl overflow-hidden border border-white/10 bg-white/5">
      {items.map((v) => (
        <li key={v.key} className="p-4 sm:p-5 hover:bg-white/[0.06] transition">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <IconWrap Icon={v.icon} />
              <span className="font-[MaxOT] text-base sm:text-lg">{v.name}</span>
            </div>
            <Link to={`/verticals/${v.key}`} className="inline-flex items-center gap-2 text-[#E63946] hover:text-white">
              Explore <ArrowRight className="h-4" />
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
};

// -----------------
// Card + Node components
// -----------------
const VerticalCard = ({ v }) => {
  const Icon = v.icon || Beaker;
  return (
    <motion.div whileHover={{ y: -4 }} className="group relative bg-white/[0.06] border border-white/10 rounded-2xl overflow-hidden shadow-xl">
      {/* subtle corner glint */}
      <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-tr from-[#E63946]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>

      <div className="p-5 sm:p-6">
        <div className="flex items-center justify-between">
          <IconWrap Icon={Icon} />
          <span className="text-[10px] uppercase tracking-widest text-white/50">Vertical</span>
        </div>
        <h3 className="mt-3 text-lg sm:text-xl font-[MaxOT] leading-snug">{v.name}</h3>
        <div className="mt-5">
          <Link to={`/verticals/${v.key}`} className="inline-flex items-center gap-2 text-[#E63946] hover:text-white">
            Explore <ArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const OrbitNode = ({ v }) => {
  const Icon = v.icon || Beaker;
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="group">
      <Link to={`/verticals/${v.key}`} className="block">
        <div className="h-28 w-28 sm:h-32 sm:w-32 rounded-2xl hover:bg-white bg-white/[0.06] border border-white/10 backdrop-blur-md shadow-xl p-3">
          <div className="flex flex-col items-center justify-center h-full text-center">
            <IconWrap Icon={Icon} />
            <span className="mt-2 text-[11px] sm:text-[12px] font-[MaxOT] leading-tight">{v.name}</span>
            <ArrowRight className="mt-1 h-3 opacity-0 group-hover:opacity-100 transition" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const IconWrap = ({ Icon }) => (
  <div className="h-9 w-9 rounded-xl bg-white/5 border border-white/10 grid place-items-center">
    <Icon className="h-5 w-5" />
  </div>
);
