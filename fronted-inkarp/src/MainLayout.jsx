import { useState, useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { FaWhatsapp, FaBars } from "react-icons/fa";
import { FiBell } from 'react-icons/fi';

import NavbarNew from "./Main/NavbarNew";
import Breadcrumbs from "./components/pages/Breadcrumb";
import LoadingScreen from "./LoadingScreen";

import Webinar1 from '/src/assets/Webinars/WebinarImg1.jpg';
import Webinar2 from '/src/assets/Webinars/WebinarImg2.jpg';
import Webinar3 from '/src/assets/Webinars/WebinarImg3.jpg';
import Footer from "./Main/Footer";
import { ChevronUp, MoveUp } from "lucide-react";

export default function MainLayout() {
  const [isLoading, setIsLoading] = useState(true);
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Bell icon and popup state (from Home.jsx)
  const [showPopup, setShowPopup] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [autoShown, setAutoShown] = useState(false);
  const [iconAnimate, setIconAnimate] = useState(false);
  const [closingAnimation, setClosingAnimation] = useState(false);
  const autoCloseTimerRef = useRef(null);
  const images = [
    Webinar1,
    Webinar2,
    Webinar3
  ];

  // add this near top of MainLayout()
  const location = useLocation(); // <-- you were using location without declaring it

  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const calc = () => {
      const scrollTop = window.scrollY || 0;
      const docHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
      ) - window.innerHeight;

      const pct = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;
      setScrollPercent(pct);
      setShowScrollTop(scrollTop > 100); // keep your visibility logic
    };

    // run once & on scroll/resize
    calc();
    window.addEventListener('scroll', calc, { passive: true });
    window.addEventListener('resize', calc);
    return () => {
      window.removeEventListener('scroll', calc);
      window.removeEventListener('resize', calc);
    };
  }, []);
   // put this near your other effects in MainLayout
useEffect(() => {
  // If the URL has a hash (#section), scroll to that element instead
  if (location.hash) {
    const el = document.querySelector(location.hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
  }
  // Otherwise go to page top
  window.scrollTo({ top: 0, behavior: "auto" }); // or "smooth" if you prefer
  setScrollPercent(0);
}, [location.pathname, location.hash]);
  // Responsive check for mobile/tablet
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(window.innerWidth < 1024);
  useEffect(() => {
    const handleResize = () => setIsMobileOrTablet(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto show popup ONCE after 3 seconds
  useEffect(() => {
    if (location.pathname !== "/") return;
    const timer = setTimeout(() => {
      if (!autoShown) {
        setShowPopup(true);
        setAutoShown(true);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [autoShown, location.pathname]);

  // Set popupVisible after slide-in finishes (~500ms)
  useEffect(() => {
    if (showPopup && !closingAnimation) {
      const visibleTimer = setTimeout(() => setPopupVisible(true), 2000);
      return () => clearTimeout(visibleTimer);
    } else {
      setPopupVisible(false); // reset on close or animation
    }
  }, [showPopup, closingAnimation]);

  // Auto-close popup after 8s with animation
  useEffect(() => {
    if (showPopup && !autoCloseTimerRef.current && autoShown) {
      autoCloseTimerRef.current = setTimeout(() => {
        triggerAnimatedClose();
      }, 8000);
    }
    return () => clearTimeout(autoCloseTimerRef.current);
  }, [showPopup, autoShown]);

  // Slideshow only when popup is fully visible
  useEffect(() => {
    if (!popupVisible) return;
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [popupVisible]);

  // Bell icon animation
  useEffect(() => {
    if (location.pathname !== "/") return;
    const interval = setInterval(() => {
      setIconAnimate(true);
      setTimeout(() => setIconAnimate(false), 1000);
    }, 6000);
    return () => clearInterval(interval);
  }, [location.pathname]);

  const triggerAnimatedClose = () => {
    setPopupVisible(false);
    setClosingAnimation(true);
    setTimeout(() => {
      setShowPopup(false);
      setClosingAnimation(false);
      autoCloseTimerRef.current = null;
    }, 500); // match animation duration
  };

  const handleManualOpen = () => {
    clearTimeout(autoCloseTimerRef.current);
    autoCloseTimerRef.current = null;
    setShowPopup(true);
    setClosingAnimation(false);
  };

  const handleClosePopup = () => {
    clearTimeout(autoCloseTimerRef.current);
    autoCloseTimerRef.current = null;
    triggerAnimatedClose();
  };

  // Show loading animation for 5 seconds
  useEffect(() => {
    const loadTimer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(loadTimer);
  }, []);

  // Auto popup WhatsApp icon every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setShowWhatsApp(true);
      const timeout = setTimeout(() => setShowWhatsApp(false), 4000);
      return () => clearTimeout(timeout);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    (function (w, d) {
      w.CollectId = "672db8abf4bc76248fc52c81";
      const h = d.head || d.getElementsByTagName("head")[0];
      const s = d.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://collectcdn.com/launcher.js";
      h.appendChild(s);
    })(window, document);
  }, []);



  useEffect(() => {
    const handleResize = () => {
      setIsSidebarOpen(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleCloseSidebar = () => {
      if (window.innerWidth < 1024) setIsSidebarOpen(false);
    };
    window.addEventListener("closeSidebar", handleCloseSidebar);
    return () => window.removeEventListener("closeSidebar", handleCloseSidebar);
  }, []);

  // Show scroll-to-top button only when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isLoading) return <LoadingScreen />;

  return (
    <>
      <div className="flex min-h-screen w-full overflow-hidden">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="hamburger-button lg:hidden fixed top-4 left-4 z-30 p-2 bg-white rounded-md shadow-md"
        >
          <FaBars className="w-6 h-6 text-gray-600" />
        </button>

        {/* Sidebar */}
        <aside
          className={`fixed top-0 left-0 bottom-0 z-20 bg-white border-r border-gray-200 shadow-lg transition-transform duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } lg:translate-x-0 w-[280px] lg:w-[15%]`}
        >
          <NavbarNew />
        </aside>

        {/* Main Content */}
        <div
          className={`flex-1 transition-all duration-300 ease-in-out  ${isSidebarOpen ? "lg:ml-[15%]" : "ml-0"
            } w-full lg:w-[85%]`}
        >
          <div className="relative flex flex-col min-h-screen z-10">
            <main className="flex-grow relative">
              <Breadcrumbs />
              <Outlet />

              {/* Bell Icon and Webinar Popup (Home page only) */}
              {location.pathname === "/" && (
                <>
                  {/* Bell Icon */}
                  {!showPopup && (
                    <div
                      className={`fixed bottom-20 left-0 lg:left-60 z-[10001] bg-[#E63946] text-white p-3.5 rounded-full shadow-lg cursor-pointer transition-transform hover:scale-110 ${iconAnimate ? 'animate-bounce' : ''}`}
                      onClick={handleManualOpen}
                    >
                      <FiBell className="text-xl" />
                    </div>
                  )}
                  {/* Webinar Popup */}
                  {showPopup && (
                    <div
                      className="fixed left-[15%] inset-0 z-[10002] flex items-end justify-start px-6 pb-6 bg-transparent"
                      onClick={handleClosePopup}
                    >
                      <div
                        className={`relative w-[320px] bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200 ${closingAnimation ? 'animate-slide-out' : 'animate-slide-in'}`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        {/* Close Button */}
                        <button
                          onClick={handleClosePopup}
                          className="absolute top-2 right-2 text-white bg-black/60 hover:bg-black p-1 rounded-md text-xl z-10"
                          aria-label="Close"
                        >
                          ×
                        </button>
                        {/* Slideshow + CTA Button Over Image */}
                        <div className="relative p-2 bg-gray-100 overflow-hidden">
                          <div className="relative w-full h-auto">
                            <img
                              key={currentImage}
                              src={images[currentImage]}
                              alt={`Webinar ${currentImage + 1}`}
                              className={`w-full h-auto object-contain transition-transform duration-700 ease-in-out transform ${popupVisible ? 'animate-image-slide' : ''}`}
                            />
                            <a
                              href="/insights-and-updates/webinars"
                              className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-md font-medium text-xs shadow-md"
                            >
                              Register Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}

              {/* WhatsApp Floating Icon */}
              <div
                className="fixed bottom-6 left-4 lg:left-60 z-[9999] group"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                {/* Animated green dots */}
                <div className="relative w-14 h-14 flex items-center justify-center">
                  <div className="absolute bottom-0 left-0 w-5 h-5 bg-green-500 rounded-tr-full animate-ping-fast"></div>
                  <div className="absolute bottom-0 left-0 w-3 h-3 bg-green-400 rounded-tr-full animate-pulse-fast"></div>
                </div>
                {/* WhatsApp icon (appears over animation) */}
                <div
                  className={`absolute bottom-0 left-6 ${showWhatsApp || hovered ? "animate-slideIn" : "animate-slideOut"
                    }`}
                >
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full shadow-lg hover:scale-110 transition-transform"
                    aria-label="Chat on WhatsApp"
                  >
                    <FaWhatsapp size={28} />
                  </a>
                </div>
              </div>
            </main>
            <Footer />
            {/* Scroll to Top Button */}
            {showScrollTop && (
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="cursor-pointer fixed right-25 bottom-5 z-[99999] group/button active:scale-95 grid place-items-center"
                aria-label="Go to top"
              >
                {/* <span className="pointer-events-none absolute">
                    <ScrollToTopIcon />
                  </span> */}
                {/* Circular progress ring */}
                {(() => {
                  const r = 24;                 // radius
                  const c = 2 * Math.PI * r;    // circumference
                  const offset = c - (scrollPercent / 100) * c;

                  return (
                    <svg className="w-12 h-12 -rotate-90" viewBox="0 0 56 56">
                      {/* track */}
                      <circle
                        cx="28"
                        cy="28"
                        r={r}
                        stroke="#E5E7EB"
                        strokeWidth="4"
                        fill="none"
                      />
                      {/* progress */}
                      <circle
                        cx="28"
                        cy="28"
                        r={r}
                        stroke="#E63946"
                        strokeWidth="2"
                        fill="none"
                        strokeDasharray={c}
                        strokeDashoffset={offset}
                        style={{ transition: 'stroke-dashoffset 120ms linear' }}
                        strokeLinecap="round"
                      />
                    </svg>
                    
                  );
                })()}
              
                {/* center arrow (your existing icon works too) */}
                <span className="pointer-events-none absolute text-[#E63946] text-xs font-medium rotate-0">
                  <ChevronUp  className="h-4"/>
                  {/* {Math.round(scrollPercent)}% */}
                </span>
              </button>
            )}

          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes slideIn {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes slideOut {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(20px); opacity: 0; }
        }
        @keyframes ping-fast {
          0% { transform: scale(1); opacity: 1; }
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        @keyframes pulse-fast {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0.6; }
        }
        .animate-slideIn {
          animation: slideIn 0.5s ease forwards;
        }
        .animate-slideOut {
          animation: slideOut 0.5s ease forwards;
        }
        .animate-ping-fast {
          animation: ping-fast 1.5s infinite;
        }
        .animate-pulse-fast {
          animation: pulse-fast 2s infinite;
        }
        @keyframes slideInUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes slideOutToBottomRight {
          from {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
          to {
            transform: translate(120px, 100px) scale(0.1);
            opacity: 0;
          }
        }
        @keyframes slideImageLeft {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0%);
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slideInUp 0.5s ease-out forwards;
        }
        .animate-slide-out {
          animation: slideOutToBottomRight 0.5s ease-in forwards;
        }
        .animate-image-slide {
          animation: slideImageLeft 0.3s ease-out;
        }
      `}</style>
    </>
  );
}