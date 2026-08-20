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
      className="bg-off-white relative overflow-hidden"
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

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — content */}
          <div className="order-2 lg:order-1 min-w-0">
            <div className="section-overline mb-5" aria-hidden="true" />

            <h1
              id="hero-heading"
              className="font-serif text-5xl lg:text-6xl xl:text-7xl font-bold text-charcoal leading-[1.08] mb-5"
              style={{ animationDelay: '0ms' }}
            >
              {profile.firstName} {profile.lastName}
            </h1>

            <p className="text-burnt-orange font-medium tracking-normal sm:tracking-wide uppercase mb-6 text-xs sm:text-sm leading-relaxed">
              {profile.headline}
            </p>

            {/* Background / About Me */}
            <div className="mb-4">
              <div className="section-overline mb-2" aria-hidden="true" />
              <p className="text-burnt-orange text-xs font-semibold tracking-widest uppercase mb-2">Background</p>
              <h2 className="font-serif text-2xl lg:text-3xl font-bold text-charcoal mb-4">About Me</h2>
              <div className="space-y-4 max-w-xl">
                {profile.aboutMe.map((paragraph, i) => (
                  <p key={i} className="text-charcoal-light leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Right — headshot */}
          <div className="order-1 lg:order-2 flex flex-col items-center lg:items-end min-w-0">
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
            </div>

            {/* CTA buttons */}
            <div
              className="grid grid-cols-2 gap-3 mt-8 w-72 sm:w-80 lg:w-96"
              role="group"
              aria-label="Primary actions"
            >
              <button
                onClick={() => scrollTo('experience')}
                className="inline-flex items-center justify-center gap-2 bg-burnt-orange text-white px-4 py-3 rounded font-medium hover:bg-burnt-orange-dark transition-colors focus-visible:ring-2 focus-visible:ring-burnt-orange focus-visible:ring-offset-2"
              >
                View Experience
              </button>
              <button
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center justify-center gap-2 bg-charcoal text-white px-4 py-3 rounded font-medium hover:bg-charcoal-light transition-colors focus-visible:ring-2 focus-visible:ring-charcoal focus-visible:ring-offset-2"
              >
                View Projects
              </button>
              <a
                href={CV_PATH}
                download="Devin-Le-Resume.pdf"
                className="inline-flex items-center justify-center gap-2 border border-charcoal text-charcoal px-4 py-3 rounded font-medium hover:bg-charcoal hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-charcoal focus-visible:ring-offset-2"
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
                className="inline-flex items-center justify-center gap-2 border border-burnt-orange text-burnt-orange px-4 py-3 rounded font-medium hover:bg-burnt-orange hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-burnt-orange focus-visible:ring-offset-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>

            <a
              href="https://calendly.com/leanhtuan140803/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-burnt-orange text-white px-4 py-3 rounded font-medium mt-3 w-72 sm:w-80 lg:w-96 hover:bg-burnt-orange-dark transition-colors focus-visible:ring-2 focus-visible:ring-burnt-orange focus-visible:ring-offset-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Schedule with Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
