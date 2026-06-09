import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Instagram, Youtube, Facebook } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Journal" },
  { to: "/learn-bansuri", label: "Learn Bansuri" },
  { to: "/bansuris", label: "Bansuris" },
  { to: "/seekers-soil", label: "Seekers Soil" },
  { to: "/seekers-stay", label: "Seekers Stay" },
  { to: "/the-book", label: "The Book" },
  { to: "/contact", label: "Contact" },
] as const;

const EXPLORE = NAV.slice(0, 5);
const MORE = NAV.slice(5);

const SOCIALS = [
  { href: "https://instagram.com", label: "Instagram", Icon: Instagram },
  { href: "https://youtube.com", label: "YouTube", Icon: Youtube },
  { href: "https://facebook.com", label: "Facebook", Icon: Facebook },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-rule/70 bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-10">
        <Link to="/" className="flex flex-col leading-none">
          <span className="font-serif text-xl tracking-tight text-ink">Echoes of the Seeker</span>
          <span className="mt-1 font-serif text-[0.7rem] italic text-ink/55">A living journey</span>
        </Link>
        <nav className="hidden items-center gap-6 font-serif text-[0.82rem] text-ink/75 xl:flex">
          {NAV.slice(1).map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-ink underline decoration-bamboo decoration-1 underline-offset-[6px]" }}
              className="hover:text-ink transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-5 xl:flex">
          <div className="flex items-center gap-3 text-ink/55">
            {SOCIALS.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-bamboo transition-colors"
              >
                <Icon size={16} strokeWidth={1.5} />
              </a>
            ))}
          </div>
          <Link
            to="/seeker-letter"
            className="rounded-full bg-ink px-4 py-2 font-serif text-[0.78rem] text-paper hover:bg-forest transition-colors"
          >
            Seeker Letter
          </Link>
        </div>
        <details className="xl:hidden">
          <summary className="cursor-pointer list-none rounded border border-ink/30 px-3 py-2 text-xs tracking-wide">Menu</summary>
          <div className="absolute right-4 left-4 mt-3 rounded border border-rule bg-paper p-4 shadow-lg">
            <ul className="grid grid-cols-2 gap-3 text-sm">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="block py-1 text-ink/80 hover:text-ink">{n.label}</Link>
                </li>
              ))}
              <li>
                <Link to="/seeker-letter" className="block py-1 font-medium text-ink hover:text-bamboo">Seeker Letter</Link>
              </li>
            </ul>
            <div className="mt-4 flex items-center gap-4 border-t border-rule/70 pt-4 text-ink/60">
              {SOCIALS.map(({ href, label, Icon }) => (
                <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer" className="hover:text-bamboo">
                  <Icon size={16} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-rule/70 bg-paper">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-4 lg:px-10">
        <div>
          <p className="font-serif text-xl text-ink">Echoes of the Seeker</p>
          <p className="mt-2 font-serif text-sm italic text-ink/60">A living home for an ongoing journey.</p>
        </div>
        <div>
          <p className="font-serif text-sm text-ink mb-4">Explore</p>
          <ul className="space-y-2 text-sm text-ink/75">
            {EXPLORE.map((n) => (
              <li key={n.to}><Link to={n.to} className="hover:text-bamboo">{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-serif text-sm text-ink mb-4">More</p>
          <ul className="space-y-2 text-sm text-ink/75">
            {MORE.map((n) => (
              <li key={n.to}><Link to={n.to} className="hover:text-bamboo">{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-serif text-sm text-ink mb-4">Follow the Journey</p>
          <ul className="space-y-2 text-sm text-ink/75">
            {SOCIALS.map(({ href, label, Icon }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-bamboo">
                  <Icon size={14} strokeWidth={1.5} />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-rule/70">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-6 py-6 text-xs text-ink/55 lg:flex-row lg:items-center lg:px-10">
          <p>© {new Date().getFullYear()} Echoes of the Seeker</p>
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
