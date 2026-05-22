import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-muted to-muted-dark p-8 lg:p-12">
              {/* Decorative card stack */}
              <div className="space-y-4">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 bg-primary rounded-full" />
                    <span className="text-sm font-semibold text-primary-dark">
                      Our Approach
                    </span>
                  </div>
                  <p className="text-sm text-text-muted">
                    Working at the grassroots level without external grants —
                    sustained by dedication and personal resources.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg ml-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 bg-secondary rounded-full" />
                    <span className="text-sm font-semibold text-primary-dark">
                      Our Impact
                    </span>
                  </div>
                  <p className="text-sm text-text-muted">
                    From tribal villages in Tripura to policy halls in Delhi —
                    creating change at every level.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg ml-3">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 bg-primary-light rounded-full" />
                    <span className="text-sm font-semibold text-primary-dark">
                      Our Reach
                    </span>
                  </div>
                  <p className="text-sm text-text-muted">
                    10+ states, 6 countries in collaboration, thousands of lives
                    touched.
                  </p>
                </div>
              </div>

              {/* Background decoration */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-light/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-xl" />
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <div>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                About CRE
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-2 leading-tight">
                People-Centric Solutions for{" "}
                <span className="gradient-text">Environmental Challenges</span>
              </h2>
            </div>

            <p className="text-text-muted leading-relaxed">
              The Centre for Resource Management and Environment (CRE) is a
              non-profit trust that raises nationally important issues on
              environment, agriculture, tribal and rural development, and
              governance. We work through advocacy, training, community
              empowerment, and direct engagement with policy makers.
            </p>

            <div className="space-y-3">
              {[
                "Self-sustained operations without external grants",
                "Direct grassroots engagement across 10+ states",
                "Policy influence through media and government advocacy",
                "International collaboration on climate change",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/80">{point}</span>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group"
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
