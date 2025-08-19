import { Link } from "react-router-dom";

import Synthesis from '/src/assets/Offerings/Synthesis.jpg';
import Chromato from '/src/assets/Offerings/Chromatography.jpg';
import Weighing from '/src/assets/Offerings/Weighing.jpg';
import Material from '/src/assets/Offerings/Material.jpg';
import PilotPlants from '/src/assets/Offerings/PilotPlants.jpg';
import Lifescience from '/src/assets/Offerings/Lifescience.jpg';
import Hemo from '/src/assets/Offerings/Hemo.jpg';
import Thermal from '/src/assets/Offerings/Thermal.jpg';
import General from '/src/assets/Offerings/General.jpg';

import SynthesisIcon from '/src/assets/Icons/Synthesis.png';
import ChromatographyIcon from '/src/assets/Icons/Chromatography.png';
import ChemistryIcon from '/src/assets/Icons/Chemistry.png';
import BatteryIcon from '/src/assets/Icons/Battery.png';
import ExtrusionIcon from '/src/assets/Icons/Extrusion.png';
import ThermalIcon from '/src/assets/Icons/Thermal.png';
import GeneralIcon from '/src/assets/Icons/General.png';
import PilotIcon from '/src/assets/Icons/Pilot.png';
import LifeIcon from '/src/assets/Icons/Life.png';

const profiles = [
  { name: "Synthesis and Flow Chemistry", description: "Innovating scalable synthesis pathways and continuous flow technologies for precise, efficient chemical development.", link: "/verticals/synthesis-and-flow-chemistry", image: Synthesis, icon: SynthesisIcon, socials: { whatsapp: "https://wa.me/918019828999" }, },
  { name: "Analytical and Chromatography Solutions", link: "/verticals/analytical-and-chromatography-solutions", description: "Delivering precise analytical instrumentation to ensure peak resolution and unmatched data reproducibility.", image: Chromato, icon: ChromatographyIcon, socials: { whatsapp: "https://wa.me/918019828999" }, },
  { name: "Analytical Chemistry and Weighing", link: "/verticals/analytical-chemistry-and-weighing", description: "Delivering precise analytical instrumentation to ensure peak resolution and unmatched data reproducibility.", image: Weighing, icon: ChemistryIcon, socials: { whatsapp: "https://wa.me/918019828999" }, },
  { name: "Material Science and Battery Research", link: "/verticals/material-science-and-battery", description: "Advanced material characterization and thermal analysis tools for energy storage, semiconductors, and polymers.", image: Material, icon: BatteryIcon, socials: { whatsapp: "https://wa.me/918019828999" }, },
  { name: "Pilot Plants and Automation", link: "/verticals/pilot-plants-and-automation", description: "Designing and implementing pilot-scale automation for chemical and pharmaceutical scale-ups.", image: PilotPlants, icon: PilotIcon, socials: { whatsapp: "https://wa.me/918019828999" }, },
  { name: "Life Sciences", link: "/verticals/lifesciences", description: "Empowering biological breakthroughs with cutting-edge cell analysis, imaging, and molecular biology platforms.", image: Lifescience, icon: LifeIcon, socials: { whatsapp: "https://wa.me/918019828999" }, },
  { name: "Extrusion and Homogenization", link: "/verticals/extrusion-and-homogenization", description: "Delivering high-pressure homogenization and extrusion equipment for nanoemulsions, dispersions, and formulations.", image: Hemo, icon: ExtrusionIcon, socials: { whatsapp: "https://wa.me/918019828999" }, },
  { name: "Rheology and Thermal Analysis", link: "/verticals/rheology-and-thermal-analysis", description: "Measuring material behavior and thermal properties with precision rheometers and calorimeters.", image: Thermal, icon: ThermalIcon, socials: { whatsapp: "https://wa.me/918019828999" }, },
  { name: "General Laboratory Instruments", link: "/verticals/general-laboratory-instrument", description: "From pH meters to water purification – your everyday research essentials under one roof.", image: General, icon: GeneralIcon, socials: { whatsapp: "https://wa.me/918019828999" }, },
];

function pad2(n) {
  return n.toString().padStart(2, "0");
}

function ProfileCard({ profile, index }) {
  return (
    <div className="group relative h-full bg-[#0F2A33] text-white border border-white/10 hover:border-[#E63946] transition-colors duration-300">
      {/* ghost index number */}
      <span className="pointer-events-none absolute top-6 right-6 text-5xl md:text-6xl font-[MaxOT] text-white/10 select-none leading-none">
        {pad2(index + 1)}
      </span>

      {/* content */}
      <div className="p-8 md:p-9 lg:p-10 h-full flex flex-col">
        {/* icon + title */}
        <div className="flex items-start gap-4">
          {/* 3D coin-flip icon */}
          <div className="offerings-perspective w-14 h-14 md:w-12 md:h-12 rounded-full grid place-items-center bg-transparent ring-1 ring-white/10">
            <img
              src={profile.icon}
              alt={`${profile.name} icon`}
              className="w-8 h-8 md:w-7 md:h-7 object-contain offerings-coin will-change-transform"
            />
          </div>

          <h3 className="text-xl md:text-lg lg:text-xl font-[MaxOT] leading-snug">
            {profile.name}
          </h3>
        </div>

        {/* divider */}
        <div className="mt-4 h-px bg-white/10" />

        {/* description */}
        <p className="mt-3 text-sm md:text-[13px] font-[Roboto] text-white/70 leading-relaxed">
          {profile.description}
        </p>

        {/* READ MORE */}
        <div className="mt-6">
          <Link
            to={profile.link}
            className="inline-block text-xs tracking-wider font-[MaxOT] uppercase text-white/80 relative after:block after:h-[1px] after:bg-gradient-to-r after:from-[#BE0010] after:to-[#E63946] after:w-0 hover:after:w-full after:transition-all after:duration-300"
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function OfferingsDemo() {
  return (
    <section className="relative w-[98%] mx-auto py-12 md:px-10 lg:px-20">
      {/* dark section bg with subtle brand tint */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[#0B2430]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(900px_500px_at_20%_0%,rgba(230,57,70,0.08),transparent),radial-gradient(900px_500px_at_80%_100%,rgba(230,57,70,0.08),transparent)]" />

      {/* heading */}
      <div className="text-left md:text-center flex flex-col items-start md:items-center justify-center gap-3">
        <span
          className="px-4 py-1 text-xs sm:text-sm font-[MaxOT] uppercase rounded-full bg-white"
          style={{
            borderImage: "linear-gradient(90deg,#BE0010,#E63946) 1",
            borderWidth: 1,
            borderStyle: "solid",
          }}
        >
          Our Offerings
        </span>
        <h2 className="text-xl sm:text-2xl font-[MaxOT] text-white leading-tight">
          Explore Our Scientific Focus Areas
        </h2>
      </div>

      {/* grid like the reference (2 rows × 3 cols), tight borders (gap-0) */}
      <div className="w-full mt-8 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 max-w-7xl w-full border border-white/10">
          {profiles.map((profile, index) => (
            <ProfileCard key={index} profile={profile} index={index} />
          ))}
        </div>
      </div>

      {/* coin flip + 3D helpers */}
      <style>{`
        /* Give a 3D stage so rotateX looks like a coin flip */
        .offerings-perspective { perspective: 800px; }
        /* Animate only on hover of the card (group) */
        .group:hover .offerings-coin {
          animation: offerings-coin-flip-x 0.8s ease-out forwards;
          transform-origin: center center;
          backface-visibility: hidden;
        }
        @keyframes offerings-coin-flip-x {
          0%   { transform: rotateX(0deg); }
          50%  { transform: rotateX(180deg); }
          100% { transform: rotateX(360deg); }
        }
      `}</style>
    </section>
  );
}
