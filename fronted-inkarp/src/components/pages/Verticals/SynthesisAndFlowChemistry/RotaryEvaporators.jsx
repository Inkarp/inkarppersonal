import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useParams, Link, useNavigate } from "react-router-dom";

import Heidolph from '/src/assets/PrincipalLogos/RowOne/Heidolph.svg';
import Polyscience from "/src/assets/PrincipalLogos/RowOne/Polyscience.png";
import Radleys from "/src/assets/PrincipalLogos/RowOne/radley.svg";
import Rotzmeier from "/src/assets/PrincipalLogos/RowOne/Rotzmeier.gif";
import ThalesNano from "/src/assets/PrincipalLogos/RowOne/ThalesNano.jpg";
import Bruker from "/src/assets/PrincipalLogos/RowSeven/Bruker.svg";
import ProductDistributorSection from "../ProductDistributorSection";

// import { RotaryProducts } from '../../../../data/RotaryProducts';
import { RotaryProducts } from "../../../../data/RotaryProducts";
import { BrukerData } from "../../../../data/BrukerData";

const synthesisData = [
  {
    principal: "Heidolph",
    logo: Heidolph,
    products: [
      "Rotary Evaporators",
      "Large Scale Rotary Evaporators",
      "Continuous Automatic Distillation Module",
      "Magnetic Stirrers",
      "Overhead Stirrers",
      "Shakers Mixers",
      "Peristaltic Pumps",
      "Processing Solutions",
      "Smart cell cultivation",
      "Accessories"
    ],
  },
  {
    principal: "Bruker",
    logo: Bruker,
    products: [
      "FTIR Spectrometer",
      "FTIR Research Spectrometer",
      "FT-NIR Spectrometer",
      "Raman Spectrometer",
      "FTIR Microscopes",
      "Process Monitoring",
      "Raman Microscopes",
    ],
  },
  {
    principal: "Polyscience",
    logo: Polyscience,
    products: [
      "Circulating Baths",
      "Application Specific",
      "Chillers & Coolers",
    ],
  },
  {
    principal: "Radleys",
    logo: Radleys,
    products: [
      "Automated Reaction Stations",
      "Jacketed Lab Reactors",
      "AVA Lab Control Software",
      "Benchtop and Hotplate Tools",
      "Parallel Reaction Stations",
    ],
  },
  {
    principal: "Rotzmeier",
    logo: Rotzmeier,
    products: [
      "Saftey cans -for in-plant use",
      "Safety canisters -for in-plant use",
      "Safety barrels -for in-plant use",
      "Transportation containers and UN-approval",
      "Funnels",
      "Accessories",
    ],
  },
  {
    principal: "ThalesNano",
    logo: ThalesNano,
    products: [
      "H-Cube Systems",
      "Hydrogen Gas Generators",
      "Phoenix Flow Systems",
      "PhotoCube",
    ],
  },
];
const AllSynthesisProducts = {
  ...RotaryProducts,
  ...BrukerData
};

export default function RotaryEvaporators() {
  const navigate = useNavigate();
  const { type = "rotary-evaporators" } = useParams();
  const selectedData = AllSynthesisProducts[type];
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

        <div className="p-6 max-w-6xl mx-auto">
          {pageData.title && (
            <h1 className="text-3xl font-bold mb-4 text-center text-[#E63946] font-[MaxOT]">
              {pageData.title}
            </h1>
          )}

          {pageData.intro && <p className="mb-6">{pageData.intro}</p>}
          {pageData.highlight && <p>{pageData.highlight}</p>}

          {pageData.modelHeading && (
            <h2 className="text-2xl font-semibold font-[MaxOT] mt-4">
              {pageData.modelHeading}
            </h2>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-3">
            {products.map((product, index) =>
              product.slug ? (
                <Link
                  key={index}
                  to={`/verticals/synthesis-and-flow-chemistry/${type}/${product.slug}`}
                  className="bg-[#F5F5F5] rounded-xl shadow-xl hover:shadow-lg transition duration-300 p-4 flex flex-col items-center text-center hover:scale-[1.03] hover:translate-y-2 hover:bg-white font-[Roboto] text-[#0a2540] font-semibold"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-auto object-contain mb-4 rounded"
                  />
                  <h3 className="text-lg font-semibold text-[#0a2540] font-[MaxOT]">
                    {product.name}
                  </h3>
                </Link>
              ) : (
                <div key={index} className="col-span-full">
                  {product.heading && (
                    <h3 className="text-xl font-semibold text-[#E63946] mt-8 mb-2 font-[MaxOT]">
                      {product.heading}
                    </h3>
                  )}
                </div>
              )
            )}
          </div>

          {pageData.infoSection?.title && (
            <>
              <h2 className="text-2xl font-semibold mt-8 mb-2 font-[MaxOT]">
                {pageData.infoSection.title}
              </h2>
              <p className="mb-6 whitespace-pre-line">
                {pageData.infoSection.description}
              </p>
            </>
          )}

          {pageData.subSection?.title && (
            <>
              <h2 className="text-2xl font-semibold mt-8 mb-2 font-[MaxOT]">
                {pageData.subSection.title}
              </h2>
              <p className="mb-6">{pageData.subSection.description}</p>
            </>
          )}

          {pageData.industries && (
            <section className="mt-16">
              <h2 className="text-3xl font-semibold mb-4 text-[#0a2540] font-[MaxOT]">
                Industries We Serve
              </h2>

              {pageData.industriesIntro && (
                <p className="mb-8 text-gray-700 font-[Roboto]">
                  {pageData.industriesIntro}
                </p>
              )}

              <div className="space-y-8">
                {pageData.industries.map((item, idx) => (
                  <div key={idx}>
                    {item.title && (
                      <h3 className="text-xl font-bold text-[#E63946] mb-2 font-[MaxOT]">
                        {item.title}
                      </h3>
                    )}
                    {item.description && (
                      <p className="text-gray-700 font-[Roboto]">
                        {item.description}
                      </p>
                    )}
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
                    <h3 className="text-lg font-bold text-[#E63946] mb-3 font-[MaxOT]">
                      {industry.title}
                    </h3>
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

          {/* <ProductDistributorSection name={pageData.title} /> */}

          {faqs.length > 0 && (
            <>
              <h2 className="text-2xl font-semibold text-center mb-1 font-[MaxOT] mt-10">
                Frequently Asked Questions
              </h2>
              <div className="w-full mx-auto p-4 md:p-8 rounded-xl">
                <div id="accordion-collapse" data-accordion="collapse" className="space-y-0">
                  {faqs.map((faq, index) => (
                    <div key={index}>
                      <h2 id={`accordion-collapse-heading-${index}`}>
                        <button
                          type="button"
                          className={`flex items-center justify-between w-full p-5 font-medium text-left border-l-2 border border-[#E63946] ${
                            index === 0 ? "rounded-t-xl" : ""
                          } ${
                            openIndex === index
                              ? "text-black bg-gray-100"
                              : "text-gray-800 hover:bg-gray-100"
                          }`}
                          onClick={() => toggleFAQ(index)}
                          aria-expanded={openIndex === index}
                          aria-controls={`accordion-collapse-body-${index}`}
                        >
                          <span className="text-xl font-semibold font-[MaxOT]">
                            {faq.question}
                          </span>
                          <svg
                            data-accordion-icon
                            className={`w-6 h-6 shrink-0 transform transition-transform duration-300 ${
                              openIndex === index ? "rotate-180" : ""
                            }`}
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
                        className={`${openIndex === index ? "" : "hidden"}`}
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

