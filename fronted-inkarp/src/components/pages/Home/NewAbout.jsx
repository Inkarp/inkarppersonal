import React from "react";
import DroppingText from "./DroppingText";

import GroupLogo3 from "/src/assets/Logos/GroupLogo.png";
import Spark from "/Spark.svg";
import InkarpTelecom from "/InkarpTelecom.svg";
import InkarpServices from "/InkarpServices.svg";
import Verder from "/Verder.svg";
import Advion from "/src/assets/PrincipalLogos/RowOne/advion.png";

export default function NewAbout() {
  return (
    <section className="relative w-[98%] mx-auto py-10 md:px-10 lg:px-20">
      {/* soft brand background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(230,57,70,0.08),transparent),radial-gradient(1200px_600px_at_80%_110%,rgba(230,57,70,0.08),transparent)]" />

      {/* headings */}
      <div className="text-center flex flex-col justify-center items-center gap-3 mb-6">
        <span
          className="px-4 py-1 text-xs sm:text-sm font-[MaxOT] uppercase rounded-full bg-white"
          style={{
            borderImage: "linear-gradient(90deg,#BE0010,#E63946) 1",
            borderWidth: 1,
            borderStyle: "solid",
          }}
        >
          Our Group Companies & Collaborations
        </span>
        <h3 className="font-[MaxOT] text-center text-xl text-[#E63946] leading-tight">
          At INKARP, innovation is at the core of everything we do.
        </h3>
        <p className="text-sm sm:text-base text-center font-[Roboto] text-black/80">
          Explore our subsidiaries and joint ventures that drive our shared vision forward.
        </p>
        <DroppingText />
      </div>

      {/* layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* LEFT: brand story / hero */}
        {/* <div className="lg:col-span-4">
          <div className="bg-white/70 backdrop-blur rounded-3xl border border-gray-200 shadow-sm p-6 h-full flex flex-col items-center justify-center text-center">
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-2xl bg-white border border-gray-200 shadow-inner mb-4 overflow-hidden">
              <div className="absolute left-0 right-0 top-0 h-[3px] bg-gradient-to-r from-[#BE0010] to-[#E63946]" />
              <img
                src={GroupLogo3}
                alt="INKARP Group"
                className="w-full h-full object-contain p-4"
              />
            </div>

            <DroppingText />

            <p className="mt-3 text-sm sm:text-base font-[Roboto] text-black/80">
              Strong foundations, stronger alliances — built for scale, service, and science.
            </p>
          </div>
        </div> */}

        {/* RIGHT: cards */}
        <div className="lg:col-span-8 space-y-6">
          {/* Subsidiaries */}
          <div className="relative  backdrop-blur rounded-3xl border border-gray-200 shadow-sm p-6">
            
            <div className="flex items-center justify-center mb-4">
              <span
                className="px-4 py-1 text-xs sm:text-sm font-[Roboto] uppercase rounded-full bg-white"
               
              >
                100% Owned Subsidiaries
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {[{ src: Spark, alt: "Spark" }, { src: InkarpTelecom, alt: "Inkarp Telecom" }, { src: InkarpServices, alt: "Inkarp Services" }].map(
                (logo, i) => (
                  <div
                    key={`sub-${i}`}
                    className="group bg-white rounded-2xl border border-gray-200 p-4 flex items-center justify-center shadow-sm hover:shadow-md hover:border-[#E63946]/50 transition"
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="w-28 h-16 object-contain group-hover:scale-105 transition"
                    />
                  </div>
                )
              )}
            </div>
          </div>

          {/* Joint Ventures */}
          <div className="relative  rounded-3xl border border-gray-200 shadow-sm p-6">
            <div className="flex items-center justify-center mb-4">
              <span
                className="px-4 py-1 text-xs sm:text-sm font-[Roboto] uppercase rounded-full bg-white"
               
              >
                Joint Ventures
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {[{ src: Verder, alt: "Verder JV" }, { src: Advion, alt: "Advion JV" }].map(
                (logo, i) => (
                  <div
                    key={`jv-${i}`}
                    className="group bg-white rounded-2xl border border-gray-200 p-4 flex items-center justify-center shadow-sm hover:shadow-md hover:border-[#E63946]/50 transition"
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="w-28 h-16 object-contain group-hover:scale-105 transition"
                    />
                  </div>
                )
              )}
              {/* spacer to balance grid on 3-cols */}
              <div className="hidden sm:block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
