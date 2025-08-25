import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import Alembic from "/src/assets/ClientLogo/Alembic.png";
import Aragen from "/src/assets/ClientLogo/Aragen.png";
import Aurobindo from "/src/assets/ClientLogo/Aurobindo.png";
import Basf from "/src/assets/ClientLogo/Basf.png";
import Biocon from "/src/assets/ClientLogo/Biocon.png";
import Divis from "/src/assets/ClientLogo/Divis.png";
import Eisai from "/src/assets/ClientLogo/Eisai.png";
import Gland from "/src/assets/ClientLogo/Gland.png";
import Granuals from "/src/assets/ClientLogo/Granuals.png";
import GVK from "/src/assets/ClientLogo/GVK.png";
import Hikal from "/src/assets/ClientLogo/Hikal.png";
import Macleods from "/src/assets/ClientLogo/Macleods.png";
import Mylan from "/src/assets/ClientLogo/Mylan.png";
import Natco from "/src/assets/ClientLogo/Natco.png";
import Pi from "/src/assets/ClientLogo/Pi.png";
import Reddy from "/src/assets/ClientLogo/Reddy.png";
import Sai from "/src/assets/ClientLogo/Sai.png";
import Srigene from "/src/assets/ClientLogo/Srigene.png";
import Syngene from "/src/assets/ClientLogo/Syngene.png";
import Syngenta from "/src/assets/ClientLogo/Syngenta.png";
import Tcg from "/src/assets/ClientLogo/Tcg.png";

const logos = [
  { src: Alembic, alt: "Alembic" },
  { src: Aragen, alt: "Aragen" },
  { src: Aurobindo, alt: "Aurobindo" },
  { src: Basf, alt: "BASF" },
  { src: Biocon, alt: "Biocon" },
  { src: Divis, alt: "Divis" },
  { src: Eisai, alt: "Eisai" },
  { src: Gland, alt: "Gland" },
  { src: Granuals, alt: "Granules" },
  { src: GVK, alt: "GVK" },
  { src: Hikal, alt: "Hikal" },
  { src: Macleods, alt: "Macleods" },
  { src: Mylan, alt: "Mylan" },
  { src: Natco, alt: "Natco" },
  { src: Pi, alt: "PI Industries" },
  { src: Reddy, alt: "Dr. Reddy's" },
  { src: Sai, alt: "Sai Life Sciences" },
  { src: Srigene, alt: "Srigene" },
  { src: Syngene, alt: "Syngene" },
  { src: Syngenta, alt: "Syngenta" },
  { src: Tcg, alt: "TCG" },
];

export default function TrustedClients() {
  return (
    <section className="relative w-full mx-auto py-10 md:px-10 lg:px-20">
      {/* On-brand soft stage background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(230,57,70,0.08),transparent),radial-gradient(1200px_600px_at_80%_110%,rgba(230,57,70,0.08),transparent)]" />
      {/* Header */}
      <div className="text-center flex flex-col items-center justify-center gap-3">
        <span
          className="px-4 py-1 text-xs sm:text-sm font-[MaxOT] uppercase rounded-full bg-white"
          style={{
            borderImage: "linear-gradient(90deg,#BE0010,#E63946) 1",
            borderWidth: 1,
            borderStyle: "solid",
          }}
        >
          Our Clients
        </span>
        <h2 className="text-xl sm:text-2xl font-[MaxOT] text-[#E63946] leading-tight">
          Trusted by Industry Leaders
        </h2>
      </div>

      {/* Carousel track in a glassy shell */}
      <div className="mt-6 backdrop-blur p-3 sm:p-4 shadow-sm bg-white/80">
        <Swiper
          modules={[Autoplay]}
          loop
          speed={1500}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 12 },
            640: { slidesPerView: 3, spaceBetween: 18 },
            1024: { slidesPerView: 5, spaceBetween: 24 },
            1280: { slidesPerView: 6, spaceBetween: 28 },
          }}
          className="group"
        >
          {logos.map((logo, idx) => (
            <SwiperSlide key={idx} className="select-none">
              <div className="h-16 sm:h-20 md:h-24 flex items-center justify-center">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-full max-w-[160px] object-contain transition"
                  // loading="lazy"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
