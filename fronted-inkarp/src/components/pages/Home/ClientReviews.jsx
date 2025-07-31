import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    name: 'Anil Pasunuti',
    message:
      'Best service provided by Inkarp. Service engineer response towards the equipment is very good and our Heidolph rotary evaporator smoothly functioning without any interruptions, fully satisfied.',
    avatar: 'https://randomuser.me/api/portraits/men/65.jpg',
  },
  {
    name: 'Omprakash Kushwaha',
    message:
      'Inkarp supplied and installed their brand of a four port glovebox “Labstationi” to our lab. Their service is on time, professional and top notch. So far so smooth.',
  },
  {
    name: 'Renitta Benny',
    message:
      "Mr. Jerbin is the service person coming to our lab.. He is very helpful and always ready for the service. His service is very appreciable. We are very satisfied and happy with his service.",
  },
  {
    name: 'Snehashish Senapati',
    message:
      "Inkarp is really helpful, and their service people are guiding us how to use the instruments for longer time without damage and service is helpful.",
  },
  {
    name: 'Shwetha M',
    message:
      "Our university had bought a lyophilizer a year back and the performance of it was phenomenal. There were regular services for the maintenance of the equipment. Thank you.",
  },
  {
    name: 'Prasad Joshi',
    message:
      "Excellent Service provided by Inkarp Instrument Pvt Ltd from last many years. They are prompt in their service and attending call anytime and help us for resolved problem on priority.",
  },
];

function useResponsiveColumns() {
  // Custom hook to get how many columns to show based on width
  const [columns, setColumns] = useState(3);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 640) setColumns(1);      // mobile
      else if (window.innerWidth < 1024) setColumns(2); // tablet
      else setColumns(3);                               // desktop
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return columns;
}

export default function ClientReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const columns = useResponsiveColumns();

  const getVisibleReviews = () => {
    const visibleReviews = [];
    for (let i = 0; i < columns; i++) {
      const index = (currentIndex + i) % reviews.length;
      visibleReviews.push(reviews[index]);
    }
    return visibleReviews;
  };

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
      setTimeout(() => setIsAnimating(false), 800);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) =>
        (prev - 1 + reviews.length) % reviews.length
      );
      setTimeout(() => setIsAnimating(false), 800);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [currentIndex, columns]); // Add columns as dep, so re-render on resize

  return (
    <section className="py-5 px-2 md:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-8 gap-6">
          <div className="text-center flex flex-col items-center justify-center gap-3">
            <button className="px-4 py-1 uppercase font-semibold border border-[#E63946] text-black rounded-full text-xs md:text-sm shadow-none">
              Reviews
            </button>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#E63946] leading-tight font-[MaxOT]">
              What Our Customers Say About Us
            </h2>
          </div>
          <div className="flex gap-2 border border-gray-300 rounded-full px-2 py-2 bg-white shadow-sm">
            <button
              onClick={prevSlide}
              aria-label="Previous Reviews"
              className="w-8 h-8 md:w-10 md:h-10 bg-[#0b163f] text-white rounded-full flex items-center justify-center hover:bg-[#0b163f]/80 transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Reviews"
              className="w-8 h-8 md:w-10 md:h-10 bg-[#0b163f] text-white rounded-full flex items-center justify-center hover:bg-[#0b163f]/80 transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
        <div className="relative overflow-x-hidden">
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 transition-all duration-800 ease-in-out ${
              isAnimating ? 'opacity-70 scale-[.98]' : 'opacity-100 scale-100'
            }`}
            style={{
              gridTemplateColumns: `repeat(${columns}, 1fr)`,
              minHeight: columns === 1 ? 260 : columns === 2 ? 220 : 200,
            }}
          >
            {getVisibleReviews().map((review, i) => (
              <figure
                key={i}
                className="snip1533 flex flex-col justify-between bg-white"
              >
                <figcaption className="flex flex-col justify-between h-full ">
                  {/* Avatar */}
                  {review.avatar && (
                    <div className="flex justify-center">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-14 h-14 object-cover rounded-full mb-2 border-2 border-[#E63946] mx-auto"
                      />
                    </div>
                  )}
                  <blockquote className="min-h-[100px]">
                    <p className="text-black text-sm md:text-base font-[Roboto] leading-relaxed">
                      {review.message}
                    </p>
                  </blockquote>
                  <div>
                    <h3 className="font-[MaxOT] text-[#0f1b33] text-base md:text-lg mt-3">
                      {review.name}
                    </h3>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        .snip1533 {
          box-shadow: 0 0 5px rgba(0,0,0,0.10);
          color: #424242;
          display: flex;
          flex-direction: column;
          font-family: 'Roboto', Arial, sans-serif;
          margin: 15px 4px 8px;
          max-width: 100%;
          min-width: 0;
          position: relative;
          text-align: center;
          background-color: white;
          border-radius: 7px;
          border-top: 4px solid #E63946;
          transition: all 0.3s;
        }
        .snip1533:hover {
          transform: translateY(-3px) scale(1.01);
          box-shadow: 0 8px 18px rgba(0,0,0,0.18);
        }
        .snip1533 figcaption {
          padding: 12% 8% 8%;
        }
        .snip1533 figcaption:before {
          content: "\\201C";
          color: #E63946;
          font-family: 'Georgia', serif;
          font-size: 28px;
          font-weight: bold;
          position: absolute;
          left: 50%;
          top: -18px;
          transform: translateX(-50%);
        }
        .snip1533 blockquote {
          font-style: italic;
          font-weight: 400;
          color: #575757;
          line-height: 1.6;
        }
        /* Responsive tweaks */
        @media (max-width: 767px) {
          .snip1533 { margin: 5px 2px 8px; }
          .snip1533 figcaption { padding: 18% 6% 7%; }
        }
      `}</style>
    </section>
  );
}
