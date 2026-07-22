'use client';

import { useEffect, useRef, useState } from 'react';
import { profile } from '@/data/profile';

function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-10">
      <div className="section-overline" aria-hidden="true" />
      <p className="text-burnt-orange text-xs font-semibold tracking-widest uppercase mb-2">{label}</p>
      <h2 className="font-serif text-3xl lg:text-4xl font-bold text-charcoal">{title}</h2>
    </div>
  );
}

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.unobserve(el); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const interests = [
    'Real Estate Development',
    'Real Estate Investment',
    'Underwriting',
    'Capital Markets',
    'Financial Analysis',
    'Investment Management',
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 bg-white"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className={`animate-on-scroll ${inView ? 'in-view' : ''}`}
        >
          <SectionHeader label="Background" title="About Me" />
        </div>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Bio paragraphs */}
          <div className="lg:col-span-2 space-y-6">
            {profile.bio.map((paragraph, i) => (
              <p
                key={i}
                className={`text-charcoal-light leading-relaxed animate-on-scroll ${inView ? 'in-view' : ''}`}
                style={{ transitionDelay: `${(i + 1) * 100}ms` }}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Side panel */}
          <div className={`animate-on-scroll ${inView ? 'in-view' : ''}`} style={{ transitionDelay: '300ms' }}>
            {/* Areas of interest */}
            <div className="bg-off-white rounded-lg p-6 mb-6">
              <h3 className="font-serif font-semibold text-charcoal mb-4 text-lg">Areas of Interest</h3>
              <ul className="space-y-2" role="list">
                {interests.map((interest) => (
                  <li
                    key={interest}
                    className="flex items-center gap-2 text-sm text-charcoal-light"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-burnt-orange flex-shrink-0" aria-hidden="true" />
                    {interest}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact snippet */}
            <div className="bg-charcoal rounded-lg p-6 text-white">
              <h3 className="font-serif font-semibold mb-4 text-lg">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <svg className="w-4 h-4 text-burnt-orange flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-white/80">{profile.contact.location}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <svg className="w-4 h-4 text-burnt-orange flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a
                    href={`mailto:${profile.contact.email}`}
                    className="text-white/80 hover:text-burnt-orange transition-colors break-all"
                  >
                    {profile.contact.email}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <svg className="w-4 h-4 text-burnt-orange flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <a
                    href={profile.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-burnt-orange transition-colors"
                  >
                    linkedin.com/in/devinle14
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
