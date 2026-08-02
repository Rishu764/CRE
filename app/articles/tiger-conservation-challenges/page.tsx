"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, ExternalLink, Calendar, Tag, Quote, Languages } from "lucide-react";

/* ─── English content ─────────────────────────────────────── */
const en = {
  badge: "Wildlife Conservation",
  titlePlain: "New Challenges in Tiger Conservation in India: The Biggest Test After Success",
  subtitle:
    "India is home to nearly 70% of the world's wild tigers — a global conservation success story. But rising tiger density, habitat fragmentation, and climate change now demand a new strategy beyond just counting numbers.",
  pullQuote:
    "\u201cTiger conservation\u2019s future depends on maintaining ecological corridors and promoting peaceful coexistence between humans and tigers.\u201d",
  dedication:
    "This article is dedicated to Shri Vinod Rishi — one of the finest IFS officers and wildlife experts of post-independence India — who passed away on 29 July 2026. He left an indelible mark on India's wildlife history.",
  sections: [
    {
      heading: null,
      body: [
        "India today is home to nearly 70% of the world's wild tigers. This achievement is the result of decades of conservation efforts, scientific management, and policy interventions — from Project Tiger to modern monitoring systems. International Tiger Day is certainly an occasion to celebrate this success, but more importantly, it is a time to seriously reflect on the challenges ahead.",
        "While growing tiger numbers are a positive sign, they have also created new circumstances. Tiger density is increasing in several protected areas. At the same time, forest fragmentation, human-tiger conflict, climate change, and mounting pressure on wildlife corridors are creating fresh challenges for conservation. This is why simply increasing tiger numbers is no longer sufficient — ensuring safe and sustainable habitat is equally essential.",
      ],
    },
    {
      heading: "India's Tiger Conservation Success — The Numbers",
      body: [
        "Every year on 29 July, the world celebrates International Tiger Day (also known as Global Tiger Day). It began with the historic St. Petersburg Declaration of 2010, in which 13 tiger-range countries committed to a major goal: doubling wild tiger populations by 2022.",
        "According to the latest All India Tiger Estimation, India's wild tiger population stands at an average of 3,682 (ranging between 3,167 and 3,925). Starting from just 9 protected areas under Project Tiger in 1973, India now manages a network of 58 Tiger Reserves spanning more than 84,500 sq km across 18 states.",
      ],
    },
    {
      heading: "Emerging Challenges in Tiger Conservation",
      body: [
        "While the growth in tiger numbers is a great achievement, rapid population growth and economic development in India have also created complex ecological challenges. Over 40% of tigers live outside the protected area network of national parks and sanctuaries.",
        "The longest-standing threat to tigers in India is the destruction of their natural habitat and the fragmentation of their movement corridors. Highways, railway lines, mining, and hydroelectric projects cut through core tiger habitats. When corridors connecting major landscapes (such as the Central Indian Landscape or the Western Ghats) break down, tigers get trapped in isolated 'island' reserves.",
        "When tiger populations in core reserve areas exceed the carrying capacity, young and elderly tigers are forced to move into buffer zones and agricultural areas. Crop damage by prey animals drives farmers into buffer zones, while tigers preying on livestock or approaching villages leads to retaliatory killings, livestock losses, and human casualties.",
        "Large reserves like Corbett (currently 560 tigers — far above the park's capacity), Ranthambore (88), Tadoba (115), and Bandipur (191) face serious space constraints. Large tigers need large territories for hunting (20 to 100+ sq km depending on prey availability). Overcrowding in core areas leads to territorial fights, infanticide, and dispersal into unprotected forests.",
        "Smaller reserves (such as Sariska or isolated blocks) face the risk of genetic bottlenecks. Without connected corridors for genetic flow, inbreeding depression can reduce fertility and disease resistance.",
        "Low-lying ecosystems such as the Sundarbans mangroves face serious threats from rising sea levels, increasing salinity, and more frequent severe storms — which directly destroy tiger habitat and alter prey availability.",
      ],
    },
    {
      heading: "Solutions and the Way Forward",
      body: [
        "Addressing these challenges requires moving beyond the traditional 'fence and protect' model toward landscape-level, technology-based, and community-centred conservation.",
        "Road and railway fragmentation must be resolved by mandating underpasses, eco-bridges, and canopy crossings as essential components of project planning and approval.",
        "To reduce human-animal conflict, we need a solid coexistence policy: automated camera traps and real-time alert systems near village boundaries, quick response teams equipped with fast vehicles and equipment, strong fencing around at-risk villages, a fair compensation system, and training for village heads, government staff, and villagers in preventing wildlife attacks.",
        "To prevent genetic isolation, we must ensure that as many wildlife corridors as possible are created and maintained — along with translocation of populations between protected area networks.",
        "For poaching and trafficking — one of the most critical issues — the M-STrIPES (Monitoring System for Tigers' Intensive Protection and Ecological Status) mobile GPS and GIS analytics tool is excellent, but must be extended equally to non-reserve forest divisions.",
        "Community engagement is the real need of the hour: tourism revenue from tiger reserves should be directed into eco-development committees, village development, alternative energy (biogas/solar), and eco-tourism employment. Families who voluntarily relocate from core areas of tiger reserves should receive fair compensation packages including fertile agricultural land.",
        "Finally, for reserves facing carrying-capacity overloads, the scientific translocation of tigers to lower-density or recovering forests (such as Palamu) must be accelerated alongside habitat and prey base improvement.",
      ],
    },
    {
      heading: "Conclusion",
      body: [
        "International Tiger Day reaffirms the contributions of India's forest service veterans, and the world recognises these achievements. However, the future of tiger conservation depends on maintaining ecological corridors and promoting peaceful coexistence between humans and tigers. By striking a balance between economic aspirations and green infrastructure, India can ensure that its national animal continues to roar in its natural habitats for generations to come.",
      ],
    },
  ],
};

/* ─── Hindi content ──────────────────────────────────────── */
const hi = {
  badge: "वन्यजीव संरक्षण",
  titlePlain: "भारत में बाघ संरक्षण की नई चुनौतियां: सफलता के बाद अब भविष्य की सबसे बड़ी परीक्षा",
  subtitle:
    "भारत आज दुनिया के लगभग 70 प्रतिशत जंगली बाघों का घर है। लेकिन बढ़ते घनत्व, खंडित आवास और जलवायु परिवर्तन के बीच अब संख्या से परे एक नई रणनीति की जरूरत है।",
  pullQuote:
    '"बाघ संरक्षण का भविष्य इकोलॉजिकल कॉरिडोर को बनाए रखने और इंसानों व बाघों के बीच शांतिपूर्ण सह-अस्तित्व को बढ़ावा देने पर निर्भर करता है।"',
  dedication:
    "यह लेख आज़ादी के बाद के दौर के सबसे बेहतरीन IFS अधिकारी और वन्यजीव विशेषज्ञ श्री विनोद ऋषि को समर्पित है, जिनका निधन 29 जुलाई 2026 को हुआ था। उन्होंने भारत के वन्यजीव इतिहास में एक अमिट छाप छोड़ी है।",
  sections: [
    {
      heading: null,
      body: [
        "भारत आज दुनिया के लगभग 70 प्रतिशत जंगली बाघों का घर है। यह उपलब्धि दशकों तक चले संरक्षण प्रयासों, वैज्ञानिक प्रबंधन और नीतिगत हस्तक्षेप का परिणाम है। प्रोजेक्ट टाइगर से लेकर आधुनिक निगरानी तंत्र तक देश ने वन्यजीव संरक्षण में उल्लेखनीय सफलता हासिल की है। अंतरराष्ट्रीय बाघ दिवस इस उपलब्धि का उत्सव मनाने का अवसर जरूर है, लेकिन इससे भी अधिक यह भविष्य की चुनौतियों पर गंभीरता से विचार करने का समय है।",
        "बाघों की संख्या बढ़ना सकारात्मक संकेत है, लेकिन इसके साथ नई परिस्थितियां भी सामने आई हैं। कई संरक्षित क्षेत्रों में बाघों का घनत्व बढ़ रहा है। दूसरी ओर जंगलों का खंडित होना, मानव-बाघ संघर्ष, जलवायु परिवर्तन और वन्यजीव गलियारों पर बढ़ता दबाव संरक्षण की दिशा में नई चुनौतियां खड़ी कर रहा है।",
      ],
    },
    {
      heading: "भारत में बाघ दिवस का जश्न और आंकड़े",
      body: [
        "हर साल 29 जुलाई को दुनिया भर में अंतर्राष्ट्रीय बाघ दिवस मनाया जाता है। इसकी शुरुआत 2010 में रूस में हुए ऐतिहासिक सेंट पीटर्सबर्ग घोषणापत्र से हुई थी, जिसमें बाघों वाले 13 देशों ने 2022 तक दुनिया भर में जंगली बाघों की आबादी को दोगुना करने का लक्ष्य रखा था।",
        "नवीनतम अखिल भारतीय बाघ गणना के अनुसार, भारत में जंगली बाघों की आबादी औसतन 3,682 है (जो 3,167 से 3,925 के बीच है)। 1973 में प्रोजेक्ट टाइगर के तहत केवल 9 संरक्षित क्षेत्रों से शुरुआत करते हुए, भारत अब 18 राज्यों में 84,500 वर्ग किलोमीटर से अधिक क्षेत्र में फैले 58 टाइगर रिजर्व का प्रबंधन करता है।",
      ],
    },
    {
      heading: "बाघ संरक्षण में उभरती चुनौतियां",
      body: [
        "हालांकि बाघों की संख्या में वृद्धि एक बड़ी उपलब्धि है, लेकिन भारत में तेजी से बढ़ती आबादी और आर्थिक विकास ने जटिल पारिस्थितिक चुनौतियां भी पैदा की हैं। 40 प्रतिशत से ज़्यादा बाघ नेशनल पार्क और सैंक्चुअरी वाले संरक्षित इलाकों के नेटवर्क के बाहर रहते हैं।",
        "भारत में बाघों के जीवन के लिए सबसे लंबा खतरा उनके प्राकृतिक वास का खत्म होना और उनके आने-जाने के रास्तों (कॉरिडोर) का बंटवारा है। हाईवे, रेलवे लाइन, माइनिंग और हाइड्रोइलेक्ट्रिक प्रोजेक्ट बाघों के मुख्य आवासों को काटते हैं।",
        "जब मुख्य रिज़र्व इलाकों में बाघों की आबादी वहां की क्षमता से ज़्यादा हो जाती है, तो युवा और बूढ़े बाघ बफर ज़ोन और इंसानों वाले खेती-बाड़ी के इलाकों में जाने को मजबूर हो जाते हैं। इससे मानव-बाघ टकराव, मवेशियों का नुकसान और इंसानों की जान जाने की घटनाएं बढ़ती हैं।",
        "कॉर्बेट (560 बाघ — पार्क की क्षमता से कहीं ज़्यादा), रणथंभौर (88), ताडोबा (115) और बांदीपुर (191) जैसे बड़े रिज़र्व में जगह की भारी कमी है। मुख्य इलाकों में ज़्यादा भीड़ होने से इलाके के लिए लड़ाई, बच्चों को मारना (infanticide) और बिना सुरक्षा वाले जंगलों में फैलने जैसी समस्याएं बढ़ती हैं।",
        "छोटे रिज़र्व जैसे सरिस्का में बाघों की आबादी को जेनेटिक बॉटलनेक का खतरा होता है। अगर जुड़े हुए कॉरिडोर न हों तो इनब्रीडिंग डिप्रेशन से प्रजनन क्षमता और बीमारियों से लड़ने की ताकत कम हो सकती है।",
        "सुंदरबन जैसे निचले इलाकों वाले इकोसिस्टम को समुद्र का जलस्तर बढ़ने, खारापन बढ़ने और बार-बार आने वाले भयंकर तूफानों से भारी खतरा है, जो सीधे तौर पर बाघों के आवास को नष्ट करते हैं।",
      ],
    },
    {
      heading: "समाधान और आगे का रास्ता",
      body: [
        "इन चुनौतियों से निपटने के लिए पारंपरिक 'बाड़ लगाकर सुरक्षा' वाले मॉडल से आगे बढ़कर लैंडस्केप-स्तर, टेक्नोलॉजी-आधारित और समुदाय-केंद्रित संरक्षण की ओर बढ़ने की ज़रूरत है।",
        "ऐसे प्रोजेक्ट्स की प्लानिंग में अंडरपास, इको-ब्रिज और कैनोपी क्रॉसिंग को ज़रूरी हिस्से के तौर पर शामिल करना होगा। इंसान और जानवरों के बीच टकराव को कम करने के लिए गाँव की सीमाओं के पास ऑटोमेटेड कैमरा ट्रैप, रियल-टाइम अलर्ट सिस्टम, क्विक रिस्पॉन्स टीम, मज़बूत बाड़, उचित मुआवज़ा सिस्टम और प्रशिक्षण की व्यवस्था होनी चाहिए।",
        "जेनेटिक अलगाव से बचाने के लिए ज़्यादा से ज़्यादा वाइल्डलाइफ़ कॉरिडोर बनाए और बनाए रखे जाएं और संरक्षित क्षेत्रों के बीच आबादी का ट्रांसलोकेशन भी किया जाए।",
        "M-STrIPES मोबाइल GPS और GIS एनालिटिक्स एक बेहतरीन तरीका है, लेकिन इसे गैर-रिजर्व वन डिवीजनों तक भी समान रूप से बढ़ाया जाना चाहिए।",
        "स्थानीय वन-निवासी समुदायों के सहयोग के बिना संरक्षण सफल नहीं हो सकता। टाइगर रिज़र्व से होने वाली टूरिज़्म की कमाई का कुछ हिस्सा इको-डेवलपमेंट कमेटियों और ग्राम विकास में लगाया जाना चाहिए।",
        "ज़्यादा घनत्व वाले रिज़र्व में वैज्ञानिक तरीकों से बाघों को कम घनत्व वाले या फिर से विकसित हो रहे जंगलों (जैसे पलामू) में भेजने की प्रक्रिया को तेज़ किया जाना चाहिए।",
      ],
    },
    {
      heading: "निष्कर्ष",
      body: [
        "अंतर्राष्ट्रीय बाघ दिवस हमारे वन सेवा के दिग्गजों के योगदान को फिर से रेखांकित करता है और पूरी दुनिया इन उपलब्धियों को मानती है। हालाँकि, बाघ संरक्षण का भविष्य इकोलॉजिकल कॉरिडोर को बनाए रखने और इंसानों व बाघों के बीच शांतिपूर्ण सह-अस्तित्व को बढ़ावा देने पर निर्भर करता है। आर्थिक आकांक्षाओं और ग्रीन इंफ्रास्ट्रक्चर के बीच संतुलन बनाकर, भारत यह सुनिश्चित कर सकता है कि उसका राष्ट्रीय पशु आने वाली पीढ़ियों तक अपने प्राकृतिक आवासों में दहाड़ता रहे।",
      ],
    },
  ],
};

export default function ArticlePage() {
  const [lang, setLang] = useState<"en" | "hi">("hi");
  const t = lang === "en" ? en : hi;
  const isHindi = lang === "hi";

  return (
    <main className="min-h-screen bg-[#fafaf8]">

      {/* ── Top bar ── */}
      <div className="pt-20 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-5 flex items-center justify-between gap-4">
          <Link href="/articles" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4" />
            {isHindi ? "सभी लेख" : "All Articles"}
          </Link>
          <span className="text-xs text-gray-400 uppercase tracking-widest font-medium">Wildlife · Conservation</span>
        </div>
      </div>

      {/* ── Hero ── */}
      <div className="bg-[#1b4332] text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-20">

          {/* Badge + toggle */}
          <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest bg-[#52b788]/20 border border-[#52b788]/30 text-[#52b788]">
              <Tag className="w-3 h-3" />{t.badge}
            </span>
            <div className="flex items-center gap-1 bg-white/10 rounded-full p-1">
              <button onClick={() => setLang("hi")} className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${lang === "hi" ? "bg-[#52b788] text-white shadow" : "text-white/60 hover:text-white"}`}>
                <Languages className="w-3 h-3" />हिंदी
              </button>
              <button onClick={() => setLang("en")} className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${lang === "en" ? "bg-[#52b788] text-white shadow" : "text-white/60 hover:text-white"}`}>
                EN
              </button>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-6">
            {isHindi ? (
              <>भारत में बाघ संरक्षण की नई चुनौतियां: <span className="text-[#52b788]">सफलता के बाद अब भविष्य की सबसे बड़ी परीक्षा</span></>
            ) : (
              <>New Challenges in Tiger Conservation: <span className="text-[#52b788]">The Biggest Test After Success</span></>
            )}
          </h1>

          <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">{t.subtitle}</p>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-5 pt-6 border-t border-white/10">
            <div className="flex items-center gap-1.5 text-white/50 text-xs">
              <Calendar className="w-3.5 h-3.5" />
              <span>30 {isHindi ? "जुलाई" : "July"} 2026</span>
            </div>
            <div className="flex items-center gap-1.5 text-white/50 text-xs">
              <span>{isHindi ? "लेखक:" : "Author:"}</span>
              <span className="text-[#52b788] font-semibold">Dr. V.K. Bahuguna</span>
            </div>
            <a href="https://indiavistar.com/bharat-mein-bagh-sanrakshan-chunautiyan/" target="_blank" rel="noopener noreferrer" className="text-[#52b788] hover:text-white transition-colors inline-flex items-center gap-1 text-xs ml-auto">
              IndiaVistar.com <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* ── Dedication banner ── */}
      <div className="bg-amber-50 border-y border-amber-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-5">
          <p className="text-sm text-amber-800 leading-relaxed italic">{t.dedication}</p>
        </div>
      </div>

      {/* ── Pull quote ── */}
      <div className="bg-[#f0faf5] border-y border-[#52b788]/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 flex gap-4">
          <Quote className="w-8 h-8 text-[#52b788] shrink-0 mt-1" />
          <p className="text-lg sm:text-xl italic text-[#1b4332] font-medium leading-relaxed">{t.pullQuote}</p>
        </div>
      </div>

      {/* ── Article body ── */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-14 space-y-10">
        {t.sections.map((section, si) => (
          <div key={si} className="space-y-5">
            {section.heading && (
              <h2 className="text-2xl font-black text-gray-900 pt-2 border-t border-gray-100">{section.heading}</h2>
            )}
            {section.body.map((para, pi) => (
              <p key={pi} className={`text-[17px] leading-[1.9] text-gray-700 ${si === 0 && pi === 0 ? "first-letter:text-5xl first-letter:font-black first-letter:text-[#1b4332] first-letter:float-left first-letter:mr-2 first-letter:leading-none first-letter:mt-1" : ""}`}>
                {para}
              </p>
            ))}
          </div>
        ))}

        {/* Source card */}
        <div className="rounded-xl border border-gray-200 bg-white p-5 flex items-start gap-4">
          <ExternalLink className="w-5 h-5 text-[#52b788] shrink-0 mt-0.5" />
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">
              {isHindi ? "मूल स्रोत" : "Original Source"}
            </p>
            <a href="https://indiavistar.com/bharat-mein-bagh-sanrakshan-chunautiyan/" target="_blank" rel="noopener noreferrer" className="text-[#1b4332] hover:text-[#52b788] font-semibold text-sm transition-colors break-all">
              indiavistar.com — भारत में बाघ संरक्षण की नई चुनौतियां
            </a>
            <p className="text-xs text-gray-400 mt-1">
              {isHindi ? "प्रकाशित 30 जुलाई 2026 · डॉ. वी.के. बहुगुणा द्वारा" : "Published 30 July 2026 · By Dr. V.K. Bahuguna"}
            </p>
          </div>
        </div>
      </article>

      {/* ── Bottom nav ── */}
      <div className="border-t border-gray-100 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 flex items-center justify-between">
          <Link href="/articles" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4" />
            {isHindi ? "सभी लेख" : "Back to Articles"}
          </Link>
          <Link href="/leadership" className="text-sm font-medium text-[#52b788] hover:text-[#1b4332] transition-colors">
            {isHindi ? "डॉ. बहुगुणा की पूरी प्रोफ़ाइल →" : "View Dr. Bahuguna's full profile →"}
          </Link>
        </div>
      </div>

    </main>
  );
}
