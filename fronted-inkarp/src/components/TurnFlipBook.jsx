import { useEffect, useRef, useState } from "react";

/** Loader helpers */
const ensureScript = (id, src) =>
  new Promise((resolve, reject) => {
    const el = document.getElementById(id);
    if (el) return resolve();
    const s = document.createElement("script");
    s.id = id;
    s.src = src;
    s.async = true;
    s.onload = resolve;
    s.onerror = reject;
    document.body.appendChild(s);
  });

const ensurePDFWorker = (base = "/vendor/pdfjs/") => {
  if (!window.pdfjsLib) return;
  // tell pdfjs where the worker is
  window.pdfjsLib.GlobalWorkerOptions.workerSrc = `${base}pdf.worker.min.js`;
};

/**
 * TurnFlipbook overlay
 * Props:
 *  - open       : boolean
 *  - onClose    : () => void
 *  - pdfUrl     : string (optional)
 *  - pages      : string[] (optional, array of image URLs)
 */
export default function TurnFlipbook({ open, onClose, pdfUrl, pages }) {
  const hostRef = useRef(null);
  const bookRef = useRef(null);
  const [ready, setReady] = useState(false);
  const [loading, setLoading] = useState(false);

  // Load libs once
  useEffect(() => {
    const load = async () => {
      try {
        // jQuery + Turn.js are required
        await ensureScript("jquery", "/vendor/jquery-3.7.1.min.js");
        await ensureScript("turnjs", "/vendor/turnjs/turn.min.js");

        // If we’re going to use PDF, load pdf.js too
        if (pdfUrl) {
          await ensureScript("pdfjs", "/vendor/pdfjs/pdf.min.js");
          ensurePDFWorker();
        }
        setReady(true);
      } catch (e) {
        console.warn("Failed to load Turn.js or deps:", e);
      }
    };
    load();
  }, [pdfUrl]); // pages-only books won’t try to load pdf.js

  // Create/destroy flipbook when overlay opens
  useEffect(() => {
    if (!open || !ready || !hostRef.current) return;

    const $ = window.jQuery;
    const $host = $(hostRef.current);

    // Clean any previous instance
    try { $host.turn && $host.turn("destroy"); } catch {}

    const createFromImages = (imgs) => {
      // build DOM
      $host.empty();
      const $book = $("<div/>").css({
        width: "100%",
        height: "100%",
      });
      imgs.forEach((src) => {
        const $page = $("<div class='page'/>").append(
          $("<img/>").attr("src", src).css({
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block"
          })
        );
        $book.append($page);
      });
      $host.append($book);
      bookRef.current = $book[0];

      // set size & init
      initTurn($book);
    };

    const createFromPdf = async (url) => {
      setLoading(true);
      const pdfjs = window.pdfjsLib;
      const loadingTask = pdfjs.getDocument(url);
      const pdf = await loadingTask.promise;

      $host.empty();
      const $book = $("<div/>").css({ width: "100%", height: "100%" });
      $host.append($book);
      bookRef.current = $book[0];

      // render all pages to canvases and append
      for (let p = 1; p <= pdf.numPages; p++) {
        const page = await pdf.getPage(p);
        const viewport = page.getViewport({ scale: 1 });

        // compute a scale that fits our container nicely (double-page width)
        const hostW = hostRef.current.clientWidth || 1000;
        const desiredW = Math.min(1000, Math.max(700, hostW * 0.9)); // px for one page
        const scale = desiredW / viewport.width;

        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const vp = page.getViewport({ scale });

        canvas.width = vp.width;
        canvas.height = vp.height;
        await page.render({ canvasContext: ctx, viewport: vp }).promise;

        const $page = $("<div class='page'/>").css({
          backgroundColor: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }).append(
          $(canvas).css({ width: "100%", height: "100%", objectFit: "contain" })
        );

        $book.append($page);
      }

      setLoading(false);
      initTurn($book);
    };

    const initTurn = ($book) => {
      const hostW = hostRef.current.clientWidth || 1200;
      const hostH = hostRef.current.clientHeight || 700;

      // If pages exist, use their aspect ratio; otherwise fallback
      let w = Math.min(1100, hostW);
      let h = Math.min(800, hostH);

      $book.turn({
        width: w,
        height: h,
        autoCenter: true,
        display: "double",     // book/magazine style
        gradients: true,
        acceleration: true,
        elevation: 50
      });
    };

    if (pages?.length) createFromImages(pages);
    else if (pdfUrl) createFromPdf(pdfUrl);

    // Cleanup
    return () => {
      try { $host.turn && $host.turn("destroy"); } catch {}
      $host.empty();
    };
  }, [open, ready, pdfUrl, pages]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/60 flex items-center justify-center p-3">
      <div className="relative w-full max-w-6xl h-[88vh] rounded-2xl overflow-hidden bg-white">
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-20 px-3 py-1 rounded-full text-white"
          style={{ background: "linear-gradient(90deg,#BE0010,#E63946)" }}
        >
          Close
        </button>

        {/* Turn.js host */}
        <div ref={hostRef} className="w-full h-full" />

        {(!ready || loading) && (
          <div className="absolute inset-0 grid place-items-center text-sm text-black/70">
            {ready ? "Rendering pages…" : "Loading viewer…"}
          </div>
        )}
      </div>
    </div>
  );
}
