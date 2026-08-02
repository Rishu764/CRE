"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  ExternalLink,
  Calendar,
  Tag,
  Quote,
  CheckCircle,
  AlertCircle,
  Languages,
} from "lucide-react";

/* ─── English content ─────────────────────────────────────── */
const en = {
  badge: "Leadership Update",
  title: (
    <>
      Dr. VK Bahuguna Resigns as President of{" "}
      <span className="text-[#52b788]">Uttarakhand Samata Party</span>
    </>
  ),
  subtitle:
    "Ahead of Uttarakhand Assembly elections, Dr. Bahuguna stepped down after deep reflection, citing organisational weaknesses — reaffirming his continued commitment to CRE and Jan Vikas Manch.",
  pullQuote:
    '"I will continue to serve through the Centre for Resource Management and Environment and Uttarakhand Jan Vikas Manch — working for environmental conservation, good governance, balanced development, and the rights of the people of Uttarakhand."',
  sections: [
    {
      heading: null,
      body: [
        "Dehradun. A significant development has unfolded in Uttarakhand's regional politics just ahead of the state assembly elections. Dr. V.K. Bahuguna, President of the Uttarakhand Samata Party, has resigned from his post. In a two-page resignation letter issued on 8 July 2026, he cited organisational weaknesses, inactive leadership, shortage of workers, and the prevailing political circumstances as reasons for his decision.",
        "The resignation comes at a time when election preparations across Uttarakhand are in full swing, with all parties working to strengthen their organisations before the vote.",
      ],
    },
    {
      heading: "What Dr. Bahuguna Said in His Resignation",
      body: [
        "In his resignation letter, Dr. Bahuguna stated that after prolonged reflection he had decided to vacate the post of President. He recalled that the party was founded in 2021 with the objective of protecting Uttarakhand's cultural identity, geographical integrity, and constitutional equality.",
        "He wrote that as President he had dedicated his full honesty, time, energy, and experience to the party — but the expected organisational support never materialised.",
      ],
    },
  ],
  resignationHeading: "Key Reasons Cited for Resignation",
  resignationReasons: [
    "Most office bearers remained inactive and did not fulfil their responsibilities",
    "The party failed to build a strong grassroots organisation",
    "Youth engagement and recruitment remained insufficient",
    "Persistent shortage of financial resources",
    "Most senior members were retired officials with limited time for active politics",
    "The burden of leadership rested on only two or three individuals — unsustainable for any political party",
  ],
  achievementsHeading: "Achievements Highlighted During His Tenure",
  achievementsIntro:
    "In the same letter, Dr. Bahuguna also listed several issues that the party successfully brought into mainstream political discourse under his presidency:",
  achievements: [
    "Demanded geographical delimitation for hill districts of Uttarakhand",
    "Raised the issue of verification of residents in border areas",
    "Opposed illegal encroachments on forest and government land",
    "Campaigned against unauthorised constructions",
    "Led movement against external drug mafias and criminal networks",
    "Championed the cultural identity and geographical integrity of Uttarakhand",
  ],
  nextHeading: "What Will Dr. Bahuguna Do Next?",
  nextBody: [
    <>
      Dr. Bahuguna was unequivocal: he is not stepping away from public life. He stated that he will
      continue his work through social organisations — particularly the{" "}
      <strong className="text-[#1b4332]">
        Centre for Resource Management and Environment (CRE)
      </strong>{" "}
      and the <strong className="text-[#1b4332]">Uttarakhand Jan Vikas Manch</strong> — focusing on
      environmental conservation, good governance, balanced development, and the rights of
      Uttarakhand&apos;s people.
    </>,
    "He also affirmed that his struggle for the protection of the state's cultural identity, natural resources, and geographical integrity will continue unabated.",
  ],
  impactHeading: "Political Impact Ahead of Elections",
  impactIntro:
    "This resignation is being seen as a significant development for Uttarakhand's regional politics ahead of the assembly elections. Political analysts observe that:",
  impactPoints: [
    "It may affect Uttarakhand Samata Party's election preparedness",
    "The party will need to find new leadership urgently",
    "New political equations among regional parties may emerge",
    "Other political parties are likely to attempt to capitalise on the situation",
  ],
  impactOutro:
    "No official announcement regarding a new party president has been made at the time of writing.",
  conclusionHeading: "Conclusion",
  conclusion:
    "Dr. Bahuguna's resignation is not simply a withdrawal from a post — it reflects the structural challenges that small regional parties face in India: limited resources, weak organisation, and fierce electoral competition. Yet his decision to redouble efforts through CRE and Jan Vikas Manch signals that his commitment to Uttarakhand's people and environment remains as resolute as ever.",
};

/* ─── Hindi content ──────────────────────────────────────── */
const hi = {
  badge: "नेतृत्व अपडेट",
  title: (
    <>
      उत्तराखंड समता पार्टी के अध्यक्ष{" "}
      <span className="text-[#52b788]">डॉ. वीके बहुगुणा का इस्तीफा</span>
    </>
  ),
  subtitle:
    "विधानसभा चुनाव से ठीक पहले राज्य की क्षेत्रीय राजनीति में बड़ा घटनाक्रम — डॉ. बहुगुणा ने पद छोड़ा, लेकिन CRE व जन विकास मंच के माध्यम से सेवा जारी रखने का संकल्प दोहराया।",
  pullQuote:
    '"अब मैं सेंटर फॉर रिसोर्स मैनेजमेंट एंड एनवायरमेंट तथा उत्तराखंड जन विकास मंच के माध्यम से पर्यावरण संरक्षण, सुशासन, संतुलित विकास और उत्तराखंड के लोगों के अधिकारों के लिए काम करता रहूँगा।"',
  sections: [
    {
      heading: null,
      body: [
        "देहरादून। उत्तराखंड विधानसभा चुनाव से ठीक पहले राज्य की क्षेत्रीय राजनीति में बड़ा घटनाक्रम सामने आया है। उत्तराखंड समता पार्टी के अध्यक्ष डॉ. वी.के. बहुगुणा ने अपने पद से इस्तीफा दे दिया है। 8 जुलाई 2026 को जारी दो पृष्ठों के इस्तीफे में उन्होंने पार्टी के संगठनात्मक ढांचे, निष्क्रिय नेतृत्व, कार्यकर्ताओं की कमी और राजनीतिक परिस्थितियों का हवाला देते हुए पद छोड़ने की घोषणा की।",
        "यह इस्तीफा ऐसे समय आया है जब राज्य में विधानसभा चुनाव की तैयारियां तेज हो चुकी हैं और सभी दल अपने संगठन को मजबूत करने में जुटे हैं।",
      ],
    },
    {
      heading: "इस्तीफे में क्या बोले डॉ. वीके बहुगुणा?",
      body: [
        "अपने इस्तीफा पत्र में डॉ. बहुगुणा ने कहा कि उन्होंने लंबे आत्ममंथन के बाद अध्यक्ष पद छोड़ने का निर्णय लिया है। उनका कहना है कि वर्ष 2021 में पार्टी की स्थापना उत्तराखंड की सांस्कृतिक अस्मिता, भौगोलिक अखंडता और संवैधानिक समानता की रक्षा के उद्देश्य से की गई थी।",
        "उन्होंने लिखा कि अध्यक्ष के रूप में उन्होंने पूरी ईमानदारी, समय, ऊर्जा और अनुभव पार्टी को समर्पित किया, लेकिन अपेक्षित संगठनात्मक सहयोग नहीं मिल पाया।",
      ],
    },
  ],
  resignationHeading: "इस्तीफे की प्रमुख वजहें",
  resignationReasons: [
    "अधिकांश पदाधिकारी सक्रिय नहीं रहे",
    "संगठन विस्तार की जिम्मेदारी नहीं निभाई गई",
    "युवाओं को जोड़ने में पार्टी सफल नहीं हो सकी",
    "आर्थिक संसाधनों की कमी बनी रही",
    "अधिकांश जिम्मेदार लोग सेवानिवृत्त अधिकारी हैं, जिनके पास पर्याप्त समय नहीं था",
    "केवल दो-तीन लोगों के भरोसे कोई भी राजनीतिक दल लंबे समय तक सफल नहीं हो सकता",
  ],
  achievementsHeading: "उनके कार्यकाल की उपलब्धियां",
  achievementsIntro:
    "इस्तीफे में डॉ. बहुगुणा ने अपने कार्यकाल की कई उपलब्धियों का भी उल्लेख किया है। उन्होंने दावा किया कि उनकी अध्यक्षता में पार्टी ने कई महत्वपूर्ण जनहित के मुद्दों को मुख्यधारा की राजनीति में लाने का प्रयास किया:",
  achievements: [
    "पर्वतीय क्षेत्रों के लिए भौगोलिक आधार पर परिसीमन की मांग",
    "सीमांत क्षेत्रों के लोगों के सत्यापन का मुद्दा",
    "वन एवं सरकारी भूमि पर अवैध कब्जों का विरोध",
    "अवैध निर्माणों के खिलाफ आवाज",
    "बाहरी ड्रग माफिया और आपराधिक गतिविधियों के खिलाफ अभियान",
    "उत्तराखंड की सांस्कृतिक पहचान और भौगोलिक अखंडता की रक्षा",
  ],
  nextHeading: "अब क्या करेंगे डॉ. वीके बहुगुणा?",
  nextBody: [
    <>
      डॉ. बहुगुणा ने स्पष्ट किया है कि वे सार्वजनिक जीवन से अलग नहीं हो रहे हैं। उन्होंने कहा
      कि अब वे{" "}
      <strong className="text-[#1b4332]">
        सेंटर फॉर रिसोर्स मैनेजमेंट एंड एनवायरमेंट (CRE)
      </strong>{" "}
      तथा{" "}
      <strong className="text-[#1b4332]">उत्तराखंड जन विकास मंच</strong> जैसे सामाजिक संगठनों के
      माध्यम से पर्यावरण संरक्षण, सुशासन, संतुलित विकास और उत्तराखंड के लोगों के अधिकारों के
      लिए काम करते रहेंगे।
    </>,
    "उन्होंने यह भी कहा कि राज्य की सांस्कृतिक पहचान, प्राकृतिक संसाधनों और भौगोलिक अखंडता की रक्षा के लिए उनका संघर्ष जारी रहेगा।",
  ],
  impactHeading: "चुनाव से पहले राजनीतिक असर",
  impactIntro:
    "उत्तराखंड विधानसभा चुनाव से पहले यह इस्तीफा क्षेत्रीय राजनीति के लिए महत्वपूर्ण माना जा रहा है। राजनीतिक विश्लेषकों का मानना है कि —",
  impactPoints: [
    "इससे उत्तराखंड समता पार्टी की चुनावी तैयारियों पर असर पड़ सकता है",
    "संगठन को नया नेतृत्व तलाशना होगा",
    "क्षेत्रीय दलों के बीच नए राजनीतिक समीकरण बनने की संभावना बढ़ सकती है",
    "अन्य राजनीतिक दल इस स्थिति का चुनावी लाभ उठाने की कोशिश कर सकते हैं",
  ],
  impactOutro:
    "अभी तक पार्टी की ओर से नए अध्यक्ष को लेकर कोई आधिकारिक घोषणा नहीं की गई है।",
  conclusionHeading: "निष्कर्ष",
  conclusion:
    "उत्तराखंड विधानसभा चुनाव से पहले डॉ. वीके बहुगुणा का इस्तीफा राज्य की राजनीति में नई चर्चा का विषय बन गया है। उनके पत्र में संगठनात्मक कमियों और राजनीतिक परिस्थितियों का खुलकर उल्लेख किया गया है। आने वाले दिनों में पार्टी की अगली रणनीति और नए नेतृत्व पर सभी की नजर रहेगी।",
};

/* ─── Page component ─────────────────────────────────────── */
export default function ArticlePage() {
  const [lang, setLang] = useState<"en" | "hi">("en");
  const t = lang === "en" ? en : hi;
  const isHindi = lang === "hi";

  return (
    <main className="min-h-screen bg-[#fafaf8]">

      {/* ── Top bar ── */}
      <div className="pt-20 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-5 flex items-center justify-between gap-4">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {isHindi ? "सभी लेख" : "All Articles"}
          </Link>
          <span className="text-xs text-gray-400 uppercase tracking-widest font-medium">
            News · Politics
          </span>
        </div>
      </div>

      {/* ── Hero ── */}
      <div className="bg-[#1b4332] text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-20">

          {/* Badge + language toggle row */}
          <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest bg-[#52b788]/20 border border-[#52b788]/30 text-[#52b788]">
              <Tag className="w-3 h-3" />{t.badge}
            </span>

            {/* Language toggle */}
            <div className="flex items-center gap-1 bg-white/10 rounded-full p-1">
              <button
                onClick={() => setLang("en")}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  lang === "en"
                    ? "bg-[#52b788] text-white shadow"
                    : "text-white/60 hover:text-white"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang("hi")}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                  lang === "hi"
                    ? "bg-[#52b788] text-white shadow"
                    : "text-white/60 hover:text-white"
                }`}
              >
                <Languages className="w-3 h-3" />
                हिंदी
              </button>
            </div>
          </div>

          {/* Title */}
          <h1
            className={`text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-6 ${
              isHindi ? "font-[system-ui]" : ""
            }`}
          >
            {t.title}
          </h1>

          <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
            {t.subtitle}
          </p>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-5 pt-6 border-t border-white/10">
            <div className="flex items-center gap-1.5 text-white/50 text-xs">
              <Calendar className="w-3.5 h-3.5" />
              <span>8 {isHindi ? "जुलाई" : "July"} 2026</span>
            </div>
            <div className="flex items-center gap-1.5 text-white/50 text-xs">
              <span>{isHindi ? "स्रोत:" : "Source:"}</span>
              <a
                href="https://roshangaur.com/2026/07/08/dr-vk-bahuguna-resigned-as-uttarakhand-samata-party/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#52b788] hover:text-white transition-colors inline-flex items-center gap-1"
              >
                RoshanGaur.com <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Pull quote ── */}
      <div className="bg-[#f0faf5] border-y border-[#52b788]/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 flex gap-4">
          <Quote className="w-8 h-8 text-[#52b788] shrink-0 mt-1" />
          <p className="text-lg sm:text-xl italic text-[#1b4332] font-medium leading-relaxed">
            {t.pullQuote}
          </p>
        </div>
      </div>

      {/* ── Article body ── */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-14 space-y-10">

        {/* Intro + What he said */}
        {t.sections.map((section, si) => (
          <div key={si} className="space-y-4">
            {section.heading && (
              <h2 className="text-2xl font-black text-gray-900">{section.heading}</h2>
            )}
            {section.body.map((para, pi) => (
              <p
                key={pi}
                className={`text-[17px] leading-[1.9] text-gray-700 ${
                  si === 0 && pi === 0
                    ? "first-letter:text-5xl first-letter:font-black first-letter:text-[#1b4332] first-letter:float-left first-letter:mr-2 first-letter:leading-none first-letter:mt-1"
                    : ""
                }`}
              >
                {para}
              </p>
            ))}
          </div>
        ))}

        {/* Resignation reasons */}
        <div className="rounded-2xl border border-red-100 bg-red-50/50 p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-5">
            <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
            <h3 className="text-lg font-black text-gray-900">{t.resignationHeading}</h3>
          </div>
          <ul className="space-y-3">
            {t.resignationReasons.map((reason, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed">
                <span className="shrink-0 w-5 h-5 rounded-full bg-red-100 text-red-500 text-xs font-black flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                {reason}
              </li>
            ))}
          </ul>
        </div>

        {/* Achievements */}
        <div className="space-y-4">
          <h2 className="text-2xl font-black text-gray-900">{t.achievementsHeading}</h2>
          <p className="text-[17px] leading-[1.9] text-gray-700">{t.achievementsIntro}</p>
          <div className="rounded-2xl border border-[#52b788]/20 bg-[#f0faf5] p-6 sm:p-8">
            <ul className="space-y-3">
              {t.achievements.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed">
                  <CheckCircle className="w-4 h-4 text-[#52b788] shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* What next */}
        <div className="space-y-4">
          <h2 className="text-2xl font-black text-gray-900">{t.nextHeading}</h2>
          {t.nextBody.map((para, i) => (
            <p key={i} className="text-[17px] leading-[1.9] text-gray-700">
              {para}
            </p>
          ))}
        </div>

        {/* Political impact */}
        <div className="space-y-4">
          <h2 className="text-2xl font-black text-gray-900">{t.impactHeading}</h2>
          <p className="text-[17px] leading-[1.9] text-gray-700">{t.impactIntro}</p>
          <ul className="space-y-3 pl-1">
            {t.impactPoints.map((point, i) => (
              <li key={i} className="flex items-start gap-3 text-[16px] text-gray-600 leading-relaxed">
                <span className="shrink-0 mt-2.5 w-1.5 h-1.5 rounded-full bg-[#52b788]" />
                {point}
              </li>
            ))}
          </ul>
          <p className="text-[17px] leading-[1.9] text-gray-700">{t.impactOutro}</p>
        </div>

        {/* Conclusion */}
        <div className="space-y-4">
          <h2 className="text-2xl font-black text-gray-900">{t.conclusionHeading}</h2>
          <p className="text-[17px] leading-[1.9] text-gray-700">{t.conclusion}</p>
        </div>

        {/* Source card */}
        <div className="rounded-xl border border-gray-200 bg-white p-5 flex items-start gap-4">
          <ExternalLink className="w-5 h-5 text-[#52b788] shrink-0 mt-0.5" />
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">
              {isHindi ? "मूल स्रोत" : "Original Source"}
            </p>
            <a
              href="https://roshangaur.com/2026/07/08/dr-vk-bahuguna-resigned-as-uttarakhand-samata-party/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1b4332] hover:text-[#52b788] font-semibold text-sm transition-colors break-all"
            >
              roshangaur.com — Dr. VK Bahuguna Resigned as Uttarakhand Samata Party President
            </a>
            <p className="text-xs text-gray-400 mt-1">
              {isHindi ? "प्रकाशित 8 जुलाई 2026 · मूल लेख हिंदी में" : "Published 8 July 2026 · Original article in Hindi"}
            </p>
          </div>
        </div>

      </article>

      {/* ── Bottom nav ── */}
      <div className="border-t border-gray-100 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 flex items-center justify-between">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {isHindi ? "सभी लेख" : "Back to Articles"}
          </Link>
          <Link
            href="/leadership"
            className="text-sm font-medium text-[#52b788] hover:text-[#1b4332] transition-colors"
          >
            {isHindi ? "डॉ. बहुगुणा की पूरी प्रोफ़ाइल →" : "View Dr. Bahuguna's full profile →"}
          </Link>
        </div>
      </div>

    </main>
  );
}
