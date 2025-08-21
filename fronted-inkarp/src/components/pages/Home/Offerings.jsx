import { useState } from "react";
import { Link } from "react-router-dom";
import { Share2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

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

function ProfileCard({ profile, isOpen, index, setOpenIndex }) {
  const { whatsapp } = profile.socials || {};
  const hasShare = Boolean(whatsapp);

  return (
    <div className="w-full h-full rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-[1.02] group border border-[#F5F5F5] bg-white shadow-sm hover:shadow-md hover:border-[#E63946] relative flex flex-col">
      <Link to={profile.link} className="block flex-1">
        {/* header band */}
        <div className="bg-[#F5F5F5] text-black h-[170px] md:h-[150px] p-4 flex flex-col justify-center items-start relative">
          <div className="flex items-center mb-3">
            <div className="w-14 h-14 md:w-12 md:h-12 rounded-full bg-white grid place-items-center">
              <img
                src={profile.icon}
                alt={`${profile.name} icon`}
                className="w-10 h-10 md:w-9 md:h-9 object-contain transition-transform duration-700 ease-in-out group-hover:rotate-[360deg]"
              />
            </div>
            <h3 className="text-base md:text-sm lg:text-base font-[MaxOT] pl-3 text-[#E63946]">
              {profile.name}
            </h3>
          </div>

          <div className="w-full h-[1px] bg-gradient-to-r from-[#BE0010] to-[#E63946] mb-2" />
          <p className="text-xs md:text-xs lg:text-sm leading-relaxed font-[Roboto] text-black line-clamp-3">
            {profile.description}
          </p>
        </div>

        {/* image with consistent aspect */}
        <div className="relative w-full aspect-[16/10] md:aspect-[16/9]">
          <img
            src={profile.image}
            alt={profile.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </Link>

      {/* share */}
      {hasShare && (
        <div className="absolute bottom-3 right-3 flex items-center">
          <div
            className="relative flex items-center"
            onMouseEnter={() => setOpenIndex(index)}
            onMouseLeave={() => setOpenIndex(null)}
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                setOpenIndex(isOpen ? null : index);
              }}
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md z-20 border border-[#F5F5F5]"
              aria-label="Share"
            >
              <Share2 size={18} color="#000000" />
            </button>

            <div
              className={`flex items-center gap-2 absolute right-12 top-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out z-10
                ${isOpen ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 translate-x-8 pointer-events-none'}`}
            >
              <a
                href={whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp"
                className="rounded-full p-2 bg-green-500 text-white shadow hover:opacity-90 transition"
              >
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Offerings() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="relative w-[98%] mx-auto py-10 md:px-10 lg:px-20">
      {/* soft bg */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(230,57,70,0.08),transparent),radial-gradient(1200px_600px_at_80%_110%,rgba(230,57,70,0.08),transparent)]" />

      {/* heading */}
      <div className="text-center flex flex-col items-center justify-center gap-3">
        <span
          className="px-4 py-1 text-xs sm:text-sm font-[MaxOT] uppercase rounded-full bg-white"
          style={{
            borderImage: 'linear-gradient(90deg,#BE0010,#E63946) 1',
            borderWidth: 1,
            borderStyle: 'solid',
          }}
        >
          Our Offerings
        </span>
        <h2 className="text-xl sm:text-2xl font-[MaxOT] text-[#E63946] leading-tight">
          Explore Our Scientific Focus Areas
        </h2>
      </div>

      {/* grid */}
      <div className="w-full py-8 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 lg:gap-8 px-2 sm:px-4 max-w-7xl w-full">
          {profiles.map((profile, index) => (
            <ProfileCard
              key={index}
              profile={profile}
              isOpen={openIndex === index}
              index={index}
              setOpenIndex={setOpenIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
