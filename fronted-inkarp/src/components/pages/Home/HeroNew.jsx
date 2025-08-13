import React, { useState } from "react";
import { Search } from "lucide-react";

import HeroImg1 from "/src/assets/HeroSection/RadleysCollabration4.jpg";

/** sample data (same structure as your bootstrap version) */
const courses = [
    [
        {
            photo: "https://cdn.easyfrontend.com/pictures/featured/featured_10_1.png",
            label: "Technology",
            courses: 17,
        },
        {
            photo: "https://cdn.easyfrontend.com/pictures/featured/featured_10_2.png",
            label: "Marketing",
            courses: 9,
        },

    ],
    [
        {
            photo: HeroImg1,
            label: "Technology",
            courses: 17,
        },
        {
            photo: HeroImg1,
            label: "Marketing",
            courses: 9,
        },
        {
            photo: HeroImg1,
            label: "Designing",
            courses: 22,
        },
    ],

];

function SearchForm() {
    return (
        <form className="w-full max-w-xl mx-auto mt-4">
            <div className="relative flex items-stretch">
                <input
                    type="search"
                    placeholder="Search for Products"
                    className="w-full h-12 rounded-xl bg-white/70 backdrop-blur border border-gray-200 px-4 pr-12 text-gray-900 placeholder:font-medium placeholder:text-black/60 focus:outline-none focus:ring-2 focus:ring-[#E63946]"
                />
                <button
                    type="submit"
                    className="absolute right-1 top-1 h-10 px-4 rounded-lg text-white bg-gradient-to-r from-[#BE0010] to-[#E63946] hover:opacity-90 transition"
                >
                    <Search className="w-5 h-5" />
                </button>
            </div>
        </form>
    );
}

function CoursesCarousel() {
    const [index, setIndex] = useState(0);
    const total = courses.length;

    const prev = () => setIndex((i) => (i - 1 + total) % total);
    const next = () => setIndex((i) => (i + 1) % total);

    const page = courses[index];

    return (
        <div className="relative -mt-24 md:-mt-28 z-10">
            <div className="max-w-6xl mx-auto px-4">
                <div className="relative">
                    {/* cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {page.map((course, i) => (
                            <div
                                key={i}
                                className="group relative rounded-2xl overflow-hidden shadow-lg"
                            >
                                <img
                                    src={course.photo}
                                    alt={course.label}
                                    className="w-full h-[280px] object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90" />
                                <div className="absolute inset-x-0 bottom-6 flex flex-col items-center text-white px-4">
                                    <h4 className="text-2xl font-semibold font-[MaxOT]">
                                        {course.label}
                                    </h4>
                                    <p className="text-base opacity-90">
                                        {course.courses} Courses
                                    </p>
                                    <button className="mt-3 px-5 py-2 rounded-full bg-gradient-to-r from-[#BE0010] to-[#E63946] text-white text-sm font-medium shadow-md hover:opacity-90 transition">
                                        View All
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* nav buttons */}
                    <button
                        onClick={prev}
                        aria-label="Previous"
                        className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-[#E63946]/80 hover:bg-[#E63946] text-white shadow-lg absolute left-0 -translate-x-6 top-1/2 -translate-y-1/2 transition"
                    >
                        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <button
                        onClick={next}
                        aria-label="Next"
                        className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-[#E63946]/80 hover:bg-[#E63946] text-white shadow-lg absolute right-0 translate-x-6 top-1/2 -translate-y-1/2 transition"
                    >
                        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default function HeroNew() {
    return (
        <section className="relative bg-red-50 w-[98%] mx-auto  overflow-hidden">
            {/* topbar */}
            <div
                className="relative flex items-end justify-center text-white text-center h-[600px] bg-cover bg-center"
                style={{ backgroundImage: `url(${HeroImg1})` }}
            >
                <div className="absolute inset-0 " />
                <div className="relative z-10 w-full py-5">
                    
                    <div className="w-fit mx-auto p-4 bg-white/70 rounded-lg">
                        <h1 className="font-[Roboto] font-bold text-[#E63946] leading-tight text-3xl">
                            25 Years
                        </h1>
                        <p className="mt-4 text-lg md:text-xl text-black font-[Roboto]">
                            TRUST.GROWTH.SCIENCE
                        </p>

                    </div>
                    <SearchForm />
                </div>
            </div>

            {/* courses */}
            {/* <div className="py-10 md:py-16">
                <CoursesCarousel />
            </div> */}
        </section>
    );
}
