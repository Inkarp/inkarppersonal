import React, { useEffect, useState, useRef } from 'react';
import Hero from '../components/pages/Home/Hero';
import WhyChooseUsSection from '../components/pages/Home/WhyChooseUsSection';
import ExperienceSection from '../components/pages/Home/ExperienceSection';
import Principles from '../components/pages/Home/Principles';
import Offerings from '../components/pages/Home/Offerings';
import NewsEvents from '../components/pages/Home/NewsEvents';
import ClientReviews from '../components/pages/Home/ClientReviews';
import PickNew from '../components/pages/Home/PickNew';
import Companies from '../components/pages/Home/Companies';
import HomeBlogs from '../components/pages/Home/HomeBlogs';
import NewAbout from '../components/pages/Home/NewAbout';
import PrincipalsTab from '../components/pages/Home/PrincipalsTab';

import Banner1 from '/src/assets/Webinars/WebinarImg1.jpg';
import Banner2 from '/src/assets/Webinars/WebinarImg2.jpg';
import Banner3 from '/src/assets/Webinars/WebinarImg3.jpg';
import { Helmet } from 'react-helmet';
import { FiBell } from 'react-icons/fi';
import About from '../components/pages/Home/About';
import Sample from '../components/pages/Home/Sample';
import PickProduct from '../components/pages/Home/PickProduct';
import Industries from '../components/pages/Home/Industries';
import InkarpGroupShowcase from '../components/pages/Home/InkarpCompanies';
import OrbitMap from '../components/pages/Home/OrbitMap';
import SplitAffiliates from '../components/pages/Home/SplitAffiliates';
import HoneyCombAffiliates from '../components/pages/Home/HoneyCombAffiliates';
import HeroNew from '../components/pages/Home/HeroNew';
import CompaniesNew from '../components/pages/Home/CompaniesNew';
import OfferingsNew from '../components/pages/Home/OfferingsNew';
import OfferingsDemo from '../components/pages/Home/OfferingsDemo';



const Home = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [autoShown, setAutoShown] = useState(false);
  const [iconAnimate, setIconAnimate] = useState(false);
  const [closingAnimation, setClosingAnimation] = useState(false);
  const autoCloseTimerRef = useRef(null);

  const images = [Banner1, Banner2, Banner3];

  const [isMobileOrTablet, setIsMobileOrTablet] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => setIsMobileOrTablet(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  // Auto show popup ONCE after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!autoShown) {
        setShowPopup(true);
        setAutoShown(true);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [autoShown]);

  // Set popupVisible after slide-in finishes (~500ms)
  useEffect(() => {
    if (showPopup && !closingAnimation) {
      const visibleTimer = setTimeout(() => setPopupVisible(true), 500);
      return () => clearTimeout(visibleTimer);
    } else {
      setPopupVisible(false); // reset on close or animation
    }
  }, [showPopup, closingAnimation]);

  // Auto-close popup after 5s with animation
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
    const interval = setInterval(() => {
      setIconAnimate(true);
      setTimeout(() => setIconAnimate(false), 1000);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

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

  return (
    <>
      <Helmet>
        <title>Best Laboratory Equipment Supplier in India - Inkarp Instruments Pvt Ltd</title>
        <meta name="keywords" content='Laboratory equipment supplier in india, Analytical laboratory equipment Scientific and analytical instruments Chemical analysis equipment' />
        <meta name="description" content="Discover the best Laboratory Equipment Supplier in India. Inkarp Instruments offers unmatched sales and service networks across India." />
      </Helmet>
      <Hero />
      {/* <HeroNew /> */}
      <WhyChooseUsSection />
      {/* <Industries /> */}
      {/* <PickNew /> */}
      <PickProduct />
      {/* <OrbitMap />
      <SplitAffiliates />
      <HoneyCombAffiliates/> */}
      {/* <Companies /> */}
      {/* <InkarpGroupShowcase /> */}
      {/* <ExperienceSection /> */}
      <Sample />
      {/* <About/> */}
      {isMobileOrTablet ? <NewAbout /> : <Companies />}
      {/* <CompaniesNew /> */}
      {isMobileOrTablet ? <PrincipalsTab /> : <Principles />}
      <Offerings />
      <OfferingsNew />
      <OfferingsDemo />
      <HomeBlogs />
      <NewsEvents />
      <ClientReviews />
    </>
  );
};

export default Home;
