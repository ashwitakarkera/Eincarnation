import React from "react";

export default function Navbar() {
  return (
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
  );
}
