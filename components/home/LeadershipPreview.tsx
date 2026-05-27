"use client";

import { Award, BookOpen, Globe2, ArrowRight, Trophy, Star, GraduationCap, Briefcase, Users } from "lucide-react";
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
                Indian Forest Service (IFS) (Retd.) · 1979 Batch · Chairman, Centre for Resource Management & Environment (CRE)
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
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,14,9,0.95) 0%, rgba(5,14,9,0.4) 40%, transparent 70%)" }} />

              {/* Floating award badge */}
              <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-2 rounded-xl backdrop-blur-md border" style={{ background: "rgba(245,158,11,0.15)", borderColor: "rgba(245,158,11,0.3)" }}>
                <Trophy className="w-4 h-4" style={{ color: "#fbbf24" }} />
                <span className="text-xs font-bold" style={{ color: "#fbbf24" }}>Queen&apos;s Award</span>
              </div>

              {/* Bottom info */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {["Chairman, Centre for Resource Management & Environment (CRE)", "Former DG, Indian Council of Forestry Research & Education (ICFRE)", "Indian Forest Service (IFS) 1979 Batch"].map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-full text-[11px] font-semibold backdrop-blur-sm border" style={{ background: "rgba(255,255,255,0.08)", borderColor: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.85)" }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
                  <GraduationCap className="w-3.5 h-3.5" />
                  Ph.D. Ecology · M.Sc. University of Edinburgh, UK (2nd Position)
                </div>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { number: "30+", label: "Countries Visited" },
                { number: "200+", label: "Publications" },
                { number: "15K+", label: "Families Supported" },
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

            {/* Bio — attractive card layout */}
            <div className="space-y-3">
              {[
                {
                  icon: <Briefcase className="w-5 h-5" style={{ color: "#38bdf8" }} />,
                  heading: "Distinguished Career",
                  text: "Indian Forest Service (1979 Batch). Superannuated as Agriculture Production Commissioner and Principal Secretary, Government of Tripura in the Apex Scale. Served as Director General, Indian Council of Forestry Research and Education (ICFRE) and Chancellor of Forest Research Institute (FRI) Deemed University in the rank of Secretary to Government of India. Inspector General of Forests and Deputy Inspector General of Forests at the Ministry of Environment & Forests, Government of India.",
                },
                {
                  icon: <Users className="w-5 h-5" style={{ color: "#34d399" }} />,
                  heading: "Present Positions",
                  text: "Chairman, Centre for Resource Management and Environment (CRE). Member, ICFRE Society (since June 2018). Presidential Nominee in the Executive Council and University Court of Central University of Kashmir (since Feb 2019). Chairman, Kalpavriksh Foundation.",
                },
                {
                  icon: <Globe2 className="w-5 h-5" style={{ color: "#a78bfa" }} />,
                  heading: "International Leadership",
                  text: "Elected Vice-Chairman of Asia-Pacific Forestry Organization (2012). Elected to Executive Committee of International Poplar Commission, a UN/FAO body (2012). Chaired Technical Session at FAO Rome during World Forestry Week. Delivered Key-note at 16th Commonwealth Forestry Conference, Perth, Australia.",
                },
                {
                  icon: <BookOpen className="w-5 h-5" style={{ color: "#f59e0b" }} />,
                  heading: "Author & Thought Leader",
                  text: "Over 200 publications including 54 policy papers, 74 technical research papers, 52 columns & freelance YouTube journalism pieces, and 18 books & bulletins. Architect of Joint Forest Management (JFM) and Forest Fire control policy framework in the country. Writes regular columns in national newspapers on environment, agriculture, tribal & rural development.",
                },
              ].map((item) => (
                <div
                  key={item.heading}
                  className="rounded-xl p-4 border transition-all hover:-translate-y-0.5"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    borderColor: "rgba(255,255,255,0.07)",
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0">{item.icon}</div>
                    <div>
                      <h4 className="text-base font-bold text-white mb-1">{item.heading}</h4>
                      <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Awards grid */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.3)" }}>Key Awards & Honours</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: <Trophy className="w-5 h-5" style={{ color: "#fbbf24" }} />, title: "Queen's Award for Forestry", sub: "Commonwealth Forestry Association, UK · 2000", gold: true },
                  { icon: <Award className="w-5 h-5" style={{ color: "#fb7185" }} />, title: "EMPI-Indian Express Innovation Award", sub: "From President APJ Abdul Kalam · 2007" },
                  { icon: <Globe2 className="w-5 h-5" style={{ color: "#38bdf8" }} />, title: "Vice-Chairman, Asia-Pacific Forestry Organization", sub: "Elected at Guangzhou, China · 2012" },
                  { icon: <Award className="w-5 h-5" style={{ color: "#34d399" }} />, title: "Uttarakhand Ratan & Great Son of India Award", sub: "All India Intellectual Federation · 2012 & 2013" },
                ].map((a) => (
                  <div
                    key={a.title}
                    className="p-4 rounded-xl border transition-all hover:-translate-y-1"
                    style={{
                      background: a.gold ? "rgba(245,158,11,0.06)" : "rgba(255,255,255,0.03)",
                      borderColor: a.gold ? "rgba(245,158,11,0.2)" : "rgba(255,255,255,0.07)",
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 shrink-0">{a.icon}</div>
                      <div>
                        <div className="text-xs font-bold text-white leading-snug mb-1">{a.title}</div>
                        <div className="text-[11px]" style={{ color: "rgba(255,255,255,0.4)" }}>{a.sub}</div>
                      </div>
                    </div>
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
