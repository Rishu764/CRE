import { CheckCircle, ArrowRight, Leaf, Globe, Shield } from "lucide-react";
import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — Mission block */}
          <div className="space-y-5">
            {/* Mission card — solid dark green, clean */}
            <div className="relative bg-[#1b4332] rounded-2xl p-8 lg:p-10 text-white overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-6">
                  <Leaf className="w-4 h-4 text-[#52b788]" />
                  <span className="text-xs font-bold text-[#52b788] uppercase tracking-widest">
                    Our Mission
                  </span>
                </div>

                <blockquote className="text-xl sm:text-2xl font-semibold leading-snug text-white mb-6">
                  &ldquo;Inforce the concept of resource management and work for
                  environmental conservation and mitigate climate change.&rdquo;
                </blockquote>

                <div className="w-10 h-0.5 bg-[#e9c46a] mb-5" />

                <p className="text-white/45 text-sm">
                  — Centre for Resource Management &amp; Environment (CRE), Est. 2011
                </p>
              </div>
            </div>

            {/* Three pillars — single color, clean */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: Leaf, label: "Resource Mgmt" },
                { icon: Globe, label: "Conservation" },
                { icon: Shield, label: "Climate Action" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="border border-gray-100 rounded-xl p-4 text-center hover:border-[#2d6a4f]/30 hover:bg-[#2d6a4f]/5 transition-colors"
                >
                  <Icon className="w-5 h-5 text-[#2d6a4f] mx-auto mb-2" />
                  <span className="text-xs font-semibold text-gray-700">{label}</span>
                </div>
              ))}
            </div>

            {/* Registration note */}
            <div className="flex items-center gap-3 pt-1">
              <div className="w-8 h-px bg-gray-200" />
              <span className="text-xs text-gray-400 font-medium">
                Registered under Indian Trust Act, 1882 · Sec. 12A · 80G
              </span>
            </div>
          </div>

          {/* Right — Content */}
          <div className="space-y-7 lg:pt-2">
            <div>
              <span className="text-xs font-bold text-[#2d6a4f] uppercase tracking-widest">
                About CRE
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3 leading-tight">
                People-Centric Solutions for{" "}
                <span className="text-[#2d6a4f]">Environmental Challenges</span>
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed text-lg">
              The Centre for Resource Management and Environment (CRE) is a
              non-profit trust that raises nationally important issues on
              environment, agriculture, tribal and rural development, and
              governance. We work through advocacy, training, community
              empowerment, and direct engagement with policy makers.
            </p>

            {/* Key points */}
            <div className="space-y-3 border border-gray-100 rounded-xl p-6 bg-gray-50/50">
              {[
                "Self-sustained operations without external grants",
                "Direct grassroots engagement across 10+ states",
                "Policy influence through media and government advocacy",
                "International collaboration on climate change",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#2d6a4f] shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">{point}</span>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1b4332] text-white text-sm font-semibold rounded-lg hover:bg-[#2d6a4f] transition-colors group"
            >
              Read Our Full Story
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
