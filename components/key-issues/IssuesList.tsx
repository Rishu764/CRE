"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowRight, Plus, Minus } from "lucide-react";

const issues = [
  {
    id: "resource-management",
    number: "01",
    title: "Resource Management in Accountable Administration",
    summary: "Enforcing sustainable and transparent use of natural and public resources within governance frameworks.",
    what: "CRE advocates for integrating resource management principles into administrative accountability — ensuring forests, water, and land are governed with long-term sustainability in mind, not short-term extraction.",
    actions: ["Policy representations to state governments", "Articles in The Pioneer on governance reform", "Engagement with ICFRE Society on resource policy", "Advocacy at National Green Tribunal"],
    impact: "Influenced forest fire action directives from NGT. Contributed to ₹23.30 crore FRI building rehabilitation request.",
  },
  {
    id: "environment-conservation",
    number: "02",
    title: "Environment Conservation & Climate Change",
    summary: "Forest fire prevention, biodiversity conservation, water rejuvenation, and wildlife management across India.",
    what: "From forest fire control to aquifer recharge, CRE works at the intersection of ecology and policy — conducting field research, filing representations, and building coalitions for conservation action.",
    actions: ["NGT representations on forest fires", "Water rejuvenation and aquifer recharge advocacy", "Wildlife management policy input", "Biodiversity conservation field work"],
    impact: "NGT directed Centre and State governments on forest fire action based on CRE's representations.",
  },
  {
    id: "tribal-rural-development",
    number: "03",
    title: "Tribal & Rural Development",
    summary: "Empowering tribal artisans, forming self-help groups, and implementing Forest Rights Act for inclusive growth.",
    what: "CRE builds direct market access for tribal artisans, trains women in bamboo handicrafts, and guides communities through Forest Rights Act implementation — removing middlemen and restoring dignity.",
    actions: ["235+ tribal artisans connected to direct markets", "150+ women trained in bamboo handicrafts in Tripura", "Forest Rights Act guidance to tribal villages", "Van Dhan Centre establishment"],
    impact: "Women earning ₹5,000–6,000/month from mushroom cultivation. Artisans engaged by Tripura Forest Corporation.",
  },
  {
    id: "sustainable-agriculture",
    number: "04",
    title: "Sustainable Agriculture & Animal Resources",
    summary: "Organic farming, mushroom cultivation, Ganoderma labs, and vertical farming for enhanced farmer income.",
    what: "CRE promotes science-backed sustainable agriculture — from Ganoderma fungus labs to organic farmer producer companies — creating viable income alternatives that reduce pressure on forests.",
    actions: ["Mushroom cultivation training for women SHGs", "Ganoderma fungus lab inaugurated (2017)", "₹18 lakh ONGC CSR project for mushroom cultivation", "Jivamrit Organic Farmers Producers Company support"],
    impact: "Sugar cane factory distance norms relaxed in Uttarakhand. Organic farmers supported with policy relaxations.",
  },
  {
    id: "forest-policy",
    number: "05",
    title: "Forest Policy & Overall Governance",
    summary: "Joint Forest Management, CAMPA, NGT advocacy, and sustainable forest management standards.",
    what: "Dr. V.K. Bahuguna is the architect of Joint Forest Management policy in India and established CAMPA. CRE continues this legacy through active policy engagement at the highest levels.",
    actions: ["Joint Forest Management (JFM) policy architecture", "CAMPA establishment and monitoring", "National Green Tribunal filings", "ICFRE Society engagement on forest standards"],
    impact: "JFM now covers millions of hectares across India. CAMPA funds channelled for afforestation at scale.",
  },
  {
    id: "climate-change",
    number: "06",
    title: "Climate Change",
    summary: "South-South cooperation, climate-resilient development, and international workshops for a sustainable future.",
    what: "CRE convened a landmark 2024 international workshop with delegates from 6 countries, focusing on South-South cooperation as a practical alternative to waiting for developed-nation climate funds.",
    actions: ["International Workshop 2024 — 72 participants, 6 countries", "South-South cooperation framework building", "Climate-resilient development at district level", "Forest hydrology research advocacy"],
    impact: "Recommendations adopted on water rejuvenation, forest fire control, and climate-resilient administration.",
  },
  {
    id: "eco-tourism",
    number: "07",
    title: "Eco-Tourism & Eco-Development",
    summary: "National park assessment, community-based tourism, and eco-development for livelihood enhancement.",
    what: "CRE promotes eco-tourism as a tool for both conservation and community income — assessing national park management, building community tourism models, and advocating for wildlife-friendly development.",
    actions: ["National Park management assessments", "Community-based tourism model development", "Wildlife conservation awareness campaigns", "Eco-development project advocacy"],
    impact: "Farmer income diversification through eco-tourism in forest-fringe communities.",
  },
  {
    id: "legal-diplomatic",
    number: "08",
    title: "Legal & Diplomatic Issues",
    summary: "Judicial intervention, quick justice, and equitable legal frameworks for forest and tribal communities.",
    what: "CRE engages with legal mechanisms — from NGT filings to Election Commission representations — ensuring that environmental and social justice issues receive timely judicial attention.",
    actions: ["National Green Tribunal representations", "Election Commission engagement on voter integrity", "Legal advocacy for tribal rights", "Encroachment removal advocacy"],
    impact: "Uttarakhand government started demolition of encroached structures. Election Commission set up inquiry committees.",
  },
  {
    id: "international-issues",
    number: "09",
    title: "International Issues",
    summary: "Emerging geo-politics and India's role as a global leader in environmental diplomacy.",
    what: "CRE positions India as a leader in South-South environmental cooperation — building bridges with forest departments and NGOs across Asia, Africa, and beyond for shared solutions to shared problems.",
    actions: ["IUCN partnership and collaboration", "Asia-Pacific Forestry Organization engagement", "International Poplar Commission (UN/FAO)", "Bilateral cooperation with Mauritius, Nepal, Sri Lanka"],
    impact: "Vice-Chairman, Asia-Pacific Forestry Organization (2012). Executive Committee, International Poplar Commission.",
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function IssueRow({ issue, index }: { issue: (typeof issues)[number]; index: number }) {
  const [open, setOpen] = useState(false);
  const { ref, visible } = useInView();

  return (
    <div
      ref={ref}
      className="border-b border-gray-100 last:border-0"
      style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(24px)", transition: `opacity 0.5s ease ${index * 0.06}s, transform 0.5s ease ${index * 0.06}s` }}
    >
      {/* Row header */}
      <button
        className="w-full flex items-center gap-5 py-6 text-left group"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span className="text-xs font-bold text-gray-300 w-6 shrink-0 select-none">{issue.number}</span>
        <span className="flex-1 text-base sm:text-lg font-semibold text-gray-900 group-hover:text-[#2d6a4f] transition-colors leading-snug">
          {issue.title}
        </span>
        <span className="hidden sm:block text-sm text-gray-400 max-w-xs text-right leading-snug shrink-0 pr-4">
          {issue.summary}
        </span>
        <span className="shrink-0 w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:border-[#2d6a4f] group-hover:text-[#2d6a4f] transition-all">
          {open ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
        </span>
      </button>

      {/* Expanded panel */}
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[600px] pb-8" : "max-h-0"}`}>
        <div className="pl-11 grid sm:grid-cols-3 gap-8">
          {/* What we do */}
          <div className="sm:col-span-2">
            <p className="text-xs font-bold uppercase tracking-widest text-[#2d6a4f] mb-3">What We Do</p>
            <p className="text-sm text-gray-600 leading-relaxed mb-5">{issue.what}</p>
            <ul className="space-y-2">
              {issue.actions.map((a) => (
                <li key={a} className="flex items-start gap-2.5 text-sm text-gray-700">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-[#2d6a4f] shrink-0" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
          {/* Impact */}
          <div className="bg-[#f4f1ea] rounded-xl p-5">
            <p className="text-xs font-bold uppercase tracking-widest text-[#2d6a4f] mb-3">Impact</p>
            <p className="text-sm text-gray-700 leading-relaxed">{issue.impact}</p>
            <div className="mt-5 pt-4 border-t border-gray-200">
              <a href="/contact" className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2d6a4f] hover:text-[#1b4332] transition-colors group">
                Get Involved <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function IssuesList() {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "Environment", "People", "Policy", "International"];
  const filterMap: Record<string, string[]> = {
    Environment: ["environment-conservation", "climate-change", "eco-tourism"],
    People: ["tribal-rural-development", "sustainable-agriculture"],
    Policy: ["resource-management", "forest-policy", "legal-diplomatic"],
    International: ["international-issues", "climate-change"],
  };
  const visible = filter === "All" ? issues : issues.filter((i) => filterMap[filter]?.includes(i.id));

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      {/* Filter bar */}
      <div className="flex flex-wrap items-center gap-2 mb-12">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-1.5 text-sm font-medium rounded-full border transition-all ${
              filter === f ? "bg-[#1b4332] text-white border-[#1b4332]" : "bg-white text-gray-600 border-gray-200 hover:border-[#2d6a4f] hover:text-[#2d6a4f]"
            }`}
          >
            {f}
          </button>
        ))}
        <span className="ml-auto text-xs text-gray-400">{visible.length} issues</span>
      </div>

      {/* Issues list */}
      <div>
        {visible.map((issue, i) => (
          <IssueRow key={issue.id} issue={issue} index={i} />
        ))}
      </div>
    </div>
  );
}
