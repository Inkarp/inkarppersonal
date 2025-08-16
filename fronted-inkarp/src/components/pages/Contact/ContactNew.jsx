import React from "react";
import { Mail, MapPin, Phone, CalendarDays, ArrowUpRight } from "lucide-react";

const items = [
   {
    title: "Our Location",
    lines: [
      "Inkarp Instruments Pvt Ltd",
      "Plot No – 5A/10-11, 3rd Floor,",
      "IDA Nacharam Road No. 1, Hyderabad – 500076",
    ],
    icon: MapPin,
  },
  {
    title: "Mail Us 24/7",
    lines: ["info@inkarp.co.in", "support@inkarp.co.in"],
    icon: Mail,
  },
 
  {
    title: "Call Us 24/7",
    lines: ["Phone: +91 40 2717 2293", "Mobile: +91 99666 34008"],
    icon: Phone,
  },
  {
    title: "Working Days",
    lines: ["Mon–Fri · 09:00am – 06:00pm", "Saturday–Sunday · Closed"],
    icon: CalendarDays,
  },
];

export default function ContactNew() {
  return (
    <section className="w-[98%] mx-auto py-8 md:px-10 lg:px-20">      
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {items.map((it, i) => (
          <article
            key={i}
            className="relative rounded-3xl border border-gray-200 bg-white p-3 sm:p-8 shadow-sm"
          >
            <h3 className="text-xl font-[MaxOT] text-[#E63946] ">{it.title}</h3>
            <ul className="mt-4 space-y-1 text-black/70 font-[Roboto]">
              {it.lines.map((line, idx) => (
                <li key={idx} className="text-sm">{line}</li>
              ))}
            </ul>

            <div className="mt-6 inline-grid h-16 w-16 place-items-center rounded-2xl bg-[#F5F5F5]">
              <it.icon className="w-7 h-7 text-[#E63946]" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
