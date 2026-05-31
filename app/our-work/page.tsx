import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import WorkApproach from "@/components/our-work/WorkApproach";
import GeographicReach from "@/components/our-work/GeographicReach";
import TimelineSection from "@/components/home/TimelineSection";
import WorkshopHighlight from "@/components/home/WorkshopHighlight";

export const metadata: Metadata = {
  title: "Our Work – CRE",
  description:
    "How CRE works — from grassroots identification to policy change. Advocacy, capacity building, community empowerment, and research across 10+ states and 30+ countries.",
};

const pillars = [
  { label: "Advocacy & Policy", anchor: "#approach" },
  { label: "Capacity Building", anchor: "#approach" },
  { label: "Community Empowerment", anchor: "#approach" },
  { label: "Timeline 2011–2024", anchor: "#timeline" },
  { label: "International Workshop", anchor: "#workshop" },
  { label: "Geographic Reach", anchor: "#reach" },
];

export default function OurWorkPage() {
  return (
    <main className="pt-20 min-h-screen bg-white">

      {/* ── Hero ── */}
      <div className="bg-[#1b4332] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <p className="text-[#52b788] text-xs font-bold uppercase tracking-widest mb-4">
            CRE in Action
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-3xl">
            From Grassroots to Policy — Our Work Across India
          </h1>
          <p className="mt-5 text-white/55 text-base max-w-2xl leading-relaxed">
            CRE operates without external grants — sustained entirely by personal resources. Every initiative, training programme, and policy intervention is driven by conviction, not funding cycles.
          </p>

          {/* Quick nav pills */}
          <div className="mt-10 flex flex-wrap gap-2">
            {pillars.map((p) => (
              <a
                key={p.label}
                href={p.anchor}
                className="text-xs font-medium text-white/60 border border-white/15 px-3.5 py-1.5 rounded-full hover:border-white/35 hover:text-white transition-colors"
              >
                {p.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Approach + Domains ── */}
      <div id="approach">
        <WorkApproach />
      </div>

      {/* ── Timeline ── */}
      <div id="timeline">
        <div className="bg-white py-10 px-4 sm:px-6 max-w-6xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-[#2d6a4f] mb-2">Year by Year</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Journey Since 2011</h2>
          <p className="text-gray-400 text-sm mt-2 max-w-md">
            Thirteen years of field work, policy wins, and community impact — one milestone at a time.
          </p>
        </div>
        <TimelineSection />
      </div>

      {/* ── International Workshop ── */}
      <div id="workshop">
        <WorkshopHighlight />
      </div>

      {/* ── Geographic Reach ── */}
      <div id="reach">
        <GeographicReach />
      </div>

      {/* ── CTA ── */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Want to collaborate or support our work?</h2>
            <p className="text-sm text-gray-400 mt-1">CRE welcomes partnerships across all domains — research, training, advocacy, and field work.</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1b4332] text-white text-sm font-semibold rounded-full hover:bg-[#2d6a4f] transition-colors shrink-0 group"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </section>

    </main>
  );
}
