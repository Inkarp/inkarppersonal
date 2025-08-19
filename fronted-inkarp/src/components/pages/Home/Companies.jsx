import React from "react";
import InkarpLogo from "/inkarp old.svg";
import DroppingText from "./DroppingText";
import GroupLogo1 from '/src/assets/Logos/InkarpGroupLogo.png'
import GroupLogo from '/src/assets/Logos/GroupLogo.png'
import Inkarp from "/inkarp.png";
import Spark from "/Spark.svg";
import InkarpTelecom from "/InkarpTelecom.svg";
import InkarpServices from "/InkarpServices.svg";
import Verder from "/Verder.svg";
import Advion from "/src/assets/PrincipalLogos/RowOne/advion.png";

import IconColloboration from "/Collaboration.png";

const subsidiaries = [
  { name: "Group Company", image: Spark },
  { name: "Group Company", image: InkarpTelecom },
  { name: "Group Company", image: InkarpServices },
  { name: "Collaborative Venture ", image: Advion },
  { name: "Collaborative Venture ", image: Verder },

];

export default function Companies() {
  return (
    <section className="relative w-[98%] mx-auto py-10 md:px-10 lg:px-20">
      {/* soft on-brand background */}
      <div className="flex justify-center items-center">
        <span
          className="px-4 py-1 text-xs sm:text-sm w-fit text-center font-[MaxOT] uppercase rounded-full bg-white"
          style={{
            borderImage: 'linear-gradient(90deg,#BE0010,#E63946) 1',
            borderWidth: 1,
            borderStyle: 'solid',
          }}
        >
          Our Group Companies & Collaborations
        </span>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(230,57,70,0.08),transparent),radial-gradient(1200px_600px_at_80%_110%,rgba(230,57,70,0.08),transparent)]" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* LEFT: headings that were inside the circle */}
        <div className="lg:col-span-3">
          <div className="py-3 flex flex-col items-start justify-center gap-3 max-w-md">
            <DroppingText />
            <h3 className="font-[MaxOT] text-center text-xl text-[#E63946] leading-tight">
              At INKARP, innovation is at the core of everything we do.
            </h3>
            <p className="text-sm sm:text-base text-center font-[Roboto] text-black/80">
              Explore our subsidiaries and joint ventures that drive our shared vision forward.
            </p>
          </div>
        </div>

        {/* RIGHT: orbit visualization */}
        <div className="lg:col-span-8">
          <div className="circular-reviews__void mx-auto" id="void">
            <style>{`
              .circular-reviews__void {
                width: 100%;
                max-width: 820px;
                margin: 0 auto;
                position: relative;
                aspect-ratio: 1.8 / 1;
              }

              .circular-reviews__void ul {
                list-style-type: none;
                margin: 0;
                padding: 0;
                position: relative;
                width: 100%;
                aspect-ratio: 1 / 1;
                z-index: 1;
              }

              .circular-reviews__void li {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                width: 100%;
                animation: circular-reviews-rotateCW 40s cubic-bezier(0.000, 0.37, 1.000, 0.63) infinite;
              }

              .circular-reviews__void .card {
                width: 25%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                flex-wrap: nowrap;
                padding:15px;
                gap: 8px;
                background: #FFFFFF;
                box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1), 0px 16px 32px rgba(0, 0, 0, 0.1);
                border-radius: 16px;
                font-size: 16px;
                animation: circular-reviews-rotateCCW 40s cubic-bezier(0.000, 0.37, 1.000, 0.63) infinite;
              }

              .circular-reviews__void .model-name {
                font-family: MaxOT;
                font-weight: bold;
                font-size: 15px;
                color: black;
                display: block;
                text-align: center;
              }

              .circular-reviews__void li:nth-child(2),
              .circular-reviews__void li:nth-child(2) .card {
                animation-delay: -6.666s;
              }
              .circular-reviews__void li:nth-child(3),
              .circular-reviews__void li:nth-child(3) .card {
                animation-delay: -13.333s;
              }
              .circular-reviews__void li:nth-child(4),
              .circular-reviews__void li:nth-child(4) .card {
                animation-delay: -20s;
              }
              .circular-reviews__void li:nth-child(5),
              .circular-reviews__void li:nth-child(5) .card {
                animation-delay: -26.666s;
              }

              @keyframes circular-reviews-rotateCW {
                from { transform: translate3d(0px, -50%, -1px) rotate(-45deg); }
                to { transform: translate3d(0px, -50%, 0px) rotate(315deg); }
              }

              @keyframes circular-reviews-rotateCCW {
                from { transform: rotate(45deg); }
                to { transform: rotate(-315deg); }
              }

              .circular-reviews__void .second-circle {
                position: absolute;
                width: 50%;
                aspect-ratio: 1 / 1;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                opacity: 1;
                border-radius: 50%;
                // box-shadow: 0px 18px 36px -18px rgba(12, 5, 46, 0.3), 0px 30px 60px -12px rgba(12, 5, 46, 0.25);
                // border: 1px dotted #333333 ;
              }

              .circular-reviews__void .last-circle {
                position: absolute;
                width: 66%;
                aspect-ratio: 1 / 1;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                background:#F5F5F5;
                border: 2px dotted #333333 ;
                opacity: 0.25;
                box-shadow: 0px 18px 36px -18px rgba(12, 5, 46, 0.3), 0px 30px 60px -12px rgba(12, 5, 46, 0.25);
                border-radius: 50%;
              }

              .circular-reviews__void .crop {
                -webkit-mask-image: linear-gradient(0deg, rgba(19, 15, 15, 0), rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1));
              }
            `}</style>

            {/* Orbit */}
            <div className="circular-reviews__void">
              <ul style={{ "--count": subsidiaries.length }} className="crop">
                {subsidiaries.map((subsidiary, idx) => (
                  <li key={idx}>
                    <div className="card">
                      <span className="model-name">{subsidiary.name}</span>
                      {subsidiary.text ? (
                        <div className="inkarp-meaning">
                          {subsidiary.text.map((line, i) => (
                            <p key={i}>{line}</p>
                          ))}
                        </div>
                      ) : (
                        <img
                          src={subsidiary.image}
                          alt={subsidiary.name}
                          className="w-full h-[45px] object-contain"
                        />
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              {/* rings only (no stray text) */}
              <div className="last-circle" />

              <div className="second-circle flex items-center justify-center">
                {/* put a static center graphic here (not `subsidiary`) */}
                <img
                  src={GroupLogo}                 // or GroupLogo / Inkarp
                  alt="INKARP Group"
                  className="w-[70%] backdrop-blur-md h-auto object-contain"
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
