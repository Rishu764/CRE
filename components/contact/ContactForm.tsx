"use client";

import { useState, useRef, useEffect, FormEvent } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

const subjects = [
  "General Inquiry",
  "Partnership / Collaboration",
  "Funding & Donations",
  "Research & Publications",
  "Volunteer Opportunities",
  "Media & Press",
  "Other",
];

const inputBase =
  "w-full px-4 py-3 rounded-xl border bg-white text-gray-800 text-sm placeholder-gray-400 outline-none transition-all duration-200 focus:ring-2 focus:ring-primary/30 focus:border-primary hover:border-gray-300";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
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

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value.trim(),
      email: (form.elements.namedItem("email") as HTMLInputElement).value.trim(),
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value.trim(),
      organization: (form.elements.namedItem("organization") as HTMLInputElement).value.trim(),
      subject: (form.elements.namedItem("subject") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim(),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Something went wrong.");
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Failed to send. Please try again.");
    }
  }

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}
    >
      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 lg:p-10">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-primary-dark mb-2">Send Us a Message</h2>
          <p className="text-gray-500 text-sm">Fill in the form below and we&apos;ll get back to you within 24 hours.</p>
        </div>

        {status === "success" ? (
          <div className="flex flex-col items-center justify-center py-16 text-center gap-4 animate-fade-in-up">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">Message Sent!</h3>
            <p className="text-gray-500 text-sm max-w-xs">
              Thank you for reaching out. We&apos;ll respond to your message within 24 hours.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-2 px-6 py-2.5 bg-primary text-white text-sm font-medium rounded-full hover:bg-primary-dark transition-colors"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            {/* Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Dr. Rajesh Kumar"
                  className={`${inputBase} border-gray-200`}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className={`${inputBase} border-gray-200`}
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                  Phone Number
                </label>
                <input
                  name="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  className={`${inputBase} border-gray-200`}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                  Organization
                </label>
                <input
                  name="organization"
                  type="text"
                  placeholder="Your organization (optional)"
                  className={`${inputBase} border-gray-200`}
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                Subject <span className="text-red-500">*</span>
              </label>
              <select
                name="subject"
                required
                defaultValue=""
                className={`${inputBase} border-gray-200 cursor-pointer`}
              >
                <option value="" disabled>Select a subject…</option>
                {subjects.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-1.5">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell us about your inquiry, project, or how you'd like to collaborate…"
                className={`${inputBase} border-gray-200 resize-none`}
              />
            </div>

            {/* Error */}
            {status === "error" && (
              <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm animate-fade-in-up">
                <AlertCircle className="w-5 h-5 shrink-0" />
                {errorMsg}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full flex items-center justify-center gap-2.5 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark active:scale-[0.98] transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "loading" ? (
                <><Loader2 className="w-5 h-5 animate-spin" /> Sending…</>
              ) : (
                <><Send className="w-5 h-5" /> Send Message</>
              )}
            </button>

            <p className="text-center text-xs text-gray-400">
              We respect your privacy. Your information will never be shared with third parties.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
