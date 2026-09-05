"use client";

import { motion } from "framer-motion";

export function ArchitectureDiagram({ items }: { items: string[] }) {
  return (
    <div className="rounded-2xl border border-line p-5">
      <div className="grid gap-3 md:grid-cols-5">
        {items.map((item, index) => (
          <div key={item} className="relative flex items-center">
            {/* Card */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              className="w-full rounded-xl border border-line bg-canvas p-4 text-sm font-medium"
            >
              <span className="mb-5 block text-xs text-muted">
                0{index + 1}
              </span>
              {item}
            </motion.div>

            {/* Connector (only between items) */}
            {index < items.length - 1 && (
              <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 items-center">
                <div className="h-px w-2 bg-line" />
                <div className="w-0 h-0 border-l-4 border-l-line border-y-4 border-y-transparent" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
