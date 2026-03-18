import React, { useState, useEffect, useRef, useCallback } from "react";

/* ─── Icons ─────────────────────────────────────────────────────────────── */
const SearchIcon = () => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);
const ProfileIcon = () => (
  <svg
    width={18}
    height={18}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);
const CartIcon = () => (
  <svg
    width={18}
    height={18}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);
const CloseIcon = () => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 24 24"
    fill="none"
    stroke="#F0E8D5"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
const ChevronRight = () => (
  <svg
    width={14}
    height={14}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

/* ─── Navbar ─────────────────────────────────────────────────────────────── */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchActive, setSearch] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cartCount] = useState(2);

  const searchWrapRef = useRef(null);
  const searchInputRef = useRef(null);
  const sidebarRef = useRef(null);

  /* ── Scroll shadow ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Focus search input when activated ── */
  useEffect(() => {
    if (searchActive) searchInputRef.current?.focus();
  }, [searchActive]);

  /* ── Body scroll lock (accounts for scrollbar width to prevent layout shift) ── */
  useEffect(() => {
    if (isOpen) {
      const scrollbarW =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarW}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isOpen]);

  /* ── Click-outside to close search ── */
  useEffect(() => {
    if (!searchActive) return;
    const handler = (e) => {
      if (searchWrapRef.current && !searchWrapRef.current.contains(e.target)) {
        setSearch(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [searchActive]);

  /* ── Escape key closes search & sidebar ── */
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") {
        setSearch(false);
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  /* ── Focus trap inside sidebar ── */
  useEffect(() => {
    if (!isOpen || !sidebarRef.current) return;
    const focusable = sidebarRef.current.querySelectorAll(
      'a[href], button, input, [tabindex]:not([tabindex="-1"])',
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const trap = (e) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", trap);
    return () => document.removeEventListener("keydown", trap);
  }, [isOpen]);

  const closeSearch = useCallback(() => setSearch(false), []);
  const toggleSearch = useCallback(() => setSearch((v) => !v), []);

  const navLinks = ["Home", "Men", "Women"];
  const extraLinks = [
    "Custom Tailoring",
    "New Arrivals",
    "Festive Edit",
    "Wedding Collection",
    "Sale",
  ];

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Jost:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />

      {/* ══ NAVBAR ══════════════════════════════════════════════════════════ */}
      <nav
        role="navigation"
        aria-label="Main navigation"
        className={`fixed top-0 left-0 right-0 z-50 bg-[#FBF7EF] transition-shadow duration-300 ${scrolled ? "shadow-[0_4px_32px_rgba(28,43,30,0.10)]" : ""}`}
      >
        {/* Gold top accent */}
        <div className="h-[2.5px] bg-gradient-to-r from-transparent via-[#D4A84B] to-transparent" />

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[66px] gap-4">
            {/* ── LOGO ── */}
            <a
              href="#"
              className="flex items-center gap-2.5 no-underline flex-shrink-0 min-w-0"
            >
              <div className="w-10 h-10 rounded-full border border-[#B8892A] flex items-center justify-center bg-gradient-to-br from-[#FFF9EE] to-[#F5EDD6] flex-shrink-0">
                <span className="font-['Cormorant_Garamond',serif] font-bold text-base text-[#B8892A] leading-none">
                  ST
                </span>
              </div>
              <div className="leading-tight min-w-0">
                <div className="font-['Cormorant_Garamond',serif] font-bold text-[1.15rem] text-[#1C2B1E] tracking-[0.02em] whitespace-nowrap">
                  Shubham Threads
                </div>
                <div className="hidden sm:block font-['Jost',sans-serif] font-light text-[0.6rem] tracking-[0.18em] uppercase text-[#6B5E4A]">
                  Your Fashion · Our Pride
                </div>
              </div>
            </a>

            {/* ── DESKTOP NAV LINKS (md+) ── */}
            <div className="hidden md:flex items-center gap-7 lg:gap-9 flex-1 justify-center">
              {navLinks.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="group relative font-['Jost',sans-serif] font-medium text-[0.8rem] tracking-[0.12em] uppercase text-[#1C2B1E] hover:text-[#B8892A] transition-colors duration-200 py-1 no-underline whitespace-nowrap"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-[#B8892A] group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* ── RIGHT ACTIONS ── */}
            <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
              {/* ── Search ── */}
              <div
                ref={searchWrapRef}
                className={`hidden xs:flex items-center gap-1.5 px-3 py-[7px] rounded-full border-[1.5px] cursor-pointer transition-all duration-300 text-[#6B5E4A] ${
                  searchActive
                    ? "border-[#B8892A] bg-[#FFF9EE]"
                    : "border-[#E8DCC8] hover:border-[#B8892A] hover:bg-[#FFF9EE]"
                }`}
                onClick={toggleSearch}
                role="search"
                aria-expanded={searchActive}
              >
                <SearchIcon />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search kurtas, sarees…"
                  aria-label="Search products"
                  className={`font-['Jost',sans-serif] text-[0.78rem] tracking-[0.04em] text-[#1C2B1E] bg-transparent border-none outline-none transition-all duration-300 placeholder:text-[#6B5E4A] ${
                    searchActive
                      ? "w-[120px] sm:w-[150px] lg:w-[180px] opacity-100"
                      : "w-0 opacity-0 pointer-events-none"
                  }`}
                  onKeyDown={(e) => e.key === "Enter" && closeSearch()}
                />
              </div>

              {/* ── Search icon (mobile only, xs breakpoint hides the full one) ── */}
              <button
                aria-label="Search"
                className="xs:hidden w-[38px] h-[38px] rounded-full border-[1.5px] border-[#E8DCC8] flex items-center justify-center text-[#1C2B1E] bg-transparent cursor-pointer hover:border-[#B8892A] hover:bg-[#FFF9EE] transition-all duration-200"
              >
                <SearchIcon />
              </button>

              {/* ── Profile ── */}
              <button
                aria-label="Account"
                className="w-[38px] h-[38px] rounded-full border-[1.5px] border-[#E8DCC8] flex items-center justify-center text-[#1C2B1E] bg-transparent cursor-pointer hover:border-[#B8892A] hover:bg-[#FFF9EE] hover:-translate-y-px transition-all duration-200"
              >
                <ProfileIcon />
              </button>

              {/* ── Cart ── */}
              <button
                aria-label={`Cart, ${cartCount} item${cartCount !== 1 ? "s" : ""}`}
                className="relative w-[38px] h-[38px] rounded-full border-[1.5px] border-[#E8DCC8] flex items-center justify-center text-[#1C2B1E] bg-transparent cursor-pointer hover:border-[#B8892A] hover:bg-[#FFF9EE] hover:-translate-y-px transition-all duration-200"
              >
                <CartIcon />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#B8892A] text-white text-[9px] font-['Jost',sans-serif] font-semibold flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* ── Hamburger ── */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                aria-controls="sidebar-nav"
                className={`w-[38px] h-[38px] rounded-lg border-[1.5px] flex flex-col items-center justify-center gap-[5px] bg-transparent cursor-pointer transition-all duration-200 ${
                  isOpen
                    ? "border-[#B8892A] bg-[#FFF9EE]"
                    : "border-[#E8DCC8] hover:border-[#B8892A] hover:bg-[#FFF9EE]"
                }`}
              >
                <span
                  className={`h-[1.5px] bg-[#1C2B1E] rounded transition-all duration-300 origin-center ${isOpen ? "w-5 translate-y-[6.5px] rotate-45" : "w-5"}`}
                />
                <span
                  className={`h-[1.5px] bg-[#1C2B1E] rounded transition-all duration-200 ${isOpen ? "w-5 opacity-0 scale-x-0" : "w-3.5"}`}
                />
                <span
                  className={`h-[1.5px] bg-[#1C2B1E] rounded transition-all duration-300 origin-center ${isOpen ? "w-5 -translate-y-[6.5px] -rotate-45" : "w-[18px]"}`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom border */}
        <div className="h-px bg-[#E8DCC8]" />
      </nav>

      {/* ══ OVERLAY ═════════════════════════════════════════════════════════ */}
      <div
        aria-hidden="true"
        className={`fixed inset-0 z-[998] bg-[rgba(28,43,30,0.45)] backdrop-blur-sm transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* ══ SIDEBAR ══════════════════════════════════════════════════════════ */}
      <aside
        id="sidebar-nav"
        ref={sidebarRef}
        aria-label="Site navigation"
        aria-hidden={!isOpen}
        className={`fixed top-0 right-0 h-full w-[85vw] sm:w-[360px] z-[999] overflow-y-auto transition-transform duration-[420ms] ease-in-out flex flex-col bg-[#182A1A] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Gold top stripe */}
        <div className="h-[3px] bg-gradient-to-r from-transparent via-[#D4A84B] to-transparent flex-shrink-0" />

        {/* ── SIDEBAR HEADER ── */}
        <div className="flex items-center justify-between px-7 pt-6 pb-5 border-b border-white/[0.06]">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full border border-[#B8892A]/50 flex items-center justify-center bg-[#B8892A]/10 flex-shrink-0">
              <span className="font-['Cormorant_Garamond',serif] font-bold text-sm text-[#D4A84B] leading-none">
                ST
              </span>
            </div>
            <div>
              <div className="font-['Cormorant_Garamond',serif] font-bold text-[1.1rem] text-white tracking-wide leading-tight">
                Shubham Threads
              </div>
              <div className="font-['Jost',sans-serif] font-light text-[0.55rem] tracking-[0.2em] uppercase text-white/35 leading-tight mt-0.5">
                Your Fashion · Our Pride
              </div>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center cursor-pointer hover:border-white/25 hover:bg-white/5 transition-all duration-200"
          >
            <CloseIcon />
          </button>
        </div>

        {/* ── PRIMARY NAV ── */}
        <nav className="px-7 pt-4 flex-1">
          {[
            { label: "Home", num: "01" },
            { label: "Men", num: "02" },
            { label: "Women", num: "03" },
          ].map(({ label, num }) => (
            <a
              key={label}
              href="#"
              onClick={() => setIsOpen(false)}
              className="group flex items-center justify-between py-[14px] border-b border-white/[0.06] no-underline hover:border-white/20 transition-all duration-200"
            >
              <span className="font-['Cormorant_Garamond',serif] text-[2rem] font-semibold text-white/80 group-hover:text-white transition-colors duration-200 leading-none">
                {label}
              </span>
              <span className="text-white/20 group-hover:text-white/50 transition-colors duration-200 translate-x-0 group-hover:translate-x-1 transition-transform">
                <ChevronRight />
              </span>
            </a>
          ))}

          {/* ── EXPLORE ── */}
          <div className="mt-8 text-white">
            <p className="font-['Jost',sans-serif] text-[0.6rem] tracking-[0.25em] uppercase text-white/30 mb-4">
              Explore
            </p>
            <div className="flex flex-col gap-0.5">
              {extraLinks.map((s) => (
                <a
                  key={s}
                  href="#"
                  onClick={() => setIsOpen(false)}
                  className="group flex items-center gap-3 py-2.5 font-['Jost',sans-serif] text-[0.82rem] font-light text-white/70 hover:text-white transition-colors duration-150 no-underline"
                >
                  <span className="w-4 h-px bg-white/15 group-hover:bg-[#D4A84B]/70 group-hover:w-5 transition-all duration-200 flex-shrink-0" />
                  {s}
                </a>
              ))}
            </div>
          </div>
        </nav>

        {/* ── SIDEBAR FOOTER ── */}
        <div className="px-7 pb-8 pt-6 flex-shrink-0">
          <div className="h-px bg-white/[0.07] mb-6" />

          <a
            href="#"
            onClick={() => setIsOpen(false)}
            className="mb-2 flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-[#B8892A] font-['Jost',sans-serif] font-semibold text-[0.72rem] tracking-[0.18em] uppercase text-white no-underline hover:bg-[#C9992E] hover:shadow-[0_4px_24px_rgba(184,137,42,0.35)] active:scale-[0.98] transition-all duration-200"
          >
            Book a Customisation
          </a>

          <p className="mt-3 font-['Jost',sans-serif] text-[0.6rem] tracking-[0.1em] text-white/15 text-center ">
            Crafted with love · Made in India
          </p>
        </div>
      </aside>

      {/* Spacer for fixed nav */}
      <div className="h-[69px]" aria-hidden="true" />
    </>
  );
};

export default Navbar;
