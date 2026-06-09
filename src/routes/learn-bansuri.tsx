import { createFileRoute } from "@tanstack/react-router";
import { Page, PageHero, Section } from "@/components/site-layout";
import learnImg from "@/assets/learn.jpg";

export const Route = createFileRoute("/learn-bansuri")({
  head: () => ({
    meta: [
      { title: "Learn Bansuri — Echoes of the Seeker" },
      { name: "description", content: "Group and private bansuri classes, free resources, and slow-learning pathways." },
      { property: "og:title", content: "Learn Bansuri — Echoes of the Seeker" },
      { property: "og:description", content: "Learning, teaching, and sharing the bansuri." },
      { property: "og:image", content: learnImg },
    ],
  }),
  component: Learn,
});

const FAQS = [
  { q: "Do I need any musical background?", a: "No. Many students arrive having never held an instrument. The bansuri is patient." },
  { q: "Which bansuri should I start with?", a: "A medium-length bamboo flute in a comfortable key. I'll help you find one — see the Bansuris page." },
  { q: "How much practice is needed?", a: "Twenty unhurried minutes a day, most days, will take you remarkably far." },
];

function Learn() {
  return (
    <Page>
      <PageHero
        eyebrow="Learn Bansuri"
        title="The slow art of learning to listen."
        lede="Bansuri study is less a curriculum than a long walk. Group classes, private classes, and a growing library of free resources for anyone beginning the path."
      />

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2">
          <img src={learnImg} alt="Hands learning bansuri" loading="lazy" className="aspect-[4/5] w-full object-cover" />
          <div className="space-y-10">
            <div>
              <p className="eyebrow mb-3">Group Classes</p>
              <h3 className="font-serif text-3xl">Walk together.</h3>
              <p className="mt-3 text-ink/75">Small online cohorts that meet weekly. We build foundation — breath, tone, the first ragas — at a pace that respects life outside the lesson.</p>
            </div>
            <div className="rule" />
            <div>
              <p className="eyebrow mb-3">Private Classes</p>
              <h3 className="font-serif text-3xl">Walk closely.</h3>
              <p className="mt-3 text-ink/75">One-to-one sessions for students who want focused attention on tone, technique, repertoire, or returning to practice after a long pause.</p>
            </div>
          </div>
        </div>
      </section>

      <Section eyebrow="Free Resources" title="A small library, growing.">
        <ul className="grid gap-4 md:grid-cols-2">
          {[
            { t: "Beginner guides", d: "Choosing your first bansuri, posture, and breath." },
            { t: "Practice tips", d: "Building a 20-minute daily practice you'll actually keep." },
            { t: "Foundational lessons", d: "Tone production, finger placement, and the first scale." },
            { t: "Recommended pathways", d: "A suggested route through the first year of study." },
          ].map((r) => (
            <li key={r.t} className="border-l-2 border-bamboo pl-5">
              <p className="font-serif text-xl">{r.t}</p>
              <p className="mt-1 text-sm text-ink/70">{r.d}</p>
            </li>
          ))}
        </ul>
      </Section>

      <section className="border-t border-rule/70 bg-secondary/40">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-10">
          <p className="eyebrow mb-6">FAQ</p>
          <dl className="divide-y divide-rule/70">
            {FAQS.map((f) => (
              <div key={f.q} className="grid gap-3 py-6 md:grid-cols-[1fr_2fr]">
                <dt className="font-serif text-xl text-ink">{f.q}</dt>
                <dd className="text-ink/75">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <InquiryForm />
    </Page>
  );
}

function InquiryForm() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24 lg:px-10">
      <p className="eyebrow mb-4">Inquiry</p>
      <h2 className="serif-display text-4xl">Begin a conversation.</h2>
      <p className="mt-3 text-ink/70">Tell me a little about where you are, and I'll write back personally.</p>
      <form className="mt-10 grid gap-6" onSubmit={(e) => e.preventDefault()}>
        {[
          { l: "Name", t: "text" },
          { l: "Email", t: "email" },
          { l: "Where you are in your practice", t: "text" },
        ].map((f) => (
          <label key={f.l} className="block">
            <span className="eyebrow">{f.l}</span>
            <input type={f.t} className="mt-2 w-full border-b border-ink/30 bg-transparent py-3 outline-none focus:border-bamboo" />
          </label>
        ))}
        <label className="block">
          <span className="eyebrow">Message</span>
          <textarea rows={5} className="mt-2 w-full border-b border-ink/30 bg-transparent py-3 outline-none focus:border-bamboo" />
        </label>
        <button className="self-start rounded-full bg-ink px-6 py-3 text-xs uppercase tracking-[0.22em] text-paper hover:bg-forest">Send inquiry</button>
      </form>
    </section>
  );
}
