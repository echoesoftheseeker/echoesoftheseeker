import { createFileRoute } from "@tanstack/react-router";
import { Page, PageHero } from "@/components/site-layout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Echoes of the Seeker" },
      { name: "description", content: "Write a personal note. I read everything that arrives." },
      { property: "og:title", content: "Contact — Echoes of the Seeker" },
      { property: "og:description", content: "Simple and personal." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <Page>
      <PageHero eyebrow="Contact" title="A note, simply written." lede="The best way to reach me is to write. I read everything that arrives, and reply personally." />
      <section className="mx-auto grid max-w-5xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-10">
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          {[["Name", "text"], ["Email", "email"]].map(([l, t]) => (
            <label key={l} className="block">
              <span className="eyebrow">{l}</span>
              <input type={t} className="mt-2 w-full border-b border-ink/30 bg-transparent py-3 outline-none focus:border-bamboo" />
            </label>
          ))}
          <label className="block">
            <span className="eyebrow">Message</span>
            <textarea rows={6} className="mt-2 w-full border-b border-ink/30 bg-transparent py-3 outline-none focus:border-bamboo" />
          </label>
          <button className="rounded-full bg-ink px-6 py-3 text-xs uppercase tracking-[0.22em] text-paper hover:bg-forest">Send</button>
        </form>
        <aside className="space-y-8 border-l border-rule/70 pl-10">
          <div>
            <p className="eyebrow mb-2">Email</p>
            <a href="mailto:hello@echoesoftheseeker.com" className="font-serif text-2xl text-ink hover:text-bamboo">hello@echoesoftheseeker.com</a>
          </div>
          <div>
            <p className="eyebrow mb-2">Instagram</p>
            <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="font-serif text-2xl text-ink hover:text-bamboo">@echoesoftheseeker</a>
          </div>
          <div>
            <p className="eyebrow mb-2">Where</p>
            <p className="font-serif text-2xl">Ashwem · Goa · India</p>
          </div>
        </aside>
      </section>
    </Page>
  );
}
