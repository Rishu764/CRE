import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media – CRE",
  description:
    "Videos, interviews, talks, and press coverage featuring Dr. V.K. Bahuguna and the Centre for Resource Management and Environment.",
};

const videos = [
  {
    id: "flDmnN974uM",
    title: "Dr. V.K. Bahuguna — Talk / Interview",
    description:
      "Dr. V.K. Bahuguna, Chairman of CRE (Centre for Resource Management and Environment) and Former Director General of ICFRE, shares his views on forestry, environmental policy, and India's conservation challenges.",
    channel: "YouTube",
    category: "Interview",
    featured: true,
  },
];

function VideoCard({
  video,
}: {
  video: (typeof videos)[number];
}) {
  return (
    <div
      className={`rounded-3xl overflow-hidden border border-gray-200 bg-white ${
        video.featured ? "shadow-xl" : "shadow-sm hover:shadow-md"
      } transition-shadow`}
    >
      {/* Green accent bar */}
      <div className="h-1.5 bg-gradient-to-r from-[#1b4332] to-[#52b788]" />

      {/* YouTube embed */}
      <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${video.id}`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>

      {/* Info */}
      <div className="p-6 sm:p-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest bg-[#52b788]/10 text-[#1b4332]">
            {video.category}
          </span>
          {video.featured && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest bg-amber-50 text-amber-700 border border-amber-200">
              Featured
            </span>
          )}
        </div>
        <h2 className="text-xl font-black text-gray-900 mb-3 leading-snug">
          {video.title}
        </h2>
        <p className="text-sm text-gray-500 leading-relaxed">{video.description}</p>

        <div className="mt-5 pt-5 border-t border-gray-100 flex items-center justify-between">
          <span className="text-xs text-gray-400 flex items-center gap-1.5">
            {/* YouTube icon */}
            <svg className="w-4 h-4 text-red-500 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            {video.channel}
          </span>
          <a
            href={`https://www.youtube.com/watch?v=${video.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2d6a4f] hover:text-[#1b4332] transition-colors"
          >
            Watch on YouTube
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function MediaPage() {
  return (
    <main className="pt-20 min-h-screen bg-[#fafaf8]">

      {/* ── Hero ── */}
      <div className="bg-[#1b4332] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <p className="text-[#52b788] text-xs font-bold uppercase tracking-widest mb-4">
            Videos &amp; Press
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-2xl">
            Media
          </h1>
          <p className="mt-5 text-white/60 text-base max-w-xl leading-relaxed">
            Talks, interviews, and press coverage featuring Dr. V.K. Bahuguna and
            CRE&apos;s work in environmental conservation, forestry policy, and
            community development.
          </p>
        </div>
      </div>

      {/* ── Videos grid ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14">

        {/* Featured video — full width */}
        {videos.filter((v) => v.featured).map((video) => (
          <div key={video.id} className="mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-[#52b788] mb-5">
              Featured Video
            </p>
            <VideoCard video={video} />
          </div>
        ))}

        {/* Non-featured — 2-col grid */}
        {videos.filter((v) => !v.featured).length > 0 && (
          <>
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-5">
              More Videos
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {videos
                .filter((v) => !v.featured)
                .map((video) => (
                  <VideoCard key={video.id} video={video} />
                ))}
            </div>
          </>
        )}

        <p className="text-center text-sm text-gray-400 mt-14">
          More interviews and press coverage will be added here over time.
        </p>
      </div>
    </main>
  );
}
