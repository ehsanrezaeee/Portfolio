"use client";

import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{
        duration: 2,
      }}
      whileInView={{
        opacity: 1,
      }}
      className="h-screen flex overflow-hidden relative flex-col md:flex-row justify-evenly
  max-w-full mx-auto items-center z-0"
    >
      <h3 className="absolute top-16 uppercase text-gray-500 text-2xl">
        پروژه‌ها
      </h3>
      <div
        className="flex w-full relative overflow-y-hidden overflow-x-scroll snap-x snap-mandatory
      z-20 scrollbar scrollbar-track-gray-400/20
      scrollbar-thumb-[#F7AB0A]/80"
      >
        {projects.map((project, i) => {
          return (
            <div
              key={i}
              className="w-screen flex-shrink-0 flex flex-col snap-center items-center
          justify-center h-screen p-20 md:p-44 "
            >
              <img
                src="https://imageio.forbes.com/specials-images/imageserve/637b1d11729a96ce28ea598c/The-Top-10-Tech-Trends-In-2023-Everyone-Must-Be-Ready-For/960x0.jpg"
                alt=""
              />
              <div>
                <h4 className="text-3xl text-center font-semibold">
                  {i + 1} پروژه شماره
                </h4>
                <p className="text-lg md:text-left text-center">
                  اطلاعاتی در مورد پروژه
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="absolute top-[30%] w-full bg-[#F7AB0A]/10 left-0 h-[400px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
