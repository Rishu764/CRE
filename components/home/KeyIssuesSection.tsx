"use client";

import {
  TreePine,
  Users,
  Sprout,
  Scale,
  Thermometer,
  Mountain,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const issues = [
  {
    icon: TreePine,
    title: "Environmental Conservation",
    description:
      "Forest fire prevention, biodiversity conservation, water rejuvenation, and wildlife management across India.",
    gradient: "from-emerald-500 to-green-600",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-500",
    borderHover: "hover:border-emerald-400",
    number: "01",
  },
  {
    icon: Users,
    title: "Tribal & Rural Development",
    description:
      "Empowering tribal artisans, forming self-help groups, promoting handicrafts, and implementing Forest Rights Act.",
    gradient: "from-amber-500 to-orange-600",
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-500",
    borderHover: "hover:border-amber-400",
    number: "02",
  },
  {
    icon: Sprout,
    title: "Sustainable Agriculture",
    description:
      "Organic farming, mushroom cultivation, Ganoderma fungus labs, and vertical farming for enhanced farmer income.",
    gradient: "from-lime-500 to-green-600",
    iconBg: "bg-lime-500/10",
    iconColor: "text-lime-500",
    borderHover: "hover:border-lime-400",
    number: "03",
  },
  {
    icon: Scale,
    title: "Forest Policy & Governance",
    description:
      "Joint Forest Management, CAMPA, National Green Tribunal advocacy, and sustainable forest management standards.",
    gradient: "from-blue-500 to-indigo-600",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-500",
    borderHover: "hover:border-blue-400",
    number: "04",
  },
  {
    icon: Thermometer,
    title: "Climate Change",
    description:
      "South-South cooperation, climate-resilient development, forest hydrology research, and international workshops.",
    gradient: "from-red-500 to-rose-600",
    iconBg: "bg-red-500/10",
    iconColor: "text-red-500",
    borderHover: "hover:border-red-400",
    number: "05",
  },
  {
    icon: Mountain,
    title: "Eco-Tourism & Development",
    description:
      "National park assessment, community-based tourism models, and eco-development projects for livelihood enhancement.",
    gradient: "from-teal-500 to-cyan-600",
    iconBg: "bg-teal-500/10",
    iconColor: "text-teal-500",
    borderHover: "hover:border-teal-400",
    number: "06",
  },
];

export default function KeyIssuesSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#f8faf8] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-100/40 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 border border-emerald-200 rounded-full mb-4">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-emerald-700 uppercase tracking-wider">
              Our Focus Areas
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-4">
            Key Issues We{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Address
            </span>
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            From forest conservation to tribal empowerment, we work across
            multiple interconnected domains to create lasting, sustainable
            change.
          </p>
        </div>

        {/* Issues Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {issues.map((issue) => (
            <div
              key={issue.title}
              className={`group relative bg-white rounded-2xl p-7 border border-gray-100 ${issue.borderHover} transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer overflow-hidden`}
            >
              {/* Gradient top bar */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${issue.gradient} opacity-0 group-hover:opacity-100 transition-opacity`}
              />

              {/* Number watermark */}
              <span className="absolute top-4 right-5 text-5xl font-black text-gray-100 group-hover:text-gray-200 transition-colors select-none">
                {issue.number}
              </span>

              {/* Icon */}
              <div
                className={`relative w-14 h-14 ${issue.iconBg} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                <issue.icon className={`w-7 h-7 ${issue.iconColor}`} />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-gray-800">
                {issue.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                {issue.description}
              </p>

              {/* Learn more link */}
              <div className="flex items-center gap-1 text-sm font-medium text-gray-400 group-hover:text-emerald-600 transition-colors">
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Link
            href="/key-issues"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-full hover:from-emerald-700 hover:to-teal-700 transition-all shadow-lg hover:shadow-xl hover:shadow-emerald-200/50 hover:-translate-y-0.5"
          >
            Explore All Issues
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
