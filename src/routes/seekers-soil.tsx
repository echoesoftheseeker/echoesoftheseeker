import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Page } from "@/components/site-layout";
import hero from "@/assets/soil/IMG_20260616_100131.jpg.asset.json";
import greenTray from "@/assets/soil/IMG_20260616_100127.jpg.asset.json";
import canopy from "@/assets/soil/IMG_20260610_105004.jpg.asset.json";
import handTray from "@/assets/soil/IMG_20260610_104931.jpg.asset.json";
import rootMat from "@/assets/soil/IMG_20260612_083112.jpg.asset.json";
import rack from "@/assets/soil/IMG_20260617_142509.jpg.asset.json";
import rackDay from "@/assets/soil/IMG_20260609_190110.jpg.asset.json";
import packaged from "@/assets/soil/IMG_20260611_184000.jpg.asset.json";

export const Route = createFileRoute("/seekers-soil")({
  head: () => ({
    meta: [
      { title: "Seeker's Soil — Echoes of the Seeker" },
      { name: "description", content: "A quiet study of soil, food, patience, and the small cycles that sustain life." },
      { property: "og:title", content: "Seeker's Soil — Echoes of the Seeker" },
      { property: "og:description", content: "Learning from the land." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: hero.url },
      { name: "twitter:image", content: hero.url },
    ],
  }),
  component: Soil,
});

const CARDS = [
  {
    src: hero.url,
    alt: "Red radish microgreens under the LED grow light",
    t: "Red Radish",
    d: "Crimson stems that seem to glow under the light. Sharp, peppery, alive.",
  },
  {
    src: greenTray.url,
    alt: "Tray of green microgreens under the grow light",
    t: "Green Microgreens",
    d: "The everyday tray. Quiet, dense, endlessly instructive.",
  },
  {
    src: handTray.url,
    alt: "A freshly harvested tray of microgreens held in hand",
    t: "Fresh Harvest",
    d: "Cut the same morning it is eaten. Nothing stored, nothing shipped.",
  },
] as const;

const PROCESS = [
  { src: canopy.url, alt: "Dense green canopy of microgreens seen from above", c: "Above — the canopy closes in around day seven." },
  { src: rootMat.url, alt: "Root mat of a microgreens tray viewed from underneath", c: "Beneath — the root mat, the part no one sees." },
  { src: handTray.url, alt: "Side profile of a tray showing thick white roots", c: "Side — stems and roots in equal measure." },
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
  { src: canopy.url, alt: "Dense green canopy of microgreens" },
  { src: hero.url, alt: "Red radish microgreens tray" },
  { src: rackDay.url, alt: "The indoor growing rack with several trays" },
  { src: packaged.url, alt: "Packaged Seeker's Soil microgreens with a kraft card" },
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
      <section className="relative min-h-[80svh] overflow-hidden border-b border-rule/70">
        <img
          src={hero.url}
          alt="Red radish microgreens flourishing under the grow light"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ filter: "saturate(0.92) contrast(1.02) sepia(0.06)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/35 to-ink/75" />
        <div className="relative z-10 mx-auto flex min-h-[80svh] max-w-5xl items-end px-6 py-14 lg:px-10 lg:py-24">
          <div className="max-w-2xl text-paper">
            <p className="eyebrow text-paper/70">Seeker's Soil</p>
            <h1 className="serif-display mt-4 text-[2.6rem] leading-[1.05] md:text-[4.5rem]">Learning from the land.</h1>
            <div className="mt-6 max-w-xl space-y-3 text-[1.02rem] leading-[1.8] text-paper/90 md:text-[1.12rem]">
              <p>A quiet study of soil, food, patience, and the small cycles that sustain life.</p>
              <p className="font-serif italic text-paper/80">No grand conclusions. Only experiments, seasons, and lessons.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S BEING EXPLORED */}
      <section className="border-b border-rule/70">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-20 lg:px-10 lg:py-24">
          <p className="eyebrow mb-4">One</p>
          <h2 className="serif-display text-[1.75rem] tracking-[-0.005em] text-ink md:text-[2.5rem]">What's being explored</h2>
          <div className="mt-10 grid gap-8 md:mt-14 md:grid-cols-3 md:gap-10">
            {CARDS.map((c) => (
              <article key={c.t}>
                <img src={c.src} alt={c.alt} loading="lazy" className="aspect-[4/5] w-full object-cover" />
                <h3 className="mt-5 font-serif text-[1.4rem] text-ink">{c.t}</h3>
                <p className="mt-2 text-[0.98rem] leading-[1.75] text-ink/75">{c.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GROWING PROCESS */}
      <section className="border-b border-rule/70">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-20 lg:px-10 lg:py-24">
          <p className="eyebrow mb-4">Two</p>
          <h2 className="serif-display text-[1.75rem] tracking-[-0.005em] text-ink md:text-[2.5rem]">The growing process</h2>
          <p className="mt-4 max-w-xl text-[1rem] leading-[1.8] text-ink/75">
            Seeds disappear beneath the surface. Nothing seems to happen. Then, slowly, life reveals itself.
          </p>
          <div className="mt-10 grid gap-8 md:mt-14 md:grid-cols-3 md:gap-10">
            {PROCESS.map((p, i) => (
              <figure key={i}>
                <img src={p.src} alt={p.alt} loading="lazy" className="aspect-[3/4] w-full object-cover" />
                <figcaption className="mt-4 font-serif text-[0.95rem] italic text-ink/65">{p.c}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* GROWING SPACE */}
      <section className="border-b border-rule/70">
        <img
          src={rack.url}
          alt="The indoor growing rack lit by LED grow lights at night"
          loading="lazy"
          className="h-[52svh] w-full object-cover md:h-[74svh]"
        />
        <div className="mx-auto max-w-3xl px-6 py-12 text-center md:py-16 lg:px-10">
          <p className="eyebrow mb-4">The growing space</p>
          <p className="font-serif text-[1.25rem] leading-[1.6] text-ink md:text-[1.5rem]">
            A single rack in a corner of the house. Three shelves, a few lights, and a handful of trays —
            enough to learn almost everything.
          </p>
        </div>
      </section>

      {/* WHAT THE SOIL TEACHES */}
      <section className="border-b border-rule/70 bg-secondary/30">
        <div className="mx-auto max-w-4xl px-6 py-14 md:py-20 lg:px-10 lg:py-24">
          <p className="eyebrow mb-4">Three</p>
          <h2 className="serif-display text-[1.75rem] tracking-[-0.005em] text-ink md:text-[2.5rem]">What the soil teaches</h2>
          <dl className="mt-8 divide-y divide-rule/70 md:mt-10">
            {LESSONS.map((l) => (
              <div key={l.t} className="grid gap-1 py-4 md:grid-cols-[0.6fr_1.4fr] md:gap-8 md:py-5">
                <dt className="font-serif text-[1.25rem] text-ink md:text-[1.35rem]">{l.t}</dt>
                <dd className="text-[0.98rem] leading-[1.75] text-ink/78">{l.d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* QUIET GALLERY */}
      <section className="border-b border-rule/70">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-20 lg:px-10 lg:py-24">
          <p className="eyebrow mb-4">Four</p>
          <h2 className="serif-display text-[1.75rem] tracking-[-0.005em] text-ink md:text-[2.5rem]">Field photographs</h2>
          <div className="mt-8 grid grid-cols-2 gap-3 md:mt-12 md:gap-5">
            {GALLERY.map((g, i) => (
              <button key={i} type="button" onClick={() => setLightbox(g.src)} className="group relative overflow-hidden">
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="aspect-square w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* OBSERVATIONS */}
      <section className="border-b border-rule/70">
        <div className="mx-auto max-w-4xl px-6 py-14 md:py-20 lg:px-10 lg:py-24">
          <p className="eyebrow mb-4">Five</p>
          <h2 className="serif-display text-[1.75rem] tracking-[-0.005em] text-ink md:text-[2.5rem]">Observations from the notebook</h2>
          <ol className="mt-8 space-y-6 md:mt-12 md:space-y-8">
            {OBSERVATIONS.map((o, i) => (
              <li key={i} className="grid gap-2 border-t border-rule/70 pt-5 md:grid-cols-[auto_1fr] md:gap-10">
                <p className="font-serif text-sm text-ink/45 md:pt-2">Observation {String(i + 1).padStart(2, "0")}</p>
                <p className="font-serif text-[1.25rem] leading-[1.45] text-ink md:text-[1.6rem]">{o}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FROM SOIL TO SOMEONE'S TABLE */}
      <section className="border-b border-rule/70 bg-secondary/30">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-24 lg:px-10">
          <p className="eyebrow mb-4">Six</p>
          <h2 className="serif-display text-[1.8rem] tracking-[-0.005em] text-ink md:text-[2.75rem]">From soil to someone's table</h2>
          <figure className="mt-10 md:mt-14">
            <img
              src={packaged.url}
              alt="Two bags of Seeker's Soil microgreens with a hand-stamped kraft card"
              loading="lazy"
              className="mx-auto aspect-[4/5] w-full max-w-2xl object-cover md:aspect-[16/11]"
            />
          </figure>
          <div className="mx-auto mt-10 max-w-2xl space-y-4 text-[1.02rem] leading-[1.8] text-ink/85 md:mt-14 md:text-[1.12rem]">
            <p>A tray of greens begins as a handful of seeds. Days later it becomes something capable of nourishing another person.</p>
            <p>Not because something was sold. But because something living was cared for from beginning to harvest.</p>
            <p className="font-serif italic text-ink/75">The harvest is not the destination. The process is.</p>
          </div>
        </div>
      </section>

      {/* STILL LEARNING */}
      <section>
        <div className="mx-auto max-w-3xl px-6 py-16 text-center md:py-24 lg:px-10">
          <p className="eyebrow mb-4">Seven</p>
          <h2 className="serif-display text-[1.9rem] tracking-[-0.005em] text-ink md:text-[2.75rem]">Still learning</h2>
          <div className="mx-auto mt-8 max-w-xl space-y-4 text-[1.02rem] leading-[1.8] text-ink/80 md:text-[1.12rem]">
            <p>Seeker's Soil is not a finished project. It is an ongoing conversation with the land.</p>
            <p>Some experiments succeed. Others fail. Both are welcome.</p>
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
