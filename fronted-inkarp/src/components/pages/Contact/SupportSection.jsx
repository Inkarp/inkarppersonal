import React from "react";
import { MdEmail, MdPhone } from "react-icons/md";
import { BadgeIndianRupee, Forklift, Mail as MailIcon } from "lucide-react";
import { motion } from "framer-motion";
import ContactNew from "./ContactNew";
import ContactForm from "./ContactForm";

const supportData = [
  {
    title: "Import / Logistics / Customs\nRelated Enquiries",
    email: "saritha@inkarp.co.in",
    phone: "9949018605",
    icon: Forklift,
  },
  {
    title: "Accounts / Finance Enquiries",
    email: "sundar@inkarp.co.in",
    phone: "7032221890",
    icon: BadgeIndianRupee,
  },
  {
    title: "HR Enquiries",
    email: "hrd@inkarp.co.in",
    phone: "8886277717",
    // no icon provided → fallback to MailIcon
  },
];

// animations
const containerV = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", when: "beforeChildren", staggerChildren: 0.08 },
  },
};
const cardV = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  show:   { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: "easeOut" } },
  hover:  { y: -6, boxShadow: "0 14px 40px rgba(230,57,70,0.15)" },
};

export default function SupportSection() {
  return (
    <section className="relative w-[98%] mx-auto py-8 px-4 flex flex-col justify-center">
      {/* animated on-brand background */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(1200px 600px at 20% -10%, rgba(230,57,70,0.08), transparent), radial-gradient(1200px 600px at 80% 110%, rgba(230,57,70,0.08), transparent)",
        }}
      />

      <motion.div
        variants={containerV}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative w-[98%] max-w-4xl mx-auto space-y-6"
      >
        {/* Header */}
        <motion.div variants={cardV} className="flex flex-col items-center justify-center gap-3 text-center">
          <span
            className="px-4 py-1 text-xs sm:text-sm font-[MaxOT] uppercase rounded-full bg-white"
            style={{
              borderImage: "linear-gradient(90deg,#BE0010,#E63946) 1",
              borderWidth: 1,
              borderStyle: "solid",
            }}
          >
            Contact Us
          </span>
          <h2 className="font-[MaxOT] text-3xl text-[#E63946]">For Support &amp; Enquiries</h2>
          <p className="font-[Roboto] text-base text-black/80">
            For smooth coordination, please reach out to the respective teams for any of the following queries:
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {supportData.map((item, idx) => {
            const Icon = item.icon || MailIcon;
            return (
              <motion.article
                key={idx}
                variants={cardV}           // ✅ single variants per element
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
                className="group relative rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:border-[#E63946]/45"
                aria-label={item.title.replace(/\n/g, " ")}
              >
                <div className="flex flex-col items-center gap-3 p-6 text-center text-[#111827]">
                  {/* Icon tile with subtle float + 360° spin on hover */}
                  <motion.div
                    animate={{ y: [0, -2, 0] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: idx * 0.1 }}
                    className="inline-grid h-12 w-12 place-items-center rounded-2xl bg-[#BE0010]"
                  >
                    <span className="will-change-transform block group-hover:animate-[spin_0.6s_linear_1]">
                      <Icon className="w-7 h-7 text-white" />
                    </span>
                  </motion.div>

                  {/* Title */}
                  <h3 className="font-[MaxOT] text-lg text-[#E63946] leading-snug">
                    {item.title.split("\n").map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </h3>

                  {/* Contact lines */}
                  <ul className="space-y-2 font-[Roboto]">
                    <li className="text-sm">
                      <a
                        href={`mailto:${item.email}`}
                        className="font-semibold text-[#333] hover:text-[#E63946] hover:underline inline-flex items-center gap-2"
                        aria-label={`Email ${item.email}`}
                      >
                        <MdEmail className="text-[#E63946] text-base shrink-0" />
                        {item.email}
                      </a>
                    </li>
                    <li className="text-sm">
                      <a
                        href={`tel:+91${item.phone}`}
                        className="font-semibold text-[#333] hover:text-[#E63946] hover:underline inline-flex items-center gap-2"
                        aria-label={`Call +91 ${item.phone}`}
                      >
                        <MdPhone className="text-[#E63946] text-base shrink-0" />
                        +91 {item.phone}
                      </a>
                    </li>
                  </ul>
                </div>
              </motion.article>
            );
          })}
        </div>
      </motion.div>

      {/* matches style below */}
      <ContactNew />
      <ContactForm />
    </section>
  );
}
