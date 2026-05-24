"use client";

import { Award, BookOpen, Globe2, ArrowRight, Trophy, Star } from "lucide-react";
import Link from "next/link";

export default function LeadershipPreview() {
  return (
    <section
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0a1a14 0%, #0f2a1e 50%, #0a1a14 100%)" }}
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-20 right-20 w-[600px] h-[600px] rounded-full blur-[150px]"
          style={{ background: "rgba(45,106,79,0.08)" }}
        />
        <div
          className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full blur-[120px]"
          style={{ background: "rgba(212,163,115,0.06)" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4 border"
            style={{
              background: "rgba(255,255,255,0.05)",
              borderColor: "rgba(255,255,255,0.1)",
              color: "#52b788",
            }}
          >
            <Star className="w-3 h-3" style={{ fill: "#e9c46a", color: "#e9c46a" }} />
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
              {/* Glow */}
              <div
                className="absolute -inset-1 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity"
                style={{ background: "linear-gradient(to bottom, rgba(82,183,136,0.3), rgba(45,106,79,0.2), rgba(212,163,115,0.3))" }}
              />
              {/* Photo */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/author.png"
                  alt="Dr. V.K. Bahuguna"
                  className="w-full max-w-[320px] h-auto block"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-xl font-bold text-white">Dr. V.K. Bahuguna</h3>
                  <p className="text-sm" style={{ color: "#52b788" }}>IFS (Retd.) · 1979 Batch</p>
                </div>
              </div>
              {/* Badge */}
              <div
                className="absolute -top-3 -right-3 px-3 py-1.5 rounded-lg text-xs font-bold shadow-lg rotate-3"
                style={{ background: "linear-gradient(135deg, #d4a373, #e9c46a)", color: "#1b4332" }}
              >
                40+ Years
              </div>
            </div>
          </div>

          {/* Right - Content Column */}
          <div className="lg:col-span-8 space-y-8">
            {/* Tags */}
            <div>
              <div className="flex flex-wrap gap-2 mb-3">
                <span
                  className="px-3 py-1 text-xs font-bold rounded-full border"
                  style={{ background: "rgba(82,183,136,0.1)", borderColor: "rgba(82,183,136,0.2)", color: "#52b788" }}
                >
                  Chairman, CRE
                </span>
                <span
                  className="px-3 py-1 text-xs font-bold rounded-full border"
                  style={{ background: "rgba(233,196,106,0.1)", borderColor: "rgba(233,196,106,0.2)", color: "#e9c46a" }}
                >
                  Former DG, ICFRE
                </span>
                <span
                  className="px-3 py-1 text-xs font-bold rounded-full border"
                  style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.7)" }}
                >
                  National President, USP
                </span>
              </div>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                Ph.D. Ecology · M.Sc. Resource Management, University of Edinburgh, UK (2nd Position)
              </p>
            </div>

            {/* Bio */}
            <p
              className="leading-relaxed text-base border-l-2 pl-5"
              style={{ color: "rgba(255,255,255,0.7)", borderColor: "rgba(82,183,136,0.4)" }}
            >
              Architect of Joint Forest Management (JFM) policy in India. Established CAMPA.
              Former Principal Secretary, Govt. of Tripura. Turned Tripura Forest Corporation
              from loss-making to 600% profit growth. Appointed by the President of India as
              nominee in the Executive Council of Central University of Kashmir.
            </p>

            {/* Awards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <AwardCard
                icon={<Trophy className="w-6 h-6" style={{ color: "#fbbf24" }} />}
                title="Queen's Award for Forestry"
                subtitle="Commonwealth Forestry Association, UK"
                year="2000"
                highlight
              />
              <AwardCard
                icon={<Globe2 className="w-6 h-6" style={{ color: "#38bdf8" }} />}
                title="Vice-Chairman, APAFRI"
                subtitle="Asia-Pacific Forestry Organization"
                year="2012"
              />
              <AwardCard
                icon={<Award className="w-6 h-6" style={{ color: "#fb7185" }} />}
                title="EMPI Innovation Award"
                subtitle="From President APJ Abdul Kalam"
                year="2007"
              />
              <AwardCard
                icon={<BookOpen className="w-6 h-6" style={{ color: "#34d399" }} />}
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
              className="inline-flex items-center gap-3 px-8 py-4 text-white font-bold rounded-xl hover:-translate-y-0.5 transition-all group shadow-lg"
              style={{ background: "linear-gradient(135deg, #2d6a4f, #52b788)" }}
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
      className="relative p-4 rounded-xl border transition-all hover:-translate-y-1 hover:shadow-lg"
      style={{
        background: highlight ? "rgba(245,158,11,0.08)" : "rgba(255,255,255,0.05)",
        borderColor: highlight ? "rgba(245,158,11,0.2)" : "rgba(255,255,255,0.1)",
      }}
    >
      <div className="flex items-start gap-3">
        <div
          className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0"
          style={{ background: highlight ? "rgba(245,158,11,0.15)" : "rgba(255,255,255,0.08)" }}
        >
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-sm font-bold text-white">{title}</div>
          <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.5)" }}>{subtitle}</div>
        </div>
      </div>
      <span className="absolute top-3 right-3 text-[10px] font-mono" style={{ color: "rgba(255,255,255,0.3)" }}>
        {year}
      </span>
    </div>
  );
}

function StatBadge({ number, label }: { number: string; label: string }) {
  return (
    <div
      className="text-center p-4 rounded-xl border"
      style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.1)" }}
    >
      <div className="text-2xl font-bold" style={{ color: "#52b788" }}>{number}</div>
      <div className="text-[11px] mt-1 leading-tight" style={{ color: "rgba(255,255,255,0.5)" }}>{label}</div>
    </div>
  );
}
