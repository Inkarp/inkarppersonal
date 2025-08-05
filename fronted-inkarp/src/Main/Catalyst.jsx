import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import CatalystBannerImage from "../assets/Catalyst/CatalystBanner.jpg";
import Issue6 from "../assets/Catalyst/Images/Issue6.png";
import Issue5 from "../assets/Catalyst/Images/Issue5.png";
import Issue4 from "../assets/Catalyst/Images/Issue4.png";
import Issue3 from "../assets/Catalyst/Images/Issue3.png";
import Issue2 from "../assets/Catalyst/Images/Issue2.png";
import Issue1 from "../assets/Catalyst/Images/Issue1.png";

import MagazineIssue6 from "../assets/Catalyst/Pdfs/MagazineIssue6.pdf";
import MagazineIssue4 from "../assets/Catalyst/Pdfs/MagazineIssue4.pdf";
import MagazineIssue2 from "../assets/Catalyst/Pdfs/MagazineIssue2.pdf";

const cards = [
  { id: 6, Volume: "Volume-1", subTitle: "Issue 01", image: Issue1, Date: "June 2025" },
  { id: 5, Volume: "Volume-1", subTitle: "Issue 02", image: Issue2, Date: "April 2025" },
  { id: 4, Volume: "Volume-1", subTitle: "Issue 03", image: Issue3, Date: "February 2025", link: MagazineIssue4 },
  { id: 3, Volume: "Volume-1", subTitle: "Issue 04", image: Issue4, Date: "December 2024" },
  { id: 2, Volume: "Volume-1", subTitle: "Issue 05", image: Issue5, Date: "October 2024", link: MagazineIssue2 },
  { id: 1, Volume: "Volume-1", subTitle: "Issue 06", image: Issue6, Date: "August 2024", link: MagazineIssue6 },
  { id: 7, Volume: "Volume-2", subTitle: "Issue 07", image: Issue1, Date: "August 2025" },
];

const Catalyst = () => {
  const [flipbookLoaded, setFlipbookLoaded] = useState(false);

  // Load DearFlip JS and CSS dynamically
  useEffect(() => {
    const loadFlipbookAssets = async () => {
      if (!document.getElementById("dearflip-css")) {
        const css1 = document.createElement("link");
        css1.id = "dearflip-css";
        css1.rel = "stylesheet";
        css1.href = "https://cdn.jsdelivr.net/npm/dearflip@2.1.1/css/dflip.min.css";
        document.head.appendChild(css1);
      }

      if (!document.getElementById("ti-icons-css")) {
        const css2 = document.createElement("link");
        css2.id = "ti-icons-css";
        css2.rel = "stylesheet";
        css2.href = "https://cdn.jsdelivr.net/npm/dearflip@2.1.1/css/themify-icons.min.css";
        document.head.appendChild(css2);
      }

      if (!document.getElementById("dearflip-js")) {
        const script = document.createElement("script");
        script.id = "dearflip-js";
        script.src = "https://cdn.jsdelivr.net/npm/dearflip@2.1.1/js/dflip.min.js";
        document.body.appendChild(script);
      }
    };

    loadFlipbookAssets();

    // ✅ Listen for dflip-ready event
    const handleFlipbookReady = () => {
      setFlipbookLoaded(true);
    };

    window.addEventListener("dflip-ready", handleFlipbookReady);

    return () => {
      window.removeEventListener("dflip-ready", handleFlipbookReady);
    };
  }, []);


  const openFlipbook = (pdfUrl) => {
    if (flipbookLoaded && window.DFLIP) {
      window.DFLIP.open({
        source: pdfUrl,
        webgl: false,
        backgroundColor: "#ffffff",
        height: "90vh",
        duration: 800,
      });
    } else {
      alert("Flipbook is still loading. Please try again in a few seconds.");
    }
  };



  const groupedByVolume = cards.reduce((acc, card) => {
    if (!acc[card.Volume]) acc[card.Volume] = [];
    acc[card.Volume].push(card);
    return acc;
  }, {});

  const sortedVolumeKeys = Object.keys(groupedByVolume).sort((a, b) => {
    const numA = parseInt(a.split("-")[1], 10);
    const numB = parseInt(b.split("-")[1], 10);
    return numB - numA;
  });

  return (
    <div className="relative">
      <Helmet>
        <title>CatalystCue - Inkarp Instruments Private Ltd</title>
      </Helmet>

      {/* Banner */}
      <img
        src={CatalystBannerImage}
        alt="CatalystCue Banner"
        className="w-full h-full object-cover object-center px-5"
        style={{ borderRadius: '0 0 85% 85% / 30%' }}
      />

      <div className="p-5">
        {sortedVolumeKeys.map((volume) => {
          const volumeCards = groupedByVolume[volume].sort((a, b) => a.id - b.id);
          return (
            <div key={volume} className="mb-10">
              <div className="flex items-center justify-center">
                <h2 className="text-xl font-bold px-4 py-1 text-center font-[MaxOT] rounded-full border border-[#E63946] w-fit mb-4">
                  {volume}
                </h2>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-8">
                {volumeCards.map((card) => (
                  <div
                    key={card.id}
                    onClick={() => card.link && openFlipbook(card.link)}
                    className={`w-[280px] h-[420px] border overflow-hidden transition bg-white rounded-3xl ${card.link
                        ? "border-gray-500 hover:scale-102 cursor-pointer"
                        : "border-gray-300 bg-gray-100 text-gray-500 cursor-not-allowed"
                      }`}
                  >
                    <img src={card.image} alt={card.subTitle} className="w-full h-[380px] object-cover" />
                    <div className="text-center p-2 flex justify-center items-center gap-2">
                      <h3 className="text-lg font-[Roboto]">{card.subTitle}</h3>
                      <div className="w-px h-5 bg-black"></div>
                      <p className="text-lg font-[Roboto] text-gray-600">{card.Date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Catalyst;
