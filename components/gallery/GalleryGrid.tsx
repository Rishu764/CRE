"use client";

import { useState, useCallback, useRef } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const categories = ["All", "Publications", "Events", "Field Work", "Leadership", "Wildlife"];

// Uses existing public images — replace src values with /gallery/your-photo.jpg once you add them
const images = [
  { src: "/meeting.png",        alt: "Forest Congress Ceremony",                  category: "Events",       span: "col-span-2 row-span-2" },
  { src: "/meeting02.png",      alt: "Lamp Lighting – Indian Forest Congress",     category: "Events",       span: "col-span-1 row-span-1" },
  { src: "/about_us_hero.png",  alt: "Forest Biodiversity in India",               category: "Publications", span: "col-span-1 row-span-2" },
  { src: "/trible.png",         alt: "Tribal Community – Forest Livelihood",       category: "Field Work",   span: "col-span-1 row-span-1" },
  { src: "/trible02.png",       alt: "Women Carrying Fodder – Uttarakhand",        category: "Field Work",   span: "col-span-1 row-span-1" },
  { src: "/mission.png",        alt: "Forest Types of India Revisited",            category: "Publications", span: "col-span-2 row-span-1" },
  { src: "/vision.png",         alt: "Field Visit to Forest Nursery",              category: "Field Work",   span: "col-span-1 row-span-1" },
  { src: "/hero-bg.jpg",        alt: "Forest Landscape – Conservation Work",       category: "Wildlife",     span: "col-span-2 row-span-2" },
  { src: "/meeting.png",        alt: "SDG Lecture at IIM",                         category: "Events",       span: "col-span-1 row-span-1" },
  { src: "/meeting02.png",      alt: "Dr. V.K. Bahuguna – Portrait",               category: "Leadership",   span: "col-span-1 row-span-2" },
  { src: "/trible.png",         alt: "Forest Guards in the Field",                 category: "Field Work",   span: "col-span-1 row-span-1" },
  { src: "/about_us_hero.png",  alt: "Award Ceremony with President of India",     category: "Events",       span: "col-span-2 row-span-1" },
  { src: "/vision.png",         alt: "Root to Canopy – Participatory Forestry",    category: "Publications", span: "col-span-1 row-span-1" },
  { src: "/mission.png",        alt: "Tiger Census in India",                      category: "Wildlife",     span: "col-span-1 row-span-1" },
  { src: "/trible02.png",       alt: "Hillside Restoration Project",               category: "Field Work",   span: "col-span-1 row-span-1" },
  { src: "/hero-bg.jpg",        alt: "ICFRE Technologies Publication",             category: "Publications", span: "col-span-1 row-span-1" },
  { src: "/meeting.png",        alt: "Welcome Ceremony – Traditional Reception",   category: "Events",       span: "col-span-1 row-span-1" },
  { src: "/about_us_hero.png",  alt: "Asiatic Lion – Wildlife Conservation",       category: "Wildlife",     span: "col-span-2 row-span-1" },
];

type Img = (typeof images)[number];

function ImgCard({ img, idx, onClick }: { img: Img; idx: number; onClick: (i: number) => void }) {
  const errored = useRef(false);

  return (
    <div
      className={`${img.span} relative overflow-hidden rounded-xl cursor-pointer group`}
      onClick={() => onClick(idx)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick(idx)}
      aria-label={`View: ${img.alt}`}
    >
      <Image
        src={img.src}
        alt={img.alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        loading="lazy"
        onError={(e) => {
          if (!errored.current) {
            errored.current = true;
            (e.currentTarget as HTMLImageElement).src = "/hero-bg.jpg";
          }
        }}
      />
      {/* Dark overlay on hover */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
      {/* Caption */}
      <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <p className="text-white text-xs font-medium leading-snug line-clamp-2 drop-shadow">{img.alt}</p>
        <span className="inline-block mt-1 text-[10px] text-white/60 uppercase tracking-wider">{img.category}</span>
      </div>
    </div>
  );
}

export default function GalleryGrid() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = active === "All" ? images : images.filter((img) => img.category === active);

  const open = useCallback((idx: number) => setLightbox(idx), []);
  const close = useCallback(() => setLightbox(null), []);
  const prev = useCallback(() => setLightbox((i) => (i !== null ? (i - 1 + filtered.length) % filtered.length : null)), [filtered.length]);
  const next = useCallback(() => setLightbox((i) => (i !== null ? (i + 1) % filtered.length : null)), [filtered.length]);

  return (
    <section className="py-8 px-4 max-w-7xl mx-auto">

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => {
          const count = cat === "All" ? images.length : images.filter((i) => i.category === cat).length;
          return (
            <button
              key={cat}
              onClick={() => { setActive(cat); setLightbox(null); }}
              className={`px-4 py-1.5 text-sm font-medium rounded-full border transition-all ${
                active === cat
                  ? "bg-[#1b4332] text-white border-[#1b4332]"
                  : "bg-white text-gray-600 border-gray-200 hover:border-[#2d6a4f] hover:text-[#2d6a4f]"
              }`}
            >
              {cat} <span className="opacity-50 text-xs ml-1">{count}</span>
            </button>
          );
        })}
      </div>

      {/* Bento / Scattered Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 auto-rows-[180px] sm:auto-rows-[200px] gap-3">
        {filtered.map((img, idx) => (
          <ImgCard key={`${img.src}-${idx}`} img={img} idx={idx} onClick={open} />
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={close}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") prev();
            else if (e.key === "ArrowRight") next();
            else if (e.key === "Escape") close();
          }}
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
        >
          {/* Close */}
          <button
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            onClick={close}
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Prev */}
          <button
            className="absolute left-3 sm:left-6 z-10 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Image */}
          <div
            className="relative w-full max-w-4xl mx-16 sm:mx-24 max-h-[82vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filtered[lightbox].src}
              alt={filtered[lightbox].alt}
              width={1200}
              height={900}
              className="w-full h-auto max-h-[78vh] object-contain rounded-xl"
              priority
            />
            <p className="text-white/80 text-sm text-center mt-3">{filtered[lightbox].alt}</p>
            <p className="text-white/40 text-xs text-center mt-1">{lightbox + 1} / {filtered.length}</p>
          </div>

          {/* Next */}
          <button
            className="absolute right-3 sm:right-6 z-10 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
}
