import React from "react";
import { MdEmail, MdPhone } from "react-icons/md";

const supportData = [
  {
    title: "Import / Logistics / Customs\nRelated Enquiries",
    email: "saritha@inkarp.co.in",
    phone: "9949018605",
  },
  {
    title: "Accounts / Finance Enquiries",
    email: "sundar@inkarp.co.in",
    phone: "7032221890",
    alert: true,
  },
  {
    title: "HR Enquiries",
    email: "hrd@inkarp.co.in",
    phone: "8886277717",
  },
];

export default function SupportSection() {
  return (
    <section className="relative w-full py-8 px-4 flex justify-center">
      {/* soft on-brand background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(230,57,70,0.08),transparent),radial-gradient(1200px_600px_at_80%_110%,rgba(230,57,70,0.08),transparent)]" />

      <div className="relative w-[98%] max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col items-center justify-center gap-3 text-center"> 
            <span
          className="px-4 py-1 text-xs sm:text-sm font-[MaxOT] uppercase rounded-full bg-white"
          style={{
            borderImage: 'linear-gradient(90deg,#BE0010,#E63946) 1',
            borderWidth: 1,
            borderStyle: 'solid',
          }}
        >
          Contact Us
        </span>
          <h2 className="font-[MaxOT] text-3xl text-[#E63946]">
            For Support &amp; Enquiries
          </h2>

          <p className="font-[Roboto] text-base text-black/80">
            For smooth coordination, please reach out to the respective teams
            for any of the following queries:
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {supportData.map((item, idx) => (
            <article
              key={idx}
              className="relative rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:border-[#E63946]/45 hover:shadow-lg hover:-translate-y-0.5"
              aria-label={item.title.replace(/\n/g, " ")}
            >
              <div className="relative p-4 text-left flex flex-col gap-2 text-[#111827]">
                <div className="flex items-start justify-between">
                  <h3 className="font-[MaxOT] text-[1rem] text-[#E63946] leading-snug text-[#0f1b33]">
                    {item.title.split("\n").map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </h3>
                </div>

                <p className="flex items-center gap-2 text-sm font-[Roboto]">
                  <MdEmail className="text-[#E63946] text-base shrink-0" />
                  <a
                    href={`mailto:${item.email}`}
                    className="font-semibold text-[#333] hover:text-[#E63946] hover:underline"
                    aria-label={`Email ${item.email}`}
                  >
                    {item.email}
                  </a>
                </p>

                <p className="flex items-center gap-2 text-sm font-[Roboto]">
                  <MdPhone className="text-[#E63946] text-base shrink-0" />
                  <a
                    href={`tel:+91${item.phone}`}
                    className="font-semibold text-[#333] hover:text-[#E63946] hover:underline"
                    aria-label={`Call +91 ${item.phone}`}
                  >
                    +91 {item.phone}
                  </a>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
