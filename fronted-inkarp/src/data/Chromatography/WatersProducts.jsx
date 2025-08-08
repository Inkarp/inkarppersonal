import React, { useState } from "react";
import Waters from '/src/assets/PrincipalLogos/RowTwo/waters.svg';
import Labomatic from '/src/assets/PrincipalLogos/RowTwo/Labomatic.svg';

import ImgBreezeQS from "/images/products/Waters/Breeze-QS-HPLC-System.jpg";
import ImgAllianceHPLC from "/images/products/Waters/alliance-hplc-system-2695-2489-angle.jpg";
import ImgAllianceIS from "/images/products/Waters/alliance-is-system-with-bottles-angled.jpg";
import ImgArcHPLC from "/images/products/Waters/arc-hplc-QSm-pda-ftnr.jpg.thumb.319.319.jpg";

import Indutrial from "/images/products/Labomatic/Image1.jpg";
import Liquid1 from "/images/products/Labomatic/LiquidImage1.jpg";

import Banner1 from "/images/products/Banner/Banner1.jpg";
import Banner2 from "/images/products/Banner/Banner2.jpg";
import Banner3 from "/images/products/Banner/Banner3.jpg";


export const WatersProducts = {
    "breeze-qs-hplc": {
        id: "breeze-qs-hplc",
        name: "Breeze QS HPLC Chromatography and LC-MS Systems",
        image: ImgBreezeQS,
        logo: Waters,
        bannerImg: Banner3,
        altText: "Breeze QS HPLC Chromatography System",
        videoId: "",
        meta: {
            title: "Breeze QS HPLC System | Waters Chromatography & LC-MS | Inkarp India",
            description:
                "Explore the Breeze QS HPLC Chromatography and LC-MS System from Waters, distributed and serviced by Inkarp Instruments in India. Discover reliable performance, precise results, and customized configurations for any laboratory setting.",
            keywords: [
                "Breeze QS HPLC",
                "Waters HPLC India",
                "Chromatography System",
                "LC-MS System Distributor India",
                "HPLC Service Provider India",
                "Inkarp Waters Instruments",
                "HPLC Pump Detector Injector",
                "Routine HPLC Analysis",
                "UV PDA RI Detector"
            ],
            altText: "Waters Breeze QS HPLC System",
            internalLinks: ["analytical-and-chromatography-solutions"],
            externalLinks: ["https://www.waters.com/nextgen/us/en.html"]
        },
        description: `
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
    <div class="space-y-6">
      
      <h2 class="text-2xl sm:text-3xl font-bold font-[MaxOT] text-gray-800 leading-snug">
        Breeze QS HPLC Chromatography and LC-MS Systems
        <br />
        <span class="text-lg text-red-600 font-semibold block mt-1">Distributor & Service Provider In India</span>
      </h2>
      <div class="text-gray-700 space-y-4 text-base leading-relaxed font-[Roboto]">
        <p>
          Breeze QS HPLC Chromatography and LC-MS Systems, setting a new standard for laboratory efficiency and productivity. This innovative system combines the power of chromatography and mass spectrometry, delivering unparalleled accuracy, speed, and sensitivity. With 
          <a class="text-red-600 underline font-medium" href="https://www.waters.com/nextgen/us/en.html" target="_blank" rel="noopener">Waters'</a> cutting-edge technology and Inkarp Instruments' expertise, we provide comprehensive support, including installation, training, and after-sales service.
        </p>
        <p>Reliable, precise results – simple HPLC at its best.</p>
        <p>The Breeze QS HPLC System delivers routine analyses and robust performance day after day, providing the confidence you need to get the job done. Used in laboratories worldwide, chromatographers know that they’ll get reliable data in an easy-to-use platform.</p>
        <p>With a choice of multiple components to build your own liquid chromatography system, and software that allows you to simplify the complete management of your chromatographic data, the Breeze QS HPLC System delivers consistent performance and fits when budgets are tight.</p>
      </div>
    </div>

    <div class="bg-[#F5F5F5] p-6 rounded-2xl shadow-md border border-gray-200">
      <h3 class="text-xl sm:text-2xl font-bold text-[#E63946] font-[MaxOT] mb-4">Specifications</h3>
      <div class="text-gray-700 font-[Roboto] text-base leading-relaxed space-y-4">
        <p>Build your Breeze QS HPLC System to fit your application and workload. Choose at least one pump, detector, and injector (shown below). You can also enhance the functionality of your Breeze QS HPLC System by choosing an optional component or an additional detector.</p>

        <p><strong>Pumps</strong></p>
        <ul class="list-disc list-inside space-y-2">
          <li>Waters 1525 Binary Pump</li>
          <li>1515 Isocratic Pump</li>
          <li>1525µ and 1525EF Pumps</li>
        </ul>

        <p><strong>Detectors</strong></p>
        <ul class="list-disc list-inside space-y-2">
          <li>2489 UV/Visible (UV/Vis) Detector</li>
          <li>2998 Photodiode Array (PDA) Detector</li>
          <li>2414 Refractive Index (RI) Detector</li>
          <li>2475 Fluorescence (FLR) Detector</li>
          <li>2424 Evaporative Light Scattering (ELS) Detector</li>
        </ul>

        <p><strong>Injectors</strong></p>
        <ul class="list-disc list-inside space-y-2">
          <li>Manual injectors</li>
          <li>2707 Autosampler</li>
          <li>2707 Autosampler with sample cooling</li>
        </ul>

        <p><strong>Optional Components</strong></p>
        <ul class="list-disc list-inside space-y-2">
          <li>1500 Series Column Heaters</li>
          <li>Extended Temperature Range Column Heater</li>
          <li>eSAT/IN to add third-party detectors</li>
          <li>1500 Series Vacuum Degassers</li>
        </ul>
      </div>
    </div>
  </div>
  `
    },

    "alliance-hplc-system": {
        id: "alliance-hplc-system",
        name: "Alliance HPLC System Chromatography and LC-MS Systems",
        image: ImgAllianceHPLC,
        logo: Waters,
        bannerImg: Banner3,
        altText: "Alliance HPLC System Chromatography and LC-MS Systems",
        videoId: "",
        meta: {
            title: "Alliance HPLC System | Chromatography and LC-MS | Waters Distributor India | Inkarp",
            description:
                "The Alliance HPLC System from Waters offers high precision and reliable performance for chromatography and LC-MS applications. Inkarp Instruments is the official distributor and service provider in India, offering installation, training, and support.",
            keywords: [
                "Alliance HPLC System",
                "Waters HPLC India",
                "Chromatography LC-MS Systems",
                "Inkarp Waters Distributor",
                "Pharmaceutical HPLC System",
                "HPLC for Research Labs",
                "LC-MS Service Provider India",
                "Waters Alliance HPLC Specifications"
            ],
            altText: "Waters Alliance HPLC System",
            internalLinks: ["analytical-and-chromatography-solutions"],
            externalLinks: ["https://www.waters.com/nextgen/us/en.html"]
        },
        description: `
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
    <div class="space-y-6">
     
      <h2 class="text-2xl sm:text-3xl font-bold font-[MaxOT] text-gray-800 leading-snug">
        Alliance HPLC System Chromatography and LC-MS Systems
        <br />
        <span class="text-lg text-red-600 font-semibold block mt-1">Distributor & Service Provider In India</span>
      </h2>
      <div class="text-gray-700 space-y-4 text-base leading-relaxed font-[Roboto]">
        <p>
          The Alliance HPLC System, a robust and versatile chromatography solution, and LC-MS Systems in India. This advanced system delivers exceptional performance, precision, and reliability, making it ideal for pharmaceutical, biotech, and research applications. With 
          <a class="text-red-600 underline font-medium" href="https://www.waters.com/nextgen/us/en.html" target="_blank" rel="noopener">Waters'</a> innovative technology and Inkarp Instruments' expertise, we provide comprehensive support, including installation, training, and after-sales service, to help laboratories streamline their workflows.
        </p>
        <p>Reliably achieve quality, compliant data. Every time, in every lab.</p>
        <p>Liquid chromatography (LC) systems must deliver unequivocal results that give you confidence in your scientific and business decisions. Waters LC commitment continues to succeed with the latest Alliance HPLC System – trusted by scientists worldwide for the data to drive informed decisions.</p>
        <p>Building on industry-standard performance and reliability, the Alliance HPLC System provides the capabilities to meet today’s business challenges. With its proven performance history, the Alliance HPLC is the industry’s analytical HPLC system of choice, ideally suited for methods development and routine analysis.</p>
      </div>
    </div>

    <div class="bg-[#F5F5F5] p-6 rounded-2xl shadow-md border border-gray-200">
      <h3 class="text-xl sm:text-2xl font-bold text-[#E63946] font-[MaxOT] mb-4">Specifications</h3>
      <div class="text-gray-700 font-[Roboto] text-base leading-relaxed space-y-4">
        <table class="table table-striped table-bordered w-full text-left border-collapse">
          <tbody class="divide-y divide-gray-300">
            <tr><td><strong>Maximum operating pressure</strong></td><td>5,000 psi</td></tr>
            <tr><td><strong>Front panel display</strong></td><td>Easy to use control panel</td></tr>
            <tr><td><strong>Mobile phases</strong></td><td>Up to 4 with Auto-Blend Technology</td></tr>
            <tr><td><strong>Flow rate range</strong></td><td>Up to 10 mL/min</td></tr>
            <tr><td><strong>Sample carryover</strong></td><td>≤0.0025% (Caffeine) under specified conditions</td></tr>
            <tr><td><strong>Sample compartment</strong></td><td>4–40 °C</td></tr>
            <tr><td><strong>Pump options</strong></td><td>Quaternary</td></tr>
            <tr><td><strong>Solvent conditioning</strong></td><td>Vacuum Degas</td></tr>
            <tr><td><strong>Column capacity</strong></td><td>Standard up to 3 columns</td></tr>
            <tr><td><strong>Maximum sample capacity</strong></td><td>120</td></tr>
            <tr>
              <td><strong>Detector options</strong></td>
              <td>
                Tunable UV<br />
                Photo Diode Array<br />
                Fluorescence<br />
                Refractive Index<br />
                Evaporative Light Scattering<br />
                Electrochemical<br />
                Conductivity<br />
                Mass Spectrometry
              </td>
            </tr>
            <tr>
              <td><strong>External control</strong></td>
              <td>
                Empower Software<br />
                MassLynx Software
              </td>
            </tr>
            <tr>
              <td><strong>Physical specifications</strong></td>
              <td>
                Width: 45.7 cm (18.0 in.) or 58.4 cm (23.0 in.) with column heater<br />
                Height: 57.1 cm (22.5 in.)<br />
                Depth: 57.1 cm (22.5 in.) or 64.8 cm (25.5 in.) with sample heater/cooler
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  `
    },
    "alliance-is-hplc-system": {
        id: "alliance-is-hplc-system",
        name: "Alliance iS HPLC System Chromatography and LC-MS Systems",
        image: ImgAllianceIS,
        logo: Waters,
        bannerImg: Banner3,
        altText: "Alliance iS HPLC System Chromatography and LC-MS Systems",
        videoId: "",
        meta: {
            title: "Alliance iS HPLC System | Chromatography & LC-MS | Waters Distributor India | Inkarp",
            description:
                "The Alliance iS HPLC System offers precision and error-reducing intelligence for pharmaceutical and research labs. Inkarp Instruments is the authorized distributor in India, providing installation, training, and service.",
            keywords: [
                "Alliance iS HPLC System",
                "Waters Alliance iS India",
                "Chromatography LC-MS Systems",
                "HPLC for QC Labs",
                "Inkarp Waters Distributor",
                "Intelligent HPLC System",
                "Waters Empower Software",
                "Waters LC-MS India"
            ],
            altText: "Waters Alliance iS HPLC System",
            internalLinks: ["analytical-and-chromatography-solutions"],
            externalLinks: ["https://www.waters.com/nextgen/us/en.html"]
        },
        description: `
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
    <div class="space-y-6">
     
      <h2 class="text-2xl sm:text-3xl font-bold font-[MaxOT] text-gray-800 leading-snug">
        Alliance iS HPLC System Chromatography and LC-MS Systems
        <br />
        <span class="text-lg text-red-600 font-semibold block mt-1">Distributor & Service Provider In India</span>
      </h2>
      <div class="text-gray-700 space-y-4 text-base leading-relaxed font-[Roboto]">
        <p>The Alliance iS HPLC System, a cutting-edge chromatography solution, and LC-MS Systems in India. This intuitive and robust system offers unparalleled flexibility, precision, and reliability, catering to the evolving needs of pharmaceutical, biotech, and research laboratories. With 
          <a class="text-red-600 underline font-medium" href="https://www.waters.com/nextgen/us/en.html" target="_blank" rel="noopener">Waters'</a> innovative technology and Inkarp Instruments' expertise, we deliver comprehensive support, including installation, training, and after-sales service.
        </p>
        <p>A new era of intuitive simplicity</p>
        <p>Quality Control (QC) labs face stringent, ever-evolving compliance and data quality requirements to release products within tighter timelines and budgets. These problems become exaggerated due to staff turnover and training requirements.</p>
        <p>To address these problems, the Alliance iS HPLC System elevates your QC lab with first-time right results, shortened release cycles, and fewer investigations by:</p>
        <ul class="list-disc list-inside space-y-2 pl-4">
          <li>Reducing human errors by up to 40%* through innovative system intelligence that addresses errors before they can occur</li>
          <li>Enhancing productivity and asset management with safeguards to ensure correct system performance</li>
          <li>Maximizing system uptime and minimizing service intervention</li>
        </ul>
        <p class="text-sm italic">*based on Waters’ market research in 2022, surveying 56 global Pharma QC labs running &gt;25 systems.</p>
      </div>
    </div>

    <div class="bg-[#F5F5F5] p-6 rounded-2xl shadow-md border border-gray-200">
      <h3 class="text-xl sm:text-2xl font-bold text-[#E63946] font-[MaxOT] mb-4">Specifications</h3>
      <div class="text-gray-700 font-[Roboto] text-base leading-relaxed space-y-4">
        <table class="table table-striped table-bordered w-full text-left border-collapse">
          <tbody class="divide-y divide-gray-300">
            <tr><td><strong>Maximum operating pressure</strong></td><td>10,000 psi</td></tr>
            <tr><td><strong>pH range</strong></td><td>1 to 13</td></tr>
            <tr><td><strong>Operating flow rate range</strong></td><td>0.001 to 10.000 mL/min</td></tr>
            <tr><td><strong>Injection type</strong></td><td>Flow-through needle</td></tr>
            <tr><td><strong>Sample flow path</strong></td><td>Stainless steel</td></tr>
            <tr><td><strong>Sample carryover</strong></td><td>≤0.002% [Caffeine] under UV conditions</td></tr>
            <tr><td><strong>Sample compartment</strong></td><td>4 to 40 °C</td></tr>
            <tr><td><strong>Pump options</strong></td><td>Quaternary</td></tr>
            <tr><td><strong>Solvent conditioning</strong></td><td>Passive pre-heating</td></tr>
            <tr><td><strong>Column tracking</strong></td><td>Yes, with RFID enabled eConnect Waters Columns</td></tr>
            <tr><td><strong>Column capacity</strong></td><td>1 column up to 300 mm length, up to 8 mm internal diameter (I.D)</td></tr>
            <tr>
              <td><strong>Maximum sample capacity</strong> (any three of the following)</td>
              <td>
                48-position, 2.00-mL vial holder<br />
                54-position, 2.00-mL vial holder<br />
                96-well plate<br />
                384-well plate<br />
                48-position, 0.65-mL micro-centrifuge tube plate<br />
                24-position, 1.50-mL micro-centrifuge plate
              </td>
            </tr>
            <tr><td><strong>Detector options</strong></td><td>TUV Detector</td></tr>
            <tr>
              <td><strong>Informatics compatibility</strong></td>
              <td>
                Empower Chromatography Data System (CDS)<br />
                (Feature Release 4 with Windows 10 and later)
              </td>
            </tr>
            <tr>
              <td><strong>Physical Specifications</strong></td>
              <td>
                Height: 74.2 cm (29.23 in.)<br />
                Width: 49.9 cm (19.64 in.)<br />
                Depth: 63.5 cm (24.99 in.)<br />
                Weight: 72.5 kg (160.0 lbs.)
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  `
    },

    "arc-hplc-system": {
        id: "arc-hplc-system",
        name: "Arc HPLC System Chromatography and LC-MS Systems",
        image: ImgArcHPLC,
        logo: Waters,
        bannerImg: Banner3,
        altText: "Arc HPLC System Chromatography and LC-MS Systems",
        videoId: "",
        meta: {
            title: "Arc HPLC System | Chromatography & LC-MS | Waters Distributor India | Inkarp",
            description:
                "The Arc HPLC System offers dependable performance and simple method transfer for regulated labs. Inkarp Instruments is the authorized Waters distributor in India, offering full service and installation.",
            keywords: [
                "Arc HPLC System",
                "Waters Arc HPLC India",
                "LC-MS Chromatography System",
                "HPLC for QC Labs",
                "Waters Distributor India",
                "Arc HPLC Specifications",
                "Method Transfer HPLC",
                "Inkarp Waters India"
            ],
            altText: "Waters Arc HPLC System",
            internalLinks: ["analytical-and-chromatography-solutions"],
            externalLinks: ["https://www.waters.com/nextgen/us/en.html"]
        },
        description: `
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
    <div class="space-y-6">
    
      <h2 class="text-2xl sm:text-3xl font-bold font-[MaxOT] text-gray-800 leading-snug">
        Arc HPLC System Chromatography and LC-MS Systems
        <br />
        <span class="text-lg text-red-600 font-semibold block mt-1">Distributor & Service Provider In India</span>
      </h2>
      <div class="text-gray-700 space-y-4 text-base leading-relaxed font-[Roboto]">
        <p>The Arc HPLC System, a versatile and robust chromatography solution, and LC-MS Systems in India. Designed for simplicity, flexibility, and reliability, this system meets the diverse needs of pharmaceutical, biotech, and research laboratories. With 
          <a class="text-red-600 underline font-medium" href="https://www.waters.com/nextgen/us/en.html" target="_blank" rel="noopener">Waters'</a> innovative technology and Inkarp Instruments' expertise, we provide comprehensive support, including installation, training, and after-sales service.
        </p>
        <p>Highly reliable, low complexity, accurate routine analysis for all</p>
        <p>Ever-evolving regulations are impacting liquid chromatography (LC) method approaches for product quality control and beyond. With the Waters Arc HPLC System, you can count on high-efficiency separations and quality data to meet your regulatory requirements with confidence.</p>
        <p>With Arc HPLC System, you can easily replicate and improve the performance of your existing LC methods without compromising data quality, eliminating the burdens of older, less efficient LC systems. Rugged and dependable, Arc HPLC System delivers the ideal balance of performance and value for right-the-first-time analysis.</p>
      </div>
    </div>

    <div class="bg-[#F5F5F5] p-6 rounded-2xl shadow-md border border-gray-200">
      <h3 class="text-xl sm:text-2xl font-bold text-[#E63946] font-[MaxOT] mb-4">Specifications</h3>
      <div class="text-gray-700 font-[Roboto] text-base leading-relaxed space-y-4">
        <table class="table table-striped table-bordered w-full text-left border-collapse">
          <tbody class="divide-y divide-gray-300">
            <tr><td><strong>Maximum operating pressure</strong></td><td>9500 psi</td></tr>
            <tr><td><strong>pH range</strong></td><td>1–12.5</td></tr>
            <tr><td><strong>Operating flow rate range</strong></td><td>Up to 5.000 mL/min</td></tr>
            <tr><td><strong>Sample flow path</strong></td><td>Stainless-steel</td></tr>
            <tr><td><strong>Sample carryover</strong></td><td>≤0.002% (Caffeine) under UV conditions</td></tr>
            <tr><td><strong>Sample compartment</strong></td><td>4–40 °C</td></tr>
            <tr><td><strong>Sample capacity</strong></td><td>768 [2x 384-well plate]; or 96 [2mL vial holders]</td></tr>
            <tr><td><strong>Pump options</strong></td><td>Quaternary</td></tr>
            <tr><td><strong>Solvent conditioning</strong></td><td>Passive and active pre-heating</td></tr>
            <tr><td><strong>Column tracking</strong></td><td>eCord Technology tracks column usage and history</td></tr>
            <tr><td><strong>Column capacity</strong></td><td>1 to 3 columns, up to 7.8 mm ID and 300 mm length</td></tr>
            <tr>
              <td><strong>Detector options</strong></td>
              <td>
                Tunable UV Detector (TUV)<br/>
                Photodiode Array Detector (PDA)<br/>
                Fluorescence Detector (FLR)<br/>
                Refractive Index Detector (RI)<br/>
                Evaporative Light Scattering Detector (ELSD)<br/>
                Conductivity Detector (CD)<br/>
                Electrochemical Detector (ECD)<br/>
                ACQUITY QDa Mass Detector (QDa)
              </td>
            </tr>
            <tr><td><strong>External control</strong></td><td>Empower Chromatography Data System</td></tr>
            <tr>
              <td><strong>Physical specifications</strong><br/>(QSM-R, SM-FTN-R, 30cm CH)</td>
              <td>
                Width: 57.4 cm (22.6 in.)<br/>
                Height: 57.1 cm (22.5 in.)<br/>
                Depth: 62.8 cm (24.7 in.)
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  `
    },

    "industrial-liquid-chromatography": {
        id: "industrial-liquid-chromatography",
        name: "Industrial-liquid-Chromatography",
        image: Indutrial,
        logo: Labomatic,
        bannerImg: Banner3,
        altText: "Arc HPLC System Chromatography and LC-MS Systems",
        videoId: "",
        meta: {
            title: "Arc HPLC System | Chromatography & LC-MS | Waters Distributor India | Inkarp",
            description:
                "The Arc HPLC System offers dependable performance and simple method transfer for regulated labs. Inkarp Instruments is the authorized Waters distributor in India, offering full service and installation.",
            keywords: [
                "Arc HPLC System",
                "Waters Arc HPLC India",
                "LC-MS Chromatography System",
                "HPLC for QC Labs",
                "Waters Distributor India",
                "Arc HPLC Specifications",
                "Method Transfer HPLC",
                "Inkarp Waters India"
            ],
            altText: "Waters Arc HPLC System",
            internalLinks: ["analytical-and-chromatography-solutions"],
            externalLinks: ["https://www.waters.com/nextgen/us/en.html"]
        },
        description: `
   <div class="col-lg-7 col-md-12 col-sm-12 content-column">
                            <div class="product-details p_relative d_block ml_20">                                
                                    <figure class="image p_relative d_block prod-logo"><a href="analytical-chemistry-and-weighing.html"><img src="assets/images/principals/seperlab.png" alt=""></a></figure>                                                                                        
                                <h2 class="d_block fs_29 lh_40 fw_sbold font_family_inter mb_10">Industrial Liquid Chromatography Labomatic<br> <span class="subHeading">Distributor & Service Provider In India </span></h2>                                                                
                                <div class="text p_relative d_block mb_10">
                                    <p>Inkarp in partnership with Labomatic, offers a comprehensive range of Industrial Liquid Chromatography solutions in India. Our portfolio includes cutting-edge systems, columns, and accessories designed to meet the demanding needs of pharmaceutical, biotech, and chemical manufacturing industries. With Labomatic's expertise in liquid chromatography and Inkarp Instruments' dedication to customer support, we provide turnkey solutions, including installation, training, and after-sales service.</p>
                                    <p class="font_family_poppins mb_10">We offer outstanding products of the highest quality for made-to-measure solutions and devices – without compromising product flexibility and dimensions for laboratories within the pharmaceutical and chemical sectors.</p>
                                    <p><strong>High performance Columns with biaxial compression</strong></p>
                                    <p>Columns Separchrom PC01 correspond to the highest requirements of preparative liquid chromatography. PC01 columns are designed to be used in a mode of axial (or biaxial) compression. Columns can be packed by dynamic slurry technique or by sedimentation method. They are equipped with identical pistons on input and output. Pistons are provided by Poremet® 2 stainless steel (AISI 316 L) frits with porosity 3 µm and minimum hydraulic resistance. New developed patented liquid distributing system is installed under each frit. The design guarantees perfect piston flow, high efficiency even for high injection volume and simple accessibility of frit for cleaning.</p>                                    
                                </div>
                              
                            </div>
                        </div>
                    </div>
                </div>
                <div class="product-discription p_relative d_block mb_80">
                <section class="service-20 p_relative sec-pad">
            <div class="auto-container">
                <h3 class="text-center">System</h3> <br>
                <div class="tabs-box">
                    <div class="tab-btn-box p_relative d_block mb_60">
                        <ul class="tab-btns tab-buttons clearfix centred">
                            <li class="tab-btn active-btn" data-tab="#tab-1">                                
                                <h6 class="fs_18 fw_medium tran_5 z_1">Standard design</h6>
                            </li>
                            <li class="tab-btn" data-tab="#tab-2">                                
                                <h6 class="fs_18 fw_medium tran_5 z_1">Customer-specific designs</h6>
                            </li>
                            <li class="tab-btn" data-tab="#tab-3">                                
                                <h6 class="fs_18 fw_medium tran_5 z_1">ATEX compliant GMP system solutions</h6>
                            </li>
                        </ul>
                    </div>
                    <div class="tabs-content">
                        <div class="tab active-tab" id="tab-1">
                            <div class="inner-box p_relative">
                                <div class="row clearfix">
                                    <div class="col-lg-6 col-md-12 col-sm-12 content-column">
                                        <div class="content_block_27">
                                            <div class="content-box p_relative d_block mr_30">
                                                <div class="sec-title-six p_relative d_block mb_25">
                                                    <h2 class="d_block fs_40 lh_50 fw_bold">Standard design</h2>
                                                </div>
                                                <ul class="prod-det"><li>LABOMATIC HD 5000 triple piston pumps<ul><li>Flow rate: 5 – 2000 ml/min.</li><li>Pressure up to 600 bar</li></ul></li><li>Binary to quaternary high- and low-pressure gradient elution</li><li>LABOPORT switch valve system</li><li>LABOPORT autosampler system</li><li>LABOCORD detectors<ul><li>UV/VIS, DAD, RI, MS</li></ul></li><li>LABOCOL Vario 4000 fraction collection series</li><li>LABOCHROM 5 software</li><li>Instrument layout systems</li></ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-12 col-sm-12 image-column">
                                        <div class="image_block_24">
                                            <div class="image-box p_relative d_block ml_30">
                                                <div class="shape">
                                                    <div class="float-bob-x shape-1 p_absolute w_95 h_95" style="background-image: url(assets/images/shape/shape-193.png);"></div>
                                                    <div class="shape-2 p_absolute b_20 float-bob-y" style="background-image: url(assets/images/shape/shape-194.png);"></div>
                                                    <div class="shape-3 p_absolute w_170 h_170 bg-color-1 b_radius_50"></div>
                                                </div> 
                                                <figure class="image p_relative d_block b_radius_10"><img src="assets/images/products/HPLC_Standartanlage.jpg" alt=""></figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab" id="tab-2">
                            <div class="inner-box p_relative">
                                <div class="row clearfix">
                                    <div class="col-lg-6 col-md-12 col-sm-12 content-column">
                                        <div class="content_block_27">
                                            <div class="content-box p_relative d_block mr_30">
                                                <div class="sec-title-six p_relative d_block mb_25">
                                                    <h2 class="d_block fs_40 lh_50 fw_bold">Customer-specific designs</h2>
                                                </div>
                                                <ul class="prod-det"><li>Mobile system trolley</li><li>Integrated autosampler</li><li>Safety solvents cabinet with extraction device</li></ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-12 col-sm-12 image-column">
                                        <div class="image_block_24">
                                            <div class="image-box p_relative d_block ml_30">
                                                <div class="shape">
                                                    <div class="float-bob-x shape-1 p_absolute w_95 h_95" style="background-image: url(assets/images/shape/shape-193.png);"></div>
                                                    <div class="shape-2 p_absolute b_20 float-bob-y" style="background-image: url(assets/images/shape/shape-194.png);"></div>
                                                    <div class="shape-3 p_absolute w_170 h_170 bg-color-1 b_radius_50"></div>
                                                </div> 
                                                <figure class="image p_relative d_block b_radius_10"><img src="assets/images/products/HPLCunitbig1.jpg" alt=""></figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab" id="tab-3">
                            <div class="inner-box p_relative">
                                <div class="row clearfix">
                                    <div class="col-lg-6 col-md-12 col-sm-12 content-column">
                                        <div class="content_block_27">
                                            <div class="content-box p_relative d_block mr_30">
                                                <div class="sec-title-six p_relative d_block mb_25">
                                                    <h2 class="d_block fs_40 lh_50 fw_bold">ATEX compliant GMP system solutions </h2>
                                                </div>
                                                <ul class="prod-det"><li>Flow rates up to 5,000ml/min. and pressures up to 600 bar</li><li>Binary to quaternary gradient elution</li><li>Diverse autosampler solutions</li><li>Explosion-proof overpressure cabinet with integrated cooling system</li><li>Explosion-proof system switch valve</li><li>Continuous pressure, flow and temperature monitoring</li><li>Fibre optic cable photometer</li><li>Management and data processing system</li><li>System-integrated computer&nbsp;</li></ul>                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-12 col-sm-12 image-column">
                                        <div class="image_block_24">
                                            <div class="image-box p_relative d_block ml_30">
                                                <div class="shape">
                                                    <div class="float-bob-x shape-1 p_absolute w_95 h_95" style="background-image: url(assets/images/shape/shape-193.png);"></div>
                                                    <div class="shape-2 p_absolute b_20 float-bob-y" style="background-image: url(assets/images/shape/shape-194.png);"></div>
                                                    <div class="shape-3 p_absolute w_170 h_170 bg-color-1 b_radius_50"></div>
                                                </div> 
                                                <figure class="image p_relative d_block b_radius_10"><img src="assets/images/products/ATEX-HPLC-Anlage.jpg" alt=""></figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
        </section>
        <section class="service-20 p_relative ">
            <div class="auto-container">
                <h3 class="text-center">Devices</h3> <br>
                <div class="tabs-box">
                    <div class="tab-btn-box p_relative d_block mb_60">
                        <ul class="tab-btns tab-buttons clearfix centred">
                            <li class="tab-btn active-btn" data-tab="#tab-4">                                
                                <h6 class="fs_18 fw_medium tran_5 z_1">Pump systems</h6>
                            </li>
                            <li class="tab-btn" data-tab="#tab-5">                                
                                <h6 class="fs_18 fw_medium tran_5 z_1">Sample injection</h6>
                            </li>
                            <li class="tab-btn" data-tab="#tab-6">                                
                                <h6 class="fs_18 fw_medium tran_5 z_1">Columns</h6>
                            </li>
                            <li class="tab-btn" data-tab="#tab-7">                                
                                <h6 class="fs_18 fw_medium tran_5 z_1">Detectors</h6>
                            </li>
                            <li class="tab-btn" data-tab="#tab-8">                                
                                <h6 class="fs_18 fw_medium tran_5 z_1">Fractions collectors</h6>
                            </li>
                        </ul>
                    </div>
                    <div class="tabs-content">
                        <div class="tab active-tab" id="tab-4">
                            <div class="inner-box p_relative">
                                <div class="row clearfix">
                                    <div class="col-lg-6 col-md-12 col-sm-12 content-column">
                                        <div class="content_block_27">
                                            <div class="content-box p_relative d_block mr_30">
                                                <div class="sec-title-six p_relative d_block mb_25">
                                                    <h2 class="d_block fs_40 lh_50 fw_bold">LABOMATIC HD-5000 triple-piston HPLC gradient pump</h2>
                                                </div>
                                                <div class="text p_relative d_block mb_25">
                                                    <p class="font_family_poppins">with integrated system controller for method programming and control of the complete HPLC system. The HD-5000 controller also allows binary, ternary or quaternary high pressure or low pressure gradient elution, with an almost pulsation-free flow.</p>
                                                </div>
                                                <h3>Special features</h3>
                                                <ul class="prod-det"><li>Versions: Standard or GMP</li><li>Flow rates of 5 to 4,920 ml/min.</li><li>Three-piston system with primary and secondary pistons</li><li>Five different pump heads that can also be combined with each other</li><li>Pressures up to 600 bar (8,700 psi)</li><li>Active piston back rinse ensures easy use of buffer eluents</li><li>Up to quaternary high-pressure or low-pressure gradients</li><li>Active mixing system for low-pressure gradients</li><li>Control of 12 and more pump mechanics</li><li>Control of up to 20 valves, static or pulsed</li><li>Flow or constant pressure operation</li><li>Programmable flow gradient</li><li>Feeding with microlitre precision (e. g. DEA/TFA)</li></ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-12 col-sm-12 image-column">
                                        <div class="image_block_24">
                                            <div class="image-box p_relative d_block ml_30">
                                                <div class="shape">
                                                    <div class="float-bob-x shape-1 p_absolute w_95 h_95" style="background-image: url(assets/images/shape/shape-193.png);"></div>
                                                    <div class="shape-2 p_absolute b_20 float-bob-y" style="background-image: url(assets/images/shape/shape-194.png);"></div>
                                                    <div class="shape-3 p_absolute w_170 h_170 bg-color-1 b_radius_50"></div>
                                                </div> 
                                                <figure class="image p_relative d_block b_radius_10"><img src="assets/images/products/Labomatic_002d.jpg" alt=""></figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab" id="tab-5">
                            <div class="inner-box p_relative">
                                <div class="row clearfix">
                                    <div class="col-lg-12 col-md-12 col-sm-12 content-column">
                                        <div class="content_block_27">
                                            <div class="content-box p_relative d_block mr_30">
                                            <ul class="accordion-box">
                                    <li class="accordion block active-block p_relative d_block">
                                        <div class="acc-btn active p_relative d_block tran_5 pt_16 pr_80 pb_16 pl_30">
                                            <div class="icon-outer p_absolute fs_10 tran_5 z_1"><i class="icon-29"></i></div>
                                            <h5 class="p_relative d_block fs_18 lh_28 fw_medium font_family_poppins">LABOPORT Sample injection</h5>
                                        </div>
                                        <div class="acc-content current p_relative pt_25 pr_50 pb_25 pl_30">
                                            <div class="text p_relative d_block">
                                            <div class="sec-title-six p_relative d_block mb_25">
                                                    <h3 class="d_block fs_40 lh_50 fw_bold">LABOPORT Sample injection</h3>
                                                </div>
                                                <h4>LABOPORT valves for manual sample delivery <br>
LABOPORT Single Sample Delivery System</h4>
<h4>Special features</h4>
                                                <ul class="prod-det"><li>Sample delivery valve and panel diluter</li><li>Deliver a single or multiple samples</li><li>Mounted on LABOMATIC system panels</li></ul>
                                            </div>
                                        </div>
                                    </li>                                    
                                    <li class="accordion block p_relative d_block">
                                        <div class="acc-btn p_relative d_block tran_5 pt_16 pr_80 pb_16 pl_30">
                                            <div class="icon-outer p_absolute fs_10 tran_5 z_1"><i class="icon-29"></i></div>
                                            <h5 class="p_relative d_block fs_18 lh_28 fw_medium font_family_poppins">How to make your website look professional?</h5>
                                        </div>
                                        <div class="acc-content p_relative pt_25 pr_50 pb_25 pl_30">
                                            <div class="text p_relative d_block">
                                                <div class="row">
                                                <div class="col-lg-6 col-md-12 col-sm-12 content-column">
                                        <div class="content_block_27">
                                            <div class="content-box p_relative d_block mr_30">
                                                <div class="sec-title-six p_relative d_block mb_25">
                                                    <h3 class="d_block fs_40 lh_50 fw_bold">LABOMAT AS-5000 AutoSampler</h3>
                                                </div>
                                                <h4>LABOMAT AS-5000 AutoSampler</h4>
                                                <p>The instrument size is determined by the customer’s application, although the number of samples is limited due to the travel distance of 2,800 mm x 800 mm. The sample volume is virtually unlimited. The Z-axis moves up to 600 mm so correspondingly tall sample vessels can be used. The sample is either sucked into a sample loop with an appropriate diluting agent or a sample pump is used.</p> <br>
                                                <h4>Special features</h4>   
                                                <ul class="prod-det"><li>Freely programmable XYZ system</li><li>Unlimited sample volume from microlitres to litres</li><li>Double cleaning of the needle to prevent sample transfer</li><li>Customised racks and/or fixing for round-bottomed flasks</li><li>Touchscreen for program and parameter display</li><li>or control via the LABOCHROM 5 software</li><li>A combination with a fraction collector is easily possible</li></ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-12 col-sm-12 image-column">
                                        <div class="image_block_24">
                                            <div class="image-box p_relative d_block ml_30">
                                                <div class="shape">
                                                    <div class="float-bob-x shape-1 p_absolute w_95 h_95" style="background-image: url(assets/images/shape/shape-193.png);"></div>
                                                    <div class="shape-2 p_absolute b_20 float-bob-y" style="background-image: url(assets/images/shape/shape-194.png);"></div>
                                                    <div class="shape-3 p_absolute w_170 h_170 bg-color-1 b_radius_50"></div>
                                                </div> 
                                                <figure class="image p_relative d_block b_radius_10"><img src="assets/images/products/LabocolAS-3000cmyk.jpg" alt=""></figure>
                                            </div>
                                        </div>
                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>                                                                                                                                   
                                </div>
                            </div>
                        </div>
                        </div>
                            </div>
                        </div>
                        <div class="tab" id="tab-6">
                            <div class="inner-box p_relative">
                                <div class="row clearfix">
                                    <div class="col-lg-12 col-md-12 col-sm-12 content-column">
                                        <div class="content_block_27">
                                            <div class="content-box p_relative d_block mr_30">
                                            <ul class="accordion-box">
                                    <li class="accordion block active-block p_relative d_block">
                                        <div class="acc-btn active p_relative d_block tran_5 pt_16 pr_80 pb_16 pl_30">
                                            <div class="icon-outer p_absolute fs_10 tran_5 z_1"><i class="icon-29"></i></div>
                                            <h5 class="p_relative d_block fs_18 lh_28 fw_medium font_family_poppins">LABOCHROM AMC axially compressible chromatography columns for MPLC and HPLC</h5>
                                        </div>
                                        <div class="acc-content current p_relative pt_25 pr_50 pb_25 pl_30">
                                            <div class="text p_relative d_block">
                                            <div class="sec-title-six p_relative d_block mb_25">
                                                    <h3 class="d_block fs_40 lh_50 fw_bold">LABOCHROM AMC axially compressible chromatography columns for MPLC and HPLC</h3>
                                                </div>
                                                <p>The axially compressible LABOCHROM AMC column for MPLC and HPLC chromatography is the only column of its kind. It is constantly under a pressure specified by the user, under which it is maintained independently of the operating pressure of the system. The axial compression makes the bed more stable and durable. Pressures of up to 65 bar allow a smaller gel particle size to be selected for the same application. The field of application ranges from preparative MPLC to a variety of applications in preparative HPLC.</p>
                                                <h4>Special features </h4>
                                                <ul class="prod-det"><li>Axially compressible</li><li>Automatic packing and emptying</li><li>The best packing results obtained using axial pressure</li><li>Variable bed lengths due to the column seal which is adjustable by 500 mm</li><li>20 different dimensions with pressures up to 65 bar (see range)</li><li>Spring-supported column seals</li><li>Prevention of wall effects by using precision tubes made of stainless steel or borosilicate glass</li><li>The cartridge system helps reduce operating costs</li><li>Compressing units for different column diameters can be used</li><li>Completely independent of external power sources &nbsp; &nbsp; &nbsp;</li></ul>
                                            </div>
                                        </div>
                                    </li>                                    
                                    <li class="accordion block p_relative d_block">
                                        <div class="acc-btn p_relative d_block tran_5 pt_16 pr_80 pb_16 pl_30">
                                            <div class="icon-outer p_absolute fs_10 tran_5 z_1"><i class="icon-29"></i></div>
                                            <h5 class="p_relative d_block fs_18 lh_28 fw_medium font_family_poppins">LABOCHROM ACSC axially compressible HPLC chromatography steel columns</h5>
                                        </div>
                                        <div class="acc-content p_relative pt_25 pr_50 pb_25 pl_30">
                                            <div class="text p_relative d_block">
                                                <div class="row">
                                                <div class="col-lg-6 col-md-12 col-sm-12 content-column">
                                        <div class="content_block_27">
                                            <div class="content-box p_relative d_block mr_30">
                                                <div class="sec-title-six p_relative d_block mb_25">
                                                    <h3 class="d_block fs_40 lh_50 fw_bold">LABOCHROM ACSC axially compressible HPLC chromatography steel columns</h3>
                                                </div>                                                
                                                <p>The axially compressible LABOCHROM ACSC-HPLC column is the only column of its kind. Like the AMC column, it is under a constant pressure specified by the user, under which it is maintained independently of the operating pressure of the system. The axial compression makes the bed more stable and durable.</p> <br>
                                                <h4>Special features</h4>   
                                                <ul class="prod-det"><li>Axially compressible</li><li>Automatic packing and emptying</li><li>Best packing results obtained using axial pressure</li><li>Variable bed lengths due to the column seal which is adjustable by 500 mm</li><li>20 different dimensions with pressures up to 150 bar (see range)</li><li>Spring-supported column seals</li><li>Prevention of wall effects due to the use of precision stainless steel tubes</li><li>The cartridge system helps reduce operating costs</li><li>Compressing units for different column diameters can be used</li><li>Completely independent of external power sources &nbsp; &nbsp;</li></ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-12 col-sm-12 image-column">
                                        <div class="image_block_24">
                                            <div class="image-box p_relative d_block ml_30">
                                                <div class="shape">
                                                    <div class="float-bob-x shape-1 p_absolute w_95 h_95" style="background-image: url(assets/images/shape/shape-193.png);"></div>
                                                    <div class="shape-2 p_absolute b_20 float-bob-y" style="background-image: url(assets/images/shape/shape-194.png);"></div>
                                                    <div class="shape-3 p_absolute w_170 h_170 bg-color-1 b_radius_50"></div>
                                                </div> 
                                                <figure class="image p_relative d_block b_radius_10"><img src="assets/images/products/ASCSStahlsaeule.jpg" alt=""></figure>
                                            </div>
                                        </div>
                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="accordion block p_relative d_block">
                                        <div class="acc-btn p_relative d_block tran_5 pt_16 pr_80 pb_16 pl_30">
                                            <div class="icon-outer p_absolute fs_10 tran_5 z_1"><i class="icon-29"></i></div>
                                            <h5 class="p_relative d_block fs_18 lh_28 fw_medium font_family_poppins">LABOCHROM HDSC HPLC steel chromatography columns</h5>
                                        </div>
                                        <div class="acc-content p_relative pt_25 pr_50 pb_25 pl_30">
                                            <div class="text p_relative d_block">
                                                <div class="row">
                                                <div class="col-lg-6 col-md-12 col-sm-12 content-column">
                                        <div class="content_block_27">
                                            <div class="content-box p_relative d_block mr_30">
                                                <div class="sec-title-six p_relative d_block mb_25">
                                                    <h3 class="d_block fs_40 lh_50 fw_bold">LABOCHROM HDSC HPLC steel chromatography columns</h3>
                                                </div>                                                
                                                <h4>Area of application</h4>                                                
                                                <p>HPLC (High Performance Liquid Chromatography) for research, development and production.</p> <br>
                                                <h4>Special features</h4>   
                                                <ul class="prod-det"><li>Inner diameter from 10 to 50 mm</li><li>Lengths up to 250 mm</li><li>Empty columns or packed columns&nbsp;</li></ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-12 col-sm-12 image-column">
                                        <div class="image_block_24">
                                            <div class="image-box p_relative d_block ml_30">
                                                <div class="shape">
                                                    <div class="float-bob-x shape-1 p_absolute w_95 h_95" style="background-image: url(assets/images/shape/shape-193.png);"></div>
                                                    <div class="shape-2 p_absolute b_20 float-bob-y" style="background-image: url(assets/images/shape/shape-194.png);"></div>
                                                    <div class="shape-3 p_absolute w_170 h_170 bg-color-1 b_radius_50"></div>
                                                </div> 
                                                <figure class="image p_relative d_block b_radius_10"><img src="assets/images/products/HDSC_2_sw_H-grau.jpg" alt=""></figure>
                                            </div>
                                        </div>
                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="accordion block p_relative d_block">
                                        <div class="acc-btn p_relative d_block tran_5 pt_16 pr_80 pb_16 pl_30">
                                            <div class="icon-outer p_absolute fs_10 tran_5 z_1"><i class="icon-29"></i></div>
                                            <h5 class="p_relative d_block fs_18 lh_28 fw_medium font_family_poppins">LABOCHROM MPGC glass columns for medium pressure (MPLC) and flash chromatography</h5>
                                        </div>
                                        <div class="acc-content p_relative pt_25 pr_50 pb_25 pl_30">
                                            <div class="text p_relative d_block">
                                                <div class="row">
                                                <div class="col-lg-6 col-md-12 col-sm-12 content-column">
                                        <div class="content_block_27">
                                            <div class="content-box p_relative d_block mr_30">
                                                <div class="sec-title-six p_relative d_block mb_25">
                                                    <h3 class="d_block fs_40 lh_50 fw_bold">LABOCHROM MPGC glass columns for medium pressure (MPLC) and flash chromatography</h3>
                                                </div>
                                                <p>The LABOCHROM MPGC columns are the only glass columns with a column seal that can be adjusted under pressure. The field of application includes MPLC (medium pressure chromatography) and flash chromatography.</p>                                                <br>
                                                <h4>Special features</h4>   
                                                <ul class="prod-det"><li>No dead volume due to the pressurised column seal with an adjustable height of 40 mm</li><li>Withstands pressure up to 20 bar</li><li>38 different column dimensions (see range)</li><li>Precolumns for all inner diameters</li><li>Columns are made of inert materials (PTFE, glass)</li><li>Good chromatographic results due to optimal inner column surface made of glass</li><li>Visual observation of the packing status</li><li>Reproducible and even sample distribution due to the conical shape of the inlet</li><li>Couplings available for connecting columns with various different inner diameters</li></ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-12 col-sm-12 image-column">
                                        <div class="image_block_24">
                                            <div class="image-box p_relative d_block ml_30">
                                                <div class="shape">
                                                    <div class="float-bob-x shape-1 p_absolute w_95 h_95" style="background-image: url(assets/images/shape/shape-193.png);"></div>
                                                    <div class="shape-2 p_absolute b_20 float-bob-y" style="background-image: url(assets/images/shape/shape-194.png);"></div>
                                                    <div class="shape-3 p_absolute w_170 h_170 bg-color-1 b_radius_50"></div>
                                                </div> 
                                                <figure class="image p_relative d_block b_radius_10"><img src="assets/images/products/Laboschrom_MPGC-001.jpg" alt=""></figure>
                                            </div>
                                        </div>
                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>                                                                                                                                   
                                </div>
                            </div>
                        </div>    
                        </div>
                            </div>
                        </div>    
                        <div class="tab" id="tab-7">
                            <div class="inner-box p_relative">
                                <div class="row clearfix">
                                    <div class="col-lg-6 col-md-12 col-sm-12 content-column">
                                        <div class="content_block_27">
                                            <div class="content-box p_relative d_block mr_30">
                                                <div class="sec-title-six p_relative d_block mb_25">
                                                    <h2 class="d_block fs_40 lh_50 fw_bold">LABOCORD-5000 diode array (DAD) and UV/VIS spectrophotometer</h2>
                                                </div>
                                                <p>Combines the attractive and functional LABOMATIC design with high-performance photometer technology. Its specifications, robustness and high flexibility are impressive.</p>
                                                <br>
                                                <h4>Special features</h4>
                                                <ul class="prod-det"><li>Versions: Standard or GM</li><li>Large number of measuring cells available</li><li>Preparative measuring cells with layer thicknesses of 0.05 mm minimum</li><li>Flow rate up to 10 litre/min.</li><li>Measuring cells with optical fibres (ATEX)</li></ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-12 col-sm-12 image-column">
                                        <div class="image_block_24">
                                            <div class="image-box p_relative d_block ml_30">
                                                <div class="shape">
                                                    <div class="float-bob-x shape-1 p_absolute w_95 h_95" style="background-image: url(assets/images/shape/shape-193.png);"></div>
                                                    <div class="shape-2 p_absolute b_20 float-bob-y" style="background-image: url(assets/images/shape/shape-194.png);"></div>
                                                    <div class="shape-3 p_absolute w_170 h_170 bg-color-1 b_radius_50"></div>
                                                </div> 
                                                <figure class="image p_relative d_block b_radius_10"><img src="assets/images/products/LABOCORD5000_Montage.jpg" alt=""></figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab" id="tab-8">
                            <div class="inner-box p_relative">
                                <div class="row clearfix">
                                    <div class="col-lg-6 col-md-12 col-sm-12 content-column">
                                        <div class="content_block_27">
                                            <div class="content-box p_relative d_block mr_30">
                                                <div class="sec-title-six p_relative d_block mb_25">
                                                    <h2 class="d_block fs_40 lh_50 fw_bold">LABOMATIC Vario-4000 fraction collection series</h2>
                                                </div>
                                                <h4>Small-sized instruments for a large number of fractions</h4>
                                                <p>The small size combined with optimum space utilisation make the LABOCOL Vario-4000 units ideal for use where space is limited.</p>
                                                <p>The series consists of the following units</p>
                                                <ul class="prod-det"><li>Vario-4000 with a fractioning area for three racks of one type.</li><li>Vario-4000 Plus with a fractioning area for five racks of one type.</li><li>Vario-4000 X-Plus, a unit tailored to individual customer needs. Any fractionating vialscan be placed on a base area of maximum 49 x 57 cm (width x depth). We manufacture individual racks for you.</li></ul>
                                                <p>Fractions up to several litres are possible.</p>
                                                <br>
                                                <h4>Special features</h4>
                                                <ul class="prod-det"><li>Versions: Standard or GMP</li><li>Removable XY system, also for use with drain racks</li><li>Freely programmable XY system</li><li>Height-adjustable fraction collection arm</li><li>Touchscreen panel as programming console</li><li>Fractionation time or pump delivery volume programming</li><li>Variety of different fractionation racks</li><li>No problems with aggressive solvents due to the use of stainless steel for housing and test tube racks</li><li>Small size combined with optimal space utilisation</li><li>Flow interruption and delay/waste valve integrated into the unit</li><li>Up to one litre fractionation volume.</li><li>Draining racks for collecting up to 100 fractions of any volume</li><li>Choice of fractionation vials with different capacities from a few millilitres up to one litre</li><li>Multiple chromatography, simultaneous dosing of up to 20 column fractions simultaneously</li></ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-12 col-sm-12 image-column">
                                        <div class="image_block_24">
                                            <div class="image-box p_relative d_block ml_30">
                                                <div class="shape">
                                                    <div class="float-bob-x shape-1 p_absolute w_95 h_95" style="background-image: url(assets/images/shape/shape-193.png);"></div>
                                                    <div class="shape-2 p_absolute b_20 float-bob-y" style="background-image: url(assets/images/shape/shape-194.png);"></div>
                                                    <div class="shape-3 p_absolute w_170 h_170 bg-color-1 b_radius_50"></div>
                                                </div> 
                                                <figure class="image p_relative d_block b_radius_10"><img src="assets/images/products/LABOCOL_V_4000_mit_Plus-001.jpg" alt=""></figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>                    
                    </div>
                </div>
            </div>
        </section> `
    },
    "liquid-handling": {
        id: "liquid-handling",
        name: "Liquid HAndling",
        image: Liquid1,
        logo: Labomatic,
        bannerImg: Banner3,
        altText: "Arc HPLC System Chromatography and LC-MS Systems",
        videoId: "",
        meta: {
            title: "Arc HPLC System | Chromatography & LC-MS | Waters Distributor India | Inkarp",
            description:
                "The Arc HPLC System offers dependable performance and simple method transfer for regulated labs. Inkarp Instruments is the authorized Waters distributor in India, offering full service and installation.",
            keywords: [
                "Arc HPLC System",
                "Waters Arc HPLC India",
                "LC-MS Chromatography System",
                "HPLC for QC Labs",
                "Waters Distributor India",
                "Arc HPLC Specifications",
                "Method Transfer HPLC",
                "Inkarp Waters India"
            ],
            altText: "Waters Arc HPLC System",
            internalLinks: ["analytical-and-chromatography-solutions"],
            externalLinks: ["https://www.waters.com/nextgen/us/en.html"]
        },
        description: `
  
         <div class="col-lg-7 col-md-12 col-sm-12 content-column">
                            <div class="product-details p_relative d_block ml_20">                                
                                    <figure class="image p_relative d_block prod-logo"><a href="analytical-chemistry-and-weighing.html"><img src="assets/images/principals/seperlab.png" alt=""></a></figure>                                                                                        
                                <h2 class="d_block fs_29 lh_40 fw_sbold font_family_inter mb_10">Liquid Handling Labomatic <br> <span class="subHeading">Distributor & Service Provider In India </span></h2>                                                                  
                                <div class="text p_relative d_block mb_10">
                                    <p>Labomatic, offers a wide range of Liquid Handling solutions in India, catering to the needs of pharmaceutical, biotech, and research laboratories. Our portfolio includes precision pipetting systems, automated liquid handlers, and accessories, designed to enhance accuracy, speed, and reproducibility in liquid handling tasks. With Labomatic's expertise in liquid handling technology and Inkarp Instruments' commitment to customer support, we provide comprehensive solutions, including installation, training, and after-sales service, to streamline your laboratory workflow and improve overall productivity and efficiency.</p>
                                <p>User-friendly liquid-handling solutions designed to help you eliminate tedious manual sample preparation and increase system reproducibility and retention time.&nbsp;</p>
                                    <p class="font_family_poppins mb_10">We offer outstanding products of the highest quality for made-to-measure solutions and devices – without compromising product flexibility and dimensions for laboratories within the pharmaceutical and chemical sectors.</p>                                  
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div class="product-discription p_relative d_block mb_80">
                <section class="service-20 p_relative sec-pad">
            <div class="auto-container">
                <h3 class="text-center">System Solutions</h3> <br>
                <div class="tabs-box">
                    <div class="tab-btn-box p_relative d_block mb_60">
                        <ul class="tab-btns tab-buttons clearfix centred">
                            <li class="tab-btn active-btn" data-tab="#tab-1">                                
                                <h6 class="fs_18 fw_medium tran_5 z_1">System solutions for analytical and preparative applications</h6>
                            </li>
                            <li class="tab-btn" data-tab="#tab-2">                                
                                <h6 class="fs_18 fw_medium tran_5 z_1">System solutions for fraction collectors</h6>
                            </li>
                        </ul>
                    </div>
                    <div class="tabs-content">
                        <div class="tab active-tab" id="tab-1">
                            <div class="inner-box p_relative">
                                <div class="row clearfix">
                                    <div class="col-lg-6 col-md-12 col-sm-12 content-column">
                                        <div class="content_block_27">
                                            <div class="content-box p_relative d_block mr_30">
                                                <div class="sec-title-six p_relative d_block mb_25">
                                                    <h2 class="d_block fs_40 lh_50 fw_bold">System solutions for analytical and preparative applications</h2>
                                                </div>
                                                <ul class="prod-det"><li>The new giant among liquid handling platforms</li><li>Flexible sizing of the XY units:<ul><li>Width up to 3000 mm</li><li>Depth up to 1200 mm</li></ul></li><li>Up to four Z axes and two Y axes</li><li>Up to five simultaneous applications possible</li><li>High speed, high precision</li><li>Resistant to aggressive solvents</li><li>RFID identification system (optional) </li></ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-12 col-sm-12 image-column">
                                        <div class="image_block_24">
                                            <div class="image-box p_relative d_block ml_30">
                                                <div class="shape">
                                                    <div class="float-bob-x shape-1 p_absolute w_95 h_95" style="background-image: url(assets/images/shape/shape-193.png);"></div>
                                                    <div class="shape-2 p_absolute b_20 float-bob-y" style="background-image: url(assets/images/shape/shape-194.png);"></div>
                                                    <div class="shape-3 p_absolute w_170 h_170 bg-color-1 b_radius_50"></div>
                                                </div> 
                                                <figure class="image p_relative d_block b_radius_10"><img src="assets/images/products/Laborport_CL_5000-004.jpg" alt=""></figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tab" id="tab-2">
                            <div class="inner-box p_relative">
                                <div class="row clearfix">
                                    <div class="col-lg-6 col-md-12 col-sm-12 content-column">
                                        <div class="content_block_27">
                                            <div class="content-box p_relative d_block mr_30">
                                                <div class="sec-title-six p_relative d_block mb_25">
                                                    <h2 class="d_block fs_40 lh_50 fw_bold">System solutions for fraction collectors</h2>
                                                </div>
                                                <ul class="prod-det"><li>Open, height-adjustable system for an unlimited number of fractions</li><li>Compatible with many different flask and test tube sizes</li><li>Convenient racks for every possible application</li><li>Unlimited capacity</li><li>Freely programmable XY-axis</li><li>Collection of up to 625 fractions</li><li>Touchscreen system (optional)</li><li>Automatic rack recognition (optional)</li></ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-12 col-sm-12 image-column">
                                        <div class="image_block_24">
                                            <div class="image-box p_relative d_block ml_30">
                                                <div class="shape">
                                                    <div class="float-bob-x shape-1 p_absolute w_95 h_95" style="background-image: url(assets/images/shape/shape-193.png);"></div>
                                                    <div class="shape-2 p_absolute b_20 float-bob-y" style="background-image: url(assets/images/shape/shape-194.png);"></div>
                                                    <div class="shape-3 p_absolute w_170 h_170 bg-color-1 b_radius_50"></div>
                                                </div> 
                                                <figure class="image p_relative d_block b_radius_10"><img src="assets/images/products/HPLCunitbig1.jpg" alt=""></figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>                                           
                    </div>
                </div>
            </div>
        </section>
        <section class="service-20 p_relative ">
            <div class="auto-container">
                <h3 class="text-center">Devices</h3> <br>
                <div>
                <ul class="accordion-box">
                                    <li class="accordion block active-block p_relative d_block">
                                        <div class="acc-btn active p_relative d_block tran_5 pt_16 pr_80 pb_16 pl_30">
                                            <div class="icon-outer p_absolute fs_10 tran_5 z_1"><i class="icon-29"></i></div>
                                            <h5 class="p_relative d_block fs_18 lh_28 fw_medium font_family_poppins">LABOMAT LH-5000 Liquid Handling Platform</h5>
                                        </div>
                                        <div class="acc-content current p_relative pt_25 pr_50 pb_25 pl_30">
                                            <div class="text p_relative d_block">
                                                <h4>No compromises in flexibility and dimension!</h4>
                                                <p class="font_family_poppins color_black">Customized solutions for LABOMATIC's liquid handling systems have practically no limitations in size, sample number, or sample volume, and offer a high degree of variability for all applications. Different applications can be combined, and of course, the systems are freely programmable.</p>
                                                <p>Thanks to the modular construction system, the basic device is available in over 1000 variations due to the X and Y elements that can be assembled together. The effective travel distance is up to 2800 mm on the X-axis, up to 800 mm on the Y-axis, and up to 500 mm on the Z-axis. The height of the X/Y axes can be adjusted to suit the customer's application. The combinable application modules increase flexibility even more.</p>
                                                <ul class="prod-det"><li>LABOCOL FS-3000 fraction collector module</li><li>LABOCOL DS-5000 data storage module</li><li>LABOCOL CL-5000 cleaning module</li><li>LABOPORT AS-5000 autosampler module</li><li>LABOPORT AL-5000 aliquot module</li><li>LABOPORT PO-3000 pooling module</li></ul>
                                                <br>
                                                <h4>Special features</h4>
                                                <ul class="prod-det"><li>Modular system, no compromises in dimension and flexibility</li><li>Size can be adapted to customer requirements</li><li>More than 1000 different sizes and variants can be combined</li><li>Combinable application modules</li><li>Travel distances:<br>X-axis from 160 to 2800 mm<br>Y-axis from 70 to 800 mm<br>Z-axis up to 500 mm</li><li>Multi-axis system, 2 Y-axes each with up to 2 Z-axes</li><li>Freely programmable</li><li>Touchscreen programming and parameter display</li><li>Control also by the LaboChrom 5 software.</li></ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="accordion block p_relative d_block">
                                        <div class="acc-btn p_relative d_block tran_5 pt_16 pr_80 pb_16 pl_30">
                                            <div class="icon-outer p_absolute fs_10 tran_5 z_1"><i class="icon-29"></i></div>
                                            <h5 class="p_relative d_block fs_18 lh_28 fw_medium font_family_poppins">LABOPORT AS-5000 Autosampler-Module</h5>
                                        </div>
                                        <div class="acc-content p_relative pt_25 pr_50 pb_25 pl_30">
                                            <div class="text p_relative d_block">
                                            <h4>Application area</h4>
                                            <p class="font_family_poppins color_black">The AS-5000 module enables the LH-5000 to be used as an autosampler. The device size is determined by the customer's application, with a limitation in the number of samples given by the travel distance of 2800 mm x 800 mm. The sample volume is virtually unlimited and can range from 1 ml to several liters. The Z-axis, with a travel distance of up to 500 mm, allows for high sample vessels to be used.</p>
                                            <p>The sample is sucked into a sample loop with a corresponding diluter. A sample pump is available for larger quantities. A corresponding washing station with a double cleaning function ensures absolutely no sample contamination during the cleaning of the sample needle.</p> <br>
                                            <h4>Special features</h4>
                                            <ul class="prod-det">
<li>Available as a stand-alone device or as an expansion to LABOMATIC HPLC system panels.</li>
<li>Expandable with additional modules such as:</li>
    <ul class="prod-det">
        <li>Fraction collector (LABOCOL FS-5000 module)</li>
        <li>Aliquot collection of fractions in microtiter plates (LABOPORT AL-5000 module)</li>
    </ul>
<li>Freely programmable XYZ system</li>
<li>Sample introduction through diluter and sample loop, or sample pump</li>
<li>Double, contamination-free cleaning function of the needle</li>
<li>Customized racks or round-bottom flask fixation</li>
<li>Touchscreen programming and parameter display surface or control through LaboChrom 5 software.</li>
</ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="accordion block p_relative d_block">
                                        <div class="acc-btn p_relative d_block tran_5 pt_16 pr_80 pb_16 pl_30">
                                            <div class="icon-outer p_absolute fs_10 tran_5 z_1"><i class="icon-29"></i></div>
                                            <h5 class="p_relative d_block fs_18 lh_28 fw_medium font_family_poppins">LABOCOL FS-5000 Fraction Collector Module</h5>
                                        </div>
                                        <div class="acc-content p_relative pt_25 pr_50 pb_25 pl_30">
                                        <div class="row clearfix">
                                    <div class="col-lg-6 col-md-12 col-sm-12 content-column">
                                        <div class="content_block_27">
                                            <div class="content-box p_relative d_block mr_30">
                                            <h4>Application</h4>
                                            <p class="font_family_poppins color_black">With this module, the LABOMAT LH-5000 can be used as a fraction collector. It is an open system without limitation on the number of fractions, size of test tubes, number of columns, and the appropriate rack for each application. The device size is determined by the customer's application, with the XY system's travel range up to 2800 mm wide and 800 mm deep. The corresponding test tube racks are also customized to meet customer needs.</p>
                                            <br>
                                            <h4>Special features</h4>
                                            <ul class="prod-det">                                            
<li>Freely programmable XY system</li>
<li>Touchscreen programming and parameter display surface or control by LaboChrom 5 software</li>
<li>Expandable to a 2-axis XYZ device</li>
<ul class="prod-det">
            <li>Autosampler (LABOCOL FS-5000)</li>
        <li>Aliquot removal of fractions into microtiter plates (LABOPORT AL-5000)</li>
        <li>Automatic peak pooling</li>
        </ul>
<li>Freely programmable step sequence</li>
<li>No dead volume due to the installation of the flow interruption and waste valves directly on the Y-arm</li>
<li>Automatic rack recognition</li>
<li>Infinite number of fractions through the repeat function and the replacement of filled racks</li>
<li>Continuous operation</li>
<li>Unlimited fraction volume through various drainage racks.</li>
</ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-12 col-sm-12 image-column">
                                        <div class="image_block_24">
                                            <div class="image-box p_relative d_block ml_30">
                                                <div class="shape">
                                                    <div class="float-bob-x shape-1 p_absolute w_95 h_95" style="background-image: url(assets/images/shape/shape-193.png);"></div>
                                                    <div class="shape-2 p_absolute b_20 float-bob-y" style="background-image: url(assets/images/shape/shape-194.png);"></div>
                                                    <div class="shape-3 p_absolute w_170 h_170 bg-color-1 b_radius_50"></div>
                                                </div> 
                                                <figure class="image p_relative d_block b_radius_10"><img src="assets/images/products/Laborport_CL_5000-001.jpg" alt=""></figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                            
                                        </div>
                                    </li>

                                    <li class="accordion block p_relative d_block">
                                        <div class="acc-btn p_relative d_block tran_5 pt_16 pr_80 pb_16 pl_30">
                                            <div class="icon-outer p_absolute fs_10 tran_5 z_1"><i class="icon-29"></i></div>
                                            <h5 class="p_relative d_block fs_18 lh_28 fw_medium font_family_poppins">LABOCOL DS-5000 Data Storage Module</h5>
                                        </div>
                                        <div class="acc-content p_relative pt_25 pr_50 pb_25 pl_30">
                                        <div class="row clearfix">
                                    <div class="col-lg-12 col-md-12 col-sm-12 content-column">
                                        <div class="content_block_27">
                                            <div class="content-box p_relative d_block mr_30">
                                            <h4>Data storage directly on fraction glasses and bottles</h4>
                                            <p class="font_family_poppins color_black">The LABOCORD DS-5000 is a system for electronic storage of relevant information directly on individual fraction glasses or bottles. All necessary information about the content of an individual fraction is stored on a data chip attached directly to the container. The chip can be read using a reader.</p>
                                            <br>
                                            <h4>Special features</h4>
                                            <ul class="prod-det"><li>Data storage chip directly on individual fraction glasses or bottles</li><li>Automatic storage of relevant information about the individual fraction on the chip of the respective container</li><li>Reading of the stored information on the individual fraction possible after removal at any location</li><li>Individual fractions and associated information are always firmly linked (common transport)</li><li>No more manual labeling necessary</li><li>Detection of incorrect positions possible</li><li>Electronic transfer to a DMS.</li></ul>
                                            </div>
                                        </div>
                                    </div>                                    
                                </div>
                                            
                                        </div>
                                    </li>

                                    <li class="accordion block p_relative d_block">
                                        <div class="acc-btn p_relative d_block tran_5 pt_16 pr_80 pb_16 pl_30">
                                            <div class="icon-outer p_absolute fs_10 tran_5 z_1"><i class="icon-29"></i></div>
                                            <h5 class="p_relative d_block fs_18 lh_28 fw_medium font_family_poppins">LABOCOL CL-5000 Cleaning Module</h5>
                                        </div>
                                        <div class="acc-content p_relative pt_25 pr_50 pb_25 pl_30">
                                        <div class="row clearfix">
                                    <div class="col-lg-6 col-md-12 col-sm-12 content-column">
                                        <div class="content_block_27">
                                            <div class="content-box p_relative d_block mr_30">
                                            
                                            <p class="font_family_poppins color_black">The LABOCOL CL-5000 allows for easy and fast emptying of unwanted fraction collector vessels without the need to remove them from the device. A spray lance mounted on the Z-axis moves into the predetermined fraction collector vessels and, in a first step, draws the liquid into a waste container. In a second step, the lance sprays rinse fluid onto the vessel walls for cleaning and immediately draws the fluid back up. This step can be repeated as needed.</p>
                                            <br>
                                            <h4>Special features</h4>
                                            <ul class="prod-det"><li>Automatic cleaning of fraction collector vessels directly on the LH-5000</li><li>No laborious transport and emptying of vessels</li><li>Time savings through automatic cleaning</li><li>Compatible with LABOCOL FS-5000 fraction collector</li><li>Controlled by LaboChrom 5 software.</li></ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-12 col-sm-12 image-column">
                                        <div class="image_block_24">
                                            <div class="image-box p_relative d_block ml_30">
                                                <div class="shape">
                                                    <div class="float-bob-x shape-1 p_absolute w_95 h_95" style="background-image: url(assets/images/shape/shape-193.png);"></div>
                                                    <div class="shape-2 p_absolute b_20 float-bob-y" style="background-image: url(assets/images/shape/shape-194.png);"></div>
                                                    <div class="shape-3 p_absolute w_170 h_170 bg-color-1 b_radius_50"></div>
                                                </div> 
                                                <figure class="image p_relative d_block b_radius_10"><img src="assets/images/products/Laborport_CL_5000-001.jpg" alt=""></figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                            
                                        </div>
                                    </li>
                                    <li class="accordion block p_relative d_block">
                                        <div class="acc-btn p_relative d_block tran_5 pt_16 pr_80 pb_16 pl_30">
                                            <div class="icon-outer p_absolute fs_10 tran_5 z_1"><i class="icon-29"></i></div>
                                            <h5 class="p_relative d_block fs_18 lh_28 fw_medium font_family_poppins">LABOPORT AL-5000 Aliquot Extraction Module</h5>
                                        </div>
                                        <div class="acc-content p_relative pt_25 pr_50 pb_25 pl_30">
                                        <div class="row clearfix">
                                    <div class="col-lg-12 col-md-12 col-sm-12 content-column">
                                        <div class="content_block_27">
                                            <div class="content-box p_relative d_block mr_30">
                                            <h4>Application area</h4>
                                            <p class="font_family_poppins color_black">The AL-5000 module is used in combination with the FS-5000 fraction collector module and is designed to extract aliquots of the collected fractions for additional analysis purposes (HPLC, etc.). The probe needle of the AL-5000 module automatically moves to each fraction and takes a sample that is transferred to a microtiter plate. The sample extraction rate is automatically adjusted to match the fraction collection rate. Like the AS-5000 module, the AL-5000 module has a washing station for internal and external cleaning of the probe needle. The height of the fraction vessels is limited to 400 mm.</p>
                                            <br>
                                            <h4>Special features</h4>
                                            <ul class="prod-det"><li>Automatic sample extraction into microtiter plates</li><li>Freely programmable step sequence</li><li>Double contamination-free cleaning function of the needle</li><li>Controlled by LaboChrom 5 software</li></ul>
                                            </div>
                                        </div>
                                    </div>                                    
                                </div>
                                            
                                        </div>
                                    </li>

                                    <li class="accordion block p_relative d_block">
                                        <div class="acc-btn p_relative d_block tran_5 pt_16 pr_80 pb_16 pl_30">
                                            <div class="icon-outer p_absolute fs_10 tran_5 z_1"><i class="icon-29"></i></div>
                                            <h5 class="p_relative d_block fs_18 lh_28 fw_medium font_family_poppins">LABOPORT PO-5000 Pooling Module</h5>
                                        </div>
                                        <div class="acc-content p_relative pt_25 pr_50 pb_25 pl_30">
                                        <div class="row clearfix">
                                    <div class="col-lg-12 col-md-12 col-sm-12 content-column">
                                        <div class="content_block_27">
                                            <div class="content-box p_relative d_block mr_30">
                                            <h4>Application area</h4>
                                            <p class="font_family_poppins color_black">The PO-5000 Pooling Module is used in combination with the FS-5000 Fraction Collector Module for automatic sample pooling from different fractions. The fractions marked by the software are automatically collected in a corresponding container using a suction device. The pooled fractions can be automatically fed into a solid phase extraction or an automatic evaporator system. This system is only offered in conjunction with our LaboChrom 5 software.</p>
                                            <br>
                                            <h4>Special features</h4>
                                            <ul class="prod-det"><li>Automatic pooling system</li><li>Unlimited pooling volume</li><li>Double drag-free cleaning function of the suction device</li><li>Controlled by LaboChrom 5 software</li></ul>
                                            </div>
                                        </div>
                                    </div>                                    
                                </div>
                                            
                                        </div>
                                    </li>
                                    
                                </ul>
                </div>
            </div>
        </section>
                </div>  `
    },
}              