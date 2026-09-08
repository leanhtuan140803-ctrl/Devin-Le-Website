'use client';

import { useEffect, useRef, useState } from 'react';
import { leadership, honors } from '@/data/leadership';

export default function Leadership() {
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
      id="leadership"
      ref={ref}
      className="pt-24 pb-12 bg-white"
      aria-labelledby="leadership-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`animate-on-scroll ${inView ? 'in-view' : ''}`}>
          <div className="section-overline mb-2" aria-hidden="true" />
          <p className="text-burnt-orange text-xs font-semibold tracking-widest uppercase mb-2">Involvement</p>
          <h2
            id="leadership-heading"
            className="font-serif text-3xl lg:text-4xl font-bold text-charcoal mb-12"
          >
            Activities
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Leadership card */}
          <div className="lg:col-span-2">
            {leadership.map((item, index) => (
              <div
                key={item.organization}
                className={`card p-8 animate-on-scroll ${inView ? 'in-view' : ''}`}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 bg-burnt-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-burnt-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-charcoal">{item.organization}</h3>
                    <div className="flex items-center gap-3 mt-0.5 text-sm">
                      <span className="text-burnt-orange font-semibold">{item.role}</span>
                      <span className="text-medium-gray" aria-hidden="true">·</span>
                      <span className="text-medium-gray">{item.period}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-2.5" role="list">
                  {item.bullets.map((bullet, bi) => (
                    <li key={bi} className="flex items-start gap-3 text-sm text-charcoal-light leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-burnt-orange mt-2 flex-shrink-0" aria-hidden="true" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Honors */}
          <div className="space-y-6">
            <div
              className={`card p-6 animate-on-scroll ${inView ? 'in-view' : ''}`}
              style={{ transitionDelay: '200ms' }}
            >
              <h3 className="font-serif text-lg font-bold text-charcoal mb-4">Academic Honors</h3>
              {honors.map((honor) => (
                <div key={honor.title} className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-burnt-orange rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-charcoal">{honor.title}</div>
                    <div className="text-xs text-medium-gray mt-0.5">{honor.institution}</div>
                    <div className="text-xs text-charcoal-light mt-1">{honor.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
