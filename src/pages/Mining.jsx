// src/pages/Mining.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Pickaxe, 
  Waves, 
  FileBarChart, 
  CheckCircle2, 
  ChevronRight,
  TrendingUp,
  Map,
  ShieldAlert,
  Search
} from 'lucide-react';

const miningExpertise = [
  { 
    title: "Compliance & Permitting", 
    icon: <ShieldAlert className="w-5 h-5" />, 
    items: ["Preparation of Permit to Mine Applications", "Regulatory compliance support", "RCRA & CERCLA Investigations"] 
  },
  { 
    title: "Hydrogeologic Characterization", 
    icon: <Waves className="w-5 h-5" />, 
    items: ["Aquifer characterization and assessment", "Geologic mapping & data interpretation", "Environmental monitoring for active sites"] 
  },
  { 
    title: "Modeling & Remediation", 
    icon: <FileBarChart className="w-5 h-5" />, 
    items: ["Groundwater modeling for long-term conditions", "Groundwater remedial design", "Post-operational assessments"] 
  },
  { 
    title: "Strategic Support", 
    icon: <Search className="w-5 h-5" />, 
    items: ["Expert witness & litigation support", "Project management", "Water resource evaluations"] 
  }
];

// Reusable tab content body
const MiningContent = ({ maroon }) => (
  <div>
    {/* Intro Section with Sticky Image */}
    <div className="flex flex-col lg:flex-row gap-12 mb-20 items-start">
      <div className="lg:w-3/5 prose prose-lg max-w-none text-gray-600 leading-relaxed">
        <p>
          The Petrotek Team has over one hundred years of combined experience in performing hydrogeologic characterizations for evaluating soil and water impacts.
        </p>
        <br />
        <p>
          We specialize in assessing ground water and surface water interactions at new and active hard rock mining and mineral processing sites. Our work bridges the gap between complex geology and the stringent requirements of modern environmental stewardship.
        </p>
        
        <div className="my-8 p-6 bg-gray-50 rounded-xl border-l-4" style={{ borderColor: maroon }}>
          <div className="flex items-center mb-4 text-gray-900">
            <Map className="mr-3 w-6 h-6" style={{ color: maroon }} />
            <h3 className="text-lg font-bold m-0">Western U.S. Footprint</h3>
          </div>
          <ul className="grid grid-cols-2 gap-2 text-sm m-0 list-none p-0">
            <li className="flex items-center">
              <CheckCircle2 className="w-3 h-3 mr-2 text-[#8B1E3F]" /> 
              <strong className="mr-1">Arizona:</strong> Copper
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="w-3 h-3 mr-2 text-[#8B1E3F]" /> 
              <strong className="mr-1">New Mexico:</strong> U, Cu, Ag, Au
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="w-3 h-3 mr-2 text-[#8B1E3F]" /> 
              <strong className="mr-1">Utah:</strong> Uranium
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="w-3 h-3 mr-2 text-[#8B1E3F]" /> 
              <strong className="mr-1">Colorado:</strong> U, Gold
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="w-3 h-3 mr-2 text-[#8B1E3F]" /> 
              <strong className="mr-1">Wyoming:</strong> U, Rare Earth
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="w-3 h-3 mr-2 text-[#8B1E3F]" /> 
              <strong className="mr-1">Montana:</strong> Cu, Ag, Au
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="w-3 h-3 mr-2 text-[#8B1E3F]" /> 
              <strong className="mr-1">Idaho:</strong> Ag, Pb, Zn
            </li>
          </ul>
        </div>
      </div>

      {/* Right Column: Image */}
      <div className="lg:w-3/5 sticky top-32">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
          <img 
            src="/mining.jpg" 
            alt="Petrotek Field Operations" 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    </div>

    {/* Expertise Grid */}
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Specific Areas of Expertise</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {miningExpertise.map((service, idx) => (
          <div key={idx} className="p-8 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-6">
              <div className="p-2 rounded-lg bg-gray-50 mr-4" style={{ color: maroon }}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
            </div>
            <ul className="space-y-3">
              {service.items.map((item, i) => (
                <li key={i} className="flex items-start text-gray-700">
                  <CheckCircle2 className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" style={{ color: maroon }} />
                  <span className="text-md">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    {/* Strategic Insight Section */}
    <div className="bg-gray-900 text-white rounded-3xl p-10 md:p-14 shadow-2xl mb-16 relative overflow-hidden">
      <div className="relative z-10 grid md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-2">
          <h3 className="text-3xl font-bold mb-4">Proactive Water Management</h3>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            From baseline studies for new permits to long-term monitoring for active operations and post-operational closures, we provide the technical depth required for the industry's most challenging subsurface environments.
          </p>
          <div className="flex items-center space-x-2 text-[#78350F] font-bold">
            <TrendingUp className="w-5 h-5" />
            <span>Compliance & Operational Stability</span>
          </div>
        </div>
        <div className="hidden md:flex justify-center">
          <div className="w-32 h-32 border-4 border-[#78350F] rounded-full flex items-center justify-center">
            <span className="text-3xl font-bold text-white">100+</span>
            <span className="text-[10px] absolute mt-12 uppercase tracking-widest text-gray-400">Combined Exp.</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Mining = () => {
  const maroon = "#78350F";
  
  // Tab State: 'operations' | 'hydrogeology'
  const [activeTab, setActiveTab] = useState('operations');

  return (
    <div className="pt-32 pb-20 px-6 bg-white min-h-screen">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          
          {/* Navigation - Back to Home */}
          <Link to="/" className="flex items-center text-[#972037] font-bold mb-8 hover:underline group w-fit">
            <ArrowRight className="rotate-180 w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Home
          </Link>

          {/* Header Section */}
          <div className="mb-8">
            <div className="mb-6 p-4 bg-gray-50 inline-block rounded-2xl border border-gray-100 shadow-sm">
              <Pickaxe className="w-10 h-10" style={{ color: maroon }} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Mining</h1>
            <p className="text-xl text-[#78350F] font-bold mb-6">Characterization, Modeling, and Regulatory Compliance</p>
            <div className="w-24 h-1 mb-8" style={{ backgroundColor: maroon }}></div>
          </div>

          {/* Tab Selection Navigation */}
          <div className="flex border-b border-gray-200 mb-12 space-x-2 sm:space-x-4">
            <button
              onClick={() => setActiveTab('operations')}
              className={`pb-4 px-4 sm:px-6 text-base sm:text-lg font-bold flex items-center transition-all relative border-b-2 -mb-[2px] ${
                activeTab === 'operations'
                  ? 'border-[#78350F] text-[#78350F]'
                  : 'border-transparent text-gray-500 hover:text-gray-900'
              }`}
            >
              <Pickaxe 
                className={`w-5 h-5 mr-2 ${
                  activeTab === 'operations' ? 'text-[#78350F]' : 'text-gray-400'
                }`} 
              />
              Mining & Operations
            </button>

            <button
              onClick={() => setActiveTab('hydrogeology')}
              className={`pb-4 px-4 sm:px-6 text-base sm:text-lg font-bold flex items-center transition-all relative border-b-2 -mb-[2px] ${
                activeTab === 'hydrogeology'
                  ? 'border-[#78350F] text-[#78350F]'
                  : 'border-transparent text-gray-500 hover:text-gray-900'
              }`}
            >
              <Waves 
                className={`w-5 h-5 mr-2 ${
                  activeTab === 'hydrogeology' ? 'text-[#78350F]' : 'text-gray-400'
                }`} 
              />
              Hydrogeology
            </button>
          </div>

          {/* Tab Content Display */}
          {activeTab === 'operations' && (
            <div className="animate-fadeIn">
              <MiningContent maroon={maroon} />
            </div>
          )}

          {activeTab === 'hydrogeology' && (
            <div className="animate-fadeIn">
              <MiningContent maroon={maroon} />
            </div>
          )}

          {/* CTA */}
          <div className="text-center p-12 bg-gray-50 rounded-3xl border border-dashed border-gray-300">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Secure your project's hydrologic future.</h3>
            <Link 
              to="/" 
              onClick={() => setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100)}
              className="inline-flex items-center px-8 py-4 bg-[#78350F] text-white font-bold rounded-lg hover:brightness-110 transition-all shadow-lg"
            >
              Contact Our Mining Team <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Mining;