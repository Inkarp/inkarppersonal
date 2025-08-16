import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight /*, Sparkles*/ } from "lucide-react";

import HeiVapCore from "/images/products/heidolph/Hei-VAP-HL-G3.webp";
import HeiVapExpert from "/images/products/heidolph/Hei-VAP-Expert.webp";
import HeiVapUltimate from "/images/products/heidolph/Hei-VAP-Ultimate.webp";
import HeiVapUltimateControl from "/images/products/heidolph/Hei-VAP-Ultimate-Control.webp";
import HeiVapExpertControl from "/images/products/heidolph/Hei-VAP-Expert-Control.webp";

const productData = [
  { name: "Hei-VAP Core", image: HeiVapCore, heading: "Hei-VAP Core Rotary Evaporator", description: `Best Water Distillation for your Lab`, details: {}, link: "/verticals/synthesis-and-flow-chemistry/rotary-evaporators/hei-vap-core" },
  { name: "Hei-VAP Expert", image: HeiVapExpert, heading: "Hei-VAP Expert Rotary Evaporator", description: `Best Water Distillation for your Lab`, details: {}, link: "/verticals/synthesis-and-flow-chemistry/rotary-evaporators/hei-vap-expert" },
  { name: "Hei-VAP Ultimate", image: HeiVapUltimate, heading: "Hei-VAP Ultimate Rotary Evaporator", description: `High-Performance Distillation with Automation`, details: { Capacity: "200 ml", Voltage: "110V", Weight: "2.0 kg" }, link: "/verticals/synthesis-and-flow-chemistry/rotary-evaporators/hei-vap-ultimate" },
  { name: "Hei-VAP Expert Control", image: HeiVapExpertControl, heading: "Hei-VAP Expert Control Rotary Evaporator", description: `Advanced Control with Safety Features`, details: { Capacity: "250 ml", Voltage: "220V" }, link: "/verticals/synthesis-and-flow-chemistry/rotary-evaporators/hei-vap-expert-control" },
  { name: "Hei-VAP Ultimate Control", image: HeiVapUltimateControl, heading: "Hei-VAP Ultimate Control Rotary Evaporator", description: `Fully Automated Rotary Evaporator for Complex Workflows`, details: { Capacity: "300 ml", Voltage: "220V" }, link: "/verticals/synthesis-and-flow-chemistry/rotary-evaporators/hei-vap-ultimate-control" },
];

export default function PickProduct() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedProduct = productData[selectedIndex];

  // keyboard navigation (←/→ or ↑/↓)
  useEffect(() => {
    const onKey = (e) => {
      if (["ArrowRight", "ArrowDown"].includes(e.key)) {
        setSelectedIndex((i) => (i + 1) % productData.length);
      } else if (["ArrowLeft", "ArrowUp"].includes(e.key)) {
        setSelectedIndex((i) => (i - 1 + productData.length) % productData.length);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // 3D tilt for the main product image
  const cardRef = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useTransform(my, [-40, 40], [10, -10]);
  const ry = useTransform(mx, [-40, 40], [-10, 10]);
  const glare = useTransform(mx, [-40, 40], ["0%", "100%"]);

  const onMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mx.set(Math.max(-40, Math.min(40, x / 6)));
    my.set(Math.max(-40, Math.min(40, y / 6)));
  };
  const onMouseLeave = () => { mx.set(0); my.set(0); };

  const pills = useMemo(
    () => [
      { label: "Precision", value: "±0.1°C" },
      { label: "Automation", value: "Smart Lift" },
      { label: "Safety", value: "Dry-Run Protection" },
    ],
    []
  );

  return (
    <div className="relative overflow-hidden w-[98%] mx-auto py-10 md:px-10 lg:px-20">
      {/* Header */}
      <div className="text-center flex flex-col justify-center items-center gap-3">
        <span
          className="px-4 py-1 text-xs sm:text-sm font-[MaxOT] uppercase rounded-full bg-white"
          style={{ borderImage: 'linear-gradient(90deg,#BE0010,#E63946) 1', borderWidth: 1, borderStyle: 'solid' }}
        >
          Precision Picks
        </span>
        <h1 className="text-xl sm:text-2xl font-[MaxOT] text-[#E63946] leading-tight">
          Explore Our Top Lab Solutions
        </h1>
        <p className="font-[Roboto] text-sm sm:text-base text-gray-700">
          Expert-curated equipment engineered for accuracy, reliability, and ease.
        </p>
      </div>

      {/* soft background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(230,57,70,0.08),transparent),radial-gradient(1200px_600px_at_80%_110%,rgba(230,57,70,0.08),transparent)]" />

      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="relative w-[98%] mx-auto rounded-3xl overflow-hidden"
      >
        {/* NOTE: items-stretch keeps columns equal in height */}
        <div className="relative grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* LEFT: Mobile dropdown + Desktop sticky rail */}
          <div className="md:col-span-3 flex">
            {/* Mobile/Tablet dropdown (<md visible) */}
            <div className="md:hidden px-2 w-full">
              <label className="block text-sm font-[Roboto] text-black/70 mb-2">
                Select a product
              </label>
              <div
                className="p-[1.5px] rounded-xl"
                style={{ background: 'linear-gradient(90deg,#BE0010,#E63946)' }}
              >
                <select
                  value={selectedIndex}
                  onChange={(e) => setSelectedIndex(Number(e.target.value))}
                  className="w-full rounded-[10px] bg-white/95 backdrop-blur border border-white/60 px-4 py-3 text-sm font-[MaxOT] text-[#0f1b33] focus:outline-none focus:ring-2 focus:ring-[#E63946]"
                >
                  {productData.map((item, idx) => (
                    <option key={item.name} value={idx}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Desktop sticky rail (≥md) */}
            <div className="hidden md:block w-full">
              {/* <div className="sticky top-6"> */}
                {/* h-full + min-h ensures equal visual height with the right */}
                <div className="h-full min-h-[250px] sm:min-h-[360px] rounded-3xl border border-gray-200 shadow-sm p-5 flex flex-col">
                  <div className="flex items-center justify-center mb-3">
                    <span className="px-3 py-1 bg-white rounded-full text-xs font-[MaxOT] border border-[#E63946]/30">
                      Pick A Product
                    </span>
                  </div>
                  <ul className="space-y-2 pr-1 overflow-y-auto flex-1">
                    {productData.map((item, idx) => (
                      <li key={idx}>
                        <button
                          onClick={() => setSelectedIndex(idx)}
                          className={`w-full text-left p-3 rounded-xl border transition group ${
                            idx === selectedIndex
                              ? "bg-[#E63946]/5 text-[#E63946] border-[#E63946]/30 shadow-sm"
                              : "bg-white text-gray-900 border-gray-200 hover:border-[#E63946]/30 hover:bg-[#E63946]/5"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span
                              className={`h-2.5 w-2.5 rounded-full transition ${
                                idx === selectedIndex ? "bg-[#E63946]" : "bg-gray-300 group-hover:bg-[#E63946]/60"
                              }`}
                            />
                            <span className="text-sm font-[Roboto]">{item.name}</span>
                          </div>
                        </button>
                      </li>
                    ))}
                  </ul>
                  {/* <div className="mt-4 text-[11px] text-gray-500 px-1">Use ↑/↓ or ←/→ to browse</div> */}
                </div>
              </div>
            {/* </div> */}
          </div>

          {/* RIGHT: Product spotlight */}
          <div className="md:col-span-9">
            <motion.div
              key={selectedProduct.image}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
              className="relative backdrop-blur px-4 sm:px-7 py-2 h-full"
            >
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 h-full">
                {/* Image + 3D tilt */}
                <div
                  className="lg:col-span-3 relative lg:min-h-[360px]"
                  onMouseMove={onMouseMove}
                  onMouseLeave={onMouseLeave}
                  ref={cardRef}
                >
                  <motion.div
                    style={{ rotateX: rx, rotateY: ry }}
                    className="relative w-full h-[280px] sm:h-[360px] lg:h-[360px] rounded-2xl bg-gradient-to-br from-white to-white/50 border border-gray-200 flex items-center justify-center overflow-hidden"
                  >
                    <div className="absolute -inset-10 bg-[radial-gradient(500px_200px_at_50%_20%,rgba(230,57,70,0.10),transparent)]" />
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      className="relative z-10 max-h-[78%] w-auto object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,0.15)]"
                    />
                    {/* moving glare */}
                    <motion.div
                      style={{ left: glare }}
                      className="pointer-events-none absolute top-0 left-0 h-full w-[20%] bg-gradient-to-r from-transparent via-white/40 to-transparent"
                      animate={{ left: ["-20%", "120%"] }}
                      transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
                    />
                  </motion.div>
                </div>

                {/* Details + CTA */}
                <div className="lg:col-span-2 flex flex-col justify-center space-y-4">
                  {/* Optional heading: */}
                  {/* <h2 className="text-xl sm:text-2xl text-[#E63946] font-[MaxOT]">
                    {selectedProduct.heading}
                  </h2> */}
                  <p className="font-[MaxOT] text-lg mt-1">
                    {selectedProduct.description}
                  </p>

                  {/* Chips (kept but commented)
                  <div className="flex flex-wrap gap-2">
                    {pills.map((p, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border border-[#E63946]/30 bg-white"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-[#E63946]" />
                        {p.label}: <span className="text-gray-700">{p.value}</span>
                      </span>
                    ))}
                  </div>
                  */}

                  <div className="mt-3 flex items-center gap-3">
                    <a href={selectedProduct.link}>
                      <motion.button
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-2 bg-[#E63946] text-white font-semibold px-5 py-2.5 rounded-full shadow hover:bg-red-700"
                      >
                        Explore <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </a>
                    <div className="hidden lg:block text-xs text-gray-500">
                      Tip: Use the arrow keys to switch products.
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
