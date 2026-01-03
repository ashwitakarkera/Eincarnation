import React from "react";
import iso9001 from "../assets/images/iso9001.png";
import iso14001 from "../assets/images/iso14001.png";
import seepz from "../assets/images/seepz.png";
import mpcb from "../assets/images/mpcb.png";
import decor from "../assets/images/certificates-decor.png";

export default function Certificates() {
  const certs = [
    { 
      id: "ISO 9001", 
      logo: iso9001, 
      text: "We follow globally recognized quality standards to ensure consistent excellence in our products and services. Customer satisfaction and continuous improvement are at the heart of everything we do." 
    },
    { 
      id: "ISO 14001", 
      logo: iso14001, 
      text: "We are committed to minimizing environmental impact through responsible and sustainable practices. Our operations strictly follow international environmental safety standards." 
    },
    { 
      id: "SEEPZ", 
      logo: seepz, 
      text: "We are an authorized SEEPZ unit, enabling efficient export-oriented operations and global trade compliance. This approval ensures faster processing, tax benefits, and seamless international business." 
    },
    { 
      id: "MPCB", 
      logo: mpcb, 
      text: "We operate in compliance with MPCB norms to control pollution and protect the environment. Our processes meet regulatory standards for safety, waste management, and emissions." 
    },
  ];

  return (
    // Main Background updated to #F4F3EF
    <section className="bg-[#F4F3EF] py-24 relative overflow-hidden font-sans">
      {/* Decorative image in top right */}
      <img 
        src={decor} 
        alt="" 
        className="absolute -right-6 -top-6 w-80 pointer-events-none opacity-90 z-0" 
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-14">
          <p className="text-[20px] font-semibold text-black mb-1 uppercase">OUR</p>
          <h2 className="text-[52px] font-semibold text-[#1e1494] leading-tight">
            Certificates
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {certs.map((c) => (
            <div 
              key={c.id} 
              // Card Background updated to #EBE8D7
              className="bg-[#EBE8D7] p-10 rounded-[40px] shadow-sm flex flex-col justify-between border border-white/20"
            >
              <div>
                {/* Header: Logo and ID on same line */}
                {/* Header: Logo and ID on same line */}
<div className="flex justify-between items-center mb-10">
  {/* Removed p-3 and added overflow-hidden to ensure the image clips to the circle */}
  <div className="w-20 h-20 flex items-center justify-center bg-white rounded-full overflow-hidden shadow-sm">
    <img 
      src={c.logo} 
      alt={c.id} 
      className="w-full h-full object-cover" // Changed to w-full and h-full with object-cover
    />
  </div>
  <h3 className="text-[28px] font-bold text-[#2d3e50] tracking-tight">
    {c.id}
  </h3>
</div>

                {/* Description */}
                <p className="text-[15px] leading-relaxed text-gray-700 mb-10 text-justify">
                  {c.text}
                </p>
              </div>

              {/* Button */}
              <button className="flex items-center gap-2 w-fit rounded-full bg-[#9bc9df] px-8 py-2.5 text-[14px] font-bold text-gray-900 transition-all hover:brightness-95 active:scale-95">
                Download now 
                <span className="text-lg">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}