import { useEffect, useRef } from "react";
import $ from "jquery";

// Make jQuery global now (this runs before effect)
if (typeof window !== "undefined") {
  window.jQuery = $;
  window.$ = $;
}

// Keep CSS as static imports (safe)
import "@dearhive/dearflip-jquery-flipbook/dflip/css/dflip.min.css";
import "@dearhive/dearflip-jquery-flipbook/dflip/css/themify-icons.min.css";

// ⛔️ DO NOT do a static import of dflip.min.js here
// import "@dearhive/dearflip-jquery-flipbook/dflip/js/dflip.min.js"; // <-- remove this

export default function Flipbook({ src = "/sample.pdf" }) {
  const ref = useRef(null);

  useEffect(() => {
    let destroyed = false;

    (async () => {
      const el = ref.current;
      if (!el || !src) return;

      // 1) Try npm dynamic import (after jQuery is global)
      try {
        await import("@dearhive/dearflip-jquery-flipbook/dflip/js/dflip.min.js");
      } catch {
        /* ignore – we have a CDN fallback below */
      }

      // 2) If still missing, fall back to CDN (guarantees global attach)
      const ensureDflip = () =>
        new Promise((resolve) => {
          if (window.DFLIP || $.fn?.flipBook) return resolve();
          const s = document.createElement("script");
          s.src =
            "https://cdn.jsdelivr.net/npm/@dearhive/dearflip-jquery-flipbook@1.7.3/dflip/js/dflip.min.js";
          s.onload = () => resolve();
          document.head.appendChild(s);
        });

      if (!window.DFLIP && !$.fn?.flipBook) {
        await ensureDflip();
      }

      if (destroyed) return;

      // Init (prefer jQuery API if present)
      if (typeof $.fn?.flipBook === "function") {
        try {
          $(el).flipBook?.("destroy");
        } catch {}
        $(el).flipBook(src, { webgl: true });
      } else if (typeof window.DFLIP === "function") {
        // Vanilla constructor
        new window.DFLIP(el, { source: src, webgl: true });
      } else {
        console.error("DearFlip still not loaded");
      }
    })();

    return () => {
      destroyed = true;
      try {
        const el = ref.current;
        if (el) $(el).flipBook?.("destroy");
      } catch {}
    };
  }, [src]);

  return (
    <div
      ref={ref}
      className="w-full h-[80vh] left-[15%] absolute"
      style={{ width: "100%", height: "100vh" }}
    />
  );
}
