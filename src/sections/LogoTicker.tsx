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
    stanford: { width: 270, height: 130 }, // Custom size for Stanford logo
    nih: { width: 280, height: 160 }, // Custom size for NIH logo
    mnt: { width: 300, height: 20 }, // Custom size for MNT logo
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
              width={logoDimensions.stanford.width}
              height={logoDimensions.stanford.height}
              className="logo-ticker-image"
            />
            <Image
              src={usc}
              alt="USC Logo"
              style={{ objectFit: "fill" }} // Forces the image to stretch
            />
            <Image
              src={nih}
              alt="NIH Logo"
              width={logoDimensions.nih.width}
              height={logoDimensions.nih.height}
              className="logo-ticker-image"
            />
            <Image
              src={mnt}
              alt="MNT Logo"
              width={logoDimensions.mnt.width}
              height={logoDimensions.mnt.height}
              className="logo-ticker-image"
            />
            <Image
              src={stanford}
              alt="Stanford Logo"
              width={logoDimensions.stanford.width}
              height={logoDimensions.stanford.height}
              className="logo-ticker-image"
            />
            <Image
              src={usc}
              alt="USC Logo"
              style={{ objectFit: "fill" }} // Forces the image to stretch
            />
            <Image
              src={nih}
              alt="NIH Logo"
              width={logoDimensions.nih.width}
              height={logoDimensions.nih.height}
              className="logo-ticker-image"
            />
            <Image
              src={mnt}
              alt="MNT Logo"
              width={logoDimensions.mnt.width}
              height={logoDimensions.mnt.height}
              className="logo-ticker-image"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
