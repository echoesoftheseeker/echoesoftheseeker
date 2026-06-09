import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
  { to: "/learn-bansuri", label: "Learn Bansuri" },
  { to: "/bansuris", label: "Bansuris" },
  { to: "/seekers-soil", label: "Seekers Soil" },
  { to: "/seekers-stay", label: "Seekers Stay" },
  { to: "/the-book", label: "The Book" },
  { to: "/seeker-letter", label: "Seeker Letter" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-rule/70 bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-10">
        <Link to="/" className="flex flex-col leading-none">
          <span className="font-serif text-xl tracking-tight text-ink">Echoes of the Seeker</span>
          <span className="eyebrow mt-1 text-[0.6rem]">A living journey</span>
        </Link>
        <nav className="hidden items-center gap-6 text-[0.78rem] tracking-wide text-ink/80 xl:flex">
          {NAV.slice(1).map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-ink underline decoration-bamboo decoration-2 underline-offset-[6px]" }}
              className="hover:text-ink transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/seeker-letter"
          className="hidden rounded-full border border-ink/30 px-4 py-2 text-[0.72rem] tracking-[0.18em] uppercase text-ink hover:bg-ink hover:text-paper transition-colors xl:inline-flex"
        >
          Seeker Letter
        </Link>
        <details className="xl:hidden">
          <summary className="cursor-pointer list-none rounded border border-ink/30 px-3 py-2 text-xs uppercase tracking-widest">Menu</summary>
          <div className="absolute right-4 left-4 mt-3 rounded border border-rule bg-paper p-4 shadow-lg">
            <ul className="grid grid-cols-2 gap-3 text-sm">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="block py-1 text-ink/80 hover:text-ink">{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </details>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-rule/70 bg-paper">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-4 lg:px-10">
        <div className="lg:col-span-2">
          <p className="font-serif text-2xl leading-snug text-ink">
            "I'm trying to make an echo. Whether it will come back to me, I don't know. But I'm trying to make a sound in the silence."
          </p>
          <p className="eyebrow mt-6">— The Seeker</p>
        </div>
        <div>
          <p className="eyebrow mb-4">Explore</p>
          <ul className="space-y-2 text-sm text-ink/80">
            {NAV.slice(0, 5).map((n) => (
              <li key={n.to}><Link to={n.to} className="hover:text-bamboo">{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-4">More</p>
          <ul className="space-y-2 text-sm text-ink/80">
            {NAV.slice(5).map((n) => (
              <li key={n.to}><Link to={n.to} className="hover:text-bamboo">{n.label}</Link></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-rule/70">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-6 py-6 text-xs text-ink/60 lg:flex-row lg:items-center lg:px-10">
          <p>© {new Date().getFullYear()} Echoes of the Seeker. A living home for an ongoing journey.</p>
          <p>Goa · India</p>
        </div>
      </div>
    </footer>
  );
}

export function Page({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col bg-paper text-ink">
      <SiteHeader />
      <main className="relative z-10 flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function Section({
  eyebrow,
  title,
  children,
  className = "",
}: {
  eyebrow?: string;
  title?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section className={`mx-auto max-w-5xl px-6 py-20 lg:px-10 lg:py-28 ${className}`}>
      {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
      {title && <h2 className="serif-display text-4xl text-ink md:text-5xl">{title}</h2>}
      {children && <div className="mt-10">{children}</div>}
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
}) {
  return (
    <section className="border-b border-rule/70">
      <div className="mx-auto max-w-5xl px-6 py-20 lg:px-10 lg:py-28">
        <p className="eyebrow mb-6">{eyebrow}</p>
        <h1 className="serif-display text-5xl text-ink md:text-7xl">{title}</h1>
        {lede && <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink/75">{lede}</p>}
      </div>
    </section>
  );
}
