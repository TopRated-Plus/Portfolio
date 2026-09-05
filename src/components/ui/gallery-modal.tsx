"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Props = {
  images: string[];
  title: string;
};

export function GalleryModal({ images, title }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const open = (index: number) => {
    setActiveIndex(index);
    setIsOpen(true);
  };

  const close = () => setIsOpen(false);

  const next = () =>
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  const prev = () =>
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  // ESC + scroll lock
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    document.addEventListener("keydown", handleKey);

    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen]);

  return (
    <>
      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => open(index)}
            className="cursor-pointer overflow-hidden rounded-2xl border border-line bg-canvas aspect-[4/3]"
          >
            <Image
              src={img}
              alt={`${title} ${index}`}
              width={800}
              height={600}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* MODAL */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          {/* close */}
          <button
            onClick={close}
            className="absolute top-6 right-6 text-white text-3xl"
          >
            ✕
          </button>

          {/* prev */}
          <button
            onClick={prev}
            className="absolute left-6 text-white text-5xl select-none"
          >
            ‹
          </button>

          {/* image */}
          <div className="max-w-5xl w-full px-6">
            <Image
              src={images[activeIndex]}
              alt=""
              width={1600}
              height={1000}
              className="w-full h-auto object-contain rounded-xl"
              priority
            />
          </div>

          {/* next */}
          <button
            onClick={next}
            className="absolute right-6 text-white text-5xl select-none"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
