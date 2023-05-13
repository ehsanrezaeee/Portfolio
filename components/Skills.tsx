"use client";
import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {};

function Skills({}: Props) {
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
      className="flex flex-col min-h-screen relative text-center md:text-left
  md:flex-row max-w-[2000px] xl:px-10 justify-center mx-auto items-center xl:space-y-0"
    >
      <h3 className="absolute top-16 uppercase text-gray-500 text-2xl">
        مهارت‌ها
      </h3>
      <h3 className="absolute top-28 uppercase text-gray-500 text-sm">
        روی هر مهارت بروید تا سطح آن مشخص گردد
      </h3>
      <div className="grid grid-cols-4 gap-5">
        <Skill directionLeft={false} />
        <Skill directionLeft={false} />
        <Skill directionLeft={false} />
        <Skill directionLeft={false} />
        <Skill directionLeft={false} />
        <Skill directionLeft={false} />
        <Skill directionLeft={false} />
        <Skill directionLeft={false} />
        <Skill directionLeft={false} />
        <Skill directionLeft={false} />
      </div>
    </motion.div>
  );
}

export default Skills;
