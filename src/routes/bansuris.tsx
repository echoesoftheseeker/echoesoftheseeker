import { createFileRoute } from "@tanstack/react-router";
import { Page, PageHero, Section } from "@/components/site-layout";
import bansurisImg from "@/assets/bansuris.jpg";

export const Route = createFileRoute("/bansuris")({
  head: () => ({
    meta: [
      { title: "Bansuris — Echoes of the Seeker" },
      { name: "description", content: "Carefully selected and personally checked bansuris. Inquiry-based only." },
      { property: "og:title", content: "Bansuris — Echoes of the Seeker" },
      { property: "og:description", content: "Every bansuri has its own voice." },
      { property: "og:image", content: bansurisImg },
    ],
  }),
  component: Bansuris,
});

const CHECKS = [
  "Tonal Quality",
  "Tuning",
  "Playability",
  "Overall Condition",
  "Suitability for the student",
];

function Bansuris() {
  return (
    <Page>
      <PageHero
        eyebrow="Bansuris"
        title="Every bansuri has its own voice."
        lede="This is not a store. It's a careful, slow recommendation — instrument by instrument — based on conversation with the student."
      />

      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-10">
        <img src={bansurisImg} alt="Bansuri flutes on a wooden table" loading="lazy" className="aspect-[16/10] w-full object-cover" />
      </section>

      <Section eyebrow="Categories" title="By stage of journey.">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { t: "Beginner Bansuris", d: "Comfortable to hold, forgiving on breath. Bamboo that builds confidence." },
            { t: "Intermediate Bansuris", d: "Greater range and tonal nuance for students moving into ragas." },
            { t: "Recommended Keys", d: "Suggested keys based on your hand size, breath capacity, and intended use." },
          ].map((c) => (
            <div key={c.t} className="border-t-2 border-ink pt-5">
              <h3 className="font-serif text-2xl">{c.t}</h3>
              <p className="mt-2 text-ink/75">{c.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="border-t border-rule/70 bg-secondary/40">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-10">
          <p className="eyebrow mb-4">Personal Quality Check</p>
          <h2 className="serif-display text-3xl md:text-4xl">Before any bansuri leaves my hands.</h2>
          <p className="mt-4 max-w-2xl text-ink/75">Before recommending or sending a bansuri, I personally check:</p>
          <ul className="mt-8 grid gap-3 md:grid-cols-2">
            {CHECKS.map((c) => (
              <li key={c} className="flex items-center gap-3 border-b border-rule/70 py-3">
                <span className="font-serif text-xl text-bamboo">✓</span>
                <span className="text-ink/80">{c}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 italic text-ink/70">I only recommend instruments I would feel comfortable practicing with myself.</p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-24 lg:px-10">
        <p className="eyebrow mb-4">Inquiry</p>
        <h2 className="serif-display text-4xl">Find your bansuri.</h2>
        <form className="mt-10 grid gap-6" onSubmit={(e) => e.preventDefault()}>
          {[
            ["Name", "text"],
            ["WhatsApp", "tel"],
            ["Experience Level", "text"],
            ["Preferred Key", "text"],
          ].map(([l, t]) => (
            <label key={l} className="block">
              <span className="eyebrow">{l}</span>
              <input type={t} className="mt-2 w-full border-b border-ink/30 bg-transparent py-3 outline-none focus:border-bamboo" />
            </label>
          ))}
          <label className="block">
            <span className="eyebrow">Message</span>
            <textarea rows={5} className="mt-2 w-full border-b border-ink/30 bg-transparent py-3 outline-none focus:border-bamboo" />
          </label>
          <button className="self-start rounded-full bg-ink px-6 py-3 text-xs uppercase tracking-[0.22em] text-paper hover:bg-forest">Send inquiry</button>
        </form>
      </section>
    </Page>
  );
}
