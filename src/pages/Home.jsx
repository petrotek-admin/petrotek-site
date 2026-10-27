// src/pages/Home.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  Globe, 
  Activity, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  Mail,
  Droplet,
  HardHat,
  Pickaxe,
  Recycle,
  Leaf,
  ArrowRight,
  ArrowDown
} from 'lucide-react';
import ReCAPTCHA from "react-google-recaptcha";
import OfficeMap from '../components/OfficeMap';

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
    <path d="M10 2L5 22" />
    <path d="M14 2L19 22" />
    <path d="M12 2v20" />
    <path d="M8 2h8" />
    <path d="M3 22h18" />
    <path d="M8.75 7h6.5" />
    <path d="M7.5 12h9" />
    <path d="M6.25 17h11.5" />
  </svg>
);

// Custom Uranium Icon - Now uses a mask to inherit color
const UraniumIcon = ({ className, style }) => (
  <div 
    className={className}
    style={{ 
      ...style, 
      backgroundColor: 'currentColor',
      mask: 'url("/database-zap.svg") no-repeat center / contain',
      WebkitMask: 'url("/database-zap.svg") no-repeat center / contain',
    }}
  />
);

const IndustryCard = ({ item, maroon, onInquire }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
    setHasInteracted(true);
  };

  return (
    <div 
      className="group h-[280px] [perspective:1000px] cursor-pointer"
      onClick={handleFlip}
    >
      <div className={`relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''} md:group-hover:[transform:rotateY(180deg)]`}>
        
        {/* Front Side */}
        <div className="absolute inset-0 h-full w-full rounded-xl overflow-hidden shadow-sm [backface-visibility:hidden]">
          <img src={item.img} alt={item.name} className="h-full w-full object-cover" />

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-4">
            {!hasInteracted && (
              <span className="text-[10px] text-white/70 uppercase tracking-widest mb-2 md:hidden animate-pulse">
                Tap to view details
              </span>
            )}
            
            <div className="flex items-center space-x-2 text-white">
              <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: maroon }} />
              <span className="text-sm font-bold text-left">{item.name}</span>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div 
          className="absolute inset-0 h-full w-full rounded-xl bg-gray-50 p-6 flex flex-col justify-center items-center text-center [backface-visibility:hidden] [transform:rotateY(180deg)] border-2 shadow-sm" 
          style={{ borderColor: maroon }}
        >
          <h3 className="text-base font-bold mb-2 uppercase" style={{ color: maroon }}>
            {item.name}
          </h3>
          <p className="text-xs text-gray-600 leading-relaxed">
            {item.description}
          </p>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onInquire('#contact');
            }} 
            className="mt-4 text-[11px] font-bold uppercase tracking-widest border-b-2 hover:opacity-80 transition-opacity pb-0.5" 
            style={{ color: maroon, borderColor: maroon }}
          >
            Inquire
          </button>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const [activeSection, setActiveSection] = useState("home");
  const recaptchaRef = useRef();

  useEffect(() => {

    const observerOptions = {
      root: null,
      rootMargin: '-25% 0px -65% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = document.querySelectorAll('header[id], section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToId = (id) => {
    document.getElementById(id.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
  };

  const [counts, setCounts] = useState({ clients: 0, projects: 0 });
  const [hasCounted, setHasCounted] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    if (activeSection === 'clientsserved' && !hasCounted) {
      setHasCounted(true);
      
      let frame = 0;
      const duration = 2500;
      const frameDuration = 1000 / 60;
      const totalFrames = Math.round(duration / frameDuration);
      
      const timer = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const easeOut = 1 - Math.pow(1 - progress, 4); 
        
        setCounts({
          clients: Math.floor(easeOut * 270),
          projects: Math.floor(easeOut * 1200)
        });

        if (frame === totalFrames) clearInterval(timer);
      }, frameDuration);
    }
  }, [activeSection, hasCounted]);

const handleFormSubmit = async (e) => {
    e.preventDefault();

    const token = recaptchaRef.current?.getValue();
    if (!token) {
      alert("Please complete the reCAPTCHA verification.");
      return;
    }

    const payload = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      message: e.target.message.value,
      token
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.error || `Server responded with status ${res.status}`);
      }

      alert("Message sent! We will be in touch soon.");
      e.target.reset();
      recaptchaRef.current?.reset();
    } catch (err) {
      console.error("Form submission error:", err);
      alert(`Submission failed: ${err.message}`);
    }
  };

  

  const maroon = "#972037";
  const anniversaryGraphic = "/33-years-service-graphic.png";

  const services = [
    { 
      title: "Injection Well Services", 
      description: "Our company has hundreds of years of combined injection well experience. We are knowledgeable of state and federal regulations with positive working relationships across state and federal agencies.", 
      icon: <Droplet className="w-8 h-8" />, 
      link: "/injection-wells",
      accent: "#1E40AF"
    },
    { 
      title: "Landfill Leachate", 
      description: "We provide expert Underground Injection Control and geological services for Class I deep well injection, securing reliable, high-capacity leachate disposal solutions that meet UIC standards.", 
      icon: <Recycle className="w-8 h-8" />, 
      link: "/leachate-services",
      accent: "#0F766E"
    },
    { 
      title: "Mining", 
      description: "Over 30 years of experience in groundwater characterization and modeling for both In-Situ Recovery (Uranium/Copper) and hard rock mining operations.", 
      icon: <Pickaxe className="w-8 h-8" />, 
      link: "/mining-and-isr",
      accent: "#EAB308" 
    },
    { 
      title: "Oil and Gas", 
      description: "We provide support for oil and gas well permitting, including drill spacing unit permitting, decline curve analysis, correlative rights, and expert witness testimony.", 
      icon: <OilDerrick className="w-8 h-8" />, 
      link: "/oil-and-gas",
      accent: "#972037"
    },
    { 
      title: "Carbon Capture (CO2 CCS)", 
      description: "We provide comprehensive feasibility studies, Class VI permit applications, and technical evaluations for geologic sequestration and tax equity partnerships.", 
      icon: <Leaf className="w-8 h-8" />, 
      link: "/carbon-capture",
      accent: "#166534"
    },
    { 
      title: "Safety", 
      description: "Safety is our top priority. We maintain an impeccable safety record and full compliance with ISNetworld and Avetta contractor management services.", 
      icon: <HardHat className="w-8 h-8" />, 
      link: "/safety",
      accent: "#F97316"
    }
  ];

  const industries = [
    { 
      name: "Landfill Services", 
      img: "https://img.canarymedia.com/content/uploads/coffin-butte-hero.jpg?auto=compress%2Cformat&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=1492&q=80&w=3360&s=cfb58f4b133c5cdb0328a2411fac82fc",
      description: "Deep well injection permitting, feasibility, and high-capacity leachate disposal solutions."
    },
    { 
      name: "Municipal Water Supply", 
      img: "https://images.unsplash.com/photo-1600965487524-8b8c37f6c394?q=80&w=1170&auto=format&fit=crop",
      description: "Drinking water aquifer protection, source evaluations, and deep disposal monitoring."
    },
    { 
      name: "Power Generation", 
      img: "https://assets.weforum.org/article/image/responsive_big_webp_ZceAxbIcK8seaoQU8DFS-l_Dq7YPPzmx_MNYE2C0aOU.webp",
      description: "Cooling blowdown water handling and carbon sequestration evaluation."
    },
    { 
      name: "Oil and Gas", 
      img: "https://images.unsplash.com/photo-1516199423456-1f1e91b06f25?q=80&w=1149&auto=format&fit=crop",
      description: "Decline curve analysis, DSU applications, forced pooling, and reservoir modeling."
    },
    { 
      name: "Mining", 
      img: "/mining.jpg",
      description: "In-situ recovery hydrogeology, hard rock dewatering, and mine reclamation support."
    },
    { 
      name: "Heavy Manufacturing", 
      img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400",
      description: "Inorganic process solutions, metal-plating rinses, and long-term UIC compliance."
    },
    { 
      name: "Chemical Plants", 
      img: "https://images.unsplash.com/photo-1704130092069-30ae33e2def0?q=80&w=1170&auto=format&fit=crop",
      description: "Class I industrial waste stream management and UIC hazardous waste compliance."
    },
    { 
      name: "Refineries", 
      img: "https://images.unsplash.com/photo-1611581372056-30cf28a7bd2e?q=80&w=1074&auto=format&fit=crop",
      description: "High-volume process effluent management and secure deep formation disposal."
    },
    { 
      name: "Pharmaceuticals", 
      img: "https://plus.unsplash.com/premium_photo-1661374914839-a84dc1314c86?w=600&auto=format&fit=crop&q=60",
      description: "Permitted subsurface management for aqueous byproducts and process solvent residues."
    },
    { 
      name: "Gas Storage", 
      img: "https://diversegy.com/wp-content/uploads/2024/07/lng-storage-containers.png",
      description: "Underground gas storage reservoir characterization and integrity testing."
    },
    { 
      name: "Ethanol Plants", 
      img: "https://www.iowacorn.org/wp-content/uploads/2024/05/24138_ICGA_DRONE_ETHANOLPLANT_-21-scaled.jpg",
      description: "Biofuel byproduct disposal, process water isolation, and Class VI CO2 planning."
    },
    { 
      name: "Food Production", 
      img: "https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&q=80&w=400",
      description: "Large-volume organic wash waters and specialized agricultural byproduct disposal."
    },
    { 
      name: "Cosmetics", 
      img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=400",
      description: "Dilute aqueous formulation waste handling and compliant deepwell injection."
    },
    { 
      name: "Cloth Manufacturing", 
      img: "https://images.unsplash.com/photo-1612685179841-3965cf0c3f70?q=80&w=1378&auto=format&fit=crop",
      description: "Textile wash effluent and chemical dye liquor disposal management."
    },
    { 
      name: "Environmental Remediation", 
      img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=400",
      description: "Groundwater cleanups, plume containment, and complex subsurface remediation engineering."
    }
  ];

  const subNavItems = [
    { name: "Who We Are", href: "#whoweare" },
    { name: "Our Core Capabilities", href: "#whatwedo" },
    { name: "Clients Served", href: "#clientsserved" },
    { name: "Industries Served", href: "#industries" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <>
      {/* Hero Section */}
      <header id="home" className="relative flex flex-col justify-between min-h-[100svh] lg:h-screen overflow-hidden bg-gray-900">
        
        {/* 1. Full-Cover Background Image */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <img 
            src="/Hero.webp"  
            alt="Petrotek Background" 
            className="h-full w-full object-cover"
          />
        </div>

        {/* 2. Hero Content - Centered */}
        <div className="w-full px-6 sm:px-10 md:px-16 lg:px-20 [@media(min-width:1600px)]:px-40 relative z-20 flex-1 flex flex-col min-[1001px]:flex-row items-center justify-center max-w-[2000px] mx-auto py-28 lg:py-0 gap-8 min-[1001px]:gap-12"> 
          
          {/* Headline (Order 1) */}
          <div className="w-full min-[1001px]:w-[60%] flex flex-col justify-center text-center min-[1001px]:text-left order-1">
            <div className="max-w-3xl [@media(min-width:1600px)]:max-w-5xl mx-auto min-[1001px]:mx-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl [@media(min-width:1600px)]:text-7xl font-extrabold text-white leading-[1.15] mb-0 min-[1001px]:mb-8 tracking-tight drop-shadow-[0_4px_14px_rgba(0,0,0,0.95)]">
                Injection Well and Subsurface Resource Consultants
              </h1>
              
              {/* Desktop Button (Hidden on <= 1000px) */}
              <div className="hidden min-[1001px]:flex justify-start items-center">
                <button 
                  onClick={() => scrollToId('#whatwedo')} 
                  className="px-8 sm:px-10 py-3.5 sm:py-4 [@media(min-width:1600px)]:px-14 [@media(min-width:1600px)]:py-5 text-white text-sm sm:text-base [@media(min-width:1600px)]:text-lg font-bold rounded-lg shadow-xl transition-all hover:brightness-110 active:scale-95 text-center" 
                  style={{ backgroundColor: maroon }}
                >
                  Explore Services
                </button>
              </div>
            </div>
          </div>

          {/* Anniversary Graphic (Order 2) */}
          <div className="w-full min-[1001px]:w-[38%] flex justify-center items-center order-2">
            <img 
              src={anniversaryGraphic} 
              alt="33 Years of UIC Service" 
              className="w-32 h-32 sm:w-44 sm:h-44 md:w-56 md:h-56 lg:w-72 lg:h-72 xl:w-80 xl:h-80 2xl:w-[380px] 2xl:h-[380px] [@media(min-width:1600px)]:w-[440px] [@media(min-width:1600px)]:h-[440px] object-contain filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.7)] transition-transform duration-300 hover:scale-105" 
              onError={(e) => { e.target.style.display = 'none'; }} 
            />
          </div>

          {/* Mobile Button (Order 3) */}
          <div className="w-full flex min-[1001px]:hidden justify-center items-center order-3 mt-4">
            <button 
              onClick={() => scrollToId('#whatwedo')} 
              className="w-auto px-6 py-2.5 sm:px-8 sm:py-3 text-white text-xs sm:text-sm font-bold tracking-wider rounded-lg shadow-lg transition-all hover:brightness-110 active:scale-95 text-center" 
              style={{ backgroundColor: maroon }}
            >
              Explore Services
            </button>
          </div>

        </div>

        {/* 3. Slogan Section */}
        <div className="w-full h-16 lg:h-20 relative z-20 shrink-0 flex justify-center items-center bg-[#972037]/75 backdrop-blur-xl border-t border-white/20 shadow-2xl">
          <div className="w-full px-4 sm:px-6 md:px-12 lg:px-20 [@media(min-width:1600px)]:px-40 mx-auto max-w-[2000px]">
            <div className="flex flex-row items-center justify-between sm:justify-evenly gap-2 sm:gap-4"> 
              
              {/* Item 1 -> Clients Served */}
              <button 
                onClick={() => scrollToId('#clientsserved')}
                className="flex-1 text-center px-1 group cursor-pointer transition-transform active:scale-95 focus:outline-none"
              >
                <span className="text-[12px] sm:text-base md:text-xl lg:text-2xl font-bold tracking-tight text-white italic leading-tight block group-hover:underline underline-offset-4 decoration-white/60 transition-all drop-shadow-sm">
                  Building Relationships
                </span>
              </button>

              {/* Separator 1 */}
              <div className="h-6 sm:h-8 lg:h-10 w-px bg-white/30 shrink-0"></div>

              {/* Item 2 -> Core Capabilities */}
              <button 
                onClick={() => scrollToId('#whatwedo')}
                className="flex-1 text-center px-1 group cursor-pointer transition-transform active:scale-95 focus:outline-none"
              >
                <span className="text-[12px] sm:text-base md:text-xl lg:text-2xl font-bold tracking-tight text-white italic leading-tight block group-hover:underline underline-offset-4 decoration-white/60 transition-all drop-shadow-sm">
                  Solving Problems
                </span>
              </button>

              {/* Separator 2 */}
              <div className="h-6 sm:h-8 lg:h-10 w-px bg-white/30 shrink-0"></div>

              {/* Item 3 -> Industries Served */}
              <button 
                onClick={() => scrollToId('#industries')}
                className="flex-1 text-center px-1 group cursor-pointer transition-transform active:scale-95 focus:outline-none"
              >
                <span className="text-[12px] sm:text-base md:text-xl lg:text-2xl font-bold tracking-tight text-white italic leading-tight block group-hover:underline underline-offset-4 decoration-white/60 transition-all drop-shadow-sm">
                  Adding Value
                </span>
              </button>

            </div>
          </div>
        </div>
      </header>

      {/* Sticky Sub-Navigation */}
      <nav 
        id="section-nav" 
        className="hidden md:block sticky top-[4rem] lg:top-[5rem] z-40 bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm overflow-x-auto whitespace-nowrap scrollbar-hide"
      >
        <div className="max-w-[1440px] mx-auto px-6 flex justify-center">
          <ul className="flex items-center space-x-8 lg:space-x-12">
            {subNavItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <li key={item.name}>
                  <button 
                    onClick={() => scrollToId(item.href)}
                    className={`text-xs lg:text-sm font-bold uppercase tracking-widest transition-colors relative group py-5 ${isActive ? 'text-[#972037]' : 'text-gray-500 hover:text-[#972037]'}`}
                  >
                    {item.name}
                    <span className={`absolute bottom-4 left-0 h-0.5 bg-[#972037] transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Who We Are Section */}
      <section id="whoweare" className="py-20 md:py-24 bg-gray-50 scroll-mt-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-fit mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Who We Are</h2>
                <div className="w-full h-1" style={{ backgroundColor: maroon }}></div>
              </div>
              <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
                Petrotek Corporation is a results-oriented consulting firm that specializes in subsurface fluid flow and injection well projects, providing engineering, geoscience, and field supervision services. 
              </p>
              <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
                Our company was founded in 1993 with a mission of providing cost-effective contract services to industrial and governmental clients. Our firm takes pride in meeting that goal with the highest degree of integrity and professionalism.
              </p>
              
              <div className="flex items-center space-x-6 mb-8">
                <img src={anniversaryGraphic} alt="33 Years" className="w-16 h-16 sm:w-20 sm:h-20 grayscale brightness-0 opacity-100 shrink-0" />
                <span className="text-sm sm:text-base font-bold text-gray-800 uppercase tracking-wider border-l-2 border-[#972037] pl-4 sm:pl-6 leading-snug">
                  Over Three Decades of <br /> Professional Excellence
                </span>
              </div>

              <div className="p-6 rounded-xl text-white shadow-md" style={{ backgroundColor: maroon }}>
                <p className="text-base sm:text-lg font-bold leading-relaxed m-0">
                  Our mission is to provide industry-leading technical expertise and innovative subsurface solutions for every client, every time.
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center mt-6 md:mt-0">
              <img 
                src="/2026_Update.png" 
                alt="Injection Well 3D Model" 
                className="w-full max-w-lg h-auto drop-shadow-xl cursor-zoom-in"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="whatwedo" className="py-20 md:py-24 bg-white scroll-mt-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="text-center mb-16 flex justify-center">
            <div className="w-fit">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Capabilities</h2>
              <div className="w-full h-1" style={{ backgroundColor: maroon }}></div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group p-6 sm:p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex flex-col h-full hover:border-[var(--service-accent)]"
                style={{ '--service-accent': service.accent }}
              >
                <div 
                  className="mb-6 relative inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl transition-transform duration-500 group-hover:scale-105" 
                  style={{ backgroundColor: `${service.accent}15` }}
                > 
                  <div style={{ color: service.accent }}>
                    {React.cloneElement(service.icon, { className: "w-8 h-8 sm:w-10 sm:h-10 stroke-[1.5]" })}
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold mb-3 text-gray-900 tracking-tight transition-colors duration-300 group-hover:!text-[var(--service-accent)]">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow text-sm sm:text-base">{service.description}</p>
                
                <Link 
                  to={service.link} 
                  className="inline-flex items-center w-fit px-5 py-2.5 sm:px-6 sm:py-3 mt-auto text-xs sm:text-sm font-bold text-white uppercase tracking-wider rounded-lg shadow-sm transition-all hover:brightness-110" 
                  style={{ backgroundColor: service.accent }}
                >
                  Learn More <ChevronRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients & Map Section */}
      <section id="clientsserved" className="py-20 md:py-24 bg-gray-50 relative overflow-hidden scroll-mt-20">
        <div className="max-w-[1440px] mx-auto px-6 relative z-10">
          <div className="text-center mb-16 flex flex-col items-center">
            <Globe className="w-10 h-10 md:w-12 md:h-12 mb-4" style={{ color: maroon }} />
            <div className="w-fit mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Clients Served</h2>
              <div className="w-full h-1" style={{ backgroundColor: maroon }}></div>
            </div>
            <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-600 leading-relaxed">
              Petrotek provides specialized technical and logistics services to solve complex subsurface challenges across North America and beyond.
            </p>
            <br></br>
            <p className="text-sm sm:text-base text-gray-500 italic mb-12">
              Professional engineering and geology services offered where licensed *
          </p>
          </div>

          {/* Stats Display */}
          <div ref={statsRef} className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16 md:gap-32 mb-16">
            <div className="text-center">
              <div 
                className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter mb-1 transition-all duration-300" 
                style={{ color: maroon }}
              >
                {counts.clients}+
              </div>
              <div className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-gray-400">Clients Served</div>
            </div>
            
            <div className="hidden sm:block w-px h-20 md:h-24 bg-gray-200"></div>

            <div className="text-center">
              <div 
                className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter mb-1 transition-all duration-300" 
                style={{ color: maroon }}
              >
                {counts.projects}+
              </div>
              <div className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-gray-400">Projects Supported</div>
            </div>
          </div>

          {/* Map Image */}
          <div className="relative max-w-8xl mx-auto rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-white group">
            <img 
              src="/Client Map v2.png" 
              alt="Petrotek Client Map" 
              className="w-full h-auto object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-700 cursor-zoom-in"
              onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=2000"; }}
            />
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section id="industries" className="py-20 md:py-24 bg-white scroll-mt-20">
        <div className="w-full px-6 mx-auto max-w-[1440px] text-center">
          <div className="flex flex-col items-center mb-6">
            <Activity className="w-10 h-10 md:w-12 md:h-12 mb-4" style={{ color: maroon }} />
            <div className="w-fit mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Industries Served</h2>
              <div className="w-full h-1" style={{ backgroundColor: maroon }}></div>
            </div>
          </div>
          
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-gray-700 mb-3">
            Petrotek provides consulting services to many industries for the management of wastewater using technology that is protective of drinking water sources and the environment.
          </p>
          <p className="text-sm sm:text-base text-gray-500 italic mb-12">
            Some of the industries we serve include:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {industries.map((item, index) => (
              <IndustryCard 
                key={index} 
                item={item} 
                maroon={maroon} 
                onInquire={scrollToId} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-24 bg-gray-50 border-t border-gray-200 scroll-mt-20">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-5">
            
            {/* Contact Details Left Panel */}
            <div className="lg:col-span-2 text-white flex flex-col justify-between overflow-hidden" style={{ backgroundColor: maroon }}>
              <div>
                {/* 1. Header Banner Image */}
                <div className="relative w-full aspect-[1200/471] overflow-hidden bg-black/30 border-b border-white/15">
                  <img 
                    src="/Office.png" 
                    alt="Contact Header" 
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/0 flex items-end p-6 sm:p-8">
                    <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight drop-shadow-md">
                      Get In Touch
                    </h2>
                  </div>
                </div>

                {/* 2. Contact Items Section */}
                <div className="p-6 sm:p-8 space-y-5 text-sm sm:text-base">
                  <div className="flex items-start space-x-3.5">
                    <MapPin className="w-5 h-5 mt-1 shrink-0" />
                    <p className="leading-relaxed">5935 South Zang Street, Suite 200 Littleton, Colorado USA 80127</p>
                  </div>

                  <div className="flex items-center space-x-3.5">
                    <Phone className="w-5 h-5 shrink-0" />
                    <p><a href="tel:3032909414" className="hover:underline">(303) 290-9414</a></p>
                  </div>

                  {/* Form Indicator with Directional Arrow */}
                  <div className="flex items-start space-x-3.5 group">
                    <Mail className="w-5 h-5 mt-0.5 shrink-0" />
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span>
                        Send us a message using our contact form
                      </span>
                      <span className="inline-flex items-center text-white drop-shadow-sm">
                        <ArrowRight className="hidden lg:inline-block w-5 h-5 stroke-[2.5] group-hover:translate-x-1 transition-transform" />
                        <ArrowDown className="inline-block lg:hidden w-5 h-5 stroke-[2.5] group-hover:translate-y-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Custom Vector / Tile Map */}
              <div className="p-6 sm:p-8 pt-0">
                <div className="rounded-xl overflow-hidden shadow-inner border border-white/20">
                  <OfficeMap height="240px" />
                </div>
              </div>
            </div>

            {/* Form Right Panel */}
            <form 
              className="lg:col-span-3 p-6 sm:p-10 lg:p-12 flex flex-col justify-between h-full space-y-5" 
              onSubmit={handleFormSubmit}
            >
              <div className="space-y-5 flex-1 flex flex-col">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs sm:text-sm font-bold text-gray-700">First Name</label>
                    <input 
                      required 
                      name="firstName" 
                      type="text" 
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#972037] outline-none text-sm transition-all" 
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs sm:text-sm font-bold text-gray-700">Last Name</label>
                    <input 
                      required 
                      name="lastName" 
                      type="text" 
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#972037] outline-none text-sm transition-all" 
                    />
                  </div>
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-xs sm:text-sm font-bold text-gray-700">Email Address</label>
                  <input 
                    required 
                    name="email" 
                    type="email" 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#972037] outline-none text-sm transition-all" 
                  />
                </div>
                
                {/* Dynamically expanding textarea */}
                <div className="space-y-1.5 flex-1 flex flex-col">
                  <label className="text-xs sm:text-sm font-bold text-gray-700">Message</label>
                  <textarea 
                    required 
                    name="message" 
                    className="w-full flex-1 min-h-[140px] px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#972037] outline-none text-sm transition-all resize-y"
                  ></textarea>
                </div>
              </div>

              {/* Bottom controls remain pinned to the base */}
              <div className="space-y-5 pt-2">
                <div className="overflow-x-auto py-1">
                  {import.meta.env.VITE_RECAPTCHA_SITE ? (
                    <ReCAPTCHA ref={recaptchaRef} sitekey={import.meta.env.VITE_RECAPTCHA_SITE} />
                  ) : (
                    <p className="text-red-500 text-xs italic">reCAPTCHA Key Missing</p>
                  )}
                </div>

                <button 
                  type="submit" 
                  className="w-full py-4 text-white text-xs sm:text-sm font-bold rounded-lg uppercase tracking-widest shadow-md hover:brightness-110 active:scale-[0.99] transition-all" 
                  style={{ backgroundColor: maroon }}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;