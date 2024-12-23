import "./App.css";
import Content from "./components/content/Content";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="contentSection">
        <Content />
        <Projects />
        <Skills />
      </div>
    </div>
  );
}

export default App;
