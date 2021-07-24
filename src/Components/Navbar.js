import React from "react";
import picture from "../picture.png";
import { motion } from "framer-motion";
import github from "../assets/github.svg";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";
export const Navbar = ({ children }) => {
  const line1 = "Majid ";
  const line2 = "Benhenneda";

  const sentence = {
    initial: { opacity: 1 },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.1,
        staggerChildren: 0.2,
      },
    },
  };
  const letter = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
    },
  };
  const navLetters = {
    animate: { y: -25 },
    initial: { y: 0 },
  };
  const navSentence = {
    animate: {
      transition: { delay: 1.2, staggerChildren: 1.2 },
    },
    initial: { opacity: 1 },
  };
  return (
    <div className="bg-bg  w-screen h-max flex  text-text">
      <div className="text-primary text-2xl font-black italic border-r border-b border-primary w-max   px-2 py-3 ">
        MB
      </div>
      <div className=" w-2/5 flex space-between w flex-row items-center border-b border-r border-primary">
        <a className="px-8" href="http://www.github.com/Jidmaa">
          <img src={github} alt="github" />
        </a>
        <a className="px-8" href="http://www.twitter.com/MajidBenhenneda">
          <img src={twitter} alt="twitter" />
        </a>
        <a className="px-8" href="htpp://www.linkedin.com">
          <img src={linkedin} alt="linkedin" />
        </a>
      </div>
      <div className=" flex-grow flex items-center border-b border-primary">
        <span className="text-xl px-8 font-normal text-primary"> Home </span>
        <span className="text-xl px-8 font-normal"> Projects </span>
        <span className="text-xl px-8 font-normal"> About me </span>
        <span className="text-xl px-8 font-normal"> Contact me </span>
        <span className="ml-auto px-8 "> madjibenhenneda@gmail.com</span>
      </div>
    </div>
  );
};
