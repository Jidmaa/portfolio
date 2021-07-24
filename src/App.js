import React from "react";
import { Navbar } from "./Components/Navbar";
import "../src";
function App() {
  return (
    <>
      {" "}
      <div className="h-screen bg-bg">
        <Navbar>{["Home", "Works", "Contacts"]}</Navbar>{" "}
      </div>{" "}
    </>
  );
}

export default App;
