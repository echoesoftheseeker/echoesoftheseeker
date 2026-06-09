import { createFileRoute } from "@tanstack/react-router";
import { Page, PageHero, Section } from "@/components/site-layout";
import stayImg from "@/assets/stay.jpg";

export const Route = createFileRoute("/seekers-stay")({
  head: () => ({
    meta: [
      { title: "Seekers Stay — Echoes of the Seeker" },
      { name: "description", content: "Places that invite rest, reflection, and connection. Beginning with Sasha's Stay, Ashwem, Goa." },
      { property: "og:title", content: "Seekers Stay — Echoes of the Seeker" },
      { property: "og:description", content: "Hospitality, slowly." },
      { property: "og:image", content: stayImg },
    ],
  }),
  component: Stay,
});

function Stay() {
  return (
    <Page>
      <PageHero
        eyebrow="Seekers Stay"
        title="Places that invite rest."
        lede="An umbrella for present and future homes that the journey passes through. Not luxury — simplicity, nature, slower living, and meaningful travel."
      />

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <p className="eyebrow mb-4">Current property</p>
        <h2 className="serif-display text-5xl">Sasha's Stay <span className="text-ink/50">— Ashwem, Goa</span></h2>

        <div className="mt-10 grid gap-10 lg:grid-cols-[3fr_2fr]">
          <img src={stayImg} alt="Sasha's Stay at dusk" loading="lazy" className="aspect-[4/3] w-full object-cover" />
          <div className="space-y-6">
            <p className="text-ink/75">
              A quiet home a short walk from the sea, shaded by palms and held by silence. Built to be lived in slowly — long mornings, unhurried afternoons, evenings on the hammock.
            </p>
            <div className="rule" />
            <div>
              <p className="eyebrow mb-2">Accommodation</p>
              <ul className="space-y-1 text-ink/80">
                <li>Two private rooms · ensuite</li>
                <li>Shared verandah and garden</li>
                <li>Filtered water · simple kitchen</li>
                <li>5-minute walk to Ashwem beach</li>
              </ul>
            </div>
            <div>
              <p className="eyebrow mb-2">Story</p>
              <p className="text-ink/75">Sasha was a friend who loved the place. The stay carries her name — a small reminder that some places are meant to hold people gently.</p>
            </div>
            <a href="#book" className="inline-block rounded-full bg-ink px-6 py-3 text-xs uppercase tracking-[0.22em] text-paper hover:bg-forest">Booking inquiry</a>
          </div>
        </div>
      </section>

      <Section eyebrow="Focus" title="What every Seekers Stay holds in common.">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {["Simplicity", "Nature", "Rest", "Slower living", "Meaningful travel"].map((f) => (
            <li key={f} className="border-t-2 border-ink pt-4 font-serif text-2xl">{f}</li>
          ))}
        </ul>
      </Section>
    </Page>
  );
}
