// src/pages/InjectionWells.jsx
import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Droplet, 
  ClipboardCheck, 
  Beaker, 
  Settings, 
  ShieldCheck, 
  CheckCircle2, 
  Info,
  ChevronRight,
  Plus,
  Minus,
  HelpCircle,
  AlertTriangle,
  CheckCircle,
  Layers,
  Briefcase
} from 'lucide-react';

/* =========================================================================
   1. NON-HAZARDOUS DATA & CONFIGURATION (Edit this independently)
   ========================================================================= */
const nonHazQuotes = [
  { 
    text: "Class I wells are strictly regulated to ensure injected fluids stay within the intended injection zone and do not endanger drinking water.", 
    source: "EPA 40 CFR Part 144" 
  },
  { 
    text: "UIC regulations mandate multiple layers of protective casing and cement to provide redundant safeguards for public health.", 
    source: "EPA Safe Drinking Water Act" 
  },
  { 
    text: "Deep well technology has been proven through wide use over more than 50 years with an excellent record of environmental protection.", 
    source: "TCEQ / EPA Oversight" 
  },
  { 
    text: "Class VI requirements ensure safe and secure sequestration of CO2 through comprehensive site characterization and modeling.", 
    source: "EPA Geologic Sequestration Regulations" 
  },
  { 
    text: "Continuous monitoring of injection pressure and flow rate provides real-time verification of well integrity and permit compliance.", 
    source: "EPA UIC Fact Sheet" 
  }
];

const nonHazCategories = [
  {
    title: "Feasibility and Permitting",
    icon: <ClipboardCheck className="w-6 h-6" />,
    bgImage: "https://www.napawatersheds.org/img/managed/AppPage/11088/image.jpg", 
    items: [
      "Feasibility and Permitting for all well classes (I, II, III, V, VI)",
      "Geologic characterization",
      "Area of Review evaluation",
      "Injectate plume and Cone of Influence modeling",
      "Well design, installation, completion, & testing",
      "Geochemical and construction material compatibility",
      "Stimulations and workovers",
      "Waste analysis plans",
      "Aquifer exemption applications",
      "Litigation support & expert witness testimony",
      "Public meeting support"
    ]
  },
  {
    title: "Well Testing and Assessment",
    icon: <Beaker className="w-6 h-6" />,
    bgImage: "https://testwells.com/wp-content/uploads/simple-well-test-analysis-.jpg",
    items: [
      "Falloff testing design and analysis",
      "Step-rate testing design and analysis",
      "Well performance diagnostics",
      "Pressure interference evaluation",
      "Well testing site supervision"
    ]
  },
  {
    title: "Field Operations",
    icon: <Settings className="w-6 h-6" />,
    bgImage: "https://www.emag.com/blog/en/wp-content/uploads/sites/2/2025/06/Blog_How-does-it-work_drill-rig_1170x781-px-1024x684.jpg",
    items: [
      "Well intervention and workovers planning and site supervision",
      "Drilling and completion",
      "Stimulations",
      "Well testing",
      "Wellsite planning",
      "Wellsite project management",
      "Field procedure design and execution",
      "Well closure (plugging & abandonment)"
    ]
  },
  {
    title: "Reservoir Modeling",
    icon: <Layers className="w-6 h-6" />,
    bgImage: "https://www.slb.com/-/media/images/di/intersect/intersect_hero_1416x1140.jpg?la=en&h=1140&w=1416&hash=A127AD275A8446B4060AF2F7CC105731",
    items: [
      "Plume boundary and drift",
      "Cone of Influence",
      "Offset injection effects",
      "Geologic effects",
      "Experts in a variety of public and proprietary softwares to model injection"
    ]
  },
  {
    title: "Commercial Operations",
    icon: <Briefcase className="w-6 h-6" />,
    bgImage: "https://singermultiprod.fantasktic.com/wp-content/uploads/sites/10/2025/06/Blog_Tank-Truck-Transfer-1-1600x1000.webp",
    items: [
      "Additional record keeping and monitoring",
      "Waste Analysis/Acceptance Plans",
      "Fingerprint analysis",
      "Additional commercial-specific requirements support"
    ]
  },
  {
    title: "Operations and Regulatory Support",
    icon: <ShieldCheck className="w-6 h-6" />,
    bgImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
    items: [
      "Permit compliance support",
      "Operational support",
      "State and Federal monitoring reports",
      "Compliance audit and evaluation support",
      "Operator and compliance training",
      "Contract injection operation"
    ]
  }
];

const nonHazTechData = [
  {
    question: "What injection streams are disposed in Class I injection wells?",
    content: (themeColor) => (
      <>
        <p className="mb-4 text-gray-600 leading-relaxed">
          A wide variety of liquid wastes can be managed using deep injection well technology. Typically, these wastes are low-concentration waste streams that have been pre-treated and cannot be discharged to surface waters. Some common dilute wastes now managed via deep well disposal include:
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <ul className="space-y-2">
            {["Salt Water Brines", "PFAS/PFOS Waste Waters", "Landfill Leachate", "Industrial Washwaters and Process Byproducts", "Treated Industrial Effluent", "Agricultural Waste Waters"].map((item, i) => (
              <li key={i} className="flex items-start text-sm text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full mt-2 mr-2 flex-shrink-0" style={{ backgroundColor: themeColor }}></span>
                {item}
              </li>
            ))}
          </ul>
          <ul className="space-y-2">
            {["Storm Water and Municipal Water Supply RO Brine", "Meat & Crop Processing Liquids", "Inorganic and Organic Solutions", "Industrial Cleaning Solutions", "Groundwater Remediation/Clean-up Waters"].map((item, i) => (
              <li key={i} className="flex items-start text-sm text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full mt-2 mr-2 flex-shrink-0" style={{ backgroundColor: themeColor }}></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <p className="text-gray-600 italic border-l-4 pl-4" style={{ borderColor: themeColor }}>
          For comparison, the concentrations of disposed materials in many of these injected wastes are similar to mixing a two-gallon can of a product like salt into a large tank of fresh water (10 gallons / 4000 gallons ~ 5000 parts per million).
        </p>
      </>
    )
  },
  {
    question: "What industries use deep well disposal?",
    content: (themeColor) => (
      <>
        <p className="mb-4 text-gray-600 leading-relaxed">
          A wide variety of domestic and foreign facilities now depend on deep injection wells for the safe disposal of liquid wastes. Some of the industries in the United States that use deep injection well technology include:
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            "Food Processors", "Chemical Plants", "Oil and Gas", "Pharmaceuticals",
            "Ethanol Plants", "Cosmetics", "Municipal Water Supply", "Mining",
            "Refineries", "Power Generation", "Heavy Manufacturing", "Waste Management",
            "Potable Water-treatment", "Food Production", "Steel Mills", "Clothing Manufacturing"
          ].map((industry, i) => (
            <div key={i} className="flex items-center text-sm font-medium text-gray-700 bg-gray-50 px-3 py-2 rounded-lg border border-gray-100">
              <CheckCircle2 className="w-4 h-4 mr-2 opacity-80" style={{ color: themeColor }} />
              {industry}
            </div>
          ))}
        </div>
      </>
    )
  }
];

const nonHazFyiData = [
  {
    question: "Where are disposal wells?",
    content: () => "Disposal, or injection wells, are used throughout the world. In the United States, disposal wells associated with oil and gas production are regulated as Class II wells while industrial injectors are regulated as Class I wells. In the oil and gas industry, disposal wells can be found in most areas where hydrocarbons are produced. Class I wells are used in areas where there is an industrial need and where both restrictive geologic and hydrologic standards can be met. A primary consideration in well location is the natural ability of underground formations to contain and isolate both natural and injected fluids. The geology in many areas of the United States where a thick section of sedimentary rock is present often meet these strict requirements. There are more than 400,000 disposal wells currently operating throughout the United States. Approximately 1,000 of these injectors are Class I wells."
  },
  {
    question: "Are disposal wells safe?",
    content: () => (
      <>
        <p className="mb-4">Class I industrial disposal wells are the safest, most effective way to manage many dilute liquid industrial wastes. Protection of drinking and irrigation water is the primary concern in the construction, operation and regulatory oversight of such wells. Deep well technology has been proven through wide use over more than 50 years. There has never been an instance of surface or drinking water contamination due to operation of a Class I disposal well that was sited, constructed and operated according to current US EPA standards.</p>
        <p className="mb-4">In the United States, Class I industrial deep wells are built to strict standards and operated under tight regulation and oversight. Class I wells have been used throughout the country during the past century to protect the environment from the surface disposal of industrial liquid wastes.</p>
        <p className="mb-4">Based on a number of academic studies and the collection of data from existing well sites, waste concentrations are reduced by natural processes in the disposal formation after injection. In addition to dilution by mixing with natural brines, neutralization, adsorption, precipitation, other reactions and microbial degradation occur in the injection zone. This serves as waste treatment underground.</p>
        <p className="mb-4">Disposal wells of various types are used in countries throughout the world to safely manage liquid waste by permanently isolating it from the environment. Environment Canada, the primary environmental regulatory agency in Canada, approves and permits disposal into deep wells in appropriate areas as a responsible option for the management of liquid wastes.</p>
        <p className="mb-4">The Kansas Department of Health and Environment says that “injection into a Class I well is considered an environmentally sound practice”. The state of Kansas has several hundred oil and gas disposal wells and almost 50 Class I industrial disposal wells.</p>
        <p className="mb-4">The Michigan Department of Natural Resources (MDNR) has documentation that no instances of contamination have occurred due to Class I well operation in the state. In addition, the Michigan Deep Well Injection Committee reported that “Most of Michigan has the subsurface geologic conditions required for proper waste disposal by deep well injection”.</p>
        <p>The largest concentration of disposal wells in the United States is in Texas (including almost 100 Class I wells). The Texas Commission on Environmental Quality that regulates these injection systems says that deep well injection has “an excellent record of environmental protection”.</p>
      </>
    )
  },
  {
    question: "Who regulates Class I, III, V and VI disposal wells?",
    content: (themeColor) => (
      <>
        <p className="mb-4">Throughout the United States, the Environmental Protection Agency and approved State Underground Injection Control (UIC) programs provide oversight and closely monitor deep well disposal operations under the Safe Drinking Water Act regulations. Laws, policies and regulations have matured over the past 70 years to enhance the safety of both non-hazardous and hazardous injection well operation. In all cases, strict standards are enforced by law to ensure that environmentally protective practices are followed. Geologic and engineering information is carefully evaluated and approved by regulators before deep well construction can begin. After drilling has been completed, the data are further reviewed and final approval granted by the regulators before injection operations begin. Continuous protection of all usable (&lt;10,000 mg/l TDS) groundwater is accomplished by rigid construction and monitoring requirements that provide at least four separate layers of protection. In addition to strict construction requirements, annual testing and limitation of waste type, disposal volume and injection well pressure are required to further promote protection of the subsurface environment. Detailed records of wastes disposed and all site operations must be submitted to the EPA or state regulators. Twenty-four-hour monitoring of operations is required to verify safe operation and permit compliance.</p>
        <p>
          You can learn more about Class I injection wells by visiting the EPA website at: <a href="https://www.epa.gov/uic" target="_blank" rel="noopener noreferrer" className="hover:underline font-bold" style={{ color: themeColor }}>https://www.epa.gov/uic</a>
        </p>
      </>
    )
  },
  {
    question: "What is the nature of the liquid in the injection zone?",
    content: () => "By almost any definition, the naturally occurring waters typically present in injection zones are highly saline and unfit for use. The salinity of the native brines is often several times the concentration of normal seawater. In fact, the natural waters often demonstrate many similarities to some of the wastes that are injected into the zones for disposal."
  },
  {
    question: "How do well operators inject wastewater into the ground?",
    content: () => "The pore space (void space inside the rock [picture a hard sponge]) in the formations at several thousand feet of depth in the vicinity of disposal wells is already 100% saturated with natural salt water called brine. In many injection zones, the brine has a specific gravity of between 1.05 and 1.2 (i.e., several times the salinity of seawater). When operated, Class I wells have fluid inside the tubing from the surface all the way down to the injection zone. By adding a controlled amount of pressure to the fluid by pumping during disposal operations, wells can be used to add the injectate to the brine already present in the injection formation. This is accomplished by pushing natural fluids out of the rock pore spaces near the well and into neighboring pore spaces. This is accomplished by compressing the injection fluids and the native fluid inside the rock spaces to a higher pressure. This effect continues radially away from the well."
  },
  {
    question: "Does the permitting process consider how long such a well can be used?",
    content: () => "Yes. The permitting process considers a wide variety of factors regarding injection well operations and site suitability which includes a determination of how long a well can be used and how much liquid can be disposed in a well. These limitations are determined based on the capacity of the disposal reservoir, the anticipated injection rate, and the expected operational lifetime of the well components. Injection pressure and injection rate and reservoir pressure are monitored on daily and an annual basis, respectively. If well monitoring shows any problems with system performance, the well must be shut down and repaired or permanently abandoned to make certain that waste remains in the injection zone according to the permitted well design and permit conditions. UIC permits stipulate monitoring requirements, financial assurance requirements, operational repair or well abandonment conditions, and reporting requirements for the well operation."
  },
  {
    question: "How are injection wells monitored to ensure safety and compliance with the law?",
    content: () => (
      <>
        <p className="mb-4">Periodic mechanical integrity testing of well systems is conducted as required by federal and state regulations. Based on initial completion as a Class I well, Part I mechanical integrity testing usually consists of annulus pressure testing and an associated reservoir pressure falloff test. The annulus pressure test measurements are recorded using a calibrated pressure gauge on the wellhead, and are often witnessed by a regulatory inspector. A predetermined pressure change is allowed during the 30- to 60-minute test to determine pass/fail criteria. The gauges used to monitor pressure during the casing/tubing annular pressure tests are calibrated to 0.1% of indicated actual pressure. Copies of gauge certifications are included with the pressure test records and reports.</p>
        <p className="mb-4">Part II periodic mechanical integrity testing is completed before wells become operational and thereafter on a two- to five-year cycle as required by regulations and/or permit. For well Class I wells, part II mechanical integrity testing consists of a radioactive tracer survey or equivalent acceptable method to verify the adequacy of the cement at the base of the protection casing. In addition, part II mechanical integrity test well logs designed to investigate vertical movement of fluids behind pipe will be conducted in the form of temperature, noise, oxygen activation or equivalent logs. Part II mechanical integrity testing generally is required on an annual basis for wells used to dispose of hazardous wastes and every 2 to 5 years for non-hazardous waste wells.</p>
      </>
    )
  }
];

/* INDEPENDENT NON-HAZARDOUS LAYOUT COMPONENT */
const NonHazardousContent = ({
  themeColor,
  imageSrc,
  techOpenIndex,
  toggleTechAccordion,
  fyiOpenIndex,
  toggleFyiAccordion
}) => (
  <div>
    {/* Intro Section & Image */}
    <div className="flex flex-col lg:flex-row gap-12 mb-20 items-start">
      <div className="lg:w-3/5 flex flex-col">
        {/* Callout Box */}
        <div className="mb-10 p-6 bg-gray-50 rounded-xl border-l-4" style={{ borderColor: themeColor }}>
          <div className="flex items-center mb-3">
            <HelpCircle className="w-6 h-6 mr-3" style={{ color: themeColor }} />
            <h3 className="text-lg font-bold text-gray-900 m-0">Why Are Injection Wells Important?</h3>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed m-0">
            Most industrial processes generate low-concentration waste streams called wastewater. Often these liquids are pre-treated, but some or all of the fluid volume cannot be discharged to the surface environment or into shallow aquifers. For these reasons, many liquid wastes are managed via non-hazardous deep injection wells. These wells inject wastewater into deep subsurface geologic formations that are isolated from any potential drinking water aquifers.
          </p>
          <br/>
          <p className="text-sm text-gray-600 leading-relaxed m-0">
            In addition, with stricter requirements surrounding PFAS disposal, EPA (April 20, 2026) stated that deep injection wells provide an option for waste management of PFAS with a lower potential for release than other technologies. The same rationale applies to and has been proven for other waste streams predating the Safe Drinking Water Act.
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed mb-10">
          <p>
            Our team has hundreds of years of combined injection well permitting, operating, monitoring, and testing experience. We are knowledgeable of state and federal regulations. We have positive working relationships with state and federal regulators throughout the country. Petrotek personnel maintain Professional Engineer (P.E.) and Professional Geology (P.G.) and offers these services where licensed. Our staff provides technical consulting and field services regarding a wide variety of issues to ensure the continued safe and responsible operation for all UIC injection well classes.
          </p>
          <br/>
          <p>
            Petrotek staff are experienced with deepwell permitting issues related to existing and new facilities throughout the United States, providing UIC permit applications and renewals that have been approved by state and federal regulatory agencies.
          </p>
        </div>

        {/* EPA Marquee */}
        <div className="relative bg-white rounded-xl border border-gray-100 overflow-hidden py-8 px-6 shadow-sm">
          <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>

          <div className="flex flex-col h-[250px]">
            <div className="mb-6 flex items-center gap-2 relative z-20">
              <ShieldCheck size={18} style={{ color: themeColor }} />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">EPA Regulatory Perspectives</span>
            </div>

            <div className="overflow-hidden relative h-full">
              <div className="animate-marquee-vertical flex flex-col gap-8">
                {[...nonHazQuotes, ...nonHazQuotes].map((quote, i) => (
                  <div key={i} className="flex flex-col border-l-2 border-gray-100 pl-4 py-1">
                    <p className="text-gray-800 font-medium text-base italic leading-relaxed whitespace-normal">
                      "{quote.text}"
                    </p>
                    <p className="text-[10px] font-bold mt-2 uppercase tracking-widest" style={{ color: themeColor }}>
                      — {quote.source}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Image */}
      <div className="lg:w-3/5 sticky top-32">
        <img 
          src={imageSrc} 
          alt="Non-Hazardous Injection Well 3D Diagram" 
          className="w-full h-auto object-contain cursor-zoom-in"
        />
      </div>
    </div>

    {/* Service Categories Grid */}
    <div className="grid md:grid-cols-2 gap-8 mb-20">
      {nonHazCategories.map((cat, idx) => (
        <div 
          key={idx} 
          style={{ '--card-theme': themeColor }}
          className="flex flex-col group rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 bg-white shadow-sm hover:!border-[var(--card-theme)]"
        >
          <div className="relative h-56 w-full overflow-hidden shrink-0">
            <img 
              src={cat.bgImage} 
              alt={cat.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          </div>

          <div className="relative p-8 flex flex-col flex-grow">
            <div className="absolute -top-8 left-8 bg-white p-4 rounded-xl shadow-md border border-gray-50 flex items-center justify-center">
              {React.cloneElement(cat.icon, { style: { color: themeColor }, className: "w-7 h-7" })}
            </div>

            <h3 
              className="text-xl font-bold mb-6 mt-4 text-gray-900 transition-colors group-hover:!text-[var(--card-theme)]"
            >
              {cat.title}
            </h3>
            
            <ul className="space-y-2.5 flex-grow">
              {cat.items.map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 mr-2.5 mt-0.5 shrink-0" style={{ color: themeColor }} />
                  <span className="text-gray-600 font-medium text-sm leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>

    {/* Technology Accordion Section */}
    <div className="max-w-4xl mx-auto mb-20">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center" style={{ color: themeColor }}>
        <Info className="mr-3" /> Learn more about Injection Well Technology
      </h2>
      
      <div className="space-y-4">
        {nonHazTechData.map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm bg-white transition-colors">
            <button
              onClick={() => toggleTechAccordion(index)}
              className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
            >
              <span className="font-bold text-lg text-gray-900">{item.question}</span>
              <span className="ml-4" style={{ color: themeColor }}>
                {techOpenIndex === index ? <Minus size={24} /> : <Plus size={24} />}
              </span>
            </button>
            
            <div 
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                techOpenIndex === index ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                {item.content(themeColor)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    
    {/* Video Section */}
    <div className="max-w-4xl mx-auto mb-20">
      <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-gray-200" style={{ paddingBottom: '56.25%' }}>
        <iframe 
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/JpgU5Ewde_E?si=E_Zqcpbo-Bi8M5nI" 
          title="Protective Aspects of Injection Wells" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>
    </div>

    {/* Disposal Well FYI Accordion Section */}
    <div className="max-w-4xl mx-auto mb-20">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center" style={{ color: themeColor }}>
        <HelpCircle className="mr-3" /> Disposal Well FYI
      </h2>
      
      <div className="space-y-4">
        {nonHazFyiData.map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm bg-white transition-colors">
            <button
              onClick={() => toggleFyiAccordion(index)}
              className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
            >
              <span className="font-bold text-lg text-gray-900">{item.question}</span>
              <span className="ml-4" style={{ color: themeColor }}>
                {fyiOpenIndex === index ? <Minus size={24} /> : <Plus size={24} />}
              </span>
            </button>
            
            <div 
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                fyiOpenIndex === index ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-6 pb-6 pt-2 border-t border-gray-100 text-gray-600 leading-relaxed">
                {item.content(themeColor)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);


/* =========================================================================
   2. HAZARDOUS DATA & CONFIGURATION (Edit this independently)
   ========================================================================= */
const hazQuotes = [
  { 
    text: "Injection proved to be a safe and inexpensive option for the disposal of unwanted and often hazardous industrial byproducts.", 
    source: "US EPA UIC Program" 
  },
  { 
    text: "Class I wells are strictly regulated to ensure injected fluids stay within the intended injection zone and do not endanger drinking water.", 
    source: "EPA 40 CFR Part 144" 
  },
  { 
    text: "Disposers must demonstrate that waste will remain isolated for as long as it remains hazardous—defined as 10,000 years by regulation.", 
    source: "EPA RCRA Land Disposal Restrictions" 
  },
  { 
    text: "UIC regulations mandate multiple layers of protective casing and cement to provide redundant safeguards for public health.", 
    source: "EPA Safe Drinking Water Act" 
  },
  { 
    text: "Deep well technology has been proven through wide use over more than 50 years with an excellent record of environmental protection.", 
    source: "TCEQ / EPA Oversight" 
  },
  { 
    text: "Class VI requirements ensure safe and secure sequestration of CO2 through comprehensive site characterization and modeling.", 
    source: "EPA Geologic Sequestration Regulations" 
  },
  { 
    text: "Continuous monitoring of injection pressure and flow rate provides real-time verification of well integrity and permit compliance.", 
    source: "EPA UIC Fact Sheet" 
  }
];

const hazCategories = [
  {
    title: "Feasibility Studies, Permitting, and Land Ban Petition Exemptions",
    icon: <ClipboardCheck className="w-6 h-6" />,
    bgImage: "https://www.napawatersheds.org/img/managed/AppPage/11088/image.jpg", 
    items: [
      "Geologic characterization",
      "Area of Review evaluation",
      "Injectate plume and Cone of Influence modeling",
      "Hazardous waste fate and transport",
      "Geochemical and construction material compatibility",
      "Well design, installation, completion, & testing",
      "Stimulations and workovers",
      "Waste analysis plans",
      "Aquifer exemption applications",
      "Litigation support & expert witness testimony",
      "Public meeting support"
    ]
  },
  {
    title: "Well Testing and Assessment",
    icon: <Beaker className="w-6 h-6" />,
    bgImage: "https://testwells.com/wp-content/uploads/simple-well-test-analysis-.jpg",
    items: [
      "Falloff testing design and analysis",
      "Step-rate testing design and analysis",
      "Well performance diagnostics",
      "Pressure interference evaluation",
      "Well testing site supervision"
    ]
  },
  {
    title: "Field Operations",
    icon: <Settings className="w-6 h-6" />,
    bgImage: "https://www.emag.com/blog/en/wp-content/uploads/sites/2/2025/06/Blog_How-does-it-work_drill-rig_1170x781-px-1024x684.jpg",
    items: [
      "Well intervention and workovers planning and site supervision",
      "Drilling and completion",
      "Stimulations",
      "Well testing",
      "Wellsite planning",
      "Wellsite project management",
      "Field procedure design and execution",
      "Well closure (plugging & abandonment)"
    ]
  },
  {
    title: "Land Ban Petition No Migration Demonstration Modeling",
    icon: <Layers className="w-6 h-6" />,
    bgImage: "https://www.slb.com/-/media/images/di/intersect/intersect_hero_1416x1140.jpg?la=en&h=1140&w=1416&hash=A127AD275A8446B4060AF2F7CC105731",
    items: [
      "Plume boundary and 10,000-year drift",
      "Cone of Influence",
      "Offset injection effects",
      "Geologic effects",
      "Fate and transport modeling",
      "Experts in a variety of public and proprietary softwares to model injection"
    ]
  },
  {
    title: "Commercial Operations",
    icon: <Briefcase className="w-6 h-6" />,
    bgImage: "https://singermultiprod.fantasktic.com/wp-content/uploads/sites/10/2025/06/Blog_Tank-Truck-Transfer-1-1600x1000.webp",
    items: [
      "Additional record keeping and monitoring",
      "Waste Analysis/Acceptance Plans",
      "Fingerprint analysis",
      "Additional commercial-specific requirements support"
    ]
  },
  {
    title: "Operations and Regulatory Support",
    icon: <ShieldCheck className="w-6 h-6" />,
    bgImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
    items: [
      "Permit compliance support",
      "Operational support",
      "State and Federal monitoring reports",
      "Compliance audit and evaluation support",
      "Operator and compliance training",
      "Contract injection operation"
    ]
  }
];

const hazTechData = [
  {
    question: "What injection streams are disposed in Class I injection wells?",
    content: (themeColor) => (
      <>
        <p className="mb-4 text-gray-600 leading-relaxed">
          A wide variety of liquid wastes can be managed using deep injection well technology. Typically, these wastes are low-concentration waste streams that have been pre-treated and cannot be discharged to surface waters. Some common dilute wastes now managed via deep well disposal include:
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <ul className="space-y-2">
            {["Salt Water Brines", "PFAS/PFOS Waste Waters", "Landfill Leachate", "Dilute Hydrocarbons and Solvents", "Heavy Metal Solutions", "Agricultural Waste Waters"].map((item, i) => (
              <li key={i} className="flex items-start text-sm text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full mt-2 mr-2 flex-shrink-0" style={{ backgroundColor: themeColor }}></span>
                {item}
              </li>
            ))}
          </ul>
          <ul className="space-y-2">
            {["Storm Water and Municipal Water Supply RO Brine", "Meat & Crop Processing Liquids", "Inorganic and Organic Solutions", "Industrial Cleaning Solutions", "Groundwater Remediation/Clean-up Waters"].map((item, i) => (
              <li key={i} className="flex items-start text-sm text-gray-700">
                <span className="w-1.5 h-1.5 rounded-full mt-2 mr-2 flex-shrink-0" style={{ backgroundColor: themeColor }}></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <p className="text-gray-600 italic border-l-4 pl-4" style={{ borderColor: themeColor }}>
          For comparison, the concentrations of disposed materials in many of these injected wastes are similar to mixing a two-gallon can of a product like salt into a large tank of fresh water (10 gallons / 4000 gallons ~ 5000 parts per million).
        </p>
      </>
    )
  },
  {
    question: "What industries use deep well disposal?",
    content: (themeColor) => (
      <>
        <p className="mb-4 text-gray-600 leading-relaxed">
          A wide variety of domestic and foreign facilities now depend on deep injection wells for the safe disposal of liquid wastes. Some of the industries in the United States that use deep injection well technology include:
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            "Food Processors", "Chemical Plants", "Oil and Gas", "Pharmaceuticals",
            "Ethanol Plants", "Cosmetics", "Municipal Water Supply", "Mining",
            "Refineries", "Power Generation", "Heavy Manufacturing", "Waste Management",
            "Potable Water-treatment", "Food Production", "Steel Mills", "Clothing Manufacturing"
          ].map((industry, i) => (
            <div key={i} className="flex items-center text-sm font-medium text-gray-700 bg-gray-50 px-3 py-2 rounded-lg border border-gray-100">
              <CheckCircle2 className="w-4 h-4 mr-2 opacity-80" style={{ color: themeColor }} />
              {industry}
            </div>
          ))}
        </div>
      </>
    )
  }
];

const hazFyiData = [
  {
    question: "Where are disposal wells?",
    content: () => "Disposal, or injection wells, are used throughout the world. In the United States, disposal wells associated with oil and gas production are regulated as Class II wells while industrial injectors are regulated as Class I wells. In the oil and gas industry, disposal wells can be found in most areas where hydrocarbons are produced. Class I wells are used in areas where there is an industrial need and where both restrictive geologic and hydrologic standards can be met. A primary consideration in well location is the natural ability of underground formations to contain and isolate both natural and injected fluids. The geology in many areas of the United States where a thick section of sedimentary rock is present often meet these strict requirements. There are more than 400,000 disposal wells currently operating throughout the United States. Approximately 1,000 of these injectors are Class I wells."
  },
  {
    question: "Are disposal wells safe?",
    content: () => (
      <>
        <p className="mb-4">Class I industrial disposal wells are the safest, most effective way to manage many dilute liquid industrial wastes. Protection of drinking and irrigation water is the primary concern in the construction, operation and regulatory oversight of such wells. Deep well technology has been proven through wide use over more than 50 years. There has never been an instance of surface or drinking water contamination due to operation of a Class I disposal well that was sited, constructed and operated according to current US EPA standards.</p>
        <p className="mb-4">In the United States, Class I industrial deep wells are built to strict standards and operated under tight regulation and oversight. Class I wells have been used throughout the country during the past century to protect the environment from the surface disposal of industrial liquid wastes.</p>
        <p className="mb-4">Based on a number of academic studies and the collection of data from existing well sites, waste concentrations are reduced by natural processes in the disposal formation after injection. In addition to dilution by mixing with natural brines, neutralization, adsorption, precipitation, other reactions and microbial degradation occur in the injection zone. This serves as waste treatment underground.</p>
        <p className="mb-4">Disposal wells of various types are used in countries throughout the world to safely manage liquid waste by permanently isolating it from the environment. Environment Canada, the primary environmental regulatory agency in Canada, approves and permits disposal into deep wells in appropriate areas as a responsible option for the management of liquid wastes.</p>
        <p className="mb-4">The Kansas Department of Health and Environment says that “injection into a Class I well is considered an environmentally sound practice”. The state of Kansas has several hundred oil and gas disposal wells and almost 50 Class I industrial disposal wells.</p>
        <p className="mb-4">The Michigan Department of Natural Resources (MDNR) has documentation that no instances of contamination have occurred due to Class I well operation in the state. In addition, the Michigan Deep Well Injection Committee reported that “Most of Michigan has the subsurface geologic conditions required for proper waste disposal by deep well injection”.</p>
        <p>The largest concentration of disposal wells in the United States is in Texas (including almost 100 Class I wells). The Texas Commission on Environmental Quality that regulates these injection systems says that deep well injection has “an excellent record of environmental protection”.</p>
      </>
    )
  },
  {
    question: "Who regulates Class I, III, V and VI disposal wells?",
    content: (themeColor) => (
      <>
        <p className="mb-4">Throughout the United States, the Environmental Protection Agency and approved State Underground Injection Control (UIC) programs provide oversight and closely monitor deep well disposal operations under the Safe Drinking Water Act regulations. Laws, policies and regulations have matured over the past 70 years to enhance the safety of both non-hazardous and hazardous injection well operation. In all cases, strict standards are enforced by law to ensure that environmentally protective practices are followed. Geologic and engineering information is carefully evaluated and approved by regulators before deep well construction can begin. After drilling has been completed, the data are further reviewed and final approval granted by the regulators before injection operations begin. Continuous protection of all usable (&lt;10,000 mg/l TDS) groundwater is accomplished by rigid construction and monitoring requirements that provide at least four separate layers of protection. In addition to strict construction requirements, annual testing and limitation of waste type, disposal volume and injection well pressure are required to further promote protection of the subsurface environment. Detailed records of wastes disposed and all site operations must be submitted to the EPA or state regulators. Twenty-four-hour monitoring of operations is required to verify safe operation and permit compliance.</p>
        <p>
          You can learn more about Class I injection wells by visiting the EPA website at: <a href="https://www.epa.gov/uic" target="_blank" rel="noopener noreferrer" className="hover:underline font-bold" style={{ color: themeColor }}>https://www.epa.gov/uic</a>
        </p>
      </>
    )
  },
  {
    question: "What is the nature of the liquid in the injection zone?",
    content: () => "By almost any definition, the naturally occurring waters typically present in injection zones are highly saline and unfit for use. The salinity of the native brines is often several times the concentration of normal seawater. In fact, the natural waters often demonstrate many similarities to some of the wastes that are injected into the zones for disposal."
  },
  {
    question: "How do well operators inject wastewater into the ground?",
    content: () => "The pore space (void space inside the rock [picture a hard sponge]) in the formations at several thousand feet of depth in the vicinity of disposal wells is already 100% saturated with natural salt water called brine. In many injection zones, the brine has a specific gravity of between 1.05 and 1.2 (i.e., several times the salinity of seawater). When operated, Class I wells have fluid inside the tubing from the surface all the way down to the injection zone. By adding a controlled amount of pressure to the fluid by pumping during disposal operations, wells can be used to add the injectate to the brine already present in the injection formation. This is accomplished by pushing natural fluids out of the rock pore spaces near the well and into neighboring pore spaces. This is accomplished by compressing the injection fluids and the native fluid inside the rock spaces to a higher pressure. This effect continues radially away from the well."
  },
  {
    question: "Does the permitting process consider how long such a well can be used?",
    content: () => "Yes. The permitting process considers a wide variety of factors regarding injection well operations and site suitability which includes a determination of how long a well can be used and how much liquid can be disposed in a well. These limitations are determined based on the capacity of the disposal reservoir, the anticipated injection rate, and the expected operational lifetime of the well components. Injection pressure and injection rate and reservoir pressure are monitored on daily and an annual basis, respectively. If well monitoring shows any problems with system performance, the well must be shut down and repaired or permanently abandoned to make certain that waste remains in the injection zone according to the permitted well design and permit conditions. UIC permits stipulate monitoring requirements, financial assurance requirements, operational repair or well abandonment conditions, and reporting requirements for the well operation."
  },
  {
    question: "How are injection wells monitored to ensure safety and compliance with the law?",
    content: () => (
      <>
        <p className="mb-4">Periodic mechanical integrity testing of well systems is conducted as required by federal and state regulations. Based on initial completion as a Class I well, Part I mechanical integrity testing usually consists of annulus pressure testing and an associated reservoir pressure falloff test. The annulus pressure test measurements are recorded using a calibrated pressure gauge on the wellhead, and are often witnessed by a regulatory inspector. A predetermined pressure change is allowed during the 30- to 60-minute test to determine pass/fail criteria. The gauges used to monitor pressure during the casing/tubing annular pressure tests are calibrated to 0.1% of indicated actual pressure. Copies of gauge certifications are included with the pressure test records and reports.</p>
        <p className="mb-4">Part II periodic mechanical integrity testing is completed before wells become operational and thereafter on a two- to five-year cycle as required by regulations and/or permit. For well Class I wells, part II mechanical integrity testing consists of a radioactive tracer survey or equivalent acceptable method to verify the adequacy of the cement at the base of the protection casing. In addition, part II mechanical integrity test well logs designed to investigate vertical movement of fluids behind pipe will be conducted in the form of temperature, noise, oxygen activation or equivalent logs. Part II mechanical integrity testing generally is required on an annual basis for wells used to dispose of hazardous wastes and every 2 to 5 years for non-hazardous waste wells.</p>
      </>
    )
  }
];

/* INDEPENDENT HAZARDOUS LAYOUT COMPONENT */
const HazardousContent = ({
  themeColor,
  imageSrc,
  techOpenIndex,
  toggleTechAccordion,
  fyiOpenIndex,
  toggleFyiAccordion
}) => (
  <div>
    {/* Intro Section & Image */}
    <div className="flex flex-col lg:flex-row gap-12 mb-20 items-start">
      <div className="lg:w-3/5 flex flex-col">
        {/* Callout Box */}
        <div className="mb-10 p-6 bg-orange-50/50 rounded-xl border-l-4" style={{ borderColor: themeColor }}>
          <div className="flex items-center mb-3">
            <HelpCircle className="w-6 h-6 mr-3" style={{ color: themeColor }} />
            <h3 className="text-lg font-bold text-gray-900 m-0">Why Are Hazardous Waste Class I Injection Wells Important?</h3>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed m-0">
            Disposal of Hazardous waste is difficult. One of the EPA recommended methods of disposal is through the use of UIC Class I hazardous waste injection wells. Hazardous waste may be determined based on the industrial process as classified by RCRA or if certain constituents in the fluid are greater than the EPA-defined health-based limit. Class I wells can be a safe and economic option to effectively dispose hazardous waste.
          </p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed mb-10">
          <p>
            Our team has extensive experience with hazardous waste wells and permitting from several hazardous waste sites throughout the country. We provide feasibility studies and permit applications for hazardous waste wells. In addition, we are experts in land ban petition exemption applications and renewals, which are required for Class I hazardous waste wells. The land ban petition exemption must be submitted to the EPA to ensure that hazardous waste will be confined within the injection zone for a period of at least 10,000 years. We have a good working relationship with EPA regulators and extensive experience with the land ban petition exemption process and regulations.
          </p>
          <br/>
          <p>
            Engineers at Petrotek have designed and constructed Class I hazardous waste wells in complex geology and using specialized tubulars and cements that can withstand hazardous waste. 
          </p>
        </div>

        {/* EPA Marquee */}
        <div className="relative bg-white rounded-xl border border-gray-100 overflow-hidden py-8 px-6 shadow-sm">
          <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>

          <div className="flex flex-col h-[250px]">
            <div className="mb-6 flex items-center gap-2 relative z-20">
              <ShieldCheck size={18} style={{ color: themeColor }} />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">EPA Regulatory Perspectives</span>
            </div>

            <div className="overflow-hidden relative h-full">
              <div className="animate-marquee-vertical flex flex-col gap-8">
                {[...hazQuotes, ...hazQuotes].map((quote, i) => (
                  <div key={i} className="flex flex-col border-l-2 border-gray-100 pl-4 py-1">
                    <p className="text-gray-800 font-medium text-base italic leading-relaxed whitespace-normal">
                      "{quote.text}"
                    </p>
                    <p className="text-[10px] font-bold mt-2 uppercase tracking-widest" style={{ color: themeColor }}>
                      — {quote.source}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Image */}
      <div className="lg:w-3/5 sticky top-32">
        <img 
          src={imageSrc} 
          alt="Hazardous Injection Well 3D Diagram" 
          className="w-full h-auto object-contain cursor-zoom-in"
        />
      </div>
    </div>

    {/* Service Categories Grid */}
    <div className="grid md:grid-cols-2 gap-8 mb-20">
      {hazCategories.map((cat, idx) => (
        <div 
          key={idx} 
          style={{ '--card-theme': themeColor }}
          className="flex flex-col group rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 bg-white shadow-sm hover:!border-[var(--card-theme)]"
        >
          <div className="relative h-56 w-full overflow-hidden shrink-0">
            <img 
              src={cat.bgImage} 
              alt={cat.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          </div>

          <div className="relative p-8 flex flex-col flex-grow">
            <div className="absolute -top-8 left-8 bg-white p-4 rounded-xl shadow-md border border-gray-50 flex items-center justify-center">
              {React.cloneElement(cat.icon, { style: { color: themeColor }, className: "w-7 h-7" })}
            </div>

            <h3 
              className="text-xl font-bold mb-6 mt-4 text-gray-900 transition-colors group-hover:!text-[var(--card-theme)]"
            >
              {cat.title}
            </h3>
            
            <ul className="space-y-2.5 flex-grow">
              {cat.items.map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 mr-2.5 mt-0.5 shrink-0" style={{ color: themeColor }} />
                  <span className="text-gray-600 font-medium text-sm leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>

    {/* Technology Accordion Section */}
    <div className="max-w-4xl mx-auto mb-20">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center" style={{ color: themeColor }}>
        <Info className="mr-3" /> Learn more about Injection Well Technology
      </h2>
      
      <div className="space-y-4">
        {hazTechData.map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm bg-white transition-colors">
            <button
              onClick={() => toggleTechAccordion(index)}
              className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
            >
              <span className="font-bold text-lg text-gray-900">{item.question}</span>
              <span className="ml-4" style={{ color: themeColor }}>
                {techOpenIndex === index ? <Minus size={24} /> : <Plus size={24} />}
              </span>
            </button>
            
            <div 
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                techOpenIndex === index ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                {item.content(themeColor)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    
    {/* Video Section */}
    <div className="max-w-4xl mx-auto mb-20">
      <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-gray-200" style={{ paddingBottom: '56.25%' }}>
        <iframe 
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/JpgU5Ewde_E?si=E_Zqcpbo-Bi8M5nI" 
          title="Protective Aspects of Injection Wells" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>
    </div>

    {/* Disposal Well FYI Accordion Section */}
    <div className="max-w-4xl mx-auto mb-20">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center" style={{ color: themeColor }}>
        <HelpCircle className="mr-3" /> Disposal Well FYI
      </h2>
      
      <div className="space-y-4">
        {hazFyiData.map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm bg-white transition-colors">
            <button
              onClick={() => toggleFyiAccordion(index)}
              className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
            >
              <span className="font-bold text-lg text-gray-900">{item.question}</span>
              <span className="ml-4" style={{ color: themeColor }}>
                {fyiOpenIndex === index ? <Minus size={24} /> : <Plus size={24} />}
              </span>
            </button>
            
            <div 
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                fyiOpenIndex === index ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-6 pb-6 pt-2 border-t border-gray-100 text-gray-600 leading-relaxed">
                {item.content(themeColor)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);


/* =========================================================================
   3. MAIN PAGE CONTAINER
   ========================================================================= */
const InjectionWells = () => {
  // Default to non-hazardous tab
  const [activeTab, setActiveTab] = useState('non-hazardous');

  // Dynamic Theme Colors: Dark Blue for Non-Hazardous, Dark Orange for Hazardous
  const themeColor = activeTab === 'non-hazardous' ? '#1E40AF' : '#C2410C';

  // Dedicated accordion states
  const [nonHazTechOpenIndex, setNonHazTechOpenIndex] = useState(null);
  const [nonHazFyiOpenIndex, setNonHazFyiOpenIndex] = useState(null);

  const [hazTechOpenIndex, setHazTechOpenIndex] = useState(null);
  const [hazFyiOpenIndex, setHazFyiOpenIndex] = useState(null);

  // Independent images if needed later
  const nonHazImage = "/2026_Update.png";
  const hazImage = "/2026_Update.png";

  return (
    <div className="pt-32 pb-20 px-6 bg-white min-h-screen">
      <div className="container mx-auto">
        <div className="max-w-8xl mx-auto">
          
          {/* Navigation - Back to Home */}
          <Link to="/" className="flex items-center text-[#972037] font-bold mb-8 hover:underline group w-fit">
            <ArrowRight className="rotate-180 w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Home
          </Link>

          {/* Header Section */}
          <div className="mb-8">
            <div className="mb-6 p-4 bg-gray-50 inline-block rounded-2xl border border-gray-100 shadow-sm transition-colors duration-300">
              <Droplet className="w-10 h-10 transition-colors duration-300" style={{ color: themeColor }} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Injection Well Services</h1>
            <p className="text-xl font-bold mb-6 transition-colors duration-300" style={{ color: themeColor }}>
              {activeTab === 'non-hazardous'
                ? 'Underground Injection Control (UIC) Class I, II, III, V, and VI'
                : 'Underground Injection Control (UIC) Hazardous Class I'}
            </p>
            <div className="w-24 h-1 mb-8 transition-colors duration-300" style={{ backgroundColor: themeColor }}></div>
          </div>

          {/* Tab Selection Navigation */}
          <div className="flex border-b border-gray-200 mb-12 space-x-2 sm:space-x-4">
            <button
              onClick={() => setActiveTab('non-hazardous')}
              className={`pb-4 px-4 sm:px-6 text-base sm:text-lg font-bold flex items-center transition-all relative border-b-2 -mb-[2px] ${
                activeTab === 'non-hazardous'
                  ? 'border-[#1E40AF] text-[#1E40AF]'
                  : 'border-transparent text-gray-500 hover:text-gray-900'
              }`}
            >
              <CheckCircle className={`w-5 h-5 mr-2 ${activeTab === 'non-hazardous' ? 'text-[#1E40AF]' : 'text-gray-400'}`} />
              Non-Hazardous
            </button>

            <button
              onClick={() => setActiveTab('hazardous')}
              className={`pb-4 px-4 sm:px-6 text-base sm:text-lg font-bold flex items-center transition-all relative border-b-2 -mb-[2px] ${
                activeTab === 'hazardous'
                  ? 'border-[#C2410C] text-[#C2410C]'
                  : 'border-transparent text-gray-500 hover:text-gray-900'
              }`}
            >
              <AlertTriangle className={`w-5 h-5 mr-2 ${activeTab === 'hazardous' ? 'text-[#C2410C]' : 'text-gray-400'}`} />
              Hazardous
            </button>
          </div>

          {/* Tab Content Display */}
          {activeTab === 'non-hazardous' && (
            <div className="animate-fadeIn">
              <NonHazardousContent 
                themeColor={themeColor}
                imageSrc={nonHazImage}
                techOpenIndex={nonHazTechOpenIndex}
                toggleTechAccordion={(idx) => setNonHazTechOpenIndex(nonHazTechOpenIndex === idx ? null : idx)}
                fyiOpenIndex={nonHazFyiOpenIndex}
                toggleFyiAccordion={(idx) => setNonHazFyiOpenIndex(nonHazFyiOpenIndex === idx ? null : idx)}
              />
            </div>
          )}

          {activeTab === 'hazardous' && (
            <div className="animate-fadeIn">
              <HazardousContent 
                themeColor={themeColor}
                imageSrc={hazImage}
                techOpenIndex={hazTechOpenIndex}
                toggleTechAccordion={(idx) => setHazTechOpenIndex(hazTechOpenIndex === idx ? null : idx)}
                fyiOpenIndex={hazFyiOpenIndex}
                toggleFyiAccordion={(idx) => setHazFyiOpenIndex(hazFyiOpenIndex === idx ? null : idx)}
              />
            </div>
          )}

          {/* CTA */}
          <div className="text-center p-12 bg-gray-50 rounded-3xl border border-dashed border-gray-300">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Need expert assistance with your Injection Well project?</h3>
            <Link 
              to="/" 
              onClick={() => setTimeout(() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'}), 100)}
              className="inline-flex items-center px-8 py-4 text-white font-bold rounded-lg hover:brightness-110 transition-all shadow-lg"
              style={{ backgroundColor: themeColor }}
            >
              Contact Our Team <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>

    
  );
};

export default InjectionWells;