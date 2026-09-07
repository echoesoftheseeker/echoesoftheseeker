import { createFileRoute } from "@tanstack/react-router";
import { Page } from "@/components/site-layout";
import heroAsset from "@/assets/about/about-playing-tree.jpg.asset.json";
import fluteAsset from "@/assets/about/about-flute-detail.jpg.asset.json";
import seatedAsset from "@/assets/about/about-seated-bansuri.jpg.asset.json";
import goaAsset from "@/assets/about/about-goa-landscape.jpg.asset.json";
import belongingsAsset from "@/assets/about/about-packed-belongings.jpg.asset.json";
import duskAsset from "@/assets/about/about-dusk-view.jpg.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Echoes of the Seeker" },
      { name: "description", content: "A life being explored through music, land, place, and practice." },
      { property: "og:title", content: "About the Seeker — Echoes of the Seeker" },
      { property: "og:description", content: "A visual autobiography through music, travel, practice, and an unfinished life in Goa." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: About,
});

const LESSONS = [
  { title: "Practice", body: "Showing up before I feel ready." },
  { title: "Nature", body: "Learning to observe before trying to control." },
  { title: "Stewardship", body: "Building things that can give something back." },
  { title: "Freedom", body: "Taking responsibility for the life I choose." },
  { title: "Attention", body: "Learning to listen — to music, to people, to places, and to myself." },
] as const;

function About() {
  return (
    <Page>
      <section className="border-b border-rule/70">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20 lg:px-10 lg:py-24">
          <p className="eyebrow">About the Seeker</p>
          <h1 className="serif-display mt-6 text-5xl text-ink md:text-7xl">I'm still becoming.</h1>
          <div className="mt-8 max-w-2xl space-y-4 text-[1.05rem] leading-[1.8] text-ink/80 md:text-[1.15rem]">
            <p>I began learning the Bansuri in 2024.</p>
            <p>Since then, the path has taken me through music, travel, an Ashram, the mountains, the sea, soil, work, failure, and eventually Goa.</p>
            <p>I don't have a finished philosophy to offer.</p>
            <p>I'm documenting what I'm learning while I'm still learning it.</p>
            <p className="font-serif text-[1.25rem] italic text-ink">That is what Echoes of the Seeker is.</p>
          </div>
          <figure className="mx-auto mt-12 max-w-4xl md:mt-16">
            <img src={heroAsset.url} alt="Akash sitting cross-legged beneath a large tree, playing the Bansuri with a mountain behind him" className="h-auto w-full" />
          </figure>
        </div>
      </section>

      <section className="border-b border-rule/70">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20 lg:px-10 lg:py-24">
          <p className="eyebrow mb-10">My Journey</p>
          <div className="grid items-start gap-10 md:grid-cols-[minmax(0,1fr)_minmax(260px,0.72fr)] md:gap-16">
            <div>
              <p className="eyebrow mb-4">2024</p>
              <h2 className="serif-display text-3xl text-ink md:text-5xl">The First Sound</h2>
              <div className="mt-7 space-y-5 text-[1.05rem] leading-[1.85] text-ink/80">
                <p>I began learning the Bansuri almost by accident.</p>
                <p>At first it was simply an instrument I wanted to understand. But somewhere along the way, playing stopped being something I was learning and became a form of practice.</p>
                <p>During my time at the Ashram, the flute became sadhana. I played under trees, in rain, in spaces where nobody was listening for a performance. Eventually, I began teaching someone who was only a few steps behind me.</p>
                <p>That was the first real echo of the Seeker.</p>
                <p>The journey had begun.</p>
              </div>
            </div>
            <img src={fluteAsset.url} alt="Akash's name inscribed on his Bansuri as it rests across his lap" loading="lazy" className="h-auto w-full md:max-w-sm md:justify-self-end" />
          </div>
        </div>
      </section>

      <section className="border-b border-rule/70">
        <div className="mx-auto grid max-w-5xl items-start gap-10 px-6 py-16 md:grid-cols-[minmax(260px,0.72fr)_minmax(0,1fr)] md:gap-16 md:py-20 lg:px-10 lg:py-24">
          <img src={seatedAsset.url} alt="Akash seated beneath a tree with his eyes closed and a Bansuri resting against his shoulder" loading="lazy" className="h-auto w-full md:max-w-sm" />
          <div>
            <p className="eyebrow mb-4">2025</p>
            <h2 className="serif-display text-3xl text-ink md:text-5xl">The Seeking Deepens</h2>
            <div className="mt-7 space-y-5 text-[1.05rem] leading-[1.85] text-ink/80">
              <p>Travel had always been part of my life.</p>
              <p>Motorcycle journeys took me through mountains, deserts, forests and coastlines. But somewhere along the way, travel stopped being only about reaching places.</p>
              <p>I began noticing what happened to me on the way.</p>
              <p className="font-serif text-[1.2rem] italic leading-[1.7] text-ink">The silence of a mountain road.<br />A lake beyond a border.<br />A long walk when there was nowhere else to go.<br />The feeling of sitting somewhere that had been held in love for generations.</p>
              <p>I was beginning to understand that seeking isn't always about finding something.</p>
              <p>Sometimes it is about becoming quiet enough to notice what is already there.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-rule/70">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20 lg:px-10 lg:py-24">
          <p className="eyebrow mb-4">2026</p>
          <h2 className="serif-display text-3xl text-ink md:text-5xl">Goa</h2>
          <div className="mt-7 max-w-2xl space-y-5 text-[1.05rem] leading-[1.85] text-ink/80">
            <p>In May 2026, I left Delhi with two bags and a flute.</p>
            <p>The flute case was the one thing that didn't feel optional.</p>
            <p>I came to Goa without a finished plan. There was work to build, music to deepen, soil to learn from, and a life to assemble from the ground up.</p>
            <p>The first months have been less romantic than the idea sounds.</p>
            <p>There has been rain, uncertainty, work, teaching, microgreens, mistakes, new people and days when the practice slips.</p>
            <p>But there has also been something I had been looking for without knowing exactly how to name it:</p>
            <p className="font-serif text-[1.25rem] italic text-ink">a life that feels closer to the person I am trying to become.</p>
          </div>
          <figure className="mt-12 md:mt-16">
            <img src={goaAsset.url} alt="A road and lotus ponds leading through palms toward mist-covered mountains in Goa" loading="lazy" className="h-auto w-full" />
          </figure>
          <figure className="mt-8 max-w-2xl md:ml-auto md:mt-10">
            <img src={belongingsAsset.url} alt="Packed belongings, books and a Bansuri case laid out before leaving for Goa" loading="lazy" className="h-auto w-full" />
          </figure>
        </div>
      </section>

      <section className="border-b border-rule/70">
        <div className="mx-auto max-w-2xl px-6 py-16 md:py-20 lg:px-10 lg:py-24">
          <p className="eyebrow mb-4">2027</p>
          <h2 className="serif-display text-3xl text-ink md:text-5xl">What Comes Next</h2>
          <div className="mt-7 space-y-5 text-[1.05rem] leading-[1.85] text-ink/80">
            <p>The future is deliberately unfinished.</p>
            <p>There is a book being written.</p>
            <p>There is music still being learned.</p>
            <p>There is land to understand.</p>
            <p>There are places to build.</p>
            <p>There are people yet to meet.</p>
            <p>I don't know exactly where the path leads.</p>
            <p>I'm more interested in walking it honestly than pretending I already know.</p>
          </div>
        </div>
      </section>

      <section className="border-b border-rule/70">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20 lg:px-10 lg:py-24">
          <h2 className="serif-display text-3xl text-ink md:text-5xl">What I'm Learning</h2>
          <div className="mt-12 grid grid-cols-1 gap-x-14 gap-y-10 sm:grid-cols-2">
            {LESSONS.map((lesson, index) => (
              <div key={lesson.title} className="border-t border-rule/70 pt-5">
                <p className="font-serif text-sm text-ink/45">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-2.5 font-serif text-[1.5rem] text-ink md:text-[1.65rem]">{lesson.title}</h3>
                <p className="mt-2.5 text-[1.02rem] leading-[1.75] text-ink/75">{lesson.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 max-w-2xl font-serif text-[1.3rem] italic leading-relaxed text-ink/75 md:text-[1.5rem]">I think these are all different expressions of the same practice.</p>
        </div>
      </section>

      <section>
        <figure className="mx-auto max-w-6xl px-0 md:px-6 lg:px-10 pt-16 md:pt-20 lg:pt-24">
          <img src={duskAsset.url} alt="Akash seen from behind, looking across water toward mountains at dusk" loading="lazy" className="h-auto w-full" />
        </figure>
        <div className="mx-auto max-w-2xl px-6 py-16 md:py-20 lg:px-10 lg:py-24">
          <h2 className="serif-display text-3xl text-ink md:text-5xl">This is not a story about having arrived.</h2>
          <div className="mt-7 space-y-5 text-[1.05rem] leading-[1.85] text-ink/80 md:text-[1.15rem]">
            <p>It is a record of what happens when you keep moving toward a life that feels more true.</p>
            <p>The journey is still happening.</p>
            <p className="font-serif text-[1.3rem] italic text-ink">Come along.</p>
          </div>
        </div>
      </section>
    </Page>
  );
}

