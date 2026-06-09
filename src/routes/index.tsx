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
  { to: "/seekers-stay", title: "Seekers Stay", desc: "Places that invite rest, reflection, and connection.", img: stayImg },
  { to: "/seekers-soil", title: "Seekers Soil", desc: "Growing food, learning from the land, a quieter self-reliance.", img: soilImg },
  { to: "/journal", title: "Journal", desc: "Reflections, observations, essays, and field notes.", img: journalImg },
] as const;

function Home() {
  return (
    <Page>
      {/* Full-screen hero — the passage is the message */}
      <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
        <img
          src={hero}
          alt="A small figure on a misty mountain path, bansuri in hand"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/55 to-ink/80" />

        <div className="relative z-10 mx-auto flex h-full max-w-4xl flex-col items-center justify-center px-6 text-center lg:px-10">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.32em] text-paper/70">Echoes of the Seeker</p>
          <blockquote className="serif-display mt-12 space-y-4 text-paper">
            <p className="text-3xl md:text-5xl lg:text-6xl">I'm trying to make an echo.</p>
            <p className="text-2xl text-paper/85 md:text-4xl lg:text-5xl">Whether it will come back to me, I don't know.</p>
            <p className="text-2xl italic text-paper md:text-4xl lg:text-5xl">But I'm trying to make a sound in the silence.</p>
          </blockquote>
          <Link
            to="/about"
            className="mt-16 inline-flex items-center gap-3 border-b border-paper/50 pb-1 font-serif text-base tracking-wide text-paper/90 hover:border-bamboo hover:text-bamboo transition-colors"
          >
            Explore the Journey
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-6xl px-6 py-28 lg:px-10 lg:py-44">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-24">
          <div className="lg:col-span-5">
            <img
              src={aboutImg}
              alt="A quiet corner of the seeker's life"
              loading="lazy"
              className="aspect-[5/4] w-full object-cover md:aspect-[4/5]"
            />
          </div>
          <div className="lg:col-span-7 lg:pt-10">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-ink/55">An introduction</p>
            <p className="serif-display mt-8 text-2xl leading-relaxed text-ink md:text-[1.7rem]">
              Echoes of the Seeker is a digital home for an ongoing journey through music, nature, place, practice, and learning.
            </p>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-ink/75">
              It brings together teaching, hospitality, land stewardship, writing, and reflection as different expressions of the same path.
            </p>
          </div>
        </div>
      </section>

      {/* Bridge */}
      <section className="mx-auto max-w-3xl px-6 py-24 text-center lg:px-10 lg:py-36">
        <p className="serif-display text-2xl text-ink md:text-3xl">Four interconnected paths.</p>
        <div className="mt-10 flex flex-col items-center gap-3 font-serif text-xl text-ink/80 md:text-2xl">
          <p>Music.</p>
          <p>Place.</p>
          <p>Land.</p>
          <p>Reflection.</p>
        </div>
        <p className="mt-10 text-base italic text-ink/65">Different expressions of the same journey.</p>
      </section>

      {/* Featured paths */}
      <section className="mx-auto max-w-6xl px-6 pb-32 lg:px-10 lg:pb-44">
        <div className="grid grid-cols-1 gap-x-20 gap-y-28 md:grid-cols-2">
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
              <div className="mt-6 flex items-baseline gap-4">
                <span className="text-xs tracking-[0.22em] text-ink/40">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-serif text-3xl text-ink transition-colors group-hover:text-forest md:text-4xl">{p.title}</h3>
              </div>
              <p className="mt-3 max-w-md pl-10 text-base leading-relaxed text-ink/70">{p.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Seeker Letter */}
      <section className="border-t border-rule/70">
        <div className="mx-auto max-w-3xl px-6 py-28 text-center lg:px-10 lg:py-40">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-ink/55">Seeker Letter</p>
          <h2 className="serif-display mt-6 text-3xl text-ink md:text-4xl">
            Occasional letters from the path.
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-ink/70">
            Quiet notes — reflections, journey updates, and notes from the practice. Sent rarely, only when there is something worth sending.
          </p>
          <form className="mx-auto mt-12 flex max-w-md flex-col gap-4 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
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
