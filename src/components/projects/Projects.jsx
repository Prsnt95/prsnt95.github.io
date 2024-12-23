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
        <div className="card-collection-inner">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </div>
  );
}

export default Projects;
