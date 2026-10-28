import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { 
  ArrowRight, 
  Users, 
  GraduationCap, 
  X,
  ChevronRight,
  Scale,
  History
} from 'lucide-react';

const OurTeam = () => {
  const maroon = "#972037";
  // Logic: searchTerm state has been removed
  const [selectedMember, setSelectedMember] = useState(null);
  const [showCredits, setShowCredits] = useState(false);

  const teamData = [
    {
      name: "Wes Janes, B.S., P.G.",
      role: "Principal, Operations Manager/Geologist",
      education: "B.S. Geology, University of South Alabama",
      tags: ["Geology", "Field Operations", "Corporate Operations", "Contract Negotiations"],
      bio: (
      <>
        <p>Wes is one of the managing principals of Petrotek and serves as Director of Field Operations. He holds a B.S. degree in Geology from the University of South Alabama. Wes has more than twenty years of experience with wellsite field work and the application of geology to permitting for all classes of injection well projects. He also has experience in contract negotiations, business relationship optimization, and Corporate operations. His Field Director position includes supervising complex projects and operations along with well drilling, completion, testing and stimulation work throughout the country. He regularly leads staff to get efficient results for clients in feasibility and permitting efforts. Wes has been actively involved in all facets of the permitting, design, installation, sampling, testing, maintenance, and remediation of disposal wells across the country.</p> 
        <br></br>
        <p>Wes is an active member of the Rocky Mountain Association of Geologists, the Society of Petroleum Engineers, the American Association of Petroleum Geologists, and is a Licensed Professional Geologist in Wyoming, Indiana, Kansas, Nebraska, Texas, Louisiana, Illinois, Florida, and Utah. He has published and given a variety of talks regarding subsurface injection, and is an active member of the Rocky Mountain Association of Geologists, the Society of Petroleum Engineers, and the American Association of Petroleum Geologists.</p>
      </>
      ),
      personal: "Wes and his family reside in the foothills west of Denver. In his spare time, he enjoys hunting, skiing, hiking, and camping with his wife and three daughters."
    },
    {
      name: "Hal Demuth, M.S.",
      role: "Principal, Senior Engineer/Hydrogeologist",
      education: "B.S. Petroleum Engineering, University of Tulsa; M.S. Hydrogeology, University of Idaho",
      tags: ["Hydrogeology", "Petroleum Engineering", "ISR Uranium", "Expert Witness"],
      bio: "Hal is one of the managing principals of Petrotek and is a Senior Engineer and Hydrogeologist. He has more than 40 years of applied industry experience, and holds a B.S. degree in Petroleum Engineering and an M.S. degree in Hydrogeology. He is passionate about the application of creative technical and regulatory solutions to assist clients with complex projects. He is a Technical Team Leader for produced water and wastewater management via Class I, Class II and Class V injection wells for oil and gas production across the United States. His drilling and completions experience includes vertical, directional and horizontal wells in the Gulf of America, Alaska, and the continental U.S. Hal leads the technical team for ISR uranium Class III permitting and operations support for projects in Wyoming, Texas, Nebraska and South Dakota. His ISR uranium experience includes the majority of projects in the US as well as selected projects overseas. His team has also completed groundwater characterization and assessment projects for conventional hard rock mines (silver, lead/zinc, copper) and rare earth element mining projects in the U.S. Hal has provided expert witness testimony for oil and gas operators and ISR uranium operations related to technical, regulatory and contractual issues in Federal and State Courts.",
      personal: "Hal and his wife reside in the foothills west of Denver. In his spare time, he enjoys hiking, hunting, skiing and sharing the good news of the Gospel of Jesus Christ."
    },
    {
      name: "Ken Cooper, M.S., P.E.",
      role: "Founder, Principal, Engineering Manager/Senior Engineer",
      education: "B.S. Petroleum Engineering, Montana College of Mineral Science and Technology; M.S. Petroleum Engineering, Montana Tech of the University of Montana",
      tags: ["Engineering", "Reservoir Simulation", "Well Feasibility", "Expert Witness"],
      bio: (
      <>
        <p>Ken is one of the managing principals of Petrotek and serves as the Director of Engineering. He holds degrees in Petroleum Engineering and is a registered professional engineer in numerous states.  Prior to helping found Petrotek in 1993, he gained engineering experience working in the petroleum industry and for petroleum/uranium/injection well consultancies. Ken has more than 40 years of experience working with all classes of injection wells and specializes in investigating well feasibility, reservoir issues and testing, reservoir simulation, subsurface pore space and correlative rights, well compliance and permitting, along with optimizing injection well operation and maintenance.   In addition to his experience with natural resource extraction consulting, he has managed the successful operation of injection wells and has been involved with providing services regarding every facet of injection well technology for projects around the country.</p> 
        <br></br>
        <p>Ken has regularly published and given a wide variety of talks and short-courses regarding subsurface injection, regulatory compliance, pressure transient well testing, and the simulation of subsurface fluid flow over the years, and provides expert witness testimony regarding well permitting, subsurface resources, and injection wells. He is a board member of the GWREF and UITC, and has been an active member of both the GWPC (formerly the UIPC) and the Society of Petroleum Engineers (SPE) since the 1980s.</p>
      </>
      ),
      personal: "Outside of work, Ken likes spending time with his wife, hiking, four-wheeling, an occasional good craft beer, and traveling. He hopes one day to have visited all seven continents."
    },
    {
      name: "David Huffington, M.S., P.G.",
      role: "Principal, Managing Geologist",
      education: "B.S. Geophysical Engineering, Colorado School of Mines; M.S. Petroleum Reservoir Systems, Colorado School of Mines",
      tags: ["Geologic Feasibility", "Wireline", "Geologic Testimony", "Cased Hole Logs"],
      bio: "David is a Senior Geologist at Petrotek Corporation with more than ten years of industry experience. He holds Professional Geology licenses in multiple states. His work primarily focuses on injection well feasibility studies, new Class I, Class II, and Class VI permits, Class I permit renewals, land ban petition exemption renewals, mechanical integrity testing, drilling, and geologic testimony. David has designed, supervised, and interpreted many different types of mechanical integrity tests in a wide variety of well circumstances. Prior to Petrotek, David worked for Halliburton as a wireline field engineer, running a variety of cased hole logs including pulse neutron, cement evaluation, flow profiles, perforating, and casing cuts. David has a Bachelor of Science in Geophysical Engineering and a Master’s degree in Petroleum Reservoir Systems from the Colorado School of Mines.",
      personal: "David is a member of the Society of Petrophysicists and Well Log Analysts, Rocky Mountain Association of Geologists, and the Denver Well Logging Society."
    },
    {
      name: "Ken Schlieper, B.S.",
      role: "Hydrogeology Field Manager/Senior Scientist",
      education: "B.S. Environmental Studies, Slippery Rock University",
      tags: ["CERCLA", "RCRA", "Hydrogeologic Characterization", "Class I", "Operations"],
      bio: "Ken has extensive multi-disciplinary skills gained through more than 31 years of field and project management experience in hydrogeologic characterization at numerous CERCLA, RCRA, and other regulated sites throughout the U.S. He has performed numerous aquifer tests for uranium ISR operations throughout the country. More recently, he has been a lead technical contributor to numerous Class I hazardous and nonhazardous injection well projects across the country related to permitting, supervision of workovers, stimulations, drilling operations, and mechanical integrity testing.",
      personal: "In his spare time, Ken enjoys photography and spending time with his family on the ski slopes or in the backcountry."
    },
    {
      name: "Brian Ault, B.S.",
      role: "Senior Technical/Project Manager",
      education: "B.S. Petroleum Engineering, Marietta College",
      tags: ["Project Management", "Well Completions", "Production"],
      bio: "Brian began his career in the oilfield service industry spending five years working for The Western Company of North America. He then spent five years working for Meridian Oil/Burlington Resources in the San Juan Basin. After more than eight years with Ultra Petroleum; working in permitting, reservoir evaluation, drilling, completions, production and regulatory reporting; helping to guide them to over seven billion dollars of market capitalization, he joined Petrotek. Brian gained extensive experience primarily in the areas of well completions and production. Brian’s expertise relates to his vast experience across many disciplines within the oil and gas arena, but primarily in his ability to deliver projects safely, on schedule, on budget, and aligned with business goals.",
      personal: "Brian enjoys spending time with his five kids and crawling over the rocks around Moab, Utah in his Jeep."
    },
    {
      name: "Tyler Burton, PhD",
      role: "Senior Technical/Business Advisor",
      education: "PhD Energy Policy and Economics (CEPMLP Dundee), LLM Energy Law & Policy (CEPMLP), PGDip Energy Economics (Oxford), MBA Technology Management (Phoenix), MSc Environmental Engineering (Anchorage), BSc Petroleum Engineering (Fairbanks)",
      tags: ["Class VI CCS", "Risk and Economic Evaluation", "Regulatory Law", "Sustainability"],
      bio: "Dr. Burton has worked as a Research Fellow with concentration on corporate & regulatory climate and energy law and policy, and energy economics. With Petrotek, Tyler assists with Classes I, III, and VI permit applications, advises on carbon sequestration and storage markets including market and 45Q credits, offsets valuation, projects financial assurance and incentives, contracts assessment, and risk evaluation. He is a Project Management Professional at PMI, a Cost Professional/Engineer at AACEI, an Energy Risk Professional at GARP, an FSA credentialed Sustainability Accounting Professional at the SASB, and a Six Sigma Black Belt.",
      personal: ""
    },
    {
      name: "Lewis Wandke, B.S., P.E.",
      role: "Senior Project Engineer",
      education: "B.S. Petroleum Engineering, Montana Tech; MBA w/Finance Specialization, University of Colorado Denver",
      tags: ["Reservoir Evaluation", "Economics", "Well Design", "Asset Development"],
      bio: "Professionally licensed in multiple states, Lewis has more than 18 years of progressive experience in many aspects of asset development including reservoir evaluation, reservoir simulation, economics, drilling, and production operations. During his time at Petrotek, he has been involved with numerous injection projects, incorporating both well design and performance forecasting into successful projects for clients. Lewis is also closely engaged in engineering support related to permitting and development in a variety of basins.",
      personal: "His passion lies in developing unique and creative methods to maximize results."
    },
    {
      name: "Lee Shafer, B.S., P.E.",
      role: "Senior Chemical Engineer",
      education: "B.S. Chemical Engineering, University of Wyoming",
      tags: ["Water Recycling", "Uranium Mining", "Patents", "Process Engineering"],
      bio: "Lee has over 40 years of process engineering experience in the petroleum and uranium industries. Lee’s experience includes uranium solution mining, coal bed methane water treatment, fracturing fluid optimization, and oil field water recycling for fracturing. The oil field water recycling includes projects in Wyoming, Utah, Oklahoma, and Texas; the work in Wyoming yielded 7 patents for his clients. Lee is also experienced in oil field production operations and well completions. Lee is a member of the Society of Petroleum Engineers and the American Institute of Chemical Engineers.",
      personal: "Lee and his wife have been blessed to raise 6 children in Wyoming where they currently enjoy the company of 2 grandchildren."
    },
    {
      name: "Aaron Payne, M.S., P.G.",
      role: "Senior Hydrogeologist",
      education: "B.A. Geology, Bowdoin College; M.S. Geology, University of Wyoming",
      tags: ["Hydrogeology", "Groundwater Simulation", "Class III", "Class I"],
      bio: "Aaron specializes in characterizing formations and resources, investigating feasibility, permitting wells, and conducting reservoir/groundwater simulation studies. He uses numerical groundwater models in support of hydrologic characterization and assessment, particularly related to Class III ISR uranium permitting and operations support. Aaron has extensive experience related to the feasibility, permitting, and technical support to regulatory agencies related to Class I UIC disposal wells. He has also provided geologic support related to oil and gas permitting and development in Wyoming, as well as providing expert witness testimony related to these operations.",
      personal: "In his spare time, he enjoys skiing, cycling, and camping with his two sons."
    },
    {
      name: "Adam Simonsen, M.S.",
      role: "Project Geologist",
      education: "B.S. Geology, Western Colorado University; M.S. Geology, Colorado School of Mines",
      tags: ["Well Log Analysis", "Petrophysics", "Class VI", "Stratigraphy"],
      bio: "Adam has B.S. and M.S. degrees in geology from Western Colorado University and the Colorado School of Mines. He is skilled with the use of a variety of software to conduct well log analysis to determine reservoir properties using petrophysics and to characterize reservoirs by generating correlations, maps and stratigraphic frameworks of geologic systems. At Petrotek, Adam is applying his skills to characterize reservoirs for the permitting of Class I, Class II and Class VI injection wells.",
      personal: "Adam is an active member of AAPG and RMAG."
    },
    {
      name: "Anthony Pennino, B.S.",
      role: "Regional Coordinator (AK) - CCS",
      education: "B.S. Professional Chemistry, University of Idaho",
      tags: ["CCUS", "Natural Resources", "Permitting", "Class I"],
      bio: "Anthony has more than twenty years of experience providing regulatory and permitting support for major projects associated with natural resources development. Since obtaining a degree in chemistry he has worked for several large multinational producers and provided consulting services to a variety of clients. His experience includes planning and acquiring local, state and federal permits required for a variety of project types. At Petrotek, Anthony is supporting CCUS permitting and Class I injection well installation in Alaska and the lower 48.",
      personal: ""
    },
    {
      name: "Cameron Kerr, B.S.",
      role: "Project Engineer",
      education: "B.S. Petroleum Engineering, Colorado School of Mines; B.S. Business Administration, University of Denver",
      tags: ["Production", "Completions", "Workover Support", "Basin Analysis"],
      bio: "Following graduation from Mines, Cameron spent time in the oil and gas space as a Production Engineer, Field Frac Engineer, and Completions Engineer. At Petrotek, his work focuses on new Class I permit applications, injection well workover support, and the analysis of annual mechanical integrity and reservoir testing activities for client submissions to regulatory agencies. Cameron has experience in multiple basins including the Western Anadarko Basin, DJ Basin, Powder River Basin, and Permian Basin.",
      personal: "Cameron attended the University of Denver and graduated with a degree in Finance and was a four-year member of the Lacrosse Team."
    },
    {
      name: "Chuck Wilson, B.S.",
      role: "Drilling/Completions Manager",
      education: "B.S. Petroleum Engineering, University of Wyoming",
      tags: ["Drilling", "Field Operations", "Class VI", "Well Planning"],
      bio: "Chuck has forty years of petroleum engineering experience that varies from drilling and field operations to the management of technical teams for upstream E&P operations. Chuck has drilled more than 2,000 wells in many different basins in the U.S. and internationally. At Petrotek, Chuck provides field and engineering support for Class I industrial, Class VI CCUS, and specialized test well design, well planning, and supervision of field drilling operations.",
      personal: "In his spare time, Chuck enjoys hiking, hunting, fishing, and spending time with his kids and grandkids."
    },
    {
      name: "Donald McLeod, B.S., P.E.",
      role: "Senior Process Engineer",
      education: "B.S. Chemical Engineering; MBA",
      tags: ["Process Engineering", "Landfill Leachate", "Water & Surface Treatment", "SCADA & Facility Optimization"],
      bio: "Don McLeod is a professional engineer, retired, with over 40 years of engineering and management experience in surface treatment design and operation, chemical manufacturing, landfill leachate treatment and filtration, and water treatment. Don’s experience includes work for chemical plants, landfills, RCRA and Superfund sites, oil and gas operators, and Class I and Class II injection well operators. He has worked on a wide variety of projects to increase capacity, improve reliability, upgrade SCADA systems, and reduce operating costs. Don holds a B.S. degree in Chemical Engineering and an MBA.",
      personal: "Don resides in the hills of central Kentucky. In his spare time, Don enjoys hiking, reading, and tinkering on old Porsches."
    },
    {
      name: "James Klutho, B.S., P.E.",
      role: "Senior Reservoir Engineer",
      education: "B.S. Geological Engineering, University of Missouri-Rolla; B.A. Psychology, University of Missouri-Columbia",
      tags: ["A&D", "Economic Evaluation", "DSU Reserves"],
      bio: "Jim has over 40 years of experience in reservoir engineering, production engineering, property acquisitions and operations. He is an expert on the Aries and Mosaic economic evaluation packages and has extensive experience with property evaluations for A&D. Jim is an integral part of the DSU reserve evaluation and EUR team at Petrotek, providing engineering analyses and testimony support documents for DSU permitting. He has worked as lead evaluator of major acquisitions and reserves process.",
      personal: "Jim lives in Centennial, Colorado and has interests in woodworking, computer programming and music, especially the guitar and piano."
    },
    {
      name: "Jeremiah Demuth, A.A., STS",
      role: "HSE Manager/Permitting Specialist/Wellsite Supervisor",
      education: "A.A., Red Rocks Community College; Safety and Health Specialist in General Industry, Rocky Mountain Education Center",
      tags: ["HSE", "Safety Officer", "Site Supervision", "HAZWOPER"],
      bio: "Jeremiah has supervised permitting and drilling operations for multiple Class II wells in the DJ Basin. He works with industrial, ISR, and oil and gas clients to provide site supervision for drilling and workover operations, as well as site safety and annual mechanical integrity testing. Jeremiah also serves as the corporate health and safety officer for Petrotek and has specific training in the OSHA 1910 standards, Lockout/tagout, and maintains HAZWOPER certification.",
      personal: "In his spare time, he enjoys writing, hunting, and martial arts."
    },
    {
      name: "Michael Kenney, B.S.",
      role: "Wellsite Supervisor/Specialist",
      education: "B.S. Chemical Engineering, Colorado School of Mines",
      tags: ["Class I", "Class II", "Well Testing & Analysis", "Completions & Workovers",],
      bio: "Mike Kenney has over 35 years of experience in well testing operations, well test analysis, and Class I and Class II wellsite supervision (drilling, completions, testing, stimulations, workovers). Mike has completed classes at Colorado School of Mines (Chemical Engineering).",
      personal: "Mike and his wife reside in northeastern Colorado. In his spare time, Mike enjoys spending time with family and time outdoors fishing, camping, hiking, playing tennis and golfing."
    },
    {
      name: "Will Kinsey, B.S.",
      role: "GIS Analyst",
      education: "B.S. Geographic Information Technology, Slippery Rock University",
      tags: ["GIS", "Spatial Analysis", "UIC Permits", "Cartography"],
      bio: "William provides mapping support through his experience utilizing Geographic Information Systems (GIS), spatial analysis, and cartography. During his time at Petrotek, he has assisted with the successful delivery of numerous injection well projects including feasibility studies, UIC Class I and Class II injection well permit applications, and permit renewal applications.",
      personal: "William is a member of GIS Colorado. He and his wife enjoy hiking and traveling."
    },
    {
      name: "Connor Maxwell, B.S.",
      role: "GIS Analyst",
      education: "B.S. Geographic Information Technology, Slippery Rock University",
      tags: ["GIS", "Spatial Analysis", "UIC Permits", "Cartography"],
      bio: "Connor joined Petrotek as a GIS Analyst to support the execution of injection well projects, ranging from feasibility studies to permit renewals. He uses his background in GIS for spatial analysis and to generate detailed mapping deliverables. Connor is a member of the North American Cartographic Information Society (NACIS).",
      personal: "In his free time, he enjoys electronic sound design and snowboarding."
    }
];

  return (
    <div className="pt-32 pb-20 px-6 bg-white min-h-screen">
      <Seo title="Our Team - Petrotek Engineers & Geologists" description="Meet Petrotek's petroleum engineers, geologists, hydrogeologists, and field specialists supporting injection well and subsurface projects." path="/team" />
      <div className="container mx-auto max-w-8xl">
        
        {/* Navigation */}
        <Link to="/" className="flex items-center text-[#972037] font-bold mb-8 hover:underline group w-fit">
          <ArrowRight className="rotate-180 w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Home
        </Link>

        {/* Header Section */}
        <div className="mb-16">
          <div className="mb-6 p-4 bg-gray-50 inline-block rounded-2xl border border-gray-100 shadow-sm">
            <Users className="w-10 h-10" style={{ color: maroon }} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Meet Our Professionals</h1>
          <p className="text-xl text-gray-600 max-w-4xl leading-relaxed">
            Our team consists of dedicated professionals with relevant project experience related to the subsurface injection of wastewater, CO2, and fluids for mining operations.
          </p>
          <div className="w-24 h-1 mt-8" style={{ backgroundColor: maroon }}></div>
        </div>

        {/* Professional Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamData.map((member, idx) => {
            const isPrincipal = idx < 4;

            return (
              <div 
                key={idx} 
                className={`relative rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col ${
                  isPrincipal
                    ? 'border-2 border-[#972037] bg-[#972037]/[0.02] shadow-[#972037]/5'
                    : 'bg-white border border-gray-100 hover:border-gray-300'
                }`}
                onClick={() => setSelectedMember(member)}
              >
                {/* Principal Leadership Badge */}
                {isPrincipal && (
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#972037] text-white shadow-sm">
                      Principal
                    </span>
                  </div>
                )}

                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#972037] transition-colors mb-1 pr-16">
                    {member.name}
                  </h3>
                  <p className="text-xs font-bold text-[#972037] mb-4 uppercase tracking-wider">
                    {member.role}
                  </p>
                  
                  <div className="flex items-center text-[11px] text-gray-500 mb-6 font-medium">
                    <GraduationCap className="w-3.5 h-3.5 mr-2 shrink-0 text-[#972037]" />
                    {member.education}
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {member.tags.map(tag => (
                      <span 
                        key={tag} 
                        className={`px-2 py-0.5 text-[10px] font-bold rounded border ${
                          isPrincipal 
                            ? 'bg-white text-gray-700 border-[#972037]/20' 
                            : 'bg-gray-50 text-gray-500 border-gray-100'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center text-[10px] font-bold text-[#972037] uppercase tracking-[0.2em] pt-4 border-t border-gray-100 mt-auto">
                  Read Professional Bio <ChevronRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}

          {/* Historical Credits Card - Centered at the bottom */}
          <div className="md:col-span-2 lg:col-span-3 flex justify-center mt-8">
            <div 
              className="w-full max-w-lg bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all cursor-pointer group flex flex-col items-center justify-center text-center"
              onClick={() => setShowCredits(true)}
            >
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mb-4 group-hover:bg-[#972037] transition-colors">
                <History className="w-6 h-6 text-gray-500 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#972037] transition-colors mb-2">
                Historical Credits & Thanks
              </h3>
              <p className="text-sm text-gray-500">
                Honoring our founders and past staff members who contributed to Petrotek's success.
              </p>
              <div className="flex items-center text-[10px] font-bold text-[#972037] uppercase tracking-[0.2em] mt-6">
                Read Acknowledgements <ChevronRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>

        {/* Bio Modal Overlay */}
        {selectedMember && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedMember(null)}
          >
            <div 
              className="relative bg-white w-full max-w-3xl rounded-3xl shadow-2xl overflow-y-auto max-h-[90vh] animate-in fade-in slide-in-from-bottom-4 duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Sticky Close Button Header */}
              <div className="sticky top-0 z-20 flex justify-end p-4 pointer-events-none">
                <button 
                  onClick={() => setSelectedMember(null)}
                  aria-label="Close modal"
                  className="pointer-events-auto p-2 bg-white/90 hover:bg-gray-100 rounded-full transition-all shadow-sm border border-gray-100/80 hover:text-gray-700"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>
              </div>

              {/* Modal Body Content */}
              <div className="px-8 pb-8 md:px-12 md:pb-12 -mt-12">
                <div className="mb-8 border-b border-gray-100 pb-6 pr-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedMember.name}</h2>
                  <p className="text-xl text-[#972037] font-bold">{selectedMember.role}</p>
                  <div className="flex items-center mt-4 text-gray-500 font-medium">
                    <GraduationCap className="w-5 h-5 mr-3 shrink-0 text-[#972037]" />
                    {selectedMember.education}
                  </div>
                </div>

                <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                  <div>{selectedMember.bio}</div>
                  
                  {selectedMember.personal && (
                    <div className="bg-gray-50 p-6 rounded-2xl border-l-8" style={{ borderColor: maroon }}>
                      <p className="text-base italic m-0 text-gray-700">"{selectedMember.personal}"</p>
                    </div>
                  )}

                  <div className="pt-6">
                    <p className="font-bold text-gray-900 mb-3 flex items-center text-sm uppercase tracking-widest">
                      <Scale className="w-4 h-4 mr-2" /> Key Expertise
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {selectedMember.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-bold rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Historical Credits Modal Overlay */}
        {showCredits && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setShowCredits(false)}
          >
            <div 
              className="relative bg-white w-full max-w-3xl rounded-3xl shadow-2xl overflow-y-auto max-h-[90vh] animate-in fade-in slide-in-from-bottom-4 duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Sticky Close Button Header */}
              <div className="sticky top-0 z-20 flex justify-end p-4 pointer-events-none">
                <button 
                  onClick={() => setShowCredits(false)}
                  aria-label="Close modal"
                  className="pointer-events-auto p-2 bg-white/90 hover:bg-gray-100 rounded-full transition-all shadow-sm border border-gray-100/80 hover:text-gray-700"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>
              </div>

              {/* Modal Body Content */}
              <div className="px-8 pb-8 md:px-12 md:pb-12 -mt-12">
                <div className="mb-8 border-b border-gray-100 pb-6 pr-10">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Historical Credits and Thanks</h2>
                  <p className="text-xl text-[#972037] font-bold">Honoring Our Past</p>
                </div>

                <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                  <p>
                    Petrotek has both current team members and numerous prior staff members that have contributed to the growth and success of our company. Our current crew thanks everyone that has historically been a part of our organization for their contributions.
                  </p>
                  
                  <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-gray-300">
                    <h4 className="font-bold text-gray-900 mb-2 text-xl">In Memoria: Rick Lyle</h4>
                    <p className="mb-4">
                      Rick Lyle was one of the original founders of Petrotek in 1993. He played an early role in the establishment of the firm’s Colorado office and served as a lead engineer for many field projects over his career.
                    </p>
                    <p className="mb-4">
                      Outside of his thirty-year practice as a petroleum engineer, Rick loved to travel and is remembered for his sense of adventure and efforts to always find a way to have fun.
                    </p>
                    <p>
                      Rick passed away in 2024 after a long battle with health complications from a stroke that disabled him in 2011.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-gray-300">
                    <h4 className="font-bold text-gray-900 mb-2 text-xl">James Junkin & Mark Sippel</h4>
                    <p>
                      James Junkin and Mark Sippel were also part of the original four founding engineers that set-up Petrotek in 1993 when their former employer, Research and Engineering Consultants, Inc., closed its doors. Mark left to return to working for an oil producer in Colorado early in the history of Petrotek, and James continued helping Petrotek with IT for over 30 years after he began an independent computer programming career in the mid-1990s.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-20 p-12 bg-gray-50 rounded-3xl border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Technical Leadership</h3>
            <p className="text-gray-600">Our professionals hold degrees in Petroleum, Geological, Chemical Engineering, and Geoscience.</p>
          </div>
          <Link 
            to="/" 
            onClick={() => setTimeout(() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'}), 100)}
            className="px-8 py-4 bg-[#972037] text-white font-bold rounded-lg hover:brightness-110 transition-all shadow-lg shrink-0"
          >
            Contact a Specialist
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;