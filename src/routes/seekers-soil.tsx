import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Page } from "@/components/site-layout";
import hero from "@/assets/soil/IMG_20260616_100131.jpg.asset.json";
import greenRack from "@/assets/soil/IMG_20260616_100127.jpg.asset.json";
import shootsTray from "@/assets/soil/IMG_20260616_100135.jpg.asset.json";
import overhead1 from "@/assets/soil/IMG_20260610_104900.jpg.asset.json";
import overhead2 from "@/assets/soil/IMG_20260610_105004.jpg.asset.json";
import handTray from "@/assets/soil/IMG_20260610_104931.jpg.asset.json";
import packaged from "@/assets/soil/IMG_20260611_184000.jpg.asset.json";

export const Route = createFileRoute("/seekers-soil")({
  head: () => ({
    meta: [
      { title: "Seeker's Soil — Echoes of the Seeker" },
      { name: "description", content: "A quiet study of soil, food, patience, and the small cycles that sustain life." },
      { property: "og:title", content: "Seeker's Soil — Echoes of the Seeker" },
      { property: "og:description", content: "Learning from the land." },
      { property: "og:image", content: hero.url },
    ],
  }),
  component: Soil,
});

const TOPICS = [
  { t: "Microgreens", d: "Tiny plants with surprisingly large lessons. Seeds, light, water, observation, and patience." },
  { t: "Food Growing", d: "Understanding where food comes from by growing some of it ourselves." },
  { t: "Self-Reliance", d: "Small acts of participation in our own nourishment." },
  { t: "Regenerative Practices", d: "Methods that give back more than they take. Soil, compost, biodiversity, and stewardship." },
  { t: "Experiments", d: "Not everything works. Some lessons arrive through failure. Those are recorded too." },
  { t: "Seasonal Learning", d: "Different seasons teach different truths. The land is never saying the same thing twice." },
] as const;

const LESSONS = [
  { t: "Patience", d: "Growth cannot be rushed." },
  { t: "Attention", d: "Small changes matter." },
  { t: "Consistency", d: "Tiny daily actions shape outcomes." },
  { t: "Stewardship", d: "Healthy systems thrive when cared for." },
  { t: "Humility", d: "Nature rarely follows our plans." },
] as const;

const OBSERVATIONS = [
  "Seeds contain more potential than appearance suggests.",
  "Growth often happens before it becomes visible.",
  "Healthy systems depend on many small invisible relationships.",
  "Attention changes outcomes.",
  "Nature rewards consistency more than intensity.",
] as const;

const GALLERY = [
  { src: overhead1.url, alt: "Overhead view of dense green microgreens", span: "row-span-2" },
  { src: greenRack.url, alt: "Green microgreens on the growing rack", span: "" },
  { src: shootsTray.url, alt: "Young shoots reaching toward the light", span: "row-span-2" },
  { src: handTray.url, alt: "A tray of microgreens held in hand", span: "" },
  { src: overhead2.url, alt: "Overhead close-up of tender leaves", span: "" },
  { src: hero.url, alt: "Red-stem microgreens under the grow light", span: "row-span-2" },
] as const;

function Soil() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setLightbox(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <Page>
      {/* HERO */}
      <section className="relative min-h-[88svh] overflow-hidden border-b border-rule/70">
        <img
          src={hero.url}
          alt="Red-stem microgreens flourishing under the grow light"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ filter: "saturate(0.92) contrast(1.02) sepia(0.06)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/35 to-ink/75" />
        <div className="relative z-10 mx-auto flex min-h-[88svh] max-w-5xl items-end px-6 py-16 lg:px-10 lg:py-24">
          <div className="max-w-2xl text-paper">
            <p className="eyebrow text-paper/70">Seeker's Soil</p>
            <h1 className="serif-display mt-5 text-[2.8rem] leading-[1.05] md:text-[4.5rem]">Learning from the land.</h1>
            <div className="mt-8 max-w-xl space-y-4 text-[1.05rem] leading-[1.85] text-paper/90 md:text-[1.12rem]">
              <p>A quiet study of soil, food, patience, and the small cycles that sustain life.</p>
              <p>
                What began with trays of microgreens has become an ongoing exploration of growing,
                observing, harvesting, and learning from the earth itself.
              </p>
              <p className="font-serif italic text-paper/80">No grand conclusions. Only experiments, seasons, and lessons.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TOPICS */}
      <section className="border-b border-rule/70">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20 lg:px-10 lg:py-24">
          <div className="max-w-2xl">
            <p className="eyebrow mb-6">One</p>
            <h2 className="serif-display text-[1.75rem] tracking-[-0.005em] text-ink md:text-[2.5rem]">What's being explored</h2>
          </div>
          <div className="mt-12 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {TOPICS.map((t, i) => (
              <article key={t.t} className="border-t border-rule/70 pt-5">
                <p className="font-serif text-sm text-ink/45">No. {String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 font-serif text-[1.5rem] text-ink">{t.t}</h3>
                <p className="mt-3 text-[1rem] leading-[1.8] text-ink/78">{t.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* THE FIRST EXPERIMENTS */}
      <section className="border-b border-rule/70">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20 lg:px-10 lg:py-24">
          <p className="eyebrow mb-6">Two</p>
          <h2 className="serif-display text-[1.75rem] tracking-[-0.005em] text-ink md:text-[2.5rem]">The First Experiments</h2>

          <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <figure>
              <img src={shootsTray.url} alt="A tray of new shoots under the grow light" loading="lazy" className="aspect-[4/5] w-full object-cover" />
            </figure>
            <div className="space-y-5 text-[1.05rem] leading-[1.85] text-ink/85 lg:self-center md:text-[1.12rem]">
              <p>Every tray begins with uncertainty.</p>
              <p>A handful of seeds disappear beneath the surface.</p>
              <p>Nothing seems to happen.</p>
              <p>Then, slowly, life begins to reveal itself.</p>
            </div>
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div className="space-y-5 text-[1.05rem] leading-[1.85] text-ink/85 lg:order-2 lg:self-center md:text-[1.12rem]">
              <p>Microgreens became an unexpected teacher.</p>
              <p>Not because they grow quickly. But because they make every stage visible.</p>
              <div className="pt-2 font-serif text-[1.3rem] text-ink md:text-[1.5rem] leading-[1.5]">
                <p>The seed.</p>
                <p>The sprout.</p>
                <p>The struggle.</p>
                <p>The growth.</p>
                <p>The harvest.</p>
              </div>
              <p>Each tray becomes a small lesson in observation and care.</p>
            </div>
            <figure className="lg:order-1">
              <img src={greenRack.url} alt="Green microgreens on the growing rack" loading="lazy" className="aspect-[4/5] w-full object-cover" />
            </figure>
          </div>
        </div>
      </section>

      {/* WHAT THE SOIL TEACHES */}
      <section className="border-b border-rule/70 bg-secondary/30">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20 lg:px-10 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <figure className="lg:self-start">
              <img src={overhead1.url} alt="Overhead view of dense green microgreens" loading="lazy" className="aspect-[3/4] w-full object-cover" />
            </figure>
            <div>
              <p className="eyebrow mb-6">Three</p>
              <h2 className="serif-display text-[1.75rem] tracking-[-0.005em] text-ink md:text-[2.5rem]">What the Soil Teaches</h2>
              <dl className="mt-10 divide-y divide-rule/70">
                {LESSONS.map((l) => (
                  <div key={l.t} className="grid gap-2 py-5 md:grid-cols-[0.7fr_1.3fr] md:gap-8">
                    <dt className="font-serif text-[1.35rem] text-ink">{l.t}</dt>
                    <dd className="text-[1rem] leading-[1.8] text-ink/78">{l.d}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="border-b border-rule/70">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20 lg:px-10 lg:py-24">
          <p className="eyebrow mb-6">Four</p>
          <h2 className="serif-display text-[1.75rem] tracking-[-0.005em] text-ink md:text-[2.5rem]">Field Photographs</h2>
          <p className="mt-4 max-w-2xl text-[1rem] leading-[1.8] text-ink/70">
            Small studies of germination, growth, and harvest — recorded quietly along the way.
          </p>
          <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-3 md:gap-4 lg:auto-rows-[260px]">
            {GALLERY.map((g, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setLightbox(g.src)}
                className={`group relative overflow-hidden ${g.span}`}
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* OBSERVATIONS */}
      <section className="border-b border-rule/70">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20 lg:px-10 lg:py-24">
          <p className="eyebrow mb-6">Five</p>
          <h2 className="serif-display text-[1.75rem] tracking-[-0.005em] text-ink md:text-[2.5rem]">Observations from the Notebook</h2>
          <ol className="mt-12 space-y-8 md:space-y-10">
            {OBSERVATIONS.map((o, i) => (
              <li key={i} className="grid gap-3 border-t border-rule/70 pt-6 md:grid-cols-[auto_1fr] md:gap-10">
                <p className="font-serif text-sm text-ink/45 md:pt-2">Observation {String(i + 1).padStart(2, "0")}</p>
                <p className="font-serif text-[1.4rem] leading-[1.45] text-ink md:text-[1.6rem]">{o}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FROM SOIL TO SOMEONE'S TABLE */}
      <section className="border-b border-rule/70 bg-secondary/30">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24 lg:px-10 lg:py-32">
          <div className="max-w-2xl">
            <p className="eyebrow mb-6">Six</p>
            <h2 className="serif-display text-[1.9rem] tracking-[-0.005em] text-ink md:text-[2.75rem]">From Soil to Someone's Table</h2>
          </div>
          <figure className="mt-14 md:mt-20">
            <img
              src={packaged.url}
              alt="Two bags of Seeker's Soil microgreens with a hand-stamped kraft card"
              loading="lazy"
              className="mx-auto aspect-[4/5] w-full max-w-2xl object-cover md:aspect-[16/11]"
            />
          </figure>
          <div className="mx-auto mt-14 max-w-2xl space-y-5 text-[1.05rem] leading-[1.85] text-ink/85 md:mt-20 md:text-[1.12rem]">
            <p>Growing food changes the way nourishment is understood.</p>
            <p>A tray of greens begins as a handful of seeds.</p>
            <p>Days later it becomes something capable of nourishing another person.</p>
            <p>There is quiet satisfaction in witnessing that journey.</p>
            <p>Not because something was sold. But because something living was cared for from beginning to harvest.</p>
            <p className="font-serif italic text-ink/75">The harvest is not the destination. The process is.</p>
          </div>
          <blockquote className="mx-auto mt-16 max-w-3xl border-t border-rule/70 pt-10 text-center md:mt-20">
            <p className="serif-display text-[1.6rem] leading-[1.4] text-ink md:text-[2.2rem]">
              "The seed becomes food. The process becomes a teacher."
            </p>
          </blockquote>
        </div>
      </section>

      {/* STILL LEARNING */}
      <section>
        <div className="mx-auto max-w-3xl px-6 py-24 text-center md:py-28 lg:px-10 lg:py-32">
          <p className="eyebrow mb-6">Seven</p>
          <h2 className="serif-display text-[2rem] tracking-[-0.005em] text-ink md:text-[2.75rem]">Still Learning</h2>
          <div className="mx-auto mt-10 max-w-xl space-y-5 text-[1.05rem] leading-[1.85] text-ink/80 md:text-[1.12rem]">
            <p>Seeker's Soil is not a finished project.</p>
            <p>It is an ongoing conversation with the land.</p>
            <p>Some experiments succeed. Others fail. Both are welcome.</p>
            <p>For now, this remains a place for questions, observations, and small acts of participation in the living world.</p>
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm"
        >
          <img src={lightbox} alt="" className="max-h-[92vh] max-w-[96vw] object-contain" />
          <button
            type="button"
            onClick={() => setLightbox(null)}
            aria-label="Close"
            className="absolute right-5 top-5 font-serif text-sm text-paper/80 hover:text-paper"
          >
            Close
          </button>
        </div>
      )}
    </Page>
  );
}
