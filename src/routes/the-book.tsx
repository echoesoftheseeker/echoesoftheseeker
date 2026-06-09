import { createFileRoute } from "@tanstack/react-router";
import { Page, PageHero, Section } from "@/components/site-layout";
import bookImg from "@/assets/book.jpg";

export const Route = createFileRoute("/the-book")({
  head: () => ({
    meta: [
      { title: "The Book — Echoes of the Seeker" },
      { name: "description", content: "A long-form exploration of journey, learning, nature, Goa, practice, and inner exploration. Launch April 2027." },
      { property: "og:title", content: "The Book — Echoes of the Seeker" },
      { property: "og:description", content: "Target launch — April 2027." },
      { property: "og:image", content: bookImg },
    ],
  }),
  component: Book,
});

function Book() {
  return (
    <Page>
      <PageHero
        eyebrow="The Book · Target launch April 2027"
        title="A long, slow letter to the journey."
        lede="A book about learning the bansuri, learning from the land, and learning how to be in a place. Written one notebook at a time."
      />

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2">
          <img src={bookImg} alt="A stack of notebooks" loading="lazy" className="aspect-[4/5] w-full object-cover" />
          <div className="space-y-6">
            <p className="eyebrow">About the Book</p>
            <h2 className="serif-display text-4xl">Themes</h2>
            <ul className="grid grid-cols-2 gap-3 text-ink/80">
              {["Journey", "Learning", "Nature", "Goa", "Practice", "Reflection", "Inner exploration"].map((t) => (
                <li key={t} className="border-l-2 border-bamboo pl-4 font-serif text-xl">{t}</li>
              ))}
            </ul>
            <p className="text-ink/75">It isn't a guide. It isn't a memoir, exactly. It's the long shape of a few years of trying to live with attention.</p>
          </div>
        </div>
      </section>

      <Section eyebrow="Progress Updates" title="Where the writing is.">
        <ol className="space-y-8 border-l border-rule/70 pl-8">
          {[
            { d: "Spring 2026", t: "Outline complete. Three sample chapters drafted." },
            { d: "Summer 2026", t: "First read-throughs with a small circle of readers." },
            { d: "Winter 2026", t: "Final manuscript and design begins." },
            { d: "April 2027", t: "Launch." },
          ].map((s) => (
            <li key={s.d} className="relative">
              <span className="absolute -left-[2.45rem] top-2 h-2 w-2 rounded-full bg-bamboo" />
              <p className="eyebrow">{s.d}</p>
              <p className="mt-1 font-serif text-2xl text-ink">{s.t}</p>
            </li>
          ))}
        </ol>
      </Section>

      <section className="border-t border-rule/70 bg-secondary/40">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-10">
          <p className="eyebrow mb-4">Sample Excerpt</p>
          <blockquote className="serif-display space-y-5 text-2xl italic text-ink/90 md:text-3xl">
            <p>"The bansuri taught me the most useful thing I know about silence —</p>
            <p className="not-italic">that it isn't empty. It's listening."</p>
          </blockquote>
        </div>
      </section>
    </Page>
  );
}
