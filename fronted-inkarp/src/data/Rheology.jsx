import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useParams, Link, useNavigate } from "react-router-dom";
import Thermofisher from '/src/assets/PrincipalLogos/RowFive/thermofisher.png';
import FallingBallViscometer from "/images/products/Thermofisher/falling-ball-viscometers.jpg";
import OnlineRheometers from "/images/products/Thermofisher/online-rheometers.jpg";
import RotationalRheometers from "/images/products/Thermofisher/rotational-rheometers.jpg";
import RotationalViscometers from "/images/products/Thermofisher/rotational-viscometers.jpg";

// Hitachi Thermal Analysis (images under /public/images/products/Hitachi)
import DataInputAndOutputOptionalSoftware from "/images/products/Hitachi/data-input-and-output-optional-software.jpg";
import DifferentialScanningCalorimeter from "/images/products/Hitachi/differential-scanning-calorimeter-dsc-nexta-dsc-series.jpg";
import RealViewSampleObservationUnit from "/images/products/Hitachi/real-view-sample-observation-unit.jpg";
import SimultaneousThermogravimetricAnalyzer from "/images/products/Hitachi/simultaneous-thermogravimetric-analyzer-nexta-sta-series.jpg";
import SoftwareForNexta from "/images/products/Hitachi/software-for-nexta.jpg";
import ThermomechanicalAnalyzer from "/images/products/Hitachi/thermomechanical-analyzer-tma7000-series.jpg";
import UVIrradiationUnit from "/images/products/Hitachi/uv-irradiation-unit-pdc-8.jpg";


export const Rheology = {
   "rheometers-and-viscometers": {
    models: [
        { heading: "Rheometers & Viscometers" },
        {
            name: "Online Rheometers",
            slug: "online-rheometers",
            image: OnlineRheometers// replace with your imported image
        },
        {
            name: "Rotational Rheometers",
            slug: "rotational-rheometers",
            image: RotationalRheometers // replace with your imported image
        },
        {
            name: "Falling Ball Viscometer",
            slug: "falling-ball-viscometer",
            image: FallingBallViscometer // replace with your imported image
        },
        {
            name: "Rotational Viscometers",
            slug: "rotational-viscometers",
            image: RotationalViscometers // replace with your imported image
        }
    ],
    meta: {
        title: "Rheometers & Viscometers | Thermo Scientific | Inkarp India",
        description: "Explore Thermo Scientific Rheometers & Viscometers, including online rheometers, rotational rheometers, falling ball viscometers, and rotational viscometers. Designed for accurate viscosity and rheological measurements in research and industry, distributed and serviced by Inkarp Instruments in India.",
        keywords: [
            "Online Rheometers",
            "Rotational Rheometers",
            "Falling Ball Viscometer",
            "Rotational Viscometers",
            "Thermo Scientific Rheometers",
            "Thermo Scientific Viscometers",
            "Viscosity measurement instruments",
            "Rheological testing equipment",
            "Inkarp Rheometer distributor",
            "Inkarp Viscometer distributor"
        ],
        altText: "Thermo Scientific Rheometers & Viscometers",
        internalLinks: ["rheology-instruments", "thermo-scientific-products"],
        externalLinks: ["https://www.thermofisher.com/"]
    }
},

  "thermal-analysis": {
    models: [
      { heading: "Hitachi Thermal Analysis" },
      {
        name: "Differential Scanning Calorimeter (DSC) — NEXTA DSC Series",
        slug: "nexta-dsc-series",
        image: DifferentialScanningCalorimeter,
      },
      {
        name: "Simultaneous Thermogravimetric Analyzer — NEXTA STA Series",
        slug: "nexta-sta-series",
        image: SimultaneousThermogravimetricAnalyzer,
      },
      {
        name: "Thermomechanical Analyzer — TMA7000 Series",
        slug: "tma7000-series",
        image: ThermomechanicalAnalyzer,
      },
      {
        name: "Software for NEXTA",
        slug: "software-for-nexta",
        image: SoftwareForNexta,
      },
      {
        name: "UV Irradiation Unit — PDC-8",
        slug: "uv-irradiation-unit-pdc-8",
        image: UVIrradiationUnit,
      },
      {
        name: "Real View® Sample Observation Unit",
        slug: "real-view-sample-observation-unit",
        image: RealViewSampleObservationUnit,
      },
      {
        name: "Data Input and Output — Optional Software",
        slug: "data-input-and-output-optional-software",
        image: DataInputAndOutputOptionalSoftware,
      },
    ],
    meta: {
      title:
        "Hitachi Thermal Analysis | NEXTA DSC/STA, TMA7000, Real View, PDC-8 | Inkarp India",
      description:
        "Explore Hitachi Thermal Analysis solutions: NEXTA DSC & STA, TMA7000 thermomechanical analyzer, Real View sample observation, UV Irradiation Unit PDC-8, and NEXTA software. Distributed and serviced by Inkarp Instruments in India.",
      keywords: [
        "Hitachi Thermal Analysis",
        "NEXTA DSC",
        "NEXTA STA",
        "TMA7000",
        "Real View sample observation",
        "UV irradiation unit PDC-8",
        "NEXTA software",
        "DSC",
        "TGA/STA",
        "Thermomechanical analyzer",
        "Inkarp Hitachi distributor",
      ],
      altText: "Hitachi Thermal Analysis Instruments",
      internalLinks: ["thermal-analysis-instruments", "hitachi-high-tech-products"],
      externalLinks: ["https://www.hitachi-hightech.com/"],
    },
  },




}