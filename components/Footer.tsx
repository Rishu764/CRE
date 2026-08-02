import Link from "next/link";
import { Leaf, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold">CRE</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Centre for Resource Management and Environment — a non-profit
              trust dedicated to environmental conservation, tribal welfare, and
              sustainable development across India.
            </p>
            <p className="text-white/50 text-xs">
              Formerly: Foundation for Integrated Resource Management
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-primary-light">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { href: "/about", label: "About Us" },
                { href: "/key-issues", label: "Key Issues" },
                { href: "/our-work", label: "Our Work" },
                { href: "/leadership", label: "Leadership" },
                { href: "/publications", label: "Publications" },
                { href: "/articles", label: "Articles" },
                { href: "/media", label: "Media" },
                { href: "/gallery", label: "Gallery" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Focus Areas */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-primary-light">
              Focus Areas
            </h4>
            <ul className="space-y-2.5">
              {[
                "Environmental Conservation",
                "Tribal & Rural Development",
                "Sustainable Agriculture",
                "Forest Policy & Governance",
                "Climate Change",
                "Eco-Tourism",
              ].map((area) => (
                <li key={area}>
                  <span className="text-white/70 text-sm">{area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-primary-light">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary-light mt-0.5 shrink-0" />
                <span className="text-white/70 text-sm">
                  A-101 Jagdambe Apartments, C-58/25, Sector-62, Noida, UP -
                  201309
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary-light shrink-0" />
                <a
                  href="tel:9810405137"
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  +91 9810405137
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary-light shrink-0" />
                <a
                  href="mailto:bahugunaifs@gmail.com"
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  bahugunaifs@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-xs">
            © {new Date().getFullYear()} Centre for Resource Management and
            Environment. All rights reserved.
          </p>
          <p className="text-white/40 text-xs">
            Non-Profit Trust | Working without external grants since inception
          </p>
        </div>
      </div>
    </footer>
  );
}
