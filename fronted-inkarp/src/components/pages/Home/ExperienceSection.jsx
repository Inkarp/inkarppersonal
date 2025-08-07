import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "/40-years-logo.png";
import inkarp from "/inkarp.png";
import { Users, Building2, Award, MapPin } from "lucide-react";

export default function ExperienceSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "With 40+ Years of Scientific Excellence";
  const typingSpeed = 40;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  useEffect(() => {
    if (visible && typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }
  }, [visible, typedText]);

  const stats = [
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "5000 +",
      subtitle: "Customers",
      description: "Serving pharma, biotech, diagnostics, academia, and more."
    },
    {
      icon: <Building2 className="w-8 h-8 text-white" />,
      title: "50 +",
      subtitle: "Brands",
      description: "Global leaders across instruments, automation, and workflows."
    },
    {
      icon: <Award className="w-8 h-8 text-white" />,
      title: "10 +",
      subtitle: "Awards",
      description: "Recognized for excellence in performance and customer satisfaction."
    },
    {
      icon: <MapPin className="w-6 h-6 text-white" />,
      title: "12 +",
      subtitle: "Branches",
      description: "Pan-India reach ensuring fast, localized support."
    }
  ];

  return (
    <section
      ref={sectionRef}
      className={`relative bg-center text-white px-4 sm:px-6 md:px-10 transition-opacity duration-1000 ${visible ? "opacity-100" : "opacity-50"
        }`}
    >
      <div className="text-center py-3 flex flex-col items-center justify-center gap-3">
        <h4 className="px-4 py-1 text-center text-sm font-[MaxOT] font-semibold uppercase border border-[#E63946] text-black rounded-full ">
          Who are we
        </h4>
        <h1 className="text-3xl text-[#E63946] font-[MaxOT] leading-tight">
          We'll Ensure You Always get the Best Results
        </h1>
      </div>

      {/* Blinking cursor style */}
      <style>{`
        .cursor {
          animation: blink 0.7s infinite;
          vertical-align: bottom;
        }
        @keyframes blink {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
      `}</style>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 bg-black p-6 rounded-2xl">
        {/* Left Column */}
        <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
          <div className="w-full flex justify-center lg:justify-start">
            <img
              src={Logo}
              alt="Inkarp 40 years Logo"
              className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px] h-auto object-contain p-2 rounded-lg"
            />
          </div>
          <Link to="/about">
            <button
              className={`ml-5 bg-white hover:bg-[#E63946] text-black hover:text-white px-6 py-2 rounded-full font-semibold shadow transition ${visible ? "bounce-right" : "opacity-0"
                }`}
            >
              Know More
            </button>
          </Link>
        </div>

        {/* Right Column - Stats */}
        <div
          className={`w-full lg:w-3/5 grid grid-cols-2 sm:grid-cols-2 gap-4 md:gap-6 ${visible ? "text-focus-in" : "opacity-0"
            }`}
        >
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              title={stat.title}
              subtitle={stat.subtitle}
              description={stat.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Reusable Stat Card with Lucide Icon
function StatCard({ icon, title, subtitle, description }) {
  return (
    <div className="bg-white/10 backdrop-blur-md p-4 sm:p-5 rounded-xl flex flex-col items-center justify-cenetr transition-all duration-300 hover:scale-105 border border-white">
      {/* Row: Icon + Title & Subtitle */}
      <div className="flex items-center gap-4 mb-3">
        {/* Icon */}
        <div className="w-14 h-14 flex items-center justify-center bg-[#E63946] rounded-full shadow-lg">
          {icon}
        </div>

        {/* Title & Subtitle */}
        <div className="text-left">
          <h3 className="text-3xl font-bold text-[#E63946] font-[MaxOT] leading-none">
            {title}
          </h3>
          <p className="text-lg sm:text-xl font-semibold text-white mt-1 font-[MaxOT]">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm sm:text-base text-center text-white leading-relaxed font-[Roboto]">
        {description}
      </p>
    </div>
  );
}
