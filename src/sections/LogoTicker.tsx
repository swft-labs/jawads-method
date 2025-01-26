"use client";

import stanford from "@/assets/stanford.png";
import usc from "@/assets/usc_final.png";
import nih from "@/assets/nih-rmb.png";
import mnt from "@/assets/mnt-rmb.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  // Define dimensions for each logo
  const logoDimensions = {
    stanford: { width: "w-32", height: 130 }, // Tailwind width class for Stanford logo
    usc: { width: "w-28", height: 100 },
    nih: { width: "w-36", height: 160 }, 
    mnt: { width: "w-40", height: 20 }, 
  };

  return (
    <div className="py-16 md:py-20 bg-gradient-to-r from-[#221616] via-[#0e0c0c] to-[#221616] backdrop-blur-sm">
      <div className="container">
        {/* Header text above the logos */}
        <div className="text-center mb-6">
          <h3 className="text-white text-4xl font-semibold">
            BASED ON RESEARCH BY
          </h3>
        </div>

        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image
              src={stanford}
              alt="Stanford Logo"
              className={`logo-ticker-image ${logoDimensions.stanford.width}`}
            />
            <Image
              src={usc}
              alt="USC Logo"
              className={`logo-ticker-image ${logoDimensions.usc.width}`}
            />
            <Image
              src={nih}
              alt="NIH Logo"
              className={`logo-ticker-image ${logoDimensions.nih.width}`}
            />
            <Image
              src={mnt}
              alt="MNT Logo"
              className={`logo-ticker-image ${logoDimensions.mnt.width}`}
            />
            {/* Repeating Logos */}
            <Image
              src={stanford}
              alt="Stanford Logo"
              className={`logo-ticker-image ${logoDimensions.stanford.width}`}
            />
            <Image
              src={usc}
              alt="USC Logo"
              className={`logo-ticker-image ${logoDimensions.usc.width}`}
            />
            <Image
              src={nih}
              alt="NIH Logo"
              className={`logo-ticker-image ${logoDimensions.nih.width}`}
            />
            <Image
              src={mnt}
              alt="MNT Logo"
              className={`logo-ticker-image ${logoDimensions.mnt.width}`}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
