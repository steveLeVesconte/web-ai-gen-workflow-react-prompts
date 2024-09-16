import React from 'react';
import ProjectCard from './ProjectCard';
import { Project } from '../models/Project';

interface ProjectCardListProps {
  projects: Project[];
}

const ProjectCardList: React.FC<ProjectCardListProps> = ({ projects }) => {
  return (
    <div className="project-card-list">
      <h2>Featured Projects</h2>
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </div>
  );
};

export default ProjectCardList;
