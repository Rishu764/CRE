import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, User, Calendar, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Articles – CRE",
  description:
    "Features, tributes, and in-depth articles about CRE's work, leadership, and the people who shape India's environmental and forestry landscape.",
};

const articles = [
  {
    slug: "tiger-conservation-challenges",
    title: "भारत में बाघ संरक्षण की नई चुनौतियां: सफलता के बाद अब भविष्य की सबसे बड़ी परीक्षा",
    excerpt:
      "भारत आज दुनिया के लगभग 70 प्रतिशत जंगली बाघों का घर है। लेकिन बढ़ते घनत्व, खंडित आवास और जलवायु परिवर्तन के बीच अब संख्या से परे एक नई रणनीति की जरूरत है।",
    author: "डॉ. वी.के. बहुगुणा",
    date: "30 जुलाई 2026",
    category: "वन्यजीव संरक्षण",
    externalUrl: "https://indiavistar.com/bharat-mein-bagh-sanrakshan-chunautiyan/",
    externalSource: "IndiaVistar.com",
    featured: true,
  },
  {
    slug: "vk-bahuguna-samata-party-resignation",
    title: "उत्तराखंड समता पार्टी के अध्यक्ष डॉ. वीके बहुगुणा का इस्तीफा",
    excerpt:
      "विधानसभा चुनाव से ठीक पहले राज्य की क्षेत्रीय राजनीति में बड़ा घटनाक्रम — डॉ. बहुगुणा ने पद छोड़ा, लेकिन CRE व जन विकास मंच के माध्यम से सेवा जारी रखने का संकल्प दोहराया।",
    author: "Roshan Gaur",
    date: "8 जुलाई 2026",
    category: "नेतृत्व अपडेट",
    externalUrl:
      "https://roshangaur.com/2026/07/08/dr-vk-bahuguna-resigned-as-uttarakhand-samata-party/",
    externalSource: "RoshanGaur.com",
    featured: false,
  },
  {
    slug: "vk-bahuguna-portrait",
    title: "The Last Word in Forestry: A Portrait of VK Bahuguna",
    excerpt:
      "Meeting VK Bahuguna did not feel like meeting a man; it felt like entering a forest at dusk, where every tree knows a secret and every silence has a soul.",
    author: "Biswanath Bhattacharya",
    date: "June 2026",
    category: "Portrait",
    externalUrl:
      "https://tripurainfo.com/TripuraArticle/TRIPURAINFO-English-Article-By-Biswanath-Bhattacharya-283-27-06-2026-283.html",
    externalSource: "TripuraInfo",
    featured: false,
  },
];

export default function ArticlesPage() {
  return (
    <main className="pt-20 min-h-screen bg-[#fafaf8]">

      {/* ── Hero ── */}
      <div className="bg-[#1b4332] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <p className="text-[#52b788] text-xs font-bold uppercase tracking-widest mb-4">
            Writings & Features
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-2xl">
            Articles
          </h1>
          <p className="mt-5 text-white/60 text-base max-w-xl leading-relaxed">
            Portraits, tributes, and features — written by journalists, scholars,
            and observers about CRE's work and the people behind it.
          </p>
        </div>
      </div>

      {/* ── Articles list ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14">

        {/* Featured article */}
        {articles.filter((a) => a.featured).map((article) => (
          <Link
            key={article.slug}
            href={`/articles/${article.slug}`}
            className="group block mb-10"
          >
            <div className="rounded-3xl border border-gray-200 bg-white overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

              {/* Green accent bar */}
              <div className="h-1.5 bg-gradient-to-r from-[#1b4332] to-[#52b788]" />

              <div className="p-8 sm:p-10">
                {/* Meta row */}
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest bg-[#52b788]/10 text-[#1b4332]">
                    <Tag className="w-3 h-3" />
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {article.date}
                  </span>
                  {article.externalSource && (
                    <span className="text-xs text-gray-400">
                      · Published on{" "}
                      <span className="font-medium text-[#2d6a4f]">
                        {article.externalSource}
                      </span>
                    </span>
                  )}
                </div>

                {/* Title */}
                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 leading-tight mb-4 group-hover:text-[#1b4332] transition-colors">
                  {article.title}
                </h2>

                {/* Excerpt */}
                <p className="text-base text-gray-500 leading-relaxed mb-8 max-w-2xl">
                  {article.excerpt}
                </p>

                {/* Footer row */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#1b4332]/10 flex items-center justify-center">
                      <User className="w-4 h-4 text-[#1b4332]" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      {article.author}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#2d6a4f] group-hover:gap-3 transition-all">
                    Read Article
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}

        {/* Non-featured articles would go here as a grid */}
        {articles.filter((a) => !a.featured).length > 0 && (
          <div className="grid sm:grid-cols-2 gap-6 mt-4">
            {articles
              .filter((a) => !a.featured)
              .map((article) => (
                <Link key={article.slug} href={`/articles/${article.slug}`} className="group block">
                  <div className="rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#52b788]">
                      {article.category}
                    </span>
                    <h3 className="text-lg font-black text-gray-900 mt-2 mb-3 leading-snug group-hover:text-[#1b4332] transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-100">
                      <span className="text-xs text-gray-400">{article.author}</span>
                      <ArrowRight className="w-4 h-4 text-[#52b788] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        )}

        {/* Empty state hint */}
        <p className="text-center text-sm text-gray-400 mt-12">
          More features and tributes will be added here over time.
        </p>
      </div>
    </main>
  );
}
