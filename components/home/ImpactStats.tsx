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
    <section
      className="py-20 lg:py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1b4332 0%, #2d6a4f 50%, #52b788 100%)",
      }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full blur-3xl" style={{ background: "#e9c46a" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">
            Our Impact in Numbers
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Measurable change through sustained advocacy, community engagement,
            and policy influence.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-colors"
              style={{ background: "rgba(255,255,255,0.1)" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                style={{ background: "rgba(255,255,255,0.2)" }}
              >
                <stat.icon className="w-6 h-6" style={{ color: "#e9c46a" }} />
              </div>
              <div className="text-2xl lg:text-3xl font-bold text-white mb-1">
                {stat.number}
              </div>
              <div className="text-sm font-medium text-white/90 mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-white/60">{stat.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
