import React, { useState, useRef } from 'react';
import {
  Dna,
  FlaskConical,
  Microscope,
  GraduationCap,
  CheckCircle,
  PillBottle
} from 'lucide-react';
import { motion, useInView, useMotionValue, useTransform } from 'framer-motion';

import Pharma1 from '/src/assets/Industries/Pharma1.jpg';
import Bio from '/src/assets/Industries/Bio.jpg';
import Petro from '/src/assets/Industries/Petro.jpg';
import Diagno from '/src/assets/Industries/Diagno.jpg';
import Academic from '/src/assets/Industries/Academic.jpg';

const options = [
  {
    label: 'Pharmaceuticals',
    tagline: 'Tailored Solutions for You',
    description: 'We provide trusted consultation and precision instruments designed for:',
    icon: <PillBottle className="w-5 h-5 text-white" />,
    image: Pharma1,
    content: [
      'Streamlining R&D and manufacturing processes',
      'Regulatory compliance support',
      'Enhanced quality control solutions',
      'Scalable lab instrumentation'
    ]
  },
  {
    label: 'Biotechnology',
    tagline: 'Enabling Breakthrough Discoveries',
    description: 'Our solutions are designed to support biotech innovations from bench to scale-up:',
    icon: <Dna className="w-5 h-5 text-white" />,
    image: Bio,
    content: [
      'Advanced tools for molecular and cellular research',
      'Automated workflows to improve reproducibility',
      'Sterile and contamination-free processing systems',
      'Flexible instrumentation for genomics, proteomics, and bioengineering'
    ]
  },
  {
    label: 'Chemical and Petrochemical',
    tagline: 'Precision for Complex Chemistry',
    description: 'We provide reliable instruments engineered for challenging chemical environments:',
    icon: <FlaskConical className="w-5 h-5 text-white" />,
    image: Petro,
    content: [
      'Process optimization in synthesis and scale-up',
      'Real-time monitoring for hazardous and reactive compounds',
      'High-accuracy analytical instrumentation for QC/QA',
      'Durable solutions built for harsh lab conditions'
    ]
  },
  {
    label: 'Diagnostics',
    tagline: 'Reliable Tools for Accurate Detection',
    description: 'From sample prep to final analysis, our tools help improve diagnostics workflows:',
    icon: <Microscope className="w-5 h-5 text-white" />,
    image: Diagno,
    content: [
      'Precision instruments for clinical and molecular diagnostics',
      'High-sensitivity detection systems for critical testing',
      'Optimized sample handling for speed and consistency',
      'Compliance-ready systems for accredited labs'
    ]
  },
  {
    label: 'Academic and Research',
    tagline: 'Fueling Scientific Discovery',
    description: 'Empowering researchers and students with dependable, easy-to-use systems:',
    icon: <GraduationCap className="w-5 h-5 text-white" />,
    image: Academic,
    content: [
      'Modular and scalable lab equipment for teaching and discovery',
      'Safe and intuitive instrumentation for student labs',
      'Support for multidisciplinary research applications',
      'Cost-effective solutions for government and university labs'
    ]
  }
];

export default function WhyChooseUsSection() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  // Parallax background (on section)
  const sx = useMotionValue(0);
  const sy = useMotionValue(0);
  const parallaxX = useTransform(sx, [-60, 60], [-12, 12]);
  const parallaxY = useTransform(sy, [-60, 60], [-10, 10]);

  const onStageMove = (e) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    sx.set(Math.max(-60, Math.min(60, x / 4)));
    sy.set(Math.max(-60, Math.min(60, y / 4)));
  };
  const onStageLeave = () => {
    sx.set(0);
    sy.set(0);
  };

  // 3D tilt for the image card
  const cardRef = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useTransform(my, [-40, 40], [10, -10]);
  const ry = useTransform(mx, [-40, 40], [-10, 10]);
  const glare = useTransform(mx, [-40, 40], ['0%', '100%']);

  const onCardMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mx.set(Math.max(-40, Math.min(40, x / 6)));
    my.set(Math.max(-40, Math.min(40, y / 6)));
  };
  const onCardLeave = () => {
    mx.set(0); my.set(0);
  };

  const activeOption = options[active];

  return (
    <motion.section
      ref={sectionRef}
      onMouseMove={onStageMove}
      onMouseLeave={onStageLeave}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="relative  py-10 md:px-10 lg:px-20 w-[98%] mx-auto"
    >
      {/* Soft stage background (on-brand) */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(230,57,70,0.08),transparent),radial-gradient(1200px_600px_at_80%_110%,rgba(230,57,70,0.08),transparent)]" />

      {/* Parallax gradient orbs */}
      {/* <motion.div style={{ x: parallaxX, y: parallaxY }} className="pointer-events-none absolute -z-10 -left-12 top-12 h-44 w-44 rounded-full blur-3xl opacity-30 bg-gradient-to-tr from-[#BE0010] to-[#E63946]" /> */}
      <motion.div style={{ x: useTransform(parallaxX, v => -v), y: useTransform(parallaxY, v => -v) }} className="pointer-events-none absolute -z-10 right-6 bottom-0 h-52 w-52 rounded-full blur-3xl opacity-25 bg-gradient-to-tr from-[#E63946] to-[#BE0010]" />

      <div className="w-[98%] mx-auto">
        {/* Header */}
        <div className="text-center flex flex-col justify-center items-center gap-3">
          <span
            className="px-4 py-1 text-xs sm:text-sm font-[MaxOT] uppercase rounded-full bg-white"
            style={{
              borderImage: 'linear-gradient(90deg,#BE0010,#E63946) 1',
              borderWidth: 1,
              borderStyle: 'solid'
            }}
          >
            Industries We Serve
          </span>
          <h1 className="text-xl sm:text-2xl font-[MaxOT] text-[#e63946] leading-tight">
            Solutions Tailored to Your Industry
          </h1>
        </div>

        {/* Content frame with gradient border + glass */}
        <div className="mt-6 rounded-3xl p-[1.5px] ">
          {/* <div className="rounded-[20px] bg-white/70 backdrop-blur-xl border border-white/60 p-5 sm:p-6 lg:p-8"> */}
            <div className="flex flex-col lg:flex-row items-start gap-8">
              {/* LEFT – Options list */}
              <div className="w-full lg:w-1/3">
                <div className="flex flex-col gap-3">
                  {options.map((opt, index) => {
                    const isActive = active === index;
                    return (
                      <div key={index} className={isActive ? 'p-[1px] rounded-full bg-[linear-gradient(90deg,#BE0010,#E63946)]' : ''}>
                        <motion.button
                          whileHover={{ y: -2 }}
                          onClick={() => setActive(index)}
                          aria-pressed={isActive}
                          className={`flex items-center justify-between w-full px-4 py-2 rounded-full text-left text-base sm:text-lg transition-all duration-300 font-[MaxOT] border ${
                            isActive
                              ? 'bg-white text-[#E63946] border-transparent shadow-md'
                              : 'bg-[#F5F5F5] text-black border-gray-300 hover:border-[#E63946]/40 hover:bg-white'
                          }`}
                        >
                          {opt.label}
                          <span
                            className={`ml-3 w-8 h-8 flex items-center justify-center rounded-full ${
                              isActive ? 'bg-gradient-to-r from-[#BE0010] to-[#E63946]' : 'bg-[#333333] border border-gray-300'
                            }`}
                          >
                            {opt.icon}
                          </span>
                        </motion.button>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* MIDDLE – Image spotlight with 3D tilt */}
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45 }}
                className="w-full lg:w-[45%] flex justify-center items-center"
              >
                <div
                  ref={cardRef}
                  onMouseMove={onCardMove}
                  onMouseLeave={onCardLeave}
                  className="relative w-full rounded-2xl"
                >
                  <motion.div
                    style={{ rotateX: rx, rotateY: ry }}
                    className="relative w-full h-72 sm:h-80 rounded-2xl  flex items-center justify-center overflow-hidden "
                  >
                    <div className="absolute -inset-10 bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(230,57,70,0.08),transparent),radial-gradient(1200px_600px_at_80%_110%,rgba(230,57,70,0.08),transparent)]" />
                    <img
                      src={activeOption.image}
                      alt={activeOption.label}
                      className="relative z-10 h-full w-full object-cover rounded-2xl"
                    />
                    {/* moving glare */}
                    <motion.div
                      style={{ left: glare }}
                      className="pointer-events-none absolute top-0 left-0 h-full w-[18%] bg-gradient-to-r from-transparent via-white/40 to-transparent"
                      animate={{ left: ['-20%', '120%'] }}
                      transition={{ duration: 2.8, repeat: Infinity, ease: 'linear' }}
                    />
                  </motion.div>
                </div>
              </motion.div>

              {/* RIGHT – Description */}
              <motion.div
                key={active + '-desc'}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45 }}
                className="w-full lg:w-1/3"
              >
                <div className="relative">
                  {/* top accent line */}
                  <div className="absolute left-0 -top-2 h-1 w-24 rounded-full bg-gradient-to-r from-[#BE0010] to-[#E63946]" />
                </div>
                <h3 className="text-xl font-[MaxOT] font-semibold leading-snug mb-1">
                  {activeOption.tagline}
                </h3>
                <p className="mb-2 text-sm sm:text-base font-[Roboto] text-[#E63946]">
                  {activeOption.description}
                </p>
                <div className="space-y-2">
                  {activeOption.content.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="text-[#E63946] w-5 h-5 mt-0.5" />
                      <span className="text-[16px] text-black font-[Roboto]">{feat}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          {/* </div> */}
        </div>
      </div>
    </motion.section>
  );
}
