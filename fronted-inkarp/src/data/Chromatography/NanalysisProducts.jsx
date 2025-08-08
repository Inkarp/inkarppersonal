import React, { useState } from "react";
import Nanalysis from '/src/assets/PrincipalLogos/RowOne/nanalysis.png';


import MixingMachine from "/images/products/HoshenCorp/mixing-machine.png";

import Img100Pro from "/images/products/Nanalysis/100mhz-powerful-benchtop-nmr.png";
import Img100e from "/images/products/Nanalysis/100MHz-proton-benchtop-nmr.png";

// --- 60 MHz Benchtop NMR ---
import Img60Pro from "/images/products/Nanalysis/60mhz-powerful-benchtop-nmr.jpeg";
import Img60e from "/images/products/Nanalysis/60MHz-proton-benchtop-nmr.jpeg";

// --- Accessories ---
import ImgAutoSample from "/images/products/Nanalysis/auto-sample-60.jpg";
import ImgNMReadyFlow from "/images/products/Nanalysis/nmready-flow.jpeg";

// --- Software Packages ---
import ImgConnect from "/images/products/Nanalysis/connect-diagram.png";
import ImgExperimentDesigner from "/images/products/Nanalysis/ED-software-img1.jpg";
import ImgRemoteAccess from "/images/products/Nanalysis/Remote-access-benchtopNMR-SC1.jpg";



import Banner1 from "/images/products/Banner/Banner1.jpg";
import Banner2 from "/images/products/Banner/Banner2.jpg";
import Banner3 from "/images/products/Banner/Banner3.jpg";

export const NanalysisProducts = {
    "100pro-multinuclear": {
        id: "100pro-multinuclear",
        name: "100Pro – Multinuclear 100 MHz Benchtop NMR",
        image: Img100Pro,
        logo: Nanalysis,
        bannerImg: Banner3,
        altText: "100Pro – Multinuclear 100 MHz Benchtop NMR",
        videoId: "",
        meta: {
            title: "100Pro – Multinuclear 100 MHz Benchtop NMR | Nanalysis Distributor in India | Inkarp",
            description:
                "Explore the 100Pro – Multinuclear 100 MHz Benchtop NMR by Nanalysis, ideal for advanced research, teaching, and industrial applications. Inkarp Instruments is the official distributor and service provider in India offering full technical support, installation, and maintenance services.",
            keywords: [
                "100Pro Benchtop NMR",
                "Multinuclear NMR Spectrometer",
                "100 MHz NMR India",
                "Nanalysis NMR Distributor India",
                "Benchtop NMR for Research",
                "1H 13C 31P 19F NMR",
                "Inkarp Instruments NMR",
                "Compact NMR India",
                "High-resolution Benchtop NMR"
            ],
            altText: "100Pro Multinuclear NMR",
            internalLinks: ["benchtop-nmr-products", "nanalysis-nmr-solutions"],
            externalLinks: ["https://www.nanalysis.com/"]
        },
        description: `
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
    <!-- Left: Logo + Details -->
    <div class="space-y-6">
     
      <h2 class="text-2xl sm:text-3xl font-bold font-[MaxOT] text-gray-800 leading-snug">
        100Pro – Multinuclear 100 MHz Benchtop NMR
        <br />
        <span class="text-lg text-red-600 font-semibold block mt-1">Distributor & Service Provider in India</span>
      </h2>
      <div class="text-gray-700 space-y-4 text-base leading-relaxed font-[Roboto]">
        <p>
          Discover the versatility of Nanalysis' 100Pro - Multinuclear 100 MHz Benchtop NMR, distributed and serviced by Inkarp Instruments. Ideal for research, education, and industrial applications, the 100Pro provides accurate and reliable results.
          Inkarp Instruments ensures premium support, including installation, training, and after-sales service, to meet your NMR needs in India.
          Unlock the full potential of benchtop NMR with
          <a href="https://www.nanalysis.com/" class="text-red-600 underline font-medium" target="_blank" rel="noopener">Nanalysis' innovative technology</a>
          and Inkarp's dedicated support.
        </p>
        <p>
          The powerful 100PRO (download a brochure) is based on the world’s strongest compact NMR magnet platform – 2.35T (corresponding to 100 MHz for the proton NMR channel!).
        </p>
        <p>
          Multi-channel 100 MHz benchtop NMR spectrometer engineered for simple and fast acquisition of high-performance 1D and 2D NMR data.
          Inquire about nuclei options in addition to standard 1H/13C, 1H/31P, and 1H/19F configurations.
        </p>
        <ul class="list-disc list-inside space-y-2">
          <li>Unparalleled resolution – improved chemical shift dispersion</li>
          <li>Superior sensitivity – run samples at sub milli-molar concentrations</li>
          <li>Ergonomic display – large, maneuverable, user-friendly external touchscreen computer</li>
          <li>Unmatched stability – e.g., vibrational feet, extra thermal regulation</li>
        </ul>
      </div>
    </div>

    <!-- Right: Optional Features -->
    <div class="bg-[#F5F5F5] p-6 rounded-2xl shadow-md border border-gray-200">
      <h3 class="text-xl sm:text-2xl font-bold text-[#E63946] font-[MaxOT] mb-4">100PRO Optional Features</h3>
      <ul class="list-disc list-inside space-y-2 text-gray-700 font-[Roboto] text-base leading-relaxed">
        <li>Kinetics package capabilities for reaction monitoring</li>
        <li>Signal suppression</li>
        <li>Experiment designer to allow you to write your pulse programs</li>
        <li>Applications Programmatic Interface (API) for developing your own applications: see NMReady-CONNECT</li>
        <li>Remote control of instrument from computer, smartphone, tablet, etc.</li>
        <li>Deuterium lock</li>
        <li>Secure login and user profiles with custom project settings</li>
        <li>IQ/OQ/PQ Protocols</li>
      </ul>
    </div>
  </div>
`

    },
    "100e-single-nuclei": {
        id: "100e-single-nuclei",
        name: "100e – Single Nuclei 100 MHz Benchtop NMR",
        image: Img100e,
        logo: Nanalysis,
        bannerImg: Banner3,
        altText: "100e – Single Nuclei 100 MHz Benchtop NMR",
        videoId: "",
        meta: {
            title: "100e – Single Nuclei 100 MHz Benchtop NMR | Nanalysis Distributor in India | Inkarp",
            description:
                "Explore the 100e – Single Nuclei 100 MHz Benchtop NMR by Nanalysis, designed for fast, accurate 1H NMR screening in academic and industrial labs. Distributed and supported across India by Inkarp Instruments.",
            keywords: [
                "100e Benchtop NMR",
                "Single Nuclei NMR Spectrometer",
                "100 MHz NMR India",
                "1H NMR Spectrometer",
                "Compact NMR for research",
                "Nanalysis India Distributor",
                "Benchtop NMR Supplier India",
                "Routine NMR Screening",
                "Inkarp NMR Sales Support"
            ],
            altText: "100e Benchtop NMR Spectrometer",
            internalLinks: ["benchtop-nmr-products", "nanalysis-100e-specs"],
            externalLinks: ["https://www.nanalysis.com/"]
        },
        description: `
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      <!-- Left: Logo + Details -->
      <div class="space-y-6">
       
        <h2 class="text-2xl sm:text-3xl font-bold font-[MaxOT] text-gray-800 leading-snug">
          100e – Single Nuclei 100 MHz Benchtop NMR
          <br />
          <span class="text-lg text-red-600 font-semibold block mt-1">Distributor & Service Provider in India</span>
        </h2>
        <div class="text-gray-700 space-y-4 text-base leading-relaxed font-[Roboto]">
          <p>
            The powerful 100e (download a brochure) is based on the world’s strongest compact NMR magnet platform – 2.35T (corresponding to 100 MHz for the proton NMR channel!).
          </p>
          <p>
            Single-channel 100 MHz benchtop NMR spectrometer engineered for high-performance routine screening of 1H NMR spectra.
          </p>
          <ul class="list-disc list-inside space-y-2">
            <li>Unparalleled resolution – improved chemical shift dispersion</li>
            <li>Superior sensitivity – run samples at sub milli-molar concentrations</li>
            <li>Ergonomic display – large, maneuverable, user-friendly external touchscreen computer</li>
            <li>Unmatched stability – e.g., vibrational feet, extra thermal regulation</li>
          </ul>
        </div>
      </div>

      <!-- Right: Optional Features -->
      <div class="bg-[#F5F5F5] p-6 rounded-2xl shadow-md border border-gray-200">
        <h3 class="text-xl sm:text-2xl font-bold text-[#E63946] font-[MaxOT] mb-4">100e Optional Features</h3>
        <ul class="list-disc list-inside space-y-2 text-gray-700 font-[Roboto] text-base leading-relaxed">
          <li>Kinetics package capabilities for reaction monitoring</li>
          <li>Signal suppression</li>
          <li>Experiment designer to allow you to write your pulse programs</li>
          <li>Applications Programmatic Interface (API) for developing your own applications: see NMReady-CONNECT</li>
          <li>Remote control of instrument from computer, smartphone, tablet, etc.</li>
          <li>Deuterium lock</li>
          <li>Secure login and user profiles with custom project settings</li>
          <li>IQ/OQ/PQ Protocols</li>
        </ul>
      </div>
    </div>
  `
    },
    "60pro-multinuclear": {
        id: "60pro-multinuclear",
        name: "60Pro – Multinuclear 60 MHz Benchtop NMR",
        image: Img60Pro,
        logo: Nanalysis,
        bannerImg: Banner3,
        altText: "60Pro – Multinuclear 60 MHz Benchtop NMR",
        videoId: "",
        meta: {
            title: "60Pro – Multinuclear 60 MHz Benchtop NMR | Nanalysis Distributor in India | Inkarp",
            description:
                "Discover the 60Pro – Multinuclear 60 MHz Benchtop NMR from Nanalysis, designed for high-performance multinuclear spectral acquisition. Distributed and supported in India by Inkarp Instruments.",
            keywords: [
                "60Pro Benchtop NMR",
                "Multinuclear 60 MHz NMR India",
                "Compact NMR India",
                "Nanalysis 60 MHz Distributor",
                "1H 13C 31P 19F NMR India",
                "NMR Spectrometer India",
                "Benchtop NMR Inkarp",
                "60 MHz NMR spectrometer",
                "NMR for education and research"
            ],
            altText: "60Pro Nanalysis Benchtop NMR",
            internalLinks: ["benchtop-nmr-products", "nanalysis-60pro-specs"],
            externalLinks: ["https://www.nanalysis.com/"]
        },
        description: `
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      <!-- Description and Highlights -->
      <div class="space-y-6">
        <div class="flex justify-center lg:justify-start">
          <a href="/verticals/analytical-and-chromatography-solutions">
            <img src="/assets/images/principals/nanalysis.png" alt="Nanalysis Logo" class="w-40 h-auto" />
          </a>
        </div>
        <h2 class="text-2xl sm:text-3xl font-bold font-[MaxOT] text-gray-800 leading-snug">
          Multinuclear 60 MHz Benchtop NMR
          <br />
          <span class="text-lg text-red-600 font-semibold block mt-1">Distributor & Service Provider in India</span>
        </h2>
        <div class="text-gray-700 space-y-4 text-base leading-relaxed font-[Roboto]">
          <p>
            The Nanalysis 60PRO is the next generation of compact 60 MHz NMR spectrometers from Nanalysis (download brochure). This dual-channel spectrometer was designed to improve workflow for customers that require:
          </p>
          <p>
            Discover the power of benchtop NMR with
            <a href="https://www.nanalysis.com/" class="text-red-600 underline font-medium" target="_blank" rel="noopener">Nanalysis'</a>
            60Pro - Multinuclear 60 MHz Benchtop NMR, distributed and serviced by Inkarp Instruments. Ideal for research, education, and industrial applications, the 60Pro provides accurate and reliable results. Inkarp Instruments ensures premium support, including installation, training, and after-sales service, to meet your NMR needs in India.
          </p>
          <ul class="list-disc list-inside space-y-2">
            <li>High performance, multinuclear spectral acquisition</li>
            <li>Advanced features and experiments</li>
            <li>Market-leading compact size and weight</li>
          </ul>
        </div>
      </div>

      <!-- Optional Features -->
      <div class="bg-[#F5F5F5] p-6 rounded-2xl shadow-md border border-gray-200">
        <h3 class="text-xl sm:text-2xl font-bold text-[#E63946] font-[MaxOT] mb-4">Optional Features</h3>
        <ul class="list-disc list-inside space-y-2 text-gray-700 font-[Roboto] text-base leading-relaxed">
          <li>Kinetics package capabilities for reaction monitoring</li>
          <li>Signal suppression</li>
          <li>Experiment designer</li>
          <li>Applications Programmatic Interface (API) – see NMReady-CONNECT</li>
          <li>Remote control via computer, smartphone, or tablet</li>
          <li>Non-deuterium lock options</li>
          <li>Secure login and user profiles with custom project settings</li>
        </ul>
      </div>
    </div>

    <!-- Technical Specifications -->
    <div class="overflow-x-auto bg-white rounded-2xl border border-gray-200 shadow-md">
  <table class="min-w-full table-auto text-sm text-gray-800 font-[Roboto]">
    <thead>
      <tr>
        <th colspan="2" class="bg-gray-100 text-left px-6 py-4 text-base font-bold text-gray-900 border-b border-gray-300">
          TECHNICAL SPECIFICATIONS
        </th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-200">
      <tr>
        <td class="px-6 py-3 font-semibold whitespace-nowrap">Operating Frequency:</td>
        <td class="px-6 py-3">60 MHz (1.40 T)</td>
      </tr>
      <tr>
        <td class="px-6 py-3 font-semibold">Magnet:</td>
        <td class="px-6 py-3">Permanent, no cryogens</td>
      </tr>
      <tr>
        <td class="px-6 py-3 font-semibold">User Interface:</td>
        <td class="px-6 py-3">Built-in Touchscreen or Windows, Mac or Linux compatible</td>
      </tr>
      <tr>
        <td class="px-6 py-3 font-semibold">Nuclei:</td>
        <td class="px-6 py-3">Dual-tuned: e.g., <sup>1</sup>H/<sup>19</sup>F/<sup>13</sup>C, <sup>1</sup>H/<sup>19</sup>F/<sup>31</sup>P</td>
      </tr>
      <tr>
        <td class="px-6 py-3 font-semibold">Lock:</td>
        <td class="px-6 py-3">Internal <sup>1</sup>H and <sup>2</sup>H options</td>
      </tr>
      <tr>
        <td class="px-6 py-3 font-semibold">Sample:</td>
        <td class="px-6 py-3">Standard 5 mm NMR tubes or flow options</td>
      </tr>
      <tr>
        <td class="px-6 py-3 font-semibold">File Compatibility:</td>
        <td class="px-6 py-3">JCAMP-DX and CSV</td>
      </tr>
      <tr>
        <td class="px-6 py-3 font-semibold">Software:</td>
        <td class="px-6 py-3">Mnova, ACD/Labs, Delta, TopSpin, MATLAB, SPINit, NMRfx, etc.</td>
      </tr>
      <tr>
        <td class="px-6 py-3 font-semibold">Monitoring Software:</td>
        <td class="px-6 py-3">
          LabVIEW (<a href="/nmready-connect" class="text-blue-600 underline">NMReadyCONNECT</a> API),
          Mestrelab <a href="http://mestrelab.com/software/mnova/sma/" class="text-blue-600 underline" target="_blank" rel="noopener">MNova SMA</a>
        </td>
      </tr>
      <tr>
        <td class="px-6 py-3 font-semibold">Resolution:</td>
        <td class="px-6 py-3">LW(50%) &lt; 1.0 Hz (&lt;0.017 ppm)</td>
      </tr>
      <tr>
        <td class="px-6 py-3 font-semibold">Sensitivity (SNR):</td>
        <td class="px-6 py-3">100:1 (1% Ethylbenzene, 1 scan)</td>
      </tr>
      <tr>
        <td class="px-6 py-3 font-semibold">Stray Field:</td>
        <td class="px-6 py-3">2 Gauss line contained within enclosure</td>
      </tr>
      <tr>
        <td class="px-6 py-3 font-semibold">Operating Temp:</td>
        <td class="px-6 py-3">18–26°C</td>
      </tr>
      <tr>
        <td class="px-6 py-3 font-semibold">Power:</td>
        <td class="px-6 py-3">100–240 VAC, 50–60 Hz</td>
      </tr>
      <tr>
        <td class="px-6 py-3 font-semibold">Dimensions:</td>
        <td class="px-6 py-3">30 x 28 x 49 cm (11.8" x 11.0" x 19.2")</td>
      </tr>
      <tr>
        <td class="px-6 py-3 font-semibold">Weight:</td>
        <td class="px-6 py-3">26.3 kg (58 lbs)</td>
      </tr>
      <tr>
        <td class="px-6 py-3 font-semibold">Networking:</td>
        <td class="px-6 py-3">Ethernet, Wi-Fi</td>
      </tr>
      <tr>
        <td colspan="2" class="px-6 py-3 text-sm italic text-gray-500">Specifications subject to change without notice.</td>
      </tr>
    </tbody>
  </table>
</div>
    </div>
  `
    },

    "60e-single-nuclei": {
        id: "60e-single-nuclei",
        name: "60e – Single Nuclei 60 MHz Benchtop NMR",
        image: Img60e,
        logo: Nanalysis,
        bannerImg: Banner3,
        altText: "60e – Single Nuclei 60 MHz Benchtop NMR",
        videoId: "",
        meta: {
            title: "60e – Single Nuclei 60 MHz Benchtop NMR | Nanalysis Distributor in India | Inkarp",
            description:
                "Explore the 60e – Single Nuclei 60 MHz Benchtop NMR from Nanalysis, designed for routine 1D & 2D NMR experiments with superior resolution. Distributed and supported across India by Inkarp Instruments.",
            keywords: [
                "60e Benchtop NMR",
                "Single Nuclei NMR Spectrometer",
                "1H NMR Benchtop India",
                "Compact NMR Spectrometer",
                "Nanalysis NMR Distributor India",
                "Affordable NMR spectrometer",
                "Inkarp NMR sales support",
                "Routine NMR analysis",
                "High resolution benchtop NMR"
            ],
            altText: "60e Benchtop NMR",
            internalLinks: ["benchtop-nmr-products", "nanalysis-60e-specs"],
            externalLinks: ["https://www.nanalysis.com/"]
        },
        description: `
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      <!-- Description and Highlights -->
      <div class="space-y-6">
        
        <h2 class="text-2xl sm:text-3xl font-bold font-[MaxOT] text-gray-800 leading-snug">
          60e – Single Nuclei 60 MHz Benchtop NMR
          <br />
          <span class="text-lg text-red-600 font-semibold block mt-1">Distributor & Service Provider in India</span>
        </h2>
        <div class="text-gray-700 space-y-4 text-base leading-relaxed font-[Roboto]">
          <p>
            Nanalysis 60 MHz benchtop NMR spectrometer (download brochure) is a market-leading compact, single-channel NMR spectrometer. 
            As Nanalysis’ flagship compact NMR spectrometer, the Nanalysis 60e is a cost-effective tool for customers that require:
          </p>
          <ul class="list-disc list-inside space-y-2">
            <li>Superior resolution and sensitivity</li>
            <li>Easy acquisition of 1D & 2D NMR experiments</li>
            <li>Market-leading compact size and weight</li>
          </ul>
        </div>
      </div>

      <!-- Optional Features -->
      <div class="bg-[#F5F5F5] p-6 rounded-2xl shadow-md border border-gray-200">
        <h3 class="text-xl sm:text-2xl font-bold text-[#E63946] font-[MaxOT] mb-4">Optional Features</h3>
        <ul class="list-disc list-inside space-y-2 text-gray-700 font-[Roboto] text-base leading-relaxed">
          <li>Kinetics package capabilities for reaction monitoring</li>
          <li>Signal suppression</li>
          <li>Experiment designer to allow you to write your pulse programs</li>
          <li>Applications Programmatic Interface (API) – see NMReady-CONNECT</li>
          <li>Remote control via computer, smartphone, or tablet</li>
          <li>Non-deuterium lock options</li>
          <li>Secure login and user profiles with custom project settings</li>
          <li>IQ/OQ/PQ Protocols</li>
        </ul>
      </div>
    </div>

    <!-- Technical Specifications Table -->
    <div class="mt-10 overflow-x-auto bg-white rounded-2xl border border-gray-200 shadow-md">
      <table class="min-w-full table-auto text-sm text-gray-800 font-[Roboto]">
        <thead>
          <tr>
            <th colspan="2" class="bg-gray-100 text-left px-6 py-4 text-base font-bold text-gray-900 border-b border-gray-300">
              TECHNICAL SPECIFICATIONS
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          <tr><td class="px-6 py-3 font-semibold">Operating Frequency:</td><td class="px-6 py-3">60 MHz (1.40 T)</td></tr>
          <tr><td class="px-6 py-3 font-semibold">Magnet:</td><td class="px-6 py-3">Permanent, no cryogens</td></tr>
          <tr><td class="px-6 py-3 font-semibold">User Interface:</td><td class="px-6 py-3">Built-in Touchscreen or Windows, Mac or Linux compatible</td></tr>
          <tr><td class="px-6 py-3 font-semibold">Nuclei:</td><td class="px-6 py-3"><sup>1</sup>H</td></tr>
          <tr><td class="px-6 py-3 font-semibold">Lock:</td><td class="px-6 py-3">Internal <sup>1</sup>H and <sup>2</sup>H options</td></tr>
          <tr><td class="px-6 py-3 font-semibold">Sample:</td><td class="px-6 py-3">Standard 5mm NMR tubes or flow options</td></tr>
          <tr><td class="px-6 py-3 font-semibold">Output File Compatibility:</td><td class="px-6 py-3">JCAMP-DX and CSV, Mestrelab MNova, Bruker TopSpin, ACD/Labs, JEOL Delta, Spinworks, SPINit, NMRFx <a href="/compatible-software" class="text-blue-600 underline">see more details</a></td></tr>
          <tr><td class="px-6 py-3 font-semibold">Monitoring Software Compatibility:</td><td class="px-6 py-3">LabVIEW (<a href="/nmready-connect" class="text-blue-600 underline">NMReadyCONNECT</a> API), Mestrelab MNova <a href="http://mestrelab.com/software/mnova/sma/" class="text-blue-600 underline" target="_blank" rel="noopener">SMA</a></td></tr>
          <tr><td class="px-6 py-3 font-semibold">Resolution:</td><td class="px-6 py-3">LW(50%) &lt; 1.0 Hz (&lt;0.0017 ppm)</td></tr>
          <tr><td class="px-6 py-3 font-semibold">Sensitivity (SNR):</td><td class="px-6 py-3">100:1 (1% EtBz single scan)</td></tr>
          <tr><td class="px-6 py-3 font-semibold">Stray Field:</td><td class="px-6 py-3">2 Gauss line contained within enclosure</td></tr>
          <tr><td class="px-6 py-3 font-semibold">Operating Temp:</td><td class="px-6 py-3">18–26°C</td></tr>
          <tr><td class="px-6 py-3 font-semibold">Power:</td><td class="px-6 py-3">100–240 VAC, 50–60 Hz</td></tr>
          <tr><td class="px-6 py-3 font-semibold">Dimensions:</td><td class="px-6 py-3">11.8" x 11.0" x 19.2" (30 x 28 x 49 cm)</td></tr>
          <tr><td class="px-6 py-3 font-semibold">Weight:</td><td class="px-6 py-3">58 lbs (26.3 kg)</td></tr>
          <tr><td class="px-6 py-3 font-semibold">Networking:</td><td class="px-6 py-3">Ethernet, Wi-Fi</td></tr>
        </tbody>
      </table>
    </div>
  `
    },

    "autosample-60": {
        id: "autosample-60",
        name: "AUTOsample-60 Accessories",
        image: ImgAutoSample,
        logo: Nanalysis,
        bannerImg: Banner3,
        altText: "AUTOsample-60 Accessories",
        videoId: "",
        meta: {
            title: "AUTOsample-60 Accessories for Nanalysis Benchtop NMR | Inkarp India Distributor",
            description:
                "Boost your NMR lab's efficiency with AUTOsample-60 Accessories for 60 MHz NMR. Inkarp Instruments provides full support, service, and installation across India.",
            keywords: [
                "AUTOsample-60 Accessories",
                "Nanalysis NMR Autosampler",
                "Benchtop NMR automation",
                "AUTOsample 60 distributor India",
                "NMR autosampler India",
                "Nanalysis benchtop NMR",
                "Inkarp Nanalysis accessories",
                "Automated NMR sampling system",
                "AUTOsample-60 technical specs",
                "60 MHz NMR automation tool"
            ],
            altText: "AUTOsample-60 NMR Autosampler",
            internalLinks: ["nmr-accessories", "benchtop-nmr-products"],
            externalLinks: ["https://www.nanalysis.com/"]
        },
        description: `
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      <!-- Description and Highlights -->
      <div class="space-y-6">
       
        <h2 class="text-2xl sm:text-3xl font-bold font-[MaxOT] text-gray-800 leading-snug">
          AUTOsample-60 Accessories
          <br />
          <span class="text-lg text-red-600 font-semibold block mt-1">Distributor & Service Provider in India</span>
        </h2>
        <div class="text-gray-700 space-y-4 text-base leading-relaxed font-[Roboto]">
          <p>
            Streamline your NMR sampling process with Nanalysis' AUTOsample-60 Accessories, distributed and serviced by Inkarp Instruments.
            Ideal for high-volume NMR laboratories, the AUTOsample-60 provides both convenience and reliability.
            Inkarp Instruments Pvt Ltd ensures premium support, including installation, training, and after-sales service,
            to meet your NMR automation needs in India.
          </p>
          <p>
            The AUTOsample-60 (download brochure) is a top-mounted autosampler compatible with all Nanalysis 60 MHz benchtop NMR spectrometers.
            It enables seamless switching between autosampler and manual modes without compromising the compact footprint.
            Control of data acquisition and processing is fully integrated into the onboard software.
          </p>
          <ul class="list-disc list-inside space-y-2">
            <li>Maximize efficiency by improving throughput during or after work hours</li>
            <li>Run 1D and basic 2D experiments (1H, COSY, HSQC, DEPT-135, 13C{1H}, etc.)</li>
            <li>Acquire and save data automatically</li>
            <li>Integrate NMReady with a centralized lab system</li>
          </ul>
        </div>
      </div>

      <!-- Technical Specifications Table -->
      <div class="mt-10 overflow-x-auto bg-white rounded-2xl border border-gray-200 shadow-md">
        <table class="min-w-full table-auto text-sm text-gray-800 font-[Roboto]">
          <thead>
            <tr>
              <th colspan="2" class="bg-gray-100 text-left px-6 py-4 text-base font-bold text-gray-900 border-b border-gray-300">
                TECHNICAL SPECIFICATIONS
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr><td class="px-6 py-3 font-semibold">System Requirements:</td><td class="px-6 py-3">Nanalysis 60e or 60PRO</td></tr>
            <tr><td class="px-6 py-3 font-semibold">Dimensions:</td><td class="px-6 py-3">10.3 x 10.3 x 14.2” / 26 x 26 x 36 cm</td></tr>
            <tr><td class="px-6 py-3 font-semibold">Weight:</td><td class="px-6 py-3">12 lbs / 5.5 kg</td></tr>
            <tr><td class="px-6 py-3 font-semibold">Voltage:</td><td class="px-6 py-3">24 V</td></tr>
            <tr><td class="px-6 py-3 font-semibold">Time per Tube Change:</td><td class="px-6 py-3">~10 sec</td></tr>
            <tr><td class="px-6 py-3 font-semibold">Carousels:</td><td class="px-6 py-3">2</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  `
    },

    "nmready-flow": {
        id: "nmready-flow-",
        name: "NMReady-Flow Accessories",
        image: ImgNMReadyFlow,
        logo: Nanalysis,
        bannerImg: Banner3,
        altText: "NMReady-Flow Accessories",
        videoId: "",
        meta: {
            title: "NMReady-Flow Accessories for Benchtop NMR | Flow Chemistry Integration | Inkarp India",
            description:
                "NMReady-Flow Accessories from Nanalysis enable real-time monitoring in flow chemistry. Inkarp Instruments provides full service, installation, and training across India.",
            keywords: [
                "NMReady-Flow Accessories",
                "Benchtop NMR flow chemistry",
                "Nanalysis Flow NMR India",
                "Online NMR detector",
                "NMR real-time reaction monitoring",
                "NMR flow cell kit distributor India",
                "Flow chemistry detector",
                "NMR inline monitoring",
                "Inkarp Nanalysis accessories",
                "NMR automation India"
            ],
            altText: "NMReady-Flow NMR Flow Cell Accessories",
            internalLinks: ["nmr-accessories", "benchtop-nmr-products"],
            externalLinks: ["https://www.nanalysis.com/"]
        },
        description: `
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      <!-- Description and Highlights -->
    
        <h2 class="text-2xl sm:text-3xl font-bold font-[MaxOT] text-gray-800 leading-snug">
          NMReady-Flow Accessories
          <br />
          <span class="text-lg text-red-600 font-semibold block mt-1">Distributor & Service Provider in India</span>
        </h2>
        <div class="text-gray-700 space-y-4 text-base leading-relaxed font-[Roboto]">
          <p>
            Unlock the full potential of flow chemistry with Nanalysis' NMReady-Flow Accessories, distributed and serviced by Inkarp Instruments.
            Ideal for both research and industrial applications, these accessories provide a streamlined and automated NMR flow chemistry solution.
          </p>
          <p>
            The NMReady-flow NMR flow cell kit (download brochure) transforms any Nanalysis 60e or 60PRO benchtop spectrometer into a real-time online NMR detector,
            either as a standalone tool or in conjunction with other instruments.
          </p>
          <ul class="list-disc list-inside space-y-2">
            <li>Understand and optimize chemical reactions in real time</li>
            <li>Improve reaction yield and process safety</li>
            <li>Automate repetitive syntheses in lab or production</li>
            <li>Integrate NMReady into centralized Laboratory Information Systems (LIS)</li>
          </ul>
        </div>
      </div>

      <!-- Technical Specifications Table -->
      <div class="mt-10 overflow-x-auto bg-white rounded-2xl border border-gray-200 shadow-md">
        <table class="min-w-full table-auto text-sm text-gray-800 font-[Roboto]">
          <thead>
            <tr>
              <th colspan="2" class="bg-gray-100 text-left px-6 py-4 text-base font-bold text-gray-900 border-b border-gray-300">
                TECHNICAL SPECIFICATIONS
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr><td class="px-6 py-3 font-semibold">Configuration:</td><td class="px-6 py-3">Bottom-to-top</td></tr>
            <tr><td class="px-6 py-3 font-semibold">Material:</td><td class="px-6 py-3">Mixed medium glass / PTFE</td></tr>
            <tr><td class="px-6 py-3 font-semibold">Internal Diameter:</td><td class="px-6 py-3">4.8 mm</td></tr>
            <tr><td class="px-6 py-3 font-semibold">Outer Diameter:</td><td class="px-6 py-3">5.0 mm</td></tr>
            <tr><td class="px-6 py-3 font-semibold">Flow Mode:</td><td class="px-6 py-3">Continuous or stopped flow</td></tr>
            <tr><td class="px-6 py-3 font-semibold">Flow Rate:</td><td class="px-6 py-3">&lt; 4.0 mL per minute</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  `
    },

    "nmready-connect": {
        id: "nmready-connect",
        name: "NMReady-CONNECT Software Packages",
        image: ImgConnect,
        logo: Nanalysis,
        bannerImg: Banner3,
        altText: "NMReady-CONNECT Software Packages",
        videoId: "",
        meta: {
            title: "NMReady-CONNECT Software API for NMR Automation | Nanalysis | Inkarp India",
            description:
                "Programmatically control NMReady NMR spectrometers using the CONNECT software API from Nanalysis. Distributed and supported by Inkarp Instruments in India.",
            keywords: [
                "NMReady-CONNECT software",
                "Nanalysis API software",
                "NMR automation software India",
                "NMR spectrometer control API",
                "Inkarp Nanalysis software",
                "NMR remote monitoring",
                "LabVIEW NMR integration",
                "NMR software packages distributor India",
                "JCAMP-DX data retrieval",
                "Benchtop NMR software India"
            ],
            altText: "NMReady-CONNECT NMR Software",
            internalLinks: ["nmr-software", "nanalysis-products"],
            externalLinks: ["https://www.nanalysis.com/"]
        },
        description: `
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      <!-- Description and Highlights -->
      <div class="space-y-6">
        
        <h2 class="text-2xl sm:text-3xl font-bold font-[MaxOT] text-gray-800 leading-snug">
          NMReady-CONNECT Software Packages
          <br />
          <span class="text-lg text-red-600 font-semibold block mt-1">Distributor & Service Provider in India</span>
        </h2>
        <div class="text-gray-700 space-y-4 text-base leading-relaxed font-[Roboto]">
          <p>
            Unlock the full potential of your NMR data with NMReady-CONNECT Software Packages by <a href="https://www.nanalysis.com/" class="underline text-blue-700" target="_blank">Nanalysis</a>, distributed and serviced by Inkarp Instruments across India.
            These software packages enable advanced data analysis, automation, and remote monitoring of NMR experiments.
          </p>
          <p>
            NMReady-CONNECT provides open access APIs using .NET or JSON, enabling seamless integration into your lab's digital infrastructure.
            It's ideal for analytical labs, quality control, academic institutions, and chemical process R&D.
          </p>
          <ul class="list-disc list-inside space-y-2">
            <li>Programmatically set up, launch, and monitor NMR experiments</li>
            <li>Retrieve spectral data in JCAMP-DX format</li>
            <li>Monitor instrument performance and diagnostics</li>
            <li>Automate routine tasks like auto-shimming and maintenance</li>
            <li>Support for LabVIEW, flow systems, QA/QC workflows</li>
          </ul>
        </div>
      </div>

      <!-- Technical Specifications Table -->
      <div class="mt-10 overflow-x-auto bg-white rounded-2xl border border-gray-200 shadow-md">
        <table class="min-w-full table-auto text-sm text-gray-800 font-[Roboto]">
          <thead>
            <tr>
              <th colspan="2" class="bg-gray-100 text-left px-6 py-4 text-base font-bold text-gray-900 border-b border-gray-300">
                TECHNICAL SPECIFICATIONS
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr><td class="px-6 py-3 font-semibold">API Access:</td><td class="px-6 py-3">.NET and JSON</td></tr>
            <tr><td class="px-6 py-3 font-semibold">Supported Functions:</td><td class="px-6 py-3">Experiment control, monitoring, result retrieval</td></tr>
            <tr><td class="px-6 py-3 font-semibold">Output Format:</td><td class="px-6 py-3">JCAMP-DX</td></tr>
            <tr><td class="px-6 py-3 font-semibold">Instrument Support:</td><td class="px-6 py-3">NMReady 60e / 60PRO</td></tr>
            <tr><td class="px-6 py-3 font-semibold">Compatible Software:</td><td class="px-6 py-3">LabVIEW, custom scripts</td></tr>
            <tr><td class="px-6 py-3 font-semibold">Use Cases:</td><td class="px-6 py-3">Teaching, QA/QC, flow reaction monitoring</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  `
    },

    "experiment-designer": {
        id: "experiment-designer-",
        name: "Experiment Designer Software Packages",
        image: ImgExperimentDesigner,
        logo: Nanalysis,
        bannerImg: Banner3,
        altText: "Experiment Designer Software Packages",
        videoId: "",
        meta: {
            title: "Experiment Designer NMR Software by Nanalysis | Distributor & Service Provider in India | Inkarp",
            description:
                "Optimize your NMR workflow with Nanalysis' Experiment Designer Software, distributed and supported by Inkarp Instruments in India. Simplify pulse sequence customization and improve data analysis productivity.",
            keywords: [
                "Experiment Designer NMR software",
                "Nanalysis software distributor India",
                "Pulse sequence customization",
                "JSON NMR software",
                "NMR automation tool",
                "Inkarp Nanalysis support",
                "Benchtop NMR control software",
                "Academic NMR software",
                "Industrial NMR designer",
                "NMR optimization software"
            ],
            altText: "Experiment Designer Software for NMR",
            internalLinks: ["nmr-software", "nanalysis-products"],
            externalLinks: ["https://www.nanalysis.com/"]
        },
        description: `
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      <!-- Left: Description -->
      <div class="space-y-6">
    
        <h2 class="text-2xl sm:text-3xl font-bold font-[MaxOT] text-gray-800 leading-snug">
          Experiment Designer Software Packages
          <br />
          <span class="text-lg text-red-600 font-semibold block mt-1">Distributor & Service Provider in India</span>
        </h2>
        <div class="text-gray-700 space-y-4 text-base leading-relaxed font-[Roboto]">
          <p>
            Optimize your NMR experiments with <a href="https://www.nanalysis.com/" class="underline text-blue-700" target="_blank">Nanalysis'</a> Experiment Designer Software Packages, distributed and serviced by Inkarp Instruments in India.
          </p>
          <p>
            This intuitive software offers:
            Automated experiment setup and optimization,
            Simplified pulse sequence design,
            Enhanced data analysis and visualization,
            Streamlined workflow and increased productivity.
          </p>
          <p>
            Experience the benefits of Nanalysis' innovative technology and Inkarp's dedicated support, perfect for your laboratory requirements.
          </p>
          <p>
            Every instrument comes standard with basic pulse programs depending on the model that is purchased (e.g., 1D, COSY, HSQC). For expert users that want to modify pulse programs or generate their own we offer the experiment designer.
          </p>
          <p class="font-semibold text-gray-900">Customize:</p>
          <ul class="list-disc list-inside space-y-2">
            <li>Number of pulses on up to two channels simultaneously</li>
            <li>Timing between pulses</li>
            <li>Phase cycling</li>
          </ul>
          <p>
            Currently uses JSON-based interface. Please contact for more information.
          </p>
        </div>
      </div>

      <!-- Right Column: (optional) placeholder for future use -->
      <div></div>
    </div>
  `
    },

    "remote-access": {
        id: "remote-access",
        name: "Remote Access Software Packages",
        image: ImgRemoteAccess,
        logo: Nanalysis,
        bannerImg: Banner3,
        altText: "Remote Access Software Packages",
        videoId: "uajnoN1Vdyk",
        meta: {
            title: "Remote Access NMR Software by Nanalysis | Distributor & Service Provider in India | Inkarp",
            description:
                "Enable secure and real-time control of your NMR instruments with Nanalysis' Remote Access Software Packages. Distributed and supported in India by Inkarp Instruments.",
            keywords: [
                "Remote NMR software",
                "Nanalysis remote access software India",
                "NMR instrument VNC control",
                "Benchtop NMR monitoring",
                "Remote data acquisition NMR",
                "Inkarp Nanalysis support India",
                "NMR remote teaching tools",
                "Collaborative NMR analysis",
                "Remote lab NMR software",
                "Online NMR control software"
            ],
            altText: "Remote Access Software for NMR",
            internalLinks: ["nmr-software", "nanalysis-products"],
            externalLinks: ["https://www.nanalysis.com/"]
        },
        description: `
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      <!-- Left Column -->
      <div class="space-y-6">
        <h2 class="text-2xl sm:text-3xl font-bold font-[MaxOT] text-gray-800 leading-snug">
          Remote Access Software Packages
          <br />
          <span class="text-lg text-red-600 font-semibold block mt-1">Distributor & Service Provider in India</span>
        </h2>
        <div class="text-gray-700 space-y-4 text-base leading-relaxed font-[Roboto]">
          <p>
            Access and control your NMR instruments remotely with
            <a href="https://www.nanalysis.com/" class="underline text-blue-700" target="_blank">Nanalysis'</a>
            Remote Access Software Packages, distributed and serviced by Inkarp Instruments in India.
          </p>
          <p>
            This secure and user-friendly software offers:
            Real-time instrument monitoring and control,
            Remote data acquisition and analysis,
            Collaborative research and training capabilities,
            Increased productivity and flexibility.
          </p>
          <p>
            Experience the benefits of Nanalysis' innovative technology and Inkarp's dedicated support.
          </p>
          <p>
            To control the instrument directly from an external computer, tablet, or phone, users are granted VNC access.
          </p>
        </div>
      </div>

      <!-- Right Column: YouTube Video Embed -->
      <div class="mt-6 lg:mt-0">
        <iframe width="100%" height="400" src="https://www.youtube.com/embed/uajnoN1Vdyk" 
          title="Teaching Remote Undergrad Labs with Nanalysis Benchtop NMR Spectrometers" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
      </div>
    </div>
  `
    },


};

