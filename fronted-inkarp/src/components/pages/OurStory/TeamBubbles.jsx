// TeamBubbles.jsx
import React, { useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import Balu from '/src/assets/Team/Balu.png';
import Natesh2 from '/src/assets/Team/Natesh2.png';

const BUBBLE_SIZE = 340; // bigger bubbles (px)

const members = [
  {
    name: 'S. Balu',
    title: 'Chairman & Managing Director(Inkarp Group of Companies)',
    email: 'balu@inkarp.com',
    location: 'Hyderabad',
    img: Balu,
    message: `When I first started Inkarp in 1985, I had one guiding principle: to provide unmatched after-sale service and unwavering support to our customers. This commitment has been the cornerstone of our journey, and it remains at the heart of everything we do today.

Our success is built on the trust and dedication of everyone we work with, from the passionate scientists who use our products to the incredible team that strives to meet and exceed expectations every day. We are not just a company; we are a family that believes in fostering strong relationships and making a real difference in the scientific community.

I am deeply grateful for your continued support and trust. It is your belief in our mission that drives us to push boundaries, explore new markets, and continually enhance our offerings. Together, we are building a future where science thrives, and innovation knows no bounds.

Thank you for being an integral part of Inkarp's journey. Let us continue to grow, innovate, and make a lasting impact together.`,
    links: ['https://linkedin.com/in/s-balu'],
  },
  {
    name: 'K. Natesh',
    title: 'Executive Director',
    email: 'natesh@inkarp.com',
    location: 'Mumbai',
    img: Natesh2,
    message: `Leads all aspects of Inkarp's operations, including Sales, Customer Service, Operations, Finance, Marketing and Back Office. His comprehensive oversight ensures that every department works cohesively to achieve the company’s mission of delivering exceptional value to customers. With a strategic vision and a detail-oriented approach, he has streamlined processes, optimized resources, and fostered a culture of excellence across the organization. Under his leadership, Inkarp has expanded its reach, enhanced its service capabilities, and consistently raised the bar in quality and customer satisfaction, making it a preferred partner in the scientific community.`,
    links: ['https://linkedin.com/in/k-natesh'],
  },
];

function MemberBubble({ member, index, openIndex, setOpenIndex }) {
  const open = openIndex === index;

  return (
    <div
      className="group relative rounded-full overflow-hidden shadow-xl ring-1 ring-red-200 hover:ring-red-400 transition-transform duration-300 hover:scale-[1.03] cursor-pointer"
      style={{ width: BUBBLE_SIZE, height: BUBBLE_SIZE }}
      onClick={() => setOpenIndex(open ? -1 : index)} // tap support on mobile
    >
      {/* Image */}
      <img
        src={member.img}
        alt={member.name}
        className="absolute inset-0 w-full h-full object-cover"
        draggable="false"
      />

      {/* Gloss highlight */}
      {/* <span className="pointer-events-none absolute top-[8%] left-[14%] w-[60%] h-[38%] rounded-full opacity-80"
            style={{
              background: 'radial-gradient(circle at top, rgba(255,255,255,0.95) 80%, rgba(255,255,255,0.2) 100%)',
              filter: 'blur(2.5px)'
            }} /> */}

      {/* Hover/Tap overlay with content */}
      <div
        className={[
          'absolute inset-0 flex flex-col p-5 text-white',
          'bg-gradient-to-b from-black/10 via-black/30 to-black/80',
          'opacity-0 group-hover:opacity-100 transition-opacity duration-300',
          open ? 'opacity-100' : 'pointer-events-none', // mobile tap fallback
        ].join(' ')}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="text-2xl font-[MaxOT] leading-tight">{member.name}</h3>
            <p className="text-sm text-red-200 font-[MaxOT]">{member.title}</p>
          </div>
          {member.links?.[0] && (
            <a
              href={member.links[0]}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 text-white/90 hover:text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
          )}
        </div>

        <p
          className="mt-3 text-sm font-[Roboto] leading-snug whitespace-pre-line overflow-y-auto pr-2"
          style={{ maxHeight: BUBBLE_SIZE - 120 }}
        >
          {member.message}
        </p>
      </div>
    </div>
  );
}

export default function TeamBubbles() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section className="min-h-screen py-10 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="text-center mb-10">
          <span
            className="px-4 py-1 text-xs sm:text-sm font-[MaxOT] uppercase bg-white inline-block"
            style={{
              borderImage: 'linear-gradient(90deg,#BE0010,#E63946) 1',
              borderWidth: 1,
              borderStyle: 'solid',
            }}
          >
            Meet Our Leadership
          </span>
        </div>

        {/* Bubble grid */}
        <div className="grid place-items-center gap-8 md:gap-12 md:grid-cols-2">
          {members.map((m, i) => (
            <MemberBubble
              key={i}
              member={m}
              index={i}
              openIndex={openIndex}
              setOpenIndex={setOpenIndex}
            />
          ))}
        </div>
      </div>

      {/* Optional subtle float animation */}
      <style>{`
        @keyframes floaty {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0px); }
        }
        .group:hover { animation: floaty 6s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
