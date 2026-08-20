'use client';

import { useEffect, useRef, useState } from 'react';
import { projects } from '@/data/projects';

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [inView, setInView] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

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

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const containerLeft = el.getBoundingClientRect().left;
      let closest = 0;
      let closestDist = Infinity;
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        const dist = Math.abs(card.getBoundingClientRect().left - containerLeft);
        if (dist < closestDist) { closestDist = dist; closest = i; }
      });
      setActiveIndex(closest);
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  const scrollByPage = (direction: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.9, behavior: 'smooth' });
  };

  const goToCard = (index: number) => {
    cardRefs.current[index]?.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
  };

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
            Research and coursework projects
          </p>
        </div>

        <div className={`animate-on-scroll ${inView ? 'in-view' : ''} relative`}>
          {/* Prev / Next — floating at the sides of the card row */}
          <button
            onClick={() => scrollByPage(-1)}
            aria-label="Scroll projects left"
            className="hidden min-[1440px]:flex absolute -left-14 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white border border-light-gray items-center justify-center text-charcoal shadow-sm hover:text-burnt-orange hover:border-burnt-orange transition-colors focus-visible:outline-burnt-orange"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scrollByPage(1)}
            aria-label="Scroll projects right"
            className="hidden min-[1440px]:flex absolute -right-14 top-1/2 translate-x-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white border border-light-gray items-center justify-center text-charcoal shadow-sm hover:text-burnt-orange hover:border-burnt-orange transition-colors focus-visible:outline-burnt-orange"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div ref={scrollRef} className="projects-scroll flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4">
            {projects.map((project, index) => {
              const isExpanded = expandedIndex === index;
              return (
                <div
                  key={project.title}
                  ref={(el) => { cardRefs.current[index] = el; }}
                  className="card snap-start flex-shrink-0 w-[85vw] sm:w-[420px]"
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

                    {project.documentPath && (
                      <a
                        href={project.documentPath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-burnt-orange hover:underline"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                        View Report
                      </a>
                    )}
                  </div>

                  {/* Expandable details */}
                  <div className="border-t border-light-gray">
                    <button
                      onClick={() => setExpandedIndex(isExpanded ? null : index)}
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
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Position dots — mobile only; desktop has the arrow buttons */}
          <div className="flex md:hidden justify-center gap-2 mt-5" role="tablist" aria-label="Select project">
            {projects.map((project, index) => (
              <button
                key={project.title}
                onClick={() => goToCard(index)}
                role="tab"
                aria-selected={index === activeIndex}
                aria-label={`Go to ${project.title}`}
                className={`h-2 rounded-full transition-all ${
                  index === activeIndex ? 'bg-burnt-orange w-6' : 'bg-light-gray w-2'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
