import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "../components/Navbar";
import service from "../assets/images/service.png";

export default function OurServicesSection() {
  const services = [
    { title: "Collection and Pickup", desc: "Scheduled e-waste collection from corporates, institutions, bulk consumers, households." },
    { title: "Secure Transportation", desc: "Safe transport to authorized facilities as per CPCB norms." },
    { title: "Inspection & Segregation", desc: "Material is weighed, inspected, and categorized for recycling." },
    { title: "Refurbishment & Reuse", desc: "Repairable items are refurbished to extend product life." },
    { title: "Dismantling", desc: "Non-repairable items are dismantled to separate components." },
    { title: "Material Recovery", desc: "Recovery of metals, plastics, and valuable resources." },
    { title: "Hazardous Waste Management", desc: "Non-repairable items are dismantled to separate components." },
    { title: "Responsible Recycling", desc: "Non-repairable items are dismantled to separate components." },
    { title: "Documentation & Certification", desc: "Compliance documents and recycling certificates provided." },
  ];

  const cardsPerView = 4;
  const totalCards = services.length;
  const maxIndex = totalCards - cardsPerView; 
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  return (
    <div className="w-full bg-[#f4f2eb] font-sans">
      {/* ================= HERO SECTION ================= */}
      <div className="relative h-[55vh] w-full overflow-hidden rounded-b-[40px]">
        {/* THE BACKGROUND IMAGE - No solid background colors */}
        <img
          src={service}
          alt="Our Services Header"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Your Integrated Navbar */}
        <div className="relative z-20">
          <Navbar />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-center px-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
            Our Services
          </h1>
        </div>
      </div>

      {/* ================= RECYCLING SERVICES SLIDER ================= */}
      <section className="py-20 px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-[#1a0b91] mb-4">
              Our Recycling Services
            </h2>
            <p className="max-w-3xl text-[14px] text-gray-800 font-medium">
              Our recycling process ensures safe, compliant e-waste handling with maximum resource recovery.
              <br />
              <p> Every step follows strict environmental and data security standards.</p>
            </p>
          </div>

          <div className="relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-black/40" />

            {/* SLIDER TRACK */}
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                /* Move exactly 25% of the container width per step to keep cards fully visible */
                transform: `translateX(-${currentIndex * 25}%)`,
              }}
            >
              {services.map((service, index) => (
                <div
                  key={index}
                  className="min-w-[25%] px-3 pt-10"
                >
                  <div className="relative h-full rounded-[25px] bg-white p-8 shadow-sm hover:shadow-lg transition">
                    {/* The Dot/Line indicator */}
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
                      <div className="h-10 w-[1px] bg-black" />
                      <div className="h-2 w-2 rounded-full bg-black" />
                    </div>

                    <div className="mb-6 h-12 w-12 rounded-full bg-black"></div>
                    <h3 className="mb-4 text-[18px] font-bold text-[#1a0b91]">
                      {service.title}
                    </h3>
                    <p className="text-[13px] text-gray-600 font-medium">
                      {service.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CONTROLS */}
          <div className="mt-16 flex justify-center gap-6">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#96c3de] disabled:opacity-40 transition-all hover:bg-[#7db3d4]"
            >
              <ChevronLeft size={24} strokeWidth={3} />
            </button>

            <button
              onClick={handleNext}
              disabled={currentIndex === maxIndex}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#96c3de] disabled:opacity-40 transition-all hover:bg-[#7db3d4]"
            >
              <ChevronRight size={24} strokeWidth={3} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
