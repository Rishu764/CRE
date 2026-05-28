import { Calendar, MapPin, Users, Globe } from "lucide-react";
import Link from "next/link";

export default function WorkshopHighlight() {
  return (
    <section className="py-20 lg:py-28 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-10 items-center">
          {/* Left Content */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                <span className="w-2 h-2 bg-primary rounded-full" />
                Latest Event
              </span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight">
              International Workshop on{" "}
              <span className="text-primary">
                Combating Climate Change
              </span>{" "}
              in South Asia &amp; East Africa
            </h2>

            <p className="text-text-muted leading-relaxed">
              A landmark gathering of senior forestry professionals, policy
              makers, and environmentalists from across the globe — discussing
              concrete solutions beyond the UNFCCC framework, focusing on
              South-South cooperation and traditional knowledge.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    29 April – 1 May 2024
                  </div>
                  <div className="text-xs text-text-muted">3-day workshop</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    IGNFA, Dehradun
                  </div>
                  <div className="text-xs text-text-muted">
                    Executive Hostel
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    72 Participants
                  </div>
                  <div className="text-xs text-text-muted">
                    Senior professionals
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">
                    6 Countries
                  </div>
                  <div className="text-xs text-text-muted">
                    India, Mauritius, Nepal, Sri Lanka, Australia, Belgium
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/our-work"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-colors shadow-md"
            >
              View Workshop Details
            </Link>
          </div>

          {/* Right - Key Recommendations */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-muted-dark">
              <h3 className="text-lg font-bold text-foreground mb-5">
                Key Recommendations
              </h3>
              <div className="space-y-4">
                {[
                  "Focus on South-South cooperation over $100B fund chase",
                  "Technology sharing among developing nations",
                  "Return to traditional roots for climate solutions",
                  "Climate-resilient development at district level",
                  "Priority on water rejuvenation & aquifer recharge",
                  "Collaborative multi-lateral research funding",
                ].map((rec, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-primary/10 text-primary text-xs font-bold rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-sm text-foreground/80">{rec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
