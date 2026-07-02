import { createFileRoute, Link } from "@tanstack/react-router";
import { Page } from "@/components/site-layout";
import aboutHero from "@/assets/about-hero.jpg";
import featuredImg from "@/assets/seeker-clouds.jpg.asset.json";
import learnImg from "@/assets/gallery-river-bansuri.jpg.asset.json";
import stayImg from "@/assets/stay.jpg";
import soilAsset from "@/assets/soil/IMG_20260610_104900.jpg.asset.json";
const soilImg = soilAsset.url;
import journalImg from "@/assets/journal.jpg";
import bookImg from "@/assets/book.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Echoes of the Seeker" },
      { name: "description", content: "A life being explored through music, land, place, and practice." },
      { property: "og:title", content: "About the Seeker — Echoes of the Seeker" },
      { property: "og:description", content: "A chapter from an unfinished journey." },
      { property: "og:image", content: featuredImg.url },
    ],
  }),
  component: About,
});

const TIMELINE = [
  { year: "2024", body: "Started learning the bansuri and exploring daily practice." },
  { year: "2025", body: "Entered a deeper phase of study and began teaching more intentionally." },
  { year: "2026", body: "The Goa chapter. Building Echoes of the Seeker, Seekers Soil, Seekers Stay, and The Book." },
  { year: "2027", body: "The first book. Future gatherings. New conversations." },
] as const;

const LESSONS = [
  { title: "Practice", body: "Most things grow slowly." },
  { title: "Nature", body: "Attention reveals more than speed." },
  { title: "Stewardship", body: "Care is a form of practice." },
  { title: "Freedom", body: "Finding freedom is one thing. Sustaining it is another." },
] as const;

const CHAPTERS = [
  { to: "/learn-bansuri", title: "Learn Bansuri", desc: "Learning, teaching, and sharing the bansuri.", img: learnImg.url },
  { to: "/seekers-stay", title: "Seekers Stay", desc: "Places that invite rest, reflection, and connection. Currently including Sasha's Stay in Ashwem, Goa.", img: stayImg },
  { to: "/seekers-soil", title: "Seekers Soil", desc: "Growing food and learning from the land.", img: soilImg },
  { to: "/journal", title: "Journal", desc: "Field notes, reflections, and observations.", img: journalImg },
  { to: "/the-book", title: "The Book", desc: "An evolving collection of stories and lessons from the path.", img: bookImg },
] as const;

function About() {
  return (
    <Page>
      <section className="relative h-[88svh] min-h-[560px] w-full overflow-hidden">
        <img
          src={aboutHero}
          alt="A small figure walking a quiet road toward distant hills at dawn"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/45 via-ink/30 to-ink/75" />
        <div className="relative z-10 mx-auto flex h-full max-w-3xl flex-col items-center justify-end px-6 pb-16 text-center lg:px-10 lg:pb-24">
          <h1
            className="serif-display text-[2.25rem] tracking-[-0.005em] text-paper sm:text-[2.75rem] md:text-5xl lg:text-[3.75rem]"
            style={{ textShadow: "0 1px 24px rgba(0,0,0,0.5)" }}
          >
            About the Seeker
          </h1>
        </div>
      </section>

      <section className="border-b border-rule/70">
        <div className="mx-auto max-w-2xl px-6 py-16 md:py-20 lg:px-10 lg:py-24">
          <p className="eyebrow mb-6">One</p>
          <h2 className="serif-display text-[1.75rem] tracking-[-0.005em] text-ink md:text-[2.5rem]">
            My Journey
          </h2>
          <div className="mt-8 space-y-5 text-[1.05rem] leading-[1.85] text-ink/85 md:text-[1.15rem] md:leading-[1.9]">
            <p>My name is Akash.</p>
            <p>
              In 2024, I began learning the bansuri. At the time, I thought I was simply learning an instrument. Over time, it
              became something more.
            </p>
            <p>
              The practice invited a different way of paying attention. To sound. To silence. To seasons. To the places I moved
              through.
            </p>
            <p>
              What began with music gradually expanded into a wider exploration of place, nature, writing, hospitality, and the
              search for a simpler and more intentional life.
            </p>
            <p>
              In 2026, that journey brought me to Goa. Some ideas became projects. Others remain experiments. Most are still
              unfolding.
            </p>
            <p>
              Echoes of the Seeker emerged as a place to gather these threads together. Not as a destination. But as a record
              of the journey.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-rule/70">
        <div className="mx-auto max-w-5xl px-4 py-10 md:py-16 lg:px-10 lg:py-20">
          <figure className="mx-auto w-[92%] md:w-full">
            <img
              src={featuredImg.url}
              alt="A seeker sitting before a sea of clouds at first light"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover md:aspect-[16/10]"
            />
          </figure>
        </div>
      </section>

      <section className="border-b border-rule/70">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-20 lg:px-10 lg:py-24">
          <p className="eyebrow mb-6">Two</p>
          <h2 className="serif-display text-[1.75rem] tracking-[-0.005em] text-ink md:text-[2.5rem]">
            A Journey in Progress
          </h2>
          <ol className="mt-10 space-y-6 border-l border-rule/70 pl-7 md:space-y-7 md:pl-9">
            {TIMELINE.map((t) => (
              <li key={t.year} className="relative">
                <span className="absolute -left-[2.05rem] top-[0.7rem] h-1.5 w-1.5 rounded-full bg-bamboo md:-left-[2.3rem]" />
                <p className="serif-display text-[1.35rem] text-ink md:text-[1.65rem]">{t.year}</p>
                <p className="mt-1.5 text-[1rem] leading-[1.75] text-ink/80 md:text-[1.05rem]">{t.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-rule/70">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-6">Three</p>
            <h2 className="serif-display text-[1.75rem] tracking-[-0.005em] text-ink md:text-[2.5rem]">
              What I'm Learning
            </h2>
            <p className="mt-5 font-serif text-[1.05rem] italic leading-[1.6] text-ink/70 md:text-[1.2rem]">
              Not achievements. A few ideas held lightly.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-x-14 gap-y-10 sm:grid-cols-2">
            {LESSONS.map((l, i) => (
              <div key={l.title} className="border-t border-rule/70 pt-5">
                <p className="font-serif text-sm text-ink/45">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-2.5 font-serif text-[1.5rem] text-ink md:text-[1.65rem]">{l.title}</h3>
                <p className="mt-2.5 text-[1.02rem] leading-[1.75] text-ink/75">{l.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-rule/70">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-6">Four</p>
            <h2 className="serif-display text-[1.75rem] tracking-[-0.005em] text-ink md:text-[2.5rem]">
              Different Expressions of the Same Journey
            </h2>
            <div className="mt-6 space-y-3 text-[1.05rem] leading-[1.8] text-ink/80 md:text-[1.15rem]">
              <p>At first glance these projects may seem unrelated.</p>
              <p className="font-serif italic text-ink/70">They are simply different expressions of the same journey.</p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-x-20 gap-y-12 md:grid-cols-2 md:mt-14 lg:gap-y-16">
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
                <div className="mt-5 flex items-baseline gap-4">
                  <span className="font-serif text-sm text-ink/45">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-serif text-[1.4rem] leading-tight text-ink transition-colors group-hover:text-forest md:text-[1.65rem]">
                    {c.title}
                  </h3>
                </div>
                <p className="mt-2.5 max-w-md pl-10 text-[1rem] leading-[1.7] text-ink/75 md:text-[1.05rem]">
                  {c.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-2xl px-6 py-20 text-center md:py-24 lg:px-10 lg:py-28">
          <p className="serif-display space-y-3 text-[1.5rem] leading-[1.5] text-ink md:text-[2rem] md:leading-[1.45]">
            <span className="block">Freedom comes.</span>
            <span className="block">It always comes.</span>
            <span className="block italic text-ink/80">Sustaining it — that is the work.</span>
          </p>
          <p className="mt-14 font-serif text-[1.1rem] italic text-ink/60 md:mt-16 md:text-[1.25rem]">
            The journey continues.
          </p>
        </div>
      </section>
    </Page>
  );
}

