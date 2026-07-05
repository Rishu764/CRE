import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Phone, User, Calendar, Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "The Last Word in Forestry: A Portrait of VK Bahuguna – CRE",
  description:
    "A literary portrait of Dr. VK Bahuguna — IFS officer, conservationist, and Chairman of CRE — written by journalist Biswanath Bhattacharya.",
};

const paragraphs = [
  "Meeting VK Bahuguna this morning did not feel like meeting a man; it felt like entering a forest at dusk, where every tree knows a secret and every silence has a soul. Some encounters pass through life like wind over grass. This one stayed—dark, luminous, and unforgettable—like the last call of a bird disappearing into the deepening green.",
  "Vinod Kumar Bahuguna is not merely a name in Indian forestry; he is one of its enduring presences. Tall in body and taller still in moral stature, he carries the atmosphere of the forests he has served—patient, watchful, incorruptible. In an age when public life often bends before convenience, he remains straight-backed, like a deodar against a storm. Had he chosen the easier road of corruption, he could have become a ballooner—swollen, glittering, floating above consequence. But he did not. He chose instead the severe dignity of clean hands.",
  '"The clearest way into the Universe is through a forest wilderness," wrote John Muir. In VK Bahuguna, that sentence acquires flesh and breath. He seems to have walked so long among trees that something of their ancient composure has entered him. From Uttarakhand, where mountains teach restraint and rivers teach movement, he inherited a language deeper than speech—the language of birds, leaves, rain, bark, and wind.',
  "An Indian Forest Service officer of rare distinction, Bahuguna's career has moved through institutions and responsibilities that would overwhelm a lesser man. He has served as Director General of the Indian Council of Forestry Research and Education, Chancellor of the Forest Research Institute University, Chairman at the Centre for Resource Management and Environment, and Principal Secretary in the Government of Tripura. His academic journey, too, bears the mark of discipline and brilliance—from topping the MSc Zoology examination at HNB Garhwal University in 1975 to studying management at the University of Edinburgh.",
  "Yet titles cannot contain him. Designations are small lamps before a forest fire. To describe his contribution as significant is to dim the scale of it. Bahuguna belongs to that disappearing order of public servants for whom a file was not paper, a forest was not inventory, and the poor were not statistics. He understood that governance without compassion becomes machinery, and conservation without people becomes vanity.",
  "Tripura remembers him not as a passing officer but as a presence that entered its soil. His association with the state was professional, yes, but it was also intimate—almost devotional. Even after leaving office, he returns every few years with Usha Madam, not like a retired dignitary revisiting an old posting, but like a pilgrim returning to a shrine. The trees seem to recognize him. The roads, the villages, the hills, the underprivileged people he meets with such unaffected warmth—all appear to draw him back into an unfinished conversation.",
  "There is something haunting in such fidelity. Most men leave a place and carry away memories; Bahuguna leaves memory behind and returns to find it still breathing. At over seventy, his energy remains astonishing. He moves through Tripura with the urgency of one who knows that forests are living time, and that to neglect them is to wound the future. His tours are not ceremonial circuits. They are acts of listening.",
  "What makes VK Bahuguna extraordinary is not only his knowledge, though that knowledge is vast; not only his experience, though it is formidable; not only his administrative courage, though that too is undeniable. It is the absence of pretence. There is no theatrical humility in him, no borrowed solemnity, no inflated self-importance. He is what he appears to be: a man who has given his life to forests and has allowed the forests to refine him.",
  "In a time crowded with noise, he speaks with the quiet authority of one who has earned the right to be heard. In a world where many rise by bending, he stands upright. His incorruptibility is not an ornament added to his character; it is the root from which his character grows. That is why his presence unsettles and inspires at once. Clean men cast long shadows in unclean times.",
  "To meet him, therefore, is to be reminded that public service can still be sacred, that forests can still have guardians, and that integrity is not a dead word preserved in speeches. VK Bahuguna is a sage of the sal and the pine, a custodian of green memory, a witness to what India's forests have been and what they must yet become.",
  "I had the rare opportunity to interact with this giant of forestry, and the encounter itself felt like a privilege carved into memory. Yet a small incompleteness remained: I could not meet Usha Madam, as she was away in the city, and I also missed the chance of a photo session with him. Perhaps that absence, too, has its own quiet poignancy—for some meetings do not need a photograph to survive; they remain framed forever in the inner gallery of the heart.",
];

const finalEcho = "And so he remains, in the mind's twilight, the last word in forestry—not because silence follows him, but because every word after him must pass through the dark green tribunal of his life. Long after the meeting fades, long after the missed photograph becomes only a tender regret, his figure endures: upright, incorruptible, and luminous, like a solitary tree holding its ground against the gathering night.";

export default function ArticlePage() {
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
            All Articles
          </Link>
          <span className="text-xs text-gray-400 uppercase tracking-widest font-medium">Tribute · Feature</span>
        </div>
      </div>

      {/* ── Hero / Title block ── */}
      <div className="bg-[#1b4332] text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-20">

          {/* Category badge */}
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest bg-[#52b788]/20 border border-[#52b788]/30 text-[#52b788] mb-8">
            <User className="w-3 h-3" />Portrait
          </span>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-6">
            The Last Word in Forestry:{" "}
            <span className="text-[#52b788]">A Portrait of VK Bahuguna</span>
          </h1>

          {/* Author + date row */}
          <div className="flex flex-wrap items-center gap-5 pt-4 border-t border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#52b788]/20 flex items-center justify-center">
                <User className="w-4 h-4 text-[#52b788]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Biswanath Bhattacharya</p>
                <p className="text-xs text-white/40">Journalist & Writer, Tripura</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-white/40 text-xs">
              <Calendar className="w-3.5 h-3.5" />
              <span>June 2026</span>
            </div>
            <a
              href="https://tripurainfo.com/TripuraArticle/TRIPURAINFO-English-Article-By-Biswanath-Bhattacharya-283-27-06-2026-283.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#52b788] hover:text-white transition-colors ml-auto"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Originally published on TripuraInfo
            </a>
          </div>
        </div>
      </div>

      {/* ── Pull quote banner ── */}
      <div className="bg-[#f0faf5] border-y border-[#52b788]/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 flex gap-4">
          <Quote className="w-8 h-8 text-[#52b788] shrink-0 mt-1" />
          <p className="text-lg sm:text-xl italic text-[#1b4332] font-medium leading-relaxed">
            "He is what he appears to be: a man who has given his life to forests and has allowed the forests to refine him."
          </p>
        </div>
      </div>

      {/* ── Article body ── */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
        <div className="prose prose-lg max-w-none">

          {/* Body paragraphs */}
          <div className="space-y-7">
            {paragraphs.map((para, i) => (
              <p
                key={i}
                className={`text-[17px] leading-[1.9] text-gray-700 ${
                  i === 0
                    ? "text-[18px] font-medium text-gray-800 first-letter:text-5xl first-letter:font-black first-letter:text-[#1b4332] first-letter:float-left first-letter:mr-2 first-letter:leading-none first-letter:mt-1"
                    : ""
                }`}
              >
                {para}
              </p>
            ))}
          </div>

          {/* Final Echo section */}
          <div className="mt-14 pt-10 border-t-2 border-[#52b788]/30">
            <p className="text-xs font-bold uppercase tracking-widest text-[#52b788] mb-4">
              The Final Echo
            </p>
            <p className="text-[17px] leading-[1.9] text-gray-700 italic">
              {finalEcho}
            </p>
            <p className="mt-4 text-xs text-gray-400 italic">
              ( written long back )
            </p>
          </div>
        </div>
      </article>

      {/* ── Author card ── */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-16">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 flex flex-col sm:flex-row items-start gap-5">
          <div className="w-14 h-14 rounded-xl bg-[#1b4332]/10 flex items-center justify-center shrink-0">
            <User className="w-7 h-7 text-[#1b4332]" />
          </div>
          <div className="flex-1">
            <p className="text-xs font-bold uppercase tracking-widest text-[#52b788] mb-1">About the Author</p>
            <h3 className="text-lg font-black text-gray-900">Biswanath Bhattacharya</h3>
            <p className="text-sm text-gray-500 mt-1 leading-relaxed">
              Journalist and writer based in Tripura, known for his evocative portraits of public figures and nature. 
              A keen observer of both forest life and human character.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-4">
              <a
                href="tel:+919436120806"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#1b4332] hover:text-[#52b788] transition-colors"
              >
                <Phone className="w-4 h-4" />
                +91 94361 20806
              </a>
              <a
                href="https://tripurainfo.com/TripuraArticle/TRIPURAINFO-English-Article-By-Biswanath-Bhattacharya-283-27-06-2026-283.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#1b4332] hover:text-[#52b788] transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Read on TripuraInfo
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Back nav ── */}
      <div className="border-t border-gray-100 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 flex items-center justify-between">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Articles
          </Link>
          <Link
            href="/leadership"
            className="text-sm font-medium text-[#52b788] hover:text-[#1b4332] transition-colors"
          >
            View Dr. Bahuguna's full profile →
          </Link>
        </div>
      </div>

    </main>
  );
}
