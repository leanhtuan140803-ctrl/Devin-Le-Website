'use client';

import { useEffect, useRef, useState, type FormEvent, type ChangeEvent } from 'react';
import { profile } from '@/data/profile';

interface FormState {
  name: string;
  email: string;
  organization: string;
  subject: string;
  message: string;
  honeypot: string;
}

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/abcdefgh';

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    organization: '',
    subject: '',
    message: '',
    honeypot: '',
  });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

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

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = 'Name is required.';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!form.subject.trim()) newErrors.subject = 'Subject is required.';
    if (!form.message.trim()) newErrors.message = 'Message is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (form.honeypot) return; // Honeypot triggered — silently drop
    if (!validate()) return;

    setStatus('submitting');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          organization: form.organization,
          subject: form.subject,
          message: form.message,
        }),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', organization: '', subject: '', message: '', honeypot: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputBase =
    'w-full px-4 py-3 rounded border text-charcoal placeholder-medium-gray bg-white transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-burnt-orange focus:border-burnt-orange';
  const inputNormal = `${inputBase} border-light-gray`;
  const inputError = `${inputBase} border-red-400 bg-red-50`;

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 bg-off-white"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`animate-on-scroll ${inView ? 'in-view' : ''}`}>
          <div className="section-overline mb-2" aria-hidden="true" />
          <p className="text-burnt-orange text-xs font-semibold tracking-widest uppercase mb-2">Get in Touch</p>
          <h2
            id="contact-heading"
            className="font-serif text-3xl lg:text-4xl font-bold text-charcoal mb-12"
          >
            Contact
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Contact info */}
          <div
            className={`lg:col-span-2 animate-on-scroll ${inView ? 'in-view' : ''}`}
            style={{ transitionDelay: '100ms' }}
          >
            <div className="bg-charcoal rounded-xl p-8 text-white h-full">
              <h3 className="font-serif text-2xl font-bold mb-2">{profile.name}</h3>
              <p className="text-white/60 text-sm mb-8">{profile.contact.location}</p>

              <div className="space-y-5">
                <a
                  href={`mailto:${profile.contact.email}`}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 bg-burnt-orange/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-burnt-orange transition-colors">
                    <svg className="w-5 h-5 text-burnt-orange group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-white/40 uppercase tracking-wider mb-0.5">Email</div>
                    <div className="text-white/90 text-sm group-hover:text-burnt-orange transition-colors break-all">
                      {profile.contact.email}
                    </div>
                  </div>
                </a>

                <a
                  href={`tel:${profile.contact.phone.replace(/\D/g, '')}`}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 bg-burnt-orange/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-burnt-orange transition-colors">
                    <svg className="w-5 h-5 text-burnt-orange group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-white/40 uppercase tracking-wider mb-0.5">Phone</div>
                    <div className="text-white/90 text-sm group-hover:text-burnt-orange transition-colors">
                      {profile.contact.phone}
                    </div>
                  </div>
                </a>

                <a
                  href={profile.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 bg-burnt-orange/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-burnt-orange transition-colors">
                    <svg className="w-5 h-5 text-burnt-orange group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-white/40 uppercase tracking-wider mb-0.5">LinkedIn</div>
                    <div className="text-white/90 text-sm group-hover:text-burnt-orange transition-colors">
                      linkedin.com/in/devinle14
                    </div>
                  </div>
                </a>
              </div>

              <div className="mt-10 pt-8 border-t border-white/10">
                <p className="text-white/50 text-xs leading-relaxed">
                  Available for internships, full-time roles, and informational interviews in real estate development, finance, and investment.
                </p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div
            className={`lg:col-span-3 animate-on-scroll ${inView ? 'in-view' : ''}`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="card p-8">
              {status === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-charcoal mb-2">Message Sent</h3>
                  <p className="text-charcoal-light mb-6">Thank you for reaching out. Devin will respond within 1–2 business days.</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-burnt-orange font-medium hover:underline focus-visible:outline-burnt-orange"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
                  {/* Honeypot — hidden from humans, visible to bots */}
                  <div className="hidden" aria-hidden="true">
                    <input
                      type="text"
                      name="honeypot"
                      value={form.honeypot}
                      onChange={handleChange}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1.5">
                        Full Name <span className="text-burnt-orange" aria-label="required">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        autoComplete="name"
                        placeholder="Your full name"
                        className={errors.name ? inputError : inputNormal}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                        aria-required="true"
                        aria-invalid={!!errors.name}
                      />
                      {errors.name && (
                        <p id="name-error" className="mt-1 text-xs text-red-600" role="alert">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1.5">
                        Email Address <span className="text-burnt-orange" aria-label="required">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        autoComplete="email"
                        placeholder="your@email.com"
                        className={errors.email ? inputError : inputNormal}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        aria-required="true"
                        aria-invalid={!!errors.email}
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-1 text-xs text-red-600" role="alert">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label htmlFor="organization" className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1.5">
                        Organization
                      </label>
                      <input
                        id="organization"
                        type="text"
                        name="organization"
                        value={form.organization}
                        onChange={handleChange}
                        autoComplete="organization"
                        placeholder="Company or institution"
                        className={inputNormal}
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1.5">
                        Subject <span className="text-burnt-orange" aria-label="required">*</span>
                      </label>
                      <input
                        id="subject"
                        type="text"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="e.g. Internship Opportunity"
                        className={errors.subject ? inputError : inputNormal}
                        aria-describedby={errors.subject ? 'subject-error' : undefined}
                        aria-required="true"
                        aria-invalid={!!errors.subject}
                      />
                      {errors.subject && (
                        <p id="subject-error" className="mt-1 text-xs text-red-600" role="alert">{errors.subject}</p>
                      )}
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-xs font-semibold text-charcoal uppercase tracking-wider mb-1.5">
                      Message <span className="text-burnt-orange" aria-label="required">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Your message..."
                      className={`${errors.message ? inputError : inputNormal} resize-none`}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      aria-required="true"
                      aria-invalid={!!errors.message}
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1 text-xs text-red-600" role="alert">{errors.message}</p>
                    )}
                  </div>

                  {status === 'error' && (
                    <div className="mb-5 p-4 bg-red-50 border border-red-200 rounded-lg" role="alert">
                      <p className="text-red-700 text-sm">
                        Something went wrong. Please try again or email directly at{' '}
                        <a href={`mailto:${profile.contact.email}`} className="underline font-medium">
                          {profile.contact.email}
                        </a>.
                      </p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-burnt-orange text-white py-3.5 rounded font-medium hover:bg-burnt-orange-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-burnt-orange focus-visible:ring-offset-2 flex items-center justify-center gap-2"
                    aria-busy={status === 'submitting'}
                  >
                    {status === 'submitting' ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>

                  <p className="mt-3 text-center text-xs text-medium-gray">
                    Fields marked with <span className="text-burnt-orange">*</span> are required.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
