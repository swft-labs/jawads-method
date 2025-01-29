"use client";

import stanford from "@/assets/stanford.png";
import usc from "@/assets/usc_final.png";
import nih from "@/assets/nih-rmb.png";
import mnt from "@/assets/mnt-rmb.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const LogoTicker = () => {
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
            className="flex items-center gap-14 flex-none pr-14"
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
            {/* First set of logos */}
            <div className="h-20 w-40 relative">
              <Image
                src={stanford}
                alt="Stanford Logo"
                className="object-contain"
                fill
                sizes="160px"
              />
            </div>
            <div className="h-20 w-40 relative">
              <Image
                src={usc}
                alt="USC Logo"
                className="object-contain"
                fill
                sizes="160px"
              />
            </div>
            <div className="h-20 w-40 relative">
              <Image
                src={nih}
                alt="NIH Logo"
                className="object-contain"
                fill
                sizes="160px"
              />
            </div>
            <div className="h-20 w-40 relative">
              <Image
                src={mnt}
                alt="MNT Logo"
                className="object-contain"
                fill
                sizes="160px"
              />
            </div>
            
            {/* Repeated set of logos */}
            <div className="h-20 w-40 relative">
              <Image
                src={stanford}
                alt="Stanford Logo"
                className="object-contain"
                fill
                sizes="160px"
              />
            </div>
            <div className="h-20 w-40 relative">
              <Image
                src={usc}
                alt="USC Logo"
                className="object-contain"
                fill
                sizes="160px"
              />
            </div>
            <div className="h-20 w-40 relative">
              <Image
                src={nih}
                alt="NIH Logo"
                className="object-contain"
                fill
                sizes="160px"
              />
            </div>
            <div className="h-20 w-40 relative">
              <Image
                src={mnt}
                alt="MNT Logo"
                className="object-contain"
                fill
                sizes="160px"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
