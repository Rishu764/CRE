"use client";

import {
  TreePine,
  Users,
  Sprout,
  Scale,
  Thermometer,
  Mountain,
  Briefcase,
  Globe2,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const issues = [
  {
    icon: BookOpen,
    title: "Resource Management in Accountable Administration",
    description:
      "Inforcing the concept of resource management within accountable governance frameworks to ensure sustainable and transparent use of natural and public resources.",
    number: "01",
  },
  {
    icon: TreePine,
    title: "Environment Conservation & Climate Change",
    description:
      "Forest fire prevention, biodiversity conservation, water rejuvenation, wildlife management, and active mitigation of climate change across India.",
    number: "02",
  },
  {
    icon: Users,
    title: "Tribal & Rural Development",
    description:
      "Empowering tribal artisans, forming self-help groups, promoting handicrafts, and implementing Forest Rights Act for inclusive rural growth.",
    number: "03",
  },
  {
    icon: Sprout,
    title: "Sustainable Agriculture & Animal Resources Management",
    description:
      "Organic farming, mushroom cultivation, Ganoderma fungus labs, vertical farming, and sustainable management of animal resources for enhanced farmer income.",
    number: "04",
  },
  {
    icon: Scale,
    title: "Forest Policy & Overall Governance",
    description:
      "Joint Forest Management, CAMPA, National Green Tribunal advocacy, and sustainable forest management standards within a broader governance framework.",
    number: "05",
  },
  {
    icon: Thermometer,
    title: "Climate Change",
    description:
      "South-South cooperation, climate-resilient development, forest hydrology research, and international workshops for a sustainable future.",
    number: "06",
  },
  {
    icon: Mountain,
    title: "Eco-Tourism & Development",
    description:
      "National park assessment, community-based tourism models, and eco-development projects for livelihood enhancement.",
    number: "07",
  },
  {
    icon: Briefcase,
    title: "Legal & Diplomatic Issues",
    description:
      "The issues of judicial intervention and need for quick justice to the people is an essential for a just jurisprudence and equitable legal framework.",
    number: "08",
  },
  {
    icon: Globe2,
    title: "International Issues",
    description:
      "Relating to emerging geo-politics and the role of emerging India as a global leader in environmental diplomacy and international cooperation.",
    number: "09",
  },
];

export default function KeyIssuesSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#f8faf8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <p className="text-[#2d6a4f] text-xs font-bold uppercase tracking-widest mb-3">
              Our Focus Areas
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Key Issues We Address
            </h2>
          </div>
          <p className="text-gray-500 text-base max-w-sm leading-relaxed lg:text-right">
            From forest conservation to tribal empowerment — working across
            interconnected domains for lasting change.
          </p>
        </div>

        {/* Issues Grid — unified green palette */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100 border border-gray-100 rounded-2xl overflow-hidden">
          {issues.map((issue) => (
            <div
              key={issue.title}
              className="group relative bg-white p-7 hover:bg-[#f8faf8] transition-colors duration-200 cursor-pointer"
            >
              {/* Left accent bar on hover */}
              <div className="absolute left-0 top-6 bottom-6 w-0.5 bg-[#2d6a4f] opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-full" />

              {/* Number + Icon row */}
              <div className="flex items-start justify-between mb-5">
                <div className="w-11 h-11 rounded-xl bg-[#2d6a4f]/8 flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
                  <issue.icon className="w-5 h-5 text-[#2d6a4f]" />
                </div>
                <span className="text-3xl font-black text-gray-100 group-hover:text-gray-200 transition-colors select-none leading-none">
                  {issue.number}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-base font-bold text-gray-900 mb-2.5 leading-snug">
                {issue.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                {issue.description}
              </p>

              {/* Learn more */}
              <div className="flex items-center gap-1 text-xs font-semibold text-[#2d6a4f] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <span>Learn more</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center justify-between mt-10 pt-8 border-t border-gray-100">
          <p className="text-sm text-gray-400">9 focus areas · active since 2011</p>
          <Link
            href="/key-issues"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#2d6a4f] hover:text-[#1b4332] transition-colors group"
          >
            Explore All Issues
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
