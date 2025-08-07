import React from 'react';
import { useNavigate } from 'react-router-dom';
import { eventsData } from '../NewsAndEvents/EventsData';

const newsEvents = eventsData.sort((a, b) => b.id - a.id).slice(0, 3);

const NewsEvents = () => {
  const navigate = useNavigate();

  const handleReadMore = (event) => {
    navigate(`/insights-and-updates/events/${event.id}`, {
      state: { event },
    });
  };

  return (
    <aside className="relative p-2">
      <div className="flex items-center justify-center flex-col gap-3">
        <h4 className="text-sm uppercase font-semibold border border-[#E63946] px-4 py-1 rounded-full font-[MaxOT]">
          News & Events
        </h4>
        <h1 className="text-3xl text-center font-[MaxOT] text-[#E63946] leading-tight">
          Events, Initiatives & Community Highlights
        </h1>
      </div>

      {/* Decorative Image */}
      <div className="absolute top-0 right-0 hidden md:block z-10">
        <img
          className="ml-auto max-w-none"
          src="https://cruip.com/wp-content/themes/cruip-2/dist/images/stacked-templates-3.png"
          width="272"
          height="289"
          role="presentation"
          alt=""
        />
      </div>

      {/* Main Container */}
      <div className="relative bg-[#F5F5F5] rounded-xl overflow-hidden ink:px-8 ink:py-10 md:px-12 md:py-14 md:pr-80 sm:p-6 border border-gray-200">
        <div className="relative text-center md:text-left z-10">
          {/* Grid for Cards */}
          <div className="grid gap-6 ink:grid-cols-2 lg:grid-cols-3">
            {newsEvents.map((item) => (
              <div
                key={item.id}
                className="bg-white bg-opacity-60 backdrop-blur-md rounded-2xl p-5 shadow-md hover:shadow-xl transition-shadow cursor-pointer flex flex-col justify-between"
                onClick={() => handleReadMore(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-cover rounded-lg mb-4"
                />

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleReadMore(item);
                  }}
                  className="mt-4 inline-flex items-center text-red-500 hover:text-red-700 font-medium transition"
                >
                  Join Us
                  <svg
                    className="ml-2 w-4 h-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 11 11"
                  >
                    <path d="M5.977 10.368 4.953 9.354 8.02 6.286H.568V4.805H8.02L4.953 1.742 5.977.723 10.8 5.546z" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default NewsEvents;
