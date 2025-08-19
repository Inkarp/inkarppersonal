import { useState } from "react";
import { ArrowRight } from "lucide-react";
import DefaultImg from "/InkarpBuilding.jpg";


const TABS = [
    {
        key: "history",
        label: "Our History",
        heading: "Four Decades of Growth & Strategic Acquisitions",
        body:
            "As an industry leader, we are relentless in our pursuit of advancing the science of wellness and working with our parent company and our laboratory partner allowing us to uphold high standards of accuracy and reliability so we can continue to earn the trust of healthcare providers and patients across the country.",
        cta: "Discover More Info",
        img: DefaultImg,
    },
    {
        key: "evolution",
        label: "Our Evolution",
        heading: "From Core Instruments to Integrated, Data-Ready Platforms",
        body:
            "Across decades, we expanded capabilities, instrumentation, and data systems to serve complex clinical and R&D needs with speed, traceability, and scalability.",
        cta: "Discover More Info",
        img: DefaultImg,
    },
    {
        key: "philosophy",
        label: "Our Philosophy",
        heading: "Science-First. Customer-Centric. Quality-Driven.",
        body:
            "We invest in people, training, and technology to ensure every test result is accurate, actionable, and delivered with care for the communities we serve.",
        cta: "Discover More Info",
        img: DefaultImg,
    },
    {
        key: "quality",
        label: "Commitment To Quality",
        heading: "Validated Processes. Reliable Results. Global Standards.",
        body:
            "From sample integrity to result reporting, our processes are validated, audited, and continuously improved to exceed regulatory and customer expectations.",
        cta: "Discover More Info",
        img: DefaultImg,
    },
];


export default function InkarpBio({
    tabs = TABS,
    defaultKey = "history",
    onCta = () => { },
}) {
    const [activeKey, setActiveKey] = useState(defaultKey);
    const active = tabs.find((t) => t.key === activeKey) || tabs[0];

    return (
        <section className="w-full mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 my-10 font-[Roboto]">
            {/* Top intro text */}
            <div className="text-center flex flex-col items-center justify-center max-w-3xl mx-auto gap-3">
                <span
                    className="px-4 py-1 text-xs sm:text-sm font-[MaxOT] uppercase rounded-full bg-white"
                    style={{
                        borderImage: "linear-gradient(90deg,#BE0010,#E63946) 1",
                        borderWidth: 1,
                        borderStyle: "solid",
                    }}
                >
                    Inkarp Bio
                </span>

                <h1 className="text-xl sm:text-2xl font-[MaxOT] text-[#E63946] leading-tight">
                    Purpose <span className="font-[Roboto]">&</span> Promise
                </h1>

                <p className="text-sm sm:text-base font-[Roboto] text-black/80">
                    With over four decades of experience, we partner with global leaders to empower research,
                    diagnostics, and industry through reliable, precise instrumentation and personalized support.
                </p>
            </div>

            {/* Tabs container (pill with rounded corners) */}
            <div className="rounded-2xl bg-white shadow-[0_10px_40px_rgba(2,6,23,0.08)] ring-1 ring-gray-100 overflow-hidden">
                {/* Tab headers */}
                <div className="relative flex flex-wrap">
                    {tabs.map((tab) => {
                        const isActive = tab.key === activeKey;
                        return (
                            <button
                                key={tab.key}
                                onClick={() => setActiveKey(tab.key)}
                                className={[
                                    "relative flex-1 min-w-[180px] px-5 py-4 text-sm sm:text-base font-semibold transition-colors font-[MaxOT]",
                                    "border-b border-gray-100",
                                    isActive
                                        ? "bg-[#E63946] text-white"
                                        : "bg-white text-[#0F172A] hover:bg-gray-50",
                                ].join(" ")}
                            >
                                {tab.label}
                                {/* little triangle arrow under active tab */}
                                {isActive && (
                                    <span
                                        className="absolute left-1/2 -bottom-[9px] -translate-x-1/2 h-0 w-0"
                                        style={{
                                            borderLeft: "7px solid transparent",
                                            borderRight: "7px solid transparent",
                                            borderTop: "9px solid #E63946",
                                        }}
                                    />
                                )}
                            </button>
                        );
                    })}
                </div>

                {/* Content area */}
                <div className="p-5 sm:p-8 lg:p-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        {/* Text block */}
                        <div>
                            <h3 className="text-xl sm:text-2xl font-extrabold font-[MaxOT]">
                                {active.heading}
                            </h3>
                            <p className="mt-4 text-sm sm:text-base leading-7 text-slate-600">
                                {active.body}
                            </p>

                            {/* <button
                onClick={onCta}
                className="mt-6 inline-flex items-center gap-2 rounded-lg border border-slate-300 hover:border-[#E63946] px-4 py-2 text-[#0F172A] hover:text-[#E63946] transition"
              >
                <span>{active.cta}</span>
                <ArrowRight className="h-4 w-4" />
              </button> */}
                        </div>

                        {/* Image */}
                        <div className="lg:justify-self-end">
                            <div className="rounded-xl overflow-hidden shadow-md">
                                <img
                                    src={active.img}
                                    alt={active.label}
                                    className="w-full h-[260px] sm:h-[320px] md:h-[360px] object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* soft footer curve feel via padding */}
                    <div className="pt-4" />
                </div>
            </div>
        </section>
    );
}
