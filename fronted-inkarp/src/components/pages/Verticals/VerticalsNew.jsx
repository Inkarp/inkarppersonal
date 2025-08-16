import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";

// ----- Data -----
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

// Utility: create a short label like "SFC" from a name
const abbrev = (name) => {
  const words = name
    .replace(/&/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .split(" ");
  const letters = words
    .filter((w) => /[A-Za-z]/.test(w[0]))
    .slice(0, 3)
    .map((w) => w[0].toUpperCase());
  const short = letters.join("");
  return short.length >= 2 ? short : name.slice(0, 2).toUpperCase();
};

// Shared card UI
function VerticalBadge({ v, onClick }) {
  return (
    <button
      onClick={() => onClick(v)}
      className="group relative flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-sky-400/60"
      aria-label={`Open ${v.name}`}
    >
      <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-sky-500/80 to-indigo-500/80 text-white text-sm font-bold shadow">
        {abbrev(v.name)}
      </div>
      <div className="min-w-0">
        <div className="truncate text-sm font-semibold text-white/95">{v.name}</div>
        <div className="text-[11px] text-white/60">/{v.key}</div>
      </div>
      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 opacity-0 transition group-hover:opacity-100 text-white/70">→</span>
    </button>
  );
}

function useContainerSize(ref) {
  const [size, setSize] = useState({ width: 0, height: 0 });
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const resize = () => setSize({ width: el.clientWidth, height: el.clientHeight });
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(el);
    return () => ro.disconnect();
  }, [ref]);
  return size;
}

// ---------------------------------
// 1) WHEEL (Radial) LAYOUT
// ---------------------------------
function WheelLayout({ items, onClick }) {
  const ref = useRef(null);
  const { width, height } = useContainerSize(ref);
  const cx = width / 2;
  const cy = height / 2;
  const r = Math.max(120, Math.min(width, height) / 2 - 110);

  // precompute positions
  const positions = useMemo(() => {
    const n = items.length;
    return items.map((v, i) => {
      const angle = (i / n) * Math.PI * 2 - Math.PI / 2; // start at top
      const x = cx + r * Math.cos(angle);
      const y = cy + r * Math.sin(angle);
      return { v, i, angle, x, y };
    });
  }, [items, cx, cy, r]);

  return (
    <div ref={ref} className="relative h-[620px] w-full">
      {/* SVG: guide ring + spokes */}
      <svg className="absolute inset-0" width="100%" height="100%">
        {/* Outer decorative rings */}
        <circle cx={cx} cy={cy} r={r} className="fill-none stroke-white/10" strokeWidth={2} />
        <circle cx={cx} cy={cy} r={r * 0.68} className="fill-none stroke-white/5" strokeWidth={1} />
        {/* Spokes */}
        {positions.map((p) => (
          <line
            key={`spoke-${p.i}`}
            x1={cx}
            y1={cy}
            x2={p.x}
            y2={p.y}
            className="stroke-white/10"
            strokeWidth={1}
          />
        ))}
      </svg>

      {/* Center node */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 14 }}
        className="absolute left-1/2 top-1/2 grid h-40 w-40 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900/70 to-slate-800/70 text-center text-white shadow-2xl backdrop-blur"
      >
        <div className="text-xs uppercase tracking-widest text-white/60">Our Verticals</div>
        <div className="mt-1 text-lg font-bold">Inkarp</div>
        <div className="text-[10px] text-white/50">Click any node →</div>
      </motion.div>

      {/* Radial items */}
      {positions.map((p) => (
        <motion.div
          key={p.v.key}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: p.i * 0.04 }}
          style={{ left: p.x, top: p.y, transform: "translate(-50%, -50%)" }}
          className="absolute"
        >
          <VerticalBadge v={p.v} onClick={onClick} />
        </motion.div>
      ))}
    </div>
  );
}

// ---------------------------------
// 2) MOLECULE (Node-Link) LAYOUT
// ---------------------------------
function MoleculeLayout({ items, onClick }) {
  const ref = useRef(null);
  const { width, height } = useContainerSize(ref);

  // Fixed responsive positions (as %), 9 nodes incl. center
  const nodesPct = [
    { x: 50, y: 50 }, // center
    { x: 50, y: 12 },
    { x: 78, y: 22 },
    { x: 88, y: 50 },
    { x: 78, y: 78 },
    { x: 50, y: 88 },
    { x: 22, y: 78 },
    { x: 12, y: 50 },
    { x: 22, y: 22 },
  ];

  const nodes = useMemo(() => {
    return items.map((v, i) => {
      const pct = nodesPct[i] || { x: 50, y: 50 };
      return {
        v,
        i,
        x: (pct.x / 100) * width,
        y: (pct.y / 100) * height,
      };
    });
  }, [items, width, height]);

  // Edges: center connected to all, plus ring polygon
  const centerIdx = 0;
  const ringIdx = [1, 2, 3, 4, 5, 6, 7, 8, 1];
  const edges = [
    ...nodes
      .filter((n) => n.i !== centerIdx)
      .map((n) => ({ a: nodes[centerIdx], b: n })),
    ...ringIdx.slice(0, -1).map((idx, j) => ({ a: nodes[idx], b: nodes[ringIdx[j + 1]] })),
  ];

  return (
    <div ref={ref} className="relative h-[620px] w-full">
      <svg className="absolute inset-0" width="100%" height="100%">
        {edges.map((e, i) => (
          <line
            key={`edge-${i}`}
            x1={e.a?.x || 0}
            y1={e.a?.y || 0}
            x2={e.b?.x || 0}
            y2={e.b?.y || 0}
            className="stroke-sky-300/20"
            strokeWidth={2}
          />
        ))}
      </svg>

      {nodes.map((n) => (
        <motion.div
          key={n.v.key}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: n.x, top: n.y }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.03 }}
        >
          {/* Node */}
          <div className="relative">
            <div className="absolute inset-0 -z-10 blur-xl rounded-full bg-sky-500/10" />
            <VerticalBadge v={n.v} onClick={onClick} />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// ---------------------------------
// 3) GRID (3×3) LAYOUT
// ---------------------------------
function GridLayout({ items, onClick }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((v, i) => (
        <motion.div
          key={v.key}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.03 }}
        >
          <button
            onClick={() => onClick(v)}
            className="group relative w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-800/80 p-4 text-left shadow hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-sky-400/60"
          >
            <div className="flex items-center gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-emerald-500/80 to-teal-500/80 text-white text-sm font-bold shadow">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="min-w-0">
                <div className="truncate text-base font-semibold text-white/95">{v.name}</div>
                <div className="text-[11px] text-white/55">/{v.key}</div>
              </div>
            </div>
            <div className="mt-3 text-sm leading-relaxed text-white/70">
              Explore solutions, products, and use-cases tailored to this vertical.
            </div>
            <span className="absolute right-4 top-4 translate-x-0 rounded-full bg-white/5 px-2 py-1 text-[10px] text-white/70 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100">
              View →
            </span>
          </button>
        </motion.div>
      ))}
    </div>
  );
}

// ---------------------------------
// LAYOUT SWITCHER SHELL
// ---------------------------------
export default function VerticalsNew() {
  const [layout, setLayout] = useState("wheel"); // 'wheel' | 'molecule' | 'grid'

  const handleClick = (v) => {
    // Navigate to your route. Adjust to your router if needed (e.g., useNavigate).
    window.location.href = `/verticals/${v.key}`;
  };

  return (
    <div className="mx-auto max-w-7xl p-4 sm:p-8 text-white">
      {/* Header */}
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Explore Our Verticals</h1>
          <p className="mt-1 text-sm text-white/70">
            Three ready-to-use layouts: <span className="font-medium text-white/90">Wheel</span>,
            <span className="font-medium text-white/90"> Molecule</span>, and
            <span className="font-medium text-white/90"> Grid</span>.
          </p>
        </div>

        {/* Layout toggles */}
        <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-1 backdrop-blur">
          {[
            { id: "wheel", label: "Wheel" },
            { id: "molecule", label: "Molecule" },
            { id: "grid", label: "Grid" },
          ].map((opt) => (
            <button
              key={opt.id}
              onClick={() => setLayout(opt.id)}
              className={`rounded-xl px-3 py-1.5 text-sm transition ${
                layout === opt.id
                  ? "bg-sky-500/80 text-white shadow"
                  : "text-white/80 hover:bg-white/10"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Canvas */}
      <div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-slate-950 to-slate-900 p-4 sm:p-6">
        {layout === "wheel" && <WheelLayout items={verticalsList} onClick={handleClick} />}
        {layout === "molecule" && <MoleculeLayout items={verticalsList} onClick={handleClick} />}
        {layout === "grid" && <GridLayout items={verticalsList} onClick={handleClick} />}
      </div>

      {/* Tips */}
      <div className="mt-6 grid gap-3 text-xs text-white/60 sm:grid-cols-3">
        <div className="rounded-xl border border-white/10 bg-white/5 p-3">
          <b className="text-white/80">Routing:</b> Clicking an item goes to
          <code className="mx-1 rounded bg-black/30 px-1 py-0.5">/verticals/&lt;key&gt;</code>. Change
          the navigation to match your router.
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-3">
          <b className="text-white/80">Icons:</b> Replace the badge with your
          brand icons/illustrations if you prefer.
        </div>
        <div className="rounded-xl border border-white/10 bg-white/5 p-3">
          <b className="text-white/80">Responsive:</b> All layouts adapt. The wheel/molecule are
          optimized for ≥1024px width.
        </div>
      </div>
    </div>
  );
}
