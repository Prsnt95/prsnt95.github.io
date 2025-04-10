import "./App.css";
import Content from "./pages/content/Content";
import Navbar from "./pages/navbar/Navbar";
import Projects from "./pages/projects/Projects";
import Skills from "./pages/skills/Skills";
import Contact from "./pages/contact/Contact";
// import FluidCursor from "./utils/FluidCursor";
// import { useEffect, useRef } from "react";
// import { motion } from "framer-motion";
import FollowCursor from "./utils/FollowCursor";

function App() {
  return (
    <div className="App">
      <FollowCursor />
      <Navbar />

      <div className="contentSection">
        <div id="home" className="page">
          <Content />
        </div>
        <div id="projects" className="page projects_page">
          <Projects />
        </div>
        <div id="tools" className="page">
          <Skills />
        </div>
        <div id="contact" className="page">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
