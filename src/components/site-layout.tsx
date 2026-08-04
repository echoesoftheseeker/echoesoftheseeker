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


const SOCIALS = [
  { href: "https://www.instagram.com/echoesoftheseeker", label: "Instagram", Icon: Instagram },
  { href: "https://www.youtube.com/@echoesbyakash", label: "YouTube", Icon: Youtube },
  { href: "https://www.facebook.com/share/1NKTP6Lhrx/", label: "Facebook", Icon: Facebook },
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
  const explore = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/journal", label: "Journal" },
    { to: "/learn-bansuri", label: "Learn Bansuri" },
  ] as const;
  const more = [
    { to: "/seekers-stay", label: "Seekers Stay" },
    { to: "/seekers-soil", label: "Seeker's Soil" },
    { to: "/bansuris", label: "Bansuris" },
    { to: "/contact", label: "Contact" },
  ] as const;

  return (
    <footer className="border-t border-rule/70 bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-6 lg:px-10 lg:py-7">
        <div className="grid grid-cols-2 gap-x-8 gap-y-5 md:grid-cols-3">
          <div className="col-span-2 md:col-span-1 md:order-last">
            <p className="font-serif text-base text-ink">Echoes of the Seeker</p>
            <p className="mt-0.5 font-serif text-[0.8rem] italic text-ink/60">A living home for an ongoing journey.</p>
            <div className="mt-2.5 flex items-center gap-4 text-ink/55">
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
          </div>
          <div>
            <p className="mb-1.5 font-serif text-[0.82rem] text-ink">Explore</p>
            <ul className="space-y-0.5 text-[0.82rem] text-ink/75">
              {explore.map((n) => (
                <li key={n.to}><Link to={n.to} className="hover:text-bamboo">{n.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-1.5 font-serif text-[0.82rem] text-ink">More</p>
            <ul className="space-y-0.5 text-[0.82rem] text-ink/75">
              {more.map((n) => (
                <li key={n.to}><Link to={n.to} className="hover:text-bamboo">{n.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-5 flex flex-col gap-0.5 border-t border-rule/70 pt-3 text-[0.72rem] text-ink/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Echoes of the Seeker</p>
          <p className="font-serif italic">A Living Journey.</p>
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
