import React from "react";
import { FaLinkedin } from "react-icons/fa";
import Balu from "/src/assets/Team/Balu.png";
import Natesh2 from "/src/assets/Team/Natesh2.png";

const members = [
  {
    name: "S. Balu",
    title: "Chairman & Managing Director (Inkarp Group of Companies)",
    location: "Hyderabad",
    img: Balu,
    links: ["https://linkedin.com/in/s-balu"],
    message: `When I first started Inkarp in 1985, I had one guiding principle: to provide unmatched after-sale service and unwavering support to our customers. This commitment has been the cornerstone of our journey, and it remains at the heart of everything we do today.

Our success is built on the trust and dedication of everyone we work with, from the passionate scientists who use our products to the incredible team that strives to meet and exceed expectations every day. We are not just a company; we are a family that believes in fostering strong relationships and making a real difference in the scientific community.

I am deeply grateful for your continued support and trust. It is your belief in our mission that drives us to push boundaries, explore new markets, and continually enhance our offerings. Together, we are building a future where science thrives, and innovation knows no bounds.

Thank you for being an integral part of Inkarp's journey. Let us continue to grow, innovate, and make a lasting impact together.`,
  },
  {
    name: "K. Natesh",
    title: "Executive Director",
    location: "Mumbai",
    img: Natesh2,
    links: ["https://linkedin.com/in/k-natesh"],
    message: `Leads all aspects of Inkarp's operations, including Sales, Customer Service, Operations, Finance, Marketing and Back Office. His comprehensive oversight ensures that every department works cohesively to achieve the company’s mission of delivering exceptional value to customers.

With a strategic vision and a detail-oriented approach, he has streamlined processes, optimized resources, and fostered a culture of excellence across the organization. Under his leadership, Inkarp has expanded its reach, enhanced its service capabilities, and consistently raised the bar in quality and customer satisfaction, making it a preferred partner in the scientific community.`,
  },
];

/** Circular image + story, matching the AboutUs8 layout */
function LeaderSpotlight({ member, reverse = false }) {
  const parts = member.message.split(/\n{2,}/); // split into paragraphs

  return (
    <div className="container px-4 mt-12">
      <div
        className={`grid grid-cols-12 gap-6 items-center ${
          reverse ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* Text */}
        <div className={`col-span-12 lg:col-span-6 mb-6 lg:mb-0 ${reverse ? "order-2 lg:order-1" : ""}`}>
          <div className="relative">
            <h1 className="text-2xl md:text-4xl font-[MaxOT] font-bold mb-2">
              I’m {member.name}
            </h1>
            <p className="text-[#E63946] font-[MaxOT] text-lg md:text-xl mb-4">
              {member.title}
            </p>

            <div className="space-y-4 text-black leading-relaxed font-[Roboto]">
              {parts.map((p, idx) => (
                <p key={idx} className="opacity-90">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Image */}
        <div className={`col-span-12 lg:col-span-6 flex justify-center items-center ${reverse ? "order-1 lg:order-2" : ""}`}>
          <div className="border-[15px] border-transparent rounded-full w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] overflow-hidden relative">
            {/* on-brand outline (like AboutUs8 but with your red) */}
            <div className="absolute inset-0 rounded-full pointer-events-none" style={{ boxShadow: "0 0 0 3px #E63946 inset" }} />
            <img
              src={member.img}
              alt={member.name}
              className=" h-full w-full object-cover"
            />
          </div>

          {/* LinkedIn badge (optional) */}
          {/* {member.links?.[0] && (
            <a
              href={member.links[0]}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute right-6 bottom-6 hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white shadow border border-gray-200 text-blue-600 hover:text-blue-800"
              aria-label={`${member.name} on LinkedIn`}
            >
              <FaLinkedin className="w-5 h-5" />
              <span className="text-sm font-[Roboto]">Connect</span>
            </a>
          )} */}
        </div>
      </div>
    </div>
  );
}

export default function TeamNew() {
  return (
    <section className="ezy__about8 light w-[98%] mx-auto pb-14 md:pb-24 bg-white text-zinc-900">
      {/* Brand header band (like AboutUs8) */}
      <div className="relative bg-[#E63946] bg-opacity-90 py-12">
        <div className="container px-4">
          <div className="grid grid-cols-12 my-6">
            <div className="col-span-12">
              <h2 className="text-3xl leading-snug md:text-6xl md:leading-snug font-[MaxOT] font-bold text-white text-center">
                Leadership Stories
              </h2>
              <p className="mt-3 text-center text-white/90 font-[Roboto]">
                Voices that shaped INKARP — vision, values, and the road ahead.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Balu */}
      <LeaderSpotlight member={members[0]} />
      {/* Natesh (image on the left for variation) */}
      <LeaderSpotlight member={members[1]} reverse />
    </section>
  );
}
