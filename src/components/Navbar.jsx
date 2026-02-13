import React, { useState } from "react";
import NavLogo from "../assets/nav-logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* --- THE MAIN NAVBAR --- */}
      <nav className="fixed top-0 z-40 w-full bg-[#fdfcf9]/95 backdrop-blur-md border-b border-stone-200/50">
        <div className="mx-auto max-w-7xl px-4 lg:px-12">
          {/* Main Container - forced height of 80px (h-20) */}
          <div className="flex h-20 items-center justify-between overflow-hidden">
            {/* 1. Left Section: Menu Toggle + Logo */}
            <div className="flex items-center">
              <button
                onClick={() => setIsMenuOpen(true)}
                className="flex items-center gap-3 group text-stone-500 hover:text-stone-900 transition-all mr-6"
              >
                <div className="flex flex-col gap-1.5">
                  <span className="block h-[1.5px] w-6 bg-stone-900 transition-all group-hover:w-8"></span>
                  <span className="block h-[1.5px] w-4 bg-stone-900"></span>
                </div>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase hidden md:inline">
                  Menu
                </span>
              </button>

              {/* LOGO BLOCK - Force small size */}
              <a
                href="/"
                className="flex items-center gap-4 border-l border-stone-200 pl-6 group"
              >
                {/* STRICT CONTAINER FOR LOGO */}
                <div className="flex h-12 w-12 items-center justify-center overflow-hidden shrink-0">
                  <img
                    src={NavLogo}
                    alt="Logo"
                    className="h-full w-full object-contain pointer-events-none"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-black tracking-[0.3em] text-stone-900 leading-none">
                    SHUBHAM
                  </span>
                  <span className="text-[9px] tracking-[0.5em] text-[#c5a565] font-semibold mt-0.5 uppercase">
                    Threads
                  </span>
                </div>
              </a>
            </div>

            {/* 2. Middle Section: Desktop Nav */}
            <div className="hidden lg:flex flex-1 justify-center gap-x-12 px-6">
              {["Atelier", "Collections", "Story"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-[10px] font-black text-stone-400 hover:text-stone-900 transition-all uppercase tracking-[.3em] relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-[#c5a565] transition-all group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* 3. Right Section: Cart & Search */}
            <div className="flex items-center gap-6 shrink-0">
              <button className="hidden sm:block text-stone-900 hover:opacity-50">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </button>
              <a href="/cart" className="relative text-stone-900 group">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.2"
                >
                  <path d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
                </svg>
                <span className="absolute top-1.5 -right-1 bg-[#c5a565] text-white text-[8px] h-3.5 w-3.5 flex items-center justify-center rounded-full font-bold">
                  2
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* --- THE SIDEBAR --- */}
      <div
        className={`fixed inset-0 z-[60] transition-opacity duration-500 ${isMenuOpen ? "visible opacity-100" : "invisible opacity-0"}`}
      >
        {/* Background Overlay */}
        <div
          onClick={() => setIsMenuOpen(false)}
          className="absolute inset-0 bg-stone-950/20 backdrop-blur-sm"
        />

        {/* Sidebar Drawer */}
        <div
          className={`relative h-full w-full max-w-[360px] bg-[#fdfcf9] shadow-2xl transition-transform duration-700 ease-in-out flex flex-col ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="p-10 flex flex-col h-full">
            {/* Close & Sidebar Logo */}
            <div className="flex justify-between items-start mb-16">
              <div className="flex flex-col gap-6">
                {/* Strict Logo container in Sidebar */}
                <div className="h-20 w-20 flex items-center justify-center p-3 border border-stone-200 bg-white">
                  <img
                    src={NavLogo}
                    alt="Logo"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <span className="text-[10px] font-black tracking-[.4em] text-stone-900 uppercase">
                  Shubham Threads
                </span>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-stone-300 hover:text-stone-950 transition-colors"
              >
                <svg
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="0.8"
                >
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Nav List */}
            <div className="space-y-6 flex-1">
              <p className="text-[8px] tracking-[.4em] font-black text-stone-300 uppercase">
                Categories
              </p>
              {[
                "Bespoke Suiting",
                "Accessories",
                "Heritage Silk",
                "New Journal",
              ].map((l) => (
                <a
                  key={l}
                  href="#"
                  className="block text-3xl font-serif italic text-stone-700 hover:text-[#c5a565] hover:translate-x-2 transition-all"
                >
                  {l}
                </a>
              ))}
            </div>

            <div className="mt-auto border-t border-stone-100 pt-8 text-[10px] tracking-widest text-stone-400 font-bold uppercase">
              Contact Concierge
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
