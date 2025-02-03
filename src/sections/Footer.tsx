"use client";

import React, { useState } from "react";
import Image from "next/image";
import DiscordLogo from "@/assets/discord - Copy.png"; // Replace with the path to your Discord logo
import TikTokLogo from "@/assets/tiktoklogo.webp"; // Replace with the path to your TikTok logo
import InstagramLogo from "@/assets/insta1.webp"; // Replace with the path to your Instagram logo

const Footer: React.FC = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqs = [
    { question: "Does THE METHOD guarantee results?", answer: "YES, if you're consistent. Regular commitment leads to gradual improvements, enhancing your appearance effectively. Remain committed for the greatest result!" },
    { question: "Can I talk to Jawad if I have THE METHOD?", answer: "Yes, you can! Jawad is available to answer questions and schedules at least one call with you to provide support." },
    { question: "I am done with puberty. Can I still get a glow up?", answer: "Yes, we can change anyone's appearance no matter what age they are." },
    { question: "If I'm a girl, would I benefit from THE METHOD?", answer: "Yes, it has no gender. We are currently giving many girls the glow up of their lives." },
    { question: "Can't I just Google all the things in THE METHOD?", answer: "We have compiled all the necessary web information on our server to save you time researching. Feel free to utilize this resource along with personalized advice from our experts, who are available to answer all your questions." },
    { question: "Do you offer refunds?", answer: "Yes, we offer refunds if you didn't get the desired results or didn't like the method, but only within the first 24 hours of the purchase." },
    { question: "Do I get to keep THE METHOD forever?", answer: "The method is a subscription that provides access to the Ultimate E-book, calls with Jawad, and discussions with influencers and fellow moggers. When the subscription ends, you lose access to the calls and discussions, but still have access to your notes of the book." },
  ];

  return (
    <footer className="bg-gradient-to-r from-[#221616] via-[#0e0c0c] to-[#221616] py-12">
      <div id="faq" className="container mx-auto px-4">
        {/* FAQ Section */}
        <div className="mb-24">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">
            GOT SOME QUESTIONS? <span className="text-red-500">WE HAVE THE ANSWERS!</span>
          </h2>
          <div className="max-w-5xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="p-6 bg-black bg-opacity-20 border border-[#333] rounded-3xl shadow-md transition-all cursor-pointer"
                onClick={() => toggleQuestion(index)}
              >
                <h3 className="text-xl font-bold text-white flex justify-between items-center">
                  {faq.question}
                  <span className={`ml-4 transform transition-transform ${openQuestion === index ? "rotate-180" : ""}`}>
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

        {/* Contact Section */}
        <div className="mx-auto max-w-5xl text-left text-white mb-24">
          <div className="text-left mb-6">
            <h2 className="text-4xl font-bold">HAVE A QUESTION?</h2>
            <h2 className="text-6xl font-bold">CONTACT US!</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white mb-2">Name</label>
                <input
                  type="text"
                  className="w-full p-3 bg-white bg-opacity-40 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full p-3 bg-white bg-opacity-40 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">Message</label>
                <textarea
                  className="w-full p-3 bg-white bg-opacity-40 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                  rows={4}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-red-400 bg-opacity-70 text-white font-bold rounded-lg hover:bg-red-600 transition"
              >
                Send
              </button>
            </form>
            <div className="space-y-4 text-2xl self-start">
              <p>
                <strong>FOR CORPORATIONS AND SPONSORSHIPS</strong>
                <br />
                business@jawadsmethod.com
              </p>
              <p>
                <strong>FOR GENERAL INQUIRIES</strong>
                <br />
                contact@jawadsmethod.com
              </p>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div id="socials" className="bg-black bg-opacity-25 border border-[#333] rounded-3xl shadow-lg mx-auto max-w-5xl p-8">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            FOLLOW THE METHOD THAT <span className="text-red-500">EVERYONE</span> HAS BEEN LOOKING FOR
          </h2>
          <div className="flex justify-center gap-6 mt-6">
            <a
              href="https://discord.com/invite/jscommunity"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit us on Discord"
              className="hover:opacity-80 transition"
            >
              <Image src={DiscordLogo} alt="Discord" width={48} height={48} />
            </a>
            <a
              href="https://www.tiktok.com/@j.wdv"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit us on TikTok"
              className="hover:opacity-80 transition"
            >
              <Image src={TikTokLogo} alt="TikTok" width={48} height={48} />
            </a>
            <a
              href="https://www.instagram.com/1jwds"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit us on Instagram"
              className="hover:opacity-80 transition"
            >
              <Image src={InstagramLogo} alt="Instagram" width={48} height={48} />
            </a>
          </div>
          <p className="mt-6 text-center text-gray-300">
            &copy; 2025 Jawad's Method. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
