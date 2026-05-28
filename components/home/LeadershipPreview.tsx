"use client";

import { Award, BookOpen, Globe2, ArrowRight, Trophy, GraduationCap, Briefcase, Users } from "lucide-react";
import Link from "next/link";

export default function LeadershipPreview() {
  return (
    <section className="relative overflow-hidden bg-[#0a1a10]">
      {/* Thin top accent */}
      <div className="h-px w-full bg-[#1b4332]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">

        {/* Section label — simple, no star */}
        <div className="mb-14">
          <p className="text-[#52b788] text-xs font-bold uppercase tracking-widest mb-2">
            Leadership
          </p>
          <div className="w-8 h-px bg-[#52b788]" />
        </div>

        {/* Main layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* ── LEFT COLUMN ── */}
          <div className="space-y-8">
            {/* Name */}
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-3">
                Dr. V.K.<br />
                <span className="text-[#52b788]">Bahuguna</span>
              </h2>
              <p className="text-xs font-medium tracking-widest uppercase text-white/30">
                IFS (Retd.) · 1979 Batch · Chairman, CRE
              </p>
            </div>

            {/* Photo */}
            <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "4/5", maxWidth: "360px" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/author.png"
                alt="Dr. V.K. Bahuguna"
                className="w-full h-full object-cover object-top"
              />
              {/* Bottom fade only */}
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(10,26,16,0.92) 0%, rgba(10,26,16,0.2) 45%, transparent 70%)" }}
              />

              {/* Award badge */}
              <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-2 rounded-xl backdrop-blur-md border border-[#e9c46a]/20 bg-[#e9c46a]/10">
                <Trophy className="w-4 h-4 text-[#e9c46a]" />
                <span className="text-xs font-bold text-[#e9c46a]">Queen&apos;s Award</span>
              </div>

              {/* Bottom info */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {["Chairman, CRE", "Former DG, ICFRE", "IFS 1979 Batch"].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full text-[11px] font-semibold border border-white/10 text-white/70"
                      style={{ background: "rgba(255,255,255,0.07)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-xs text-white/35">
                  <GraduationCap className="w-3.5 h-3.5" />
                  Ph.D. Ecology · M.Sc. University of Edinburgh, UK
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
                <div
                  key={s.label}
                  className="rounded-xl p-4 text-center border border-white/[0.08]"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                >
                  <div className="text-2xl font-black text-[#52b788]">{s.number}</div>
                  <div className="text-[11px] mt-1 text-white/35">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className="space-y-8 lg:pt-4">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">Guided by Experience</h3>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#e9c46a]">&amp; Vision</h3>
            </div>

            {/* Bio cards — single icon color, no rainbow */}
            <div className="space-y-3">
              {[
                {
                  icon: Briefcase,
                  heading: "Distinguished Career",
                  text: "Indian Forest Service (1979 Batch). Superannuated as Agriculture Production Commissioner and Principal Secretary, Government of Tripura in the Apex Scale. Served as Director General, Indian Council of Forestry Research and Education (ICFRE) and Chancellor of Forest Research Institute (FRI) Deemed University in the rank of Secretary to Government of India. Inspector General of Forests and Deputy Inspector General of Forests at the Ministry of Environment & Forests, Government of India.",
                },
                {
                  icon: Users,
                  heading: "Present Positions",
                  text: "Chairman, Centre for Resource Management and Environment (CRE). Member, ICFRE Society (since June 2018). Presidential Nominee in the Executive Council and University Court of Central University of Kashmir (since Feb 2019). Chairman, Kalpavriksh Foundation.",
                },
                {
                  icon: Globe2,
                  heading: "International Leadership",
                  text: "Elected Vice-Chairman of Asia-Pacific Forestry Organization (2012). Elected to Executive Committee of International Poplar Commission, a UN/FAO body (2012). Chaired Technical Session at FAO Rome during World Forestry Week. Delivered Key-note at 16th Commonwealth Forestry Conference, Perth, Australia.",
                },
                {
                  icon: BookOpen,
                  heading: "Author & Thought Leader",
                  text: "Over 200 publications including 54 policy papers, 74 technical research papers, 52 columns & freelance YouTube journalism pieces, and 18 books & bulletins. Architect of Joint Forest Management (JFM) and Forest Fire control policy framework in the country. Writes regular columns in national newspapers on environment, agriculture, tribal & rural development.",
                },
              ].map((item) => (
                <div
                  key={item.heading}
                  className="rounded-xl p-4 border border-white/[0.07] hover:-translate-y-0.5 transition-transform"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                >
                  <div className="flex items-start gap-3">
                    <item.icon className="w-5 h-5 text-[#52b788] mt-0.5 shrink-0" />
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1">{item.heading}</h4>
                      <p className="text-sm leading-relaxed text-white/50">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Awards — unified palette, no multi-color icons */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-4 text-white/25">
                Key Awards &amp; Honours
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  {
                    icon: Trophy,
                    title: "Queen's Award for Forestry",
                    sub: "Commonwealth Forestry Association, UK · 2000",
                    highlight: true,
                  },
                  {
                    icon: Award,
                    title: "EMPI-Indian Express Innovation Award",
                    sub: "From President APJ Abdul Kalam · 2007",
                    highlight: false,
                  },
                  {
                    icon: Globe2,
                    title: "Vice-Chairman, Asia-Pacific Forestry Organization",
                    sub: "Elected at Guangzhou, China · 2012",
                    highlight: false,
                  },
                  {
                    icon: Award,
                    title: "Uttarakhand Ratan & Great Son of India Award",
                    sub: "All India Intellectual Federation · 2012 & 2013",
                    highlight: false,
                  },
                ].map((a) => (
                  <div
                    key={a.title}
                    className="p-4 rounded-xl border hover:-translate-y-0.5 transition-transform"
                    style={{
                      background: a.highlight ? "rgba(233,196,106,0.05)" : "rgba(255,255,255,0.02)",
                      borderColor: a.highlight ? "rgba(233,196,106,0.15)" : "rgba(255,255,255,0.07)",
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <a.icon
                        className="w-4 h-4 mt-0.5 shrink-0"
                        style={{ color: a.highlight ? "#e9c46a" : "#52b788" }}
                      />
                      <div>
                        <div className="text-xs font-bold text-white leading-snug mb-1">{a.title}</div>
                        <div className="text-[11px] text-white/35">{a.sub}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Link
              href="/leadership"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-xl font-bold text-white bg-[#2d6a4f] hover:bg-[#1b4332] transition-colors group"
            >
              View Full Profile &amp; CV
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      <div className="h-px w-full bg-white/[0.06]" />
    </section>
  );
}
