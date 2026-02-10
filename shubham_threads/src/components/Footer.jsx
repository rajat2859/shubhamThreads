import React from "react";
import NavLogo from "../assets/nav-logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-24 pb-12 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Newsletter focus */}
        <div className="flex flex-col md:flex-row justify-between items-start border-b border-white/10 pb-20 mb-16 gap-12">
          <div className="max-w-md">
            <h3 className="font-serif text-3xl mb-4 italic tracking-wide">
              The Atelier Newsletter
            </h3>
            <p className="text-gray-400 font-light text-sm tracking-widest leading-loose">
              Join our inner circle for exclusive updates on new collections,
              bespoke services, and seasonal stories.
            </p>
          </div>
          <div className="w-full md:w-96">
            <div className="relative group border-b border-gray-600 focus-within:border-white transition-all">
              <input
                type="email"
                placeholder="YOUR EMAIL ADDRESS"
                className="bg-transparent border-none outline-none py-4 w-full text-[10px] tracking-[0.3em] font-medium uppercase text-white placeholder-gray-500"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 text-[10px] tracking-[0.2em] font-bold hover:text-gray-300 transition-colors uppercase">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Middle Section: Grid Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6">
          {/* Brand Info */}
          <div className="col-span-2 md:col-span-1">
            <img
              src={NavLogo}
              alt="Logo"
              className="h-14 mb-8 brightness-0 invert"
            />
            {/* Note: brightness-0 invert makes your logo white for the dark background */}
            <p className="text-[12px] leading-7 text-gray-400 font-light max-w-[200px]">
              Elegance in every stitch. Shubham Threads creates bespoke menswear
              for the modern gentleman.
            </p>
          </div>

          {/* Column 1 */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-4 text-gray-500 underline underline-offset-8 decoration-white/20">
              The Collections
            </h4>
            <a
              href="#"
              className="text-[12px] font-light tracking-widest text-gray-300 hover:text-white transition italic hover:translate-x-1 duration-300"
            >
              New Arrivals
            </a>
            <a
              href="#"
              className="text-[12px] font-light tracking-widest text-gray-300 hover:text-white transition italic hover:translate-x-1 duration-300"
            >
              Ready to Wear
            </a>
            <a
              href="#"
              className="text-[12px] font-light tracking-widest text-gray-300 hover:text-white transition italic hover:translate-x-1 duration-300"
            >
              Accessories
            </a>
            <a
              href="#"
              className="text-[12px] font-light tracking-widest text-gray-300 hover:text-white transition italic hover:translate-x-1 duration-300"
            >
              Archive
            </a>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-4 text-gray-500 underline underline-offset-8 decoration-white/20">
              Client Services
            </h4>
            <a
              href="#"
              className="text-[12px] font-light tracking-widest text-gray-300 hover:text-white transition hover:translate-x-1 duration-300"
            >
              Book an Appointment
            </a>
            <a
              href="#"
              className="text-[12px] font-light tracking-widest text-gray-300 hover:text-white transition hover:translate-x-1 duration-300"
            >
              Sizing & Repairs
            </a>
            <a
              href="#"
              className="text-[12px] font-light tracking-widest text-gray-300 hover:text-white transition hover:translate-x-1 duration-300"
            >
              Shipping Policy
            </a>
            <a
              href="#"
              className="text-[12px] font-light tracking-widest text-gray-300 hover:text-white transition hover:translate-x-1 duration-300"
            >
              FAQ
            </a>
          </div>

          {/* Column 3 - Contact/Social */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-4 text-gray-500 underline underline-offset-8 decoration-white/20">
              Social
            </h4>
            <a
              href="#"
              className="text-[12px] font-light tracking-widest text-gray-300 hover:text-white transition flex items-center gap-2"
            >
              INSTAGRAM <span className="text-[8px] text-gray-600">↗</span>
            </a>
            <a
              href="#"
              className="text-[12px] font-light tracking-widest text-gray-300 hover:text-white transition flex items-center gap-2"
            >
              PINTEREST <span className="text-[8px] text-gray-600">↗</span>
            </a>
            <a
              href="#"
              className="text-[12px] font-light tracking-widest text-gray-300 hover:text-white transition flex items-center gap-2"
            >
              THREADS <span className="text-[8px] text-gray-600">↗</span>
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-[0.3em] font-light text-gray-500 gap-6 uppercase">
          <p>© 2024 Shubham Threads. Developed with Care.</p>
          <div className="flex space-x-10">
            <a href="#" className="hover:text-white transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition">
              Cookies
            </a>
          </div>
          <p>MUMBAI / LONDON / PARIS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
