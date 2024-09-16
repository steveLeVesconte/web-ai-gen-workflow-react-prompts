import React from 'react';
import ProjectRow from './ProjectRow';
import { Project } from '../models/Project';

interface ProjectListProps {
  projects: Project[];
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  return (
    <div className="project-list">
      {projects.map((project) => (
        <ProjectRow key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;