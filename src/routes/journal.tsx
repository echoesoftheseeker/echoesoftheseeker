import { createFileRoute } from "@tanstack/react-router";
import { Page, PageHero } from "@/components/site-layout";
import journalImg from "@/assets/journal.jpg";

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: "Journal — Echoes of the Seeker" },
      { name: "description", content: "Field notes, essays, and reflections from the path." },
      { property: "og:title", content: "Journal — Echoes of the Seeker" },
      { property: "og:description", content: "Reflections, observations, essays, and field notes." },
      { property: "og:image", content: journalImg },
    ],
  }),
  component: Journal,
});

const FIELD_NOTES = [
  { date: "Goa · Today", title: "A heron stood in the paddy field at dawn", body: "It didn't move for the longest time. Then it did. That was the whole lesson." },
  { date: "Practice · This week", title: "Returning to the same raga, again", body: "Each time the same scale opens a different door. The notes are unchanged. I am not." },
  { date: "Walk · Yesterday", title: "Mango leaves, the colour of old paper", body: "Pressed between two pages of the notebook. A way of remembering without writing." },
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

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-10">
        <div className="mb-12 flex items-baseline justify-between">
          <h2 className="serif-display text-3xl md:text-4xl">Field Notes</h2>
          <p className="eyebrow">Short reflections</p>
        </div>
        <div className="grid gap-10 md:grid-cols-3">
          {FIELD_NOTES.map((n) => (
            <article key={n.title} className="group">
              <p className="eyebrow mb-3">{n.date}</p>
              <h3 className="font-serif text-xl text-ink md:text-2xl">{n.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">{n.body}</p>
              <div className="rule mt-6" />
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-rule/70 bg-secondary/40">
        <div className="mx-auto max-w-5xl px-6 py-20 lg:px-10">
          <div className="mb-12 flex items-baseline justify-between">
            <h2 className="serif-display text-3xl md:text-4xl">Essays</h2>
            <p className="eyebrow">Long-form reflections</p>
          </div>
          <div className="space-y-12">
            {ESSAYS.map((e) => (
              <article key={e.title} className="grid gap-4 border-b border-rule/60 pb-12 md:grid-cols-[1fr_2fr] md:gap-12">
                <div>
                  <p className="eyebrow">{e.read}</p>
                </div>
                <div>
                  <h3 className="font-serif text-3xl text-ink md:text-4xl">{e.title}</h3>
                  <p className="mt-4 max-w-2xl text-ink/75">{e.body}</p>
                  <span className="mt-4 inline-block text-xs uppercase tracking-[0.22em] text-bamboo">Read essay →</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Page>
  );
}
