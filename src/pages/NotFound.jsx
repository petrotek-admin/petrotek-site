import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

const NotFound = () => (
  <div className="pt-32 pb-20 px-6 bg-white min-h-screen">
    <Seo title="Page Not Found | Petrotek" description="This page could not be found." path="/404" noindex />
    <div className="max-w-xl mx-auto text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Page not found</h1>
      <p className="text-gray-600 mb-8">The page you are looking for doesn't exist or has moved.</p>
      <Link to="/" className="inline-flex px-8 py-4 bg-[#972037] text-white font-bold rounded-lg hover:brightness-110 transition-all shadow-lg">
        Back to Home
      </Link>
    </div>
  </div>
);

export default NotFound;