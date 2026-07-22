'use client';

import Image from 'next/image';
import { profile, CV_PATH, HEADSHOT_PATH } from '@/data/profile';

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-off-white relative overflow-hidden flex flex-col justify-center"
      aria-labelledby="hero-heading"
    >
      {/* Background decorative elements */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-light-gray/60 to-transparent pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-burnt-orange/5 -translate-x-1/2 translate-y-1/2 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — content */}
          <div className="order-2 lg:order-1 min-w-0">
            <div className="section-overline mb-5" aria-hidden="true" />

            <h1
              id="hero-heading"
              className="font-serif text-5xl lg:text-6xl xl:text-7xl font-bold text-charcoal leading-[1.08] mb-5"
              style={{ animationDelay: '0ms' }}
            >
              {profile.firstName}{' '}
              <span className="text-burnt-orange">{profile.lastName}</span>
            </h1>

            <p className="text-burnt-orange font-medium tracking-normal sm:tracking-wide uppercase mb-6 text-xs sm:text-sm leading-relaxed">
              {profile.headline}
            </p>

            <p className="text-charcoal-light leading-relaxed text-lg max-w-xl mb-10">
              {profile.introduction}
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 mb-12" role="group" aria-label="Primary actions">
              <button
                onClick={() => scrollTo('experience')}
                className="inline-flex items-center gap-2 bg-burnt-orange text-white px-6 py-3 rounded font-medium hover:bg-burnt-orange-dark transition-colors focus-visible:ring-2 focus-visible:ring-burnt-orange focus-visible:ring-offset-2"
              >
                View Experience
              </button>
              <button
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center gap-2 bg-charcoal text-white px-6 py-3 rounded font-medium hover:bg-charcoal-light transition-colors focus-visible:ring-2 focus-visible:ring-charcoal focus-visible:ring-offset-2"
              >
                View Projects
              </button>
              <a
                href={CV_PATH}
                download="Devin-Le-Resume.pdf"
                className="inline-flex items-center gap-2 border border-charcoal text-charcoal px-6 py-3 rounded font-medium hover:bg-charcoal hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-charcoal focus-visible:ring-offset-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download CV
              </a>
              <a
                href={profile.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-burnt-orange text-burnt-orange px-6 py-3 rounded font-medium hover:bg-burnt-orange hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-burnt-orange focus-visible:ring-offset-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>

            {/* Stats strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4" role="list" aria-label="Key credentials">
              {profile.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white border border-light-gray rounded-lg p-4 text-center shadow-sm"
                  role="listitem"
                >
                  <div className="font-serif text-base sm:text-xl font-bold text-burnt-orange leading-tight mb-1 break-words">
                    {stat.value}
                  </div>
                  <div className="text-xs text-medium-gray leading-snug">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — headshot */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end min-w-0">
            <div className="relative">
              {/* Decorative frame */}
              <div
                className="absolute -top-3 -left-3 w-full h-full border-2 border-burnt-orange/30 rounded-lg"
                aria-hidden="true"
              />
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[480px] rounded-lg overflow-hidden shadow-card">
                <Image
                  src={HEADSHOT_PATH}
                  alt="Professional headshot of Devin Le, Economics student at The University of Texas at Austin"
                  fill
                  priority
                  sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 384px"
                  className="object-cover object-top"
                />
              </div>
              {/* Name badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-charcoal text-white px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap shadow-lg">
                Devin Le &mdash; Austin, TX
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16 lg:mt-20" aria-hidden="true">
          <button
            onClick={() => scrollTo('about')}
            className="flex flex-col items-center gap-2 text-medium-gray hover:text-burnt-orange transition-colors group"
            aria-label="Scroll to About section"
          >
            <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
            <div className="w-px h-10 bg-gradient-to-b from-medium-gray/50 to-transparent group-hover:from-burnt-orange/50 transition-colors" />
          </button>
        </div>
      </div>
    </section>
  );
}
