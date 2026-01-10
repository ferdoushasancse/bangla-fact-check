import React, { useState } from "react";
import { Menu, Search, CloudSun, ShieldCheck, X, Zap } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const currentDate = new Date().toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const navLinks = [
    { name: "হোম", path: "/" },
    { name: "আমাদের সম্পর্কে", path: "/about" },
    { name: "যোগাযোগ", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm font-sans">
      {/* 2. Top Bar: Date, Weather, Logo, Search */}
      <div className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 h-24 flex items-center justify-between">
          {/* Left: Date & Weather (Hidden on mobile) */}
          <div className="hidden lg:flex flex-col text-[11px] text-gray-500 font-medium">
            <span>{currentDate}</span>
            <div className="flex items-center gap-2 mt-1">
              <CloudSun size={14} className="text-orange-400" />
              <span>ঢাকা, ২৫°C</span>
            </div>
          </div>

          {/* Center: Branding */}
          <div className="flex flex-col items-center">
            <h1 className="font-serif italic font-black tracking-tighter text-3xl md:text-5xl">
              <span className="text-gray-900">The Bangla</span>
              <span className="text-blue-700 ml-2">FactCheck</span>
            </h1>
            <div className="flex items-center gap-1.5 mt-1">
              <ShieldCheck size={14} className="text-green-600" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">
                Integrity in Journalism
              </span>
            </div>
          </div>

          {/* Right: Search & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-600">
              <Search size={20} />
            </button>
            <button
              className="lg:hidden p-2 text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* 3. Main Navigation (Classic Newspaper Style) */}
      <nav
        className={`bg-white lg:border-b lg:border-gray-200 ${
          isMenuOpen ? "block" : "hidden lg:block"
        }`}
      >
        <ul className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center justify-center py-1 lg:py-0">
          {navLinks.map((link) => (
            <li key={link.path} className="w-full lg:w-auto text-center">
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `block px-6 py-4 text-[13px] font-bold uppercase tracking-widest transition-all duration-200
                  ${
                    isActive
                      ? "text-blue-700 border-b-2 border-blue-700 bg-blue-50/50 lg:bg-transparent"
                      : "text-gray-600 hover:text-blue-700 hover:bg-gray-50 lg:hover:bg-transparent"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Styles for the Marquee effect */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 25s linear infinite;
        }
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </header>
  );
};

export default Navbar;
