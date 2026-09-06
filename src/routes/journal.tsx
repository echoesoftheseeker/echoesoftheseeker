import { createFileRoute } from "@tanstack/react-router";
import { Page, PageHero } from "@/components/site-layout";
import journalAsset from "@/assets/journal-desk.jpg.asset.json";
import walkAsset from "@/assets/journal/journal-walk.jpg.asset.json";
import driftwoodAsset from "@/assets/journal/journal-driftwood.jpg.asset.json";
import potteryAsset from "@/assets/journal/journal-pottery.jpg.asset.json";
import lookingOutAsset from "@/assets/journal/journal-looking-out.jpg.asset.json";
import pilgrimageAsset from "@/assets/journal/journal-pilgrimage.jpg.asset.json";
const journalImg = journalAsset.url;

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: "Journal — Echoes of the Seeker" },
      { name: "description", content: "A visual field journal — photographs, field notes, essays and reflections from the path." },
      { property: "og:title", content: "Journal — Echoes of the Seeker" },
      { property: "og:description", content: "Photographs, reflections, observations, essays, and field notes." },
      { property: "og:image", content: journalImg },
    ],
  }),
  component: Journal,
});

const FIELD_NOTES = [
  {
    img: walkAsset.url,
    alt: "A figure walking along the wet edge of a beach at low sun, a line of footprints behind him",
    position: "object-[50%_45%]",
    title: "The Walk",
    caption: "Ashwem",
    body: "Most mornings begin this way. The footprints stay for a while, then the sea takes them back.",
  },
  {
    img: driftwoodAsset.url,
    alt: "A large piece of bleached driftwood lying on wet sand with the sea behind it",
    position: "object-[50%_55%]",
    title: "Things the Sea Leaves Behind",
    caption: "Ashwem",
    body: "Driftwood, arriving from somewhere with no name. Shaped entirely by what it passed through.",
  },
  {
    img: potteryAsset.url,
    alt: "Sitting at a potter's wheel, hands wet with clay, mountains and sky through the window",
    position: "object-[55%_40%]",
    title: "Learning With the Hands",
    caption: "At the wheel",
    body: "The clay answers only to attention. Too much force and it leaves the centre. Too little and nothing rises.",
  },
  {
    img: lookingOutAsset.url,
    alt: "Standing on a rock ledge looking out over a lake surrounded by dry hills",
    position: "object-[50%_45%]",
    title: "Looking Out",
    caption: "March 2025",
    body: "Water held quietly between hills. Standing there, there was nothing to add to it.",
  },
  {
    img: pilgrimageAsset.url,
    alt: "A wrapped figure with a walking staff standing above a sea of clouds at first light",
    position: "object-[45%_50%]",
    title: "Pilgrimage I",
    caption: "Above the clouds",
    body: "The climb ended somewhere above the weather. Cold, quiet, and worth every hour of the dark.",
  },
];

const ESSAYS = [
  { title: "On Listening as a Practice", read: "8 min read", body: "Music begins long before sound. It begins in attention. A note about how a single tone, held over weeks, has changed the way I notice the wind, footsteps, and silence between sentences." },
  { title: "What the Land Has Been Teaching Me", read: "12 min read", body: "Microgreens, monsoon, and the slow argument with control. Notes from a year of stepping toward food I could grow myself." },
  { title: "Goa, Slowly", read: "10 min read", body: "Not the Goa of postcards. The Goa of an old well, a neighbour's mango, and afternoons too hot for anything but the bansuri." },
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
        <div className="grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {FIELD_NOTES.map((n) => (
            <article key={n.title} className="flex flex-col">
              <div className="overflow-hidden bg-secondary">
                <img
                  src={n.img}
                  alt={n.alt}
                  loading="lazy"
                  className={`aspect-[4/5] w-full object-cover ${n.position}`}
                />
              </div>
              <p className="eyebrow mt-5 mb-2">{n.caption}</p>
              <h3 className="font-serif text-[1.2rem] leading-snug text-ink md:text-[1.35rem]">{n.title}</h3>
              <p className="mt-3 max-w-prose text-[0.95rem] leading-[1.75] text-ink/70">{n.body}</p>
            </article>
          ))}
        </div>
      </section>


      <section className="border-t border-rule/70 bg-secondary/40">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20 lg:px-10 lg:py-24">
          <div className="mb-10 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between md:mb-12">
            <h2 className="serif-display text-[1.65rem] tracking-[-0.005em] text-ink md:text-[2.25rem]">Essays</h2>
            <p className="eyebrow">Long-form reflections</p>
          </div>
          <div className="space-y-10 md:space-y-12">
            {ESSAYS.map((e) => (
              <article
                key={e.title}
                className="grid gap-3 border-b border-rule/60 pb-10 last:border-b-0 last:pb-0 md:grid-cols-[1fr_2fr] md:gap-12 md:pb-12"
              >
                <div className="md:pt-2">
                  <p className="eyebrow">{e.read}</p>
                </div>
                <div>
                  <h3 className="font-serif text-[1.5rem] leading-tight text-ink md:text-[2rem]">{e.title}</h3>
                  <p className="mt-4 max-w-[62ch] text-[1rem] leading-[1.8] text-ink/75 md:text-[1.05rem]">{e.body}</p>
                  <span className="mt-5 inline-block text-xs uppercase tracking-[0.22em] text-bamboo">Read essay →</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Page>
  );
}
