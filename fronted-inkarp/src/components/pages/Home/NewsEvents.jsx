import React from 'react';
import { useNavigate } from 'react-router-dom';
import { eventsData } from '../NewsAndEvents/EventsData';

const newsEvents = eventsData.sort((a, b) => b.id - a.id).slice(0, 3);

export default function NewsEvents() {
  const navigate = useNavigate();

  // const handleReadMore = (event) => {
  //   navigate(`/insights-and-updates/events/${event.id}`, {
  //     state: { event },
  //   });
  // };

   const handleReadMore = (event) => {
    navigate(`/insights-and-updates/news-and-events`, {
      state: { event },
    });
  };

  return (
    <section className="relative w-[98%] mx-auto py-10 md:px-10 lg:px-20">
      {/* Soft stage background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(230,57,70,0.08),transparent),radial-gradient(1200px_600px_at_80%_110%,rgba(230,57,70,0.08),transparent)]" />

      {/* Heading */}
      <div className="text-center flex flex-col justify-center items-center gap-3">
        <span
          className="px-4 py-1 text-xs sm:text-sm font-[MaxOT] uppercase rounded-full bg-white"
          style={{
            borderImage: 'linear-gradient(90deg,#BE0010,#E63946) 1',
            borderWidth: 1,
            borderStyle: 'solid',
          }}
        >
          News &amp; Events
        </span>
        <h1 className="text-xl sm:text-2xl text-center font-[MaxOT] text-[#E63946] leading-tight">
          Events, Initiatives &amp; Community Highlights
        </h1>
      </div>

      {/* Frame with gradient border + glass */}
      <div className="mt-6 rounded-3xl p-[1.5px] ">
        {/* <div className="relative rounded-[20px] bg-white/70 backdrop-blur-xl border border-white/60 p-6 md:p-8"> */}
          {/* Cards grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {newsEvents.map((item) => (
              <button
                key={item.id}
                onClick={() => handleReadMore(item)}
                className="group text-left rounded-2xl overflow-hidden bg-white border border-[#F5F5F5] shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
              >
                {/* gradient top border */}
                <div className="h-1 w-full bg-gradient-to-r from-[#BE0010] to-[#E63946]" />

                {/* image */}
                <div className="p-4">
                  <div className="rounded-xl overflow-hidden border border-[#F5F5F5]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-auto object-cover"
                    />
                  </div>

                  {/* CTA */}
                  <div className="mt-4 flex justify-center items-center gap-2">
                    <span
                      className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-white text-sm font-[MaxOT]"
                      style={{ background: 'linear-gradient(90deg,#BE0010,#E63946)' }}
                    >
                      Join Us
                      {/* <svg
                        className="w-3.5 h-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 11 11"
                        fill="currentColor"
                      >
                        <path d="M5.977 10.368 4.953 9.354 8.02 6.286H.568V4.805H8.02L4.953 1.742 5.977.723 10.8 5.546z" />
                      </svg> */}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          {/* </div> */}
        </div>
      </div>
    </section>
  );
}
