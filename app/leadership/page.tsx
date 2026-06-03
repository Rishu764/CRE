import { Trophy, Globe2, BookOpen, GraduationCap, Briefcase, MapPin, Star, Award, Users, Mic2, Mountain, Flag, Gem, Medal, ScrollText, Newspaper, Crown } from "lucide-react";
import InternationalExposure from "@/components/InternationalExposure";

export default function LeadershipPage() {
  return (
    <main className="min-h-screen" style={{ background: "#0a0f0d" }}>
      {/* Hero */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a1a14] via-[#0f1f18] to-[#1b4332]/40" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl" style={{ background: "#52b788" }} />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl" style={{ background: "#2d6a4f" }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Top Row: Photo + Name + Quick Info */}
          <div className="flex flex-col lg:flex-row gap-8 items-start mb-12">
            {/* Photo */}
            <div className="shrink-0">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px] rounded-3xl overflow-hidden ring-4 ring-white/10 shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/author.png" alt="Dr. V.K. Bahuguna" className="w-full h-full object-cover object-top contrast-125 brightness-110" />
                <div className="absolute top-3 right-3 px-2.5 py-1.5 rounded-lg text-[10px] font-bold bg-[#1b4332] text-white flex items-center gap-1 border border-[#52b788]/30">
                  <Trophy className="w-3 h-3" />Queen&apos;s Award
                </div>
              </div>
            </div>

            {/* Name + Title */}
            <div className="flex-1">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <Star className="w-3 h-3 text-[#52b788]" />Leadership Profile
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-3">Dr. V.K. Bahuguna</h1>
              <p className="text-base lg:text-lg text-emerald-300/80 max-w-3xl leading-relaxed">
                Indian Forest Service (IFS) (Retd.) · 1979 Batch · Former Director General, Indian Council of Forestry Research & Education (ICFRE) & Chancellor, Forest Research Institute (FRI) Deemed University
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-5">
                {["Chairman, CRE (Centre for Resource Management & Environment)", "Indian Forest Service (IFS) (Retd.) 1979", "Former DG, ICFRE (Indian Council of Forestry Research & Education)"].map(t => (
                  <span key={t} className="px-3 py-1 rounded-full text-[11px] font-semibold bg-white/5 border border-white/10 text-white/80">{t}</span>
                ))}
              </div>

              {/* Quick stats row */}
              <div className="flex flex-wrap gap-6 mt-6">
                {[{ n: "30+", l: "Countries", color: "#52b788" }, { n: "200+", l: "Publications", color: "#52b788" }, { n: "15K+", l: "Families Impacted", color: "#52b788" }].map(s => (
                  <div key={s.l} className="flex items-center gap-2">
                    <span className="text-2xl font-black" style={{ color: s.color }}>{s.n}</span>
                    <span className="text-xs text-white/40">{s.l}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Info Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-12">
            {[
              { label: "Date of Birth", value: "21 August 1954" },
              { label: "Nationality", value: "Indian" },
              { label: "Last Post", value: "Superannuated as Agriculture Production Commissioner and Principal Secretary, Government of Tripura (Apex Scale · Level 17)" },
              { label: "Contact", value: "bahugunaifs@gmail.com · 9810405137 / 9412057333" },
            ].map(d => (
              <div key={d.label} className="rounded-2xl p-4 bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm">
                <div className="text-[10px] uppercase tracking-wider mb-1.5 text-white/30 font-semibold">{d.label}</div>
                <div className="text-sm font-medium text-white/90">{d.value}</div>
              </div>
            ))}
          </div>

          {/* Two Column: Present Positions + Education */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Present Positions */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-4 text-white/30 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-emerald-500" />Present Positions
              </h3>
              <div className="space-y-3">
                {[
                  { title: "Chairman, Centre for Resource Management & Environment (CRE)", desc: "Raises people-centric nationally important issues on environment, agriculture, planning, eco-tourism, tribal & rural development, governance, nationalism and livelihood. Writes regular columns in national newspapers." },
                  { title: "Member, Indian Council of Forestry Research and Education (ICFRE) Society (since June 2018)", desc: "Nominated as Member of the Indian Council of Forestry Research and Education Society — the Apex policy making body of this autonomous institution under Ministry of Environment, Forest & Climate Change, chaired by the Minister." },
                  { title: "Presidential Nominee — Central University of Kashmir (since Feb 2019)", desc: "Appointed by the President of India as his nominee in the Executive Council and University Court of Central University of Kashmir." },
                  { title: "Chairman, Kalpavriksh Foundation", desc: "A Trust dedicated to serving the Indian Cow and Cow products with a network of 75,000 cows." },
                ].map(p => (
                  <div key={p.title} className="rounded-xl p-4 border-l-4 border-l-[#52b788] bg-white/[0.02] border border-[#2d6a4f]/20">
                    <div className="text-sm font-bold text-white mb-1">{p.title}</div>
                    <div className="text-xs text-white/50 leading-relaxed">{p.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-4 text-white/30 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-emerald-500" />Education
              </h3>
              <div className="space-y-2">
                {[
                  { year: "1999", degree: "3-Month Course on Forestry", inst: "Gainesville, USA" },
                  { year: "1990", degree: "Ph.D. Ecology", inst: "University of Garhwal at Forest Research Institute, Dehradun" },
                  { year: "1988", degree: "M.Sc. Resource Management (2nd in University)", inst: "University of Edinburgh, UK" },
                  { year: "1981", degree: "Post Graduate Diploma in Forestry", inst: "Indian Forest College, Dehradun (now IGNFA)" },
                  { year: "1975", degree: "M.Sc. Zoology (1st in University)", inst: "University of Garhwal, Uttarakhand" },
                ].map(e => (
                  <div key={e.year} className="flex items-start gap-4 rounded-xl p-3 bg-[#1b4332]/20 border border-[#2d6a4f]/20 hover:bg-[#1b4332]/30 transition-colors">
                    <div className="shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-xs font-black bg-white/10 text-white">
                      {e.year}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">{e.degree}</div>
                      <div className="text-xs text-white/40 mt-0.5">{e.inst}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Qualification note */}
              <p className="text-xs text-white/30 mt-4 pl-3 border-l-2 border-white/10">
                <GraduationCap className="w-3 h-3 inline mr-1" />Ph.D. Ecology · M.Sc. University of Edinburgh, UK (2nd Position)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Timeline - WHITE BACKGROUND */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-gray-900 mb-12 flex items-center gap-3">
            <Briefcase className="w-6 h-6 text-amber-600" />Career Timeline
          </h2>
          
          {/* Desktop: Stair-step Timeline | Mobile: Vertical Timeline */}
          
          {/* --- Positions under State Government of Tripura --- */}
          <h3 className="text-lg font-bold text-gray-700 mb-6 border-b border-gray-200 pb-2">Positions held under the State Government of Tripura</h3>
          <div className="relative mb-12">
            {[
              { year: "Present", period: "Present", title: "Columnist", org: "40 decades of writing on environment, climate change, tribal and rural development, and international and national issues", desc: "Though have been writing since after joining Indian Forest Service (IFS) in 1979 in National newspaper like Indian Express, Hindustan Times and later on in Financial Times, Statesman, Telegraph etc but after Superannuation have largely writing in the daily Pioneer after the famous Journalist and Editor of Pioneer Mr Chandan Mitra one of the oldest news papers of India, invited to write for his paper. Also write occasionally for Millennium Post and The Emerging India national papers. So far more than 600 articles published.", color: "#f59e0b" },
              { year: "Present", period: "Present", title: "Chairman, Centre for Resource Management & Environment (CRE) and Jan Vikas Manch", org: "", desc: "Raises people-centric nationally important issues on environment, agriculture, planning, eco-tourism, tribal & rural development, governance, nationalism and livelihood. Writes regular columns in national newspapers.", color: "#10b981" },
              { year: "2013", period: "July 2013 till retirement and beyond. Reappointed on the same post but resigned after 7 months in April 2015", title: "Principal Secretary/later on designated as Agriculture Production Commissioner (in the Apex Scale grade of Chief Secretary/Secretary to Government of India)", org: "Forests, Animal Resources, Agriculture/Horticulture/Watershed Management/State Land Use Board, Planning and Coordination etc Departments, Government of Tripura", desc: "Initially appointed as Principal Secretary Planning and Coordination and prepared the planned budget and special package for SC, ST, Backward classes and Minorities. Ensuring convergence in the management of natural resources for better livelihood of people and forest and environmental conservation in the state. A successful model for rehabilitation of tribal and rural development was created in tune with combating climate change. Initiated reforms in the agriculture and allied sectors (leading to quantum jump in productivity of rice) and completely restructured the forest administration. Took action for improvement of indigenous cows.", color: "#8b5cf6" },
              { year: "2004", period: "15th July 2004 to 4th February 2008", title: "Managing Director, Tripura Forest Development and Plantation Corporation (TFDPC) Ltd & Additional Principal Chief Conservator of Forests and Chief Wildlife Warden & CEO, Tripura JBIC Project & Mission Director, Tripura Rubber Mission", org: "Government of Tripura (Rank of Additional Secretary to Govt. of India)", desc: "Infused corporate culture and turned round the fortune of the loss making company into a viable profit making public enterprise. Successfully settled more than 300 tribal shifting cultivators permanently during the tenure on Rubber Plantations and created employment opportunities for another 6000 people for which the corporation won national award. Successfully set up two National Parks – the Bison National Park and Clouded leopard National Park. Designed and implemented a Rs. 366 crore Japan International Cooperation Agency (JICA) project for Improvement of Forest and Environment and Poverty Reduction. Designed the Indo-German project for integrated natural resources management for the tribal dominated Dhalai District. As Mission Director, Tripura Rubber Mission, prepared an Action Plan for expansion of Rubber in Tripura for the next 20 years. The Rubber has now become the main industrial crop of the State along with Bamboo and is a major source of livelihood to several thousand rural families.", color: "#ef4444" },
              { year: "1993", period: "12th July 1993 to 14th October 1995", title: "Conservator of Forests, Northern Circle, Kumarghat, Tripura and Deputy Chief Wildlife Warden, Tripura", org: "Government of Tripura", desc: "Started a massive movement of involvement of people in forest management through JFM. Busted the gang of international smugglers and in the process escaped an attempt on life on 4th May 1994.", color: "#eab308" },
              { year: "1982", period: "May 16th 1982 to April 30th 1985", title: "Divisional Forest Officer (DFO) and Wildlife Warden", org: "Teliamura Forest Division, Tripura", desc: "Adopted innovative forest management practices like forming of \"friends of people\" groups for involving people in forestry (a precursor to the present day JFM). Removed massive encroachments from forests.", color: "#14b8a6" },
              { year: "1981", period: "July 17th 1981 to May 15th 1982", title: "Assistant Conservator of Forests", org: "Government of Tripura, Agartala", desc: "Wrote a book on Wildlife Management for the students and field officers.", color: "#3b82f6" },
            ].map((item, index, arr) => (
              <div 
                key={index}
                className="relative mb-2 md:mb-2"
              >
                {/* Mobile Layout */}
                <div className="md:hidden flex gap-3">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full shrink-0 border-2 border-white shadow-sm" style={{ background: item.color }} />
                    {index < arr.length - 1 && (
                      <div className="w-0.5 flex-1 min-h-[40px]" style={{ background: `linear-gradient(to bottom, ${item.color}60, ${arr[index + 1].color}60)` }} />
                    )}
                  </div>
                  <div className="pb-4 flex-1">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-sm font-bold" style={{ color: item.color }}>{item.year}</span>
                      <span className="text-[10px] text-gray-400 font-mono">{item.period}</span>
                    </div>
                    <h3 className="text-sm font-bold text-gray-900 leading-tight">{item.title}</h3>
                    <p className="text-xs text-gray-500 mt-0.5">{item.org}</p>
                    <ul className="mt-1 space-y-0.5">
                      {item.desc.split(". ").filter(Boolean).map((point, pi) => (
                        <li key={pi} className="text-xs text-gray-500 flex gap-1.5">
                          <span className="shrink-0 mt-1.5 w-1 h-1 rounded-full bg-gray-400" />
                          <span>{point.endsWith(".") ? point : `${point}.`}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* Desktop Layout - Compact */}
                <div className="hidden md:flex items-start gap-4">
                  <div className="shrink-0 w-14 text-right pt-1">
                    <span className="text-sm font-bold" style={{ color: item.color }}>{item.year}</span>
                  </div>
                  <div className="flex flex-col items-center pt-1.5">
                    <div className="w-3 h-3 rounded-full shrink-0 shadow-sm ring-2 ring-white" style={{ background: item.color }} />
                    {index < arr.length - 1 && (
                      <div className="w-0.5 flex-1 min-h-[50px]" style={{ background: `linear-gradient(to bottom, ${item.color}50, ${arr[index + 1].color}50)` }} />
                    )}
                  </div>
                  <div className="flex-1 pb-5 pl-2">
                    <h3 className="text-sm font-bold text-gray-900 leading-tight">{item.title}</h3>
                    <p className="text-xs font-medium mt-0.5" style={{ color: item.color }}>{item.org}</p>
                    <ul className="mt-1 space-y-0.5">
                      {item.desc.split(". ").filter(Boolean).map((point, pi) => (
                        <li key={pi} className="text-xs text-gray-500 flex gap-1.5 max-w-2xl">
                          <span className="shrink-0 mt-1.5 w-1 h-1 rounded-full bg-gray-400" />
                          <span>{point.endsWith(".") ? point : `${point}.`}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-[10px] text-gray-400 mt-1 font-mono">{item.period}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* --- Positions under Central Government --- */}
          <h3 className="text-lg font-bold text-gray-700 mb-6 border-b border-gray-200 pb-2">Positions held under the Central Government</h3>
          <div className="relative">
            {[
              { year: "2011", period: "20th May 2011 to 4th June 2013", title: "Director General, Indian Council of Forestry Research and Education (ICFRE) and Chancellor of Forest Research Institute (FRI) Deemed University, Dehradun", org: "In the Apex Scale, in the rank of Secretary to Government of India", desc: "Led the Supreme Court appointed team for conducting the Environmental Impact Assessment of iron ore Mines in Karnataka and prepared mine rehabilitation plans of 70 mines. Revised the Forest Types of India and published new Forest types of India Book a monumental work for all times to come. Launched a 'Direct to consumer' scheme for transfer of technology and total shift in research priorities. Started international fellowship in FRI Deemed University for the SAARC students. Streamlined the functioning of the University with focus on international cooperation. Fine-tuned research priorities with interface with tribal and rural life, created a division for interactions with Panchayats and focused on Climate change necessities and completely changed the focus of research, education and extension. Started all India coordinated projects on several topics with Agriculture and other Universities.", color: "#a855f7" },
              { year: "2008", period: "6th February 2008 to 19.05.2011", title: "Technical Expert (Forestry), National Rainfed Area Authority (NRAA)", org: "Planning Commission, Government of India, New Delhi (Rank and pay scale of Additional Secretary to Government of India)", desc: "Ensured integrated and holistic natural resource management in the rain fed areas for better productivity of Agriculture and natural resource and convergence for livelihood creation in the rural areas and developed and implemented \"Bundlekhand Package\" for convergence of holistic natural resources management and livelihoods.", color: "#ec4899" },
              { year: "1997", period: "24th June 1997 to March 2002 (Deputy IGF) & April 2002 to June 30th 2004 (IGF)", title: "Inspector General of Forests (Joint Secretary level) & Deputy Inspector General of Forests", org: "Ministry of Environment & Forests, Government of India, New Delhi", desc: "Established Compensatory Afforestation Management Planning Authority (CAMPA). Architect of Joint Forest Management (JFM) and Forest Fire control policy framework in the country. Issued land mark Guidelines on 4th February 2004 on recognition of traditional rights of the tribal people on forestland. Edited the only reference book on progress of JFM in India \"Root to Canopy\" in 2004. Streamlined the Forestry Clearance procedures by amending the Forest Conservation Rules in 2003 and 2004. Devised a programme for prevention of natural disasters in Uttarakhand Hills. Issued guidelines of Criteria and Indicators of Sustainable Forest Management.", color: "#f97316" },
              { year: "1995", period: "17th October 1995 to 23rd June 1997", title: "Assistant Director General (Media and Extension)", org: "Indian Council of Forestry Research and Education (ICFRE), Dehra Dun", desc: "Developed strategy for Media and Extension activities for the ICFRE Institutes and made films etc. Today, the strategy is paying dividend as farmers and industry are using the technologies. Implemented the World Bank Project on Extension.", color: "#f59e0b" },
              { year: "1990", period: "5th Dec. 1990 to June 30, 1993", title: "Associate Professor", org: "Indian Institute of Forest Management, Bhopal", desc: "Designed the M.Phil Course on Natural Resource Management for the practicing resource managers. Today the course is most sought after by the NGOs and Industry. First time assessed the economics of forest management and dependency of rural poor on forest in India and published two papers in AMBIO the Journal of Royal society of science, Sweden. Set up the regional centre of NAEB and published internationally acclaimed report on Joint Forest Management.", color: "#84cc16" },
              { year: "1985", period: "May 13th 1985 to 30th September 1990", title: "Silviculturist", org: "Forest Research Institute, Dehra Dun", desc: "Conducted research on Forest Fire fighting Technologies and land management on vulnerable slopes to prevent landslides and disasters in Hilly areas. Standardized the seed and Nursery technology for a large number of species. Wrote the Management plan for the new-forest estate first since 1942.", color: "#22c55e" },
              { year: "1979", period: "1979 to 1981", title: "Indian Forest Service (IFS) Probationer (Training)", org: "Indian Forest College, Dehra Dun (now IGNFA)", desc: "Completed the Associate of Indian Forest College (AIFC) course. Awarded R. S. Mathur Prize in the final examination of 1979-1981 course.", color: "#64748b" },
            ].map((item, index, arr) => (
              <div 
                key={index}
                className="relative mb-2 md:mb-2"
              >
                {/* Mobile Layout */}
                <div className="md:hidden flex gap-3">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full shrink-0 border-2 border-white shadow-sm" style={{ background: item.color }} />
                    {index < arr.length - 1 && (
                      <div className="w-0.5 flex-1 min-h-[40px]" style={{ background: `linear-gradient(to bottom, ${item.color}60, ${arr[index + 1].color}60)` }} />
                    )}
                  </div>
                  <div className="pb-4 flex-1">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-sm font-bold" style={{ color: item.color }}>{item.year}</span>
                      <span className="text-[10px] text-gray-400 font-mono">{item.period}</span>
                    </div>
                    <h3 className="text-sm font-bold text-gray-900 leading-tight">{item.title}</h3>
                    <p className="text-xs text-gray-500 mt-0.5">{item.org}</p>
                    <ul className="mt-1 space-y-0.5">
                      {item.desc.split(". ").filter(Boolean).map((point, pi) => (
                        <li key={pi} className="text-xs text-gray-500 flex gap-1.5">
                          <span className="shrink-0 mt-1.5 w-1 h-1 rounded-full bg-gray-400" />
                          <span>{point.endsWith(".") ? point : `${point}.`}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* Desktop Layout - Compact */}
                <div className="hidden md:flex items-start gap-4">
                  <div className="shrink-0 w-14 text-right pt-1">
                    <span className="text-sm font-bold" style={{ color: item.color }}>{item.year}</span>
                  </div>
                  <div className="flex flex-col items-center pt-1.5">
                    <div className="w-3 h-3 rounded-full shrink-0 shadow-sm ring-2 ring-white" style={{ background: item.color }} />
                    {index < arr.length - 1 && (
                      <div className="w-0.5 flex-1 min-h-[50px]" style={{ background: `linear-gradient(to bottom, ${item.color}50, ${arr[index + 1].color}50)` }} />
                    )}
                  </div>
                  <div className="flex-1 pb-5 pl-2">
                    <h3 className="text-sm font-bold text-gray-900 leading-tight">{item.title}</h3>
                    <p className="text-xs font-medium mt-0.5" style={{ color: item.color }}>{item.org}</p>
                    <ul className="mt-1 space-y-0.5">
                      {item.desc.split(". ").filter(Boolean).map((point, pi) => (
                        <li key={pi} className="text-xs text-gray-500 flex gap-1.5 max-w-2xl">
                          <span className="shrink-0 mt-1.5 w-1 h-1 rounded-full bg-gray-400" />
                          <span>{point.endsWith(".") ? point : `${point}.`}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-[10px] text-gray-400 mt-1 font-mono">{item.period}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Post-Retirement Professional & Social Work */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#52b788] text-sm font-bold uppercase tracking-widest mb-2">Continued Service</p>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight">Post-Retirement<br />Professional & Social Work</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              After resigning from his post retirement job in Tripura, Dr Bahuguna fruitfully engaged himself in social and professional work.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="p-8 sm:p-12 space-y-6 text-gray-700 leading-relaxed">
              <div className="space-y-5">
                <p><strong className="text-[#1b4332]">1.</strong> After resigning from his post retirement job in Tripura Dr Bahuguna fruitfully engaged himself in social and professional work. First of all he became a columnist for the National Newspapers particularly the English Daily Pioneer and so far in various newspapers he had contributed almost 600 Articles of a range of topics from governance to defence to strategic affairs to livelihoods of people to Environment, Forest and Climate Change and Tribal affairs.</p>
                
                <p><strong className="text-[#1b4332]">2.</strong> He established the Uttarakhand Jan Vikas Manch in the year 2015 and helped create a federation of Non Govt organizations who worked in the field of rural livelihood.</p>
                
                <p><strong className="text-[#1b4332]">3.</strong> In 2018 he took over the not for profit Trust Centre for Resource Management and Environment raised several issues relating to transparent governance on rural livelihood, environment and forest conservation and through his efforts a large number of people got justice. He helped poor through his tweets and taking up matters with govt authorities.</p>
                
                <p><strong className="text-[#1b4332]">4.</strong> In the govt sector he was appointed as Member of the Indian Council of Forestry Research and Education (ICFRE) Society in the year 2018 by the Ministry of Environment Forest and Climate Change for a period of 3 years. ICFRE Society is the top policy making body of govt of India relating to Forestry Research Education and Extension and is Chaired by Union Environment Minister.</p>
                
                <p><strong className="text-[#1b4332]">5.</strong> The President of India who is the visitor of Central University of Kashmir in February 2019 appointed Dr VK Bahuguna as his representative in the Executive Committee and University Court of Kashmir Central University for a period of 3 years. In this position held helped the nascent central University in initial years to take several decisions.</p>
                
                <p><strong className="text-[#1b4332]">6.</strong> Accepted the position of Chairman Kalpvriksh Foundation a dedicated forum created for serving the Indian Cow by Mr Vaishnav Charan Das.</p>
                
                <p><strong className="text-[#1b4332]">7.</strong> President of Apni Dharohar Society of Uttarakhand. But resigned after some time to focus on genuine issues at hand relating to Resource Management in the country.</p>
                
                <p><strong className="text-[#1b4332]">8.</strong> Was nominated as Member of the Task Force on Tribal Affairs by the Commission on Scheduled Tribe during 2021 to 2023</p>
                
                <p><strong className="text-[#1b4332]">9.</strong> Assisted the Vanvasi Kalyan Ashram on assessing the impact of Forest Right Act in Karnataka during the year 2024.</p>
                
                <p><strong className="text-[#1b4332]">10.</strong> Chaired a session in Policy issues in the International Conference on Wildlife arranged by Govt of Madhya Pradesh. Apart from this Chaired conference on Disaster management and other issues organized by State Academy of Administration Nainital.</p>
                
                <p><strong className="text-[#1b4332]">11.</strong> Has been interacting with officers of Indian Administrative Service (IAS) at the Lal Bahadur Academy of Administration Mussoorie; with Indian Forest Service (IFS) officers and Probationers at the Indira Gandhi Forest Academy Dehradun and Student and Faculty of Indian Institute of Forest Management.</p>
                
                <p><strong className="text-[#1b4332]">12.</strong> Organised an International Conference on Climate Change in Asia and Africa during 29th April to 2nd May at Dehradun. It was attended by 76 participants from India, Nepal, Sri Lanka and Mauritius.</p>
                
                <p><strong className="text-[#1b4332]">13.</strong> Making frequent visits to Tribal areas of Madhya Pradesh and Tripura and helping them to raise issues relevant for ensuring better livelihood, Environmental Conservation and people centric governance. Several articles helped the authorities to take action on suggested lines.</p>
                
                <p><strong className="text-[#1b4332]">14.</strong> He is very active and has shown that without occupying powerful position still a lot can be done. He had Published during Corona lockdown two books. The First one is a compilation of his 99 selective Articles since 2015 till 2021 which can contribute a great deal in accountable and efficiently responsible Governance. The book is entitled: &quot;A Citizens Dream for his country- Making Indian Governance to Work&quot;. The Second Book is: &quot;Quest for Civility - an inside account of Indian Babudom&quot;. Both the books are available online in Amazon, Flipkart and other shops and also with Notion Press publisher Chennai.</p>
                
                <p><strong className="text-[#1b4332]">15.</strong> As he deeply live the natural and cultural beauty and Ethos of India and Uttarakhand Dr Bahuguna considering the issue of ecological sustainability of mountains and its people and influx of outsiders leading to population explosion in Uttarakhand he had decided and became the National President of Uttarakhand Samanata Party so that a regional force is created to preserve the concept of Equality. Integrity of Uttarakhand and Help its youth in meeting their genuine needs. He had as President of the party had raised the issue of Delimitation and drug menace and jobs reservation for the youth of Uttarakhand in all private investments.</p>
              </div>

              {/* Formal Positions Summary */}
              <div className="mt-12 pt-8 border-t border-gray-100">
                <h4 className="text-2xl font-bold text-gray-900 mb-6">Current & Former Positions Summary</h4>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h5 className="font-bold text-gray-900 mb-4 text-lg">A. Formerly:</h5>
                    <div className="space-y-3 ml-4">
                      <p className="text-sm"><strong>1.</strong> Director General Indian Council of Forestry Research and Education (ICFRE) & Chancellor Forest Research Institute (FRI) University Ministry of Environment, Forest and Climate Change Government of India;</p>
                      <p className="text-sm"><strong>2.</strong> Principal Secretary and Additional Principal Chief Conservator (in Apex Scale) Departments of Agriculture, Horticulture, Forests, Animal Husbandry and Planning and Coordination and Economics Government of Tripura;</p>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-bold text-gray-900 mb-4 text-lg">B. Present:</h5>
                    <div className="space-y-3 ml-4">
                      <p className="text-sm"><strong>i)</strong> Chairman, Centre for Resource Management and Environment (a non profit registered Trust);</p>
                      <p className="text-sm"><strong>ii)</strong> Chairman, Jan Vikas Manch, Uttarakhand (People&apos;s movement for livelihood and transparent governance)</p>
                    </div>
                  </div>
                </div>

                {/* Address Section */}
                <div className="mt-8 pt-8 border-t border-gray-100">
                  <h5 className="font-bold text-gray-900 mb-4 text-lg">Address</h5>
                  <div className="grid sm:grid-cols-2 gap-6 text-sm text-gray-600">
                    <div>
                      <p><strong className="text-gray-900">i) Noida:</strong> A 101, Jagdambe Apartments, C-58/25 Sector 62 NOIDA, UP-201309</p>
                      <p><strong className="text-gray-900">Telefax:</strong> +91-120-4548664</p>
                      <p><strong className="text-gray-900">Mobile:</strong> +91-9810405137 & +91-9412057333</p>
                    </div>
                    <div>
                      <p><strong className="text-gray-900">ii) Dehradun:</strong> 281 Phase I Vasant Vihar Dehradun Uttarakhand Pin 248006</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16">
            <div>
              <p className="text-[#52b788] text-sm font-bold uppercase tracking-widest mb-2">Recognition & Excellence</p>
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 leading-tight">Awards &<br />Honours</h2>
            </div>
            <div className="flex items-center gap-3 pb-1">
              <div className="w-12 h-12 rounded-full bg-[#1b4332] flex items-center justify-center">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-3xl font-black text-[#1b4332]">15</div>
                <div className="text-xs text-gray-400 font-medium">Recognitions</div>
              </div>
            </div>
          </div>

          {/* ── HERO: Queen's Award ── */}
          <div className="relative rounded-3xl overflow-hidden mb-6 bg-[#0a1a14]">
            {/* Decorative background pattern */}
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ background: "#52b788", transform: "translate(30%,-30%)" }} />
              <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl opacity-10" style={{ background: "#2d6a4f", transform: "translate(-30%,30%)" }} />
              <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
            </div>
            <div className="relative z-10 p-8 sm:p-12">
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                {/* Left: Big trophy icon */}
                <div className="shrink-0">
                  <div className="w-24 h-24 rounded-3xl bg-white/10 border border-white/20 flex items-center justify-center">
                    <Trophy className="w-12 h-12 text-white" />
                  </div>
                </div>
                {/* Right: Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#52b788]/20 text-[#52b788] border border-[#52b788]/30 uppercase tracking-wider">Most Prestigious</span>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-white/60">2000</span>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-white/60">Commonwealth Forestry Association, UK</span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-black text-white mb-4 leading-tight">Queen&apos;s Award<br />for Forestry</h3>
                  <p className="text-white/70 leading-relaxed mb-4 max-w-2xl">
                    Winner of the prestigious Queen&apos;s Award for Forestry for the year 2000 from the Commonwealth Forestry Association UK.
                  </p>
                  <blockquote className="border-l-4 border-[#52b788] pl-4">
                    <p className="text-white/50 italic text-sm leading-relaxed">
                      &ldquo;For outstanding achievements in the field of Forest Policy, Development and Management especially for Participatory Forest Management which will contribute to the advancement of forestry within the Commonwealth.&rdquo;
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          {/* ── EMPI Award — wide card ── */}
          <div className="relative rounded-3xl overflow-hidden mb-10 border-2 border-[#1b4332]/10 bg-gradient-to-br from-[#f0faf5] to-white">
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#1b4332]" />
            <div className="p-8 sm:p-10 pl-10">
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="shrink-0 w-16 h-16 rounded-2xl bg-[#1b4332] flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#1b4332] text-white uppercase tracking-wider">Innovation Award</span>
                    <span className="text-xs text-gray-400 font-mono">Presented by President APJ Abdul Kalam · 22 Dec 2007</span>
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-3">EMPI–Indian Express Innovation Award 2006</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    As Managing Director of the Tripura Forest Development Corporation, received the EMPI-Indian Express Innovation Award 2006 from the former President of India Shri APJ Abdul Kalam on 22nd December 2007 in New-Delhi for bringing in innovations and enthusing corporate culture in the working of the Corporation turning it into a profit making enterprise from a loss making entity. The Board of Directors of the Tripura Forest Development &amp; Plantation Corporation commended the efforts of the Managing Director in the 98th Board Meeting for providing exemplary leadership and infusing innovative ideas leading to diversification and turning around the fortune of the Company. The net profit has crossed to more than 600% within a period of 3 years. The Corporation is providing livelihood to more than 15,000 families in the rural and tribal areas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Remaining 12 awards — editorial list ── */}
          <div className="grid sm:grid-cols-2 gap-0 border-t-2 border-gray-100">
            {[
              { icon: <Globe2 className="w-5 h-5" />, year: "2012", title: "Vice-Chairman, Asia-Pacific Forestry Organization", desc: "Elected as Vice-Chairman of Asia-Pacific Forestry Organization on 30th August 2012 at Guangzhou, China." },
              { icon: <Users className="w-5 h-5" />, year: "2012", title: "Executive Committee, IPC (UN/FAO)", desc: "Elected as Executive Committee of International Poplar Commission a UN/FAO body on 4th November 2012 at Dehradun." },
              { icon: <Mic2 className="w-5 h-5" />, year: "2012", title: "FAO World Forestry Week — Chair", desc: "Invited to and chaired a Technical session on 24th September 2012 at the FAO Rome in World Forestry Week during Committee on Forestry (COFO) meet of FAO." },
              { icon: <ScrollText className="w-5 h-5" />, year: "2005", title: "Commendation — Govt. of Tripura", desc: "The Government of Tripura issued a Commendation letter in November 2005 for making outstanding efforts in forest management planning and administration." },
              { icon: <Mic2 className="w-5 h-5" />, year: "2001", title: "Key-note — 16th Commonwealth Forestry Conference", desc: "Delivered Key-note address in the 16th Commonwealth Forestry Conference in Perth (Australia) in April 2001." },
              { icon: <Mountain className="w-5 h-5" />, year: "2012", title: "Uttarakhand Ratan", desc: "Awarded Uttarakhand Ratan in 2012 by the All India Intellectual Federation for achieving excellence in academics, research and administrator for the demonstrated benefits accrued to the society." },
              { icon: <Flag className="w-5 h-5" />, year: "2013", title: "Great Son of India Award", desc: "Awarded Great Son of India Award 2013 on 22nd December 2013 by the All India Intellectual Federation for achieving success as people centric civil servant." },
              { icon: <Gem className="w-5 h-5" />, year: "–", title: "Udhog Ratan", desc: "Awarded Udhog Ratan by Institute of Economic Growth, New-Delhi." },
              { icon: <Medal className="w-5 h-5" />, year: "1988", title: "2nd Position — M.Sc. Resource Management", desc: "Awarded a class prize for scoring 2nd position in the University in M.Sc. (Resource Management) examination (1988), University of Edinburgh, UK." },
              { icon: <Crown className="w-5 h-5" />, year: "1975", title: "1st Position — M.Sc. Zoology", desc: "A class prize for securing first position in the University in M.Sc. (Zoology) examination (1975) of the Garhwal University, Srinagar (Garhwal), UP." },
              { icon: <Award className="w-5 h-5" />, year: "1981", title: "R.S. Mathur Prize", desc: "R. S. Mathur Prize in the final examination of 1979-1981 course of Associate of Indian Forest College (AIFC), at the Indian Forest College, Dehra Dun." },
              { icon: <Newspaper className="w-5 h-5" />, year: "1986–89", title: "Seth Memorial & Brandis Memorial Prizes", desc: "Awarded Seth Memorial (during 1986 & 1989) and Brandis Memorial Prizes (during 1987 & 1989) for writing best research papers/photography for the respective years in the Journal 'Indian Forester'." },
            ].map((a, i) => (
              <div key={a.title}
                className={`group flex items-start gap-5 p-6 border-b-2 border-gray-100 hover:bg-[#f0faf5] transition-colors ${i % 2 === 0 ? "sm:border-r-2" : ""}`}>
                {/* Number */}
                <div className="shrink-0 flex flex-col items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-[#1b4332]/8 group-hover:bg-[#1b4332] transition-colors flex items-center justify-center text-[#1b4332] group-hover:text-white">
                    {a.icon}
                  </div>
                  <span className="text-[10px] font-black text-gray-300 font-mono">{a.year}</span>
                </div>
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold text-gray-900 mb-1 leading-snug group-hover:text-[#1b4332] transition-colors">{a.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* International Exposure */}
      <InternationalExposure />

      {/* PLACEHOLDER - remove this section */}
      <section className="py-20 overflow-hidden hidden" style={{ background: "#0a0f0d" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border mb-3" style={{ background: "rgba(56,189,248,0.08)", borderColor: "rgba(56,189,248,0.2)", color: "#38bdf8" }}>
                <Globe2 className="w-3 h-3" />Global Footprint
              </span>
              <h2 className="text-3xl font-black text-white">International Exposure</h2>
              <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>30+ countries across 5 continents</p>
            </div>
            <div className="flex gap-4 text-center">
              {[{ n: "30+", l: "Countries" }, { n: "19", l: "Listed Below" }, { n: "5", l: "Continents" }].map(s => (
                <div key={s.l} className="px-4 py-2 rounded-xl border" style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.07)" }}>
                  <div className="text-xl font-black" style={{ color: "#38bdf8" }}>{s.n}</div>
                  <div className="text-[10px]" style={{ color: "rgba(255,255,255,0.35)" }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { flag: "🇦🇺", country: "Australia", desc: "Keynote at 16th Commonwealth Forestry Conference, Perth · 2001 & Mining delegation · 2013", img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80" },
              { flag: "🇬🇧", country: "United Kingdom", desc: "Queen's Award Travel Fellowship — Oxford & Edinburgh Universities · 2001. M.Sc. Edinburgh · 1988", img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&q=80" },
              { flag: "🇨🇳", country: "China", desc: "APAFRI General Assembly, Guangzhou · 2012. Asia-Pacific Forestry Week · 2011. Bamboo tech MOU · 2007", img: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=400&q=80" },
              { flag: "🇮🇹", country: "Italy", desc: "Chaired session at World Forestry Week, FAO Rome · 2012. CIFOR workshop on Forest Carbon, Bellagio · 2000", img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400&q=80" },
              { flag: "🇨🇭", country: "Switzerland", desc: "International Conference on Community Forestry, Interlaken · 2004", img: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=400&q=80" },
              { flag: "🇺🇸", country: "USA", desc: "University of Florida 3-month course · 1999. World Bank & Smithsonian discussions · 2012", img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&q=80" },
              { flag: "🇳🇵", country: "Nepal", desc: "REDD+ inspection, ICIMOD bilateral discussions · 2011. International Seminar on Community Forestry · 2009", img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&q=80" },
              { flag: "🇸🇪", country: "Sweden", desc: "Indian Forest Service (IFS) officer training oversight, Swedish Forestry Agency & SLU discussions · 2012", img: "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=400&q=80" },
              { flag: "🇰🇭", country: "Cambodia", desc: "Ta Prohm Temple tree preservation project inspection, Siem Reap · 2012", img: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=400&q=80" },
              { flag: "🇿🇦", country: "South Africa", desc: "JFM presentation to SA Forest Dept., community woodlots visit · 2001", img: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=400&q=80" },
              { flag: "🇩🇪", country: "Germany", desc: "International Conference on Renewable Energy, Bonn · 2004", img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&q=80" },
              { flag: "🇧🇪", country: "Belgium", desc: "International workshop on Sustainable Management of Resources, Brussels · 1998", img: "https://images.unsplash.com/photo-1491557345352-5929e343eb89?w=400&q=80" },
              { flag: "🇮🇩", country: "Indonesia", desc: "International Workshop on Forest Fire Management, Bogor · 1999. Visited fire-affected forests in Kalimantan.", img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&q=80" },
              { flag: "🇬🇹", country: "Guatemala", desc: "Led Indian delegation at UNDP/FAO conference on Criteria & Indicators for Sustainable Forest Management · 2003", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" },
              { flag: "🇲🇾", country: "Malaysia", desc: "XXI IUFRO World Congress — received Queen's Award · 2000. FAO National Focal Points meeting · 2002", img: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=400&q=80" },
              { flag: "🇸🇬", country: "Singapore", desc: "Urban forestry and eco-tourism study visit · 2000", img: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&q=80" },
              { flag: "🇹🇭", country: "Thailand", desc: "Lead paper on Barriers in Application of Forestry Research, FAO Bangkok · 1994 & Crocodile park study · 2007", img: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=400&q=80" },
              { flag: "🇧🇹", country: "Bhutan", desc: "SAARC Forestry Center Governing Board meeting, Thimphu · 2011", img: "https://images.unsplash.com/photo-1553856622-d1b352e9a211?w=400&q=80" },
              { flag: "🇮🇳", country: "India (Base)", desc: "Indian Forest Service 1979 Batch. 35+ years of distinguished service across India.", img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&q=80" },
            ].map((v) => (
              <div
                key={v.country}
                className="group relative rounded-2xl overflow-hidden cursor-default"
                style={{ aspectRatio: "3/4" }}
              >
                {/* Background image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={v.img}
                  alt={v.country}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Gradient overlay — always visible at bottom */}
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 100%)" }} />

                {/* Hover overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "rgba(56,189,248,0.12)" }} />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                  {/* Flag + country always visible */}
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-2xl">{v.flag}</span>
                    <span className="text-sm font-black text-white">{v.country}</span>
                  </div>

                  {/* Description — slides up on hover */}
                  <p className="text-[11px] leading-relaxed text-white/0 group-hover:text-white/80 transition-all duration-300 max-h-0 group-hover:max-h-24 overflow-hidden">
                    {v.desc}
                  </p>
                </div>

                {/* Top-right dot indicator */}
                <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-sky-400 opacity-70" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Address - WHITE BACKGROUND */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl p-6 border border-sky-200 bg-sky-50">
            <div className="flex flex-wrap gap-8 items-start">
              <MapPin className="w-5 h-5 shrink-0 text-sky-600 mt-1" />

              {/* Noida Address */}
              <div>
                <div className="text-xs font-bold text-sky-600 uppercase tracking-wide mb-1">Noida Office</div>
                <div className="text-sm font-bold text-gray-900 mb-0.5">Mailing Address</div>
                <div className="text-sm text-gray-600">A-101 Jagdambe Apartments, C-58/25<br />Sector-62, Noida, UP – 201309</div>
                <div className="text-sm text-gray-500 mt-1">Telefax: +91-120-4548664</div>
                <div className="text-sm text-gray-500">Mobile: +91-9810405137 &amp; +91-9412057333</div>
              </div>

              <div className="w-px self-stretch bg-sky-200 hidden sm:block" />

              {/* Dehradun Address */}
              <div>
                <div className="text-xs font-bold text-sky-600 uppercase tracking-wide mb-1">Dehradun Office</div>
                <div className="text-sm font-bold text-gray-900 mb-0.5">Residence Address</div>
                <div className="text-sm text-gray-600">281 Phase I, Vasant Vihar<br />Dehradun, Uttarakhand – 248006</div>
                <div className="text-sm text-gray-500 mt-1">Mobile: +91-9810405137 &amp; +91-9412057333</div>
              </div>

              <div className="w-px self-stretch bg-sky-200 hidden sm:block" />

              {/* Contact */}
              <div>
                <div className="text-xs font-bold text-sky-600 uppercase tracking-wide mb-1">Contact</div>
                <div className="text-sm font-bold text-gray-900 mb-0.5">Email</div>
                <div className="text-sm text-sky-600">bahugunaifs@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
