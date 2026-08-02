"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/leadership", label: "Leadership" },
  { href: "/about", label: "About Us" },
  { href: "/key-issues", label: "Key Issues" },
  { href: "/our-work", label: "Our Work" },
  { href: "/articles", label: "Articles" },
  { href: "/media", label: "Media" },
  { href: "/publications", label: "Publications" },
  { href: "/gallery", label: "Gallery" },
];

// Contact is accessible via the "Get Involved" CTA button — kept in mobile menu only
const mobileOnlyLinks = [
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="CRE Logo"
              className="h-12 w-12 object-contain rounded-full"
            />
            <div className="hidden sm:block">
              <span className="text-lg font-bold text-[#1b4332] tracking-tight">
                CRE
              </span>
              <span className="hidden md:block text-[10px] text-gray-500 leading-tight">
                Centre for Resource Management & Environment
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-2.5 py-1.5 text-[13px] font-medium rounded-lg transition-all whitespace-nowrap ${
                  isActive(link.href)
                    ? "text-primary bg-primary/10 font-semibold"
                    : "text-gray-700 hover:text-primary hover:bg-primary/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-full hover:bg-primary-dark transition-colors shadow-md hover:shadow-lg"
            >
              Get Involved
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-gray-800" />
            ) : (
              <Menu className="w-6 h-6 text-gray-800" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-muted-dark">
          <nav className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {[...navLinks, ...mobileOnlyLinks].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 text-sm font-medium rounded-lg transition-all ${
                  isActive(link.href)
                    ? "text-primary bg-primary/10 font-semibold"
                    : "text-gray-700 hover:text-primary hover:bg-primary/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-muted-dark">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block text-center px-5 py-3 bg-primary text-white text-sm font-medium rounded-full hover:bg-primary-dark transition-colors"
              >
                Get Involved
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
