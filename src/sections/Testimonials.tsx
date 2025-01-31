"use client";

import React from "react";
import Image from "next/image";
import { Compare } from "@/components/ui/compare";

// Import image assets
import before1 from "@/assets/before1.png";
import before2 from "@/assets/before2.png";
import before3 from "@/assets/before3.png";
import after1 from "@/assets/after1.png";
import after2 from "@/assets/after2.png";
import after3 from "@/assets/after3.png";

export const Testimonials = () => {
  return (
    <div className="bg-gradient-to-r from-[#221616] via-[#0e0c0c] to-[#221616] text-white relative z-10 pb-16"> 
      <div className="py-12"> 
        <h2 className="text-center text-3xl md:text-5xl font-bold mb-12">
          DON'T BELIEVE ME? <br />
          LOOK AT THESE{" "}
          <span className="text-red-500">TRANSFORMATIONS</span>
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-4">
          {/* Testimonial 1 */}
          <div className="flex flex-col items-center max-w-xs">
            <div className="p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100 border-neutral-200 dark:border-neutral-800">
              <Compare
                firstImage={before1}
                secondImage={after1}
                firstImageClassName="object-cover object-center"
                secondImageClassName="object-cover object-center"
                className="h-[300px] w-[200px] md:h-[500px] md:w-[300px]"
                slideMode="hover"
              />
            </div>
            <p className="mt-4 text-center text-lg font-medium">
              I can tell you THE METHOD is a woman magnet
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="flex flex-col items-center max-w-xs">
            <div className="p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100 border-neutral-200 dark:border-neutral-800">
              <Compare
                firstImage={before2}
                secondImage={after2}
                firstImageClassName="object-cover object-center"
                secondImageClassName="object-cover object-center"
                className="h-[300px] w-[200px] md:h-[500px] md:w-[300px]"
                slideMode="hover"
              />
            </div>
            <p className="mt-4 text-center text-lg font-medium">
              Jawad saved my life, I am nothing without him
            </p>
          </div>

          {/* Testimonial 3 - Hidden in tablet view */}
          <div className="flex flex-col items-center max-w-xs hidden md:hidden lg:flex">
            <div className="p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100 border-neutral-200 dark:border-neutral-800">
              <Compare
                firstImage={before3}
                secondImage={after3}
                firstImageClassName="object-cover object-center"
                secondImageClassName="object-cover object-center"
                className="h-[300px] w-[200px] md:h-[500px] md:w-[300px]"
                slideMode="hover"
              />
            </div>
            <p className="mt-4 text-center text-lg font-medium">
              This is the best thing that happened in my life and I will never
              forget it
            </p>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="py-12 px-4 bg-gradient-to-r from-[#221616] via-[#0e0c0c] to-[#221616]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Review 1 */}
          <div className="p-6 bg-[#221616] rounded-3xl shadow-md border border-neutral-800">
            <p className="text-lg italic mb-4">
              "Very active community trying to help you with you looksmaxxing journey, I received some very precious tips."
            </p>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-xl glow-white">Gosha Miller</p>
                <p className="text-sm text-gray-400">Verified Customer</p>
              </div>
              <div className="flex gap-1">
                {Array(5).fill(0).map((_, i) => (
                  <span key={i} className="text-yellow-500">★</span>
                ))}
              </div>
            </div>
          </div>

          {/* Review 2 */}
          <div className="p-6 bg-[#221616] rounded-3xl shadow-md border border-neutral-800">
            <p className="text-lg italic mb-4">
              "It’s great! Custom plans, daily progress tracking, face analysis, the jawad methods guide and asking Jawad for tips for a reasonable price. That’s awesome value, face analysis alone is worth more than $50+ on other programs so this helped me save money and always being guided towards a glow up everyday makes me feel more comfortable, I’ve already seen some great results 😍"
            </p>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-xl glow-white">BowlOfCereal</p>
                <p className="text-sm text-gray-400">Verified Customer</p>
              </div>
              <div className="flex gap-1">
                {Array(5).fill(0).map((_, i) => (
                  <span key={i} className="text-yellow-500">★</span>
                ))}
              </div>
            </div>
          </div>

          {/* Review 3 */}
          <div className="p-6 bg-[#221616] rounded-3xl shadow-md border border-neutral-800">
            <p className="text-lg italic mb-4">
              "Jawad is a great guy, helped me a bunch with my hair routine and looked over my skincare he is really there for his community and looks out for everyone so I appreciate all the help!"
            </p>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-xl glow-white">Frosty</p>
                <p className="text-sm text-gray-400">Verified Customer</p>
              </div>
              <div className="flex gap-1">
                {Array(5).fill(0).map((_, i) => (
                  <span key={i} className="text-yellow-500">★</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
