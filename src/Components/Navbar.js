import React from "react";
import picture from "../picture.png";
export const Navbar = ({ children }) => {
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
              <h1 className="text-white text-7xl font-bold"> Majid</h1>
              <h1 className="text-white text-7xl font-bold"> Benhenneda </h1>
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
                {" "}
                Software engineer and developer, I love to code and make your
                ideas come true.{" "}
              </div>
              <span className="text-inverted text-md">
                {" "}
                Young and passionate about everything tech and code, I am eager
                to learn on a daily basis. What I love the most is making an
                idea come true, so if you have any projects, don't hesitate to
                contact me.
              </span>
            </div>
            <div className="circle "> </div>
          </div>
        </div>
      </div>
    </div>
  );
};
