"use client";

import { Award, BookOpen, Globe2, ArrowRight, Trophy, Star } from "lucide-react";
import Link from "next/link";

export default function LeadershipPreview() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-[#0a1a14] via-[#0f2a1e] to-[#0a1a14]">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] animate-pulse-gentle" />
        <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-light/3 rounded-full blur-[200px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-semibold text-primary-light uppercase tracking-widest mb-4">
            <Star className="w-3 h-3 fill-secondary-light text-secondary-light" />
            Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Guided by Experience & Vision
          </h2>
        </div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left - Photo Column */}
          <div className="lg:col-span-4 flex justify-center lg:sticky lg:top-24">
            <div className="relative group">
              {/* Glow effect behind image */}
              <div className="absolute -inset-1 bg-gradient-to-b from-primary-light/30 via-primary/20 to-secondary/30 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity" />
              
              {/* Photo */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/author.png"
                  alt="Dr. V.K. Bahuguna"
                  className="w-full max-w-[320px] h-auto block"
                />
                {/* Bottom gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent" />
                {/* Name on image */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-xl font-bold text-white">Dr. V.K. Bahuguna</h3>
                  <p className="text-primary-light text-sm">IFS (Retd.) · 1979 Batch</p>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-3 -right-3 bg-gradient-to-br from-secondary to-secondary-light text-primary-dark px-3 py-1.5 rounded-lg text-xs font-bold shadow-lg rotate-3">
                40+ Years
              </div>
            </div>
          </div>

          {/* Right - Content Column */}
          <div className="lg:col-span-8 space-y-8">
            {/* Name & Title */}
            <div>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-3 py-1 bg-primary-light/10 border border-primary-light/20 text-primary-light text-xs font-bold rounded-full">
                  Chairman, CRE
                </span>
                <span className="px-3 py-1 bg-secondary/10 border border-secondary/20 text-secondary-light text-xs font-bold rounded-full">
                  Former DG, ICFRE
                </span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 text-white/70 text-xs font-bold rounded-full">
                  National President, USP
                </span>
              </div>
              <p className="text-white/50 text-sm">
                Ph.D. Ecology · M.Sc. Resource Management, University of Edinburgh, UK (2nd Position)
              </p>
            </div>

            {/* Bio */}
            <p className="text-white/70 leading-relaxed text-base border-l-2 border-primary-light/40 pl-5">
              Architect of Joint Forest Management (JFM) policy in India. Established CAMPA.
              Former Principal Secretary, Govt. of Tripura. Turned Tripura Forest Corporation
              from loss-making to 600% profit growth. Appointed by the President of India as
              nominee in the Executive Council of Central University of Kashmir.
            </p>

            {/* Awards - Premium Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <AwardCard
                icon={<Trophy className="w-6 h-6 text-amber-400" />}
                title="Queen's Award for Forestry"
                subtitle="Commonwealth Forestry Association, UK"
                year="2000"
                highlight
              />
              <AwardCard
                icon={<Globe2 className="w-6 h-6 text-sky-400" />}
                title="Vice-Chairman, APAFRI"
                subtitle="Asia-Pacific Forestry Organization"
                year="2012"
              />
              <AwardCard
                icon={<Award className="w-6 h-6 text-rose-400" />}
                title="EMPI Innovation Award"
                subtitle="From President APJ Abdul Kalam"
                year="2007"
              />
              <AwardCard
                icon={<BookOpen className="w-6 h-6 text-emerald-400" />}
                title="200+ Publications"
                subtitle="International & national journals"
                year="1986–2024"
              />
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4">
              <StatBadge number="30+" label="Countries Visited" />
              <StatBadge number="10+" label="States Covered" />
              <StatBadge number="600%" label="Profit Growth (TFDPC)" />
            </div>

            {/* CTA */}
            <Link
              href="/leadership"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-primary-light text-white font-bold rounded-xl hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-0.5 transition-all group"
            >
              View Full Profile & CV
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function AwardCard({
  icon,
  title,
  subtitle,
  year,
  highlight = false,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  year: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`relative p-4 rounded-xl border transition-all hover:-translate-y-1 hover:shadow-lg ${
        highlight
          ? "bg-gradient-to-br from-amber-500/10 to-amber-500/5 border-amber-500/20 hover:shadow-amber-500/10"
          : "bg-white/5 border-white/10 hover:bg-white/8 hover:shadow-white/5"
      }`}
    >
      <div className="flex items-start gap-3">
        <div className={`w-11 h-11 rounded-lg flex items-center justify-center shrink-0 ${
          highlight ? "bg-amber-500/20" : "bg-white/10"
        }`}>
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-sm font-bold text-white">{title}</div>
          <div className="text-xs text-white/50 mt-0.5">{subtitle}</div>
        </div>
      </div>
      <span className="absolute top-3 right-3 text-[10px] font-mono text-white/30">
        {year}
      </span>
    </div>
  );
}

function StatBadge({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
      <div className="text-2xl font-bold text-primary-light">{number}</div>
      <div className="text-[11px] text-white/50 mt-1 leading-tight">{label}</div>
    </div>
  );
}
