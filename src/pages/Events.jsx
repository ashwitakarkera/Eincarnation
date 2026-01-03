import React from 'react';

const AwardsPage = () => {
  return (
    <div className="min-h-screen bg-[#f5f4f0] font-sans selection:bg-indigo-100">
      {/* Navigation Header */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        {/* Logo Placeholder */}
        <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
          <span className="text-[10px] text-white font-bold">LOGO</span>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-8 items-center">
          <a href="#" className="text-xs font-semibold text-gray-500 hover:text-black transition-colors">Home</a>
          <a href="#" className="text-xs font-semibold text-gray-500 hover:text-black transition-colors">About Us</a>
          <a href="#" className="text-xs font-semibold text-gray-500 hover:text-black transition-colors">Services</a>
          <a href="#" className="text-xs font-bold text-gray-800 border-b-2 border-black pb-1">Events</a>
          <a href="#" className="text-xs font-semibold text-gray-500 hover:text-black transition-colors">Contact Us</a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-12 pt-20">
        <div className="flex flex-col gap-2">
          {/* Subheading */}
          <span className="text-[#3b2a8c] font-bold text-sm tracking-widest uppercase">
            AWARDS
          </span>
          
          {/* Main Heading */}
          <h1 className="text-[#1a0b6e] text-5xl md:text-6xl font-extrabold tracking-tight">
            Explore Our Events
          </h1>
        </div>
      </main>
    </div>
  );
};

export default AwardsPage;