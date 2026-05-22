import { Newspaper, BookOpen, FileText, ArrowRight } from "lucide-react";
import Link from "next/link";

const articles = [
  {
    title: "Combating Climate Change — South-South Cooperation",
    source: "International Workshop Proceedings",
    year: "2024",
    type: "Workshop",
  },
  {
    title: "Climate Change and Disasters",
    source: "Uttarakhand Administrative Academy, Nainital",
    year: "2023",
    type: "Lecture",
  },
  {
    title: "Quest for Civility — An Insight into Indian Babudom",
    source: "Notion Press",
    year: "2022",
    type: "Book",
  },
  {
    title: "Forest Rights Act Implementation in Karnataka",
    source: "National Commission on Scheduled Tribes",
    year: "2023",
    type: "Report",
  },
];

export default function PublicationsPreview() {
  return (
    <section className="py-20 lg:py-28 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left - Header */}
          <div className="lg:col-span-1 space-y-6">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Publications & Media
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight">
              Thought Leadership Through Writing
            </h2>
            <div className="section-divider" />
            <p className="text-text-muted leading-relaxed">
              Regular columns in The Pioneer newspaper (10+ cities), research
              papers in international journals, and books on forestry and
              governance.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center">
                <Newspaper className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-xl font-bold text-foreground">2-3</div>
                <div className="text-xs text-text-muted">Articles/Month</div>
              </div>
              <div className="text-center">
                <BookOpen className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-xl font-bold text-foreground">5+</div>
                <div className="text-xs text-text-muted">Books</div>
              </div>
              <div className="text-center">
                <FileText className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-xl font-bold text-foreground">200+</div>
                <div className="text-xs text-text-muted">Papers</div>
              </div>
            </div>

            <Link
              href="/publications"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group"
            >
              View All Publications
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right - Articles List */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {articles.map((article, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 border border-muted-dark card-hover cursor-pointer"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
                          {article.type}
                        </span>
                        <span className="text-xs text-text-muted">
                          {article.year}
                        </span>
                      </div>
                      <h4 className="text-base font-semibold text-foreground mb-1">
                        {article.title}
                      </h4>
                      <p className="text-sm text-text-muted">
                        {article.source}
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-text-muted shrink-0 mt-1" />
                  </div>
                </div>
              ))}
            </div>

            {/* Pioneer Newspaper Banner */}
            <div className="mt-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-6 border border-primary/10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Newspaper className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">
                    Regular Columnist — The Pioneer
                  </h4>
                  <p className="text-xs text-text-muted">
                    Published from Delhi, Bhopal, Lucknow, Bhubaneswar, Ranchi,
                    Raipur, Chandigarh, Dehradun, Hyderabad & Vijayawada
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
