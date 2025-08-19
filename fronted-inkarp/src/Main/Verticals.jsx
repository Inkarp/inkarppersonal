import React from "react";

/**
 * Radial Verticals UI — matches the reference
 * - Respects max-height of the screen (no overflow): max-h-screen
 * - Center circle + evenly spaced nodes with spokes
 * - Hover tooltip shows each label
 * - Icons remain upright (counter-rotation)
 */
 function Verticals() {
  // You can replace these with your real verticals + icons
  const items = [
    { icon: "Synthesis and flow Chemistry", label: "Quality Check" },
    { icon: "🔧", label: "Support" },
    { icon: "🏆", label: "Excellence" },
    { icon: "👥", label: "Teamwork" },
    { icon: "📖", label: "Knowledge" },
    { icon: "💡", label: "Innovation" },
    { icon: "🚢", label: "Solutions" },
    { icon: "❤️", label: "Care" },
  ];

  const count = items.length;
  const step = 360 / count;

  // Tunables (match look/spacing here)
  const SIZE_VH = 92;   // overall wheel size as vh (keeps within screen)
  const CENTER = 220;   // central circle diameter (px)
  const NODE   = 84;    // node diameter (px)
  const GAP    = 12;    // gap between spoke end and node (px)

  const cssVars = {
    "--size": `min(${SIZE_VH}vh, 720px)`,
    "--center": `${CENTER}px`,
    "--node": `${NODE}px`,
    "--gap": `${GAP}px`,
    // Distance from container center to node center
    "--radius": `calc((var(--size)/2) - (var(--node)/2) - var(--gap))`,
    // Spoke length from center circle edge to before node
    "--line": `calc((var(--size)/2) - (var(--center)/2) - var(--node) - var(--gap))`,
  } ;

  return (
    <section className="w-full max-h-screen overflow-hidden grid place-items-center py-8">
      <div
        className="relative"
        style={{ width: "var(--size)", height: "var(--size)", ...cssVars }}
      >
        {/* central circle */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white grid place-items-center shadow-[0_20px_60px_rgba(0,0,0,0.10)]"
          style={{ width: "var(--center)", height: "var(--center)" }}
        >
          <div className="absolute inset-0 rounded-full ring-1 ring-gray-300/90" />
          <div className="flex flex-col items-center gap-1 text-center px-6">
            <span className="text-3xl">🛠️</span>
            {/* <p className="text-[10px] tracking-[0.2em] text-gray-500">360°</p> */}
            <h3 className="text-sm font-medium text-gray-700">Verticals</h3>
          </div>
        </div>

        {/* spokes + nodes */}
        {items.map((item, i) => {
          const angle = i * step;
          return (
            <div
              key={i}
              className="absolute left-1/2 top-1/2"
              style={{ transform: `translate(-50%,-50%) rotate(${angle}deg)` }}
            >
              {/* spacer: center to central circle edge */}
              <div style={{ height: `calc(var(--center)/2)` }} />
              {/* spoke */}
              <div className="w-px bg-gray-300/90" style={{ height: `var(--line)` }} />
              {/* small gap before node */}
              <div style={{ height: `var(--gap)` }} />

              {/* node (counter-rotated to keep upright) */}
              <div className="group relative grid place-items-center rounded-full bg-white border border-gray-300 shadow-[0_12px_26px_rgba(0,0,0,0.08)] transition-transform hover:scale-[1.03]">
                <div
                  className="grid place-items-center text-2xl"
                  style={{ width: "var(--node)", height: "var(--node)", transform: `rotate(${-angle}deg)` }}
                >
                  {item.icon}
                </div>

                {/* tooltip */}
                <div className="pointer-events-none absolute left-1/2 top-[calc(100%+10px)] -translate-x-1/2 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200">
                  <div
                    className="rounded-md bg-gray-900 text-white text-xs px-2.5 py-1.5 shadow-md whitespace-nowrap"
                    style={{ transform: `rotate(${-angle}deg)` }}
                  >
                    {item.label}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Optional caption area (like your original) */}
      <div className="mt-4 text-red-600 font-semibold">Knowledge...</div>
      <div className="mt-1 text-black font-bold">SYNTHESIS</div>
    </section>
  );
}
export default Verticals;