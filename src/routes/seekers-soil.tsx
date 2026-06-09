import { createFileRoute } from "@tanstack/react-router";
import { Page, PageHero, Section } from "@/components/site-layout";
import soilImg from "@/assets/soil.jpg";

export const Route = createFileRoute("/seekers-soil")({
  head: () => ({
    meta: [
      { title: "Seekers Soil — Echoes of the Seeker" },
      { name: "description", content: "Growing food, learning from the land, exploring self-reliance and regenerative practices." },
      { property: "og:title", content: "Seekers Soil — Echoes of the Seeker" },
      { property: "og:description", content: "A place to document learning from the land." },
      { property: "og:image", content: soilImg },
    ],
  }),
  component: Soil,
});

const TOPICS = [
  { t: "Microgreens", d: "Trays, seeds, light, water — small worlds in a windowsill." },
  { t: "Food growing", d: "What grows in Goa, when, and how the soil teaches back." },
  { t: "Self-reliance", d: "Modest steps toward feeding ourselves from a few meters of land." },
  { t: "Regenerative practices", d: "Compost, cover, observation — patient methods that give more than they take." },
  { t: "Experiments", d: "Things that worked, things that didn't, and the notebooks that recorded both." },
  { t: "Observations", d: "Field notes from the garden — weather, insects, soil texture, surprises." },
];

function Soil() {
  return (
    <Page>
      <PageHero
        eyebrow="Seekers Soil"
        title="Learning from the land."
        lede="A quiet, ongoing study of food, soil, and the practices of growing some of what we eat. Future expansion is possible — for now, an open notebook."
      />

      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-10">
        <img src={soilImg} alt="Trays of microgreens" loading="lazy" className="aspect-[16/10] w-full object-cover" />
      </section>

      <Section eyebrow="Topics" title="What's being explored.">
        <div className="grid gap-x-10 gap-y-12 md:grid-cols-2">
          {TOPICS.map((t, i) => (
            <div key={t.t} className="border-t border-rule/70 pt-6">
              <p className="eyebrow">No. {String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-2 font-serif text-2xl">{t.t}</h3>
              <p className="mt-2 text-ink/75">{t.d}</p>
            </div>
          ))}
        </div>
      </Section>
    </Page>
  );
}
