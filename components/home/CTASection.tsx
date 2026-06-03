import { Mail, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden bg-[#1b4332]">
          {/* Thin top accent */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#52b788]" />

          {/* Content */}
          <div className="relative z-10 px-8 py-16 lg:px-16 lg:py-20">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-[#52b788] text-xs font-bold uppercase tracking-widest mb-4">
                Get Involved
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight">
                Join Us in Building a Sustainable Future
              </h2>
              <p className="text-white/60 max-w-xl mx-auto mb-10 leading-relaxed">
                Whether you are an environmentalist, farmer, researcher, NGO, or
                policy maker — there is a place for you in our mission. Let us
                collaborate for people and planet.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[#1b4332] font-semibold rounded-lg hover:bg-[#e9c46a] transition-colors group text-sm"
                >
                  Get In Touch
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/our-work"
                  className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/25 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-sm"
                >
                  See Our Work
                </Link>
              </div>

              {/* Divider */}
              <div className="w-16 h-px bg-white/15 mx-auto mb-8" />

              {/* Contact info */}
              <div className="flex flex-wrap justify-center gap-6 text-white/50 text-sm">
                <a
                  href="mailto:bahugunaifs@gmail.com"
                  className="flex items-center gap-2 hover:text-white/80 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  bahugunaifs@gmail.com
                </a>
                <a
                  href="tel:9810405137"
                  className="flex items-center gap-2 hover:text-white/80 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +91 9810405137
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
