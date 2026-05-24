import { CheckCircle, ArrowRight, Leaf, Globe, Shield } from "lucide-react";
import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-emerald-50 rounded-full blur-3xl opacity-60 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-50 rounded-full blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual with Mission Statement */}
          <div className="relative">
            {/* Main mission card */}
            <div className="relative bg-gradient-to-br from-emerald-900 to-emerald-800 rounded-3xl p-8 lg:p-10 text-white overflow-hidden">
              {/* Decorative pattern */}
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="about-dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                      <circle cx="15" cy="15" r="1" fill="white" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#about-dots)" />
                </svg>
              </div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full border border-white/20 mb-6">
                  <Leaf className="w-4 h-4 text-emerald-300" />
                  <span className="text-xs font-semibold text-emerald-200 uppercase tracking-wider">Our Mission</span>
                </div>

                <blockquote className="text-xl sm:text-2xl lg:text-3xl font-bold leading-snug mb-6">
                  &ldquo;Inforce the concept of resource management and work for environmental conservation and mitigate climate change.&rdquo;
                </blockquote>

                <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-amber-400 rounded-full mb-6" />

                <p className="text-white/70 text-sm leading-relaxed">
                  — Centre for Resource Management & Environment (CRE), Est. 2011
                </p>
              </div>

              {/* Corner decoration */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-600/30 rounded-full blur-2xl" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-amber-500/20 rounded-full blur-2xl" />
            </div>

            {/* Three floating mini cards below */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 text-center hover:-translate-y-1 transition-transform">
                <Leaf className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
                <span className="text-xs font-semibold text-emerald-800">Resource Mgmt</span>
              </div>
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-center hover:-translate-y-1 transition-transform">
                <Globe className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <span className="text-xs font-semibold text-blue-800">Conservation</span>
              </div>
              <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 text-center hover:-translate-y-1 transition-transform">
                <Shield className="w-6 h-6 text-amber-600 mx-auto mb-2" />
                <span className="text-xs font-semibold text-amber-800">Climate Action</span>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50 border border-emerald-200 rounded-full mb-3">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-emerald-700 uppercase tracking-wider">
                  About CRE
                </span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 leading-tight">
                People-Centric Solutions for{" "}
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Environmental Challenges
                </span>
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed text-lg">
              The Centre for Resource Management and Environment (CRE) is a
              non-profit trust that raises nationally important issues on
              environment, agriculture, tribal and rural development, and
              governance. We work through advocacy, training, community
              empowerment, and direct engagement with policy makers.
            </p>

            <div className="space-y-3 bg-gray-50 rounded-2xl p-6 border border-gray-100">
              {[
                "Self-sustained operations without external grants",
                "Direct grassroots engagement across 10+ states",
                "Policy influence through media and government advocacy",
                "International collaboration on climate change",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">{point}</span>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white font-semibold rounded-full hover:bg-emerald-700 transition-all shadow-md hover:shadow-lg group"
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
