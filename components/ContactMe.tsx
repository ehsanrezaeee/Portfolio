"use client";
import React from "react";
import { motion } from "framer-motion";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
type Props = {};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => console.log(formData);
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
      className="h-screen flex relative flex-col md:flex-row justify-evenly
max-w-full mx-auto items-center"
    >
      <h3 className="absolute top-16 uppercase text-gray-500 text-2xl">تماس</h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-center font-semibold text-2xl">
          من میتونم در زمینه طراحی فرانت کمک کنم. اگر نیاز دارید تماس بگیرید
        </h4>
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="h-7 w-7 animate-pulse text-[#F7AB0A]" />
            <p>+989302220211</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="h-7 w-7 animate-pulse text-[#F7AB0A]" />
            <p>123 lane</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="h-7 w-7 animate-pulse text-[#F7AB0A]" />
            <p>ehsanrezaee@hotmail.com</p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col mx-auto space-y-2 w-fit"
          >
            <div className="flex space-x-2">
              <input
                {...register("name")}
                placeholder="نام"
                className="contact-info"
                type="text"
              />
              <input
                {...register("email")}
                placeholder="ایمیل"
                className="contact-info"
                type="email"
              />
            </div>
            <input
              {...register("subject")}
              placeholder="موضوع"
              className="contact-info"
              type="text"
            />
            <textarea
              {...register("message")}
              placeholder="پیام"
              className="contact-info"
            />
            <button className="bg-[#F7AB0A] text-lg font-bold rounded-md text-black py-5 px-10">
              submit
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}

export default ContactMe;
