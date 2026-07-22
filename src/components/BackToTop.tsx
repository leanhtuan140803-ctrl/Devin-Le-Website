'use client';

import { useState, useEffect } from 'react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-40 w-11 h-11 bg-burnt-orange text-white rounded-full shadow-lg flex items-center justify-center hover:bg-burnt-orange-dark transition-all duration-300 focus-visible:outline-2 focus-visible:outline-burnt-orange focus-visible:outline-offset-2 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}
