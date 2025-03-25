import React from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <div className="project-container">
      <h1 className="projects-header">
        SELECT <span className="span-projects">PROJECTS</span>
      </h1>
      <div className="card-collection">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}

export default Projects;
