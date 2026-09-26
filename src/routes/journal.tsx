import { createFileRoute, Link } from "@tanstack/react-router";
import { Page, PageHero } from "@/components/site-layout";
import { JOURNAL_ESSAYS } from "@/lib/journal-essays";
import journalAsset from "@/assets/journal-desk.jpg.asset.json";
import walkAsset from "@/assets/journal/journal-walk.jpg.asset.json";
import driftwoodAsset from "@/assets/journal/journal-driftwood.jpg.asset.json";
import potteryAsset from "@/assets/journal/journal-pottery.jpg.asset.json";
import lookingOutAsset from "@/assets/journal/journal-looking-out.jpg.asset.json";
import pilgrimageAsset from "@/assets/journal/journal-pilgrimage.jpg.asset.json";
import afterRainAsset from "@/assets/journal/journal-after-rain.jpg.asset.json";
import roadsAsset from "@/assets/journal/roads-ive-ridden.png.asset.json";
const journalImg = journalAsset.url;

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: "Journal — Echoes of the Seeker" },
      { name: "description", content: "A visual field journal — photographs, field notes, essays and reflections from the path." },
      { property: "og:title", content: "Journal — Echoes of the Seeker" },
      { property: "og:description", content: "Photographs, reflections, observations, essays, and field notes." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Journal,
});

const FIELD_NOTES = [
  {
    img: walkAsset.url,
    alt: "A figure walking along the wet edge of a beach at low sun, a line of footprints behind him",
    title: "The Walk",
    caption: "Alleppey · Kerala",
    body: "Most mornings begin this way.\n\nThere is something about walking without needing to arrive anywhere.\n\nThe sea keeps erasing the evidence behind me.\n\nPerhaps that is part of the practice too — moving forward without needing the path to remain.",
  },
  {
    img: afterRainAsset.url,
    alt: "Raindrops on a window, palm trees and the sea beyond, sun low through a grey sky",
    title: "After Rain",
    caption: "",
    body: "The rain left as suddenly as it came. Everything stood wet and shining, and the sea went back to being the sea.",
  },
  {
    img: driftwoodAsset.url,
    alt: "A large piece of bleached driftwood lying on wet sand with the sea behind it",
    title: "Things the Sea Leaves Behind",
    caption: "",
    body: "Driftwood, arriving from somewhere with no name.\n\nShaped entirely by what it passed through.\n\nI sometimes wonder if people are not so different.",
  },
  {
    img: potteryAsset.url,
    alt: "Sitting at a potter's wheel, hands wet with clay, mountains and sky through the window",
    title: "Learning With the Hands",
    caption: "Shillaru · Shimla",
    body: "The clay answers only to attention.\n\nToo much force and it leaves the centre.\n\nToo little and nothing rises.\n\nThere are things the hands understand before the mind does.",
  },
  {
    img: lookingOutAsset.url,
    alt: "Standing on a rock ledge looking out over a lake surrounded by dry hills",
    title: "Looking Out",
    caption: "Reh Dil Lake · Myanmar\nMarch 2025",
    body: "Water held quietly between hills.\n\nStanding there, there was nothing to add to it.\n\nOnly the strange feeling that sometimes looking is enough.",
  },
  {
    img: pilgrimageAsset.url,
    alt: "A wrapped figure with a walking staff standing above a sea of clouds at first light",
    title: "Pilgrimage I",
    caption: "Velliangiri Hills · Coimbatore",
    body: "The climb ended somewhere above the weather.\n\nCold, quiet, and worth every hour of the dark.\n\nSome journeys are difficult to explain once they are over.",
  },
  {
    img: "",
    alt: "",
    title: "Pilgrimage II",
    caption: "Gurgaon → Goa · by motorcycle\n2026",
    body: "More than 3,000 km alone on the V-Strom, from Gurgaon down to Goa.\n\nMaheshwar, then Omkareshwar. Ellora, then Grishneshwar. Trimbakeshwar. Bhimashankar. Then the long descent through Amboli towards the sea.\n\nFive Jyotirlingas along the way — Mahakaleshwar at Ujjain, Omkareshwar, Grishneshwar near Ellora, Trimbakeshwar near Nashik, and Bhimashankar.\n\nThe temples were the reason for leaving.\n\nThe road in between was where most of the pilgrimage happened.",
  },
];

// Paste the genuine manuscript passage here (Surya Kund / Krishna tune). Section stays hidden while empty.
const BOOK_EXCERPT: string[] = [];

function Journal() {
  return (
    <Page>
      <PageHero
        eyebrow="The Journal"
        title="The heart of the website."
        lede="Everything eventually feeds into the Journal. Some entries are small — a moment in a field, a line overheard. Others stretch into longer essays, future book excerpts, or letters to no one in particular."
      />

      <section className="mx-auto max-w-5xl px-6 py-16 md:py-20 lg:px-10 lg:py-24">
        <div className="mb-10 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between md:mb-12">
          <h2 className="serif-display text-[1.65rem] tracking-[-0.005em] text-ink md:text-[2.25rem]">Field Notes</h2>
          <p className="eyebrow">Photographs & short reflections</p>
        </div>
        <div className="grid items-start gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {FIELD_NOTES.map((n) => (
            <article key={n.title} className="flex flex-col">
              {n.img ? <img src={n.img} alt={n.alt} loading="lazy" className="h-auto w-full" /> : <div className="h-px w-10 bg-bamboo/70" aria-hidden />}
              {n.caption && <p className="eyebrow mt-3 mb-1.5 whitespace-pre-line leading-relaxed sm:mt-5 sm:mb-2">{n.caption}</p>}
              <h3 className={`font-serif text-[1.2rem] leading-snug text-ink md:text-[1.35rem] ${n.caption ? "" : "mt-3 sm:mt-5"}`}>{n.title}</h3>
              <p className="mt-3 max-w-prose whitespace-pre-line text-[0.95rem] leading-[1.75] text-ink/70">{n.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-rule/70">
        <div className="mx-auto max-w-2xl px-6 pt-16 md:pt-20 lg:px-10 lg:pt-24">
          <p className="eyebrow">The Traveller</p>
          <div className="mt-6 space-y-5 text-[1.02rem] leading-[1.85] text-ink/80 md:text-[1.1rem]">
            <p className="font-serif text-[1.35rem] leading-snug text-ink md:text-[1.6rem]">
              I have always understood places through the road that leads to them.
            </p>
            <p>Some journeys were on motorcycles. Some by car. Some began with a flight and continued on a rented bike or a local road.</p>
            <p>I've crossed mountains, forests, deserts and coastlines. I've travelled towards temples, lakes, villages and borders. Sometimes I was looking for a place. Sometimes I was simply looking for what the journey might change in me.</p>
            <p>I don't think of myself as a traveller who collects destinations.</p>
            <p className="font-serif italic text-ink/75">I think of travel as another way of paying attention.</p>
          </div>
        </div>
        <figure className="mx-auto max-w-7xl px-3 py-14 sm:px-6 md:py-20 lg:px-10 lg:py-24">
          <img
            src={roadsAsset.url}
            alt="The Roads I've Ridden — Akash seated beside his motorcycle on a Ladakh road, with a map of journeys across India and Myanmar"
            loading="lazy"
            className="h-auto w-full"
          />
        </figure>
      </section>
      {BOOK_EXCERPT.length > 0 && (
        <section className="border-t border-rule/70">
          <div className="mx-auto max-w-2xl px-6 py-16 md:py-20 lg:px-10 lg:py-24">
            <p className="eyebrow">From the Book</p>
            <p className="mt-3 font-serif text-[1.1rem] italic text-ink/65">A manuscript still being lived.</p>
            <div className="mt-8 space-y-5 font-serif text-[1.15rem] leading-[1.8] text-ink/80 md:text-[1.3rem]">
              {BOOK_EXCERPT.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <Link to="/the-book" className="eyebrow mt-8 inline-block text-bamboo transition-colors hover:text-forest">Read more about the book →</Link>
          </div>
        </section>
      )}

      <section className="border-t border-rule/70 bg-secondary/40">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20 lg:px-10 lg:py-24">
          <div className="mb-10 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between md:mb-12">
            <h2 className="serif-display text-[1.65rem] tracking-[-0.005em] text-ink md:text-[2.25rem]">Essays</h2>
            <p className="eyebrow">Longer reflections from the journey</p>
          </div>
          <div className="space-y-10 md:space-y-12">
            {JOURNAL_ESSAYS.map((essay) => (
              <article
                key={essay.slug}
                className="grid gap-3 border-b border-rule/60 pb-10 last:border-b-0 last:pb-0 md:grid-cols-[1fr_2fr] md:gap-12 md:pb-12"
              >
                <div className="md:pt-2">
                  <p className="eyebrow">{essay.category}</p>
                </div>
                <div>
                  <h3 className="font-serif text-[1.5rem] leading-tight text-ink md:text-[2rem]">{essay.title}</h3>
                  <p className="mt-4 max-w-[62ch] text-[1rem] leading-[1.8] text-ink/75 md:text-[1.05rem]">{essay.excerpt}</p>
                  <Link to="/essays/$slug" params={{ slug: essay.slug }} className="eyebrow mt-5 inline-block text-bamboo transition-colors hover:text-forest">Read essay →</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-rule/70">
        <div className="mx-auto max-w-xl px-6 py-16 text-center md:py-20 lg:px-10 lg:py-24">
          <p className="eyebrow">The Seeker Letter</p>
          <p className="mt-4 font-serif text-[1.5rem] leading-snug text-ink md:text-[1.9rem]">A quiet letter from the road.</p>
          <p className="mt-4 text-[0.98rem] leading-[1.75] text-ink/70">Occasional notes on music, travel, nature, practice, and the things I'm still learning.</p>
          <form className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-end" onSubmit={(e) => e.preventDefault()}>
            <label className="flex-1 text-left">
              <span className="sr-only">Your email address</span>
              <input type="email" required placeholder="Your email address" className="w-full border-b border-ink/30 bg-transparent py-3 outline-none placeholder:text-ink/40 focus:border-bamboo" />
            </label>
            <button className="rounded-full bg-ink px-6 py-3 text-xs uppercase tracking-[0.22em] text-paper transition-colors hover:bg-forest">Join the Seeker Letter →</button>
          </form>
        </div>
      </section>
    </Page>
  );
}
