/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useRef, useState, useEffect } from 'react';
import { Award, Phone, Zap, ChevronUp } from 'lucide-react';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Tactics from './components/Tactics';
import TargetAudience from './components/TargetAudience';
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer';

export default function App() {
  const registrationRef = useRef<HTMLDivElement>(null);
  const [showStickyHeader, setShowStickyHeader] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll for headers and floating button displays
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      if (scrollPos > 400) {
        setShowStickyHeader(true);
      } else {
        setShowStickyHeader(false);
      }

      if (scrollPos > 800) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToRegistration = () => {
    if (registrationRef.current) {
      registrationRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-100 antialiased selection:bg-lime-400 selection:text-slate-950 scroll-smooth">
      
      {/* 1. Global Navigation Bar / Sticky Header */}
      <header className={`w-full z-50 transition-all duration-300 ${
        showStickyHeader 
          ? 'fixed top-0 bg-slate-950/95 backdrop-blur-md border-b border-slate-900 shadow-xl py-3.5' 
          : 'absolute top-0 bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & Academy Name */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={handleScrollToTop}>
            <div className="p-1.5 bg-lime-400 text-slate-950 rounded-lg">
              <Award className="w-5 h-5" />
            </div>
            <span className="text-base sm:text-lg font-display font-black tracking-tight text-white uppercase">
              JOHNNY TRÍ <span className="text-lime-400">PICKLEBALL</span>
            </span>
          </div>

          {/* Quick interactive CTAs */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Direct hotline */}
            <a 
              id="header-phone-btn"
              href="tel:0945656766" 
              className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-slate-900 border border-slate-800 text-slate-300"
            >
              <Phone className="w-3.5 h-3.5 text-lime-400" />
              HOTLINE: 094.56.56.766
            </a>

            {/* Main register CTA */}
            <button
              id="header-register-btn"
              onClick={handleScrollToRegistration}
              className="px-4 py-2 sm:px-5 sm:py-2.5 bg-gradient-to-r from-orange-600 to-red-650 hover:opacity-90 text-white font-display font-black uppercase text-xs sm:text-xs tracking-wider rounded-xl transition-all shadow-md shadow-red-500/10 cursor-pointer flex items-center gap-1.5"
            >
              <Zap className="w-3.5 h-3.5 text-yellow-300" />
              Đăng Ký Giữ Chỗ
            </button>
          </div>

        </div>
      </header>

      {/* 2. Hero banner segment */}
      <Hero onRegisterClick={handleScrollToRegistration} />

      {/* 3. Key benefits section */}
      <Benefits />

      {/* 4. Interactive tactic segment */}
      <Tactics />

      {/* 5. Age targets / Class times */}
      <TargetAudience />

      {/* 6. Dynamic Booking Form section */}
      <RegistrationForm formRef={registrationRef} />

      {/* 7. Comprehensive Footer & Contacts */}
      <Footer onBackToFormClick={handleScrollToRegistration} />

      {/* 8. Floating Accessories (Back to Top & Sticky Hotline on Mobile) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        {/* Scroll back to top bubble */}
        {showScrollTop && (
          <button
            id="floating-scroll-top"
            onClick={handleScrollToTop}
            className="p-3 bg-slate-900 hover:bg-slate-850 hover:text-white text-slate-400 rounded-full border border-slate-800 hover:border-slate-700 shadow-xl transition-all cursor-pointer hidden sm:flex"
            title="Cuộn lên đầu trang"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
        )}

        {/* Floating Quick Zalo Hotline circle */}
        <a
          id="floating-hotline"
          href="https://zalo.me/0945656766"
          target="_blank"
          rel="noreferrer"
          className="p-4 bg-sky-500 text-white rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center relative animate-pulse"
          title="Liên hệ tư vấn Zalo ngay"
        >
          <div className="absolute -inset-1 bg-sky-400 rounded-full blur opacity-30 animate-ping pointer-events-none" />
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z" className="hidden" />
            <path d="M12 2C6.48 2 2 5.84 2 10.59c0 2.8 1.59 5.27 4.01 6.64-.17.55-.61 1.98-.61 1.98s1.4-.41 1.95-.62c.78.22 1.6.34 2.45.34 5.52 0 10-3.84 10-8.59S17.52 2 12 2z" className="hidden" />
            <path d="M12.036 5c-3.79 0-6.86 3.14-6.86 7.02 0 1.25.32 2.43.89 3.45l-.65 2.37c-.05.19.12.36.31.3l2.39-.78c1 .53 2.14.83 3.32.83 3.79 0 6.86-3.14 6.86-7.02S15.826 5 12.036 5zm2.744 8.7c-.12.35-.61.64-1 .69-.27.03-.63.05-1.02-.07-.25-.08-.57-.2-.96-.37-1.63-.7-2.68-2.39-2.76-2.5-.08-.11-.66-.9-.66-1.72 0-.82.42-1.22.57-1.38.15-.16.32-.2.43-.2.11 0 .22 0 .31.01.1.01.22-.04.35.26.13.31.45 1.12.49 1.21.04.09.07.2.01.32-.06.12-.09.19-.18.3-.09.11-.19.24-.27.32-.09.09-.19.19-.08.38.11.19.49.83 1.05 1.34.72.65 1.32.85 1.51.94.19.09.3.08.41-.03.11-.12.48-.57.61-.77.13-.2.26-.17.44-.1.18.07 1.14.54 1.34.64.2.1.33.15.38.24.05.09.05.53-.07.88z"/>
          </svg>
        </a>
      </div>

    </div>
  );
}

