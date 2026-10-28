// src/pages/CaptureStorage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { 
  ArrowRight, 
  HelpCircle,
  Plus,
  Minus,
  Leaf,
  ChevronRight
} from 'lucide-react';

const CaptureStorage = () => {
  const maroon = "#166534";
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const servicesList = [
    "Permitting approach to meet 45Q deadline",
    "Site screening and feasibility",
    "Geologic characterization",
    "Fatal flaw project evaluation",
    "Reservoir characterization",
    "Migration and containment simulation and evaluation",
    "Federal and state Class VI UIC permits",
    "Regulatory evaluation for CCS planning and regulatory negotiations",
    "Financial assurance evaluations",
    "Tax equity partnership support",
    "45Q qualification and determination",
    "Injection well design and preliminary surface facility design",
    "Technology outreach and training for both technical and non-technical personnel",
    "Drilling engineering and wellsite supervision",
    "Completions engineering and wellsite supervision",
    "Operations and monitoring support"
  ];

  const accordionData = [
    {
      question: "Are CCS wells safe?",
      content: (
        <>
          <p className="mb-4">Disposal wells are the safest, most effective way to remove CO2 from the environment and safely store in the subsurface. Protection of potential drinking water sources is the primary concern in the construction, operation and regulatory oversight of such wells. Deep well technology has been proven through wide use of over more than 50 years and is suitable for removing CO2 from the environment. Class VI wells, used for injecting CO2 must be constructed to similar but more stringent standards as compared to Class I wells. Additional monitoring is employed for Class VI wells that requires periodic monitoring of shallow ground water quality and geochemical changes above the confining zone(s) and direct monitoring of the pressure front in the injection zone.</p>
          <p className="mb-4">There has never been an instance of surface or drinking water contamination due to operation of a Class I disposal well that was sited, constructed and operated according to current US EPA standards.</p>
          <p className="mb-4">The US Government has found Class I wells are safer than virtually all other waste disposal practices. The US EPA reports that approximately 20 billion gallons of liquid waste is safely and permanently disposed of each year in the United States using Class I disposal wells.</p>
          <p className="mb-4">Based on a number of academic studies and the collection of data from existing well sites, waste concentrations are reduced by natural processes in the disposal formation after injection. In addition to dilution by mixing with natural brines, neutralization, adsorption, precipitation, other reactions and microbial degradation occur in the injection zone. This serves as waste treatment underground.</p>
          <p className="mb-4">Disposal wells of various types are used in countries throughout the world to safely manage liquid waste by permanently isolating it from the environment. Environment Canada, the primary environmental regulatory agency in Canada, approves and permits disposal into deep wells in appropriate areas as a responsible option for the management of liquid wastes.</p>
          <p className="mb-4">The Kansas Department of Health and Environment says that “injection into a Class I well is considered an environmentally sound practice”. The state of Kansas has several hundred oil and gas disposal wells and almost 50 Class I industrial disposal wells.</p>
          <p className="mb-4">The Michigan Department of Natural Resources (MDNR) has documentation that no instances of well failure or contamination have occurred due to Class I well operation in the state. In addition, the Michigan Deep Well Injection Committee reported that “Most of Michigan has the subsurface geologic conditions required for proper waste disposal by deep well injection”.</p>
          <p>The largest concentration of disposal wells in the United States is in Texas (including almost 100 Class I wells). The Texas Natural Resources Conservation Commission that regulates these injection systems says that deep well injection has “an excellent record of environmental protection”.</p>
        </>
      )
    },
    {
      question: "Who regulates CCS wells?",
      content: (
        <>
          <p className="mb-4">Throughout the United States, the Environmental Protection Agency (USEPA) provides oversight and closely monitors Class VI injection well operations. Laws, policies and regulations have matured over the past 100 years to enhance the safety of both non-hazardous and hazardous injection well operation. In some cases State governments have been granted primary authority to conduct the Class VI Underground Injection Control (UIC) program. In others, the Federal government directly implements the regulations. In all cases, strict standards are enforced by law to ensure that environmentally protective practices are followed. Regulations for Class II injection in EOR projects is mature in most states. Geologic and engineering information is carefully evaluated before injection well construction can begin and is reviewed after drilling has been completed, and before injection operations are authorized. Continuous protection of all usable groundwater is accomplished by rigid construction and monitoring requirements. In addition to strict construction requirements, annual testing and limitation of waste type, disposal volume and injection well pressure limits are required to further promote protection of the accessible environment. Detailed records of wastes disposed and all site operations must be submitted to the EPA regulators and made available to the public. Twenty-four-hour monitoring of operations is required to verify safe operation and permit compliance.</p>
          <p className="mb-2">You can learn more about Class VI injection wells by visiting the EPA website at: <a href="https://www.epa.gov/uic/class-vi-wells-used-geologic-sequestration-co2" className="text-[#166534] font-bold hover:underline" target="_blank" rel="noopener noreferrer">https://www.epa.gov/uic/class-vi-wells-used-geologic-sequestration-co2</a></p>
          <p>You can learn more about Class II EOR wells by visiting the EPA website at: <a href="https://www.epa.gov/uic/class-ii-oil-and-gas-related-injection-wells" className="text-[#166534] font-bold hover:underline" target="_blank" rel="noopener noreferrer">https://www.epa.gov/uic/class-ii-oil-and-gas-related-injection-wells</a></p>
        </>
      )
    },
    {
      question: "What is the nature of the liquid in the injection zone?",
      content: "By almost any definition, the naturally occurring waters typically present in injection zones are highly saline and unfit for use. The salinity of the native brines is often several times the concentration of normal seawater."
    },
    {
      question: "How do well operators inject CO2 into the ground?",
      content: "The pore space (void space inside the rock [picture a hard sponge]) in the formations at several thousand feet of depth in the vicinity of disposal wells is already 100% saturated with natural salt water called brine. In many injection zones, the brine has a specific gravity of between 1.05 and 1.2 (i.e., several times the salinity of seawater).  When operated, Class VI wells have CO2  inside the tubing from the surface all the way down to the injection zone. By adding a controlled amount of pressure to the fluid by pumping during disposal operations, wells can be used to add CO2 to the brine already present in the injection formation. This is accomplished by pushing natural fluids out of the rock pore spaces near the well and into neighboring pore spaces.  This is accomplished by compressing the CO2 and the native fluid inside the rock spaces to a higher pressure. This effect continues radially away from the well."
    },
    {
      question: "Does the permitting process consider how long such a well can be used?",
      content: "Yes. The permitting process considers a wide variety of factors regarding injection well operations and site suitability which includes a determination of how long a well can be used and how much CO2 can be disposed in a well. These limitations are determined based on the capacity of the disposal reservoir and the expected operational lifetime of the well components. Fortunately, these issues are also monitored on a daily, monthly and annual basis. If well monitoring shows any problems with system performance, the well must be shut down and repaired or permanently abandoned to make certain that waste stays in the injection zone according to the permitted well design. Clauses describing this monitoring, repair or abandonment, and the financial assurance to follow the specified procedures, are required as permit conditions before injection operations can begin."
    },
    {
      question: "How are CCS wells monitored to ensure safety and compliance with the law?",
      content: (
        <>
          <p className="mb-4">Standards for monitoring dedicated CCS wells are under development and are much more rigorous than existing Class I standards. For Class I and Class II wells, various standards are applied. For wells permitted as industrial injectors, monitoring conducted to verify the suitability of the well for continued injection of waste is essentially of two types: continuous and periodic. Continuous monitoring provides data regarding how the well is operated, and is used to document operational changes that could signal any change in the well condition. Periodic monitoring is used to validate the continuous monitoring, and to more thoroughly investigate well and disposal reservoir conditions to verify waste containment.</p>
          <p className="mb-4">Periodic mechanical integrity testing of well systems is conducted as required by regulations. Based on initial completion as a non-hazardous well, Part I annual testing will consist of standard one-hour static annulus pressure testing and an associated reservoir falloff test. The annulus pressure test measurements are recorded using a calibrated pressure gauge on the wellhead, witnessed by a regulatory inspector. A maximum change in pressure is allowed during the one-hour test. The gauges used to monitor pressure during the casing/tubing annular pressure tests are calibrated with a deadweight tester which is accurate to 0.1% of indicated pressure. Copies of gauge certifications are included with the pressure test records and reports.</p>
          <p>Part II periodic mechanical integrity testing is completed before wells become operational and thereafter on a five-year cycle or as required by permit. For wells used to inject non-hazardous waste, this testing consists of a radioactive tracer survey or equivalent acceptable method to verify the adequacy of the cement at the base of the long-string casing. In addition, well logging designed to investigate vertical movement of fluids behind pipe will be conducted in the form of temperature, noise, oxygen activation logging or equivalent acceptable testing. Part II periodic mechanical integrity testing is required on an annual basis for wells used to dispose of hazardous wastes. Continuous monitoring will also be accomplished as required by regulation to record injection rate, injection pressure, annulus pressure and pressure differentials. Analysis of the waste stream for chemical and physical parameters is also completed on a case-by-case basis as required by permit.</p>
        </>
      )
    }
  ];

  return (
    <div className="pt-32 pb-20 px-6 bg-white min-h-screen">
      <Seo title="Carbon Capture & Storage Class VI Permitting - Petrotek" description="CCS feasibility studies, Class VI UIC permit applications, 45Q support, and geologic sequestration engineering." path="/carbon-capture" />
      <div className="container mx-auto">
        
        <div className="max-w-8xl mx-auto">
     
        {/* Navigation - Back to Home */}
        <Link to="/" className="flex items-center text-[#972037] font-bold mb-8 hover:underline group w-fit">
          <ArrowRight className="rotate-180 w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Home
        </Link>          

          {/* Header Section */}
          <div className="mb-12">
            <div className="mb-6 p-4 bg-gray-50 inline-block rounded-2xl border border-gray-100 shadow-sm">
              <Leaf className="w-10 h-10" style={{ color: maroon }} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Carbon Capture & Storage (CCS)</h1>
            <p className="text-xl text-[#166534] font-bold mb-6">Geologic Sequestration and Class VI Permitting</p>
            <div className="w-24 h-1 mb-8" style={{ backgroundColor: maroon }}></div>
          </div>

          {/* Detailed Content with Side-by-Side Image */}
          <div className="flex flex-col lg:flex-row gap-12 mb-20 items-start">
            {/* Left Column: Text Content & List */}
            <div className="lg:w-3/5">
              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed mb-8">
                <p>
                  A rapidly developing method for sequestration is carbon capture and storage (CCS) in geologic systems. Based on our in-depth experience with all facets of injection well technology and involvement with early CCS project evaluations, Petrotek is an ideal choice for conducting feasibility studies, preparing permits and designing pilot scale projects.
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Our experience and current services include:</h3>
                <ul className="space-y-3">
                  {servicesList.map((item, i) => (
                    <li key={i} className="flex items-start">
                      {/* Replaced CheckCircle2 with a custom styled bullet point */}
                      <span className="w-2 h-2 mt-2 mr-3 bg-[#166534] rounded-full flex-shrink-0"></span>
                      <span className="text-gray-700 font-medium text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          {/* Right Column: Image - REMOVED WRAPPER DIV STYLING */}
              <div className="lg:w-5/5 sticky top-32" >
                <img 
                  src="/CO2_Storage_Rev_2026.png" 
                  alt="CO2 Storage Options" 
                  className="w-full h-auto object-contain cursor-zoom-in"
                />
            </div>
          </div>

          {/* CCS Well FYI Accordion Section */}
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-[#166534] mb-8 flex items-center">
              <HelpCircle className="mr-3" /> CCS Well FYI
            </h2>
            
            <div className="space-y-4">
              {accordionData.map((item, index) => (
                <div key={index} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm bg-white hover:border-[#166534]">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-bold text-lg text-gray-900">{item.question}</span>
                    <span className="ml-4 text-[#166534]">
                      {openIndex === index ? <Minus size={24} /> : <Plus size={24} />}
                    </span>
                  </button>
                  
                  <div 
                    className={`grid transition-all duration-300 ease-in-out ${
                      openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-6 pt-2 border-t border-gray-100 text-gray-600 leading-relaxed">
                        {item.content}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center p-12 bg-gray-50 rounded-3xl border border-dashed border-gray-300">
             <h3 className="text-2xl font-bold mb-6 text-gray-900">Ready to discuss your Carbon Sequestration project?</h3>
             <Link 
               to="/" 
               onClick={() => setTimeout(() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'}), 100)}
               className="inline-flex items-center px-8 py-4 bg-[#166534] text-white font-bold rounded-lg hover:brightness-110 transition-all shadow-lg"
             >
               Contact Our CCS Experts <ChevronRight className="ml-2 w-5 h-5" />
             </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CaptureStorage;