import React, { useState } from "react";
import Waters from '/src/assets/PrincipalLogos/RowTwo/waters.svg';
import Labomatic from '/src/assets/PrincipalLogos/RowTwo/Labomatic.svg';
import ECom from '/src/assets/PrincipalLogos/RowTwo/ECom.png';

import Thermofisher from '/src/assets/PrincipalLogos/RowFive/thermofisher.png';

import FallingBallViscometer from "/images/products/Thermofisher/falling-ball-viscometers.jpg";
import OnlineRheometers from "/images/products/Thermofisher/online-rheometers.jpg";
import RotationalRheometers from "/images/products/Thermofisher/rotational-rheometers.jpg";
import RotationalViscometers from "/images/products/Thermofisher/rotational-viscometers.jpg";
import Banner1 from "/images/products/Banner/Banner1.jpg";
import Banner2 from "/images/products/Banner/Banner2.jpg";
import Banner3 from "/images/products/Banner/Banner3.jpg";


export const RheologyProducts = {
    "online-rheometers": {
        id: "online-rheometers",
        name: "Online Rheometers",
        image: OnlineRheometers, // replace with your imported image
        logo: Thermofisher,
        bannerImg: Banner3,
        altText: "Thermo Scientific™ HAAKE PCR Online Rheometer",
        videoId: "",
        meta: {
            title: "Thermo Scientific™ HAAKE PCR Online Rheometers | Inkarp India",
            description:
                "Thermo Scientific™ HAAKE PCR online rheometers provide precise online measurement of melt index and viscosity with advanced process control technology. Featuring a bypass design for higher sensitivity, die exit pressure control, and flexible pump configurations. Distributed and serviced by Inkarp Instruments across India.",
            keywords: [
                "Thermo Scientific Online Rheometers",
                "HAAKE PCR",
                "Melt Index Measurement",
                "Viscosity Measurement",
                "Process Control Rheometer",
                "Online Polymer Testing",
                "HAAKE PCR 620",
                "HAAKE PCR 630",
                "Inkarp Thermo Scientific Distributor",
                "Rheology Testing Equipment"
            ],
            altText: "Thermo Scientific™ HAAKE PCR Online Rheometer",
            internalLinks: ["rheometers-and-viscometers", "thermo-scientific-products"],
            externalLinks: ["https://www.thermofisher.com/"]
        },
        "description": `
<div style="display:flex;flex-wrap:wrap;gap:20px;font-family:Roboto;color:#333;">
    <div style="flex:1 1 60%;min-width:300px;">
        <div style="padding-left:20px;">
            <h2 style="font-size:28px;line-height:40px;font-weight:600;margin-bottom:10px;">
                Online Rheometers<br>
                <span style="font-size:18px;color:#e63946;font-weight:500;">Distributor &amp; Service Provider In India</span>
            </h2>
            <div style="margin-bottom:10px;font-size:16px;line-height:1.6;">
                <p>Thermo Scientific™ HAAKE PCR (Process Control Rheometer) measures the melt index at standard ASTM loads and (HAAKE PCR 630) still maintains a minimum lag time which remains almost constant over the wide melt index measurement range. The HAAKE PCR online rheometer features innovative process control technology for online rheological measurements of melt index and melt viscosity.</p>
                <p>The HAAKE PCR's bypass design makes it possible to measure the viscosity at low shear rates without compromising residence time, resulting in much higher sensitivity when comparing different molecular weight materials. The die exit pressure control feature allows the HAAKE PCR to operate at pre-defined pressures ensuring operation in the linear region of the transducers and preventing degassing of ingredients with high gas pressure. This also allows covering a wide melt index range and product transitions with a single die, eliminating costly and time-consuming die changes common to other systems.</p>
                <p>All HAAKE PCR systems have independent motor control for each pump, allowing fast and flexible control. The HAAKE PCR 620 is a 2-pump system giving fast response for products with medium and high melt index. The HAAKE PCR 630 is a 3-pump bypass system, enabling even shorter response times for low melt index products.</p>
            </div>
        </div>
    </div>
</div>

<div style="margin-top:30px;">
    <h4>Product Overview</h4>
    <table style="border-collapse:collapse;width:100%;border:1px solid #999;font-size:15px;">
        <thead>
            <tr style="background:#f5f5f5;">
                <th style="border:1px solid #999;padding:8px;"></th>
                <th style="border:1px solid #999;padding:8px;">Catalog Number</th>
                <th style="border:1px solid #999;padding:8px;">Specifications</th>
                <th style="border:1px solid #999;padding:8px;">Unit Size</th>
                <th style="border:1px solid #999;padding:8px;">Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="border:1px solid #999;padding:8px;text-align:center;">✔</td>
                <td style="border:1px solid #999;padding:8px;">550-0030</td>
                <td style="border:1px solid #999;padding:8px;">
                    <strong>Description:</strong> PCR 630 online rheometer<br>
                    <strong>Unit Size:</strong> Each
                </td>
                <td style="border:1px solid #999;padding:8px;">Each</td>
                <td style="border:1px solid #999;padding:8px;">PCR 630 online rheometer</td>
            </tr>
        </tbody>
    </table>

    <div style="margin-top:20px;background:#f5f5f5;border:1px solid #ccc;padding:15px;border-radius:5px;">
        <h4 style="margin-top:0;color:#E63946;">Recommended for:</h4>
        <p><strong>Applications:</strong></p>
        <ul style="padding-left:20px;list-style:disc;">
            <li>Online melt index measurement</li>
            <li>Online viscosity measurement</li>
        </ul>
        <p><strong>Materials:</strong></p>
        <ul style="padding-left:20px;list-style:disc;">
            <li>Polypropylene (PP)</li>
            <li>Polyethylene (LDPE/HDPE/LLDPE)</li>
            <li>Polyester (PET)</li>
            <li>Ethylen Vinyl Acetate (EVA)</li>
            <li>Polymethyl-methacrylate (PMMA)</li>
            <li>Polystyrene (PS)</li>
            <li>Polyamide / Nylon (PA)</li>
            <li>Polycarbonate (PC)</li>
        </ul>
    </div>

    <div style="margin-top:20px;">
        <iframe src='//players.brightcove.net/665001591001/I9XluuSon_default/index.html?videoId=6313725570112' width="100%" height="450" allowfullscreen frameborder="0"></iframe>
    </div>
</div>
`

    },

    "rotational-rheometers": {
        id: "rotational-rheometers",
        name: "Rotational Rheometers",
        image: RotationalRheometers, // your imported image
        logo: Thermofisher,
        bannerImg: Banner3,
        altText: "Thermo Scientific™ HAAKE™ MARS™ iQ Rotational Rheometers",
        videoId: "",
        meta: {
            title: "Thermo Scientific™ HAAKE™ MARS™ iQ Rotational Rheometers | Inkarp India",
            description:
                "Thermo Scientific™ HAAKE™ MARS™ iQ rotational rheometers deliver intuitive operation, flexible configurations (air- or ball-bearing), and reliable results for QC and R&D. Replace HAAKE RheoStress 1 and RotoVisco 1 with a modern platform. Distributed and serviced by Inkarp Instruments in India.",
            keywords: [
                "Rotational Rheometers",
                "HAAKE MARS iQ",
                "Thermo Scientific Rheometer",
                "Rheology QC",
                "Air bearing rheometer",
                "Ball bearing rheometer",
                "RheoWin software",
                "Inkarp Thermo distributor",
                "Rheology testing India"
            ],
            altText: "Thermo Scientific HAAKE MARS iQ rotational rheometer",
            internalLinks: ["rheometers-and-viscometers", "thermo-scientific-products"],
            externalLinks: ["https://www.thermofisher.com/"]
        },
        description: `
  <div style="display:flex;flex-wrap:wrap;gap:20px;font-family:Roboto,Arial,sans-serif;color:#333;max-width:100%;">
  <div style="flex:1 1 700px;min-width:280px;">
    <div style="padding-left:20px;padding-right:20px;box-sizing:border-box;">
      <figure style="margin:0 0 10px;">
        <a href="rheology-and-thermal-analysis.html" style="text-decoration:none;">
          <img src="assets/images/principals/thermofisher.png" alt="" style="height:32px;max-width:100%;object-fit:contain;">
        </a>
      </figure>

      <h2 style="font-size:28px;line-height:1.4;font-weight:700;margin:0 0 8px;color:#222;">
        Rotational Rheometers<br>
        <span style="font-size:18px;color:#E63946;font-weight:600;display:inline-block;margin-top:2px;">Distributor &amp; Service Provider In India</span>
      </h2>

      <div style="margin-bottom:14px;font-size:16px;line-height:1.6;">
        <p><strong>Thermo Scientific™ HAAKE™ MARS™ iQ Rotational Rheometers</strong> ensure intuitive, reliable and flexible rheological measurements. A sophisticated touchscreen lets SOPs run right from the instrument, while <em>Connect Assist</em> guides users for failure-free measurements.</p>
        <p>Choose air-bearing or ball-bearing systems to suit your lab. A broad range of accessories meets demanding QC and R&amp;D applications. <strong>MARS iQ</strong> replaces the discontinued <em>HAAKE™ RheoStress™ 1</em> and <em>HAAKE™ RotoVisco™ 1</em>.</p>
      </div>

      <!-- HIGHLIGHT: Key Benefits -->
      <div style="background:#fff6f7;border:1px solid #f2b7bf;padding:14px 16px;border-radius:8px;margin:18px 0;">
        <h3 style="margin:0 0 8px;color:#E63946;font-size:18px;font-weight:700;">Why MARS™ iQ</h3>
        <ul style="margin:0;padding:0 0 0 18px;">
          <li>7” multi-function touchscreen for instrument control &amp; SOP execution</li>
          <li>“Assist” &amp; “Connect Assist” features to simplify setup and prevent errors</li>
          <li>Color-coded connectors for quick, correct module selection</li>
          <li>HAAKE™ RheoWin™ software; optional 21 CFR Part 11 module</li>
          <li>Folded-H frame for stiffness and ultra-precise lift control</li>
          <li>Mineral composite frame: high damping, low thermal expansion, chemical resistance</li>
          <li>Next-gen EC motor; choice of mechanical (ball) or air bearing</li>
        </ul>
      </div>
    </div>
  </div>
</div>

<!-- PRODUCT OVERVIEW TABLE -->
<div style="margin-top:20px;max-width:100%;">
  <h3 style="color:#E63946;font-weight:700;margin:0 0 10px;padding:0 20px;box-sizing:border-box;">Product Overview</h3>

  <!-- Horizontal scroll wrapper for small screens -->
  <div style="width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch;border:1px solid #999;border-radius:6px;">
    <table style="border-collapse:collapse;width:100%;min-width:720px;font-size:15px;">
      <thead>
        <tr style="background:#f5f5f5;">
          <th style="border:1px solid #999;padding:10px;width:40px;"></th>
          <th style="border:1px solid #999;padding:10px;">Catalog Number</th>
          <th style="border:1px solid #999;padding:10px;">Specifications</th>
          <th style="border:1px solid #999;padding:10px;">Unit Size</th>
          <th style="border:1px solid #999;padding:10px;">Description</th>
        </tr>
      </thead>
      <tbody>
        <!-- Air-bearing -->
        <tr>
          <td style="border:1px solid #999;padding:10px;text-align:center;">✔</td>
          <td style="border:1px solid #999;padding:10px;">379-0700</td>
          <td style="border:1px solid #999;padding:0;">
            <table style="border-collapse:collapse;width:100%;font-size:14px;">
              <tbody>
                <tr><td style="border:1px solid #ddd;padding:8px;width:45%;">Angular Resolution</td><td style="border:1px solid #ddd;padding:8px;">0.63 μrad</td></tr>
                <tr><td style="border:1px solid #ddd;padding:8px;">Description</td><td style="border:1px solid #ddd;padding:8px;">HAAKE MARS iQ Rheometer - air-bearing</td></tr>
                <tr><td style="border:1px solid #ddd;padding:8px;">Dimensions (L x W x H)</td><td style="border:1px solid #ddd;padding:8px;">480 × 390 × 670 mm</td></tr>
                <tr><td style="border:1px solid #ddd;padding:8px;">Frequency Range</td><td style="border:1px solid #ddd;padding:8px;">0.0001 to 100 Hz</td></tr>
                <tr><td style="border:1px solid #ddd;padding:8px;">Lift Speed Range</td><td style="border:1px solid #ddd;padding:8px;">0.05 μm/s to 20 mm/s</td></tr>
                <tr><td style="border:1px solid #ddd;padding:8px;">Normal Force</td><td style="border:1px solid #ddd;padding:8px;">0.01–50 N; resolution 0.001 N</td></tr>
                <tr><td style="border:1px solid #ddd;padding:8px;">Rotational Speed Range</td><td style="border:1px solid #ddd;padding:8px;">0.001 to 2000 rpm</td></tr>
                <tr><td style="border:1px solid #ddd;padding:8px;">Temperature Range</td><td style="border:1px solid #ddd;padding:8px;">-60 °C to +400 °C</td></tr>
                <tr><td style="border:1px solid #ddd;padding:8px;">Torque Range</td><td style="border:1px solid #ddd;padding:8px;">Min rot: 0.001 mNm; Max rot: 150 mNm; Min osc: 0.001 mNm; Max osc: 150 mNm; Resolution: 0.007 μNm</td></tr>
                <tr><td style="border:1px solid #ddd;padding:8px;">Velocity Range</td><td style="border:1px solid #ddd;padding:8px;">0.0001 to 209.4 rad/s</td></tr>
                <tr><td style="border:1px solid #ddd;padding:8px;">Weight</td><td style="border:1px solid #ddd;padding:8px;">57 kg</td></tr>
                <tr><td style="border:1px solid #ddd;padding:8px;">Unit Size</td><td style="border:1px solid #ddd;padding:8px;">Each</td></tr>
              </tbody>
            </table>
          </td>
          <td style="border:1px solid #999;padding:10px;">Each</td>
          <td style="border:1px solid #999;padding:10px;">HAAKE MARS iQ Rheometer - air-bearing</td>
        </tr>

        <!-- Ball-bearing -->
        <tr>
          <td style="border:1px solid #999;padding:10px;text-align:center;">✔</td>
          <td style="border:1px solid #999;padding:10px;">379-0800</td>
          <td style="border:1px solid #999;padding:0;">
            <table style="border-collapse:collapse;width:100%;font-size:14px;">
              <tbody>
                <tr><td style="border:1px solid #ddd;padding:8px;width:45%;">Angular Resolution</td><td style="border:1px solid #ddd;padding:8px;">0.63 μrad</td></tr>
                <tr><td style="border:1px solid #ddd;padding:8px;">Description</td><td style="border:1px solid #ddd;padding:8px;">HAAKE MARS iQ Rheometer - ball-bearing</td></tr>
                <tr><td style="border:1px solid #ddd;padding:8px;">Dimensions (L x W x H)</td><td style="border:1px solid #ddd;padding:8px;">480 × 390 × 670 mm</td></tr>
                <tr><td style="border:1px solid #ddd;padding:8px;">Frequency Range</td><td style="border:1px solid #ddd;padding:8px;">0.01 to 20 Hz</td></tr>
                <tr><td style="border:1px solid #ddd;padding:8px;">Lift Speed Range</td><td style="border:1px solid #ddd;padding:8px;">0.05 μm/s to 20 mm/s</td></tr>
                <tr><td style="border:1px solid #ddd;padding:8px;">Rotational Speed Range</td><td style="border:1px solid #ddd;padding:8px;">0.01 to 2000 rpm</td></tr>
                <tr><td style="border:1px solid #ddd;padding:8px;">Temperature Range</td><td style="border:1px solid #ddd;padding:8px;">-60 °C to +400 °C</td></tr>
                <tr><td style="border:1px solid #ddd;padding:8px;">Torque Range</td><td style="border:1px solid #ddd;padding:8px;">Min/Max rot: 0.2 / 125 mNm; Min/Max osc: 0.2 / 125 mNm; Resolution: 2.0 μNm</td></tr>
                <tr><td style="border:1px solid #ddd;padding:8px;">Velocity Range</td><td style="border:1px solid #ddd;padding:8px;">0.001 to 209.4 rad/s</td></tr>
                <tr><td style="border:1px solid #ddd;padding:8px;">Weight</td><td style="border:1px solid #ddd;padding:8px;">57 kg</td></tr>
                <tr><td style="border:1px solid #ddd;padding:8px;">Unit Size</td><td style="border:1px solid #ddd;padding:8px;">Each</td></tr>
              </tbody>
            </table>
          </td>
          <td style="border:1px solid #999;padding:10px;">Each</td>
          <td style="border:1px solid #999;padding:10px;">HAAKE MARS iQ Rheometer - ball-bearing</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<div style="margin-top: 15px; font-family: Arial, sans-serif; line-height: 1.6; font-size: 15px; color: #333; padding:0 20px; box-sizing:border-box;">
  <p style="font-weight: bold; font-size: 16px; margin-bottom: 5px;">Intuitive Operations</p>
  <ul style="padding-left: 18px; margin-top: 5px; margin-bottom: 15px;">
    <li>Multifunctional 7’’ touchscreen for instrument operation and SOP execution right at your fingertips</li>
    <li>‘‘Assist‘‘ functionalities to simplify operation and prevent mistakes</li>
    <li>‘‘Connect Assist‘‘ quick coupling of measuring geometries and temperature modules with automatic recognition</li>
    <li>‘‘Color Assist‘‘ color-coded plugs for quick, correct selection of temperature modules</li>
    <li>HAAKE™ RheoWin™ Rheology Software for extensive measuring flexibility with free updates (Optional 21 CFR part 11 module available)</li>
  </ul>

  <p style="font-weight: bold; font-size: 16px; margin-bottom: 5px;">Intelligent Design</p>
  <ul style="padding-left: 18px; margin-top: 5px; margin-bottom: 15px;">
    <li>Folded H frame concept for greater stiffness and ultra-precise lift control with a wide travel range</li>
    <li>Durable material: high-performance mineral composite casting with high vibrational damping, minimal temperature expansion and high chemical resistance</li>
    <li>Next generation of highly dynamic, powerful EC motor with a mechanical or air bearing.</li>
  </ul>

  <p style="font-weight: bold; font-size: 16px; margin-bottom: 5px;">Individualized Configurations</p>
  <ul style="padding-left: 18px; margin-top: 5px; margin-bottom: 15px;">
    <li>Folded H frame concept for greater stiffness and ultra-precise lift control with a wide travel range</li>
    <li>Durable material: high-performance mineral composite casting with high vibrational damping, minimal temperature expansion and high chemical resistance</li>
    <li>Next generation of highly dynamic, powerful EC motor with a mechanical or air bearing.</li>
  </ul>

  <p style="font-weight: bold; font-size: 16px; margin-bottom: 5px;">Application solutions</p>
  <p style="margin-bottom: 10px;">The HAAKE MARS iQ Rheometers are well-suited for the rheological characterization of a broad range of samples from low-viscous or water-like up to stiff and paste-like semisolids:</p>
  <ul style="padding-left: 18px; margin-top: 5px; margin-bottom: 15px;">
    <li>Investigation of paints, coatings and inks: shear viscosity, thixotropy, yield stress, shear recovery, levelling and sagging behavior</li>
    <li>Rheology and textural properties of foods and foodstuffs: shear viscosity, yield stress, tribology, texture analysis (axial bending, breaking, squeezing tests), phase transition</li>
    <li>Rheology of cosmetics and pharmaceuticals: viscosity, yield stress, viscoelastic properties, stability tests</li>
    <li>Rheology of polymer (e.g. polymer melts and solutions): viscoelasticity, phase transitions (glass transition, crystallization, melting), processing behavior (hot melt extrusion, molding, spinning), molecular weight, curing</li>
    <li>Rheology of petrochemicals (crude oils, fracking liquids and drilling fluids): viscosity, yield stress, pressure dependent properties, stability tests, wax deposition, wax appearance temperature (WAT)</li>
    <li>Dynamic shear rheometer (DSR) tests according to AASHTO, ASTM and DIN used for bitumen and asphalt</li>
    <li>Construction and building material (cement paste and slurries): flow properties of suspensions with large particles</li>
  </ul>
</div>

<!-- VIDEOS -->
<div style="margin-top:18px; width:100%; padding:0 20px; box-sizing:border-box;">
  <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 280px;min-width:240px;">
      <iframe src='//players.brightcove.net/665001591001/8aOc5YfdB_default/index.html?videoId=6039517097001' style="width:100%;height:208px;border:0;display:block;" allowfullscreen></iframe>
    </div>
    <div style="flex:1 1 280px;min-width:240px;">
      <iframe src='//players.brightcove.net/665001591001/8aOc5YfdB_default/index.html?videoId=6158093179001' style="width:100%;height:208px;border:0;display:block;" allowfullscreen></iframe>
    </div>
    <div style="flex:1 1 280px;min-width:240px;">
      <iframe src='//players.brightcove.net/665001591001/8aOc5YfdB_default/index.html?videoId=6233085376001' style="width:100%;height:208px;border:0;display:block;" allowfullscreen></iframe>
    </div>
  </div>
</div>

`
    },
    "falling-ball-viscometer": {
        id: "falling-ball-viscometer",
        name: "Falling Ball Viscometer",
        image: FallingBallViscometer, // replace with your imported image
        logo: Thermofisher,
        bannerImg: Banner3,
        altText: "Thermo Scientific™ HAAKE Falling Ball Viscometer C",
        videoId: "",
        meta: {
            title: "Thermo Scientific™ HAAKE Falling Ball Viscometer C | Inkarp India",
            description:
                "Measure viscosity precisely using only a stopwatch and no power connection with the Thermo Scientific™ HAAKE™ Falling Ball Viscometer C. Among the most accurate viscometers available, especially with precise temperature control, it measures transparent Newtonian liquids and gases and complies with DIN 53015 / ISO 12058.",
            keywords: [
                "Falling Ball Viscometer",
                "HAAKE Falling Ball",
                "Thermo Scientific Viscometer",
                "DIN 53015",
                "ISO 12058",
                "Newtonian liquids viscosity",
                "Reference viscometer",
                "Viscosity measurement India",
                "Inkarp Thermo Scientific Distributor",
                "Laboratory viscometers"
            ],
            altText: "Thermo Scientific™ HAAKE Falling Ball Viscometer C",
            internalLinks: ["rheometers-and-viscometers", "thermo-scientific-products"],
            externalLinks: ["https://www.thermofisher.com/"]
        },
        description: `
        <div style="display:flex;flex-wrap:wrap;gap:20px;font-family:Roboto,Arial,sans-serif;color:#333;">
    <div style="flex:1 1 60%;min-width:300px;">
        <div style="padding-left:20px;">
            <h2 style="font-size:28px;line-height:40px;font-weight:600;margin-bottom:10px;">
                Falling Ball Viscometer<br>
                <span style="font-size:18px;color:#e63946;font-weight:500;"> Distributor &amp; Service Provider In India</span>
            </h2>
            <div style="margin-bottom:10px;font-size:16px;line-height:1.6;">
                <p class="font_family_poppins mb_10" style="margin:0 0 10px 0;">Measure viscosity precisely using only a stop watch and no power connection with the Thermo Scientific™ HAAKE™ Falling Ball Viscometer C.</p>
                <p style="margin:0 0 10px 0;">The measuring accuracy of the HAAKE Falling Ball Viscometer C is among the highest available in any type of viscometer, particularly when supported with the precise temperature control of a circulator. It provides accurate measurement of the viscosity of transparent Newtonian liquids and gases. The HAAKE Falling Ball Viscometer C also meets the requirements of the German DIN 53015 and ISO 12058 standard, and it is accepted as an official reference instrument.</p>
                <p style="margin:0;">HAAKE MARS iQ Rotational Rheometers are the replacements for the discontinued Thermo Scientific™ HAAKE™ RheoStress™ 1 Rheometer and Thermo Scientific™ HAAKE™ RotoVisco™ 1 Rotational Rheometer.</p>
            </div>
        </div>
    </div>
</div>

<div style="margin-top:30px;">
    <h4 style="margin:0 0 10px 0;font-size:20px;font-weight:700;color:#E63946;">Product Overview</h4>
    <!-- Responsive bordered table -->
    <div style="width:100%;overflow-x:auto;">
        <table style="border-collapse:collapse;width:100%;border:1px solid #999;font-size:15px;min-width:760px;">
            <thead>
                <tr style="background:#f5f5f5;">
                    <th style="border:1px solid #999;padding:8px;"></th>
                    <th style="border:1px solid #999;padding:8px;">Catalog Number</th>
                    <th style="border:1px solid #999;padding:8px;">Specifications</th>
                    <th style="border:1px solid #999;padding:8px;">Unit Size</th>
                    <th style="border:1px solid #999;padding:8px;">Temperature Range (Metric)</th>
                    <th style="border:1px solid #999;padding:8px;">Viscosity Range</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="border:1px solid #999;padding:8px;text-align:center;">
                        <span style="display:inline-block;width:16px;height:16px;background:#28a745;border-radius:3px;"></span>
                    </td>
                    <td style="border:1px solid #999;padding:8px;">3560001</td>
                    <td style="border:1px solid #999;padding:0;">
                        <!-- Inner specs table with borders -->
                        <table style="border-collapse:collapse;width:100%;border:1px solid #ccc;font-size:14px;">
                            <tbody>
                                <tr>
                                    <td style="border:1px solid #ccc;padding:6px;font-weight:600;width:40%;">Product Type</td>
                                    <td style="border:1px solid #ccc;padding:6px;">Falling Ball Viscometer</td>
                                </tr>
                                <tr>
                                    <td style="border:1px solid #ccc;padding:6px;font-weight:600;">Viscosity Range</td>
                                    <td style="border:1px solid #ccc;padding:6px;">0.5 to 1,000,000 cSt</td>
                                </tr>
                                <tr>
                                    <td style="border:1px solid #ccc;padding:6px;font-weight:600;">Certifications/Compliance</td>
                                    <td style="border:1px solid #ccc;padding:6px;">The HAAKE Falling Ball viscometer meets the requirements of the DIN 53015/ISO 12058 standards</td>
                                </tr>
                                <tr>
                                    <td style="border:1px solid #ccc;padding:6px;font-weight:600;">Material</td>
                                    <td style="border:1px solid #ccc;padding:6px;">Falling Tube, Balls 1, 2 and G, Borosilicate Glass; Balls 3, 4, 5 and 6, Nickel Iron Alloy</td>
                                </tr>
                                <tr>
                                    <td style="border:1px solid #ccc;padding:6px;font-weight:600;">Reproducibility</td>
                                    <td style="border:1px solid #ccc;padding:6px;">&lt;0.5%</td>
                                </tr>
                                <tr>
                                    <td style="border:1px solid #ccc;padding:6px;font-weight:600;">Temperature Range (Metric)</td>
                                    <td style="border:1px solid #ccc;padding:6px;">-20°C to +150°C</td>
                                </tr>
                                <tr>
                                    <td style="border:1px solid #ccc;padding:6px;font-weight:600;">Unit Size</td>
                                    <td style="border:1px solid #ccc;padding:6px;">Each</td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                    <td style="border:1px solid #999;padding:8px;">Each</td>
                    <td style="border:1px solid #999;padding:8px;">-20°C to +150°C</td>
                    <td style="border:1px solid #999;padding:8px;">0.5 to 1,000,000 cSt</td>
                </tr>
            </tbody>
        </table>
    </div>

    <br>

    <p style="font-weight:700;margin:0 0 6px 0;">Falling Ball Viscometer type C</p>
    <p style="margin:0 0 6px 0;"><strong>Includes:</strong></p>
    <ul class="prod-det" style="margin:0 0 12px 0;padding-left:18px;">
        <li>Falling ball tube with holder</li>
        <li>Set of 6 balls (No 1-6)</li>
        <li>Instrument Case</li>
        <li>Thermometer -1 °C bis +26 °C in 0,1 °C steps</li>
        <li>Cleaning tools, calibration sheet, instruction manual</li>
    </ul>

    <p style="margin:0 0 10px 0;"><strong>Requires:</strong> Stopwatch</p>

    <p style="margin:0 0 6px 0;"><strong>For transparent Newtonian liquids and gases for instance: </strong></p>
    <ul class="prod-det" style="margin:0 0 16px 0;padding-left:18px;">
        <li>Chemical industry (polymer solution, solvents)</li>
        <li>Pharmaceutical industry (raw materials, glycerine)</li>
        <li>Food industry (sugar solutions)</li>
        <li>Mineral oil industry (oils)</li>
    </ul>

    <!-- Videos: one row, responsive via horizontal scroll on small screens -->
    <div style="width:100%;overflow-x:auto;overflow-y:hidden;">
        <div style="display:flex;gap:12px;min-width:780px;">
            <iframe src='//players.brightcove.net/665001591001/8aOc5YfdB_default/index.html?videoId=6039517097001' width="100%" height="208" allowfullscreen frameborder="0" style="flex:1 0 33%;min-width:260px;"></iframe>
            <iframe src='//players.brightcove.net/665001591001/8aOc5YfdB_default/index.html?videoId=6158093179001' width="100%" height="208" allowfullscreen frameborder="0" style="flex:1 0 33%;min-width:260px;"></iframe>
            <iframe src='//players.brightcove.net/665001591001/8aOc5YfdB_default/index.html?videoId=6233085376001' width="100%" height="208" allowfullscreen frameborder="0" style="flex:1 0 33%;min-width:260px;"></iframe>
        </div>
    </div>
</div>`

    },
    "rotational-viscometers": {
        id: "falling-ball-viscometer",
    name: "Falling Ball Viscometer",
    image: FallingBallViscometer, // imported image
    logo: Thermofisher,
    bannerImg: Banner3,
    altText: "Thermo Scientific™ HAAKE™ Falling Ball Viscometer C",
    videoId: "",
    meta: {
        title: "Thermo Scientific™ HAAKE™ Falling Ball Viscometer C | Inkarp India",
        description:
            "Thermo Scientific™ HAAKE™ Falling Ball Viscometer C delivers precise viscosity measurement for transparent Newtonian liquids and gases without power supply. Complies with DIN 53015 and ISO 12058 standards, offering exceptional accuracy with temperature control. Distributed and serviced by Inkarp Instruments in India.",
        keywords: [
            "Falling Ball Viscometer",
            "Thermo Scientific HAAKE Viscometer",
            "Viscosity Measurement",
            "DIN 53015",
            "ISO 12058",
            "Transparent Liquids Viscosity",
            "Newtonian Liquids Testing",
            "Inkarp Thermo Scientific Distributor",
            "HAAKE Falling Ball Viscometer",
            "Industrial Viscosity Measurement"
        ],
        altText: "Thermo Scientific™ HAAKE™ Falling Ball Viscometer C",
        internalLinks: ["rheometers-and-viscometers", "thermo-scientific-products"],
        externalLinks: ["https://www.thermofisher.com/"]
    },
        description: `
        <div style="display:flex;flex-wrap:wrap;gap:20px;font-family:Roboto,Arial,sans-serif;color:#333;">
  <div style="flex:1 1 60%;min-width:300px;">
    <div style="padding-left:20px;">

      <h2 class="d_block fs_29 lh_40 fw_sbold font_family_inter mb_10" style="font-size:28px;line-height:40px;font-weight:600;margin:0 0 10px;">
        Rotational Viscometers<br><span class="subHeading" style="font-size:18px;color:#E63946;font-weight:600;"> Distributor &amp; Service Provider In India</span>
      </h2>

      <div class="text p_relative d_block mb_10" style="margin-bottom:10px;font-size:16px;line-height:1.6;">
        <p class="font_family_poppins mb_10" style="margin:0 0 10px 0;">Perform viscosity measurements with ease.  The Thermo Scientific™ HAAKE™ Viscotester™ 3 rotational viscometer ensures quick, reliable tests for QC applications.</p>
        <p style="margin:0 0 10px 0;">Use it as a handheld viscometer or on a lab stand. Color coding ensures measuring geometries match the analysis, the display is readable in any lighting, and the viscometer remembers the reference point measurement for you.  All that comes in a ready-to-go carrying case. </p>
        <p style="margin:0;">HAAKE Viscotester 3 Rotational Viscometer is the replacement for the discontinued Thermo Scientific™ HAAKE™ Viscotester™ 1 plus and 2 plus Rotational Viscometers.</p>
      </div>

    </div>
  </div>
</div>

<div class="product-discription p_relative d_block mb_80" style="margin-top:14px;">
  <div class="tabs-box">
    <div class="tab-btn-box p_relative d_block mb_35">
      <ul class="tab-btns tab-buttons clearfix" style="list-style:none;margin:0;padding:0;">
        <h2 class="tab-btn active-btn p_relative d_iblock technical-data fs_20 font_family_inter lh_20 float_left fw_medium z_1 mr_35 tran_5" data-tab="#tab-1" style="display:inline-block;font-size:20px;line-height:20px;font-weight:600;margin:0 0 12px;color:#E63946;">Product Overview</h2>
      </ul>
    </div>

    <div class="tabs-content">
      <div class="tab active-tab" id="tab-1">
        <div class="content-box">

          <!-- Responsive bordered table wrapper -->
          <div style="width:100%;overflow-x:auto;">
            <table class="table table-striped table-bordered" style="border-collapse:collapse;width:100%;border:1px solid #999;min-width:900px;">
              <thead>
                <tr style="background:#f5f5f5;">
                  <th style="border:1px solid #999;padding:10px;"></th>
                  <th style="border:1px solid #999;padding:10px;">Catalog Number</th>
                  <th style="border:1px solid #999;padding:10px;">Specifications</th>
                  <th style="border:1px solid #999;padding:10px;">Unit Size</th>
                  <th style="border:1px solid #999;padding:10px;">Description</th>
                  <th style="border:1px solid #999;padding:10px;">Viscosity Range</th>
                </tr>
              </thead>
              <tbody>

                <tr class="pdp-table__selected-sku">
                  <td style="border:1px solid #999;padding:10px;text-align:center;">
                    <span style="display:inline-block;width:16px;height:16px;background:#28a745;border-radius:3px;"></span>
                  </td>
                  <td style="border:1px solid #999;padding:10px;"><span class="pdp-table__catalog-number">399-0111</span></td>
                  <td style="border:1px solid #999;padding:0;">
                    <table class="pdp-table__full-specs" style="border-collapse:collapse;width:100%;font-size:14px;border-left:1px solid #ccc;border-right:1px solid #ccc;">
                      <tbody>
                        <tr><td class="pdp-table__full-specs-label" style="border:1px solid #ccc;padding:8px;width:40%;">Description</td><td class="pdp-table__full-specs-value" style="border:1px solid #ccc;padding:8px;">HAAKE Viscotester 3 Rotational Viscometer for low viscosity measurements</td></tr>
                        <tr><td class="pdp-table__full-specs-label" style="border:1px solid #ccc;padding:8px;">Includes</td><td class="pdp-table__full-specs-value" style="border:1px solid #ccc;padding:8px;">Base viscometer comes in carrying case with instrument holder (for lab stand), two measuring cups (A and B), three rotors (No. 3, 4 and 5), four rechargeable batteries and one power supply adapter. Easily upgrade your Thermo Scientific HAAKE Viscotester 1 Plus viscometer to this model; the results are compatible.</td></tr>
                        <tr><td class="pdp-table__full-specs-label" style="border:1px solid #ccc;padding:8px;">Measuring Accuracy</td><td class="pdp-table__full-specs-value" style="border:1px solid #ccc;padding:8px;">± 5% FSD (rotors R1, R2, R3) <div>± 7.5% FSD (rotor R5)</div> <div>± 10% FSD (rotor R4)</div></td></tr>
                        <tr><td class="pdp-table__full-specs-label" style="border:1px solid #ccc;padding:8px;">Power Supply</td><td class="pdp-table__full-specs-value" style="border:1px solid #ccc;padding:8px;">Operable by battery or power supply.</td></tr>
                        <tr><td class="pdp-table__full-specs-label" style="border:1px solid #ccc;padding:8px;">Rotational Speed Range</td><td class="pdp-table__full-specs-value" style="border:1px solid #ccc;padding:8px;">62.5 rpm</td></tr>
                        <tr><td class="pdp-table__full-specs-label" style="border:1px solid #ccc;padding:8px;">Temperature Range (Metric)</td><td class="pdp-table__full-specs-value" style="border:1px solid #ccc;padding:8px;">Up to 150°C</td></tr>
                        <tr><td class="pdp-table__full-specs-label" style="border:1px solid #ccc;padding:8px;">Viscosity Range</td><td class="pdp-table__full-specs-value" style="border:1px solid #ccc;padding:8px;">1.5 to 1300 mPas</td></tr>
                        <tr><td class="pdp-table__full-specs-label" style="border:1px solid #ccc;padding:8px;">Unit Size</td><td class="pdp-table__full-specs-value" style="border:1px solid #ccc;padding:8px;">Each</td></tr>
                      </tbody>
                    </table>
                  </td>
                  <td style="border:1px solid #999;padding:10px;">Each</td>
                  <td style="border:1px solid #999;padding:10px;">HAAKE Viscotester 3 Rotational Viscometer for low viscosity measurements</td>
                  <td style="border:1px solid #999;padding:10px;">1.5 to 1300 mPas</td>
                </tr>

                <tr class="pdp-table__selected-sku">
                  <td style="border:1px solid #999;padding:10px;text-align:center;">
                    <span style="display:inline-block;width:16px;height:16px;background:#28a745;border-radius:3px;"></span>
                  </td>
                  <td style="border:1px solid #999;padding:10px;"><span class="pdp-table__catalog-number">399-0112</span></td>
                  <td style="border:1px solid #999;padding:0;">
                    <table class="pdp-table__full-specs" style="border-collapse:collapse;width:100%;font-size:14px;border-left:1px solid #ccc;border-right:1px solid #ccc;">
                      <tbody>
                        <tr><td class="pdp-table__full-specs-label" style="border:1px solid #ccc;padding:8px;width:40%;">Description</td><td class="pdp-table__full-specs-value" style="border:1px solid #ccc;padding:8px;">HAAKE Viscotester 3 Rotational Viscometer for higher viscosity measurements</td></tr>
                        <tr><td class="pdp-table__full-specs-label" style="border:1px solid #ccc;padding:8px;">Includes</td><td class="pdp-table__full-specs-value" style="border:1px solid #ccc;padding:8px;">Base viscometer comes in carrying case with instrument holder (for lab stand), one measuring cup (No. 3), three rotors (No. 1, 2 and 3), four rechargeable batteries and one power supply adapter. Easily upgrade your Thermo Scientific HAAKE Viscotester 2 Plus viscometer to this model; the results are compatible.</td></tr>
                        <tr><td class="pdp-table__full-specs-label" style="border:1px solid #ccc;padding:8px;">Measuring Accuracy</td><td class="pdp-table__full-specs-value" style="border:1px solid #ccc;padding:8px;">± 5% FSD (rotors R1, R2, R3)<div>± 7.5% FSD (rotor R5)</div><div>± 10% FSD (rotor R4)</div></td></tr>
                        <tr><td class="pdp-table__full-specs-label" style="border:1px solid #ccc;padding:8px;">Power Supply</td><td class="pdp-table__full-specs-value" style="border:1px solid #ccc;padding:8px;">Operable by battery or power supply</td></tr>
                        <tr><td class="pdp-table__full-specs-label" style="border:1px solid #ccc;padding:8px;">Rotational Speed Range</td><td class="pdp-table__full-specs-value" style="border:1px solid #ccc;padding:8px;">62.5 rpm</td></tr>
                        <tr><td class="pdp-table__full-specs-label" style="border:1px solid #ccc;padding:8px;">Temperature Range (Metric)</td><td class="pdp-table__full-specs-value" style="border:1px solid #ccc;padding:8px;">Up to 150°C</td></tr>
                        <tr><td class="pdp-table__full-specs-label" style="border:1px solid #ccc;padding:8px;">Viscosity Range</td><td class="pdp-table__full-specs-value" style="border:1px solid #ccc;padding:8px;">30 to 400 000 mPas</td></tr>
                        <tr><td class="pdp-table__full-specs-label" style="border:1px solid #ccc;padding:8px;">Unit Size</td><td class="pdp-table__full-specs-value" style="border:1px solid #ccc;padding:8px;">Each</td></tr>
                      </tbody>
                    </table>
                  </td>
                  <td style="border:1px solid #999;padding:10px;">Each</td>
                  <td style="border:1px solid #999;padding:10px;">HAAKE Viscotester 3 Rotational Viscometer for higher viscosity measurements</td>
                  <td style="border:1px solid #999;padding:10px;">30 to 400 000 mPas</td>
                </tr>

              </tbody>
            </table>
          </div>

          <br>

          <p style="font-weight:700;margin:0 0 8px 0;"><strong>Designed for simplicity – The HAAKE Viscotester 3 Rotational Viscometer is built for ease of use to get you quickly to the right viscosity measurements:</strong></p>
          <ul class="prod-det" style="padding-left:18px;margin:0 0 16px 0;">
            <li>Smart alignment given by design and visualized by an electronic level</li>
            <li>Quick coupling of measuring geometries for fast and easy adaptation</li>
            <li>Color coded geometries and a geometry range indicator ensure correct rotor selection every time</li>
            <li>Adaptable display brightness ensures ideal readability in any environment</li>
            <li>Battery and power supply options allow the viscometer to be run anywhere</li>
            <li>Memory assist functionality allows you to quickly and easily compare measured viscosities with the reference point</li>
            <li>Selectable viscosity units (mPa s or dPa s)</li>
            <li>Compatibility with previous viscometer models</li>
          </ul>

          <p style="font-weight:700;margin:0 0 8px 0;"><strong>Recommended for: your entire process, from accepting the delivery of goods, to sampling during production and quality control (QC).</strong></p>
          <ul class="prod-det" style="padding-left:18px;margin:0 0 16px 0;">
            <ul style="padding-left:18px;margin:0;">
              <li>Printing inks, paints, inks and other coatings</li>
              <li>Shampoos, creams, lotions, and similar personal care products</li>
              <li>Oil, greases, pastes and similar substances</li>
              <li>Sauces, thickeners, and similar food products</li>
            </ul>
          </ul>

          <!-- Video (kept exactly as provided; wrapper ensures proper scaling & no overflow) -->
          <div class="row" style="margin-top:12px;">
            <div class="col-lg-12" style="width:100%;">
              <div style="width:100%;max-width:100%;overflow:hidden;">
                <iframe src='//players.brightcove.net/665001591001/I9XluuSon_default/index.html?videoId=6029198431001' width="100%" height="658px" allowfullscreen frameborder="0" style="display:block;border:0;max-width:100%;"></iframe>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</div>`

    },

}