import React from "react";
import { Navbar } from "./Components/Navbar";
import Home from "./Components/Home";
import "../src";
function App() {
  return (
    <>
      {" "}
      <div className="h-screen flex flex-col bg-bg">
        <Navbar>{["Home", "Works", "Contacts"]}</Navbar> <Home />
      </div>{" "}
    </>
  );
}

export default App;
