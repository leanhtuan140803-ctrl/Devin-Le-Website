'use client';

import { useEffect, useRef, useState } from 'react';
import { experience } from '@/data/experience';

const typeColors: Record<string, string> = {
  professional: 'bg-burnt-orange text-white',
  service: 'bg-charcoal text-white',
  entrepreneurial: 'bg-medium-gray text-white',
};

const typeLabels: Record<string, string> = {
  professional: 'Professional',
  service: 'Service',
  entrepreneurial: 'Entrepreneurial',
};

export default function Experience() {
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

  return (
    <section
      id="experience"
      ref={ref}
      className="py-24 bg-white"
      aria-labelledby="experience-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`animate-on-scroll ${inView ? 'in-view' : ''}`}>
          <div className="section-overline mb-2" aria-hidden="true" />
          <p className="text-burnt-orange text-xs font-semibold tracking-widest uppercase mb-2">Work History</p>
          <h2
            id="experience-heading"
            className="font-serif text-3xl lg:text-4xl font-bold text-charcoal mb-12"
          >
            Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative" role="list" aria-label="Work experience timeline">
          {/* Vertical line */}
          <div
            className="absolute left-5 top-8 bottom-8 w-px bg-gradient-to-b from-burnt-orange via-light-gray to-light-gray lg:left-8 hidden sm:block"
            aria-hidden="true"
          />

          <div className="space-y-10">
            {experience.map((job, index) => (
              <div
                key={`${job.company}-${index}`}
                className={`relative sm:pl-20 lg:pl-24 animate-on-scroll ${inView ? 'in-view' : ''}`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
                role="listitem"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-0 top-6 w-10 h-10 rounded-full bg-burnt-orange border-4 border-white shadow-md items-center justify-center flex-shrink-0 sm:flex hidden lg:left-3"
                  aria-hidden="true"
                >
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>

                {/* Card */}
                <div className="card p-6 lg:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                    <div>
                      <div className="flex items-center gap-3 flex-wrap mb-1">
                        <h3 className="font-serif text-xl font-bold text-charcoal">
                          {job.company}
                        </h3>
                        {job.current && (
                          <span className="px-2 py-0.5 bg-burnt-orange/10 text-burnt-orange text-xs font-semibold rounded-full border border-burnt-orange/20">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-burnt-orange font-semibold">{job.position}</p>
                      <div className="flex items-center gap-3 mt-1 text-sm text-medium-gray">
                        <span className="flex items-center gap-1">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          </svg>
                          {job.location}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{job.period}</span>
                      </div>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider flex-shrink-0 ${typeColors[job.type]}`}
                    >
                      {typeLabels[job.type]}
                    </span>
                  </div>

                  <ul className="space-y-2.5" role="list">
                    {job.bullets.map((bullet, bi) => (
                      <li key={bi} className="flex items-start gap-3 text-sm text-charcoal-light leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-burnt-orange mt-2 flex-shrink-0" aria-hidden="true" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
