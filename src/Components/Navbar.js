import React from "react";
import picture from "../picture.png";
import { motion } from "framer-motion";
import github from "../assets/github.svg";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";
import arrow from "../assets/arrow.svg";
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
      <div className="text-primary text-2xl font-black italic border-r border-b border-primary w-16 pl-2  pr-6 py-3 ">
        MB
      </div>
      <div className=" xl:w-2/5 w-screen flex xl:justify-start justify-evenly w flex-row items-center border-b border-r border-primary">
        <a className=" xl:px-8 xl:px-4 " href="http://www.github.com/Jidmaa">
          <img className="text-primary" src={github} alt="github" />
        </a>
        <a
          className="xl:px-8  xl:px-4 "
          href="http://www.twitter.com/MajidBenhenneda"
        >
          <img src={twitter} alt="twitter" />
        </a>
        <a className="xl:px-8 xl:px-4 " href="htpp://www.linkedin.com">
          <img src={linkedin} alt="linkedin" />
        </a>
      </div>
      <div className="xl:flex xl:text-xl justify-evenly  text-lg flex-grow hidden items-center border-b border-primary">
        <span className=" cursor-pointer ml-auto  font-normal text-primary">
          Home
        </span>
        <span className=" ml-auto cursor-pointer hover:text-primary font-normal">
          {" "}
          Projects{" "}
        </span>
        <span className="  ml-auto cursor-pointer hover:text-primary font-normal">
          About
        </span>
        <span className=" ml-auto cursor-pointer hover:text-primary font-normal">
          {" "}
          Contact{" "}
        </span>
        <div className="ml-auto flex items-center px-8 font-bold ">
          majidbenhenneda@gmail.com
          <img className="pl-2" src={arrow} alt="arrow" />
        </div>
      </div>
    </div>
  );
};
