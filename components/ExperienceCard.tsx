import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article
      className="flex flex-col flex-shrink-0 space-y-7 items-center rounded-lg w-[500px]
    md:w-[600px] xl:w-[900px] snap-center p-10 bg-[#292929] hover:opacity-100 opacity-40
    cursor-pointer overflow-hidden transition-opacity duration-200"
    >
      <motion.img
        initial={{
          y: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="h-32 rounded-full object-cover object-center"
        src="https://img.freepik.com/premium-photo/single-orange-fruit-isolated-white-healthy-food_194646-1704.jpg?w=2000"
        alt="1"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-2xl font-light">Freelancer</h4>
        <p className="font-bold text-xl mt-1">My own man</p>
        <div className="flex space-x-2 my-2">
          <Image
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
            alt="tech"
            className="rounded-full "
            width={40}
            height={40}
          />
          <Image
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
            alt="tech"
            className="rounded-full "
            width={40}
            height={40}
          />
          <Image
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
            alt="tech"
            className="rounded-full "
            width={40}
            height={40}
          />
        </div>
        <p className="py-5 uppercase text-gray-300">اومدم کار کنم ...</p>
        <ul className="list-disc text-lg ml-5 space-y-4">
          <li>summary</li>
          <li>summary</li>
          <li>summary</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
