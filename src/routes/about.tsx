import { createFileRoute } from "@tanstack/react-router";
import { Page, PageHero } from "@/components/site-layout";
import aboutImg from "@/assets/about.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Echoes of the Seeker" },
      { name: "description", content: "Not a resume — a journey. The story behind Echoes of the Seeker." },
      { property: "og:title", content: "About — Echoes of the Seeker" },
      { property: "og:description", content: "A practice of listening — to sound, to nature, to life itself." },
      { property: "og:image", content: aboutImg },
    ],
  }),
  component: About,
});

const TIMELINE = [
  { year: "2024", body: "Started learning bansuri." },
  { year: "2025", body: "Deepened practice and began teaching." },
  { year: "2026", body: "Goa chapter. Building Echoes of the Seeker. Developing Seekers Soil, Seekers Stay, and the book." },
  { year: "2027", body: "Planned book launch." },
];

const THEMES = ["Slow learning", "Nature as teacher", "Stewardship", "Simplicity", "Curiosity", "Attention", "Practice"];

function About() {
  return (
    <Page>
      <PageHero
        eyebrow="About — a journey page"
        title="My name is Akash."
        lede="What began as learning the bansuri gradually became a practice of listening — to sound, to nature, and to life itself. Echoes of the Seeker is a living record of that journey."
      />
      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-10">
        <img src={aboutImg} alt="A figure playing bansuri at sea" loading="lazy" className="w-full object-cover" />
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24 lg:px-10">
        <p className="eyebrow mb-8">Timeline</p>
        <ol className="space-y-10 border-l border-rule/70 pl-8">
          {TIMELINE.map((t) => (
            <li key={t.year} className="relative">
              <span className="absolute -left-[2.45rem] top-2 h-2 w-2 rounded-full bg-bamboo" />
              <p className="font-serif text-3xl text-ink">{t.year}</p>
              <p className="mt-2 max-w-2xl text-ink/75">{t.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t border-rule/70 bg-secondary/40">
        <div className="mx-auto max-w-5xl px-6 py-24 lg:px-10">
          <p className="eyebrow mb-6">Themes being explored</p>
          <ul className="flex flex-wrap gap-3">
            {THEMES.map((t) => (
              <li key={t} className="rounded-full border border-ink/30 px-5 py-2 text-sm text-ink/80">{t}</li>
            ))}
          </ul>
        </div>
      </section>
    </Page>
  );
}
