"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import { content } from "@/lib/data";

const answers: Record<string, string> = content.aiExperience.answers;
const prompts = Object.keys(answers);

export function AIExperience() {
  const [active, setActive] = useState(prompts[0]);

  return (
    <section className="px-5 py-24 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted">
            {content.aiExperience.eyebrow}
          </p>
          <h2 className="mt-5 text-balance text-4xl font-semibold leading-tight sm:text-5xl">
            {content.aiExperience.headline}
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-muted">
            {content.aiExperience.description}
          </p>
        </Reveal>
        <Reveal className="rounded-2xl border border-line bg-canvas shadow-soft">
          <div className="border-b border-line p-5">
            <p className="text-sm font-medium">{content.aiExperience.intro}</p>
          </div>
          <div className="space-y-4 p-5">
            <div className="flex justify-end">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="max-w-[82%] rounded-2xl border border-ink px-4 py-3 text-md leading-6  "
                >
                  {active}
                </motion.div>
              </AnimatePresence>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={answers[active]}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
                className="max-w-[88%] rounded-2xl border border-ink  px-4 py-3 text-md leading-6  "
              >
                {answers[active]}
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="grid gap-2 border-t border-line p-4 sm:grid-cols-2">
            {prompts.map((prompt) => (
              <button
                key={prompt}
                type="button"
                onClick={() => setActive(prompt)}
                className="inline-flex min-h-11 items-center justify-between rounded-xl border border-line px-3 text-left text-sm transition-colors hover:border-ink"
              >
                <span>{prompt}</span>
                <Send size={14} />
              </button>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
