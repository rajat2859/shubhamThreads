import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonialsData = [
  {
    id: 1,
    quote: "I like to order on this way.",
    description:
      "Discover the latest in fashion trends and accessories at [Your Brand Name], where style meets quality. Whether you're looking to revamp your wardrobe or find that perfect accessory to complete your look, we've got you covered.",
    name: "Joneiba William",
    role: "Fashion Enthusiast",
    image:
      "https://images.unsplash.com/photo-1506634572416-48cdfe530110?q=80&w=1000&auto=format&fit=crop", // Replace with your actual image
  },
  {
    id: 2,
    quote: "The quality is unmatched.",
    description:
      "I've shopped at many places, but the attention to detail here is incredible. The fabric feels premium and the fit is exactly as described in the size guide. Highly recommended for anyone looking for quality.",
    name: "Alex River",
    role: "Stylist",
    image:
      "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 3,
    quote: "Fast delivery and great service.",
    description:
      "Not only is the clothing stylish, but the customer support team was very helpful with my exchange. The delivery arrived two days early, which was a pleasant surprise for my weekend event.",
    name: "Sarah Jenkins",
    role: "Content Creator",
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1000&auto=format&fit=crop",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  // Auto-play timer for the slider
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, 5000); // Changes every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full font-sans bg-white py-12 px-4 md:px-8 lg:px-16">
      {/* Top Banner Section (Optional, based on your screenshot) */}
      <div className="max-w-7xl mx-auto mb-20 relative overflow-hidden rounded-[40px] bg-[#93a37e] min-h-[300px] flex items-center justify-between p-6 md:p-12">
        <div className="hidden md:block w-1/4">
          <img
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=400"
            alt="Model"
            className="rounded-lg object-cover h-64"
          />
        </div>

        <div className="text-center flex-1 px-4">
          <p className="text-white text-xs uppercase tracking-widest mb-4 opacity-80">
            Last Chance
          </p>
          <h2 className="text-white text-3xl md:text-5xl font-medium leading-tight mb-8">
            EXPLORE OUR RANGE OF
            <br />
            STYLISH DRESSES
          </h2>
          <button className="bg-white text-black px-8 py-3 rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors">
            CHECK IT NOW
          </button>
        </div>

        <div className="hidden md:block w-1/4 flex justify-end">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=400"
              alt="Backpack"
              className="rounded-lg object-cover h-64"
            />
            <div className="absolute bottom-4 left-4 text-[#4ade80] font-serif italic text-xl">
              Nike
            </div>
          </div>
        </div>
      </div>

      {/* Main Testimonial Slider Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Content */}
        <div className="relative h-[400px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col justify-center"
            >
              <span className="text-gray-500 text-lg md:text-xl font-light mb-4 block">
                What people said
              </span>
              <h3 className="text-4xl md:text-6xl font-medium text-black leading-tight mb-6">
                {testimonialsData[index].quote}
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8 max-w-md">
                {testimonialsData[index].description}
              </p>

              <div>
                <h4 className="text-lg font-bold text-gray-900">
                  {testimonialsData[index].name}
                </h4>
                <p className="text-gray-400 text-sm">
                  {testimonialsData[index].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Side: Image */}
        <div className="relative h-[450px] md:h-[600px] overflow-hidden rounded-[40px]">
          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={testimonialsData[index].image}
              alt={testimonialsData[index].name}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
