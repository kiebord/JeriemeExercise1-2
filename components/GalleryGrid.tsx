"use client";

import { useEffect, useState } from "react";
import { GalleryScene, CloseIcon } from "./Icons";

const captions = [
  "Code Editor",
  "Laptop",
  "Notebook",
  "Trophy",
  "Team",
  "Desk Setup",
  "Browser Window",
  "Mobile App",
  "Database",
];

export default function GalleryGrid() {
  // Index of the open tile, or null when the lightbox is closed
  const [active, setActive] = useState<number | null>(null);

  // Close on Escape and lock page scroll while open
  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <>
      <div className="gallery-grid grid sm:grid-cols-2 lg:grid-cols-3">
        {captions.map((caption, i) => (
          <button
            key={caption}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Open ${caption}`}
            className="gallery-tile group relative aspect-[4/3] overflow-hidden transition duration-300"
          >
            <GalleryScene index={i} className="h-full w-full" />
            {/* Caption overlay on hover or keyboard focus */}
            <span className="absolute inset-x-0 bottom-0 bg-slate-900/70 px-4 py-3 text-left text-sm font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
              {caption}
            </span>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={captions[active]}
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/80 p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="lightbox-panel animate-fade-in w-full max-w-2xl overflow-hidden bg-white shadow-2xl"
          >
            <div className="relative">
              <GalleryScene index={active} className="aspect-[4/3] w-full" />
              <button
                type="button"
                onClick={() => setActive(null)}
                aria-label="Close"
                className="absolute right-3 top-3 rounded-full bg-white/90 p-2 text-slate-700 shadow transition hover:bg-white hover:text-indigo-600"
              >
                <CloseIcon className="h-5 w-5" />
              </button>
            </div>
            <p className="px-5 py-4 text-base font-semibold text-slate-900">{captions[active]}</p>
          </div>
        </div>
      )}
    </>
  );
}
