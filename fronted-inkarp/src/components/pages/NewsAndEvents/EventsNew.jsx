import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { EffectFade, Autoplay } from 'swiper/modules';
import { Helmet } from 'react-helmet';

import EventsBanner from "/src/assets/Events/EventBanner.jpg";

import { eventsData } from '../NewsAndEvents/EventsData';

const bannerSlides = [
    {
        id: 1,
        img: EventsBanner,
        title: "Next-Gen Lab Technologies",
        subtitle: "Automation and Innovation",
        date: "2025-09-18",
    },

];

const labCards = [
    ...eventsData,
];

const LabCard = ({ category, title, description, image, date }) => {
    const isPast = new Date(date) < new Date();

    return (
        <div className="relative group overflow-hidden rounded-3xl shadow-md p-2 transition-all duration-300 bg-[#F5F5F5]">
            {/* Card Image with conditional blur on hover if past */}
            <img
                src={image}
                alt={title}
                className={`rounded-2xl w-full h-auto object-cover min-h-[200px] sm:min-h-[250px] md:min-h-[300px] transition duration-300 ease-in-out ${isPast ? 'group-hover:blur-sm group-hover:brightness-75' : ''
                    }`}
            />

            {/* Button Area */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 group-hover:opacity-100 opacity-0 transition-opacity duration-300">
                <button
                    className={`relative px-6 py-2 font-medium rounded-md text-sm ${isPast
                        ? 'bg-[#E63946] text-white font-[MaxOT]'
                        : 'bg-[#E63946] text-white hover:bg-[#b72834]'
                        }`}
                >
                    {isPast ? 'Know More' : 'Join Us'}
                </button>
            </div>
        </div>
    );
};



const SlidingDigit = ({ digit }) => {
    const [prevDigit, setPrevDigit] = useState(digit);
    const [animating, setAnimating] = useState(false);

    useEffect(() => {
        if (digit !== prevDigit) {
            setAnimating(true);
            const timer = setTimeout(() => {
                setAnimating(false);
                setPrevDigit(digit);
            }, 400); // animation duration in ms
            return () => clearTimeout(timer);
        }
    }, [digit, prevDigit]);

    return (
        <div className="relative w-7 h-12 overflow-hidden">
            {/* Previous digit sliding up */}
            <span
                className={`absolute top-0 left-0 w-full h-full flex items-center justify-center text-3xl font-[MaxOT] transition-transform duration-400 text-[#E63946]  rounded-xl ${animating ? '-translate-y-full' : 'translate-y-0'
                    }`}
            >
                {prevDigit}
            </span>

            {/* New digit sliding in from below */}
            <span
                className={`absolute top-full left-0 w-full h-full flex items-center justify-center text-3xl font-bold  transition-transform duration-400 ${animating ? 'translate-y-0' : 'translate-y-full'
                    }`}
            >
                {digit}
            </span>
        </div>
    );
};

const TimeUnit = ({ label, value }) => (
    <div className="flex flex-col items-center">
        <div className="flex space-x-1 select-none">
            {/* Two digits sliding */}
            <SlidingDigit digit={value[0]} />
            <SlidingDigit digit={value[1]} />
        </div>
        <span className="text-xs sm:text-sm uppercase ">
            {label}
        </span>
    </div>
);

const Separator = () => (
    <span className="text-3xl font-bold text-black select-none mx-1">:</span>
);

const EventsNew = () => {
    const [filterMonth, setFilterMonth] = useState('');
    const [filterYear, setFilterYear] = useState('');
    const [upcomingOnly, setUpcomingOnly] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const updateCountdown = () => {
            const eventDate = new Date(bannerSlides[currentSlide].date);
            const now = new Date();
            const diff = eventDate - now;

            if (diff <= 0) {
                setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((diff / (1000 * 60)) % 60);
            const seconds = Math.floor((diff / 1000) % 60);

            setCountdown({ days, hours, minutes, seconds });
        };

        updateCountdown();
        const timer = setInterval(updateCountdown, 1000); // Update every second

        return () => clearInterval(timer);
    }, [currentSlide]);

    const today = new Date();

    const resetFilters = () => {
        setFilterMonth('');
        setFilterYear('');
        setUpcomingOnly(false);
    };

    const filteredCards = labCards.filter((card) => {
        const eventDate = new Date(card.date);
        const matchesMonth = filterMonth ? eventDate.getMonth() + 1 === parseInt(filterMonth) : true;
        const matchesYear = filterYear ? eventDate.getFullYear() === parseInt(filterYear) : true;
        const isUpcoming = upcomingOnly ? eventDate >= today : true;
        return matchesMonth && matchesYear && isUpcoming;
    })
        .sort((a, b) => b.id - a.id);

    // Helper to pad numbers to two digits
    const pad = (num, size = 2) => String(num).padStart(size, '0');

    return (
        <div className="">
            <Helmet>
                <title>News & Events | Inkarp Instruments Pvt Ltd</title>
                <meta
                    name="keywords"
                    content="Scientific Expo, Scientific events, Scientific news, News and events, New Product Launch, Scientific Achievements, Scientific Product Launch, Scientific Industry Trends, Science Lab Events and Exhibitions, Latest Scientific Equipment News, Scientific Research Conferences, Scientific Equipment Exhibitions, Scientific Industry News and Updates, Upcoming Lab Equipment Events."
                />
                <meta
                    name="description"
                    content="Discover the latest from Inkarp Instruments. Visit our News & Events page for insights into industry trends, Scientific Expo, Scientific Equipment Exhibitions, New Product launches, Scientific Research Conferences and advancements in Scientific Technology."
                />
            </Helmet>

            {/* Banner Image Only */}
            <Swiper
                modules={[Autoplay]}
                loop={true}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                className="w-full h-[500px] overflow-hidden"
            >
                {bannerSlides.map((slide, index) => (
                    <SwiperSlide key={index} className="w-full h-full">
                        <div className="relative w-full h-full ">
                            <img
                                src={slide.img}
                                alt={slide.title}
                                className="w-full h-full object-cover rounded-2xl p-5"
                            />
                            <div className="absolute inset-0 z-10"></div>
                            <div className="absolute inset-0 z-20 flex flex-col justify-end items-center p-4">
                                <div className="bg-white/60 rounded-lg shadow px-5 py-3 mb-4">
                                    <div className="flex items-center justify-center space-x-3 text-black">
                                        <TimeUnit label="Days" value={pad(countdown.days)} />
                                        <Separator />
                                        <TimeUnit label="Hours" value={pad(countdown.hours)} />
                                        <Separator />
                                        <TimeUnit label="Min" value={pad(countdown.minutes)} />
                                        <Separator />
                                        <TimeUnit label="Sec" value={pad(countdown.seconds)} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>


            {/* Filters Section */}
            <div className="w-[95%] mx-auto flex flex-col sm:flex-row flex-wrap items-center gap-6 justify-around py-8 bg-gradient-to-br from-white to-gray-100 shadow-xl rounded-xl border border-gray-200">
                {/* Month Filter */}
                <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center items-center">
                    <label className="text-lg font-semibold text-gray-700 min-w-[80px]">Month</label>
                    <select
                        className="w-full sm:w-44 bg-white border border-gray-300 px-4 py-2 rounded-lg text-sm shadow-sm transition focus:ring-2 focus:ring-red-400 focus:border-red-500 outline-none"
                        value={filterMonth}
                        onChange={(e) => setFilterMonth(e.target.value)}
                    >
                        <option value="">All Months</option>
                        {Array.from({ length: 12 }, (_, i) => (
                            <option key={i} value={i + 1}>
                                {new Date(0, i).toLocaleString('default', { month: 'long' })}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Year Filter */}
                <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center items-center">
                    <label className="text-lg font-semibold text-gray-700 min-w-[80px]">Year</label>
                    <select
                        className="w-full sm:w-36 bg-white border border-gray-300 px-4 py-2 rounded-lg text-sm shadow-sm transition focus:ring-2 focus:ring-red-400 focus:border-red-500 outline-none"
                        value={filterYear}
                        onChange={(e) => setFilterYear(e.target.value)}
                    >
                        <option value="">All Years</option>
                        {[2024, 2025, 2026].map((year) => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Upcoming Filter */}
                <div className="w-full sm:w-auto flex items-center gap-3 cursor-pointer select-none">
                    <input
                        type="checkbox"
                        checked={upcomingOnly}
                        onChange={() => setUpcomingOnly(!upcomingOnly)}
                        id="upcoming"
                        className="w-5 h-5 rounded-md accent-red-600 border border-gray-300 shadow-inner transition focus:ring-2 focus:ring-red-400 outline-none"
                    />
                    <label htmlFor="upcoming" className="text-lg font-semibold text-gray-700 cursor-pointer">
                        Upcoming Only
                    </label>
                </div>

                {/* Reset Button */}
                <button
                    onClick={resetFilters}
                    className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold px-5 py-2 rounded-lg shadow-lg transition-transform active:scale-95 focus:outline-none focus:ring-4 focus:ring-red-300"
                    type="button"
                >
                    Reset Filters
                </button>
            </div>



            {/* Event Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-4 md:px-6 lg:px-10 py-2 sm:py-4">
                {filteredCards.length === 0 ? (
                    <div className="col-span-full text-center text-gray-500 py-8">
                        <p className="text-sm sm:text-base">No events found for selected filters.</p>
                    </div>
                ) : (
                    filteredCards.map((card) => <LabCard key={card.id} {...card} />)
                )}
            </div>
        </div>
    );
};

export default EventsNew;


