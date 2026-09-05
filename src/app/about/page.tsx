import type { Metadata } from "next";
import { Reveal } from "@/components/ui/reveal";
import { content } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description: content.about.metadataDescription,
};

export default function AboutPage() {
  return (
    <section className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted">
            {content.about.eyebrow}
          </p>
          <h1 className="mt-6 max-w-4xl text-balance text-5xl font-semibold leading-tight sm:text-7xl">
            {content.about.headline}
          </h1>
        </Reveal>
        <div className="mt-16 grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div className="sticky top-28 rounded-2xl border border-line bg-canvas p-6">
              <p className="text-sm text-muted">{content.about.profileLabel}</p>
              <p className="mt-4 text-2xl font-semibold leading-snug">
                {content.about.profileText}
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                {content.about.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-line p-3"
                  >
                    <p className="text-muted">{stat.label}</p>
                    <p className="mt-1 font-medium">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <div className="space-y-10 text-lg leading-8 text-muted">
            {content.about.story.map((paragraph) => (
              <Reveal key={paragraph}>
                <p>{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="mt-20 grid gap-4 md:grid-cols-2">
          {content.about.principles.map((principle, index) => (
            <Reveal key={principle} delay={index * 0.05}>
              <div className="h-full rounded-2xl border border-line bg-canvas p-6">
                <p className="text-sm text-muted">0{index + 1}</p>
                <p className="mt-6 text-xl font-medium leading-8">
                  {principle}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-20 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <h2 className="text-3xl font-semibold">
              {content.about.historyTitle}
            </h2>
            <div className="mt-8 divide-y divide-line border-y border-line">
              {content.about.history.map(([role, company, date]) => (
                <div key={`${role}-${company}`} className="py-5">
                  <p className="font-medium">{role}</p>
                  <p className="mt-1 text-sm text-muted">{company}</p>
                  <p className="mt-2 text-sm text-muted">{date}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl border border-line bg-canvas p-6">
              <p className="text-sm text-muted">
                {content.about.educationLabel}
              </p>
              <p className="mt-3 text-xl font-semibold">
                {content.about.educationSchool}
              </p>
              <p className="mt-1 text-muted">{content.about.educationDegree}</p>
            </div>
          </Reveal>
          <Reveal>
            <h2 className="text-3xl font-semibold">
              {content.about.skillsTitle}
            </h2>
            <div className="mt-8 flex flex-wrap gap-2">
              {content.about.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-line bg-canvas px-4 py-2 text-sm text-muted"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
