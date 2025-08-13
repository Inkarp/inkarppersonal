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
    },

    "express-cms": {
        models: [
            { heading: "" },
            {
                name: "Express CMS",
                slug: "express-cms",
                image: ExpressionCMS
            }
        ],
        meta: {
            title: "Express CMS | Advion Interchim Scientific | Inkarp India",
            description: "Discover the Express CMS from Advion Interchim Scientific, a compact mass spectrometer designed for rapid, reliable, and high-performance analysis. Ideal for laboratories seeking accurate compound identification with easy integration into workflows. Distributed by Inkarp Instruments in India.",
            keywords: [
                "Express CMS",
                "Advion CMS",
                "Compact Mass Spectrometer",
                "Mass Spectrometry India",
                "LC/MS system",
                "CMS Express Advion",
                "Mass spectrometry for laboratories",
                "Advion Interchim Scientific",
                "Inkarp Express CMS distributor",
                "Compact LC-MS analysis"
            ],
            altText: "Express CMS Compact Mass Spectrometer by Advion Interchim Scientific",
            internalLinks: ["mass-spectrometry", "advion-products"],
            externalLinks: ["https://www.advion.com/products/express-cms/"]
        }
    },

    "plate-express": {
        models: [
            { heading: "" },
            {
                name: "Plate Express™ TLC Plate Reader",
                slug: "plate-express",
                image: AISMassSpecPlateExpress
            }
        ],
        meta: {
            title: "Plate Express™ TLC Plate Reader | Advion Interchim Scientific | Inkarp India",
            description: "Explore the Plate Express™ TLC Plate Reader from Advion Interchim Scientific, designed to directly analyze samples from TLC plates without sample scraping. It enhances workflow efficiency and accuracy, making it ideal for organic synthesis, reaction monitoring, and compound identification. Distributed by Inkarp Instruments in India.",
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
        }
    },

    "avant-u-hpcl": {
        models: [
            { heading: "" },
            {
                name: "AVANT™ (U)HPLC System",
                slug: "avant-u-hpcl",
                image: AVANT2019FINAL
            }
        ],
        meta: {
            title: "AVANT™ (U)HPLC System | Advion Interchim Scientific | Inkarp India",
            description: "Discover the AVANT™ (U)HPLC System from Advion Interchim Scientific, a modular high-performance liquid chromatography platform designed for precision, flexibility, and seamless integration with mass spectrometry. Ideal for analytical and preparative workflows. Distributed and serviced by Inkarp Instruments in India.",
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
        }
    },

    "solation-icp-ms": {
        models: [
            { heading: "" },
            {
                name: "SOLATION® ICP-MS",
                slug: "solation-icp-ms",
                image: ICPMSSolation
            }
        ],
        meta: {
            title: "SOLATION® ICP-MS | Inductively Coupled Plasma Mass Spectrometer | Inkarp India",
            description: "Discover the SOLATION® ICP-MS from Advion Interchim Scientific, designed for high-sensitivity trace element analysis with exceptional performance in environmental, pharmaceutical, food, and materials testing. Distributed and serviced by Inkarp Instruments in India.",
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
            altText: "SOLATION® ICP-MS by Advion Interchim Scientific",
            internalLinks: ["mass-spectrometry", "advion-products"],
            externalLinks: ["https://www.advion-interchim.com/products/solation-icp-ms/"]
        }
    },

    "triversa-nanomate": {
        models: [
            { heading: "" },
            {
                name: "TriVersa NanoMate®",
                slug: "triversa-nanomate",
                image: PhotoProductsTriversaNanomate
            }
        ],
        meta: {
            title: "TriVersa NanoMate® | Automated Nanoelectrospray & Liquid Handling | Inkarp India",
            description: "Discover the TriVersa NanoMate® from Advion Interchim Scientific, the industry's premier chip-based nanoelectrospray ionization system offering automation, reproducibility, and exceptional performance for mass spectrometry workflows. Distributed and serviced by Inkarp Instruments in India.",
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
            altText: "TriVersa NanoMate® by Advion Interchim Scientific",
            internalLinks: ["mass-spectrometry", "advion-products"],
            externalLinks: ["https://www.advion-interchim.com/products/triversa-nanomate/"]
        }
    },

    "flash-purification-systems": {
        models: [
            { heading: "" },
            {
                name: "Puriflash® Xs 520 Plus",
                slug: "puriflash-xs-520-plus",
                image: PuriFlashXS520SuiteShuttle
            },
            {
                name: "Puriflash® 5.020",
                slug: "puriflash-5020",
                image: IMG5020Pres
            },
            {
                name: "Puriflash® 5.050",
                slug: "puriflash-5050",
                image: IMG5050Pres
            },
            {
                name: "Puriflash® 535-xl",
                slug: "puriflash-535-xl",
                image: IMG535XL
            },
            {
                name: "Puriflash® 5.015-xl",
                slug: "puriflash-5015-xl",
                image: AdvionPuriFlash5015XL
            }
        ],
        meta: {
            title: "Flash Purification Systems | Advion Interchim Scientific | Inkarp India",
            description: "Explore the full range of Puriflash® Flash Purification Systems from Advion Interchim Scientific, including Xs 520 Plus, 5.020, 5.050, 535-xl, and 5.015-xl. Engineered for speed, precision, and scalability, these systems deliver optimal purification performance for a wide variety of applications. Distributed and serviced by Inkarp Instruments in India.",
            keywords: [
                "Puriflash",
                "Flash Purification System",
                "Puriflash Xs 520 Plus",
                "Puriflash 5.020",
                "Puriflash 5.050",
                "Puriflash 535-xl",
                "Puriflash 5.015-xl",
                "Advion Interchim Scientific",
                "Flash Chromatography India",
                "Inkarp Flash Purification distributor"
            ],
            altText: "Puriflash Flash Purification Systems by Advion Interchim Scientific",
            internalLinks: ["flash-purification", "advion-products"],
            externalLinks: ["https://www.advion-interchim.com/"]
        }
    },

    "preperative-purification-systems": {
        models: [
            { heading: "" },
            {
                name: "Puriflash® 5.250",
                slug: "puriflash-5250",
                image: IMG5250Pres
            },
            {
                name: "Puriflash® 5.400uv",
                slug: "puriflash-5400uv",
                image: IMG5400Pres
            }
        ],
        meta: {
            title: "Preparative Purification Systems | Advion Interchim Scientific | Inkarp India",
            description: "Explore the Puriflash® range of Preparative Purification Systems including the Puriflash® 5.250 and Puriflash® 5.400uv from Advion Interchim Scientific. Engineered for high-throughput and precision purification in laboratory and industrial applications. Distributed and serviced by Inkarp Instruments in India.",
            keywords: [
                "Puriflash Preparative Purification System",
                "Puriflash 5.250",
                "Puriflash 5.400uv",
                "Preparative Purification India",
                "Advion Interchim Scientific",
                "Inkarp Preparative Purification distributor"
            ],
            altText: "Puriflash Preparative Purification Systems by Advion Interchim Scientific",
            internalLinks: ["preperative-purification", "advion-products"],
            externalLinks: ["https://www.advion-interchim.com/"]
        }
    },

    "peripheral-detection-devices": {
        models: [
            { heading: "" },
            {
                name: "Mass spectrometer: puriFlash® MS",
                slug: "puriflash-ms",
                image: PuriFlashMS2// replace with actual image import
            }
        ],
        meta: {
            title: "Peripheral Detection Devices | Advion Interchim Scientific | Inkarp India",
            description: "Explore peripheral detection devices from Advion Interchim Scientific, including the puriFlash® MS mass spectrometer, designed for high-performance detection in purification workflows. Distributed and serviced by Inkarp Instruments in India.",
            keywords: [
                "puriFlash MS",
                "Mass spectrometer Advion",
                "Peripheral Detection Devices",
                "Advion Interchim Scientific",
                "Inkarp detection devices distributor",
                "Lab mass spectrometry India"
            ],
            altText: "Peripheral Detection Devices by Advion Interchim Scientific",
            internalLinks: ["peripheral-detection-devices", "advion-products"],
            externalLinks: ["https://www.advion-interchim.com/"]
        }
    }






}