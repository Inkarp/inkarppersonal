import React, { useState } from "react";
import Waters from '/src/assets/PrincipalLogos/RowTwo/waters.svg';
import Labomatic from '/src/assets/PrincipalLogos/RowTwo/Labomatic.svg';
import ECom from '/src/assets/PrincipalLogos/RowTwo/ECom.png';


import Hitachi from '/src/assets/PrincipalLogos/RowSix/hitachi.png';

import DataInputAndOutputOptionalSoftware from "/images/products/Hitachi/data-input-and-output-optional-software.jpg";
import DifferentialScanningCalorimeter from "/images/products/Hitachi/differential-scanning-calorimeter-dsc-nexta-dsc-series.jpg";
import RealViewSampleObservationUnit from "/images/products/Hitachi/real-view-sample-observation-unit.jpg";
import SimultaneousThermogravimetricAnalyzer from "/images/products/Hitachi/simultaneous-thermogravimetric-analyzer-nexta-sta-series.jpg";
import SoftwareForNexta from "/images/products/Hitachi/software-for-nexta.jpg";
import ThermomechanicalAnalyzer from "/images/products/Hitachi/thermomechanical-analyzer-tma7000-series.jpg";
import UVIrradiationUnit from "/images/products/Hitachi/uv-irradiation-unit-pdc-8.jpg";

import Banner1 from "/images/products/Banner/Banner1.jpg";
import Banner2 from "/images/products/Banner/Banner2.jpg";
import Banner3 from "/images/products/Banner/Banner3.jpg";


export const HitachiProducts = {
    "nexta-dsc-series": {
        id: "nexta-dsc-series",
        name: "Differential Scanning Calorimeter (DSC) — NEXTA® DSC Series",
        image: DifferentialScanningCalorimeter,
        logo: Hitachi, // make sure you imported the Hitachi logo
        bannerImg: Banner3, // or whichever banner you want
        altText: "Hitachi NEXTA DSC Series",
        videoId: "",
        meta: {
            title: "Hitachi NEXTA® DSC Series | Differential Scanning Calorimeter | Inkarp India",
            description:
                "Discover the Hitachi NEXTA DSC Series, a high-performance differential scanning calorimeter offering world-class baseline repeatability, superior sensitivity, Real View® observation, and advanced safety. Distributed and supported in India by Inkarp Instruments.",
            keywords: [
                "Hitachi NEXTA DSC",
                "Differential Scanning Calorimeter",
                "DSC600",
                "DSC200",
                "NEXTA Thermal Analysis",
                "Heat Flux DSC",
                "Thermal analysis instruments",
                "DSC polymer testing",
                "Inkarp Hitachi Distributor",
                "DSC India"
            ],
            altText: "Hitachi NEXTA DSC Series",
            internalLinks: ["hitachi-thermal-analysis", "thermal-analysis-products"],
            externalLinks: [
                "https://www.hitachi-hightech.com/in/en/products/analytical-systems/thermal-analysis/nexta-dsc.html"
            ]
        },
        description: `
<div style="margin:0 auto;padding:0 16px;font-family:Roboto, Arial, sans-serif;color:#333;">

  <div style="margin-bottom:20px;">
    <h2 style="font-size:28px;line-height:40px;font-weight:600;margin-bottom:10px;font-family:MaxOT, Roboto, sans-serif;">
      Differential Scanning Calorimeter (DSC) — NEXTA® DSC Series
      <br>
      <span style="font-size:18px;color:#E63946;font-weight:500;">
        Distributor &amp; Service Provider In India
      </span>
    </h2>

    <div style="margin-bottom:10px;font-size:16px;line-height:1.65;">
      <p>Inkarp Instruments, a trusted 
        <a href="https://www.hitachi-hightech.com/in/en/products/analytical-systems/thermal-analysis/nexta-dsc.html" target="_blank" style="color:#E63946;font-weight:500;text-decoration:none;">Hitachi</a> 
        partner, presents the NEXTA DSC series, a premium Differential Scanning Calorimeter for thermal analysis in India. Ideal for R&amp;D, quality control, and material testing, Inkarp Instruments provides expert distribution, installation, training, and support for Hitachi's NEXTA DSC series.
      </p>
      <p>The NEXTA DSC series delivers superior sensitivity with exceptional baseline stability, wider Real View® temperature range, and specific heat capacity determination via the temperature modulated DSC method.</p>
      <p>Designed for user safety and reliability, NEXTA DSC provides cutting-edge measurement technology for polymers, inorganic materials, pharmaceuticals, and other industries.</p>
    </div>
  </div>

  <div style="margin-top:30px;">
    <h4 style="font-size:20px;font-weight:600;margin:18px 0 10px;font-family:MaxOT, Roboto, sans-serif;color:#BE0010;">Key Features</h4>

    <p><strong>World-class baseline repeatability</strong><br>
    Both NEXTA DSC600 and DSC200 use an advanced heat-flow design in the sensor. This allows the heat from the heat sink transferred evenly to the sample and the reference, resulting in the high baseline stability. Together with a furnace built with a low-heat-capacity three-layered insulation design, this allows the NEXTA DSC achieves world-class baseline repeatability and stability.</p>

    <p><strong>Superior sensitivity</strong><br>
    The NEXTA DSC600 has a proprietary thermopile-type DSC sensor. By using differential scanning calorimetry (DSC signal) temperature sensor thermocouples connected in series and multiplexed, the NEXTA DSCs achieve a high sensitivity of 0.1 µW or lower, enabling measurement of even smaller samples.</p>

    <img src="/images/products/Hitachi/ana-nexta-dsc.jpg" alt="NEXTA DSC Series" style="max-width:100%;border:1px solid #ddd;border-radius:5px;margin:15px 0;">
    <img src="/images/products/Hitachi/ana-nexta-dsc-2.jpg" alt="NEXTA DSC Series" style="max-width:100%;border:1px solid #ddd;border-radius:5px;margin:15px 0;">

    <p><strong>Wider Real View® range</strong><br>
    The Real View Sample Observation Unit has a built-in two-megapixel high-resolution camera that supports visual observation of the sample. The viewport (observation window) has a heating mechanism that extends the measurement range from the conventionally observable range of room temperature and above down to the low temperature of -50°C. This enables the user to observe processes such as the crystallization and the glass transition, for example, of samples at low temperatures. This offers a unique capability for understanding material behavior.</p>

    <img src="/images/products/Hitachi/ana-nexta-dsc-3.jpg" alt="NEXTA DSC Real View" style="max-width:100%;border:1px solid #ddd;border-radius:5px;margin:15px 0;">

    <p><strong>Specific heat capacity measurement</strong><br>
    The reversing heat flow (which shows glass transition and melting) and non-reversing heat flow (which shows enthalpy relaxation, curing, evaporation, decomposition, etc) are obtained from a modulated DSC measurement. This is useful when these transitions or reactions overlap or stress relief obscures a transition. The modulated DSC method can also be used for determining the specific heat capacity (Cp), which simplifies measuring Cp.</p>

    <img src="/images/products/Hitachi/ana-nexta-dsc-4.jpg" alt="NEXTA DSC Modulated" style="max-width:100%;border:1px solid #ddd;border-radius:5px;margin:15px 0;">
  </div>

  <div style="margin-top:30px;">
    <h4 style="font-size:20px;font-weight:600;margin:18px 0 10px;font-family:MaxOT, Roboto, sans-serif;color:#BE0010;">Specifications</h4>
    <div style="overflow-x:auto;">
      <table style="border-collapse:collapse;width:100%;font-size:15px;margin:10px 0;">
        <thead>
          <tr style="background:#f5f5f5;">
            <th style="border:1px solid #999;padding:8px;"></th>
            <th style="border:1px solid #999;padding:8px;">DSC600</th>
            <th style="border:1px solid #999;padding:8px;">DSC200</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style="border:1px solid #999;padding:8px;">Measurement principle</td><td colspan="2" style="border:1px solid #999;padding:8px;">Heat Flux</td></tr>
          <tr><td style="border:1px solid #999;padding:8px;">Temperature range</td><td colspan="2" style="border:1px solid #999;padding:8px;">-150℃ ～ 725℃</td></tr>
          <tr><td style="border:1px solid #999;padding:8px;">DSC dynamic range</td><td style="border:1px solid #999;padding:8px;">±100 mW</td><td style="border:1px solid #999;padding:8px;">±200 mW</td></tr>
          <tr><td style="border:1px solid #999;padding:8px;">RMS noise / Sensitivity</td><td style="border:1px solid #999;padding:8px;">0.05 µW / 0.1 µW</td><td style="border:1px solid #999;padding:8px;">0.1 µW / 0.2 µW</td></tr>
          <tr><td style="border:1px solid #999;padding:8px;">Calorimetric precision</td><td colspan="2" style="border:1px solid #999;padding:8px;">±0.05% (10 consecutive measurements)</td></tr>
          <tr><td style="border:1px solid #999;padding:8px;">Baseline repeatability</td><td colspan="2" style="border:1px solid #999;padding:8px;">±5 µW (-50 ~ 300°C, 10°C/min)</td></tr>
          <tr><td style="border:1px solid #999;padding:8px;">Programmable rate</td><td colspan="2" style="border:1px solid #999;padding:8px;">0.01℃ ～ 100℃/min</td></tr>
          <tr><td style="border:1px solid #999;padding:8px;">Purge gas</td><td colspan="2" style="border:1px solid #999;padding:8px;">Air, Inert gas</td></tr>
          <tr><td style="border:1px solid #999;padding:8px;">Purge gas control</td><td colspan="2" style="border:1px solid #999;padding:8px;">Mass flow controller, 2 lines</td></tr>
          <tr><td style="border:1px solid #999;padding:8px;">Auto Sampler *</td><td colspan="2" style="border:1px solid #999;padding:8px;">Max. 50 samples</td></tr>
          <tr><td style="border:1px solid #999;padding:8px;">Electrical Cooling Unit *</td><td colspan="2" style="border:1px solid #999;padding:8px;">-80℃ ～ 500℃</td></tr>
          <tr><td style="border:1px solid #999;padding:8px;">Auto LN2 Cooling Unit *</td><td colspan="2" style="border:1px solid #999;padding:8px;">-150℃ ～ 725℃</td></tr>
          <tr><td style="border:1px solid #999;padding:8px;">Auto Air Cooling Unit *</td><td colspan="2" style="border:1px solid #999;padding:8px;">Ambient ～ 725℃</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
`

    },
    "nexta-sta-series": {
        id: "nexta-sta-series",
        name: "Simultaneous Thermogravimetric Analyzer — NEXTA® STA Series",
        image: SimultaneousThermogravimetricAnalyzer, // ensure this import exists
        logo: Hitachi,                                 // ensure logo import
        bannerImg: Banner3,                            // your chosen banner
        altText: "Hitachi NEXTA STA Series",
        videoId: "",
        meta: {
            title: "Hitachi NEXTA® STA Series | Simultaneous Thermogravimetric Analyzer | Inkarp India",
            description:
                "NEXTA STA Series by Hitachi: horizontal digital dual beam balance, new balance control tech, Real View®, DSC function and Cp measurement options, and high-temperature control programs. Distributed & supported in India by Inkarp Instruments.",
            keywords: [
                "Hitachi NEXTA STA",
                "Simultaneous Thermogravimetric Analyzer",
                "TGA DSC",
                "Real View",
                "Specific Heat Capacity",
                "Thermal analysis instruments",
                "Inkarp Hitachi Distributor"
            ],
            altText: "Hitachi NEXTA STA Series",
            internalLinks: ["hitachi-thermal-analysis", "thermal-analysis-products"],
            externalLinks: [
                "https://www.hitachi-hightech.com/in/en/products/analytical-systems/thermal-analysis/"
            ]
        },
        description: `
<div style="margin:0 auto;padding:0 16px;font-family:Roboto, Arial, sans-serif;color:#333;">

  <div style="margin-bottom:20px;">
    

    <h2 style="font-size:28px;line-height:40px;font-weight:600;margin-bottom:10px;font-family:MaxOT, Roboto, sans-serif;">
      Simultaneous Thermogravimetric Analyzer NEXTA STA Series
      <br>
      <span style="font-size:18px;color:#E63946;font-weight:500;">Distributor &amp; Service Provider In India</span>
    </h2>

    <div style="font-size:16px;line-height:1.65;">
      <p>Inkarp Instruments, a trusted 
        <a href="https://www.hitachi-hightech.com/in/en/products/analytical-systems/thermal-analysis/nexta-dsc.html" style="color:#E63946;font-weight:500;text-decoration:none;">Hitachi</a> 
        partner, presents the NEXTA STA Series, a cutting-edge Simultaneous Thermogravimetric Analyzer for thermal analysis in India.
      </p>
      <p style="margin:10px 0;">The newly incorporated balance control technology ensures the microgram-level baseline stability and reproducibility on top of our highly acclaimed horizontal digital dual beam balance system. The NEXTA STA series has following features;</p>
      <p>High temperature control technology that handles a variety of temperature programs</p>
      <p>Available DSC measurement, it makes specific heat capacity measurements available</p>
      <p>The sample observation and measurement, Hitachi’s pioneering key feature Includes the newly designed flow channels for high-level gas exchange</p>
      <p>In addition to conventional applications, the NEXTA STA series shows its strength in analyses such as quantitative determination of the constituents of advanced materials, composite materials, and trace amounts of moisture.</p>
    </div>
  </div>

  <div style="margin-top:30px;">
    <h4 style="font-size:20px;font-weight:600;margin:18px 0 10px;font-family:MaxOT, Roboto, sans-serif;color:#BE0010;">Features</h4>
    
    <p><strong>1. World class baseline performance</strong></p>
    <p>The NEXTA STA series incorporates a new balance control technology in addition to the horizontal digital dual beam system...</p>
    <img src="/images/products/Hitachi/ana-nexta-sta.jpg" alt="" style="max-width:100%;border:1px solid #ddd;border-radius:5px;margin:10px 0;">

    <p><strong>2. Broad measurement application using high temperature control technology</strong></p>
    <p>The NEXTA STA series heating furnace has improved temperature control technology which realizes several temperature programs...</p>
    <img src="/images/products/Hitachi/ana-nexta-sta_02.jpg" alt="" style="max-width:100%;border:1px solid #ddd;border-radius:5px;margin:10px 0;">

    <p><strong>3. Available DSC measurement on the NEXTA STA series - Specific heat capacity measurement over the wide temperature range</strong></p>
    <p>The NEXTA STA series showcases an evolution from DTA to DSC...</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin:10px 0;">
      <div style="flex:1 1 300px;">
        <img src="/images/products/Hitachi/ana-nexta-sta_03.gif" alt="" style="max-width:100%;border:1px solid #ddd;border-radius:5px;">
      </div>
      <div style="flex:1 1 300px;">
        <img src="/images/products/Hitachi/ana-nexta-sta_04.gif" alt="" style="max-width:100%;border:1px solid #ddd;border-radius:5px;">
      </div>
    </div>

    <p><strong>4. “Real View®” Sample Observation Option</strong></p>
    <p>The well-received “Real View®” option has been further developed...</p>
    <img src="assets/images/products/ana-nexta-sta_05.gif" alt="" style="max-width:100%;border:1px solid #ddd;border-radius:5px;margin:10px 0;">
    <p>“Real View” is a registered trademark of Hitachi High-Tech Science Corporation...</p>

    <h4 style="font-size:20px;font-weight:600;margin:18px 0 10px;font-family:MaxOT, Roboto, sans-serif;color:#BE0010;">Specifications</h4>
    <table style="border-collapse:collapse;width:100%;font-size:15px;margin:10px 0;">
      <thead>
        <tr style="background:#f5f5f5;">
          <th style="border:1px solid #999;padding:8px;"></th>
          <th style="border:1px solid #999;padding:8px;">STA200</th>
          <th style="border:1px solid #999;padding:8px;">STA200RV</th>
          <th style="border:1px solid #999;padding:8px;">STA300</th>
        </tr>
      </thead>
      <tbody>
        <tr><td style="border:1px solid #999;padding:8px;">Balance Type</td><td colspan="3" style="border:1px solid #999;padding:8px;">Horizontal Differential Type</td></tr>
        <tr><td style="border:1px solid #999;padding:8px;">Temperature Range</td><td style="border:1px solid #999;padding:8px;">Ambient to 1,100°C</td><td style="border:1px solid #999;padding:8px;">Ambient to 1,000°C</td><td style="border:1px solid #999;padding:8px;">Ambient to 1,500°C</td></tr>
        <tr><td style="border:1px solid #999;padding:8px;">TG Baseline drift <sup>1)</sup></td><td colspan="3" style="border:1px solid #999;padding:8px;">&lt;10 ug</td></tr>
        <tr><td style="border:1px solid #999;padding:8px;">TG Baseline Stability <sup>2)</sup></td><td colspan="3" style="border:1px solid #999;padding:8px;">&lt;10 ug</td></tr>
        <tr><td style="border:1px solid #999;padding:8px;">DSC Function</td><td colspan="3" style="border:1px solid #999;padding:8px;">Standardly equipped</td></tr>
        <tr><td style="border:1px solid #999;padding:8px;">Specific Heat Capacity Measurement</td><td colspan="3" style="border:1px solid #999;padding:8px;">Available (Optional)</td></tr>
        <tr><td style="border:1px solid #999;padding:8px;">Temperature Precision</td><td colspan="3" style="border:1px solid #999;padding:8px;">+/-0.07°C</td></tr>
        <tr><td style="border:1px solid #999;padding:8px;">Temperature Accuracy</td><td colspan="3" style="border:1px solid #999;padding:8px;">+/-0.2°C</td></tr>
        <tr><td style="border:1px solid #999;padding:8px;">Real View®</td><td style="border:1px solid #999;padding:8px;">N/A</td><td style="border:1px solid #999;padding:8px;">Optional</td><td style="border:1px solid #999;padding:8px;">N/A</td></tr>
        <tr><td style="border:1px solid #999;padding:8px;">Gas Control</td><td colspan="3" style="border:1px solid #999;padding:8px;">Integrated Mass Flow controller</td></tr>
      </tbody>
    </table>

    <p style="font-size:14px;color:#555;">1. Amount of Baseline drift at heating up to 1000°C with 20°C/min</p>
    <p style="font-size:14px;color:#555;">2. Amount of baseline drift at 1000°C hold in 60min</p>

    <iframe src='https://players.brightcove.net/4931690904001/default_default/index.html?videoId=6294881787001' width="100%" height="450" style="margin-top:20px;border:none;" allowfullscreen></iframe>
  </div>
</div>
`
    },
    "tma7000-series": {
        id: "tma7000-series",
        name: "Thermomechanical Analyzer — TMA7000 Series",
        image: ThermomechanicalAnalyzer, // ensure this import exists
        logo: Hitachi,                    // ensure logo import
        bannerImg: Banner3,               // your chosen banner
        altText: "Hitachi TMA7000 Series",
        videoId: "",
        meta: {
            title: "Hitachi TMA7000 Series | Thermomechanical Analyzer | Inkarp India",
            description:
                "Hitachi TMA7000 Series Thermomechanical Analyzer with high sensitivity, high-temp/high-humidity options, effective atmosphere and improved temperature control, plus stress–strain capabilities. Distributed & supported in India by Inkarp Instruments.",
            keywords: [
                "Hitachi TMA7000",
                "Thermomechanical Analyzer",
                "TMA",
                "Stress-Strain",
                "Thermal Expansion",
                "High Humidity TMA",
                "Inkarp Hitachi Distributor"
            ],
            altText: "Hitachi TMA7000 Series",
            internalLinks: ["hitachi-thermal-analysis", "thermal-analysis-products"],
            externalLinks: [
                "https://www.hitachi-hightech.com/in/en/products/analytical-systems/thermal-analysis/"
            ]
        },
        description: `
<div style="margin:0 auto;padding:0 16px;font-family:Roboto, Arial, sans-serif;color:#333;">

  <div style="margin-bottom:20px;">
    

    <h2 style="font-size:28px;line-height:40px;font-weight:600;margin-bottom:10px;font-family:MaxOT, Roboto, sans-serif;">
      Thermomechanical Analyzer TMA7000 Series
      <br>
      <span style="font-size:18px;color:#E63946;font-weight:500;">Distributor &amp; Service Provider In India</span>
    </h2>

    <div style="font-size:16px;line-height:1.65;">
      <p>Inkarp Instruments, a trusted 
        <a href="https://www.hitachi-hightech.com/in/en/products/analytical-systems/thermal-analysis/nexta-dsc.html" style="color:#E63946;font-weight:500;text-decoration:none;">Hitachi</a> 
        partner, offers the TMA7000 Series, a high-performance Thermomechanical Analyzer for thermal analysis in India. 
      </p>
      <p style="margin:10px 0;">The Hitachi TMA7000 Series Thermomechanical Analyzer has doubled its sensitivity compared with our conventional model. It measures a wide range of samples, including thin film and small samples, as it uses the total expansion method and does not limit sample shapes. Changing the modes between push, penetration, and tension is done by simply replacing the probe. A wide range of options, such as an automatic cooling unit, ensures the ease of use and highly accurate measurement.</p>                                    
    </div>
  </div>

  <div style="margin-top:30px;">
    <h4 style="font-size:20px;font-weight:600;margin:18px 0 10px;font-family:MaxOT, Roboto, sans-serif;color:#BE0010;">Features</h4>

    <p><strong>High Sensitivity</strong></p>
    <p>TMA7000 is equipped with newly developed “Z-stabilizer” signal optimization technology, which cuts noise levels to achieve highly sensitive measurements.</p>
    <div style="margin:10px 0;">
      <img src="/images/products/Hitachi/ana-tma7000_01_gif_tcm27-30717.gif" alt="" style="max-width:100%;border:1px solid #ddd;border-radius:5px;">
    </div>

    <p><strong> High-Temperature High-Humidity Measurements</strong></p> 
    <p>Additional options allow measurement under high temperature and high humidity conditions. Furthermore, it is extensible to swelling and vacuum measurements.</p>

    <p><strong>The Eco-Friendly Cooling Unit</strong></p>
    <p>The eco-friendly cooling unit cuts liquefied nitrogen consumption by approximately 40% (compared to previous models). Electrical cooling units that do not use liquefied nitrogen can also be connected.</p>
    <div style="margin:10px 0;">
      <img src="/images/products/Hitachi/ana-nexta-sta_06.jpg" alt="" style="max-width:100%;border:1px solid #ddd;border-radius:5px;">
    </div>

    <p><strong>Effective Atmosphere Control</strong></p>
    <p>A mass flow meter can be incorporated into the gas control so the atmosphere can be efficiently controlled by not only the purge gas ON/OFF switch but also programmed flow rate control.</p>

    <p><strong>Improved Temperature Control Function</strong></p>
    <p>The new built-in temperature control function is designed to reduce the gap between the program temperature and the measurement sample temperature and improve temperature compliance.</p>

    <h4 style="font-size:20px;font-weight:600;margin:18px 0 10px;font-family:MaxOT, Roboto, sans-serif;color:#BE0010;">Specifications</h4>
    <table style="border-collapse:collapse;width:100%;font-size:15px;margin:10px 0;">
      <tbody>
        <tr>
          <th scope="col" style="border:1px solid #999;padding:8px;"></th>
          <th scope="col" style="border:1px solid #999;padding:8px;">TMA7100</th>
          <th scope="col" style="border:1px solid #999;padding:8px;">TMA7300</th>
        </tr>
        <tr>
          <td style="border:1px solid #999;padding:8px;">Sample Cylinder</td>
          <td style="border:1px solid #999;padding:8px;">Quartz, metal</td>
          <td style="border:1px solid #999;padding:8px;">Alumina</td>
        </tr>
        <tr>
          <td style="border:1px solid #999;padding:8px;">Temperature Range</td>
          <td style="border:1px solid #999;padding:8px;">-170 to 600°C</td>
          <td style="border:1px solid #999;padding:8px;">Ambient to 1,500°C</td>
        </tr>
        <tr>
          <td style="border:1px solid #999;padding:8px;">TMA Measurement Range</td>
          <td colspan="2" style="border:1px solid #999;padding:8px;">±5 mm</td>
        </tr>
        <tr>
          <td style="border:1px solid #999;padding:8px;">TMA Sensitivity</td>
          <td colspan="2" style="border:1px solid #999;padding:8px;">0.01 µm</td>
        </tr>
        <tr>
          <td style="border:1px solid #999;padding:8px;">Load Range</td>
          <td colspan="2" style="border:1px solid #999;padding:8px;">±5.8 N</td>
        </tr>
        <tr>
          <td style="border:1px solid #999;padding:8px;">Scan Rate</td>
          <td colspan="2" style="border:1px solid #999;padding:8px;">0.01 to 100°C/min</td>
        </tr>
        <tr>
          <td style="border:1px solid #999;padding:8px;">Maximum Sample Size</td>
          <td style="border:1px solid #999;padding:8px;">Expansion; Φ10×L25 mm<br> Tension; W1×T5×L25 mm</td>
          <td style="border:1px solid #999;padding:8px;">Expansion; Φ10×L25 mm</td>
        </tr>
        <tr>
          <td style="border:1px solid #999;padding:8px;">Sample Length Measurement</td>
          <td colspan="2" style="border:1px solid #999;padding:8px;">Automated Measurement</td>
        </tr>
      </tbody>
    </table>

    <br>
    <h4 style="font-size:20px;font-weight:600;margin:18px 0 10px;font-family:MaxOT, Roboto, sans-serif;color:#BE0010;">Applications</h4>

    <div style="display:flex;flex-wrap:wrap;gap:16px;">
      <div style="flex:1 1 320px;">
        <p><strong>Thermal Expansion of Polyvinyl chloride (PVC)</strong></p>
        <img src="/images/products/Hitachi/ana-tma7000_03_gif_tcm27-30719.gif" alt="" style="max-width:100%;border:1px solid #ddd;border-radius:5px;">
        <p>CTE (coefficient of thermal expansion) changes at the glass transition temperature. CTE after Tg is approximately 4 times larger.</p>
      </div>

      <div style="flex:1 1 320px;">
        <p><strong>Penetration on Polymer film</strong></p>
        <img src="/images/products/Hitachi/ana-tma7000_04_gif_tcm27-30720.gif" alt="" style="max-width:100%;border:1px solid #ddd;border-radius:5px;">
        <p>Comparison of softening temperatures between different polymer films, Polyethylene, Polypropylene and Nylon evaluated by penetration measurement.</p>
      </div>

      <div style="flex:1 1 320px;">
        <p><strong>Anisotropy of Polyethylene (PE) film</strong></p>
        <img src="/images/products/Hitachi/ana-tma7000_05_gif_tcm27-30721.gif" alt="" style="max-width:100%;border:1px solid #ddd;border-radius:5px;">
        <p>In above measurements of PE film, tension force is applied in machine direction (MD) and the transverse direction (TD).</p>
      </div>

      <div style="flex:1 1 320px;">
        <p><strong>Stress-Strain characteristic of Polyethylene (PE) film</strong></p>
        <img src="/images/products/Hitachi/ana-tma7000_06_gif_tcm27-30722.gif" alt="" style="max-width:100%;border:1px solid #ddd;border-radius:5px;">
        <p>The measurements are carried out on PE film with strain control mode at different temperature.</p>
      </div>

      <div style="flex:1 1 100%;">
        <p><strong>Stress-Strain Capabilities</strong></p>
        <img src="/images/products/Hitachi/ana-tma7000_07_gif_tcm27-30723.gif" alt="" style="max-width:100%;border:1px solid #ddd;border-radius:5px;">
        <p>The TMA 7000 series has stress strain measurement and analysis capability. Stress-Strain characteristic, Creep/Recovery, Stress Relaxation can be measured, and furthermore, applying sinusoidal force to samples the dynamic viscoelastic behavior can be characterized.</p>
      </div>
    </div>
  </div>
</div>
`
    },

    "software-for-nexta": {
        id: "software-for-nexta",
        name: "Software for NEXTA",
        image: SoftwareForNexta, // ensure this import exists
        logo: Hitachi,          // ensure logo import
        bannerImg: Banner3,     // your chosen banner
        altText: "Software for NEXTA",
        videoId: "",
        meta: {
            title: "Hitachi NEXTA Software | Thermal Analysis Software | Inkarp India",
            description:
                "Software for NEXTA: standards-based guidance, touchscreen operation, data customization, and remote mobile station features. Distributed & supported in India by Inkarp Instruments.",
            keywords: [
                "Hitachi NEXTA Software",
                "NEXTA Thermal Analysis Software",
                "Thermal analysis software",
                "Inkarp Hitachi Distributor",
                "Data management NEXTA",
                "NEXTA remote operation"
            ],
            altText: "Hitachi NEXTA Software",
            internalLinks: ["hitachi-thermal-analysis", "thermal-analysis-products"],
            externalLinks: [
                "https://www.hitachi-hightech.com/in/en/products/analytical-systems/thermal-analysis/"
            ]
        },
        description: `
<div style="margin:0 auto;padding:0 16px;font-family:Roboto, Arial, sans-serif;color:#333;">

  <div style="margin-bottom:20px;">
    

    <h2 style="font-size:28px;line-height:40px;font-weight:600;margin-bottom:10px;font-family:MaxOT, Roboto, sans-serif;">
      Software for NEXTA
      <br>
      <span style="font-size:18px;color:#E63946;font-weight:500;">Distributor &amp; Service Provider In India</span>
    </h2>

    <div style="font-size:16px;line-height:1.65;">
      <p>Inkarp Instruments, a trusted 
        <a href="https://www.hitachi-hightech.com/in/en/products/analytical-systems/thermal-analysis/nexta-dsc.html" style="color:#E63946;font-weight:500;text-decoration:none;">Hitachi</a> 
        partner, offers advanced software solutions for NEXTA Thermal Analysis in India. Inkarp Instruments provides expert distribution, installation, training, and support for Hitachi's NEXTA software, empowering Indian researchers to optimize thermal analysis, streamline workflows, and make informed decisions in materials science, pharmaceuticals, polymers, and other industries. Efficient data management and accurate results guaranteed.
      </p>
      <p style="margin:10px 0;">Software for NEXTA features a guidance function to simplify various types of measurements based on standard methods and a new measurement mode that is very easy to use, even for beginners. New functions have been added to simplify instrument operation for users who are new to thermal analysis, while existing capabilities have been preserved for experienced users.</p>
    </div>
  </div>

  <div style="margin-top:30px;">
    <h4 style="font-size:20px;font-weight:600;margin:18px 0 12px;font-family:MaxOT, Roboto, sans-serif;color:#BE0010;">Features</h4>
    <ul style="font-size:16px;line-height:1.7;list-style:disc;padding-left:20px;margin:0;">
      <li>Guidance Function (Standards-Based Guidance, Calibration Guidance)</li>
      <li>Simple Mode / Standard Mode</li>
      <li>Inserting & Editing Pictures</li>
      <li>Touchscreen operation including plot scale adjustment</li>
      <li>Customization options (Color palette for plots, save scale settings, hyper customization, data overlap settings)</li>
      <li>Mobile station (Remote viewing and operation)</li>
      <li>Additional functions for data management & analysis</li>
    </ul>
  </div>
</div>
`
    },

    "uv-irradiation-unit-pdc-8": {
        id: "uv-irradiation-unit-pdc-8",
        name: "UV Irradiation Unit — PDC-8",
        image: UVIrradiationUnit, // ensure this import exists
        logo: Hitachi,            // ensure logo import
        bannerImg: Banner3,       // your chosen banner
        altText: "Hitachi UV Irradiation Unit PDC-8",
        videoId: "",
        meta: {
            title: "Hitachi UV Irradiation Unit PDC-8 | Thermal Analysis Accessory | Inkarp India",
            description:
                "Hitachi PDC-8 UV Irradiation Unit for DSC: real-time photochemical reaction detection, adjustable irradiation intensity, wavelength selection, and high-precision results. Distributed & supported in India by Inkarp Instruments.",
            keywords: [
                "Hitachi PDC-8",
                "UV Irradiation Unit",
                "NEXTA accessories",
                "UV curing analysis",
                "Photochemical reaction DSC",
                "Thermal Analysis Accessories",
                "Inkarp Hitachi Distributor"
            ],
            altText: "Hitachi UV Irradiation Unit PDC-8",
            internalLinks: ["hitachi-thermal-analysis", "thermal-analysis-products"],
            externalLinks: [
                "https://www.hitachi-hightech.com/in/en/products/analytical-systems/thermal-analysis/"
            ]
        },
        description: `
<div style="margin:0 auto;padding:0 16px;font-family:Roboto, Arial, sans-serif;color:#333;">

  <div style="margin-bottom:20px;">

    <h2 style="font-size:28px;line-height:40px;font-weight:600;margin-bottom:10px;font-family:MaxOT, Roboto, sans-serif;">
      UV Irradiation Unit PDC-8
      <br>
      <span style="font-size:18px;color:#E63946;font-weight:500;">Distributor &amp; Service Provider In India</span>
    </h2>

    <div style="font-size:16px;line-height:1.65;">
      <p>Inkarp Instruments, a trusted 
        <a href="https://www.hitachi-hightech.com/in/en/products/analytical-systems/thermal-analysis/nexta-dsc.html" style="color:#E63946;font-weight:500;text-decoration:none;">Hitachi</a> 
        partner, presents the PDC-8 UV Irradiation Unit for accelerated degradation testing in India.</p>
      <p style="margin:10px 0;">PDC-8 is an optional product with easy detachable attachment for Differential Scanning Calorimeter (DSC) which enables the detection of photochemical reaction such as UV curing. Sample curing behavior can be detected in real-time, and wavelength and irradiation intensity dependence can also be analyzed.</p>
    </div>
  </div>

  <div style="margin-top:30px;">
    <h4 style="font-size:20px;font-weight:600;margin:18px 0 12px;font-family:MaxOT, Roboto, sans-serif;color:#BE0010;">Features</h4>
    <p>The PDC-8 is used with high sensitivity DSC which delivers stable baseline with low noise and gives you precise results even for experiments on thin films and minute samples. Irradiating the ultraviolet visible light through optical fiber from directly above the sample and the reference makes extremely high irradiation intensity possible.</p>
    <p>Irradiation intensity is adjustable by light quantity of light source and continuous variable ND filter. Also, wavelength can be easily selected with interference filter. A multi-function shutter controller can set irradiation time in 0.1 sec increments and its open/close can be done automatically and manually. The PDC-8 is used for material development and quality control in photosetting resin or resist manufacturers as well as for evaluation of production processes that use such materials.</p>

    <div style="display:flex;flex-wrap:wrap;gap:12px;margin:20px 0;">
      <div style="flex:1 1 300px;">
        <img src="/images/products/Hitachi/ana-pdc7_01_gif_tcm27-30770.gif" alt="PDC-8 Demonstration" style="max-width:100%;border:1px solid #ddd;border-radius:5px;">
      </div>
      <div style="flex:1 1 300px;">
        <img src="/images/products/Hitachi/ana-pdc7_01_gif_tcm27-30770.gif" alt="UV Irradiation Application" style="max-width:100%;border:1px solid #ddd;border-radius:5px;">
      </div>
    </div>
  </div>

  <div style="margin-top:30px;">
    <h4 style="font-size:20px;font-weight:600;margin:18px 0 12px;font-family:MaxOT, Roboto, sans-serif;color:#BE0010;">Specifications</h4>
    <table style="border-collapse:collapse;width:100%;font-size:15px;margin:10px 0;">
      <tbody>
        <tr>
          <th style="border:1px solid #999;padding:8px;width:50%;background:#f5f5f5;text-align:left;">Model</th>
          <td style="border:1px solid #999;padding:8px;">PDC-8</td>
        </tr>
        <tr>
          <th style="border:1px solid #999;padding:8px;background:#f5f5f5;text-align:left;">Temperature range</th>
          <td style="border:1px solid #999;padding:8px;">Ambient to 150℃</td>
        </tr>
        <tr>
          <th style="border:1px solid #999;padding:8px;background:#f5f5f5;text-align:left;">Atmosphere</th>
          <td style="border:1px solid #999;padding:8px;">Air, Inert gas</td>
        </tr>
        <tr>
          <th style="border:1px solid #999;padding:8px;background:#f5f5f5;text-align:left;">Wavelength range</th>
          <td style="border:1px solid #999;padding:8px;">240 to 550nm</td>
        </tr>
        <tr>
          <th style="border:1px solid #999;padding:8px;background:#f5f5f5;text-align:left;">Wavelength selection</th>
          <td style="border:1px solid #999;padding:8px;">254, 313, 365, 405 and 436nm</td>
        </tr>
        <tr>
          <th style="border:1px solid #999;padding:8px;background:#f5f5f5;text-align:left;">Irradiation intensity</th>
          <td style="border:1px solid #999;padding:8px;">Max. 500mW/cm<sup>2</sup></td>
        </tr>
        <tr>
          <th style="border:1px solid #999;padding:8px;background:#f5f5f5;text-align:left;">Irradiation intensity adjustment</th>
          <td style="border:1px solid #999;padding:8px;">0 to 100％</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
`
    },
    "real-view-sample-observation-unit": {
        id: "real-view-sample-observation-unit",
        name: "Real View® Sample Observation Unit",
        image: RealViewSampleObservationUnit, // ensure this import exists
        logo: Hitachi,       // ensure logo import
        bannerImg: Banner3,  // your chosen banner
        altText: "Hitachi Real View Sample Observation Unit",
        videoId: "",
        meta: {
            title: "Hitachi Real View® Sample Observation Unit | Thermal Analysis Accessory | Inkarp India",
            description:
                "Hitachi Real View® Sample Observation Unit: real-time sample observation during DSC/STA/DMA measurements, image-linked analysis, editing, zoom, and color analysis. Distributed & supported in India by Inkarp Instruments.",
            keywords: [
                "Hitachi Real View",
                "Sample Observation Unit",
                "NEXTA accessories",
                "Thermal Analysis Imaging",
                "Real-time sample observation",
                "Inkarp Hitachi Distributor"
            ],
            altText: "Hitachi Real View Sample Observation Unit",
            internalLinks: ["hitachi-thermal-analysis", "thermal-analysis-products"],
            externalLinks: [
                "https://www.hitachi-hightech.com/in/en/products/analytical-systems/thermal-analysis/"
            ]
        },
        description: `
<div style="margin:0 auto;padding:0 16px;font-family:Roboto, Arial, sans-serif;color:#333;">

  <div style="margin-bottom:20px;">

    <h2 style="font-size:28px;line-height:40px;font-weight:600;margin-bottom:10px;font-family:MaxOT, Roboto, sans-serif;">
      Real View® Sample Observation Unit
      <br>
      <span style="font-size:18px;color:#E63946;font-weight:500;">Distributor &amp; Service Provider In India</span>
    </h2>

    <div style="font-size:16px;line-height:1.65;">
      <p>Inkarp Instruments, a trusted 
        <a href="https://www.hitachi-hightech.com/in/en/products/analytical-systems/thermal-analysis/nexta-dsc.html" style="color:#E63946;font-weight:500;text-decoration:none;">Hitachi</a> 
        partner, introduces the Real View® Sample Observation Unit for thermal analysis in India. 
      </p>
      <p style="margin:10px 0;">This optional accessory integrates with the instrument to observe the sample during thermal measurements. Images reveal changes in sample shape, size, color, and other properties. The images can be recorded and are automatically linked to the thermal data by time-stamp.</p>
      <p><strong><small>"Real View" is a registered trademark of Hitachi High-Tech Science Corporation in the US, the EU, the UK, China, India, Turkey, Brazil and Japan.</small></strong></p>
    </div>
  </div>

  <div style="margin-top:30px;">
    <h4 style="font-size:20px;font-weight:600;margin:18px 0 12px;font-family:MaxOT, Roboto, sans-serif;color:#BE0010;">Features</h4>

    <p><strong>1. Real-Time Observation during Measurement</strong></p>
    <p>Changes in the sample status can be displayed in real time. The images are linked with the temperature and can be viewed just by clicking the data streams.</p>

    <p><strong>2. Image Data Analysis linked with Temperature and Signal</strong></p>
    <p>Stored image data can be displayed in either thumbnail or slideshow format, linked with the temperature and signals.</p>

    <div style="display:flex;flex-wrap:wrap;gap:12px;margin:20px 0;">
      <div style="flex:1 1 300px;">
        <p><strong>Thumbnails display</strong></p>
        <p>Thumbnail images can be displayed. Linked images can be shown by clicking any point on the signal curve.</p>
      </div>
      <div style="flex:1 1 300px;">
        <img src="/images/products/Hitachi/ana-rvta_01.jpg" alt="Thumbnail Display" style="max-width:100%;border:1px solid #ddd;border-radius:5px;">
      </div>
    </div>

    <div style="display:flex;flex-wrap:wrap;gap:12px;margin:20px 0;">
      <div style="flex:1 1 300px;">
        <p><strong>Slideshow display</strong></p>
        <p>The slideshow feature shows the series of images as if they were a movie file. The signal data points change to correspond to the movie’s timeline.</p>
      </div>
      <div style="flex:1 1 300px;">
        <img src="/images/products/Hitachi/ana-rvta_02_png_tcm27-29287.jpg" alt="Slideshow Display" style="max-width:100%;border:1px solid #ddd;border-radius:5px;">
      </div>
    </div>

    <p><strong>3. Enhanced “Measuring” Function</strong></p>
    <ul style="font-size:16px;line-height:1.7;list-style:disc;padding-left:20px;">
      <li>Image editing</li>
      <li>Dimension measurement</li>
      <li>Digital zoom</li>
    </ul>

    <div style="margin:20px 0;">
      <img src="/images/products/Hitachi/ana-rvta_04.jpg" alt="Measuring Function" style="max-width:100%;border:1px solid #ddd;border-radius:5px;">
    </div>

    <p><strong>• Color (RGB/CMYK/Lab) Analysis</strong></p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin:15px 0;">
      <div style="flex:1 1 200px;">
        <img src="/images/products/Hitachi/ana-rvta_05.jpg" alt="Color Analysis 1" style="max-width:100%;border:1px solid #ddd;border-radius:5px;">
      </div>
      <div style="flex:1 1 200px;">
        <img src="/images/products/Hitachi/ana-rvta_06.jpg" alt="Color Analysis 2" style="max-width:100%;border:1px solid #ddd;border-radius:5px;">
      </div>
      <div style="flex:1 1 200px;">
        <img src="/images/products/Hitachi/ana-rvta_07.jpg" alt="Color Analysis 3" style="max-width:100%;border:1px solid #ddd;border-radius:5px;">
      </div>
    </div>

    <div style="margin:20px 0;">
      <img src="/images/products/Hitachi/ana-rvta_08.jpg" alt="Full Sample Observation" style="max-width:100%;border:1px solid #ddd;border-radius:5px;">
    </div>
  </div>

  <div style="margin-top:30px;">
    <h4 style="font-size:20px;font-weight:600;margin:18px 0 12px;font-family:MaxOT, Roboto, sans-serif;color:#BE0010;">Specifications</h4>
    <table style="border-collapse:collapse;width:100%;font-size:15px;margin:10px 0;">
      <thead>
        <tr style="background:#f5f5f5;">
          <th style="border:1px solid #999;padding:8px;">Model</th>
          <th style="border:1px solid #999;padding:8px;">RVDS0001</th>
          <th style="border:1px solid #999;padding:8px;">RVST0010</th>
          <th style="border:1px solid #999;padding:8px;">RV-1DMA</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="border:1px solid #999;padding:8px;">Unit</td>
          <td style="border:1px solid #999;padding:8px;">DSC600, DSC200</td>
          <td style="border:1px solid #999;padding:8px;">STA200RV</td>
          <td style="border:1px solid #999;padding:8px;">DMA7100</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
`
    },

    "data-input-and-output-optional-software": {
        id: "data-input-and-output-optional-software",
        name: "Data Input and Output Optional Software",
        image: DataInputAndOutputOptionalSoftware, // ensure this import exists
        logo: Hitachi,                  // ensure logo import
        bannerImg: Banner3,             // your chosen banner
        altText: "Hitachi Data Input and Output Optional Software",
        videoId: "",
        meta: {
            title: "Hitachi Data Input and Output Optional Software | Thermal Analysis | Inkarp India",
            description:
                "Data Input and Output Optional Software for Hitachi NEXTA analyzers: barcode-based measurement entry, mass upload template, data management export, automation for autosampler. Distributed & supported in India by Inkarp Instruments.",
            keywords: [
                "Hitachi Data Input Output Software",
                "NEXTA software",
                "Thermal Analysis Data Management",
                "NEXTA automation",
                "Barcode entry software",
                "Inkarp Hitachi Distributor"
            ],
            altText: "Hitachi Data Input and Output Optional Software",
            internalLinks: ["hitachi-thermal-analysis", "thermal-analysis-products"],
            externalLinks: [
                "https://www.hitachi-hightech.com/in/en/products/analytical-systems/thermal-analysis/"
            ]
        },
        description: `
<div style="margin:0 auto;padding:0 16px;font-family:Roboto, Arial, sans-serif;color:#333;">

  <div style="margin-bottom:20px;">
 

    <h2 style="font-size:28px;line-height:40px;font-weight:600;margin-bottom:10px;font-family:MaxOT, Roboto, sans-serif;">
      Data Input and Output Optional Software
      <br>
      <span style="font-size:18px;color:#E63946;font-weight:500;">Distributor &amp; Service Provider In India</span>
    </h2>

    <div style="font-size:16px;line-height:1.65;">
      <p>Data input and output optional software package for thermal analyzers automates the entry of measurement conditions with a barcode reader, and helps customers improve measurement workflow. As well as preventing human error during configuration of measurement conditions, management of analysis results data is made easier, leading to increased reliability during analysis for quality control and R&amp;D.</p>
      <p><strong><small>"Real View" is a registered trademark of Hitachi High-Tech Science Corporation in the US, the EU, the UK, China, India, Turkey, Brazil and Japan.</small></strong></p>
    </div>
  </div>

  <div style="margin-top:30px;">
    <h4 style="font-size:20px;font-weight:600;margin:18px 0 12px;font-family:MaxOT, Roboto, sans-serif;color:#BE0010;">Features</h4>

    <p><strong>Automatic entry of measurement conditions</strong></p>
    <p>This feature allows sample name, data file name and measurement conditions to be automatically obtained from a sample's identifying information by scanning barcodes linked to each sample with a barcode reader.</p>

    <div style="display:flex;flex-wrap:wrap;gap:12px;margin:20px 0;">
      <div style="flex:1 1 300px;">
        <img src="/images/products/Hitachi/fig_01.jpg" alt="Automatic entry example 1" style="max-width:100%;border:1px solid #ddd;border-radius:5px;">
      </div>
      <div style="flex:1 1 300px;">
        <img src="/images/products/Hitachi/fig_02.jpg" alt="Automatic entry example 2" style="max-width:100%;border:1px solid #ddd;border-radius:5px;">
      </div>
      <div style="flex:1 1 600px;margin:0 auto;">
        <img src="/images/products/Hitachi/fig_03.jpg" alt="Automatic entry overview" style="max-width:100%;border:1px solid #ddd;border-radius:5px;">
      </div>
    </div>

    <p><strong>Mass Upload Template</strong></p>
    <p>The feature is useful for registering many identification codes when there are many types of measurement samples and conditions. Entering information such as the sample name, method file name, and lot number in a CSV file, then reading it with NEXTA software, makes it easy to register up to 5000 codes at once. It also supports one-by-one registration.</p>
    <div style="margin:20px 0;text-align:center;">
      <img src="/images/products/Hitachi/fig_04.jpg" alt="Mass upload template" style="max-width:80%;border:1px solid #ddd;border-radius:5px;">
    </div>

    <p><strong>Data management support</strong></p>
    <p>This feature allows information such as test items, lot numbers and serial numbers to be exported together with thermal analysis results data. Data can be exported to CSV, Excel, and text formats, making internal management of analysis results even easier and contributing to improved reliability during quality control.</p>
    <div style="margin:20px 0;text-align:center;">
      <img src="/images/products/Hitachi/fig_05.jpg" alt="Data management support" style="max-width:80%;border:1px solid #ddd;border-radius:5px;">
    </div>

    <p>It is also effective in automating multiple sample measurements using an auto-sampler. Entering measurement order and sample number for the autosampler to a sequence table is also supported. The operational process from setting conditions to managing data becomes more automated, reducing manual work and improving productivity.</p>

    <p><strong>Note: Barcode reader is not included in the software package.</strong></p>
  </div>

  <div style="margin-top:30px;">
    <h4 style="font-size:20px;font-weight:600;margin:18px 0 12px;font-family:MaxOT, Roboto, sans-serif;color:#BE0010;">Overview and How to Use</h4>
    <iframe src='https://players.brightcove.net/4931690904001/SJlk90eb17_default/index.html?videoId=6315151888112' allowfullscreen frameborder="0" width="100%" height="500" style="margin-top:15px;border:none;"></iframe>
  </div>
</div>
`
    },
}