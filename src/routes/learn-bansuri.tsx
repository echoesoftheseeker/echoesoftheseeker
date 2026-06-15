import { createFileRoute, Link } from "@tanstack/react-router";
import { Page } from "@/components/site-layout";
import heroImg from "@/assets/bansuri-bag.jpg.asset.json";
import treeImg from "@/assets/learning-tree.jpg.asset.json";
import cloudsImg from "@/assets/gallery-clouds.jpg.asset.json";
import detailImg from "@/assets/gallery-flute-detail.jpg.asset.json";

export const Route = createFileRoute("/learn-bansuri")({
  head: () => ({
    meta: [
      { title: "Learn Bansuri — Echoes of the Seeker" },
      {
        name: "description",
        content: "A contemplative pathway into bansuri practice through breath, listening, and presence.",
      },
      { property: "og:title", content: "Learn Bansuri — Echoes of the Seeker" },
      { property: "og:description", content: "One breath at a time." },
      { property: "og:image", content: heroImg.url },
    ],
  }),
  component: Learn,
});

const FOUNDATIONS = [
  {
    title: "Breath",
    body: "Learning to work with breath rather than force.",
  },
  {
    title: "Listening",
    body: "Developing sensitivity to sound and silence.",
  },
  {
    title: "Presence",
    body: "A practice that rewards consistency rather than intensity.",
  },
] as const;

const WHO = [
  "Complete beginners",
  "Adults starting later in life",
  "Spiritual seekers",
  "Nature lovers",
  "Those wanting a mindful practice",
  "People looking for depth instead of speed",
] as const;

const OPTIONS = [
  {
    title: "Group Learning",
    points: ["Small batches.", "Personal attention.", "Community learning."],
  },
  {
    title: "One to One",
    points: ["Personal guidance.", "Flexible pacing.", "Individual support."],
  },
] as const;

const FAQS = [
  {
    q: "How long does it take to learn?",
    a: "It depends on how you show up. The bansuri responds to steady practice more than speed, so the real measure is not how fast you progress, but how gently you return to it.",
  },
  {
    q: "Do I need prior musical experience?",
    a: "No. Many sincere learners begin without any formal background. What matters most is patience, curiosity, and a willingness to listen carefully.",
  },
  {
    q: "Can I learn online?",
    a: "Yes. With careful guidance and regular practice, online learning can be deeply effective. The focus remains on breath, posture, tone, and consistency.",
  },
  {
    q: "Which bansuri should I start with?",
    a: "That depends on your comfort, hand size, and where you are beginning from. I can help you choose a flute that feels supportive rather than discouraging.",
  },
  {
    q: "How often should I practice?",
    a: "A short daily practice is better than occasional intensity. Even fifteen to twenty quiet minutes, offered consistently, can begin to change the relationship.",
  },
] as const;

function Learn() {
  return (
    <Page>
      <section className="relative min-h-[88svh] overflow-hidden border-b border-rule/70">
        <img src={heroImg.url} alt="A handcrafted bansuri resting on its bag before a green field and misty hill" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/48 via-ink/28 to-ink/72" />
        <div className="relative z-10 mx-auto flex min-h-[88svh] max-w-5xl items-end px-6 py-16 lg:px-10 lg:py-24">
          <div className="max-w-2xl text-paper">
            <p className="eyebrow text-paper/70">Learn Bansuri</p>
            <h1 className="serif-display mt-5 text-[2.8rem] md:text-[4.5rem]">Learn Bansuri</h1>
            <p className="mt-4 font-serif text-[1.25rem] italic text-paper/88 md:text-[1.5rem]">One breath at a time.</p>
            <div className="mt-8 max-w-xl space-y-4 text-[1.05rem] leading-[1.8] text-paper/88 md:text-[1.1rem]">
              <p>The bansuri is more than an instrument.</p>
              <p>It teaches patience, attention, listening, and presence.</p>
            </div>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#learning-options"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-paper px-6 py-3 font-serif text-sm text-ink transition-colors hover:bg-secondary"
              >
                Begin the Journey
              </a>
              <Link
                to="/contact"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-paper/45 px-6 py-3 font-serif text-sm text-paper transition-colors hover:border-paper hover:bg-paper/10"
              >
                Message Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-rule/70">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20 lg:px-10 lg:py-24">
          <div className="max-w-2xl">
            <p className="eyebrow mb-6">One</p>
            <h2 className="serif-display text-[1.75rem] tracking-[-0.005em] text-ink md:text-[2.5rem]">Why Learn Bansuri</h2>
          </div>
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

      <section className="border-b border-rule/70">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20 lg:px-10 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-18">
            <figure>
              <img src={riverImg.url} alt="A quiet moment with a bansuri beside still water" loading="lazy" className="aspect-[4/5] w-full object-cover" />
            </figure>
            <div className="lg:self-center">
              <p className="eyebrow mb-6">Two</p>
              <h2 className="serif-display text-[1.75rem] tracking-[-0.005em] text-ink md:text-[2.5rem]">My Approach</h2>
              <div className="mt-8 space-y-5 text-[1.05rem] leading-[1.85] text-ink/85 md:text-[1.12rem]">
                <p>I am not a traditional guru or conservatory teacher.</p>
                <p>My approach is simple:</p>
                <div className="space-y-2 font-serif text-[1.3rem] text-ink md:text-[1.55rem]">
                  <p>Learn slowly.</p>
                  <p>Learn correctly.</p>
                  <p>Learn consistently.</p>
                </div>
                <p>The goal is not performance.</p>
                <p>The goal is relationship.</p>
                <p>Relationship with breath.</p>
                <p>Relationship with sound.</p>
                <p>Relationship with oneself.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-rule/70 bg-secondary/30">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20 lg:px-10 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <p className="eyebrow mb-6">Three</p>
              <h2 className="serif-display text-[1.75rem] tracking-[-0.005em] text-ink md:text-[2.5rem]">Who This Is For</h2>
              <ul className="mt-10 grid gap-4 md:grid-cols-2">
                {WHO.map((item) => (
                  <li key={item} className="flex items-start gap-3 border-b border-rule/60 pb-4 text-[1rem] leading-[1.7] text-ink/80">
                    <span className="font-serif text-lg text-bamboo">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <figure className="lg:self-end">
              <img src={detailImg.url} alt="Close detail of a handcrafted bansuri resting in the grass" loading="lazy" className="aspect-[4/5] w-full object-cover" />
            </figure>
          </div>
        </div>
      </section>

      <section id="learning-options" className="border-b border-rule/70">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20 lg:px-10 lg:py-24">
          <p className="eyebrow mb-6">Four</p>
          <h2 className="serif-display text-[1.75rem] tracking-[-0.005em] text-ink md:text-[2.5rem]">Learning Options</h2>
          <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-12">
            {OPTIONS.map((option) => (
              <article key={option.title} className="border-t border-rule/70 pt-6">
                <h3 className="font-serif text-[1.55rem] text-ink">{option.title}</h3>
                <ul className="mt-6 space-y-3 text-[1rem] leading-[1.75] text-ink/80">
                  {option.points.map((point) => (
                    <li key={point}>— {point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-rule/70">
        <div className="mx-auto max-w-4xl px-6 py-16 md:py-20 lg:px-10 lg:py-24">
          <p className="eyebrow mb-6">Five</p>
          <h2 className="serif-display text-[1.75rem] tracking-[-0.005em] text-ink md:text-[2.5rem]">Frequent Questions</h2>
          <dl className="mt-10 divide-y divide-rule/70">
            {FAQS.map((item) => (
              <div key={item.q} className="grid gap-4 py-6 md:grid-cols-[0.95fr_1.35fr] md:gap-8">
                <dt className="font-serif text-[1.35rem] leading-[1.35] text-ink">{item.q}</dt>
                <dd className="text-[1rem] leading-[1.8] text-ink/78">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <img src={cloudsImg.url} alt="Clouds rolling over a quiet mountain at dawn" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/62 via-ink/44 to-ink/74" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center md:py-28 lg:px-10 lg:py-32">
          <p className="eyebrow text-paper/70">Six</p>
          <h2 className="serif-display mt-6 text-[2rem] text-paper md:text-[3rem]">Every journey begins with a single note.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-[1.05rem] leading-[1.8] text-paper/86 md:text-[1.15rem]">
            If the sound of the bansuri calls to you, begin where you are.
          </p>
          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-paper px-7 py-3 font-serif text-sm text-ink transition-colors hover:bg-secondary"
            >
              Start Learning
            </Link>
          </div>
        </div>
      </section>
    </Page>
  );
}

