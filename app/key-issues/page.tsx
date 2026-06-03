import type { Metadata } from "next";
import IssuesList from "@/components/key-issues/IssuesList";

export const metadata: Metadata = {
  title: "Key Issues – CRE",
  description:
    "Nine interconnected focus areas where CRE works for environmental conservation, tribal development, sustainable agriculture, forest policy, and international cooperation.",
};

const stats = [
  { value: "9", label: "Focus Areas" },
  { value: "14+", label: "Years Active" },
  { value: "10+", label: "States Covered" },
  { value: "200+", label: "Publications" },
];

export default function KeyIssuesPage() {
  return (
    <main className="pt-20 min-h-screen bg-white">

      {/* Hero */}
      <div className="bg-[#1b4332] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <p className="text-[#52b788] text-xs font-bold uppercase tracking-widest mb-4">
            Our Focus Areas
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-2xl">
            Key Issues We Work On
          </h1>
          <p className="mt-5 text-white/60 text-base max-w-xl leading-relaxed">
            Nine interconnected domains — from forest conservation to international diplomacy — where CRE drives evidence-based change at the grassroots and policy level.
          </p>

          {/* Stats row */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden">
            {stats.map((s) => (
              <div key={s.label} className="bg-[#1b4332] px-6 py-5">
                <p className="text-2xl sm:text-3xl font-black text-white">{s.value}</p>
                <p className="text-xs text-white/50 mt-1 uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Instruction strip */}
      <div className="border-b border-gray-100 bg-[#fafafa]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <p className="text-xs text-gray-400">Click any issue to expand details, actions, and impact</p>
          <p className="text-xs text-gray-400 hidden sm:block">Filter by theme below</p>
        </div>
      </div>

      {/* Issues accordion list */}
      <IssuesList />

    </main>
  );
}
