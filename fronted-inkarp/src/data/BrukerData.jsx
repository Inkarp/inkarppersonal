import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useParams, Link, useNavigate } from "react-router-dom";

import Heidolph from '/src/assets/PrincipalLogos/RowOne/Heidolph.svg';
import Polyscience from "/src/assets/PrincipalLogos/RowOne/Polyscience.png";
import Radleys from "/src/assets/PrincipalLogos/RowOne/radley.svg";
import Rotzmeier from "/src/assets/PrincipalLogos/RowOne/Rotzmeier.gif";
import ThalesNano from "/src/assets/PrincipalLogos/RowOne/ThalesNano.jpg";
import Bruker from "/src/assets/PrincipalLogos/RowSeven/Bruker.svg";

// Placeholder product images – replace with actual images
import AtrLibrary from "/images/products/Bruker/atr-library.jpeg";
import BannerAlpha from "/images/products/Bruker/banner-alpha.png";
import BannerFtNir from "/images/products/Bruker/banner-ft-nir.png";
import BannerFtirFtNir from "/images/products/Bruker/banner-ftir-ft-nir.png";
import BravoHandheld from "/images/products/Bruker/BRAVO-handheld.jpeg";
import DrugPille from "/images/products/Bruker/drug-pille.jpeg";
import HtsXtBanner from "/images/products/Bruker/hts-xt-banner.png";
import HyperionFtirMicroscope from "/images/products/Bruker/hyperion-FTIR-microscope.jpeg";
import InvenioFtirSpectrometer from "/images/products/Bruker/invenio-ft-ir-spectrometer.png";
import LumosMicroscope from "/images/products/Bruker/lumous-microscope.jpeg";
import MatrixFiiBannerBruker from "/images/products/Bruker/matrix-f-ii-banner-bruker.png";
import MobileIriiBannerAward from "/images/products/Bruker/mobile-ir-ii-banner-award.png";
import MpaIiAnalyzer from "/images/products/Bruker/mpa-ii-multi-purpose-analyzer.png";
import MultiRAMFTRamanSpectrometer from "/images/products/Bruker/MultiRAM-FT-Raman-Spectrometer.jpeg";
import SenterraIiRamanMicroscope from "/images/products/Bruker/senterra-ii-raman-microscope.png";
import TangoFtNirSpectrometer from "/images/products/Bruker/tango-ft-nir-spectrometer.png";
import TgFtirThermogravimetricAnalysis from "/images/products/Bruker/tg-ftir-thermogravimetric-analysis.png";
import VertexResearchFtirSpectrometer from "/images/products/Bruker/vertex-research-ft-ir-spectrometer.png";




export const BrukerData = {
    "ftir-spectrometer": {
        models: [
            { heading: "FT-IR Spectrometer Models" },
            {
                name: "MOBILE-IR II FT-IR Spectrometer",
                slug: "mobile-ir-ii-ft-ir-spectrometer",
                image: MobileIriiBannerAward,
            },
            {
                name: "HTS-XT FTIR Microplate Reader",
                slug: "hts-xt-ftir-microplate-reader",
                image: HtsXtBanner,
            },
            {
                name: "Bruker FM: MIR-FIR/THz Spectroscopy in One Step",
                slug: "bruker-fm-mir-fir-thz-spectroscopy",
                image: AtrLibrary,
            },
            {
                name: "Drug Checking and Harm Reduction",
                slug: "drug-checking-and-harm-reduction",
                image: DrugPille,
            },
            {
                name: "ALPHA II Compact FT-IR Spectrometer",
                slug: "alpha-ii-compact-ft-ir-spectrometer",
                image: BannerAlpha,
            },
        ],
        meta: {
            title: "Best FT-IR Spectrometers – Bruker FTIR Product Distributor and Service Provider in India | Inkarp",
            description: "Explore Bruker's high-performance FT-IR Spectrometers, including MOBILE-IR II, ALPHA II, and HTS-XT for advanced spectroscopy applications. Distributed by Inkarp – India's trusted scientific partner.",
            keywords: [
                "FT-IR Spectrometer",
                "Bruker FT-IR in India",
                "FTIR for drug checking",
                "HTS-XT Microplate FTIR",
                "Best FTIR Spectrometer in India",
                "Bruker Alpha II",
                "MOBILE-IR II",
                "Bruker FM Spectroscopy",
                "THz FTIR Bruker",
                "Inkarp Bruker FTIR Distributor"
            ],
            altText: "Bruker FTIR Spectrometers in India",
            internalLinks: ["FTIR product detail pages"],
            externalLinks: ["https://www.bruker.com/"]
        },
    },
    "ftir-research-spectrometer": {
        models: [
            { heading: "FT-IR Spectrometer Models" },
            {
                name: "INVENIO® FT-IR Spectrometers",
                slug: "invenio-ft-ir-spectrometer",
                image: InvenioFtirSpectrometer, // make sure to import correctly
            },
            {
                name: "VERTEX 80/80v FT-IR Spectrometers",
                slug: "vertex-80-80v-ft-ir-spectrometer",
                image: VertexResearchFtirSpectrometer, // make sure to import correctly
            },
            {
                name: "TG-FTIR Thermogravimetric Analysis",
                slug: "tg-ftir-thermogravimetric-analysis",
                image: TgFtirThermogravimetricAnalysis, // make sure to import correctly
            },

        ],
        meta: {
            title: "Best FT-IR Spectrometers – Bruker FTIR Product Distributor and Service Provider in India | Inkarp",
            description: "Explore Bruker's high-performance FT-IR Spectrometers, including INVENIO, VERTEX 80/80v, and TG-FTIR for advanced spectroscopy applications. Distributed by Inkarp – India's trusted scientific partner.",
            keywords: [
                "FT-IR Spectrometer",
                "Bruker FT-IR in India",
                "FTIR for research",
                "INVENIO FT-IR Spectrometer",
                "VERTEX 80 FT-IR India",
                "TG-FTIR Thermogravimetric",
                "Best FTIR Spectrometer in India",
                "HTS-XT Microplate FTIR",
                "Alpha II Bruker",
                "Inkarp Bruker FTIR Distributor"
            ],
            altText: "Bruker FTIR Spectrometers in India",
            internalLinks: ["FTIR product detail pages"],
            externalLinks: ["https://www.bruker.com/"]
        },
    },

    "ft-nir-spectrometer": {
        models: [
            { heading: "FT-NIR Spectrometer Models" },
            {
                name: "TANGO FT-NIR Spectrometer",
                slug: "tango-ft-nir-spectrometer",
                image: TangoFtNirSpectrometer,
            },
            {
                name: "MPA III FT-NIR Spectrometer",
                slug: "mpa-iii-ft-nir-spectrometer",
                image: MpaIiAnalyzer, // Replace with actual MPA III image if available
            }
        ],
        meta: {
            title: "Bruker FT-NIR Spectrometers – TANGO & MPA III | Inkarp Instruments India",
            description:
                "Explore Bruker’s TANGO and MPA III FT-NIR Spectrometers for high-precision near-infrared analysis. Distributed by Inkarp Instruments – trusted FT-NIR partner in India with full technical and service support.",
            keywords: [
                "FT-NIR Spectrometer India",
                "TANGO FT-NIR Bruker",
                "MPA III Bruker FT-NIR",
                "Near Infrared Spectroscopy India",
                "Bruker FT-NIR Distributor India",
                "TANGO Spectrometer Features",
                "MPA III Analytical Solutions",
                "Food Pharma Feed FT-NIR",
                "FTNIR Service Support India",
                "Inkarp Bruker FT-NIR Instruments"
            ],
            altText: "Bruker FT-NIR Spectrometers in India",
            internalLinks: ["FT-NIR product detail pages"],
            externalLinks: ["https://www.bruker.com/"]
        },
    },

    "raman-spectrometer": {
        models: [
            { heading: "Raman Spectrometer Models" },
            {
                name: "BRAVO Handheld Raman Spectrometer",
                slug: "bravo-handheld-raman-spectrometer",
                image: BravoHandheld // Replace with actual import
            },
            {
                name: "MultiRAM FT-Raman Spectrometer",
                slug: "multiram-ft-raman-spectrometer",
                image: MultiRAMFTRamanSpectrometer // Replace with actual import
            }
        ],
        meta: {
            title: "Bruker Raman Spectrometers – BRAVO & MultiRAM | Inkarp Instruments India",
            description:
                "Discover BRAVO Handheld and MultiRAM FT-Raman Spectrometers by Bruker. Trusted Raman solutions from Inkarp Instruments – authorized distributor and service provider across India.",
            keywords: [
                "Raman Spectrometer India",
                "Bruker Raman Spectrometer",
                "BRAVO Handheld Raman",
                "MultiRAM FT-Raman",
                "Portable Raman Analyzer",
                "FT-Raman Spectroscopy",
                "Pharma Raman Analysis",
                "Inkarp Bruker Raman Dealer",
                "Bruker Spectroscopy India",
                "Raman Service Support India"
            ],
            altText: "Bruker Raman Spectrometers India",
            internalLinks: ["Raman product pages", "FT-Raman vs Handheld Raman"],
            externalLinks: ["https://www.bruker.com/"]
        }
    },

    "ftir-microscopes": {
        models: [
            { heading: "FT-IR Microscope Models" },
            {
                name: "Hyperion FT-IR Microscope",
                slug: "hyperion-ft-ir-microscope",
                image: HyperionFtirMicroscope // Replace with correct image import
            },
            {
                name: "LUMOS II - FT-IR Microscope",
                slug: "lumos-ii-ft-ir-microscope",
                image: LumosMicroscope// Replace with correct image import
            }
        ],
        meta: {
            title: "Bruker FT-IR Microscopes – Hyperion & LUMOS II | Inkarp Instruments India",
            description:
                "Explore Bruker’s FT-IR Microscope range including Hyperion and LUMOS II for advanced infrared microanalysis. Inkarp Instruments – your trusted distributor and service provider in India.",
            keywords: [
                "FT-IR Microscope",
                "Bruker FT-IR India",
                "LUMOS II FT-IR Microscope",
                "Hyperion FTIR Microscope",
                "Infrared Microscopy Bruker",
                "FTIR Mapping Microscope",
                "Microscopic IR Spectroscopy",
                "Bruker Hyperion Microscope India",
                "Inkarp Bruker Distributor",
                "FTIR Service Provider India"
            ],
            altText: "Bruker FT-IR Microscopes India",
            internalLinks: ["FTIR microscope product pages", "Microscopic IR analysis"],
            externalLinks: ["https://www.bruker.com/"]
        }
    },

    "process-monitoring": {
        models: [
            { heading: "FT-NIR / FT-IR Process Spectrometer Models" },
            {
                name: "MATRIX-F II FT-NIR Process Spectrometer",
                slug: "matrix-f-ii-ft-nir-process-spectrometer",
                image: MatrixFiiBannerBruker // Replace with correct image import if different
            },
            {
                name: "MATRIX-MF FT-IR Process Reaction Monitoring",
                slug: "matrix-mf-ft-ir-process-reaction-monitoring",
                image: BannerFtirFtNir
            },
            {
                name: "BEAM - Process FT-NIR Spectrometer",
                slug: "beam-process-ft-nir-spectrometer",
                image: BannerFtNir
            }
        ],
        meta: {
            title: "Bruker Process Monitoring FT-NIR & FT-IR Spectrometers | Inkarp Instruments India",
            description:
                "Explore Bruker’s MATRIX-F II, MATRIX-MF, and BEAM Process Spectrometers for real-time FT-NIR and FT-IR monitoring. Distributed and supported across India by Inkarp Instruments.",
            keywords: [
                "FT-NIR Process Spectrometer",
                "FT-IR Process Monitoring",
                "Bruker MATRIX-F II India",
                "MATRIX-MF FT-IR Analyzer",
                "BEAM FT-NIR Spectrometer",
                "Bruker Process Analytics India",
                "Online Spectroscopy Systems",
                "Real-time Reaction Monitoring",
                "FT-NIR for Pharma Industry",
                "Inkarp Bruker Distributor India"
            ],
            altText: "Bruker Process Monitoring Spectrometers India",
            internalLinks: ["Real-time spectroscopy", "Process FT-NIR vs FT-IR"],
            externalLinks: ["https://www.bruker.com/"]
        }
    },

    "raman-microscopes": {
        models: [
            { heading: "Raman Microscope Models" },
            {
                name: "SENTERRA II Raman Microscope",
                slug: "senterra-ii-raman-microscope",
                image: SenterraIiRamanMicroscope // Already available in your imports
            }
        ],
        meta: {
            title: "Bruker SENTERRA II Raman Microscope | Inkarp Instruments India",
            description:
                "Explore the Bruker SENTERRA II Raman Microscope for fast, precise Raman spectroscopy and microscopic chemical analysis. Inkarp Instruments – authorized distributor and service provider in India.",
            keywords: [
                "SENTERRA II Raman Microscope",
                "Bruker Raman Microscope India",
                "Microscopic Raman Spectroscopy",
                "SENTERRA II Spectroscopy",
                "Raman Imaging India",
                "Bruker SENTERRA Microscope",
                "Raman Microscope Distributor India",
                "Confocal Raman Microscope",
                "Inkarp Raman Service Support",
                "Raman Mapping Instrument"
            ],
            altText: "Bruker SENTERRA II Raman Microscope India",
            internalLinks: ["SENTERRA II product page", "Raman Microscopy Overview"],
            externalLinks: ["https://www.bruker.com/"]
        }
    }
}