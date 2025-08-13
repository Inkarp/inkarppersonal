// CareersKeka12.jsx
import React, { useEffect, useRef, useState } from "react";

const CareersKekaNew = ({
  identifier = "357ac919-3c5b-4878-922a-e01bc5fd29cd",
  domain = "https://inkarpinstrument.keka.com/careers/",
  minHeight = "620px",
}) => {
  const containerRef = useRef(null);
  const [loadError, setLoadError] = useState(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // clear previous content
    containerRef.current.innerHTML = "";

    // set global config for Keka
    window.khConfig = {
      identifier,
      domain,
      targetContainer: "#khembedjobs",
    };

    // remove any existing Keka script for this identifier
    const existing = document.querySelector(`script[data-kh="${identifier}"]`);
    if (existing) existing.remove();

    // inject script
    const script = document.createElement("script");
    script.src = `${domain}api/embedjobs/js/${identifier}`;
    script.defer = true;
    script.async = true;
    script.dataset.kh = identifier;

    script.onload = () => setLoadError(null);
    script.onerror = () =>
      setLoadError("Failed to load job listings. Please try again later.");

    document.head.appendChild(script);

    // cleanup
    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
      if (containerRef.current) containerRef.current.innerHTML = "";
      try {
        delete window.khConfig;
      } catch {}
    };
  }, [identifier, domain]);

  return (
    <section className="ezy__careers12 light py-14 md:py-24 bg-white text-zinc-900">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-10 lg:col-span-7 xl:col-span-6">
            <div>
              <p
                className="font-medium inline py-2 px-4 rounded-full"
                style={{ border: "2px solid #E63946" }}
              >
                We’re Hiring
              </p>
              <h1 className="text-[32px] font-bold capitalize lg:text-6xl mt-6 mb-4">
                Explore openings at{" "}
                <span className="text-[#E63946]">INKARP</span>
              </h1>
              <p className="text-lg font-medium leading-normal lg:text-xl">
                Live roles powered by Keka — review details and apply directly.
              </p>
            </div>
          </div>

          <div className="col-span-12 mt-12">
            <div className="rounded-2xl border border-gray-200 p-4 md:p-6">
              <div
                id="khembedjobs"
                ref={containerRef}
                style={{ minHeight }}
                className="overflow-auto"
              />
              {loadError && (
                <div className="text-center text-red-600 py-6">{loadError}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersKekaNew;
