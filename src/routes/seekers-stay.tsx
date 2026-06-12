import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Page } from "@/components/site-layout";
import stayHero from "@/assets/stay-hero.jpg";
import stayMorning from "@/assets/stay-morning.jpg";
import stayBeach from "@/assets/stay-beach.jpg";

import exteriorSide from "@/assets/stay/exterior-side.jpg.asset.json";
import exteriorFront from "@/assets/stay/exterior-front.jpg.asset.json";
import reception from "@/assets/stay/reception.jpg.asset.json";
import living1 from "@/assets/stay/living-1.jpg.asset.json";
import living2 from "@/assets/stay/living-2.jpg.asset.json";
import living3 from "@/assets/stay/living-3.jpg.asset.json";
import bedroom from "@/assets/stay/bedroom.jpg.asset.json";
import kitchen1 from "@/assets/stay/kitchen-1.jpg.asset.json";
import kitchen2 from "@/assets/stay/kitchen-2.jpg.asset.json";
import balcony from "@/assets/stay/balcony.jpg.asset.json";

export const Route = createFileRoute("/seekers-stay")({
  head: () => ({
    meta: [
      { title: "Seekers Stay — Echoes of the Seeker" },
      { name: "description", content: "Places that invite rest, reflection, and a slower rhythm of living." },
      { property: "og:title", content: "Seekers Stay — Echoes of the Seeker" },
      { property: "og:description", content: "Places that invite rest, reflection, and a slower rhythm of living." },
      { property: "og:image", content: stayHero },
    ],
  }),
  component: Stay,
});

const DAY = [
  { time: "Morning", body: "Tea. Sea air. Slow beginnings." },
  { time: "Afternoon", body: "Work, reading, wandering, or simply doing nothing." },
  { time: "Evening", body: "Sunset walks, conversations, and unhurried time." },
  { time: "Night", body: "Silence, rest, and the sound of the ocean nearby." },
] as const;

const GALLERY = [
  { src: exteriorSide.url, alt: "The building at Sasha's Stay, Ashwem", aspect: "aspect-[4/5]" },
  { src: living1.url, alt: "Living room with wooden furniture", aspect: "aspect-[4/5]" },
  { src: balcony.url, alt: "Balcony with a book and morning light", aspect: "aspect-[3/2]" },
  { src: kitchen1.url, alt: "Kitchen with garden view", aspect: "aspect-[3/2]" },
  { src: bedroom.url, alt: "Bedroom with soft window light", aspect: "aspect-[3/2]" },
  { src: living2.url, alt: "Apartment living area", aspect: "aspect-[3/2]" },
  { src: exteriorFront.url, alt: "Front of the building framed by palms", aspect: "aspect-[4/5]" },
  { src: kitchen2.url, alt: "A second kitchen space", aspect: "aspect-[4/5]" },
  { src: living3.url, alt: "Dining and living area", aspect: "aspect-[4/5]" },
  { src: reception.url, alt: "Reception entrance", aspect: "aspect-[3/2]" },
];

function Stay() {
  return (
    <Page>
      {/* Hero */}
      <section className="relative h-[88svh] min-h-[560px] w-full overflow-hidden">
        <img
          src={stayHero}
          alt="A quiet coastal home in Ashwem, Goa at golden hour"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/35 via-ink/20 to-ink/70" />
        <div className="relative z-10 mx-auto flex h-full max-w-3xl flex-col items-center justify-end px-6 pb-16 text-center lg:px-10 lg:pb-24">
          <h1
            className="serif-display text-[2.25rem] tracking-[-0.005em] text-paper sm:text-[2.75rem] md:text-5xl lg:text-[3.75rem]"
            style={{ textShadow: "0 1px 24px rgba(0,0,0,0.5)" }}
          >
            Seekers Stay
          </h1>
          <p
            className="mt-5 max-w-xl font-serif text-[1rem] italic leading-[1.6] text-paper/85 md:text-[1.15rem]"
            style={{ textShadow: "0 1px 18px rgba(0,0,0,0.55)" }}
          >
            Places that invite rest, reflection, and a slower rhythm of living.
          </p>
        </div>
      </section>

      {/* Why Seekers Stay */}
      <section className="border-b border-rule/70">
        <div className="mx-auto max-w-2xl px-6 py-14 md:py-18 lg:px-10 lg:py-20">
          <p className="eyebrow mb-6">One</p>
          <h2 className="serif-display text-[1.75rem] tracking-[-0.005em] text-ink md:text-[2.5rem]">
            Why Seekers Stay
          </h2>
          <div className="mt-8 space-y-5 text-[1.05rem] leading-[1.85] text-ink/85 md:text-[1.15rem] md:leading-[1.9]">
            <p>Some places stay with us long after we leave.</p>
            <p>
              Not because of luxury or spectacle, but because they allowed us to slow down enough to notice where we were.
            </p>
            <p>
              Seekers Stay emerged from a simple idea: that where we stay shapes how we experience a place.
            </p>
            <p>
              A quiet room, a nearby path, a familiar tea cup, a morning walk, the sound of the sea before sunrise. These
              small details often become the memories we carry home.
            </p>
            <p>This section of Echoes of the Seeker gathers places that share that spirit.</p>
          </div>
        </div>
      </section>

      {/* Sasha's Stay — Introduction */}
      <section>
        <div className="mx-auto max-w-5xl px-6 pt-14 md:pt-18 lg:px-10 lg:pt-20">
          <p className="eyebrow mb-6">Two</p>
          <h2 className="serif-display text-[1.75rem] tracking-[-0.005em] text-ink md:text-[2.5rem]">
            Sasha's Stay
          </h2>
          <p className="mt-3 font-serif text-[1.1rem] italic text-ink/65 md:text-[1.25rem]">
            Ashwem, Goa
          </p>
          <div className="mt-8 max-w-2xl space-y-5 text-[1.05rem] leading-[1.85] text-ink/85 md:text-[1.1rem]">
            <p>Sasha's Stay is the first place to become part of Seekers Stay.</p>
            <p>
              Located in Ashwem, North Goa, a short walk from the beach, it offers a quieter rhythm than much of the
              coastline.
            </p>
          </div>
        </div>

        {/* Editorial gallery */}
        <div className="mx-auto max-w-6xl px-6 pt-12 pb-14 md:pt-14 md:pb-18 lg:px-10 lg:pt-16 lg:pb-20">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:gap-5">
            {GALLERY.map((img, i) => (
              <figure key={i} className={i === 2 || i === 6 ? "col-span-2 md:col-span-2" : ""}>
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className={`w-full object-cover ${
                    i === 2 || i === 6 ? "aspect-[3/2]" : img.aspect
                  }`}
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Stay Options */}
      <section className="border-y border-rule/70 bg-secondary/30">
        <div className="mx-auto max-w-5xl px-6 py-14 md:py-18 lg:px-10 lg:py-20">
          <p className="eyebrow mb-6">Three</p>
          <h2 className="serif-display text-[1.75rem] tracking-[-0.005em] text-ink md:text-[2.5rem]">
            Stay Options
          </h2>
          <p className="mt-6 max-w-2xl text-[1.05rem] leading-[1.85] text-ink/80 md:text-[1.1rem]">
            Sasha's Stay currently offers two accommodation types, each suited to a different style of stay.
          </p>

          <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-12">
            <article className="space-y-5">
              <figure>
                <img
                  src={bedroom.url}
                  alt="Studio apartment bedroom"
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
              </figure>
              <p className="eyebrow">Studio Apartment</p>
              <p className="font-serif text-[1.05rem] italic text-ink/70">
                Ideal for solo travelers, couples, remote workers, and shorter stays.
              </p>
              <ul className="space-y-2 text-[1rem] leading-[1.75] text-ink/80">
                <li>— Private studio layout</li>
                <li>— Kitchenette</li>
                <li>— Comfortable and self-contained</li>
                <li>— Suitable for 1–2 guests</li>
              </ul>
              <p className="border-t border-rule/70 pt-5 font-serif text-[1rem] italic text-ink/65">
                A simple space for rest, work, reading, and slow mornings.
              </p>
            </article>

            <article className="space-y-5">
              <figure>
                <img
                  src={living2.url}
                  alt="One-bedroom apartment living area"
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
              </figure>
              <p className="eyebrow">One-Bedroom Apartment (1BHK)</p>
              <p className="font-serif text-[1.05rem] italic text-ink/70">
                Ideal for longer stays, couples wanting more space, families, or friends traveling together.
              </p>
              <ul className="space-y-2 text-[1rem] leading-[1.75] text-ink/80">
                <li>— Separate bedroom</li>
                <li>— Living area</li>
                <li>— Kitchen</li>
                <li>— More spacious layout</li>
                <li>— Suitable for longer stays</li>
              </ul>
              <p className="border-t border-rule/70 pt-5 font-serif text-[1rem] italic text-ink/65">
                A little more room to settle into the rhythm of the place.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* A Walk From Here */}
      <section className="border-b border-rule/70">
        <div className="mx-auto max-w-5xl px-6 py-14 md:py-18 lg:px-10 lg:py-20">
          <div className="grid gap-10 md:grid-cols-5 md:gap-14">
            <div className="md:col-span-2 md:self-center">
              <p className="eyebrow mb-6">Four</p>
              <h2 className="serif-display text-[1.75rem] tracking-[-0.005em] text-ink md:text-[2.5rem]">
                A Walk From Here
              </h2>
              <div className="mt-8 space-y-3 font-serif text-[1.15rem] italic leading-[1.7] text-ink/75 md:text-[1.25rem]">
                <p>Thirty seconds to the beach.</p>
                <p>A little longer to slow down.</p>
              </div>
            </div>
            <figure className="md:col-span-3">
              <img
                src={stayBeach}
                alt="An empty beach at sunset near Ashwem"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover md:aspect-[16/11]"
              />
            </figure>
          </div>
        </div>
      </section>

      {/* A Day Here */}
      <section className="border-b border-rule/70">
        <div className="mx-auto max-w-5xl px-6 py-14 md:py-18 lg:px-10 lg:py-20">
          <div className="grid gap-12 md:grid-cols-5 md:gap-16">
            <figure className="md:col-span-2">
              <img
                src={stayMorning}
                alt="Morning light on a wooden table with tea and a notebook"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </figure>
            <div className="md:col-span-3">
              <p className="eyebrow mb-6">Five</p>
              <h2 className="serif-display text-[1.75rem] tracking-[-0.005em] text-ink md:text-[2.5rem]">
                A Day Here
              </h2>
              <ol className="mt-10 space-y-8 border-l border-rule/70 pl-7 md:pl-9">
                {DAY.map((d) => (
                  <li key={d.time} className="relative">
                    <span className="absolute -left-[2.05rem] top-[0.7rem] h-1.5 w-1.5 rounded-full bg-bamboo md:-left-[2.3rem]" />
                    <p className="serif-display text-[1.35rem] text-ink md:text-[1.55rem]">{d.time}</p>
                    <p className="mt-1.5 text-[1rem] leading-[1.75] text-ink/80 md:text-[1.05rem]">{d.body}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* The Vision */}
      <section className="border-b border-rule/70">
        <div className="mx-auto max-w-2xl px-6 py-14 md:py-18 lg:px-10 lg:py-20">
          <p className="eyebrow mb-6">Six</p>
          <h2 className="serif-display text-[1.75rem] tracking-[-0.005em] text-ink md:text-[2.5rem]">
            The Vision
          </h2>
          <div className="mt-8 space-y-5 text-[1.05rem] leading-[1.85] text-ink/85 md:text-[1.15rem] md:leading-[1.9]">
            <p>Seekers Stay is not a hospitality brand.</p>
            <p>It is an exploration of place.</p>
            <p>Over time, new spaces may emerge in different landscapes.</p>
            <p>Some may be near forests. Some near farms. Some near the sea.</p>
            <p className="font-serif italic text-ink/75">
              All sharing a common intention: to create environments that encourage attention, reflection, and connection.
            </p>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="border-b border-rule/70">
        <div className="mx-auto max-w-2xl px-6 py-16 text-center md:py-20 lg:px-10 lg:py-24">
          <p className="serif-display text-[1.5rem] leading-[1.5] text-ink md:text-[2rem] md:leading-[1.45]">
            The places we remember most are often the ones that gave us room to listen.
          </p>
        </div>
      </section>

      {/* Inquiry */}
      <InquirySection />
    </Page>
  );
}

function InquirySection() {
  const [submitted, setSubmitted] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <section id="inquire">
      <div className="mx-auto max-w-2xl px-6 py-16 md:py-20 lg:px-10 lg:py-24">
        {!open && !submitted && (
          <div className="text-center">
            <button
              onClick={() => setOpen(true)}
              className="rounded-full bg-ink px-7 py-3 font-serif text-[0.85rem] tracking-[0.18em] text-paper uppercase hover:bg-forest transition-colors"
            >
              Inquire About Staying
            </button>
            <p className="mt-6 font-serif text-[0.95rem] italic text-ink/55">
              A short note. We reply personally.
            </p>
          </div>
        )}

        {open && !submitted && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="space-y-8"
          >
            <div>
              <p className="eyebrow mb-3">Inquiry</p>
              <h2 className="serif-display text-[1.75rem] text-ink md:text-[2.25rem]">A note about your stay</h2>
            </div>

            {[
              { name: "name", label: "Name", type: "text" },
              { name: "email", label: "Email", type: "email" },
              { name: "whatsapp", label: "WhatsApp", type: "tel" },
              { name: "dates", label: "Preferred Dates", type: "text" },
              { name: "guests", label: "Number of Guests", type: "number" },
            ].map((f) => (
              <label key={f.name} className="block">
                <span className="eyebrow">{f.label}</span>
                <input
                  required={f.name === "name" || f.name === "email"}
                  type={f.type}
                  name={f.name}
                  className="mt-2 w-full border-b border-ink/25 bg-transparent py-3 font-serif text-[1.05rem] text-ink outline-none transition-colors focus:border-bamboo"
                />
              </label>
            ))}

            <label className="block">
              <span className="eyebrow">Accommodation Type</span>
              <select
                name="accommodation"
                defaultValue=""
                className="mt-2 w-full border-b border-ink/25 bg-transparent py-3 font-serif text-[1.05rem] text-ink outline-none transition-colors focus:border-bamboo"
              >
                <option value="" disabled>Select an option</option>
                <option value="studio">Studio Apartment</option>
                <option value="1bhk">One-Bedroom Apartment (1BHK)</option>
                <option value="unsure">Not Sure Yet</option>
              </select>
            </label>

            <label className="block">
              <span className="eyebrow">Message</span>
              <textarea
                name="message"
                rows={5}
                className="mt-2 w-full border-b border-ink/25 bg-transparent py-3 font-serif text-[1.05rem] text-ink outline-none transition-colors focus:border-bamboo"
              />
            </label>

            <div className="pt-2">
              <button
                type="submit"
                className="rounded-full bg-ink px-7 py-3 font-serif text-[0.85rem] tracking-[0.18em] text-paper uppercase hover:bg-forest transition-colors"
              >
                Send Inquiry
              </button>
            </div>
          </form>
        )}

        {submitted && (
          <div className="text-center">
            <p className="serif-display text-[1.5rem] leading-[1.5] text-ink md:text-[1.85rem]">
              Thank you for writing.
            </p>
            <p className="mt-5 font-serif text-[1.05rem] italic text-ink/65">
              We'll reply personally, soon.
            </p>
          </div>
        )}

        <p className="mt-12 text-center font-serif text-[0.9rem] italic text-ink/45">
          Sasha's Stay Facebook page coming soon.
        </p>
      </div>
    </section>
  );
}
