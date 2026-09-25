import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Page } from "@/components/site-layout";
import { getJournalEssay } from "@/lib/journal-essays";

export const Route = createFileRoute("/journal/$slug")({
  loader: ({ params }) => {
    const essay = getJournalEssay(params.slug);
    if (!essay) throw notFound();
    return essay;
  },
  head: ({ loaderData }) => {
    const title = loaderData?.title ?? "Essay";
    const description = loaderData?.excerpt ?? "A reflection from Echoes of the Seeker.";
    return {
      meta: [
        { title: `${title} — Echoes of the Seeker` },
        { name: "description", content: description },
        { property: "og:title", content: `${title} — Echoes of the Seeker` },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary" },
      ],
    };
  },
  component: JournalEssay,
});

function JournalEssay() {
  const essay = Route.useLoaderData();

  return (
    <Page>
      <article>
        <header className="border-b border-rule/70">
          <div className="mx-auto max-w-3xl px-6 py-20 md:py-24 lg:px-10 lg:py-28">
            <p className="eyebrow">{essay.category}</p>
            <h1 className="serif-display mt-6 text-5xl text-ink md:text-7xl">{essay.title}</h1>
          </div>
        </header>
        <div className="mx-auto max-w-2xl px-6 py-16 md:py-20 lg:px-10 lg:py-24">
          <div className="space-y-6 font-serif text-[1.2rem] leading-[1.85] text-ink/85 md:text-[1.35rem]">
            {essay.paragraphs.map((paragraph, index) => (
              <p key={`${essay.slug}-${index}`}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-16 border-t border-rule/70 pt-8">
            <Link to="/journal" className="eyebrow transition-colors hover:text-bamboo">
              ← Back to the Journal
            </Link>
          </div>
        </div>
      </article>
    </Page>
  );
}