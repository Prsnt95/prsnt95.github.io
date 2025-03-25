import "./App.css";
import Content from "./pages/content/Content";
import Navbar from "./pages/navbar/Navbar";
import Projects from "./pages/projects/Projects";
import Skills from "./pages/skills/Skills";

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
