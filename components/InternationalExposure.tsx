"use client";
import { Globe2, BookOpen, MapPin } from "lucide-react";

const visits = [
  { no: 1,  flag: "🇦🇺", country: "Australia",           year: "2013",    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80", desc: "Visited Australia as Head of the Delegation to inspect various mining areas, industry and Minerals Council of Australia from 02.03.2013 to 11.03.2013 in order to have bilateral cooperation on sustainable and environmentally sustainable mining." },
  { no: 2,  flag: "🇮🇹", country: "Italy (IPC-2012)",    year: "2012",    img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=600&q=80", desc: "Organized the 46th Executive Committee meeting and 24th session of International Poplar Commission (IPC-2012) from October 29th to 2nd November 2012. Chaired the Plenary session and the closing ceremony. Elected in the Executive Committee of IPC for 2012-2016. IPC is the only legal instrument in Forestry in the FAO." },
  { no: 3,  flag: "🇮🇹", country: "Italy (FAO Rome)",    year: "2012",    img: "https://images.unsplash.com/photo-1529260830199-42c24126f198?w=600&q=80", desc: "Visited FAO Rome, Italy from 23.09.2012 to 29.09.2012 to attend Twenty first Session of the Committee on Forestry (COFO) to Chair a session on \"Land Use Policies and Forestry\" on 25th September 2012." },
  { no: 4,  flag: "🇨🇳", country: "China (APAFRI)",      year: "2012",    img: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=600&q=80", desc: "Visited Guangzhou, China from 29.08.12 to 04.09.12 to attend APAFRI 18th Executive Committee Meeting and the Sixth General Assembly on 31st August 2012. Elected as Vice-Chairman of Asia Pacific Association of Forestry Research Institution (APAFRI) at its sixth assembly meeting held in Guangzhou, China on August 31st 2012." },
  { no: 5,  flag: "🇸🇪", country: "Sweden & USA",        year: "2012",    img: "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=600&q=80", desc: "Visited Sweden from 18.04.2012 to 21.04.2012 to oversee the training of Phase 3 MCT of Indian Forest Service (IFS) officer and held discussion with Director General, Swedish Forestry Agency and Vice Chancellor of SLU on bilateral cooperation. Visited USA from 22.04.2012 to 30.04.2012 and held discussions with World Bank and Smithsonian Conservation Biology Institute at Washington." },
  { no: 6,  flag: "🇰🇭", country: "Cambodia",            year: "2012",    img: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=600&q=80", desc: "Visited Siem Reap Cambodia from 31.1.2012 to 07.02.2012 to inspect the works under the project \"Preservation and conservation treatment for trees with active participation of local stakeholders at Ta Prohm Temple\" undertaken by the Scientist of FRI." },
  { no: 7,  flag: "🇨🇳", country: "China (Forestry Wk)", year: "2011",    img: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=600&q=80", desc: "Visited China from 6th November 2011 to 12th November 2011 to participate in the Second Asia-Pacific Forestry Week 2011, November 7-11, 2011. Organized a side event (jointly with IIFM) on Community Based Sustainable Forest Management on 10th November, 2011." },
  { no: 8,  flag: "🇬🇧", country: "United Kingdom",       year: "2011",    img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&q=80", desc: "Visited United Kingdom from 2nd September 2011 to 10th September 2011 under the UK-India landscape restoration project to sign the MOU with the DG of Forestry Commission for the Phase II." },
  { no: 9,  flag: "🇧🇹", country: "Bhutan",               year: "2011",    img: "https://images.unsplash.com/photo-1553856622-d1b352e9a211?w=600&q=80", desc: "Visited Thimphu, Bhutan from 10th August 2011 to 12th August 2011 to attend the SAARC Forestry Center Governing Board meeting." },
  { no: 10, flag: "🇳🇵", country: "Nepal (REDD+)",        year: "2011",    img: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80", desc: "Visited Kathmandu Nepal from 18th July 2011 to 23rd July 2011 to inspect the REDD+ work being undertaken under the climate change and held bilateral discussion with International Centre for Mountain Development (ICIMOD) for collaborative research programme." },
  { no: 11, flag: "🇳🇵", country: "Nepal (Seminar)",      year: "2009",    img: "https://images.unsplash.com/photo-1585016495481-91613b441b3e?w=600&q=80", desc: "Visited Kathmandu, Nepal on the invitation of Government of Nepal from 13th September 2009 to 20th September 2009 to deliver the Key note address in the 'International Seminar of Community Forestry'." },
  { no: 12, flag: "🇨🇳", country: "China (Bamboo)",       year: "2007",    img: "https://images.unsplash.com/photo-1564419320461-6870880221ad?w=600&q=80", desc: "Visited China from 7th July 2007 to 17th July 2007 as part of delegation under the International Tropical Timber Organization Tripura Project for studying the Bamboo Industrial Technology and Rural Development Models. Signed MOU for transfer of Bamboo technology." },
  { no: 13, flag: "🇹🇭", country: "Thailand (2007)",      year: "2007",    img: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=80", desc: "Visited Bangkok from 18th July 2007 to 19th July 2007 and studied the management of Crocodile parks near the capital city and the tourism based on crocodile show." },
  { no: 14, flag: "🇩🇪", country: "Germany",              year: "2004",    img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&q=80", desc: "Visited Bonn (Germany) from 30th May 2004 to 6th June, 2004 as a member of Indian delegation to attend the International Conference on Renewable Energy, 2004. The international conference of renewable energy sources was organized by Government of Germany." },
  { no: 15, flag: "🇨🇭", country: "Switzerland",          year: "2004",    img: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=600&q=80", desc: "Visited Interlaken, Switzerland from 25th April, 2004 to 1st May, 2004 to attend the International Conference as an expert on Community Forestry organized by Centre for International Forestry Research (CIFOR). The conference was organized as a pre-UNFF-IV Country level initiative on Decentralization of forestry management for environmental conservation." },
  { no: 16, flag: "🇦🇺", country: "Australia (Mining)",   year: "2004",    img: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=600&q=80", desc: "Led an eight member inter-ministerial delegation to Australia from 16th February, 2004 to 25th February, 2004. Visited Sydney, Weipa, Cairns and Perth and held bilateral talks with the Director General Resources, Western Australia. Visited the mine reclamation work for Bauxite, Coal and Iron ore at Weipa, Alcoa and Parabadroo." },
  { no: 17, flag: "🇨🇭", country: "Geneva (UNFF)",        year: "2003",    img: "https://images.unsplash.com/photo-1573108724029-4c46571d6490?w=600&q=80", desc: "Visited Geneva from May 25th to June 6th 2003 to attend the 3rd session of United Nations Forum on Forests (UNFF) on behalf of India, as Deputy Country leader participated in the discussion and negotiations with the international experts on Environment of different countries." },
  { no: 18, flag: "🇬🇹", country: "Guatemala",            year: "2003",    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80", desc: "Visited Guatemala from 1st February 2003 to 10th February 2003 and led Indian delegation in UNDP/FAO sponsored conference on Criteria and Indicators for Sustainable Forest and Environment Management." },
  { no: 19, flag: "🇲🇾", country: "Malaysia (FAO)",       year: "2002",    img: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=600&q=80", desc: "Visited Kuala Lumpur, Malaysia from January 21st-25th, 2002 for attending the meeting of National Focal Points for FAO on Sustainable Forest Management and presented paper on recent policy changes by Government of India." },
  { no: 20, flag: "🇬🇧", country: "UK (Queen's Award)",   year: "2001",    img: "https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=600&q=80", desc: "Visited United Kingdom of Great Britain from 25th May, 2001 to 31st May, 2001 under the Queen's Award Travel Fellowship and delivered talk on Community Forestry – who can be trusted? to the faculty members and students of University of Oxford at Oxford Forestry Institute and Edinburgh University." },
  { no: 21, flag: "🇿🇦", country: "South Africa",         year: "2001",    img: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=600&q=80", desc: "Visited South Africa from 20th May, 2001 to 24th May, 2001 under the Queen's Award Travel Fellowship. Delivered a talk on the Joint Forest Management and other Environmental Programmes of India to the senior officers of the South Africa Forest Department. Visited indigenous and community woodlots in East London and Umtata." },
  { no: 22, flag: "🇦🇺", country: "Australia (Keynote)",  year: "2001",    img: "https://images.unsplash.com/photo-1529108190281-9a4f620bc2d8?w=600&q=80", desc: "Visited Fremantle Perth in Australia from 16th April, 2001 to 23rd April, 2001 for delivering the Keynote address in the 16th Commonwealth Forestry Conference on the topic \"Protection, Production and Participation: Achieving balance\". Visited the Jarrah forest areas in Southern Australia." },
  { no: 23, flag: "🇲🇾", country: "Malaysia (IUFRO)",     year: "2000",    img: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=600&q=80", desc: "Visited Kuala Lumpur, Malaysia from 7th August, 2000 to 12th August, 2000 to attend the XXI IUFRO World Congress on Forestry. Received Queen's Award for forestry 2000, from the representative (British High Commissioner to Malaysia) of Queen of Great Britain on 11th August, 2000 in Hotel Pan Pacific." },
  { no: 24, flag: "🇸🇬", country: "Singapore",            year: "2000",    img: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600&q=80", desc: "Visited Singapore from 12th August, 2000 to 13th August, 2000 and saw the urban forestry and eco-tourism and environment." },
  { no: 25, flag: "🇮🇹", country: "Italy (Bellagio)",     year: "2000",    img: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=600&q=80", desc: "Visited Bellagio, Italy from 12th February, 2000 to 18th February, 2000 to attend a workshop organized by CIFOR and University of Maryland USA on \"Capturing the value of Forest Carbon for Sustainable Local Livelihood and Environmental Protection\". Presented the Indian perspective on JFM and its potential for capturing carbon and rural livelihood." },
  { no: 26, flag: "🇺🇸", country: "USA",                  year: "1999",    img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&q=80", desc: "Visited University of Florida, Gainesville, Florida, USA from 15th March, 1999 to 15th June, 1999 to attend a three-month experience-sharing course on \"Tree improvement\". Delivered lecture on the Indian forestry scenario to the faculty and students of Institute of Forest Conservation, University of Florida. Also attended a workshop on \"Forest Fire – a Friend or Foe\" organized by Society of American Foresters at Gainesville from April, 20-21, 1999." },
  { no: 27, flag: "🇮🇩", country: "Indonesia",            year: "1999",    img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80", desc: "Visited Bogor, Indonesia from February 16th to 21st, 1999 to attend the International Workshop on Forest Fire Management organized by University of Agriculture Bogor and ITTO. Presented Country Paper on \"Forest Fire strategies in India\". Visited the fire-affected forests in Kalimantan." },
  { no: 28, flag: "🇧🇪", country: "Belgium",              year: "1998",    img: "https://images.unsplash.com/photo-1491557345352-5929e343eb89?w=600&q=80", desc: "Visited Brussels, Belgium from April, 5th to 12th, 1998 to attend international workshop of 'Green Planners' on Sustainable Management of Resources and Environmental Amelioration. Presented Indian perspective on Sustainable Environmental Management." },
  { no: 29, flag: "🇹🇭", country: "Thailand (FAO)",       year: "1994",    img: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=80", desc: "Visited Bangkok, Thailand from October 24th to 28th, 1994 to present a lead paper on \"Barriers in Application of Forestry Research Results\" organized by FAO regional office, Bangkok." },
  { no: 30, flag: "🇬🇧", country: "UK (M.Sc.)",           year: "1987–88", img: "https://images.unsplash.com/photo-1464817739973-0128fe77aaa1?w=600&q=80", desc: "Visited United Kingdom of Great Britain under Colombo Plan for a period of one year (from 10.9.1987 to 10.10.1988) to attend the M.Sc (Resource Management) course at the University of Edinburgh. Studied the Scotch Industry, forest Industries, eco-tourism, sports and resource management centers of UK, France, Belgium and Netherlands." },
];

export default function InternationalExposure() {
  return (
    <section className="py-20" style={{ background: "#f8fafc" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border mb-4" style={{ background: "rgba(14,165,233,0.08)", borderColor: "rgba(14,165,233,0.25)", color: "#0ea5e9" }}>
            <Globe2 className="w-3.5 h-3.5" />Global Footprint
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-2">International Exposure</h2>
          <p className="text-gray-500 text-sm">30+ countries across 5 continents</p>

          {/* Stats */}
          <div className="flex justify-center gap-6 mt-6">
            {[{ n: "30", l: "Countries Visited" }, { n: "200+", l: "Publications" }, { n: "5", l: "Continents" }].map(s => (
              <div key={s.l} className="text-center">
                <div className="text-2xl font-black text-sky-600">{s.n}</div>
                <div className="text-xs text-gray-400">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visits.map((v) => (
            <div key={v.no} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              {/* Image banner */}
              <div className="relative h-40 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={v.img} alt={v.country} className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)" }} />
                {/* Number badge */}
                <div className="absolute top-3 left-3 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black text-white" style={{ background: "#0ea5e9" }}>
                  {v.no}
                </div>
                {/* Year badge */}
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[11px] font-bold bg-black/50 text-white">
                  {v.year}
                </div>
                {/* Country name over image */}
                <div className="absolute bottom-3 left-3 flex items-center gap-2">
                  <span className="text-2xl">{v.flag}</span>
                  <span className="text-sm font-black text-white drop-shadow">{v.country}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-center gap-1.5 mb-2">
                  <MapPin className="w-3 h-3 text-sky-500 shrink-0" />
                  <span className="text-[11px] font-semibold text-sky-600 uppercase tracking-wide">Visit #{v.no} · {v.year}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Publication note */}
        <div className="mt-12 rounded-2xl p-6 border border-sky-200 bg-sky-50 flex items-start gap-4">
          <BookOpen className="w-5 h-5 shrink-0 mt-0.5 text-sky-600" />
          <p className="text-sm text-gray-700">
            <span className="font-bold text-gray-900">Publication:</span> So far have published more than 200 papers and articles in international and national journals of repute on various aspects of natural resources management, socio-economic aspects of forest and natural resources management tribal people, policy and public administration etc.
          </p>
        </div>
      </div>
    </section>
  );
}
