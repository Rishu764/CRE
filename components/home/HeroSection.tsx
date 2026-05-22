import { ArrowDown, TreePine, Users, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/hero-bg.jpg"
        alt="Terraced green fields in Indian mountains"
        fill
        className="object-cover"
        priority
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="w-2 h-2 bg-secondary-light rounded-full animate-pulse" />
              <span className="text-sm font-medium text-white/90">
                Non-Profit Trust • Est. 2011
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Centre for Resource
              <span className="block text-secondary-light">
                Management &
              </span>
              Environment
            </h1>

            <p className="text-lg text-white/80 max-w-xl leading-relaxed">
              Empowering communities, conserving forests, and building
              climate-resilient futures across India — from grassroots to global
              policy.
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
