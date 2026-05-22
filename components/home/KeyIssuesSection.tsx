import {
  TreePine,
  Users,
  Sprout,
  Scale,
  Thermometer,
  Mountain,
} from "lucide-react";
import Link from "next/link";

const issues = [
  {
    icon: TreePine,
    title: "Environmental Conservation",
    description:
      "Forest fire prevention, biodiversity conservation, water rejuvenation, and wildlife management across India.",
    color: "bg-emerald-50 text-emerald-600 border-emerald-100",
    iconBg: "bg-emerald-100",
  },
  {
    icon: Users,
    title: "Tribal & Rural Development",
    description:
      "Empowering tribal artisans, forming self-help groups, promoting handicrafts, and implementing Forest Rights Act.",
    color: "bg-amber-50 text-amber-600 border-amber-100",
    iconBg: "bg-amber-100",
  },
  {
    icon: Sprout,
    title: "Sustainable Agriculture",
    description:
      "Organic farming, mushroom cultivation, Ganoderma fungus labs, and vertical farming for enhanced farmer income.",
    color: "bg-lime-50 text-lime-600 border-lime-100",
    iconBg: "bg-lime-100",
  },
  {
    icon: Scale,
    title: "Forest Policy & Governance",
    description:
      "Joint Forest Management, CAMPA, National Green Tribunal advocacy, and sustainable forest management standards.",
    color: "bg-blue-50 text-blue-600 border-blue-100",
    iconBg: "bg-blue-100",
  },
  {
    icon: Thermometer,
    title: "Climate Change",
    description:
      "South-South cooperation, climate-resilient development, forest hydrology research, and international workshops.",
    color: "bg-red-50 text-red-600 border-red-100",
    iconBg: "bg-red-100",
  },
  {
    icon: Mountain,
    title: "Eco-Tourism & Development",
    description:
      "National park assessment, community-based tourism models, and eco-development projects for livelihood enhancement.",
    color: "bg-teal-50 text-teal-600 border-teal-100",
    iconBg: "bg-teal-100",
  },
];

export default function KeyIssuesSection() {
  return (
    <section className="py-20 lg:py-28 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Our Focus
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-4">
            Key Issues We Address
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="text-text-muted leading-relaxed">
            From forest conservation to tribal empowerment, we work across
            multiple interconnected domains to create lasting, sustainable
            change.
          </p>
        </div>

        {/* Issues Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {issues.map((issue) => (
            <div
              key={issue.title}
              className={`card-hover rounded-2xl p-7 bg-white border ${issue.color} cursor-pointer group`}
            >
              <div
                className={`w-12 h-12 ${issue.iconBg} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
              >
                <issue.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {issue.title}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                {issue.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/key-issues"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-colors shadow-md hover:shadow-lg"
          >
            Explore All Issues
          </Link>
        </div>
      </div>
    </section>
  );
}
