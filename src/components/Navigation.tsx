'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Skills', href: '#skills' },
  { label: 'CV', href: '#cv' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace('#', ''));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = useCallback(
    (href: string) => {
      setMenuOpen(false);
      const id = href.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    },
    []
  );

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-charcoal/98 backdrop-blur-sm shadow-lg'
            : 'bg-charcoal'
        }`}
        role="banner"
      >
        <nav
          className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-[72px]"
          aria-label="Primary navigation"
        >
          {/* Monogram logo */}
          <Link
            href="#home"
            onClick={() => handleNavClick('#home')}
            className="font-serif text-white text-xl font-bold tracking-wider hover:text-burnt-orange transition-colors focus-visible:outline-burnt-orange"
            aria-label="Devin Le — Home"
          >
            <span className="text-burnt-orange">D</span>L
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-7" role="list">
            {navItems.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => handleNavClick(item.href)}
                  className={`nav-link text-sm font-medium tracking-wide transition-colors ${
                    activeSection === item.href.replace('#', '')
                      ? 'text-burnt-orange active'
                      : 'text-white/80 hover:text-white'
                  }`}
                  aria-current={
                    activeSection === item.href.replace('#', '')
                      ? 'page'
                      : undefined
                  }
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2 text-white focus-visible:outline-burnt-orange"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          menuOpen ? 'visible' : 'invisible'
        }`}
        aria-hidden={!menuOpen}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
            menuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Drawer panel */}
        <div
          className={`absolute right-0 top-0 bottom-0 w-72 bg-charcoal shadow-2xl transition-transform duration-300 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between px-6 h-[72px] border-b border-white/10">
            <span className="font-serif text-white text-xl font-bold">
              <span className="text-burnt-orange">D</span>L
            </span>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-white/70 hover:text-white p-1 focus-visible:outline-burnt-orange"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <ul className="py-6 px-6 space-y-1" role="list">
            {navItems.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => handleNavClick(item.href)}
                  className={`w-full text-left py-3 px-4 rounded text-base font-medium transition-colors ${
                    activeSection === item.href.replace('#', '')
                      ? 'text-burnt-orange bg-white/5'
                      : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`}
                  aria-current={
                    activeSection === item.href.replace('#', '')
                      ? 'page'
                      : undefined
                  }
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="absolute bottom-8 left-6 right-6">
            <p className="text-white/40 text-xs text-center">Devin Le — Austin, Texas</p>
          </div>
        </div>
      </div>
    </>
  );
}
