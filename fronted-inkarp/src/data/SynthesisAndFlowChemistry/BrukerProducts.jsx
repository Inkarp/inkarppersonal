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

export const BrukerProducts = {
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

    "hts-xt-ftir-microplate-reader": {
        id: "hts-xt-ftir-microplate-reader",
        name: "HTS-XT FTIR Microplate Reader",
        image: HtsXtBanner, // replace with actual import
        logo: Bruker, // replace with actual import
        bannerImg: Banner1, // replace with actual import
        altText: "HTS-XT FTIR Microplate Reader",
        videoId: "",

        meta: {
            title: "HTS-XT FTIR Microplate Reader Distributor and Service Provider in India | Bruker | Inkarp",
            description: "Explore the Bruker HTS-XT FTIR Microplate Reader – a compact, automated infrared-based solution for high-throughput screening of liquid and solid samples. Distributed and supported by Inkarp Instruments across India.",
            keywords: [
                "HTS-XT FTIR Microplate Reader",
                "Bruker HTS-XT Distributor India",
                "High-throughput FTIR Analysis",
                "FTIR Microplate Reader India",
                "Infrared Microplate Screening",
                "Inkarp Bruker HTS-XT",
                "Mid-IR Microplate Reader",
                "FTIR Screening Solid Liquid Samples",
                "Automated Spectral Analysis",
                "FTIR Spectroscopy India"
            ],
            altText: "HTS-XT FTIR Microplate Reader Distributor in India",
            internalLinks: ["Internal Product Pages Links"],
            externalLinks: ["https://www.bruker.com/"]
        },

        description: `The HTS-XT FTIR Microplate Reader by Bruker is a compact and high-performance solution for infrared-based high-throughput screening. Designed for fast and automated analysis, the HTS-XT is compatible with standardized 96-, 384-, and 1536-well microplates. This versatile module supports both reflection and transmission modes, making it ideal for rapid screening of solid and liquid samples in a wide range of research and industrial applications. We are a trusted HTS-XT FTIR Microplate Reader Distributor and Service Provider in India.`,

        features: [
            {
                name: "Supports Multiple Microplate Formats",
                description: "Compatible with 96-, 384-, and 1536-well microplates, ensuring flexibility for a wide range of high-throughput applications.",
            },
            {
                name: "Wide Spectral Range Coverage",
                description: "Enables mid-IR, near-IR, and visible (VIS) spectral measurements for thorough sample analysis.",
            },
            {
                name: "Dual Measurement Modes",
                description: "Equipped to perform both transmission and reflection measurements for solid and liquid samples.",
            },
            {
                name: "Motorized Drawer System",
                description: "Automated plate insertion and scanning for efficient and unattended sample analysis.",
            },
            {
                name: "Reusable and Easy-Clean Plates",
                description: "Microplates are designed for repeated use and simple cleaning, reducing operational costs.",
            },
            {
                name: "Precise Sample Volume Compatibility",
                description: "Accommodates 1–20 µL samples, ideal for resource-sensitive or trace-level applications.",
            },
        ],

        advantages: [
            {
                name: "Automated Workflow with OPUS/LAB",
                description: "Simplifies operation with intuitive automation for spectral acquisition, evaluation, and export.",
            },
            {
                name: "Advanced Quantification Algorithms",
                description: "Supports PLS, PCA, and ANN for multicomponent analysis and pattern recognition.",
            },
            {
                name: "Robust Data Management",
                description: "All settings and results are logged and can be integrated into LIMS and external systems.",
            },
            {
                name: "Marker-Free Measurement",
                description: "Unlike conventional methods, captures complete spectral information without needing markers or dyes.",
            },
            {
                name: "Versatile Research Applications",
                description: "Used in soil analysis, polymer kinetics, cell line screening, and gemstone identification.",
            },
            {
                name: "Inkarp India Support",
                description: "Comprehensive support from consultation to training, delivered by experienced engineers.",
            },
        ]
    },

    "bruker-fm-mir-fir-thz-spectroscopy": {
        id: "bruker-fm-mir-fir-thz-spectroscopy",
        name: "Bruker FM: MIR-FIR/THz Spectroscopy",
        image: AtrLibrary, // replace with correct import
        logo: Bruker,
        bannerImg: Banner3, // replace with correct import
        altText: "Bruker FM MIR-FIR/THz Spectroscopy System",
        videoId: "",

        meta: {
            title: "Bruker FM MIR-FIR/THz Spectroscopy in One Step | Distributor and Service Provider in India | Inkarp",
            description: "Experience full-spectrum FT-IR analysis from MIR to FIR/THz with Bruker FM. One scan, no optical changes. Distributed and supported by Inkarp Instruments across India.",
            keywords: [
                "Bruker FM Spectroscopy",
                "MIR FIR THz FTIR Analyzer",
                "Full Spectrum FTIR in One Scan",
                "VERTEX 70v Spectroscopy India",
                "INVENIO FTIR System",
                "FTIR Spectrometer with MIR FIR THz",
                "FTIR Inkarp Distributor",
                "Mid IR to Terahertz Spectroscopy",
                "FTIR Spectroscopy India",
                "One Step FTIR Analysis Bruker"
            ],
            altText: "Bruker FM MIR-FIR/THz Spectroscopy in One Step",
            internalLinks: ["Internal Product Pages Links"],
            externalLinks: ["https://www.bruker.com/"]
        },

        description: `The Bruker FM technology is a revolutionary solution for FT-IR spectroscopy, enabling researchers and scientists to capture mid-IR (MIR) to far-IR (FIR)/terahertz (THz) spectral data in a single measurement—without the need for manual optical changes or interruptions in purge or vacuum. Designed for the VERTEX 70v and INVENIO research-grade FT-IR spectrometers, this innovation eliminates the traditional requirement of switching multiple beamsplitters or detectors. We are your trusted Bruker FM: MIR-FIR/THz Spectroscopy in One Step Distributor and Service Provider in India.`,

        features: [
            {
                name: "One Scan for Full Spectrum (MIR–FIR/THz)",
                description: "Captures mid-IR to terahertz data in a single uninterrupted measurement—saving time and preserving optical integrity.",
            },
            {
                name: "Wide Spectral Range",
                description: "6000 cm⁻¹ to 50 cm⁻¹ (VERTEX 70v) and 6000 cm⁻¹ to 80 cm⁻¹ (INVENIO), enabling full material characterization.",
            },
            {
                name: "Universal Measurement Modes",
                description: "Performs transmission, reflection, and ATR analysis across the entire infrared spectrum.",
            },
            {
                name: "No Optical Reconfiguration",
                description: "No need to swap beamsplitters or detectors. Eliminates venting and purge interruptions.",
            },
            {
                name: "Humidity-Resistant Optics",
                description: "Ideal for long-term, stable measurements, even in non-ideal lab conditions.",
            },
            {
                name: "Compatible with All Sample Types",
                description: "Works with solids, powders, and liquids without compromising spectral accuracy.",
            }
        ],

        advantages: [
            {
                name: "Time-Efficient Workflow",
                description: "Reduces setup time and eliminates the need for manual changes between spectral regions.",
            },
            {
                name: "Ideal for Polymer & Pigment Analysis",
                description: "Capture both organic matrix (MIR) and inorganic filler (FIR/THz) details in one scan.",
            },
            {
                name: "Pharmaceutical Polymorph Screening",
                description: "Quickly differentiate polymorphic forms using both fundamental vibrations (MIR) and lattice modes (FIR).",
            },
            {
                name: "Advanced Mineral & Geological Analysis",
                description: "Detect FIR-active modes in inorganic materials like calcium carbonate using Platinum ATR.",
            },
            {
                name: "Bruker MIR-FIR/THz ATR Library",
                description: "Access the first full-range ATR spectral library covering 4000–30 cm⁻¹ for unmatched material ID.",
            },
            {
                name: "Trusted Support from Inkarp",
                description: "Inkarp provides end-to-end solutions—from system selection and training to post-sale service.",
            }
        ]
    },

    "drug-checking-and-harm-reduction": {
        id: "drug-checking-and-harm-reduction",
        name: "Drug Checking and Harm Reduction",
        image: DrugPille, // replace with actual import showing Alpha II and MOBILE-IR II
        logo: Bruker,
        bannerImg: Banner3, // replace with actual import
        altText: "FT-IR for Drug Checking and Harm Reduction",
        videoId: "",

        meta: {
            title: "Drug Checking and Harm Reduction with FT-IR Spectroscopy | Bruker | Inkarp",
            description: "Explore Bruker's ALPHA II and MOBILE-IR II FT-IR spectrometers for drug checking and harm reduction. Ensure public safety with reliable, on-site chemical analysis. Distributed by Inkarp Instruments across India.",
            keywords: [
                "Drug Checking FTIR",
                "Harm Reduction Analyzer",
                "Bruker ALPHA II for Drug Testing",
                "MOBILE-IR II Portable FTIR",
                "FTIR Drug Analyzer India",
                "Inkarp Bruker Drug Checking",
                "Public Safety Drug Screening",
                "On-site Drug Analyzer India",
                "Mobile Harm Reduction FTIR",
                "Recreational Drug Analysis India"
            ],
            altText: "FT-IR for Drug Checking and Harm Reduction",
            internalLinks: ["Internal Product Pages Links"],
            externalLinks: ["https://www.bruker.com/"]
        },

        description: `FT-IR (Fourier-Transform Infrared) Spectroscopy is a powerful, non-destructive technique used for the rapid identification of chemical substances, making it a valuable tool in the field of drug checking. By analyzing the composition of recreational drugs, FT-IR instruments help identify harmful adulterants and impurities—providing users with crucial safety information. Whether used in fixed drug counseling centers or mobile outreach units at music festivals, FT-IR spectroscopy enables quick and accurate substance identification in real-world settings. This proven technology plays a vital role in Drug Checking and Harm Reduction.`,

        features: [
            {
                name: "ALPHA II FT-IR – Fixed Site Solution",
                description: "Compact, lab-grade spectrometer ideal for drug counseling centers, public health labs, pharmacies, and clinics. Offers fast scans, minimal maintenance, and reliable analysis for continuous use.",
            },
            {
                name: "MOBILE-IR II – Field-Ready Mobile Analyzer",
                description: "Rugged and portable for on-site drug testing at festivals, events, or emergency situations. Includes battery operation, IP65/IP67 protection, and intuitive OPUS TOUCH software.",
            },
            {
                name: "Non-Destructive Analysis",
                description: "Preserves samples during testing while still providing accurate, high-resolution results.",
            },
            {
                name: "Immediate Results",
                description: "Delivers substance identification in less than one minute, enabling real-time decision-making.",
            },
            {
                name: "Minimal Sample Prep",
                description: "Requires very little preparation, making it efficient and easy to deploy in the field or lab.",
            },
            {
                name: "Broad Substance Detection",
                description: "Identifies known and unknown compounds—critical for detecting adulterants, contaminants, or dangerous substances.",
            }
        ],

        advantages: [
            {
                name: "Supports Public Health Initiatives",
                description: "Plays a vital role in community education and harm prevention programs by providing accessible chemical screening tools.",
            },
            {
                name: "Easy to Use for Non-Experts",
                description: "OPUS TOUCH interface allows even non-specialists to operate the system with ease during outreach programs.",
            },
            {
                name: "Cryogen-Free Detector Design",
                description: "Advanced TE-MCT detector in MOBILE-IR II ensures sensitivity and speed without the need for liquid nitrogen.",
            },
            {
                name: "ATR Heatable Crystal",
                description: "Improves measurement of difficult or viscous substances by maintaining optimal contact with the sample.",
            },
            {
                name: "Trusted in Real-World Conditions",
                description: "Successfully deployed across Europe and now increasingly adopted by Indian public health programs for substance checking.",
            },
            {
                name: "Complete Support from Inkarp",
                description: "From device selection to training and long-term service, Inkarp ensures seamless operation across your harm reduction programs.",
            }
        ]
    },

    "alpha-ii-compact-ft-ir-spectrometer": {
        id: "alpha-ii-compact-ft-ir-spectrometer",
        name: "ALPHA II Compact FT-IR Spectrometer",
        image: BannerAlpha, // Replace with actual image of ALPHA II
        logo: Bruker,
        bannerImg: Banner3, // Replace with correct banner image
        altText: "ALPHA II Compact FT-IR Spectrometer",
        videoId: "",

        meta: {
            title: "ALPHA II Compact FT-IR Spectrometer | Bruker | Inkarp",
            description: "Experience compact and powerful FT-IR analysis with Bruker ALPHA II. Versatile, robust, and user-friendly—ideal for all industries. Distributed and supported by Inkarp Instruments across India.",
            keywords: [
                "ALPHA II FTIR",
                "Compact FTIR Spectrometer",
                "Bruker ALPHA II Distributor India",
                "FTIR Spectrometer for Drug Testing",
                "RockSolid Interferometer",
                "FTIR for Quantification and QC",
                "Bruker FTIR India",
                "Portable FTIR Spectroscopy",
                "OPUS TOUCH Interface",
                "ALPHA II Applications"
            ],
            altText: "ALPHA II Compact FT-IR Spectrometer",
            internalLinks: ["Internal Product Pages Links"],
            externalLinks: ["https://www.bruker.com/"]
        },

        description: `The ALPHA II stands out for its versatility and performance. It is designed to handle all standard FT-IR spectroscopy tasks across industries—be it quantification, identification of unknown substances, raw material authentication, or basic research. Its compact build and robust features make it a go-to choice for both seasoned professionals and first-time users. The ALPHA II Compact FT-IR Spectrometer by Bruker is designed for effortless chemical analysis—ideal for quality control, quantification, and raw material verification. Its compact design, intuitive interface, and advanced performance features make it suitable for every industry and application, from routine analysis to advanced R&D.`,

        features: [
            {
                name: "Ultra-Compact Design",
                description: "Saves valuable lab space while maintaining high-performance FT-IR capabilities."
            },
            {
                name: "Universal Sample Compatibility",
                description: "Supports analysis of solids, liquids, and gases—making it adaptable to varied lab workflows."
            },
            {
                name: "RockSolid™ Interferometer",
                description: "Vibration-resistant, wear-free design with over 10 years of lifespan for consistent spectral accuracy."
            },
            {
                name: "CenterGlow™ Source",
                description: "Stable and long-lasting IR source with a 5+ year operational life for reduced downtime."
            },
            {
                name: "Long-Life Diode Laser",
                description: "Reliable performance with more than 10 years of continuous use expected."
            },
            {
                name: "User-Friendly Operation",
                description: "Intuitive OPUS or OPUS TOUCH software ensures minimal training time and high productivity."
            },
            {
                name: "Optional Touchscreen Integration",
                description: "Integrated touch PC for standalone use, or external PC support for advanced operation."
            },
            {
                name: "Humidity-Resistant Option",
                description: "Ideal for high-humidity environments where conventional FTIR systems may fail."
            }
        ],

        advantages: [
            {
                name: "Analyze All Sample Types",
                description: "Easily analyze powders, liquids, and gases using switchable sampling modules."
            },
            {
                name: "Space-Saving Footprint",
                description: "Designed to fit even in the most space-constrained lab environments."
            },
            {
                name: "Low Maintenance",
                description: "Built to minimize servicing needs with long-life optical components."
            },
            {
                name: "Ease of Training",
                description: "New users can begin using the system confidently with just minutes of instruction."
            },
            {
                name: "Energy Efficient",
                description: "Low power consumption enables sustainable lab operation."
            },
            {
                name: "Adaptable and Modular",
                description: "Supports future upgrades or new applications through QuickSnap™ module swapping."
            }
        ],

        applicationAreas: [
            "Polymers – Raw material verification, surface/coating analysis",
            "Industrial Manufacturing – Coatings, oils, surface cleanliness testing",
            "Quantitative Analysis – API, moisture, ammonia concentration analysis",
            "Hydrocarbons & Petrochemicals – Additive testing, degradation tracking",
            "Food & Beverage – Sugar, alcohol content, contaminant detection",
            "Pharmaceuticals – Raw material QC, regulatory-compliant validation",
            "Education – Rugged and easy for student training and teaching",
            "Forensics – Substance ID using spectral libraries like TICTAC",
            "Environmental – Microplastics, soil, water contaminant testing",
            "Art Restoration – Gemstones, antique artifacts, painting layer studies"
        ]
    },

    "invenio-ft-ir-spectrometer": {
        id: "invenio-ft-ir-spectrometer",
        name: "INVENIO® FT-IR Spectrometers",
        image: InvenioFtirSpectrometer, // Replace with actual INVENIO product image import
        logo: Bruker,
        bannerImg: Banner3, // Replace with correct INVENIO banner image import
        altText: "INVENIO® FT-IR Spectrometers",
        videoId: "",

        meta: {
            title: "INVENIO® FT-IR Spectrometers | Bruker | Inkarp Instruments India",
            description:
                "Explore the INVENIO® FT-IR Spectrometer by Bruker—designed for high-end research and routine analysis. Inkarp Instruments is your trusted distributor and service provider for Bruker INVENIO® FTIR systems in India.",
            keywords: [
                "INVENIO FTIR India",
                "Bruker INVENIO Distributor",
                "FTIR Spectrometer for R&D",
                "INVENIO Spectrometer Supplier India",
                "High-resolution FTIR Bruker",
                "INVENIO RockSolid Interferometer",
                "INVENIO OPUS Software",
                "FTIR with Multi Detector System",
                "INVENIO Time-Resolved Spectroscopy",
                "Inkarp Bruker India"
            ],
            altText: "INVENIO® FT-IR Spectrometers",
            internalLinks: ["FTIR Instruments Product Pages"],
            externalLinks: ["https://www.bruker.com/"]
        },

        description: `The INVENIO® FT-IR Spectrometer from Bruker is an advanced analytical instrument engineered to meet the diverse needs of modern laboratories. With its state-of-the-art design, high spectral resolution, and extensive detector options, INVENIO® is ideal for applications ranging from routine quality control to sophisticated research and development. Whether you're working in pharmaceuticals, chemicals, materials science, or environmental analysis, INVENIO® offers unmatched performance, flexibility, and ease of use — making it the ideal choice for laboratories that demand reliability and innovation. We are a leading INVENIO® FT-IR Spectrometers Distributor and Service Provider in India.`,

        features: [
            {
                name: "Extended Spectral Range",
                description: "Covers FIR to UV/VIS for broad application coverage"
            },
            {
                name: "Multi-Detector Configuration",
                description: "Supports up to 7 software-controlled detectors"
            },
            {
                name: "Ultra-High Resolution",
                description: "Delivers spectral resolution down to < 0.085 cm⁻¹"
            },
            {
                name: "Time-Resolved Spectroscopy",
                description: "Enables nanosecond-scale measurements for dynamic processes"
            },
            {
                name: "Dual Sample Compartments",
                description: "Perform two parallel analyses simultaneously"
            },
            {
                name: "Simultaneous FIR/MIR Capability",
                description: "Increase efficiency with combined measurements"
            },
            {
                name: "Quick-Swap Accessory Mount",
                description: "Compatible with a wide range of accessories"
            },
            {
                name: "Intuitive Software Interface",
                description: "Guided workflows for user-friendly operation"
            }
        ],

        advantages: [
            {
                name: "Reliable. Efficient. Productive.",
                description: "INVENIO® is a robust, 24/7 spectroscopy workstation tailored for high-throughput labs. With advanced features like the RockSolid™ interferometer, you get vibration and temperature-resistant performance—ensuring consistent and trustworthy results."
            },
            {
                name: "Double the Productivity with Transit™",
                description: "The Transit™ channel is an independent second measurement compartment, allowing you to prepare and run two setups in parallel—whether for ATR or transmission analysis. This saves time and supports high-throughput demands without compromising on quality."
            },
            {
                name: "QuickLock Accessory Mount",
                description: "Effortlessly accommodates even large sampling accessories with a simple lock-and-release button."
            },
            {
                name: "Simultaneous FIR/MIR Measurements",
                description: "Analyze both mid- and far-infrared ranges without swapping components using Bruker FM technology."
            },
            {
                name: "High Performance Meets Flexibility",
                description: "Custom detector configurations, high signal-to-noise ratio, and field-upgradable design for future-ready research."
            },
            {
                name: "Broadest Spectral Range – Automatically",
                description: "The INTEGRAL™ interferometer includes an automated 3-position beam splitter changer, enabling fully automated single-click measurements across the full spectral range (28,000 cm⁻¹ to 15 cm⁻¹)."
            },
            {
                name: "Software That Makes Analysis Simple",
                description: "The OPUS software provides a self-explanatory and intuitive user interface, accessible to both beginners and seasoned professionals. Includes built-in libraries and guided workflow creation."
            },
            {
                name: "Built to Evolve with Your Needs",
                description: "The INVENIO® is fully customizable and field-upgradable. Expand capabilities, optimize workflows, and ensure long-term value with Inkarp Instruments’ expert support."
            }
        ]
    },
    "vertex-80-80v-ft-ir-spectrometer": {
        id: "vertex-80-80v-ft-ir-spectrometer",
        name: "VERTEX 80/80v FT-IR Spectrometers",
        image: VertexResearchFtirSpectrometer, // Replace with actual product image import
        logo: Bruker,
        bannerImg: Banner3, // Replace with correct banner image import
        altText: "VERTEX 80/80v FT-IR Spectrometers",
        videoId: "",

        meta: {
            title: "VERTEX 80/80v FT-IR Spectrometers | Bruker | Inkarp Instruments India",
            description: "Experience highest-resolution FT-IR analysis with Bruker VERTEX 80/80v. Vacuum optics, UltraScan™ interferometer, and modular flexibility make it ideal for advanced research. Distributed and supported in India by Inkarp Instruments.",
            keywords: [
                "VERTEX 80 FTIR India",
                "VERTEX 80v Vacuum Spectrometer",
                "UltraScan Interferometer",
                "High-Resolution FTIR Spectroscopy",
                "Bruker Research FTIR",
                "FTIR for Semiconductor Analysis",
                "Bruker VERTEX Distributor India",
                "THz FTIR Spectroscopy",
                "FTIR with Cryogenic Detectors",
                "FTIR Beamline Synchrotron"
            ],
            altText: "VERTEX 80/80v FT-IR Spectrometers",
            internalLinks: ["FTIR Instruments Product Pages"],
            externalLinks: ["https://www.bruker.com/"]
        },

        description: `The VERTEX 80 and VERTEX 80v FT-IR spectrometers from Bruker represent the highest standard in research-grade infrared spectroscopy. Equipped with the advanced UltraScan™ interferometer, these systems deliver PEAK spectral resolution and ultimate signal stability. The VERTEX 80v offers a vacuum-sealed optics bench, eliminating atmospheric interference to enable highly sensitive and demanding measurements including step-scan, rapid-scan, UV, and high-resolution spectroscopy.\n\nWe are your trusted VERTEX 80/80v FT-IR Spectrometers Distributor and Service Provider in India.`,

        features: [
            {
                name: "UltraScan™ Interferometer",
                description: "Achieves outstanding spectral resolution with linear air-bearing scanning"
            },
            {
                name: "Vacuum Optics (VERTEX 80v)",
                description: "Eliminates moisture and CO₂ interferences for ultra-sensitive measurements"
            },
            {
                name: "PEAK Stability & Sensitivity",
                description: "Ensures reliable data over long experiment durations"
            },
            {
                name: "Flexible Configuration",
                description: "Supports a wide variety of demanding applications, from THz to UV"
            },
            {
                name: "DigiTect™ Detector System",
                description: "Internal digitization at the detector eliminates external noise and allows easy detector exchange"
            },
            {
                name: "External Detector Ports",
                description: "Compatible with cryogenic detectors like bolometers and hot electron devices"
            },
            {
                name: "THz Access with Room Temp Detectors",
                description: "Access terahertz frequencies even with standard DTGS detectors and high-power Hg-arc source"
            }
        ],

        advantages: [
            {
                name: "Spectral Range Extension – From Far-IR to UV/VIS",
                description: "Seamlessly cover UV/VIS to far-IR/THz with automated beamsplitter switching and pre-aligned optics."
            },
            {
                name: "BMS-c Automation",
                description: "Switch up to four beamsplitters remotely without venting vacuum—saving time and preserving conditions."
            },
            {
                name: "Research-Grade Optical Resolution",
                description: "Offers resolution better than 0.06 cm⁻¹ for gas phase, semiconductor, and cryogenic applications."
            },
            {
                name: "Multi-Port Integration",
                description: "Five beam exits and two inputs support PMA, microscopes, fiber optics, synchrotron setups, and more."
            },
            {
                name: "Engineered for Maximum Versatility",
                description: "Detect ultra-weak spectral features down to 10⁻³ monolayers for nanoscience and materials R&D."
            },
            {
                name: "Cutting-Edge Optical Technologies",
                description: "Integrated support for PEAK™, BMS-c, UltraScan™, and cryogenic detector expansion."
            },
            {
                name: "Advanced Research Capabilities",
                description: "Supports step/rapid/interleaved TRS, FT-Raman, PM-IRRAS, VCD, PAS, and spectroelectrochemistry."
            },
            {
                name: "Inkarp Support Across India",
                description: "Complete consultation, installation, and post-sales technical support across all scientific sectors."
            }
        ]
    },

    "tg-ftir-thermogravimetric-analysis": {
        id: "tg-ftir-thermogravimetric-analysis",
        name: "TG-FTIR Thermogravimetric Analysis",
        image: TgFtirThermogravimetricAnalysis, // Replace with actual product image import
        logo: Bruker,
        bannerImg: Banner3, // Replace with correct banner image import
        altText: "TG-FTIR Thermogravimetric Analysis",
        videoId: "",

        meta: {
            title: "TG-FTIR Thermogravimetric Analysis | Bruker | Inkarp Instruments India",
            description: "TG-FTIR combines thermogravimetric analysis with FT-IR spectroscopy for simultaneous mass loss tracking and gas identification. Distributed and supported by Inkarp Instruments across India.",
            keywords: [
                "TG-FTIR India",
                "Thermogravimetric FTIR Analysis",
                "Bruker TG-FTIR Distributor",
                "PERSEUS Coupling FTIR",
                "FTIR Gas Analysis",
                "TG Coupled FTIR India",
                "FTIR Thermal Decomposition",
                "Bruker Thermo Analysis",
                "Evolved Gas Analysis India",
                "FTIR Polymer Testing"
            ],
            altText: "TG-FTIR Thermogravimetric Analysis",
            internalLinks: ["Thermal Analysis Instruments", "FTIR Solutions"],
            externalLinks: ["https://www.bruker.com/"]
        },

        description: `TG-FTIR (Thermogravimetric Analysis coupled with Fourier-Transform Infrared Spectroscopy) is a powerful hyphenated technique designed for advanced thermal characterization of both organic and inorganic materials—whether in solid or liquid form. This integrated system enables precise measurement of thermodynamic transitions, thermal stability, decomposition behavior, and chemical reactions across a wide temperature range.

We are your trusted TG-FTIR Thermogravimetric Analysis Distributor and Service Provider in India.

**Why Combine TG with FT-IR?**

While thermogravimetric analysis (TG) provides valuable quantitative insights into mass changes during thermal processes, it lacks the ability to identify the nature of the gases evolved. This limitation is overcome by coupling TG with FT-IR spectroscopy, a technique that excels at identifying gaseous decomposition products in real-time.

FT-IR spectroscopy works by analyzing the interaction of infrared radiation with molecular dipole vibrations. With the exception of homonuclear diatomic molecules and noble gases, every compound produces a unique infrared spectrum—making it ideal for compound-specific gas identification.

**Benefits of TG-FTIR Coupling**

- Simultaneous Quantification and Identification: Analyze mass loss events and immediately identify the released gases.
- Broad Temperature Capability: Reliable data across a wide thermal range.
- Real-Time Monitoring: Observe chemical changes as they occur during heating or cooling cycles.
- High Sensitivity and Resolution: Detect trace gases and subtle spectral changes.

**TG-FTIR Coupling Configurations**

Bruker provides flexible coupling solutions to integrate TG systems with FT-IR spectroscopy, including:

- **External Gas Cell Coupling**: Via transfer line for maximum FT-IR system adaptability and standalone operation.
- **Internal Gas Cell Coupling**: Utilizes the FT-IR sample chamber and transfer line for integrated measurements.
- **Direct PERSEUS® Coupling**: Offers a compact and highly efficient configuration without the need for transfer lines, ideal for streamlined workflows.

**TG-FTIR Coupling Options for Enhanced Flexibility**

Coupling Thermogravimetric Analysis (TG) with Fourier-Transform Infrared Spectroscopy (FT-IR) offers significant analytical advantages, and the configuration of the coupling system plays a vital role in optimizing performance. Bruker and NETZSCH offer multiple TG-FTIR coupling setups—external, internal, and PERSEUS®—to suit various analytical needs and laboratory setups.

**External Coupling – Flexible and High-Performance**
- Compatible with DLaTGS or MCT detectors
- Easy switching between TG-FTIR and standard FT-IR modes
- Ideal for labs requiring multi-mode flexibility

**Internal Coupling – Optimized Gas Detection**
- Longer path length enhances IR interaction
- Smaller cell volume increases analyte concentration
- Requires less sample quantity—ideal for limited material availability

**PERSEUS® Coupling – Compact and Integrated**
- Minimal footprint for space-limited labs
- Fast response time and easy operation
- No transfer lines – reduced gas loss and higher transfer efficiency

**Applications of TG-FTIR:**
- Polymer and Plastic Analysis: Decomposition profiling and additive identification
- Pharmaceuticals: Stability testing and volatile content detection
- Chemicals and Catalysts: Monitoring reaction pathways and residue analysis
- Environmental Testing: Identification of emissions and pollutants
- Materials Science: Studying thermal degradation and composite behavior

At Inkarp Instruments, we offer complete TG-FTIR solutions—from system selection and installation to application support and servicing. Partner with us for reliable performance, expert consultation, and dedicated service as a leading TG-FTIR Thermogravimetric Analysis Distributor and Service Provider in India.`,

        features: [
            {
                name: "Integrated TG and FT-IR Platform",
                description: "Combines thermal weight change analysis with evolved gas identification in a single workflow."
            },
            {
                name: "Multiple Coupling Configurations",
                description: "Choose between External, Internal, and PERSEUS® coupling based on your lab's space and workflow."
            },
            {
                name: "Real-Time Evolved Gas Monitoring",
                description: "Continuously detect and track gas evolution during thermal transitions."
            },
            {
                name: "Flexible Detector Options",
                description: "Supports both DLaTGS and MCT detectors depending on sensitivity needs."
            },
            {
                name: "FT-IR Gas Cell Sensitivity Optimization",
                description: "Adjust path length and cell volume to maximize signal and minimize sample use."
            },
            {
                name: "Seamless Operation with Bruker OPUS Software",
                description: "Streamlined data collection, synchronization, and spectral analysis."
            }
        ],

        advantages: [
            {
                name: "Compound-Specific Identification",
                description: "Each gas produces a unique IR spectrum—providing unambiguous chemical analysis."
            },
            {
                name: "Simultaneous TG & FT-IR Data",
                description: "Correlate mass loss with exact gas species in a single analysis run."
            },
            {
                name: "Minimal Sample Requirement",
                description: "Internal coupling enables high sensitivity with lower material usage."
            },
            {
                name: "High Analytical Throughput",
                description: "PERSEUS® configuration supports fast-switching high-throughput environments."
            },
            {
                name: "Transfer-Free Direct Coupling",
                description: "Eliminates transfer line complexity and gas loss in PERSEUS® setup."
            },
            {
                name: "Customizable Setup",
                description: "Adapt your TG-FTIR platform with upgradeable hardware and software modules."
            },
            {
                name: "Inkarp Service and Training",
                description: "Expert on-site support, installation, and method training across India."
            }
        ]
    },

    "tango-ft-nir-spectrometer": {
        id: "tg-ftir-thermogravimetric-analysis",
        name: "TG-FTIR Thermogravimetric Analysis",
        image: TgFtirThermogravimetricAnalysis, // Replace with actual product image import
        logo: Bruker,
        bannerImg: Banner3, // Replace with correct banner image import
        altText: "TG-FTIR Thermogravimetric Analysis",
        videoId: "",

        meta: {
            title: "TG-FTIR Thermogravimetric Analysis | Bruker | Inkarp Instruments India",
            description: "TG-FTIR combines thermogravimetric analysis with FT-IR spectroscopy for simultaneous mass loss tracking and gas identification. Distributed and supported by Inkarp Instruments across India.",
            keywords: [
                "TG-FTIR India",
                "Thermogravimetric FTIR Analysis",
                "Bruker TG-FTIR Distributor",
                "PERSEUS Coupling FTIR",
                "FTIR Gas Analysis",
                "TG Coupled FTIR India",
                "FTIR Thermal Decomposition",
                "Bruker Thermo Analysis",
                "Evolved Gas Analysis India",
                "FTIR Polymer Testing"
            ],
            altText: "TG-FTIR Thermogravimetric Analysis",
            internalLinks: ["Thermal Analysis Instruments", "FTIR Solutions"],
            externalLinks: ["https://www.bruker.com/"]
        },

        description: `TANGO FT-NIR Spectrometer
Distributor and Service Provider In India

The TANGO FT-NIR Spectrometer by Bruker is a powerful, compact, and user-friendly solution for routine analysis in industrial environments. Designed for speed, accuracy, and operational simplicity, TANGO provides fast and reliable results with minimal user training. With its intuitive touchscreen interface, low energy consumption, and robust housing, it delivers lab-quality performance in at-line and production settings—helping users enhance efficiency and reduce operating costs.

We are your trusted TANGO FT-NIR Spectrometer Distributor and Service Provider in India.

TANGO – Fast, Precise, and Easy-to-Use

Whether you're performing raw material inspection, in-process analysis, or final product verification, the TANGO simplifies your workflow with:

Touchscreen Operation: 12.2" interface available in over 17 languages  
Automatic Background Alignment: No user intervention required  
Compact Design: Ideal for labs with limited space  
Rugged Housing: Easy to clean, dust-resistant, and fit for industrial use  
Energy Efficient: Typical power consumption of just 40W  

Zero Prep, Zero Errors – Effortless Sample Handling

TANGO eliminates the need for chemicals, solvents, or sample prep. Operators simply fill the vial or measuring cup, and the analysis is performed directly through the glass—saving time and reducing the risk of human error.

The system is designed for both solids and liquids:

**Transmission Module – For Liquids**  
- Built-in active sample heater/cooler (+20°C to +80°C)  
- Integrated temperature sensor ensures accurate, stable readings  

**Reflection Module – For Solids**  
- Gold-coated integrating sphere for diffuse reflection  
- Ideal for analyzing inhomogeneous samples  
- Compatible with sample rotators for enhanced surface coverage  

Built for Long-Term Precision

The TANGO leverages Bruker’s trusted FT-NIR technology and robust components, such as the RockSolid™ interferometer and easily replaceable desiccant cartridges. Key maintenance actions—like light source replacement—take just seconds and require no tools, minimizing downtime and maximizing lab productivity.

**Industry Applications of TANGO FT-NIR**  
TANGO is designed for material identification and quantification across a wide range of industries:

- Food & Beverage: Analyze moisture, fat, protein, sugar content  
- Feed Manufacturing: Determine ADF, NDF, oil, ash, amino acids  
- Pharma & Biotech: Monitor blending, granulation, and product release  
- Chemical & Petrochemical: Quality control and release testing  
- Polymer Industry: Track additives, blends, and raw materials  

**Key Use Cases**  
- Testing of incoming raw materials  
- In-process analytics for real-time control  
- Final product inspection and release testing  
- Ready-to-use calibration packages for standardized industries like food and feed  

With Bruker’s global application support and ready-to-deploy calibration models, TANGO ensures maximum reliability with minimum training.

At Inkarp Instruments, we offer complete support for TANGO—from consultation and product selection to training, integration, and technical service. Partner with us as your dedicated TANGO FT-NIR Spectrometer Distributor and Service Provider in India.`,

        features: [
            {
                name: "Integrated TG and FT-IR Platform",
                description: "Combines thermal weight change analysis with evolved gas identification in a single workflow."
            },
            {
                name: "Multiple Coupling Configurations",
                description: "Choose between External, Internal, and PERSEUS® coupling based on your lab's space and workflow."
            },
            {
                name: "Real-Time Evolved Gas Monitoring",
                description: "Continuously detect and track gas evolution during thermal transitions."
            },
            {
                name: "Flexible Detector Options",
                description: "Supports both DLaTGS and MCT detectors depending on sensitivity needs."
            },
            {
                name: "FT-IR Gas Cell Sensitivity Optimization",
                description: "Adjust path length and cell volume to maximize signal and minimize sample use."
            },
            {
                name: "Seamless Operation with Bruker OPUS Software",
                description: "Streamlined data collection, synchronization, and spectral analysis."
            }
        ],

        advantages: [
            {
                name: "Compound-Specific Identification",
                description: "Each gas produces a unique IR spectrum—providing unambiguous chemical analysis."
            },
            {
                name: "Simultaneous TG & FT-IR Data",
                description: "Correlate mass loss with exact gas species in a single analysis run."
            },
            {
                name: "Minimal Sample Requirement",
                description: "Internal coupling enables high sensitivity with lower material usage."
            },
            {
                name: "High Analytical Throughput",
                description: "PERSEUS® configuration supports fast-switching high-throughput environments."
            },
            {
                name: "Transfer-Free Direct Coupling",
                description: "Eliminates transfer line complexity and gas loss in PERSEUS® setup."
            },
            {
                name: "Customizable Setup",
                description: "Adapt your TG-FTIR platform with upgradeable hardware and software modules."
            },
            {
                name: "Inkarp Service and Training",
                description: "Expert on-site support, installation, and method training across India."
            }
        ]
    },
    "bravo-handheld-raman-spectrometer": {
        id: "bravo-handheld-raman-spectrometer",
        name: "BRAVO Handheld Raman Spectrometer",
        image: BravoHandheld, // Replace with actual image import
        logo: Bruker,
        bannerImg: Banner3, // Replace with correct banner image import
        altText: "BRAVO Handheld Raman Spectrometer by Bruker",
        videoId: "",

        meta: {
            title: "BRAVO Handheld Raman Spectrometer | Bruker | Inkarp Instruments India",
            description: "Explore the BRAVO Handheld Raman Spectrometer by Bruker – a powerful portable Raman device for non-destructive material identification. Distributed and supported by Inkarp Instruments across India.",
            keywords: [
                "BRAVO Raman India",
                "Handheld Raman Spectrometer",
                "Bruker Raman Distributor",
                "Portable Raman for Pharma",
                "Raw Material Identification",
                "Raman Spectroscopy Device",
                "SSETM Raman Technology",
                "Bruker Raman Compliance",
                "BRAVO OPUS Software",
                "Inkarp Bruker Distributor India"
            ],
            altText: "BRAVO Handheld Raman Spectrometer",
            internalLinks: ["Raman Spectroscopy Products", "Pharmaceutical Raw Material Analysis"],
            externalLinks: ["https://www.bruker.com/"]
        },

        description: `The BRAVO Handheld Raman Spectrometer from Bruker is engineered for rapid, non-destructive material identification and raw material verification—making it ideal for regulated industries such as pharmaceuticals, law enforcement, heritage conservation, and R&D. With its advanced DuoLaser™ excitation system, patented SSETM fluorescence mitigation, and user-safe Laser Class 1 design, BRAVO delivers unmatched performance in a compact, intuitive, and compliance-ready form factor.

BRAVO enables effortless operation through its OPUS TOUCH GUI and provides robust connectivity through WiFi and Ethernet for remote operation or secure audit trail backup via SyncService. Whether deployed at the warehouse, lab, or field, BRAVO ensures fast, reliable, and regulatory-compliant Raman spectroscopy workflows.

Compatible with a wide range of accessories like vial tips, bag adapters, bottle holders, and tripod mounts, BRAVO supports flexible analysis across sample types. It’s a trusted tool for users in raw material inspection, forensic analysis, pigment characterization, and polymer QC.

Inkarp Instruments is your authorized BRAVO Handheld Raman Spectrometer Distributor and Service Provider in India—offering full support from pre-sale consultation to training and post-installation services.`,

        features: [
            {
                name: "SSETM Fluorescence Mitigation",
                description: "Patented technology ensures reliable Raman spectra even from highly fluorescent samples, expanding application compatibility."
            },
            {
                name: "DuoLaser™ Excitation System",
                description: "Dual-wavelength laser (785 nm and 852 nm) extends spectral coverage and improves signal quality for complex materials."
            },
            {
                name: "Laser Class 1 Safety",
                description: "No laser safety training or protective eyewear required—safe for all users, even in high-throughput environments."
            },
            {
                name: "OPUS TOUCH Interface",
                description: "Touchscreen-based user interface with guided workflows for easy operation and rapid training."
            },
            {
                name: "IntelliTip™ Recognition",
                description: "Automatically identifies attached measurement tips to ensure consistency and prevent operator error."
            },
            {
                name: "SyncService & Remote Access",
                description: "WiFi and Ethernet connectivity enable remote operation, data syncing, and audit trail backup to secure systems."
            },
            {
                name: "Compliance-Ready OPUS Software",
                description: "Supports 21 CFR Part 11, USP, Ph. Eur., and GMP standards for regulated pharmaceutical and analytical environments."
            }
        ],

        advantages: [
            {
                name: "Field-to-Lab Flexibility",
                description: "Can be used both as a handheld device or docked for benchtop operation, ensuring utility across multiple workflows."
            },
            {
                name: "Through-Container Measurement",
                description: "Accurately analyzes materials through glass, plastic bags, or transparent packaging—no sample prep required."
            },
            {
                name: "Wide Application Coverage",
                description: "Ideal for raw material verification, narcotics detection, art conservation, polymer QC, and R&D labs."
            },
            {
                name: "Validated Accessory Ecosystem",
                description: "Adapters for bottles, vials, and bags ensure precise and easy sampling for diverse use cases."
            },
            {
                name: "Secure Data Integrity",
                description: "Ensures all measurement data, including audit trails, are automatically backed up for full traceability and regulatory audit readiness."
            },
            {
                name: "Fast Training and Deployment",
                description: "Intuitive design, touchscreen UI, and guided software workflows enable rapid training of new users without expert supervision."
            },
            {
                name: "Regulatory Confidence",
                description: "Complete validation documentation and compliance support make it ideal for pharma and GMP-compliant workflows."
            }
        ]
    },

    "multiram-ft-raman-spectrometer": {
        id: "multiram-ft-raman-spectrometer",
        name: "MultiRAM FT-Raman Spectrometer",
        image: MultiRAMFTRamanSpectrometer, // Replace with actual image import
        logo: Bruker, // Replace with actual logo import
        bannerImg: Banner3, // Replace with actual banner image import
        altText: "MultiRAM FT-Raman Spectrometer by Bruker",
        videoId: "",

        meta: {
            title: "MultiRAM FT-Raman Spectrometer | Bruker | Inkarp Instruments India",
            description: "Discover the MultiRAM FT-Raman Spectrometer by Bruker – a robust Raman system for advanced emission studies and research. Distributed and supported by Inkarp Instruments in India.",
            keywords: [
                "MultiRAM FT-Raman Spectrometer",
                "Bruker Raman India",
                "FT-Raman Spectrometer",
                "Material Analysis Raman",
                "1064 nm Raman Spectroscopy",
                "Low Fluorescence Raman",
                "Bruker RockSolid Interferometer",
                "High-Performance Raman System",
                "Raman for Polymers and Pharma",
                "Inkarp Bruker Distributor India"
            ],
            altText: "MultiRAM FT-Raman Spectrometer",
            internalLinks: ["Raman Spectroscopy Instruments", "Material Science Raman Applications"],
            externalLinks: ["https://www.bruker.com/"]
        },

        description: `The MultiRAM FT-Raman Spectrometer by Bruker is a high-performance Raman solution designed for demanding research and emission spectroscopy. Featuring a robust standalone design, gold-coated optics, and a lifetime-aligned RockSolid™ interferometer, MultiRAM delivers superior sensitivity and long-term reliability. Equipped with a 1064 nm Nd:YAG laser, it ensures fluorescence-free analysis of colored or complex samples—ideal for materials science, polymers, pharmaceuticals, and academic research.

The MultiRAM accommodates advanced configurations, including dual-laser or dual-detector setups, motorized sample stages, fiber optic probes, and polarized measurements. It also supports integration with RamanScope III and SENTERRA II microscopes for macro- and micro-Raman workflows. Engineered for flexibility, sensitivity, and scientific precision, MultiRAM empowers users to push the boundaries of Raman spectroscopy.

Inkarp Instruments is your authorized MultiRAM FT-Raman Spectrometer Distributor and Service Provider in India. We offer complete technical support, from consultation to commissioning, application training, and compliance assistance.`,

        features: [
            {
                name: "High Spectral Performance",
                description: "Covers a broad Stokes spectral range from 3600 to 50 cm⁻¹ using a 1064 nm Nd:YAG laser for low fluorescence and high-quality Raman spectra."
            },
            {
                name: "RockSolid™ Interferometer",
                description: "Patented lifetime-aligned optical design ensures maximum stability, reliability, and signal sensitivity with minimal maintenance."
            },
            {
                name: "Gold-Coated Optical Components",
                description: "Optimized for IR wavelengths, ensuring maximum throughput and robust long-term optical performance."
            },
            {
                name: "Liquid Nitrogen Cooled Detector",
                description: "High-sensitivity Ge detector with long cryogen hold times allows detection of ultra-weak Raman signals with low noise."
            },
            {
                name: "Flexible Sampling Configurations",
                description: "Supports dual laser/detector setup, external fiber probe ports, 90° scattering geometry, motorized stages, and defocusing optics for varied sample types."
            },
            {
                name: "Automated Polarization Module",
                description: "Enables polarization-dependent Raman measurements with automatic control, ideal for crystallographic and orientation studies."
            },
            {
                name: "Microscope Compatibility",
                description: "Integrates with RamanScope III and SENTERRA II microscopes for combined macro and micro Raman capabilities on a single system."
            }
        ],

        advantages: [
            {
                name: "Fluorescence-Free Raman Analysis",
                description: "The 1064 nm laser excitation enables clear Raman spectra even from highly fluorescent or colored materials—ideal for complex sample analysis."
            },
            {
                name: "Unmatched Optical Stability",
                description: "Bruker’s RockSolid™ design ensures long-term optical alignment, reducing the need for recalibration and minimizing downtime."
            },
            {
                name: "Extended Cryogen Hold Time",
                description: "The liquid nitrogen cooled detector offers week-long operation without refilling—ideal for uninterrupted research workflows."
            },
            {
                name: "Modular and Scalable Platform",
                description: "Expandable system architecture allows integration of accessories like auto sample changers, heating/cooling stages, and polarization analyzers."
            },
            {
                name: "Wide Application Versatility",
                description: "From polymorph detection in pharmaceuticals to reaction monitoring in chemical labs, MultiRAM supports a broad range of Raman applications."
            },
            {
                name: "Spectral Correction with White Light Source",
                description: "Integrated calibration options and white light reference support precise spectral correction and reproducibility."
            },
            {
                name: "Research-Grade Data Quality",
                description: "High SNR, low baseline drift, and advanced spectral range ensure high-quality spectra required for academic and industrial R&D."
            }
        ]
    },

    "hyperion-ft-ir-microscope": {
        id: "hyperion-ft-ir-microscope",
        name: "Hyperion FT-IR Microscope",
        image: HyperionFtirMicroscope, // Replace with actual image import
        logo: Bruker, // Replace with actual logo import
        bannerImg: Banner3, // Replace with actual banner image import
        altText: "Bruker Hyperion FT-IR Microscope",
        videoId: "",

        meta: {
            title: "Hyperion FT-IR Microscope | Bruker | Inkarp Instruments India",
            description: "Explore the Bruker Hyperion FT-IR Microscope – advanced infrared microscopy system integrating FT-IR and QCL imaging. Distributed and supported by Inkarp Instruments in India.",
            keywords: [
                "Hyperion FT-IR Microscope",
                "Bruker FT-IR Microscope",
                "QCL Imaging FTIR",
                "Infrared Microscopy India",
                "ATR FTIR Microscope",
                "FTIR for Microplastics",
                "Bruker Hyperion India",
                "Infrared Spectroscopy Microscope",
                "FTIR Microscope for Pharma",
                "Inkarp Bruker Distributor India"
            ],
            altText: "Hyperion FT-IR Microscope",
            internalLinks: ["FT-IR vs QCL Imaging", "Advanced Microscopy Instruments"],
            externalLinks: ["https://www.bruker.com/"]
        },

        description: `The Hyperion FT-IR Microscope (HYPERION II) by Bruker is an advanced infrared microscopy system that seamlessly integrates FT-IR and QCL imaging for unmatched performance in material and life science research. It delivers diffraction-limited IR imaging, superior ATR capabilities, and supports transmission, reflection, and ATR modes in one versatile instrument.

What makes HYPERION II unique is its ability to combine broad-spectrum FT-IR analysis with high-speed QCL laser imaging through the optional ILIM module. This hybrid system supports a wide range of detectors including LN₂-cooled MCTs and TE-cooled options, focal-plane array detectors (64×64 or 128×128), and IR-compatible optics across a vast spectral range.

Researchers benefit from advanced features like real-time aperture control, motorized stages, polarization optics, and compatibility with temperature-controlled stages, macro imaging, and emissivity studies. Software enhancements like OPUS 8.7 further elevate productivity with adaptive clustering, advanced particle detection, and automated classification tools.

Whether you're working in pharmaceuticals, microplastics, forensic science, semiconductors, or environmental analysis, the HYPERION II offers the flexibility and precision to meet your evolving needs. Trusted worldwide for over two decades, this system is now smarter, faster, and more powerful—redefining excellence in FT-IR microscopy.

Inkarp Instruments is your trusted distributor and service provider for the Bruker Hyperion II - FT-IR Microscope in India. We offer full support including consultation, configuration, installation, user training, maintenance, and upgrades—ensuring your system delivers peak performance throughout its lifecycle.`,

        advantages: [
            {
                name: "Dual Technology Integration (FT-IR + QCL)",
                description: "Combines the power of FT-IR spectroscopy and Quantum Cascade Laser (QCL) imaging in one platform for unmatched flexibility and imaging speed."
            },
            {
                name: "Advanced Detector Options",
                description: "Supports a wide range of detectors including broad-, mid-, and narrow-band LN₂-cooled MCTs, TE-MCTs, and high-resolution FPA detectors for customized performance."
            },
            {
                name: "QCL Imaging with ILIM Module",
                description: "Enables rapid, high-contrast IR laser imaging with artifact-free coherence reduction and compatibility with all measurement modes: ATR, transmission, and reflection."
            },
            {
                name: "Full Optical Control & Flexibility",
                description: "Real-time control over aperture, objective selection (IR, ATR, VIS, GIR), visual & IR polarizers, and darkfield/fluorescence illumination supports intricate experimental design."
            },
            {
                name: "Wide Spectral Range",
                description: "Covers Near-IR to Far-IR with modular extensions, allowing analysis of a wide array of materials and experimental needs."
            },
            {
                name: "High-Speed IR Imaging",
                description: "Achieve imaging speeds up to 6.4 mm²/sec using QCL and 0.1 mm²/sec with FPA full-spectrum imaging for high-throughput workflows."
            },
            {
                name: "OPUS 8.7 Software Enhancements",
                description: "Includes Adaptive K-means Clustering, Cluster ID, and enhanced particle detection tools to automate and accelerate data analysis."
            },
            {
                name: "Modular & Configurable for Expert Users",
                description: "Unlike automated systems, the Hyperion II empowers expert users with complete control over all experiment parameters—ideal for pioneering research."
            },
            {
                name: "Emission Spectroscopy Ready",
                description: "Optional upgrades allow emissivity measurements, thermal mapping, and LED material analysis using IR emission capabilities."
            },
            {
                name: "Proven Legacy, Reinvented",
                description: "Builds upon 20+ years of trusted Bruker Hyperion technology, now updated with next-gen hardware and software advancements."
            }
        ]
    },
    "lumos-ii-ft-ir-microscope": {
        id: "lumos-ii-ft-ir-microscope",
        name: "LUMOS II - FT-IR Microscope",
        image: LumosMicroscope, // Replace with actual image import
        logo: Bruker,
        bannerImg: Banner3, // Replace with actual banner image import
        altText: "LUMOS II - FT-IR Microscope by Bruker",
        videoId: "",

        meta: {
            title: "LUMOS II - FT-IR Microscope | Bruker | Inkarp Instruments India",
            description: "Discover the LUMOS II - FT-IR Microscope by Bruker – high-resolution, user-friendly FT-IR microscopy with ultrafast imaging, automated modes, and powerful ATR capabilities. Distributed and supported by Inkarp Instruments across India.",
            keywords: [
                "LUMOS II FT-IR Microscope",
                "Bruker FT-IR Imaging India",
                "Infrared Microscope Distributor India",
                "Chemical Imaging Microscope",
                "FT-IR Spectroscopy India",
                "LUMOS II ATR Imaging",
                "Bruker FTIR India",
                "FT-IR Microscopy Pharma",
                "Inkarp Bruker India",
                "Infrared Spectroscopy Imaging"
            ],
            altText: "LUMOS II - FT-IR Microscope",
            internalLinks: ["FT-IR product range", "Microscopy for failure analysis", "Pharma analysis tools"],
            externalLinks: ["https://www.bruker.com/"]
        },

        description: `The LUMOS II - FT-IR Microscope from Bruker is a stand-alone, high-performance infrared imaging system that empowers both beginners and experts to achieve fast, accurate chemical imaging results. It integrates visual microscopy and Fourier-transform infrared spectroscopy in a compact, fully motorized platform. With intuitive software, powerful FPA imaging, and advanced ATR capabilities, LUMOS II is the go-to solution for failure analysis, material science, pharmaceuticals, and forensic applications.

Users benefit from chemical maps generated in seconds, a 0.6 µm visual resolution, and multimodal support (ATR, reflection, transmission)—all without the need for liquid nitrogen or purge gas. Its ergonomic, software-guided workflows and robust automation allow seamless analysis of microplastics, drug formulations, polymers, and contaminants in industrial and research labs alike.

Inkarp Instruments is your authorized distributor and service provider for the LUMOS II - FT-IR Microscope in India. We offer full-spectrum support, from installation and training to routine service and validation, across the country.`,

        features: [
            {
                name: "TE-MCT Detector (Standard)",
                description: "Delivers high IR sensitivity with no need for liquid nitrogen, simplifying operation and reducing costs."
            },
            {
                name: "Optional FPA Imaging Detector",
                description: "Provides ultrafast chemical imaging with full FT-IR spectral data at each pixel for high-throughput analysis."
            },
            {
                name: "Fully Motorized and Automated",
                description: "Automated ATR, reflection, and transmission modes with smart positioning for minimal user input."
            },
            {
                name: "Integrated ATR with Piezo Control",
                description: "Retractable crystal built into the objective lens enables precise, automated contact with the sample surface."
            },
            {
                name: "PermaSure+ Calibration",
                description: "Built-in calibration for reliable performance over time with minimal maintenance or requalification."
            },
            {
                name: "Compact, Plug-and-Play Design",
                description: "Stand-alone system with small footprint, low power needs, and no external purging required."
            },
            {
                name: "High-Resolution Visual Imaging",
                description: "Offers sub-micrometer spatial resolution (0.6 µm/pixel) and a wide field of view (1490 x 1118 µm²)."
            },
            {
                name: "ZnSe Optics",
                description: "Humidity-resistant optical path ensures long-lasting performance in diverse lab conditions."
            }
        ],

        advantages: [
            {
                name: "No Hassle Operation",
                description: "Operates without liquid nitrogen or dry-air purge, reducing overhead and making it easy for any lab to deploy."
            },
            {
                name: "Regulatory Compliance",
                description: "Meets cGMP and FDA 21 CFR Part 11 standards with automated OQ/PQ/pharmacopoeia testing workflows."
            },
            {
                name: "Beginner-Friendly Interface",
                description: "Software-guided workflows simplify data acquisition, enabling non-experts to generate expert-level results."
            },
            {
                name: "Exceptional ATR Performance",
                description: "Provides unmatched precision and clarity in ATR mode, ideal for failure analysis, microanalysis, and forensics."
            },
            {
                name: "Modular and Scalable",
                description: "Designed for lab evolution—upgrades, accessories, and automation-ready features extend its lifespan."
            },
            {
                name: "Versatile Sample Compatibility",
                description: "Supports samples up to 40 mm and multiple imaging modes for various research and industrial tasks."
            },
            {
                name: "Industry Application Coverage",
                description: "Applicable in pharmaceuticals, life sciences, polymers, environment, forensics, and material science."
            },
            {
                name: "Backed by Inkarp India",
                description: "Nationwide support from Inkarp ensures reliable installation, training, and maintenance service."
            }
        ]
    },

    "senterra-ii-raman-microscope": {
        id: "senterra-ii-raman-microscope",
        name: "SENTERRA II Raman Microscope",
        image: SenterraIiRamanMicroscope, // Replace with actual image import
        logo: Bruker,
        bannerImg: Banner3, // Replace with actual banner image import
        altText: "SENTERRA II Raman Microscope by Bruker",
        videoId: "",

        meta: {
            title: "SENTERRA II Raman Microscope | Bruker | Inkarp Instruments India",
            description: "Explore the SENTERRA II Raman Microscope by Bruker – a fully automated, high-precision Raman system designed for failure analysis, QA/QC, material characterization, and advanced research. Distributed and supported by Inkarp Instruments across India.",
            keywords: [
                "SENTERRA II Raman Microscope",
                "Confocal Raman India",
                "Bruker Raman India",
                "Automated Raman Spectrometer",
                "SureCal Calibration Raman",
                "Raman Mapping Microscope",
                "Material Science Raman",
                "Pharma Raman Spectroscopy",
                "Inkarp Bruker Distributor",
                "21 CFR Raman Compliance"
            ],
            altText: "SENTERRA II Raman Microscope",
            internalLinks: ["Raman spectroscopy applications", "Confocal Raman microscopy", "Bruker automated systems"],
            externalLinks: ["https://www.bruker.com/"]
        },

        description: `The SENTERRA II by Bruker is a high-performance confocal Raman microscope engineered for streamlined, continuous operation in both research and industrial environments. Designed with maximum automation, it enables users to focus on what matters most—accurate Raman analysis and meaningful results. With intuitive software, robust hardware, and advanced imaging capabilities, the SENTERRA II simplifies Raman spectroscopy for applications like failure analysis, quality assurance, material identification, and scientific research.

The system is built around three core design pillars: reproducibility, precision, and user safety. With features such as SureCal™ real-time calibration, Class 1 laser safety housing, and a motorized XYZ stage, it eliminates manual recalibration and enhances lab safety. SENTERRA II also supports life science applications through its inverted microscope configuration, ideal for live tissue and in vitro studies. Whether for microplastic detection, polymer QA, or drug analysis, the SENTERRA II delivers precise and reproducible results every time.`,

        features: [
            {
                name: "Confocal Optical Design",
                description: "Enables high spatial resolution and depth profiling for micro-scale Raman imaging in complex samples."
            },
            {
                name: "Full Automation",
                description: "Automated switching of lasers, filters, and gratings simplifies operation and improves reproducibility."
            },
            {
                name: "Motorized XYZ Stage",
                description: "Enables high-speed 3D Raman mapping and imaging with minimal user intervention."
            },
            {
                name: "SureCal™ Real-Time Calibration",
                description: "Ensures sub-wavenumber precision without manual recalibration, enhancing long-term stability."
            },
            {
                name: "Class 1 Laser Housing",
                description: "Integrated safety features prevent laser exposure, ensuring full compliance for education and industrial labs."
            },
            {
                name: "Inverted Microscope Configuration",
                description: "Optional setup supports life science applications such as live cell analysis and in situ pharmaceutical studies."
            },
            {
                name: "Multilaser Excitation Support",
                description: "Supports up to 4 excitation lasers with one-click switching for flexible spectral coverage."
            },
            {
                name: "User-Friendly Software",
                description: "Intuitive interface with guided workflows and compound identification tools for all user levels."
            }
        ],

        advantages: [
            {
                name: "Plug-and-Play Installation",
                description: "Factory pre-aligned and calibrated for immediate use—no complex setup or alignment required."
            },
            {
                name: "High Spectral Accuracy",
                description: "Research-grade spectral performance with superb wavenumber precision, ideal for advanced studies."
            },
            {
                name: "Fast and Reproducible Results",
                description: "Automated mapping and laser control ensure consistent results across multiple sessions and users."
            },
            {
                name: "Life Science Compatibility",
                description: "Inverted setup ideal for bio-research involving live tissue or in vitro pharmaceutical characterization."
            },
            {
                name: "Integrated OQ/PQ Protocols",
                description: "Automated performance qualification and diagnostics reduce maintenance needs and support compliance."
            },
            {
                name: "Minimal User Training Required",
                description: "Automation and intuitive software lower the barrier for new users while enabling expert-level outcomes."
            },
            {
                name: "Seamless Integration with FTIR",
                description: "Compatible with Bruker FT-Raman and FT-IR systems for complete molecular analysis workflows."
            },
            {
                name: "Ideal for Industrial & Academic Use",
                description: "Supports applications in QA/QC, R&D, failure analysis, environmental testing, and forensic science."
            }
        ]
    },

    "matrix-f-ii-ft-nir-process-spectrometer": {
        id: "matrix-f-ii-ft-nir-process-spectrometer",
        name: "MATRIX-F II FT-NIR Process Spectrometer",
        image: MatrixFiiBannerBruker, // Replace with actual image import
        logo: Bruker,
        bannerImg: Banner3, // Replace with actual banner image import
        altText: "MATRIX-F II FT-NIR Process Spectrometer by Bruker",
        videoId: "",

        meta: {
            title: "MATRIX-F II FT-NIR Process Spectrometer | Bruker | Inkarp Instruments India",
            description:
                "Discover the MATRIX-F II FT-NIR Process Spectrometer by Bruker – an advanced real-time, in-line monitoring solution for production environments. Distributed by Inkarp Instruments, India.",
            keywords: [
                "MATRIX-F II FT-NIR Spectrometer",
                "FT-NIR Process Monitoring India",
                "Bruker MATRIX-F II India",
                "In-line NIR Spectroscopy",
                "Real-time Process Analysis India",
                "Industrial NIR Analyzer",
                "Contactless NIR Measurement",
                "Bruker FT-NIR India",
                "Process Spectrometer Distributor",
                "Inkarp Instruments FT-NIR"
            ],
            altText: "MATRIX-F II FT-NIR Process Spectrometer",
            internalLinks: ["FT-NIR technology", "In-line process monitoring", "Real-time spectroscopy"],
            externalLinks: ["https://www.bruker.com/"]
        },

        description: `The MATRIX-F II FT-NIR Process Spectrometer from Bruker is a powerful solution for real-time, in-line process monitoring and control. Built to meet the demands of modern production environments, this spectrometer offers laboratory-grade precision in rugged industrial conditions. Its fiber-optic technology enables direct and contactless measurements inside reactors, pipelines, or on conveyor systems—ensuring accurate, non-destructive analysis for a wide range of process parameters. 

The MATRIX-F II enables fast, direct monitoring of chemical reactions, material compositions, and blending processes. It reduces waste, improves product consistency, and minimizes the need for off-spec material reprocessing. 

Ideal for monitoring liquids, solids, and slurries, this instrument enables remote analysis over long distances using fiber-optic probes. It requires minimal maintenance and integrates seamlessly with existing process systems.

Versatile configurations are available for every industrial need:
- **MATRIX-F II Standard** for classic fiber-optic coupling with various probes.
- **MATRIX-F II Emission** for contactless measurement with NIR fiber heads.
- **MATRIX-F II Duplex** for simultaneous contact and non-contact analysis.
- **MATRIX-F Exproof** is ATEX-rated for hazardous area compliance.

Designed for reliability and longevity, it features a 10-year warranty on key parts, tool-free maintenance, self-diagnostics via OPUS software, and smooth lab-to-production method transfer.

The system integrates with all major process control platforms using CMET software and protocols like OPC, Modbus, Profibus DP, and 4–20 mA. Whether in chemicals, pharma, food, or polymers, the MATRIX-F II delivers real-time control with unparalleled accuracy. Inkarp Instruments proudly offers complete distribution, installation, and service support across India.`,


        features: [
            {
                name: "Smart Analyzer with Integrated PC",
                description: "Equipped with process-ready software and built-in computing for seamless industrial deployment."
            },
            {
                name: "IoT-Ready & Industry 4.0 Support",
                description: "Enables remote diagnostics, predictive maintenance, and smart factory integration."
            },
            {
                name: "Long-Life NIR Source",
                description: "Designed for over 3 years of continuous operation, reducing downtime and operating cost."
            },
            {
                name: "Pre-Aligned Optical Components",
                description: "User-replaceable parts ensure minimal maintenance and no re-calibration needed."
            },
            {
                name: "Built-in Performance Validation",
                description: "Automated filter wheel for self-checks, validation, and compliance reporting."
            },
            {
                name: "Compact & Rugged Design",
                description: "IP65-rated splash-proof housing built for harsh environments and continuous use."
            },
            {
                name: "Multichannel Support",
                description: "Optional 6-port fiber-optic multiplexer enables multiple-point monitoring in one system."
            },
            {
                name: "Flexible Connectivity",
                description: "Supports Ethernet, OPC, Modbus, and Profibus DP protocols for industrial system integration."
            },
            {
                name: "Versatile Configuration Options",
                description: "Available in Standard, Emission, Duplex, and ATEX-compliant Exproof versions."
            },
            {
                name: "Easy Method Transfer from Lab to Line",
                description: "Utilizes the same FT-NIR technology as Bruker lab systems for smooth scale-up."
            }
        ],

        advantages: [
            {
                name: "Real-Time In-Line Analysis",
                description: "Enables continuous monitoring and control of manufacturing processes without sample collection."
            },
            {
                name: "Non-Destructive Measurement",
                description: "Performs contact or contactless analysis without altering or consuming the sample."
            },
            {
                name: "Supports Liquids, Solids & Slurries",
                description: "Versatile applications across various materials and states, from chemicals to food and polymers."
            },
            {
                name: "Reduced Waste & Rework",
                description: "Immediate feedback prevents off-spec production, improving batch yield and consistency."
            },
            {
                name: "Low Cost of Ownership",
                description: "Minimal maintenance, long-lasting components, and modular upgrades reduce total lifecycle costs."
            },
            {
                name: "Built for Harsh Environments",
                description: "Rugged enclosure and compliance with ATEX safety standards allow deployment in hazardous zones."
            },
            {
                name: "Integrated Compliance Tools",
                description: "Built-in validation tools support 21 CFR Part 11 and GMP documentation requirements."
            },
            {
                name: "Remote Monitoring Capability",
                description: "Fiber-optic probes enable analysis in hard-to-reach or hazardous zones from a safe location."
            },
            {
                name: "Trusted Across Industries",
                description: "Used widely in chemicals, petrochemicals, pharmaceuticals, food/feed, and polymers."
            },
            {
                name: "Seamless Plant Integration",
                description: "Compatible with all standard industrial communication systems and SCADA integration via CMET."
            }
        ]
    },

    "matrix-mf-ft-ir-process-reaction-monitoring": {
        id: "matrix-mf-ft-ir-process-reaction-monitoring",
        name: "MATRIX-MF FT-IR Process Reaction Monitoring",
        image: BannerFtirFtNir, // Replace with actual image import
        logo: Bruker,
        bannerImg: Banner3, // Replace with actual banner image import
        altText: "MATRIX-MF FT-IR Process Reaction Monitoring by Bruker",
        videoId: "",

        meta: {
            title: "MATRIX-MF FT-IR Process Reaction Monitoring | Bruker | Inkarp Instruments India",
            description:
                "Explore the MATRIX-MF FT-IR Process Reaction Monitoring spectrometer by Bruker – a compact, rugged system for real-time, in-situ analysis of chemical and biological reactions. Distributed by Inkarp Instruments, India.",
            keywords: [
                "MATRIX-MF FT-IR Spectrometer",
                "Bruker MATRIX-MF India",
                "FT-IR Reaction Monitoring",
                "Process Spectroscopy India",
                "Bruker FT-IR Distributor India",
                "Real-time Reaction Analysis",
                "Mid-IR Spectroscopy",
                "ATEX FT-IR Spectrometer",
                "Fiber-optic ATR Probe",
                "Inkarp Instruments FT-IR"
            ],
            altText: "MATRIX-MF FT-IR Spectrometer",
            internalLinks: ["FT-IR spectroscopy", "Real-time process monitoring", "In-situ reaction analysis"],
            externalLinks: ["https://www.bruker.com/"]
        },

        description: `The MATRIX-MF by Bruker is a compact, rugged FT-IR spectrometer designed for real-time monitoring and analysis of chemical and biological reactions in both laboratory and industrial environments. It leverages the information-rich mid-infrared (mid-IR) spectral range and can be fiber-optically coupled for in-situ measurements—making it an essential tool for efficient reaction tracking and control.

Designed as part of Bruker’s proven MATRIX series, the MATRIX-MF features a sealed optical compartment that protects its sensitive components even in harsh industrial settings. Its RockSolid™ interferometer and Digitect™ detector electronics provide high-quality, stable spectra for consistent, long-term monitoring.

This compact design is ideal for rack-mount setups or mobile analysis and supports quick probe exchanges via the Bruker Quick Connector (BQC). Automated multiplexing enables up to six simultaneous reaction measurements.

Compatible with a broad range of fiber-optic ATR probes, the MATRIX-MF enables real-time, in-situ analysis of liquids, slurries, and mixtures without process interruption. ATEX-compliant probe options and ex-proof configurations make it suitable for hazardous zones.

With seamless integration into industrial control systems via OPC, Modbus, 4–20 mA, and Profibus DP, and low-maintenance operation through pre-aligned user-replaceable components, the MATRIX-MF is built for reliability. For regulated industries, Bruker’s OPUS Validation Program (OVP) ensures full compliance using automated performance checks.

Inkarp Instruments is your trusted MATRIX-MF FT-IR Process Reaction Monitoring distributor and service provider in India—offering expert installation, support, and solutions tailored to your process needs.`,

        features: [
            {
                name: "Compact & Rugged Design",
                description: "Small footprint with sealed optics for use in laboratory racks or harsh industrial environments."
            },
            {
                name: "RockSolid™ Interferometer",
                description: "Alignment-free design delivers stable performance and long-term measurement reliability."
            },
            {
                name: "Digitect™ Detector Electronics",
                description: "Ensures high-quality, consistent mid-IR spectra even under demanding process conditions."
            },
            {
                name: "Quick Probe Exchange with BQC",
                description: "Bruker Quick Connector allows fast probe changes without disrupting instrument calibration."
            },
            {
                name: "Automated 6-Port Multiplexer",
                description: "Supports monitoring of up to six reactions simultaneously with one system."
            },
            {
                name: "Flexible Fiber-Optic Probe Options",
                description: "Compatible with a wide range of ATR probes for liquids, slurries, and hazardous environments."
            },
            {
                name: "ATEX-Proof Configuration Available",
                description: "Certified ex-proof version available for explosive or high-risk installations."
            },
            {
                name: "Seamless Process Integration",
                description: "Supports multiple protocols including OPC, Modbus, 4–20 mA, and Profibus DP."
            },
            {
                name: "Low Maintenance Operation",
                description: "Pre-aligned, user-exchangeable components reduce downtime and service costs."
            },
            {
                name: "OPUS Validation Program (OVP)",
                description: "Built-in performance validation with automated filter wheel for regulated industries."
            }
        ],

        advantages: [
            {
                name: "Real-Time Reaction Monitoring",
                description: "Enables continuous tracking of chemical or biological reactions without sampling delays."
            },
            {
                name: "Mid-IR Spectral Sensitivity",
                description: "Access to fundamental molecular vibrations for rich compositional insight."
            },
            {
                name: "In-Situ Non-Destructive Measurement",
                description: "Probes allow analysis directly within reactors or vessels without removing the sample."
            },
            {
                name: "Ideal for Hazardous Environments",
                description: "ATEX-certified options ensure safe use in explosive or volatile settings."
            },
            {
                name: "Highly Customizable Probe Selection",
                description: "Choose from diamond ATR tips, silicon crystals, and various sizes for different sample types."
            },
            {
                name: "Supports Multi-Reaction Monitoring",
                description: "Automated multiplexer handles up to 6 processes simultaneously for full-scale control."
            },
            {
                name: "Compact Mobile-Friendly Design",
                description: "Easy to move and integrate into mobile or temporary setups for testing and validation."
            },
            {
                name: "Trusted Across Diverse Industries",
                description: "Used in chemical synthesis, fermentation, polymerization, and API production applications."
            },
            {
                name: "Reduced Downtime and Operating Costs",
                description: "Maintenance-friendly with tool-free servicing and solid-state reliability."
            },
            {
                name: "Full Regulatory Compliance",
                description: "Meets 21 CFR Part 11 and GMP documentation standards with built-in validation support."
            }
        ]
    },
    "beam-process-ft-nir-spectrometer": {
        id: "beam-process-ft-nir-spectrometer",
        name: "BEAM – Process FT-NIR Spectrometer",
        image: BannerFtNir, // Replace with actual image import
        logo: Bruker,
        bannerImg: Banner3, // Replace with actual banner image import
        altText: "BEAM Process FT-NIR Spectrometer by Bruker",
        videoId: "",

        meta: {
            title: "BEAM – Process FT-NIR Spectrometer | Bruker | Inkarp Instruments India",
            description:
                "Discover the BEAM Process FT-NIR Spectrometer by Bruker – a compact, single-point spectrometer for real-time solid and semi-solid material analysis. Distributed by Inkarp Instruments, India.",
            keywords: [
                "BEAM FT-NIR Spectrometer",
                "Process NIR Spectrometer India",
                "Bruker BEAM Distributor India",
                "Single-Point NIR Monitoring",
                "Solid Material NIR Analysis",
                "Real-Time Process Spectroscopy",
                "FT-NIR Conveyor Belt Monitoring",
                "NIR in Food and Feed Industry",
                "Pharma In-line NIR Monitoring",
                "Inkarp Instruments Bruker India"
            ],
            altText: "BEAM FT-NIR Spectrometer",
            internalLinks: ["FT-NIR Technology", "Real-Time Process Monitoring", "Solid Material Spectroscopy"],
            externalLinks: ["https://www.bruker.com/"]
        },

        description: `The BEAM is Bruker’s first dedicated single-point FT-NIR spectrometer engineered to transform in-line and on-site process analytics. Delivering real-time measurements at over 250 scans per minute, BEAM allows accurate, non-destructive monitoring of solids and semi-solids directly on pipelines, hoppers, or conveyors. 

By integrating seamlessly into various production environments, BEAM helps improve process control, minimize batch variability, and enhance overall product quality. Its FT-NIR spectral capabilities make it versatile across industries—from food and feed manufacturing to polymers and pharmaceuticals.

It brings all the power of FT-NIR into a compact, ruggedized design capable of 24/7 operation. Featuring Bruker's RockSolid™ interferometer and dual-source architecture, it ensures maximum uptime and performance stability.

The BEAM system supports various mounting configurations—tri-clamp flanges, flexible brackets, and lab stands—making it suitable for in-line installations as well as lab-based method development. With complete compatibility with Bruker's OPUS software and existing NIR platforms, BEAM enables rapid method transfer and scalable implementation.

Inkarp Instruments offers complete local support in India, including expert consultation, installation, method setup, training, and after-sales service for BEAM Process FT-NIR Spectrometers.`,

        features: [
            {
                name: "Real-Time FT-NIR Monitoring",
                description: "Performs over 250 scans per minute for continuous tracking of critical process parameters."
            },
            {
                name: "Full FT-NIR Spectral Range",
                description: "Captures a broader set of molecular data compared to traditional single-point analyzers."
            },
            {
                name: "RockSolid™ Interferometer",
                description: "Proven Bruker cube-corner interferometer design ensures high spectral stability under industrial conditions."
            },
            {
                name: "High Accuracy and Resolution",
                description: "Laboratory-grade precision, even in high-vibration, high-throughput environments."
            },
            {
                name: "Dual Source Configuration",
                description: "Automatically switches to backup light source to ensure uninterrupted operations."
            },
            {
                name: "OPUS Software Integration",
                description: "Compatible with Bruker’s powerful OPUS platform for control, evaluation, and reporting."
            },
            {
                name: "Tri-Clamp & Mounting Bracket Options",
                description: "Supports hygienic installation in food/pharma and flexible integration into pipelines or vessels."
            },
            {
                name: "Laboratory Stand Compatibility",
                description: "Enables lab-scale setup for method development and rapid deployment to production."
            },
            {
                name: "Compact, Rugged Construction",
                description: "Engineered for 24/7 process use in industrial environments."
            },
            {
                name: "Full Method Transfer Compatibility",
                description: "Easily scale validated methods from lab to line using existing Bruker FT-NIR systems."
            }
        ],

        advantages: [
            {
                name: "Single-Point In-Line Analysis",
                description: "Designed specifically for direct, on-line monitoring of solid and semi-solid samples in motion."
            },
            {
                name: "Faster ROI Through Process Optimization",
                description: "Reduces waste, improves product quality, and saves energy through precise real-time control."
            },
            {
                name: "Minimized Downtime with Dual Light Sources",
                description: "System remains operational even if the primary source fails, maximizing productivity."
            },
            {
                name: "Versatile Industrial Applications",
                description: "Adaptable for use across food, feed, pharma, and polymer production lines."
            },
            {
                name: "Reduces Rework and Material Waste",
                description: "Real-time feedback helps catch variations early and minimize out-of-spec production."
            },
            {
                name: "Hygienic Installation Support",
                description: "Tri-clamp flange mounting ensures compatibility with GMP-compliant setups."
            },
            {
                name: "Method Development in Laboratory",
                description: "Lab stand setup allows fast validation and optimization of analysis procedures before deployment."
            },
            {
                name: "Built for Harsh Conditions",
                description: "Durable housing and stable optics ensure long service life in continuous operation."
            },
            {
                name: "Scalable and Cost-Effective",
                description: "Enables modular implementation from pilot plants to full production lines."
            },
            {
                name: "Complete Support from Inkarp",
                description: "Local expertise in India for installation, training, and servicing ensures smooth operation and customer satisfaction."
            }
        ]
    }


}