import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ChevronDown, ArrowDownToLine } from "lucide-react";
import { createPortal } from "react-dom";

import InkarpLogo from "/InkarpLogo.svg";
import CatalystLogo from "/Catalyst.svg";

import SearchDialog from "../components/SearchDialog";
import FeedbackModal from "../components/pages/Home/FeedbackModal";

// ✅ Use the same data structure you used in Hero
import { synthesisVertical } from "../components/pages/Search/SynthesisVertical";

// ---------------------------
// Portal helper (prevents clipping under sidebar)
// ---------------------------
function Portal({ children }) {
  const elRef = useRef(null);
  if (!elRef.current) elRef.current = document.createElement("div");
  useEffect(() => {
    const el = elRef.current;
    el.id = "search-dialog-portal";
    el.style.zIndex = "10003";
    document.body.appendChild(el);
    return () => document.body.removeChild(el);
  }, []);
  return createPortal(children, elRef.current);
}

// ---------------------------
// Helpers for search
// ---------------------------
const slugify = (s = "") =>
  s
    .toString()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const VERTICALS = [
  synthesisVertical,
  // 👉 Add more verticals here when ready:
  // processVertical, analysisVertical, ...
];

function buildProductItem({ name, image, principal, productSlug, modelSlug }) {
  return { name, image: image || null, principal, productSlug, modelSlug };
}

function searchVerticals(query) {
  const q = (query || "").trim().toLowerCase();
  if (!q) return [];

  const results = [];

  // 1) Vertical match → dump all products/models
  for (const v of VERTICALS) {
    const verticalName = v.vertical || "";
    const principal = v.principal || "";
    if (verticalName.toLowerCase().includes(q)) {
      const allProducts = [];
      (v.products || []).forEach((p) => {
        if (typeof p === "string") {
          allProducts.push(
            buildProductItem({
              name: p,
              principal,
              productSlug: slugify(p),
            })
          );
        } else if (p && typeof p === "object" && p.name) {
          // product itself
          allProducts.push(
            buildProductItem({
              name: p.name,
              principal,
              productSlug: p.slug || slugify(p.name),
            })
          );
          // its models
          if (Array.isArray(p.models)) {
            p.models.forEach((m) => {
              if (m?.name) {
                allProducts.push(
                  buildProductItem({
                    name: m.name,
                    image: m.image,
                    principal,
                    productSlug: p.slug || slugify(p.name),
                    modelSlug: m.slug || slugify(m.name),
                  })
                );
              }
            });
          }
        }
      });
      results.push({ title: verticalName, products: allProducts, vertical: verticalName });
      return results; // vertical match is the most specific UX path — return early
    }
  }

  // 2) Product match → return product + its models
  for (const v of VERTICALS) {
    const principal = v.principal || "";
    let foundProduct = null;
    (v.products || []).forEach((p) => {
      if (p && typeof p === "object" && p.name && p.name.toLowerCase().includes(q)) {
        foundProduct = { v, p };
      }
    });

    if (foundProduct) {
      const { v: V, p } = foundProduct;
      const productResults = [];
      productResults.push(
        buildProductItem({
          name: p.name,
          principal: principal,
          productSlug: p.slug || slugify(p.name),
        })
      );
      if (Array.isArray(p.models)) {
        p.models.forEach((m) => {
          if (m?.name) {
            productResults.push(
              buildProductItem({
                name: m.name,
                image: m.image,
                principal,
                productSlug: p.slug || slugify(p.name),
                modelSlug: m.slug || slugify(m.name),
              })
            );
          }
        });
      }
      results.push({
        title: p.name,
        products: productResults,
        vertical: V.vertical || "",
      });
      return results; // return early for clean UX
    }
  }

  // 3) Generic model/product search across all verticals
  const matched = [];
  for (const v of VERTICALS) {
    const principal = v.principal || "";
    (v.products || []).forEach((p) => {
      if (typeof p === "string") {
        if (p.toLowerCase().includes(q)) {
          matched.push(
            buildProductItem({
              name: p,
              principal,
              productSlug: slugify(p),
            })
          );
        }
      } else if (p && typeof p === "object" && p.name) {
        if (p.name.toLowerCase().includes(q)) {
          matched.push(
            buildProductItem({
              name: p.name,
              principal,
              productSlug: p.slug || slugify(p.name),
            })
          );
        }
        if (Array.isArray(p.models)) {
          p.models.forEach((m) => {
            if (m?.name && m.name.toLowerCase().includes(q)) {
              matched.push(
                buildProductItem({
                  name: m.name,
                  image: m.image,
                  principal,
                  productSlug: p.slug || slugify(p.name),
                  modelSlug: m.slug || slugify(m.name),
                })
              );
            }
          });
        }
      }
    });
  }

  if (matched.length) {
    // Group under principal for consistency (you can bucket per-vertical if you prefer)
    // Here we just return one group titled "Results"
    results.push({
      title: "Results",
      products: matched,
      vertical: "",
    });
  }

  return results;
}

export default function NavbarNew() {
  const ProductProfile = "/ProductProfile/Inkarp_product_profile_2025.pdf";
  const [insightsOpen, setInsightsOpen] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Our Story", path: "/about" },
    { name: "Verticals", path: "/verticals" },
    { name: "Careers", path: "/careers" },
    { name: "Contact Us", path: "/contactUs" },
  ];

  const isActive = (path) => location.pathname === path;

  // Close insights dropdown on route change
  useEffect(() => {
    setInsightsOpen(false);
  }, [location.pathname]);

  // Close sidebar on outside click (paused when search modal open)
  useEffect(() => {
    function handleClickOutside(event) {
      if (showSearchModal) return; // don't interfere with modal
      if (navRef.current && !navRef.current.contains(event.target)) {
        const hamburgerButton = document.querySelector(".hamburger-button");
        if (!hamburgerButton?.contains(event.target)) {
          const closeSidebarEvent = new CustomEvent("closeSidebar");
          window.dispatchEvent(closeSidebarEvent);
        }
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showSearchModal]);

  // "/" shortcut to open search (except when typing)
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "/" && !showSearchModal) {
        const tag = (e.target?.tagName || "").toLowerCase();
        if (tag !== "input" && tag !== "textarea") {
          e.preventDefault();
          setShowSearchModal(true);
        }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [showSearchModal]);

  // 🔎 Navbar search handler using full vertical engine
  const handleSearch = async (query, callback) => {
    try {
      const results = searchVerticals(query);
      callback(results);
    } catch (e) {
      console.error("Search error:", e);
      callback([]);
    }
  };

  return (
    <>
      <div
        ref={navRef}
        className="flex bg-[#F5F5F5] flex-col h-screen max-h-screen w-full py-4 px-3 lg:px-5 space-y-3 overflow-y-auto font-[Roboto] text-base"
      >
        {/* Logo */}
        <div className="flex items-center justify-center mb-2">
          <Link to="/" className="block">
            <img
              src={InkarpLogo}
              alt="Inkarp Logo"
              className="h-[70px] lg:h-[90px] w-auto object-contain"
            />
          </Link>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 space-y-2 font-medium">
          {navLinks.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className={`block px-3 py-2 rounded-md transition-all duration-200 ${
                isActive(path)
                  ? "bg-[#BE0010] text-white shadow"
                  : "text-black hover:bg-gray-300"
              }`}
              onClick={() => {
                window.dispatchEvent(new CustomEvent("closeSidebar"));
              }}
            >
              {name}
            </Link>
          ))}

          {/* Insights & Updates */}
          <div className="w-full relative">
            <button
              onClick={() => setInsightsOpen(!insightsOpen)}
              className="flex items-center justify-between w-full px-3 py-2 rounded-md text-black hover:bg-gray-300 transition-all whitespace-nowrap"
            >
              <span className="text-left">Insights & Updates</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  insightsOpen ? "rotate-180" : ""
                }`}
                color="#E63946"
              />
            </button>

            {insightsOpen && (
              <div className="absolute z-10 bg-[#F5F5F5] mt-1 rounded-md overflow-hidden shadow-lg w-full left-0 top-full font-normal">
                <div className="flex flex-col space-y-1 py-2">
                  <Link
                    to="/insights-and-updates/blogs"
                    className={`block px-4 py-2 transition-all ${
                      isActive("/insights-and-updates/blogs")
                        ? "bg-[#E63946] text-white"
                        : "hover:bg-[#E63946] hover:text-white"
                    }`}
                    onClick={() => {
                      setInsightsOpen(false);
                      window.dispatchEvent(new CustomEvent("closeSidebar"));
                    }}
                  >
                    Blogs
                  </Link>
                  <Link
                    to="/insights-and-updates/news-and-events"
                    className={`block px-4 py-2 transition-all ${
                      isActive("/insights-and-updates/news-and-events")
                        ? "bg-[#E63946] text-white"
                        : "hover:bg-[#E63946] hover:text-white"
                    }`}
                    onClick={() => {
                      setInsightsOpen(false);
                      window.dispatchEvent(new CustomEvent("closeSidebar"));
                    }}
                  >
                    News & Events
                  </Link>
                  <Link
                    to="/insights-and-updates/webinars"
                    className={`block px-4 py-2 transition-all ${
                      isActive("/insights-and-updates/webinars")
                        ? "bg-[#BE0010] text-white"
                        : "hover:bg-[#E63946] hover:text-white"
                    }`}
                    onClick={() => {
                      setInsightsOpen(false);
                      window.dispatchEvent(new CustomEvent("closeSidebar"));
                    }}
                  >
                    Webinars
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* CatalystCue */}
          <Link
            to="/catalystcue"
            className="block"
            onClick={() => {
              window.dispatchEvent(new CustomEvent("closeSidebar"));
            }}
          >
            <img
              src={CatalystLogo}
              alt="CatalystCue"
              className="w-24 lg:w-28 h-10 lg:h-12 object-contain hover:bg-gray-300 rounded-md p-2"
            />
          </Link>
        </nav>

        {/* Bottom Buttons */}
        <div className="space-y-2 pt-5 border-t border-gray-200 mt-4">
          {/* SEARCH BUTTON */}
          <button
            onClick={() => setShowSearchModal(true)}
            className="flex items-center justify-between px-4 py-2 bg-white text-black border border-gray-300 rounded-md w-full hover:border-[#E63946] hover:bg-[#F5F5F5] transition"
          >
            <span className="inline-flex items-center gap-2">
              <Search className="w-4 h-4 text-[#E63946]" />
              Search
            </span>
            <span className="text-xs text-gray-500 border border-gray-300 rounded px-1.5 py-0.5">
              /
            </span>
          </button>

          {/* Product Profile download */}
          <a
            href="/ProductProfile/Inkarp_product_profile_2025.pdf"
            download
            onClick={() => {
              window.dispatchEvent(new CustomEvent("closeSidebar"));
            }}
          >
            <button className="flex items-center justify-between gap-2 px-4 py-2 bg-[#BE0010] text-white font-medium rounded-md w-full hover:bg-[#E63946] transition">
              <span>Product Profile</span>
              <ArrowDownToLine className="w-4 h-4" />
            </button>
          </a>
        </div>
      </div>

      {/* Search Dialog via Portal (full viewport, no clipping) */}
      {showSearchModal && (
        <Portal>
          <SearchDialog
            isOpen={showSearchModal}
            onClose={() => setShowSearchModal(false)}
            onSearch={handleSearch}
          />
        </Portal>
      )}
    </>
  );
}
