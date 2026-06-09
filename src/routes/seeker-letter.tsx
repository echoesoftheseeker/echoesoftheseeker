import { createFileRoute } from "@tanstack/react-router";
import { Page, PageHero } from "@/components/site-layout";

export const Route = createFileRoute("/seeker-letter")({
  head: () => ({
    meta: [
      { title: "Seeker Letter — Echoes of the Seeker" },
      { name: "description", content: "Occasional reflections, journey updates, book progress, bansuri insights, and notes from the path." },
      { property: "og:title", content: "Seeker Letter" },
      { property: "og:description", content: "Notes from the path, into your inbox." },
    ],
  }),
  component: Letter,
});

function Letter() {
  return (
    <Page>
      <PageHero
        eyebrow="Seeker Letter"
        title="Notes from the path."
        lede="Occasional reflections, journey updates, book progress, bansuri insights, and notes from the path. Sent when there is something worth saying."
      />
      <section className="mx-auto max-w-2xl px-6 py-20 lg:px-10">
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <label className="block">
            <span className="eyebrow">Your name</span>
            <input type="text" className="mt-2 w-full border-b border-ink/30 bg-transparent py-3 outline-none focus:border-bamboo" />
          </label>
          <label className="block">
            <span className="eyebrow">Email</span>
            <input type="email" required className="mt-2 w-full border-b border-ink/30 bg-transparent py-3 outline-none focus:border-bamboo" />
          </label>
          <button className="rounded-full bg-ink px-6 py-3 text-xs uppercase tracking-[0.22em] text-paper hover:bg-forest">Subscribe</button>
          <p className="text-[0.72rem] text-ink/55">No noise. Unsubscribe anytime.</p>
        </form>
      </section>
    </Page>
  );
}
