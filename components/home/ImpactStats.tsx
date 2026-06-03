import { TrendingUp, Award, Globe2, Newspaper } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    number: "₹366 Cr",
    label: "JICA Forest Project (Tripura)",
    sublabel: "Japan International Cooperation Agency",
  },
  {
    icon: Award,
    number: "Queen's Award",
    label: "For Forestry (Year 2000)",
    sublabel: "Commonwealth Forestry Association, UK",
    gold: true,
  },
  {
    icon: Globe2,
    number: "15,000+",
    label: "Rural Families Impacted",
    sublabel: "Through TFDPC livelihood programmes",
  },
  {
    icon: Newspaper,
    number: "200+",
    label: "Publications & Articles",
    sublabel: "In national & international journals",
  },
];

export default function ImpactStats() {
  return (
    <section className="py-20 lg:py-24 bg-[#0f2318]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
          <div>
            <p className="text-[#52b788] text-xs font-bold uppercase tracking-widest mb-3">
              Measurable Change
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
              Our Impact in Numbers
            </h2>
          </div>
          <p className="text-white/40 text-sm max-w-xs leading-relaxed">
            Sustained advocacy, community engagement, and policy influence — tracked over decades.
          </p>
        </div>

        {/* Stats — column divider layout */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`py-8 sm:py-0 sm:px-8 group ${i === 0 ? "sm:pl-0" : ""} ${i === stats.length - 1 ? "sm:pr-0" : ""}`}
            >
              {/* Icon */}
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-5"
                style={{ background: stat.gold ? "rgba(233,196,106,0.12)" : "rgba(82,183,136,0.12)" }}
              >
                <stat.icon
                  className="w-5 h-5"
                  style={{ color: stat.gold ? "#e9c46a" : "#52b788" }}
                />
              </div>

              {/* Number */}
              <div
                className="text-2xl lg:text-3xl font-black mb-2 leading-none"
                style={{ color: stat.gold ? "#e9c46a" : "#52b788" }}
              >
                {stat.number}
              </div>

              {/* Label */}
              <div className="text-sm font-semibold text-white/80 mb-1 leading-snug">
                {stat.label}
              </div>

              {/* Sublabel */}
              <div className="text-xs text-white/35 leading-relaxed">
                {stat.sublabel}
              </div>

              {/* Hover underline */}
              <div
                className="mt-5 h-px w-0 group-hover:w-full transition-all duration-500"
                style={{ background: stat.gold ? "#e9c46a" : "#52b788" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
