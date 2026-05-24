"use client";

import { Award, BookOpen, Globe2, ArrowRight, Trophy, Star, MapPin, GraduationCap } from "lucide-react";
import Link from "next/link";

export default function LeadershipPreview() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#050e09" }}
    >
      {/* Top accent line */}
      <div className="h-1 w-full" style={{ background: "linear-gradient(90deg, #1b4332, #52b788, #e9c46a, #52b788, #1b4332)" }} />

      {/* Background texture */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full opacity-20" style={{ background: "radial-gradient(circle, #2d6a4f 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full opacity-10" style={{ background: "radial-gradient(circle, #e9c46a 0%, transparent 70%)", transform: "translate(-30%, 30%)" }} />
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">

        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(82,183,136,0.3))" }} />
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest border" style={{ background: "rgba(82,183,136,0.08)", borderColor: "rgba(82,183,136,0.2)", color: "#52b788" }}>
            <Star className="w-3 h-3" style={{ fill: "#e9c46a", color: "#e9c46a" }} />
            Leadership
          </span>
          <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, rgba(82,183,136,0.3), transparent)" }} />
        </div>

        {/* Hero layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* ── LEFT COLUMN ── */}
          <div className="space-y-8">
            {/* Name block */}
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-2">
                Dr. V.K.<br />
                <span style={{ color: "#52b788" }}>Bahuguna</span>
              </h2>
              <p className="text-sm font-medium tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.35)" }}>
                IFS (Retd.) · 1979 Batch · Chairman, CRE
              </p>
            </div>

            {/* Photo — full bleed with overlay */}
            <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "4/5", maxWidth: "380px" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/author.png"
                alt="Dr. V.K. Bahuguna"
                className="w-full h-full object-cover object-top"
              />
              {/* Bottom gradient */}
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,14,9,0.95) 0%, rgba(5,14,9,0.4) 40%, transparent 70%)" }} />

              {/* Floating award badge */}
              <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-2 rounded-xl backdrop-blur-md border" style={{ background: "rgba(245,158,11,0.15)", borderColor: "rgba(245,158,11,0.3)" }}>
                <Trophy className="w-4 h-4" style={{ color: "#fbbf24" }} />
                <span className="text-xs font-bold" style={{ color: "#fbbf24" }}>Queen's Award</span>
              </div>

              {/* Bottom info */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {["Chairman, CRE", "Former DG, ICFRE", "National President, USP"].map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-full text-[11px] font-semibold backdrop-blur-sm border" style={{ background: "rgba(255,255,255,0.08)", borderColor: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.85)" }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
                  <GraduationCap className="w-3.5 h-3.5" />
                  Ph.D. Ecology · M.Sc. University of Edinburgh, UK
                </div>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { number: "30+", label: "Countries" },
                { number: "10+", label: "States" },
                { number: "600%", label: "Corp. Growth" },
              ].map((s) => (
                <div key={s.label} className="rounded-xl p-4 text-center border" style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.07)" }}>
                  <div className="text-2xl font-black" style={{ color: "#52b788" }}>{s.number}</div>
                  <div className="text-[11px] mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className="space-y-8 lg:pt-4">

            {/* Section heading */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1">Guided by Experience</h3>
              <h3 className="text-2xl sm:text-3xl font-bold" style={{ color: "#e9c46a" }}>&amp; Vision</h3>
            </div>

            {/* Bio paragraphs */}
            <div className="space-y-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
              <p>
                V.K. Bahuguna is a former member of the Indian Forest Service, presently the chairman
                of Centre for Resource Management and Environment and a freelance columnist. He had
                wide-ranging professional experience in the Central Government, as well as the State
                Government of Tripura. He served in the Ministry of Environment, Forests and Climate
                Change, Government of India, as the director-general of the Indian Council of Forestry
                Research and Education (ICFRE), the chancellor of Forest Research Institute (Deemed)
                University from May 2011 to June 2013; a member of its Apex Policy making body, ICFRE
                Society, from 2018 to 2020; and as the inspector-general of forests and DIGF from June
                1997 to June 2004.
              </p>
              <p>
                In 2011, he was the chief wildlife warden and managing director of Tripura Forest
                Corporation and chairman of Agriculture and Planning Commission from February 2008 to
                April 2015, looking after several departments. He superannuated from the Government of
                Tripura as the principal secretary in April 2015. He is currently a member of the
                President's Executive Council and the Kashmir Central University as the nominee of the
                President of India. He also served as the vice-chairman of the Asia-Pacific Forestry
                Organization from 2012 to 2014 and was an elected member of the Executive Committee at
                the International Poplar Commission; the United Nations Food and Agriculture
                Organization's technical arm for two years.
              </p>
              <p>
                As a prolific writer, he authored three books and edited four others. Besides winning
                the 'Great Son of India Award' by All India Intellectual Federation and several national
                awards, he was awarded the prestigious 'Queen's Award' for promoting policies on
                people's participation in forest management in the Commonwealth, United Kingdom.
              </p>
            </div>

            {/* Awards grid */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.3)" }}>Key Achievements</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: <Trophy className="w-5 h-5" style={{ color: "#fbbf24" }} />, title: "Queen's Award for Forestry", sub: "Commonwealth Forestry Assoc., UK · 2000", gold: true },
                  { icon: <Globe2 className="w-5 h-5" style={{ color: "#38bdf8" }} />, title: "Vice-Chairman, APAFRI", sub: "Asia-Pacific Forestry Org. · 2012" },
                  { icon: <Award className="w-5 h-5" style={{ color: "#fb7185" }} />, title: "EMPI Innovation Award", sub: "From President APJ Abdul Kalam · 2007" },
                  { icon: <BookOpen className="w-5 h-5" style={{ color: "#34d399" }} />, title: "200+ Publications", sub: "International & national journals" },
                ].map((a) => (
                  <div
                    key={a.title}
                    className="p-4 rounded-xl border transition-all hover:-translate-y-1"
                    style={{
                      background: a.gold ? "rgba(245,158,11,0.06)" : "rgba(255,255,255,0.03)",
                      borderColor: a.gold ? "rgba(245,158,11,0.2)" : "rgba(255,255,255,0.07)",
                    }}
                  >
                    <div className="mb-2">{a.icon}</div>
                    <div className="text-xs font-bold text-white leading-snug mb-1">{a.title}</div>
                    <div className="text-[11px]" style={{ color: "rgba(255,255,255,0.4)" }}>{a.sub}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Link
              href="/leadership"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-xl font-bold text-white transition-all hover:-translate-y-0.5 hover:shadow-2xl group"
              style={{ background: "linear-gradient(135deg, #2d6a4f, #52b788)", boxShadow: "0 4px 24px rgba(45,106,79,0.3)" }}
            >
              View Full Profile & CV
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="h-px w-full" style={{ background: "linear-gradient(90deg, transparent, rgba(82,183,136,0.2), transparent)" }} />
    </section>
  );
}
