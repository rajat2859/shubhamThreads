import React, { useState, useEffect, useRef, useCallback } from "react";
import b1 from "../../assets/mens.jpg";
import b2 from "../../assets/both.jpg";
import b3 from "../../assets/womens.jpg";

const cards = [
  { src: b1, alt: "Men's", label: "MEN" },
  { src: b2, alt: "Kids", label: "KIDS" },
  { src: b3, alt: "Women's", label: "WOMEN" },
];

function Banner() {
  return (
    <div className="flex gap-3 px-6 py-8">
      {cards.map((card) => (
        <div
          key={card.label}
          className="relative flex-1 h-[600px] overflow-hidden rounded-lg cursor-pointer group"
        >
          <img
            src={card.src}
            alt={card.alt}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top",
            }}
          />

          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
      ))}
    </div>
  );
}
export default Banner;
