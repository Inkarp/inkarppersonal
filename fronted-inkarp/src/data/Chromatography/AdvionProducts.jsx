import React, { useState } from "react";
import Waters from '/src/assets/PrincipalLogos/RowTwo/waters.svg';
import Labomatic from '/src/assets/PrincipalLogos/RowTwo/Labomatic.svg';
import ECom from '/src/assets/PrincipalLogos/RowTwo/ECom.png';

import Advion from '/src/assets/PrincipalLogos/RowOne/advion.png';

import IMG535XL from "/images/products/Advion/535-XL-scaled.jpg";
import IMG5020Pres from "/images/products/Advion/5020-pres-img.jpg";
import IMG5050Pres from "/images/products/Advion/5050-pres-img.jpg";
import IMG5250Pres from "/images/products/Advion/5250-img-presentation.jpg";
import IMG5400Pres from "/images/products/Advion/5400-img-pres-2.jpg";
import AdvionPuriFlash5015XL from "/images/products/Advion/Advion-Interchim-puriFlash-5015-XL.jpg";
import AISMassSpecPlateExpress from "/images/products/Advion/AIS-MassSpec-PlateExpress.png";
import AVANT2019FINAL from "/images/products/Advion/AVANT2019FINAL.png";
import ExpressionCMS from "/images/products/Advion/expression-cms.png";
import ICPMSSolation from "/images/products/Advion/ICPMS-Solation.png";
import PhotoProductsTriversaNanomate from "/images/products/Advion/photo_products_triversa-nanomate.png";
import PuriFlashXS520SuiteShuttle from "/images/products/Advion/PuriFlash_XS520_suite_Shuttle_AdvionInterchim-2.jpg";
import PuriFlashAS1Interchim from "/images/products/Advion/puriflash-as1-interchim.jpg";
import PuriFlashMS2 from "/images/products/Advion/puriflash-ms-2.png";
import Purivap6Goutte from "/images/products/Advion/purivap-6-goutte.jpg";
import SystemeBainEauPuriFlashXSVap from "/images/products/Advion/systeme-bain-eau-translucide-puriflash-xs-vap.jpg";


import Banner1 from "/images/products/Banner/Banner1.jpg";
import Banner2 from "/images/products/Banner/Banner2.jpg";
import Banner3 from "/images/products/Banner/Banner3.jpg";


export const AdvionProducts = {
    "express-cms": {
        id: "express-cms",
        name: "expression® CMS Advion Interchim",
        image: ExpressionCMS,
        logo: Advion,
        bannerImg: Banner3,
        altText: "expression® CMS Compact Mass Spectrometer",
        videoId: "",
        meta: {
            title: "expression® CMS | Compact Mass Spectrometer | Inkarp India",
            description:
                "Discover the expression® CMS from Advion Interchim, a compact mass spectrometer offering high performance, unmatched flexibility, and easy integration for various laboratory applications. Distributed and serviced by Inkarp Instruments across India.",
            keywords: [
                "expression CMS",
                "Compact Mass Spectrometer",
                "Advion CMS",
                "LC-MS analysis",
                "Mass Spectrometry India",
                "Laboratory Mass Spec",
                "Reaction Monitoring Mass Spec",
                "Compact LC-MS",
                "Advion Interchim CMS",
                "Inkarp Instruments Mass Spectrometer"
            ],
            altText: "expression® CMS Compact Mass Spectrometer by Advion Interchim",
            internalLinks: ["mass-spectrometry", "advion-products"],
            externalLinks: ["https://www.advion-interchim.com/"]
        },
        description: `
<div style="display:flex;flex-wrap:wrap;gap:20px;font-Roboto;color:#333;">
    <div style="flex:1 1 60%;min-width:300px;">
        <div style="padding-left:20px;">
            <h2 style="font-size:28px;line-height:40px;font-weight:600;margin-bottom:10px;">
                expression® CMS Advion Interchim<br>
                <span style="font-size:18px;color:#e63946;font-weight:500;">Distributor &amp; Service Provider In India</span>
            </h2>
            <div style="margin-bottom:10px;font-size:16px;line-height:1.6;">
                <p>Experience the power of expression CMS, a Compact Mass Spectrometer, distributed and serviced by 
                    <a href="https://www.advion-interchim.com/" style="color:#000;text-decoration:none;">Advion Interchim</a> 
                    and Inkarp Instruments in India. This innovative system offers High-performance mass spectrometry, 
                    Compact design for laboratory settings, Easy-to-use interface, and Affordable pricing.
                </p>
                <p style="font-family:Poppins,sans-serif;margin-bottom:10px;">High performance compact mass spectrometer</p>
                <p>The family of expression® compact mass spectrometers (CMS) provides essential information quickly and improves 
                   the chemist’s workflow. Modern organic labs have become automated, faster and more critical reactions require 
                   co-located versatile analytics — the expression® CMS solves this at an affordable price.</p>
                <h4 style="margin-top:15px,font-weight:800;">Unrivaled utility and flexibility</h4>
                <ul style="padding-left:20px;list-style:disc;">
                    <li>Plate Express<sup>™</sup> TLC Plate Reader</li>
                    <li>Atmospheric Solids Analysis Probe (ASAP<sup>®</sup>)</li>
                    <li>inert Atmospheric Solids Analysis Probe (iASAP)</li>
                    <li>Touch Express<sup>™</sup> Open Port Sampling Interface (OPSI)</li>
                    <li>Volatile APCI (vAPCI)</li>
                    <li>AVANT<sup>™</sup> Modular (U)HPLC</li>
                    <li>Direct Injection/Flow Injection Analysis (FIA)</li>
                    <li>Flow Chemistry</li>
                    <li>Flash Chromatography</li>
                    <li>Preparative Liquid Chromatography (Prep-LC)</li>
                    <li>Supercritical Fluids Chromatography (SFC)</li>
                </ul>
            </div>
        </div>
    </div>
</div>

<div style="margin-top:30px;">
    <p>The family of expression® CMS was developed with maximum versatility in mind allowing users to switch rapidly between various sample introduction techniques with little sample preparation. The affordability, small size, and ease of use make them ideal for a variety of applications.</p>
    <h4 style="margin-top:15px;">Applications</h4>
    <ul style="padding-left:20px;list-style:disc;">
        <li>Reaction Monitoring</li>
        <li>Teaching Chemistry</li>
        <li>Food Safety and Ingredients Analysis</li>
        <li>Cannabis &amp; Hemp</li>
        <li>Environmental Analysis</li>
        <li>Clinical Diagnostics</li>
        <li>Proteins and Peptides Synthesis</li>
        <li>Forensics</li>
        <li>And more</li>
    </ul>
    <p>Advion offers solutions to fit your individual lab needs, including systems that support both m/z 10 – 1,200 units and m/z 10 – 2,000 units.</p>
</div>

<div style="margin-top:20px;">
    <h4>Videos</h4>
    <div style="display:flex;flex-wrap:wrap;gap:20px;">
        <div style="flex:1;min-width:280px;">
            <iframe src="//player.vimeo.com/video/415663998" width="100%" height="220" frameborder="0" allowfullscreen></iframe>
            <p>Using TLC to Guide Intelligent Purification &amp; Mass Spectrometry Processes</p>
        </div>
        <div style="flex:1;min-width:280px;">
            <iframe src="//player.vimeo.com/video/264276963" width="100%" height="220" frameborder="0" allowfullscreen></iframe>
            <p>Touch Express<sup>™</sup> Open Port Sampling Interface (OPSI) – How it Works</p>
        </div>
        <div style="flex:1;min-width:280px;">
            <iframe src="//player.vimeo.com/video/222734634" width="100%" height="220" frameborder="0" allowfullscreen></iframe>
            <p>Plate Express<sup>™</sup>: How it Works</p>
        </div>
    </div>
</div>

</div>
`
    },
    "plate-express": {
        id: "plate-express",
        name: "Plate Express™ Advion Interchim",
        image: AISMassSpecPlateExpress,
        logo: Advion,
        bannerImg: Banner3,
        altText: "Plate Express™ TLC Plate Reader",
        videoId: "",
        meta: {
            title: "Plate Express™ | TLC Plate Reader | Inkarp India",
            description:
                "Discover Plate Express™, an automated TLC plate reader from Advion Interchim Scientific, designed for direct mass spectrometry analysis from TLC plates without additional sample preparation. Distributed and serviced by Inkarp Instruments in India.",
            keywords: [
                "Plate Express",
                "TLC Plate Reader",
                "Advion Plate Express",
                "TLC Mass Spectrometry",
                "Direct TLC Analysis",
                "TLC-MS interface",
                "Mass spectrometry accessories",
                "Advion Interchim Scientific",
                "Inkarp Plate Express distributor",
                "TLC analysis India"
            ],
            altText: "Plate Express™ TLC Plate Reader by Advion Interchim Scientific",
            internalLinks: ["mass-spectrometry", "advion-products"],
            externalLinks: ["https://www.advion-interchim.com/products/plate-express/"]
        },
        description: `
<div style="display:flex;flex-wrap:wrap;gap:20px;font-family:Roboto,Arial,sans-serif;color:#333;">
    <div style="flex:1 1 60%;min-width:300px;">
        <div style="padding-left:20px;">
         
            <h2 style="font-size:28px;line-height:40px;font-weight:600;margin-bottom:10px;color:#333333;">
                Plate Express™ Advion Interchim<br>
                <span style="font-size:18px;color:#BE0010;font-weight:500;">Distributor &amp; Service Provider In India</span>
            </h2>
            <div style="margin-bottom:10px;font-size:16px;line-height:1.6;">
                <p>Revolutionize your sample preparation with Plate Express, a high-throughput plate preparation system, distributed and serviced by 
                    <a href="https://www.advion-interchim.com/" style="color:#04517f;text-decoration:none;">Advion Interchim</a> 
                    and Inkarp Instruments in India. This innovative system offers rapid and precise sample preparation, high-density plate formatting, automated liquid handling, and increased laboratory productivity.
                </p>
                <p style="font-family:Roboto;margin-bottom:10px;color:#BE0010;font-weight:600;">Automated TLC plate reader</p>
                <p>Plate Express™ provides a simple, automated means of obtaining mass spectra directly from TLC plates, when combined with the expression® Compact Mass Spectrometer (CMS), creating the TLC/CMS technique.</p>
                <h4 style="margin-top:15px;font-weight:700;color:#Be0010;">Direct mass analysis from TLC plates</h4>
                <p>Using this technique, chemists can quickly and confidently identify products even in complex mixtures without additional sample preparation.</p>
                <ul style="padding-left:20px;list-style:disc;">
                    <li>Identify spots in &lt;1 minute</li>
                    <li>Avoid overloading the mass spectrometer – TLC spots contain the ideal amount of sample</li>
                    <li>Software controlled – spectra obtained within a few mouse clicks</li>
                    <li>Simplifies spectra acquisition – ideal for multi-user labs</li>
                </ul>
            </div>
        </div>
    </div>
</div>

<div style="margin-top:30px;">
    <h4 style="color:#333333;font-weight:700;">Videos</h4>
    <div style="display:flex;flex-wrap:wrap;gap:20px;margin-top:10px;">
        <div style="flex:1;min-width:300px;">
            <iframe src="//player.vimeo.com/video/415663998" width="100%" height="320" frameborder="0" allowfullscreen></iframe>
            <p>Using TLC to Guide Intelligent Purification &amp; Mass Spectrometry Processes</p>
        </div>
        <div style="flex:1;min-width:300px;">
            <iframe src="//player.vimeo.com/video/222734634" width="100%" height="320" frameborder="0" allowfullscreen></iframe>
            <p>Plate Express<sup>™</sup>: How it Works</p>
        </div>
    </div>
</div>
`
    },

    "avant-u-hpcl": {
        id: "avant-u-hpcl",
        name: "AVANT™ (U)HPLC Advion Interchim",
        image: AVANT2019FINAL,
        logo: Advion,
        bannerImg: Banner3,
        altText: "AVANT™ (U)HPLC System",
        videoId: "",
        meta: {
            title: "AVANT™ (U)HPLC System | Advion Interchim Scientific | Inkarp India",
            description:
                "Experience the AVANT™ (U)HPLC from Advion Interchim Scientific, a modular liquid chromatography platform offering unparalleled flexibility, high performance, and seamless integration with mass spectrometry. Distributed and serviced by Inkarp Instruments in India.",
            keywords: [
                "AVANT HPLC",
                "AVANT UHPLC",
                "Advion HPLC system",
                "Modular liquid chromatography",
                "HPLC India",
                "UHPLC India",
                "HPLC-MS integration",
                "Advion Interchim Scientific",
                "Inkarp AVANT HPLC distributor",
                "Liquid chromatography system"
            ],
            altText: "AVANT™ (U)HPLC System by Advion Interchim Scientific",
            internalLinks: ["liquid-chromatography", "advion-products"],
            externalLinks: ["https://www.advion-interchim.com/products/avant/"]
        },
        description: `
<div style="display:flex;flex-wrap:wrap;gap:20px;font-family:Roboto,Arial,sans-serif;color:#333;">
    <div style="flex:1 1 60%;min-width:300px;">
        <div style="padding-left:20px;">
           
            <h2 style="font-size:28px;line-height:40px;font-weight:600;margin-bottom:10px;color:#E63946">
                AVANT™ (U)HPLC Advion Interchim<br>
                <span style="font-size:18px;color:#BE0010;font-weight:500;">Distributor &amp; Service Provider In India</span>
            </h2>
            <div style="margin-bottom:10px;font-size:16px;line-height:1.6;">
                <p>Experience the future of liquid chromatography with AVANT (U)HPLC, a cutting-edge system distributed and serviced by 
                    <a href="https://www.advion-interchim.com/" style="color:#04517f;text-decoration:none;">Advion Interchim</a> 
                    and Inkarp Instruments in India. This innovative platform offers unparalleled flexibility and scalability, ultra-high performance and speed, advanced column management, and seamless integration with mass spectrometry.
                </p>
                <p style="font-family:Poppins,sans-serif;margin-bottom:10px;color:#BE0010;font-weight:600;">Modular chromatography systems</p>
                <p>Advion’s range of AVANT™, high performance, liquid chromatography systems can be used standalone with UV and UV/Vis detector options, or with the expression® Compact Mass Spectrometer (CMS) to provide seamlessly integrated LC/CMS under the full control of Advion’s simple, intuitive Mass Express software suite.</p>
                <h4 style="margin-top:15px;font-weight:700;color:#E63946;">Chromatography solutions for LC/CMS and standalone LC</h4>
                <p>The Advion AVANT™ series offers:</p>
                <ul style="padding-left:20px;list-style:disc;">
                    <li>HPLC and UHPLC</li>
                    <li>UV and UV-Vis DAD</li>
                    <li>Modular and stackable design</li>
                </ul>
            </div>
        </div>
    </div>
</div>

<div style="margin-top:30px;">
    <p>PLUS seamless integration with Advion’s expression® CMS.</p>
    <p>From the simplest manual injection HPLC to a fully automated, streamlined UHPLC system and everything in-between, the AVANT™ series can be configured to fit your analytical requirements and your budget.</p>
    <p>The AVANT™ (U)HPLC series is the latest in Advion’s innovative line of sample inlet devices for the expression® CMS which include:</p>
    <ul style="padding-left:20px;list-style:disc;">
        <li>Plate Express<sup>™</sup> for automated mass assays from TLC plates</li>
        <li>ASAP<sup>®</sup> direct analysis probe for solid, liquid and even air-sensitive samples</li>
        <li>vAPCI for analysis of volatile organic compounds (VOCs) from head spaces, breath, and other gas samples</li>
        <li>Flow chemistry interfaces</li>
    </ul>
    <p>All these techniques can be simply, simultaneously, interfaced with the CMS so that the chemist can move quickly and effortlessly between workflows.</p>
</div>
`
    },

    "solation-icp-ms": {
        id: "solation-icp-ms",
        name: "SOLATION® ICP-MS Advion Interchim",
        image: ICPMSSolation,
        logo: Advion,
        bannerImg: Banner3,
        altText: "SOLATION® ICP-MS by Advion Interchim Scientific",
        videoId: "",
        meta: {
            title: "SOLATION® ICP-MS | Inductively Coupled Plasma Mass Spectrometer | Inkarp India",
            description:
                "SOLATION® ICP-MS delivers high-sensitivity, high-throughput trace element analysis with advanced interference removal and intuitive software. Ideal for environmental, pharmaceutical, clinical, food and agricultural labs. Distributed and serviced by Inkarp Instruments in India.",
            keywords: [
                "SOLATION ICP-MS",
                "Inductively Coupled Plasma Mass Spectrometer",
                "ICP-MS India",
                "Trace Element Analysis",
                "Heavy Metal Detection",
                "Environmental ICP-MS",
                "Food Testing ICP-MS",
                "Pharmaceutical ICP-MS",
                "Advion Interchim Scientific",
                "Inkarp SOLATION ICP-MS distributor"
            ],
            altText: "SOLATION® ICP-MS instrument",
            internalLinks: ["mass-spectrometry", "advion-products"],
            externalLinks: ["https://www.advion-interchim.com/products/solation-icp-ms/"]
        },
        description: `
<div style="display:flex;flex-wrap:wrap;gap:20px;font-family:Roboto,Arial,sans-serif;color:#333;">
  <div style="flex:1 1 60%;min-width:300px;">
    <div style="padding-left:20px;">
      
      <h2 style="font-size:28px;line-height:40px;font-weight:600;margin-bottom:10px;color:#E63946;">
        SOLATION® ICP-MS Advion Interchim<br>
        <span style="font-size:18px;color:#BE0010;font-weight:500;">Distributor &amp; Service Provider In India</span>
      </h2>
      <div style="margin-bottom:10px;font-size:16px;line-height:1.6;">
        <p>Discover the ultimate solution for trace element analysis with SOLATION ICP-MS, distributed and serviced by 
          <a href="https://www.advion-interchim.com/" style="color:#E63946;text-decoration:none;">Advion Interchim</a> 
          and Inkarp Instruments in India. This high-performance system offers exceptional sensitivity and accuracy, fast data acquisition and analysis, advanced interference removal, and a user-friendly interface.</p>
        <p style="font-family:Poppins,sans-serif;margin-bottom:10px;color:#BE0010;font-weight:600;">Inductively coupled plasma mass spectrometry</p>
        <p>Introducing the new SOLATION® Inductively Coupled Plasma Mass Spectrometer (ICP-MS) — the ultimate instrument for multi-element analysis. SOLATION® provides high-sensitivity measurement of trace elements from a wide range of matrices including complex samples such as urine, serum, plasma, whole blood and tissue, water, soil, food, beverage and agricultural samples.</p>
        <h4 style="margin-top:15px;font-weight:700;color:#E63946;">Simple, high-performance, robust multi-element analysis</h4>
        <p>Designed for ease of use with intuitive software, the SOLATION® ICP-MS is the ideal instrument for environmental, pharmaceutical, food safety and clinical laboratories everywhere.</p>
        <p>Adding the SOLATION® ICP-MS to your lab opens up a world of possibilities for a wide range of industries and applications, including:</p>
        <ul style="padding-left:20px;list-style:disc;">
          <li>Metals in Blood</li>
          <li>Environmental Analysis</li>
          <li>Clinical/Biomedical</li>
          <li>Food &amp; Agriculture</li>
          <li>Pharmaceutical Quality Control</li>
        </ul>
      </div>
    </div>
  </div>
</div>
`
    },

    "triversa-nanomate": {
        id: "triversa-nanomate",
        name: "TriVersa NanoMate® Advion Interchim",
        image: PhotoProductsTriversaNanomate,
        logo: Advion,
        bannerImg: Banner3,
        altText: "TriVersa NanoMate® by Advion Interchim Scientific",
        videoId: "",
        meta: {
            title: "TriVersa NanoMate® | Automated Nanoelectrospray & Liquid Handling | Inkarp India",
            description:
                "TriVersa NanoMate® is a pioneering chip-based nanoelectrospray ionization (nESI) source offering enhanced sensitivity, reproducibility, and automated sample handling. Ideal for LC/MS, LESA®, and fraction collection workflows. Distributed and serviced by Inkarp Instruments in India.",
            keywords: [
                "TriVersa NanoMate",
                "Advion NanoMate",
                "Chip-based nanoelectrospray",
                "Automated ESI source",
                "Nanoelectrospray ionization",
                "Mass spectrometry automation",
                "Liquid handling for MS",
                "Advion Interchim Scientific",
                "Inkarp NanoMate distributor",
                "LC-MS sample introduction"
            ],
            altText: "TriVersa NanoMate® automated nanoelectrospray system",
            internalLinks: ["mass-spectrometry", "advion-products"],
            externalLinks: ["https://www.advion-interchim.com/products/triversa-nanomate/"]
        },
        description: `
<div style="display:flex;flex-wrap:wrap;gap:20px;font-family:Roboto,Arial,sans-serif;color:#333;">
    <div style="flex:1 1 60%;min-width:300px;">
        <div style="padding-left:20px;">

            <h2 style="font-size:28px;line-height:40px;font-weight:600;margin-bottom:10px;color:#E63946;">
                TriVersa NanoMate® Advion Interchim
            </h2>
            <div style="margin-bottom:10px;font-size:16px;line-height:1.6;">
                <p>Experience the power of TriVersa NanoMate, a pioneering nanoelectrospray ionization (nESI) source, distributed and serviced by 
                    <a href="https://www.advion-interchim.com/" style="color:#E63946;text-decoration:none;">Advion Interchim</a> 
                    and Inkarp Instruments in India. This innovative system offers enhanced sensitivity and reproducibility, seamless integration with MS instruments, automated sample handling, and increased laboratory productivity.</p>
                <p style="font-family:Poppins,sans-serif;margin-bottom:10px;color:#BE0010;font-weight:600;">Nanoelectrospray ionization technology</p>
                <p>The TriVersa NanoMate LESA® is the latest in chip-based electrospray ionization technology from Advion. It combines the benefits of liquid chromatography, mass spectrometry, chip-based infusion, fraction collection, and direct surface analysis into one integrated ion source platform.</p>
                <h4 style="margin-top:15px;font-weight:700;color:#E63946;">Obtain more information from complex samples than LC/MS alone</h4>
                <p>The TriVersa NanoMate® integrates with:</p>
                <ul style="padding-left:20px;list-style:disc;">
                    <li>Advion ESI Chip<sup>®</sup></li>
                    <li>LC/MS with Fraction Collection for Re-Analysis by Infusion</li>
                    <li>Liquid Extraction Surface Analysis (LESA<sup>®</sup> and LESA<sup>plus</sup>)</li>
                </ul>
            </div>
        </div>
    </div>
</div>

<div style="margin-top:30px;">
    <h4 style="color:#E63946;font-weight:700;">Advion ESI Chip®</h4>
    <p>The ESI Chip® unleashes the power of mass spectrometry through miniaturization. This microfluidics chip contains an array of 400 nano-electrospray nozzles, etched in a silicon wafer. The fabrication method is highly reproducible to ensure the integrity and equal performance of each nozzle. The electrical field created by the nano-electrospray nozzles results in a highly efficient ionization and long-lasting, stable spray from µL of sample volume.</p>
    <ul style="padding-left:20px;list-style:disc;">
        <li>ESI chips are available in three different nozzle emitter sizes from 2.5 µm to 5.5 µm ID</li>
        <li>Internal chip void volume in the pL range allows for 15 min spray times from only 3 µL of sample</li>
        <li>Automated sample handling can deliver spray from samples in 96 or 384 well plates</li>
        <li>Silicon chip design delivers superior electric field strength and ionization efficiency</li>
        <li>Internal counter electrode allows for spray sensing and recovery feature</li>
    </ul>
</div>

<div style="margin-top:30px;">
    <h4 style="color:#E63946;font-weight:700;">Videos</h4>
    <div style="display:flex;flex-wrap:wrap;gap:20px;margin-top:10px;">
        <div style="flex:1;min-width:280px;">
            <iframe src="//player.vimeo.com/video/352286341" width="100%" height="220" frameborder="0" allowfullscreen></iframe>
            <p>Chip-based Direct Infusion and LC/MS Fraction Collection with Re-analysis by Infusion</p>
        </div>
        <div style="flex:1;min-width:280px;">
            <iframe src="//player.vimeo.com/video/352286319" width="100%" height="220" frameborder="0" allowfullscreen></iframe>
            <p>Liquid Extraction Surface Analysis (LESA® and LESAplus)</p>
        </div>
        <div style="flex:1;min-width:280px;">
            <iframe src="//player.vimeo.com/video/352286353" width="100%" height="220" frameborder="0" allowfullscreen></iframe>
            <p>Liquid Extraction Surface Analysis</p>
        </div>
    </div>
</div>
`
    },
    "puriflash-xs-520-plus": {
        id: "puriflash-xs-520-plus",
        name: "Puriflash® Xs 520 Plus Flash Purification Systems",
        image: PuriFlashXS520SuiteShuttle,
        logo: Advion,
        bannerImg: Banner3,
        altText: "Puriflash® Xs 520 Plus Flash Purification System by Advion Interchim Scientific",
        videoId: "",
        meta: {
            title: "Puriflash® Xs 520 Plus Flash Purification Systems | Advion Interchim Scientific | Inkarp India",
            description:
                "Discover the Puriflash® Xs 520 Plus, a compact yet powerful flash purification system from Advion Interchim Scientific, offering high-speed purification, unmatched resolution, and advanced scalability. Distributed and serviced by Inkarp Instruments in India.",
            keywords: [
                "Puriflash Xs 520 Plus",
                "Flash Purification Systems",
                "Advion Puriflash",
                "High-speed flash purification",
                "Puriflash India",
                "Advion Interchim Scientific",
                "Flash chromatography",
                "Puriflash distributor India",
                "Inkarp Flash Purification",
                "Laboratory purification systems"
            ],
            altText: "Puriflash® Xs 520 Plus Flash Purification System by Advion Interchim Scientific",
            internalLinks: ["flash-purification", "advion-products"],
            externalLinks: ["https://www.advion-interchim.com/"]
        },
        description: `
<div style="display:flex;flex-wrap:wrap;gap:20px;font-family:Roboto,Arial,sans-serif;color:#333;">
    <div style="flex:1 1 60%;min-width:300px;">
        <div style="padding-left:20px;">

            <h2 style="font-size:28px;line-height:40px;font-weight:600;margin-bottom:10px;color:#E63946;">
                Puriflash® Xs 520 Plus Flash Purification Systems
                <br>
                <span style="font-size:18px;font-weight:400;color:#555;">Distributor & Service Provider In India</span>
            </h2>
            <div style="margin-bottom:10px;font-size:16px;line-height:1.6;">
                <p>You might wonder how so much technology can fit into such a small purification system.</p>
                <p>All questions will be forgotten when you experience the pleasure of using it.</p>
                <p>Discover the ultimate in flash purification with Puriflash® Xs 520 Plus, a cutting-edge system distributed and serviced by 
                    <a href="https://www.advion-interchim.com/" style="color:#E63946;text-decoration:none;">Advion Interchim</a> 
                    and Inkarp Instruments in India. This advanced platform offers:
                </p>
                <ul style="padding-left:20px;list-style:disc;">
                    <li>High-speed purification of complex mixtures</li>
                    <li>Unparalleled resolution and purity</li>
                    <li>Advanced method development and scalability</li>
                    <li>User-friendly interface</li>
                </ul>
                <p>Experience the benefits of Advion Interchim's innovative technology and Inkarp's dedicated support for your laboratory requirements.</p>
                <h4 style="margin-top:15px;font-weight:700;color:#E63946;">Concentrated technology for unsurpassed performance</h4>
                <p>Both the unique technology and the quality of the pump will bring you a significant step forward in routine flash purification. Even with increased pressure, the Puriflash® Xs 520 Plus system provides the same precision, linearity, and reproducibility and allows sophisticated purification. You have high demands, and so do we. That is why we have incorporated our entire expertise in the field of purification into one system, which is as compact as its price.</p>
            </div>
        </div>
    </div>
</div>
`
    },
    "puriflash-5020": {
        id: "puriflash-5020",
        name: "Puriflash® 5.020 Flash Purification Systems",
        image: IMG5020Pres,
        logo: Advion,
        bannerImg: Banner3,
        altText: "Puriflash® 5.020 Flash Purification System by Advion Interchim Scientific",
        videoId: "",
        meta: {
            title: "Puriflash® 5.020 Flash Purification Systems | Advion Interchim Scientific | Inkarp India",
            description:
                "Puriflash® 5.020 delivers high-performance flash purification with advanced automation features like RFID detection and solvent monitoring. Distributed and serviced by Inkarp Instruments in India for pharmaceutical, biotech, and research labs.",
            keywords: [
                "Puriflash 5.020",
                "Flash Purification Systems",
                "Advion Puriflash",
                "High-performance flash purification",
                "Puriflash India",
                "Advion Interchim Scientific",
                "Flash chromatography",
                "Puriflash distributor India",
                "Inkarp Flash Purification",
                "Laboratory purification systems"
            ],
            altText: "Puriflash® 5.020 Flash Purification System by Advion Interchim Scientific",
            internalLinks: ["flash-purification", "advion-products"],
            externalLinks: ["https://www.advion-interchim.com/"]
        },
        description: `
<div style="display:flex;flex-wrap:wrap;gap:20px;font-family:Roboto,Arial,sans-serif;color:#333;">
    <div style="flex:1 1 60%;min-width:300px;">
        <div style="padding-left:20px;">

            <h2 style="font-size:28px;line-height:40px;font-weight:600;margin-bottom:10px;color:#E63946;">
                Puriflash® 5.020 Flash Purification Systems
                <br>
                <span style="font-size:18px;font-weight:400;color:#555;">Distributor & Service Provider In India</span>
            </h2>
            <div style="margin-bottom:10px;font-size:16px;line-height:1.6;">
                <p>Or the partner for your everyday challenges.</p>
                <p>Discover the XS 520 Plus performance with reinforced user friendliness thanks to automatization.</p>
                <p>Accelerate your purification process with Puriflash® 5.020, a high-performance flash purification system, distributed and serviced by 
                    <a href="https://www.advion-interchim.com/" style="color:#E63946;text-decoration:none;">Advion Interchim</a> 
                    and Inkarp Instruments in India. Ideal for pharmaceutical, biotech, and research applications, Puriflash® 5.020 streamlines your workflow. 
                    Advion Interchim and Inkarp Instruments ensure premium support, including installation, training, and after-sales service, to meet your laboratory needs in India.
                </p>
                <h4 style="margin-top:15px;font-weight:700;color:#E63946;">Technology that will give you valuable time</h4>
                <p>Spend your time working on purifications and on the management of your device only thanks to the integrated technology in the Puriflash® 5.020 
                    (RFID detector, detectors for potential leakage, and solvent level monitoring).
                </p>
            </div>
        </div>
    </div>
</div>
`
    },
    "puriflash-5050": {
        id: "puriflash-5050",
        name: "Puriflash® 5.050 Flash Purification Systems",
        image: IMG5050Pres,
        logo: Advion,
        bannerImg: Banner3,
        altText: "Puriflash® 5.050 Flash Purification System by Advion Interchim Scientific",
        videoId: "",
        meta: {
            title: "Puriflash® 5.050 Flash Purification Systems | Advion Interchim Scientific | Inkarp India",
            description:
                "Puriflash® 5.050 combines preparative and flash chromatography in one versatile system, enabling high-speed purification, high resolution, and ecological efficiency. Distributed and serviced by Inkarp Instruments in India.",
            keywords: [
                "Puriflash 5.050",
                "Flash Purification Systems",
                "Preparative chromatography",
                "Advion Puriflash",
                "Puriflash India",
                "Advion Interchim Scientific",
                "High-speed flash purification",
                "Puriflash distributor India",
                "Inkarp Flash Purification",
                "Laboratory purification systems"
            ],
            altText: "Puriflash® 5.050 Flash Purification System by Advion Interchim Scientific",
            internalLinks: ["flash-purification", "advion-products"],
            externalLinks: ["https://www.advion-interchim.com/"]
        },
        description: `
<div style="display:flex;flex-wrap:wrap;gap:20px;font-family:Roboto,Arial,sans-serif;color:#333;">
    <div style="flex:1 1 60%;min-width:300px;">
        <div style="padding-left:20px;">

            <h2 style="font-size:28px;line-height:40px;font-weight:600;margin-bottom:10px;color:#E63946;">
                Puriflash® 5.050 Flash Purification Systems
                <br>
                <span style="font-size:18px;font-weight:400;color:#555;">Distributor & Service Provider In India</span>
            </h2>
            <div style="margin-bottom:10px;font-size:16px;line-height:1.6;">
                <p>Go beyond with our cross-over between Chromatography Flash & Preparative.</p>
                <p>Unlock the power of flash purification with Puriflash® 5.050, a cutting-edge system distributed and serviced by 
                    <a href="https://www.advion-interchim.com/" style="color:#E63946;text-decoration:none;">Advion Interchim</a> 
                    and Inkarp Instruments in India. This advanced platform offers:
                </p>
                <ul style="padding-left:20px;list-style:disc;">
                    <li>Unparalleled purification speed and resolution</li>
                    <li>Automated method development and optimization</li>
                    <li>High-throughput processing of complex mixtures</li>
                    <li>User-friendly interface and software</li>
                </ul>
                <p>Experience the benefits of Advion Interchim's innovative technology and Inkarp's dedicated support for maximum productivity and efficiency.</p>
                
                <h4 style="margin-top:15px;font-weight:700;color:#E63946;">Performance and versatility in every situation</h4>
                <p>The Puriflash® 5.050 is a unique instrument to successfully perform preparative and flash purifications, moving from normal to reverse phase and working with reusable columns — an ecological approach to purification.</p>
                
                <h4 style="margin-top:15px;font-weight:700;color:#E63946;">Achieve greater purity</h4>
                <p>With a maximum pressure of 50 bar, it is the ideal device for accessing preparative chromatography while allowing simultaneous flash purification. For complex reprocessing in reverse phase, stainless steel columns with low particle size phases ensure successful separations.</p>
            </div>
        </div>
    </div>
</div>
`
    },
    "puriflash-535-xl": {
        id: "puriflash-535-xl",
        name: "Puriflash® 535-XL Flash Purification Systems",
        image: IMG535XL,
        logo: Advion,
        bannerImg: Banner3,
        altText: "Puriflash® 535-XL Flash Purification System by Advion Interchim Scientific",
        videoId: "",
        meta: {
            title: "Puriflash® 535-XL Flash Purification Systems | Advion Interchim Scientific | Inkarp India",
            description:
                "Puriflash® 535-XL delivers high-throughput purification of raw products with unmatched speed, resolution, and efficiency. Distributed and serviced by Inkarp Instruments in India, it combines compact design with powerful performance for pharmaceutical, biotech, and research laboratories.",
            keywords: [
                "Puriflash 535-XL",
                "Flash Purification Systems",
                "High-throughput purification",
                "Advion Puriflash",
                "Puriflash India",
                "Advion Interchim Scientific",
                "Flash chromatography",
                "Puriflash distributor India",
                "Inkarp Flash Purification",
                "Laboratory purification systems"
            ],
            altText: "Puriflash® 535-XL Flash Purification System by Advion Interchim Scientific",
            internalLinks: ["flash-purification", "advion-products"],
            externalLinks: ["https://www.advion-interchim.com/"]
        },
        description: `
<div style="display:flex;flex-wrap:wrap;gap:20px;font-family:Roboto,Arial,sans-serif;color:#333;">
    <div style="flex:1 1 60%;min-width:300px;">
        <div style="padding-left:20px;">

            <h2 style="font-size:28px;line-height:40px;font-weight:600;margin-bottom:10px;color:#E63946;">
                Puriflash® 535-XL Flash Purification Systems
                <br>
                <span style="font-size:18px;font-weight:400;color:#555;">Distributor & Service Provider In India</span>
            </h2>
            <div style="margin-bottom:10px;font-size:16px;line-height:1.6;">
                <p>Puriflash® 535-XL, distributed and serviced by Advion Interchim
                   
                    and Inkarp Instruments in India, is a cutting-edge flash purification system designed for high-end pharmaceutical, biotech, and research applications. 
                    It offers unparalleled purification speed and resolution, automated method development and optimization, and high-throughput processing of complex mixtures, 
                    with premium support to ensure maximum productivity and efficiency in your laboratory.
                </p>
                <p style="font-weight:500;">Your ideal tool for high-throughput purification of raw product.</p>

                <h4 style="margin-top:15px;font-weight:700;color:#E63946;">Small but mighty</h4>
                <p>The Puriflash® 535-XL incorporates the advantages of the Puriflash® XS 520 Plus and adds even more capabilities. 
                    Features like its compact size, 15″ touch screen, interSoft® X featuring Genius software, UV detector, fraction collector, 
                    and solvent retention tank make it a highly user-friendly and efficient solution.
                </p>
                <p>As the big brother of the Puriflash® XS 520 Plus, the 535-XL allows purification of both small and large product quantities with fewer runs. 
                    This is achieved through its powerful new double piston pump, enabling up to 400 mL/min flow rate and 35 bar pressure, 
                    while maintaining excellent precision and repeatability.
                </p>
            </div>
        </div>
    </div>
</div>
`
    },
    "puriflash-5015-xl": {
        id: "puriflash-5015-xl",
        name: "Puriflash® 5.015-XL Flash Purification Systems",
        image: AdvionPuriFlash5015XL,
        logo: Advion,
        bannerImg: Banner3,
        altText: "Puriflash® 5.015-XL Flash Purification System by Advion Interchim Scientific",
        videoId: "",
        meta: {
            title: "Puriflash® 5.015-XL Flash Purification Systems | Advion Interchim Scientific | Inkarp India",
            description:
                "Puriflash® 5.015-XL is a high-performance flash purification system designed for efficient separation of complex mixtures. Distributed and serviced by Inkarp Instruments in India, it ensures reliability, safety, and production continuity for pharmaceutical, biotech, and research applications.",
            keywords: [
                "Puriflash 5.015-XL",
                "Flash Purification Systems",
                "High-performance flash purification",
                "Advion Puriflash",
                "Puriflash India",
                "Advion Interchim Scientific",
                "Flash chromatography",
                "Puriflash distributor India",
                "Inkarp Flash Purification",
                "Laboratory purification systems"
            ],
            altText: "Puriflash® 5.015-XL Flash Purification System by Advion Interchim Scientific",
            internalLinks: ["flash-purification", "advion-products"],
            externalLinks: ["https://www.advion-interchim.com/"]
        },
        description: `
<div style="display:flex;flex-wrap:wrap;gap:20px;font-family:Roboto,Arial,sans-serif;color:#333;">
    <div style="flex:1 1 60%;min-width:300px;">
        <div style="padding-left:20px;">

            <h2 style="font-size:28px;line-height:40px;font-weight:600;margin-bottom:10px;color:#E63946;">
                Puriflash® 5.015-XL Flash Purification Systems
                <br>
                <span style="font-size:18px;font-weight:400;color:#555;">Distributor & Service Provider In India</span>
            </h2>
            <div style="margin-bottom:10px;font-size:16px;line-height:1.6;">
                <p>Puriflash® 5.015-XL, distributed and serviced by Advion Interchim
                    
                    and Inkarp Instruments in India, is a high-performance flash purification system designed for efficient and effective separation of complex mixtures. 
                    It is an ideal solution for pharmaceutical, biotech, and research applications, backed by premium support to ensure seamless integration and maximum productivity in your laboratory.
                </p>

                <h4 style="margin-top:15px;font-weight:700;color:#E63946;">The assurance of successful purifications</h4>
                <p>Its long-lasting reliability and robustness, combined with advanced safety features, make it perfect for carrying out productions semi-continuously with volumes up to several hundred grams of the compounds of interest.</p>
                <p>With the Puriflash® 5.015-XL, you benefit from production continuity on the same device, regardless of the scale-up factor.</p>
            </div>
        </div>
    </div>
</div>
`
    },

    "puriflash-5250": {
        id: "puriflash-5250",
        name: "Puriflash® 5.250 - Preparative Purification Systems",
        image: IMG5250Pres, // replace with your actual image import
        logo: Advion,
        bannerImg: Banner3, // replace with your actual banner import
        altText: "Puriflash® 5.250 Preparative Purification System by Advion Interchim Scientific",
        videoId: "",
        meta: {
            title: "Puriflash® 5.250 Preparative Purification Systems | Advion Interchim Scientific | Inkarp India",
            description:
                "Puriflash® 5.250 is a high-performance preparative purification system from Advion Interchim Scientific, distributed and serviced by Inkarp Instruments in India. Engineered for high-speed purification of complex mixtures with unmatched resolution, purity, and versatility. Ideal for routine purification, complex separations, impurity isolation, and trace enrichment in pharmaceutical, biotech, and research laboratories.",
            keywords: [
                "Puriflash 5.250",
                "Preparative Purification Systems",
                "High-speed purification",
                "Advion Puriflash",
                "Puriflash India",
                "Advion Interchim Scientific",
                "Preparative HPLC",
                "Flash chromatography",
                "Puriflash distributor India",
                "Inkarp Preparative Purification"
            ],
            altText: "Puriflash® 5.250 Preparative Purification System by Advion Interchim Scientific",
            internalLinks: ["preperative-purification", "advion-products"],
            externalLinks: ["https://www.advion-interchim.com/"]
        },
        description: `
<div style="display:flex;flex-wrap:wrap;gap:20px;font-family:Roboto,Arial,sans-serif;color:#333;">
    <div style="flex:1 1 60%;min-width:300px;">
        <div style="padding-left:20px;">

            <h2 style="font-size:28px;line-height:40px;font-weight:600;margin-bottom:10px;color:#E63946;">
                Puriflash® 5.250 - Preparative Purification Systems
                <br>
                <span style="font-size:18px;font-weight:400;color:#555;">Distributor & Service Provider In India</span>
            </h2>
            <div style="margin-bottom:10px;font-size:16px;line-height:1.6;">
                <p>Streamline your purification process with Puriflash® 5.250, a preparative purification system, distributed and serviced by 
                    <a style="color:#000;text-decoration:none;font-weight:500;" href="https://www.advion-interchim.com/">Advion Interchim</a> and Inkarp Instruments in India. 
                    This advanced system offers high-speed purification of complex mixtures, unparalleled resolution and purity, easy method development and scalability, and a user-friendly interface. 
                    Experience the benefits of Advion Interchim's innovative technology and Inkarp's dedicated support for your laboratory requirements.
                </p>
                <p style="margin-top:10px;">Experience the unique performance in all circumstances.</p>
                <p>The Puriflash® 5.250 adapts to all the requirements of routine purification, complex mixtures, separation of impurities for later detection, trace enrichment, and more.</p>

                <h4 style="margin-top:15px;font-weight:700;color:#E63946;">Maximum versatility and flexibility</h4>
                <p>The PF-5.250 purification system will become an indispensable ally in your laboratory. It has been meticulously designed to meet all your needs, 
                   and the only question you will ask during its operation is how you managed without it for so long.</p>
                <p>It is ready to start multiple purifications in normal or reverse phase, flash chromatography or preparative HPLC at any time. 
                   With its 250 bar and 250 mL/min capability, it handles everything from routine purification to complex separations with ease.</p>
            </div>
        </div>
    </div>
</div>
`
    },

    "puriflash-5400uv": {
        id: "puriflash-5400uv",
        name: "Puriflash® 5.400uv - Preparative Purification Systems",
        image: IMG5400Pres, // replace with your actual image import
        logo: Advion,
        bannerImg: Banner3, // replace with your actual banner import
        altText: "Puriflash® 5.400uv Preparative Purification System by Advion Interchim Scientific",
        videoId: "",
        meta: {
            title: "Puriflash® 5.400uv Preparative Purification Systems | Advion Interchim Scientific | Inkarp India",
            description:
                "Puriflash® 5.400uv is a high-performance preparative purification system from Advion Interchim Scientific, distributed and serviced by Inkarp Instruments in India. Featuring unparalleled UV detection sensitivity, high-speed purification of complex mixtures, and compatibility with sub-2 micron columns for maximum separating power, it is ideal for method development, ultra-purification, and rare sample isolation.",
            keywords: [
                "Puriflash 5.400uv",
                "Preparative Purification Systems",
                "High-speed purification",
                "Advion Puriflash",
                "Puriflash India",
                "Advion Interchim Scientific",
                "Preparative HPLC",
                "Flash chromatography",
                "Puriflash distributor India",
                "Inkarp Preparative Purification",
                "UV detection purification"
            ],
            altText: "Puriflash® 5.400uv Preparative Purification System by Advion Interchim Scientific",
            internalLinks: ["preperative-purification", "advion-products"],
            externalLinks: ["https://www.advion-interchim.com/"]
        },
        description: `
<div style="display:flex;flex-wrap:wrap;gap:20px;font-family:Roboto,Arial,sans-serif;color:#333;">
    <div style="flex:1 1 60%;min-width:300px;">
        <div style="padding-left:20px;">

            <h2 style="font-size:28px;line-height:40px;font-weight:600;margin-bottom:10px;color:#E63946;">
                Puriflash® 5.400uv - Preparative Purification Systems
                <br>
                <span style="font-size:18px;font-weight:400;color:#555;">Distributor & Service Provider In India</span>
            </h2>
            <div style="margin-bottom:10px;font-size:16px;line-height:1.6;">
                <p>Take your purification to the next level with Puriflash® 5.400uv, a preparative purification system, distributed and serviced by 
                    <a style="color:#000;text-decoration:none;font-weight:500;" href="https://www.advion-interchim.com/">Advion Interchim</a> and Inkarp Instruments in India. 
                    This cutting-edge system offers unparalleled UV detection sensitivity, high-speed purification of complex mixtures, advanced method development and scalability, and a user-friendly interface. 
                    Experience the benefits of Advion Interchim's innovative technology and Inkarp's dedicated support for your laboratory requirements.
                </p>
                <p style="margin-top:10px;">Step into Ultra Purification.</p>
                <p>Designed to excel in method development and purification of rare and high-quality sample products, this device will leave you nothing less than ultra-satisfied.</p>

                <h4 style="margin-top:15px;font-weight:700;color:#E63946;">Exceed the limits of purification</h4>
                <p>If you are striving for excellence, the Puriflash® 5.400-UV is perfect for you – from the development of the method on a small diameter column to the purification by preparative HPLC. 
                   In addition to the unparalleled performance of this purification system, conducting these steps on one device gives you greater flexibility, significant time savings, and increased productivity.</p>
                <p>The Puriflash® 5.400-UV, with its maximum pressure of 400 bar, is also compatible with the use of sub-2 micron columns for maximum separating power. 
                   This means you will have access to ultra-purification for the purification of rare and high-quality products.</p>
            </div>
        </div>
    </div>
</div>
`
    },

    "autosampler-puriflash-as-1": {
        id: "autosampler-puriflash-as-1",
        name: "Autosampler puriFlash® AS-1 - Peripheral Production Devices",
        image: PuriFlashAS1Interchim, // replace with your actual image import
        logo: Advion,
        bannerImg: Banner3, // replace with your actual banner import
        altText: "Autosampler puriFlash® AS-1 Peripheral Production Device by Advion Interchim Scientific",
        videoId: "",
        meta: {
            title: "Autosampler puriFlash® AS-1 Peripheral Production Devices | Advion Interchim Scientific | Inkarp India",
            description:
                "Autosampler puriFlash® AS-1 is a high-performance peripheral production device from Advion Interchim Scientific, distributed and serviced by Inkarp Instruments in India. Designed for automated sample injection, high-throughput processing, and seamless integration with puriFlash systems, it boosts productivity, accuracy, and workflow efficiency in laboratory purification.",
            keywords: [
                "Autosampler puriFlash AS-1",
                "Peripheral Production Devices",
                "Advion puriFlash Autosampler",
                "High-throughput sample processing",
                "Automated sample injection",
                "Advion Interchim Scientific",
                "puriFlash integration",
                "Lab productivity devices",
                "puriFlash AS-1 distributor India",
                "Inkarp peripheral devices"
            ],
            altText: "Autosampler puriFlash® AS-1 Peripheral Production Device by Advion Interchim Scientific",
            internalLinks: ["peripheral-production-devices", "advion-products"],
            externalLinks: ["https://www.advion-interchim.com/"]
        },
        description: `
<div style="display:flex;flex-wrap:wrap;gap:20px;font-family:Roboto,Arial,sans-serif;color:#333;">
    <div style="flex:1 1 60%;min-width:300px;">
        <div style="padding-left:20px;">

            <h2 style="font-size:28px;line-height:40px;font-weight:600;margin-bottom:10px;color:#E63946;">
                Autosampler puriFlash® AS-1 - Peripheral Production Devices
                <br>
                <span style="font-size:18px;font-weight:400;color:#555;">Distributor & Service Provider In India</span>
            </h2>
            <div style="margin-bottom:10px;font-size:16px;line-height:1.6;">
                <p style="margin-bottom:10px;font-weight:500;">Increasing your productivity has never been that easy</p>
                <p>Maximize your laboratory efficiency with Autosampler puriFlash® AS-1, a cutting-edge peripheral production device, distributed and serviced by Advion Interchim
                   
                    This innovative autosampler offers automated sample injection, high-throughput processing, enhanced data accuracy, and seamless integration with puriFlash systems. 
                    Experience the benefits of Advion Interchim's innovative technology and Inkarp's dedicated support for your laboratory requirements.
                </p>

                <h4 style="margin-top:15px;font-weight:700;color:#E63946;">Simply let puriFlash® AS-1 work for you</h4>
                <ul style="margin-top:10px;padding-left:20px;list-style:disc;">
                    <li>Place the samples to be purified into the Autosampler</li>
                    <li>Select your method</li>
                    <li>Add to the Sample Queue</li>
                </ul>
                <p style="margin-top:10px;">puriFlash® AS-1 is indispensable for increasing your productivity. With our Autosampler, your performance can be increased tenfold, especially during purification in preparative columns and when coupled to a multi-column system or CarouXel.</p>
            </div>
        </div>
    </div>
</div>
`
    },

    "puriflash-xs-vap": {
        id: "puriflash-xs-vap",
        name: "puriFlash® XS-Vap - Peripheral Production Devices",
        image: SystemeBainEauPuriFlashXSVap, // replace with your actual image import
        logo: Advion,
        bannerImg: Banner3, // replace with your actual banner import
        altText: "puriFlash® XS-Vap Peripheral Production Device by Advion Interchim Scientific",
        videoId: "",
        meta: {
            title: "puriFlash® XS-Vap Peripheral Production Devices | Advion Interchim Scientific | Inkarp India",
            description:
                "puriFlash® XS-Vap is a multi-function laboratory evaporator from Advion Interchim Scientific, distributed and serviced by Inkarp Instruments in India. Offering automated solvent evaporation, high-throughput processing, enhanced sample concentration, and seamless integration with puriFlash systems, it delivers X-tra compact, X-tra intuitive, and X-tra efficient evaporation for up to 90 samples at once.",
            keywords: [
                "puriFlash XS-Vap",
                "Peripheral Production Devices",
                "Advion puriFlash evaporator",
                "Automated solvent evaporation",
                "High-throughput evaporation",
                "Sample concentration system",
                "Lab evaporator",
                "puriFlash integration",
                "puriFlash XS-Vap distributor India",
                "Inkarp laboratory evaporation"
            ],
            altText: "puriFlash® XS-Vap Peripheral Production Device by Advion Interchim Scientific",
            internalLinks: ["peripheral-production-devices", "advion-products"],
            externalLinks: ["https://www.advion-interchim.com/"]
        },
        description: `
<div style="display:flex;flex-wrap:wrap;gap:20px;font-family:Roboto,Arial,sans-serif;color:#333;">
    <div style="flex:1 1 60%;min-width:300px;">
        <div style="padding-left:20px;">
            <h2 style="font-size:28px;line-height:40px;font-weight:600;margin-bottom:10px;color:#E63946;">
                puriFlash® XS-Vap - Peripheral Production Devices
                <br>
                <span style="font-size:18px;font-weight:400;color:#555;">Distributor & Service Provider In India</span>
            </h2>
            <div style="margin-bottom:10px;font-size:16px;line-height:1.6;">
                <p>Take your purification process to the next level with puriFlash® XS-Vap, a cutting-edge peripheral production device, distributed and serviced by 
                    <a style="color:#000;text-decoration:none;font-weight:500;" href="https://www.advion-interchim.com/">Advion Interchim</a> and Inkarp Instruments in India. 
                    This innovative system offers automated solvent evaporation, high-throughput processing, enhanced sample concentration, and seamless integration with puriFlash systems. 
                    Experience the benefits of Advion Interchim's innovative technology and Inkarp's dedicated support for your laboratory requirements.
                </p>
                <p style="margin-bottom:10px;font-weight:500;">Your multi-function laboratory evaporator.</p>
                <p style="margin-bottom:10px;font-weight:500;">X-tra compact. X-tra intuitive. X-tra efficient.</p>
                <p style="margin-bottom:10px;font-weight:500;">Step into the vortex</p>
                <p>The puriFlash® XS-Vap evaporator is the best solution for your sample evaporation needs for volumes ranging from 1 mL to 250 mL.</p>
                <p>Designed to be your best ally, thanks to its innovative technologies and ultra-intuitive software, this compact system can evaporate up to 90 samples simultaneously.</p>
            </div>
        </div>
    </div>
</div>
`
    },

    "evaporator-purivap-6": {
        id: "evaporator-purivap-6",
        name: "Evaporator puriVap-6 - Peripheral Production Devices",
        image: Purivap6Goutte, // replace with your actual image import
        logo: Advion,
        bannerImg: Banner3, // replace with your actual banner import
        altText: "Evaporator puriVap-6 Peripheral Production Device by Advion Interchim Scientific",
        videoId: "",
        meta: {
            title: "Evaporator puriVap-6 Peripheral Production Devices | Advion Interchim Scientific | Inkarp India",
            description:
                "Evaporator puriVap-6 is a compact, high-performance peripheral production device from Advion Interchim Scientific, distributed and serviced by Inkarp Instruments in India. Offering rapid and gentle solvent evaporation, high-throughput processing of up to 6 samples, automated operation, and seamless integration with purification systems, it delivers super simple, super smart evaporation for sample volumes from 2 mL to 60 mL.",
            keywords: [
                "Evaporator puriVap-6",
                "Peripheral Production Devices",
                "Advion puriVap evaporator",
                "Rapid solvent evaporation",
                "High-throughput evaporation",
                "Sample evaporation system",
                "Lab evaporator",
                "puriFlash integration",
                "puriVap-6 distributor India",
                "Inkarp laboratory evaporation"
            ],
            altText: "Evaporator puriVap-6 Peripheral Production Device by Advion Interchim Scientific",
            internalLinks: ["peripheral-production-devices", "advion-products"],
            externalLinks: ["https://www.advion-interchim.com/"]
        },
        description: `
<div style="display:flex;flex-wrap:wrap;gap:20px;font-family:Roboto,sans-serif;color:#333;">
    <div style="flex:1 1 60%;min-width:300px;">
        <div style="padding-left:20px;">
            <h2 style="font-size:28px;line-height:40px;font-weight:600;margin-bottom:10px;color:#E63946;">
                Evaporator puriVap-6 - Peripheral Production Devices
                <br>
                <span style="font-size:18px;font-weight:400;color:#555;">Distributor & Service Provider In India</span>
            </h2>
            <div style="margin-bottom:10px;font-size:16px;line-height:1.6;">
                <p>Boost your laboratory productivity with Evaporator puriVap-6, a high-performance peripheral production device, distributed and serviced by 
                    <a style="color:#000;text-decoration:none;font-weight:500;" href="https://www.advion-interchim.com/">Advion Interchim</a> and Inkarp Instruments in India. 
                    This advanced evaporator offers rapid and gentle solvent evaporation, high-throughput processing of up to 6 samples, automated operation and monitoring, and seamless integration with purification systems. 
                    Experience the benefits of Advion Interchim's innovative technology and Inkarp's dedicated support.
                </p>
                <p style="margin-bottom:10px;font-weight:500;">Our compact evaporator with multiple positions</p>
                <p style="margin-bottom:10px;font-weight:500;">Super simple. Super smart.</p>
                <p>The evaporator puriVap-6™ is the best solution for the evaporation of your samples with a volume from 2 mL to 60 mL. 
                This compact system becomes indispensable because it enables up to 6 samples to be evaporated simultaneously, even if the dimensions differ.</p>
            </div>
        </div>
    </div>
</div>
`
    },

    "puriflash-ms": {
        id: "puriflash-ms",
        name: "Mass spectrometers : puriFlash® MS - Peripheral Detection Devices",
        image: PuriFlashMS2, // replace with actual image import
        logo: Advion,
        bannerImg: Banner3, // replace with your actual banner import
        altText: "Mass spectrometers puriFlash MS by Advion Interchim Scientific",
        videoId: "",
        meta: {
            title: "Mass spectrometers : puriFlash® MS | Peripheral Detection Devices | Advion Interchim Scientific | Inkarp India",
            description:
                "Experience the power of integrated purification and analysis with puriFlash® MS, a cutting-edge mass spectrometer system distributed and serviced by Advion Interchim and Inkarp Instruments in India. This solution combines advanced flash purification with high-performance mass spectrometry to ensure maximum productivity and efficiency.",
            keywords: [
                "puriFlash MS",
                "Mass spectrometer Advion",
                "Peripheral Detection Devices",
                "Advion Interchim Scientific",
                "Inkarp detection devices distributor",
                "Lab mass spectrometry India",
                "Flash purification with mass spectrometry",
                "Single quadrupole mass spectrometer"
            ],
            altText: "Mass spectrometers puriFlash MS by Advion Interchim Scientific",
            internalLinks: ["peripheral-detection-devices", "advion-products"],
            externalLinks: ["https://www.advion-interchim.com/"]
        },
        description: `
<div style="display:flex;flex-wrap:wrap;gap:20px;font-family:Roboto,sans-serif;color:#333;">
    <div style="flex:1 1 60%;min-width:300px;">
        <div style="padding-left:20px;">
    
            <h2 style="font-size:28px;line-height:40px;font-weight:600;margin-bottom:10px;color:#E63946;">
                Mass spectrometers : puriFlash® MS
                <br>
                <span style="font-size:18px;font-weight:400;color:#555;">Distributor & Service Provider In India</span>
            </h2>
            <div style="margin-bottom:10px;font-size:16px;line-height:1.6;">
                <p>Experience the power of integrated purification and analysis with puriFlash® MS, a cutting-edge mass spectrometer system distributed and serviced by 
                    <a style="color:#000;text-decoration:none;font-weight:500;" href="https://www.advion-interchim.com/">Advion Interchim</a> and Inkarp Instruments in India.
                    This innovative solution combines advanced flash purification with high-performance mass spectrometry, backed by premium support from Advion Interchim and Inkarp Instruments to ensure maximum productivity and efficiency in your laboratory.
                </p>
                <p class="font_family_poppins mb_10">Our multifunctional and compact</p>
                <p class="font_family_poppins mb_10">mass spectrometers and</p>                                    
                <p class="font_family_poppins mb_10">our MS Splitter for perfecting</p>
                <p class="font_family_poppins mb_10">your purification platform</p>
                <h4>Detect and collect your compounds in accordance with their molecular weight thanks to our single quadrupole mass spectrometer.</h4>
                <p><strong>Ultra easy :</strong> By normal or reverse-phase Flash or preparative Chromatography, you start collecting your fractions by mass.</p>
                <p><strong>Ultra quick :</strong> Before purification, the diluted sample can be injected through the direct injection valve in order to visualize the mass existing in the product and to record it in the purification method for the purpose of collection.</p>
                <p><strong>Ultra safe :</strong> You can rely on puriFlash® MS 100%. But if you would like to make sure that everything went right, you just have to ask: puriFlash® MS will confirm the mass and purity of the collected fractions.</p>
            </div>
        </div>
    </div>
</div>
`
    }


}