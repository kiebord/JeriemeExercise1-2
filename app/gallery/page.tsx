import type { Metadata } from "next";
import GalleryGrid from "@/components/GalleryGrid";

// Metadata must live in a server component, so the interactive
// grid and lightbox are in components/GalleryGrid.tsx
export const metadata: Metadata = {
  title: "Gallery",
};

export default function GalleryPage() {
  return (
    <section className="page-shell">
      <header className="page-hero">
        <p className="eyebrow">Visual notebook</p>
        <h1>Scenes from<br />the process.</h1>
        <p>A few snapshots from my learning journey. Click any tile to take a closer look.</p>
      </header>
      <GalleryGrid />
    </section>
  );
}
