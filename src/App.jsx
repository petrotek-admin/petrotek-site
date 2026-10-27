// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Layout & Helpers
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';

// Page Imports
import Home from './pages/Home';
import Team from './pages/Team';
import Publications from './pages/Publications';

// Service Page Imports
import InjectionWells from './pages/InjectionWells';
import Leachate from './pages/Leachate';
import CaptureStorage from './pages/CaptureStorage';
import OilGas from './pages/OilGas';
import MiningAndISR from './pages/MiningAndISR';
import Safety from './pages/Safety';

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* The Layout wraps all routes, providing the Navbar & Footer */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="team" element={<Team />} />
          <Route path="publications" element={<Publications />} />

          {/* Service Routes */}
          <Route path="injection-wells" element={<InjectionWells />} />
          <Route path="leachate-services" element={<Leachate />} />
          <Route path="carbon-capture" element={<CaptureStorage />} />
          <Route path="oil-and-gas" element={<OilGas />} />
          <Route path="mining-and-isr" element={<MiningAndISR />} />
          <Route path="safety" element={<Safety />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;