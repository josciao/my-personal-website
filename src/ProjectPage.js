// src/ProjectPage.js
import React from "react";
import { useParams } from "react-router-dom";
import portfolioData from "./portfolioData";

function ProjectPage() {
  const { projectId } = useParams();
  const project = portfolioData.find((item) => item.id === projectId);

  if (!project) return <div>找不到该项目</div>;

  return (
    <div className="project-page">
      <h2>{project.title}</h2>
      <img className="project-image" src={project.image} alt={project.title} />
      <p>{project.description}</p>
      <ul className="tag-list">
        {project.tags.map((tag, index) => (
          <li key={index} className="tag">{tag}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectPage;