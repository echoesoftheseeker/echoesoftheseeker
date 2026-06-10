import { createFileRoute, Link } from "@tanstack/react-router";
import { Page } from "@/components/site-layout";
import aboutHero from "@/assets/about-hero.jpg";
import learnImg from "@/assets/learn.jpg";
import stayImg from "@/assets/stay.jpg";
import soilImg from "@/assets/soil.jpg";
import journalImg from "@/assets/journal.jpg";
import bookImg from "@/assets/book.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Echoes of the Seeker" },
      { name: "description", content: "A life being explored through music, land, place, and practice." },
      { property: "og:title", content: "About the Seeker — Echoes of the Seeker" },
      { property: "og:description", content: "A chapter from an unfinished journey." },
      { property: "og:image", content: aboutHero },
    ],
  }),
  component: About,
});

const TIMELINE = [
  {
    year: "2024",
    lines: ["Started learning the bansuri.", "Discovered the discipline of daily practice."],
  },
  {
    year: "2025",
    lines: ["Entered a deeper phase of study and sadhana.", "Began teaching and sharing more intentionally."],
  },
  {
    year: "2026",
    lines: ["The Goa chapter.", "Building Echoes of the Seeker, Seekers Soil, Seekers Stay, and the book."],
  },
  {
    year: "2027",
    lines: ["The first book.", "Future gatherings.", "New conversations.", "A growing community."],
  },
] as const;

const LESSONS = [
  { title: "Practice", body: "Most things grow slowly." },
  { title: "Nature", body: "Attention reveals more than speed." },
  { title: "Stewardship", body: "Care is a form of practice." },
  { title: "Simplicity", body: "Less noise creates more space." },
  { title: "Curiosity", body: "Questions often matter more than answers." },
  { title: "Freedom", body: "Finding freedom is one thing. Sustaining it is another." },
] as const;

const CHAPTERS = [
  { to: "/learn-bansuri", title: "Learn Bansuri", desc: "Learning, teaching, and sharing the bansuri.", img: learnImg },
  { to: "/seekers-stay", title: "Seekers Stay", desc: "Places that invite rest, reflection, and connection. Including Sasha's Stay in Ashwem, Goa.", img: stayImg },
  { to: "/seekers-soil", title: "Seekers Soil", desc: "Growing food and learning from the land.", img: soilImg },
  { to: "/journal", title: "Journal", desc: "Field notes, observations, and reflections.", img: journalImg },
  { to: "/the-book", title: "The Book", desc: "An evolving collection of stories and lessons from the path.", img: bookImg },
] as const;

function About() {
  return (
    <Page>
      {/* Hero */}
      <section className="relative h-[88svh] min-h-[560px] w-full overflow-hidden">
        <img
          src={aboutHero}
          alt="A small figure walking a quiet road toward distant hills at dawn"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/40 to-ink/80" />
        <div className="relative z-10 mx-auto flex h-full max-w-3xl flex-col items-center justify-end px-6 pb-20 text-center lg:px-10 lg:pb-28">
          <h1
            className="serif-display text-[2.25rem] tracking-[-0.005em] text-paper sm:text-[2.75rem] md:text-5xl lg:text-[3.75rem]"
            style={{ textShadow: "0 1px 24px rgba(0,0,0,0.5)" }}
          >
            About the Seeker
          </h1>
          <p
            className="mt-7 max-w-xl font-serif text-[1.05rem] italic leading-[1.55] text-paper/90 md:mt-9 md:text-[1.25rem]"
            style={{ textShadow: "0 1px 18px rgba(0,0,0,0.45)" }}
          >
            A life being explored through music, land, place, and practice.
          </p>
        </div>
      </section>

      {/* The Beginning */}
      <section className="border-b border-rule/70">
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-32 lg:px-10 lg:py-40">
          <p className="eyebrow mb-8">One</p>
          <h2 className="serif-display text-[1.75rem] tracking-[-0.005em] text-ink md:text-[2.5rem]">
            The Beginning
          </h2>
          <div className="mt-12 space-y-6 text-[1.05rem] leading-[1.8] text-ink/85 md:text-[1.15rem] md:leading-[1.85]">
            <p>My name is Akash.</p>
            <p>In 2024, I began learning the bansuri.</p>
            <p>At the time, I thought I was simply learning an instrument. Over time, it became something else.</p>
            <p>The practice invited a different way of paying attention.</p>
            <p className="font-serif italic text-ink/70">To sound. To silence. To seasons. To the places I moved through.</p>
            <p>What began with a flute slowly expanded into a wider exploration of how life itself might be lived.</p>
            <p>Music led to walking. Walking led to observation. Observation led to writing. Writing led to questions.</p>
            <p>And the questions continue.</p>
            <p>Echoes of the Seeker emerged as a place to gather those threads together.</p>
            <p className="font-serif italic text-ink/70">Not as a destination. But as a record of the journey.</p>
          </div>
        </div>
      </section>

      {/* The Goa Chapter */}
      <section className="border-b border-rule/70">
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-32 lg:px-10 lg:py-40">
          <p className="eyebrow mb-8">Two</p>
          <h2 className="serif-display text-[1.75rem] tracking-[-0.005em] text-ink md:text-[2.5rem]">
            The Goa Chapter
          </h2>
          <div className="mt-12 space-y-6 text-[1.05rem] leading-[1.8] text-ink/85 md:text-[1.15rem] md:leading-[1.85]">
            <p>In 2026, the journey brought me to Goa.</p>
            <p className="font-serif italic text-ink/70">Not as an escape. Not as an arrival. Simply as the next chapter.</p>
            <p>Here, new ideas began taking root.</p>
            <p>A place near the sea. Food growing from soil. Teaching. Writing. Hosting. Listening.</p>
            <p>Some of those ideas became projects. Some remain experiments. Most are still unfolding.</p>
            <p>Goa is not the destination of this journey. It is simply where the current chapter is being written.</p>
          </div>
        </div>
      </section>

      {/* A Journey in Progress */}
      <section className="border-b border-rule/70">
        <div className="mx-auto max-w-4xl px-6 py-24 md:py-32 lg:px-10 lg:py-40">
          <p className="eyebrow mb-8">Three</p>
          <h2 className="serif-display text-[1.75rem] tracking-[-0.005em] text-ink md:text-[2.5rem]">
            A Journey in Progress
          </h2>
          <ol className="mt-16 space-y-16 border-l border-rule/70 pl-8 md:pl-12">
            {TIMELINE.map((t) => (
              <li key={t.year} className="relative">
                <span className="absolute -left-[2.55rem] top-3 h-2 w-2 rounded-full bg-bamboo md:-left-[3.05rem]" />
                <p className="serif-display text-[2rem] text-ink md:text-[2.75rem]">{t.year}</p>
                <div className="mt-4 space-y-2 text-[1.05rem] leading-[1.8] text-ink/80 md:text-[1.15rem]">
                  {t.lines.map((l) => (
                    <p key={l}>{l}</p>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* What I'm Learning */}
      <section className="border-b border-rule/70">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32 lg:px-10 lg:py-40">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-8">Four</p>
            <h2 className="serif-display text-[1.75rem] tracking-[-0.005em] text-ink md:text-[2.5rem]">
              What I'm Learning
            </h2>
            <p className="mt-7 font-serif text-[1.1rem] italic leading-[1.6] text-ink/70 md:text-[1.25rem]">
              Not achievements. A few ideas held lightly.
            </p>
          </div>
          <div className="mt-20 grid grid-cols-1 gap-x-16 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-20">
            {LESSONS.map((l, i) => (
              <div key={l.title} className="border-t border-rule/70 pt-7">
                <p className="font-serif text-sm text-ink/45">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 font-serif text-[1.5rem] text-ink md:text-[1.65rem]">{l.title}</h3>
                <p className="mt-4 text-[1.02rem] leading-[1.75] text-ink/75">{l.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Different Expressions */}
      <section className="border-b border-rule/70">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32 lg:px-10 lg:py-40">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-8">Five</p>
            <h2 className="serif-display text-[1.75rem] tracking-[-0.005em] text-ink md:text-[2.5rem]">
              Different Expressions of the Same Journey
            </h2>
            <div className="mt-10 space-y-5 text-[1.05rem] leading-[1.8] text-ink/80 md:text-[1.15rem]">
              <p>At first glance, these projects may seem unrelated. But each one emerged from the same questions.</p>
              <p className="font-serif italic text-ink/70">
                How do we live more attentively? How do we learn? How do we care for places? How do we create space for reflection?
              </p>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-x-20 gap-y-20 md:grid-cols-2 lg:mt-24 lg:gap-y-28">
            {CHAPTERS.map((c, i) => (
              <Link key={c.to} to={c.to} className="group block">
                <div className="overflow-hidden bg-secondary">
                  <img
                    src={c.img}
                    alt={c.title}
                    loading="lazy"
                    className="aspect-[5/6] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-7 flex items-baseline gap-4">
                  <span className="font-serif text-sm text-ink/45">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-serif text-[1.45rem] leading-tight text-ink transition-colors group-hover:text-forest md:text-[1.75rem]">
                    {c.title}
                  </h3>
                </div>
                <p className="mt-3 max-w-md pl-10 text-[1rem] leading-[1.7] text-ink/75 md:text-[1.05rem]">
                  {c.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Exists */}
      <section className="border-b border-rule/70">
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-32 lg:px-10 lg:py-40">
          <p className="eyebrow mb-8">Six</p>
          <h2 className="serif-display text-[1.75rem] tracking-[-0.005em] text-ink md:text-[2.5rem]">
            Why This Exists
          </h2>
          <div className="mt-12 space-y-6 text-[1.05rem] leading-[1.8] text-ink/85 md:text-[1.15rem] md:leading-[1.85]">
            <p>I do not know exactly where this journey leads.</p>
            <p>Much of what has mattered most arrived unexpectedly.</p>
            <p className="font-serif italic text-ink/70">
              A note played. A road taken. A conversation shared. A seed planted. A place discovered.
            </p>
            <p>Echoes of the Seeker exists as a way of paying attention to those moments.</p>
            <p>A place to notice what returns. A place to keep listening.</p>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section>
        <div className="mx-auto max-w-2xl px-6 py-32 text-center md:py-44 lg:px-10 lg:py-56">
          <p className="serif-display space-y-3 text-[1.5rem] leading-[1.5] text-ink md:text-[2rem] md:leading-[1.45]">
            <span className="block">Freedom comes.</span>
            <span className="block">It always comes.</span>
            <span className="block italic text-ink/80">Sustaining it — that is the work.</span>
          </p>
          <p className="mt-24 font-serif text-[1.1rem] italic text-ink/60 md:mt-32 md:text-[1.25rem]">
            The journey continues.
          </p>
        </div>
      </section>
    </Page>
  );
}
