import React, { useState } from "react";
// Logos & Images
import Mettler from '/src/assets/PrincipalLogos/RowTwo/Metller.png';
import C10sx from "/images/products/Mettler/c10sx.jpg";
import Densito from "/images/products/Mettler/densito.jpg";
import DensityMeterExcellenceD4 from "/images/products/Mettler/density-meter-excellence-d4.jpg";
import EasyKfv from "/images/products/Mettler/easy-kfv.jpg";
import EasyPh from "/images/products/Mettler/easy-ph.jpg";
import EasyPro from "/images/products/Mettler/easy-pro.jpg";
import ExcellenceR4 from "/images/products/Mettler/Rrefractometer-excellence-r4.jpg";
import HandheldRefractometerMybrix from "/images/products/Mettler/handheld-refractometer-mybrix.jpg";
import Hc103 from "/images/products/Mettler/hc103.jpg";
import He53 from "/images/products/Mettler/he53.jpg";
import He73 from "/images/products/Mettler/he73.jpg";
import Hx204 from "/images/products/Mettler/hx204.jpg";


import MeltingPointSystemMp80 from "/images/products/Mettler/melting-point-System-mp80.jpg";
import MeltingPointSystemMp30 from "/images/products/Mettler/melting-point-System-mp30.jpg";

import HeiVapIndustrial from "/images/products/heidolph/Hei-VAP-Industrial.webp";
import HeiVapIndustrialBasic from "/images/products/heidolph/Hei-VAP-Industrial-Basic.webp"
import Me204 from "/images/products/Mettler/ME204.jpg";
import Me204t from "/images/products/Mettler/ME204t.jpg";
import Me1002 from "/images/products/Mettler/ME1002.jpg";
import Me2002 from "/images/products/Mettler/me2002.jpg";
import Me3002 from "/images/products/Mettler/me3022.jpg";
import Me4002 from "/images/products/Mettler/me4002.jpg";
import Ml204t from "/images/products/Mettler/ml204t.jpg";

import Ms205du from "/images/products/Mettler/ms205du.jpg";
// import Rrefract from "/images/products/Mettler/Rrefract.jpg";
import S400bio from "/images/products/Mettler/s400bio.jpg";
import S470StdKit from "/images/products/Mettler/s470-std-kit.jpg";
import S700StdKit from "/images/products/Mettler/s700-std-kit.jpg";
import Sd20Kit from "/images/products/Mettler/sd20-kit.jpg";
import Sd23 from "/images/products/Mettler/sd23.jpg";
import Sd30Kit from "/images/products/Mettler/sd30-kit.jpg";
import Sd50Kit from "/images/products/Mettler/sd50-kit.jpg";

import TitratorExcellenceT5 from "/images/products/Mettler/titrator-excellence-t5.jpg";
import V20s from "/images/products/Mettler/v20s.jpg";

import Xpr2 from "/images/products/Mettler/xpr2.jpg";
import Xpr2u from "/images/products/Mettler/xpr2u.jpg";
import Xpr205du from "/images/products/Mettler/xpr205du.jpg";
import Xpr226dr from "/images/products/Mettler/xpr226dr.jpg";
import Xsr205du from "/images/products/Mettler/xsr205du.jpg";


import Banner1 from "/images/products/Banner/Banner1.jpg";
import Banner2 from "/images/products/Banner/Banner2.jpg";


export const AnalyticalInstruments = {
    "ph-meter-sevendirect-sd20-kit": {
        id: "ph-meter-sevendirect-sd20-kit",
        name: "pH Meter SevenDirect SD20 Kit",
        image: Sd20Kit, // replace with your actual import reference
        logo: Mettler,
        bannerImg: Banner2,
        altText: "pH Meter SevenDirect SD20 Kit",
        videoId: "DBJ_Gs5H76Y", // Replace if actual video available
        meta: {
            title: "pH Meter SevenDirect SD20 Kit Distributor And Service Provider In India | Mettler Toledo | Inkarp",
            description: "Explore the Mettler Toledo pH Meter SevenDirect SD20 Kit – precision pH measurement made simple. Trusted distribution and service by Inkarp Instruments across India.",
            keywords: [
                "Mettler Toledo SD20 India, SevenDirect SD20 pH meter, SD20 pH measurement kit, pH meter with touchscreen, pH meter for laboratory, Inkarp Instruments Mettler Toledo, SD20 pH kit distributor India"
            ],
            altText: "pH Meter SevenDirect SD20 Kit",
            internalLinks: ["Internal Product Pages Links"],
            externalLinks: ["Mettler Toledo Website"]
        },
        description: [
            {
                heading: "Distributor & Service Provider In India",
                description: "With the SevenDirect SD20 Kit, Mettler Toledo sets the standard for pH measurement excellence, combining precision, durability, and ease of use. Inkarp Instruments, Mettler Toledo's trusted distributor in India, helps customers enhance their research, quality control, and process monitoring applications with expert support and seamless service."
            },
            {
                heading: "Straight to the Point",
                description: "SD20 pH meter with all-rounder InLab Expert-Pro ISM pH/temperature sensor featuring automatic sensor recognition. The kit includes an efficient electrode arm and pH buffer sachets for initial calibration."
            },
            {
                heading: "Mastered in No Time",
                description: "Large color touchscreen provides direct measurement and easy data entry. Instructions guide users through the sensor calibration process."
            },
            {
                heading: "Tracks Your Records",
                description: "The instrument stores data like timestamp, sample and sensor ID with every measurement and prints or exports records automatically."
            },
            {
                heading: "Tough Enough",
                description: "Closed connector compartment and replaceable cover keep the instrument safe from dust and spills, even with sensors attached (IP54 in-use)."
            }
        ],
        specs: {
            "Parameter": "pH, ORP",
            "Channel": "Single-channel",
            "Version kit": "Ready-to-measure kit",
            "Sensor": "InLab® Expert Pro-ISM",
            "pH resolution": "0.1, 0.01, 0.001",
            "pH accuracy (±)": "0.002",
            "mV resolution": "1, 0.1",
            "mV accuracy (±)": "0.1",
            "mV measuring range": "-2000..2000 mV",
            "Temperature Range": "-30 °C – 130 °C",
            "Temperature resolution": "0.1 °C",
            "Temperature accuracy (±)": "±0.1 °C between 0 °C and 100 °C",
            "Ease of Use": "Touch screen",
            "Calibration Support": "Guided Verification, Simple Methods, Multilingual Menu",
            "Security and compliance": "GLP, User management",
            "Memory size": "2000 standard measurements",
            "Data Transfer": "PC, Printer, USB stick",
            "Flexibility and modularity": "Stirrer, Barcode reader",
            "Protection Rating": "Watertight and dustproof (IP54)",
            "Sensor Included": "Generalist Sensor",
            "Display Type": "7\" Color TFT",
            "Meter Type": "Benchtop Single-Channel",
            "Dimensions": "195x205x65 mm",
            "Weight": "850 g",
            "Connectors": "BNC, RCA / Cinch, USB A, USB B, Mini-DIN for stirrer",
            "Compatible with Intelligent Sensor Management (ISM)": "Yes",
            "Portable Meter": "No",
            "Product Line": "SevenDirect"
        }
    },
    "cond-meter-sevendirect-sd30-kit": {
        id: "cond-meter-sevendirect-sd30-kit",
        name: "Cond Meter SevenDirect SD30 Kit",
        image: Sd30Kit, // replace with your actual import reference
        logo: Mettler,
        bannerImg: Banner2,
        altText: "Cond Meter SevenDirect SD30 Kit",
        videoId: "DBJ_Gs5H76Y", // Replace if actual video available
        meta: {
            title: "Cond Meter SevenDirect SD30 Kit Distributor And Service Provider In India | Mettler Toledo | Inkarp",
            description: "Explore the Mettler Toledo Cond Meter SevenDirect SD30 Kit – trusted for precise and reliable conductivity measurement. Distributed and serviced by Inkarp Instruments across India.",
            keywords: [
                "Mettler Toledo SD30 India, SevenDirect SD30 conductivity meter, conductivity meter for lab, SD30 kit with InLab 731-ISM, high accuracy conductivity measurement, Inkarp Instruments conductivity meters, SD30 Mettler Toledo distributor India"
            ],
            altText: "Cond Meter SevenDirect SD30 Kit",
            internalLinks: ["Internal Product Pages Links"],
            externalLinks: ["Mettler Toledo Website"]
        },
        description: [
            {
                heading: "Distributor & Service Provider In India",
                description: "Mettler Toledo's SevenDirect SD30 Kit, distributed by Inkarp Instruments in India, embodies precision conductivity measurement. This conductivity meter kit is a testament to Mettler Toledo's commitment to excellence, providing trusted results and confident decision-making in critical applications across various industries."
            },
            {
                heading: "Straight to the Point",
                description: "SD30 conductivity meter with InLab 731-ISM conductivity/temperature sensor for measurements of medium and high conductivities. The kit includes an efficient electrode arm and conductivity standards for initial calibration."
            },
            {
                heading: "Mastered in No Time",
                description: "Large color touchscreen provides direct measurement and easy data entry. Instructions guide users through the sensor calibration process."
            },
            {
                heading: "Tracks Your Records",
                description: "The instrument stores data like timestamp, sample and sensor ID with every measurement and prints or exports records automatically."
            },
            {
                heading: "Tough Enough",
                description: "Closed connector compartment and replaceable cover keep the instrument safe from dust and spills, even with sensors attached (IP54 in-use)."
            }
        ],
        specs: {
            "Parameter": "Conductivity",
            "Channel": "Single-channel",
            "Version kit": "Ready-to-measure kit",
            "Sensor": "InLab 731-ISM",
            "Conductivity measuring range": "0.001 μS/cm – 2000 mS/cm",
            "Conductivity resolution": "0.001 – 2",
            "Conductivity accuracy (±)": "0.5 %",
            "Temperature Range": "-30 °C – 130 °C",
            "Temperature resolution": "0.1 °C",
            "Temperature accuracy (±)": "±0.1 °C between 0 °C and 100 °C",
            "Ease of Use": "Touch screen",
            "Calibration Support": "Guided Verification, Simple Methods, Multilingual Menu",
            "Security and compliance": "GLP, User management",
            "Memory size": "2000 standard measurements",
            "Data Transfer": "PC, Printer, USB stick",
            "Flexibility and modularity": "Stirrer, Barcode reader",
            "Protection Rating": "Watertight and dustproof (IP54)",
            "Sensor Included": "Generalist Sensor",
            "Display Type": "7\" Color TFT",
            "Meter Type": "Benchtop Single-Channel",
            "Dimensions": "195x205x65 mm",
            "Weight": "850 g",
            "Connectors": "Mini-DIN (Conductivity), USB A (x2), USB B, Mini-DIN for stirrer",
            "Compatible with Intelligent Sensor Management (ISM)": "Yes",
            "Portable Meter": "No",
            "Product Line": "SevenDirect"
        }
    },

    "ph-cond-meter-sevendirect-sd23-kit": {
        id: "ph-cond-meter-sevendirect-sd23-kit",
        name: "pH/Cond Meter SevenDirect SD23 Kit",
        image: Sd23, // replace with your actual import reference
        logo: Mettler,
        bannerImg: Banner2,
        altText: "pH/Cond Meter SevenDirect SD23 Kit",
        videoId: "DBJ_Gs5H76Y", // Replace if actual video available
        meta: {
            title: "pH/Cond Meter SevenDirect SD23 Kit Distributor And Service Provider In India | Mettler Toledo | Inkarp",
            description: "Discover the Mettler Toledo SevenDirect SD23 Kit – a dual-channel pH and conductivity meter that offers accurate, flexible, and reliable measurement. Distributed and supported by Inkarp Instruments across India.",
            keywords: [
                "Mettler Toledo SD23 India, SevenDirect SD23 pH conductivity meter, SD23 dual-channel meter, SD23 meter kit with InLab sensors, dual parameter lab meter, Inkarp Instruments Mettler Toledo India, pH/Cond meter distributor India"
            ],
            altText: "pH/Cond Meter SevenDirect SD23 Kit",
            internalLinks: ["Internal Product Pages Links"],
            externalLinks: ["Mettler Toledo Website"]
        },
        description: [
            {
                heading: "Distributor & Service Provider In India",
                description: "SevenDirect SD23 Kit, distributed by Inkarp Instruments in India, showcases Mettler Toledo’s innovation in multi-parameter instrumentation. This pH and conductivity meter offers precision, flexibility, and ease of use for laboratories and quality control teams. With Inkarp's trusted service and support, users gain reliable and consistent performance."
            },
            {
                heading: "Straight to the Point",
                description: "SD23 pH/conductivity meter with InLab Expert-Pro ISM pH/temperature sensor and InLab 731 ISM conductivity/temperature sensor with automatic sensor recognition. Includes electrode arm and standards for calibration."
            },
            {
                heading: "Mastered in No Time",
                description: "The large color touchscreen enables direct measurement and user-friendly data entry. Step-by-step calibration guidance enhances accuracy and speed."
            },
            {
                heading: "Tracks Your Records",
                description: "Every measurement is recorded with timestamp, sample, and sensor ID, and can be exported or printed automatically for easy documentation."
            },
            {
                heading: "Tough Enough",
                description: "Built with a closed connector compartment and replaceable cover, the SD23 remains dustproof and splash-proof even during use (IP54 protection)."
            }
        ],
        specs: {
            "Parameter": "pH, Conductivity, ORP",
            "Channel": "Dual-channel",
            "Version kit": "Ready-to-measure kit",
            "Sensor": "InLab® Expert Pro-ISM, InLab® 731-ISM",
            "pH resolution": "0.1, 0.01, 0.001",
            "pH accuracy (±)": "0.002",
            "Conductivity measuring range": "0.001 μS/cm – 2000 mS/cm",
            "Conductivity resolution": "0.001 – 2",
            "Conductivity accuracy (±)": "0.5 %",
            "mV resolution": "1, 0.1",
            "mV accuracy (±)": "0.1",
            "mV measuring range": "-2000..2000 mV",
            "Temperature Range": "-30 °C – 130 °C",
            "Temperature resolution": "0.1 °C",
            "Temperature accuracy (±)": "±0.1 °C between 0 °C and 100 °C",
            "Ease of Use": "Touch screen",
            "Calibration Support": "Guided Verification, Simple Methods, Multilingual Menu",
            "Security and compliance": "GLP, User management",
            "Memory size": "2000 standard measurements",
            "Data Transfer": "PC, Printer, USB stick",
            "Flexibility and modularity": "Stirrer, Barcode reader",
            "Protection Rating": "Watertight and dustproof (IP54)",
            "Sensor Included": "Generalist Sensor",
            "Display Type": "7\" Color TFT",
            "Meter Type": "Benchtop Dual-Channel",
            "Dimensions": "195x205x65 mm",
            "Weight": "850 g",
            "Connectors": "BNC, RCA / Cinch, Mini-DIN (conductivity), USB A (x2), USB B, Mini-DIN (for stirrer)",
            "Compatible with Intelligent Sensor Management (ISM)": "Yes",
            "Portable Meter": "No",
            "Product Line": "SevenDirect"
        }
    },

    "ph-ion-meter-sevendirect-sd50-kit": {
        id: "ph-ion-meter-sevendirect-sd50-kit",
        name: "pH/Ion Meter SevenDirect SD50 Kit",
        image: Sd50Kit, // replace with your actual import reference
        logo: Mettler,
        bannerImg: Banner2,
        altText: "pH/Ion Meter SevenDirect SD50 Kit",
        videoId: "DBJ_Gs5H76Y", // Replace if actual video available
        meta: {
            title: "pH/Ion Meter SevenDirect SD50 Kit Distributor And Service Provider In India | Mettler Toledo | Inkarp",
            description: "Explore the Mettler Toledo SevenDirect SD50 Kit – a high-precision pH and ion meter for advanced lab applications. Distributed and serviced by Inkarp Instruments across India.",
            keywords: [
                "Mettler Toledo SD50 India, SevenDirect SD50 pH ion meter, SD50 ion concentration meter, SD50 pH meter for lab, ion selective electrode meter, Inkarp Instruments Mettler Toledo, SD50 pH/Ion meter distributor India"
            ],
            altText: "pH/Ion Meter SevenDirect SD50 Kit",
            internalLinks: ["Internal Product Pages Links"],
            externalLinks: ["Mettler Toledo Website"]
        },
        description: [
            {
                heading: "Distributor & Service Provider In India",
                description: "SevenDirect SD50 Kit, distributed by Inkarp Instruments in India, represents the pinnacle of pH and ion measurement technology. With advanced features and robust design, this instrument ensures exceptional accuracy, making it a trusted choice for researchers and quality assurance professionals across industries."
            },
            {
                heading: "Straight to the Point",
                description: "SD50 pH/ion meter with all-rounder InLab Expert-Pro ISM pH/temperature sensor featuring automatic sensor recognition. The kit includes an efficient electrode arm and pH buffer sachets for initial calibration."
            },
            {
                heading: "Mastered in No Time",
                description: "Large color touchscreen provides direct measurement and easy data entry. Instructions guide users through the sensor calibration process."
            },
            {
                heading: "Tracks Your Records",
                description: "The instrument stores data like timestamp, sample and sensor ID with every measurement and prints or exports records automatically."
            },
            {
                heading: "Tough Enough",
                description: "Closed connector compartment and replaceable cover keep the instrument safe from dust and spills, even with sensors attached (IP54 in-use)."
            }
        ],
        specs: {
            "Parameter": "pH, Ion, ORP",
            "Channel": "Single-channel",
            "Version kit": "Ready-to-measure kit",
            "Sensor": "InLab® Expert Pro-ISM",
            "pH resolution": "0.1, 0.01, 0.001",
            "pH accuracy (±)": "0.002",
            "Ion concentration measuring range": "0 – 999 999 mg/L (ppm), -2.000 – 20.000 pX",
            "Ion concentration resolution": "3 or 4 digits (auto-range)",
            "Ion concentration accuracy (±)": "0.5 %",
            "mV resolution": "1, 0.1",
            "mV accuracy (±)": "0.1",
            "mV measuring range": "-2000..2000 mV",
            "Temperature Range": "-30 °C – 130 °C",
            "Temperature resolution": "0.1 °C",
            "Temperature accuracy (±)": "±0.1 °C between 0 °C and 100 °C",
            "Ease of Use": "Touch screen",
            "Calibration Support": "Guided Verification, Simple Methods, Multilingual Menu",
            "Security and compliance": "Password protection, GLP",
            "Memory size": "2000 standard measurements",
            "Data Transfer": "PC, Printer, USB stick",
            "Flexibility and modularity": "Stirrer, Barcode reader",
            "Protection Rating": "IP54",
            "Sensor Included": "Generalist Sensor",
            "Display Type": "7\" Color TFT",
            "Meter Type": "Benchtop Single-Channel",
            "Dimensions": "195x205x65 mm",
            "Weight": "850 g",
            "Connectors": "BNC, RCA / Cinch, 2 mm Reference, USB A (x2), USB B, Mini DIN (for stirrer)",
            "Compatible with Intelligent Sensor Management (ISM)": "Yes",
            "Portable Meter": "No",
            "Product Line": "SevenDirect"
        }
    },

    "seven-excellence-ph-meter-s400-bio-kit": {
        id: "seven-excellence-ph-meter-s400-bio-kit",
        name: "SevenExcellence pH meter S400-Bio-Kit",
        image: S400bio, // replace with your actual import reference
        logo: Mettler,
        bannerImg: Banner2,
        altText: "SevenExcellence pH meter S400-Bio-Kit",
        videoId: "DBJ_Gs5H76Y", // Replace if actual video available
        meta: {
            title: "SevenExcellence pH meter S400-Bio-Kit Distributor And Service Provider In India | Mettler Toledo | Inkarp",
            description: "Explore the high-performance Mettler Toledo SevenExcellence S400-Bio-Kit – trusted by researchers for critical pH measurement in life sciences. Distributed and supported by Inkarp Instruments across India.",
            keywords: [
                "Mettler Toledo S400-Bio India, SevenExcellence pH meter, S400-Bio-Kit pH meter, Mettler Toledo S400 distributor India, advanced lab pH meter, Inkarp Instruments pH meter distributor, GLP 21 CFR pH meter, high-precision benchtop pH meter"
            ],
            altText: "SevenExcellence pH meter S400-Bio-Kit",
            internalLinks: ["Internal Product Pages Links"],
            externalLinks: ["Mettler Toledo Website"]
        },
        description: [
            {
                heading: "Distributor & Service Provider In India",
                description: "SevenExcellence S400-Bio-Kit, distributed by Inkarp Instruments in India, exemplifies Mettler Toledo's commitment to delivering high-performance pH measurement solutions for the life sciences. Trusted by researchers and QC specialists, it ensures precision, accuracy, and regulatory compliance."
            },
            {
                heading: "Unmatched Lab Performance",
                description: "SevenExcellence S400-Bio is a benchtop pH/mV meter kit equipped with InLab Routine Pro-ISM sensor. It is engineered for demanding lab workflows where data integrity and reproducibility matter most."
            },
            {
                heading: "Professional and Flexible",
                description: "Supports pH, ORP, and ISFET measurements with method-based operation and wide calibration and measurement configurations. Easily adaptable to changing application needs."
            },
            {
                heading: "Professional pH Calibration",
                description: "Enhances calibration integrity using guided methods and slope/offset monitoring for maximum accuracy. Ideal for regulated environments with strict SOPs."
            },
            {
                heading: "Efficient Workflow Support",
                description: "Simplifies the complete measurement cycle—from setup to result documentation—with intuitive touch interface and workflow-friendly features."
            }
        ],
        specs: {
            "Parameter": "pH, ORP",
            "Channel": "Single-channel",
            "Sensor": "InLab Routine Pro-ISM",
            "pH measuring range": "-2 – 20",
            "pH resolution": "0.001, 0.01, 0.1",
            "pH accuracy (±)": "0.002",
            "mV measuring range": "-2,000.000 – 2,000.000",
            "mV resolution": "0.1, 1",
            "mV accuracy (±)": "0.1",
            "Temperature Range": "-30 °C – 130 °C",
            "Temperature resolution": "0.1 °C",
            "Temperature accuracy (±)": "0.1 °C",
            "Security and compliance": "Password protection, GLP, 21 CFR part 11 support, User management, Program SOPs into methods",
            "Memory size": "250 analyses (20,000 data points)",
            "Data Transfer": "PC, Printer, USB stick",
            "Flexibility and modularity": "Upgrade for additional parameters, Stirrer, Automation, Barcode reader, LabX software",
            "Sensor Included": "Generalist (chemical resistant glass)",
            "Languages": "English, Italian, French, Russian, Portuguese, Chinese, Korean, German, Spanish, Japanese",
            "Display Type": "Color TFT Touchscreen",
            "Meter Type": "Benchtop Single-Channel",
            "Dimensions": "235 x 188 x 75 mm",
            "Weight": "1510 g",
            "Connectors": "LAN, USB A, USB B, RS232, Mini-DIN, BNC, Cinch/RCA, Mini-LTW",
            "Compatible with Intelligent Sensor Management (ISM)": "Yes",
            "Portable Meter": "No",
            "Product Line": "SevenExcellence"
        }
    },

    "seven-excellence-cond-meter-s700-std-kit": {
        id: "seven-excellence-cond-meter-s700-std-kit",
        name: "SevenExcellence Cond meter S700-Std-Kit",
        image: S700StdKit, // replace with your actual import reference
        logo: Mettler,
        bannerImg: Banner2,
        altText: "SevenExcellence Cond meter S700-Std-Kit",
        videoId: "DBJ_Gs5H76Y", // Replace if actual video available
        meta: {
            title: "SevenExcellence Cond meter S700-Std-Kit Distributor And Service Provider In India | Mettler Toledo | Inkarp",
            description: "Explore the high-precision Mettler Toledo SevenExcellence S700-Std-Kit – a premium conductivity meter for accurate TDS, salinity, and resistivity measurements. Distributed and supported by Inkarp Instruments across India.",
            keywords: [
                "Mettler Toledo S700 India, SevenExcellence S700 conductivity meter, S700-Std-Kit conductivity meter, Mettler Toledo S700 distributor India, high-precision conductivity meter, TDS salinity resistivity meter, Inkarp Instruments India, lab conductivity meter"
            ],
            altText: "SevenExcellence Cond meter S700-Std-Kit",
            internalLinks: ["Internal Product Pages Links"],
            externalLinks: ["Mettler Toledo Website"]
        },
        description: [
            {
                heading: "Distributor & Service Provider In India",
                description: "Mettler Toledo's SevenExcellence S700-Std-Kit, distributed by Inkarp Instruments in India, is a high-performance conductivity meter designed for exceptional accuracy and reliability. Trusted by researchers and QC labs across industries, it supports a wide range of conductivity applications with compliance-ready features."
            },
            {
                heading: "Unmatched Lab Performance",
                description: "SevenExcellence S700-Kit is a benchtop conductivity meter bundled with the InLab 731-ISM sensor. It enables precise measurements of conductivity, TDS, salinity, and resistivity across broad ranges."
            },
            {
                heading: "Professional and Contemporary",
                description: "This meter delivers accurate and consistent results, supporting conductivity, resistivity, salinity, and total dissolved solids. Designed for use in both routine and advanced laboratory applications."
            },
            {
                heading: "Ready for Immediate Deployment",
                description: "The S700-Std-Kit includes a high-quality sensor and is ready to measure out-of-the-box, streamlining conductivity testing and improving operational efficiency."
            },
            {
                heading: "Efficient Workflow Support",
                description: "From data entry to results, the user-friendly touchscreen interface ensures a smooth and intuitive measurement experience tailored for regulated environments."
            }
        ],
        specs: {
            "Parameter": "Conductivity",
            "Channel": "Single-channel",
            "Sensor": "InLab 731-ISM",
            "Conductivity measuring range": "0.001 μS/cm – 2000 mS/cm",
            "Conductivity resolution": "0.001 – 2",
            "Conductivity accuracy (±)": "0.5 %",
            "Temperature Range": "-30 °C – 130 °C",
            "Temperature resolution": "0.1 °C",
            "Temperature accuracy (±)": "0.1 °C",
            "Security and compliance": "Password protection, GLP, 21 CFR part 11 support, User management, Program SOPs into methods",
            "Memory size": "250 analyses (20,000 data points)",
            "Data Transfer": "PC, Printer, USB stick",
            "Flexibility and modularity": "Upgrade for additional parameters, Stirrer, Automation, Barcode reader, LabX software",
            "Sensor Included": "Generalist Sensor",
            "Dimensions": "235 x 188 x 75 mm",
            "Languages": "English, Italian, French, Russian, Portuguese, Chinese, Korean, German, Spanish, Japanese",
            "Weight": "1510 g",
            "Connectors": "LAN, USB A, USB B, RS232, Mini-DIN, Cinch/RCA, Mini-LTW",
            "Display Type": "Color TFT Touchscreen",
            "Meter Type": "Benchtop Single-Channel",
            "Portable Meter": "No",
            "Compatible with Intelligent Sensor Management (ISM)": "Yes",
            "Product Line": "SevenExcellence"
        }
    },

    "seven-excellence-ph-cond-meter-s470-std-k": {
        id: "seven-excellence-ph-cond-meter-s470-std-k",
        name: "SevenExcellence pH/Cond meter S470-Std-K",
        image: S470StdKit, // replace with your actual import reference
        logo: Mettler,
        bannerImg: Banner2,
        altText: "SevenExcellence pH/Cond meter S470-Std-K",
        videoId: "DBJ_Gs5H76Y", // Replace if actual video available
        meta: {
            title: "SevenExcellence pH/Cond meter S470-Std-K Distributor And Service Provider In India | Mettler Toledo | Inkarp",
            description: "Explore the Mettler Toledo SevenExcellence S470-Std-K – a high-precision dual-channel meter for pH and conductivity measurements. Distributed and supported by Inkarp Instruments across India.",
            keywords: [
                "Mettler Toledo S470 India, SevenExcellence S470 pH conductivity meter, dual-channel pH cond meter, InLab Expert Pro ISM, InLab 731 ISM, Mettler Toledo pH cond meter distributor, Inkarp Instruments India, lab dual parameter meter"
            ],
            altText: "SevenExcellence pH/Cond meter S470-Std-K",
            internalLinks: ["Internal Product Pages Links"],
            externalLinks: ["Mettler Toledo Website"]
        },
        description: [
            {
                heading: "Distributor & Service Provider In India",
                description: "SevenExcellence S470-Std-K, distributed by Inkarp Instruments in India, is a dual-channel high-performance meter that supports both pH and conductivity measurements. With advanced features, intuitive workflows, and exceptional accuracy, it's ideal for research and regulated labs alike."
            },
            {
                heading: "Unmatched Lab Performance",
                description: "SevenExcellence S470-Kit is a benchtop meter bundled with InLab Expert Pro-ISM (for pH) and InLab 731-ISM (for conductivity), offering powerful capabilities for multi-parameter analysis in a single device."
            },
            {
                heading: "Professional and Contemporary",
                description: "Two professional meters in one: pH, ORP, ISFET supplemented with conductivity, resistivity, salinity, total dissolved solids and conductivity ash – all in one seamless instrument."
            },
            {
                heading: "Ready for Immediate Deployment",
                description: "The S470-Std-Kit includes high-quality sensors and is pre-configured for pH and conductivity measurements, making it ideal for immediate implementation into laboratory workflows."
            },
            {
                heading: "Efficient Workflow Support",
                description: "From sample input to result documentation, the S470 offers intuitive navigation, fast data access, and streamlined user experience – ideal for GLP and 21 CFR Part 11 compliant environments."
            }
        ],
        specs: {
            "Parameter": "pH, Conductivity, ORP",
            "Channel": "Dual-channel",
            "Sensor": "InLab 731-ISM, InLab Expert Pro-ISM",
            "pH measuring range": "-2 – 20",
            "pH resolution": "0.001, 0.01, 0.1",
            "pH accuracy (±)": "0.002",
            "Conductivity measuring range": "0.001 μS/cm – 2000 mS/cm",
            "Conductivity resolution": "0.001 – 2",
            "Conductivity accuracy (±)": "0.5 %",
            "mV measuring range": "-2,000.000 – 2,000.000",
            "mV resolution": "0.1, 1",
            "mV accuracy (±)": "0.1",
            "Temperature Range": "-30 °C – 130 °C",
            "Temperature resolution": "0.1 °C",
            "Temperature accuracy (±)": "0.1 °C",
            "Security and compliance": "Password protection, GLP, 21 CFR part 11 support, User management, Program SOPs into methods",
            "Memory size": "250 analyses (20,000 data points)",
            "Data Transfer": "PC, Printer, USB stick",
            "Flexibility and modularity": "Upgrade for additional parameters, Stirrer, Automation, Barcode reader, LabX software",
            "Languages": "English, Italian, French, Russian, Portuguese, Chinese, Korean, German, Spanish, Japanese",
            "Display Type": "Color TFT Touchscreen",
            "Meter Type": "Benchtop Dual-Channel",
            "Dimensions": "235 x 188 x 75 mm",
            "Weight": "1510 g",
            "Connectors": "LAN, USB A, USB B, RS232, Mini-DIN, BNC, Cinch/RCA, Mini-LTW",
            "Compatible with Intelligent Sensor Management (ISM)": "Yes",
            "Portable Meter": "No",
            "Product Line": "SevenExcellence"
        }
    },

    "titrator-easyplus-easy-ph": {
        id: "titrator-easyplus-easy-ph",
        name: "Titrator EasyPlus Easy pH",
        image: EasyPh, // replace with your actual import reference
        logo: Mettler,
        bannerImg: Banner2,
        altText: "Titrator EasyPlus Easy pH",
        videoId: "DBJ_Gs5H76Y", // Replace if actual video available
        meta: {
            title: "Titrator EasyPlus Easy pH Distributor And Service Provider In India | Mettler Toledo | Inkarp",
            description: "Explore the Mettler Toledo EasyPlus Easy pH Titrator – a compact, intuitive solution for automated acid/base titration and pH measurement. Distributed and supported by Inkarp Instruments across India.",
            keywords: [
                "Mettler Toledo EasyPlus India, Easy pH Titrator, EasyPlus Acid/Base titrator, Mettler Toledo pH titration, Inkarp Instruments Titrator India, lab titration solution, iTitrate interface titrator, compact titration system"
            ],
            altText: "Titrator EasyPlus Easy pH",
            internalLinks: ["Internal Product Pages Links"],
            externalLinks: ["Mettler Toledo Website"]
        },
        description: [
            {
                heading: "Distributor & Service Provider In India",
                description: "EasyPlus Titrator and Easy pH meter, available from Inkarp Instruments, offer a user-friendly, automated solution for accurate titration and pH measurement. Ideal for industries including pharma, food, beverage, and environmental labs."
            },
            {
                heading: "The Acid/Base Titrator",
                description: "Everything needed for acid/base titration is included: from determining acidity in juices, milk, and wine, to calculating p- and m-values in water samples – the EasyPlus system simplifies the entire process."
            },
            {
                heading: "Simple & Affordable",
                description: "Swiss-engineered with high-quality components, this compact titrator offers excellent value and reliability – a perfect addition to any quality control laboratory."
            },
            {
                heading: "Quick and Easy Titration",
                description: "The iTitrate™ intelligence system requires only minimal input to start your titration, making setup fast and reducing chances of error."
            },
            {
                heading: "Intuitive iTitrate™ User Interface",
                description: "Operate with ease using the app-style UI. Save training time and boost operational efficiency with its simplified, icon-based navigation."
            }
        ],
        specs: {
            "Options": "EasyPump, USB-P25 printer, Temperature sensor, EasyDirect™ Titration PC Software",
            "PC Software": "EasyDirect",
            "Application Type": "Potentiometric",
            "Measurement Type": "Potentiometric",
            "Acid/Base": "Yes",
            "If…Then Conditions": "No",
            "Burette": "EasyPlus burette 20mL (included)",
            "User Interface": "iTitrate",
            "Flexibility and Modularity": "Sample weight transfer, PC software",
            "User Rights and Management": "No",
            "Parallel Titration": "No",
            "Connectivity and Software": "EasyDirect, USB export",
            "Parameter": "Acid/base",
            "Supported Stirrer Motors": "EasyStir GT (included)",
            "Number of Titration Methods": "1",
            "Sensor": "EG11-BNC sensor pH aqueous (included)"
        }
    },

    "titrator-easyplus-easy-pro": {
        id: "titrator-easyplus-easy-pro",
        name: "Titrator EasyPlus Easy Pro",
        image: EasyPro, // replace with your actual import reference
        logo: Mettler,
        bannerImg: Banner2,
        altText: "Titrator EasyPlus Easy Pro",
        videoId: "DBJ_Gs5H76Y", // Replace if actual video available
        meta: {
            title: "Titrator EasyPlus Easy Pro Distributor And Service Provider In India | Mettler Toledo | Inkarp",
            description: "Discover the Mettler Toledo EasyPlus Easy Pro – an all-in-one titration system for acid/base, precipitation, and redox titrations. Distributed and supported by Inkarp Instruments across India.",
            keywords: [
                "Mettler Toledo EasyPlus Pro India, Easy Pro Titrator, EasyPlus all-in-one titrator, acid base redox titration, Inkarp Instruments titration system, multiparameter titrator India, lab titration Mettler Toledo, EasyDirect titration software"
            ],
            altText: "Titrator EasyPlus Easy Pro",
            internalLinks: ["Internal Product Pages Links"],
            externalLinks: ["Mettler Toledo Website"]
        },
        description: [
            {
                heading: "Distributor & Service Provider In India",
                description: "EasyPlus Titrator Easy Pro, available from Inkarp Instruments, is an advanced multi-purpose titration system ideal for high-accuracy determination of parameters across food, beverage, pharmaceutical, and chemical industries."
            },
            {
                heading: "The All-in-One Titrator",
                description: "Combining acid/base, redox, and precipitation titration capabilities, Easy Pro is built to handle the most common and essential analyses in laboratories with ease and precision."
            },
            {
                heading: "Simple & Affordable",
                description: "Backed by Swiss engineering and high-quality materials, this compact titrator delivers robust and affordable performance, making it an asset in any lab focused on quality assurance and control."
            },
            {
                heading: "Quick and Easy Titration",
                description: "The built-in iTitrate™ intelligence system guides users through setup with minimal input, allowing for seamless operation and time-saving efficiency across multiple titration types."
            },
            {
                heading: "One Titrator for Many Needs",
                description: "Whether your analysis involves acid/base titrations, pH endpoints, or redox/precipitation indicators, the Easy Pro adapts to varied methods with exceptional accuracy."
            }
        ],
        specs: {
            "Options": "EasyPump, USB-P25 printer, Temperature sensor, EasyDirect™ Titration PC Software",
            "PC Software": "EasyDirect",
            "Application Type": "Potentiometric",
            "Measurement Type": "Potentiometric",
            "Precipitation": "Yes",
            "Redox": "Yes",
            "Acid/Base": "Yes",
            "Direct Measurement (Ion Selective)": "Yes",
            "If…Then Conditions": "No",
            "Burette": "EasyPlus burette 20mL (included)",
            "User Interface": "iTitrate",
            "Flexibility and Modularity": "Sample weight transfer, PC software",
            "User Rights and Management": "No",
            "Parallel Titration": "No",
            "Compliance and Data Security": "Password protection",
            "Connectivity and Software": "EasyDirect, USB export",
            "Parameter": "Precipitation, Redox, Acid/base",
            "Supported Stirrer Motors": "EasyStir GT (included)",
            "Number of Titration Methods": "3",
            "Sensor": "EG11-BNC sensor pH aqueous (included)"
        }
    },

    "titrator-easyplus-easy-kfv": {
        id: "titrator-easyplus-easy-kfv",
        name: "Titrator EasyPlus Easy KFV",
        image: EasyKfv, // replace with your actual import reference
        logo: Mettler,
        bannerImg: Banner2,
        altText: "Titrator EasyPlus Easy KFV",
        videoId: "DBJ_Gs5H76Y", // Replace if actual video available
        meta: {
            title: "Titrator EasyPlus Easy KFV Distributor And Service Provider In India | Mettler Toledo | Inkarp",
            description: "Explore the Mettler Toledo EasyPlus Easy KFV – a compact, intuitive solution for routine Karl Fischer volumetric titration. Distributed and supported by Inkarp Instruments across India.",
            keywords: [
                "Mettler Toledo Easy KFV India, EasyPlus Karl Fischer Titrator, water content titration India, EasyPlus Easy KFV, KF titrator Inkarp, volumetric KF titration meter, moisture analysis food chemical, compact Karl Fischer titrator"
            ],
            altText: "Titrator EasyPlus Easy KFV",
            internalLinks: ["Internal Product Pages Links"],
            externalLinks: ["Mettler Toledo Website"]
        },
        description: [
            {
                heading: "Distributor & Service Provider In India",
                description: "EasyPlus Easy KFV, available from Inkarp Instruments, is a specialized titration system tailored for accurate Karl Fischer water content analysis. Ideal for industries such as food, chemicals, and more."
            },
            {
                heading: "Water Determination Made Easy",
                description: "Everything needed for routine Karl Fischer volumetric titration is included – from 100 ppm to 100% water determination in a wide variety of sample matrices."
            },
            {
                heading: "Simple & Affordable",
                description: "Backed by Swiss engineering and premium materials, Easy KFV provides dependable, precise results in a compact and cost-effective footprint – ideal for QC and R&D labs."
            },
            {
                heading: "Quick and Easy Titration",
                description: "iTitrate™ technology ensures a smooth and quick titration setup – users only need to input minimal parameters to begin reliable water content measurement."
            },
            {
                heading: "Intuitive iTitrate™ User Interface",
                description: "Featuring a modern, app-style user interface, Easy KFV simplifies operation and shortens training time, improving lab efficiency and throughput."
            }
        ],
        specs: {
            "Options": "USB-P25 printer, EasyDirect™ Titration PC Software",
            "PC Software": "EasyDirect",
            "Application Type": "Karl Fischer (Volumetric)",
            "Measurement Type": "Karl Fischer (Volumetric)",
            "If…Then Conditions": "No",
            "Burette": "EasyPlus burette 10mL (included)",
            "User Interface": "iTitrate",
            "User Rights and Management": "No",
            "Pump": "EasyPump (included)",
            "Parallel Titration": "No",
            "Connectivity and Software": "EasyDirect, USB export",
            "Parameter": "Karl Fischer volumetric",
            "Supported Stirrer Motors": "EasyStir KF (included)",
            "Number of Titration Methods": "1",
            "Sensor": "EM43-BNC sensor redox ipol (included)"
        }
    },

    "titrator-excellence-t5": {
        id: "titrator-excellence-t5",
        name: "Titrator Excellence T5",
        image: TitratorExcellenceT5, // replace with your actual import reference
        logo: Mettler,
        bannerImg: Banner2,
        altText: "Titrator Excellence T5",
        videoId: "DBJ_Gs5H76Y", // Replace if actual video available
        meta: {
            title: "Titrator Excellence T5 Distributor And Service Provider In India | Mettler Toledo | Inkarp",
            description: "Explore the Mettler Toledo Titrator Excellence T5 – the versatile titration solution for all applications. Distributed and supported by Inkarp Instruments across India.",
            keywords: [
                "Mettler Toledo Excellence T5, T5 titrator India, T5 Karl Fischer titration, Titrator Excellence distributor Inkarp, LabX compliance titrator, InMotion automation titrator, advanced titration system, T5 potentiometric titrator"
            ],
            altText: "Titrator Excellence T5",
            internalLinks: ["Internal Product Pages Links"],
            externalLinks: ["Mettler Toledo Website"]
        },
        description: [
            {
                heading: "Distributor & Service Provider In India",
                description: "The Mettler Toledo Titrator Excellence T5, available from Inkarp Instruments, represents the pinnacle of titration technology, offering precision and reliability for pharmaceutical, food & beverage, and environmental labs."
            },
            {
                heading: "Versatile Titrator for All Applications",
                description: "The T5 supports both potentiometric and Karl Fischer titrations, and is expandable with additional burettes and compatible with InMotion automation systems for high-throughput workflows."
            },
            {
                heading: "One Click User Interface",
                description: "Simplify operations with a customizable touchscreen UI. Operators can run frequent workflows with just one tap, reducing errors and improving speed."
            },
            {
                heading: "Fully Flexible Automation",
                description: "Seamlessly integrates with Mettler Toledo’s InMotion autosamplers. Enables automatic rinsing, titration, and result recording without manual intervention."
            },
            {
                heading: "Solid Compliance",
                description: "LabX software enables complete compliance with 21 CFR Part 11 and EU Annex 11, providing secure data handling, electronic signatures, and audit trails."
            }
        ],
        specs: {
            "Additional Burette Drives (Optional)": "3 max. (1 for titration, 2 for dosing only)",
            "Method Functions per Method": "15 max.",
            "LabX Software": "Express and server (not included)",
            "Optional Extra Sensor Boards": "None",
            "Automation Option(s)": "InMotion, Rondolino",
            "PC Software": "LabX® PC Software",
            "Application Type": "Potentiometric, Karl Fischer (Coulometric), Karl Fischer (Volumetric)",
            "Hot Plug & Play": "Yes",
            "Measurement Type": "Chromatometric, Amperometric indication, Diazotitration, Redox, Complexometry, Conductometric, Thermometric, Iodometric, Direct measurement (ion selective), Multiple standard addition, Potentiometric, Precipitation, Voltametric indication, Single-phase & two-phase (surfactants), Photometric, Cerimetric, Bromatometric, Acid/base, Arsenometric",
            "If…Then Conditions": "No",
            "Shortcuts per user": "24",
            "Karl Fischer titration": "Yes",
            "User Rights and Management": "Fully flexible role definitions",
            "Solvent Manager Option": "Yes",
            "Parallel Titration": "No",
            "Max. number of methods": "150",
            "Samples per Analysis (Max.)": "303",
            "Barcode Reader Connection": "Yes (USB)",
            "Predefined methods": "60",
            "User-Defined Calculations": "Yes",
            "Tasks Running Simultaneously (Max.)": "0",
            "EQP titration": "Yes",
            "Generator Cell": "Diaphragm optional",
            "Task List (Max.)": "10",
            "One Click® User Interface": "Yes",
            "Flexibility and Modularity": "Automation, Diaphragm (KF), KF upgrade options, PC software, One-click user interface, User-defined calculations, Pre-installed methods, SmartSample, Additional burettes, Plug-and-play accessories, Sample weight transfer, SmartChemicals, Solvent manager, User management",
            "End point titration": "Yes",
            "Plug & Play Features": "Burettes and Sensors",
            "Terminal": "Color touch screen with StatusLight",
            "Drying Oven Option": "DO308 (manual)",
            "Upgradeability": "No",
            "Compliance and Data Security": "Password protection, 21 CFR Part 11, EudraLex, Volume 4, Annex 11 (with LabX software), User management (fully configurable)",
            "Printer Connection": "Yes (USB)",
            "Connectivity and Software": "LabX software, Network export, USB export",
            "Languages": "Chinese, English, French, German, Italian, Korean, Polish, Portuguese, Russian, Spanish"
        }
    },

    "titrator-compact-v20s": {
        id: "titrator-compact-v20s",
        name: "Titrator Compact V20S",
        image: V20s, // replace with your actual import reference
        logo: Mettler,
        bannerImg: Banner2,
        altText: "Titrator Compact V20S",
        videoId: "DBJ_Gs5H76Y", // Replace if actual video available
        meta: {
            title: "Titrator Compact V20S Distributor And Service Provider In India | Mettler Toledo | Inkarp",
            description: "Titrator Compact V20S, available from Inkarp Instruments, is a robust and compact system for accurate volumetric Karl Fischer titration. Distributed and supported across India.",
            keywords: [
                "Mettler Toledo V20S India",
                "Compact V20S titrator",
                "V20S Karl Fischer titrator",
                "Mettler Toledo Compact Titration",
                "LabX titrator",
                "Volumetric KF titration India",
                "Inkarp Instruments V20S",
                "Compact KF titrator India"
            ],
            altText: "Titrator Compact V20S",
            internalLinks: ["Internal Product Pages Links"],
            externalLinks: ["Mettler Toledo Website"]
        },
        description: [
            {
                heading: "Distributor & Service Provider In India",
                description: "The V20S extends usability with the same space saving design as the Compact Volumetric KF line. Accurate results from 100 ppm to 100% water. Supports 12 shortcuts per user + 5 analysis methods and LabX full lab data management."
            },
            {
                heading: "Solid Compliance",
                description: "In regulated environments, LabX software provides full support for your compliance needs to 21 CFR Part 11 and EU Annex 11."
            },
            {
                heading: "Robust Design, Accurate Results",
                description: "Special titration cell design minimizes ambient moisture interference for a low background drift value, ensuring accurate and repeatable measurements."
            },
            {
                heading: "One Click User Interface",
                description: "With the intuitive One Click touchscreen interface, you may customize the home screen to run your workflows quickly and easily with a single tap on the screen."
            }
        ],
        specs: {
            "Max. number of methods": "5",
            "Additional Burette Drives (Optional)": "None",
            "LabX Software": "Express and server (not included)",
            "Shortcuts per user": "12",
            "User-Defined Calculations": "No",
            "Application Type": "Karl Fischer (Volumetric)",
            "Measurement Type": "Karl Fischer (Volumetric)",
            "User Rights and Management": "Predefined Expert\" and \"Routine\" roles\"",
            "Solvent Manager Option": "Yes",
            "Parallel Titration": "No",
            "Samples per Analysis (Max.)": "120",
            "Barcode Reader Connection": "Yes (USB)",
            "Task List (Max.)": "0",
            "One Click® User Interface": "Yes",
            "Flexibility and Modularity": "Plug-and-play accessories, Sample weight transfer, SmartChemicals, PC software, Solvent manager, User-defined calculations, Pre-installed methods, User management",
            "Plug & Play Features": "Burettes and Sensors",
            "Drying Oven Option": "DO308 (manual)",
            "Compliance and Data Security": "Password protection, 21 CFR Part 11, EudraLex, Volume 4, Annex 11 (with LabX software), User management (fixed groups)",
            "Printer Connection": "Yes (USB)",
            "Connectivity and Software": "LabX software, Network export, USB export",
            "Measurement Range": "100 ppm – 100 %",
            "Automation Option(s)": "None",
            "Display": "Full-color 5.7 in VGA, touch screen",
            "Languages": "Chinese, English, French, German, Italian, Korean, Polish, Portuguese, Russian, Spanish"
        }
    },

    "titrator-compact-c10sx": {
        id: "titrator-compact-c10sx",
        name: "Titrator Compact C10SX",
        image: C10sx, // replace with your actual import reference
        logo: Mettler,
        bannerImg: Banner2,
        altText: "Titrator Compact C10SX",
        videoId: "DBJ_Gs5H76Y", // Replace if actual video available
        meta: {
            title: "Titrator Compact C10SX Distributor And Service Provider In India | Mettler Toledo | Inkarp",
            description: "Titrator Compact C10SX, distributed by Inkarp Instruments, is a reliable and compact coulometric Karl Fischer titrator. Ideal for labs needing precision, compliance, and simplicity.",
            keywords: [
                "Mettler Toledo C10SX India",
                "Compact C10SX titrator",
                "C10SX coulometric titrator",
                "Mettler Toledo Compact Titration",
                "Coulometric KF titration India",
                "Inkarp Instruments C10SX",
                "Lab titrator Mettler Toledo",
                "Compact KF titrator India"
            ],
            altText: "Titrator Compact C10SX",
            internalLinks: ["Internal Product Pages Links"],
            externalLinks: ["Mettler Toledo Website"]
        },
        description: [
            {
                heading: "Distributor & Service Provider In India",
                description: "Mettler Toledo's Titrator Compact C10SX, distributed and serviced by Inkarp Instruments in India, is a reliable and compact solution for precise pH, redox, and ion measurements. This user-friendly titrator is designed for simplicity and accuracy, making it ideal for routine laboratory applications. With Mettler Toledo's renowned quality and Inkarp Instruments' dedicated support, the C10SX ensures effortless operation, data integrity, and compliance with laboratory regulations, empowering laboratories to achieve accurate results with confidence."
            },
            {
                heading: "The c10sx extends usability",
                description: "The c10sx extends usability with the same space saving design as the Compact Volumetric KF line. Accurate results from 100 ppm to 100% water. Supports 12 shortcuts per user + 5 analysis methods and LabX full lab data management."
            },
            {
                heading: "Robust Design, Accurate Results",
                description: "Special titration cell design minimizes ambient moisture interference for a low background drift value, ensuring accurate and repeatable measurements."
            },
            {
                heading: "One Click User Interface",
                description: "With the intuitive One Click touchscreen interface, customize home screens to run your workflows quickly and easily with a single tap on the screen."
            },
            {
                heading: "Safe Chemical Handling",
                description: "Reduce user contact with chemicals by automatically draining and refilling the titrator cell and preventing waste overflow with dedicated accessories"
            }
        ],
        specs: {
            "Max. number of methods": "5",
            "Additional Burette Drives (Optional)": "None",
            "LabX Software": "Not compatible",
            "Shortcuts per user": "4",
            "User-Defined Calculations": "No",
            "PC Software": "No",
            "Application Type": "Karl Fischer (Coulometric)",
            "Measurement Type": "Karl Fischer (Coulometric)",
            "Karl Fischer titration": "Yes",
            "User Rights and Management": "Predefined Expert\" and \"Routine\" roles\"",
            "Solvent Manager Option": "No",
            "Parallel Titration": "No",
            "Samples per Analysis (Max.)": "120",
            "Barcode Reader Connection": "Yes (USB)",
            "Generator Cell": "Without diaphragm",
            "Automation": "No",
            "Task List (Max.)": "0",
            "One Click® User Interface": "Yes",
            "Flexibility and Modularity": "Plug-and-play accessories, Sample weight transfer, One-click user interface, Pre-installed methods, User management",
            "Plug & Play Features": "Sensors",
            "Drying Oven Option": "DO308 (manual)",
            "Compliance and Data Security": "Password protection, User management (fixed groups)",
            "Printer Connection": "Yes (USB)",
            "Connectivity and Software": "Network export, USB export",
            "Measurement Range": "1 ppm – 5 %",
            "Automation Option(s)": "None",
            "Display": "Full-color 5.7 in VGA, touch screen",
            "Languages": "Chinese, English, French, German, Italian, Korean, Polish, Portuguese, Russian, Spanish"
        }
    },

    "handheld-density-meter-densito": {
        id: "handheld-density-meter-densito",
        name: "Handheld Density Meter Densito",
        image: Densito, // replace with your actual import reference
        logo: Mettler,
        bannerImg: Banner2,
        altText: "Handheld Density Meter Densito",
        videoId: "DBJ_Gs5H76Y", // Replace if actual video available
        meta: {
            title: "Handheld Density Meter Densito Distributor And Service Provider In India | Mettler Toledo | Inkarp",
            description: "Densito Handheld Density Meter by Mettler Toledo, distributed by Inkarp Instruments in India, offers portable, precise, and efficient density measurements across industries like pharma, chemicals, and food.",
            keywords: [
                "Mettler Toledo Densito India",
                "Handheld Density Meter",
                "Portable Density Meter",
                "Densito distributor India",
                "Density testing on-the-go",
                "Mettler Toledo portable measurement",
                "Brix and specific gravity tester",
                "Inkarp Instruments density meter"
            ],
            altText: "Handheld Density Meter Densito",
            internalLinks: ["Internal Product Pages Links"],
            externalLinks: ["Mettler Toledo Website"]
        },
        description: [
            {
                heading: "Distributor & Service Provider In India",
                description: "Experience the power of precision density measurement with the Densito Handheld Density Meter from Mettler Toledo, distributed and serviced by Inkarp Instruments in India. This compact and user-friendly instrument is designed for swift and accurate density determination in various industries, including chemicals, pharmaceuticals, and food. Trust Mettler Toledo's expertise and Inkarp Instruments' dedicated support for expert distribution and service, empowering you to achieve accurate and efficient density measurements anywhere, anytime."
            },
            {
                heading: "Light, intuitive, and rugged.",
                description: "Designed to fit comfortably, the lightweight Densito allows for one-handed operation in the lab or on-the-go. Results are temperature-compensated and can be delivered in specific gravity, Brix, API units, and other formats."
            },
            {
                heading: "Analyze on the go",
                description: "With its ergonomic design, this lightweight instrument fits neatly into your hand"
            },
            {
                heading: "Easy sampling",
                description: "Comfortable measuring, using the joystick to control the automatic sampling pump, and avoid the added strain of manual sampling"
            },
            {
                heading: "Result range limits",
                description: "Set up a range of acceptable limits for your products: results outside this range are color-coded for instant identification"
            }
        ],
        specs: {
            "Measurement range (g/cm³)": "0 g/cm3 – 3 g/cm3",
            "Accuracy ± (g/cm³)": "0.001 g/cm3",
            "Repeatability (g/cm³)": "0.0005",
            "Resolution (g/cm³)": "0.0001 g/cm3",
            "Sample Temperature Range": "0 °C – 50 °C",
            "Temperature resolution": "0.1 °C",
            "Temperature accuracy (±)": "0.2 °C",
            "Minimum sample volume": "2.00 mL (2 mL)",
            "Ambient Temperature Range": "-10 °C – 50 °C",
            "Measurement scales": "Brix, Ethanol (Alcohol), H2SO4, Proof (US and IP), Specific gravity, User-defined concentration, Plato, API, Baumé, Density",
            "Temperature compensation": "Automatic",
            "Methods": "30",
            "Results Storage": "1100",
            "Languages": "English, Italian, Polish, Russian, French, Portuguese, Bahasa Indonesia, Korean, Chinese, German, Spanish, Thai",
            "Built-in Measurement Scales": "Density / Specific gravity, Alcohol tables, Acids / bases and chemical tables, User programmable tables / functions, Brix / Sugar tables",
            "Display / User interface": "2.4\" color screen, buttons and joystick",
            "Display": "2.4 color screen\"",
            "Navigation": "Buttons and joystick",
            "PC Software": "EasyDirect Density and Refractometry PC Software",
            "Connectivity": "USB-A, USB-C",
            "Password Protection": "Yes",
            "Security": "Password protection",
            "Color-coded result identification": "Yes",
            "Power": "Lithium ion battery",
            "Rechargable and removable battery": "Yes",
            "Weight": "355 g",
            "Product Type": "Portable Density Meter",
            "User management": "No (only password protection)",
            "LIMS connectivity": "No",
            "Norms and Standards": "ASTM D 1250"
        }
    },

    "density-meter-excellence-d4": {
        id: "density-meter-excellence-d4",
        name: "Density meter Excellence D4",
        image: DensityMeterExcellenceD4, // replace with your actual import reference
        logo: Mettler,
        bannerImg: Banner2,
        altText: "Density meter Excellence D4",
        videoId: "DBJ_Gs5H76Y", // Replace if actual video available
        meta: {
            title: "Density meter Excellence D4 Distributor And Service Provider In India | Mettler Toledo | Inkarp",
            description: "Excellence D4 Density Meter from Mettler Toledo, distributed by Inkarp Instruments, sets new standards in precision and compliance for benchtop density measurement across industries.",
            keywords: [
                "Mettler Toledo D4 India",
                "Density meter Excellence D4",
                "Benchtop density meter",
                "High accuracy density meter",
                "D4 lab density meter",
                "Inkarp Instruments Mettler D4",
                "Density testing equipment India",
                "LabX density meter D4"
            ],
            altText: "Density meter Excellence D4",
            internalLinks: ["Internal Product Pages Links"],
            externalLinks: ["Mettler Toledo Website"]
        },
        description: [
            {
                heading: "Distributor & Service Provider In India",
                description: "Achieve unparalleled density measurement excellence with the Excellence D4 Density Meter from Mettler Toledo, distributed and serviced by Inkarp Instruments in India. This premium instrument sets new standards in accuracy, precision, and user experience, making it ideal for demanding applications in research, quality control, and process monitoring."
            },
            {
                heading: "The all-rounder for daily routines.",
                description: "Accurate, intuitive, and modular, the Excellence D4 offers fast measurements with automatic temperature control, a real-time video view of the measuring cell and automatic viscosity correction. Everything via an incredibly easy-to-use user interface."
            },
            {
                heading: "Simple One Click™ Operation",
                description: "The One Click™ user interface enables users to start a complete workflow with one click including sampling, measuring, rinsing, drying, and SOPs."
            },
            {
                heading: "Smart Error Detection",
                description: "Measurements can be observed in real time via video, and sampling errors can be avoided with the automatic bubble detection algorithm."
            },
            {
                heading: "Result Limits",
                description: "Measurement limits can be set for color-coded pass/fail information for accepted and rejected samples."
            }
        ],
        specs: {
            "Measurement range (g/cm³)": "0 g/cm3 – 3 g/cm3",
            "Accuracy ± (g/cm³)": "0.0001 g/cm3",
            "Repeatability (g/cm³)": "0.00005 g/cm3",
            "Resolution (g/cm³)": "0.0001 g/cm3",
            "Temperature control range": "0 °C – 95 °C",
            "Temperature control": "Yes",
            "Measurement scales": "Density, Specific gravity, Alcohol, Acid, API, Sugar, Urea, User-defined concentration\nUp to 30 user-defined concentration tables (can be entered as tables or formulas).",
            "Minimum sample volume": "1.50 mL (1.5 mL)",
            "Integrated drying pump": "No",
            "Video view": "Yes",
            "Integrated pressure sensor": "Yes",
            "Automatic sample detection": "Yes",
            "Clean check": "Yes",
            "Automatic bubble detection (BubbleCheck™)": "Yes",
            "Automatic viscosity correction": "Yes",
            "Color-coded result identification": "Yes",
            "Built-in Measurement Scales": "Density / Specific gravity, Alcohol tables, Acids / bases and chemical tables, User programmable tables / functions, Brix / Sugar tables",
            "On-screen help texts": "Yes",
            "User management": "Yes",
            "Barcode reader connectivity": "Yes",
            "Languages": "English, Italian, French, Russian, Polish, Portuguese, Chinese, Korean, German, Spanish",
            "Display / User interface": "7\" display with color touchscreen",
            "Product Type": "Benchtop Density Meter",
            "Connectivity": "HDMI (Terminal), USB client (PC Software), Ethernet (Network and PC Software), 3 × USB host (printer, memory stick, barcode reader, hub, keyboard, mouse), RS232 (Automation units), CAN (Multiple LevelSens)",
            "PC Software": "LabX Express and Server",
            "Dimensions (Width x Height x Depth)": "267 x 226 x 256 mm",
            "Weight": "17.5 kg",
            "Standard compliance": "www.mt.com/dere-norms",
            "Note": "Accuracy valid under ideal conditions and for samples with low densities and viscosities",
            "User Management": "Yes",
            "Norms and Standards": "Ph. Eur. 2.2.5, DIN EN ISO 3675, ISO 2811-3, AOAC Official Method 988.06, IP 200/52, GBT 11540-2008, ASTM D 4806, API Std 2540, ASTM D 1475, USP chapter 841 (as of USP 29), GB/T 2013-2010, ISO 18301, EN 14214:2003, ASTM D 2501, ASTM D 6448, ASTM D 1250, DIN 51757, Chinese pharmacopoeia 0601, GB/T 13531.4-2013, ISO/EN 15212-1, ISO 12185-2, Pharm. Eu. (2005) JP (2005) USP (2006), IP 365, ASTM D 5002, ISO 91, ANSI 1250, GB5009.225—2016, ASTM D 4052, OIV Analysis method for density measurement in wine and musts, ASTM D5931, OIV MA-BS-03 and/or MA-BS-03, JJF1070-2005",
            "LIMS connectivity": "Yes",
            "Automation for Enhanced Workflow": "Autosampler (up to 303 samples), Multiparameter (refractive index, color, pH, etc), Sampling and cleaning (1 sample)",
            "Compliance / Data Security": "Audit Trail (requires LabX software), Data integrity (requires LabX software), 21 CFR part 11 / EU Annex 11 (requires LabX software)"
        }
    },

    "refractometer-excellence-r4": {
        id: "refractometer-excellence-r4",
        name: "Refractometer Excellence R4",
        image: ExcellenceR4, // replace with your actual import reference
        logo: Mettler,
        bannerImg: Banner2,
        altText: "Refractometer Excellence R4",
        videoId: "DBJ_Gs5H76Y", // Replace if actual video available
        meta: {
            title: "Refractometer Excellence R4 Distributor And Service Provider In India | Mettler Toledo | Inkarp",
            description: "Excellence R4 Refractometer by Mettler Toledo, distributed by Inkarp Instruments in India, delivers high-precision refractive index measurements for pharmaceutical, food, and chemical industries.",
            keywords: [
                "Mettler Toledo R4 India",
                "Refractometer Excellence R4",
                "Benchtop refractometer",
                "High accuracy refractometer",
                "R4 lab refractometer",
                "Inkarp Instruments Mettler R4",
                "Brix and refractive index measurement",
                "LabX refractometer R4"
            ],
            altText: "Refractometer Excellence R4",
            internalLinks: ["Internal Product Pages Links"],
            externalLinks: ["Mettler Toledo Website"]
        },
        description: [
            {
                heading: "Distributor & Service Provider In India",
                description: "Experience the pinnacle of refractive index measurement with the Excellence R4 Refractometer from Mettler Toledo, distributed and serviced by Inkarp Instruments in India. This cutting-edge instrument offers unparalleled accuracy, precision, and user experience, making it perfect for demanding applications in pharmaceuticals, food, and chemical industries. Trust Mettler Toledo's expertise and Inkarp Instruments' dedicated support for expert distribution and service."
            },
            {
                heading: "Accurate, Intuitive, and Modular.",
                description: "The all-rounder for daily routines: The Excellence R4 refractometer offers fast refractive index measurements in the range from 1.32 to 1.70, with automatic temperature control from 0 to 100°C."
            },
            {
                heading: "Simple One Click™ Operation",
                description: "The One Click™ user interface enables users to start a complete workflow with one click including sampling, measuring, rinsing, drying, and SOPs."
            },
            {
                heading: "User Management",
                description: "The user management system allows for different levels of access to be defined, with each user having their own personalized home screen and language."
            },
            {
                heading: "Result Limits",
                description: "Measurement limits can be set for color-coded pass/fail information for accepted and rejected samples."
            }
        ],
        specs: {
            "Measurement range nD": "1.3200 - 1.7000",
            "Accuracy nD (±)": "0.0001",
            "Repeatability nD (±)": "5e-005",
            "Measurement range Brix": "0-100 % w/w",
            "Accuracy Brix": "0.05 % w/w",
            "Temperature control range": "5 °C – 100 °C",
            "Temperature control accuracy (±)": "0.1 °C",
            "Minimum sample volume": "0.50 mL (0.5 mL)",
            "Measurement scales": "Refractive Index, Sugar (Brix and more), Acid/Base, Chemical, Freezing Point, Salt, Others\nUp to 30 user-defined concentration tables (can be entered as tables or formulas).",
            "Color-coded result identification": "Yes",
            "Accuracy Brix % w/w": "0.05",
            "On-screen help texts": "Yes",
            "Barcode reader connectivity": "Yes",
            "User management": "Yes",
            "Built-in Measurement Scales": "Others, Chemicals, acids, bases and freezing point tables, Refractive Index, Brix / Sugar tables",
            "Password Protection": "Yes",
            "Languages": "English, Italian, French, Russian, Polish, Portuguese, Chinese, Korean, German, Spanish",
            "Display / User interface": "7\" display with color touchscreen",
            "Connectivity": "HDMI (Terminal), USB client (PC Software), Ethernet (Network and PC Software), 3 × USB host (printer, memory stick, barcode reader, hub, keyboard, mouse), RS232 (Automation units), CAN (Multiple LevelSens)",
            "PC Software": "LabX Express and Server",
            "Dimensions (Width x Height x Depth)": "226 x 193 x 208 mm",
            "Product Type": "Benchtop refractometer",
            "Weight": "4.8 kg",
            "Standard compliance": "www.mt.com/dere-norms",
            "Dimensions (HxWxD)": "193 mm x 208 mm x 226 mm",
            "User Management": "Yes",
            "Funnel for Easy Sampling": "No",
            "LIMS connectivity": "Yes",
            "Main norms and standards": "AOAC 969.18, AOAC 943.05, OIV MA-AS2-02, UOP 816, AOAC 932.14, Section C, ICUMSA SPS-3 (2000), ASTM D3321, Ph. Eur. 2.2.6, AOAC 983.01, AOAC 948.10, AOAC 945.102, AOAC 969.38, ASTM D4095, ASTM D1747, AOAC 905.01, AOAC 976.20, AOAC 920.141, AOAC 896.02, AOAC 898.02, ASTM D5006, AOAC 950.13, ISO 280, GBT 10786-2006, USP 831, AOAC 921.08, AOAC 970.15, AOAC 970.59, ASTM D2140, AOAC 920.78, ASTM D4542, ASTM D 1807, A.O.C.S. Official method Cc7-25, OIML R 108, AOAC 983.17, OIV MA-AS312-01B, AOAC 953.16, AOAC 2000.19, AOAC 950.04, AOAC 940.09, AOAC 932.12, ASTM D524, GB/T 12143-2008, ICUMSA GS4/3 – 13 (2004), ISI 06-1e, ASTM D1218",
            "Compliance / Data Security": "Audit Trail (requires LabX software), Data integrity (requires LabX software), 21 CFR part 11 / EU Annex 11 (requires LabX software)"
        }
    },

    "handheld-refractometer-mybrix": {
        id: "handheld-refractometer-mybrix",
        name: "Handheld Refractometer MyBrix",
        image: HandheldRefractometerMybrix, // replace with your actual import reference
        logo: Mettler,
        bannerImg: Banner2,
        altText: "Handheld Refractometer MyBrix",
        videoId: "DBJ_Gs5H76Y", // Replace if actual video available
        meta: {
            title: "Handheld Refractometer MyBrix Distributor And Service Provider In India | Mettler Toledo | Inkarp",
            description: "MyBrix Handheld Refractometer by Mettler Toledo, distributed by Inkarp Instruments in India, delivers fast and reliable Brix and refractive index measurements across food, beverage, and pharmaceutical industries.",
            keywords: [
                "Mettler Toledo MyBrix India",
                "MyBrix Handheld Refractometer",
                "Portable Brix meter",
                "Handheld refractometer",
                "Sugar content analyzer",
                "Inkarp Instruments MyBrix",
                "Food and beverage Brix testing",
                "Pocket refractometer Mettler"
            ],
            altText: "Handheld Refractometer MyBrix",
            internalLinks: ["Internal Product Pages Links"],
            externalLinks: ["Mettler Toledo Website"]
        },
        description: [
            {
                heading: "Distributor & Service Provider In India",
                description: "You can rely on Inkarp Instruments for the distribution and servicing of Mettler Toledo's MyBrix Handheld Refractometer in India. This portable device is perfect for measuring refractive index, Brix, and temperature in various industries like food, beverages, and pharmaceuticals. With Mettler Toledo's expertise and Inkarp Instruments' dedicated support, you can trust the MyBrix Handheld Refractometer for reliable results and exceptional service."
            },
            {
                heading: "Instant and affordable sugar analysis..",
                description: "With a full Brix range and 10 integrated sugar-related scales, the MyBrix offers fast measurements of almost any food and beverage sample. A compact, robust, and weatherproof design makes this portable device ideal for field and on-site measurements."
            },
            {
                heading: "Measurements within seconds",
                description: "The MyBrix measures refractive index and sugar content instantly and precisely: Results are received within just 2 seconds in the desired scale."
            },
            {
                heading: "Fits in any pocket",
                description: "The MyBrix pocket refractometer is compact, lightweight, and designed to fit comfortably in the hand."
            },
            {
                heading: "Robust and durable",
                description: "With a weatherproof design (IP65 rated) and the rubberized keypad, MyBrix is ideal for measurements in the field and near the production line."
            }
        ],
        specs: {
            "Measurement range Brix": "0 - 95% w/w",
            "Accuracy Brix": "0.2 % w/w",
            "Measurement scales": "Refractive Index, Brix, Brix compensated 20 °C, HFCS 42 / 55 / 90, °Baumé, KMW, Oechsle German / Swiss, °Plato, Wort",
            "Measurement duration": "2 s",
            "Weight": "115 g",
            "IP rating": "IP65",
            "User management": "No",
            "Measurement range nD": "1.33 - 1.53",
            "Accuracy nD (±)": "0.0003",
            "Temperature compensation range": "5 - 60 °C",
            "Built-in Measurement Scales": "Refractive Index, Brix / Sugar tables",
            "Minimum sample volume": "0.3 mL",
            "Product Type": "Portable refractometer",
            "Measuring cell materials": "Glass and stainless steel",
            "Dimensions (LxHxW)": "115 mm x 30 mm x 54 mm",
            "Display / User interface": "1.8\" digital LCD",
            "Battery type": "3V, 2 x AAA (Alkaline batteries)",
            "Battery Life": "10,000 readings",
            "PC Software": "No",
            "Printout": "No",
            "Funnel for Easy Sampling": "No",
            "LIMS connectivity": "No"
        }
    },

    "melting-point-system-mp30": {
        id: "melting-point-system-mp30",
        name: "Melting Point System MP30",
        image: MeltingPointSystemMp30, // replace with your actual import reference
        logo: Mettler,
        bannerImg: Banner2,
        altText: "Melting Point System MP30",
        videoId: "DBJ_Gs5H76Y", // Replace with actual video ID if available
        meta: {
            title: "Melting Point System MP30 Distributor And Service Provider In India | Mettler Toledo | Inkarp",
            description: "MP30 Melting Point System by Mettler Toledo, distributed by Inkarp Instruments in India, provides precise and reproducible melting point determination for pharma, food, and chemical industries.",
            keywords: [
                "Mettler Toledo MP30 India",
                "Melting Point System MP30",
                "MP30 Melting Point Meter",
                "Mettler Toledo Melting Point Instrument",
                "Inkarp Instruments MP30",
                "MP30 Melting Range System",
                "Lab Melting Point Analysis",
                "Pharma QC Melting Point System"
            ],
            altText: "Melting Point System MP30",
            internalLinks: ["Internal Product Pages Links"],
            externalLinks: ["Mettler Toledo Website"]
        },
        description: [
            {
                heading: "Distributor & Service Provider In India",
                description: "Determine melting points with precision and ease using the MP30 Melting Point System from Mettler Toledo, distributed and serviced by Inkarp Instruments in India. This advanced instrument offers accurate and reproducible results, making it perfect for quality control, research, and development in pharmaceuticals, chemicals, and food industries. Trust Mettler Toledo's expertise and Inkarp Instruments' dedicated support for expert distribution and service, empowering you to achieve accurate and reliable results."
            },
            {
                heading: "For Simple Analyses.",
                description: "The MP30 is the ideal starter model for melting point and melting range determination, offering simultaneous determination of up to 3 melting point/melting range samples up to a maximum temperature of 570°F/300°C."
            },
            {
                heading: "Simple One Click™ Operation",
                description: "The One Click™ user interface enables users to start measurements with a single click of the button."
            },
            {
                heading: "Color video recording",
                description: "With the high resolution on-screen video, measurements can be observed in real time or conveniently replayed to verify the results."
            },
            {
                heading: "Trusted performance",
                description: "With the automatic detection of transmission intensity, highly accurate melting points or melting range temperatures are obtained."
            }
        ],
        specs: {
            "Temp. Range": "RT – 300°C",
            "Number of One Clicks™": "4",
            "Application Type": "Melting Point",
            "Min. Number of Melting Point Capillaries": "3 Melting Point Capillaries",
            "Min. Cooling Time (Tmax to 50°C)": "4 min",
            "User management": "Multiple Users",
            "Min. Heating Time (50°C to Tmax)": "3",
            "Data Export": "to USB Stick",
            "Heating Rate (/min)": "0.1 °C – 20 °C",
            "Stored Methods": "0",
            "Number of Capillaries/Cups": "3 Melting Point Capillaries",
            "PDF Reports": "Yes",
            "Stored Results": "1",
            "Substances in database": "0",
            "Video": "color, 1 video stored",
            "Languages": "English, Chinese, German, Spanish, French, Italian, Portuguese, Russian, Japanese, Korean",
            "Display / User interface": "7\" color display with touchscreen",
            "PC Software": "No",
            "Dimensions (Width x Height x Depth)": "18 x 35 x 19 cm",
            "Weight": "4 kg",
            "Standard compliance": "www.mt.com/mpdp-norms"
        }
    },

    "melting-point-system-mp80": {
        id: "melting-point-system-mp80",
        name: "Melting Point System MP80",
        image: MeltingPointSystemMp80, // replace with your actual import reference
        logo: Mettler,
        bannerImg: Banner2,
        altText: "Melting Point System MP80",
        videoId: "DBJ_Gs5H76Y", // Replace with actual video ID if available
        meta: {
            title: "Melting Point System MP80 Distributor And Service Provider In India | Mettler Toledo | Inkarp",
            description: "MP80 Melting Point System by Mettler Toledo, distributed by Inkarp Instruments in India, delivers accurate melting, boiling, cloud, and slip point measurements for pharmaceutical and chemical analysis.",
            keywords: [
                "Mettler Toledo MP80 India",
                "Melting Point System MP80",
                "Boiling Point Analyzer MP80",
                "Cloud Point Analyzer MP80",
                "Slip Melting Point Instrument",
                "MP80 Mettler Toledo Inkarp",
                "Advanced Melting Point Device",
                "Lab Melting Boiling Point System"
            ],
            altText: "Melting Point System MP80",
            internalLinks: ["Internal Product Pages Links"],
            externalLinks: ["Mettler Toledo Website"]
        },
        description: [
            {
                heading: "Distributor & Service Provider In India",
                description: "Climb to new heights of melting point determination with the MP80 Melting Point System from Mettler Toledo, distributed and serviced by Inkarp Instruments in India. This cutting-edge instrument sets new standards in accuracy, precision, and user experience, making it ideal for demanding applications in pharmaceuticals, chemicals, and research. Trust Mettler Toledo's expertise and Inkarp Instruments' dedicated support for expert distribution and service, empowering you to achieve unparalleled melting point determination."
            },
            {
                heading: "Maximum Flexibility.",
                description: "Optimized for diverse tasks, the MP80 offers One Click™ melting, boiling, cloud, and slip melting point determination up to a maximum temperature of 660°F/350°C."
            },
            {
                heading: "Simple One Click™ Operation",
                description: "The One Click™ user interface enables users to start measurements with a single click of the button."
            },
            {
                heading: "Color video recording",
                description: "With the high resolution on-screen video, measurements can be observed in real time or conveniently replayed to verify the results."
            },
            {
                heading: "Trusted performance",
                description: "The instrument offers automatic detection of melting, boiling, cloud, and slip melting points all in one."
            }
        ],
        specs: {
            "Temp. Range": "RT – 350°C",
            "Number of One Clicks™": "12 Per User",
            "Application Type": "Boiling Point, Cloud Point, Slip Melting Point, Melting Point",
            "Min. Number of Melting Point Capillaries": "3 Melting Point Capillaries",
            "Min. Cooling Time (Tmax to 50°C)": "5.5 min",
            "User management": "Password protection",
            "Protection of Settings": "Multiple Users",
            "Min. Heating Time (50°C to Tmax)": "4",
            "Data Export": "to SD Card, USB Stick or PC",
            "Heating Rate (/min)": "0.1 °C – 20 °C",
            "Stored Methods": "20",
            "Number of Capillaries/Cups": "3 Melting Point Capillaries, 2 Cloud Point Capillaries, 2 Boiling Point Capillaries, 2 Slip Melting Point Capillaries",
            "PDF Reports": "Yes",
            "Stored Results": "50",
            "Compliance / Data Security": "Audit Trail (requires LabX software), 21 CFR part 11 / EU Annex 11 (requires LabX software)",
            "Substances in database": "12",
            "Video": "color, 300 minutes",
            "Languages": "English, Chinese, German, Spanish, French, Italian, Portuguese, Russian, Japanese, Korean",
            "PC Software": "LabX Express and Server",
            "LIMS Connectivity": "Yes",
            "Display / User interface": "7\" color display with touchscreen",
            "PC Software (optional)": "Yes",
            "Dimensions (Width x Height x Depth)": "18 x 35 x 19 cm",
            "Weight": "4 kg",
            "Standard compliance": "www.mt.com/mpdp-norms"
        }
    }

}