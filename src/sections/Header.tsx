"use client";

import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
import pfp from "@/assets/pfp.png";
import React, { useState } from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Header Section */}
      <header className="sticky top-0 z-20 bg-gradient-to-r from-[#221616] via-[#0e0c0c] to-[#221616] backdrop-blur-sm">
        <div className="py-4 md:py-5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-wrap items-center justify-between">
              {/* Logo and Title */}
              <div className="flex items-center flex-wrap text-center sm:text-left">
                <span className="text-xl md:text-2xl lg:text-3xl font-bold tracking-wide text-white font-['Inter']">
                  JAWAD'S
                </span>
                <span className="ml-2 text-xl md:text-2xl lg:text-3xl font-semibold tracking-wide text-white font-['Inter']">
                  METHOD
                </span>
              </div>
              {/* Navigation */}
              <nav className="hidden md:flex flex-wrap gap-4 md:gap-6 text-white/80 items-center font-['Inter']">
                <a href="#" className="hover:text-white transition">
                  BENEFITS
                </a>
                <a href="#" className="hover:text-white transition">
                  TRANSFORMATIONS
                </a>
                <a href="#" className="hover:text-white transition">
                  FAQ
                </a>
                <a href="#" className="hover:text-white transition">
                  SOCIALS
                </a>
                <button className="get-access-btn whitespace-nowrap px-4 py-2">
                  GET ACCESS
                </button>
              </nav>
              {/* Mobile Menu Icon */}
              <MenuIcon
                className="h-6 w-6 text-white md:hidden cursor-pointer"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>
          </div>
          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-[#0e0c0c] text-white px-4 py-4">
              <a href="#" className="block py-2">
                BENEFITS
              </a>
              <a href="#" className="block py-2">
                FAQ
              </a>
              <a href="#" className="block py-2">
                SOCIALS
              </a>
              <a href="#" className="block py-2">
                DISCORD
              </a>
              <a href="#" className="block py-2">
                CONTACT
              </a>
              <button className="get-access-btn w-full mt-4 px-4 py-2">
                GET ACCESS
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <div className="h-[70vh] pt-16 pb-20 bg-gradient-to-r from-[#221616] via-[#0e0c0c] to-[#221616]">
        {/* Adjusted min-height and padding */}
        <main className="container mx-auto px-4 md:px-6 max-w-7xl">
          <section className="text-center text-white pt-8 font-['Inter']">
            {/* Reduced padding */}
            <h1 className="text-[#e4e4e4] text-3xl sm:text-4xl md:text-6xl font-extrabold mb-6 leading-snug max-w-full text-center">
              REACH YOUR POTENTIAL USING{" "}
              <span className="block text-white text-6xl sm:text-7xl md:text-9xl font-extrabold mt-6 glow-text">
                THE METHOD
              </span>
            </h1>
            <div className="flex flex-wrap justify-center items-center gap-4 mt-10">
              <BackgroundGradient className="rounded-full">
                <button className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 text-lg sm:text-xl md:text-2xl font-semibold bg-transparent text-white leading-normal">
                  START YOUR JOURNEY
                </button>
              </BackgroundGradient>
              <a
                href="https://discord.com/invite/jscommunity"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-btn-secondary inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-5 text-lg sm:text-xl md:text-2xl font-semibold leading-normal"
              >
                JOIN OUR DISCORD
              </a>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-2 mt-6 text-white/70 justify-center">
              <Image src={pfp} alt="Profile Picture" width={30} height={30} className="rounded-full" />
              <span className="h-2 w-2 bg-green-500 rounded-full"></span>
              <span className="text-white italic">21,000+ ACTIVE</span>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};
