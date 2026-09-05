"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { caseStudies, categories, type ProjectCategory } from "@/lib/data";
import { cn } from "@/lib/utils";

type ActiveCategory = ProjectCategory | "All";

export function ProjectShowcase({ compact = false }: { compact?: boolean }) {
  const [active, setActive] = useState<ActiveCategory>("All");
  const filtered = useMemo(
    () =>
      active === "All"
        ? caseStudies
        : caseStudies.filter((study) => study.category === active),
    [active],
  );

  return (
    <div>
      <div className="flex gap-2 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={cn(
              "h-10 shrink-0 rounded-full border px-4 text-sm font-medium transition-colors",
              active === category
                ? "border-ink bg-ink text-canvas"
                : "border-line bg-canvas text-muted hover:border-ink hover:text-ink",
            )}
          >
            {category}
          </button>
        ))}
      </div>
      <motion.div
        layout
        className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
      >
        {filtered.map((study, index) => (
          <motion.div
            layout
            key={study.slug}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.04, duration: 0.4 }}
          >
            <Link
              href={`/case-studies/${study.slug}`}
              className="group block overflow-hidden rounded-2xl border border-line bg-canvas transition-all duration-300 hover:-translate-y-1 hover:border-rose-300/50 hover:shadow-soft"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-ink/5">
                <Image
                  src={study.images[0]}
                  alt={`${study.title} dashboard preview`}
                  fill
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className={compact ? "p-5" : "p-6"}>
                <div className="flex items-start justify-between gap-4">
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                    {study.category}
                  </p>
                  <ArrowUpRight
                    className="text-muted transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-ink"
                    size={18}
                  />
                </div>
                <h3 className="mt-5 text-2xl font-semibold">{study.title}</h3>
                <p className="mt-4 text-sm leading-6 text-muted">
                  {study.solution}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {study.stack.slice(0, 4).map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-line px-3 py-1 text-xs text-muted"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
