import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { Fade } from 'react-awesome-reveal';
import Sarvanan from '/src/assets/Team/Saravanan.jpeg';
import Madhu from '/src/assets/Team/Madhusudhan.jpeg';
import MsReddy from '/src/assets/Team/MsReddy.jpg';
const directors = [
  {
    name: 'K. Sreedhar',
    title: 'Director (South & East)',
    email: 'sreedhar@inkarp.com',
    location: 'Bangalore',
    img: 'https://www.inkarp.co.in/assets/images/our_team/K.Sreedhar.jpeg',
    message:
      `Directs Inkarp's sales efforts across the South, East, and Northeast regions. With expertise in applications such as chemical synthesis, catalysis, and battery testing, he ensures researchers receive solutions that advance their experimental needs.`,
    links: ['https://linkedin.com/in/k-sreedhar'],
  },
  {
    name: 'M. Madhusudhan',
    title: 'Director (North)',
    email: 'madhusudhan@inkarp.com',
    location: 'Delhi',
    img: Madhu,
    message:
      `Heads Inkarp's operations in the Northern, Central, and select Eastern regions. With deep expertise in chromatography and precision instrumentation, he specializes in solutions that streamline separation and analysis.`,
    links: ['https://linkedin.com/in/m-madhusudhan'],
  },
  {
    name: 'M. S. Reddy',
    title: 'Director (West)',
    email: 'msreddy@inkarp.com',
    location: 'Ahmedabad',
    img: MsReddy,
    message:
      `Leads Inkarp's sales operations across the Western region. Specializing in advanced homogenization and precision laboratory solutions, he focuses on delivering innovative tools that enhance research workflows.`,
    links: ['https://linkedin.com/in/m-s-reddy'],
  },
  {
    name: 'N. Saravanan',
    title: 'Chief Operating Officer (All India)',
    email: 'saravanan@inkarp.com',
    location: 'Chennai',
    img: Sarvanan,
    message:
      `Known for empowering teams and fostering innovation, Saravanan emphasizes trust, transparency, and continuous learning to drive operational excellence across Inkarp.`,
    links: ['https://linkedin.com/in/n-saravanan'],
  },
];

function DirectorCard({ director }) {
  return (
    <article className="group flex flex-col bg-white rounded-2xl border border-gray-200 hover:border-[#E63946] shadow-sm hover:shadow-md transition-all duration-300">
      {/* image */}
      <div className="p-3">
        <div className="relative w-full max-w-xs mx-auto rounded-[50%] overflow-hidden bg-[#F5F5F5] aspect-[4/4] border-3 border-[#E63946]">
          <img
            src={director.img}
            alt={director.name}
            className="w-full h-full object-contain transform transition-transform duration-300 group-hover:scale-[1.02]"
            loading="lazy"
          />
        </div>
      </div>

      {/* text */}
      <div className="px-4 pb-4 text-center">
        <h3 className="mt-1 text-xl font-[MaxOT] text-[#E63946]">{director.name}</h3>
        <p className="mt-1 text-base font-[MaxOT] text-black">{director.title}</p>

        {/* <div className="mt-2">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#F5F5F5] border border-gray-200 text-xs font-[Roboto] text-black/70">
            {director.location}
          </span>
        </div> */}

        <p className="mt-3 text-sm font-[Roboto] text-black/80 whitespace-pre-line">
          {director.message}
        </p>

        {director.links?.[0] && (
          <a
            href={director.links[0]}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center justify-center h-10 w-10 rounded-full bg-white border border-gray-200 text-blue-600 hover:text-blue-800 shadow-sm hover:shadow transition"
            aria-label={`${director.name} on LinkedIn`}
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
        )}
      </div>
    </article>
  );
}

export default function TeamNewTwo() {
  return (
    <section className="relative  py-10 md:px-10 lg:px-10">
      {/* subtle stage background (on-brand) */}
    
      {/* themed heading */}
      <div className="text-center flex flex-col items-center justify-center gap-3">
        <span
          className="px-4 py-1 text-xs sm:text-sm font-[MaxOT] uppercase  bg-white"
          style={{
            borderImage: 'linear-gradient(90deg,#BE0010,#E63946) 1',
            borderWidth: 1,
            borderStyle: 'solid',
          }}
        >
          Our Directors
        </span>
     
      </div>

      {/* grid */}
      <Fade direction="up" triggerOnce delay={200}>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
          {directors.map((d) => (
            <DirectorCard key={d.name} director={d} />
          ))}
        </div>
      </Fade>
    </section>
  );
}
