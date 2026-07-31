import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  Waves, Home, Wifi, CookingPot, Leaf, Laptop, Sparkles, Snowflake, Zap,
  Refrigerator, Flame, UtensilsCrossed, Tv, Sun, BedDouble, WashingMachine,
  Droplets, Utensils, Clock, CigaretteOff, VolumeX, PartyPopper, Users, Heart,
  Palmtree, Flower2, MapPin, Plane, MessageCircle, Map as MapIcon, Instagram, Mail,
} from "lucide-react";
import { Page } from "@/components/site-layout";
import { Reveal } from "@/components/reveal";
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

/* Update these with the live booking details */
const WHATSAPP_NUMBER = "919999999999";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hello! I'd like to enquire about staying at Seekers Stay, Ashwem.",
)}`;
const MAPS_URL = "https://maps.google.com/?q=Ashwem+Beach+Goa";
const INSTAGRAM_URL = "https://www.instagram.com/echoesoftheseeker";
const EMAIL = "hello@echoesoftheseeker.com";

export const Route = createFileRoute("/seekers-stay")({
  head: () => ({
    meta: [
      { title: "Seekers Stay — Beachside Apartments in Ashwem, Goa" },
      {
        name: "description",
        content:
          "Fully furnished 1 BHK & studio serviced apartments in Ashwem, Goa. A 2-minute walk to the beach, high-speed WiFi, private kitchenette. Short and long stays.",
      },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Seekers Stay — Beachside Apartments in Ashwem, Goa" },
      {
        property: "og:description",
        content: "Fully furnished 1 BHK & studio apartments, a short walk from Ashwem Beach.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Stay,
});

const WHY = [
  { Icon: Waves, text: "Just a short walk to Ashwem Beach" },
  { Icon: Home, text: "Fully furnished serviced apartments" },
  { Icon: Wifi, text: "High-speed WiFi" },
  { Icon: CookingPot, text: "Private kitchenette" },
  { Icon: Leaf, text: "Peaceful residential location" },
  { Icon: Laptop, text: "Ideal for workations & long stays" },
  { Icon: Sparkles, text: "Weekly housekeeping included" },
] as const;

const ONE_BHK = [
  "Air-conditioned bedroom", "Separate living room", "Fully functional kitchen",
  "Dining table", "Balcony", "Smart TV", "Refrigerator", "Gas stove",
  "Basic cookware", "Crockery & cutlery", "High-speed WiFi",
];

const STUDIO = [
  "Air Conditioning", "Kitchenette", "Refrigerator", "Gas stove",
  "Television", "Balcony", "Dining area", "WiFi", "Basic cookware",
];

const GALLERY = [
  { src: exteriorSide.url, alt: "The building at Seekers Stay, Ashwem", cat: "Exterior" },
  { src: exteriorFront.url, alt: "Front of the building framed by palms", cat: "Exterior" },
  { src: living1.url, alt: "Living room with wooden furniture", cat: "Living Room" },
  { src: living2.url, alt: "Apartment living area", cat: "Living Room" },
  { src: living3.url, alt: "Dining and living area", cat: "Living Room" },
  { src: bedroom.url, alt: "Bedroom with soft window light", cat: "Bedroom" },
  { src: kitchen1.url, alt: "Kitchen with garden view", cat: "Kitchen" },
  { src: kitchen2.url, alt: "A second kitchen space", cat: "Kitchen" },
  { src: balcony.url, alt: "Balcony with a book and morning light", cat: "Balcony" },
  { src: reception.url, alt: "Reception entrance", cat: "Reception" },
  { src: stayHero, alt: "The property at golden hour", cat: "Property" },
  { src: stayMorning, alt: "Morning light on a wooden table", cat: "Property" },
];

const CATEGORIES = ["All", "Exterior", "Living Room", "Bedroom", "Kitchen", "Balcony", "Reception", "Property"] as const;

const INCLUDED = [
  { Icon: Wifi, text: "High-Speed WiFi" },
  { Icon: Snowflake, text: "Air Conditioning" },
  { Icon: Zap, text: "Electricity Included" },
  { Icon: Refrigerator, text: "Refrigerator" },
  { Icon: Flame, text: "Gas Stove" },
  { Icon: CookingPot, text: "Kitchen" },
  { Icon: UtensilsCrossed, text: "Basic Cooking Utensils" },
  { Icon: Utensils, text: "Crockery & Cutlery" },
  { Icon: Home, text: "Dining Table" },
  { Icon: Tv, text: "Television" },
  { Icon: Sun, text: "Balcony" },
  { Icon: BedDouble, text: "Fresh Linen" },
  { Icon: Sparkles, text: "Weekly Housekeeping" },
  { Icon: WashingMachine, text: "Washing Machine (Common Area)" },
  { Icon: Droplets, text: "Water Purifier (Common Area)" },
] as const;

const GOOD_TO_KNOW = [
  { Icon: Clock, label: "Check-in", body: "After 2 PM" },
  { Icon: Clock, label: "Check-out", body: "Before 10 AM" },
  { Icon: Clock, label: "Late Check-out", body: "Subject to availability." },
  { Icon: CigaretteOff, label: "Smoking", body: "Only on balconies." },
  { Icon: PartyPopper, label: "No Parties", body: "A quiet, residential home." },
  { Icon: VolumeX, label: "No Loud Music", body: "Neighbours sleep early here." },
] as const;

const PERFECT_FOR = [
  { Icon: Waves, text: "Beach Holidays" },
  { Icon: Laptop, text: "Remote Workers" },
  { Icon: Users, text: "Families" },
  { Icon: Heart, text: "Couples" },
  { Icon: Palmtree, text: "Long Stays" },
  { Icon: Flower2, text: "Slow Travel" },
] as const;

const NEARBY = [
  { Icon: MapPin, place: "Ashwem Beach", time: "2 minute walk" },
  { Icon: Waves, place: "Mandrem Beach", time: "8 minute drive" },
  { Icon: Waves, place: "Morjim Beach", time: "14 minute drive" },
  { Icon: Sun, place: "Arambol Beach", time: "15 minute drive" },
  { Icon: Plane, place: "Manohar International Airport (Mopa)", time: "50 minute drive" },
] as const;

const DAY = [
  { time: "Morning", body: "Enjoy coffee on your balcony surrounded by greenery." },
  { time: "Afternoon", body: "Work comfortably with high-speed WiFi or explore nearby cafés." },
  { time: "Evening", body: "Take a short walk to Ashwem Beach for sunset." },
  { time: "Night", body: "Return to a peaceful apartment with everything you need." },
] as const;

const FAQ = [
  { q: "Is WiFi available?", a: "Yes." },
  { q: "Is electricity included?", a: "Yes." },
  { q: "Is kitchen available?", a: "Yes." },
  { q: "Is housekeeping daily?", a: "Housekeeping is provided once or twice every week." },
  { q: "Can I stay for a month?", a: "Yes. Long stays are welcome." },
] as const;

function PrimaryButton({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 font-serif text-[0.95rem] text-paper transition-colors duration-300 hover:bg-forest"
    >
      {children}
    </a>
  );
}

function SecondaryButton({ children, href, onLight = false }: { children: React.ReactNode; href: string; onLight?: boolean }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-full border px-7 py-3.5 font-serif text-[0.95rem] transition-colors duration-300 ${
        onLight
          ? "border-ink/25 text-ink hover:border-bamboo hover:text-forest"
          : "border-paper/50 text-paper hover:border-bamboo hover:text-bamboo"
      }`}
    >
      {children}
    </a>
  );
}

function SectionHead({ index, title, lede }: { index: string; title: string; lede?: string }) {
  return (
    <>
      <p className="eyebrow mb-6">{index}</p>
      <h2 className="serif-display text-[1.75rem] tracking-[-0.005em] text-ink md:text-[2.5rem]">{title}</h2>
      {lede && (
        <p className="mt-6 max-w-2xl text-[1.05rem] leading-[1.85] text-ink/80 md:text-[1.1rem]">{lede}</p>
      )}
    </>
  );
}

function Stay() {
  return (
    <Page>
      {/* Hero */}
      <section className="relative h-[92svh] min-h-[600px] w-full overflow-hidden">
        <img
          src={stayHero}
          alt="A quiet coastal home in Ashwem, Goa at golden hour"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/25 to-ink/75" />
        <div className="relative z-10 mx-auto flex h-full max-w-3xl flex-col items-center justify-end px-6 pb-16 text-center lg:px-10 lg:pb-24">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-paper/35 bg-ink/25 px-4 py-1.5 font-serif text-[0.8rem] text-paper/90 backdrop-blur-sm">
              <Leaf size={13} strokeWidth={1.5} className="text-bamboo" />
              Just a 2-minute walk to Ashwem Beach
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h1
              className="serif-display mt-6 text-[2.25rem] tracking-[-0.005em] text-paper sm:text-[2.75rem] md:text-5xl lg:text-[3.75rem]"
              style={{ textShadow: "0 1px 24px rgba(0,0,0,0.5)" }}
            >
              Seekers Stay
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p
              className="mt-5 max-w-xl font-serif text-[1rem] italic leading-[1.6] text-paper/90 md:text-[1.15rem]"
              style={{ textShadow: "0 1px 18px rgba(0,0,0,0.55)" }}
            >
              Beachside serviced apartments in Ashwem, Goa.
              <br />
              Fully furnished 1 BHK &amp; Studio Apartments for short and long stays.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
              <PrimaryButton href={WHATSAPP_URL}>
                <MessageCircle size={16} strokeWidth={1.6} />
                Book on WhatsApp
              </PrimaryButton>
              <SecondaryButton href={MAPS_URL}>
                <MapPin size={16} strokeWidth={1.6} />
                View Location
              </SecondaryButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why Stay With Us */}
      <section className="border-b border-rule/70">
        <div className="mx-auto max-w-5xl px-6 py-14 md:py-18 lg:px-10 lg:py-20">
          <Reveal>
            <SectionHead index="One" title="Why Stay With Us" />
          </Reveal>
          <div className="mt-10 grid gap-px overflow-hidden border border-rule/70 bg-rule/70 sm:grid-cols-2 lg:grid-cols-3">
            {WHY.map(({ Icon, text }, i) => (
              <Reveal key={text} delay={i * 60}>
                <div className="flex h-full items-start gap-4 bg-paper p-6 transition-colors duration-300 hover:bg-secondary/40">
                  <Icon size={20} strokeWidth={1.4} className="mt-0.5 shrink-0 text-bamboo" />
                  <p className="text-[0.98rem] leading-[1.7] text-ink/85">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Choose Your Stay */}
      <section className="border-b border-rule/70 bg-secondary/30">
        <div className="mx-auto max-w-5xl px-6 py-14 md:py-18 lg:px-10 lg:py-20">
          <Reveal>
            <SectionHead
              index="Two"
              title="Choose Your Stay"
              lede="Two apartment types, each suited to a different rhythm of stay."
            />
          </Reveal>

          <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-12">
            <Reveal>
              <StayCard
                img={living2.url}
                imgAlt="One-bedroom apartment living area"
                name="One Bedroom Apartment"
                lede="Ideal for couples, families and long stays."
                features={ONE_BHK}
                price="₹2,200"
              />
            </Reveal>
            <Reveal delay={120}>
              <StayCard
                img={bedroom.url}
                imgAlt="Studio apartment interior"
                name="Studio Apartment"
                lede="Compact and comfortable."
                features={STUDIO}
                price="₹1,800"
              />
            </Reveal>
          </div>

          <Reveal>
            <div className="mt-12 border-t border-rule/70 pt-8">
              <p className="eyebrow mb-4">We currently offer</p>
              <ul className="flex flex-col gap-2 font-serif text-[1.05rem] italic text-ink/75 sm:flex-row sm:gap-10">
                <li>3 One Bedroom Apartments</li>
                <li>2 Studio Apartments</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Gallery */}
      <GallerySection />

      {/* What's Included */}
      <section className="border-b border-rule/70 bg-secondary/30">
        <div className="mx-auto max-w-5xl px-6 py-14 md:py-18 lg:px-10 lg:py-20">
          <Reveal>
            <SectionHead index="Four" title="What's Included" />
          </Reveal>
          <div className="mt-10 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
            {INCLUDED.map(({ Icon, text }, i) => (
              <Reveal key={text} delay={(i % 3) * 60}>
                <div className="flex items-center gap-3 border-b border-rule/50 pb-4">
                  <Icon size={17} strokeWidth={1.4} className="shrink-0 text-bamboo" />
                  <p className="text-[0.96rem] text-ink/85">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Housekeeping */}
      <section className="border-b border-rule/70">
        <div className="mx-auto max-w-2xl px-6 py-14 md:py-18 lg:px-10 lg:py-20">
          <Reveal>
            <SectionHead index="Five" title="Housekeeping" />
            <div className="mt-8 space-y-4 text-[1.05rem] leading-[1.85] text-ink/85">
              <p>Housekeeping is provided once or twice every week.</p>
              <p>Fresh linen and towels are changed periodically.</p>
              <p className="font-serif italic text-ink/70">Additional housekeeping can be arranged on request.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Good To Know */}
      <section className="border-b border-rule/70">
        <div className="mx-auto max-w-5xl px-6 py-14 md:py-18 lg:px-10 lg:py-20">
          <Reveal>
            <SectionHead index="Six" title="Good To Know" />
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {GOOD_TO_KNOW.map(({ Icon, label, body }, i) => (
              <Reveal key={label} delay={(i % 3) * 60}>
                <div className="h-full border border-rule/70 bg-paper p-6 transition-colors duration-300 hover:border-bamboo/60">
                  <Icon size={18} strokeWidth={1.4} className="text-bamboo" />
                  <p className="eyebrow mt-4">{label}</p>
                  <p className="mt-2 font-serif text-[1.15rem] text-ink">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Perfect For */}
      <section className="border-b border-rule/70 bg-secondary/30">
        <div className="mx-auto max-w-5xl px-6 py-14 md:py-18 lg:px-10 lg:py-20">
          <Reveal>
            <SectionHead index="Seven" title="Perfect For" />
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-3">
            {PERFECT_FOR.map(({ Icon, text }, i) => (
              <Reveal key={text} delay={(i % 3) * 60}>
                <div className="flex h-full flex-col items-center justify-center gap-3 border border-rule/70 bg-paper px-4 py-8 text-center transition-colors duration-300 hover:border-bamboo/60">
                  <Icon size={22} strokeWidth={1.3} className="text-bamboo" />
                  <p className="font-serif text-[1.05rem] text-ink/85">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Nearby + map */}
      <section className="border-b border-rule/70">
        <div className="mx-auto max-w-5xl px-6 py-14 md:py-18 lg:px-10 lg:py-20">
          <Reveal>
            <SectionHead index="Eight" title="Explore Nearby" />
          </Reveal>
          <ul className="mt-10 divide-y divide-rule/60 border-y border-rule/60">
            {NEARBY.map(({ Icon, place, time }, i) => (
              <Reveal key={place} delay={i * 50}>
                <li className="flex flex-wrap items-center justify-between gap-3 py-5">
                  <span className="flex items-center gap-3">
                    <Icon size={17} strokeWidth={1.4} className="text-bamboo" />
                    <span className="font-serif text-[1.1rem] text-ink">{place}</span>
                  </span>
                  <span className="text-[0.88rem] tracking-wide text-ink/60">{time}</span>
                </li>
              </Reveal>
            ))}
          </ul>

          <Reveal>
            <LocationMap />
          </Reveal>
        </div>
      </section>

      {/* A Day At Seekers */}
      <section className="border-b border-rule/70">
        <div className="mx-auto max-w-5xl px-6 py-14 md:py-18 lg:px-10 lg:py-20">
          <div className="grid gap-12 md:grid-cols-5 md:gap-16">
            <Reveal className="md:col-span-2">
              <figure>
                <img
                  src={stayMorning}
                  alt="Morning light on a wooden table with coffee and a notebook"
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
              </figure>
            </Reveal>
            <div className="md:col-span-3">
              <Reveal>
                <SectionHead index="Nine" title="A Day At Seekers" />
              </Reveal>
              <ol className="mt-10 space-y-8 border-l border-rule/70 pl-7 md:pl-9">
                {DAY.map((d, i) => (
                  <Reveal key={d.time} delay={i * 70}>
                    <li className="relative">
                      <span className="absolute -left-[2.05rem] top-[0.7rem] h-1.5 w-1.5 rounded-full bg-bamboo md:-left-[2.3rem]" />
                      <p className="serif-display text-[1.35rem] text-ink md:text-[1.55rem]">{d.time}</p>
                      <p className="mt-1.5 text-[1rem] leading-[1.75] text-ink/80 md:text-[1.05rem]">{d.body}</p>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Tariff */}
      <section className="border-b border-rule/70 bg-secondary/30">
        <div className="mx-auto max-w-5xl px-6 py-14 md:py-18 lg:px-10 lg:py-20">
          <Reveal>
            <SectionHead index="Ten" title="Starting Prices" />
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              { name: "Studio Apartment", price: "From ₹1,800/night" },
              { name: "One Bedroom Apartment", price: "From ₹2,200/night" },
            ].map((t, i) => (
              <Reveal key={t.name} delay={i * 90}>
                <div className="flex h-full flex-col justify-between gap-6 border border-rule/70 bg-paper p-8">
                  <p className="eyebrow">{t.name}</p>
                  <p className="serif-display text-[1.7rem] text-ink md:text-[2rem]">{t.price}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-8 space-y-2 font-serif text-[0.98rem] italic text-ink/60">
              <p>Rates vary depending on season, weekends, holidays and stay duration.</p>
              <p>For weekly and monthly stays, please contact us directly.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-rule/70">
        <div className="mx-auto max-w-3xl px-6 py-14 md:py-18 lg:px-10 lg:py-20">
          <Reveal>
            <SectionHead index="Eleven" title="Questions" />
          </Reveal>
          <div className="mt-10 divide-y divide-rule/60 border-y border-rule/60">
            {FAQ.map((f, i) => (
              <Reveal key={f.q} delay={i * 50}>
                <details className="group py-5">
                  <summary className="cursor-pointer list-none font-serif text-[1.12rem] text-ink transition-colors duration-300 hover:text-forest">
                    {f.q}
                  </summary>
                  <p className="mt-3 text-[1rem] leading-[1.8] text-ink/75">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden">
        <img
          src={stayBeach}
          alt="An empty beach at sunset near Ashwem"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/70" />
        <div className="relative z-10 mx-auto max-w-2xl px-6 py-20 text-center md:py-24 lg:px-10 lg:py-28">
          <Reveal>
            <h2 className="serif-display text-[1.75rem] text-paper md:text-[2.5rem]">
              Ready for your stay in Ashwem?
            </h2>
            <p className="mx-auto mt-6 max-w-xl font-serif text-[1.05rem] italic leading-[1.7] text-paper/85 md:text-[1.15rem]">
              Whether you're planning a weekend escape or a longer stay in North Goa, we'd love to host you.
            </p>
            <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <PrimaryButton href={WHATSAPP_URL}>
                <MessageCircle size={16} strokeWidth={1.6} />
                Book on WhatsApp
              </PrimaryButton>
              <SecondaryButton href={MAPS_URL}>
                <MapPin size={16} strokeWidth={1.6} />
                View Location
              </SecondaryButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stay footer */}
      <section className="border-t border-rule/70">
        <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-14 md:flex-row md:items-end md:justify-between lg:px-10 lg:py-16">
          <div>
            <p className="serif-display text-[1.5rem] text-ink">Seekers Stay</p>
            <p className="mt-2 font-serif text-[1rem] italic text-ink/60">Ashwem, Goa</p>
          </div>
          <ul className="flex flex-wrap gap-x-8 gap-y-3 text-[0.95rem] text-ink/75">
            {[
              { Icon: MessageCircle, label: "WhatsApp", href: WHATSAPP_URL },
              { Icon: MapIcon, label: "Google Maps", href: MAPS_URL },
              { Icon: Instagram, label: "Instagram", href: INSTAGRAM_URL },
              { Icon: Mail, label: "Email", href: `mailto:${EMAIL}` },
            ].map(({ Icon, label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-bamboo"
                >
                  <Icon size={15} strokeWidth={1.5} />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Page>
  );
}

function StayCard({
  img, imgAlt, name, lede, features, price,
}: {
  img: string; imgAlt: string; name: string; lede: string; features: string[]; price: string;
}) {
  return (
    <article className="flex h-full flex-col space-y-5">
      <figure className="overflow-hidden">
        <img
          src={img}
          alt={imgAlt}
          loading="lazy"
          className="aspect-[4/3] w-full object-cover transition-transform duration-[900ms] ease-out hover:scale-[1.02]"
        />
      </figure>
      <p className="eyebrow">{name}</p>
      <p className="font-serif text-[1.05rem] italic text-ink/70">{lede}</p>
      <ul className="grid grid-cols-1 gap-2 text-[0.96rem] leading-[1.7] text-ink/80 sm:grid-cols-2">
        {features.map((f) => (
          <li key={f}>— {f}</li>
        ))}
      </ul>
      <p className="mt-auto border-t border-rule/70 pt-5 font-serif text-[1.15rem] text-ink">
        Starting from {price}/night<span className="text-ink/50">*</span>
      </p>
    </article>
  );
}

function GallerySection() {
  const [cat, setCat] = useState<(typeof CATEGORIES)[number]>("All");
  const shown = useMemo(
    () => (cat === "All" ? GALLERY : GALLERY.filter((g) => g.cat === cat)),
    [cat],
  );

  return (
    <section className="border-b border-rule/70">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-18 lg:px-10 lg:py-20">
        <Reveal>
          <SectionHead index="Three" title="Gallery" />
        </Reveal>
        <Reveal>
          <div className="mt-8 flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full border px-4 py-1.5 font-serif text-[0.9rem] transition-colors duration-300 ${
                  cat === c
                    ? "border-ink bg-ink text-paper"
                    : "border-rule text-ink/70 hover:border-bamboo hover:text-forest"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:gap-5">
          {shown.map((img, i) => (
            <Reveal key={img.src} delay={(i % 3) * 60}>
              <figure className="overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-[900ms] ease-out hover:scale-[1.03] md:aspect-[4/3]"
                />
                <figcaption className="mt-2 text-[0.78rem] tracking-wide text-ink/50">{img.cat}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function LocationMap() {
  return (
    <figure className="mt-12">
      <div className="border border-rule/70 bg-paper p-4 md:p-6">
        <svg viewBox="0 0 640 320" role="img" aria-label="Sketch map showing Seekers Stay a short walk from Ashwem Beach" className="h-auto w-full">
          <rect x="0" y="0" width="640" height="320" fill="oklch(0.957 0.012 85)" />
          {/* sea */}
          <path d="M0 232 C 90 214, 180 246, 268 228 C 360 210, 450 240, 540 224 C 580 217, 615 224, 640 218 L640 320 L0 320 Z" fill="oklch(0.82 0.045 210 / 0.55)" />
          {/* shore line */}
          <path d="M0 232 C 90 214, 180 246, 268 228 C 360 210, 450 240, 540 224 C 580 217, 615 224, 640 218" fill="none" stroke="oklch(0.71 0.085 65)" strokeWidth="1.5" />
          {/* road */}
          <path d="M40 60 C 160 78, 300 52, 420 84 C 520 110, 580 96, 620 108" fill="none" stroke="oklch(0.82 0.012 80)" strokeWidth="8" strokeLinecap="round" />
          {/* footpath from stay to beach */}
          <path d="M300 152 L 292 200 L 300 224" fill="none" stroke="oklch(0.48 0.028 155)" strokeWidth="1.5" strokeDasharray="4 5" />
          {/* greenery */}
          {[[110, 150], [160, 178], [430, 150], [480, 180], [530, 156], [80, 190], [390, 190]].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r={i % 2 ? 9 : 13} fill="oklch(0.48 0.028 155 / 0.28)" />
          ))}
          {/* stay marker */}
          <circle cx="300" cy="146" r="7" fill="oklch(0.34 0.018 240)" />
          <circle cx="300" cy="146" r="15" fill="none" stroke="oklch(0.34 0.018 240 / 0.3)" strokeWidth="1" />
          <text x="318" y="142" fontFamily="Cormorant Garamond, serif" fontSize="17" fill="oklch(0.34 0.018 240)">Seekers Stay</text>
          <text x="318" y="160" fontFamily="Inter, sans-serif" fontSize="10" letterSpacing="1.4" fill="oklch(0.45 0.018 240)">2 MIN WALK</text>
          {/* beach marker */}
          <circle cx="300" cy="230" r="5" fill="oklch(0.71 0.085 65)" />
          <text x="314" y="256" fontFamily="Cormorant Garamond, serif" fontSize="16" fill="oklch(0.34 0.018 240)">Ashwem Beach</text>
          <text x="46" y="46" fontFamily="Inter, sans-serif" fontSize="10" letterSpacing="1.6" fill="oklch(0.45 0.018 240)">ASHWEM — MANDREM ROAD</text>
        </svg>
      </div>
      <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-3 text-[0.85rem] text-ink/55">
        <span className="font-serif italic">A short walk between the apartment and the sea.</span>
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-bamboo"
        >
          <MapIcon size={14} strokeWidth={1.5} />
          Open in Google Maps
        </a>
      </figcaption>
    </figure>
  );
}
