import React from 'react';
import { Project } from '../models/Project';

interface ProjectRowProps {
  project: Project;
}

const ProjectRow: React.FC<ProjectRowProps> = ({ project }) => {
  return (
    <div className="project-row">
      <div className="project-text">
        <h3>{project.title}</h3>
        <p className="project-date">{project.projectDate.toLocaleDateString()}</p>
        <p>{project.listPageDescription}</p>
        <a href={`/project/${project.id}`} className="button">Learn More</a>
      </div>
      <div className="project-image">
        <div className="aspect-ratio-box">
          <img src={project.listPageImageUrl} alt={project.title} />
        </div>
      </div>
    </div>
  );
};

export default ProjectRow;