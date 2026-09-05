"use client";

import Image from "next/image";
import { ArrowDown, ArrowRight } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { content } from "@/lib/data";

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const x = useSpring(useTransform(mouseX, [0, 1], [-14, 14]), {
    stiffness: 80,
    damping: 20,
  });
  const y = useSpring(useTransform(mouseY, [0, 1], [-10, 10]), {
    stiffness: 80,
    damping: 20,
  });

  return (
    <section
      className="relative overflow-hidden border-b border-line"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        mouseX.set((event.clientX - rect.left) / rect.width);
        mouseY.set((event.clientY - rect.top) / rect.height);
      }}
    >
      <motion.div
        style={{ x, y }}
        className="pointer-events-none absolute inset-x-0 top-20 mx-auto h-[420px] max-w-5xl rounded-full border border-line opacity-60  blur-3xl"
      />
      {/* <div className="pointer-events-none absolute -right-24 top-28 h-72 w-72 rounded-full bg-rose-600/25 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-16 h-80 w-80 rounded-full bg-blue-600/25 blur-3xl" /> */}
      <div className="noise absolute inset-0 opacity-70" />
      <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[1.04fr_0.96fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-7 text-sm font-medium uppercase tracking-[0.18em] text-muted"
          >
            {content.hero.eyebrow}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-5xl text-balance text-6xl font-semibold leading-[0.94] tracking-normal sm:text-7xl lg:text-8xl"
          >
            {content.hero.headline}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              delay: 0.18,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-8 max-w-2xl"
          >
            <p className="text-2xl font-medium text-ink sm:text-3xl">
              {content.hero.subheadline}
            </p>
            <p className="mt-5 text-lg leading-8 text-muted sm:text-xl">
              {content.hero.description}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.28 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <MagneticButton href="/case-studies">
              {content.hero.primaryCta}{" "}
              <ArrowRight className="ml-2" size={16} />
            </MagneticButton>
            <MagneticButton href="/contact" variant="light">
              {content.hero.secondaryCta}
            </MagneticButton>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[520px]"
        >
          <motion.div
            style={{ x, y }}
            className="grid-panel sci-panel relative overflow-hidden rounded-[2rem] border border-line bg-canvas p-3 shadow-soft"
          >
            <Image
              src={content.hero.image}
              alt={content.hero.imageAlt}
              width={700}
              height={500}
              priority
              className="aspect-[4/5] w-full rounded-[1.45rem] object-cover object-center grayscale-[12%]"
            />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/35 bg-white/78 p-4 text-white shadow-soft backdrop-blur-xl">
              <p className="text-sm font-semibold ">
                {content.hero.badgeTitle}
              </p>
              <p className="mt-1 text-xs text-black/62">
                {content.hero.badgeText}
              </p>
            </div>
          </motion.div>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-3 top-8 hidden rounded-2xl border border-line bg-canvas px-4 py-3 text-sm   shadow-soft   sm:block"
          >
            {content.hero.floatingBadge}
          </motion.div>
        </motion.div>
        <motion.a
          href="#terminal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="absolute bottom-7 left-5 inline-flex items-center gap-2 text-sm text-muted hover:text-ink sm:left-8"
        >
          <ArrowDown size={15} />
          {content.hero.scrollLabel}
        </motion.a>
      </div>
    </section>
  );
}
