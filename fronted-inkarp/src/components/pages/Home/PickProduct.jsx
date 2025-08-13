import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ChevronDown, ChevronUp, Sparkles, MousePointerClick, ArrowRight } from "lucide-react";

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  const onMouseLeave = () => {
    mx.set(0);
    my.set(0);
  };
  // Parallax background (on section)
    const sx = useMotionValue(0);
    const sy = useMotionValue(0);
    const parallaxX = useTransform(sx, [-60, 60], [-12, 12]);
    const parallaxY = useTransform(sy, [-60, 60], [-10, 10]);

  const pills = useMemo(
    () => [
      { label: "Precision", value: "±0.1°C" },
      { label: "Automation", value: "Smart Lift" },
      { label: "Safety", value: "Dry-Run Protection" },
    ],
    []
  );

  return (
    <div className="relative w-[98%] mx-auto py-10 md:px-10 lg:px-20">
      {/* Section heading */}
      <div className="text-center flex flex-col justify-center items-center gap-3">
        <span
          className="px-4 py-1 text-xs sm:text-sm font-[MaxOT] uppercase rounded-full bg-white"
          style={{
            borderImage: 'linear-gradient(90deg,#BE0010,#E63946) 1',
            borderWidth: 1,
            borderStyle: 'solid',
          }}
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
      {/* Soft stage background (on-brand) */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(230,57,70,0.08),transparent),radial-gradient(1200px_600px_at_80%_110%,rgba(230,57,70,0.08),transparent)]" />

      {/* Parallax gradient orbs */}
      {/* <motion.div style={{ x: parallaxX, y: parallaxY }} className="pointer-events-none absolute -z-10 -left-12 top-12 h-44 w-44 rounded-full blur-3xl opacity-30 bg-gradient-to-tr from-[#BE0010] to-[#E63946]" /> */}
      <motion.div style={{ x: useTransform(parallaxX, v => -v), y: useTransform(parallaxY, v => -v) }} className="pointer-events-none absolute -z-10 right-6 bottom-0 h-52 w-52 rounded-full blur-3xl opacity-25 bg-gradient-to-tr from-[#E63946] to-[#BE0010]" />

      {/* Wrapper */}
      <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="relative w-[98%] border border-gray-200 mx-auto rounded-3xl overflow-hidden">
        {/* soft gradient background */}
        {/* <div className="absolute inset-0 px-3 bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(230,57,70,0.08),transparent),radial-gradient(1200px_600px_at_80%_110%,rgba(230,57,70,0.08),transparent)] pointer-events-none" /> */}

        <div className="relative grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* LEFT: Sticky sidebar (desktop) + mobile select */}
          <div className="md:col-span-3">
            {/* Mobile picker */}
            <div className="md:hidden px-2">
              <div className="bg-white/70 backdrop-blur rounded-2xl border border-gray-200 shadow-sm p-4">
                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="w-full flex items-center justify-between p-3 rounded-xl border border-gray-200 hover:bg-red-50 transition">
                  <span className="font-semibold font-[MaxOT] text-[#E63946]">Pick A Product</span>
                  {isMobileMenuOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                </button>
                {isMobileMenuOpen && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} transition={{ duration: 0.25 }} className="mt-3 grid grid-cols-2 gap-2">
                    {productData.map((item, idx) => (
                      <button key={idx} onClick={() => { setSelectedIndex(idx); setIsMobileMenuOpen(false); }} className={`p-2 rounded-lg text-sm font-[Roboto] border transition hover:scale-[1.02] ${idx === selectedIndex ? "bg-red-100 text-red-800 font-semibold border-red-300" : "bg-white text-gray-800 border-gray-200"}`}>
                        {item.name}
                      </button>
                    ))}
                  </motion.div>
                )}
              </div>
            </div>

            {/* Desktop sticky rail */}
            <div className="hidden md:block sticky top-6 h-[calc(100vh-20rem)]">
              <div className="bg-white/70 backdrop-blur  rounded-3xl border border-gray-200 shadow-sm p-5">
                <div className="flex items-center justify-center mb-3">
                  <span className="px-3 py-1 bg-white rounded-full text-xs font-[MaxOT] border border-[#E63946]/30">Pick A Product</span>
                </div>
                <ul className="space-y-2 pr-1 overflow-y-auto max-h-[80vh]">
                  {productData.map((item, idx) => (
                    <li key={idx}>
                      <button onClick={() => setSelectedIndex(idx)} className={`w-full text-left p-3 rounded-xl border transition group ${idx === selectedIndex ? "bg-[#E63946]/5 text-[#E63946] border-[#E63946]/30 shadow-sm" : "bg-white text-gray-900 border-gray-200 hover:border-[#E63946]/30 hover:bg-[#E63946]/5"}`}>
                        <div className="flex items-center gap-3">
                          <span className={`h-2.5 w-2.5 rounded-full transition ${idx === selectedIndex ? "bg-[#E63946]" : "bg-gray-300 group-hover:bg-[#E63946]/60"}`} />
                          <span className="text-sm font-[Roboto]">{item.name}</span>
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 text-[11px] text-gray-500 flex items-center gap-1 px-1"><MousePointerClick className="w-3.5 h-3.5" />Use ↑/↓ or ←/→ to browse</div>
              </div>
            </div>
          </div>

          {/* RIGHT: Product spotlight */}
          <div className="md:col-span-9">
            <motion.div key={selectedProduct.image} initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.35 }} className="relative bg-white/70 backdrop-blur px-4 sm:px-7 py-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">

              {/* content grid */}
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                {/* Image + 3D tilt */}
                <div className="lg:col-span-3 relative" onMouseMove={onMouseMove} onMouseLeave={onMouseLeave} ref={cardRef}>
                  <motion.div style={{ rotateX: rx, rotateY: ry }} className="relative w-full h-[280px] sm:h-[360px] rounded-2xl bg-gradient-to-br from-white to-white/50 border border-gray-200 flex items-center justify-center overflow-hidden">
                    <div className="absolute -inset-10 bg-[radial-gradient(500px_200px_at_50%_20%,rgba(230,57,70,0.10),transparent)]" />
                    <img src={selectedProduct.image} alt={selectedProduct.name} className="relative z-10 max-h-[78%] w-auto object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,0.15)]" />
                    <motion.div style={{ left: glare }} className="pointer-events-none absolute top:0 left-0 h-full w-[20%] bg-gradient-to-r from-transparent via-white/40 to-transparent" animate={{ left: ["-20%", "120%"] }} transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }} />
                  </motion.div>
                </div>

                {/* Details + CTA (no Quick Specs) */}
                <div className="lg:col-span-2 flex flex-col justify-between">
                  <div className="space-y-4">
                    <h2 className="text-xl sm:text-2xl text-[#E63946] font-[MaxOT]">{selectedProduct.heading}</h2>
                    <p className="font-[Roboto] text-sm sm:text-base mt-1">{selectedProduct.description}</p>

                    {/* Your chips */}
                    <div className="flex flex-wrap gap-2">
                      {pills.map((p, i) => (
                        <span key={i} className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium border border-[#E63946]/30 bg-white">
                          <Sparkles className="w-3.5 h-3.5 text-[#E63946]" />
                          {p.label}: <span className="text-gray-700">{p.value}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 flex items-center gap-3">
                    <a href={selectedProduct.link}>
                      <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center gap-2 bg-[#E63946] text-white font-semibold px-5 py-2.5 rounded-full shadow hover:bg-red-700">
                        Explore <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </a>
                    <div className="text-xs text-gray-500">Tip: Use the arrow keys to switch products.</div>
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
