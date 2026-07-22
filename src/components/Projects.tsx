'use client';

import { useEffect, useRef, useState } from 'react';
import { projects } from '@/data/projects';

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const [expanded, setExpanded] = useState<number | null>(null);

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
      id="projects"
      ref={ref}
      className="py-24 bg-off-white"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`animate-on-scroll ${inView ? 'in-view' : ''}`}>
          <div className="section-overline mb-2" aria-hidden="true" />
          <p className="text-burnt-orange text-xs font-semibold tracking-widest uppercase mb-2">Academic Work</p>
          <h2
            id="projects-heading"
            className="font-serif text-3xl lg:text-4xl font-bold text-charcoal mb-3"
          >
            Projects
          </h2>
          <p className="text-medium-gray text-sm mb-12">
            Academic research and coursework projects. All portfolio simulations used paper trading — no real capital was involved.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const isExpanded = expanded === index;
            return (
              <div
                key={project.title}
                className={`card animate-on-scroll ${inView ? 'in-view' : ''}`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                {/* Card header */}
                <div className="p-6 lg:p-8 pb-5">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="w-10 h-10 bg-burnt-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="font-serif font-bold text-burnt-orange text-lg">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="px-2 py-0.5 bg-charcoal text-white text-xs font-medium rounded-full">
                        {project.course}
                      </span>
                      <span className="text-xs text-medium-gray">{project.date}</span>
                    </div>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-charcoal mb-3 leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-charcoal-light text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {project.note && (
                    <div className="flex items-start gap-2 p-3 bg-burnt-orange/5 border border-burnt-orange/15 rounded-lg mb-4">
                      <svg className="w-4 h-4 text-burnt-orange mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-xs text-burnt-orange font-medium">{project.note}</span>
                    </div>
                  )}

                  {/* Skill tags */}
                  <div className="flex flex-wrap gap-1.5" role="list" aria-label="Skills used">
                    {project.tags.map((tag) => (
                      <span key={tag} className="skill-tag" role="listitem">{tag}</span>
                    ))}
                  </div>
                </div>

                {/* Expandable details */}
                <div className="border-t border-light-gray">
                  <button
                    onClick={() => setExpanded(isExpanded ? null : index)}
                    className="w-full px-6 lg:px-8 py-4 flex items-center justify-between text-sm font-medium text-charcoal hover:text-burnt-orange transition-colors focus-visible:outline-burnt-orange"
                    aria-expanded={isExpanded}
                    aria-controls={`project-details-${index}`}
                  >
                    <span>{isExpanded ? 'Hide Details' : 'View Details'}</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <div
                    id={`project-details-${index}`}
                    className={`overflow-hidden transition-all duration-300 ${
                      isExpanded ? 'max-h-[500px]' : 'max-h-0'
                    }`}
                    aria-hidden={!isExpanded}
                  >
                    <div className="px-6 lg:px-8 pb-6">
                      <h4 className="text-xs font-semibold text-medium-gray uppercase tracking-wider mb-3">
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-2.5" role="list">
                        {project.bullets.map((bullet, bi) => (
                          <li key={bi} className="flex items-start gap-3 text-sm text-charcoal-light leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-burnt-orange mt-2 flex-shrink-0" aria-hidden="true" />
                            {bullet}
                          </li>
                        ))}
                      </ul>

                      {project.documentPath && (
                        <a
                          href={project.documentPath}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-burnt-orange hover:underline"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                          View Report
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
