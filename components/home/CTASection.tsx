import { Mail, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent via-primary-dark to-primary" />
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-80 h-80 bg-secondary-light rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
          </div>

          {/* Content */}
          <div className="relative z-10 px-8 py-16 lg:px-16 lg:py-20 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Join Us in Building a Sustainable Future
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
              Whether you are an environmentalist, farmer, researcher, NGO, or
              policy maker — there is a place for you in our mission. Let us
              collaborate for people and planet.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-primary-dark font-semibold rounded-full hover:bg-secondary-light transition-colors shadow-lg group"
              >
                Get In Touch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/our-work"
                className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-white/40 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
              >
                See Our Work
              </Link>
            </div>

            {/* Contact Quick Info */}
            <div className="flex flex-wrap justify-center gap-6 text-white/70 text-sm">
              <a
                href="mailto:bahugunaifs@gmail.com"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                bahugunaifs@gmail.com
              </a>
              <a
                href="tel:9810405137"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                +91 9810405137
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
