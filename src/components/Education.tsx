'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { education } from '@/data/education';
import { certifications } from '@/data/leadership';

export default function Education() {
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

  return (
    <section
      id="education"
      ref={ref}
      className="py-24 bg-off-white"
      aria-labelledby="education-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`animate-on-scroll ${inView ? 'in-view' : ''}`}>
          <div className="section-overline mb-2" aria-hidden="true" />
          <p className="text-burnt-orange text-xs font-semibold tracking-widest uppercase mb-2">Academic Profile</p>
          <h2
            id="education-heading"
            className="font-serif text-3xl lg:text-4xl font-bold text-charcoal mb-12"
          >
            Education
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Main education card */}
          <div
            className={`card p-8 animate-on-scroll ${inView ? 'in-view' : ''}`}
            style={{ transitionDelay: '100ms' }}
          >
            {/* Institution header */}
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-burnt-orange rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="font-serif font-bold text-white text-lg">UT</span>
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-charcoal leading-tight">
                  {education.institution}
                </h3>
                <p className="text-burnt-orange font-medium mt-0.5">{education.degree}</p>
              </div>
            </div>

            {/* Details grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-off-white rounded-lg p-4">
                <div className="text-xs text-medium-gray uppercase tracking-wider mb-1">GPA</div>
                <div className="font-serif text-2xl font-bold text-burnt-orange">{education.gpa}</div>
              </div>
              <div className="bg-off-white rounded-lg p-4">
                <div className="text-xs text-medium-gray uppercase tracking-wider mb-1">Expected</div>
                <div className="font-serif text-lg font-bold text-charcoal leading-tight">
                  {education.expectedGraduation}
                </div>
              </div>
            </div>

            {/* Minors */}
            <div className="mb-5">
              <div className="text-xs font-semibold text-medium-gray uppercase tracking-wider mb-2">Minors</div>
              <div className="flex flex-wrap gap-2">
                {education.minors.map((minor) => (
                  <span
                    key={minor}
                    className="px-3 py-1 bg-burnt-orange/10 text-burnt-orange text-sm font-medium rounded-full border border-burnt-orange/20"
                  >
                    {minor}
                  </span>
                ))}
              </div>
            </div>

            {/* Honors */}
            <div>
              <div className="text-xs font-semibold text-medium-gray uppercase tracking-wider mb-2">Honors</div>
              {education.honors.map((honor) => (
                <div key={honor.title} className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-burnt-orange mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <div>
                    <span className="font-medium text-charcoal text-sm">{honor.title}</span>
                    <span className="text-medium-gray text-sm"> — {honor.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Coursework card */}
          <div
            className={`card p-8 animate-on-scroll ${inView ? 'in-view' : ''}`}
            style={{ transitionDelay: '200ms' }}
          >
            <h3 className="font-serif text-xl font-bold text-charcoal mb-6">Relevant Coursework</h3>
            <ul className="space-y-3" role="list">
              {education.coursework.map((course, i) => (
                <li
                  key={course}
                  className="flex items-center gap-3 py-3 border-b border-light-gray last:border-0"
                >
                  <span
                    className="w-7 h-7 rounded-full bg-burnt-orange/10 text-burnt-orange text-xs font-bold flex items-center justify-center flex-shrink-0"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-medium text-charcoal">{course}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications panel */}
          <div
            className={`card p-8 lg:col-span-2 animate-on-scroll ${inView ? 'in-view' : ''}`}
            style={{ transitionDelay: '300ms' }}
          >
            <h3 className="font-serif text-xl font-bold text-charcoal mb-6">Certifications</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="flex items-center justify-between gap-4 p-4 bg-charcoal rounded-lg"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-14 h-10 bg-white rounded flex items-center justify-center flex-shrink-0 p-1.5">
                      <Image
                        src={cert.logoUrl}
                        alt={`${cert.issuer} logo`}
                        width={80}
                        height={40}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs text-white/50 uppercase tracking-wider mb-0.5">{cert.issuer}</div>
                      <div className="text-white font-medium text-sm truncate">{cert.name}</div>
                    </div>
                  </div>
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-full transition-colors whitespace-nowrap"
                  >
                    View credential
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
