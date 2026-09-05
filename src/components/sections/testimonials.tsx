"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import { content, testimonials } from "@/lib/data";

export function Testimonials() {
  const [active, setActive] = useState(0);
  const testimonial = testimonials[active];

  function move(direction: number) {
    setActive(
      (current) =>
        (current + direction + testimonials.length) % testimonials.length,
    );
  }

  return (
    <section className="border-b border-line px-5 py-24 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted">
            {content.testimonialsSection.eyebrow}
          </p>
          <h2 className="mt-5 max-w-xl text-balance text-4xl font-semibold leading-tight sm:text-5xl">
            {content.testimonialsSection.headline}
          </h2>
          <div className="mt-8 flex gap-2">
            <button
              type="button"
              onClick={() => move(-1)}
              aria-label="Previous testimonial"
              className="inline-flex size-11 items-center justify-center rounded-full border border-line bg-canvas hover:border-ink"
            >
              <ArrowLeft size={16} />
            </button>
            <button
              type="button"
              onClick={() => move(1)}
              aria-label="Next testimonial"
              className="inline-flex size-11 items-center justify-center rounded-full border border-line bg-canvas hover:border-ink"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </Reveal>
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-line bg-canvas p-7 shadow-soft sm:p-10">
            <Quote className="text-muted" size={28} />
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonial.quote}
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -18 }}
                transition={{ duration: 0.35 }}
              >
                <p className="mt-8 text-balance text-2xl font-medium leading-10 sm:text-3xl">
                  {testimonial.quote}
                </p>
                <div className="mt-10 border-t border-line pt-6">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="mt-1 text-sm text-muted">{testimonial.title}</p>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="mt-8 flex gap-2">
              {testimonials.map((item, index) => (
                <button
                  key={item.name + index}
                  type="button"
                  aria-label={`View testimonial ${index + 1}`}
                  onClick={() => setActive(index)}
                  className={`h-1.5 rounded-full transition-all ${active === index ? "w-8 bg-ink" : "w-2 bg-ink/20"}`}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
