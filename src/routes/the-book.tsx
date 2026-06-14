import { createFileRoute, Link } from "@tanstack/react-router";
import { Page } from "@/components/site-layout";

export const Route = createFileRoute("/the-book")({
  head: () => ({
    meta: [
      { title: "The Book — Echoes of the Seeker" },
      { name: "description", content: "A manuscript still being lived. Notes from a journey through seeking, simplicity, music, travel, and ordinary days." },
      { property: "og:title", content: "The Book — Echoes of the Seeker" },
      { property: "og:description", content: "A manuscript still being lived." },
    ],
  }),
  component: Book,
});

const THEMES = [
  {
    title: "Seeking",
    body: "The quiet pull that moves a life sideways. Not toward answers, but toward better questions.",
  },
  {
    title: "Simplicity",
    body: "What remains after the noise is set down. A few clothes, a flute, a notebook, a slow morning.",
  },
  {
    title: "Music",
    body: "The bansuri as a teacher of breath and attention. Sound as a way of being honest.",
  },
  {
    title: "Travel",
    body: "Not as escape, but as listening. The way an unfamiliar place can return you to yourself.",
  },
  {
    title: "Inner Growth",
    body: "The slow, unglamorous work of unlearning. The years that pass between a question and its answer.",
  },
  {
    title: "Alternative Ways of Living",
    body: "Small experiments in soil, shelter, work, and time. Quiet refusals of the default life.",
  },
];

const NOTES = [
  "Sometimes the road forward appears only after walking.",
  "Not every lesson arrives as wisdom. Some arrive as embarrassment.",
  "The flute taught patience long before it taught music.",
];

const TIMELINE = ["Beginning", "Journeys", "Experiments", "Lessons", "Manuscript", "Book"];

function Book() {
  return (
    <Page>
      {/* Section 1 — Hero */}
      <section className="border-b border-rule/70">
        <div className="mx-auto max-w-3xl px-6 py-28 text-center lg:px-10 lg:py-40">
          <p className="eyebrow mb-8">The Book</p>
          <h1 className="serif-display text-6xl text-ink md:text-8xl">The Book</h1>
          <p className="mt-10 font-serif text-xl italic text-ink/65 md:text-2xl">
            A manuscript still being lived.
          </p>
        </div>
      </section>

      {/* Section 2 — Current Status */}
      <section className="mx-auto max-w-2xl px-6 py-24 lg:px-10 lg:py-32">
        <p className="eyebrow mb-6">Where It Stands</p>
        <div className="space-y-5 font-serif text-lg leading-relaxed text-ink/80 md:text-xl">
          <p>This is not yet a finished book.</p>
          <p>
            It is being written through journeys, conversations, mistakes, silences, music, soil,
            and the ordinary days in between.
          </p>
          <p>Some pages already exist.</p>
          <p>Many are still being lived.</p>
        </div>
      </section>

      {/* Section 3 — Themes */}
      <section className="border-t border-rule/70">
        <div className="mx-auto max-w-5xl px-6 py-24 lg:px-10 lg:py-32">
          <p className="eyebrow mb-6">What It Explores</p>
          <h2 className="serif-display text-4xl text-ink md:text-5xl">What The Book Explores</h2>
          <div className="mt-16 grid gap-x-12 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {THEMES.map((t) => (
              <div key={t.title}>
                <p className="serif-display text-2xl text-ink">{t.title}</p>
                <div className="mt-3 h-px w-10 bg-bamboo/70" />
                <p className="mt-4 text-ink/70 leading-relaxed">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — A Few Notes */}
      <section className="border-t border-rule/70 bg-secondary/40">
        <div className="mx-auto max-w-3xl px-6 py-24 lg:px-10 lg:py-32">
          <p className="eyebrow mb-10 text-center">A Few Notes</p>
          <div className="space-y-16 text-center">
            {NOTES.map((n, i) => (
              <p key={i} className="serif-display text-2xl italic text-ink/85 md:text-3xl leading-snug">
                {n}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Why Write It */}
      <section className="mx-auto max-w-2xl px-6 py-24 lg:px-10 lg:py-32">
        <p className="eyebrow mb-6">Why It Exists</p>
        <h2 className="serif-display text-4xl text-ink md:text-5xl">Why This Book Exists</h2>
        <div className="mt-10 space-y-5 font-serif text-lg leading-relaxed text-ink/80 md:text-xl">
          <p>
            This book is not written to teach. It is not written to preach. It does not claim a
            method or a doctrine.
          </p>
          <p>
            It exists because a life was lived with attention, and some of what was noticed asked
            to be written down.
          </p>
          <p>
            If anything here is useful, it will be useful in the quiet way a window is useful —
            simply by letting some light in.
          </p>
        </div>
      </section>

      {/* Section 6 — Timeline */}
      <section className="border-t border-rule/70">
        <div className="mx-auto max-w-xl px-6 py-24 text-center lg:px-10 lg:py-32">
          <p className="eyebrow mb-12">The Arc</p>
          <ol className="space-y-6">
            {TIMELINE.map((step, i) => (
              <li key={step}>
                <p className="serif-display text-2xl text-ink md:text-3xl">{step}</p>
                {i < TIMELINE.length - 1 && (
                  <div className="mx-auto mt-6 h-10 w-px bg-ink/25" aria-hidden />
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Section 7 — Join The Journey */}
      <section className="border-t border-rule/70 bg-secondary/40">
        <div className="mx-auto max-w-2xl px-6 py-24 text-center lg:px-10 lg:py-32">
          <p className="eyebrow mb-6">Follow The Journey</p>
          <h2 className="serif-display text-4xl text-ink md:text-5xl">Follow The Journey</h2>
          <p className="mt-8 font-serif text-lg leading-relaxed text-ink/75 md:text-xl">
            If you would like to witness the book before it becomes a book, the seeker letter is
            where fragments appear first.
          </p>
          <div className="mt-12">
            <Link
              to="/seeker-letter"
              className="inline-block rounded-full bg-ink px-7 py-3 font-serif text-[0.82rem] text-paper hover:bg-forest transition-colors"
            >
              Read The Seeker Letter
            </Link>
          </div>
        </div>
      </section>
    </Page>
  );
}
