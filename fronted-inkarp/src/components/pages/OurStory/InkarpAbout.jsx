import { FlaskConical, Microscope } from "lucide-react";
import MainImg from "/InkarpBuilding.jpg";
import InsetImg from "/InkarpBuilding.jpg";

export default function InkarpAbout({
  years = 40,
  // ⬇️ updated defaults (content lives in the component)
  titleTop = "India’s Trusted Partner in",
  titleBottom = "Laboratory, Process & Testing Solutions",
  eyebrow = "About Inkarp",
  body = `For 40+ years, Inkarp has partnered with global manufacturers to deliver reliable instruments, validated workflows, and compliant service across India. From installation and IQ/OQ/PQ to AMCs and application training, we help pharma, biotech, academia, and industry achieve accurate, repeatable results with higher uptime.`,
  featureA = "Analytical & QC ",
  featureB = "Chemical Research & Testing Equipment",
  mainImg = MainImg,
  insetImg = InsetImg,
}) {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 font-[Roboto]">
      {/* Vertical watermark */}
      <span className="hidden lg:block select-none pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 text-6xl font-extrabold tracking-wider text-slate-200/70 ">
        {years}+ Years
      </span>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 relative z-10">
        {/* LEFT: imagery block */}
        <div className="relative">
          <div
            className="absolute inset-0 -left-6 -top-6 -bottom-6 rounded-3xl bg-white/90 hidden md:block"
            style={{
              clipPath: "polygon(0 0, 85% 0, 70% 100%, 0% 100%)",
              boxShadow: "0 20px 60px rgba(15,23,42,.12)",
            }}
          />
          <div className="relative rounded-3xl overflow-hidden shadow-xl">
            <img
              src={mainImg}
              alt="Inkarp Lab"
              className="w-full h-[420px] sm:h-[520px] object-cover"
            />

            {/* circular inset image */}
            <div className="absolute -top-8 -left-8 w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden ring-4 ring-white shadow-xl">
              <img
                src={insetImg}
                alt="Research snapshot"
                className="w-full h-full object-cover"
              />
            </div>

            {/* rotated badge */}
            <div className="absolute bottom-8 right-8">
              <div className="w-28 h-28 sm:w-32 sm:h-32 bg-[#E63946] text-white rounded-2xl rotate-45 shadow-lg grid place-items-center">
                <div className="-rotate-45 text-center leading-tight font-bold">
                  <div className="text-[10px] sm:text-xs opacity-90">{years} Years</div>
                  <div className="text-[11px] sm:text-sm">Of Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: copy */}
        <div className="flex flex-col justify-center">
          {/* eyebrow */}
          <div className="flex items-center gap-2 text-sm font-semibold text-[#0B2A5B]">
            <span className="inline-block w-2 h-2 rounded-sm bg-[#E63946]" />
            {eyebrow}
          </div>

          {/* heading */}
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl leading-tight font-[MaxOT] text-[#0F172A]">
            <span className="block">{titleTop}</span>
            <span className="block">{titleBottom}</span>
          </h2>

          {/* body */}
          <p className="mt-5 text-slate-600 leading-7">
            {body}
          </p>

          {/* features */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
            <div className="flex items-center gap-3 py-4 pr-6">
              <FlaskConical className="w-8 h-8 text-[#E63946]" />
              <p className="font-semibold text-[#0F172A]">{featureA}</p>
            </div>
            <div className="flex items-center gap-3 py-4 pl-6">
              <Microscope className="w-8 h-8 text-[#E63946]" />
              <p className="font-semibold text-[#0F172A]">{featureB}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
