"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  },
  {
    year: "2012",
    title: "Bamboo Training & Skill Development",
    description:
      "Organized training programme for Bamboo jewellery making for 30 ladies self-help groups from Uttarakhand. Bamboo artist Ms. Neera Sharma from Assam was invited to train the artisans. The work was appreciated by Advisor to Prime Minister Shri TKA Nair and Chief Minister of Punjab Mr. Prakash Singh Badal.",
    person: "Mrs. Usha Bahuguna",
    role: "Chairperson",
    image: "/Mrs. Usha Bahuguna.jpg",
    bgImage: "/trible02.png",
  },
  {
    year: "2013",
    title: "Tripura Tribal Empowerment",
    description:
      "Organized tribal ladies of Tripura skilled in Bamboo handicrafts. In cooperation with Tripura Forest Department, arranged 5 training programmes at Agartala and Kanchanpur. More than 150 tribal and non-tribal ladies were trained in making jewellery from forest-based seeds and Bamboo.",
    person: "Mrs. Usha Bahuguna",
    role: "Chairperson",
    image: "/Mrs. Usha Bahuguna.jpg",
    bgImage: "/hero-bg.jpg",
  },
  {
    year: "2014",
    title: "Van Mahotsav & Bamboo Treatment",
    description:
      "Organized Van Mahotsav at Udaipur, Tripura. Created a self-help group for wildlife conservation awareness and handicraft improvement through Bamboo treatment. Artisans trained were later engaged by Tripura Forest Corporation for making Bamboo furniture, now earning good income.",
    person: "Dr. V.K. Bahuguna",
    role: "Chairman",
    image: "/author02.png",
    bgImage: "/trible.png",
  },
  {
    year: "2015",
    title: "NGO Confederation & Forest Fire Advocacy",
    description:
      "Formed 'Jan Vikas Manch' (JVM) — a confederation of voluntary agencies. Took up issues of forest fires with the National Green Tribunal. NGT took immediate action and directed Centre and State governments to implement suggestions. Regular articles began in The Pioneer newspaper.",
    person: "Dr. V.K. Bahuguna",
    role: "Chairman",
    image: "/author02.png",
    bgImage: "/hero-bg.jpg",
  },
  {
    year: "2017",
    title: "Ganoderma Lab & Mushroom Cultivation",
    description:
      "Helped create a Ganoderma fungus medicinal lab inaugurated by Uttarakhand Agriculture Minister Mr. Subodh Uniyal on 28th May 2017. Organized mushroom cultivation training for women SHGs at Aamwala village. Women now earn ₹5,000-6,000 monthly from mushroom cultivation.",
    person: "Dr. V.K. Bahuguna",
    role: "Chairman",
    image: "/author02.png",
    bgImage: "/trible02.png",
  },
  {
    year: "2018",
    title: "ICFRE Society & National Policy",
    description:
      "Appointed as Member of the Indian Council of Forestry Research and Education (ICFRE) Society — the apex policy making body headed by the Minister of Environment. ₹18 lakh ONGC CSR project sanctioned for mushroom cultivation at Sahaspur village.",
    person: "Dr. V.K. Bahuguna",
    role: "Chairman & ICFRE Member",
    image: "/author02.png",
    bgImage: "/meeting.png",
  },
  {
    year: "2019",
    title: "President's Nominee — Kashmir University",
    description:
      "Appointed by the President of India as his nominee in the Executive Council and University Court of Central University of Kashmir. Emphasized importance of forest ecosystem stability and suggested All India Coordinated Project on Climate Change funded by CAMPA.",
    person: "Dr. V.K. Bahuguna",
    role: "Chairman & President's Nominee",
    image: "/author02.png",
    bgImage: "/meeting02.png",
  },
  {
    year: "2020",
    title: "Madhya Pradesh Tribal Outreach",
    description:
      "Visited tribal districts of Madhya Pradesh to assess Forest Rights Act implementation. Met Baiga tribals at Daguna village, Dindori District. Guided social workers on community forest management. CCF Jabalpur agreed to develop model scheme for Tendu patta management by community.",
    person: "Dr. V.K. Bahuguna",
    role: "Chairman",
    image: "/author02.png",
    bgImage: "/trible.png",
  },
  {
    year: "2021",
    title: "Organic Farming & Alternative Therapy",
    description:
      "Visited Jivamrit Organic Farmers Producers Company. Met Agriculture Minister for relaxing sugar cane factory norms — government allowed relaxation benefiting farmers. Took up recognition of Sujok Therapy with Uttarakhand government for patients with no allopathy remedy.",
    person: "Dr. V.K. Bahuguna",
    role: "Chairman",
    image: "/author02.png",
    bgImage: "/hero-bg.jpg",
  },
  {
    year: "2022",
    title: "National Commission & Book Publication",
    description:
      "Appointed as Member of the Working Group by National Commission on Scheduled Tribes, Ministry of Tribal Affairs. Published book 'Quest for Civility — An Insight into Indian Babudom' through Notion Press, well received nationally.",
    person: "Dr. V.K. Bahuguna",
    role: "Chairman & NCST Member",
    image: "/author02.png",
    bgImage: "/meeting.png",
  },
  {
    year: "2023",
    title: "Karnataka Fact-Finding & Climate Sessions",
    description:
      "Visited Mysore as member of fact-finding team to assess Forest Rights Act 2006 implementation in Karnataka. Invited as Chief Guest at Amity University. Chaired session on 'Climate Change and Disasters' at Uttarakhand Administrative Academy, Nainital.",
    person: "Dr. V.K. Bahuguna",
    role: "Chairman",
    image: "/author02.png",
    bgImage: "/meeting02.png",
  },
  {
    year: "2024",
    title: "International Climate Workshop",
    description:
      "Organized International Workshop on 'Combating Climate Change in South Asia and East Africa' at IGNFA Dehradun. 72 participants from India, Mauritius, Nepal, Sri Lanka, Australia and Belgium. Recommended South-South cooperation and climate-resilient development.",
    person: "Dr. V.K. Bahuguna",
    role: "Chairman",
    image: "/author02.png",
    bgImage: "/meeting.png",
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

  // Reset timer on manual interaction
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

  // Auto-scroll the year bar to keep active year visible
  useEffect(() => {
    if (scrollRef.current) {
      const activeButton = scrollRef.current.children[
        activeIndex
      ] as HTMLElement;
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
    <section className="relative bg-[#1a1a1a] text-white overflow-hidden min-h-screen flex flex-col">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-[#1a1a1a]/95 to-black/90" />
      <div className="absolute inset-0 opacity-[0.08]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="timeline-pattern"
              x="0"
              y="0"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="30" cy="30" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#timeline-pattern)" />
        </svg>
      </div>

      {/* Main Content - Sliding */}
      <div className="relative z-10 overflow-hidden flex-1 flex items-center">
        <div
          className="flex transition-transform duration-700 ease-in-out w-full"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {timelineData.map((item) => (
            <div
              key={item.year}
              className="w-full shrink-0 relative overflow-hidden"
            >
              {/* Per-slide background image */}
              {"bgImage" in item && item.bgImage && (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.bgImage}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover opacity-20"
                  />
                  <div className="absolute inset-0 bg-black/50" />
                </>
              )}

              {/* Slide Content */}
              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 flex items-center min-h-[calc(100vh-56px)]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
                  {/* Left - Text Content */}
                  <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight">
                      <span className="text-white">Our </span>
                      <span className="text-[#e9c46a]">Journey</span>
                    </h2>

                    <div className="space-y-3 sm:space-y-4">
                      <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white/90">
                        {item.year}
                      </div>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#52b788]">
                        {item.title}
                      </h3>
                      <p className="text-white/70 leading-relaxed text-sm sm:text-base max-w-xl">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Right - Person Image */}
                  <div className="flex flex-col items-center order-1 lg:order-2">
                    <div className="relative">
                      {/* Photo */}
                      <div className="w-32 h-32 sm:w-44 sm:h-44 lg:w-64 lg:h-64 rounded-full overflow-hidden ring-2 ring-white/20 shadow-2xl">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={item.image}
                          alt={item.person}
                          className="w-full h-full object-cover object-[center_25%]"
                        />
                      </div>
                      {/* Name caption */}
                      <div className="text-center mt-4 sm:mt-6">
                        <h4 className="text-base sm:text-lg font-bold text-white">
                          {item.person}
                        </h4>
                        <p className="text-xs sm:text-sm text-[#e9c46a]">
                          {item.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Year Navigation Bar */}
      <div className="relative z-10 bg-black/60 backdrop-blur-sm border-t border-white/5">
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
                className={`relative px-3 sm:px-5 lg:px-7 py-3 sm:py-4 text-xs sm:text-sm font-medium whitespace-nowrap transition-all shrink-0 border-r border-white/5 ${
                  index === activeIndex
                    ? "text-white bg-white/5"
                    : "text-white/50 hover:text-white/80 hover:bg-white/5"
                }`}
              >
                {item.year}
                {/* Active indicator */}
                {index === activeIndex && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 sm:w-8 h-[3px] bg-[#e63946] rounded-t-sm" />
                )}
              </button>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-0 border-l border-white/10 shrink-0">
            <button
              onClick={handlePrev}
              className="px-2 sm:px-3 py-3 sm:py-4 text-white/60 hover:text-white hover:bg-white/10 transition-colors h-full"
              aria-label="Previous year"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={handleNext}
              className="px-2 sm:px-3 py-3 sm:py-4 text-white/60 hover:text-white hover:bg-white/10 transition-colors h-full border-l border-white/10"
              aria-label="Next year"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
