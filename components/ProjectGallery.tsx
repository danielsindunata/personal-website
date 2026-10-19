"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import type { ProjectGalleryItem } from "@/data/projects";

type ProjectGalleryProps = {
  items: ProjectGalleryItem[];
  objectFit?: "contain" | "cover";
};

export function ProjectGallery({
  items,
  objectFit = "contain",
}: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const isOpen = activeIndex !== null;
  const activeItem = isOpen ? items[activeIndex] : null;
  const hasMultiple = items.length > 1;

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
        return;
      }
      if (!hasMultiple || activeIndex === null) return;
      if (event.key === "ArrowRight") {
        event.preventDefault();
        setActiveIndex((activeIndex + 1) % items.length);
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setActiveIndex((activeIndex - 1 + items.length) % items.length);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, activeIndex, hasMultiple, items.length]);

  if (items.length === 0) return null;

  return (
    <>
      <div className="-mx-6 mt-6 flex gap-4 overflow-x-auto px-6 pb-2 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0">
        {items.map((item, index) => (
          <button
            key={`${item.src}-${index}`}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`View larger: ${item.alt}`}
            className="group relative aspect-[16/10] w-[78vw] shrink-0 cursor-pointer overflow-hidden border border-border bg-[#121514] text-left transition hover:border-accent-teal/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-teal md:w-auto"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className={
                objectFit === "cover"
                  ? "object-cover transition duration-300 group-hover:scale-[1.02]"
                  : "object-contain p-2 transition duration-300 group-hover:scale-[1.02]"
              }
              sizes="(max-width: 768px) 78vw, 33vw"
            />
          </button>
        ))}
      </div>

      {isOpen && activeItem ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          onClick={() => setActiveIndex(null)}
        >
          <button
            ref={closeRef}
            type="button"
            onClick={() => setActiveIndex(null)}
            className="absolute right-4 top-4 z-10 border border-white/20 bg-ink/80 px-3 py-2 text-sm font-medium text-on-dark transition hover:border-white/40 hover:bg-ink sm:right-6 sm:top-6"
            aria-label="Close image preview"
          >
            Close
          </button>

          {hasMultiple ? (
            <>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  setActiveIndex(
                    (activeIndex! - 1 + items.length) % items.length,
                  );
                }}
                className="absolute left-3 top-1/2 z-10 -translate-y-1/2 border border-white/20 bg-ink/80 px-3 py-3 text-on-dark transition hover:border-accent-teal/50 hover:text-accent-teal sm:left-6"
                aria-label="Previous image"
              >
                ←
              </button>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  setActiveIndex((activeIndex! + 1) % items.length);
                }}
                className="absolute right-3 top-1/2 z-10 -translate-y-1/2 border border-white/20 bg-ink/80 px-3 py-3 text-on-dark transition hover:border-accent-teal/50 hover:text-accent-teal sm:right-6"
                aria-label="Next image"
              >
                →
              </button>
            </>
          ) : null}

          <div
            className="flex w-full max-w-5xl flex-col items-center gap-4"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative aspect-[16/10] w-full max-h-[75vh] overflow-hidden border border-white/15 bg-[#121514]">
              <Image
                src={activeItem.src}
                alt={activeItem.alt}
                fill
                className="object-contain p-2 sm:p-4"
                sizes="(max-width: 1024px) 100vw, 1024px"
                priority
              />
            </div>
            <p
              id={titleId}
              className="max-w-2xl text-center text-sm text-on-dark-muted"
            >
              {activeItem.alt}
              {hasMultiple ? (
                <span className="ml-2 text-on-dark/50">
                  ({activeIndex! + 1} / {items.length})
                </span>
              ) : null}
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
