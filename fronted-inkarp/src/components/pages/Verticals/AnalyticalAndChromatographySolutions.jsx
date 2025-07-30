import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Nanalysis from '/src/assets/PrincipalLogos/RowOne/nanalysis.png';
import Advion from '/src/assets/PrincipalLogos/RowOne/advion.png';
import Ecom from '/src/assets/PrincipalLogos/RowTwo/ECom.png';
import Waters from '/src/assets/PrincipalLogos/RowTwo/waters.svg';
import Labomatic from '/src/assets/PrincipalLogos/RowTwo/Labomatic.svg';
// Slug function
const slugify = (str) =>
  str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const synthesisData = [
  {
    principal: "Nanalysis",
    logo: Nanalysis,
    products: [
      "100 MHZ Benchtop NMR",
      "60 MHZ Benchtop NMR",
      "Accessories",
      "Software Packages"
    ],
  },
  {
    principal: "Advion",
    logo: Advion,
    products: [
      "Express CMS",
      "Solation ICP-MS",
      "Preperative Purification Systems",
      "Plate Express",
      "TriVersa NanoMate",
      "Peripheral Production Devices",
      "AVANT (U)HPCL",
      "Flash Purification Systems",
      "Peripheral Detection Devices",
    ],
  },
  {
    principal: "Ecom",
    logo: Ecom,
    products: [
      "Columns for Preparative Chromatography (DAC Columns, 50mm-100mm ID Columns)",
      "PLC Industrial Systems",
    ],
  },
  {
    principal: "Labomatic",
    logo: Labomatic,
    products: [
      "Industrial Liquid Chromatography",
      "Liquid Handling",
    ],
  },
  {
    principal: "Waters",
    logo: Waters,
    products: [
      "Chromatography and LC-MS Systems",
    ],
  }
];

export default function ExtrusionAndHomogenization() {
  const [selectedPrincipal, setSelectedPrincipal] = useState(synthesisData[0]);

  return (
    <div className="flex flex-col md:flex-row gap-6 px-5 max-w-screen-xl mx-auto">
      {/* Sidebar */}
      <aside className="md:w-1/4 bg-white p-6  h-fit sticky ">
        <h2 className="text-xl font-bold text-[#E63946] mb-4 font-[MaxOT]">Principals</h2>
        <ul className="space-y-3">
          {synthesisData.map((group, index) => (
            <li
              key={index}
              onClick={() => setSelectedPrincipal(group)}
              className={`block p-4 rounded-lg  text-[#0a2540] font-[Roboto] font-medium text-sm md:text-base transition-all duration-300
                      ${selectedPrincipal.principal === group.principal
                  ? " scale-[1.01]  text-[#E63946] bg-red-100"
                  : "  hover:scale-[1.01] hover:text-[#E63946] hover:bg-gray-200 "
                }`}
            >
              <img
                src={group.logo}
                alt={group.principal}
                className="w-full h-10 object-contain"
              />
            </li>

          ))}
        </ul>
      </aside>
      <section className="md:w-3/4 flex flex-col gap-6">
        <div className=" rounded-md  p-4">
          <h3 className="text-lg font-semibold mb-4 font-[MaxOT] text-[#E63946]">
            Products
          </h3>
          <div className="flex flex-col gap-4">
            <div className="text-md font-[MaxOT]">
              {selectedPrincipal.name}
            </div>

            <div className="grid grid-cols-2 gap-4">
              {selectedPrincipal.products.map((item, idx) => (
                <Link
                  key={idx}
                  to={`/verticals/analytical-and-chromatography-solutions/${slugify(item)}`}
                  className="block bg-[#F5F5F5] hover:bg-gray-200 transition-all duration-300 rounded-lg p-4 hover:scale-[1.01] text-[#0a2540] hover:text-[#E63946] font-[Roboto] font-medium text-sm md:text-base"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
