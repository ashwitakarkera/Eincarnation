import React from "react";
import Hero from "../components/Hero";
import AboutIntro from "../components/AboutIntro";
import History from "../components/History";
import CoreTeam from "../components/CoreTeam";
import Certificates from "../components/Certificates";

export default function Home() {
  return (
    <div className="w-full font-sans bg-[#f3f0e6] min-h-screen">
      <Hero />
      <AboutIntro />
      <History />
      <CoreTeam />
      <Certificates />
    </div>
  );
}
