"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const info = [
  {
    icon: MapPin,
    label: "Address",
    value: "A-101 Jagdambe Apartments, C-58/25, Sector-62, Noida, UP – 201309",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9810405137",
    href: "tel:9810405137",
  },
  {
    icon: Mail,
    label: "Email",
    value: "bahugunaifs@gmail.com",
    href: "mailto:bahugunaifs@gmail.com",
  },
];

export default function ContactHero() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const fadeUp = (delay: number) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
  });

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-20 overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-accent">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-light/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div style={fadeUp(0)} className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
          <span className="w-2 h-2 bg-secondary-light rounded-full animate-pulse" />
          <span className="text-sm font-medium text-white/90">Get In Touch</span>
        </div>

        <h1 style={fadeUp(100)} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
          Contact <span className="text-secondary-light">Us</span>
        </h1>

        <p style={fadeUp(200)} className="text-white/75 text-lg max-w-xl leading-relaxed mb-12">
          Have a question, partnership idea, or want to collaborate? We&apos;d love to hear from you. Reach out and we&apos;ll respond promptly.
        </p>

        {/* Info cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {info.map(({ icon: Icon, label, value, href }, i) => (
            <div
              key={label}
              style={fadeUp((i + 3) * 100)}
              className="flex items-start gap-4 bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-5"
            >
              <div className="w-10 h-10 bg-primary-light/30 rounded-xl flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-secondary-light" />
              </div>
              <div>
                <p className="text-white/50 text-xs font-medium uppercase tracking-wider mb-1">{label}</p>
                {href ? (
                  <a href={href} className="text-white text-sm font-medium hover:text-secondary-light transition-colors leading-snug">
                    {value}
                  </a>
                ) : (
                  <p className="text-white text-sm font-medium leading-snug">{value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
