import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ChevronDown, ArrowDownToLine } from "lucide-react";
import InkarpLogo from "/inkarp old.svg";
import CatalystLogo from "/Catalyst.svg";
import SearchDialog from "../components/SearchDialog";
import FeedbackModal from "../components/pages/Home/FeedbackModal";

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

  // Close insights dropdown when location changes
  useEffect(() => {
    setInsightsOpen(false);
  }, [location.pathname]);

  // Handle click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        // Check if the click is not on the hamburger button
        const hamburgerButton = document.querySelector('.hamburger-button');
        if (!hamburgerButton?.contains(event.target)) {
          // Dispatch a custom event to close the sidebar
          const closeSidebarEvent = new CustomEvent('closeSidebar');
          window.dispatchEvent(closeSidebarEvent);
        }
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle search
  const handleSearch = async (query, callback) => {
    try {
      // Simulate API delay
      setTimeout(() => {
        callback([]);
      }, 500);
    } catch (error) {
      console.error('Search error:', error);
      callback([]);
    }
  };

  return (
    <>
      {/* Set the base font size here */}
      <div
        ref={navRef}
        className="flex bg-black/10 flex-col h-screen max-h-screen w-full py-4 px-3 lg:px-5 space-y-3 overflow-y-auto font-[Roboto] text-base" // <--- SET BASE FONT SIZE
      >
        {/* Logo */}
        <div className="flex items-center justify-center mb-2">
          <Link to="/" className="block">
            <img
              src={InkarpLogo}
              alt="Inkarp Logo"
              className="h-[70px] lg:h-[90px] w-auto max-w-full object-contain"
            />
          </Link>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 space-y-2 font-semibold">
          {navLinks.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className={`block px-3 py-2 rounded-md text-[15px] transition-all duration-200 ${isActive(path)
                ? "bg-[#E63946] text-white shadow"
                : "text-black hover:bg-gray-300"
                }`}
              onClick={() => {
                // Dispatch custom event to close sidebar
                const closeSidebarEvent = new CustomEvent('closeSidebar');
                window.dispatchEvent(closeSidebarEvent);
              }}
            >
              {name}
            </Link>
          ))}

          {/* Insights & Updates Dropdown */}
          <div className="w-full relative">
            <button
              onClick={() => setInsightsOpen(!insightsOpen)}
              className="flex items-center justify-between w-full px-3 py-2 rounded-md text-black hover:bg-gray-300 transition-all whitespace-nowrap"
            >
              <span className="text-left">Insights & Updates</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${insightsOpen ? 'rotate-180' : ''}`}
                color="#E63946"
              />
            </button>


            {insightsOpen && (
              <div className="absolute z-10 bg-[#F5F5F5] mt-1 rounded-md overflow-hidden shadow-lg w-full left-0 top-full font-normal">
                <div className="flex flex-col space-y-1 py-2 text-ellipsis overflow-hidden">
                  <Link
                    to="/insights-and-updates/blogs"
                    className={`block px-4 py-2 transition-all ${isActive("/insights&updates/blogs")
                      ? "bg-[#E63946] text-white"
                      : "hover:bg-[#E63946] hover:text-white"
                      }`}
                    onClick={() => {
                      setInsightsOpen(false);
                      window.dispatchEvent(new CustomEvent('closeSidebar'));
                    }}
                  >
                    Blogs
                  </Link>
                  <Link
                    to="/insights-and-updates/news-and-events"
                    className={`block px-4 py-2 transition-all ${isActive("/insights&updates/news-and-events")
                      ? "bg-[#E63946] text-white"
                      : "hover:bg-[#E63946] hover:text-white"
                      }`}
                    onClick={() => {
                      setInsightsOpen(false);
                      window.dispatchEvent(new CustomEvent('closeSidebar'));
                    }}
                  >
                    News & Events
                  </Link>
                  <Link
                    to="/insights-and-updates/webinars"
                    className={`block px-4 py-2 transition-all ${isActive("/insights&updates/webinars")
                      ? "bg-[#E63946] text-white"
                      : "hover:bg-[#E63946] hover:text-white"
                      }`}
                    onClick={() => {
                      setInsightsOpen(false);
                      window.dispatchEvent(new CustomEvent('closeSidebar'));
                    }}
                  >
                    Webinars
                  </Link>
                </div>
              </div>
            )}
          </div>
          {/* CatalystCue logo */}
          <Link
            to="/catalystcue"
            className="block "
            onClick={() => {
              const closeSidebarEvent = new CustomEvent('closeSidebar');
              window.dispatchEvent(closeSidebarEvent);
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
          <a
            href={ProductProfile}
            download
            onClick={() => {
              const closeSidebarEvent = new CustomEvent('closeSidebar');
              window.dispatchEvent(closeSidebarEvent);
            }}
          >
            <button className="flex items-start gap-2 px-4 py-2 bg-[#E63946] text-white font-semibold rounded-md w-full hover:bg-red-600">
              Product Profile
              <ArrowDownToLine className="w-4 h-4" />
            </button>
          </a>
        </div>
      </div>

      {/* Search Dialog */}
      <SearchDialog
        isOpen={showSearchModal}
        onClose={() => setShowSearchModal(false)}
        onSearch={handleSearch}
      />
    </>
  );
}
