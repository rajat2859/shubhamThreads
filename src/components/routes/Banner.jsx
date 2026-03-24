import React from "react";

const Banner = () => {
  const categories = [
    "Lehengas",
    "Sherwanis",
    "Sarees",
    "Kurta Sets",
    "Nehru Vests",
    "Gowns",
    "Accessories",
  ];


  const DecorativeText = ({ colorClass, strokeClass }) => (
    <div className="absolute inset-y-0 right-0 w-full lg:w-[45%] flex flex-col items-center justify-end pb-16 lg:pb-0 lg:items-end lg:justify-center lg:pr-[5%] xl:pr-[8%] pointer-events-none">
      <div
        className={`st-bebas text-[clamp(50px,15vw,90px)] lg:text-[clamp(70px,6vw,95px)] xl:text-[110px] leading-[0.8] text-center lg:text-right ${colorClass}`}
      >
        <span className={`block text-transparent ${strokeClass}`}>
          TIMELESS
        </span>
        STYLE
      </div>
      <div
        className={`st-josefin mt-2 text-[9px] lg:text-[10px] tracking-[0.5em] uppercase text-center lg:text-right opacity-70 ${colorClass}`}
      >
        Couture for Him & Her
      </div>
    </div>
  );

  const primaryBrandColor = "text-[#064E3B]";
  const primaryBgColor = "bg-[#064E3B]";
  const strokeColor = "[-webkit-text-stroke:1px_rgba(6,78,59,0.15)]";

  
  const clipPathClass =
    "[clip-path:polygon(0_65%,100%_50%,100%_100%,0%_100%)] lg:[clip-path:polygon(45%_0,100%_0,100%_100%,65%_100%)]";

  return (
    <div className="relative w-full overflow-hidden bg-[#fafaf9] min-h-screen lg:min-h-0 lg:h-[580px] xl:h-[650px] flex flex-col lg:block">
      {/* ── LAYER 1: BASE TEXT ── */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[55%] z-0">
        <DecorativeText
          colorClass={primaryBrandColor}
          strokeClass={strokeColor}
        />
      </div>

      {/* ── LAYER 2: GREEN CONTAINER + WHITE TEXT ── */}
      <div
        className={`absolute inset-0 z-10 pointer-events-none ${primaryBgColor} transition-all duration-700 ${clipPathClass}`}
      >
        {/* Fine Texture */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 0.5px, transparent 0)",
            backgroundSize: "30px 30px",
          }}
        />

        <div className="absolute inset-y-0 right-0 w-full lg:w-[55%]">
          <DecorativeText
            colorClass="text-white"
            strokeClass="[-webkit-text-stroke:1px_rgba(255,255,255,0.25)]"
          />
        </div>
      </div>

      {/* ── LAYER 3: MAIN CONTENT ── */}
      <div className="relative z-30 flex flex-col justify-center px-6 pt-20 pb-10 md:px-12 lg:pt-0 lg:pb-0 lg:absolute lg:inset-y-0 lg:left-0 lg:w-[42%] lg:pl-[8%] xl:pl-[10%]">
        <div className="st-josefin flex items-center gap-3 text-[10px] lg:text-[11px] tracking-[0.4em] uppercase text-[#064E3B] mb-5 font-semibold">
          <span className="inline-block w-[20px] lg:w-[30px] h-[1.5px] bg-[#064E3B]" />
          New Arrivals
        </div>

        <h2 className="st-playfair text-[clamp(30px,7vw,48px)] lg:text-[clamp(38px,3.8vw,58px)] font-bold text-[#1a1a1a] leading-[1.2] max-w-[15ch]">
          Modern Tradition <br />
          <em className="text-[#064E3B] not-italic italic font-medium underline decoration-emerald-200/50 underline-offset-[8px]">
            For Men & Women
          </em>
        </h2>

        <p className="st-josefin mt-6 max-w-[340px] lg:max-w-[380px] text-[14px] lg:text-[15px] text-gray-600 leading-relaxed font-light">
          Bespoke silhouettes crafted for celebrations. Discover heritage
          designs reimagined.
        </p>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mt-8 max-w-[450px]">
          {categories.map((cat) => (
            <span
              key={cat}
              className="st-josefin border border-gray-200 px-3 py-1.5 lg:px-4 lg:py-2 text-[9px] lg:text-[10px] tracking-widest uppercase text-[#444] bg-white transition-all duration-300 hover:border-[#064E3B] hover:text-[#064E3B] hover:shadow-sm cursor-pointer"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* UI VERSE BUTTON */}
        <div className="mt-10">
          <div className="relative group w-fit">
            <button className="relative inline-block p-px font-semibold leading-6 text-white bg-neutral-900 shadow-2xl cursor-pointer rounded-2xl transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 shadow-emerald-950/40 hover:shadow-emerald-600/30">
              <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-sky-600 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
              <span className="relative z-10 block px-7 py-3.5 rounded-2xl bg-neutral-950">
                <div className="relative z-10 flex items-center space-x-3">
                  <span className="st-josefin text-[11px] tracking-[0.2em] uppercase transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-emerald-300">
                    Begin Journey
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-emerald-300"
                  >
                    <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path>
                  </svg>
                </div>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Brand Label */}
      <span className="hidden lg:block st-josefin absolute top-8 right-10 text-[9px] tracking-[0.6em] uppercase text-white/30 z-40">
        Shubham Threads • 2024
      </span>

      {/* Spacer for Mobile View */}
      <div className="h-[320px] md:h-[380px] lg:hidden" />
    </div>
  );
};

export default Banner;
