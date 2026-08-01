import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import {
  Waves, Home, Wifi, CookingPot, Leaf, Laptop, Sparkles, Snowflake, Zap,
  Refrigerator, Flame, UtensilsCrossed, Tv, Sun, BedDouble, WashingMachine,
  Droplets, Utensils, Clock, Users, Heart, Coffee, ShoppingBasket, Flower2,
  Palmtree, MapPin, Car, ShowerHead, Check, X, MessageCircle, Map as MapIcon,
  Instagram, Mail, UtensilsCrossed as Dining,
} from "lucide-react";
import { Page } from "@/components/site-layout";
import { Reveal } from "@/components/reveal";
import stayHero from "@/assets/stay-hero.jpg";
import stayMorning from "@/assets/stay-morning.jpg";
import stayBeach from "@/assets/stay-beach.jpg";
import hostAkash from "@/assets/host-akash.jpg.asset.json";
import bansuriImg from "@/assets/gallery-river-bansuri.jpg.asset.json";
import microgreensImg from "@/assets/soil/IMG_20260616_100131.jpg.asset.json";

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

const WHATSAPP_URL =
  "https://wa.me/917027029889?text=Hi%20I'm%20interested%20in%20staying%20at%20Seekers%20Stay.%20Could%20you%20please%20share%20availability%20and%20pricing%3F";
const MAPS_URL = "https://maps.google.com/?q=Ashwem+Beach+Goa";
const MAPS_EMBED_URL =
  "https://www.google.com/maps?q=Ashwem+Beach,+Goa&output=embed";
const INSTAGRAM_URL = "https://www.instagram.com/echoesoftheseeker";
const EMAIL = "hello@echoesoftheseeker.com";

export const Route = createFileRoute("/seekers-stay")({
  head: () => ({
    meta: [
      { title: "Seekers Stay | 1 BHK & Studio Apartments in Ashwem, Goa" },
      {
        name: "description",
        content:
          "Stay just minutes from Ashwem Beach in fully furnished 1 BHK and Studio Apartments with kitchen, WiFi, balcony and a peaceful atmosphere. Perfect for workations, families and long stays.",
      },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Seekers Stay | 1 BHK & Studio Apartments in Ashwem, Goa" },
      {
        property: "og:description",
        content:
          "Fully furnished 1 BHK and Studio Apartments a 2-minute walk from Ashwem Beach, Goa. Kitchen, WiFi, balcony, parking and weekly housekeeping.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Stay,
});

const WHY = [
  { Icon: Waves, text: "Just a 2-minute walk to Ashwem Beach" },
  { Icon: Home, text: "Fully Furnished Apartments" },
  { Icon: CookingPot, text: "Private Kitchen" },
  { Icon: Wifi, text: "Free WiFi" },
  { Icon: Car, text: "Parking Available" },
  { Icon: Zap, text: "Power Backup" },
  { Icon: ShowerHead, text: "Hot Water" },
  { Icon: Leaf, text: "Peaceful Neighbourhood" },
  { Icon: Laptop, text: "Perfect for Workations" },
  { Icon: Sparkles, text: "Weekly Housekeeping" },
] as const;

const ONE_BHK = [
  "Separate Bedroom", "Living Room", "Private Kitchen", "Dining Area",
  "Balcony", "Air Conditioning", "Refrigerator", "Television",
  "Gas Stove", "Basic Cookware", "WiFi",
];

const STUDIO = [
  "Open Living & Sleeping Area", "Kitchenette", "Balcony", "Air Conditioning",
  "Refrigerator", "Television", "Dining Area", "WiFi",
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
];

const CATEGORIES = ["All", "Exterior", "Living Room", "Bedroom", "Kitchen", "Balcony", "Reception"] as const;

const INCLUDED = [
  { Icon: Wifi, text: "WiFi" },
  { Icon: Snowflake, text: "Air Conditioning" },
  { Icon: CookingPot, text: "Kitchen" },
  { Icon: Refrigerator, text: "Refrigerator" },
  { Icon: Flame, text: "Gas Stove" },
  { Icon: UtensilsCrossed, text: "Cooking Utensils" },
  { Icon: Utensils, text: "Crockery" },
  { Icon: Dining, text: "Dining Area" },
  { Icon: Tv, text: "Television" },
  { Icon: Sun, text: "Balcony" },
  { Icon: BedDouble, text: "Fresh Linen" },
  { Icon: Droplets, text: "Fresh Towels" },
  { Icon: Sparkles, text: "Weekly Housekeeping" },
  { Icon: WashingMachine, text: "Washing Machine (Common Area)" },
  { Icon: Droplets, text: "Water Purifier (Common Area)" },
  { Icon: Car, text: "Parking" },
  { Icon: Zap, text: "Power Backup" },
  { Icon: ShowerHead, text: "Hot Water" },
] as const;

const GOOD_TO_KNOW = [
  { Icon: Clock, label: "Flexible Check-in", body: "Subject to availability." },
  { Icon: Clock, label: "Check-out", body: "Before 12:00 PM" },
  { Icon: Utensils, label: "Meals", body: "Breakfast and home-style meals available on request." },
  { Icon: Clock, label: "Late Check-out", body: "Subject to availability." },
] as const;

const PERFECT_FOR = [
  { Icon: Heart, text: "Couples" },
  { Icon: Users, text: "Families" },
  { Icon: Waves, text: "Beach Holidays" },
  { Icon: Palmtree, text: "Long Stay Guests" },
  { Icon: Laptop, text: "Digital Nomads" },
  { Icon: Home, text: "Remote Workers" },
] as const;

const DISCOVER = [
  { Icon: Coffee, title: "Cafés We Love", items: ["Koleso", "Baba Au Rhum", "Kaia", "Caffè Inaara", "Café Ossa", "Artjuna"] },
  { Icon: Utensils, title: "Dining Nearby", items: ["La Plage", "Verandah", "Palasha", "Elevar", "Oo! Olivia", "Panache"] },
  { Icon: Waves, title: "Beaches", items: ["Ashwem Beach", "Mandrem Beach", "Morjim Beach", "Arambol Beach", "Querim Beach"] },
  { Icon: Flower2, title: "Wellness & Slow Living", items: ["Siolim Village", "Yoga Studios", "Wellness Experiences", "Nature Walks"] },
  { Icon: ShoppingBasket, title: "Essentials Nearby", items: ["Grocery", "Pharmacy", "ATM", "Scooter Rental", "Taxi Assistance"] },
] as const;

const DAY = [
  { time: "Morning", body: "Enjoy coffee on your balcony surrounded by greenery." },
  { time: "Afternoon", body: "Relax, work remotely or explore Ashwem's cafés." },
  { time: "Evening", body: "Walk to Ashwem Beach for sunset." },
  { time: "Night", body: "Return to a peaceful apartment designed to feel like home." },
] as const;

const FAQ = [
  { q: "Is WiFi available?", a: "Yes. Every apartment has free WiFi, comfortable for video calls and remote work." },
  { q: "Is parking available?", a: "Yes. On-site parking is available for cars and two-wheelers." },
  { q: "Is hot water available?", a: "Yes. Hot water is available in every apartment." },
  { q: "Is housekeeping included?", a: "Yes. Housekeeping is provided once or twice every week, with fresh linen and towels changed periodically." },
  { q: "Can I stay long-term?", a: "Yes. Long stays are very welcome, and discounted weekly and monthly rates are available on request." },
  { q: "Are meals available?", a: "Breakfast and simple home-style meals can be arranged on request." },
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
          fetchPriority="high"
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
              Fully furnished 1 BHK &amp; Studio Apartments in Ashwem, Goa for comfortable short and long stays.
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
          <Reveal delay={400}>
            <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-serif text-[0.9rem] text-paper/85">
              {["Direct Bookings", "Best Rates", "Personal Assistance"].map((t) => (
                <li key={t} className="inline-flex items-center gap-2">
                  <Check size={13} strokeWidth={2} className="text-bamboo" />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Why Seekers Stay */}
      <section className="border-b border-rule/70">
        <div className="mx-auto max-w-5xl px-6 py-14 md:py-18 lg:px-10 lg:py-20">
          <Reveal>
            <SectionHead index="One" title="Why Seekers Stay" />
          </Reveal>
          <div className="mt-10 grid gap-px overflow-hidden border border-rule/70 bg-rule/70 sm:grid-cols-2 lg:grid-cols-3">
            {WHY.map(({ Icon, text }, i) => (
              <Reveal key={text} delay={(i % 3) * 60}>
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
                imgAlt="One bedroom apartment living area"
                name="1 BHK Apartment"
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
              <p className="eyebrow mb-4">Available Accommodation</p>
              <p className="serif-display text-[1.45rem] text-ink md:text-[1.7rem]">
                6 Fully Furnished Apartments
              </p>
              <ul className="mt-4 flex flex-col gap-2 font-serif text-[1.05rem] italic text-ink/75 sm:flex-row sm:gap-10">
                <li>3 × 1 BHK Apartments</li>
                <li>3 × Studio Apartments</li>
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
              <p className="font-serif italic text-ink/70">Additional housekeeping can be arranged upon request.</p>
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
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {GOOD_TO_KNOW.map(({ Icon, label, body }, i) => (
              <Reveal key={label} delay={(i % 4) * 60}>
                <div className="h-full border border-rule/70 bg-paper p-6 transition-colors duration-300 hover:border-bamboo/60">
                  <Icon size={18} strokeWidth={1.4} className="text-bamboo" />
                  <p className="eyebrow mt-4">{label}</p>
                  <p className="mt-2 font-serif text-[1.1rem] leading-snug text-ink">{body}</p>
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

      {/* Discover Ashwem + map */}
      <section className="border-b border-rule/70">
        <div className="mx-auto max-w-5xl px-6 py-14 md:py-18 lg:px-10 lg:py-20">
          <Reveal>
            <SectionHead
              index="Eight"
              title="Discover Ashwem"
              lede="A few of the places we send guests to, all within a short walk or ride."
            />
          </Reveal>
          <div className="mt-10 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {DISCOVER.map(({ Icon, title, items }, i) => (
              <Reveal key={title} delay={(i % 3) * 60}>
                <div className="h-full border-t border-rule/70 pt-6">
                  <div className="flex items-center gap-3">
                    <Icon size={18} strokeWidth={1.4} className="text-bamboo" />
                    <h3 className="font-serif text-[1.2rem] text-ink">{title}</h3>
                  </div>
                  <ul className="mt-4 space-y-2 text-[0.98rem] leading-[1.7] text-ink/80">
                    {items.map((it) => (
                      <li key={it}>— {it}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

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

      {/* Pricing */}
      <section className="border-b border-rule/70 bg-secondary/30">
        <div className="mx-auto max-w-5xl px-6 py-14 md:py-18 lg:px-10 lg:py-20">
          <Reveal>
            <SectionHead index="Ten" title="Pricing" />
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              { name: "Studio Apartment", price: "From ₹1,800/night" },
              { name: "1 BHK Apartment", price: "From ₹2,200/night" },
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
              <p>Rates vary depending on season, weekends, holidays and duration of stay.</p>
              <p>Long-stay discounts available.</p>
              <p>Please contact us directly for weekly and monthly pricing.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Meet Your Host */}
      <section className="border-b border-rule/70">
        <div className="mx-auto max-w-5xl px-6 py-14 md:py-18 lg:px-10 lg:py-20">
          <div className="grid gap-12 md:grid-cols-5 md:gap-16">
            <Reveal className="md:col-span-2">
              <figure>
                <img
                  src={hostAkash.url}
                  alt="Akash, host of Seekers Stay, playing the bansuri by a river in Goa"
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
              </figure>
            </Reveal>
            <div className="md:col-span-3">
              <Reveal>
                <SectionHead index="Eleven" title="Meet Your Host — Akash" />
                <div className="mt-8 space-y-5 text-[1.05rem] leading-[1.85] text-ink/85">
                  <p>Welcome to Seekers Stay!</p>
                  <p>I'm Akash, your host.</p>
                  <p>
                    I created this space with the idea of offering more than just a comfortable place to
                    stay — a peaceful base where guests can slow down, explore North Goa and truly feel at home.
                  </p>
                  <p>
                    Whether you're here for a weekend, a workation or a longer stay, I'm always happy to share
                    local recommendations and help make your visit memorable.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Experiences */}
      <section className="border-b border-rule/70 bg-secondary/30">
        <div className="mx-auto max-w-5xl px-6 py-14 md:py-18 lg:px-10 lg:py-20">
          <Reveal>
            <SectionHead
              index="Twelve"
              title="Signature Experiences"
              lede="Along with a comfortable stay, guests have the opportunity to enjoy experiences inspired by music, nature and slow living."
            />
          </Reveal>

          <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-14">
            <Reveal>
              <ExperienceCard
                img={bansuriImg.url}
                imgAlt="Playing the Indian bamboo flute beside a river"
                title="Discover the Indian Bamboo Flute"
                body={[
                  "Experience the timeless sound of the Indian bamboo flute through relaxed beginner-friendly sessions with Akash.",
                  "Whether you're simply curious or wish to begin learning, it's a memorable experience available during your stay.",
                ]}
                cta="Learn More"
                to="/learn-bansuri"
              />
            </Reveal>
            <Reveal delay={120}>
              <ExperienceCard
                img={microgreensImg.url}
                imgAlt="Trays of fresh microgreens growing"
                title="Discover Microgreens"
                body={[
                  "Discover how fresh, nutrient-rich microgreens are grown — from seed to harvest.",
                  "Learn simple growing techniques and explore the world of fresh local greens through Seekers Soil.",
                ]}
                cta="Explore Seekers Soil"
                to="/seekers-soil"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-rule/70">
        <div className="mx-auto max-w-3xl px-6 py-14 md:py-18 lg:px-10 lg:py-20">
          <Reveal>
            <SectionHead index="Thirteen" title="Questions" />
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

      {/* A Few Gentle Notes */}
      <section className="border-b border-rule/70">
        <div className="mx-auto max-w-2xl px-6 py-14 md:py-18 lg:px-10 lg:py-20">
          <Reveal>
            <SectionHead index="Fourteen" title="A Few Gentle Notes" />
            <div className="mt-8 space-y-5 text-[1.05rem] leading-[1.85] text-ink/85">
              <p>We hope every guest feels at home here.</p>
              <p>
                A few simple courtesies — respecting fellow guests, caring for the space and being mindful
                of the peaceful surroundings — help us keep Seekers Stay welcoming for everyone.
              </p>
              <p className="font-serif italic text-ink/70">
                Detailed house guidelines will be shared after booking.
              </p>
            </div>
          </Reveal>
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
              Whether you're planning a weekend getaway, a workation or a longer stay, we'd love to host you.
              Book directly with us for the best available rates and personalised assistance.
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
            <p className="mt-2 inline-flex items-center gap-2 font-serif text-[1rem] italic text-ink/60">
              <MapPin size={14} strokeWidth={1.5} className="text-bamboo" />
              Ashwem, Goa
            </p>
          </div>
          <ul className="flex flex-wrap gap-x-8 gap-y-3 text-[0.95rem] text-ink/75">
            {[
              { Icon: MessageCircle, label: "WhatsApp", href: WHATSAPP_URL },
              { Icon: Mail, label: "Email", href: `mailto:${EMAIL}` },
              { Icon: Instagram, label: "Instagram", href: INSTAGRAM_URL },
              { Icon: MapIcon, label: "Google Maps", href: MAPS_URL },
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

      <FloatingWhatsApp />
    </Page>
  );
}

function ExperienceCard({
  img, imgAlt, title, body, cta, to,
}: {
  img: string; imgAlt: string; title: string; body: string[]; cta: string; to: "/learn-bansuri" | "/seekers-soil";
}) {
  return (
    <article className="flex h-full flex-col">
      <figure className="overflow-hidden">
        <img
          src={img}
          alt={imgAlt}
          loading="lazy"
          className="aspect-[4/3] w-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-[1.02]"
        />
      </figure>
      <h3 className="mt-7 font-serif text-[1.35rem] text-ink md:text-[1.5rem]">{title}</h3>
      <div className="mt-4 space-y-3 text-[1rem] leading-[1.8] text-ink/80">
        {body.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
      <p className="mt-4 font-serif text-[0.95rem] italic text-ink/60">Available on request.</p>
      <Link
        to={to}
        className="mt-6 inline-flex w-fit items-center gap-2 border-b border-ink/25 pb-1 font-serif text-[0.95rem] text-ink transition-colors duration-300 hover:border-bamboo hover:text-forest"
      >
        {cta}
        <span aria-hidden>→</span>
      </Link>
    </article>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 md:bottom-7 md:right-7"
    >
      <span className="pointer-events-none hidden rounded-full bg-ink px-3 py-1.5 font-serif text-[0.85rem] text-paper opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:block">
        Book on WhatsApp
      </span>
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full shadow-lg" style={{ backgroundColor: "#25D366" }}>
        <span
          className="absolute inset-0 animate-ping rounded-full opacity-40 motion-reduce:hidden"
          style={{ backgroundColor: "#25D366", animationDuration: "2.8s" }}
        />
        <MessageCircle size={26} strokeWidth={1.6} className="relative text-white" />
      </span>
    </a>
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
  const [lightbox, setLightbox] = useState<number | null>(null);
  const shown = useMemo(
    () => (cat === "All" ? GALLERY : GALLERY.filter((g) => g.cat === cat)),
    [cat],
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((n) => ((n ?? 0) + 1) % shown.length);
      if (e.key === "ArrowLeft") setLightbox((n) => ((n ?? 0) - 1 + shown.length) % shown.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, shown.length]);

  const active = lightbox === null ? null : shown[lightbox];

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
                onClick={() => { setCat(c); setLightbox(null); }}
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
                <button
                  type="button"
                  onClick={() => setLightbox(i)}
                  aria-label={`Open image: ${img.alt}`}
                  className="block w-full overflow-hidden"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="aspect-[4/5] w-full cursor-zoom-in object-cover transition-transform duration-[900ms] ease-out hover:scale-[1.03] md:aspect-[4/3]"
                  />
                </button>
                <figcaption className="mt-2 text-[0.78rem] tracking-wide text-ink/50">{img.cat}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/90 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setLightbox(null)}
            className="absolute right-5 top-5 text-paper/80 transition-colors hover:text-bamboo"
          >
            <X size={26} strokeWidth={1.5} />
          </button>
          <figure onClick={(e) => e.stopPropagation()} className="max-h-[88vh] max-w-5xl">
            <img src={active.src} alt={active.alt} className="max-h-[80vh] w-auto object-contain" />
            <figcaption className="mt-3 text-center font-serif text-[0.95rem] italic text-paper/75">
              {active.alt}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}

function LocationMap() {
  return (
    <figure className="mt-14">
      <div className="overflow-hidden rounded-2xl border border-rule/70">
        <iframe
          src={MAPS_EMBED_URL}
          title="Map showing the location of Seekers Stay in Ashwem, Goa"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          className="h-[320px] w-full border-0 md:h-[420px]"
        />
      </div>
      <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-4 text-[0.9rem] text-ink/60">
        <span className="font-serif italic">A short walk between the apartment and the sea.</span>
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-ink/25 px-5 py-2.5 font-serif text-[0.9rem] text-ink transition-colors duration-300 hover:border-bamboo hover:text-forest"
        >
          <MapIcon size={15} strokeWidth={1.5} />
          Get Directions
        </a>
      </figcaption>
    </figure>
  );
}
