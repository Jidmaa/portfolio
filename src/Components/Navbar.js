import React from "react";
export const Navbar = ({ children }) => {
  return (
    <div className="font-sans bg-primary h-screen box-border px-40 pt-16">
      <div className="flex justify-around w-1/4 ">
        {children.map((child, index) => (
          <h1
            className={`font-semibold text-white text-2xl ${
              index === 0 ? null : "opacity-50"
            } `}
            key={index}
          >
            {child}
            <span
              className={`text-${index === 0 ? "secondary" : "white"} text-5xl`}
            >
              .
            </span>
          </h1>
        ))}
      </div>
    </div>
  );
};
