import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Reveal } from "@/components/ui/reveal";
import { content, metrics } from "@/lib/data";

export function Metrics() {
  return (
    <section className="border-b border-line px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted">
            {content.metricsSection.eyebrow}
          </p>
          <h2 className="mt-5 max-w-3xl text-balance text-4xl font-semibold leading-tight sm:text-5xl">
            {content.metricsSection.headline}
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line  md:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="bg-canvas p-7">
              <p className="text-4xl font-semibold sm:text-5xl">
                <AnimatedCounter value={metric.value} suffix={metric.suffix} />
              </p>
              <p className="mt-4 text-sm text-muted">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
