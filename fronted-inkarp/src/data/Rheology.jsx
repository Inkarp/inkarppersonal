import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useParams, Link, useNavigate } from "react-router-dom";
import Thermofisher from '/src/assets/PrincipalLogos/RowFive/thermofisher.png';
import FallingBallViscometer from "/images/products/Thermofisher/falling-ball-viscometers.jpg";
import OnlineRheometers from "/images/products/Thermofisher/online-rheometers.jpg";
import RotationalRheometers from "/images/products/Thermofisher/rotational-rheometers.jpg";
import RotationalViscometers from "/images/products/Thermofisher/rotational-viscometers.jpg";

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
}


}