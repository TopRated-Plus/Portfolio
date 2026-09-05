"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { content } from "@/lib/data";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="sci-panel rounded-2xl border border-line p-5 shadow-soft sm:p-7"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium">
          {content.contact.form.nameLabel}
          <input
            className="h-12 w-full rounded-xl border border-line bg-canvas px-4 mt-2 outline-none transition-colors focus:border-ink"
            required
          />
        </label>
        <label className="space-y-2 text-sm font-medium">
          {content.contact.form.emailLabel}
          <input
            type="email"
            className="h-12 w-full rounded-xl border border-line bg-canvas px-4 mt-2 outline-none transition-colors focus:border-ink"
            required
          />
        </label>
      </div>
      <label className="mt-4 block space-y-2 text-sm font-medium">
        {content.contact.form.focusLabel}
        <select className="h-12 w-full rounded-xl border border-line bg-canvas px-4 mt-2 outline-none transition-colors focus:border-ink">
          {content.contact.form.options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </label>
      <label className="mt-4 block space-y-2 text-sm font-medium">
        {content.contact.form.messageLabel}
        <textarea
          className="min-h-36 w-full resize-none rounded-xl border border-line bg-canvas p-4 mt-2 outline-none transition-colors focus:border-ink"
          required
        />
      </label>
      <button
        type="submit"
        className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-ink bg-ink px-5 text-sm font-medium border border-ink bg-ink text-canvas transition-opacity hover:opacity-85 sm:w-auto"
      >
        {content.contact.form.submitLabel} <Send size={16} />
      </button>
      <AnimatePresence>
        {sent ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-5 flex items-center gap-3 rounded-xl border border-line p-4 text-sm"
          >
            <span className="inline-flex size-7 items-center justify-center rounded-full bg-ink text-canvas">
              <Check size={15} />
            </span>
            {content.contact.form.successMessage}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </form>
  );
}
