import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../models/Project';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`project-card ${isEven ? 'even' : 'odd'}`}>
      <div className="project-image" style={{ order: isEven ? 2 : 1 }}>
        <div className="aspect-ratio-box">
          <img src={project.homePageImageUrl} alt={project.title} />
        </div>
      </div>
      <div className="project-text" style={{ order: isEven ? 1 : 2 }}>
        <h3>{project.title}</h3>
        <p>{project.homePageDescription}</p>
        <Link to={`/projects/${project.id}`} className="btn-primary">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
