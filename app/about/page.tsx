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
                <img src="/mission.png" alt="Tribal community empowerment" className="w-full h-[350px] object-cover" />
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
                <img src="/vision.png" alt="Community meetings and workshops" className="w-full h-[350px] object-cover" />
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

          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="shrink-0">
                  <div className="w-40 h-40 rounded-2xl overflow-hidden ring-4 ring-[#52b788]/20">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/author.png" alt="Dr. V.K. Bahuguna" className="w-full h-full object-cover object-top" />
                  </div>
                </div>
                
                <div className="flex-1 space-y-6">
                  {/* Header */}
                  <div>
                    <h3 className="text-3xl font-black text-gray-900 mb-2">Dr. V.K. Bahuguna</h3>
                    <p className="text-[#52b788] font-semibold text-lg mb-4">Chairman, Centre for Resource Management and Environment (CRE) & Jan Vikas Manch</p>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Indian Forest Service (IFS) (Retd.) · 1979 Batch · Former Director General, Indian Council of Forestry Research & Education (ICFRE) & Chancellor, Forest Research Institute (FRI) Deemed University. Winner of the prestigious Queen&apos;s Award for Forestry (2000) from Commonwealth Forestry Association, UK.
                    </p>
                  </div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {[
                      "Indian Forest Service (IFS) 1979", 
                      "Former DG ICFRE", 
                      "Queen's Award Winner", 
                      "Presidential Nominee",
                      "600+ Articles Published",
                      "Author of 2 Books"
                    ].map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full text-xs font-semibold bg-[#52b788]/10 text-[#1b4332]">{tag}</span>
                    ))}
                  </div>

                  {/* Show More Button */}
                  <div className="flex justify-center pt-6">
                    <a
                      href="/leadership"
                      className="inline-flex items-center gap-2 px-8 py-3 bg-[#52b788] text-white font-semibold rounded-full hover:bg-[#2d6a4f] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                      <Users className="w-4 h-4" />
                      Show More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Report Timeline */}
      <section id="progress" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Progress Report</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Centre for Resource Management and Environment (Formerly known as Foundation for Integrated Resource Management) — Progress Report for the period from the year 2011 to 2023.
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-12">

            {/* 2011-2012 */}
            <div className="border-l-4 border-[#52b788] pl-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-[#52b788] text-white text-sm font-semibold rounded-full">2011–2012</span>
                <span className="text-sm text-gray-500">Chairperson: Mrs. Usha Bahuguna</span>
              </div>

              <div className="space-y-4 text-gray-700 leading-relaxed text-[15px]">
                <p>
                  <strong>a)</strong> The Trust created a group of 235 Tribal artisans from different parts of the country and in coordination jointly with the ladies club of Forest Research Institute (FRI) created an outlet and Prerna self help group at FRI campus for sale of their products. The self help group put up a stall during International Poplar Convention during 30th October 2012 to 2nd November 2012 where the delegated of 35 countries purchased the items of the tribal and rural people and handicraft and other items worth more than 6 lakh Rupees was sold. The Prerna self help gave tremendous boost to the income of artisan as middle traders were removed. It also gave a fillip to forest conservation as most of the artisans were members of the Joint Forest Management Committees and Tribal sub groups. The work was appreciated by then Advisor to Prime Minister Shri TKA Nair and the then Chief Minister of Punjab Mr Prakash Singh Badal.
                </p>

                {/* Images for section a */}
                <div className="grid grid-cols-2 gap-3 my-4">
                  <div className="rounded-xl overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/trible.png" alt="Tribal artisan at work" className="w-full h-52 object-cover" />
                    <p className="text-xs text-gray-500 mt-1 px-1">A Tribal artisan at work</p>
                  </div>
                  <div className="rounded-xl overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/trible02.png" alt="Tribal artisans at the International Poplar Convention stall" className="w-full h-52 object-cover" />
                    <p className="text-xs text-gray-500 mt-1 px-1">Tribal artisans at the International Poplar Convention stall</p>
                  </div>
                </div>

                <p>
                  <strong>b)</strong> The Trust also organized a training programme for the Bamboo jewellery making for the 30 ladies self help groups from Uttarakhand. For this the Bamboo artist of Assam Ms Neera Sharma was invited to train the artisans.
                </p>
              </div>
            </div>

            {/* 2013-2014 */}
            <div className="border-l-4 border-[#52b788] pl-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-[#52b788] text-white text-sm font-semibold rounded-full">2013–2014</span>
                <span className="text-sm text-gray-500">Chairperson: Mrs. Usha Bahuguna</span>
              </div>

              <div className="space-y-4 text-gray-700 leading-relaxed text-[15px]">
                <p>
                  The Chairperson Mrs Usha Bahuguna organized the tribal ladies of Tripura who were well versed in Bamboo handicrafts. The Trust in cooperation with Tripura Forest Department arranged 5 training programmes at Agartala and Kanchanpur during 2013 and 2014 in which more than 150 tribal and non tribal ladies were trained in making jewellery from forest based seeds and Bamboo. The Tripura Japan International Cooperation Project was immensely benefited as these ladies created lot of new designs and models of livelihood generation based on forest and agricultural waste.
                </p>
                <p>
                  The Trust also organized Van Mahotsav during July 2013 Jirania and again in July 2014 at Udaipur. The Trust created a self help group of ladies for spreading awareness for wild life conservation and improvements in handicraft by treating the Bamboo species. For this the help of Indian Council of Forestry Research and Education&apos;s (ICFRE) Agartala Centre was taken. The feedback from people who were trained in Bamboo treatment was very good. These artisans were later on engaged by the Tripura Forest Corporation for making Bamboo furniture and are now earning good money.
                </p>

                {/* Photo Gallery */}
                <div className="grid grid-cols-3 gap-3 mt-4">
                  <div className="rounded-xl overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/jwellery.png" alt="Tribal jewellery making training" className="w-full h-44 object-cover hover:scale-105 transition-transform duration-300" />
                    <p className="text-xs text-gray-500 mt-1.5 text-center">Jewellery making training, Tripura</p>
                  </div>
                  <div className="rounded-xl overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/craft-making.png" alt="Craft making session" className="w-full h-44 object-cover hover:scale-105 transition-transform duration-300" />
                    <p className="text-xs text-gray-500 mt-1.5 text-center">Craft making session, Kanchanpur</p>
                  </div>
                  <div className="rounded-xl overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/machine.png" alt="Bamboo processing machine" className="w-full h-44 object-cover hover:scale-105 transition-transform duration-300" />
                    <p className="text-xs text-gray-500 mt-1.5 text-center">Bamboo processing, ICFRE Agartala</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2014-2018 */}
            <div className="border-l-4 border-[#52b788] pl-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-[#52b788] text-white text-sm font-semibold rounded-full">2014–2018</span>
                <span className="text-sm text-gray-500">Chairman: Dr. V.K. Bahuguna</span>
              </div>

              <div className="space-y-4 text-gray-700 leading-relaxed text-[15px]">
                <p>
                  Dr VK Bahuguna who promoted the Trust joined as Chairman of the Trust after Mrs Usha Bahuguna resigned and the activities of the Trust were shifted to Delhi and Uttarakhand.
                </p>
                <p>
                  <strong>a)</strong> The Trust had taken a decision to run it from the pension fund of Dr VK Bahuguna who had retired in May 2015. The Trust took up several activities in Uttarakhand, Madhya Pradesh and Utter Pradesh and visited several places to understand the problems of the people specially the socially downtrodden people. The Trust along with several other NGOs to create a confederation of voluntary agencies for taking up several issues with the State Government and met with the Chief Minister and the Governor on problem of Forest Fires. The Chairman wrote to National Green Tribunal (NGT) on forest fires while enclosing his article. The NGT took immediate action and directed the Centre and State governments to take immediate action as per our suggestions.
                </p>
                <p>
                  <strong>b)</strong> The Chairman has since then had regularly writing at least with 2 articles on a range of contemporary issues in the National News Paper &apos;Pioneer&apos; which is published from Delhi, Bhopal, Lucknow, Bhubaneswar, Ranchi, Raipur, Chandigarh, Dehradun, Hyderabad and Vijayawada. The issues raised were widely accepted and the relevant government departments were contacted for remedy. It is because of this reason that the Trust had refrained from seeking funds from any organization or government body.
                </p>
                <p>
                  <strong>c)</strong> The Trust had created contacted farmers in Dehradun, Almora, Haridwar, Pauri and Tehri Districts at various locations and in Bhopal, Sehore, Indore and Khandwa Districts. Chairman called a meeting of several NGOs working in Uttarakhand where he noticed poor governance and in this meeting it was decided to form a confederation of NGOs as &apos;Jan Vikas Manch&apos; (JVM) and took up their cause with the then Chief Minister Harish Rawat and his Ministers specially the issues of forest fires, krishi vikas yojna and animal resources. He also led a delegation of Jan Vikas Manch to the then Governor of the state on forest fires and also wrote to Chairman of the National Green Tribunal. NGT took up the matter and directed for submitting a plan of action for the forest fires.
                </p>
                <p>
                  <strong>d)</strong> In order to increase the income of farmers the Trust helped the Jan Vikas Manch Partner &apos;Bagwan Gramodhog Samiti&apos; in creating a Ganoderma fungus (used as medicine) lab which was inaugurated by the Honourable Agriculture Minister of Uttarakhand Mr Subodh Uniyal on 28th May 2017. The Trust also helped women self help groups of Sahaspur Block in Mushroom cultivation and a training programme was organized in November 2016 at Aamwala village of Sahaspur Block of Dehradun District. These women are earning at least five to six thousand every month from Mushroom cultivation. The Trust Member and former Chairperson Usha Bahuguna organized the ladies self help group from Rudraprayag and Dehradun Districts and helped them in marketing the hill Turmeric powder and Honey in Delhi and other markets which increased their income. The Chairman Dr VK Bahuguna also helped in propagating conservation of Indian cows and was elected as Chairman of the Kalpavriksh Foundation which is dedicated in promoting Indian cow breeds and their products under the Brand name &apos;Doctor Cow&apos;. The Chairman also took up the matter with ONGC Chairman for sanction of a Mushroom project under CSR to the Bagwan Gramodhog Samiti during 2018 and finally a project worth 18 lakh was sanctioned for Sahaspur village. The project is under implementation.
                </p>
                <p>
                  <strong>e)</strong> The Chairman was also invited by various agencies like Karnataka&apos;s Jungle and Lodges Corporation to deliver lecture on Ecotourism to the officers of Indian Forest Service (IFS); by Indian Institute of Forest Management Bhopal on livelihood policies; and as Chief Guest by Amity University on role of Non Timber Forest Products and Handicrafts in rural income generation; and by Indira Gandhi National Forest Academy as Chief Guest for the mid career training course for the IFS officers. The Government of India, Ministry of Environment, Forest and Climate Change appointed the Chairman as Member of the Indian Council of Forestry Research and Education (ICFRE) Society the top policy making body headed by the Minister of Environment, Forest and Climate Change. He was also appointed as President of India&apos;s nominee in the Executive Council of the Kashmir Central University by the President of India.
                </p>

                {/* Images for 2014-2018 */}
                <div className="grid grid-cols-3 gap-3 my-4">
                  <div className="rounded-xl overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/meeting_uk_agriculture_minister.png" alt="With Uttarakhand Agriculture Minister Subodh Uniyal, 28th May 2017" className="w-full h-44 object-cover hover:scale-105 transition-transform duration-300" />
                    <p className="text-xs text-gray-500 mt-1.5 text-center">With Uttarakhand Agriculture Minister Subodh Uniyal, 28th May 2017 — Inauguration of Ganoderma Lab</p>
                  </div>
                  <div className="rounded-xl overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/mushroom_growers.png" alt="Meeting with mushroom growers July 2018" className="w-full h-44 object-cover hover:scale-105 transition-transform duration-300" />
                    <p className="text-xs text-gray-500 mt-1.5 text-center">Meeting with Mushroom Growers, July 2018</p>
                  </div>
                  <div className="rounded-xl overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/mission.png" alt="Meeting with self help group Nov 2016" className="w-full h-44 object-cover hover:scale-105 transition-transform duration-300" />
                    <p className="text-xs text-gray-500 mt-1.5 text-center">Meeting with self help group, Nov 2016</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2018-2020 */}
            <div className="border-l-4 border-[#52b788] pl-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-[#52b788] text-white text-sm font-semibold rounded-full">2018–2020</span>
                <span className="text-sm text-gray-500">Chairman: Dr. V.K. Bahuguna</span>
              </div>

              <div className="space-y-4 text-gray-700 leading-relaxed text-[15px]">
                <p>
                  During this period the Chairman as Member of the ICFRE society attended two meetings of the society Chaired by the Minister of Environment, Forests and Climate Change during 2018 and 2020. The Chairman, Dr. V.K. Bahuguna in the meeting of society on 19th November 2019 emphasized on the importance of the stability of the forest ecosystems and suggested that All India Coordinated Project on Climate Change should be initiated by the ICFRE and funded by the CAMPA. He also suggested for taking up projects on forest hydrology, managing wild animals which are menace to agriculture, marketing of the technology to the farmers and provision of special funds for maintenance and renovation of the FRI building.
                </p>
                <p>
                  The next meeting was held on 9th April 2020 in which the ICFRE informed action taken on our request. It was stated in written statement &quot;The scheme &apos;Strengthening forestry research for ecological sustainability and productivity enhancement&apos; has been approved for funding under the National Compensatory Aforestation Fund (NCAF) which includes 31 All India Coordinated Research Projects (AICRPs). Following All India Coordinated Research Projects (AICRP) have been formulated on forest hydrology and climate Change (i) Assessment of water requirement of different forest tree species and its impact on subsoil moisture (ii) Study of climate driven effects on Indian forests through long term monitoring. Additional funds of Rs. 23.30 crore has been requested for rehabilitation of FRI main building and the façade lights of FRI in the revised budget estimates of FY 2019-20.&quot; In this meeting Dr Bahuguna raised the issue of starting an All India Coordinated project on Medicinal Plants and the Minister Mr Prakash Javadekar appreciated it and asked the DG ICFRE to take action.
                </p>
                <p>
                  The Chairman Dr VK Bahuguna was appointed by the President of India as his representative in the Executive Council of the Central University of Kashmir for a period of three years. He attended two meetings of the Executive Council of the Central University of Kashmir on 11th June and 29th July 2020 and gave valuable suggestion on Agenda items for smooth running of University resources. He was also nominated in the University Court and attended its 6th meeting on 26th August 2020 and contributed in many decisions of the University. These two bodies are responsible for taking all decisions about the administration of the Central University.
                </p>
                <p>
                  The Chairman of the Centre on the invitation of a few grass root level social workers visited a few districts of Madhya Pradesh from 10th October 2020 to 20th October 2020 to discuss issues on Environmental Conservation, assess the farmer&apos;s conditions and their approach to the newly passed three Acts on agriculture reforms and to find out the status of implementation of Forest Right Act 2006 in the Tribal belt of Madhya Pradesh. He was Chief Guest on 15th and 16th October 2020 in a group of Environmentalist who have felicitated many people for their work in Environmental conservation.
                </p>
                <p>
                  On 18th October he visited Jabalpur district&apos;s Dabhra Kurd Tribal village and held a meeting organized by Mr Bharat Namdeo of Jai Bharati Trust and Vanbasi Kalyan Ashram and discussed in detail about the problems faced by the people of these villages who have been vested with Community Forest Rights. On 21st October a review meeting was held and the social workers were guided how to approach the issue of management of these forests with government. He also visited Majgaoanwa and Khameria villages on 1st November 2020 and discussed the farmers&apos; issues with farmers and explained the benefits of these reform Act and also explained about the article he had written on 20th October in the Pioneer on agriculture. He also visited Kanha National Park from 26th to 28th October and raised the issue of climate change affecting the Park Environment in his article published in Pioneer on 4th November. On 5th and 6th November he visited Bandhavgarh National Park and found lot of management issue in its management. The Park is a poor cousin of Kanha National Park. The matter was taken up with the forest department.
                </p>
                <p>
                  On 7th November he visited Seoni and Dindori district with Mr Alok Misra President of Bharat Vikas Parishad and Mr Namdeo. He held a meeting at Shiv Dham with Anndata Kisan Sangh leaders Mr MM Srivastava and Mr Bharat Raman and addressed on, vertical farming, eco-tourism and eco-development projects for enhancing the income of farmer&apos;s income. On 8th November he visited with Mr Misra, Mr Bharat Raman and Mr Namdeo and one NGO the Baiga tribal village 75 km from Dindori at Dugna near Chada where around 75 Baiga villagers came to meet him where in details their issues on forest right Act&apos;s management were discussed.
                </p>
                <p>
                  On 10th November Dr Bahuguna requested the CCF Jabalpur Mr Mahle to meet with the people&apos;s representatives and accordingly a meeting was held with the CCF and DFO Jabalpur along with Mr Namdeo and other people. In this meeting CCF agreed to take action on Mr Namdeo&apos;s proposal for establishment of Van Dhan Centre at Kundam. On other issues CCF agreed to visit the Dabhra Kurd and will hold a meeting soon to develop a model scheme for management of Tendu patta by the community forestry committee. This visit to Madhya Pradesh was very enriching and the CRE will take up the matter with DG Forests in Delhi.
                </p>
                <p>
                  Apart from these the Chairman Dr VK Bahuguna on 12th October was invited and addressed online the IAS and Tripura Civil Services trainees at State Institute of Public Administration Agartala Tripura on present status of Agriculture in the country.
                </p>

                {/* Image for 2018-2020 */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
                  <div className="rounded-xl overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/meeting.png" alt="Meeting with Jabalpur Environment Group" className="w-full h-44 object-cover hover:scale-105 transition-transform duration-300" />
                    <p className="text-xs text-gray-500 mt-1.5 text-center">Meeting with Jabalpur Environment Group on 15th October 2020</p>
                  </div>
                  <div className="rounded-xl overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/vision.png" alt="With Paryavaran Club Jabalpur on 16th October 2020" className="w-full h-44 object-cover hover:scale-105 transition-transform duration-300" />
                    <p className="text-xs text-gray-500 mt-1.5 text-center">With Paryavaran Club Jabalpur on 16th October 2020</p>
                  </div>
                  <div className="rounded-xl overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/villagers.png" alt="Meeting with villagers at Dabra Kurd" className="w-full h-44 object-cover hover:scale-105 transition-transform duration-300" />
                    <p className="text-xs text-gray-500 mt-1.5 text-center">Meeting with villagers at Dabra Kurd (Jabalpur Forest Division) on 18th October 2020 on Forest Right Act and Farmers issues.</p>
                  </div>
                  <div className="rounded-xl overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/villagers_02.png" alt="Meeting with villagers at Dabra Kurd on 18th October on Forest Right Act and agriculture" className="w-full h-44 object-cover hover:scale-105 transition-transform duration-300" />
                    <p className="text-xs text-gray-500 mt-1.5 text-center">Meeting with villagers at Dabra Kurd on 18th October on Forest Right Act and agriculture</p>
                  </div>
                  <div className="rounded-xl overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/meeting02.png" alt="Meeting with Baiga Tribal on Forest Right Act problems" className="w-full h-44 object-cover hover:scale-105 transition-transform duration-300" />
                    <p className="text-xs text-gray-500 mt-1.5 text-center">Meeting with Baiga Tribal on Forest Right Act problems and Mr Alok Misra and Mr Bharat Namdeo at Daguna village of Dindori District on 8th November 2020</p>
                  </div>
                  <div className="rounded-xl overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/villagers_03.png" alt="Baiga women at Daguna 8th November 2020" className="w-full h-44 object-cover hover:scale-105 transition-transform duration-300" />
                    <p className="text-xs text-gray-500 mt-1.5 text-center">Baiga women at Daguna 8th November 2020</p>
                  </div>
                  <div className="rounded-xl overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/about_us_hero.png" alt="In a farmers field in Dindori District with Bharat Vikas Parishad President Mr Alok Misra" className="w-full h-44 object-cover hover:scale-105 transition-transform duration-300" />
                    <p className="text-xs text-gray-500 mt-1.5 text-center">In a farmers field in Dindori District with Bharat Vikas Parishad President Mr Alok Misra</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2021-2023 */}
            <div className="border-l-4 border-[#52b788] pl-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-[#52b788] text-white text-sm font-semibold rounded-full">2021–2023</span>
                <span className="text-sm text-gray-500">Chairman: Dr. V.K. Bahuguna</span>
              </div>

              <div className="space-y-4 text-gray-700 leading-relaxed text-[15px]">
                <p>
                  The Chairman during 2021-2022 continued to attend the Executive Council and University Court meeting of the Kashmir Central University as nominee of the President of India and contributed significantly in assisting the Vice-Chancellor to take several decisions in the administration of the University. The Chairman also on 22nd March 2021 took up matter with honourable President regarding additional funds needed for the building construction of the University and to waive off the upper limit fixed for estimating the cost as the site selected is waterlogged.
                </p>
                <p>
                  On 27th January met the Director, Incharge of National Health Programme of Uttarakhand Mrs Saroj Naithani about recognition of Sujok Therapy which is being promoted by Dr Subhash Chaudhury under the Smile Sujok Foundation a partner of International Sujok Foundation. Sujok therapy is very effective for muskuloskeletal, neuropathy, paralysis and autism and cerebral palsy. The Chairman also took up the matter with Uttarakhand government for recognizing this alternative therapy in the state for the benefit of patients as these diseases have no remedy in allopathy.
                </p>
                <p>
                  In the month of January 2021 Chairman visited the Jivamrit organic farmers Producers company Sherpur in Haridwar district and held a meeting how to promote the organic farming in Uttarakhand. The Chairman and the president of company Mr VP Singh met the Agriculture Minister Mr Subodh Uniyal in the first week of February 2021 and requested him to relax the norms for setting up factories to process sugar cane like in UP abolishing the need of minimum distance between two factories as sufficient raw material is available. After protracted negotiations the government allowed the relaxation and the farmers are getting help.
                </p>
                <p>
                  On 5th March Chairman Dr VK Bahuguna was invited by the DG State Institute of Public Administration Tripura Agartala to address the Tripura Civil Services 2020 batch Probationers on the issue of Agriculture crisis in the country due to the three farmers Acts passed by the parliament and consequent agitation by the farmers.
                </p>
                <p>
                  The Chairman based on his experience in civil service wrote a book &quot;Quest for Civility — an insight into Indian Babudom&quot;. The book was well received and published by Notion Press.
                </p>
                <p>
                  The Chairman in 2022 was appointed as Member of the working group by the National Commission on Schedule Tribe, Ministry of Tribal Affairs, Government of India. He attended three meetings in Delhi and gave his valuable suggestion. He also visited Mysore in July 2023 as a member of fact finding team to assess the implementation of Forest Rights Act 2006 in Karnataka.
                </p>
                <p>
                  On 7th July 2023 Chairman was invited to be the Chief Guest in Amity University on the seminar &quot;Trees are our Best Friend&quot;.
                </p>
                <p>
                  On 5th November 2023 Dr VK Bahuguna was invited by the DG of Uttarakhand Administrative Academy, Nainital to Chair a session on &quot;Climate Change and Disasters&quot;.
                </p>
                <p>
                  The Chairman has taken up issues in social media and twitter on the problems of the people. He has specially taken up the issue of unusual voter increase in Uttarakhand during last ten years with the Prime Minister and Election Commission. The Election Commission had set up committees to inquire into the matter in details. The reports are awaited. The Centre had also taken up issues of drugs and encroachment of forest lands and other government lands. The Uttarakhand government had on Centre&apos;s taking up the matter had started demolition of encroached structures.
                </p>

                {/* Image for 2021-2023 */}
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <div className="rounded-xl overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/vk_bahuguna_speech.png" alt="Dr. VK Bahuguna addressing a session" className="w-full h-44 object-cover hover:scale-105 transition-transform duration-300" />
                    <p className="text-xs text-gray-500 mt-1.5 text-center">Dr. VK Bahuguna addressing a session on Climate Change and Disasters, Uttarakhand Administrative Academy, Nainital, 5th November 2023</p>
                  </div>
                  <div className="rounded-xl overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/meeting03.png" alt="Discussing with Tribal People in Mysore, Karnataka" className="w-full h-44 object-cover hover:scale-105 transition-transform duration-300" />
                    <p className="text-xs text-gray-500 mt-1.5 text-center">Discussing with Tribal People in Mysore, Karnataka</p>
                  </div>
                  <div className="rounded-xl overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/amity.png" alt="Chief Guest at Amity University seminar" className="w-full h-44 object-cover hover:scale-105 transition-transform duration-300" />
                    <p className="text-xs text-gray-500 mt-1.5 text-center">Chief Guest at Amity University — &quot;Trees are our Best Friend&quot;, 7th July 2023</p>
                  </div>
                  <div className="rounded-xl overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/dg_uk.png" alt="With DG Uttarakhand Administrative Academy" className="w-full h-44 object-cover hover:scale-105 transition-transform duration-300" />
                    <p className="text-xs text-gray-500 mt-1.5 text-center">Chairing session on Climate Change and Disasters, Uttarakhand Administrative Academy, Nainital</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="bg-[#f0fdf4] border border-[#52b788]/20 rounded-xl p-6 mt-8">
              <p className="text-gray-700 leading-relaxed text-[15px]">
                <strong>In nutshell,</strong> the CRE had made big stride without any grants in the field of solving people&apos;s problems. The Chairman had written articles on contemporary issues every month in the national newspapers. He had also addressed the IAS officers trainees in Lal Bahadur Shastri Academy on Climate Change and resilient development administration.
              </p>
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