import React from 'react';

export default function Home() {
  return (
    <div className="w-full font-sans bg-[#f3f0e6] min-h-screen">
      {/* HERO SECTION */}
      <section
        className="relative h-[300px] w-full bg-cover bg-center overflow-hidden rounded-b-[40px]"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')", // Ensure this has the recycle logo overlay
          backgroundColor: '#1a1a1a'
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Navbar */}
        <div className="relative z-10 flex items-center justify-between px-12 py-8 text-white">
          <div className="h-12 w-12 rounded-full bg-black border border-gray-700 flex items-center justify-center text-[10px] font-bold tracking-widest">
            LOGO
          </div>

          <nav className="flex gap-10 text-[15px] font-medium">
            <a href="#" className="hover:opacity-80">Home</a>
            <a href="#" className="hover:opacity-80 border-b-2 border-white pb-1">About Us</a>
            <a href="#" className="hover:opacity-80">Services</a>
            <a href="#" className="hover:opacity-80">Events</a>
            <a href="#" className="hover:opacity-80">Contact Us</a>
          </nav>
        </div>

        {/* Hero Title */}
        <div className="relative z-10 px-12 mt-12">
          <h1 className="text-5xl font-bold text-white tracking-tight">
            About Us
          </h1>
        </div>
      </section>

      {/* ABOUT CONTENT SECTION */}
      <section className="px-12 py-20">
        <div className="relative mx-auto max-w-6xl">
          
          {/* Main Image - Positioned behind and to the left */}
          <div className="relative z-0 w-[45%] h-[400px]">
            <img
              src="/images/recycling.jpg" 
              alt="Recycling worker"
              className="h-full w-full rounded-[40px] object-cover object-center shadow-lg"
            />
          </div>

          {/* White Card - Overlapping the image */}
          <div className="absolute top-1/2 right-0 z-10 w-[70%] -translate-y-1/2 rounded-[30px] bg-[#f8f7f2] p-12 shadow-sm">
            <h2 className="mb-8 text-2xl font-bold text-[#2d3436] max-w-2xl leading-snug">
              Trusted Partner for Secure & Sustainable E-Waste Recycling
            </h2>

            {/* Two Column Text Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <p className="text-[14px] leading-relaxed text-gray-700">
                E-Incarnation Recycling Pvt. Ltd. is an authorized e-waste
                recycler providing secure, compliant, and sustainable
                recycling solutions across India. We ensure safe e-waste
                disposal with strong data security, regulatory compliance,
                full traceability, and zero landfill practices.
              </p>
              <p className="text-[14px] leading-relaxed text-gray-700">
                Our structured processes, certified data destruction, and
                circular economy approach help organizations reduce
                environmental impact while managing e-waste responsibly and
                transparently.
              </p>
            </div>

            {/* View More Button */}
            <div className="mt-10 flex justify-end">
              <button className="flex items-center gap-3 rounded-full bg-[#9bc9df] px-8 py-3 text-sm font-bold tracking-wide text-gray-800 hover:bg-[#8bbcd4] transition-all">
                VIEW MORE 
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#f5f4ed] py-24">
  <div className="mx-auto max-w-7xl px-12">
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">

      {/* LEFT CONTENT */}
      <div className="flex flex-col items-start">
        <p className="text-[15px] font-bold tracking-[0.15em] text-[#333] mb-2">
          ABOUT
        </p>

        <h2 className="text-[52px] font-black text-[#1e1494] leading-[1.1] mb-6 tracking-tight">
          Our History
        </h2>

        <p className="text-[15px] leading-[1.6] text-gray-800 mb-10 max-w-[420px] font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <button className="group inline-flex items-center gap-4 rounded-full bg-[#9bc9df] px-8 py-3.5 text-[14px] font-bold text-gray-900 transition-all hover:bg-[#8bbcd4]">
          KNOW MORE
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="transition-transform group-hover:translate-x-1"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </div>

      {/* RIGHT IMAGE DESIGN - Offset Semi-Circles */}
      <div className="relative flex items-center justify-center min-h-[500px]">
        <div className="relative w-[480px] h-[480px]">
          
          {/* Left Semi-Circle (Lowered) */}
          <div className="absolute left-0 bottom-12 w-[240px] h-[480px] overflow-hidden rounded-l-full shadow-lg">
            <img
              src="/images/history-main.jpg"
              alt="Technician"
              className="h-full w-[480px] max-w-none object-cover"
            />
          </div>

          {/* Right Semi-Circle (Raised) */}
          <div className="absolute right-0 top-0 w-[240px] h-[480px] overflow-hidden rounded-r-full shadow-lg border-l-4 border-[#f5f4ed]">
            <img
              src="/images/history-overlay.jpg"
              alt="E-waste pile"
              className="h-full w-[480px] max-w-none object-cover -translate-x-[240px]"
            />
          </div>

        </div>
      </div>

    </div>
  </div>
</section>

<section className="bg-[#f5f4ed] py-24">
  <div className="mx-auto max-w-7xl px-12">
    {/* SECTION HEADER */}
    <div className="mb-20">
      <p className="text-[15px] font-bold tracking-[0.15em] text-[#333] mb-2">
        ABOUT
      </p>
      <h2 className="text-[52px] font-black text-[#1e1494] leading-none tracking-tight">
        Our Core Team
      </h2>
    </div>

    {/* TEAM MEMBER 1 (Image Left, Content Right) */}
    <div className="flex flex-col md:flex-row items-start gap-16 mb-32">
      {/* Circle Image Wrapper */}
      <div className="flex-shrink-0">
        <div className="h-[280px] w-[280px] rounded-full bg-[#e9e6d6] shadow-inner">
          {/* Add img tag here when ready */}
        </div>
      </div>

      {/* Content */}
      <div className="pt-4">
        <h3 className="text-[26px] font-bold text-[#2d3436] mb-1">
          Shamsuddin Khan
        </h3>
        <p className="text-[13px] font-medium text-gray-700 mb-6 italic">
          Director – E-Incarnation Recycling Pvt. Ltd.
        </p>

        <div className="text-[14px] leading-[1.7] text-gray-800 max-w-3xl font-normal space-y-4">
          <p>
            Mr. Shamsuddin Khan is the Director of E-Incarnation Recycling Pvt. Ltd., 
            with over 12 years of experience in the Information Technology (IT) sector. 
            He holds a Bachelor of Arts (B.A.) degree and brings strong hands-on industry 
            exposure and leadership experience.
          </p>
          <p>
            With deep expertise in IT systems, technology lifecycle management, and 
            operational efficiency, he plays a key role in shaping the company's strategic 
            vision and operations. His leadership drives ethical recycling, data security, 
            environmental compliance, and circular economy initiatives, strengthening the 
            organization's commitment to innovation and long-term sustainability.
          </p>
        </div>
      </div>
    </div>

    {/* TEAM MEMBER 2 (Content Left, Image Right) */}
    <div className="flex flex-col md:flex-row items-start gap-16">
      {/* Content */}
      <div className="pt-4 flex-grow order-2 md:order-1">
        <h3 className="text-[26px] font-bold text-[#2d3436] mb-1">
          Amruta Babar
        </h3>
        <p className="text-[13px] font-medium text-gray-700 mb-6 italic">
          Chief Operating Officer (COO) – E-Incarnation Recycling Pvt. Ltd.
        </p>

        <div className="text-[14px] leading-[1.7] text-gray-800 max-w-3xl font-normal space-y-4">
          <p>
            Ms. Amruta Babar is the Chief Operating Officer (COO) of E-Incarnation 
            Recycling Pvt. Ltd. She holds a B.Sc. in Botany and a Master's degree in 
            Environment from Griffith University, Queensland, bringing a strong 
            academic foundation in environmental science.
          </p>
          <p>
            With over 15 years of experience in the e-waste recycling industry and 12 
            years with E-Incarnation, she has deep expertise in regulatory compliance, 
            process optimization, and operational excellence. As COO, she oversees 
            end-to-end operations, ensures compliance with environmental standards, 
            and drives continuous improvement, reinforcing the company's commitment 
            to responsible recycling and a sustainable circular economy.
          </p>
        </div>
      </div>

      {/* Circle Image Wrapper */}
      <div className="flex-shrink-0 order-1 md:order-2">
        <div className="h-[280px] w-[280px] rounded-full bg-[#e9e6d6] shadow-inner">
          {/* Add img tag here when ready */}
        </div>
      </div>
    </div>
  </div>
</section>

<section className="bg-[#f5f4ed] py-24 relative overflow-hidden">
  <div className="mx-auto max-w-7xl px-12">

    {/* Decorative Motherboard Image (Top Right) */}
    <div className="absolute -right-4 -top-4 w-72 h-72 opacity-90 pointer-events-none">
      <img
        src="/images/certificates-decor.png" 
        alt=""
        className="object-contain"
      />
    </div>

    {/* Section Heading */}
    <div className="mb-16">
      <p className="text-[15px] font-bold tracking-[0.15em] text-[#333] mb-1">
        OUR
      </p>
      <h2 className="text-[52px] font-black text-[#1e1494] leading-tight tracking-tight">
        Certificates
      </h2>
    </div>

    {/* Certificates Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">

      {/* CARD TEMPLATE */}
      {[
        {
          id: "ISO 9001",
          logo: "/images/iso9001.png",
          text: "We follow globally recognized quality standards to ensure consistent excellence in our products and services. Customer satisfaction and continuous improvement are at the heart of everything we do."
        },
        {
          id: "ISO 14001",
          logo: "/images/iso14001.png",
          text: "We are committed to minimizing environmental impact through responsible and sustainable practices. Our operations strictly follow international environmental safety standards."
        },
        {
          id: "SEEPZ",
          logo: "/images/seepz.png",
          text: "We are an authorized SEEPZ unit, enabling efficient export-oriented operations and global trade compliance. This approval ensures faster processing, tax benefits, and seamless international business."
        },
        {
          id: "MPCB",
          logo: "/images/mpcb.png",
          text: "We operate in compliance with MPCB norms to control pollution and protect the environment. Our processes meet regulatory standards for safety, waste management, and emissions."
        }
      ].map((cert, index) => (
        <div 
          key={index} 
          className="rounded-[35px] bg-[#f8f7f2] p-10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between min-h-[300px]"
        >
          {/* Top Row: Logo and ID */}
          <div className="flex items-center justify-between mb-8">
            <div className="h-20 w-20 flex items-center justify-center">
              <img src={cert.logo} alt={cert.id} className="max-h-full max-w-full object-contain" />
            </div>
            <h3 className="text-[24px] font-bold text-[#2d3436]">
              {cert.id}
            </h3>
          </div>

          {/* Body Text */}
          <p className="text-[14px] leading-[1.8] text-gray-700 font-medium mb-10">
            {cert.text}
          </p>

          {/* Download Button */}
          <div className="flex justify-start">
            <button className="flex items-center gap-3 rounded-full bg-[#9bc9df] px-7 py-2.5 text-[14px] font-bold text-gray-800 transition-all hover:bg-[#8bbcd4]">
              Download now
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
          </div>
        </div>
      ))}

    </div>
  </div>
</section>
    </div>
  );
}
