import React, { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

/**
 * THEMED KEKA CAREERS LIST
 * - Loads Keka embed script
 * - Parses injected jobs
 * - Renders our own cards in theme
 */

const KEKA_IDENTIFIER = "357ac919-3c5b-4878-922a-e01bc5fd29cd";
const KEKA_DOMAIN = "https://inkarpinstrument.keka.com/careers/";
const KEKA_SCRIPT_SRC = `https://inkarpinstrument.keka.com/careers/api/embedjobs/js/${KEKA_IDENTIFIER}`;

export default function CareersKeka() {
  const containerRef = useRef(null);        // hidden Keka container
  const observerRef = useRef(null);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

  // Inject Keka embed & watch for content
  useEffect(() => {
    // Clear/hide container
    if (containerRef.current) {
      containerRef.current.innerHTML = "";
    }

    // Keka global config
    window.khConfig = {
      identifier: KEKA_IDENTIFIER,
      domain: KEKA_DOMAIN,
      targetContainer: "#khembedjobs",
    };

    // Remove any old script (HMR / route changes)
    const existing = document.querySelector(`script[src="${KEKA_SCRIPT_SRC}"]`);
    if (existing) existing.remove();

    // Add fresh script
    const script = document.createElement("script");
    script.src = KEKA_SCRIPT_SRC;
    script.defer = true;
    script.onload = () => {
      // If Keka injects instantly, our observer below will catch it
      setLoadError("");
    };
    script.onerror = () => {
      setLoadError("Failed to load job listings. Please try again later.");
      setLoading(false);
    };
    document.head.appendChild(script);

    // Watch for injected nodes and parse
    observerRef.current = new MutationObserver(() => {
      if (!containerRef.current) return;
      const parsed = parseJobsFromContainer(containerRef.current);
      if (parsed.length) {
        setJobs(parsed);
        setLoading(false);
      }
    });

    if (containerRef.current) {
      observerRef.current.observe(containerRef.current, {
        childList: true,
        subtree: true,
      });
    }

    // Cleanup
    return () => {
      if (observerRef.current) observerRef.current.disconnect();
      const s = document.querySelector(`script[src="${KEKA_SCRIPT_SRC}"]`);
      if (s) s.remove();
    };
  }, []);

  return (
    <section className="relative mx-auto py-10 md:px-10 lg:px-20">
      {/* theme background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(230,57,70,0.08),transparent),radial-gradient(1200px_600px_at_80%_110%,rgba(230,57,70,0.08),transparent)]" />

      {/* Heading */}
      <div className="text-center flex flex-col items-center justify-center gap-3">
        <span
          className="px-4 py-1 text-xs sm:text-sm font-[MaxOT] uppercase rounded-full bg-white"
          style={{
            borderImage: "linear-gradient(90deg,#BE0010,#E63946) 1",
            borderWidth: 1,
            borderStyle: "solid",
          }}
        >
          Careers @ INKARP
        </span>
        <h1 className="text-xl sm:text-2xl font-[MaxOT] text-[#E63946] leading-tight">
          Let’s Work Together
        </h1>
        <p className="text-sm sm:text-base font-[Roboto] text-black/80 max-w-2xl">
          Join a diverse, passionate team and do your best work—backed by a culture of growth.
        </p>
      </div>

      {/* Content frame */}
      <div className="mt-6 rounded-2xl border border-gray-200 bg-white/70 backdrop-blur p-4 sm:p-6">
        {/* Loading / Error */}
        {loading && !loadError && (
          <div className="py-10 text-center text-sm font-[Roboto] text-black/70">
            Loading job listings…
          </div>
        )}
        {loadError && (
          <div className="py-10 text-center text-sm font-[Roboto] text-red-600">
            {loadError}
          </div>
        )}

        {/* Jobs grid */}
        {!loading && !loadError && jobs.length === 0 && (
          <div className="py-10 text-center text-sm font-[Roboto] text-black/70">
            No openings currently. Please check back soon.
          </div>
        )}

        {!loading && jobs.length > 0 && (
          <div className="max-w-5xl mx-auto">
            {jobs.map((job, i) => (
              <JobCard key={`${job.title}-${i}`} job={job} />
            ))}

            {/* Fallback link to Keka careers page */}
            <div className="text-center mt-8">
              <a
                href={KEKA_DOMAIN}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white font-[Roboto] text-sm font-semibold shadow"
                style={{ background: "linear-gradient(90deg,#BE0010,#E63946)" }}
              >
                View all openings on Keka
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Hidden Keka mount point (kept for script to inject) */}
      <div
        id="khembedjobs"
        ref={containerRef}
        className="hidden"
        aria-hidden="true"
      />
    </section>
  );
}

/* THEMED CARD (like your sample, but in our style) */
function JobCard({ job }) {
  const { title, location, type, url } = job;
  return (
    <div className="border border-gray-200 rounded-xl mt-4">
      <div className="flex items-center justify-between p-4 sm:p-6">
        <div>
          <h4 className="text-lg sm:text-xl font-semibold font-[MaxOT] mb-1 text-[#0f1b33]">
            {title}
          </h4>
          <div className="flex flex-wrap gap-3 text-xs sm:text-sm font-[Roboto] text-black/60">
            {location && <span className="uppercase">{location}</span>}
            {type && <span className="uppercase">{type}</span>}
          </div>
        </div>
        <a
          href={url || KEKA_DOMAIN}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white font-[Roboto] text-sm font-semibold shadow hover:opacity-95"
          style={{ background: "linear-gradient(90deg,#BE0010,#E63946)" }}
          aria-label={`Apply for ${title}`}
        >
          Apply
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

/* ---------- Parsers ---------- */
/**
 * Try to extract jobs from Keka’s injected DOM.
 * This is heuristic (Keka markup may change). We aim for:
 *  - title
 *  - location (REMOTE / city if present)
 *  - type (FULL TIME / PART TIME / INTERNSHIP if present)
 *  - url (apply/details link)
 */
function parseJobsFromContainer(rootEl) {
  // Grab any obvious job anchors/cards
  const anchors = Array.from(rootEl.querySelectorAll("a[href]"));

  // Group anchors by the nearest card-like block to avoid duplicates
  const cards = groupByCard(anchors);

  const jobs = cards
    .map((cardEl) => {
      const text = cardEl.innerText || cardEl.textContent || "";
      const firstAnchor = cardEl.querySelector("a[href]");
      const url = firstAnchor ? firstAnchor.getAttribute("href") : undefined;

      // Heuristics
      const title = extractTitle(cardEl) || extractFirstLine(text);
      const location = extractByKeywords(text, ["remote", "hyderabad", "bangalore", "mumbai", "india"]);
      const type = extractByKeywords(text, ["full time", "part time", "internship", "contract"]);

      return {
        title: cleanup(title),
        location: cleanup(location)?.toUpperCase(),
        type: cleanup(type)?.toUpperCase(),
        url,
      };
    })
    .filter((j) => !!j.title);

  // Deduplicate by title+url
  const seen = new Set();
  const uniq = [];
  for (const j of jobs) {
    const key = `${j.title}::${j.url || ""}`;
    if (!seen.has(key)) {
      seen.add(key);
      uniq.push(j);
    }
  }
  return uniq;
}

function groupByCard(anchors) {
  const cards = new Set();
  anchors.forEach((a) => {
    let el = a;
    // Walk up to a reasonable block (stop at container)
    for (let i = 0; i < 6 && el && el.parentElement; i++) {
      el = el.parentElement;
      // Heuristic "card-like" containers
      const cls = (el.className || "").toString().toLowerCase();
      const isCardish =
        cls.includes("card") ||
        cls.includes("job") ||
        cls.includes("listing") ||
        el.tagName === "LI" ||
        el.tagName === "ARTICLE" ||
        el.tagName === "DIV";
      if (isCardish && el !== document.body) {
        // stop when block has multiple children / some text content
        if ((el.children?.length || 0) > 0 && (el.innerText || "").length > 0) {
          cards.add(el);
          break;
        }
      }
    }
  });
  return Array.from(cards);
}

function extractTitle(cardEl) {
  // try common title tags
  const titleEl =
    cardEl.querySelector("h1, h2, h3, h4, .title, .job-title") || null;
  if (titleEl) return titleEl.innerText || titleEl.textContent || "";
  return null;
}

function extractFirstLine(text) {
  const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);
  return lines[0] || "";
}

function extractByKeywords(text, keys) {
  const t = text.toLowerCase();
  for (const k of keys) {
    if (t.includes(k)) return k;
  }
  return "";
}

function cleanup(s) {
  if (!s) return s;
  return s.replace(/\s+/g, " ").trim();
}
