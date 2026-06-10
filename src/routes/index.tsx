import { createFileRoute, Link } from "@tanstack/react-router";
import { Page } from "@/components/site-layout";
import hero from "@/assets/hero-seeker.jpg";
import learnImg from "@/assets/learn.jpg";
import stayImg from "@/assets/stay.jpg";
import soilImg from "@/assets/soil.jpg";
import journalImg from "@/assets/journal.jpg";
import aboutImg from "@/assets/about.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Echoes of the Seeker — A journey of music, nature, and practice" },
      { name: "description", content: "A digital home for an ongoing journey through music, nature, place, practice, and learning." },
      { property: "og:title", content: "Echoes of the Seeker" },
      { property: "og:description", content: "A journey through music, nature, place, practice, and learning." },
      { property: "og:image", content: hero },
    ],
  }),
  component: Home,
});

const PATHS = [
  { to: "/learn-bansuri", title: "Learn Bansuri", desc: "Learning, teaching, and sharing the bansuri.", img: learnImg },
  { to: "/seekers-stay", title: "Seekers Stay", desc: "Places that invite rest, reflection, and connection. Currently featuring Sasha's Stay in Ashwem, Goa.", img: stayImg },
  { to: "/seekers-soil", title: "Seekers Soil", desc: "Growing food, learning from the land, and exploring self-reliance.", img: soilImg },
  { to: "/journal", title: "Journal", desc: "Reflections, observations, essays, and field notes.", img: journalImg },
] as const;

function Home() {
  return (
    <Page>
      {/* Hero */}
      <section className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
        <img
          src={hero}
          alt="A small figure on a misty mountain path, bansuri in hand"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/75 to-ink/90" />

        <div className="relative z-10 mx-auto flex h-full max-w-3xl flex-col items-center justify-center px-6 text-center lg:px-10">
          <blockquote
            className="serif-display space-y-6 text-paper md:space-y-8"
            style={{ textShadow: "0 1px 24px rgba(0,0,0,0.5)" }}
          >
            <p className="text-[2rem] leading-[1.25] tracking-[-0.01em] sm:text-[2.5rem] md:text-5xl md:leading-[1.2] lg:text-[3.75rem]">
              I'm trying to make an echo.
            </p>
            <p className="text-[1.6rem] leading-[1.3] text-paper/90 sm:text-[2rem] md:text-4xl md:leading-[1.25] lg:text-[2.875rem]">
              Whether it will come back to me, I don't know.
            </p>
            <p className="text-[1.6rem] italic leading-[1.3] text-paper sm:text-[2rem] md:text-4xl md:leading-[1.25] lg:text-[2.875rem]">
              But I'm trying to make a sound in the silence.
            </p>
          </blockquote>
          <Link
            to="/about"
            className="mt-20 inline-flex items-center gap-3 border-b border-paper/50 pb-1 font-serif text-sm tracking-wide text-paper/90 hover:border-bamboo hover:text-bamboo transition-colors md:mt-24 md:text-base"
          >
            Explore the Journey
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      {/* Why Echoes? */}
      <section className="mx-auto max-w-2xl px-6 py-16 text-center md:py-24 lg:px-10 lg:py-32">
        <h2 className="serif-display text-[1.65rem] tracking-[-0.005em] text-ink md:text-[2.25rem]">Why Echoes?</h2>
        <div className="mt-10 space-y-6 font-serif text-[1.1rem] leading-[1.7] text-ink/85 md:text-[1.25rem] md:leading-[1.75]">
          <p>An echo begins with a sound sent into the unknown.</p>
          <p>Whether it returns is never certain.</p>
          <p>This project is an attempt to keep listening.</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="border-t border-rule/70">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-36 lg:px-10 lg:py-52">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-24">
            <div className="lg:col-span-5">
              <img
                src={aboutImg}
                alt="A quiet corner of the seeker's life"
                loading="lazy"
                className="mx-auto aspect-[4/3] w-2/5 object-cover sm:w-1/3 lg:aspect-[4/5] lg:w-full"
              />
            </div>
            <div className="lg:col-span-7 lg:pt-6">
              <h2 className="serif-display text-[1.75rem] tracking-[-0.005em] text-ink md:text-[2.5rem]">An Introduction</h2>
              <div className="mt-10 space-y-6 text-[1.05rem] leading-[1.8] text-ink/85 md:text-[1.15rem] md:leading-[1.85]">
                <p>Echoes of the Seeker brings together music, land, place, and practice.</p>
                <p>It is an ongoing exploration of what happens when attention is given to the things that matter.</p>
                <p>
                  Through teaching, hospitality, growing food, writing, and reflection, different parts of life become different expressions of the same journey.
                </p>
                <p className="font-serif italic text-ink/70">Currently based in Goa.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured paths */}
      <section className="border-t border-rule/70">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-36 lg:px-10 lg:py-52">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="serif-display text-[1.75rem] tracking-[-0.005em] text-ink md:text-[2.5rem]">Four Interconnected Paths</h2>
            <div className="mt-12 flex flex-col items-center gap-3 font-serif text-xl text-ink/85 md:text-2xl">
              <p>Music.</p>
              <p>Place.</p>
              <p>Land.</p>
              <p>Reflection.</p>
            </div>
            <p className="mt-14 font-serif text-base italic leading-relaxed text-ink/70 md:text-lg">
              Different expressions of the same journey.
            </p>
          </div>

          <div className="mt-24 grid grid-cols-1 gap-x-24 gap-y-28 md:grid-cols-2 lg:mt-32 lg:gap-y-36">
            {PATHS.map((p, i) => (
              <Link key={p.to} to={p.to} className="group block">
                <div className="overflow-hidden bg-secondary">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="aspect-[5/6] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-8 flex items-baseline gap-4">
                  <span className="font-serif text-sm text-ink/45">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-serif text-[1.6rem] leading-tight text-ink transition-colors group-hover:text-forest md:text-[1.9rem]">
                    {p.title}
                  </h3>
                </div>
                <p className="mt-4 max-w-md pl-10 text-[1rem] leading-[1.75] text-ink/75 md:text-[1.05rem]">
                  {p.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Closing transition + Seeker Letter */}
      <section className="border-t border-rule/70">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center md:py-36 lg:px-10 lg:py-52">
          <p className="serif-display text-[1.4rem] italic leading-[1.6] text-ink/85 md:text-[1.75rem] md:leading-[1.55]">
            The journey continues one note, one step, and one season at a time.
          </p>

          <div className="mt-24 lg:mt-32">
            <h2 className="serif-display text-[1.75rem] tracking-[-0.005em] text-ink md:text-[2.5rem]">The Seeker Letter</h2>
            <p className="mx-auto mt-8 max-w-xl text-[1.05rem] leading-[1.8] text-ink/80 md:text-[1.15rem]">
              Occasional reflections, journey updates, book progress, bansuri insights, and notes from the path.
            </p>
            <form className="mx-auto mt-14 flex max-w-md flex-col gap-4 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                required
                placeholder="your@email"
                className="flex-1 border-b border-ink/30 bg-transparent py-3 text-center text-base text-ink outline-none placeholder:text-ink/40 focus:border-bamboo sm:text-left"
              />
              <button className="font-serif text-base text-ink hover:text-bamboo transition-colors">
                Subscribe →
              </button>
            </form>
          </div>
        </div>
      </section>
    </Page>
  );
}
