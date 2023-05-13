"use client";

import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{
        duration: 1,
      }}
      whileInView={{
        opacity: 1,
      }}
      className="flex flex-col h-screen relative text-center md:text-left 
    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-16 uppercase text-gray-500 text-xl">
        درباره من
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        src="https://i.ibb.co/tZ3N03X/photo-2023-05-13-18-48-37.jpg"
        alt="ehsan rezaee"
        className="md:mb-0 rounded-full object-cover h-[150px] mt-28 mb-4 md:rounded-lg md:h-64
        md:h-95 xl:h-[500px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-xl font-semibold">زمینه‌های فعالیت من</h4>
        <p className="text-sm">
          Proin sagittis nisl rhoncus mattis rhoncus urna neque. Malesuada
          bibendum arcu vitae elementum curabitur vitae nunc sed velit. Ipsum
          dolor sit amet consectetur adipiscing elit. Posuere ac ut consequat
          semper viverra nam libero justo. In cursus turpis massa tincidunt.
          Ipsum suspendisse ultrices gravida dictum fusce ut. Pellentesque nec
          nam aliquam sem et tortor consequat id porta. Gravida dictum fusce ut
          placerat orci nulla. Lectus urna duis convallis convallis. Non odio
          euismod lacinia at quis risus sed vulputate. Vitae auctor eu augue ut
          lectus arcu bibendum at.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
