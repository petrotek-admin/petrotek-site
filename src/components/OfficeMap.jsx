// src/components/OfficeMap.jsx
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Custom SVG Pin styled to brand maroon (#972037)
const maroonPin = L.divIcon({
  className: 'custom-map-pin',
  html: `
    <div style="position: relative; width: 32px; height: 32px; transform: translate(-50%, -100%);">
      <svg viewBox="0 0 24 24" fill="#972037" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="filter: drop-shadow(0 4px 6px rgba(0,0,0,0.35)); width: 32px; height: 32px;">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3" fill="#ffffff"></circle>
      </svg>
    </div>
  `,
  iconSize: [0, 0],
  iconAnchor: [0, 0],
  popupAnchor: [0, -32],
});

// Strips attribution box entirely if unused
const RemoveLeafletPrefix = () => {
  const map = useMap();
  useEffect(() => {
    map.attributionControl?.setPrefix(false);
  }, [map]);
  return null;
};

// Unified Gesture Controller for both Desktop (Ctrl+Scroll) and Mobile (2-Finger Pan)
const GestureController = ({ onShowPrompt }) => {
  const map = useMap();

  useEffect(() => {
    const container = map.getContainer();

    // --- Desktop Wheel Handling ---
    const handleWheel = (e) => {
      if (e.ctrlKey || e.metaKey) {
        map.scrollWheelZoom.enable();
      } else {
        map.scrollWheelZoom.disable();
        onShowPrompt("Use Ctrl + scroll to zoom the map");
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Control' || e.key === 'Meta') {
        map.scrollWheelZoom.enable();
      }
    };

    const handleKeyUp = (e) => {
      if (e.key === 'Control' || e.key === 'Meta') {
        map.scrollWheelZoom.disable();
      }
    };

    // --- Mobile Touch Handling ---
    const handleTouchStart = (e) => {
      if (e.touches.length === 1) {
        // Single finger -> disable dragging so the page scrolls naturally
        map.dragging.disable();
      } else if (e.touches.length >= 2) {
        // Two fingers -> enable dragging & pinching
        map.dragging.enable();
      }
    };

    const handleTouchMove = (e) => {
      if (e.touches.length === 1) {
        // Single finger drag attempted -> notify user
        onShowPrompt("Use two fingers to move the map");
      }
    };

    const handleTouchEnd = () => {
      // Re-enable dragging for subsequent desktop interaction
      map.dragging.enable();
    };

    container.addEventListener('wheel', handleWheel, { passive: true });
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchmove', handleTouchMove, { passive: true });
    container.addEventListener('touchend', handleTouchEnd, { passive: true });

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [map, onShowPrompt]);

  return null;
};

const OfficeMap = ({ height = "240px" }) => {
  const position = [39.608276, -105.146385];
  const [promptMessage, setPromptMessage] = useState("");

  const triggerPrompt = (msg) => {
    setPromptMessage(msg);
    clearTimeout(window._mapPromptTimeout);
    window._mapPromptTimeout = setTimeout(() => {
      setPromptMessage("");
    }, 1500);
  };

  return (
    <div style={{ height }} className="w-full relative z-0 select-none overflow-hidden touch-pan-y">
      <MapContainer
        center={position}
        zoom={16}
        scrollWheelZoom={false}
        doubleClickZoom={true}
        dragging={true}
        touchZoom={true}
        attributionControl={false}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          maxZoom={19}
          attribution=""
        />
        <RemoveLeafletPrefix />
        
        <Marker position={position} icon={maroonPin}>
          <Popup className="custom-leaflet-popup">
            <div className="text-xs text-gray-800">
              <strong className="block font-bold text-sm text-[#972037]">Petrotek Corporation</strong>
              5935 South Zang Street, Suite 200<br />
              Littleton, CO 80127
            </div>
          </Popup>
        </Marker>

        <GestureController onShowPrompt={triggerPrompt} />
      </MapContainer>

      {/* Dynamic Gesture Overlay (Context-aware for desktop vs mobile) */}
      <div 
        className={`absolute inset-0 bg-black/45 backdrop-blur-[1px] flex items-center justify-center pointer-events-none transition-opacity duration-300 z-[1000] ${
          promptMessage ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <span className="text-white text-xs font-semibold px-4 py-2 bg-black/80 rounded-md shadow-lg border border-white/10 tracking-wide text-center mx-4">
          {promptMessage}
        </span>
      </div>
    </div>
  );
};

export default OfficeMap;