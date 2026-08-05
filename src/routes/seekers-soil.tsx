import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, Check } from "lucide-react";
import { Page } from "@/components/site-layout";
import hero from "@/assets/soil/IMG_20260616_100131.jpg.asset.json";
import seedTray from "@/assets/soil/IMG_20260607_084113.jpg.asset.json";
import germination from "@/assets/soil/IMG_20260607_084158.jpg.asset.json";
import youngSprouts from "@/assets/soil/IMG_20260607_230604.jpg.asset.json";
import canopyYoung from "@/assets/soil/IMG_20260607_171010.jpg.asset.json";
import canopyTop from "@/assets/soil/IMG_20260610_105004.jpg.asset.json";
import matureTray from "@/assets/soil/IMG_20260616_100135.jpg.asset.json";
import rootMat from "@/assets/soil/IMG_20260612_083112.jpg.asset.json";
import harvest from "@/assets/soil/IMG_20260610_104931.jpg.asset.json";
import packaged from "@/assets/soil/IMG_20260611_184000.jpg.asset.json";
import shelves from "@/assets/soil/IMG_20260609_190110.jpg.asset.json";

const WA_ORDER =
  "https://wa.me/917027029889?text=Hi%2C%20I%27d%20like%20to%20order%20fresh%20microgreens%20from%20Seeker%27s%20Soil.";
const WA_WORKSHOP =
  "https://wa.me/917027029889?text=Hi%2C%20I%27d%20like%20to%20join%20the%20Learn%20to%20Grow%20microgreens%20workshop.";
const WA_EXPERIENCE =
  "https://wa.me/917027029889?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20the%20growing%20experiences%20at%20Seekers%20Stay.";

export const Route = createFileRoute("/seekers-soil")({
  head: () => ({
    meta: [
      { title: "Seeker's Soil — Microgreens Grown in Goa" },
      {
        name: "description",
        content:
          "A visual journal of growing microgreens in Goa — fresh weekly harvests, beginner workshops, and slow living experiences at Seekers Stay.",
      },
      { property: "og:title", content: "Seeker's Soil — Microgreens Grown in Goa" },
      { property: "og:description", content: "Fresh harvests, workshops, and slow living experiences." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: hero.url },
      { name: "twitter:image", content: hero.url },
    ],
  }),
  component: Soil,
});

const SEQUENCE = [
  { src: seedTray.url, alt: "Seeds beginning to split open across a tray of dark soil", c: "Seed — a tray of nothing, apparently." },
  { src: germination.url, alt: "Sunflower seeds cracking open with pale shoots emerging", c: "Germination — the first pale hooks." },
  { src: youngSprouts.url, alt: "Young sunflower sprouts with yellow leaves reaching upward", c: "Young sprouts — reaching before they green." },
  { src: canopyYoung.url, alt: "A healthy green canopy of young microgreens in a tray", c: "Canopy — colour arrives all at once." },
  { src: matureTray.url, alt: "Dense mature tray of microgreens under grow light", c: "Mature — dense, ready, still growing." },
  { src: canopyTop.url, alt: "Dense green canopy of microgreens seen from above", c: "Above — the tray closes over itself." },
  { src: rootMat.url, alt: "Root mat of a microgreens tray viewed from underneath", c: "Beneath — the part no one sees." },
  { src: harvest.url, alt: "A freshly harvested tray of microgreens held in hand", c: "Harvest — cut the morning it is eaten." },
] as const;

const LESSONS = [
  { t: "Patience", d: "Growth cannot be rushed." },
  { t: "Attention", d: "Small changes matter." },
  { t: "Consistency", d: "Tiny daily actions shape outcomes." },
  { t: "Humility", d: "Nature rarely follows our plans." },
] as const;

const WORKSHOP_LEARN = [
  "Selecting seeds",
  "Preparing trays",
  "Sowing",
  "Lighting",
  "Watering",
  "Harvesting",
  "Troubleshooting",
] as const;

const EXPERIENCES = [
  "Learn the basics of growing microgreens",
  "Sow and care for your own trays",
  "Harvest and enjoy what you grow",
  "Introductory Bansuri experience",
  "Slow mornings around gardening, music and mindful living",
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
          alt="Garnet red radish microgreens flourishing under the grow light"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ filter: "saturate(0.92) contrast(1.02) sepia(0.06)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/40 to-ink/80" />
        <div className="relative z-10 mx-auto flex min-h-[80svh] max-w-5xl items-end px-6 py-14 lg:px-10 lg:py-24">
          <div className="max-w-2xl text-paper">
            <p className="eyebrow text-paper/70">Seeker's Soil</p>
            <h1 className="serif-display mt-4 text-[2.6rem] leading-[1.05] md:text-[4.5rem]">Learning from the land.</h1>
            <p className="mt-6 max-w-xl text-[1.02rem] leading-[1.8] text-paper/90 md:text-[1.12rem]">
              Microgreens grown slowly in Goa. Seed to harvest, documented.
            </p>
          </div>
        </div>
      </section>

      {/* THE SEQUENCE */}
      <section className="border-b border-rule/70">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-20 lg:px-10 lg:py-24">
          <p className="eyebrow mb-4">One</p>
          <h2 className="serif-display text-[1.75rem] tracking-[-0.005em] text-ink md:text-[2.5rem]">Seed to harvest</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 md:mt-14 md:grid-cols-4 md:gap-6">
            {SEQUENCE.map((s) => (
              <figure key={s.src}>
                <button type="button" onClick={() => setLightbox(s.src)} className="group block w-full overflow-hidden">
                  <img
                    src={s.src}
                    alt={s.alt}
                    loading="lazy"
                    className="aspect-[3/4] w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
                  />
                </button>
                <figcaption className="mt-3 font-serif text-[0.9rem] italic text-ink/65">{s.c}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* GROWING SHELVES */}
      <section className="border-b border-rule/70">
        <img
          src={shelves.url}
          alt="The indoor growing shelves lined with trays under grow lights"
          loading="lazy"
          className="h-[52svh] w-full object-cover md:h-[74svh]"
        />
        <div className="mx-auto max-w-3xl px-6 py-12 text-center md:py-16 lg:px-10">
          <p className="eyebrow mb-4">The growing space</p>
          <p className="font-serif text-[1.25rem] leading-[1.6] text-ink md:text-[1.5rem]">
            A single rack in a corner of the house — three shelves, a few lights, enough to learn almost everything.
          </p>
        </div>
      </section>

      {/* WHAT THE SOIL TEACHES */}
      <section className="border-b border-rule/70 bg-secondary/30">
        <div className="mx-auto max-w-4xl px-6 py-12 md:py-16 lg:px-10">
          <p className="eyebrow mb-4">Two</p>
          <h2 className="serif-display text-[1.75rem] tracking-[-0.005em] text-ink md:text-[2.5rem]">What the soil teaches</h2>
          <dl className="mt-8 divide-y divide-rule/70">
            {LESSONS.map((l) => (
              <div key={l.t} className="grid gap-1 py-4 md:grid-cols-[0.6fr_1.4fr] md:gap-8">
                <dt className="font-serif text-[1.2rem] text-ink md:text-[1.3rem]">{l.t}</dt>
                <dd className="text-[0.96rem] leading-[1.7] text-ink/75">{l.d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* FRESH MICROGREENS */}
      <section className="border-b border-rule/70">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-2 md:items-center md:py-20 lg:px-10">
          <figure>
            <img
              src={packaged.url}
              alt="Two bags of Seeker's Soil microgreens with a hand-stamped kraft card"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover md:aspect-[4/3]"
            />
          </figure>
          <div>
            <p className="eyebrow mb-4">Three</p>
            <h2 className="serif-display text-[1.75rem] tracking-[-0.005em] text-ink md:text-[2.4rem]">Fresh microgreens</h2>
            <div className="mt-5 space-y-2 text-[1rem] leading-[1.8] text-ink/80">
              <p>Fresh weekly harvests grown in Goa.</p>
              <p>Limited seasonal batches.</p>
            </div>
            <PrimaryLink href={WA_ORDER}>Order Fresh Microgreens</PrimaryLink>
          </div>
        </div>
      </section>

      {/* WORKSHOP */}
      <section className="border-b border-rule/70 bg-secondary/30">
        <div className="mx-auto max-w-5xl px-6 py-14 md:py-20 lg:px-10">
          <p className="eyebrow mb-4">Four</p>
          <h2 className="serif-display text-[1.75rem] tracking-[-0.005em] text-ink md:text-[2.4rem]">Learn to Grow workshop</h2>
          <p className="mt-5 max-w-xl text-[1rem] leading-[1.8] text-ink/80">
            A beginner-friendly, hands-on introduction to growing microgreens.
          </p>
          <p className="mt-4 font-serif text-[1.05rem] italic text-ink/70">2–3 hours · Starting from ₹1,499</p>
          <div className="mt-8 grid gap-8 md:grid-cols-2 md:gap-12">
            <div>
              <p className="mb-3 font-serif text-[0.95rem] text-ink">You learn</p>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-[0.9rem] leading-[1.5] text-ink/80">
                {WORKSHOP_LEARN.map((w) => (
                  <li key={w} className="flex items-start gap-2">
                    <Check size={13} strokeWidth={2} className="mt-1 shrink-0 text-bamboo" />
                    <span className="min-w-0">{w}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-3 font-serif text-[0.95rem] text-ink">You take home</p>
              <ul className="space-y-1.5 text-[0.9rem] leading-[1.5] text-ink/80">
                {["One growing tray", "One starter seed pack"].map((w) => (
                  <li key={w} className="flex items-start gap-2">
                    <Check size={13} strokeWidth={2} className="mt-1 shrink-0 text-bamboo" />
                    <span className="min-w-0">{w}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <PrimaryLink href={WA_WORKSHOP}>Join a Workshop</PrimaryLink>
        </div>
      </section>

      {/* EXPERIENCES AT SEEKERS STAY */}
      <section className="border-b border-rule/70">
        <div className="mx-auto max-w-5xl px-6 py-14 md:py-20 lg:px-10">
          <p className="eyebrow mb-4">Five</p>
          <h2 className="serif-display text-[1.75rem] tracking-[-0.005em] text-ink md:text-[2.4rem]">
            Growing experiences at Seekers Stay
          </h2>
          <p className="mt-5 max-w-2xl text-[1rem] leading-[1.8] text-ink/80">
            Guests staying at Seekers Stay can choose from a few slow living experiences depending on the season and
            availability.
          </p>
          <ul className="mt-8 grid gap-x-10 gap-y-2 text-[0.95rem] leading-[1.6] text-ink/80 md:grid-cols-2">
            {EXPERIENCES.map((e) => (
              <li key={e} className="flex items-start gap-2">
                <Check size={13} strokeWidth={2} className="mt-1.5 shrink-0 text-bamboo" />
                <span className="min-w-0">{e}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 font-serif text-[1.05rem] italic text-ink/70">
            5–7 days during the stay · Starting from ₹2,500
          </p>
          <div className="mt-6 grid gap-x-10 gap-y-2 text-[0.95rem] leading-[1.6] text-ink/80 md:grid-cols-2">
            <div>
              <p className="mb-2 font-serif text-[0.95rem] text-ink">Guests receive</p>
              <ul className="space-y-1.5">
                {["Two to three growing trays", "Two to three varieties of seeds"].map((g) => (
                  <li key={g} className="flex items-start gap-2">
                    <Check size={13} strokeWidth={2} className="mt-1.5 shrink-0 text-bamboo" />
                    <span className="min-w-0">{g}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="font-serif text-[0.95rem] italic leading-[1.7] text-ink/65">
              Seeds, trays and growing supplies can also be purchased afterwards by anyone wishing to continue growing at
              home.
            </p>
          </div>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-8">
            <Link
              to="/seekers-stay"
              className="inline-flex w-fit items-center gap-2 border border-forest/70 bg-forest/95 px-6 py-3 font-serif text-[0.95rem] text-paper transition-colors duration-300 hover:bg-forest"
            >
              Stay at Seekers Stay
            </Link>
            <a
              href={WA_EXPERIENCE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 border-b border-ink/25 pb-1 font-serif text-[0.95rem] text-ink transition-colors duration-300 hover:border-bamboo hover:text-forest"
            >
              <MessageCircle size={15} strokeWidth={1.6} />
              Enquire About Experiences
            </a>
          </div>
        </div>
      </section>

      {/* STILL LEARNING */}
      <section>
        <div className="mx-auto max-w-3xl px-6 py-12 text-center md:py-16 lg:px-10">
          <p className="font-serif text-[1.15rem] italic leading-[1.7] text-ink/75 md:text-[1.35rem]">
            Seeker's Soil is not a finished project. Some experiments succeed, others fail. Both are welcome.
          </p>
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

function PrimaryLink({ href, children }: { href: string; children: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-8 inline-flex w-fit items-center gap-2 border border-forest/70 bg-forest/95 px-6 py-3 font-serif text-[0.95rem] text-paper transition-colors duration-300 hover:bg-forest"
    >
      <MessageCircle size={15} strokeWidth={1.6} />
      {children}
    </a>
  );
}
