"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
};

function Skill({ directionLeft }: Props) {
  return (
    <div className="flex relative cursor-pointer group">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        src="https://seeklogo.com/images/N/next-js-logo-7929BCD36F-seeklogo.com.png"
        alt=""
        className="rounded-full border border-gray-500 object-cover h-24 w-24 md:h-28 md:w-28 xl:w-32 xl:h-32
        filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div
        className="absolute opacity-0 group-hover:opacity-80 transition duration-300
      ease-in-out group-hover:bg-white h-24 w-24 rounded-full z-0 md:h-28 md:w-28 xl:w-32 xl:h-32"
      >
        <div className="flex items-center justify-center h-full">
          <p className="text-xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
