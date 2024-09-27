import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../models/Project';

interface ProjectRowProps {
  project: Project;
}

const ProjectRow: React.FC<ProjectRowProps> = ({ project }) => {
  return (
    <div className="project-row">
      <div className="project-info">
        <h2>{project.title}</h2>
        <p className="project-date">{project.projectDate.toLocaleDateString()}</p>
        <p className="project-description">{project.listPageDescription}</p>
        <Link to={`/project/${project.id}`} className="learn-more-button">
          Learn More
        </Link>
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
