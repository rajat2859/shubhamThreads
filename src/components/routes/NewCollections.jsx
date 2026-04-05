import React from "react";

const mockData = [
  {
    id: 1,
    name: "Casual Shoe",
    price: "$225",
    span: 1,
    liked: false,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    bgClass: "bg-[#d4d4d4]",
  },
  {
    id: 2,
    name: "Gray-Shirt",
    price: "$125",
    span: 2,
    liked: true,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    bgClass: "bg-[#d9d9d9]",
  },
  {
    id: 3,
    name: "Woman Bage",
    price: "$125",
    span: 1,
    liked: false,
    image:
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    bgClass: "bg-[#c4c4c4]",
  },
  {
    id: 4,
    name: "Fashion T-Shirt",
    price: "$125",
    span: 1,
    liked: false,
    image:
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    bgClass: "bg-[#d9d9d9]",
  },
  {
    id: 5,
    name: "Kids Top",
    price: "$125",
    span: 1,
    liked: false,
    image:
      "https://images.unsplash.com/photo-1518831959646-742c3b14ebf7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    bgClass: "bg-[#dfdfdf]",
  },
  {
    id: 6,
    name: "Smart Headpone",
    price: "$125",
    span: 1,
    liked: false,
    image:
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    bgClass: "bg-[#e5e9ec]",
  },
  {
    id: 7,
    name: "Brodeo Beanie",
    price: "$25",
    span: 1,
    liked: false,
    image:
      "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    bgClass: "bg-[#f0f0f0]",
  },
];

const filters = ["ALL", "SHORTS", "JACKETS", "SHOES", "T-SHIRT"];

// Inline SVG Icons
const HeartIcon = ({ filled }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
  >
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

const ArrowUpRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6 text-white"
  >
    <path d="M7 17 17 7" />
    <path d="M7 7h10v10" />
  </svg>
);

export default function NewCollection() {
  // A single grid block containing all items
  const GridBlock = () => (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-6">
      {mockData.map((item) => (
        <div
          key={item.id}
          className={`flex flex-col gap-3 group cursor-pointer ${
            item.span === 2 ? "md:col-span-2" : "col-span-1"
          }`}
        >
          {/* Image Container */}
          <div
            className={`relative w-full overflow-hidden rounded-3xl ${item.bgClass} ${item.span === 2 ? "aspect-[2/1] md:aspect-[16/10]" : "aspect-square"}`}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
            />

            {/* Like Button */}
            <button
              className={`absolute top-4 right-4 p-2.5 rounded-full transition-colors ${
                item.liked
                  ? "bg-red-500 text-white"
                  : "bg-black/20 text-white hover:bg-black/30 backdrop-blur-sm"
              }`}
            >
              <HeartIcon filled={item.liked} />
            </button>

            {/* Featured Arrow (Only on featured item) */}
            {item.featured && (
              <div className="absolute bottom-4 right-4 p-3 rounded-full bg-black/20 backdrop-blur-md">
                <ArrowUpRightIcon />
              </div>
            )}
          </div>

          {/* Text Content */}
          <div className="flex flex-col">
            <h3 className="text-[17px] text-gray-900 font-medium">
              {item.name}
            </h3>
            <p className="text-[15px] text-gray-500 mt-0.5">{item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="w-full max-w-[1400px] mx-auto px-6 py-12 font-sans">
      {/* Injecting CSS for the infinite scroll animation */}
      <style>
        {`
          @keyframes infiniteScrollVertical {
            0% { transform: translateY(0); }
            100% { transform: translateY(-50%); }
          }
          .animate-scroll-vertical {
            animation: infiniteScrollVertical 25s linear infinite;
          }
          .animate-scroll-vertical:hover {
            animation-play-state: paused;
          }
          /* Fades top and bottom edges smoothly */
          .scroll-mask {
            mask-image: linear-gradient(to bottom, transparent, black 5%, black 95%, transparent);
            -webkit-mask-image: linear-gradient(to bottom, transparent, black 5%, black 95%, transparent);
          }
        `}
      </style>

      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <h2 className="text-[28px] text-gray-900 tracking-tight">
          New Collection
        </h2>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2">
          {filters.map((filter, index) => (
            <button
              key={filter}
              className={`px-5 py-2 rounded-full text-xs font-medium tracking-wide transition-colors ${
                index === 0
                  ? "bg-[#111111] text-white border border-[#111111]"
                  : "bg-white text-gray-500 border border-gray-200 hover:border-gray-300"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Slider Container (Fixed height, hides overflow, applies fade mask) */}
      <div className="h-[850px] overflow-hidden scroll-mask relative">
        {/* Inner track that animates. We render GridBlock twice to make the loop seamless */}
        <div className="animate-scroll-vertical flex flex-col gap-6">
          <GridBlock />
          <GridBlock />
        </div>
      </div>
    </section>
  );
}
