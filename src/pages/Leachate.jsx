import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ShieldCheck, 
  FileText, 
  ChevronRight,
  CheckCircle2,
  Recycle,
  Waves,
  Microscope,
  Zap
} from 'lucide-react';

const Leachate = () => {
  // Using a Deep Teal/Green for the Waste Management / Leachate theme
  const themeColor = "#0F766E"; // Teal-600


  const leachateServices = [
    { 
      title: "Disposal Well Permitting", 
      icon: <FileText className="w-5 h-5" />, 
      items: ["Class I non-hazardous permits", "Feasibility and siting studies", "AOR (Area of Review) evaluations"] 
    },
    { 
      title: "Geochemical Characterization", 
      icon: <Microscope className="w-5 h-5" />, 
      items: ["Leachate-rock compatibility testing", "Pre-treatment requirement analysis", "Formation fluid sampling"] 
    },
    { 
      title: "Operational Support", 
      icon: <Zap className="w-5 h-5" />, 
      items: ["Wellhead pressure monitoring", "Annulus pressure testing (MIT)", "Injection rate optimization"] 
    },
    { 
      title: "Regulatory Compliance", 
      icon: <ShieldCheck className="w-5 h-5" />, 
      items: ["Quarterly & Annual reporting", "UIC program liaison", "Financial assurance documentation"] 
    }
  ];

  return (
    <div className="pt-32 pb-20 px-6 bg-white min-h-screen">
      <div className="container mx-auto">
        
        <div className="max-w-8xl mx-auto">

          {/* Navigation - Back to Home */}
          <Link to="/" className="flex items-center text-[#972037] font-bold mb-8 hover:underline group w-fit">
            <ArrowRight className="rotate-180 w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Home
          </Link> 

          {/* Header Section */}
          <div className="mb-12">
            <div className="mb-6 p-4 bg-gray-50 inline-block rounded-2xl border border-gray-100 shadow-sm" style={{ color: themeColor }}>
                <Recycle className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Landfill Leachate Services</h1>
            <p className="text-xl font-bold mb-6" style={{ color: themeColor }}>Sustainable Subsurface Solutions for Modern Waste Management</p>
            <div className="w-24 h-1 mb-8" style={{ backgroundColor: themeColor }}></div>
          </div>

          {/* Intro Section */}
          <div className="flex flex-col lg:flex-row gap-12 mb-20 items-start">
            <div className="lg:w-3/5 prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <div className="my-8 p-6 bg-gray-50 rounded-xl border-l-4" style={{ borderColor: themeColor }}>
                <div className="flex items-center mb-3">
                  <Waves className="w-6 h-6 mr-3" style={{ color: themeColor }} />
                  <h3 className="text-lg font-bold text-gray-900 m-0">Why Deep Well Injection?</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  By utilizing deep, isolated geological formations, landfill operators can dispose of large volumes of leachate safely below the <strong>Lowest Underground Source of Drinking Water (USDW)</strong>, significantly reducing surface footprint and transportation risks.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed m-0">
                  This permanent isolation is especially critical as persistent compounds like <strong>PFAS and PFOS</strong>, originating from widespread consumer goods and now encountered across shallow water networks, are passively collected in modern waste facilities. Deep well injection provides a permanent geologic barrier that prevents these compounds from cycling through municipal treatment plants and returning to local water resources.
                </p>
              </div>
              <p>
                As landfill operations expand, the management of leachate becomes a critical operational and financial challenge. Petrotek provides specialized engineering and geological expertise to help landfill operators transition from costly "haul and treat" methods to long-term, on-site disposal solutions.
              </p>
              <br />
              <p>
                Our team specializes in the <strong>Class I Deep Well Injection</strong> of landfill leachate, offering a disposal method that is both environmentally protective and significantly more cost-effective than traditional municipal treatment or surface discharge.
              </p>
            </div>

            {/* Right Column: Image */}
              <div className="lg:w-5/5 sticky top-32" >
                <img 
                  src="/Landfill Leachate.png" 
                  alt="Landfill Leachate System Diagram"
                  className="w-full h-auto object-contain cursor-zoom-in"
                />
            </div>
          </div>

            {/* Services Grid */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Comprehensive Leachate Management</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {leachateServices.map((service, idx) => (
                  <div 
                    key={idx} 
                    style={{ '--card-theme': themeColor }}
                    className="group p-8 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:!border-[var(--card-theme)]"
                  >
                    <div className="flex items-center mb-6">
                      <div className="p-2 rounded-lg bg-gray-50 mr-4 transition-colors" style={{ color: themeColor }}>
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 transition-colors group-hover:!text-[var(--card-theme)]">
                        {service.title}
                      </h3>
                    </div>
                    <ul className="space-y-3">
                      {service.items.map((item, i) => (
                        <li key={i} className="flex items-start text-gray-700">
                          <CheckCircle2 className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 transition-colors" style={{ color: themeColor }} />
                          <span className="text-md">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

          {/* Strategic Benefit Block */}
          <div className="bg-gray-300 text-white rounded-3xl p-10 md:p-14 shadow-2xl mb-20 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6 text-black">Built for the Waste Industry</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-2">
                  <div className="text-2xl font-bold" style={{ color: themeColor }}>Cost Reductions</div>
                  <p className="text-gray-600 text-sm">Eliminate the rising costs of third-party treatment and trucking logistics.</p>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold" style={{ color: themeColor }}>Reliability</div>
                  <p className="text-gray-600 text-sm">On-site disposal provides 24/7 uptime regardless of weather or municipal capacity.</p>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold" style={{ color: themeColor }}>Longevity</div>
                  <p className="text-gray-600 text-sm">Wells are engineered for decades of service to match the lifespan of the landfill.</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center p-12 bg-gray-50 rounded-3xl border border-dashed border-gray-300">
             <h3 className="text-2xl font-bold mb-6 text-gray-900">Optimize your leachate management strategy.</h3>
             <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Our engineers have successfully permitted and operated Class I disposal wells for some of the largest landfill operators in the country.</p>
             <Link 
               to="/" 
               onClick={() => setTimeout(() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'}), 100)}
               className="inline-flex items-center px-8 py-4 text-white font-bold rounded-lg hover:brightness-110 transition-all shadow-lg"
               style={{ backgroundColor: themeColor }}
             >
               Speak with a Waste Management Expert <ChevronRight className="ml-2 w-5 h-5" />
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leachate;