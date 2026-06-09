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

const CURRENTLY = [
  "Teaching bansuri",
  "Building Echoes of the Seeker",
  "Growing Seekers Soil",
  "Developing Seekers Stay in Goa",
  "Writing the first book",
];

function Home() {
  return (
    <Page>
      {/* Hero */}
      <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
        <img
          src={hero}
          alt="A small figure on a misty mountain path, bansuri in hand"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/55 to-ink/80" />

        <div className="relative z-10 mx-auto flex h-full max-w-4xl flex-col items-center justify-center px-6 text-center lg:px-10">
          <p className="font-serif text-sm tracking-[0.28em] text-paper/75 md:text-base">Echoes of the Seeker</p>
          <blockquote className="serif-display mt-20 space-y-6 text-paper md:mt-24">
            <p className="text-3xl leading-snug md:text-5xl lg:text-6xl">I'm trying to make an echo.</p>
            <p className="text-2xl leading-snug text-paper/85 md:text-4xl lg:text-5xl">Whether it will come back to me, I don't know.</p>
            <p className="text-2xl italic leading-snug text-paper md:text-4xl lg:text-5xl">But I'm trying to make a sound in the silence.</p>
          </blockquote>
          <Link
            to="/about"
            className="mt-24 inline-flex items-center gap-3 border-b border-paper/50 pb-1 font-serif text-base tracking-wide text-paper/90 hover:border-bamboo hover:text-bamboo transition-colors md:mt-28"
          >
            Explore the Journey
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      {/* Why Echoes? */}
      <section className="mx-auto max-w-3xl px-6 py-28 text-center lg:px-10 lg:py-40">
        <h2 className="serif-display text-3xl text-ink md:text-4xl">Why Echoes?</h2>
        <div className="mt-10 space-y-6 font-serif text-lg leading-relaxed text-ink/80 md:text-xl">
          <p>An echo begins with a sound sent into the unknown.</p>
          <p>Whether it returns, changes, or disappears is never certain.</p>
          <p>
            Echoes of the Seeker is an exploration of what happens when we keep listening, learning, and moving forward without needing all the answers.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="border-t border-rule/70">
        <div className="mx-auto max-w-6xl px-6 py-28 lg:px-10 lg:py-40">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-24">
            <div className="lg:col-span-5">
              <img
                src={aboutImg}
                alt="A quiet corner of the seeker's life"
                loading="lazy"
                className="mx-auto aspect-[4/3] w-2/3 object-cover sm:w-1/2 lg:aspect-[4/5] lg:w-full"
              />
            </div>
            <div className="lg:col-span-7 lg:pt-6">
              <h2 className="serif-display text-3xl text-ink md:text-4xl">An Introduction</h2>
              <div className="mt-8 space-y-6 text-base leading-relaxed text-ink/80 md:text-lg">
                <p>Echoes of the Seeker brings together music, land, place, and practice.</p>
                <p>It is an ongoing exploration of what happens when attention is given to the things that matter.</p>
                <p>
                  Through teaching, hospitality, growing food, writing, and reflection, different parts of life become different expressions of the same journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Currently */}
      <section className="border-t border-rule/70">
        <div className="mx-auto max-w-3xl px-6 py-28 lg:px-10 lg:py-40">
          <h2 className="serif-display text-3xl text-ink md:text-4xl">Currently</h2>
          <ul className="mt-10 space-y-4 font-serif text-lg text-ink/80 md:text-xl">
            {CURRENTLY.map((c) => (
              <li key={c} className="flex items-baseline gap-4">
                <span aria-hidden className="text-bamboo">—</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Featured paths */}
      <section className="border-t border-rule/70">
        <div className="mx-auto max-w-6xl px-6 py-28 lg:px-10 lg:py-40">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="serif-display text-3xl text-ink md:text-4xl">Four Interconnected Paths</h2>
            <div className="mt-10 flex flex-col items-center gap-2 font-serif text-xl text-ink/80 md:text-2xl">
              <p>Music.</p>
              <p>Place.</p>
              <p>Land.</p>
              <p>Reflection.</p>
            </div>
            <p className="mt-10 text-base italic text-ink/65">Different expressions of the same journey.</p>
          </div>

          <div className="mt-24 grid grid-cols-1 gap-x-24 gap-y-32 md:grid-cols-2 lg:mt-32">
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
                  <span className="font-serif text-sm text-ink/40">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-serif text-3xl text-ink transition-colors group-hover:text-forest md:text-4xl">{p.title}</h3>
                </div>
                <p className="mt-4 max-w-md pl-10 text-base leading-relaxed text-ink/70">{p.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Closing transition */}
      <section className="border-t border-rule/70">
        <div className="mx-auto max-w-3xl px-6 py-28 text-center lg:px-10 lg:py-40">
          <p className="serif-display text-2xl italic leading-relaxed text-ink/80 md:text-3xl">
            «The journey continues one note, one step, and one season at a time.»
          </p>
        </div>
      </section>

      {/* Seeker Letter */}
      <section className="border-t border-rule/70">
        <div className="mx-auto max-w-3xl px-6 py-28 text-center lg:px-10 lg:py-40">
          <h2 className="serif-display text-3xl text-ink md:text-4xl">The Seeker Letter</h2>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-ink/75 md:text-lg">
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
      </section>
    </Page>
  );
}
