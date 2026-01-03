import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/NavbarEvents';

// Optional scroll animation wrapper
const ScrollSection = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: 'easeOut', delay }}
    viewport={{ once: true, amount: 0.3 }}
  >
    {children}
  </motion.div>
);

const AwardsPage = () => {
  return (
    <div className="w-full font-sans bg-[#f3f0e6] min-h-screen">
      <Navbar />

      {/* Main Content */}
      <ScrollSection>
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
      </ScrollSection>
    </div>
  );
};

export default AwardsPage;
