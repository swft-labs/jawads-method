"use client";
import React, { useState } from "react";
import Image from "next/image";
import DiscordLogo from "@/assets/discord - Copy.png"; // Replace with the path to your Discord logo
import TikTokLogo from "@/assets/tiktoklogo.webp"; // Replace with the path to your TikTok logo
import InstagramLogo from "@/assets/insta1.webp"; // Replace with the path to your Instagram logo

const Footer: React.FC = () => {
  // State to track which question is open
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  // Toggle the dropdown
  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqs = [
    {
      question: "Does THE METHOD guarantee results?",
      answer: "Results vary by individual, but consistent application increases success.",
    },
    {
      question: "Can I talk to Jawad if I have THE METHOD?",
      answer: "Yes, you can schedule exclusive one-on-one calls with Jawad.",
    },
    {
      question: "I am done with puberty. Can I still get a glow up?",
      answer: "Absolutely! THE METHOD is designed for all stages of life.",
    },
    {
      question: "If I'm a girl, would I benefit from THE METHOD?",
      answer: "Yes, THE METHOD is inclusive and tailored for everyone.",
    },
    {
      question: "Can't I just Google all the things in THE METHOD?",
      answer: "THE METHOD includes exclusive insights you won’t find online.",
    },
    {
      question: "Do you offer refunds?",
      answer: "Refunds are not offered, but we provide extensive support.",
    },
    {
      question: "Do I get to keep THE METHOD forever?",
      answer: "Yes, once purchased, it’s yours for life.",
    },
  ];

  return (
    <footer className="bg-gradient-to-r from-[#221616] via-[#0e0c0c] to-[#221616] py-12">
      {/* FAQ Section */}
      <div className="mb-24">
        <h2 className="text-4xl font-bold text-white mb-8 text-center">
          GOT SOME QUESTIONS? <span className="text-red-500">WE HAVE THE ANSWERS!</span>
        </h2>
        <div className="max-w-5xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="p-6 bg-black bg-opacity-30 border border-[#333] rounded-3xl shadow-md transition-all cursor-pointer"
              onClick={() => toggleQuestion(index)}
            >
              <h3 className="text-xl font-bold text-white flex justify-between items-center">
                {faq.question}
                <span
                  className={`ml-4 transform transition-transform ${
                    openQuestion === index ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </h3>
              {openQuestion === index && (
                <p className="text-sm text-gray-300 mt-4 text-left">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Social Media and Call-to-Action */}
      <div className="container mx-auto px-4">
        {/* Social Media Icons */}
        <div className="flex gap-4 justify-center mt-6">
          <a href="https://discord.com/invite/jscommunity" className="text-white hover:text-red-500" target="_blank" rel="noopener noreferrer" aria-label="Visit us on Discord">
            <Image src={DiscordLogo} alt="Discord" width={24} height={24} />
          </a>
          <a href="https://www.tiktok.com/@j.wdv" className="text-white hover:text-red-500" target="_blank" rel="noopener noreferrer" aria-label="Visit us on TikTok">
            <Image src={TikTokLogo} alt="TikTok" width={24} height={24} />
          </a>
          <a href="https://www.instagram.com/1jwds" className="text-white hover:text-red-500" target="_blank" rel="noopener noreferrer" aria-label="Visit us on Instagram">
            <Image src={InstagramLogo} alt="Instagram" width={24} height={24} />
          </a>
        </div>

        {/* Footer Text */}
        <p className="mt-6 text-center break-words px-4 text-white">
          &copy; Jawad's Method. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
