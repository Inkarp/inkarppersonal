import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Quote } from 'lucide-react';
import 'swiper/css';

const reviews = [
  {
    name: 'Anil Pasunuti',
    message:
      '"Best service provided by Inkarp. Service engineer response towards the equipment is very good and our Heidolph rotary evaporator smoothly functioning without any interruptions, fully satisfied."',
  },
  {
    name: 'Omprakash Kushwaha',
    message:
      '"Inkarp supplied and installed their brand of a four port glovebox “Labstationi” to our lab. Their service is on time, professional and top notch. So far so smooth."',
  },
  {
    name: 'Renitta Benny',
    message:
      'Mr. Jerbin is the service person coming to our lab.. He is very helpful and always ready for the service. His service is very appreciable. We are very satisfied and happy with his service.',
  },
  {
    name: 'Snehashish Senapati',
    message:
      'Inkarp is really helpful, and their service people are guiding us how to use the instruments for longer time without damage and service is helpful.',
  },
  {
    name: 'Shwetha M',
    message:
      'Our university had bought a lyophilizer a year back and the performance of it was phenomenal. There were regular services for the maintenance of the equipment. Thank you.',
  },
  {
    name: 'Prasad Joshi',
    message:
      'Excellent Service provided by Inkarp Instrument Pvt Ltd from last many years. They are prompt in their service and attending call anytime and help us for resolved problem on priority.',
  },
];

export default function ClientReviews() {
  return (
    <section className="relative w-[98%] mx-auto py-10 md:px-10 lg:px-20 font-[Roboto]">
      {/* soft radial background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(230,57,70,0.08),transparent),radial-gradient(1200px_600px_at_80%_110%,rgba(230,57,70,0.08),transparent)]" />

      {/* heading */}
      <div className="text-center flex flex-col items-center justify-center gap-3 mb-6">
        <span
          className="px-4 py-1 text-xs sm:text-sm font-[MaxOT] uppercase rounded-full bg-white"
          style={{
            borderImage: 'linear-gradient(90deg,#BE0010,#E63946) 1',
            borderWidth: 1,
            borderStyle: 'solid',
          }}
        >
          Reviews
        </span>
        <h2 className="text-xl sm:text-2xl text-[#E63946] leading-tight font-[MaxOT]">
          What Our Customers Say About Us
        </h2>
      </div>

      {/* glass frame with gradient border */}
      {/* <div className="rounded-3xl p-[1.5px]"> */}
        {/* <div className=" backdrop-blur-xl  p-4 sm:p-6"> */}
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop
            className="h-full"
          >
            {reviews.map((review, i) => (
              <SwiperSlide key={i} className="h-full">
                <figure className="relative rounded-2xl overflow-hidden bg-white border border-[#F5F5F5] shadow-sm transition-all hover:-translate-y-0.5">
                  {/* gradient top border */}
                  <div className="h-1 w-full bg-gradient-to-r from-[#BE0010] to-[#E63946]" />

                  {/* quote chip */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <div
                      className="w-12 h-12 rounded-xl bg-white grid place-items-center shadow-md"
                      // style={{
                      //   borderImage: 'linear-gradient(90deg,#BE0010,#E63946) 1',
                      //   borderWidth: 1,
                      //   borderStyle: 'solid',
                      // }}
                    >
                      <Quote className="text-[#E63946]" size={20} />
                    </div>
                  </div>


                  {/* content */}
                  <div className="px-5 py-7 pt-10 min-h-[260px] flex flex-col items-center text-center">
                    <blockquote className="text-sm md:text-base italic text-black leading-relaxed">
                      {review.message}
                    </blockquote>
                    <div className="mt-auto pt-5">
                      <span className="font-[MaxOT] text-[#0f1b33] text-base md:text-lg not-italic">
                        {review.name}
                      </span>
                    </div>
                  </div>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        {/* </div> */}
      {/* </div> */}
    </section>
  );
}
