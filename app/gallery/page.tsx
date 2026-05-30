import type { Metadata } from "next";
import GalleryGrid from "@/components/gallery/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery – CRE",
  description:
    "A visual record of CRE's work in forest conservation, field visits, publications, events, and community engagement across India.",
};

export default function GalleryPage() {
  return (
    <main className="pt-20 min-h-screen bg-[#fefefe]">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 pt-12 pb-4">
        <p className="text-sm font-medium text-primary uppercase tracking-widest mb-2">
          Visual Archive
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#1b4332] leading-tight">
          Gallery
        </h1>
        <div className="mt-3 w-10 h-0.5 bg-primary rounded" />
        <p className="mt-4 text-gray-500 text-base max-w-xl">
          Moments from the field, events, publications, and the people behind
          CRE&apos;s work in environmental conservation and community development.
        </p>
      </div>

      <GalleryGrid />
    </main>
  );
}
