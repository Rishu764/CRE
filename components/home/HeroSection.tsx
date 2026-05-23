"use client";

import { useState, useEffect, useCallback } from "react";
import { ArrowDown, TreePine, Users, Globe } from "lucide-react";
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
      "Empowering communities, conserving forests, and building climate-resilient futures across India — from grassroots to global policy.",
  },
  {
    id: 2,
    bgImage: "/trible.png",
    badge: "Tribal Empowerment • Since 2011",
    title: "Empowering",
    titleHighlight: "235+ Tribal",
    titleEnd: "Artisans",
    description:
      "Creating sustainable livelihoods through traditional crafts and forest-based products. Building self-reliant communities across India.",
  },
  {
    id: 3,
    bgImage: "/hero-bg.jpg",
    badge: "Climate Action • Global Impact",
    title: "Combating",
    titleHighlight: "Climate Change",
    titleEnd: "Together",
    description:
      "Leading international workshops and policy advocacy for climate-resilient development in South Asia and East Africa.",
  },
  {
    id: 4,
    bgImage: "/trible.png",
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
    <section className="relative min-h-screen flex items-center overflow-hidden">
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
            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Animated */}
          <div className="text-white space-y-8">
            {heroSlides.map((slide, index) => (
              <div
                key={slide.id}
                className={`transition-all duration-700 ${
                  index === activeIndex
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 absolute -translate-x-8"
                }`}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
                  <span className="w-2 h-2 bg-secondary-light rounded-full animate-pulse" />
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

                <div className="flex flex-wrap gap-4">
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
              </div>
            ))}
          </div>

          {/* Right - Stats Cards */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <StatCard
                icon={<TreePine className="w-6 h-6" />}
                number="30+"
                label="Years Combined Experience"
                delay="delay-100"
              />
              <StatCard
                icon={<Users className="w-6 h-6" />}
                number="235+"
                label="Tribal Artisans Empowered"
                delay="delay-300"
              />
            </div>
            <div className="space-y-4 mt-8">
              <StatCard
                icon={<Globe className="w-6 h-6" />}
                number="10+"
                label="States Across India"
                delay="delay-200"
              />
              <StatCard
                icon={
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                }
                number="200+"
                label="Research Publications"
                delay="delay-400"
              />
            </div>
          </div>
        </div>

        {/* Dot Navigation */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-3 z-20">
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
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-white/60" />
        </div>
      </div>
    </section>
  );
}

function StatCard({
  icon,
  number,
  label,
  delay,
}: {
  icon: React.ReactNode;
  number: string;
  label: string;
  delay: string;
}) {
  return (
    <div
      className={`bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 animate-fade-in-up ${delay}`}
    >
      <div className="text-secondary-light mb-3">{icon}</div>
      <div className="text-3xl font-bold text-white mb-1">{number}</div>
      <div className="text-sm text-white/70">{label}</div>
    </div>
  );
}
