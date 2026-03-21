import React, { useState, useEffect, useRef, useCallback } from "react";

/* ─── Icons ─────────────────────────────────────────────────────────────── */
const SearchIcon = () => (
  <svg
    width={16}
    height={16}
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
    width={15}
    height={15}
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
const CloseIconDark = () => (
  <svg
    width={13}
    height={13}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
const ChevronRight = () => (
  <svg
    width={13}
    height={13}
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

/* ─── Animated Hamburger ─────────────────────────────────────────────────── */
const HamburgerButton = ({ isOpen, onClick }) => (
  <button
    onClick={onClick}
    aria-label={isOpen ? "Close menu" : "Open menu"}
    aria-expanded={isOpen}
    aria-controls="sidebar-nav"
    className={`relative w-11 h-11 rounded-full border-[1.5px] flex items-center justify-center flex-shrink-0 cursor-pointer transition-all duration-300 active:scale-95
      ${isOpen ? "border-[#B8892A] bg-[#B8892A]/[0.08]" : "border-[#B8892A]/30 bg-transparent"}`}
  >
    <span
      className={`block absolute left-1/2 h-[1.5px] w-5 rounded bg-[#1C2B1E]
      transition-all duration-[350ms] ease-[cubic-bezier(0.23,1,0.32,1)] origin-center
      ${isOpen ? "top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45" : "top-[calc(50%-6px)] -translate-x-1/2"}`}
    />
    <span
      className={`block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
      h-[1.5px] w-3.5 rounded bg-[#1C2B1E] transition-all duration-200
      ${isOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"}`}
    />
    <span
      className={`block absolute left-1/2 h-[1.5px] rounded bg-[#1C2B1E]
      transition-all duration-[350ms] ease-[cubic-bezier(0.23,1,0.32,1)] origin-center
      ${isOpen ? "top-1/2 w-5 -translate-x-1/2 -translate-y-1/2 -rotate-45" : "top-[calc(50%+6px)] w-[18px] -translate-x-1/2"}`}
    />
  </button>
);

/* ─── Brand Wordmark ─────────────────────────────────────────────────────── */
const BrandWordmark = () => (
  <a
    href="#"
    aria-label="Shubham Threads home"
    className="no-underline flex-shrink-0 group"
  >
    {/* Main brand name */}
    <div className="flex items-baseline gap-[3px]">
      {/* Decorative left dash */}
      <span
        className="hidden sm:block w-4 h-[1px] bg-[#B8892A]/50 mb-[5px] mr-1
          group-hover:w-5 group-hover:bg-[#B8892A] transition-all duration-300"
      />
      <div className="leading-none">
        <div
          className="text-[1.45rem] font-semibold tracking-[0.04em] text-[#1C2B1E]
            group-hover:text-[#B8892A] transition-colors duration-300"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          {/* "Shubham" plain, "Threads" in gold italic */}
          <span>Shubham&nbsp;</span>
          <span
            className="italic text-[#B8892A]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Threads
          </span>
        </div>
        {/* Tagline with ornament dots */}
        <div className="flex items-center gap-1.5 mt-[1px]">
          <span className="block w-3 h-px bg-[#B8892A]/40" />
          <span
            className="text-[0.52rem] tracking-[0.22em] uppercase text-[#6B5E4A]/80 font-light"
            style={{ fontFamily: "'Jost', sans-serif" }}
          >
            Your Fashion · Our Pride
          </span>
          <span className="block w-3 h-px bg-[#B8892A]/40" />
        </div>
      </div>
    </div>
  </a>
);

/* ─── Navbar ─────────────────────────────────────────────────────────────── */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [cartCount] = useState(2);

  const mobileSearchInputRef = useRef(null);
  const desktopSearchInputRef = useRef(null);
  const desktopSearchRef = useRef(null);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (searchActive) {
      setTimeout(() => {
        mobileSearchInputRef.current?.focus();
        desktopSearchInputRef.current?.focus();
      }, 60);
    }
  }, [searchActive]);

  useEffect(() => {
    if (isOpen) {
      const sw = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${sw}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!searchActive) return;
    const h = (e) => {
      if (
        desktopSearchRef.current &&
        !desktopSearchRef.current.contains(e.target)
      ) {
        setSearchActive(false);
      }
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, [searchActive]);

  useEffect(() => {
    const h = (e) => {
      if (e.key === "Escape") {
        setSearchActive(false);
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", h);
    return () => document.removeEventListener("keydown", h);
  }, []);

  useEffect(() => {
    if (!isOpen || !sidebarRef.current) return;
    const focusable = sidebarRef.current.querySelectorAll(
      'a[href],button,input,[tabindex]:not([tabindex="-1"])',
    );
    const first = focusable[0],
      last = focusable[focusable.length - 1];
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

  const closeSearch = useCallback(() => {
    setSearchActive(false);
    setSearchValue("");
  }, []);

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
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,400;1,600&family=Jost:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />

      {/* ══ NAVBAR ══════════════════════════════════════════════════════════ */}
      <nav
        role="navigation"
        aria-label="Main navigation"
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300
          ${scrolled ? "shadow-[0_4px_32px_rgba(28,43,30,0.09)]" : ""}`}
        style={{ fontFamily: "'Jost', sans-serif" }}
      >
        {/* Gold top accent */}
        <div className="h-[2.5px] bg-gradient-to-r from-transparent via-[#D4A84B] to-transparent" />

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[62px]">
            {/* ── BRAND WORDMARK ── */}
            <BrandWordmark />

            {/* ── DESKTOP NAV LINKS (md+) ── */}
            <div className="hidden md:flex items-center gap-9 flex-1 justify-center">
              {navLinks.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="relative font-medium text-[0.78rem] tracking-[0.12em] uppercase
                    text-[#1C2B1E] hover:text-[#B8892A] no-underline py-1
                    after:content-[''] after:absolute after:bottom-0 after:left-0
                    after:h-[1.5px] after:w-0 after:bg-[#B8892A]
                    hover:after:w-full after:transition-all after:duration-300
                    transition-colors duration-200 whitespace-nowrap"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* ── RIGHT ACTIONS ── */}
            <div className="flex items-center gap-2 flex-shrink-0">
              {/* Desktop search (md+) */}
              <div
                ref={desktopSearchRef}
                className={`hidden md:flex items-center rounded-full border-[1.5px] overflow-hidden h-[38px]
                  transition-all duration-[350ms] ease-[cubic-bezier(0.23,1,0.32,1)]
                  ${
                    searchActive
                      ? "w-[220px] border-[#B8892A] bg-[#FFF9EE]"
                      : "w-[38px] border-[#E8DCC8] bg-transparent"
                  }`}
              >
                <button
                  onClick={() => setSearchActive((v) => !v)}
                  aria-label="Search"
                  className={`w-[38px] h-[38px] flex-shrink-0 flex items-center justify-center
                    bg-transparent border-none cursor-pointer transition-colors duration-200
                    ${searchActive ? "text-[#B8892A]" : "text-[#6B5E4A]"}`}
                >
                  <SearchIcon />
                </button>
                <input
                  ref={desktopSearchInputRef}
                  type="text"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="Search kurtas, sarees…"
                  aria-label="Search products"
                  onKeyDown={(e) => e.key === "Enter" && closeSearch()}
                  className={`flex-1 min-w-0 text-[0.78rem] tracking-[0.04em] text-[#1C2B1E]
                    bg-transparent border-none outline-none placeholder:text-[#9C8E7A]
                    transition-opacity duration-200
                    ${searchActive ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                  style={{ fontFamily: "'Jost', sans-serif" }}
                />
                {searchActive && (
                  <button
                    onClick={closeSearch}
                    className="w-8 h-[38px] flex-shrink-0 flex items-center justify-center
                      bg-transparent border-none cursor-pointer text-[#6B5E4A]
                      hover:text-[#B8892A] transition-colors duration-150"
                  >
                    <CloseIconDark />
                  </button>
                )}
              </div>

              {/* Mobile search icon */}
              <button
                className={`md:hidden w-[38px] h-[38px] rounded-full border-[1.5px] flex items-center
                  justify-center cursor-pointer transition-all duration-200 flex-shrink-0
                  ${
                    searchActive
                      ? "border-[#B8892A] bg-[#FFF9EE] text-[#B8892A]"
                      : "border-[#E8DCC8] bg-transparent text-[#1C2B1E]"
                  }`}
                aria-label="Search"
                onClick={() => setSearchActive((v) => !v)}
              >
                <SearchIcon />
              </button>

              {/* Profile (md+ only) */}
              <button
                aria-label="Account"
                className="hidden md:flex w-[38px] h-[38px] rounded-full border-[1.5px] border-[#E8DCC8]
                  items-center justify-center text-[#1C2B1E] bg-transparent cursor-pointer
                  hover:border-[#B8892A] hover:bg-[#FFF9EE] transition-all duration-200"
              >
                <ProfileIcon />
              </button>

              {/* Cart */}
              <button
                aria-label={`Cart, ${cartCount} item${cartCount !== 1 ? "s" : ""}`}
                className="relative w-[38px] h-[38px] rounded-full border-[1.5px] border-[#E8DCC8]
                  flex items-center justify-center text-[#1C2B1E] bg-transparent cursor-pointer
                  hover:border-[#B8892A] hover:bg-[#FFF9EE] active:scale-95
                  transition-all duration-200 flex-shrink-0"
              >
                <CartIcon />
                {cartCount > 0 && (
                  <span
                    className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#B8892A]
                    text-white text-[9px] font-semibold flex items-center justify-center
                    border-[1.5px] border-[#FBF7EF]"
                    style={{ fontFamily: "'Jost', sans-serif" }}
                  >
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Hamburger */}
              <HamburgerButton
                isOpen={isOpen}
                onClick={() => setIsOpen((v) => !v)}
              />
            </div>
          </div>
        </div>

        {/* Mobile search bar */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-[350ms]
            ease-[cubic-bezier(0.23,1,0.32,1)]
            ${searchActive ? "max-h-14 border-t border-[#E8DCC8]" : "max-h-0 border-t border-transparent"}`}
        >
          <div className="flex items-center gap-2.5 px-4 py-2.5 bg-[#FFF9EE]">
            <span className="text-[#B8892A] flex items-center flex-shrink-0">
              <SearchIcon />
            </span>
            <input
              ref={mobileSearchInputRef}
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search kurtas, sarees…"
              aria-label="Search products"
              onKeyDown={(e) => e.key === "Enter" && closeSearch()}
              className="flex-1 text-[0.85rem] tracking-[0.03em] text-[#1C2B1E]
                bg-transparent border-none outline-none placeholder:text-[#9C8E7A]"
              style={{ fontFamily: "'Jost', sans-serif" }}
            />
            <button
              onClick={closeSearch}
              aria-label="Clear search"
              className="flex items-center justify-center p-1 text-[#6B5E4A]
                hover:text-[#B8892A] transition-colors duration-150 bg-transparent border-none cursor-pointer"
            >
              <CloseIconDark />
            </button>
          </div>
        </div>

        {/* Bottom border */}
        <div className="h-px bg-[#E8DCC8]" />
      </nav>

      {/* ══ OVERLAY ═════════════════════════════════════════════════════════ */}
      <div
        aria-hidden="true"
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-[998] bg-[rgba(28,43,30,0.5)] backdrop-blur-sm
          transition-opacity duration-300
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />

      {/* ══ SIDEBAR ══════════════════════════════════════════════════════════ */}
      <aside
        id="sidebar-nav"
        ref={sidebarRef}
        aria-label="Site navigation"
        aria-hidden={!isOpen}
        className={`fixed top-0 right-0 h-full w-[min(85vw,360px)] z-[999]
          overflow-y-auto flex flex-col bg-[#182A1A]
          transition-transform duration-[420ms] ease-[cubic-bezier(0.23,1,0.32,1)]
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        style={{ fontFamily: "'Jost', sans-serif" }}
      >
        {/* Gold top stripe */}
        <div className="h-[3px] bg-gradient-to-r from-transparent via-[#D4A84B] to-transparent flex-shrink-0" />

        {/* ── Sidebar Header ── */}
        <div className="flex items-center justify-between px-7 pt-6 pb-5 border-b border-white/[0.06] flex-shrink-0">
          <div className="leading-tight">
            {/* Wordmark in sidebar — dark bg version */}
            <div
              className="text-[1.35rem] font-semibold tracking-[0.04em] leading-none"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              <span className="text-white">Shubham&nbsp;</span>
              <span className="italic text-[#D4A84B]">Threads</span>
            </div>
            {/* Tagline */}
            <div className="flex items-center gap-1.5 mt-[5px]">
              <span className="block w-3 h-px bg-[#D4A84B]/40" />
              <span
                className="text-[0.5rem] tracking-[0.22em] uppercase text-white/30 font-light"
                style={{ fontFamily: "'Jost', sans-serif" }}
              >
                Your Fashion · Our Pride
              </span>
              <span className="block w-3 h-px bg-[#D4A84B]/40" />
            </div>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center
              cursor-pointer hover:border-white/25 hover:bg-white/5 transition-all duration-200
              bg-transparent"
          >
            <CloseIcon />
          </button>
        </div>

        {/* ── Primary nav ── */}
        <nav className="px-7 pt-4 flex-1 text-white">
          {navLinks.map((label) => (
            <a
              key={label}
              href="#"
              onClick={() => setIsOpen(false)}
              className="group flex items-center justify-between py-[14px] border-b border-white/[0.06]
                no-underline text-white/80 hover:text-white
                hover:border-white/20 transition-all duration-200"
            >
              <span
                className="text-[2rem] font-semibold leading-none"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {label}
              </span>
              <span className="text-white/20 group-hover:text-white/50 group-hover:translate-x-1 transition-all duration-200">
                <ChevronRight />
              </span>
            </a>
          ))}

          {/* Explore */}
          <div className="mt-8">
            <p className="text-[0.6rem] tracking-[0.25em] uppercase text-white/28 mb-4">
              Explore
            </p>
            {extraLinks.map((s) => (
              <a
                key={s}
                href="#"
                onClick={() => setIsOpen(false)}
                className="group flex items-center gap-3 py-2.5 text-[0.82rem] font-light
                  text-white/65 hover:text-white no-underline transition-colors duration-150"
              >
                <span className="w-4 h-px bg-white/15 group-hover:bg-[#D4A84B]/70 group-hover:w-5 transition-all duration-200 flex-shrink-0" />
                {s}
              </a>
            ))}
          </div>
        </nav>

        {/* ── Footer ── */}
        <div className="px-7 pb-8 pt-6 flex-shrink-0">
          <div className="h-px bg-white/[0.07] mb-6" />
          <a
            href="#"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center w-full py-3.5 rounded-xl
              bg-[#B8892A] hover:bg-[#C9992E]
              hover:shadow-[0_4px_24px_rgba(184,137,42,0.35)]
              font-semibold text-[0.72rem] tracking-[0.18em] uppercase
              text-white no-underline active:scale-[0.98] transition-all duration-200"
          >
            Book a Customisation
          </a>
          <p className="mt-3 text-[0.6rem] tracking-[0.1em] text-white/[0.14] text-center">
            Crafted with love · Made in India
          </p>
        </div>
      </aside>

      {/* Spacer */}
      <div className="h-[65px]" aria-hidden="true" />
    </>
  );
};

export default Navbar;
