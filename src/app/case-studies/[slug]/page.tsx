import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArchitectureDiagram } from "@/components/sections/architecture-diagram";
import { Reveal } from "@/components/ui/reveal";
import { GalleryModal } from "@/components/ui/gallery-modal";
import { caseStudies } from "@/lib/data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) return {};

  return {
    title: study.title,
    description: `${study.solution} ${study.outcome}.`,
  };
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) notFound();

  return (
    <article>
      <section className="border-b border-line px-5 py-24 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted">
              {study.category}
            </p>

            <h1 className="mt-6 max-w-5xl text-balance text-5xl font-semibold leading-tight sm:text-7xl">
              {study.title}
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-8 text-muted">
              {study.solution}
            </p>

            <p className="mt-6 text-sm font-medium">{study.role}</p>

            {/* CTA Button */}
            {study.url && (
              <a
                href={study.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full border border-line bg-canvas px-5 py-2 text-sm font-medium transition hover:bg-line/10"
              >
                Visit website
              </a>
            )}
          </Reveal>

          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-line bg-canvas shadow-soft">
              <Image
                src={study.images[0]}
                alt={`${study.title} project preview`}
                width={1536}
                height={960}
                priority
                className="w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>
      <section className="border-b border-line px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="sticky top-28">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted">
                Business summary
              </p>
              <ul className="mt-6 space-y-4 text-lg leading-8">
                {study.summary.map((item) => (
                  <li key={item} className="border-b border-line pb-4">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal>
            <div className="rounded-2xl border border-line bg-canvas p-6 sm:p-8">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted">
                What I built
              </p>
              <p className="mt-6 text-lg leading-8 text-muted">
                {study.whatIBuilt}
              </p>
              <p className="mt-8 text-2xl font-semibold">{study.outcome}</p>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="border-b border-line px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted">
              Architecture
            </p>
            <h2 className="mt-5 max-w-3xl text-balance text-4xl font-semibold leading-tight sm:text-5xl">
              A simple operating path with explicit ownership.
            </h2>
          </Reveal>
          <div className="mt-10">
            <ArchitectureDiagram items={study.architecture} />
          </div>
        </div>
      </section>
      <section className="border-b border-line px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
          <DetailList title="Challenges" items={study.challenges} />
          <DetailList title="Results" items={study.results} />
          <DetailCard title="Tech Stack" items={study.stack} />
        </div>
      </section>
      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted">
              Gallery
            </p>
            <GalleryModal images={study.images} title={study.title} />
          </Reveal>
        </div>
      </section>
    </article>
  );
}

function DetailList({ title, items }: { title: string; items: string[] }) {
  return (
    <Reveal>
      <div className="rounded-xl border border-line bg-canvas p-6 shadow-sm">
        <h2 className="text-2xl font-semibold">{title}</h2>

        <ul className="mt-6 space-y-4 text-base leading-7 text-muted">
          {items.map((item) => (
            <li
              key={item}
              className="border-b border-line pb-4 last:border-b-0 last:pb-0"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

function DetailCard({ title, items }: { title: string; items: string[] }) {
  return (
    <Reveal>
      <div className="rounded-xl border border-line bg-canvas p-6 shadow-sm">
        <h2 className="text-2xl font-semibold">{title}</h2>

        <div className="mt-6 flex flex-wrap gap-4">
          {items.map((item) => (
            <div
              key={item}
              className="rounded-full border border-line border border-line bg-canvas px-4 py-3 text-base text-muted shadow-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
