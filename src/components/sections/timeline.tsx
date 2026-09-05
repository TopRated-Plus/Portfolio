"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";
import { content } from "@/lib/data";

const stages = content.timeline.stages;

export function Timeline() {
  return (
    <section className="border-b border-line px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted">
            {content.timeline.eyebrow}
          </p>
          <h2 className="mt-5 text-balance text-4xl font-semibold leading-tight sm:text-5xl">
            {content.timeline.headline}
          </h2>
        </Reveal>
        <div className="relative mt-14">
          <div className="absolute left-4 top-2 h-[calc(100%-1rem)] w-px bg-line md:left-1/2" />
          {stages.map(([title, body], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className={`relative grid gap-6 pb-12 pl-12 md:grid-cols-2 md:pl-0 ${
                index % 2 === 0 ? "md:text-right" : "md:text-left"
              }`}
            >
              <div
                className={`absolute left-[9px] top-1 size-4 rounded-full border border-ink bg-canvas md:left-[calc(50%-0.5rem)]`}
              />
              <div
                className={
                  index % 2 === 0 ? "md:pr-12" : "md:col-start-2 md:pl-12"
                }
              >
                <p className="text-2xl font-semibold">{title}</p>
                <p className="mt-3 text-base leading-7 text-muted">{body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
