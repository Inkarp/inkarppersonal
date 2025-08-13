import React, { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import { ArrowRight, CheckCircle2, ChevronRight, Sparkles } from "lucide-react";
import NewCareers from "../components/pages/Careers/NewCareers";
import CareersForm from "../components/pages/Careers/CareersForm";

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

const perks = [
  "Learning budget & certifications",
  "Mentorship & growth roadmap",
  "Flexible work culture",
  "Impactful, cross-functional projects",
  "Recognition programs",
  "Health & wellbeing support",
];

export default function CareersV2() {
  const [i, setI] = useState(0);
  const visible = useMemo(() => (typeof window === "undefined" ? 2 : window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1), []);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + visible) % team.length), 5000);
    return () => clearInterval(t);
  }, [visible]);

  const visibleTeam = Array.from({ length: visible }).map((_, k) => team[(i + k) % team.length]);

  return (
    <div className="w-full">
      <Helmet>
        <title>Careers — Inkarp Instruments</title>
        <meta name="description" content="Build your career at Inkarp. Join a team where learning, ownership, and impact define growth." />
        <meta name="keywords" content="Inkarp Careers, Jobs, Hiring, Instruments, Innovation" />
      </Helmet>

      {/* HERO - asymmetric split with glass card */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_-10%,#fde7ea,transparent)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 relative">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left copy */}
            <div>
              <span className="inline-block px-3 py-1 text-xs font-semibold border border-[#E63946] rounded-full">We’re hiring</span>
              <h1 className="mt-5 text-4xl md:text-5xl font-[MaxOT] font-bold leading-tight text-gray-900">
                Do the most meaningful work of your career at <span className="text-[#E63946]">INKARP</span>.
              </h1>
              <p className="mt-4 text-gray-700 text-lg">
                We hire for potential, not just positions. If you love solving real problems and learning fast, you’ll feel at home.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#roles" className="inline-flex items-center gap-2 rounded-full bg-[#E63946] text-white px-5 py-2.5 text-sm shadow hover:bg-red-600 transition">
                  Explore roles <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#apply" className="inline-flex items-center gap-2 rounded-full border border-[#E63946] text-[#E63946] px-5 py-2.5 text-sm hover:bg-[#E63946]/10 transition">
                  Refer a friend
                </a>
              </div>

              {/* Perks chips */}
              <div className="mt-6 flex flex-wrap gap-2">
                {perks.slice(0, 4).map((p) => (
                  <span key={p} className="px-3 py-1 rounded-full bg-white border text-sm text-gray-800">{p}</span>
                ))}
              </div>
            </div>

            {/* Right visual card */}
            {/* <div className="relative">
              <div className="absolute -inset-6 -z-10 bg-[conic-gradient(from_180deg_at_50%_50%,#ffd1d6,#ffffff,#ffd1d6)] blur-2xl opacity-60 rounded-3xl" />
              <div className="rounded-3xl bg-white/70 backdrop-blur-xl ring-1 ring-black/5 p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                <div className="grid grid-cols-3 gap-3">
                  {["https://source.unsplash.com/400x400/?lab,team","https://source.unsplash.com/400x400/?technology","https://source.unsplash.com/400x400/?research","https://source.unsplash.com/400x400/?scientist","https://source.unsplash.com/400x400/?instrument","https://source.unsplash.com/400x400/?innovation"].map((src, k) => (
                    <img key={k} src={src} alt="Inkarp" className="rounded-xl aspect-square object-cover" />
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-2 text-[#E63946]">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-medium">Innovation • Trust • Impact</span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* PROCESS - vertical timeline */}
      <section id="roles" className="px-4 sm:px-6 lg:px-8 py-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-[MaxOT] text-[#E63946] text-center">Your journey with us</h2>
          <div className="mt-10 relative">
            <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-[#E63946]/20 rounded"></div>
            <div className="space-y-8">
              {steps.map((s, idx) => (
                <div key={idx} className={`relative flex ${idx % 2 ? "sm:justify-end" : ""}`}>
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 -top-1 w-6 h-6 rounded-full bg-white border-2 border-[#E63946]"></div>
                  <div className="w-full sm:w-[46%] rounded-xl bg-[#F5F5F5] border-l-4 border-[#E63946] p-5 shadow-sm">
                    <h3 className="text-lg font-semibold text-[#E63946]">{s.title}</h3>
                    <p className="text-gray-700 mt-1">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INSERT YOUR EXISTING MID-SECTION */}
      <NewCareers />

      {/* TESTIMONIAL MOSAIC / CAROUSEL HYBRID */}
      <section className="px-4 sm:px-6 lg:px-8 py-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center">
            <span className="px-4 py-1 text-xs md:text-sm font-[MaxOT] font-semibold uppercase border border-[#E63946] text-black rounded-full">
              What Our Team Says 🎧
            </span>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleTeam.map((m, k) => (
              <div
                key={k}
                className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition hover:-translate-y-0.5"
                style={{ transform: `rotate(${k === 1 ? 0.2 : k === 2 ? -0.2 : 0}deg)` }}
              >
                <div className="flex items-center gap-4">
                  <img src={m.img} alt={m.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-[#E63946]/20" />
                  <div>
                    <p className="text-sm text-gray-500">Team Member</p>
                    <h4 className="text-[#E63946] font-[MaxOT]">{m.name}</h4>
                  </div>
                </div>
                <p className="mt-4 text-gray-800 italic">“{m.quote}”</p>
              </div>
            ))}
          </div>

          {/* Tiny dots */}
          <div className="mt-6 flex justify-center gap-2">
            {Array.from({ length: Math.ceil(team.length / visible) }).map((_, d) => {
              const active = Math.floor(i / visible) === d;
              return <span key={d} className={`h-2 w-2 rounded-full ${active ? "bg-[#E63946]" : "bg-gray-300"}`} />;
            })}
          </div>
        </div>
      </section>

      {/* PERKS LIST */}
      {/* <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto rounded-3xl bg-[#F5F5F5] p-6 md:p-10 ring-1 ring-black/5">
          <h3 className="text-2xl md:text-3xl font-[MaxOT] text-[#E63946] text-center">Why you’ll love working here</h3>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {perks.map((p) => (
              <div key={p} className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-[#E63946] mt-0.5" />
                <p className="text-gray-800">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* APPLY FORM */}
      <section id="apply" className="px-4 sm:px-6 lg:px-8 pb-14">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl bg-white border border-gray-100 shadow-sm overflow-hidden">
            <div className="bg-[radial-gradient(800px_400px_at_20%_-10%,#fde7ea,transparent)] px-6 md:px-10 py-8">
              <h3 className="text-2xl md:text-3xl font-[MaxOT] text-gray-900">
                Ready to grow your career with <span className="text-[#E63946]">INKARP</span>?
              </h3>
              <p className="text-gray-700 mt-1">
                Tell us about yourself—our team will get back to you soon.
              </p>
            </div>
            <div className="p-6 md:p-10">
              <CareersForm />
            </div>
          </div>
        </div>
      </section>

      {/* FOOT CTA STRIP */}
      <section className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-6xl mx-auto rounded-2xl bg-[#E63946] text-white p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-xl md:text-2xl font-[MaxOT]">Don’t see a perfect role?</h4>
            <p className="text-white/90">We always welcome exceptional talent. Share your profile with us.</p>
          </div>
          <a href="#apply" className="inline-flex items-center gap-2 bg-white text-[#E63946] px-5 py-2.5 rounded-full font-medium hover:bg-white/90 transition">
            Send your resume <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
