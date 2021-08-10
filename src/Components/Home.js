import button from "../assets/button.svg";
import robot from "../assets/robot.svg";
import circle from "../assets/circle.svg";

export default function Home() {
  return (
    <>
      <div className="flex flex-row w-screen">
        <div className="text-text h-full  w-16">
          <div
            style={{
              writingMode: "vertical-lr",
              transform: "rotate(-180deg)",
              height: "calc(100vh - 57px)",
            }}
            className="text-text flex flex-row items-center justify-around text-2xl font-black border-l border-primary w-16 px-2 py-3  "
          >
            <div className="lg:text-2xl text-xl">
              {" "}
              I'm Majid Benhenneda, call me Jidma{" "}
            </div>
            <div className="lg:text-3xl text-xl "> 1.0 </div>
          </div>
        </div>
        <div className="flex-col py-8 px-14 xl:w-2/5 w-screen text-text flex justify-between flex-row  border-b border-r border-primary">
          <h1 className="text-5xl  ">
            I make good looking websites that give that
            <span className="text-primary font-bold"> WOAH </span> factor.
          </h1>
          <div>
            <div className="flex flex-row text-4xl font-extrabold italic justify-between uppercase">
              <span> excellence </span> <span>is </span>
            </div>
            <div className="py-2">
              Let's read between the lines shall we ? if you didn't get my name
              yet, I'm Majid Benhenneda.
            </div>
            <span className="text-4xl font-extrabold italic  uppercase">A</span>
            <div className="px-8 text-4xl font-extrabold italic  uppercase">
              HABIT
            </div>
          </div>
          <div>
            I am a software engineer and a front-end developer, always striving
            to get the most out of the projects I work on, I love collaborating
            on exciting works and contribute{" "}
          </div>
          <div className="ml-auto px-8 flex flex-row items-center">
            Check out my projects !{" "}
            <img className="px-8" src={button} alt="button" />
          </div>
          <div className="flex justify-between">
            <div className="flex  w-2/5 flex-row">
              <div className="text-6xl font-extrabold text-primary pr-6">
                {" "}
                3{" "}
              </div>
              <div> Years of thambir in thambir land </div>
            </div>
            <div className="flex w-2/5 flex-row">
              <div className="text-6xl font-extrabold text-primary pr-6">
                {" "}
                8{" "}
              </div>
              <div> Projects in productions </div>
            </div>
            <div className="flex w-2/5 flex-row">
              <div className="text-6xl  font-extrabold text-primary pr-6">
                4
              </div>
              <div> Bruh of bruh to the burh bruh </div>
            </div>
          </div>
        </div>
        <div className="text-text h-max relative flex items-center w-55 justify-center ">
          <div className="mycircles ">
            <div>
              {" "}
              <img src={robot} className="robot" alt="robot" />{" "}
            </div>
            <div className="text-3xl  contained">
              {" "}
              Let's automate your workflow :-){" "}
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
}
