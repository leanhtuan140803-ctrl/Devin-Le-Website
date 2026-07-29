'use client';

import { useEffect, useRef, useState } from 'react';
import { CV_PATH } from '@/data/profile';

export default function CVSection() {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.unobserve(el); } },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handlePrint = () => {
    const iframe = document.getElementById('cv-iframe') as HTMLIFrameElement;
    if (iframe?.contentWindow) {
      iframe.contentWindow.print();
    } else {
      window.open(CV_PATH, '_blank');
    }
  };

  return (
    <section
      id="cv"
      ref={ref}
      className="py-24 bg-white"
      aria-labelledby="cv-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`animate-on-scroll ${inView ? 'in-view' : ''}`}>
          <div className="section-overline mb-2" aria-hidden="true" />
          <p className="text-burnt-orange text-xs font-semibold tracking-widest uppercase mb-2">Resume</p>
          <h2
            id="cv-heading"
            className="font-serif text-3xl lg:text-4xl font-bold text-charcoal mb-8"
          >
            Curriculum Vitae
          </h2>
        </div>

        {/* Action buttons */}
        <div
          className={`flex flex-wrap gap-3 mb-8 animate-on-scroll ${inView ? 'in-view' : ''}`}
          style={{ transitionDelay: '100ms' }}
          role="group"
          aria-label="CV actions"
        >
          <a
            href={CV_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-burnt-orange text-white px-5 py-2.5 rounded font-medium text-sm hover:bg-burnt-orange-dark transition-colors focus-visible:ring-2 focus-visible:ring-burnt-orange focus-visible:ring-offset-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            View Full CV
          </a>
          <a
            href={CV_PATH}
            download="Devin-Le-Resume.pdf"
            className="inline-flex items-center gap-2 bg-charcoal text-white px-5 py-2.5 rounded font-medium text-sm hover:bg-charcoal-light transition-colors focus-visible:ring-2 focus-visible:ring-charcoal focus-visible:ring-offset-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download CV
          </a>
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 border border-charcoal text-charcoal px-5 py-2.5 rounded font-medium text-sm hover:bg-charcoal hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-charcoal focus-visible:ring-offset-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            Print CV
          </button>
        </div>

        {/* PDF viewer — CSS controls mobile vs desktop, no JS hydration mismatch */}
        <div
          className={`animate-on-scroll ${inView ? 'in-view' : ''}`}
          style={{ transitionDelay: '200ms' }}
        >
          {/* Mobile fallback — shown below md breakpoint */}
          <div className="md:hidden card p-8 text-center">
            <div className="w-16 h-16 bg-burnt-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-burnt-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-serif text-xl font-bold text-charcoal mb-2">View Devin&apos;s Resume</h3>
            <p className="text-charcoal-light text-sm mb-6">
              Tap below to open or download the PDF on your device.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={CV_PATH}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-burnt-orange text-white px-6 py-3 rounded font-medium hover:bg-burnt-orange-dark transition-colors"
              >
                Open PDF
              </a>
              <a
                href={CV_PATH}
                download="Devin-Le-Resume.pdf"
                className="inline-flex items-center justify-center gap-2 border border-charcoal text-charcoal px-6 py-3 rounded font-medium hover:bg-charcoal hover:text-white transition-colors"
              >
                Download PDF
              </a>
            </div>
          </div>

          {/* Desktop embedded viewer — hidden below md breakpoint */}
          <div className="hidden md:block rounded-lg overflow-hidden border border-light-gray shadow-card">
            <iframe
              id="cv-iframe"
              src={CV_PATH}
              title="Devin Le Resume — PDF viewer"
              width="100%"
              height="800"
              className="border-0 block w-full"
              aria-label="Devin Le resume PDF"
            />
          </div>
          {/* Fallback link if the iframe somehow fails (screen readers, no-PDF browsers) */}
          <p className="hidden md:block mt-3 text-xs text-medium-gray text-center">
            PDF not loading?{' '}
            <a href={CV_PATH} target="_blank" rel="noopener noreferrer" className="text-burnt-orange hover:underline">
              Open in a new tab
            </a>{' '}
            or{' '}
            <a href={CV_PATH} download="Devin-Le-Resume.pdf" className="text-burnt-orange hover:underline">
              download it
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
}
