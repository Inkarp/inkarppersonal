import React from "react";
import { Mail, MapPin, Phone, CalendarDays } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  {
    title: "Our Location",
    lines: [
      "Plot No – 5A/10-11, 3rd Floor,",
      "IDA Nacharam Road No. 1",
      "Hyderabad – 500076",
    ],
    icon: MapPin,
  },
  {
    title: "Mail Us 24/7",
    lines: ["info@inkarp.co.in", "support@inkarp.co.in"],
    icon: Mail,
  },
  {
    title: "Call Us",
    lines: ["+91 99666 34008"],
    icon: Phone,
  },
  {
    title: "Working Days",
    lines: ["Mon–Fri · 09:30am – 05:30pm", "Saturday–Sunday · Closed"],
    icon: CalendarDays,
  },
];

const containerV = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", when: "beforeChildren", staggerChildren: 0.06 },
  },
};
const cardV = {
  hidden: { opacity: 0, y: 22, scale: 0.98 },
  show:   { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: "easeOut" } },
  hover:  { y: -6, boxShadow: "0 14px 40px rgba(230,57,70,0.15)" },
};

export default function ContactNew() {
  return (
    <section className="relative w-[98%] max-w-5xl mx-auto py-5">
      <motion.div
        variants={containerV}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
      >
        {items.map((it, i) => {
          const Icon = it.icon;
          return (
            <motion.article
              key={i}
              variants={cardV}       // ✅ single variants per element
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
              className="group relative rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:border-[#E63946]/45"
              aria-label={it.title}
            >
              <div className="flex flex-col items-center gap-3 p-6 text-center">
                {/* Icon with float + 360° spin on hover */}
                <motion.div
                  animate={{ y: [0, -2, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: i * 0.1 }}
                  className="inline-grid h-12 w-12 place-items-center rounded-2xl bg-[#BE0010]"
                >
                  <span className="will-change-transform block group-hover:animate-[spin_0.6s_linear_1]">
                    <Icon className="w-7 h-7 text-white" />
                  </span>
                </motion.div>

                {/* Title */}
                <h3 className="text-lg font-[MaxOT] text-[#E63946]">{it.title}</h3>

                {/* Lines */}
                <ul className="space-y-1 text-black font-[Roboto]">
                  {it.lines.map(
                    (line, idx) =>
                      line && (
                        <li key={idx} className="text-sm">
                          {it.title.includes("Mail") ? (
                            <a
                              href={`mailto:${line}`}
                              className="font-semibold text-[#333] hover:text-[#E63946] hover:underline"
                            >
                              {line}
                            </a>
                          ) : it.title.includes("Call") && line.includes("+91") ? (
                            <a
                              href={`tel:${line.replace(/\s+/g, "")}`}
                              className="font-semibold text-[#333] hover:text-[#E63946] hover:underline"
                            >
                              {line}
                            </a>
                          ) : (
                            line
                          )}
                        </li>
                      )
                  )}
                </ul>
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}
