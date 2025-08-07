import React, { useState } from "react";
// Logos & Images
import Bruker from "/src/assets/PrincipalLogos/RowSeven/Bruker.svg";
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


import Banner1 from "/images/products/Banner/Banner1.jpg";
import Banner2 from "/images/products/Banner/Banner2.jpg";
import Banner3 from "/images/products/Banner/Banner3.jpg";
import { BanknoteArrowUp } from "lucide-react";

export const PolyscienceModels = {
    "mobile-ir-ii-ft-ir-spectrometer": {
        id: "mobile-ir-ii-ft-ir-spectrometer",
        name: "MOBILE-IR II FT-IR Spectrometer",
        image: MobileIriiBannerAward,
        logo: Bruker,
        bannerImg: Banner1,
        altText: "MOBILE-IR II FT-IR Spectrometer",
        videoId: "",

        meta: {
            title: "MOBILE-IR II FT-IR Spectrometer Distributor and Service Provider in India | Bruker | Inkarp",
            description:
                "Discover the MOBILE-IR II FT-IR Spectrometer by Bruker – a rugged, portable spectrometer delivering lab-grade performance in the field. Ideal for first responders, environmental testing, and industrial QC. Distributed by Inkarp Instruments with nationwide service and support.",
            keywords: [
                "MOBILE-IR II FT-IR Spectrometer",
                "Bruker FTIR Distributor India",
                "Portable FTIR for field use",
                "Inkarp Bruker MOBILE-IR",
                "Hazmat field spectroscopy",
                "Environmental FTIR Bruker",
                "Handheld FTIR analyzer India",
                "TE-MCT Detector Spectrometer",
                "Mobile spectroscopy for QC",
                "Rugged FTIR system Bruker"
            ],
            altText: "MOBILE-IR II FT-IR Spectrometer Distributor in India",
            internalLinks: ["Internal Product Pages Links"],
            externalLinks: ["https://www.bruker.com/"]
        },

        description: `The MOBILE-IR II by Bruker is a next-generation portable FT-IR spectrometer that brings true laboratory performance into the field. Built for mobility without compromising on spectral quality or durability, this compact system is engineered for rapid, high-quality analysis in challenging environments—making it ideal for on-the-go professionals in industrial, environmental, and security applications. We are your trusted MOBILE-IR II FT-IR Spectrometer Distributor and Service Provider in India.`,

        features: [
            {
                name: "Cryogen-free TE-MCT Detector",
                description:
                    "Faster scans and improved sensitivity compared to traditional DTGS detectors. Boosts performance and reduces analysis time in critical applications.",
            },
            {
                name: "Rugged IP65-Rated Design",
                description:
                    "Engineered for harsh environments with vibration-damping support and a rugged build to withstand field conditions reliably.",
            },
            {
                name: "Heatable ATR Crystal",
                description:
                    "Ideal for thermal studies and liquid evaporation. Ensures optimal performance in temperature-sensitive sample analysis.",
            },
            {
                name: "Full-Day Battery Operation",
                description:
                    "Equipped with a high-capacity internal battery that supports continuous, off-grid operation in remote locations.",
            },
            {
                name: "Protective Carry Case (IP67)",
                description:
                    "Includes a durable trolley case with wheels to ensure safe and easy transport in field deployments.",
            },
            {
                name: "RockSolid™ Interferometer",
                description:
                    "Industry-proven interferometer design offering over 10 years of stable performance and durability.",
            },
            {
                name: "CenterGlow™ Source & Long-Life Laser",
                description:
                    "Guarantees consistent, long-term use with laser and IR source lifespans exceeding 10 years.",
            },
            {
                name: "OPUS TOUCH Software",
                description:
                    "Intuitive touchscreen-enabled software for fast, easy operation—perfect even for beginners with minimal training.",
            },
        ],

        advantages: [
            {
                name: "Lab Performance in the Field",
                description:
                    "Delivers precise and reliable measurements with the same accuracy expected in laboratory settings, even in rugged outdoor environments.",
            },
            {
                name: "Flexible Sampling Options",
                description:
                    "Use with heatable ATR or optional flat ATR to accommodate solids, liquids, and thermal analysis on the go.",
            },
            {
                name: "Multiple Connectivity Options",
                description:
                    "Connect via USB, Ethernet, Wi-Fi, or cloud-based systems. Integrates with LIMS/MES platforms using MS SQL.",
            },
            {
                name: "Rugged Tablet Interface",
                description:
                    "Includes IP65-rated tablet PC with durable casing, readable under sunlight, and operable with gloves.",
            },
            {
                name: "Real-World Readiness",
                description:
                    "Power level indicators, heavy-duty case, and fast setup make it ideal for emergency responders and QC teams.",
            },
            {
                name: "Versatile Field Applications",
                description:
                    "Perfect for chemical ID, forensic drug analysis, raw material inspection, and environmental monitoring.",
            },
            {
                name: "Trusted Support from Inkarp",
                description:
                    "Inkarp Instruments provides complete support—from demo to installation and training—backed by expert service engineers nationwide.",
            },
        ],
    },
}