import React, { useState } from "react";
import { CalendarDays, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { cardData } from "../NewsAndEvents/BlogsPage";

import HeiVapCore from "/images/products/heidolph/Hei-VAP-HL-G3.webp";
import HeiVapExpert from "/images/products/heidolph/Hei-VAP-Expert.webp";
import HeiVapUltimate from "/images/products/heidolph/Hei-VAP-Ultimate.webp";
import HeiVapUltimateControl from "/images/products/heidolph/Hei-VAP-Ultimate-Control.webp";
import HeiVapExpertControl from "/images/products/heidolph/Hei-VAP-Expert-Control.webp";

const articles = cardData;

export default function HomeBlogs() {
  const [featured, setFeatured] = useState(articles[0]);
  const [activeId, setActiveId] = useState(articles[0].id);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleSelect = (item) => {
    setActiveId(item.id);
    setFeatured(item);
    setMobileOpen(false);
  };

  const handleReadMore = (item) => {
    navigate(`/insights-and-updates/blogs/${item.id}`, { state: { card: item } });
  };

  return (
    <section className="relative w-[98%] mx-auto p-5 ">
      {/* Soft stage background (on-brand) */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(230,57,70,0.08),transparent),radial-gradient(1200px_600px_at_80%_110%,rgba(230,57,70,0.08),transparent)]" />

      {/* Heading – matches other sections */}
      <div className="text-center flex flex-col justify-center items-center gap-3">
        <span
          className="px-4 py-1 text-xs sm:text-sm font-[MaxOT] uppercase rounded-full bg-white"
          style={{
            borderImage: 'linear-gradient(90deg,#BE0010,#E63946) 1',
            borderWidth: 1,
            borderStyle: 'solid',
          }}
        >
          Blogs
        </span>
        <h1
          data-animate
          className=" text-xl sm:text-2xl font-[MaxOT] text-[#E63946] leading-tight text-center"
        >
          Expert Perspectives | Real-World Lab Applications
        </h1>
      </div>
      {/* Mobile/Tablet dropdown (visible < lg) */}
      <div className="lg:hidden mt-5 relative max-w-xl mx-auto">
        <button
          onClick={() => setMobileOpen((o) => !o)}
          aria-expanded={mobileOpen}
          aria-controls="blogs-mobile-dropdown"
          className="w-full flex items-center justify-between rounded-xl border border-gray-200 bg-white text-left px-4 py-3 transition hover:bg-red-50"
        >
          <span className="font-[Roboto]  text-[#E63946] line-clamp-1">
            {featured?.title}
          </span>
          {mobileOpen ? (
            <ChevronUp className="w-4 h-4 text-[#E63946]" />
          ) : (
            <ChevronDown className="w-4 h-4 text-[#E63946]" />
          )}
        </button>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              id="blogs-mobile-dropdown"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18 }}
              className="absolute z-20 mt-2 w-full rounded-xl border border-gray-200 bg-white shadow-lg overflow-hidden"
            >
              <ul className="max-h-72 overflow-y-auto">
                {articles.slice(0, 3).map((item) => {
                  const isActive = activeId === item.id;
                  return (
                    <li key={item.id}>
                      <button
                        onClick={() => handleSelect(item)}
                        className={`w-full text-left px-4 py-3 border-b last:border-b-0 transition ${isActive
                            ? "bg-[#F5F5F5] text-[#E63946] font-semibold"
                            : "hover:bg-[#E63946] hover:text-white"
                          }`}
                      >
                        <div className="text-sm font-[Roboto] line-clamp-2">{item.title}</div>
                        <div className="mt-1 flex items-center gap-2 text-xs opacity-80">
                          <CalendarDays size={14} />
                          {new Date(item.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </div>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Content frame with gradient border + glass */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="mt-6 rounded-3xl p-[1.5px] border border-gray-200"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* LEFT – Blog list (hidden on mobile/tablet) */}
          <div className="lg:col-span-6 hidden lg:block">
            <div className="rounded-2xl p-4 sm:p-5 h-full">
              <div className="flex flex-col gap-3 items-center justify-center overflow-y-auto custom-scroll max-h-[540px]">
                {articles.slice(0, 3).map((item) => {
                  const isActive = activeId === item.id;
                  return (
                    <motion.button
                      key={item.id}
                      whileHover={{ y: -2 }}
                      onClick={() => handleSelect(item)}
                      className={`text-left rounded-xl border p-3 transition w-full ${isActive
                          ? "bg-[#F5F5F5] border border-[#E63946] shadow-md text-[#E63946]"
                          : "bg-white text-black border-gray-200 hover:bg-[#E63946] hover:text-white"
                        }`}
                      aria-pressed={isActive}
                    >
                      <h4 className="text-sm sm:text-base  font-[MaxOT] text-center">
                        {item.title}
                      </h4>
                      <div className="flex items-center justify-center gap-2 text-xs sm:text-sm mt-1">
                        <span className="inline-flex items-center gap-1">
                          <CalendarDays size={14} />
                          {new Date(item.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT – Featured article */}
          <div className="lg:col-span-6">
            <motion.div
              key={activeId}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
              className="h-full p-4 sm:p-5"
            >
              <div className="flex flex-col gap-6 h-[500px]">
                <div className="relative rounded-3xl overflow-hidden border border-gray-200">
                  <img
                    src={HeiVapCore}
                    alt={featured.title}
                    className="w-full h-full object-contain"
                  />
                  {/* top accent line */}
                  <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#BE0010] to-[#E63946]" />
                </div>

                <div className="flex flex-col items-center gap-3 w-full min-h-[180px]">
                  {/* <p className="text-xs sm:text-sm text-[#E63946] uppercase tracking-wider text-center">
                    {new Date(featured.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}{" "}
                    <span className="text-[#E63946] font-medium"> • {featured.location}</span>
                  </p> */}

                  <p className="text-sm sm:text-base text-center font-[Roboto] w-full">
                    {featured.description}
                  </p>

                  <button
                    className="px-6 py-3 rounded-full text-white font-[Roboto] text-sm font-bold w-fit inline-flex items-center gap-2 relative overflow-hidden"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleReadMore(featured);
                    }}
                  >
                    <span className="absolute inset-0 rounded-full bg-[linear-gradient(90deg,#BE0010,#E63946)]" />
                    <span className="relative z-10 inline-flex items-center gap-2">
                      Read More <ArrowRight size={16} />
                    </span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
