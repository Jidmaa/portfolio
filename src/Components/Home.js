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
        <div className=" xl:w-2/5 w-screen text-text flex  justify-evenly w flex-row items-center border-b border-r border-primary">
          cc
        </div>
      </div>
    </>
  );
}
