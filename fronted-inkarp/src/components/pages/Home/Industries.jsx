import React, { useState, useRef } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import {
  Dna,
  FlaskConical,
  Microscope,
  GraduationCap,
  CheckCircle,
  PillBottle,
} from "lucide-react";

import Pharma1 from "/src/assets/Industries/Pharma1.jpg";
import Bio from "/src/assets/Industries/Bio.jpg";
import Petro from "/src/assets/Industries/Petro.jpg";
import Diagno from "/src/assets/Industries/Diagno.jpg";
import Academic from "/src/assets/Industries/Academic.jpg";

const options = [
  {
    label: "Pharmaceuticals",
    tagline: "Tailored Solutions for You",
    description:
      "We provide trusted consultation and precision instruments designed for:",
    icon: <PillBottle className="w-4 h-4 text-white" />,
    image: Pharma1,
    content: [
      "Streamlining R&D and manufacturing processes",
      "Regulatory compliance support",
      "Enhanced quality control solutions",
      "Scalable lab instrumentation",
    ],
  },
  {
    label: "Biotechnology",
    tagline: "Enabling Breakthrough Discoveries",
    description:
      "Our solutions are designed to support biotech innovations from bench to scale-up:",
    icon: <Dna className="w-4 h-4 text-white" />,
    image: Bio,
    content: [
      "Advanced tools for molecular and cellular research",
      "Automated workflows to improve reproducibility",
      "Sterile and contamination-free processing systems",
      "Flexible instrumentation for genomics, proteomics, and bioengineering",
    ],
  },
  {
    label: "Chemical and Petrochemical",
    tagline: "Precision for Complex Chemistry",
    description:
      "We provide reliable instruments engineered for challenging chemical environments:",
    icon: <FlaskConical className="w-4 h-4 text-white" />,
    image: Petro,
    content: [
      "Process optimization in synthesis and scale-up",
      "Real-time monitoring for hazardous and reactive compounds",
      "High-accuracy analytical instrumentation for QC/QA",
      "Durable solutions built for harsh lab conditions",
    ],
  },
  {
    label: "Diagnostics",
    tagline: "Reliable Tools for Accurate Detection",
    description:
      "From sample prep to final analysis, our tools help improve diagnostics workflows:",
    icon: <Microscope className="w-4 h-4 text-white" />,
    image: Diagno,
    content: [
      "Precision instruments for clinical and molecular diagnostics",
      "High-sensitivity detection systems for critical testing",
      "Optimized sample handling for speed and consistency",
      "Compliance-ready systems for accredited labs",
    ],
  },
  {
    label: "Academic and Research",
    tagline: "Fueling Scientific Discovery",
    description:
      "Empowering researchers and students with dependable, easy-to-use systems:",
    icon: <GraduationCap className="w-4 h-4 text-white" />,
    image: Academic,
    content: [
      "Modular and scalable lab equipment for teaching and discovery",
      "Safe and intuitive instrumentation for student labs",
      "Support for multidisciplinary research applications",
      "Cost-effective solutions for government and university labs",
    ],
  },
];

export default function Industries() {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const activeOption = options[active];

  return (
    <section ref={ref} className="relative min-h-[75vh] w-full overflow-hidden">
      {/* Full-bleed crossfading background */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeOption.image}
            src={activeOption.image}
            alt={activeOption.label}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="h-full w-full object-cover"
          />
        </AnimatePresence>
        {/* Soft readable overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-black/55" />
      </div>

      {/* Header */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <span className="inline-block px-4 py-1 text-[11px] sm:text-xs font-semibold uppercase tracking-wide border border-white/40 text-white rounded-full">
            Industries We Serve
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-[MaxOT] text-white">
            Solutions Tailored to Your Industry
          </h2>
        </motion.div>
      </div>

      {/* Floating glass layout */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* LEFT: Glass selector */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 p-3 sm:p-4 shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
              {/* Mobile chips (scrollable) */}
              <div className="flex lg:hidden gap-2 overflow-x-auto pb-1">
                {options.map((opt, i) => {
                  const activeChip = i === active;
                  return (
                    <button
                      key={opt.label}
                      onClick={() => setActive(i)}
                      className={`whitespace-nowrap px-3 py-1.5 rounded-full text-sm border transition
                        ${
                          activeChip
                            ? "bg-white text-[#E63946] border-white"
                            : "bg-white/10 text-white border-white/30 hover:bg-white/20"
                        }`}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>

              {/* Desktop list */}
              <div className="hidden lg:block">
                <ul className="space-y-2">
                  {options.map((opt, i) => {
                    const isActive = i === active;
                    return (
                      <button
                        key={opt.label}
                        onClick={() => setActive(i)}
                        className={`w-full text-left px-4 py-3 rounded-xl border transition group
                          ${
                            isActive
                              ? "bg-white text-[#E63946] border-white"
                              : "bg-white/10 text-white border-white/20 hover:bg-white/20"
                          }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-[MaxOT] text-sm sm:text-base">{opt.label}</span>
                          <span
                            className={`inline-flex h-8 w-8 items-center justify-center rounded-full
                              ${isActive ? "bg-[#E63946] text-white" : "bg-white/20 text-white"}`}
                          >
                            {/* use provided icon instance */}
                            {opt.icon}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Compact details drawer */}
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-7"
          >
            <div className="rounded-2xl bg-white/85 backdrop-blur-md border border-white shadow-[0_10px_40px_rgba(0,0,0,0.2)] p-5 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                <h3 className="text-lg sm:text-xl font-[MaxOT] text-[#111]">
                  {activeOption.tagline}
                </h3>
                <span className="inline-block px-2.5 py-1 text-[11px] rounded-full bg-[#E63946]/10 text-[#E63946] border border-[#E63946]/20">
                  {activeOption.label}
                </span>
              </div>

              <p className="text-sm text-[#E63946] font-[Roboto] mb-3">
                {activeOption.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeOption.content.map((line, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle className="text-[#E63946] w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="text-[15px] text-gray-900 font-[Roboto] leading-relaxed">
                      {line}
                    </span>
                  </div>
                ))}
              </div>

              {/* tiny helper */}
              <div className="mt-4 text-xs text-gray-500">
                Tip: On mobile, swipe the chips; on desktop, click a card to switch industry.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
