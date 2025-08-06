import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useParams, Link, useNavigate } from "react-router-dom";
import Maccor from '/src/assets/PrincipalLogos/RowTwo/Maccor.jpg';
import HohsenCorp from '/src/assets/PrincipalLogos/RowTwo/header.png';
import LabStation from '/src/assets/PrincipalLogos/RowTwo/labstation.svg';

import AutomaticCoinCellCrimper from "/images/products/HoshenCorp/automatic-coin-cell-crimper.png";
import ManualCoinCellCrimper from "/images/products/HoshenCorp/manual-coin-cell-crimper.png";
import MixingMachine from "/images/products/HoshenCorp/mixing-machine.png";

import LabstationIGlovebox from "/images/products/Labstation/labstation-i-glovebox-and-accessories.jpg";
import LabstationISizeConfig from "/images/products/Labstation/labstation-i-size-configuration.jpg";
import LabstationISPS from "/images/products/Labstation/labstation-i-sps.jpeg";

import Model4200 from "/images/products/Maccor/Model4200.png";
import Model4300 from "/images/products/Maccor/Model4300.png";
import Model4304 from "/images/products/Maccor/Model4304.png";
import Model4400 from "/images/products/Maccor/Model4400.png";
import Series4000 from "/images/products/Maccor/Series4000.png";
import Series4600 from "/images/products/Maccor/Series4600.png";




const synthesisData = [
  {
    principal: "Hohsen Corp",
    logo: HohsenCorp,
    products: [
      "Equipment for Battery",
    ],
  },
  {
    principal: "Maccor",
    logo: Maccor,
    products: [
      "Battery and Cell Test Equipment",
    ],
  },
  {
    principal: "Labstation",
    logo: LabStation,
    products: [
      "Glovebox workstations",
      "Solvent Purifiers",
    ],
  }
];

const synthesisProducts = {
  "equipment-for-battery": {
    models: [
      { heading: "Standard Models" },
      {
        name: "Automatic Coin Cell Crimper",
        slug: "automatic-coin-cell-crimper",
        image: AutomaticCoinCellCrimper,
      },
      {
        name: "Manual Coin Cell Crimper",
        slug: "manual-coin-cell-crimper",
        image: ManualCoinCellCrimper,
      },
      {
        name: "Mixing Machine",
        slug: "mixing-machine",
        image: MixingMachine,
      },
    ],
    meta: {
      title: "Battery Equipment – Coin Cell Crimper & Mixing Machine Distributor in India | Inkarp",
      description: "Explore precision battery research equipment from Hohsen Corp, including automatic and manual coin cell crimpers and mixing machines. Distributed by Inkarp Instruments across India.",
      keywords: [
        "Battery Equipment India",
        "Coin Cell Crimper Machine",
        "Battery Mixing Machine",
        "Battery Lab Equipment India",
        "Automatic Crimper India",
        "Manual Crimper India",
        "Hohsen Corp Distributor India"
      ],
      altText: "Battery Lab Equipment from Hohsen Corp",
      internalLinks: ["hohsen-corp-products", "battery-lab-solutions"],
      externalLinks: ["https://www.hohsen.com"]
    },
  },

  "battery-and-cell-test-equipment": {
    models: [
      { heading: "Standard Models" },
      {
        name: "Series 4000",
        slug: "series-4000",
        image: Series4000,
      },
      {
        name: "Series 4600",
        slug: "series-4600",
        image: Series4600,
      },
      {
        name: "Model 4200",
        slug: "model-4200",
        image: Model4200,
      },
      {
        name: "Model 4300",
        slug: "model-4300",
        image: Model4300,
      },
      {
        name: "Model 4304",
        slug: "model-4304",
        image: Model4304,
      },
      {
        name: "Model 4400",
        slug: "model-4400",
        image: Model4400,
      },


    ],
    meta: {
      title: "Battery Test Equipment – Maccor Cell Testing Systems Distributor in India | Inkarp",
      description: "Discover high-precision battery and cell testing systems from Maccor, including models 4200, 4300, 4400 series, and more. Trusted solutions distributed by Inkarp in India.",
      keywords: [
        "Battery Testing Systems",
        "Maccor Distributor India",
        "Cell Testing Equipment",
        "Battery Test Equipment",
        "Battery Analyzer India",
        "Electrochemical Testing India",
        "Maccor Testers India"
      ],
      altText: "Battery Testing Equipment by Maccor",
      internalLinks: ["maccor-products", "battery-testing-solutions"],
      externalLinks: ["https://www.maccor.com"]
    },
  },

  "glovebox-workstations": {
    models: [
      { heading: "Standard Models" },
      {
        name: "Labstation I Glovebox & Analyzer",
        slug: "labstation-glovebox-analyzer",
        image: LabstationIGlovebox,
      },
      {
        name: "Labstation Size Configurations",
        slug: "labstation-size-configuration",
        image: LabstationISizeConfig,
      },


    ],
    meta: {
      title: "Labstation Glovebox Workstations – Controlled Atmosphere Systems | Inkarp India",
      description: "Explore Labstation glovebox workstations and SPS setups for controlled atmosphere applications. Ideal for battery, pharma, and research labs. Available from Inkarp Instruments.",
      keywords: [
        "Labstation India",
        "Glovebox Workstations",
        "SPS Glovebox System",
        "Controlled Atmosphere Equipment",
        "Labstation SPS",
        "Glovebox for Battery Labs",
        "Inkarp Labstation Products"
      ],
      altText: "Labstation Workstations and Gloveboxes",
      internalLinks: ["labstation-products", "glovebox-solutions"],
      externalLinks: ["https://www.labstation.com"]
    },
  },

  "solvent-purifiers": {
    models: [

      {
        name: "Labstation SPS",
        slug: "labstation-sps",
        image: LabstationISPS,
      },
    ],
    meta: {
      title: "Solvent Purifiers & SPS Systems – Labstation Distributor in India | Inkarp",
      description: "Labstation’s SPS solvent purifiers offer clean, controlled solvent delivery for glovebox and chemical lab applications. Distributed and serviced across India by Inkarp.",
      keywords: [
        "Solvent Purifier System India",
        "Labstation SPS",
        "Controlled Solvent Systems",
        "Glovebox Solvent Solutions",
        "Labstation Distributor India",
        "Chemical Solvent Delivery",
        "Solvent Purification Systems"
      ],
      altText: "Solvent Purification and Delivery System",
      internalLinks: ["solvent-purifier-products", "labstation-solutions"],
      externalLinks: ["https://www.labstation.com"]
    },
  },
};



export default function MaterialScienceProducts() {
  const navigate = useNavigate();
  const { type = "weighing-balance" } = useParams();
  const selectedData = synthesisProducts[type];
  const meta = selectedData?.meta;
  const pageData = selectedData?.pageData || {};
  const products = selectedData?.models || selectedData || [];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = pageData?.faqs || [];

  const getPrincipalLogoByType = (type) => {
    const readableType = type.replaceAll("-", " ").toLowerCase();

    for (let principal of synthesisData) {
      const match = principal.products.find((product) =>
        product.toLowerCase().includes(readableType)
      );
      if (match) return principal.logo;
    }

    return null; // fallback if no match found
  };


  return (
    <>
      <div className="flex w-full h-full overflow-hidden">
        {meta && (
          <Helmet>
            <title>{meta.title}</title>
            <meta name="description" content={meta.description} />
            <meta name="keywords" content={meta.keywords?.join(", ")} />
            <meta property="og:title" content={meta.title} />
            <meta property="og:description" content={meta.description} />
            <meta name="robots" content="index, follow" />
          </Helmet>
        )}

        {/* Main Content */}
        <main className="w-full h-full overflow-y-auto py-2 px-5 font-[Roboto]">
          <div className="flex items-center justify-around mb-6 bg-gray-100 rounded-lg shadow-xl">
            <h2 className="text-4xl font-bold text-[#0a2540] capitalize font-[MaxOT]">
              {type.replaceAll("-", " ")}
            </h2>
            <img
              src={getPrincipalLogoByType(type)}
              alt="Synthesis Partner Logo"
              className="w-32 h-32 object-contain rounded"
            />
          </div>

          {/* Now load dynamic content here */}
          <div className="p-6 max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-4 text-center font-[MaxOT]">{pageData.title}</h1>
            <p className="mb-6">{pageData.intro}</p>
            <p>{pageData.highlight}</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-3">
              <h2 className="text-2xl font-semibold font-[MaxOT]">{pageData.modelHeading}</h2>
              {products.map((product, index) =>
                product.slug ? (
                  <Link
                    key={index}
                    to={`/verticals/material-science-and-battery/${type}/${product.slug}`}
                    className="bg-[#F5F5F5] rounded-xl shadow-xl hover:shadow-lg transition duration-300 p-4 flex flex-col items-center text-center hover:scale-[1.03] hover:translate-y-2 hover:bg-white font-[Roboto] text-[#0a2540] font-semibold"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-auto object-contain mb-4 rounded"
                    />
                    <h3 className="text-lg font-semibold text-[#0a2540] font-[MaxOT]">{product.name}</h3>
                    {/* {product.description && (
                      <p className="text-sm text-gray-600 mt-1 font-[Roboto]">{product.description}</p>
                    )} */}
                  </Link>
                ) : (
                  <div key={index} className="col-span-full">
                    <h3 className="text-xl font-semibold text-[#E63946] mt-8 mb-2 font-[MaxOT]">{product.heading}</h3>
                  </div>
                )
              )}
            </div>

            {pageData.infoSection && (
              <>
                <h2 className="text-2xl font-semibold mt-8 mb-2 font-[MaxOT]">{pageData.infoSection.title}</h2>
                <p className="mb-6 whitespace-pre-line">{pageData.infoSection.description}</p>
              </>
            )}

            {pageData.subSection && (
              <>
                <h2 className="text-2xl font-semibold mt-8 mb-2 font-[MaxOT]">{pageData.subSection.title}</h2>
                <p className="mb-6">{pageData.subSection.description}</p>
              </>
            )}

            {pageData.industries && (
              <section className="mt-16">
                <h2 className="text-3xl font-semibold mb-4 text-[#0a2540] font-[MaxOT]">Industries We Serve</h2>
                <p className="mb-8 text-gray-700 font-[Roboto]">{pageData.industriesIntro}</p>

                <div className="space-y-8">
                  {pageData.industries.map((item, idx) => (
                    <div key={idx}>
                      <h3 className="text-xl font-bold text-[#E63946] mb-2 font-[MaxOT]">{item.title}</h3>
                      <p className="text-gray-700 font-[Roboto]">{item.description}</p>
                    </div>
                  ))}
                </div>

                <h2 className="text-3xl font-semibold mt-16 mb-6 text-[#0a2540] font-[MaxOT]">
                  Key Advantages of Rotary Evaporators – Industry-wise Benefits
                </h2>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {pageData.industries.map((industry, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition duration-300 p-6"
                    >
                      <h3 className="text-lg font-bold text-[#E63946] mb-3 font-[MaxOT]">{industry.title}</h3>
                      <ul className="list-disc list-inside text-gray-700 text-sm font-[Roboto] space-y-2">
                        {industry.benefits.map((benefit, i) => (
                          <li key={i}>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {pageData.distributor && (
              <section className="mt-20">
                <h2 className="text-3xl font-semibold mb-3 text-[#0a2540] font-[MaxOT]">
                  {pageData.distributor.title}
                </h2>
                <p className="text-gray-700 font-[Roboto] whitespace-pre-line leading-relaxed">
                  {pageData.distributor.text}
                </p>
              </section>
            )}

            {/* FAQs */}
            {faqs.length > 0 && (
              <>
                <h2 className="text-2xl font-semibold text-center mb-1 font-[MaxOT] mt-10">Frequently Asked Questions</h2>
                <div className="w-full mx-auto p-4 md:p-8 rounded-xl">
                  <div id="accordion-collapse" data-accordion="collapse" className="space-y-0">
                    {faqs.map((faq, index) => (
                      <div key={index}>
                        <h2 id={`accordion-collapse-heading-${index}`}>
                          <button
                            type="button"
                            className={`flex items-center justify-between w-full p-5 font-medium text-left border-l-2 border border-[#E63946] ${index === 0 ? 'rounded-t-xl' : ''} ${openIndex === index ? 'text-black bg-gray-100' : 'text-gray-800 hover:bg-gray-100'}`}
                            onClick={() => toggleFAQ(index)}
                            aria-expanded={openIndex === index}
                            aria-controls={`accordion-collapse-body-${index}`}
                          >
                            <span className="text-xl font-semibold font-[MaxOT]">{faq.question}</span>
                            <svg
                              data-accordion-icon
                              className={`w-6 h-6 shrink-0 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                        </h2>
                        <div
                          id={`accordion-collapse-body-${index}`}
                          aria-labelledby={`accordion-collapse-heading-${index}`}
                          className={`${openIndex === index ? '' : 'hidden'}`}
                        >
                          <div className="p-5 border border-gray-200 border-t-0 bg-gray-50 text-gray-700 font-[Roboto]">
                            {faq.answer}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </main>
      </div>
    </>
  );
}

