import React from "react";
import { Navbar } from "./Components/Navbar";
import Home from "./Components/Home";
import { AnimatePresence } from "framer-motion";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  useLocation,
  useHistory,
} from "react-router-dom";

import "../src";
import { MyProjects } from "./Components/MyProjects";
import { InitialTransition } from "./Components/InitialTransition";
function App() {
  const location = useLocation();

  return (
    <>
      {" "}
      <div className="max-h-full flex flex-col bg-bg">
        <Navbar>{["Home", "Works", "Contacts"]}</Navbar>
        <AnimatePresence>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={MyProjects} />
          </Switch>
        </AnimatePresence>
      </div>{" "}
    </>
  );
}

export default App;
