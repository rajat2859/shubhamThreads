import React, { useState } from "react";
import { Search, ShoppingBag, ChevronDown, Menu, X } from "lucide-react";
import navLogo from "../../assets/nav-logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
    { name: "NEW ARRIVAL", color: "text-[#E6554D]" },
    { name: "MOST PICK", color: "text-[#333333]" },
    { name: "SALE", color: "text-[#333333]" },
    { name: "WOMEN", color: "text-[#333333]" },
    { name: "MEN", color: "text-[#333333]" },
    { name: "SNEAKERS", color: "text-[#333333]" },
    { name: "STORE LOCATION", color: "text-[#333333]" },
    { name: "CONTACT US", color: "text-[#333333]" },
  ];

  return (
    <nav className="w-full bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] sticky top-0 z-50">
      <div className="w-full px-6 md:px-10 py-3">
        {/* TOP SECTION: LOGO, SEARCH, PROFILE */}
        <div className="flex items-center justify-between gap-8 h-12">
          {/* 1. LOGO */}
          <div className="flex items-center gap-2 cursor-pointer flex-shrink-0">
            <div className="relative w-10 h-5 flex flex-col justify-center gap-1">
              <img src={navLogo} alt="" />
            </div>
            <div className="flex flex-col leading-tight ps-1">
              <span className="text-[22px] font-black tracking-tighter text-[#1a1a1a]">
                Shubham
              </span>
              <span className="text-xs font-semibold tracking-widest text-[#1a1a1a] uppercase">
                Threads
              </span>
            </div>
          </div>

          {/* 2. SEARCH BAR (Now wider and centered) */}
          <div className="hidden lg:flex items-center flex-1 max-w-[600px] relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-[#f4f6f8] rounded-full py-2.5 px-6 outline-none text-sm placeholder:text-gray-400 focus:ring-1 focus:ring-gray-200 transition-all"
            />
            <Search
              size={18}
              className="absolute right-4 text-gray-500 cursor-pointer"
            />
          </div>

          {/* 3. RIGHT SIDE: CART & USER */}
          <div className="flex items-center gap-4 md:gap-7">
            {/* Bag Icon with notification */}
            <div className="relative group cursor-pointer">
              <ShoppingBag
                size={24}
                className="text-[#333] transition-transform active:scale-90"
              />
              <span className="absolute -top-1 -right-1 bg-[#EB4432] text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full border-[1.5px] border-white">
                1
              </span>
            </div>

            {/* Subtle Divider */}
            <div className="h-7 w-[1px] bg-gray-200 hidden sm:block"></div>

            {/* Profile */}
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="w-9 h-9 rounded-full overflow-hidden border border-gray-100 ring-2 ring-transparent group-hover:ring-gray-50 transition-all">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop"
                  alt="Profile"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="hidden md:flex items-center gap-1">
                <span className="text-[13px] font-semibold text-[#1a1a1a]">
                  Morgan
                </span>
                <ChevronDown
                  size={14}
                  className="text-gray-400 transition-transform group-hover:translate-y-0.5"
                />
              </div>
            </div>

            {/* Hamburger (Tablet/Mobile Only) */}
            <button
              className="lg:hidden p-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* BOTTOM SECTION: LINKS */}
        <div
          className={`
            lg:mt-4 transition-all duration-300 overflow-hidden
            ${isMenuOpen ? "max-h-[500px] pb-4" : "max-h-0 lg:max-h-none"}
          `}
        >
          <ul className="flex flex-col lg:flex-row items-center lg:justify-between gap-4 lg:gap-0 mt-4 lg:mt-0 pt-4 lg:pt-2 border-t lg:border-none border-gray-100">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <a
                  href="#"
                  className={`text-[11.5px] font-bold tracking-[1.5px] uppercase transition-all hover:opacity-60 ${link.color}`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
