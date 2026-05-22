import { Award, BookOpen, Globe2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LeadershipPreview() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Leadership
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-4">
            Guided by Experience & Vision
          </h2>
          <div className="section-divider mx-auto mb-6" />
        </div>

        {/* Chairman Card */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-muted to-white rounded-3xl border border-muted-dark overflow-hidden">
            <div className="grid md:grid-cols-3 gap-0">
              {/* Left - Profile */}
              <div className="bg-primary-dark p-8 lg:p-10 text-white flex flex-col justify-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-5 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/author.jpg"
                    alt="Dr. V.K. Bahuguna"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">Dr. V.K. Bahuguna</h3>
                <p className="text-white/70 text-sm mb-4">
                  Chairman, CRE
                </p>
                <div className="space-y-2 text-sm text-white/80">
                  <p>Indian Forest Service (Retd.)</p>
                  <p>Former Principal Secretary, Govt. of Tripura</p>
                  <p>Ph.D. Ecology | M.Sc. Edinburgh, UK</p>
                </div>
              </div>

              {/* Right - Highlights */}
              <div className="md:col-span-2 p-8 lg:p-10">
                <h4 className="text-lg font-bold text-foreground mb-6">
                  Key Recognitions & Roles
                </h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  <HighlightCard
                    icon={<Award className="w-5 h-5 text-secondary" />}
                    title="Queen's Award for Forestry"
                    subtitle="Commonwealth Forestry Association, UK (2000)"
                  />
                  <HighlightCard
                    icon={<Globe2 className="w-5 h-5 text-primary" />}
                    title="Vice-Chairman, APAFRI"
                    subtitle="Asia-Pacific Forestry Organization (2012)"
                  />
                  <HighlightCard
                    icon={<BookOpen className="w-5 h-5 text-primary-light" />}
                    title="200+ Publications"
                    subtitle="International & national journals"
                  />
                  <HighlightCard
                    icon={<Award className="w-5 h-5 text-amber-500" />}
                    title="EMPI Innovation Award"
                    subtitle="From President APJ Abdul Kalam (2007)"
                  />
                </div>

                <div className="mt-6 pt-6 border-t border-muted-dark">
                  <p className="text-sm text-text-muted mb-4">
                    Architect of Joint Forest Management (JFM) policy in India.
                    Established CAMPA. Turned Tripura Forest Corporation from
                    loss-making to 600% profit growth.
                  </p>
                  <Link
                    href="/leadership"
                    className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all group"
                  >
                    View Full Profile
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HighlightCard({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex items-start gap-3 p-3 rounded-xl bg-white border border-muted-dark">
      <div className="w-9 h-9 bg-muted rounded-lg flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <div className="text-sm font-semibold text-foreground">{title}</div>
        <div className="text-xs text-text-muted">{subtitle}</div>
      </div>
    </div>
  );
}
