import React from "react";
import { Target, Eye, Gem } from "lucide-react";
import { Fade } from "react-awesome-reveal";

export default function MissionVision() {
  return (
    <section className="relative w-[98%] mx-auto py-10 md:px-10 lg:px-20">
      {/* On-brand soft stage background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(230,57,70,0.08),transparent),radial-gradient(1200px_600px_at_80%_110%,rgba(230,57,70,0.08),transparent)]" />

      {/* Section Header */}
      <Fade direction="down" triggerOnce>
        <div className="text-center flex flex-col items-center justify-center max-w-3xl mx-auto gap-3">
          <span
            className="px-4 py-1 text-xs sm:text-sm font-[MaxOT] uppercase rounded-full bg-white"
            style={{
              borderImage: "linear-gradient(90deg,#BE0010,#E63946) 1",
              borderWidth: 1,
              borderStyle: "solid",
            }}
          >
            Who Are We
          </span>

          <h1 className="text-xl sm:text-2xl font-[MaxOT] text-[#E63946] leading-tight">
            Our Purpose <span className="font-[Roboto]">&</span> Principles
          </h1>

          <p className="text-sm sm:text-base font-[Roboto] text-black/80">
            With over four decades of experience, we partner with global leaders to empower research,
            diagnostics, and industry through reliable, precise instrumentation and personalized support.
          </p>
        </div>
      </Fade>

      {/* Cards */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Mission */}
        <Fade direction="left" triggerOnce delay={150}>
          <article className="relative bg-white/75 backdrop-blur rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition h-full">

            <div className="p-6 sm:p-8 flex flex-col items-center text-center">
              <div className="mb-5 rounded-full p-3 sm:p-4 bg-gradient-to-r from-[#BE0010] to-[#E63946]">
                <Target className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="font-[MaxOT] text-lg sm:text-xl text-[#1b254b] mb-2">Our Mission</h3>
              <p className="font-[Roboto] text-sm sm:text-base text-gray-700 leading-relaxed">
                To empower scientific progress across India by delivering cutting-edge instruments,
                responsive support, and trusted expertise in every partnership.
              </p>
            </div>
          </article>
        </Fade>

        {/* Vision (center – slightly elevated) */}
        <Fade direction="up" triggerOnce>
          <article className="relative bg-white/80 backdrop-blur rounded-3xl border border-gray-200 shadow-md lg:scale-[1.03] h-full">
            <div className="p-6 sm:p-8 flex flex-col items-center text-center">
              <div className="mb-5 rounded-full p-3 sm:p-4 bg-gradient-to-r from-[#BE0010] to-[#E63946]">
                <Eye className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="font-[MaxOT] text-lg sm:text-xl text-[#1b254b] mb-2">Our Vision</h3>
              <p className="font-[Roboto] text-sm sm:text-base text-gray-700 leading-relaxed">
                To be India’s most trusted and innovative scientific solutions partner, enabling discovery,
                development, and diagnostics with excellence and integrity.
              </p>
            </div>
          </article>
        </Fade>

        {/* Core Values */}
        <Fade direction="right" triggerOnce delay={150}>
          <article className="relative bg-white/75 backdrop-blur rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition h-full">
            <div className="p-6 sm:p-8 flex flex-col items-center text-center">
              <div className="mb-5 rounded-full p-3 sm:p-4 bg-gradient-to-r from-[#BE0010] to-[#E63946]">
                <Gem className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="font-[MaxOT] text-lg sm:text-xl text-[#1b254b] mb-2">Our Core Values</h3>
              <p className="font-[Roboto] text-sm sm:text-base text-gray-700 leading-relaxed">
                Integrity, innovation, and customer-first thinking guide everything we do—building trust and
                delivering long-term impact across the scientific community.
              </p>
            </div>
          </article>
        </Fade>
      </div>
    </section>
  );
}
