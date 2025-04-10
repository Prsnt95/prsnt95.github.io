import React from "react";
import "./ProjectCard.css";

function ProjectCard({ data }) {
  return (
    <div className="card-container">
      <img
        src={data.image || "/default-image.jpg"} // Fallback image
        alt={data.name}
        className="project-img"
      />
      <div className="project-description">
        <h3>{data.name}</h3>
        <p>{data.description}</p>
        <p>
          <strong>Tools:</strong> {data.tools.join(", ")}
        </p>
        <a href={data.repository} target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
        <p>
          <a href={data.live} target="_blank" rel="noopener noreferrer">
            Demo
          </a>
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;
