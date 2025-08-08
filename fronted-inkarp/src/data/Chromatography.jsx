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
  }
}