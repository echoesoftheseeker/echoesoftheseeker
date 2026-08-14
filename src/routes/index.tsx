import { createFileRoute, Link } from "@tanstack/react-router";
import { Page } from "@/components/site-layout";
import { Reveal } from "@/components/reveal";
import hero from "@/assets/hero-beach-dawn.jpg.asset.json";
import learnImg from "@/assets/gallery-river-bansuri.jpg.asset.json";
import stayAsset from "@/assets/stay/living-room-open.jpg.asset.json";
import soilAsset from "@/assets/soil-packaged-microgreens.png.asset.json";
import journalAsset from "@/assets/journal-desk.jpg.asset.json";
import aboutAsset from "@/assets/intro-bansuri.jpg.asset.json";

const stayImg = stayAsset.url;
const soilImg = soilAsset.url;
const journalImg = journalAsset.url;
const aboutImg = aboutAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Echoes of the Seeker — A journey of music, nature, and practice" },
      {
        name: "description",
        content:
          "A journey through music, nature, mindful living, and the search for a deeper way of being. Bansuri, land, place, and reflection from Goa.",
      },
      { property: "og:title", content: "Echoes of the Seeker" },
      {
        property: "og:description",
        content: "A journey through music, nature, mindful living, and the search for a deeper way of being.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: hero.url },
    ],
  }),
  component: Home,
});

const PATHS = [
  {
    to: "/learn-bansuri",
    title: "Learn Bansuri",
    desc: "Learning, teaching, and sharing the bamboo flute.",
    img: learnImg.url,
    position: "object-center",
  },
  {
    to: "/seekers-stay",
    title: "Seekers Stay",
    desc: "A quiet place to rest and reflect, in Ashwem, Goa.",
    img: stayImg,
    position: "object-center",
  },
  {
    to: "/seekers-soil",
    title: "Seekers Soil",
    desc: "Growing food, learning from the land, self-reliance.",
    img: soilImg,
    position: "object-[50%_45%]",
  },
  {
    to: "/journal",
    title: "Journal",
    desc: "Reflections, observations, essays, and field notes.",
    img: journalImg,
    position: "object-center",
  },
] as const;

function Home() {
  return (
    <Page>
      {/* Hero */}
      <section className="relative h-[100svh] min-h-[620px] w-full overflow-hidden">
        <img
          src={hero.url}
          alt="A seeker walking barefoot along a quiet Goa shoreline at dawn, flute bag over one shoulder"
          className="absolute inset-0 h-full w-full animate-[scale-in_2.4s_ease-out] object-cover object-[58%_42%] motion-reduce:animate-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/20 to-ink/45" />

        <div className="relative z-10 mx-auto flex h-full max-w-3xl flex-col items-center justify-start px-6 pt-[16svh] text-center lg:px-10">
          <h1
            className="serif-display animate-[fade-in_1.4s_ease-out_0.2s_both] text-[2.35rem] leading-[1.15] tracking-[-0.015em] text-paper motion-reduce:animate-none sm:text-[3rem] md:text-[3.75rem] lg:text-[4.25rem]"
            style={{ textShadow: "0 2px 30px rgba(0,0,0,0.45)" }}
          >
            I'm trying to make an echo.
          </h1>
          <p
            className="mx-auto mt-8 max-w-xl animate-[fade-in_1.4s_ease-out_0.6s_both] font-serif text-[1.05rem] leading-[1.75] text-paper/90 motion-reduce:animate-none md:mt-10 md:text-[1.3rem] md:leading-[1.7]"
            style={{ textShadow: "0 1px 20px rgba(0,0,0,0.45)" }}
          >
            A journey through music, nature, mindful living, and the search for a deeper way of being.
          </p>
          <Link
            to="/about"
            className="mt-14 inline-flex animate-[fade-in_1.4s_ease-out_1s_both] items-center gap-3 border-b border-paper/50 pb-1.5 font-serif text-sm tracking-wide text-paper/90 transition-colors duration-500 hover:border-bamboo hover:text-bamboo motion-reduce:animate-none md:mt-16 md:text-base"
          >
            Begin the Journey
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      {/* Why Echoes */}
      <section className="mx-auto max-w-2xl px-6 py-28 text-center md:py-40 lg:px-10 lg:py-48">
        <Reveal>
          <h2 className="serif-display text-[1.85rem] tracking-[-0.005em] text-ink md:text-[2.6rem]">Why Echoes?</h2>
        </Reveal>
        <Reveal delay={150}>
          <div className="mt-12 space-y-7 font-serif text-[1.15rem] leading-[1.85] text-ink/85 md:mt-14 md:text-[1.35rem] md:leading-[1.85]">
            <p>An echo begins with a sound sent into the unknown.</p>
            <p>Whether it returns is never certain.</p>
            <p>This project is an attempt to keep listening.</p>
          </div>
        </Reveal>
      </section>

      {/* Introduction */}
      <section>
        <div className="mx-auto max-w-6xl px-6 pb-28 md:pb-40 lg:px-10 lg:pb-48">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-24">
            <Reveal className="lg:col-span-6">
              <img
                src={aboutImg}
                alt="Akash sitting on stone steps playing the bansuri in a pink kurta"
                loading="lazy"
                className="mx-auto aspect-[4/5] w-[88%] object-cover object-[50%_38%] sm:w-3/4 md:w-2/3 lg:w-full"
              />
            </Reveal>
            <Reveal delay={150} className="lg:col-span-6 lg:pt-10">
              <h2 className="serif-display text-[1.85rem] tracking-[-0.005em] text-ink md:text-[2.6rem]">
                An Introduction
              </h2>
              <div className="mt-10 max-w-[34rem] space-y-6 text-[1.05rem] leading-[1.85] text-ink/85 md:text-[1.15rem] md:leading-[1.9]">
                <p>Echoes of the Seeker brings together music, land, place, and practice.</p>
                <p>It is an ongoing exploration of what happens when attention is given to the things that matter.</p>
                <p>
                  Through teaching, hospitality, growing food, writing, and reflection, different parts of life become
                  different expressions of the same journey.
                </p>
                <p className="font-serif italic text-ink/70">Currently based in Goa.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Four paths */}
      <section>
        <div className="mx-auto max-w-6xl px-6 pb-28 md:pb-40 lg:px-10 lg:pb-48">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="serif-display text-[1.85rem] tracking-[-0.005em] text-ink md:text-[2.6rem]">
                Four Interconnected Paths
              </h2>
              <div className="mt-12 flex flex-col items-center gap-2.5 font-serif text-lg text-ink/85 md:text-xl">
                <p>Music.</p>
                <p>Place.</p>
                <p>Land.</p>
                <p>Reflection.</p>
              </div>
              <p className="mt-12 font-serif text-base italic leading-relaxed text-ink/70 md:text-lg">
                Different expressions of the same journey.
              </p>
            </div>
          </Reveal>

          <div className="mt-24 grid grid-cols-1 gap-x-24 gap-y-24 md:grid-cols-2 lg:mt-32 lg:gap-y-36">
            {PATHS.map((p, i) => (
              <Reveal key={p.to} delay={(i % 2) * 120}>
                <Link to={p.to} className="group block">
                  <div className="overflow-hidden bg-secondary">
                    <img
                      src={p.img}
                      alt={p.title}
                      loading="lazy"
                      className={`aspect-[4/5] w-full object-cover ${p.position} transition-transform duration-[1600ms] ease-out group-hover:scale-[1.035]`}
                    />
                  </div>
                  <div className="mt-8 flex items-baseline gap-4">
                    <span className="font-serif text-sm text-ink/45">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="font-serif text-[1.55rem] leading-tight text-ink transition-colors duration-500 group-hover:text-forest md:text-[1.9rem]">
                      {p.title}
                    </h3>
                  </div>
                  <p className="mt-4 max-w-[26rem] pl-10 text-[1rem] leading-[1.8] text-ink/75 md:text-[1.05rem]">
                    {p.desc}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing + Letter */}
      <section className="border-t border-rule/60">
        <div className="mx-auto max-w-3xl px-6 py-28 text-center md:py-40 lg:px-10 lg:py-48">
          <Reveal>
            <p className="serif-display text-[1.45rem] italic leading-[1.6] text-ink/85 md:text-[1.8rem] md:leading-[1.55]">
              The journey continues one note, one step, and one season at a time.
            </p>
          </Reveal>

          <Reveal delay={150}>
            <div className="mt-28 lg:mt-36">
              <h2 className="serif-display text-[1.85rem] tracking-[-0.005em] text-ink md:text-[2.6rem]">
                The Seeker Letter
              </h2>
              <p className="mx-auto mt-8 max-w-xl text-[1.05rem] leading-[1.85] text-ink/80 md:text-[1.15rem]">
                Occasional reflections, journey updates, book progress, bansuri insights, and notes from the path.
              </p>
              <form
                className="mx-auto mt-14 flex max-w-md flex-col gap-5 sm:flex-row"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  required
                  placeholder="your@email"
                  className="flex-1 border-b border-ink/30 bg-transparent py-3 text-center text-base text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-bamboo sm:text-left"
                />
                <button className="font-serif text-base text-ink transition-colors hover:text-bamboo">
                  Subscribe →
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>
    </Page>
  );
}
