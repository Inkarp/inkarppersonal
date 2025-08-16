import React, { useRef, useEffect, useState } from "react";
import { ArrowBigRight, Award, Users, Building2, MapPin } from "lucide-react";
import Logo from "/inkarp.png";

// CountUp logic
function useCountUp(end, start = 0, duration = 1500, inView) {
  const [value, setValue] = useState(start);
  useEffect(() => {
    if (!inView) {
      setValue(start);
      return;
    }
    let frame;
    let startTime;
    function animateCount(ts) {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setValue(Math.floor(start + (end - start) * progress));
      if (progress < 1) {
        frame = requestAnimationFrame(animateCount);
      } else {
        setValue(end);
      }
    }
    frame = requestAnimationFrame(animateCount);
    return () => cancelAnimationFrame(frame);
  }, [end, start, duration, inView]);
  return value;
}

// In-view logic
function useInView(ref) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.5 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return inView;
}

// Stats Data (unchanged copy)
const statisticsData = [
  {
    icon: <Users className="w-6 h-6" />,
    number: 5000,
    plus: "+",
    label: "Customers",
    info: "Serving pharma, biotech, diagnostics, academia, and more.",
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    number: 50,
    plus: "+",
    label: "Brands",
    info: "Global leaders across instruments, automation, and workflows.",
  },
  {
    icon: <Award className="w-6 h-6" />,
    number: 10,
    plus: "+",
    label: "Awards",
    info: "Recognized for excellence in performance and customer satisfaction.",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    number: 12,
    plus: "+",
    label: "Branches",
    info: "Pan-India reach ensuring fast, localized support.",
  },
];

function StatCard({ icon, number, plus, label, info }) {
  const ref = useRef(null);
  const inView = useInView(ref);
  const value = useCountUp(number, 0, 1600, inView);

  return (
    <div className="relative flex items-center bg-white/90 backdrop-blur rounded-full p-1 pr-4 hover:scale-[1.015] transition-all duration-300 group border border-[#F5F5F5] shadow">
      <div className="w-14 h-14 flex items-center justify-center rounded-full text-white text-2xl ml-2 mr-4 shadow-md bg-[linear-gradient(90deg,#BE0010,#E63946)] group-hover:opacity-90 transition">
        {icon}
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-1">
          <span ref={ref} className="text-2xl font-bold font-[Roboto] text-black">
            {value}
          </span>
          <span className="text-[#E63946] ">{plus}</span>
        </div>
        <h3 className=" uppercase text-sm md:text-base text-[#E63946] tracking-wider font-[MaxOT]">
          {label}
        </h3>
        
        <p className="text-xs md:text-sm text-black/70 font-light leading-tight mt-1">
          {info}
        </p>
      </div>
    </div>
  );
}

export default function Sample() {
  return (
    <div className="relative w-[98%] mx-auto py-10 md:px-10 lg:px-20">
      {/* Soft stage background (on-brand) */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(230,57,70,0.08),transparent),radial-gradient(1200px_600px_at_80%_110%,rgba(230,57,70,0.08),transparent)]" />

      {/* Header – matches other sections */}
      <div className="text-center flex flex-col justify-center items-center gap-3">
        <span
          className="px-4 py-1 text-xs sm:text-sm font-[MaxOT] uppercase rounded-full bg-white"
          style={{
            borderImage: 'linear-gradient(90deg,#BE0010,#E63946) 1',
            borderWidth: 1,
            borderStyle: 'solid',
          }}
        >
          Who we are
        </span>
        <h1 className="text-xl sm:text-2xl font-[MaxOT] text-[#E63946] leading-tight text-center">
          We Will Ensure You Always Get the Best Results
        </h1>
      </div>

      {/* Content frame with gradient border + glass */}
      <div className="mt-6 rounded-3xl p-[1.5px]">
        {/* <div className="rounded-[20px] bg-white/70 backdrop-blur-xl border border-white/60 p-6"> */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {/* Left – Logo & button */}
            <div className="flex flex-col items-center justify-center w-full md:w-[45%] text-center">
              <img src={Logo} alt="Inkarp Logo" className="w-[70%] h-auto object-contain" />
              <button className="mt-6 px-6 py-2 rounded-full font-semibold shadow text-white font-[MaxOT] relative overflow-hidden">
                <span className="absolute inset-0 rounded-full bg-[linear-gradient(90deg,#BE0010,#E63946)]" />
                <span className="relative z-10 inline-flex items-center gap-2 text-sm">
                  Know More <ArrowBigRight className="w-5 h-5" />
                </span>
              </button>
            </div>

            {/* Divider – vertical dots on a red line */}
            <div className="hidden md:flex flex-col items-center justify-between h-[400px] mx-6 relative">
              <div className="absolute w-1 bg-[#E63946] h-full left-1/2 -translate-x-1/2 rounded-full z-0" />
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-4 h-4 rounded-full border-4 border-white z-10 shadow-md bg-[#E63946]" />
              ))}
            </div>

            {/* Right – Stats */}
            <div className="flex flex-col gap-6 w-full md:w-[40%]">
              {statisticsData.map((stat, i) => (
                <StatCard key={i} {...stat} />
              ))}
            </div>
          </div>
        {/* </div> */}
      </div>
    </div>
  );
}
