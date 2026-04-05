import React from "react";

// Reusable SVG Icons
const BrandIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mt-1"
  >
    <rect
      x="4"
      y="14"
      width="8"
      height="4"
      rx="1"
      transform="rotate(-45 4 14)"
      fill="#111827"
    />
    <rect
      x="10"
      y="20"
      width="16"
      height="4"
      rx="1"
      transform="rotate(-45 10 20)"
      fill="#111827"
    />
  </svg>
);

const FacebookIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16L15.5 15H13V21.95C18.05 21.45 22 17.19 22 12Z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14 9.94 13.4 10.63 13 11.2V10.1H10.5V18.5H13V13.8C13 13.3 13.3 12.3 14.5 12.3C15.6 12.3 15.8 13.3 15.8 13.8V18.5H18.5M6.9 8.6C7.7 8.6 8.3 7.9 8.3 7.1C8.3 6.3 7.7 5.6 6.9 5.6C6.1 5.6 5.5 6.3 5.5 7.1C5.5 7.9 6.1 8.6 6.9 8.6M5.6 18.5H8.2V10.1H5.6V18.5Z" />
  </svg>
);

const TwitterIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28 9.09 5.11 7.38 3 4.79C2.63 5.42 2.42 6.16 2.42 6.94C2.42 8.43 3.17 9.75 4.33 10.5C3.62 10.5 2.96 10.3 2.38 10V10.03C2.38 12.11 3.86 13.85 5.82 14.24C5.46 14.34 5.08 14.39 4.69 14.39C4.42 14.39 4.15 14.36 3.89 14.31C4.43 16.02 6.02 17.26 7.89 17.3C6.43 18.45 4.58 19.13 2.56 19.13C2.22 19.13 1.88 19.11 1.54 19.07C3.44 20.29 5.7 21 8.12 21C16.01 21 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="w-full bg-[#fafafa] py-20 px-6 font-sans">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-8 justify-between">
        {/* Left Column: Brand & Description */}
        <div className="w-full lg:w-[35%] flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <BrandIcon />
            <span className="text-3xl font-bold tracking-tight text-gray-900">
              Brand
            </span>
          </div>
          <p className="text-gray-500 text-[17px] leading-relaxed max-w-sm mt-2">
            Stay connected with us on social media for the latest trends,
            exclusive offers, and style inspiration.
          </p>
        </div>

        {/* Right Area: Links Grid */}
        <div className="w-full lg:w-[60%] grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            <h4 className="font-semibold text-gray-900 text-[15px]">Shoes</h4>
            <ul className="flex flex-col gap-4 text-[15px] text-gray-400">
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  T-Shirt
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Jackets
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Hat
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Accessories
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6">
            <h4 className="font-semibold text-gray-900 text-[15px]">
              All Category
            </h4>
            <ul className="flex flex-col gap-4 text-[15px] text-gray-400">
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Gift Cards
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Special Events
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Testimonial
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6">
            <h4 className="font-semibold text-gray-900 text-[15px]">
              Tracking Package
            </h4>
            <ul className="flex flex-col gap-4 text-[15px] text-gray-400">
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Terms and Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Socials */}
          <div className="flex flex-col gap-6">
            <h4 className="font-semibold text-gray-900 text-[15px]">Contact</h4>
            <ul className="flex flex-col gap-4 text-[15px] text-gray-400">
              <li className="text-gray-500">+8801867204649</li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  About Us
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex items-center gap-5 text-gray-400 mt-2">
              <a href="#" className="hover:text-gray-900 transition-colors">
                <FacebookIcon />
              </a>
              <a href="#" className="hover:text-gray-900 transition-colors">
                <LinkedInIcon />
              </a>
              <a href="#" className="hover:text-gray-900 transition-colors">
                <TwitterIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
