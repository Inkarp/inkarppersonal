import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import InkarpLogo from '/InkarpLogo.svg';
import CatalystLogo from '/Catalyst.svg';

// lucide-react (only what we use)
import { MapPin, Phone, Mail, PhoneCall } from 'lucide-react';

// brand socials
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const formRef = useRef(null);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('https://inkarp.onrender.com/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const contentType = response.headers.get('content-type');
      const data = contentType?.includes('application/json') ? await response.json() : {};

      if (response.ok) {
        setStatus({ type: 'success', message: data.message || 'Thank you for subscribing!' });
        setEmail('');
        formRef.current?.classList.add('done');
        setTimeout(() => formRef.current?.classList.remove('done'), 4000);
      } else {
        throw new Error(data.message || 'Subscription failed');
      }
    } catch (error) {
      setStatus({ type: 'error', message: error.message || 'Failed to subscribe. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="relative w-[98%] mx-auto mt-2 rounded-2xl border border-[#F5F5F5] bg-white shadow-sm overflow-hidden">
      {/* soft on-brand background wash */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(230,57,70,0.06),transparent),radial-gradient(1200px_600px_at_80%_110%,rgba(230,57,70,0.06),transparent)]" />
      {/* Subscribe */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 px-4 py-6 rounded-t-2xl">
        <img
          className="h-16 sm:h-20 lg:h-24 w-auto rounded-md p-2"
          src={InkarpLogo}
          alt="Inkarp Logo"
          title="Inkarp"
        />
        <div className="w-full lg:w-3/4 text-center">
          <h3 className="text-xl text-[#E63946] mb-4 font-[MaxOT]">
            Subscribe for Scientific Updates That Matter
          </h3>

          <div className="relative max-w-xl mx-auto">
            <form
              ref={formRef}
              className="subscription relative w-full h-12 rounded-full overflow-hidden shadow-sm bg-white"
              onSubmit={handleSubscribe}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="add-email absolute rounded-full top-0 left-0 w-full h-full px-5 text-sm bg-white text-black border border-[#F5F5F5] placeholder:font-semibold placeholder-black/60 focus:outline-none focus:ring-2 focus:ring-[#E63946]/30"
                placeholder="Enter your email address"
                required
                disabled={isLoading}
              />
              <button
                type="submit"
                className={`submit-email absolute top-0 right-0 h-[calc(100%-2px)] w-28 text-white font-semibold rounded-full m-[1px] px-5 transition-all duration-300 ${
                  isLoading ? 'opacity-80 cursor-not-allowed' : ''
                }`}
                disabled={isLoading}
                style={{ backgroundImage: 'linear-gradient(90deg,#BE0010,#E63946)' }}
              >
                <span className="before-submit absolute inset-0 flex items-center justify-center rounded-full">
                  {isLoading ? 'Subscribing...' : 'Subscribe'}
                </span>
                <span className="after-submit absolute inset-0 flex items-center justify-center opacity-0 rounded-full">
                  Thank you!
                </span>
              </button>
            </form>

            {status.message && (
              <div className={`mt-2 text-sm ${status.type === 'error' ? 'text-[#BE0010]' : 'text-green-700'}`}>
                {status.message}
              </div>
            )}

            <p className="text-sm sm:text-base lg:text-sm text-black font-[Roboto] mt-3 font-medium">
              We respect your time. One email a month. Zero spam.
            </p>

            <style>{`
              .subscription.done .submit-email { width: calc(100% - 2px); }
              .subscription .submit-email .before-submit,
              .subscription .submit-email .after-submit { visibility: visible; opacity: 1; }
              .subscription.done .submit-email .before-submit,
              .subscription:not(.done) .submit-email .after-submit { visibility: hidden; opacity: 0; }
              .subscription.done .submit-email .after-submit { opacity: 1; }
            `}</style>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="p-5 text-black">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* About */}
          <div className="text-center lg:text-left">
            <h2 className="text-xl mb-3 text-[#E63946] font-[MaxOT]">About Inkarp</h2>
            <div className="w-24 h-[2px] bg-gradient-to-r from-[#BE0010] to-[#E63946] mx-auto lg:mx-0 mb-4" />
            <p className="text-sm sm:text-base font-[Roboto] leading-relaxed mb-6">
              Established in 1985, Inkarp is a trusted name in the scientific instrument industry,
              offering comprehensive research solutions and exceptional after-sales support. With a robust presence in
              India, we're a go-to choice for a diverse range of sectors. Our enduring partnerships with major
              manufacturers globally ensure sustained customer support. Our dedicated team is at the heart of our
              success, reflecting our commitment to excellence.
            </p>

            {/* Socials (on-brand) */}
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-xl text-[#E63946] mb-3 font-[MaxOT]">Follow Us</h3>
              <div className="flex flex-row gap-3 items-center justify-center">
                {[
                  { href: "https://www.instagram.com/inkarpinstruments", Icon: FaInstagram, label: 'Instagram' },
                  { href: "https://www.facebook.com/inkarpinstruments", Icon: FaFacebookF, label: 'Facebook' },
                  { href: "https://www.linkedin.com/company/inkarp-instruments-pvt-ltd", Icon: FaLinkedinIn, label: 'LinkedIn' },
                  { href: "https://www.youtube.com/@inkarpinstruments", Icon: FaYoutube, label: 'YouTube' },
                  { href: "https://wa.me/919966634008", Icon: FaWhatsapp, label: 'WhatsApp' },
                ].map(({ href, Icon, label }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm transition-all hover:scale-110"
                    aria-label={label}
                    
                  >
                    <Icon className="text-[#E63946]" size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Links + Contact */}
          <div className="grid grid-cols-3 sm:grid-cols-2 gap-8">
            {/* Quick Links */}
            <div className="text-center sm:text-left">
              <h3 className="text-xl text-[#E63946] mb-3 font-[MaxOT]">Quick Links</h3>
              <div className="w-20 h-[2px] bg-gradient-to-r from-[#BE0010] to-[#E63946] mx-auto sm:mx-0 mb-3" />
              <div className="space-y-2 text-sm sm:text-base">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'Our Story', path: '/our-story' },
                  { name: 'Verticals', path: '/verticals' },
                  { name: 'Contact Us', path: '/contact' },
                  { name: 'Blog', path: '/blog' },
                  { name: 'News & Events', path: '/news-events' },
                  { name: 'Careers', path: '/careers' },
                ].map((link, index) => (
                  <div key={index} className="font-[Roboto]">
                    <Link
                      to={link.path}
                      className="hover:text-[#E63946] transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </div>
                ))}

                <div className="flex justify-center sm:justify-start">
                  <Link to="/catalystcue" className="hover:opacity-90 transition-opacity">
                    <img
                      src={CatalystLogo}
                      alt="Catalyst Cue"
                      className="w-24 h-10 object-contain"
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="text-center sm:text-left">
              <h3 className="text-xl text-[#E63946] mb-3 font-[MaxOT]">Contact Us</h3>
              <div className="w-20 h-[2px] bg-gradient-to-r from-[#BE0010] to-[#E63946] mx-auto sm:mx-0 mb-3" />
              <ul className="space-y-3 text-sm sm:text-base font-[Roboto]">
                <li className="flex items-start justify-center sm:justify-start gap-2">
                  <MapPin size={16} className="min-w-[16px] mt-1 text-[#E63946]" />
                  <span className="leading-relaxed">
                    Inkarp Instruments Pvt Ltd, Plot No - 5A/10-11, 3rd Floor, IDA Nacharam Road No. 1,
                    Nacharam - Chilka Nagar Road, Hyderabad – 500076
                  </span>
                </li>
                <li className="flex items-center justify-center sm:justify-start gap-2">
                  <Phone size={16} className="min-w-[16px] text-[#E63946]" />
                  <a href="tel:+919966634008" className="hover:text-[#E63946] transition-colors duration-200">
                    +91 99666 34008
                  </a>
                </li>
                {/* <li className="flex items-center justify-center sm:justify-start gap-2">
                  <PhoneCall size={16} className="min-w-[16px] text-[#E63946]" />
                  <a href="tel:+914027172293" className="hover:text-[#E63946] transition-colors duration-200">
                    +91 40 2717 2293
                  </a>
                </li> */}
                <li className="flex items-center justify-center sm:justify-start gap-2">
                  <Mail size={16} className="min-w-[16px] text-[#E63946]" />
                  <a href="mailto:info@inkarp.co.in" className="hover:text-[#E63946] transition-colors duration-200">
                    info@inkarp.co.in
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-black/90 text-white border-t-[3px] border-t-[#E63946] py-4 text-sm w-[96%] mx-auto rounded-t-full shadow-inner">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
            <p className="text-gray-300">
              © {new Date().getFullYear()} <span className="text-white">Inkarp</span>. All Rights Reserved.
            </p>
            <ul className="flex flex-wrap justify-center sm:justify-end gap-4 text-xs sm:text-sm">
              <li>
                <Link to="/terms-and-conditions" className="text-gray-300 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/sales-terms" className="text-gray-300 hover:text-white transition-colors">
                  Sales Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
