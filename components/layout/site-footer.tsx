import Link from 'next/link';

const footerLinks = [
  { name: 'Practice', href: '#features' },
  { name: 'Method', href: '#how-it-works' },
  { name: 'Study', href: '#video-showcase' },
  { name: 'Path', href: '#testimonials' },
];

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-border/70 bg-background/90">
      <div className="container px-4 py-12 md:px-6">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-md border border-foreground/80 bg-card text-xs font-semibold shadow-sm">
                MJ
              </span>
              <span className="text-lg font-semibold">MasterJJ</span>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">
              A quiet training platform for practitioners building skill,
              composure, and honest consistency.
            </p>
          </div>

          <nav className="flex flex-wrap gap-5 text-sm font-medium">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href as any}
                className="text-muted-foreground transition hover:text-foreground"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-10 border-t border-border/70 pt-6 text-xs text-muted-foreground">
          © 2026 MasterJJ. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
