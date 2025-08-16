import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, Briefcase, MapPin } from "lucide-react";

/**
 * THEMED KEKA CAREERS LIST
 */

const KEKA_IDENTIFIER = "357ac919-3c5b-4878-922a-e01bc5fd29cd";
const KEKA_DOMAIN = "https://inkarpinstrument.keka.com/careers/";
const KEKA_SCRIPT_SRC = `https://inkarpinstrument.keka.com/careers/api/embedjobs/js/${KEKA_IDENTIFIER}`;

export default function CareersKeka() {
  const containerRef = useRef(null); // hidden Keka container
  const observerRef = useRef(null);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

  useEffect(() => {
    if (containerRef.current) containerRef.current.innerHTML = "";

    // Keka global config
    window.khConfig = {
      identifier: KEKA_IDENTIFIER,
      domain: KEKA_DOMAIN,
      targetContainer: "#khembedjobs",
    };

    // Remove any old script
    const existing = document.querySelector(`script[src="${KEKA_SCRIPT_SRC}"]`);
    if (existing) existing.remove();

    // Add fresh script
    const script = document.createElement("script");
    script.src = KEKA_SCRIPT_SRC;
    script.defer = true;
    script.onload = () => setLoadError("");
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
          style={{ borderImage: "linear-gradient(90deg,#BE0010,#E63946) 1", borderWidth: 1, borderStyle: "solid" }}
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
      <div className="mt-6 rounded-2xl p-2 sm:p-6">
        {loading && !loadError && (
          <div className="py-10 text-center text-sm font-[Roboto] text-black/70">Loading job listings…</div>
        )}
        {loadError && (
          <div className="py-10 text-center text-sm font-[Roboto] text-red-600">{loadError}</div>
        )}

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

            <div className="text-center mt-8">
              <a
                href={KEKA_DOMAIN}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white font-[Roboto] text-sm font-semibold shadow"
                style={{ background: "linear-gradient(90deg,#BE0010,#E63946)" }}
              >
                View all openings
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Hidden Keka mount point (kept for script to inject) */}
      <div id="khembedjobs" ref={containerRef} className="hidden" aria-hidden="true" />
    </section>
  );
}

/* ---------- Card ---------- */

function JobCard({ job }) {
  const { title, location, type, url } = job || {};
  const shownLocation = location?.trim() || "Remote / Not specified";
  const shownType = type?.trim() || "Not specified";

  return (
    <article className="border border-gray-200 rounded-xl mt-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 sm:p-6">
        <div className="min-w-0">
          <h4 className="text-lg sm:text-xl font-[MaxOT] mb-1 ">
            {title || "Untitled role"}
          </h4>

          <div className="mt-1 flex flex-wrap gap-2 text-xs sm:text-sm font-[Roboto] text-black/70">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#F5F5F5] border border-gray-200">
              <MapPin className="w-3.5 h-3.5 text-[#E63946]" />
              <span className="font-medium">{shownLocation}</span>
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#F5F5F5] border border-gray-200">
              <Briefcase className="w-3.5 h-3.5 text-[#E63946]" />
              <span className="font-medium">{shownType}</span>
            </span>
          </div>
        </div>

        <div className="shrink-0">
          <a
            href={url || KEKA_DOMAIN}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white font-[Roboto] text-sm font-semibold shadow hover:opacity-95"
            style={{ background: "linear-gradient(90deg,#BE0010,#E63946)" }}
            aria-label={`Apply for ${title ?? "this role"}`}
          >
            Apply
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </article>
  );
}

/* ---------- Parsers (self-contained) ---------- */

function parseJobsFromContainer(rootEl) {
  const anchors = Array.from(rootEl.querySelectorAll("a[href]"));
  const cards = groupByCard(anchors);

  // Skip Keka footer/CTA blocks
  const SKIP_PATTERNS = /(keka\s*hire|powered\s*by|view\s+all\s+openings)/i;

  const jobs = cards
    .map((cardEl) => {
      const textAll = normalizeText(cardEl.innerText || cardEl.textContent || "");
      if (SKIP_PATTERNS.test(textAll)) return null;

      // Candidate URL (prefer detail/apply-like)
      let url = (cardEl.querySelector("a[href]") || {}).getAttribute?.("href") || undefined;
      if (url && !/careers\/(job|jobs|opening|apply|details)/i.test(url)) url = undefined;

      // Title preference: labeled > heading > first line
      const labeledTitle = matchLabel(textAll, /job\s*title\s*:\s*(.+?)(?:\n|$)/i);
      const headingTitle = extractTitle(cardEl);
      const title = labeledTitle || headingTitle || firstNonEmptyLine(textAll) || "";
      if (!title || SKIP_PATTERNS.test(title)) return null;

      const location = cleanupLocation(extractLocationFromCard(cardEl, textAll));
      const type = extractTypeFromCard(cardEl, textAll);

      return {
        title: cleanup(title),
        location: cleanup(location)?.replace(/\s+/g, " "),
        type: cleanup(type)?.replace(/-/g, " ").toUpperCase(),
        url,
      };
    })
    .filter(Boolean);

  // De-duplicate by title+url
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
    for (let i = 0; i < 6 && el && el.parentElement; i++) {
      el = el.parentElement;
      const cls = (el.className || "").toString().toLowerCase();
      const isCardish =
        cls.includes("card") ||
        cls.includes("job") ||
        cls.includes("listing") ||
        el.tagName === "LI" ||
        el.tagName === "ARTICLE" ||
        el.tagName === "DIV";
      if (isCardish && el !== document.body) {
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
  const titleEl = cardEl.querySelector("h1, h2, h3, h4, .title, .job-title");
  return titleEl ? titleEl.innerText || titleEl.textContent || "" : null;
}

function firstNonEmptyLine(text) {
  const lines = (text || "")
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);
  return lines[0] || "";
}

/* ---- Location & Type helpers ---- */

function extractLocationFromCard(cardEl, textAll) {
  const text = (textAll || "").trim();

  // 1) Explicit "Location: ..."
  const m = text.match(/Location:\s*([^\n\r]+)/i);
  if (m?.[1]) return m[1].trim();

  // 2) Common location nodes
  const locNode = cardEl.querySelector(
    '[data-location],[class*="location"],[class*="loc"],[class*="job-location"]'
  );
  if (locNode) {
    const t = (locNode.innerText || locNode.textContent || "").trim();
    if (t) return t.replace(/^\s*location[:\s]*/i, "").trim();
  }

  // 3) Token fallback (IN cities & generic)
  const TOKENS = [
    "Remote",
    "Pan India",
    "India",
    "Chandigarh",
    "Bhopal",
    "Bengaluru",
    "Bangalore",
    "Hyderabad",
    "Chennai",
    "Pune",
    "Mumbai",
    "Delhi",
    "Noida",
    "Gurugram",
    "Gurgaon",
    "Kolkata",
    "Jaipur",
    "Ahmedabad",
    "Indore",
    "Kochi",
    "Cochin",
    "Vadodara",
    "Surat",
    "Vizag",
    "Visakhapatnam",
  ];
  const lower = text.toLowerCase();
  const hit = TOKENS.find((tok) => lower.includes(tok.toLowerCase()));
  return hit || "";
}

function extractTypeFromCard(cardEl, textAll) {
  const text = (textAll || "").toLowerCase();
  const m =
    text.match(/\b(full[-\s]?time|part[-\s]?time|internship|contract)\b/i) ||
    (cardEl.querySelector('[class*="type"],[class*="employment"]') &&
      (cardEl.querySelector('[class*="type"],[class*="employment"]').innerText ||
        cardEl.querySelector('[class*="type"],[class*="employment"]').textContent));
  return typeof m === "string" ? m : m?.[0] || "";
}

/* ---- General helpers (self-contained) ---- */

function normalizeText(s) {
  return (s || "").replace(/\u00A0/g, " ").replace(/[ \t]+\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim();
}

function matchLabel(text, regex) {
  const m = (text || "").match(regex);
  return m?.[1]?.trim() || "";
}

function cleanupLocation(s) {
  if (!s) return s;
  return s.replace(/^(?:remote\s*\/\s*)?location[:\s-]*/i, "").replace(/\s{2,}/g, " ").trim();
}

function cleanup(s) {
  if (!s) return s;
  return s.replace(/\s+/g, " ").replace(/[•|]+/g, " ").trim();
}
