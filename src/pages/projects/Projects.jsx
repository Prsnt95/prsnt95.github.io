import React from "react";
import "./Projects.css";
import ProjectCard from "./ProjectCard";
import projectData from "../../data/projectData.json";

function Projects() {
  return (
    <div className="projects-container">
      {" "}
      {/* Updated class name */}
      <div className="projects-header-container">
        {" "}
        {/* Updated class name */}
        <h1 className="projects-title">
          {" "}
          {/* Updated class name */}
          SELECT <span className="projects-highlight">PROJECTS</span>
        </h1>
        <p className="projects-subtitle">
          {" "}
          {/* Updated class name */}A showcase of some of my software
          development work.
        </p>
      </div>
      <div className="projects-description-container">
        {" "}
        {/* Updated class name */}
        <p className="projects-description">
          {" "}
          {/* Updated class name */}
          Here are some of the projects I have built, highlighting my skills in
          software development, full-stack engineering, and problem-solving.
        </p>
      </div>
      <div className="projects-card-collection">
        {projectData.projects.map((project) => (
          <ProjectCard key={project.id} data={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
