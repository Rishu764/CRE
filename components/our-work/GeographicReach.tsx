"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin } from "lucide-react";

const regions = [
  {
    state: "Uttarakhand",
    districts: ["Dehradun", "Almora", "Haridwar", "Pauri", "Tehri", "Nainital"],
    focus: "Forest conservation, organic farming, SHG training, bamboo handicrafts",
    highlight: true,
  },
  {
    state: "Madhya Pradesh",
    districts: ["Bhopal", "Sehore", "Indore", "Khandwa", "Jabalpur", "Seoni", "Dindori"],
    focus: "Tribal Forest Rights Act, Baiga community engagement, Van Dhan Centre",
    highlight: false,
  },
  {
    state: "Tripura",
    districts: ["Agartala", "Kanchanpur", "Udaipur", "Jirania"],
    focus: "Bamboo handicraft training, Van Mahotsav, tribal artisan empowerment",
    highlight: true,
  },
  {
    state: "Uttar Pradesh",
    districts: ["Noida", "Various districts"],
    focus: "CRE headquarters, policy advocacy, media engagement",
    highlight: false,
  },
  {
    state: "Jammu & Kashmir",
    districts: ["Central University of Kashmir"],
    focus: "President's nominee — Executive Council & University Court",
    highlight: false,
  },
  {
    state: "Karnataka",
    districts: ["Mysore"],
    focus: "Forest Rights Act 2006 fact-finding assessment",
    highlight: false,
  },
];

const intlCountries = [
  "Australia", "Italy", "China", "Sweden", "USA", "Cambodia",
  "United Kingdom", "Bhutan", "Nepal", "Germany", "Switzerland",
  "South Africa", "Singapore", "Indonesia", "Belgium", "Thailand",
  "Malaysia", "Guatemala", "Guatemala",
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

export default function GeographicReach() {
  const { ref, visible } = useInView();

  return (
    <section className="py-20 bg-[#1b4332] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div
          ref={ref}
          style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(24px)", transition: "opacity 0.5s ease, transform 0.5s ease" }}
        >
          <p className="text-xs font-bold uppercase tracking-widest text-[#52b788] mb-3">Where We Work</p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight">Geographic Reach</h2>
            <div className="flex gap-8">
              <div>
                <p className="text-2xl font-black text-white">10+</p>
                <p className="text-xs text-white/40 uppercase tracking-wider mt-0.5">States</p>
              </div>
              <div>
                <p className="text-2xl font-black text-white">30+</p>
                <p className="text-xs text-white/40 uppercase tracking-wider mt-0.5">Countries</p>
              </div>
              <div>
                <p className="text-2xl font-black text-white">5</p>
                <p className="text-xs text-white/40 uppercase tracking-wider mt-0.5">Continents</p>
              </div>
            </div>
          </div>
        </div>

        {/* India grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-12">
          {regions.map((r, i) => (
            <div
              key={r.state}
              className={`rounded-xl p-5 border transition-colors ${r.highlight ? "bg-white/8 border-white/15" : "bg-white/4 border-white/8"}`}
              style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(20px)", transition: `opacity 0.5s ease ${0.1 + i * 0.07}s, transform 0.5s ease ${0.1 + i * 0.07}s` }}
            >
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-3.5 h-3.5 text-[#52b788] shrink-0" />
                <h3 className="text-sm font-bold text-white">{r.state}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {r.districts.map((d) => (
                  <span key={d} className="text-[11px] text-white/50 bg-white/6 px-2 py-0.5 rounded-full">{d}</span>
                ))}
              </div>
              <p className="text-xs text-white/40 leading-relaxed">{r.focus}</p>
            </div>
          ))}
        </div>

        {/* International strip */}
        <div
          className="border-t border-white/10 pt-10"
          style={{ opacity: visible ? 1 : 0, transition: "opacity 0.5s ease 0.5s" }}
        >
          <p className="text-xs font-bold uppercase tracking-widest text-[#52b788] mb-4">International Presence</p>
          <div className="flex flex-wrap gap-2">
            {[...new Set(intlCountries)].map((c) => (
              <span key={c} className="text-xs text-white/60 border border-white/10 px-3 py-1 rounded-full hover:border-white/25 hover:text-white/80 transition-colors">
                {c}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
