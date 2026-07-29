import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-off-white flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="section-overline mx-auto mb-6" />
        <h1 className="font-serif text-7xl font-bold text-charcoal mb-4">404</h1>
        <h2 className="font-serif text-2xl text-charcoal mb-4">Page Not Found</h2>
        <p className="text-charcoal-light mb-8">
          The page you&apos;re looking for doesn&apos;t exist. It may have been moved or removed.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-burnt-orange text-white px-6 py-3 rounded font-medium hover:bg-burnt-orange-dark transition-colors focus-visible:ring-2 focus-visible:ring-burnt-orange focus-visible:ring-offset-2"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
