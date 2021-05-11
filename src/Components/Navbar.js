import React from "react";
import picture from "../picture.png";
import { motion } from "framer-motion";
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
  return (
    <div className="bg-primary">
      <div className=" font-sans bg-picture bg-contain bg-left bg-no-repeat h-screen sm:px-0 lg:px-40 lg:w-screen w-max sm:w-max pt-16">
        <div className="flex justify-between w-full h-full">
          <div className="flex flex-col justify-between h-5/6 items-begin">
            <div className="flex justify-between  w-72">
              {children.map((child, index) => (
                <h1
                  className={`font-semibold text-white text-2xl ${
                    index === 0 ? null : "opacity-50"
                  } `}
                  key={index}
                >
                  {child}
                  <span
                    className={`text-${
                      index === 0 ? "secondary" : "white"
                    } font-extrabold text-2xl`}
                  >
                    .
                  </span>
                </h1>
              ))}
            </div>
            <div>
              <motion.h1
                initial="initial"
                variants={sentence}
                animate="animate"
                className="text-white text-7xl font-bold"
              >
                {line1.split("").map((char, index) => (
                  <motion.span key={char + "-" + index} variants={letter}>
                    {char}
                  </motion.span>
                ))}
                <br />
                {line2.split("").map((char, index) => (
                  <motion.span key={char + "-" + index} variants={letter}>
                    {char}
                  </motion.span>
                ))}
              </motion.h1>{" "}
            </div>
          </div>
          <div className="flex flex-col justify-around  h-full w-1/3  ">
            <h1 className=" font-semibold text-white text-2xl ">
              {" "}
              Majid<span className="text-secondary font-bold">/</span>B.
            </h1>
            <div className="flex flex-col justify-around h-3/5">
              {" "}
              <span className="text-inverted text-sm"> / THIS IS ME </span>{" "}
              <div className="text-white text-4xl">
                Software engineer and developer, I love to code and make your
                ideas come true.
              </div>
              <span className="text-inverted text-md">
                {" "}
                Young and passionate about everything tech and code, I am eager
                to learn on a daily basis. What I love the most is making an
                idea come true, so if you have any projects, don't hesitate to
                contact me.
              </span>
            </div>
            <div>
              <svg width="300" height="300">
                <circle cx="150" cy="150" r="100" fill="#3AAFC9" />
                <text
                  x="58%"
                  y="40%"
                  text-anchor="middle"
                  fill="white"
                  font-size="25px"
                  font-family="Arial"
                  dy=".3em"
                  className="transform rotate-12 "
                >
                  Web Developer
                </text>
                Sorry, your browser does not support inline SVG.
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
