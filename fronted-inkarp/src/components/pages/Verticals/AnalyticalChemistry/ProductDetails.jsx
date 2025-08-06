import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { Share2, Download, CheckCircle, ZoomIn } from "lucide-react";
import { HiOutlineClipboardList } from "react-icons/hi";
import RotaryFaqs from "../SynthesisAndFlowChemistry/RotaryFaqs";

import { WeighingBalance } from '../../../../data/AnalyticalChemistry/WeighingBalance';
import { MoistureAnalyzer } from '../../../../data/AnalyticalChemistry/MoistureAnalyzer';
import { AnalyticalInstruments } from '../../../../data/AnalyticalChemistry/AnalyticalInstruments';

// Merge all product objects into one
const AllSynthesisProductDetails = {
  ...WeighingBalance,
  ...AnalyticalInstruments,
  ...MoistureAnalyzer
};

// Sample Product Data
export default function ProductDetails() {
  const { productSlug } = useParams();
  const product = AllSynthesisProductDetails[productSlug];
  const meta = product?.meta;
  const [showModal, setShowModal] = useState(false);

  if (!product) {
    return (
      <div className="p-10 text-center bg-white rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold text-red-600 font-[MaxOT]">Product Not Found</h2>
        <p className="text-gray-600 mt-2 font-[Roboto]">The product you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <>
      {meta && (
        <Helmet>
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
          <meta name="keywords" content={meta.keywords?.join(", ")} />
          <meta name="robots" content="index, follow" />
          <meta property="og:title" content={meta.title} />
          <meta property="og:description" content={meta.description} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {meta.structuredData && (
            <script type="application/ld+json">
              {JSON.stringify(meta.structuredData)}
            </script>
          )}
        </Helmet>
      )}

      <div className="bg-white px-2 sm:px-5 py-4">
        {/* --- Header --- */}

        {/* Mobile Header */}
        <div className="block md:hidden bg-gray-50 p-4 rounded-xl border">
          <div className="flex items-center gap-4">
            <div className="w-1/3 flex-shrink-0">
              <img
                src={product.image}
                alt={product.altText}
                className="w-full h-auto object-contain rounded-lg bg-white p-1 shadow"
              />
            </div>
            <div className="w-2/3 space-y-2">
              <img
                src={product.logo}
                alt="Logo"
                className="w-24 h-auto"
              />
              <h1 className="text-md font-bold font-[MaxOT] text-gray-900 leading-tight">
                {product.name}
              </h1>
            </div>
          </div>
        </div>

        {/* Desktop Header */}
        <div className="hidden md:block relative w-full">
          <img
            src={product.bannerImg}
            alt="Banner"
            className="w-full h-auto object-cover rounded-md"
          />
          <div className="absolute inset-0 flex flex-row items-center justify-around p-4">
            <div className="w-1/2 flex justify-start">
              <img
                src={product.image}
                alt={product.altText}
                className="w-[60%] h-auto object-cover rounded-lg"
              />
            </div>
            <div className="w-1/2 text-center">
              <img
                src={product.logo}
                alt="Logo"
                className="w-48 h-auto mb-4 bg-white p-4 rounded-lg shadow-lg inline-block"
              />
              <h1 className="text-4xl font-extrabold tracking-tight font-[MaxOT] text-white drop-shadow-md">
                {product.name}
              </h1>
            </div>
          </div>
        </div>

        {/* Main Section */}
        <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 space-y-12">
          {/* Overview */}
          <div className="flex flex-col items-center w-full">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 font-[MaxOT] border-b-2 border-[#E63946] pb-2 w-full">Overview</h2>
            <div className="space-y-6  w-[80%] mx-auto">
              {product.description?.map((section, index) => (
                <div key={index}>
                  <h3 className="text-xl font-bold text-[#E63946] font-[MaxOT] mb-1">
                    {section.heading}
                  </h3>
                  <p className="text-base font-[Roboto] leading-relaxed">
                    {section.description}
                  </p>
                </div>
              ))}
            </div>


            <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href={`https://wa.me/?text=${encodeURIComponent(`Check out this product: https://www.inkarp.co.in/verticals/synthesis-and-flow-chemistry/rotary-evaporators/${productSlug}`)}`} target="_blank" rel="noopener noreferrer">
                <button className="flex items-center justify-center gap-2 bg-[#E63946] text-white px-5 py-2.5 rounded-full hover:bg-red-700 transition-transform transform hover:scale-105 shadow-lg font-semibold font-[MaxOT] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 w-48 sm:w-auto">
                  <Share2 size={18} /> Share
                </button>
              </a>
              <button className="flex items-center justify-center gap-2 bg-gray-700 text-white px-5 py-2.5 rounded-full hover:bg-gray-800 transition-transform transform hover:scale-105 shadow-lg font-semibold font-[MaxOT] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 w-48 sm:w-auto" onClick={() => setShowModal(true)}>
                <ZoomIn size={20} /> Show Image
              </button>
            </div>

            {showModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4" onClick={() => setShowModal(false)}>
                <div className="relative flex flex-col items-center bg-white p-4 rounded-lg shadow-xl w-full max-w-2xl" onClick={e => e.stopPropagation()}>
                  <img
                    src={product.image}
                    alt={product.altText}
                    className="w-full h-auto object-contain max-h-[80vh]"
                  />
                  <button
                    className="mt-4 px-6 py-2 bg-red-600 text-white rounded-full font-semibold shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600"
                    onClick={() => setShowModal(false)}
                    aria-label="Close image viewer"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Technical Specs */}
        <div className="py-8  w-full w-[95%] mx-auto">
          <div className="bg-[#F5F5F5] shadow-xl overflow-hidden rounded-3xl p-4 sm:p-6 md:p-8 border border-gray-200">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#E63946] text-center font-[MaxOT] mb-6">
              Technical Specifications of {product.name}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {Object.entries(product?.specs || {}).map(([key, value], index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-xl shadow-md p-4 bg-white hover:scale-105 transition hover:bg-red-50"
                >
                  <HiOutlineClipboardList className="text-[#E63946] w-6 h-6 mt-1 flex-shrink-0" />
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center w-full gap-1">
                    <p className="text-base font-bold font-[MaxOT] text-gray-800">{key}</p>
                    <p className="text-sm sm:text-base whitespace-pre-line font-[Roboto] text-gray-600 sm:text-right">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </>
  );
}