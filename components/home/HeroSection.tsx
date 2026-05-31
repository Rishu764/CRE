"use client";

import { useState, useEffect, useCallback } from "react";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

const heroSlides = [
  {
    id: 1,
    bgImage: "/hero-bg.jpg",
    badge: "Non-Profit Trust • Est. 2011",
    title: "Centre for Resource",
    titleHighlight: "Management &",
    titleEnd: "Environment",
    description:
      "Promoting efficient, accountable governance through efficient resource management. Empowering communities for better governance of resources.",
  },
  {
    id: 2,
    bgImage: "/trible02.png",
    badge: "Tribal Empowerment • Since 2011",
    title: "Empowering",
    titleHighlight: "235+ Tribal",
    titleEnd: "Artisans",
    description:
      "Creating sustainable livelihoods through traditional crafts and forest-based products. Building self-reliant communities across India.",
  },
  {
    id: 3,
    bgImage: "/meeting.png",
    badge: "Climate Action • Global Impact",
    title: "Combating",
    titleHighlight: "Climate Change",
    titleEnd: "Together",
    description:
      "Leading international workshops and policy advocacy for climate-resilient development in South Asia and East Africa.",
  },
  {
    id: 4,
    bgImage: "/meeting02.png",
    badge: "Forest Conservation • National Reach",
    title: "Protecting",
    titleHighlight: "India's Forests",
    titleEnd: "& Wildlife",
    description:
      "Working across 10+ states to conserve biodiversity, prevent forest fires, and promote sustainable forest management practices.",
  },
];

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev < heroSlides.length - 1 ? prev + 1 : 0));
  }, []);

  // Auto-advance every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [goToNext]);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Sliding Background Images */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={slide.bgImage}
              alt=""
              className="w-full h-full object-cover"
            />
            {/* Lighter overlay - only on left side for text */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />
          </div>
        ))}
      </div>

      {/* Main Content - Centered vertically */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40 w-full">
          {/* Left Content Only - No grid, full width text on left */}
          <div className="text-white max-w-2xl">
            {heroSlides.map((slide, index) => (
              <div
                key={slide.id}
                className={`transition-all duration-700 ${
                  index === activeIndex
                    ? "opacity-100 translate-x-0 relative"
                    : "opacity-0 absolute -translate-x-8 pointer-events-none"
                }`}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
                  <span className="text-sm font-medium text-white/90">
                    {slide.badge}
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  {slide.title}
                  <span className="block text-secondary-light">
                    {slide.titleHighlight}
                  </span>
                  {slide.titleEnd}
                </h1>

                <p className="text-lg text-white/80 max-w-xl leading-relaxed mb-8">
                  {slide.description}
                </p>

                <div className="flex flex-wrap gap-4 mb-6">
                  <Link
                    href="/our-work"
                    className="px-8 py-3.5 bg-white text-primary-dark font-semibold rounded-full hover:bg-secondary-light hover:text-primary-dark transition-all shadow-lg hover:shadow-xl"
                  >
                    Explore Our Work
                  </Link>
                  <Link
                    href="/about"
                    className="px-8 py-3.5 border-2 border-white/40 text-white font-semibold rounded-full hover:bg-white/10 transition-all"
                  >
                    Learn More
                  </Link>
                </div>

                {/* Trust Credentials */}
                <div className="flex flex-wrap gap-2">
                  {[
                    "Indian Trust Act, 1882",
                    "Sec. 12A Certified",
                    "80G Tax Exemption",
                    "Open to Funding",
                  ].map((cred) => (
                    <span
                      key={cred}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold text-white backdrop-blur-sm border border-white/20"
                      style={{ background: "rgba(255,255,255,0.1)" }}
                    >
                      {/* <span className="w-1.5 h-1.5 rounded-full bg-[#52b788]" /> */}
                      {cred}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Dot Navigation - Centered */}
          <div className="absolute bottom-28 left-1/2 -translate-x-1/2 flex gap-3 z-20">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`transition-all ${
                  index === activeIndex
                    ? "w-10 h-3 bg-white rounded-full"
                    : "w-3 h-3 bg-white/40 rounded-full hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 animate-bounce">
            <ArrowDown className="w-6 h-6 text-white/60" />
          </div>
        </div>
      </div>

    </section>
  );
}
