"use client";

import ArrowIcon from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png";
import cylinderImage from "@/assets/cylinder.png";
import Image from "next/image";
import noodleImage from "@/assets/noodle.png";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
  return (
    <div className="min-h-screen pt-8 pb-16 md:pt-5 md:pb-6 bg-[radial-gradient(ellipse_70%_70%_at_left,#F5A3D1,#000000)]">
      <main className="container mx-auto px-6 max-w-7xl">
        {/* Hero Section */}
        <section className="text-center text-white pt-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            REACH YOUR POTENTIAL USING{" "}
            <span className="text-red-500">THE METHOD</span>
          </h1>
          <div className="flex justify-center gap-4 mt-10">
            <button className="hero-btn-primary">
              START YOUR JOURNEY
            </button>
            <button className="hero-btn-secondary">
              JOIN OUR DISCORD
            </button>
          </div>
          <div className="flex items-center justify-center mt-6 text-white/70">
            <span className="h-2 w-2 bg-green-500 rounded-full mr-2"></span>
            21,000+ ACTIVE
          </div>
        </section>
      </main>
    </div>
  );
};
