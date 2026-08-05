import { createFileRoute } from "@tanstack/react-router";
import { Page, heroOverlay, heroPrimaryClass, heroSecondaryClass } from "@/components/site-layout";
import { MessageCircle } from "lucide-react";
import heroImg from "@/assets/bansuri-tree-hero.jpg.asset.json";
import treeImg from "@/assets/learning-tree.jpg.asset.json";
import cloudsImg from "@/assets/gallery-clouds.jpg.asset.json";
import detailImg from "@/assets/gallery-flute-detail.jpg.asset.json";

const WHATSAPP_URL =
  "https://wa.me/917027029889?text=Hi%2C%20I%27d%20like%20to%20learn%20the%20bansuri.%20Could%20you%20share%20timings%20and%20beginner%20flute%20guidance%3F";

export const Route = createFileRoute("/learn-bansuri")({
  head: () => ({
    meta: [
      { title: "Learn Bansuri — Echoes of the Seeker" },
      {
        name: "description",
        content:
          "Learn the bansuri through patient, step-by-step guidance. Online one-to-one lessons in breath, tone and simple melodies.",
      },
      { property: "og:title", content: "Learn Bansuri — Echoes of the Seeker" },
      { property: "og:description", content: "One breath at a time." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Learn,
});

const FOUNDATIONS = [
  { title: "Breath", body: "Working with breath rather than force." },
  { title: "Listening", body: "Sensitivity to sound, and to silence." },
  { title: "Presence", body: "A practice that rewards return, not intensity." },
] as const;

const APPROACH = [
  "Posture",
  "Breath",
  "Finger placement",
  "Tone",
  "Rhythm",
  "Simple melodies",
  "Daily practice",
] as const;

const WHO = [
  "Complete beginners",
  "Adults restarting music",
  "Anyone seeking a slower, mindful creative practice",
] as const;

const LESSONS = [
  "One-to-one online sessions",
  "Small offline sessions when available",
  "Flexible timings",
  "Personal guidance",
] as const;

const FAQS = [
  {
    q: "Do I need prior musical experience?",
    a: "No. Many sincere learners begin without any formal background. Patience and careful listening matter more.",
  },
  {
    q: "How often should I practise?",
    a: "A short daily practice is better than occasional intensity. Fifteen quiet minutes, offered consistently, is enough to begin.",
  },
  {
    q: "Can I learn online?",
    a: "Yes. With regular practice, online lessons work well. The focus stays on breath, posture, tone and consistency.",
  },
  {
    q: "How long does it take?",
    a: "It depends on how you show up. The measure is not speed, but how gently you keep returning to the instrument.",
  },
] as const;

function SectionHead({ index, title }: { index: string; title: string }) {
  return (
    <>
      <p className="eyebrow mb-6">{index}</p>
      <h2 className="serif-display text-[1.75rem] tracking-[-0.005em] text-ink md:text-[2.5rem]">{title}</h2>
    </>
  );
}

function Learn() {
  return (
    <Page>
      {/* 1 — HERO */}
      <section className="relative h-[92svh] min-h-[600px] w-full overflow-hidden border-b border-rule/70">
        <img
          src={heroImg.url}
          alt="Akash seated cross-legged beneath a tree, playing the bansuri in the open air"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-[50%_35%]"
        />
        <div className={heroOverlay} />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/70 to-transparent" />
        <div className="relative z-10 mx-auto flex h-full max-w-3xl flex-col items-center justify-end px-6 pb-16 text-center lg:px-10 lg:pb-24">
          <p className="eyebrow text-paper/75">Learn Bansuri</p>
          <h1
            className="serif-display mt-5 text-[2.25rem] tracking-[-0.005em] text-paper sm:text-[2.75rem] md:text-5xl lg:text-[3.75rem]"
            style={{ textShadow: "0 1px 24px rgba(0,0,0,0.5)" }}
          >
            Learn Bansuri
          </h1>
          <p
            className="mt-5 font-serif text-[1.05rem] italic text-paper/90 md:text-[1.25rem]"
            style={{ textShadow: "0 1px 18px rgba(0,0,0,0.55)" }}
          >
            One breath at a time.
          </p>
          <p
            className="mt-5 max-w-xl text-[1rem] leading-[1.8] text-paper/88 md:text-[1.08rem]"
            style={{ textShadow: "0 1px 18px rgba(0,0,0,0.5)" }}
          >
            Learn the bansuri through patient, step-by-step guidance — whether you are holding the
            instrument for the first time or returning after years.
          </p>
          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
            <a href="#learning" className={heroPrimaryClass}>
              Begin Learning
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={heroSecondaryClass}>
              <MessageCircle size={16} strokeWidth={1.6} />
              Message on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* 2 — WHY */}
      <section className="border-b border-rule/70">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20 lg:px-10 lg:py-24">
          <SectionHead index="One" title="Why learn bansuri" />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {FOUNDATIONS.map((item, i) => (
              <article key={item.title} className="border-t border-rule/70 pt-5">
                <p className="font-serif text-sm text-ink/45">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 font-serif text-[1.5rem] text-ink">{item.title}</h3>
                <p className="mt-3 text-[1rem] leading-[1.8] text-ink/78">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3 — ABOUT ME */}
      <section className="border-b border-rule/70">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20 lg:px-10 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <figure>
              <img
                src={treeImg.url}
                alt="A bansuri player practising beneath a wide tree"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </figure>
            <div className="lg:self-center">
              <SectionHead index="Two" title="About me" />
              <div className="mt-8 space-y-5 text-[1.05rem] leading-[1.85] text-ink/85 md:text-[1.12rem]">
                <p>My name is Akash. I continue to learn, practise and share the bansuri.</p>
                <p>
                  What I offer comes from practice, mistakes and a long love for the instrument —
                  not from claiming to have arrived anywhere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 — APPROACH */}
      <section className="border-b border-rule/70 bg-secondary/30">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20 lg:px-10 lg:py-24">
          <SectionHead index="Three" title="Learning approach" />
          <p className="mt-6 max-w-xl text-[1.02rem] leading-[1.8] text-ink/78">
            Lessons move gradually, at each student's own pace.
          </p>
          <ul className="mt-10 grid grid-cols-2 gap-x-8 gap-y-3 md:grid-cols-4">
            {APPROACH.map((item) => (
              <li key={item} className="border-b border-rule/60 pb-3 font-serif text-[1.02rem] text-ink/85">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5 — WHO */}
      <section className="border-b border-rule/70">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20 lg:px-10 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <SectionHead index="Four" title="Who this is for" />
              <ul className="mt-10 space-y-4">
                {WHO.map((item) => (
                  <li
                    key={item}
                    className="border-b border-rule/60 pb-4 text-[1.05rem] leading-[1.7] text-ink/82"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <figure className="lg:self-end">
              <img
                src={detailImg.url}
                alt="Close detail of a handcrafted bansuri resting in the grass"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* 6 — ONLINE LESSONS */}
      <section id="learning" className="border-b border-rule/70">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20 lg:px-10 lg:py-24">
          <SectionHead index="Five" title="Online lessons" />
          <ul className="mt-10 grid gap-x-10 gap-y-3 sm:grid-cols-2">
            {LESSONS.map((item) => (
              <li key={item} className="border-b border-rule/60 pb-3 text-[1.02rem] text-ink/82">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 7 — BANSURI RECOMMENDATIONS */}
      <section className="border-b border-rule/70">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-20 lg:px-10 lg:py-24">
          <SectionHead index="Six" title="Choosing your first bansuri" />
          <p className="mt-8 text-[1.05rem] leading-[1.85] text-ink/82 md:text-[1.12rem]">
            Before lessons begin, I help you choose a beginner flute that suits your comfort and hand
            size — one that feels supportive rather than discouraging.
          </p>
        </div>
      </section>

      {/* 8 — FAQ */}
      <section className="border-b border-rule/70">
        <div className="mx-auto max-w-4xl px-6 py-16 md:py-20 lg:px-10 lg:py-24">
          <SectionHead index="Seven" title="Frequent questions" />
          <dl className="mt-10 divide-y divide-rule/70">
            {FAQS.map((item) => (
              <div key={item.q} className="grid gap-4 py-6 md:grid-cols-[0.95fr_1.35fr] md:gap-8">
                <dt className="font-serif text-[1.3rem] leading-[1.35] text-ink">{item.q}</dt>
                <dd className="text-[1rem] leading-[1.8] text-ink/78">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 9 — CTA */}
      <section className="relative overflow-hidden">
        <img
          src={cloudsImg.url}
          alt="Clouds rolling over a quiet mountain at dawn"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className={heroOverlay} />
        <div className="relative z-10 mx-auto max-w-3xl px-6 py-24 text-center md:py-28 lg:px-10 lg:py-32">
          <h2
            className="serif-display text-[1.9rem] text-paper md:text-[2.75rem]"
            style={{ textShadow: "0 1px 24px rgba(0,0,0,0.5)" }}
          >
            If the bansuri has been calling you, I'd be happy to help you begin.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[1.02rem] leading-[1.8] text-paper/88 md:text-[1.1rem]">
            Message me on WhatsApp to discuss timings, beginner flutes and upcoming sessions.
          </p>
          <div className="mt-10 flex justify-center">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={heroPrimaryClass}>
              <MessageCircle size={16} strokeWidth={1.6} />
              Message on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </Page>
  );
}
