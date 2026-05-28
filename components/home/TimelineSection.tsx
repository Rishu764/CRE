"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";

const timelineData = [
  {
    year: "2011",
    title: "Foundation & Artisan Network",
    description:
      "Created a group of 235 Tribal artisans from different parts of the country. In coordination with the Ladies Club of Forest Research Institute (FRI), established the Prerna Self-Help Group at FRI campus. During the International Poplar Convention, delegates from 35 countries purchased tribal handicraft items worth more than ₹6 lakh.",
    person: "Mrs. Usha Bahuguna",
    role: "Chairperson",
    image: "/Mrs. Usha Bahuguna.jpg",
    bgImage: "/trible.png",
    highlight: "235 Artisans United",
  },
  {
    year: "2012",
    title: "Bamboo Training & Skill Development",
    description:
      "Organized training programme for Bamboo jewellery making for 30 ladies self-help groups from Uttarakhand. Bamboo artist Ms. Neera Sharma from Assam was invited to train the artisans.",
    person: "Mrs. Usha Bahuguna",
    role: "Chairperson",
    image: "/Mrs. Usha Bahuguna.jpg",
    bgImage: "/trible02.png",
    highlight: "30 Self-Help Groups",
  },
  {
    year: "2013",
    title: "Tripura Tribal Empowerment",
    description:
      "Organized tribal ladies of Tripura skilled in Bamboo handicrafts. In cooperation with Tripura Forest Department, arranged 5 training programmes at Agartala and Kanchanpur. More than 150 tribal and non-tribal ladies were trained.",
    person: "Mrs. Usha Bahuguna",
    role: "Chairperson",
    image: "/Mrs. Usha Bahuguna.jpg",
    bgImage: "/hero-bg.jpg",
    highlight: "150+ Ladies Trained",
  },
  {
    year: "2014",
    title: "Van Mahotsav & Bamboo Treatment",
    description:
      "Organized Van Mahotsav at Udaipur, Tripura. Created a self-help group for wildlife conservation awareness and handicraft improvement through Bamboo treatment. Artisans now earning good income.",
    person: "Dr. V.K. Bahuguna",
    role: "Chairman",
    image: "/author02.png",
    bgImage: "/trible.png",
    highlight: "Wildlife Conservation",
  },
  {
    year: "2015",
    title: "NGO Confederation & Forest Fire Advocacy",
    description:
      "Formed 'Jan Vikas Manch' (JVM) — a confederation of voluntary agencies. Took up issues of forest fires with the National Green Tribunal. NGT directed Centre and State governments to implement suggestions.",
    person: "Dr. V.K. Bahuguna",
    role: "Chairman",
    image: "/author02.png",
    bgImage: "/hero-bg.jpg",
    highlight: "NGT Action Taken",
  },
  {
    year: "2017",
    title: "Ganoderma Lab & Mushroom Cultivation",
    description:
      "Helped create a Ganoderma fungus medicinal lab inaugurated by Uttarakhand Agriculture Minister. Organized mushroom cultivation training for women SHGs. Women now earn ₹5,000-6,000 monthly.",
    person: "Dr. V.K. Bahuguna",
    role: "Chairman",
    image: "/author02.png",
    bgImage: "/trible02.png",
    highlight: "₹6K Monthly Income",
  },
  {
    year: "2018",
    title: "ICFRE Society & National Policy",
    description:
      "Appointed as Member of the Indian Council of Forestry Research and Education (ICFRE) Society — the apex policy making body headed by the Minister of Environment. ₹18 lakh ONGC CSR project sanctioned.",
    person: "Dr. V.K. Bahuguna",
    role: "Chairman & ICFRE Member",
    image: "/author02.png",
    bgImage: "/meeting.png",
    highlight: "₹18L CSR Project",
  },
  {
    year: "2019",
    title: "President's Nominee — Kashmir University",
    description:
      "Appointed by the President of India as his nominee in the Executive Council and University Court of Central University of Kashmir. Emphasized importance of forest ecosystem stability.",
    person: "Dr. V.K. Bahuguna",
    role: "Chairman & President's Nominee",
    image: "/author02.png",
    bgImage: "/meeting02.png",
    highlight: "Presidential Appointment",
  },
  {
    year: "2020",
    title: "Madhya Pradesh Tribal Outreach",
    description:
      "Visited tribal districts of Madhya Pradesh to assess Forest Rights Act implementation. Met Baiga tribals at Daguna village, Dindori District. Guided social workers on community forest management.",
    person: "Dr. V.K. Bahuguna",
    role: "Chairman",
    image: "/author02.png",
    bgImage: "/trible.png",
    highlight: "Forest Rights Act",
  },
  {
    year: "2021",
    title: "Organic Farming & Alternative Therapy",
    description:
      "Visited Jivamrit Organic Farmers Producers Company. Met Agriculture Minister for relaxing sugar cane factory norms — government allowed relaxation benefiting farmers.",
    person: "Dr. V.K. Bahuguna",
    role: "Chairman",
    image: "/author02.png",
    bgImage: "/hero-bg.jpg",
    highlight: "Policy Relaxation Won",
  },
  {
    year: "2022",
    title: "National Commission & Book Publication",
    description:
      "Appointed as Member of the Working Group by National Commission on Scheduled Tribes, Ministry of Tribal Affairs. Published book 'Quest for Civility' through Notion Press.",
    person: "Dr. V.K. Bahuguna",
    role: "Chairman & NCST Member",
    image: "/author02.png",
    bgImage: "/meeting.png",
    highlight: "Book Published",
  },
  {
    year: "2023",
    title: "Karnataka Fact-Finding & Climate Sessions",
    description:
      "Visited Mysore as member of fact-finding team to assess Forest Rights Act 2006 implementation in Karnataka. Chaired session on 'Climate Change and Disasters' at Uttarakhand Administrative Academy.",
    person: "Dr. V.K. Bahuguna",
    role: "Chairman",
    image: "/author02.png",
    bgImage: "/meeting02.png",
    highlight: "Multi-State Impact",
  },
  {
    year: "2024",
    title: "International Climate Workshop",
    description:
      "Organized International Workshop on 'Combating Climate Change in South Asia and East Africa' at IGNFA Dehradun. 72 participants from India, Mauritius, Nepal, Sri Lanka, Australia and Belgium.",
    person: "Dr. V.K. Bahuguna",
    role: "Chairman",
    image: "/author02.png",
    bgImage: "/meeting.png",
    highlight: "6 Countries United",
  },
];

export default function TimelineSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev < timelineData.length - 1 ? prev + 1 : 0));
  }, []);

  const goToPrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : timelineData.length - 1));
  };

  // Auto-advance every 4 seconds
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      goToNext();
    }, 4000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [goToNext]);

  const resetTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      goToNext();
    }, 4000);
  };

  const handleManualSelect = (index: number) => {
    setActiveIndex(index);
    resetTimer();
  };

  const handlePrev = () => {
    goToPrev();
    resetTimer();
  };

  const handleNext = () => {
    goToNext();
    resetTimer();
  };

  // Auto-scroll the year bar
  useEffect(() => {
    if (scrollRef.current) {
      const activeButton = scrollRef.current.children[activeIndex] as HTMLElement;
      if (activeButton) {
        const container = scrollRef.current;
        const buttonLeft = activeButton.offsetLeft;
        const buttonWidth = activeButton.offsetWidth;
        const containerWidth = container.offsetWidth;
        const scrollLeft = buttonLeft - containerWidth / 2 + buttonWidth / 2;
        container.scrollTo({ left: scrollLeft, behavior: "smooth" });
      }
    }
  }, [activeIndex]);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Full-screen background images with crossfade */}
      <div className="absolute inset-0">
        {timelineData.map((item, index) => (
          <div
            key={item.year}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.bgImage}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content - Full width */}
            <div className="lg:col-span-8">
              {/* Section label */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#e9c46a]/20 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-[#e9c46a]" />
                </div>
                <div>
                  <span className="text-[#e9c46a] text-sm font-semibold uppercase tracking-widest">
                    Our Journey
                  </span>
                  <span className="text-white/40 text-sm ml-3">
                    {activeIndex + 1} / {timelineData.length}
                  </span>
                </div>
              </div>

              {/* Year - Large display */}
              <div className="relative mb-4">
                <span className="text-[120px] sm:text-[150px] lg:text-[180px] font-black text-white/[0.05] leading-none absolute -top-8 -left-2 select-none">
                  {timelineData[activeIndex].year}
                </span>
                <h2 className="relative text-5xl sm:text-6xl lg:text-7xl font-black text-white">
                  {timelineData[activeIndex].year}
                </h2>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#52b788] mb-4">
                {timelineData[activeIndex].title}
              </h3>

              {/* Highlight badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#e9c46a]/10 border border-[#e9c46a]/30 rounded-full mb-5">
                <span className="w-2 h-2 bg-[#e9c46a] rounded-full" />
                <span className="text-sm font-medium text-[#e9c46a]">
                  {timelineData[activeIndex].highlight}
                </span>
              </div>

              {/* Description */}
              <p className="text-white/70 leading-relaxed text-base sm:text-lg max-w-2xl mb-6">
                {timelineData[activeIndex].description}
              </p>

              {/* Person info inline */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden ring-2 ring-[#e9c46a]/50">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={timelineData[activeIndex].image}
                    alt={timelineData[activeIndex].person}
                    className="w-full h-full object-cover object-[center_20%]"
                  />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-white">
                    {timelineData[activeIndex].person}
                  </h4>
                  <p className="text-sm text-[#e9c46a]">
                    {timelineData[activeIndex].role}
                  </p>
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full max-w-md h-px bg-white/10 overflow-hidden">
                <div
                  className="h-full bg-[#52b788] transition-all duration-500"
                  style={{
                    width: `${((activeIndex + 1) / timelineData.length) * 100}%`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Year Navigation Bar */}
      <div className="relative z-10 bg-black/60 backdrop-blur-md border-t border-white/10">
        <div className="flex items-stretch">
          {/* Scrollable Years */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-x-auto flex items-stretch"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {timelineData.map((item, index) => (
              <button
                key={item.year}
                onClick={() => handleManualSelect(index)}
                className={`relative px-4 sm:px-6 lg:px-8 py-4 sm:py-5 text-xs sm:text-sm font-medium whitespace-nowrap transition-all shrink-0 ${
                  index === activeIndex
                    ? "text-white bg-white/10"
                    : "text-white/40 hover:text-white/80 hover:bg-white/5"
                }`}
              >
                {item.year}
                {/* Active indicator */}
                {index === activeIndex && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#52b788]" />
                )}
              </button>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center border-l border-white/10 shrink-0">
            <button
              onClick={handlePrev}
              className="px-3 sm:px-4 py-4 sm:py-5 text-white/50 hover:text-white hover:bg-white/10 transition-colors h-full"
              aria-label="Previous year"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="px-3 sm:px-4 py-4 sm:py-5 text-white/50 hover:text-white hover:bg-white/10 transition-colors h-full border-l border-white/10"
              aria-label="Next year"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
