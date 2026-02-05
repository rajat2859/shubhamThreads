"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Scroll effect to shrink the bar
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Gallery", href: "/gallery" },
        { name: "Collection", href: "/collection" },
        { name: "About", href: "/about" },
    ];

    return (
        <nav className="fixed top-0 w-full z-[100] transition-all duration-500 py-4 lg:py-6">
            <div className={`mx-auto transition-all duration-700 px-4 ${isScrolled ? "max-w-4xl" : "max-w-6xl"}`}>
                <div
                    className={`relative backdrop-blur-md transition-all duration-500 rounded-full px-8 py-3.5 flex items-center justify-between border
            ${isScrolled
                            ? "bg-black/90 border-[#C5A059]/30 shadow-[0_15px_50px_-15px_rgba(0,0,0,0.9)]"
                            : "bg-transparent border-white/5"
                        }`}
                >

                    {/* LUXURY MONOGRAM LOGO */}
                    <Link href="/" className="flex flex-col group pt-1">
                        <div className="flex items-center gap-1">
                            <span className="text-2xl font-serif font-bold text-[#D4AF37] leading-none transition-all group-hover:scale-110">
                                S
                            </span>
                            <span className="text-2xl font-serif font-bold text-white leading-none group-hover:opacity-70 transition-opacity">
                                T
                            </span>
                            <div className="ml-3 h-[1px] w-6 bg-[#C5A059]/40 group-hover:w-12 transition-all duration-700 hidden sm:block" />
                        </div>
                        <p className="text-[10px] uppercase tracking-[0.4em] font-medium text-gray-400 mt-1 transition-all group-hover:text-[#D4AF37] group-hover:tracking-[0.45em]">
                            Shubham <span className="text-white">Threads</span>
                        </p>
                    </Link>

                    {/* DESKTOP NAV LINKS */}
                    <div className="hidden md:flex items-center gap-12">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="relative text-[10px] uppercase tracking-[0.25em] font-semibold text-gray-300 hover:text-white transition-all group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1.5 left-0 w-0 h-[1px] bg-[#C5A059] transition-all duration-300 group-hover:w-full opacity-50" />
                            </Link>
                        ))}

                        <Link
                            href="/contact"
                            className="bg-gradient-to-tr from-[#C5A059] to-[#E5C687] text-black text-[11px] uppercase tracking-[0.25em] font-bold px-8 py-3 rounded-full hover:shadow-[0_0_25px_rgba(197,160,89,0.3)] hover:bg-white hover:scale-105 active:scale-95 transition-all border border-[#D4AF37]/50"
                        >
                            Book Visit
                        </Link>
                    </div>

                    {/* MOBILE TOGGLE */}
                    <button
                        className="md:hidden text-[#C5A059] p-2 hover:bg-white/5 rounded-full transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>
            </div>

            {/* LUXURY MOBILE OVERLAY */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
                        exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        className="fixed inset-0 bg-black/95 z-[90] flex flex-col items-center justify-center md:hidden text-center"
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="mb-12"
                        >
                            <span className="text-6xl font-serif font-bold text-[#D4AF37] tracking-tighter">ST</span>
                            <div className="h-[2px] w-12 bg-white/20 mx-auto mt-2" />
                        </motion.div>

                        {navLinks.map((link, idx) => (
                            <motion.div
                                key={link.name}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <Link
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block text-2xl uppercase tracking-[0.4em] text-white font-serif my-4 hover:text-[#D4AF37] transition-colors"
                                >
                                    {link.name}
                                </Link>
                            </motion.div>
                        ))}

                        <Link
                            href="/contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="mt-10 border-2 border-[#C5A059] text-[#C5A059] px-14 py-4 rounded-full text-[11px] uppercase tracking-[0.4em] font-bold"
                        >
                            Contact Us
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}