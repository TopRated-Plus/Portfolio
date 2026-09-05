"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { MouseEvent, PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type MagneticButtonProps = PropsWithChildren<{
  href: string;
  variant?: "dark" | "light";
  className?: string;
}>;

export function MagneticButton({
  href,
  variant = "dark",
  className,
  children,
}: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 18 });
  const springY = useSpring(y, { stiffness: 180, damping: 18 });
  const rotateX = useTransform(springY, [-18, 18], [4, -4]);
  const rotateY = useTransform(springX, [-18, 18], [-4, 4]);

  function onMove(event: MouseEvent<HTMLAnchorElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.22);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.22);
  }

  return (
    <motion.div style={{ x: springX, y: springY, rotateX, rotateY }}>
      <Link
        href={href}
        onMouseMove={onMove}
        onMouseLeave={() => {
          x.set(0);
          y.set(0);
        }}
        className={cn(
          "inline-flex h-12 items-center justify-center rounded-full border px-5 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ink focus:ring-offset-2 focus:ring-offset-canvas",
          variant === "dark"
            ? "border-ink bg-ink text-canvas hover:bg-ink/85"
            : "border-line bg-canvas text-ink hover:border-ink",
          className,
        )}
      >
        {children}
      </Link>
    </motion.div>
  );
}
