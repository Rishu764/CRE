"use client";

import { useState, useEffect, useRef } from "react";
import { Plus, Minus, ArrowRight } from "lucide-react";

const expertiseItems = [
  {
    id: "forestry-research",
    number: "01",
    title: "Forestry Research & Technological Innovation at ICFRE",
    summary: "Structural overhaul of India's premier research institutes — nano-cellulose, acoustics, biopesticides.",
    what: "During his tenure as Director General of ICFRE, Dr. Bahuguna systematically modernised India's premier forestry research institutes — re-engineering institutional frameworks and shifting focus toward frontier science.",
    points: [
      { label: "Structural Overhaul", desc: "Re-engineered institutional frameworks by establishing new research divisions dedicated to Silviculture, Agroforestry, Forest Biometry, Forest Biodiversity, and Climate Change." },
      { label: "Advanced Wood Sciences", desc: "Spearheaded research on nano-cellulose-filled fibres and mandated non-destructive technology (acoustics) for wood quality assessment in standing trees." },
      { label: "Commercial Biotech", desc: "Prioritised direct-to-consumer extension of scientific output — establishing commercial production setups for locally developed biopesticides and superior quality clones for farmers." },
    ],
    impact: "Transformed ICFRE from a passive conservation body into a proactive, high-tech forest science institution — directly assisting farmers in converting degraded private wastelands into profitable agroforestry plots.",
  },
  {
    id: "ifs-reforms",
    number: "02",
    title: "Indian Forest Service (IFS) Reforms",
    summary: "Shifting IFS from policing to ecosystem governance — frontline welfare, beat system, and 'Forgotten Martyrs'.",
    what: "Dr. Bahuguna remains a vocal advocate for reshaping the bureaucratic and operational nature of the IFS — shifting it from a policing agency to an ecosystem governance body where success is measured by quantifiable ecological outcomes.",
    points: [
      { label: "Ecosystem Over Policing", desc: "Argues for a shift from traditional policing and prosecution to governing holistic ecosystems — where success is measured by carbon sequestration rates, biodiversity index gains, and water table rejuvenation." },
      { label: "Frontline Welfare & The Beat System", desc: "As subgroup head for national planning, pushed for sweeping reforms to the traditional beat system — advocating parity with police personnel in hardship allowances and weaponry, specialised housing corporations, dedicated anti-poaching incentives, and rapid deployment of handheld leaf blowers, thermal drone mapping, and fire-retardant suits for forest guards." },
      { label: "Ending 'Fake Autonomy'", desc: "Openly advocated for bringing autonomous bodies like ICFRE into tighter government oversight to streamline funding and eliminate administrative gaps that stall critical climate research." },
      { label: "The 'Forgotten Martyrs'", desc: "In his widely read commentary, he highlights that forest guards are systematically under-equipped to handle modern fire seasons — arguing for an urgent move away from the rudimentary practice of beating fires with green tree branches." },
    ],
    impact: "His reform proposals influenced national planning subgroup recommendations. Advocacy for forest guard welfare has been widely cited in IFS reform discussions.",
  },
  {
    id: "environmental-policy",
    number: "03",
    title: "Environmental Policy, Conservation & PPP Risks",
    summary: "FRA critique, NTFPs, 2026 privatisation debate — monoculture trap, land grab risk, community consent.",
    what: "His recent work, heavily published in The Pioneer and Millennium Post, focuses on balancing national growth with ecological survival — critiquing legislation that sacrifices ecological health for short-term corporate or political gains.",
    points: [
      { label: "Forest Rights Act — 'Ecological Suicide' Warning", desc: "Has raised critical alarms on FRA 2006 implementation — warning it has been hollowed into a political tool that regularises encroachments. He insists community rights must be mapped with unalterable GIS boundaries to protect core tiger and elephant habitats." },
      { label: "Tribal Economics & NTFPs", desc: "Champions economic empowerment of indigenous communities through Non-Timber Forest Products (NTFPs), Agar cultivation, and bamboo on vested lands — directly linking tribal livelihoods to standing forest conservation." },
      { label: "2026 Forest Conservation Act — Privatisation Debate", desc: "Supports public-private partnerships for India's 33% forest cover target, but strictly warns: DPRs must mandate a heavy mix of indigenous trees (not commercial monocultures like Eucalyptus/Acacia), and no lease should proceed without explicit community consent and strict third-party audits." },
      { label: "The Monoculture Trap", desc: "Private entities favour fast-growing commercial species that create ecological deserts — depleting groundwater, failing to support wildlife, and replacing complex multi-tiered ecosystems." },
      { label: "The Land Grab Risk", desc: "Long-term, loosely regulated leases risk slowly converting public conservation areas into closed corporate resorts or private timber estates, cutting off community access permanently." },
      { label: "Absence of Standardised Baselines", desc: "A critical flaw in existing PPPs: without verified pre-lease biological data on local biodiversity and carbon stock, it is impossible to audit whether a private operator has actually improved or degraded the ecosystem." },
    ],
    impact: "Widely cited in national policy circles. His Pioneer columns on forest privatisation prompted editorial responses from MoEFCC officials and civil society organisations.",
  },
  {
    id: "livelihood-models",
    number: "04",
    title: "Livelihood Models: Bamboo, Lac, Jhumia & NTFPs",
    summary: "Jhumia rehabilitation, Bamboo Composite Centres, Lac cultivation, TFDPC corporate model.",
    what: "Throughout his career — from his formative years in the Tripura cadre to advising the national Planning Commission — Dr. Bahuguna designed livelihood models that tied tribal economics directly to forest conservation.",
    points: [
      { label: "The Jhumia Rehabilitation Scheme (Tripura)", desc: "Rather than criminalising slash-and-burn (Jhum) cultivation, he structured the Jhumia Rehabilitation Scheme — allocating permanent land plots to tribal families for natural rubber and indigenous bamboo species like Kanak Kais and Barak, transitioning nomadic cultivators into settled, self-sustaining stakeholders." },
      { label: "Bamboo Composite Centres", desc: "Instrumental in establishing Bamboo Composite Centres in Tripura — training local artisans to turn indigenous bamboo species into high-value engineered wood composites, linking poverty alleviation directly to sustainable harvesting and forest conservation." },
      { label: "The Lac Economic Model (Jharkhand & Odisha)", desc: "Championed Lac cultivation — a resin secreted by insects on host trees like Kusum and Palas. Cultivation on just three host trees can yield higher net income for tribal women's SHGs than a full acre of paddy, incentivising communities to protect trees rather than clear them." },
      { label: "TFDPC Corporate Model", desc: "Leveraged state corporate machinery through the Tripura Forest Development and Plantation Corporation (TFDPC) to ensure thousands of local tribal labourers and tappers received standardised institutional output shares — eliminating informal middlemen exploitation across rubber estates." },
    ],
    impact: "More than 300 tribal shifting cultivators permanently settled. Thousands of families transitioned from subsistence Jhum to stable livelihoods. TFDPC turned from loss-making to 600%+ profit, providing livelihood to 15,000+ families.",
  },
  {
    id: "international-work",
    number: "05",
    title: "International Forestry Work & Global Leadership",
    summary: "APAFRI Vice-Chairmanship, CFA Governing Council, pan-Asian climate research coordination.",
    what: "Dr. Bahuguna elevated India's scientific forestry footprint on the global stage through institutional diplomacy — representing developing-nation perspectives in international forums and spearheading knowledge democratisation across Asia.",
    points: [
      { label: "APAFRI Vice-Chairmanship", desc: "Representing ICFRE, served as Vice-Chairman of the Asia-Pacific Association of Forestry Research Institutions (APAFRI). Worked closely with Forest Research Institute Malaysia (FRIM) to coordinate pan-Asian climate research. Spearheaded initiatives to digitise and democratise forestry data — pushing member nations to share real-time updates on pest management, invasive species, and community-led conservation." },
      { label: "Commonwealth Forestry Association — Governing Council", desc: "Served on the Governing Council of the CFA, representing developing-nation perspectives in global talks on carbon trade, international timber laws, and forest governance." },
      { label: "Publications & Commentary — Muckrack", desc: "Dr. Bahuguna's journalism and commentary portfolio spanning The Pioneer, Millennium Post, and other national publications is archived on Muckrack." },
    ],
    impact: "Elected Vice-Chairman of APAFRI 2012. Served on CFA Governing Council. Queen's Award for Forestry 2000 from Commonwealth Forestry Association UK.",
    links: [
      { label: "CFA International", href: "https://www.cfa-international.org" },
      { label: "Muckrack Profile", href: "https://muckrack.com/vk-bahuguna/articles" },
    ],
  },
  {
    id: "tribal-industry",
    number: "06",
    title: "Resolving the Tribal–Industry Overlap & Legal Reform",
    summary: "GIS demarcation, shared equity model, JFM+, PESA convergence, National Forestry Regulatory Authority.",
    what: "Dr. Bahuguna has proposed structural strategies to navigate the tension between industrial development, tribal rights, and forest conservation — arguing for legal reforms that give indigenous communities real economic power rather than one-time compensation.",
    points: [
      { label: "GIS-Based Gram Sabha Demarcation", desc: "Advocates for mandatory GIS-based boundary tagging for all community forest resource rights — clearly separating inviolable tribal cultural lands from areas that can be allocated for sustainable infrastructure." },
      { label: "Shared Equity Model", desc: "Instead of one-time cash compensations, champions an equity-sharing mechanism where local tribal cooperatives hold a permanent, non-transferable stake in any industrial or eco-tourism project near forest boundaries — ensuring long-term wealth generation from local resources." },
      { label: "JFM+ Framework", desc: "Proposes upgrading traditional Joint Forest Management committees into legal corporate bodies that can directly negotiate with state governments and corporate entities — giving indigenous populations real bargaining power rather than relying on bureaucratic intermediaries." },
      { label: "Legislative Convergence", desc: "Calls for a comprehensive overhaul to eliminate contradictions between the Forest Conservation Act, the Forest Rights Act, and the PESA Act (Panchayats Extension to Scheduled Areas)." },
      { label: "National Forestry Regulatory Authority", desc: "Advocates for an independent statutory body functioning as a 'green judiciary' — vetting all mega-industrial clearances, auditing public-private forestry projects, and protecting tribal economic shares from corporate exploitation." },
    ],
    impact: "These structural proposals represent a shift from compensatory justice to participatory ownership — a model being studied by policy researchers and NGOs working in forest-fringe communities across Central India.",
  },
  {
    id: "forest-fires",
    number: "07",
    title: "Forest Fire Mitigation & Media Advocacy",
    summary: "Pine needle briquetting, thermal drone mapping, fire-retardant suits — treating fires as a national security threat.",
    what: "Dr. Bahuguna treats forest fires as an immediate national security threat rather than a routine seasonal hazard — advocating for both community-based prevention and modern technological deployment for frontline foresters.",
    points: [
      { label: "The Pine Needle Fire Hazard", desc: "Addresses the threat posed by Chir Pine (Pinus roxburghii) in the Western Himalayan belt. Dry pine needles are highly inflammable due to resin content. Aggressively champions community-driven pine needle briquetting plants — advocating government buyback of collected dry needles from villagers to clear forest floors before the dry summer peak." },
      { label: "Modernising Frontline Foresters", desc: "In his commentary The Forgotten Martyrs, he highlights that forest guards are systematically under-equipped. Advocates for rapid deployment of handheld leaf blowers, thermal drone mapping, and specialised fire-retardant suits — moving away from the rudimentary practice of beating fires with green tree branches." },
    ],
    impact: "NGT directed Centre and State governments on forest fire action based on CRE's representations. His pine needle briquetting model has been piloted in Uttarakhand villages.",
  },
  {
    id: "climate-2035",
    number: "08",
    title: "Vision for 2035 Climate Targets",
    summary: "Green Accounting, 7% moisture formula, decentralised bioclimatic planning, glacier debris dams.",
    what: "Looking beyond the 2030 NDCs, Dr. Bahuguna's long-term framework focuses on sustaining India's environmental resilience into the 2035 target window — connecting macro-level atmospheric shifts to local mountain catastrophes.",
    points: [
      { label: "The 7% Moisture Formula", desc: "Documents how for every 1°C rise in atmospheric temperature, the air holds 7% more moisture — resulting in erratic cloudbursts and flash floods across the Western Himalayas. Retreating glaciers leave fragile debris dams that form temporary lakes; when these burst, they devastate downstream settlements." },
      { label: "Green Accounting", desc: "Envisions a complete overhaul of how India calculates GDP. Proposes that state budgets be incentivised based on verified data of oxygen production, soil conservation, and clean water generated by standing forest ecosystems — moving past satellite data that misidentifies private orchards and monocultures as healthy forests." },
      { label: "Decentralised Bioclimatic Planning", desc: "Insists that generalised national policies fail in hyper-local terrains. Blueprints for 2035 emphasise decentralising forest management down to regional bioclimatic zones — with local communities legally designated as primary protectors and financial beneficiaries of native eco-zones." },
      { label: "Highway & Infrastructure Critique", desc: "An outspoken critic of hill-cutting for four-lane highways and hydro-power infrastructure built without local geographic and ecological mapping." },
    ],
    impact: "His advocacy on glacier debris dams and cloudburst causation has been cited in disaster management policy discussions in Uttarakhand and Himachal Pradesh.",
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function ExpertiseRow({
  item,
  index,
}: {
  item: (typeof expertiseItems)[number];
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const { ref, visible } = useInView();

  return (
    <div
      ref={ref}
      className="border-b border-gray-100 last:border-0"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(24px)",
        transition: `opacity 0.5s ease ${index * 0.06}s, transform 0.5s ease ${index * 0.06}s`,
      }}
    >
      {/* Row header */}
      <button
        className="w-full flex items-center gap-5 py-6 text-left group"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span className="text-xs font-bold text-gray-300 w-6 shrink-0 select-none">
          {item.number}
        </span>
        <span className="flex-1 text-base sm:text-lg font-semibold text-gray-900 group-hover:text-[#2d6a4f] transition-colors leading-snug">
          {item.title}
        </span>
        <span className="hidden sm:block text-sm text-gray-400 max-w-xs text-right leading-snug shrink-0 pr-4">
          {item.summary}
        </span>
        <span className="shrink-0 w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:border-[#2d6a4f] group-hover:text-[#2d6a4f] transition-all">
          {open ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
        </span>
      </button>

      {/* Expanded panel */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-[900px] pb-8" : "max-h-0"
        }`}
      >
        <div className="pl-11 grid sm:grid-cols-3 gap-8">
          {/* Left: what + points */}
          <div className="sm:col-span-2">
            <p className="text-xs font-bold uppercase tracking-widest text-[#2d6a4f] mb-3">
              Overview
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-5">{item.what}</p>
            <ul className="space-y-3">
              {item.points.map((p) => (
                <li key={p.label} className="flex items-start gap-2.5 text-sm text-gray-700">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-[#2d6a4f] shrink-0" />
                  <span>
                    <strong className="text-gray-900">{p.label}:</strong>{" "}
                    {p.desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: impact */}
          <div className="bg-[#f4f1ea] rounded-xl p-5 h-fit">
            <p className="text-xs font-bold uppercase tracking-widest text-[#2d6a4f] mb-3">
              Impact
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">{item.impact}</p>
            {"links" in item && item.links && (
              <ul className="mt-4 space-y-2">
                {item.links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2d6a4f] hover:text-[#1b4332] transition-colors group"
                    >
                      {l.label}{" "}
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-5 pt-4 border-t border-gray-200">
              <a
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2d6a4f] hover:text-[#1b4332] transition-colors group"
              >
                Get Involved{" "}
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ExpertiseAccordion() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      <div>
        {expertiseItems.map((item, i) => (
          <ExpertiseRow key={item.id} item={item} index={i} />
        ))}
      </div>
    </div>
  );
}
