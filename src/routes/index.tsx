import { createFileRoute, Link } from "@tanstack/react-router";
import { Page } from "@/components/site-layout";
import hero from "@/assets/hero-seeker.jpg";
import learnImg from "@/assets/learn.jpg";
import stayImg from "@/assets/stay.jpg";
import soilImg from "@/assets/soil.jpg";
import bookImg from "@/assets/book.jpg";
import bansurisImg from "@/assets/bansuris.jpg";
import journalImg from "@/assets/journal.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Echoes of the Seeker — A journey of music, nature, and practice" },
      { name: "description", content: "A living home for a journey through music, nature, place, practice, and the search for a deeper way of being." },
      { property: "og:title", content: "Echoes of the Seeker" },
      { property: "og:description", content: "A journey through music, nature, place, practice, and the search for a deeper way of being." },
      { property: "og:image", content: hero },
    ],
  }),
  component: Home,
});

const PATHS = [
  { to: "/learn-bansuri", title: "Learn Bansuri", desc: "Learning, teaching, and sharing the bansuri.", img: learnImg },
  { to: "/seekers-stay", title: "Seekers Stay", desc: "Places that invite rest, reflection, and connection.", img: stayImg },
  { to: "/seekers-soil", title: "Seekers Soil", desc: "Growing food, learning from the land, and exploring self-reliance.", img: soilImg },
  { to: "/the-book", title: "The Book", desc: "A long-form exploration of journey, learning, nature, and life.", img: bookImg },
  { to: "/bansuris", title: "Bansuris", desc: "Carefully selected and personally checked bansuris.", img: bansurisImg },
  { to: "/journal", title: "Journal", desc: "Reflections, observations, essays, and field notes.", img: journalImg },
] as const;

function Home() {
  return (
    <Page>
      {/* Hero */}
      <section className="relative">
        <div className="relative h-[88vh] min-h-[640px] w-full overflow-hidden">
          <img
            src={hero}
            alt="A small figure walking a misty mountain path with a bansuri"
            width={1920}
            height={1280}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/20 via-ink/10 to-paper" />
        </div>
        <div className="mx-auto -mt-72 max-w-4xl px-6 lg:px-10">
          <div className="relative">
            <p className="eyebrow text-paper/90 drop-shadow">Echoes of the Seeker</p>
            <h1 className="serif-display mt-4 text-5xl text-paper drop-shadow-md md:text-7xl lg:text-[5.5rem]">
              A journey through music, nature,<br />
              <em className="italic text-bamboo/90">place, practice,</em> and the search<br />
              for a deeper way of being.
            </h1>
          </div>
        </div>
      </section>

      {/* Signature passage */}
      <section className="mx-auto max-w-3xl px-6 py-24 text-center lg:py-32">
        <p className="eyebrow mb-8">— Signature passage</p>
        <blockquote className="serif-display space-y-6 text-3xl text-ink md:text-4xl">
          <p>I'm trying to make an echo.</p>
          <p className="text-ink/80">Whether it will come back to me, I don't know.</p>
          <p className="italic text-forest">But I'm trying to make a sound in the silence.</p>
        </blockquote>
      </section>

      <div className="mx-auto max-w-5xl px-6 lg:px-10"><div className="rule" /></div>

      {/* Featured paths */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="mb-14 flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow mb-4">Featured paths</p>
            <h2 className="serif-display text-4xl md:text-5xl">Where the journey opens.</h2>
          </div>
          <p className="hidden max-w-sm text-sm text-ink/70 md:block">
            Each path is a branch of the same tree. Follow the one that calls.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {PATHS.map((p, i) => (
            <Link key={p.to} to={p.to} className="group block">
              <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full bg-paper/90 px-3 py-1 text-[0.65rem] uppercase tracking-[0.18em] text-ink/70">
                  {String(i + 1).padStart(2, "0")} — Branch
                </span>
              </div>
              <h3 className="mt-5 font-serif text-2xl text-ink group-hover:text-bamboo md:text-3xl">{p.title}</h3>
              <p className="mt-2 max-w-sm text-sm text-ink/70">{p.desc}</p>
              <span className="mt-3 inline-block text-xs uppercase tracking-[0.2em] text-bamboo">Follow →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Seeker letter */}
      <section className="border-t border-rule/70 bg-secondary/40">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 py-24 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="eyebrow mb-4">Seeker Letter</p>
            <h2 className="serif-display text-4xl">Notes from the path, into your inbox.</h2>
          </div>
          <div className="flex flex-col justify-between">
            <p className="text-ink/75">
              Occasional reflections, journey updates, book progress, bansuri insights, and notes from the path.
            </p>
            <form className="mt-8 flex flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                required
                placeholder="your@email"
                className="flex-1 border-b border-ink/30 bg-transparent py-3 text-base outline-none placeholder:text-ink/40 focus:border-bamboo"
              />
              <button className="rounded-full bg-ink px-6 py-3 text-xs uppercase tracking-[0.22em] text-paper hover:bg-forest">
                Subscribe
              </button>
            </form>
            <p className="mt-3 text-[0.7rem] text-ink/50">No noise. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>
    </Page>
  );
}
