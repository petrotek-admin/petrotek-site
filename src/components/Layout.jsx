import React, { useState, useEffect, useRef } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, MapPin, Phone, Plus, Minus, RotateCcw } from 'lucide-react';
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import BackToTop from './BackToTop';

// --- MOBILE-OPTIMIZED GLOBAL IMAGE MODAL COMPONENT ---
const ImageModal = ({ src, alt, isOpen, onClose }) => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });

  // Touch tracking refs
  const containerRef = useRef(null);
  const touchStartDistRef = useRef(null);
  const touchStartScaleRef = useRef(1);
  const lastTouchRef = useRef({ x: 0, y: 0 });
  const lastTapTimeRef = useRef(0);

  // Reset coordinates on open or image switch
  useEffect(() => {
    if (isOpen) {
      setScale(1);
      setPosition({ x: 0, y: 0 });
    }
  }, [src, isOpen]); 

  // Non-passive desktop trackpad & mouse wheel listener
  useEffect(() => {
    const container = containerRef.current;
    if (!isOpen || !container) return;

    const handleWheel = (e) => {
      e.preventDefault();
      e.stopPropagation();

      const zoomFactor = 0.0015;
      const delta = -e.deltaY * zoomFactor;

      setScale((prev) => {
        const next = Math.min(Math.max(prev + delta, 1), 6);
        if (next === 1) setPosition({ x: 0, y: 0 });
        return next;
      });
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, [isOpen]);

  if (!isOpen) return null;

  // Zoom Button Handlers
  const handleZoomIn = (e) => {
    e.stopPropagation();
    setScale((prev) => Math.min(prev + 0.5, 6));
  };

  const handleZoomOut = (e) => {
    e.stopPropagation();
    setScale((prev) => {
      const next = Math.max(prev - 0.5, 1);
      if (next === 1) setPosition({ x: 0, y: 0 });
      return next;
    });
  };

  const handleReset = (e) => {
    e.stopPropagation();
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  // --- Mouse Dragging (Desktop) ---
  const handleMouseDown = (e) => {
    if (scale <= 1) return;
    setIsDragging(true);
    setStartPos({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - startPos.x,
      y: e.clientY - startPos.y,
    });
  };

  const handleMouseUp = () => setIsDragging(false);

  // --- Touch Gestures (Mobile Pinch-to-Zoom & Pan) ---
  const getTouchDistance = (touches) => {
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.hypot(dx, dy);
  };

  const handleTouchStart = (e) => {
    // 2-Finger Pinch
    if (e.touches.length === 2) {
      touchStartDistRef.current = getTouchDistance(e.touches);
      touchStartScaleRef.current = scale;
      return;
    }

    // 1-Finger Tap or Pan
    if (e.touches.length === 1) {
      const now = Date.now();
      const timeSinceLastTap = now - lastTapTimeRef.current;

      // Double Tap detection (< 300ms)
      if (timeSinceLastTap < 300 && timeSinceLastTap > 0) {
        if (scale > 1) {
          setScale(1);
          setPosition({ x: 0, y: 0 });
        } else {
          setScale(2.5);
        }
        lastTapTimeRef.current = 0;
        return;
      }
      lastTapTimeRef.current = now;

      // One-finger Pan initialization when zoomed
      lastTouchRef.current = {
        x: e.touches[0].clientX - position.x,
        y: e.touches[0].clientY - position.y
      };
    }
  };

  const handleTouchMove = (e) => {
    // Pinch Scaling
    if (e.touches.length === 2 && touchStartDistRef.current) {
      e.preventDefault();
      const currentDist = getTouchDistance(e.touches);
      const ratio = currentDist / touchStartDistRef.current;
      const nextScale = Math.min(Math.max(touchStartScaleRef.current * ratio, 1), 6);
      
      setScale(nextScale);
      if (nextScale === 1) setPosition({ x: 0, y: 0 });
      return;
    }

    // Single-Finger Pan
    if (e.touches.length === 1 && scale > 1) {
      e.preventDefault();
      setPosition({
        x: e.touches[0].clientX - lastTouchRef.current.x,
        y: e.touches[0].clientY - lastTouchRef.current.y
      });
    }
  };

  const handleTouchEnd = (e) => {
    if (e.touches.length < 2) {
      touchStartDistRef.current = null;
    }
    // Snap back to origin if scale settled at 1
    if (scale <= 1) {
      setPosition({ x: 0, y: 0 });
    }
  };

  return (
    <div 
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/90 backdrop-blur-md transition-opacity duration-300 touch-none select-none"
      onClick={onClose}
    >
      {/* Top Close Button - Elevated hit target for touch devices */}
      <button 
        onClick={onClose}
        aria-label="Close modal"
        className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white hover:text-gray-300 z-[10001] bg-white/10 active:bg-white/30 p-3 sm:p-3.5 rounded-full backdrop-blur-md border border-white/10 transition-all shadow-lg"
      >
        <X size={24} className="sm:w-7 sm:h-7" />
      </button>

      {/* Floating Controls Overlay - Safe-area positioned on mobile */}
      <div 
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-1 sm:gap-2 bg-black/60 backdrop-blur-xl p-1.5 sm:p-2 rounded-2xl border border-white/15 z-[10001] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={handleZoomOut} 
          aria-label="Zoom out"
          className="p-3 text-white active:bg-white/20 sm:hover:bg-white/10 rounded-xl transition-colors"
        >
          <Minus size={20} />
        </button>

        <button 
          onClick={handleReset} 
          aria-label="Reset zoom"
          className="flex items-center gap-1.5 px-3 sm:px-4 text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider active:bg-white/20 sm:hover:bg-white/10 rounded-xl py-3 transition-colors"
        >
          <RotateCcw size={15} /> 
          <span>Reset</span>
        </button>

        <button 
          onClick={handleZoomIn} 
          aria-label="Zoom in"
          className="p-3 text-white active:bg-white/20 sm:hover:bg-white/10 rounded-xl transition-colors"
        >
          <Plus size={20} />
        </button>
      </div>

      {/* Gesture-Aware Image Container */}
      <div 
        ref={containerRef}
        className="relative w-full h-full flex items-center justify-center overflow-hidden touch-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt={alt}
          className="max-w-[95%] max-h-[85%] sm:max-w-[90%] sm:max-h-[90%] object-contain transition-transform duration-75 ease-out select-none pointer-events-none"
          style={{ 
            transform: `translate3d(${position.x}px, ${position.y}px, 0px) scale(${scale})`,
            cursor: scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default'
          }}
          draggable="false"
        />
      </div>
    </div>
  );
};

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isServicesExpanded, setIsServicesExpanded] = useState(false);
  const [modalData, setModalData] = useState({ isOpen: false, src: '', alt: '' });
  
  const navigate = useNavigate();
  const location = useLocation();
  const maroon = "#972037";

  // Global Image Click Listener
  useEffect(() => {
    const handleGlobalClick = (e) => {
      const isImage = e.target.tagName === 'IMG';
      const isNotNav = !e.target.closest('nav');
      const isNotNoZoom = !e.target.classList.contains('no-zoom');

      if (isImage && isNotNav && isNotNoZoom) {
        setModalData({ isOpen: true, src: e.target.src, alt: e.target.alt });
        document.body.style.overflow = 'hidden';
      }
    };

    document.addEventListener('click', handleGlobalClick);
    return () => document.removeEventListener('click', handleGlobalClick);
  }, []);

  const closeModal = () => {
    setModalData(prev => ({ ...prev, isOpen: false }));
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesExpanded(false);
  }, [location]);

  const services = [
    { title: "Injection Wells", id: "/injection-wells" },
    { title: "Landfill Leachate", id: "/leachate-services" },
    { title: "Mining", id: "/mining-and-isr" },
    { title: "Oil & Gas", id: "/oil-and-gas" },
    { title: "Carbon Capture", id: "/carbon-capture" },
    { title: "Safety", id: "/safety" }
  ];

  const handleContactClick = () => {
    setIsMenuOpen(false);
    if (location.pathname === '/') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const navClass = `fixed top-0 w-full z-50 transition-all duration-500 py-3 bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-lg`;

  const linkClass = (isMobile = false) => `
    text-sm font-bold uppercase tracking-widest transition-all duration-300
    [@media(min-width:1600px)]:text-base
    ${isMobile ? 'text-gray-800 text-xl py-6 border-b border-gray-100' : 'text-gray-800 hover:text-[#972037]'}
  `;

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 flex flex-col">
      
      <nav className={navClass}>
        <div className="w-full px-6 md:px-12 [@media(min-width:1600px)]:px-40 mx-auto max-w-[2000px] flex justify-between items-center">
          
          <Link to="/" onClick={() => window.scrollTo(0,0)} className="z-50 shrink-0">
            <img src="/Petrotek.png" alt="Petrotek" className="h-8 md:h-10 [@media(min-width:1600px)]:h-12 w-auto transition-all no-zoom" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden min-[1001px]:flex space-x-8 lg:space-x-12 [@media(min-width:1600px)]:space-x-16 items-center">
            <Link to="/" className={linkClass()}>Home</Link>
            
            <div className="relative py-4" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
              <button className={`${linkClass()} flex items-center`}>
                What We Do <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isDropdownOpen && (
                <div className="absolute top-full left-0 w-64 [@media(min-width:1600px)]:w-80 bg-white shadow-2xl rounded-xl py-4 border border-gray-100 animate-in fade-in slide-in-from-top-2 duration-200">
                  {services.map((s) => (
                    <Link key={s.id} to={s.id} onClick={() => window.scrollTo(0,0)} className="px-6 py-3 hover:bg-gray-50 text-gray-700 text-xs [@media(min-width:1600px)]:text-sm font-bold uppercase tracking-widest hover:text-[#972037] transition-colors block">
                      {s.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/team" onClick={() => window.scrollTo(0,0)} className={linkClass()}>Our Team</Link>
            <Link to="/publications" onClick={() => window.scrollTo(0,0)} className={linkClass()}>Publications</Link>
            
            <button onClick={handleContactClick} className="px-6 py-2.5 [@media(min-width:1600px)]:px-10 [@media(min-width:1600px)]:py-4 rounded-sm text-white text-xs [@media(min-width:1600px)]:text-base font-extrabold uppercase tracking-widest transition-all hover:brightness-110 active:scale-95 shadow-md" style={{ backgroundColor: maroon }}>
              Contact
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="min-[1001px]:hidden p-2 text-gray-900 transition-colors relative" 
            style={{ zIndex: 9999 }}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Clean Mobile Navigation Drawer */}
        <div 
          className={`fixed inset-0 w-screen h-screen transition-all duration-300 ease-in-out min-[1001px]:hidden flex flex-col ${
            isMenuOpen 
              ? 'opacity-100 pointer-events-auto translate-x-0' 
              : 'opacity-0 pointer-events-none translate-x-full'
          }`}
          style={{ 
            zIndex: 9998, 
            backgroundColor: 'rgba(255, 255, 255, 0.98)', 
            backdropFilter: 'blur(24px)', 
            WebkitBackdropFilter: 'blur(24px)' 
          }}
        >
          {/* Drawer Top Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="shrink-0">
              <img src="/Petrotek.png" alt="Petrotek" className="h-8 w-auto no-zoom" />
            </Link>
          </div>

          {/* Drawer Scrollable Links */}
          <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col justify-between">
            <div className="space-y-1">
              <Link 
                to="/" 
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-between py-3.5 text-xl font-bold tracking-tight text-gray-900 hover:text-[#972037] transition-colors"
              >
                <span>Home</span>
              </Link>

              {/* Collapsible Services Accordion */}
              <div className="border-y border-gray-100 py-1">
                <button
                  type="button"
                  onClick={() => setIsServicesExpanded(!isServicesExpanded)}
                  className="w-full flex items-center justify-between py-3.5 text-xl font-bold tracking-tight text-gray-900 hover:text-[#972037] transition-colors"
                >
                  <span>Our Services</span>
                  <ChevronDown 
                    size={20} 
                    className={`text-gray-400 transition-transform duration-300 ${isServicesExpanded ? 'rotate-180 text-[#972037]' : ''}`} 
                  />
                </button>

                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isServicesExpanded ? 'max-h-96 opacity-100 pb-3' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="grid grid-cols-1 gap-1 pl-3 border-l-2 border-[#972037]/20 ml-1">
                    {services.map((s) => (
                      <Link 
                        key={s.id} 
                        to={s.id} 
                        onClick={() => setIsMenuOpen(false)}
                        className="py-2 px-3 text-sm font-semibold tracking-wide text-gray-600 hover:text-[#972037] hover:bg-gray-50 rounded-lg transition-all"
                      >
                        {s.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link 
                to="/team" 
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-between py-3.5 text-xl font-bold tracking-tight text-gray-900 hover:text-[#972037] transition-colors"
              >
                <span>Our Team</span>
              </Link>

              <Link 
                to="/publications" 
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-between py-3.5 text-xl font-bold tracking-tight text-gray-900 hover:text-[#972037] transition-colors"
              >
                <span>Publications</span>
              </Link>
            </div>

            {/* Drawer Bottom Info & Action */}
            <div className="mt-8 pt-6 border-t border-gray-100 space-y-4">
              <div className="space-y-2 text-xs text-gray-500">
                <div className="flex items-center gap-2">
                  <Phone size={14} className="text-[#972037]" />
                  <a href="tel:3032909414" className="hover:underline font-semibold text-gray-700">
                    (303) 290-9414
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin size={14} className="text-[#972037] shrink-0 mt-0.5" />
                  <span>5935 S Zang St, Suite 200, Littleton, CO</span>
                </div>
              </div>

              <button 
                onClick={handleContactClick} 
                className="w-full py-4 text-white text-xs font-bold uppercase tracking-widest rounded-lg shadow-md hover:brightness-110 active:scale-[0.99] transition-all" 
                style={{ backgroundColor: maroon }}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer className="bg-gray-800 text-gray-200 py-20 border-t border-gray-700">
        <div className="w-full px-6 md:px-12 [@media(min-width:1600px)]:px-40 mx-auto max-w-[2000px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 md:mb-24">
            
            <div className="flex flex-col items-start">
              <img src="/Petrotek.png" alt="Petrotek" className="h-12 w-auto brightness-125 mb-8 no-zoom" />
              <p className="text-base md:text-lg leading-relaxed max-w-sm mb-8 text-gray-300">
                Petrotek Corporation specializes in technical evaluations and field operations related to subsurface fluid flow.
              </p>
              <div className="flex items-center space-x-3 text-sm md:text-base font-bold uppercase tracking-widest text-gray-400">
                <div className="h-px w-8 bg-[#972037]"></div>
                <span>Established 1993</span>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-8 opacity-70">Sitemap</h4>
              <nav className="flex flex-col space-y-4 text-base md:text-lg">
                <Link to="/" onClick={() => window.scrollTo(0,0)} className="hover:text-white transition-colors w-fit">Home</Link>
                <Link to="/team" onClick={() => window.scrollTo(0,0)} className="hover:text-white transition-colors w-fit">Our Team</Link>
                <Link to="/publications" onClick={() => window.scrollTo(0,0)} className="hover:text-white transition-colors w-fit">Publications</Link>
                <button onClick={handleContactClick} className="text-left hover:text-white transition-colors w-fit">Contact</button>
              </nav>
            </div>
            
            <div>
              <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-8 opacity-70">Expertise</h4>
              <div className="flex flex-col space-y-4 text-base md:text-lg">
                {services.map(s => (
                  <Link key={s.id} to={s.id} onClick={() => window.scrollTo(0,0)} className="hover:text-white transition-colors w-fit">{s.title}</Link>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-8 opacity-70">Headquarters</h4>
              <div className="text-base md:text-lg space-y-6">
                <div className="flex items-start space-x-3">
                  <MapPin size={22} className="text-[#972037] shrink-0 mt-1" />
                  <span className="text-gray-300">5935 South Zang Street, Suite 200<br />Littleton, Colorado USA 80127</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={22} className="text-[#972037] shrink-0" />
                  <a href="tel:3032909414" className="hover:text-white transition-colors text-gray-300">(303) 290-9414</a>
                </div>
              </div>
            </div>
            
          </div>
          
          <div className="pt-12 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
            <p className="text-xs md:text-sm uppercase tracking-widest text-gray-400">&copy; {new Date().getFullYear()} Petrotek Corporation</p>
            <p className="text-xs md:text-sm font-bold text-white uppercase tracking-[0.2em] italic opacity-80">Building Relationships | Solving Problems | Adding Value</p>
          </div>
        </div>
      </footer>

      {/* The Global Modal */}
      <ImageModal 
        isOpen={modalData.isOpen} 
        src={modalData.src} 
        alt={modalData.alt} 
        onClose={closeModal} 
      />

      <BackToTop />
      <Analytics />
      <SpeedInsights />
    </div>
  );
};

export default Layout;