import React from "react";

const Banner = () => {
  return (
    // We set a max height so it never exceeds the viewport.
    // Adjust 140px based on your actual navbar height.
    <section className="max-w-[1400px] h-[calc(100vh-140px)] mx-auto px-4 py-4 flex flex-col gap-4">
      {/* Top Section: Hero + Right Image (Takes 60% of height) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-grow min-h-0">
        {/* Left Big Card */}
        <div className="lg:col-span-2 bg-[#FDF5E6] rounded-[2rem] p-6 md:p-10 flex flex-col justify-center relative overflow-hidden">
          <span className="text-lg font-bold text-gray-500 mb-1">50% OFF</span>
          <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 leading-[1.1]">
            Summer Arrival
            <br />
            of Outfit
          </h1>
          <p className="text-gray-600 mb-6 max-w-sm text-base lg:text-lg">
            Discover quality fashion that reflects your style and makes everyday
            enjoyable.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-full w-fit font-medium hover:bg-gray-800 transition-all flex items-center gap-2 text-sm lg:text-base">
            EXPLORE PRODUCT →
          </button>
        </div>

        {/* Right Image Card */}
        <div className="bg-gray-100 rounded-[2rem] overflow-hidden relative">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
            alt="Fashion Model"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Bottom Small Cards (Takes 30% of height) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[180px] lg:h-[200px] shrink-0">
        <div className="bg-[#E5E7EB] rounded-[2rem] p-6 flex items-center justify-between group cursor-pointer hover:bg-gray-300 transition-colors">
          <h2 className="text-2xl lg:text-3xl font-bold">
            Trendy
            <br />
            Sunglass
          </h2>
          <div className="bg-white p-3 lg:p-4 rounded-full shadow-sm group-hover:scale-110 transition-transform">
            ↗
          </div>
        </div>

        <div className="bg-[#FFE4B5] rounded-[2rem] p-6 flex items-center justify-between group cursor-pointer hover:bg-[#ffdbac] transition-colors">
          <h2 className="text-2xl lg:text-3xl font-bold">
            Popular
            <br />
            Shoes
          </h2>
          <div className="bg-white p-3 lg:p-4 rounded-full shadow-sm group-hover:scale-110 transition-transform">
            ↗
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
