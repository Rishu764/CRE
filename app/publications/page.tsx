"use client";

import { useState } from "react";
import { BookOpen, Newspaper, FileText, BookMarked, Search, Calendar, Tag } from "lucide-react";

const tabs = [
  { id: "policy", label: "Policy & Institutional", icon: FileText, color: "#1b4332" },
  { id: "technical", label: "Technical Research", icon: BookOpen, color: "#2d6a4f" },
  { id: "newspaper", label: "Columnist & Freelance YouTube Journalism", icon: Newspaper, color: "#e9c46a" },
  { id: "books", label: "Books & Bulletins", icon: BookMarked, color: "#52b788" },
];

const policyPapers = [
  { no: 1, ref: "VK Bahuguna et al. (2016). Revisiting Forest Types of India. International Forestry Review. Vol 18(2): 135-143." },
  { no: 2, ref: "Bahuguna VK, R. Das & Sanjay Singh (2013). Integrated Land Development in Forest Fringe Villages: The Khunti Model. Indian Forester 139(2), 99-108." },
  { no: 3, ref: "Bahuguna VK, Bisht NS (2013). Valuation of Ecosystem goods and services from forests in India. Indian Forester, Vol.139(1), 1-13." },
  { no: 4, ref: "Bahuguna VK, Hillaluddin & Sikka AK (2012). Management of Fringe forests for rural livelihood and forest conservation. Indian Forester, Vol.138(8), 671-681." },
  { no: 5, ref: "Bahuguna VK & Hillaluddin (2011). Policy analysis, implementation and future prospects of JFM in India. Indian Forester, Vol.137(8): 11-20." },
  { no: 6, ref: "Bahuguna VK & Hillaluddin (2011). Contribution of JFM in conservation of forests, climate change and poverty alleviation. Indian Forester, Vol.137(2): 154-163." },
  { no: 7, ref: "Bahuguna VK (2009). Community Forest Management in Asia — review of policy programmes. Keynote address, International Seminar on Community Forestry, Pokhara, Nepal." },
  { no: 8, ref: "Bahuguna VK (2006). Sustainable Forest Management in India — a Critical Analysis. Invitation Paper, ITTO Mission to India." },
  { no: 9, ref: "Bahuguna VK (2006). Natural Rubber in Tripura (base line data and future planning). Tripura Rubber Mission Technical Bulletin: 1-100." },
  { no: 10, ref: "Bahuguna VK (2005). Participatory Forest Management in India: sharing governance with the people. Commonwealth Forestry Newsletter, Vol 31, Dec 2005: 12-13." },
  { no: 11, ref: "Bahuguna VK (2005). Seize the moment — create long-term plans to ensure tribal livelihood. Down to Earth, Sep 30, 2005: 51." },
  { no: 12, ref: "Bahuguna VK, Saigal S & Bose S (2004). Participatory Forestry and Poverty Alleviation. South Asian workshop, FAO/MoEF/ATREE, New Delhi, March 10-12, 2004." },
  { no: 13, ref: "Bahuguna VK (2003). Root to Canopy: an overview. In 'Root to Canopy' edited by Bahuguna VK, Mitra K, Capistrano D & Saigal S. New Delhi: 15-24." },
  { no: 14, ref: "Bahuguna VK & Updahyay A (2004). Monitoring needs for JFM: The perspective of policy makers. In Root to Canopy, CFA-Winrock Publication: 309-316." },
  { no: 15, ref: "Bahuguna VK (2002). Forest Policy initiatives in India over the last few years. FAO Regional Office Bangkok, Workshop Proceedings No.2, April 2002: 58-62." },
  { no: 16, ref: "Bahuguna VK & Updahyay A (2002). Forest Fires in India — Policy initiatives for community participation. International Forestry Review, 4(2): 122-127." },
  { no: 17, ref: "Bahuguna VK (2002). New State of Uttaranchal: A vision for Development and Prosperity. In Geodynamics and Environment Management of Himalayas. University of Garhwal: 29-35." },
  { no: 18, ref: "Bahuguna VK (2002). Monitoring of Community Forestry Programme in India. Keynote paper, National Seminar on JFM, West Bengal Forest Dept. & Winrock International, Calcutta." },
  { no: 19, ref: "Bahuguna VK (2001). Production, Protection and Participation: An Indian perspective. Keynote address, 16th Commonwealth Forestry Conference, Perth, Australia: 1-15." },
  { no: 20, ref: "Bahuguna VK & Dr. Satendra (2001). Forest Fire situation in India. International Forest Fire Newsletter, No.26, January 2002: p.23." },
  { no: 21, ref: "Bahuguna VK (2000). Joint Forest Management in India — current status and research needs. Lead paper, International Workshop on Decade of JFM, New Delhi, June 19-20, 2000." },
  { no: 22, ref: "Bahuguna VK (2000). Joint Forest Management — An instrument for Sustainable Forest Management. In India's Forest beyond 2002, CFA India Publication: 60-66." },
  { no: 23, ref: "Bahuguna VK (2000). Forests in the Economy of the rural poor — An estimation of the dependency level. AMBIO Vol.29 No.3, March 2000: 126-129." },
  { no: 24, ref: "Bahuguna VK (1999). Forest Fire Prevention & Control Strategies in India. International Forest Fire News of FAO, UN: 5-9." },
  { no: 25, ref: "Bahuguna VK & S. Raghavan (1999). National level Criteria and Indicators for Sustainable management of Forest. International Workshop, UNEP/FAO/ITTO at IIFM Bhopal." },
  { no: 26, ref: "Bahuguna VK (1997). People's institution in Forest Resource Management: An experience from Tripura. Government of Tripura Publication." },
  { no: 27, ref: "Bahuguna VK (1997). Management Research in Forestry Sector — Prospects and Possibilities. Van Vigyan, Vol 35(3&4): 178-180." },
  { no: 28, ref: "Bahuguna VK (1997). Extension techniques for community participation and institution building. Van Vigyan, Vol 35(2): 85-94." },
  { no: 29, ref: "Bahuguna VK (1997). Joint Forest Management: Emerging issues. Indian Forester, Vol.123(6): 372-376." },
  { no: 30, ref: "Bahuguna VK (1997). An Estimation of the Dependency of the poor people. Proceedings of international workshop, ICFRE (UNDP), Dehra Dun, April 25-26, 1997: 12-18." },
  { no: 31, ref: "Bahuguna VK (1995). Joint Forest Management in Tripura — A profile of activities in the Northern Circle. JFM Network meeting, SPWD, New Delhi, Nov 29-Dec 1, 1995." },
  { no: 32, ref: "Bahuguna VK (1995). Collective Forest Management in Tripura — Turning foes into friends into Resource Managers. Training-cum-Workshop on JFM, Kumarghat, March 26-28, 1995." },
  { no: 33, ref: "Bahuguna VK (1995). Future prospect of Forestry in Tripura. Journal of Tripura Forest Department Aranyak Vol.No.93: 3-11." },
  { no: 34, ref: "Bahuguna VK (1994). Forestry in Tripura: Problems and prospects. Lead Article in GyanBichitra, a Scientific Magazine on Forestry." },
  { no: 35, ref: "Bahuguna VK (1994). Joint Forest Management in Tripura. Lead paper, Workshop on Forest people interface in the North-East, Shillong, May 25, 1994." },
  { no: 36, ref: "Bahuguna VK, Vinoy Luthra & BMS Rathor (1994). Collective Forest Management in India. Ambio, Vol-23, No-4-5, July 1994: 269-273." },
  { no: 37, ref: "Bahuguna VK (1993). Peoples participation in Forest Management and Sharing. Regional Centre, National Afforestation and Eco-development Board, IIFM, Bhopal." },
  { no: 38, ref: "Bahuguna VK (1993). Nursery Technology — and its Management. Regional Centre, National Afforestation and Eco-development Board, IIFM, Bhopal." },
  { no: 39, ref: "Bahuguna VK (1993). Forestry in Eco-development: An experience in Jhabua Forest Division. Impact Assessment Report on JFM, NAEB, IIFM, Bhopal." },
  { no: 40, ref: "Bahuguna VK (1992). Collective resource management: An experience in Harda. Regional Centre for Wastelands Development, IIFM, Bhopal: 1-40." },
  { no: 41, ref: "Bahuguna VK (1992). Social Forestry programmes and role of non-traditional species. Wastelands News, May-July, 1992." },
  { no: 42, ref: "Lal JB & Bahuguna VK (1992). Master's level course in Resource Management at IIFM, Bhopal. National Seminar on Educational Advancement of Resource Managers, April 28, 1992." },
  { no: 43, ref: "Bahuguna VK (1992). Peoples participation in Forest Management. National Seminar on Environment and Developing Countries, organized by Najma Heptulla, Rajya Sabha, New Delhi, May 12, 1992." },
  { no: 44, ref: "Bahuguna VK (1992). Decentralized planning in forestry sector for people's participation. National Seminar on Forestry Sector Administration Development, New Delhi, Feb 24-25, 1992." },
  { no: 45, ref: "Bahuguna VK (1992). Management of Change in Forest Administration in India. National Seminar on Forestry Sector Administration Development, New Delhi, Feb 24-25, 1992." },
  { no: 46, ref: "Bahuguna VK (1991). Changing dimensions of forest management in India. National workshop on managing the Commons, RCWD, IIFM, Bhubneshwar, Dec 15-16, 1991." },
  { no: 47, ref: "Bahuguna VK & Vinoy Luthra (1991). Forest Administration in India (Policy, institutional and organizational issues). National Seminar on Forestry Sector Administrative Changes, funded by SIDA, Delhi, Aug 23, 1991." },
  { no: 48, ref: "Bahuguna VK (1990). Restructuring of forest administration in India. National Seminar on Forest Service Structure, Society of Indian Forester, FRI, Dehra Dun, April 25-26, 1990." },
  { no: 49, ref: "Bahuguna VK (1990). Human resource development in Indian Forest Service. National Seminar on Forest Service Structure, FRI, Dehra Dun, April 25-26, 1990." },
  { no: 50, ref: "Bahuguna VK (1990). Concept of Forestry research planning and monitoring in India — An overview. Indian Forester 116(1): 17-18." },
  { no: 51, ref: "Bahuguna VK (1990). Management and research issues in social forestry. Van Vigyan 28(182): 46-50." },
  { no: 52, ref: "Bahuguna VK & HS Singh (1988). Organizational pattern of forest department — need for change. Indian Journal of Public Administration 34(2): 326-339." },
  { no: 53, ref: "Bahuguna VK (1986). Survey of public opinion for wildlife. Indian Forester, 112(10): 874-880." },
  { no: 54, ref: "Maithani GP, VK Bahuguna, Pyare Lal (1986). Forest fire seasons in different parts of India — a statistical approach. Journal of Tropical Forestry, 2(III): 118-195." },
];

const technicalPapers = [
  { no: 55, ref: "Bahuguna VK (1997). Silviculture and Management practices for cultivation of Neem (Azadirachta indica). Indian Forester, Vol.123(5)." },
  { no: 56, ref: "Bahuguna VK & Pyare Lal (1997). Studies on the germination behavior of some shrub species of Himalayas. Indian Forester Vol.123(4): 345-347." },
  { no: 57, ref: "Bahuguna VK & Pyare Lal (1996). Studies on evolving nursery practices — soil mixture, depth of sowing and suitability of seed and mulch for Mallotus phillipensis seeds. Indian Forester Vol.122(4): 298-304." },
  { no: 58, ref: "Bahuguna VK (1996). Assessment of nursery techniques in the tropics — a composite index of healthy and plantable seedlings. Indian Forester Vol.122(3)." },
  { no: 59, ref: "Bahuguna VK & Pyar Lal (1995). Introduction trials on Acacia mangium at nursery stage. Indian Forester Vol.121(3): 187-193." },
  { no: 60, ref: "Bahuguna VK, JB Lal, Hilaluddin & Shah Hussain (1995). Ecological studies of Sal Forests in Bankura North Division. In Experiences from participatory Forest Management, Inter-Indian publication: 171-177." },
  { no: 61, ref: "Bahuguna VK & Hilaluddin (1995). Plant community classification and ordination of Sal Forest of Bankura (North) through TWINSPAN and DECORANA. Van Vigyan, Vol.33(2): 87-103." },
  { no: 62, ref: "Bahuguna VK (1994). Barriers to application of Forestry Research Results. Lead paper, IUFRO/FORSPA/CIFOR-RAPA Workshop, Bangkok, Oct 24-28, 1994. FAO Publication." },
  { no: 63, ref: "Bahuguna VK (1994). Production of planting material: Role of Public and Private Sectors. International Workshop on India's Forest Management, New Delhi, Feb 10-12, 1994. CIFOR Occasional Paper No.3." },
  { no: 64, ref: "Bahuguna VK, JB Lal, Hilaluddin & Shah Hussain (1994). Ecological studies of Sal Forest in Bankura North Forest Division. Van Vigyan, Vol.32(1 and 2): 15-22." },
  { no: 65, ref: "Bahuguna VK & Pyare Lal (1993). Introduction trials on Grevillea pteridifolia at nursery stage under Dehra Dun climatic conditions. Indian Forests, Vol.120(3): 213-219." },
  { no: 66, ref: "Bahuguna VK & Pyare Lal (1993). Introduction trials on Acacia cavan at nursery stage. Indian Forester Vol.119(11): 905-910." },
  { no: 67, ref: "Bahuguna VK & Pyare Lal (1993). Standardisation of nursery techniques of Acacia auriculiformis — Part-II. Indian Forester, Vol.119(3): 211-216." },
  { no: 68, ref: "Bahuguna VK & Pyare Lal (1992). Development of nursery techniques on Celtis australis under Dehra Dun climatic conditions. Van Vigyan, Vol.30(1): 5-9." },
  { no: 69, ref: "Maithani GP, Bahuguna VK, Pyare Lal & RC Thapliyal (1992). Observations on nursery techniques of Grewia optiva under Dehra Dun agro climatic conditions. Indian Forester Vol.118(3): 202-206." },
  { no: 70, ref: "Bahuguna VK & Pyare Lal (1992). Standardisation of nursery techniques of Acacia auriculiformis — Part-I. Indian Forester, Vol.118(9): 616-622." },
  { no: 71, ref: "Bahuguna VK (1991). Pahariyan me jharion ka mahatwa (Importance of shrubs in the hills). In Paryavaran Aur Van sarankhas. Takshashila Publishers, New Delhi: 1-105." },
  { no: 72, ref: "Bahuguna VK (1991). Recent advances in plant nutritional research and potential application in forest fertilization in Indian context — A review. Indian Forester Vol.117(7): 521-530." },
  { no: 73, ref: "Bahuguna VK & Pyare Lal (1991). Effect of seed sowing, density and shade and mulch on germination and growth of seedlings of Grewia optiva. Van Vigyan, Vol.30(2)." },
  { no: 74, ref: "Bahuguna VK & Pyare Lal (1991). Effects of storage, insecticides and fungicides on germination and growth of Quercus leucotrichophora. My Forest, Vol.27(4): 385-389." },
  { no: 75, ref: "Maithani GP, Bahuguna VK & Pyare Lal (1991). Seed germination behavior of Desmodium tilliaefolium — an important shrub species of Himalayas. Indian Forester Vol.117(8): 593-595." },
  { no: 76, ref: "Negi JDS, Bahuguna VK & Sharma DC (1990). Biomass production and distribution of nutrients in 20 years old Teak and Gamar Plantations in Tripura. Indian Forester, Vol.116(9): 681-686." },
  { no: 77, ref: "Bahuguna VK & Dhawan VK (1990). Growth performance of Dalbergia sissoo, Eucalyptus grandis, Michelia champaca, Grevillea robusta, Bauhinia variegata and Bauhinia purpurea. Indian Forester, 116(8): 609-617." },
  { no: 78, ref: "Bahuguna VK (1990). Role of shrubs in the maintenance of site productivity in the Himalayas. Seminar on Forest Productivity, FRI, Dehra Dun, April 23-24, 1990." },
  { no: 79, ref: "Bahuguna VK & Pyare Lal (1991). Effects of environment and different soil mixtures on germination of Acacia nilotica seed at Nursery stage. Indian Forester, 116(6): 474-478." },
  { no: 80, ref: "Bahuguna VK, JDS Negi, SR Joshi & KC Naithani (1990). Leaf litter decomposition and nutrient release in Shorea robusta and Eucalyptus camaldulensis plantations. Indian Forester, 116(2): 103-114." },
  { no: 81, ref: "Maithani GP, Thapliyal RC, VK Bahuguna & OP Sood (1990). Enhancement of seed germination and seedlings growth of Aesculus indica by stratification. Indian Forester, 116(7): 577-580." },
  { no: 82, ref: "Bahuguna VK (1989). Soil fauna in Sub-tropical Forest Ecosystem. D.Phil. thesis, HNB Garhwal University, Srinagar (Garhwal): 1-138." },
  { no: 83, ref: "Bahuguna VK & Pyare Lal (1989). Studies on comparative growth performance of Albizia procera, A. lebbek, Eucalyptus FRI-4, Dendrocalamus strictus and A. nilotica at nursery stage. Indian Forester, 115(12): 613-618." },
  { no: 84, ref: "Bahuguna VK & MMS Rawat (1989). Preliminary storage trials on the seeds of Mesua ferrea Linn. Indian Forester, 115(10): 762-763." },
  { no: 85, ref: "Bahuguna VK & Pyare Lal (1989). The effects of fire on the nature and properties of forest soils — A review. My Forest, 25(4): 381-391." },
  { no: 86, ref: "Rawat JK, Pratap Singh & VK Bahuguna (1989). Delineation of research areas and responsibilities. National Seminar on Forestry Co-ordination and Extension, FRI Dehra Dun, April 24-25, 1989." },
  { no: 87, ref: "Bahuguna VK & MMS Rawat (1989). Some aspects in storage of short-lived seeds and an appraisal of the work done at FRI, Dehra Dun. Third Forestry Conference, FRI, May 29-June 1, 1989." },
  { no: 88, ref: "Maithani GP, DC Sharma & VK Bahuguna (1989). Problems of Sal Forests. Indian Forester, 115(1): 3-10." },
  { no: 89, ref: "Maithani GP, VK Bahuguna & RC Thapliyal (1989). Preliminary Silvicultural techniques for planting of shrubs in degraded areas of Himalayas. Indian Forester, 115(1): 3-10." },
  { no: 90, ref: "Bahuguna VK, VK Dhawan & BD Pant (1988). Studies on the vegetative propagation of Woodfordia fruticosa. Indian Forester, 144(912): 832-836." },
  { no: 91, ref: "Bahuguna VK, KP Unnikrishnan & UD Dhaundiyal (1988). Studies on the performance of Philippines and Malaysian provinces of Albizia falcataria at nursery stage. Indian Forester, 115(44): 209-215." },
  { no: 92, ref: "Maithani GP, VK Bahuguna, MMS Rawat & OP Sood (1988). Fruit maturity and inter-related effects of temperature and container on longevity of Neem seeds. Indian Forester 115(2): 89-97." },
  { no: 93, ref: "Bahuguna VK (1988). Management of Forestry Research in India. M.Sc. dissertation, University of Edinburgh, UK (published as a book in 1990)." },
  { no: 94, ref: "Bahuguna VK, MMS Rawat & KC Naithani (1988). Studies on dormancy and treatment to enhance germination of Champa (Michelia champaca) seed. Indian Forester, 114(6): 317-319." },
  { no: 95, ref: "Maithani GP, VK Bahuguna & Pyare Lal (1988). Studies on nursery techniques of Azadirachta indica under north India moist climatic conditions. Indian Forester, 114(8): 440-445." },
  { no: 96, ref: "Bahuguna VK & ML Chhabra (1988). Simple carriage for uphill transportation of fuel wood, pulpwood and Bamboos. In 'Advances in forestry research in India' Vol.1, International Book Distributors, Dehra Dun: 241-252." },
  { no: 97, ref: "Bahuguna VK, MMS Rawat & SR Joshi (1988). Preliminary studies on seed germination behaviour of Berberis lycium — an important shrub for reclamation of wastelands in the Himalayas. Indian Forester, 114(4): 181-183." },
  { no: 98, ref: "Maithani GP, Bahuguna VK & JDS Negi (1988). Survey of Shrubs for hastening the process of reclamation of ecologically vulnerable areas of Central Himalayas. Indian Forester, 114(5): 243-250." },
  { no: 99, ref: "Bahuguna VK, MMS Rawat & VS Thapa (1988). Preliminary investigation of nursery and germination behavior of Camphor (Cinnamomum camphora) Seed. Van Vigyan Vol.25(182): 35-37." },
  { no: 100, ref: "Maithani GP, VK Bahuguna & HP Singh (1988). Effect of size of containers and different soil medias on germination behaviour and growth of seedlings of Acacia nilotica, Albizia procera and Dalbergia sissoo. Indian Journal of Forestry 11(1): 46-49." },
  { no: 101, ref: "Bahuguna VK, Pyare Lal & VK Dhawan (1988). Standardisation of nursery techniques of Eucalyptus FRI-4 under north Indian Moist tropical climatic conditions. Indian Forester 113(8): 541-549." },
  { no: 102, ref: "Maithani GP, VK Bahuguna & UD Dhaundiyal (1987). Introductory trials with Cordia alliodora. Indian Forester, 113(12): 763-778." },
  { no: 103, ref: "Maithani GP, VK Bahuguna, OP Sood & MMS Rawat (1987). Preliminary studies on germination and longevity of Carissa opaca seeds. Indian Forester 113(11): 728-738." },
  { no: 104, ref: "Maithani GP, VK Bahuguna & Pyare Lal (1987). Overview of Forest fire prevention and fire fighting measures in India. My Forests, 23(1): 29-42." },
  { no: 105, ref: "VK Bahuguna, OP Sood & MMS Rawat (1987). Preliminary studies on germination behaviour of Adhatoda vasica seeds — an important shrub for regreening of Sub-Himalayan wastelands. Indian Forester 113(6): 450-451." },
  { no: 106, ref: "VK Bahuguna & OP Sood (1987). Germination behaviour of Prinsepia utilis Royle — an important shrub for reclamation of wastelands in Himalayas. Indian Forester, 113(5): 381-382." },
  { no: 107, ref: "Maithani GP & VK Bahuguna (1987). Studies on standardization of method of seed sowing and irrigation schedule of Acacia nilotica. Indian Journal of Forestry, 10(2): 97-106." },
  { no: 108, ref: "Maithani GP, VK Bahuguna, MMS Rawat & OP Sood (1987). Effect of temperature and containers on Holoptelea integrifolia seeds for maximum retention of viability and vigour. Indian Forester, 113(7): 466-470." },
  { no: 109, ref: "Maithani GP, VK Bahuguna & Pyare Lal (1987). Standardisation of nursery techniques of Dendrocalamus strictus under North Indian moist tropical climatic conditions. Indian Forester, 3(II): 169-178." },
  { no: 110, ref: "Maithani GP, VK Bahuguna & Pyare Lal (1987). Standardisation of nursery techniques of Albizia procera Benth under North Indian moist tropical climatic conditions. Indian Forester, 113(6): 395-403." },
  { no: 111, ref: "Bahuguna VK, MMS Rawat, Maithani GP & SR Joshi (1987). Studies on the viability, germination and longevity of Terminalia myrocarpa seeds. Journal of Tropical Forestry 3(iv): 318-323." },
  { no: 112, ref: "Maithani GP, VK Bahuguna & Pyare Lal (1987). Studies on nursery techniques of Albizia lebbek under North Indian moist tropical climatic conditions. Indian Forester, 113(5): 334-344." },
  { no: 113, ref: "Bahuguna VK, MMS Rawat & KC Naithani (1987). Investigations on the seed of Michelia champaca — Optimum conditions of storage. Indian Forester, 113(4): 243-248." },
  { no: 114, ref: "Maithani GP, VK Bahuguna, KP Bahukhandi & UD Dhaundiyal (1987). Studies on the nursery techniques of Acacia albida under North Indian climatic conditions. Indian Forester, 113(2): 95-100." },
  { no: 115, ref: "VK Bahuguna, OP Sood & Maithani GP (1987). Maturity indices on the seed of Ficus benjamina. Indian Forester, 113(1): 6-10." },
  { no: 116, ref: "Maithani GP & VK Bahuguna (1986). Seed collection and storage for wastelands afforestation programmes. Proceedings of National Seminar on Wasteland Development, FRI, Dehra Dun: 59-65." },
  { no: 117, ref: "Bahuguna VK (1986). Research needs of Tropical rain forests of India. Indian Forester, 112(12): 1049-1058." },
  { no: 118, ref: "Bahuguna VK, MMS Rawat & R Joshi (1986). Seed germination behavior of Rhus parviflora. Van Vigyan 24(34): 113-115." },
  { no: 119, ref: "Bahuguna VK, Anil Kumar & MD Sissoo (1986). Socio-economic survey of the forest workers of Orissa. Indian Forester 112(11): 1026-1028." },
  { no: 120, ref: "Bahuguna VK & ML Chabra (1986). Fuel system of power chain saw and its defects and remedies. Indian Forester 112(11): 1026-28." },
  { no: 121, ref: "Bahuguna VK & ML Chabra (1986). Studies on the performance and improvements for better efficiency. Indian Forester 112(9): 773-782." },
  { no: 122, ref: "Bahuguna VK & ML Chabra (1986). Intermediate support for multiple span wire skidding equipment. Indian Forester 112(5): 399-406." },
  { no: 123, ref: "Maithani GP, VK Bahuguna, MMS Rawat & OP Sood (1986). Potential of artificial heat in seed extraction from the cones of Pinus roxburghii. Journal of Tropical Forestry (1986)(iv): 211-216." },
  { no: 124, ref: "Maithani GP, VK Bahuguna & Pyare Lal (1986). Effects of forest fires on the ground vegetation of moist deciduous Sal forest. Indian Forester, 112(8): 646-678." },
  { no: 125, ref: "Bahuguna VK (1986). Some basic features relating to forest seed storage. 1st Silviculture meeting of western region, Baroda, Sep 10-11, 1986." },
  { no: 126, ref: "Maithani GP, VK Bahuguna & JDS Negi (1986). Natural processes in the redeeming of Garhwal Himalayan Wastelands and future strategies for reclamation. Indian Forester 112(7): 608-615." },
  { no: 127, ref: "Maithani GP, VK Bahuguna & JDS Negi (1986). Plantation opportunities in India. Proceedings of National Symposium on plantation opportunities, New Delhi, Jan 31-Feb 1, 1986: 54-62." },
  { no: 128, ref: "Bahuguna VK (1985). Successive improvements in the wood harvesting technology in India. Indian Forester 111(11): 1023-1037." },
];

const newspaperArticles = [
  { no: 129, ref: "Give tribals the right to forests. The Pioneer, 19th June 2012." },
  { no: 130, ref: "ICFRE: Fountain Head of Scientific Forestry. The Indian Express, 13th December 2012." },
  { no: 131, ref: "ICFRE DG Dr. Bahuguna unveils action plan. The Indian Express, 13th December 2012." },
  { no: 132, ref: "Country's conscience must atone. The Himachal Times, 1st January 2013." },
  { no: 133, ref: "Cry for justice: A nation rises. The Pioneer, January 03, 2013." },
  { no: 134, ref: "For a greener environment. The Times of India, 6th January 2013." },
  { no: 135, ref: "Myths verses Realities (Outlook on Tribal right on forest land). The Pioneer, 29th October 2005, New Delhi." },
  { no: 136, ref: "Water Crisis — Planners need to set priorities. Statesman, Calcutta, 9th May, 2000." },
  { no: 137, ref: "Rediscovery of Neem. The Telegraph Calcutta, Monday, 3rd October 1994." },
  { no: 138, ref: "Turn of the native. Financial Express, New Delhi, Sunday, 2nd October, 1994." },
  { no: 139, ref: "Joy of Jhabua. Statesman, Calcutta, New Delhi, April 20, 1993." },
  { no: 140, ref: "M.P. Villages show the way — Forestry in Eco-development. Financial Express, April 7, 1993." },
  { no: 141, ref: "Forestry in Eco-development. M.P. Chronicle, Bhopal, March 3, 1993 & Free Press, Indore, April 25, 1993." },
  { no: 142, ref: "Tripura: Great potential for rubber. Financial Express, New Delhi, February 6, 1994." },
  { no: 143, ref: "Farm Upliftment: Tripura lesson. Financial Express, New Delhi, December 26, 1992." },
  { no: 144, ref: "An Experience in Collective Forest Management. Financial Express, New Delhi, June 6, 1992." },
  { no: 145, ref: "Harda Forests: An Experience in Collective Forest Management. M.P. Chronicle, May 31, 1992." },
  { no: 146, ref: "Forest Management: Options and role for Peoples participation. Financial Express, New Delhi, February 15, 1992." },
  { no: 147, ref: "For a greener Himalayas. Patriot, New Delhi, March 14, 1991." },
  { no: 148, ref: "A Potential for Wastelands Afforestation. Himachal Times, Dehra Dun, August 2, 1987." },
  { no: 149, ref: "Environmental Conservation and Development of Forests — Strategies and Prospectus. Himachal Times, Dehra Dun, June 24, 1987." },
  { no: 150, ref: "Paryavaran Saranakshan Avom Vano Ka Vikas — Bhavi Yojana in Avom Sambahavanaye (Article in Hindi). Upmanuy, June 8, 1987, Dehra Dun." },
  { no: 151, ref: "Reclamation of mined areas through Afforestation. Himachal Times, Dehra Dun, May 28, 1987." },
  { no: 152, ref: "Eucalyptus Plantation — Scientific appraisal. Himachal Times, Dehra Dun, May 28, 1987." },
  { no: 153, ref: "Prakriti Aur Manav Me Vano Ka Mahatwa (Article in Hindi). Van Mahotsava issue, August 11, 1986, Upmanayu, Dehra Dun." },
  { no: 154, ref: "Rajaji National Park — Prospects and Constraints. Himachal Times, Dehra Dun, 31st December, 1986." },
  { no: 155, ref: "Strategies for regreening wastelands in Garhwal Himalayas. Himachal Times, Dehra Dun, November 18, 1986." },
  { no: 156, ref: "Role of Agro-forestry in Rural Economy. Himachal Times, Dehra Dun, March 04, 1986." },
  { no: 157, ref: "Towards Orientation of a New Forest Policy. Himachal Times, Dehra Dun, October 16-17, 1980." },
  { no: 158, ref: "An encounter with Dachigam Sanctuary. Himachal Times, Dehra Dun, October 16-17, 1980." },
  { no: 159, ref: "How to evolve a forest policy consistent with conservation and development. National Herald, February 18, 1991, Lucknow." },
  { no: 160, ref: "Economics and Popularization of Wildlife in India. Indian Express, November 1980, New Delhi." },
  { no: 161, ref: "Role of Farm Forestry in Rural Economy. Indian Express, 10th May 1980, New Delhi." },
  { no: 162, ref: "Reforming Agriculture in India. Pioneer, 3rd August 2015." },
  { no: 163, ref: "Forest Conservation Key to future Development. Pioneer, 3rd September 2015." },
  { no: 164, ref: "Of Health Hygiene and Humanity. Pioneer, 17th September 2015." },
  { no: 165, ref: "Need Virtuous State Machinery. Pioneer, 29th September 2015." },
  { no: 166, ref: "Maharaja has Bled Enough: Revive it. Pioneer, 7th October 2015." },
  { no: 167, ref: "Changing the Climate for Talk. Pioneer, 23rd October 2015." },
  { no: 168, ref: "Synchronizing Climate aspirations of the World. Pioneer, 10th November 2015." },
  { no: 169, ref: "Holding Tribunals Accountable. Pioneer, 18th November 2015." },
  { no: 170, ref: "Time to Overhaul Bureaucracy. Pioneer, 27th November 2015." },
  { no: 171, ref: "Decoding Paris Deal for India. Pioneer, 25th December 2015." },
  { no: 172, ref: "Mining isn't a Dirty Word. Pioneer, 22nd January 2016." },
  { no: 173, ref: "Revamp ailing Health Scheme. Pioneer, 28th January 2016. (Also published in Bureaucracy Today Magazine and various websites.)" },
  { no: 174, ref: "Performance of Modi Government and the parliamentary logjams: Need for a fresh look. Pioneer, February 2016." },
  { no: 175, ref: "A Man made tragedy of errors. Pioneer, 5th May 2016." },
  { no: 176, ref: "Missing State in Mathura. Pioneer, June 10th 2016." },
  { no: 177, ref: "Lessons from Culling of Nilgais. Pioneer, 15th June 2016." },
  { no: 178, ref: "Policy options on Animal Cruelty. Pioneer, 3rd August 2016." },
  { no: 179, ref: "Forest Drought a serious threat calls for urgent attention, policy intervention. The Tribune, 19th August 2016." },
  { no: 180, ref: "Cow protection not vigilantism. Pioneer, 22nd August 2016. (After this, 2-3 articles per month on diverse matters of national importance — continuing regularly.)" },
];

const books = [
  { no: 183, ref: "Forest Types of India — Revisited. ICFRE Task Force led by Dr. VK Bahuguna." },
  { no: "183A", ref: "Coffee Table Book on Forest Biodiversity in India (2012). Editors: Dr. VK Bahuguna, Shri Saibal Dasgupta, Dr. Renu Singh & Dr. Shilpa Gautam. ICFRE Publication. Released during COP-11 on Biodiversity in Hyderabad, 18th October 2012." },
  { no: 184, ref: "Forestry in the Service of Nation: ICFRE Technologies (2011). Editors: Dr. VK Bahuguna, Dr. Rabindra Kumar, Mr. RP Singh & Mr. Ramakant Mishra. ICFRE Publication. Pg: 1-768." },
  { no: 185, ref: "Root to Canopy (2004): Regenerating forests through Community-State Partnership. CFA-Winrock Publication. Editors: VK Bahuguna, Kinsuk Mitra, Doris Capistrano & Sushil Saigal, New Delhi: P.1-320." },
  { no: 186, ref: "India's Forest Beyond 2000 (2002). Edited proceedings of international seminar organized by Commonwealth Forestry Association and ICFRE, sponsored by Planning Commission, DFID and Ford Foundation." },
  { no: 187, ref: "Status paper on 'Linkages between Forestry Research and Forestry Practices' (1987). Comprehensive document of technologies developed by FRI and other ICFRE institutes. Presented at National Workshop, ICFRE, Dehra Dun, May 13-14, 1997." },
  { no: 188, ref: "Annual Report, Regional Centre, National Afforestation and Eco-development Board (1992-93)." },
  { no: 189, ref: "Annual Report, Regional Centre for Wastelands Development (RCWD) (1991-92)." },
  { no: 190, ref: "Peoples Participation in Forest Management and Sharing of Benefits — Let the figure speak (1993). Publication of Regional Centre, NAEB, IIFM, Bhopal." },
  { no: 191, ref: "Nursery Technology — and its Management (1993). Publication of Regional Centre, National Afforestation and Eco-development Board, IIFM, Bhopal." },
  { no: 192, ref: "Operative assessment of Farm Forestry in Maharashtra and Orissa — issue in Institutional Finance (1993). Publication of Regional Centre, NAEB, IIFM, Bhopal." },
  { no: 193, ref: "Working Plan of New Forest Campus (1990). First since 1940." },
  { no: 194, ref: "Evaluation Report of FAO sponsored project on International Bureau of Plant Genetic Resource (IBPGR) in 1990. Published by FRI, Dehra Dun." },
  { no: 195, ref: "Handling of Short Lived seeds (1991). Published by Indian Council of Forestry Research and Education, Dehra Dun." },
  { no: 196, ref: "An Introduction to Wild Life (1992). Bishan Singh and Mahinder Pal Singh, Dehra Dun." },
  { no: 197, ref: "Management of Forestry Research in India (1992). International Book Distributor, Dehra Dun. ISBN: 089771542X. List US$ 160." },
  { no: 198, ref: "Tropical Forest Ecosystem — Soil fauna in sub-tropics (1991). International Book Distributor, Dehra Dun. ISBN 8170891388. List: US$ 225." },
  { no: 199, ref: "Edited the Book, 'Wasteland Development for Fuel wood and Fodder Production' (1986). Proceedings of National Seminar, May 30-31, 1986, FRI, Dehra Dun." },
  { no: 200, ref: "Handbook on some important Himalayan Shrubs (1991). Published by ICFRE, Dehra Dun. First book of its kind in forestry sector to highlight the economic importance of shrubs & herbs in forestry." },
];

export default function PublicationsPage() {
  const [activeTab, setActiveTab] = useState("policy");
  const [search, setSearch] = useState("");

  const dataMap: Record<string, { no: number | string; ref: string }[]> = {
    policy: policyPapers,
    technical: technicalPapers,
    newspaper: newspaperArticles,
    books: books,
  };

  const activeTabData = tabs.find(t => t.id === activeTab)!;
  const filtered = dataMap[activeTab].filter(item =>
    item.ref.toLowerCase().includes(search.toLowerCase())
  );

  // Extract year from citation string
  const extractYear = (ref: string) => {
    const match = ref.match(/\((\d{4})\)/);
    return match ? match[1] : null;
  };

  // Extract journal/source name (text after last period before volume info)
  const extractSource = (ref: string) => {
    const patterns = [
      /Indian Forester/i, /Van Vigyan/i, /AMBIO/i, /International Forestry Review/i,
      /My Forest/i, /Journal of Tropical Forestry/i, /The Pioneer/i, /Financial Express/i,
      /Times of India/i, /Statesman/i, /The Telegraph/i, /Himachal Times/i,
      /National Herald/i, /Indian Express/i, /The Tribune/i, /Down to Earth/i,
      /Commonwealth Forestry/i, /FAO/i, /ITTO/i, /ICFRE/i, /IIFM/i,
    ];
    for (const p of patterns) {
      if (p.test(ref)) return ref.match(p)?.[0] ?? null;
    }
    return null;
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-emerald-50/30">

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[#0a1a14] via-[#1b4332] to-[#2d6a4f]">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-emerald-400" />
            </div>
            <span className="text-emerald-400 text-sm font-semibold uppercase tracking-wider">
              Dr. V.K. Bahuguna · Indian Forest Service (IFS) (Retd.)
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            Publications
          </h1>
          
          <p className="text-xl text-white/70 max-w-3xl mb-4 leading-relaxed">
            40 decades environment climate change tribal and rural development and international and national issues
          </p>
          <p className="text-sm text-white/50 max-w-3xl mb-12 leading-relaxed">
            Publications of professional articles in National and International publications like Ambio, International Forestry Journals and FAO technical papers — organized by category
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { n: "54", l: "Policy & Institutional", id: "policy", icon: FileText, gradient: "from-[#1b4332] to-[#2d6a4f]" },
              { n: "74", l: "Technical Research", id: "technical", icon: BookOpen, gradient: "from-[#2d6a4f] to-[#52b788]" },
              { n: "52", l: "Columnist & Freelance Youtube Journalism", id: "newspaper", icon: Newspaper, gradient: "from-[#52b788] to-[#74c69d]" },
              { n: "18", l: "Books & Bulletins", id: "books", icon: BookMarked, gradient: "from-[#e9c46a] to-[#f4a261]" },
            ].map(s => (
              <button
                key={s.id}
                onClick={() => { setActiveTab(s.id); setSearch(""); }}
                className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 ${
                  activeTab === s.id 
                    ? 'bg-white shadow-2xl scale-105' 
                    : 'bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:scale-102'
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${s.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                
                <div className="relative">
                  <s.icon className={`w-8 h-8 mb-4 transition-colors ${
                    activeTab === s.id ? 'text-[#1b4332]' : 'text-white/60 group-hover:text-white'
                  }`} />
                  
                  <div className={`text-4xl font-black mb-2 transition-colors ${
                    activeTab === s.id ? 'text-[#1b4332]' : 'text-white'
                  }`}>
                    {s.n}
                  </div>
                  
                  <div className={`text-sm font-medium transition-colors ${
                    activeTab === s.id ? 'text-gray-600' : 'text-white/60 group-hover:text-white/80'
                  }`}>
                    {s.l}
                  </div>
                </div>
                
                {activeTab === s.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1b4332] to-[#52b788]"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Tab Navigation + Search */}
        <div className="mb-12">
          {/* Tab Pills */}
          <div className="flex flex-wrap gap-3 mb-6">
            {tabs.map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => { setActiveTab(tab.id); setSearch(""); }}
                  className={`group flex items-center gap-3 px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-[#1b4332] to-[#2d6a4f] text-white shadow-lg shadow-emerald-900/30 scale-105'
                      : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-emerald-300'
                  }`}
                >
                  <Icon className={`w-5 h-5 transition-transform group-hover:scale-110 ${
                    activeTab === tab.id ? 'text-emerald-300' : 'text-gray-400'
                  }`} />
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden">{tab.label.split(" ")[0]}</span>
                  <span className={`text-xs px-2.5 py-1 rounded-full font-bold ${
                    activeTab === tab.id 
                      ? 'bg-white/20 text-white' 
                      : 'bg-gray-100 text-gray-500'
                  }`}>
                    {dataMap[tab.id].length}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Bar */}
          <div className="relative max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder={`Search in ${activeTabData.label.toLowerCase()}...`}
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100 transition-all bg-white shadow-sm"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-8 pb-6 border-b-2 border-gray-200">
          <div className="flex items-center gap-4">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg bg-gradient-to-br ${
              activeTab === 'policy' ? 'from-[#1b4332] to-[#2d6a4f]' :
              activeTab === 'technical' ? 'from-[#2d6a4f] to-[#52b788]' :
              activeTab === 'newspaper' ? 'from-[#52b788] to-[#74c69d]' :
              'from-[#e9c46a] to-[#f4a261]'
            }`}>
              <activeTabData.icon className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-gray-900">{activeTabData.label}</h2>
              <p className="text-sm text-gray-500 mt-1">
                {filtered.length} {search ? "results found" : "publications"}
              </p>
            </div>
          </div>
        </div>

        {/* Publication List */}
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
              <Search className="w-10 h-10 text-gray-300" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No results found</h3>
            <p className="text-gray-500">Try adjusting your search terms</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filtered.map((item, idx) => {
              const year = extractYear(item.ref);
              const source = extractSource(item.ref);
              
              return (
                <div
                  key={item.no}
                  className="group relative bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-emerald-300 transition-all duration-300 hover:shadow-xl"
                >
                  {/* Left accent bar */}
                  <div className={`absolute left-0 top-6 bottom-6 w-1 rounded-r-full transition-all duration-300 ${
                    activeTab === 'policy' ? 'bg-gradient-to-b from-[#1b4332] to-[#2d6a4f]' :
                    activeTab === 'technical' ? 'bg-gradient-to-b from-[#2d6a4f] to-[#52b788]' :
                    activeTab === 'newspaper' ? 'bg-gradient-to-b from-[#52b788] to-[#74c69d]' :
                    'bg-gradient-to-b from-[#e9c46a] to-[#f4a261]'
                  } group-hover:w-2`}></div>

                  <div className="flex items-start gap-6 ml-4">
                    {/* Number Badge */}
                    <div className={`flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center font-black text-xl shadow-md ${
                      activeTab === 'policy' ? 'bg-gradient-to-br from-[#1b4332] to-[#2d6a4f] text-white' :
                      activeTab === 'technical' ? 'bg-gradient-to-br from-[#2d6a4f] to-[#52b788] text-white' :
                      activeTab === 'newspaper' ? 'bg-gradient-to-br from-[#52b788] to-[#74c69d] text-white' :
                      'bg-gradient-to-br from-[#e9c46a] to-[#f4a261] text-white'
                    }`}>
                      {item.no}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-3">
                        {year && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-semibold">
                            <Calendar className="w-3 h-3" />
                            {year}
                          </span>
                        )}
                        {source && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold">
                            <Tag className="w-3 h-3" />
                            {source}
                          </span>
                        )}
                      </div>
                      
                      <p className="text-gray-700 leading-relaxed">
                        {item.ref}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Newspaper note */}
        {activeTab === "newspaper" && !search && (
          <div className="mt-12 rounded-2xl p-6 bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-amber-400 flex items-center justify-center text-2xl">
                📝
              </div>
              <div>
                <h3 className="text-lg font-bold text-amber-900 mb-2">Ongoing Contributions</h3>
                <p className="text-amber-800 leading-relaxed">
                  After August 2016, Dr. Bahuguna writes 2–3 articles per month on diverse matters of national importance in The Pioneer and other publications. The above list is illustrative, not exhaustive.
                </p>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
