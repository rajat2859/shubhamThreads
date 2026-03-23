import React from "react";

const Banner = () => {
  const categories = ["Lehengas", "Sarees", "Kurta Sets", "Sherwanis"];

  // Shared Text Component
  // Fixed size for Laptop: 85px to 110px (doesn't grow forever)
  const DecorativeText = ({ colorClass, strokeClass }) => (
    <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 lg:pb-0 lg:items-end lg:justify-center lg:pr-[6%] xl:pr-[10%] pointer-events-none">
      <div
        className={`st-bebas text-[clamp(60px,18vw,120px)] lg:text-[clamp(85px,7vw,110px)] xl:text-[120px] leading-[0.85] text-center lg:text-right ${colorClass}`}
      >
        <span className={`block text-transparent ${strokeClass}`}>
          TIMELESS
        </span>
        STYLE
      </div>
      <div
        className={`st-josefin mt-3 lg:mt-4 text-[9px] lg:text-[10px] xl:text-[11px] tracking-[0.3em] lg:tracking-[0.5em] uppercase text-center lg:text-right opacity-60 ${colorClass}`}
      >
        The Signature Collection
      </div>
    </div>
  );

  // The Clip Path:
  // Laptop: Starts at 52% to give the pink box enough width to hold the text "STYLE"
  const clipPathClass =
    "[clip-path:polygon(0_65%,100%_50%,100%_100%,0%_100%)] lg:[clip-path:polygon(52%_0,100%_0,100%_100%,70%_100%)]";

  return (
    <div className="relative w-full overflow-hidden bg-[#fff9f5] min-h-screen lg:min-h-0 lg:h-[600px] xl:h-[700px] flex flex-col lg:block">
      {/* ── LAYER 1: BASE TEXT (The 'Flip' Color) ── */}
      {/* Constrained to the right side on laptop so it stays "in the box" area */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[48%] z-0">
        <DecorativeText
          colorClass="text-[#C8185A]"
          strokeClass="[-webkit-text-stroke:1px_rgba(200,24,90,0.2)]"
        />
      </div>

      {/* ── LAYER 2: PINK CONTAINER + WHITE TEXT ── */}
      <div
        className={`absolute inset-0 z-10 pointer-events-none bg-[#C8185A] transition-all duration-700 ${clipPathClass}`}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, transparent, transparent 18px, rgba(255,255,255,0.1) 18px, rgba(255,255,255,0.1) 19px)",
          }}
        />

        {/* Constrained White Text */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-[48%]">
          <DecorativeText
            colorClass="text-white"
            strokeClass="[-webkit-text-stroke:1px_rgba(255,255,255,0.4)]"
          />
        </div>
      </div>

      {/* ── LAYER 3: MAIN CONTENT (Headlines, Buttons) ── */}
      {/* lg:w-[48%] ensures this container stops before hitting the pink box */}
      <div className="relative z-30 flex flex-col justify-center px-6 pt-20 pb-10 md:px-12 lg:pt-0 lg:pb-0 lg:absolute lg:inset-y-0 lg:left-0 lg:w-[48%] lg:pl-[8%] xl:pl-[10%]">
        <div className="st-josefin flex items-center gap-3 text-[10px] lg:text-[11px] tracking-[0.4em] uppercase text-[#C8185A] mb-5">
          <span className="inline-block w-[25px] lg:w-[35px] h-[1px] bg-[#C8185A]" />
          Curated Essentials
        </div>

        <h2 className="st-playfair text-[clamp(34px,8vw,60px)] lg:text-[clamp(45px,4.5vw,70px)] font-bold text-[#1a1a1a] leading-[1.1] max-w-[15ch]">
          Where Tradition
          <br />
          Meets{" "}
          <em className="text-[#C8185A] not-italic italic font-medium">
            Today
          </em>
        </h2>

        <p className="st-josefin mt-6 max-w-[340px] lg:max-w-[400px] text-[14px] lg:text-[15px] text-gray-600 leading-relaxed font-light">
          Handpicked sarees, kurta sets & fusion wear — designed for the modern
          Indian silhouette.
        </p>

        <div className="flex flex-wrap gap-2 mt-8 lg:mt-10">
          {categories.map((cat) => (
            <span
              key={cat}
              className="st-josefin border border-gray-300 px-4 py-2 lg:px-5 lg:py-2.5 text-[9px] lg:text-[10px] tracking-widest uppercase text-[#444] bg-white/60 backdrop-blur-sm lg:bg-transparent transition-all duration-300 hover:border-[#C8185A] hover:text-[#C8185A] cursor-pointer"
            >
              {cat}
            </span>
          ))}
        </div>

        <div className="mt-10 lg:mt-12">
          <a
            href="#"
            className="st-josefin group inline-flex items-center bg-[#C8185A] text-white text-[10px] lg:text-[11px] tracking-[0.3em] px-10 py-4 lg:px-12 lg:py-4 uppercase transition-all duration-300 hover:bg-[#a11248] hover:shadow-xl active:scale-95"
          >
            Explore All
            <span className="ml-3 transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </a>
        </div>
      </div>

      {/* Brand Label */}
      <span className="hidden lg:block st-josefin absolute top-10 right-10 text-[10px] tracking-[0.5em] uppercase text-white/30 z-40">
        Shubham Threads
      </span>

      {/* Spacer for Mobile View */}
      <div className="h-[350px] md:h-[400px] lg:hidden" />
    </div>
  );
};

export default Banner;
