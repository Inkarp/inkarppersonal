import React, { useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import CatalystBannerImage from "../assets/Catalyst/CatalystcueBannerVolume02Issue01.jpeg";
import Issue6 from "../assets/Catalyst/Images/Issue6.png";
import Issue5 from "../assets/Catalyst/Images/Issue5.png";
import Issue4 from "../assets/Catalyst/Images/Issue4.png";
import Issue3 from "../assets/Catalyst/Images/Issue3.png";
import Issue2 from "../assets/Catalyst/Images/Issue2.png";
import Issue1 from "../assets/Catalyst/Images/Issue1.png";

import MagazineIssue6 from "../assets/Catalyst/Pdfs/MagazineIssue6.pdf";
import MagazineIssue4 from "../assets/Catalyst/Pdfs/MagazineIssue4.pdf";
import MagazineIssue2 from "../assets/Catalyst/Pdfs/MagazineIssue2.pdf";

import Flipbook from "../Flipbook";

const cards = [
  { id: 1, Volume: "Volume-1", subTitle: "Issue 01", image: Issue1, Date: "June 2025" },
  { id: 2, Volume: "Volume-1", subTitle: "Issue 02", image: Issue2, Date: "April 2025", link: MagazineIssue2 },
  { id: 3, Volume: "Volume-1", subTitle: "Issue 03", image: Issue3, Date: "February 2025", },
  { id: 4, Volume: "Volume-1", subTitle: "Issue 04", image: Issue4, Date: "December 2024", link: MagazineIssue4 },
  { id: 5, Volume: "Volume-1", subTitle: "Issue 05", image: Issue5, Date: "October 2024", },
  { id: 6, Volume: "Volume-1", subTitle: "Issue 06", image: Issue6, Date: "August 2024", link: MagazineIssue6 },
  { id: 1, Volume: "Volume-2", subTitle: "Issue 01", image: Issue1, Date: "August 2025" },
];

export default function Catalyst() {
  const [open, setOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState(null);

  const groupedByVolume = useMemo(() => {
    return cards.reduce((acc, card) => {
      (acc[card.Volume] ||= []).push(card);
      return acc;
    }, {});
  }, []);

  const sortedVolumeKeys = useMemo(() => {
    return Object.keys(groupedByVolume).sort((a, b) => {
      const numA = parseInt(a.split("-")[1], 10);
      const numB = parseInt(b.split("-")[1], 10);
      return numB - numA;
    });
  }, [groupedByVolume]);

  const openFlipbook = (pdf) => {
    if (!pdf) return;
    setPdfUrl(pdf);
    setOpen(true);
  };

  const closeFlipbook = () => {
    setOpen(false);
    setPdfUrl(null);
  };

  return (
    <div className="relative">
      <Helmet>
        <title>CatalystCue - Inkarp Instruments Private Ltd</title>
      </Helmet>

      <img
        src={CatalystBannerImage}
        alt="CatalystCue Banner"
        className="w-full h-full object-cover object-center px-5"
        style={{ borderRadius: "0 0 85% 85% / 30%" }}
      />

      <div className="p-5">
        {sortedVolumeKeys.map((volume) => {
          const volumeCards = [...groupedByVolume[volume]].sort((a, b) => b.id - a.id);
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
                    onClick={() => openFlipbook(card.link)}
                    className={`w-[280px] h-[420px] border overflow-hidden transition bg-white ${
                      card.link
                        ? "border-gray-500 hover:scale-[1.02] cursor-pointer"
                        : "border-gray-300 bg-gray-100 text-gray-500 cursor-not-allowed"
                    }`}
                    title={card.link ? "Open flipbook" : "PDF not available"}
                    role="button"
                    aria-disabled={!card.link}
                  >
                    <img src={card.image} alt={card.subTitle} className="w-full h-[380px] object-cover" />
                    <div className="text-center p-2 flex justify-center items-center gap-2">
                      <h3 className="text-lg font-[Roboto]">{card.subTitle}</h3>
                      <div className="w-px h-5 bg-black" />
                      <p className="text-lg font-[Roboto] text-gray-600">{card.Date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Flipbook Modal */}
      {open && pdfUrl && (
        <div className="fixed inset-0 z-[9999]">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60" onClick={closeFlipbook} />

          {/* Modal container */}
          <div className="relative mx-auto mt-8 w-[95vw] max-w-6xl bg-white rounded-xl shadow-xl p-4">
            <div className="flex justify-end">
              <button
                onClick={closeFlipbook}
                className="mb-2 rounded-full px-3 py-1 text-sm bg-black/80 text-white hover:bg-black"
                aria-label="Close flipbook"
              >
                ✕
              </button>
            </div>
            {/* Your Flipbook viewer (uses DearFlip under the hood) */}
            <Flipbook src={pdfUrl} />
          </div>
        </div>
      )}
    </div>
  );
}
