import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { Fade } from 'react-awesome-reveal';
import Balu from '/src/assets/Team/Balu.png';
import Natesh2 from '/src/assets/Team/Natesh2.png';
// import Sign from '/src/assets/Team/balu-sign.png'; // (optional) not used now

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

const MemberCard = ({ member }) => {
  return (
    <div className="relative flex flex-col lg:flex-row items-start gap-6 text-left p-5 sm:p-6 bg-white/80 backdrop-blur rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl hover:border-[#E63946] transition-all duration-300 w-full max-w-5xl">
      <div className="w-full sm:w-[300px] flex-shrink-0 mx-auto sm:mx-0">
        <div className="rounded-lg flex flex-col gap-3 items-center justify-center  overflow-hidden w-full h-[400px]">
          <img
            src={member.img}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col flex-grow min-w-0">
        <div className="flex justify-between items-start w-full mb-2">
          <div>
            <h3 className="text-3xl text-black font-[MaxOT]">{member.name}</h3>
            <p className="text-xl text-[#E63946] font-[MaxOT]">{member.title}</p>
          </div>
          {member.links?.[0] && (
            <a
              href={member.links[0]}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 ml-4 flex-shrink-0"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
          )}
        </div>
        <p className="text-[17px] italic font-[Roboto] whitespace-pre-line ">
          {member.message}
        </p>
      </div>
    </div>
  );
};

export default function TeamNew() {
  return (
    <section className="min-h-screen py-6 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="mx-auto text-center max-w-6xl">
        {/* THEMED HEADING */}
        <div className="flex flex-col justify-center items-center gap-3">
          <span
            className="px-4 py-1 text-xs sm:text-sm font-[MaxOT] uppercase  bg-white"
            style={{
              borderImage: 'linear-gradient(90deg,#BE0010,#E63946) 1',
              borderWidth: 1,
              borderStyle: 'solid',

            }}
          >
            Meet Our Leadership
          </span>
          {/* <h1 className="text-xl sm:text-2xl font-[MaxOT] text-[#E63946] leading-tight">
            
          </h1> */}
        </div>

        <div className="flex flex-col items-center gap-5 py-10">
          <Fade direction="down" triggerOnce>
            <div className="flex justify-center w-full px-2 ">
              <MemberCard member={members[0]} />
            </div>
          </Fade>
          <div className="w-px h-6 sm:h-12" />
          <Fade direction="up" triggerOnce delay={300}>
            <div className="flex justify-center w-full px-2">
              <MemberCard member={members[1]} />
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}
