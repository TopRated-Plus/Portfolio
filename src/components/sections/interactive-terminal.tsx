"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Bot, Boxes, Cpu, Workflow } from "lucide-react";
import { useMemo, useState } from "react";
import { content } from "@/lib/data";

const icons = [Bot, Workflow, Cpu, Boxes];
const actions = content.terminal.actions.map((action, index) => ({
  ...action,
  icon: icons[index] ?? Bot,
}));

export function InteractiveTerminal() {
  const [active, setActive] = useState(0);
  const current = actions[active];
  const prompt = useMemo(
    () => current.label.toLowerCase().replaceAll(" ", "-"),
    [current.label],
  );

  return (
    <section id="terminal" className="border-b border-line px-5 py-24 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted">
            {content.terminal.eyebrow}
          </p>
          <h2 className="mt-5 max-w-xl text-balance text-4xl font-semibold leading-tight sm:text-5xl">
            {content.terminal.headline}
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-8 text-muted">
            {content.terminal.description}
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {actions.map((action, index) => {
              const Icon = action.icon;
              return (
                <button
                  key={action.label}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`flex h-14 items-center gap-3 rounded-xl border px-4 text-left text-sm font-medium transition-all ${
                    active === index
                      ? "border-ink bg-ink text-canvas"
                      : "border-line bg-canvas text-ink hover:border-ink"
                  }`}
                >
                  <Icon size={18} />
                  {action.label}
                </button>
              );
            })}
          </div>
        </div>
        <div className="overflow-hidden rounded-2xl border border-line bg-ink text-canvas shadow-soft">
          <div className="flex h-12 items-center gap-2 border-b border-black/10 px-4">
            <span className="size-3 rounded-full dark:bg-black/60 bg-white/60" />
            <span className="size-3 rounded-full dark:bg-black/40 bg-white/40" />
            <span className="size-3 rounded-full dark:bg-black/20 bg-white/20" />
            <span className="ml-3 font-mono text-xs dark:text-black/55 text-white/55">
              {content.terminal.windowTitle}
            </span>
          </div>
          <div className="min-h-[330px] p-5 font-mono text-sm leading-7 sm:p-7">
            <p className="dark:text-black/50 text-white/50">$ run {prompt}</p>
            <AnimatePresence mode="wait">
              <motion.div
                key={current.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
                className="mt-6 space-y-4"
              >
                {current.lines.map((line, index) => (
                  <motion.p
                    key={line}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.22, duration: 0.35 }}
                    className={
                      index === current.lines.length - 1
                        ? "dark:text-black text-white"
                        : "dark:text-black/68 text-white/68"
                    }
                  >
                    <span className="mr-3 dark:text-black/35 text-white/35">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {line}
                  </motion.p>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
