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
    caption: "Rih Dil · Myanmar\nMarch 2025",
    body: "Water held quietly between hills.\n\nStanding there, there was nothing to add to it.\n\nOnly the strange feeling that sometimes looking is enough.",
  },
  {
    img: pilgrimageAsset.url,
    alt: "A wrapped figure with a walking staff standing above a sea of clouds at first light",
    title: "Pilgrimage I",
    caption: "Velliangiri Hills · Coimbatore",
    body: "The climb ended somewhere above the weather.\n\nCold, quiet, and worth every hour of the dark.\n\nSome journeys are difficult to explain once they are over.",
  },
];

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
              <img src={n.img} alt={n.alt} loading="lazy" className="h-auto w-full" />
              {n.caption && <p className="eyebrow mt-5 mb-2 whitespace-pre-line leading-relaxed">{n.caption}</p>}
              <h3 className="font-serif text-[1.2rem] leading-snug text-ink md:text-[1.35rem]">{n.title}</h3>
              <p className="mt-3 max-w-prose whitespace-pre-line text-[0.95rem] leading-[1.75] text-ink/70">{n.body}</p>
            </article>
          ))}
        </div>
      </section>


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
                  <Link to="/journal/$slug" params={{ slug: essay.slug }} className="eyebrow mt-5 inline-block text-bamboo transition-colors hover:text-forest">Read essay →</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Page>
  );
}
