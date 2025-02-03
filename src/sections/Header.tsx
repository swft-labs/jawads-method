"use client";

import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
import pfp from "@/assets/pfp.png";
import React, { useState } from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false); // Close mobile menu when clicking a link
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      {/* Header Section */}
      <header className="fixed top-0 left-0 right-0 z-20 bg-gradient-to-r from-[#221616] via-[#0e0c0c] to-[#221616] backdrop-blur-sm">
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
                <button 
                  onClick={() => scrollToSection('benefits')} 
                  className="hover:text-white transition cursor-pointer"
                >
                  BENEFITS
                </button>
                <button 
                  onClick={() => scrollToSection('transformations')} 
                  className="hover:text-white transition cursor-pointer"
                >
                  TRANSFORMATIONS
                </button>
                <button 
                  onClick={() => scrollToSection('faq')} 
                  className="hover:text-white transition cursor-pointer"
                >
                  FAQ
                </button>
                <button 
                  onClick={() => scrollToSection('socials')} 
                  className="hover:text-white transition cursor-pointer"
                >
                  SOCIALS
                </button>
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
              <button 
                onClick={() => scrollToSection('benefits')} 
                className="block py-2 w-full text-left"
              >
                BENEFITS
              </button>
              <button 
                onClick={() => scrollToSection('transformations')} 
                className="block py-2 w-full text-left"
              >
                TRANSFORMATIONS
              </button>
              <button 
                onClick={() => scrollToSection('faq')} 
                className="block py-2 w-full text-left"
              >
                FAQ
              </button>
              <button 
                onClick={() => scrollToSection('socials')} 
                className="block py-2 w-full text-left"
              >
                SOCIALS
              </button>
              <button className="get-access-btn w-full mt-4 px-4 py-2">
                GET ACCESS
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section - Now takes full viewport height */}
      <div className="min-h-screen flex items-center bg-gradient-to-r from-[#221616] via-[#0e0c0c] to-[#221616]">
        <main className="container mx-auto px-4 md:px-6 max-w-7xl">
          <section className="text-center text-white font-['Inter']">
            <h1 className="text-[#e4e4e4] text-2xl sm:text-3xl md:text-5xl font-extrabold mb-4 sm:mb-6 leading-snug max-w-full text-center">
              REACH YOUR POTENTIAL USING{" "}
              <span className="block text-white text-4xl sm:text-6xl md:text-8xl font-extrabold mt-4 sm:mt-6 glow-text">
                THE METHOD
              </span>
            </h1>
            <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 mt-6 sm:mt-10">
              <BackgroundGradient className="rounded-full w-full sm:w-auto">
                <button className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 text-base sm:text-lg md:text-xl font-semibold bg-transparent text-white leading-normal">
                  START YOUR JOURNEY
                </button>
              </BackgroundGradient>
              <a
                href="https://discord.com/invite/jscommunity"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-btn-secondary w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 text-base sm:text-lg md:text-xl font-semibold leading-normal"
              >
                JOIN OUR DISCORD
              </a>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-2 mt-6 text-white/70 justify-center">
              <span className="h-2 w-2 bg-green-500 rounded-full"></span>
              <span className="text-white italic">21,000+ ACTIVE</span>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};
