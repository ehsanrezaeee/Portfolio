import React from "react";
import { motion } from "framer-motion";

type Props = {};

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="border h-[200px] w-[200px] border-[#333333] animate-ping rounded-full mt-52 absolute" />
      <div className="border h-[300px] w-[300px] border-[#333333] animate-ping rounded-full mt-52 absolute" />
      <div className="border h-[500px] w-[500px] border-[#333333] animate-ping rounded-full mt-52 absolute" />
      <div className="border h-[650px] w-[650px] border-[#F7AB0A] animate-pulse rounded-full mt-52 absolute" />
      <div className="border h-[800px] w-[800px] border-[#333333] rounded-full mt-52 absolute" />
    </motion.div>
  );
};

export default BackgroundCircles;
