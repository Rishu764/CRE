"use client";

import { useEffect, useRef, useState } from "react";
import { Clock, Users, Globe, Leaf } from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Partnerships",
    desc: "Collaborate with us on environmental and tribal welfare projects across India.",
  },
  {
    icon: Globe,
    title: "International Work",
    desc: "Join our global network spanning South Asia and East Africa.",
  },
  {
    icon: Leaf,
    title: "Conservation",
    desc: "Support forest conservation, biodiversity, and sustainable agriculture initiatives.",
  },
  {
    icon: Clock,
    title: "Quick Response",
    desc: "We respond to all inquiries within 24 business hours.",
  },
];

export default function ContactSidebar() {
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

  const slideIn = (delay: number) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateX(0)" : "translateX(32px)",
    transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
  });

  return (
    <div ref={ref} className="space-y-6">
      {/* Why contact us */}
      <div style={slideIn(100)} className="bg-gradient-to-br from-primary-dark to-primary rounded-3xl p-7 text-white">
        <h3 className="text-lg font-bold mb-5">Why Reach Out?</h3>
        <div className="space-y-4">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex gap-3">
              <div className="w-9 h-9 bg-white/15 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                <Icon className="w-4 h-4 text-secondary-light" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{title}</p>
                <p className="text-xs text-white/65 leading-relaxed mt-0.5">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Office hours */}
      <div style={slideIn(200)} className="bg-muted rounded-3xl p-7">
        <h3 className="text-base font-bold text-primary-dark mb-4">Office Hours</h3>
        <ul className="space-y-2.5 text-sm">
          {[
            { day: "Monday – Friday", time: "9:00 AM – 6:00 PM" },
            { day: "Saturday", time: "10:00 AM – 2:00 PM" },
            { day: "Sunday", time: "Closed" },
          ].map(({ day, time }) => (
            <li key={day} className="flex justify-between items-center">
              <span className="text-gray-600">{day}</span>
              <span className="font-semibold text-primary-dark text-xs bg-primary/10 px-2.5 py-1 rounded-full">
                {time}
              </span>
            </li>
          ))}
        </ul>
        <p className="text-xs text-gray-400 mt-4">All times are IST (UTC+5:30)</p>
      </div>

      {/* Map */}
      <div style={slideIn(300)} className="rounded-3xl overflow-hidden border border-gray-200">
        <iframe
          title="CRE Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0!2d77.3710!3d28.6270!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM3JzM3LjIiTiA3N8KwMjInMTUuNiJF!5e0!3m2!1sen!2sin!4v1234567890"
          width="100%"
          height="200"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale hover:grayscale-0 transition-all duration-500"
        />
        <div className="bg-white px-5 py-3 border-t border-gray-100">
          <p className="text-xs text-gray-500">Sector-62, Noida, Uttar Pradesh</p>
        </div>
      </div>
    </div>
  );
}
