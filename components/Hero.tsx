"use client";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import React from "react";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "سلام بازدیدکنندگان گرامی، احسان هستم",
      "من با تایپ اسکریپت کد میزنم",
      "به پورتفوی من خوش آمدید",
    ],
    loop: true,
    delaySpeed: 3000,
  });

  return (
    <div className=" h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden ">
      <BackgroundCircles />
      <Image
        src="https://i.ibb.co/Q8L289t/photo-2023-04-07-06-50-32.jpg"
        alt="my-image"
        className="relative rounded-full mx-auto object-cover"
        width={200}
        height={200}
      />
      <div className="z-20">
        <h2 className="text-sm uppercase tracking-[15px] pb-2 text-gray-500">
          Javascript Developer
        </h2>
        <h1 className="text-xl lg:text-2xl font-semibold  px-10">
          <Cursor cursorColor="red" />
          <span className="mr-3">{text}</span>
        </h1>
        <div className="pt-3">
          <button
            className="heroButton"
            onClick={() => {
              const aboutSection = document.getElementById("about");
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            درباره من
          </button>
          <button
            className="heroButton"
            onClick={() => {
              const aboutSection = document.getElementById("experience");
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            تجربه‌ها
          </button>
          <button className="heroButton">مهارت‌ها</button>
          <button className="heroButton">پروژه‌ها</button>
        </div>
      </div>
    </div>
  );
}
