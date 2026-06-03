"use client";

import { useEffect, useRef, useState } from "react";
import { Search, Network, Megaphone, GraduationCap, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Identify",
    desc: "Visit grassroots communities firsthand. Understand problems from the ground up — not from desks or reports.",
  },
  {
    icon: Network,
    step: "02",
    title: "Build Networks",
    desc: "Create confederations of NGOs, community organisations, and government bodies around shared goals.",
  },
  {
    icon: Megaphone,
    step: "03",
    title: "Advocate",
    desc: "Write in national media, approach government authorities, file with tribunals. Make noise where it matters.",
  },
  {
    icon: GraduationCap,
    step: "04",
    title: "Train & Empower",
    desc: "Conduct training programmes, form SHGs, build capacity at the community level for lasting self-reliance.",
  },
  {
    icon: CheckCircle,
    step: "05",
    title: "Follow Through",
    desc: "Monitor implementation, maintain pressure, ensure outcomes. Change is measured, not assumed.",
  },
];

const domains = [
  {
    title: "Advocacy & Policy",
    stat: "NGT Directives Won",
    detail: "Regular columns in The Pioneer (10+ cities). Representations to NGT, ICFRE Society, Chief Ministers, and Governors.",
    items: ["National Green Tribunal filings", "ICFRE Society engagement", "The Pioneer — 2–3 articles/month", "Jan Vikas Manch confederation"],
  },
  {
    title: "Capacity Building",
    stat: "150+ Women Trained",
    detail: "Hands-on training in bamboo handicrafts, mushroom cultivation, organic farming, and forest-based livelihoods.",
    items: ["Bamboo jewellery — 30 SHGs, Uttarakhand", "Bamboo handicrafts — 150+ women, Tripura", "Mushroom cultivation — ₹18L ONGC CSR", "Ganoderma fungus lab (2017)"],
  },
  {
    title: "Community Empowerment",
    stat: "235+ Artisans Connected",
    detail: "Direct market access for tribal artisans, Forest Rights Act guidance, and Van Dhan Centre establishment.",
    items: ["235+ tribal artisans — direct markets", "Forest Rights Act implementation guidance", "Prerna SHG at FRI campus", "Van Dhan Centre proposal, Kundam"],
  },
  {
    title: "Research & Knowledge",
    stat: "200+ Publications",
    detail: "Climate impact assessments, forest ecosystem studies, medicinal plants research, and agricultural reform analysis.",
    items: ["Climate change impact assessment", "Forest hydrology research advocacy", "Medicinal plants conservation", "200+ papers in national/international journals"],
  },
];

function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, visible } = useInView();
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(28px)",
        transition: `opacity 0.55s ease ${delay}s, transform 0.55s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

export default function WorkApproach() {
  return (
    <>
      {/* ── How We Work ── */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-bold uppercase tracking-widest text-[#2d6a4f] mb-3">Our Approach</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">How We Work</h2>
            <p className="text-gray-400 text-sm max-w-md mb-14">
              A five-step cycle that starts at the grassroots and ends with verified, measurable change.
            </p>
          </AnimatedSection>

          <div className="relative">
            {/* Connector line — desktop */}
            <div className="hidden lg:block absolute top-8 left-[calc(10%+1.25rem)] right-[calc(10%+1.25rem)] h-px bg-gray-100" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {steps.map((s, i) => (
                <AnimatedSection key={s.step} delay={i * 0.08}>
                  <div className="flex flex-col items-start lg:items-center lg:text-center">
                    <div className="relative mb-5">
                      <div className="w-10 h-10 rounded-full bg-[#1b4332] flex items-center justify-center z-10 relative">
                        <s.icon className="w-4.5 h-4.5 text-white w-[18px] h-[18px]" />
                      </div>
                    </div>
                    <span className="text-[10px] font-black text-gray-200 mb-1 tracking-widest">{s.step}</span>
                    <h3 className="text-sm font-bold text-gray-900 mb-2">{s.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Domains of Work ── */}
      <section className="py-20 bg-[#fafaf9]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-xs font-bold uppercase tracking-widest text-[#2d6a4f] mb-3">What We Do</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-14">Four Domains of Work</h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-6">
            {domains.map((d, i) => (
              <AnimatedSection key={d.title} delay={i * 0.07}>
                <div className="bg-white rounded-2xl p-7 border border-gray-100 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-base font-bold text-gray-900 leading-snug">{d.title}</h3>
                    <span className="text-[11px] font-bold text-[#2d6a4f] bg-[#2d6a4f]/8 px-2.5 py-1 rounded-full whitespace-nowrap ml-3 shrink-0">
                      {d.stat}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed mb-5">{d.detail}</p>
                  <ul className="mt-auto space-y-2.5">
                    {d.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                        <span className="mt-[7px] w-1 h-1 rounded-full bg-[#2d6a4f] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
