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
  { to: "/seekers-soil", title: "Seekers Soil", desc: "Growing food, learning from the land, and a quieter self-reliance.", img: soilImg },
  { to: "/journal", title: "Journal", desc: "Reflections, observations, essays, and field notes.", img: journalImg },
] as const;

function Home() {
  return (
    <Page>
      {/* Full-screen hero */}
      <section className="relative h-screen min-h-[680px] w-full overflow-hidden">
        <img
          src={hero}
          alt="A small figure on a misty mountain path, bansuri in hand"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/30 to-ink/70" />

        <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col justify-between px-6 pt-32 pb-16 lg:px-10 lg:pb-24">
          <div>
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.32em] text-paper/80">Echoes of the Seeker</p>
            <h1 className="serif-display mt-6 max-w-3xl text-4xl text-paper md:text-6xl lg:text-7xl">
              A journey through music, nature, place, practice, and the search for a deeper way of being.
            </h1>
          </div>

          <div className="mt-12 max-w-xl">
            <blockquote className="serif-display space-y-2 text-xl italic text-paper/90 md:text-2xl">
              <p>I'm trying to make an echo.</p>
              <p>Whether it will come back to me, I don't know.</p>
              <p>But I'm trying to make a sound in the silence.</p>
            </blockquote>
            <Link
              to="/about"
              className="mt-10 inline-flex items-center gap-3 border-b border-paper/70 pb-1 text-xs uppercase tracking-[0.28em] text-paper hover:border-bamboo hover:text-bamboo transition-colors"
            >
              Explore the Journey
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Quiet introduction */}
      <section className="mx-auto max-w-6xl px-6 py-32 lg:px-10 lg:py-44">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-24">
          <div className="lg:col-span-5">
            <img
              src={aboutImg}
              alt="A quiet corner of the seeker's life"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="lg:col-span-7 lg:pt-12">
            <p className="eyebrow mb-8">An introduction</p>
            <p className="serif-display text-2xl leading-relaxed text-ink md:text-[1.7rem]">
              This is the digital home of a life being lived slowly — a place where music, land, writing, and inner exploration belong to the same path.
            </p>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-ink/75">
              Not a brand, not a business. A living archive of practice and attention, built to grow with the journey for years to come. Wander as you wish.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-6 lg:px-10"><div className="rule" /></div>

      {/* Featured paths — four, editorial */}
      <section className="mx-auto max-w-6xl px-6 py-32 lg:px-10 lg:py-44">
        <div className="mb-20 max-w-2xl">
          <p className="eyebrow mb-6">Paths</p>
          <h2 className="serif-display text-4xl text-ink md:text-5xl">
            Four branches of the same tree.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-x-16 gap-y-24 md:grid-cols-2">
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
        <div className="mx-auto max-w-3xl px-6 py-32 text-center lg:px-10 lg:py-40">
          <p className="eyebrow mb-6">Seeker Letter</p>
          <h2 className="serif-display text-3xl text-ink md:text-4xl">
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
              className="flex-1 border-b border-ink/30 bg-transparent py-3 text-center text-base outline-none placeholder:text-ink/40 focus:border-bamboo sm:text-left"
            />
            <button className="text-xs uppercase tracking-[0.28em] text-ink hover:text-bamboo transition-colors">
              Subscribe →
            </button>
          </form>
        </div>
      </section>
    </Page>
  );
}
