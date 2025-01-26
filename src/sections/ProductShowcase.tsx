"use client";
import React from "react";
import Image from "next/image";
import personImage from "@/assets/person.png";
import mic from "@/assets/mic.png";
import star from "@/assets/star.png";
import chart from "@/assets/chart.png";
import call from "@/assets/call.png";
import book from "@/assets/book.png";
import { BackgroundGradient } from "@/components/ui/background-gradient";

interface CardProps {
  image?: string;
  title: JSX.Element; // Accept JSX for styled titles
  description: string;
}

const Card: React.FC<CardProps> = ({ image, title, description }) => (
  <div className="card group flex flex-col items-center p-6 bg-black bg-opacity-20 border border-[#333] rounded-3xl shadow-md hover:shadow-xl transition-all relative">
    {image && (
      <div className="relative w-full mb-4">
        <Image
          src={image}
          alt="Card Image"
          width={80}
          height={80}
          className="transition-transform group-hover:scale-110 group-hover:translate-y-[-10px] z-10"
        />
      </div>
    )}
    <h3 className="text-6xl font-black text-white mb-4 transition-all group-hover:pt-2">
      {title}
    </h3>
    <div className="focus-content opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out transform px-4 py-2">
      <p className="text-white opacity-90 text-base md:text-sm">{description}</p>
    </div>
  </div>
);

const ProductShowcase: React.FC = () => (
  <div className="bg-gradient-to-r from-[#221616] via-[#0e0c0c] to-[#221616] pt-16 pb-12 md:pt-8 md:pb-16">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold text-white mb-8">
        PURCHASE <span className="text-red-500">JAWAD'S METHOD</span> AND GET
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Product Cards */}
        <Card
          image={personImage}
          title={
            <>
              <span className="text-red-500">FACIAL ANALYSIS</span> AND <span className="text-red-500">ADVICE</span>
            </>
          }
          description="Get personalized facial analysis and advice tailored to your needs."
        />
        <Card
          image={mic}
          title={
            <>
              TALK TO <span className="text-red-500">INFLUENCERS</span>
            </>
          }
          description="Connect with top influencers in the industry for exclusive insights."
        />
        <Card
          image={chart}
          title={
            <>
              <span className="text-red-500">WEEKLY</span> UPDATES
            </>
          }
          description="Stay updated with weekly content and tips to enhance your journey."
        />
        <Card
          image={star}
          title={
            <>
              CUSTOM <span className="text-red-500">GLOW UP PLAN</span>
            </>
          }
          description="Receive a personalized glow-up plan for a transformation tailored to you."
        />
        <Card
          image={call}
          title={
            <>
              EXCLUSIVE <span className="text-red-500">CALLS WITH JAWAD</span>
            </>
          }
          description="Book one-on-one calls with Jawad for expert guidance and advice."
        />
        <Card
          image={book}
          title={
            <>
              THE ULTIMATE <span className="text-red-500">E-BOOK</span>
            </>
          }
          description="Access the ultimate e-book full of strategies and secrets for success."
        />
      </div>
      {/* Large Card */}
      <div className="bg-black bg-opacity-20 border border-[#333] rounded-3xl shadow-lg hover:shadow-2xl transition-all my-12 p-8 text-center mx-auto max-w-4xl flex flex-col items-center gap-6 relative overflow-hidden">
        <h3 className="text-3xl md:text-4xl font-extrabold text-white">
          JOIN <span className="text-red-500">5,000 STUDENTS</span> TODAY FOR JUST
        </h3>
        <div className="flex items-center justify-center gap-4">
          <span
            className="text-red-900 line-through text-3xl md:text-4xl relative"
            style={{
              textDecorationColor: "#EF4444", // Slightly more red for the line
            }}
          >
            $59.99
          </span>
          <span
            className="text-green-400 text-5xl md:text-6xl font-extrabold glow-text"
            style={{ "--glow-color": "#66FF66" }}
          >
            $29.99/mo
          </span>
        </div>
        <BackgroundGradient className="rounded-full">
          <button
            className="inline-flex items-center justify-center px-10 py-2 sm:px-12 sm:py-2 text-lg sm:text-xl md:text-2xl font-semibold bg-transparent text-white leading-normal"
            style={{ "--glow-color": "#FF6666" }}
          >
            JOIN NOW
          </button>
        </BackgroundGradient>
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 z-[-1]">
          <BackgroundGradient />
        </div>
      </div>
    </div>
  </div>
);

export default ProductShowcase;
