import React, { useState } from "react";
// Logos & Images
import Mettler from '/src/assets/PrincipalLogos/RowTwo/Metller.png';
import C10sx from "/images/products/Mettler/c10sx.jpg";
import Densito from "/images/products/Mettler/densito.jpg";
import DensityMeterExcellenceD4 from "/images/products/Mettler/density-meter-excellence-d4.jpg";
import EasyKfv from "/images/products/Mettler/easy-kfv.jpg";
import EasyPh from "/images/products/Mettler/easy-ph.jpg";
import EasyPro from "/images/products/Mettler/easy-pro.jpg";
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


export const MoistureAnalyzer = {

    "halogen-moisture-analyzer-he53-230v": {
        id: "halogen-moisture-analyzer-he53-230v",
        name: "Halogen Moisture Analyzer HE53 (230V)",
        image: He53,
        logo: Mettler,
        bannerImg: Banner2,
        altText: "Halogen Moisture Analyzer HE53 (230V)",
        videoId: "DBJ_Gs5H76Y", // Replace if actual video available
        meta: {
            title: "Halogen Moisture Analyzer HE53 Distributor And Service Provider In India | Mettler Toledo | Inkarp",
            description: "Explore the Mettler Toledo Halogen Moisture Analyzer HE53 (230V) – ideal for precise, fast, and easy moisture determination. Supported by Inkarp Instruments, India’s trusted distributor and service partner.",
            keywords: [
                "Mettler Toledo HE53 India, Halogen Moisture Analyzer HE53, moisture analyzer 230V, HE53 drying unit, moisture testing balance, Inkarp Instruments Mettler Toledo, moisture analysis equipment, fast drying analyzer HE53"
            ],
            altText: "Halogen Moisture Analyzer HE53 (230V)",
            internalLinks: ["Internal Product Pages Links"],
            externalLinks: ["Mettler Toledo Website"]
        },
        description: [
            {
                heading: "Distributor & Service Provider In India",
                description: "The Halogen Moisture Analyzer HE53 (230V) is a cutting-edge solution for precise moisture determination in various industries. With its fast and accurate results, this analyzer is ideal for quality control, research, and development applications. Inkarp Instruments, a trusted distributor and service provider in India, ensures optimal performance, minimal downtime, and maximum productivity, making us the preferred partner for Mettler Toledo's moisture analysis solutions."
            },
            {
                heading: "Great for Simple Moisture Analysis",
                description: "0.01 %MC (1 mg) readability, bright backlit LCD display, progress indicator, one method, robust and compact design, 50-160° drying temperature."
            },
            {
                heading: "Reliable Moisture Results",
                description: "A straightforward instrument with all the basic functions you need for fast and efficient moisture measurements."
            },
            {
                heading: "Simple 3-Step Operation",
                description: "1. Tare the empty sample pan. 2. Place the sample. 3. Close the lid and start. Moisture analysis couldn't be easier."
            },
            {
                heading: "Affordable Quality",
                description: "With its simple high quality construction and rugged design, this instrument is suitable for both laboratory and production environments."
            }
        ],
        specs: {
            "Min. Recommended Moisture Range (%MC)": "1",
            "Readability MC": "0.01 %",
            "Drying Programs": "Standard, Rapid",
            "Repeatability (sd) with 2g Sample": "0.15 %",
            "Repeatability (sd) with 10g Sample": "0.05 %",
            "Method Storage (max.)": "1",
            "Results Storage": "1",
            "Result Handling": "Strip printing",
            "Switch-off criteria": "1 Automatic (SOC 3), Timed",
            "Test & Adjust": "Temperature (100 °C/160 °C)",
            "Drying Temperature": "50 °C – 160 °C",
            "Temperature Increments": "1 °C",
            "Display Mode": "%AM, %DC, g, %AD, %MC",
            "Application Flexibility": "Low",
            "Interfaces": "RS232",
            "Languages": "English",
            "Industry": "Others, Food",
            "Maximum Capacity": "54 g",
            "Voltage": "230V"
        }
    },

    "halogen-moisture-analyzer-he73-230v": {
        id: "halogen-moisture-analyzer-he73-230v",
        name: "Halogen Moisture Analyzer HE73 (230V)",
        image: He73,
        logo: Mettler,
        bannerImg: Banner2,
        altText: "Halogen Moisture Analyzer HE73 (230V)",
        videoId: "DBJ_Gs5H76Y", // Replace with actual video if available
        meta: {
            title: "Halogen Moisture Analyzer HE73 Distributor And Service Provider In India | Mettler Toledo | Inkarp",
            description: "Explore the Mettler Toledo Halogen Moisture Analyzer HE73 (230V) – rapid and accurate moisture analysis with advanced usability. Inkarp Instruments is your trusted Indian distributor and service provider.",
            keywords: [
                "Mettler Toledo HE73 India, Halogen Moisture Analyzer HE73, moisture analyzer 230V, HE73 drying unit, moisture testing balance, Inkarp Instruments Mettler Toledo, fast drying analyzer HE73, lab moisture analyzer India"
            ],
            altText: "Halogen Moisture Analyzer HE73 (230V)",
            internalLinks: ["Internal Product Pages Links"],
            externalLinks: ["Mettler Toledo Website"]
        },
        description: [
            {
                heading: "Distributor & Service Provider In India",
                description:
                    "The Halogen Moisture Analyzer HE73 (230V) is a high-performance solution for rapid and accurate moisture determination in a wide range of samples. With its advanced features and user-friendly interface, this analyzer is perfect for demanding applications in quality control, research, and development. Inkarp Instruments, a trusted distributor and service provider in India, ensures reliable support and expert service for your moisture analysis needs."
            },
            {
                heading: "Great for Simple Moisture Analysis",
                description:
                    "0.01 %MC (1 mg) readability, bright backlit LCD display, progress indicator, two methods, free switch-off criterion, standard and rapid drying, 50-200°C drying temperature."
            },
            {
                heading: "Reliable Moisture Results",
                description:
                    "A straightforward instrument with all the basic functions you need for fast and efficient moisture measurements."
            },
            {
                heading: "Simple Operation with Method Buttons",
                description:
                    "With two method shortcut buttons the instrument is easy to use even by untrained operators. The free switch-off criterion offers extra flexibility."
            },
            {
                heading: "Affordable Quality",
                description:
                    "With its simple high quality construction and rugged design, this instrument is suitable for both laboratory and production environments."
            }
        ],
        specs: {
            "Min. Recommended Moisture Range (%MC)": "1",
            "Readability MC": "0.01 %",
            "Drying Programs": "Standard, Rapid",
            "Repeatability (sd) with 2g Sample": "0.15 %",
            "Repeatability (sd) with 10g Sample": "0.05 %",
            "Method Storage (max.)": "2",
            "Results Storage": "1",
            "Result Handling": "Strip printing",
            "Switch-off criteria": "Freely Definable (1 mg/ 10-140 s), 1 Automatic (SOC 3), Timed",
            "Test & Adjust": "Temperature (100 °C/160 °C), SmartCal",
            "Drying Temperature": "50 °C – 200 °C",
            "Temperature Increments": "1 °C",
            "Display Mode": "%AM, %DC, g, %AD, %MC",
            "Application Flexibility": "Low",
            "Interfaces": "RS232",
            "Languages": "English",
            "Industry": "Others, Food",
            "Maximum Capacity": "71 g",
            "Voltage": "230V"
        }
    },
    "halogen-moisture-analyzer-hc103-230v": {
        id: "halogen-moisture-analyzer-hc103-230v",
        name: "Halogen Moisture Analyzer HC103 (230V)",
        image: Hc103,
        logo: Mettler,
        bannerImg: Banner2,
        altText: "Halogen Moisture Analyzer HC103 (230V)",
        videoId: "DBJ_Gs5H76Y", // Replace with actual video if available
        meta: {
            title: "Halogen Moisture Analyzer HC103 Distributor And Service Provider In India | Mettler Toledo | Inkarp",
            description: "Discover the Mettler Toledo Halogen Moisture Analyzer HC103 (230V) – a robust and intuitive solution for accurate moisture testing. Inkarp Instruments is your trusted distributor and service partner across India.",
            keywords: [
                "Mettler Toledo HC103 India, Halogen Moisture Analyzer HC103, moisture analyzer 230V, HC103 drying unit, moisture testing balance, Inkarp Instruments Mettler Toledo, touchscreen moisture analyzer, lab and production moisture analyzer"
            ],
            altText: "Halogen Moisture Analyzer HC103 (230V)",
            internalLinks: ["Internal Product Pages Links"],
            externalLinks: ["Mettler Toledo Website"]
        },
        description: [
            {
                heading: "Distributor & Service Provider In India",
                description: "The Halogen Moisture Analyzer HC103 (230V) is a robust and versatile solution for precise moisture determination in various industries. With its high-temperature halogen heating and advanced sensor technology, this analyzer ensures fast and accurate results. Inkarp Instruments, a trusted distributor and service provider in India, guarantees optimal performance, minimal downtime, and maximum productivity – making us the preferred partner for Mettler Toledo’s moisture analysis solutions."
            },
            {
                heading: "All-rounder for Routine Moisture Tasks",
                description: "0.01 %MC (1 mg) readability, user guidance, real-time drying curve, multiple languages, standard and rapid drying program, method (20) and results (100) storage."
            },
            {
                heading: "Intuitive OneClick™ Operation",
                description: "The large 7\" color touchscreen offers an easy to navigate user interface. The operator is guided graphically step by step through the workflow."
            },
            {
                heading: "Perfect for Lab and Production Floor",
                description: "The robust design guarantees reliable results and a long instrument lifetime, whether you work in a busy laboratory or a harsh production environment."
            },
            {
                heading: "Integrated Operator Training",
                description: "The setup wizard gets you up and running straight away. The instrument tutorial shows you how to conduct a measurement and create a method."
            }
        ],
        specs: {
            "Min. Recommended Moisture Range (%MC)": "1",
            "Readability MC": "0.01 %",
            "Drying Programs": "Standard, Rapid",
            "Repeatability (sd) with 2g Sample": "0.1 %",
            "Repeatability (sd) with 10g Sample": "0.015 %",
            "Method Storage (max.)": "20",
            "Results Storage": "100",
            "Result Handling": "Strip printing, Push to USB flash drive, Push to PC software",
            "Method Development Support": "Temperature Assistant, Method Wizard",
            "User management": "Protection of Settings",
            "Switch-off criteria": "Timed, 5 Automatic (SOC 1-5), Freely Definable (1-10 mg/ 5-300 s), Freely Definable (% Weight Loss/s)",
            "Test & Adjust": "Temperature (100 °C/160 °C), SmartCal, Weight",
            "Drying Temperature": "40 °C – 230 °C",
            "Temperature Increments": "1 °C",
            "Display Mode": "%AM, g/kg DC, %DC, g, %AD, g/kg MC, %MC",
            "Application Flexibility": "Low, Medium",
            "Interfaces": "USB, RS232",
            "Features": "Touchscreen, ID management, User guidance, Method shortcuts, Multiple languages, Real-time drying curve, Integrated method development support, Weigh-in aid",
            "Languages": "Italian, Russian, Polish, Korean, German, Japanese, English, French, Portuguese, Chinese, Spanish, Czech, Hungarian",
            "Industry": "Others, Chemical, Food",
            "Maximum Capacity": "101 g",
            "Voltage": "230 V"
        }
    },

    "halogen-moisture-analyzer-hx204": {
        id: "halogen-moisture-analyzer-hx204",
        name: "Halogen Moisture Analyzer HX204",
        image: Hx204,
        logo: Mettler,
        bannerImg: Banner2,
        altText: "Halogen Moisture Analyzer HX204",
        videoId: "DBJ_Gs5H76Y", // Replace with actual video if available
        meta: {
            title: "Halogen Moisture Analyzer HX204 Distributor And Service Provider In India | Mettler Toledo | Inkarp",
            description: "Explore the Mettler Toledo Halogen Moisture Analyzer HX204 – high-performance moisture analysis with 0.001% MC readability, compliance-ready features, and smart connectivity. Distributed by Inkarp Instruments across India.",
            keywords: [
                "Mettler Toledo HX204 India, Halogen Moisture Analyzer HX204, high precision moisture analyzer, HX204 drying unit, 0.001% MC moisture testing, Inkarp Instruments Mettler Toledo, lab moisture analyzer India, compliance-ready moisture balance"
            ],
            altText: "Halogen Moisture Analyzer HX204",
            internalLinks: ["Internal Product Pages Links"],
            externalLinks: ["Mettler Toledo Website"]
        },
        description: [
            {
                heading: "Distributor & Service Provider In India",
                description: "The Halogen Moisture Analyzer HX204 is a robust and versatile solution for precise moisture determination in various industries. With its high-temperature halogen heating and advanced sensor technology, this analyzer ensures fast and accurate results. Inkarp Instruments, a trusted distributor and service provider in India, guarantees optimal performance, minimal downtime, and maximum productivity – making us the preferred partner for Mettler Toledo’s moisture analysis solutions."
            },
            {
                heading: "High-Performance Moisture Analysis",
                description: "0.001 %MC (0.1mg) readability, user guidance, real-time drying curve, user management, method (300) & result (3000) storage, control charts, 4 drying programs, FACT, motorized lid."
            },
            {
                heading: "Accurate Results for All Sample Types",
                description: "Get highly reliable and repeatable moisture results thanks to fast halogen heating and superior weighing performance with high 0.001% MC readability."
            },
            {
                heading: "Designed for Compliance",
                description: "Smart compliance features to adhere to ALCOA+ principles with no original records on the moisture analyzer and automated export/printing functionality."
            },
            {
                heading: "Easy Connection via Multiple Interfaces",
                description: "For easy reporting, connect the instrument to a PC, FTP server, strip printer or network printer using either Wi-Fi, Ethernet, RS232 or USB."
            }
        ],
        specs: {
            "Min. Recommended Moisture Range (%MC)": "0.01",
            "Readability MC": "0.001 %",
            "Drying Programs": "Steps, Gentle, Standard, Rapid",
            "Repeatability (sd) with 2g Sample": "0.05 %",
            "Repeatability (sd) with 10g Sample": "0.01 %",
            "Method Storage (max.)": "300",
            "Results Storage": "3000",
            "Result Handling": "Page (A4/letter) printing, Network printing, Strip printing, Push to USB flash drive, Push to PC software, Export to network",
            "Method Development Support": "Test Measurement, Temperature Assistant, Method Wizard",
            "User management": "Password protection, Multiple Users, Auto-Lock",
            "Switch-off criteria": "Timed, 5 Automatic (SOC 1-5), Freely Definable (1-10 mg/ 5-300 s), Freely Definable (% Weight Loss/s)",
            "Test & Adjust": "3rd test temperature (customizable), Temperature (Customizable), Internal weight, Weight (Customizable), SmartCal",
            "Drying Temperature": "40 °C – 230 °C",
            "Temperature Increments": "1 °C",
            "Display Mode": "%AM, g/kg DC, %DC, g, %AD, g/kg MC, %MC",
            "Application Flexibility": "High, Low, Medium",
            "Interfaces": "USB, Ethernet/Wi-Fi, RS232",
            "Features": "Touchscreen, Result prediction, Internal weight, Real-time drying curve, User management, Weigh-in aid, ID management, Automatic lid, User guidance, Method shortcuts, Multiple languages, Control charts, Integrated method development support, Compliance ready",
            "Languages": "Italian, Russian, Polish, Korean, German, Japanese, English, French, Portuguese, Chinese, Spanish, Czech, Hungarian",
            "Industry": "Others, Chemical, Pharma, Plastics, Food",
            "Maximum Capacity": "201 g",
            "Voltage": "115V or 230V"
        }
    },

}