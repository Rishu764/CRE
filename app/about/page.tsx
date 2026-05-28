"use client";

import { Users, Target, Heart, Globe, Calendar, Award, TreePine, Handshake } from "lucide-react";
export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/about_us_hero.png" 
            alt="CRE Community Work" 
            className="w-full h-full object-cover object-top"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/30" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
              <span className="w-2 h-2 bg-[#52b788] rounded-full animate-pulse" />
              <span className="text-sm font-medium text-white/90">Formerly: Foundation for Integrated Resource Management</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              About <span className="text-[#52b788]">CRE</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-white/80 leading-relaxed mb-10">
              Raising people-centric nationally important issues on environment, agriculture, eco-tourism, tribal & rural development, governance, and livelihood through grassroots engagement and policy advocacy since 2011.
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-8 mb-10">
              <div>
                <div className="text-3xl font-bold text-white">12+</div>
                <div className="text-sm text-white/60">Years</div>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div>
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-sm text-white/60">Artisans Trained</div>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div>
                <div className="text-3xl font-bold text-white">6</div>
                <div className="text-sm text-white/60">States</div>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div>
                <div className="text-3xl font-bold text-[#52b788]">₹18L+</div>
                <div className="text-sm text-white/60">CSR Projects</div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#progress"
                className="px-8 py-3.5 bg-[#52b788] text-white font-semibold rounded-full hover:bg-[#2d6a4f] transition-all"
              >
                Our Journey
              </a>
              <a
                href="/contact"
                className="px-8 py-3.5 border-2 border-white/40 text-white font-semibold rounded-full hover:bg-white/10 transition-all"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mission Block */}
          <div className="grid lg:grid-cols-5 gap-10 items-center mb-20">
            {/* Image Side */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/trible.png" alt="Tribal community empowerment" className="w-full h-[350px] object-cover" />
              </div>
            </div>
            {/* Text Side */}
            <div className="lg:col-span-3">
              <span className="text-sm font-semibold text-[#52b788] uppercase tracking-wide">Our Mission</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2 mb-4">
                Empowering communities through grassroots action
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                To empower tribal and rural communities through sustainable livelihood generation, environmental conservation, and policy advocacy. We work at the grassroots level to create lasting change in forest management, agriculture, and rural development.
              </p>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                {[
                  "Tribal artisan training & livelihood generation",
                  "Forest conservation through community engagement",
                  "Policy advocacy on environmental issues",
                  "Sustainable agriculture & organic farming promotion",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-[#52b788] mt-1">✓</span>
                    <span className="text-sm text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Vision Block — reversed layout */}
          <div className="grid lg:grid-cols-5 gap-10 items-center">
            {/* Text Side */}
            <div className="lg:col-span-3 order-2 lg:order-1">
              <span className="text-sm font-semibold text-[#52b788] uppercase tracking-wide">Our Vision</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2 mb-4">
                A sustainable future for all communities
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                A sustainable future where tribal and rural communities thrive through integrated resource management, environmental stewardship, and equitable development that respects traditional knowledge while embracing innovation.
              </p>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                {[
                  "Self-reliant tribal & rural communities",
                  "Sustainable forest & natural resource management",
                  "Climate-resilient agricultural practices",
                  "Inclusive governance & policy frameworks",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-[#52b788] mt-1">✓</span>
                    <span className="text-sm text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Image Side */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              <div className="rounded-2xl overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/meeting.png" alt="Community meetings and workshops" className="w-full h-[350px] object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-gray-900 mb-4">Leadership</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Led by distinguished professionals with decades of experience in forestry, governance, and rural development.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <div className="flex flex-col sm:flex-row gap-8 items-start">
                <div className="shrink-0">
                  <div className="w-32 h-32 rounded-2xl overflow-hidden ring-4 ring-[#52b788]/20">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/author.png" alt="Dr. V.K. Bahuguna" className="w-full h-full object-cover object-top" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-gray-900 mb-2">Dr. V.K. Bahuguna</h3>
                  <p className="text-[#52b788] font-semibold mb-4">Chairman, CRE & Ujan Vikas Manch</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Indian Forest Service (IFS) (Retd.) · 1979 Batch · Former Director General, Indian Council of Forestry Research & Education (ICFRE) & Chancellor, Forest Research Institute (FRI) Deemed University. Winner of the prestigious Queen's Award for Forestry (2000) from Commonwealth Forestry Association, UK.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["IFS 1979", "Former DG ICFRE", "Queen's Award Winner", "Presidential Nominee"].map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full text-xs font-semibold bg-[#52b788]/10 text-[#1b4332]">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Report Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-gray-900 mb-4">Progress Report</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our journey from 2011 to 2023 — empowering communities, conserving environment, and driving policy change.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1b4332] via-[#52b788] to-[#74c69d]" />
            
            <div className="space-y-12">
              {[
                {
                  period: "2011-2012",
                  title: "Foundation & Tribal Artisan Network",
                  chairperson: "Mrs. Usha Bahuguna (Chairperson)",
                  highlights: [
                    "Created network of 235 tribal artisans from across India",
                    "Established Prerna Self Help Group at FRI campus",
                    "₹6 lakh sales during International Poplar Convention (35 countries)",
                    "Organized bamboo jewellery training for 30 SHGs in Uttarakhand",
                    "Appreciated by PM Advisor Shri TKA Nair & Punjab CM Prakash Singh Badal"
                  ]
                },
                {
                  period: "2013-2014",
                  title: "Tripura Expansion & Skill Development",
                  chairperson: "Mrs. Usha Bahuguna (Chairperson)",
                  highlights: [
                    "5 training programmes in Agartala & Kanchanpur",
                    "150+ tribal & non-tribal women trained in bamboo handicrafts",
                    "Van Mahotsav organized in Jirania (2013) & Udaipur (2014)",
                    "Bamboo treatment training with ICFRE Agartala Centre",
                    "Artisans engaged by Tripura Forest Corporation for furniture making"
                  ]
                },
                {
                  period: "2014-2018",
                  title: "Leadership Transition & Policy Advocacy",
                  chairperson: "Dr. V.K. Bahuguna (Chairman)",
                  highlights: [
                    "Operations shifted to Delhi & Uttarakhand",
                    "Formed Jan Vikas Manch (JVM) confederation of NGOs",
                    "NGT action on forest fires based on Chairman's recommendations",
                    "Ganoderma fungus lab inaugurated by Uttarakhand Agriculture Minister",
                    "₹18 lakh ONGC CSR project sanctioned for mushroom cultivation",
                    "Women SHGs earning ₹5-6k monthly from mushroom cultivation"
                  ]
                },
                {
                  period: "2018-2020",
                  title: "ICFRE Society & Policy Impact",
                  chairperson: "Dr. V.K. Bahuguna (Chairman)",
                  highlights: [
                    "Member of ICFRE Society (top policy body chaired by Minister)",
                    "₹23.30 crore approved for FRI building rehabilitation",
                    "31 All India Coordinated Research Projects on climate change approved",
                    "Presidential nominee to Kashmir Central University Executive Council",
                    "Madhya Pradesh field visits on Forest Rights Act implementation"
                  ]
                },
                {
                  period: "2021-2023",
                  title: "Continued Leadership & Recognition",
                  chairperson: "Dr. V.K. Bahuguna (Chairman)",
                  highlights: [
                    "Published book 'Quest for Civility - an insight into Indian Babudom'",
                    "Member of National Commission on Scheduled Tribes working group",
                    "Fact-finding team for Forest Rights Act in Karnataka",
                    "Addressed IAS trainees on climate change & agriculture reforms",
                    "Social media advocacy on voter irregularities & encroachment issues"
                  ]
                }
              ].map((period, i) => (
                <div key={i} className="relative flex gap-8">
                  {/* Timeline dot */}
                  <div className="shrink-0 w-16 h-16 rounded-2xl bg-[#1b4332] flex items-center justify-center text-white font-black text-sm shadow-lg">
                    {period.period.split('-')[0]}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className="bg-white rounded-2xl p-6 border-2 border-gray-100 shadow-sm">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                        <h3 className="text-xl font-black text-gray-900">{period.title}</h3>
                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#52b788]/10 text-[#1b4332]">{period.period}</span>
                      </div>
                      <p className="text-sm text-[#52b788] font-semibold mb-4">{period.chairperson}</p>
                      <div className="space-y-2">
                        {period.highlights.map((highlight, hi) => (
                          <div key={hi} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#52b788] mt-2 shrink-0" />
                            <span className="text-sm text-gray-600 leading-relaxed">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1b4332]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-6">
            <Handshake className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-black text-white mb-4">Join Our Mission</h2>
          <p className="text-white/70 leading-relaxed mb-8 max-w-2xl mx-auto">
            Partner with us in creating sustainable livelihoods, conserving our environment, and empowering communities across India.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#52b788] text-white font-semibold rounded-xl hover:bg-[#2d6a4f] transition-colors shadow-lg"
          >
            Get Involved
          </a>
        </div>
      </section>
    </main>
  );
}