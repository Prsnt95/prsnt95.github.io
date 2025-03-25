import React from "react";
import "./ProjectCard.css";
import campuskit from "../../assets/projects/campuskit.png"


function ProjectCard() {
  return (
    <div className="card-container">
      <img src={campuskit} className="project-img"></img>
      <div className="project-discription">Hello</div>
    </div>
  );
}

export default ProjectCard;
