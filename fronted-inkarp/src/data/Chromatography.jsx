import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useParams, Link, useNavigate } from "react-router-dom";

import Nanalysis from '/src/assets/PrincipalLogos/RowOne/nanalysis.png';
// --- 100 MHz Benchtop NMR ---
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

import ImgBreezeQS from "/images/products/Waters/Breeze-QS-HPLC-System.jpg";
import ImgAllianceHPLC from "/images/products/Waters/alliance-hplc-system-2695-2489-angle.jpg";
import ImgAllianceIS from "/images/products/Waters/alliance-is-system-with-bottles-angled.jpg";
import ImgArcHPLC from "/images/products/Waters/arc-hplc-QSm-pda-ftnr.jpg.thumb.319.319.jpg";

import Indutrial from "/images/products/Labomatic/Image1.jpg";
import Liquid1 from "/images/products/Labomatic/LiquidImage1.jpg";

import ImgSeparchromPC01 from "/images/products/Ecom/separchrom-pc01.png";
import ImgSeparchromPC02 from "/images/products/Ecom/separchrom-pc02.png";
import ImgSeparchromPC04 from "/images/products/Ecom/separchrom-pc04.png";
import ImgSeparchromPC06 from "/images/products/Ecom/separchrom-pc06.png";
import ImgSeparchromPC08 from "/images/products/Ecom/separchrom-pc08.png";
import ImgSeparpress from "/images/products/Ecom/separpress.png";
import ImgSeparsys400 from "/images/products/Ecom/Separsys-400.png";


export const Chromatography = {
    "100-mhz-benchtop-nmr": {
        models: [
            { heading: "100 MHz Benchtop NMR Models" },
            {
                name: "100Pro – Multinuclear",
                slug: "100pro-multinuclear",
                image: Img100Pro
            },
            {
                name: "100e – Single Nuclei",
                slug: "100e-single-nuclei",
                image: Img100e
            }
        ],
        meta: {
            title: "100 MHz Benchtop NMR – Nanalysis NMR Instruments | Inkarp India",
            description: "Explore Nanalysis 100 MHz Benchtop NMR instruments including the powerful 100Pro for multinuclear detection and the efficient 100e for single nuclei analysis. Available through Inkarp India.",
            keywords: [
                "100 MHz NMR", "Benchtop NMR", "Nanalysis NMR India",
                "100Pro NMR", "100e NMR", "Multinuclear NMR",
                "Single Nuclei NMR", "Inkarp Benchtop NMR",
                "Compact NMR Spectrometer"
            ],
            altText: "100 MHz Benchtop NMR Models by Nanalysis",
            internalLinks: ["100 MHz NMR product pages"],
            externalLinks: ["https://www.nanalysis.com/"]
        }
    },

    "60-mhz-benchtop-nmr": {
        models: [
            { heading: "60 MHz Benchtop NMR Models" },
            {
                name: "60Pro – Multinuclear",
                slug: "60pro-multinuclear",
                image: Img60Pro
            },
            {
                name: "60e – Single Nuclei",
                slug: "60e-single-nuclei",
                image: Img60e
            }
        ],
        meta: {
            title: "60 MHz Benchtop NMR – Nanalysis NMR Spectrometers | Inkarp India",
            description: "Discover compact 60 MHz NMR instruments by Nanalysis. The 60Pro supports multinuclear analysis, while the 60e offers a cost-effective solution for single nuclei experiments.",
            keywords: [
                "60 MHz Benchtop NMR", "Nanalysis 60Pro", "60e NMR",
                "Benchtop NMR Spectrometer", "Inkarp Scientific", "Affordable NMR Systems"
            ],
            altText: "60 MHz Benchtop NMR Devices",
            internalLinks: ["60 MHz product detail"],
            externalLinks: ["https://www.nanalysis.com/"]
        }
    },

    "accessories": {
        models: [
            { heading: "NMR Accessories" },
            {
                name: "AUTOsample-60",
                slug: "autosample-60",
                image: ImgAutoSample
            },
            {
                name: "NMReady-Flow",
                slug: "nmready-flow",
                image: ImgNMReadyFlow
            }
        ],
        meta: {
            title: "Benchtop NMR Accessories – AUTOsample, NMReady Flow | Inkarp",
            description: "Enhance your NMR workflow with AUTOsample-60 and NMReady-Flow accessories by Nanalysis. Explore automation and flow NMR options with Inkarp.",
            keywords: [
                "NMR accessories", "NMReady Flow", "AUTOsample NMR",
                "Sample automation NMR", "Flow chemistry NMR", "Benchtop NMR accessories"
            ],
            altText: "Benchtop NMR Accessories",
            internalLinks: ["Accessories for NMR systems"],
            externalLinks: ["https://www.nanalysis.com/"]
        }
    },

    "software-packages": {
        models: [
            { heading: "NMR Software Packages" },
            {
                name: "NMReady-CONNECT",
                slug: "nmready-connect",
                image: ImgConnect
            },
            {
                name: "Experiment Designer",
                slug: "experiment-designer",
                image: ImgExperimentDesigner
            },
            {
                name: "Remote Access",
                slug: "remote-access",
                image: ImgRemoteAccess
            }
        ],
        meta: {
            title: "NMR Software Tools – NMReady CONNECT, Remote Access | Inkarp India",
            description: "Explore advanced software solutions for NMR instruments such as NMReady-CONNECT, Experiment Designer, and Remote Access tools. Distributed by Inkarp across India.",
            keywords: [
                "NMR software", "NMReady CONNECT", "Remote NMR access",
                "Experiment designer software", "Benchtop NMR interface", "NMR automation tools"
            ],
            altText: "NMR Software for Benchtop Devices",
            internalLinks: ["NMR software detail pages"],
            externalLinks: ["https://www.nanalysis.com/"]
        }
    },

    "chromatography-and-lc-ms-systems": {
        models: [
            { heading: "Chromatography and LC-MS Systems" },
            {
                name: "Breeze QS HPLC",
                slug: "breeze-qs-hplc",
                image: ImgBreezeQS
            },
            {
                name: "Alliance HPLC System",
                slug: "alliance-hplc-system",
                image: ImgAllianceHPLC
            },
            {
                name: "Alliance iS HPLC System",
                slug: "alliance-is-hplc-system",
                image: ImgAllianceIS
            },
            {
                name: "Arc HPLC System",
                slug: "arc-hplc-system",
                image: ImgArcHPLC
            }
        ],
        meta: {
            title: "Waters HPLC Systems | Breeze QS, Alliance, Arc HPLC | Inkarp India",
            description: "Explore high-performance HPLC systems including Breeze QS, Alliance HPLC, Alliance iS HPLC, and Arc HPLC. Distributed and serviced in India by Inkarp Instruments.",
            keywords: [
                "Waters HPLC India",
                "Breeze QS HPLC distributor",
                "Alliance HPLC System",
                "Arc HPLC System",
                "Alliance iS HPLC India",
                "Chromatography systems distributor",
                "LC-MS systems India",
                "HPLC instruments Inkarp",
                "HPLC service provider India",
                "Waters India distributor"
            ],
            altText: "Waters HPLC and Chromatography Systems",
            internalLinks: ["waters-products", "hplc-category"],
            externalLinks: ["https://www.waters.com/"]
        }
    },
    "industrial-liquid-chromatography": {
        models: [
            // { heading: "Chromatography and LC-MS Systems" },
            {
                name: "Industrial liquid Chromatography",
                slug: "industrial-liquid-chromatography",
                image: Indutrial
            },
        ],
        meta: {
            title: "Waters HPLC Systems | Breeze QS, Alliance, Arc HPLC | Inkarp India",
            description: "Explore high-performance HPLC systems including Breeze QS, Alliance HPLC, Alliance iS HPLC, and Arc HPLC. Distributed and serviced in India by Inkarp Instruments.",
            keywords: [
                "Waters HPLC India",
                "Breeze QS HPLC distributor",
                "Alliance HPLC System",
                "Arc HPLC System",
                "Alliance iS HPLC India",
                "Chromatography systems distributor",
                "LC-MS systems India",
                "HPLC instruments Inkarp",
                "HPLC service provider India",
                "Waters India distributor"
            ],
            altText: "Waters HPLC and Chromatography Systems",
            internalLinks: ["waters-products", "hplc-category"],
            externalLinks: ["https://www.waters.com/"]
        },

    },
    "liquid-handling": {
        models: [
            {
                name: "Liquid Handling Solutions",
                slug: "liquid-handling",
                image: Liquid1
            }
        ],
        meta: {
            title: "Liquid Handling Systems | Pipettes, Dispensers, Automation | Inkarp India",
            description: "Discover high-precision liquid handling solutions including pipettes, bottle-top dispensers, and automated liquid handling workstations. Distributed and supported across India by Inkarp Instruments.",
            keywords: [
                "Liquid handling systems India",
                "Pipettes distributor India",
                "Automated liquid handling",
                "Bottle-top dispensers Inkarp",
                "Liquid transfer instruments",
                "Lab automation India",
                "Precision pipetting systems",
                "Liquid handling equipment India",
                "Inkarp liquid handling",
                "Lab dispensers distributor"
            ],
            altText: "Liquid Handling Instruments and Automation Systems",
            internalLinks: ["liquid-handling-products", "lab-automation-category"],
            externalLinks: ["https://www.gilson.com/", "https://www.sartorius.com/"]
        }
    },

    "columns-for-preparative-chromatography-dac-columns-50mm-100mm-id-columns": {
        models: [
            { heading: "Columns For Preparative Chromatography (DAC Columns, 50mm-1000mm ID Columns)" },
            {
                name: "Separchrom PC01",
                slug: "separchrom-pc01",
                image: ImgSeparchromPC01
            },
            {
                name: "Separchrom PC02",
                slug: "separchrom-pc02",
                image: ImgSeparchromPC02
            },
            {
                name: "Separchrom PC04",
                slug: "separchrom-pc04",
                image: ImgSeparchromPC04
            },
            {
                name: "Separchrom PC06",
                slug: "separchrom-pc06",
                image: ImgSeparchromPC06
            },
            {
                name: "Separchrom PC08",
                slug: "separchrom-pc08",
                image: ImgSeparchromPC08
            },
            {
                name: "Separpress",
                slug: "separpress",
                image: ImgSeparpress
            },

        ],
        meta: {
            title: "Preparative Chromatography Columns | DAC Columns by Labomatic | Inkarp India",
            description: "Explore DAC Columns for Preparative Chromatography from Labomatic. Models include Separchrom PC01, PC02, PC04, PC06, PC08, Separpress, and Separsys series. Distributed and supported in India by Inkarp Instruments.",
            keywords: [
                "Preparative Chromatography India",
                "DAC Columns India",
                "Separchrom Columns Labomatic",
                "Labomatic chromatography systems",
                "Separpress column packer",
                "Separsys HP 400",
                "Industrial Liquid Chromatography Columns",
                "Inkarp Instruments Labomatic Distributor",
                "High-pressure Chromatography Columns",
                "Labomatic column systems"
            ],
            altText: "Labomatic DAC Columns and Preparative Chromatography Systems",
            internalLinks: ["industrial-liquid-chromatography", "labomatic-products"],
            externalLinks: ["https://www.labomatic.com"]
        }
    },

    "plc-industrial-systems": {
        models: [
            { heading: "PLC Industrial Systems" },
            {
                name: "Separsys HP 400, 800 FP, 300 DS",
                slug: "separsys-hp-400-800-fp-300-ds",
                image: ImgSeparsys400
            }
        ],
        meta: {
            title: "PLC Industrial Chromatography Systems | Separsys HP Series | Inkarp India",
            description: "Explore PLC Industrial Chromatography Systems including Separsys HP 400, 800 FP, and 300 DS from Labomatic. Ideal for automated fractionation and industrial-scale preparative chromatography. Distributed by Inkarp Instruments in India.",
            keywords: [
                "PLC Industrial Chromatography India",
                "Separsys HP 400",
                "Separsys 800 FP",
                "Separsys 300 DS",
                "Labomatic PLC Systems",
                "Labomatic Separsys distributor",
                "Chromatography automation India",
                "Inkarp Industrial Chromatography",
                "PLC Systems for DAC columns",
                "High-pressure chromatography automation"
            ],
            altText: "PLC Industrial Systems by Labomatic",
            internalLinks: ["industrial-liquid-chromatography", "labomatic-products"],
            externalLinks: ["https://www.labomatic.com"]
        }
    }



}