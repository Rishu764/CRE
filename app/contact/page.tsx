import type { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactSidebar from "@/components/contact/ContactSidebar";

export const metadata: Metadata = {
  title: "Contact Us | CRE – Centre for Resource Management and Environment",
  description:
    "Get in touch with CRE for partnerships, collaborations, research inquiries, or to learn more about our environmental and tribal welfare work across India.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
            <div className="lg:col-span-2">
              <ContactSidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
