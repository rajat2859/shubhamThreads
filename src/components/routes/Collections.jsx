import React, { useEffect, useRef, useState, useCallback } from "react";

const categoriesData = [
  {
    id: 1,
    title: "SHOES",
    image: "https://pngimg.com/uploads/running_shoes/running_shoes_PNG5816.png",
  },
  {
    id: 2,
    title: "BRASH",
    image:
      "https://freepngimg.com/thumb/cleaning/11-2-cleaning-png-images-thumb.png",
  },
  {
    id: 3,
    title: "BAG",
    image:
      "https://freepngimg.com/thumb/women_bag/2-2-women-bag-png-image-thumb.png",
  },
  {
    id: 4,
    title: "T-SHIRT",
    image: "https://freepngimg.com/thumb/tshirt/11-t-shirt-png-image-thumb.png",
  },
  {
    id: 5,
    title: "SNEAKERS",
    image: "https://pngimg.com/uploads/running_shoes/running_shoes_PNG5816.png",
  },
  {
    id: 6,
    title: "CLEANER",
    image:
      "https://freepngimg.com/thumb/cleaning/11-2-cleaning-png-images-thumb.png",
  },
  {
    id: 7,
    title: "HANDBAG",
    image:
      "https://freepngimg.com/thumb/women_bag/2-2-women-bag-png-image-thumb.png",
  },
  {
    id: 8,
    title: "APPAREL",
    image: "https://freepngimg.com/thumb/tshirt/11-t-shirt-png-image-thumb.png",
  },
];

const GAP_PX = 24;

const Collections = () => {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else if (window.innerWidth < 1280) setItemsPerView(3);
      else setItemsPerView(4);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(categoriesData.length / itemsPerView);

  // 2. Navigation controls
  const nextSlide = useCallback(() => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  }, [totalPages]);

  const prevSlide = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const goToSlide = (index) => setCurrentPage(index);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // 4. Auto-play Logic
  useEffect(() => {
    let interval;
    if (isVisible && !isHovered) {
      interval = setInterval(nextSlide, 4000);
    }
    return () => clearInterval(interval);
  }, [isVisible, isHovered, nextSlide]);

  return (
    <section
      ref={sectionRef}
      className="w-full py-16 px-4 md:px-8 lg:px-12 bg-white"
    >
      <div className="max-w-[1300px] mx-auto relative">
        {/* Header & Filters */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
          <h2 className="text-4xl md:text-5xl font-normal text-black tracking-tight">
            Browse by categories
          </h2>

          <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
            {["ALL", "WOMAN", "CHILDREN"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2.5 rounded-full border text-xs font-semibold uppercase tracking-wide transition-all duration-300 whitespace-nowrap ${
                  activeFilter === filter
                    ? "bg-[#111] text-white border-[#111]"
                    : "bg-transparent text-gray-500 border-gray-200 hover:border-black hover:text-black"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Carousel Area */}
        <div
          className="relative w-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute -left-5 md:-left-6 top-1/2 -translate-y-1/2 z-20 bg-white border border-gray-100 shadow-xl text-black w-12 h-12 flex items-center justify-center rounded-full hover:bg-black hover:text-white transition-colors duration-300"
            aria-label="Previous Slide"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute -right-5 md:-right-6 top-1/2 -translate-y-1/2 z-20 bg-white border border-gray-100 shadow-xl text-black w-12 h-12 flex items-center justify-center rounded-full hover:bg-black hover:text-white transition-colors duration-300"
            aria-label="Next Slide"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Sliding Track Wrapper ) */}
          <div className="overflow-hidden w-full py-4 px-1">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(calc(-${currentPage * 100}% - ${currentPage * GAP_PX}px))`,
                gap: `${GAP_PX}px`,
              }}
            >
              {categoriesData.map((category) => (
                <div
                  key={category.id}
                  className="flex-shrink-0"
                  style={{
                    width: `calc((100% - ${(itemsPerView - 1) * GAP_PX}px) / ${itemsPerView})`,
                  }}
                >
                  {/* Card Design */}
                  <div className="relative w-full h-[220px] bg-[#e3e3e3] rounded-[20px] flex justify-center items-center cursor-pointer transition-transform duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-md">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-4/5 h-4/5 object-contain mix-blend-darken"
                    />
                    <span className="absolute bottom-4 left-4 bg-white text-black px-5 py-2 rounded-full text-[11px] font-bold uppercase shadow-sm tracking-wide">
                      {category.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-3 mt-6 z-20 relative">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentPage === index
                    ? "w-8 h-2.5 bg-black"
                    : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-500"
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Collections;
