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
  { src: Basf, alt: "Basf" },
  { src: Biocon, alt: "Biocon" },
  { src: Divis, alt: "Divis" },
  { src: Eisai, alt: "Eisai" },
  { src: Gland, alt: "Gland" },
  { src: Granuals, alt: "Granuals" },
  { src: GVK, alt: "GVK" },
  { src: Hikal, alt: "Hikal" },
  { src: Macleods, alt: "Macleods" },
  { src: Mylan, alt: "Mylan" },
  { src: Natco, alt: "Natco" },
  { src: Pi, alt: "Pi" },
  { src: Reddy, alt: "Reddy" },
  { src: Sai, alt: "Sai" },
  { src: Srigene, alt: "Srigene" },
  { src: Syngene, alt: "Syngene" },
  { src: Syngenta, alt: "Syngenta" },
  { src: Tcg, alt: "Tcg" }
];

const TrustedClients = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-4 py-10 sm:px-8">
      <div className="text-center py-3 flex flex-col items-center justify-center gap-3">
        <h4 className="px-4 py-1 text-sm font-semibold uppercase border border-[#E63946] font-[MaxOT] text-black rounded-full ">
          Our Clients
        </h4>
        <h2 className="text-3xl font-[MaxOT] text-[#E63946] leading-tight">
          Trusted by Global Brands
        </h2>
      </div>

      <Swiper
        modules={[Autoplay]}
        loop={true}
        speed={3000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 10 },
          640: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 5, spaceBetween: 30 },
        }}
        className="group"
      >
        {logos.map((logo, idx) => (
          <SwiperSlide key={idx}>
            <div className="w-28 h-28 sm:w-32 sm:h-32 p-4 rounded flex items-center justify-center  transition-all duration-700 ease-out">
              <img
                src={logo.src}
                alt={logo.alt}
                className="object-contain max-h-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TrustedClients;
