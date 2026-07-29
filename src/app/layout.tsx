import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Devin Le | Economics, Finance and Real Estate',
  description:
    'Devin Le is an Economics student at The University of Texas at Austin with experience in real estate development, financial analysis, investment management, and econometric research.',
  keywords: [
    'Devin Le',
    'Economics',
    'Finance',
    'Real Estate',
    'UT Austin',
    'Investment Management',
    'Econometrics',
  ],
  authors: [{ name: 'Devin Le' }],
  openGraph: {
    title: 'Devin Le | Economics, Finance and Real Estate',
    description:
      'Devin Le is an Economics student at The University of Texas at Austin with experience in real estate development, financial analysis, investment management, and econometric research.',
    type: 'profile',
    locale: 'en_US',
    siteName: 'Devin Le',
    images: [
      {
        url: '/images/headshot.jpg',
        width: 1200,
        height: 630,
        alt: 'Devin Le — Economics Student at The University of Texas at Austin',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Devin Le | Economics, Finance and Real Estate',
    description:
      'Economics student at The University of Texas at Austin with experience in real estate development and financial analysis.',
    images: ['/images/headshot.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Devin Le',
    jobTitle: 'Economics Student',
    affiliation: {
      '@type': 'EducationalOrganization',
      name: 'The University of Texas at Austin',
    },
    email: 'leanhtuan140803@gmail.com',
    telephone: '(737) 216-3281',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Austin',
      addressRegion: 'TX',
      addressCountry: 'US',
    },
    sameAs: ['https://linkedin.com/in/devinle14/'],
    knowsAbout: [
      'Economics',
      'Real Estate Development',
      'Financial Analysis',
      'Investment Management',
      'Econometrics',
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
