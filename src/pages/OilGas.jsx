// src/pages/OilGas.jsx
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import { 
  ArrowRight, 
  Gavel, 
  HardHat,  
  CheckCircle2, 
  ChevronRight,
  BarChart3,
  Droplet
} from 'lucide-react';

// Custom Oil Well Icon - Now uses a mask to inherit color
const OilWell = ({ className, style }) => (
  <div 
    className={className}
    style={{ 
      ...style, 
      backgroundColor: 'currentColor',
      mask: 'url("/regular-oil-well.svg") no-repeat center / contain',
      WebkitMask: 'url("/regular-oil-well.svg") no-repeat center / contain',
    }} 
  />
);

// Custom Oil Derrick Icon - Built to match Lucide's stroke style
const OilDerrick = ({ className, style }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className} 
    style={style}
  >
    {/* Derrick Legs */}
    <path d="M10 2L5 22" />
    <path d="M14 2L19 22" />
    {/* Center Drill Pipe */}
    <path d="M12 2v20" />
    {/* Top Platform */}
    <path d="M8 2h8" />
    {/* Ground */}
    <path d="M3 22h18" />
    {/* Cross Braces */}
    <path d="M8.75 7h6.5" />
    <path d="M7.5 12h9" />
    <path d="M6.25 17h11.5" />
  </svg>
);

const OilGas = () => {
  const maroon = "#972037";

  const upstreamServices = [
    { title: "Regulatory & Permitting", icon: <Gavel className="w-5 h-5" />, items: ["Permitting of well drilling and spacing units", "Regulatory hearings and expert testimony", "Correlative rights, pooling and flaring"] },
    { title: "Engineering & Analysis", icon: <BarChart3 className="w-5 h-5" />, items: ["Well test design and analysis", "Multi-phase reservoir characterization and simulations", "Reserve and economics evaluations"] },
    { title: "Field Operations", icon: <HardHat className="w-5 h-5" />, items: ["Drilling engineering and wellsite supervision", "Completions engineering and wellsite supervision", "Secondary recovery (waterflood) design and permitting"] },
    { title: "Subsurface Management", icon: <Droplet className="w-5 h-5" />, items: ["All aspects of Class II brine disposal wells", "Aquifer exemptions", "Produced water management"] }
  ];

  return (
    <div className="pt-32 pb-20 px-6 bg-white min-h-screen">
      <Seo title="Oil & Gas Engineering and DSU Permitting - Petrotek" description="Upstream E&P support including drill spacing unit permitting, expert testimony, reservoir analysis, and Class II brine disposal wells." path="/oil-and-gas" />
      <div className="container mx-auto">
        
        <div className="max-w-8xl mx-auto">
          
        {/* Navigation - Back to Home */}
        <Link to="/" className="flex items-center text-[#972037] font-bold mb-8 hover:underline group w-fit">
          <ArrowRight className="rotate-180 w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Home
        </Link>

          {/* Header Section */}
          <div className="mb-16">
            <div className="mb-6 p-4 bg-gray-50 inline-block rounded-2xl border border-gray-100 shadow-sm">
              <OilDerrick className="w-10 h-10" style={{ color: maroon }} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Oil & Gas Upstream E&P</h1>
            <p className="text-xl text-[#972037] font-bold mb-6">Expertise Grounded in Decades of Field and Reservoir Experience</p>
            <div className="w-24 h-1 mb-8" style={{ backgroundColor: maroon }}></div>
          </div>

          {/* Background & Principals Section */}
          <div className="flex flex-col lg:flex-row gap-12 mb-20 items-start">
            <div className="lg:w-3/5">
              <div className="mb-10 p-6 bg-gray-50 rounded-xl border-l-4" style={{ borderColor: maroon }}>
                <div className="flex items-center mb-3">
                  <OilWell className="w-6 h-6 mr-3" style={{ color: maroon }} />
                  <h3 className="text-lg font-bold text-gray-900 m-0">Why E&P Engineering Matters</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed m-0">
                  Developing oil and gas assets requires a balance of sound geology, practical field execution, and regulatory adherence. From initial drilling permits and spacing unit evaluations to secondary recovery and Class II brine disposal, each phase directly impacts reservoir recovery and operating costs. Petrotek provides the technical analysis and on-site oversight necessary to resolve complex reservoir issues, maintain environmental compliance, and support long-term field economics.
                </p>
              </div>
              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
                <p className="mb-4">
                  The principals of Petrotek all started their careers in oil and gas exploration and development, carrying a legacy of operational experience from major operators and service companies. Across Colorado and Wyoming alone, we have assisted operators in thousands of DSU hearings, providing expert testimony, drainage modeling, and regulatory support.
                </p>
                <p className="mb-4">
                  Our backgrounds encompass the full lifecycle of the well, involving <strong>well operation, drilling, reservoir engineering, geology, and environmental compliance.</strong>
                </p>
                <br></br>
              </div>
            </div>
          {/* Right Column: Image - REMOVED WRAPPER DIV STYLING */}
              <div className="lg:w-5/5 sticky top-32" >
                <img 
                  src="/Oil_Field_Operations_2026.png" 
                  alt="Upstream Oil Field Operations" 
                  className="w-full h-auto object-contain cursor-zoom-in"
                />
            </div>
          </div>

          {/* Upstream E&P Services Grid */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">E&P Operations & Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {upstreamServices.map((service, idx) => (
                <div 
                  key={idx} 
                  style={{ '--card-theme': maroon }}
                  className="group p-8 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:!border-[var(--card-theme)]"
                >
                  <div className="flex items-center mb-6">
                    <div className="p-2 rounded-lg bg-gray-50 mr-4 transition-colors" style={{ color: maroon }}>
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 transition-colors group-hover:!text-[var(--card-theme)]">
                      {service.title}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start text-gray-700">
                        <CheckCircle2 className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 transition-colors" style={{ color: maroon }} />
                        <span className="text-md">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Video Section */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-gray-200" style={{ paddingBottom: '56.25%' /* 16:9 Aspect Ratio */ }}>
              <iframe 
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/GCCsw42BVSg?si=4HlN-FaIBTV6WYWc" 
                title="Upstream Oil Field Operations"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <p className="mb-4 text-center italic text-gray-500">Video by Ron Udell</p>
          </div>

          {/* Brine Disposal Callout */}
          <div className="bg-gray-300 text-white rounded-2xl p-10 md:p-14 shadow-2xl relative overflow-hidden mb-16">
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0 bg-[#972037] p-5 rounded-full">
                <Droplet className="w-10 h-10 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-black">Class II Brine Disposal Wells</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Petrotek handles all aspects of Class II brine disposal, from siting and permitting to construction oversight and regulatory compliance.
                </p>
                <Link to="/injection-wells" className="text-[#972037] font-bold flex items-center hover:underline">
                  Explore our full Injection Well Services <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center p-12 bg-gray-50 rounded-3xl border border-dashed border-gray-300">
             <h3 className="text-2xl font-bold mb-6 text-gray-900">Maximize your reservoir's potential.</h3>
             <Link 
               to="/" 
               onClick={() => setTimeout(() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'}), 100)}
               className="inline-flex items-center px-8 py-4 bg-[#972037] text-white font-bold rounded-lg hover:brightness-110 transition-all shadow-lg"
             >
               Consult Our E&P Experts <ChevronRight className="ml-2 w-5 h-5" />
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OilGas;