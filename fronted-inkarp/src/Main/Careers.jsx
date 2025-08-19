import React, { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import CareersKeka from "../components/pages/Careers/CareersKeka";
import CareersKekaNew from "../components/pages/Careers/CareersKekaNew";

const team = [
  { name: "Raj Kumar", quote: "Inkarp isn’t just a workplace — it’s where passion meets purpose.", img: "https://source.unsplash.com/featured/?portrait,business" },
  { name: "Sneha Iyer", quote: "You’re encouraged to grow — not just in role, but in vision.", img: "https://source.unsplash.com/featured/?woman,leader" },
  { name: "Aarav Menon", quote: "Ownership, learning, and impact are part of everyday work.", img: "https://source.unsplash.com/featured/?man,leader" },
  { name: "Riya Sharma", quote: "A culture that listens, trusts, and enables you to do your best work.", img: "https://source.unsplash.com/featured/?woman,engineer" },
  { name: "Karthik Rao", quote: "We celebrate ideas and encourage experimentation.", img: "https://source.unsplash.com/featured/?man,professional" },
  { name: "Meera Gupta", quote: "Growth here isn’t a buzzword—it’s a roadmap.", img: "https://source.unsplash.com/featured/?business,woman" },
];

const steps = [
  { title: "Discover", desc: "Explore roles that match your passion." },
  { title: "Apply", desc: "Send in your resume or drop a message." },
  { title: "Connect", desc: "Have a conversation with our team." },
  { title: "Grow", desc: "Start your journey with Inkarp." },
];

export default function CareersV2() {
  // slides per view — responsive & updates on resize
  const getSPV = () => {
    if (typeof window === "undefined") return 2;
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };

  const [spv, setSpv] = useState(getSPV());
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const onResize = () => setSpv(getSPV());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // autoplay respecting spv
  useEffect(() => {
    const t = setInterval(() => {
      setIndex((p) => (p + spv) % team.length);
    }, 5000);
    return () => clearInterval(t);
  }, [spv]);

  const visibleTeam = useMemo(
    () => Array.from({ length: spv }).map((_, k) => team[(index + k) % team.length]),
    [index, spv]
  );

  const totalDots = Math.ceil(team.length / spv);
  const activeDot = Math.floor(index / spv) % totalDots;

  return (
    <div className="w-[98%] mx-auto ">
      <Helmet>
        <title>Careers — Inkarp Instruments</title>
        <meta
          name="description"
          content="Build your career at Inkarp. Join a team where learning, ownership, and impact define growth."
        />
        <meta name="keywords" content="Inkarp Careers, Jobs, Hiring, Instruments, Innovation" />
      </Helmet>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_80%_-10%,rgba(230,57,70,0.08),transparent)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 relative">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left copy */}
            <div className="flex flex-col justify-center items-start gap-4">
              <h1 className="mt-5 text-4xl  text-[#E63946] font-bold font-[MaxOT] leading-tight">
                We are hiring
              </h1>
              <h1 className="mt-5 text-2xl md:text-2xl font-[MaxOT]  leading-tight ">
                Do the most meaningful work of your career at{" "}
                <span className="text-[#E63946] ">INKARP</span>
              </h1>
              {/* <p className="mt-4 text-gray-700 text-lg font-[Roboto]">
                We hire for potential, not just positions. If you love solving real problems and learning fast, you’ll feel at home.
              </p> */}
            </div>

            {/* Right: testimonials (themed, responsive, auto-advance) */}
            <div className="p-5 bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="flex justify-center">
                <span
                  className="px-4 py-1 text-xs md:text-sm font-[MaxOT] font-semibold uppercase rounded-full bg-white"
                  style={{
                    borderImage: "linear-gradient(90deg,#BE0010,#E63946) 1",
                    borderWidth: 1,
                    borderStyle: "solid",
                  }}
                >
                  What Our Team Says
                </span>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:[&>div:nth-child(n+3)]:hidden">
                {visibleTeam.map((m, k) => (
                  <div
                    key={`${m.name}-${k}`}
                    className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition hover:-translate-y-0.5"
                    style={{ transform: `rotate(${k === 1 ? 0.2 : k === 2 ? -0.2 : 0}deg)` }}
                  >
                    <div className="flex items-center gap-4">
                      <h4 className="text-[#E63946] font-[MaxOT]">{m.name}</h4>
                    </div>
                    <p className="mt-4 text-gray-800 italic font-[Roboto]">“{m.quote}”</p>
                  </div>
                ))}
              </div>

              {/* Dots */}
              <div className="mt-5  sm:hidden justify-center gap-2">
                {Array.from({ length: totalDots }).map((_, d) => (
                  <span
                    key={d}
                    className={`h-2 w-2 rounded-full ${activeDot === d ? "bg-[#E63946]" : "bg-gray-300"}`}
                  />
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="roles" className="px-4 sm:px-6 lg:px-8 py-10">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_80%_-10%,rgba(230,57,70,0.08),transparent)]" />
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-[MaxOT] text-[#E63946] text-center">
            Your journey with us
          </h2>

          <div className="mt-10 relative">
            <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-[#E63946]/20 rounded" />
            <div className="space-y-8">
              {steps.map((s, idx) => (
                <div key={idx} className={`relative flex ${idx % 2 ? "sm:justify-end" : ""}`}>
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 -top-1 w-6 h-6 rounded-full bg-white border-2 border-[#E63946]" />
                  <div className="w-full sm:w-[46%] rounded-xl bg-[#F5F5F5] border-l-4 border-[#E63946] p-5 shadow-sm">
                    <h3 className="text-lg font-semibold text-[#E63946] font-[MaxOT]">{s.title}</h3>
                    <p className="text-gray-700 mt-1 font-[Roboto]">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* THEMED KEKA JOBS */}
      <CareersKeka />
      {/* <CareersKekaNew /> */}

      {/* FOOT CTA */}
      <section className="px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-6xl mx-auto rounded-2xl bg-[#E63946] text-white p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-xl md:text-2xl font-[MaxOT]">Don’t see a perfect role?</h4>
            <p className="text-white/90 font-[Roboto]">
              We always welcome exceptional talent. Share your profile with us.
            </p>
          </div>
          <Link
            to="/careers/send-resume"
            className="inline-flex items-center gap-2 bg-white text-[#E63946] px-5 py-2.5 rounded-full font-medium hover:bg-white/90 transition"
          >
            Send your resume <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
