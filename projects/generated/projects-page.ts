import React, { useState, useEffect } from 'react';
import ProjectList from './ProjectList';
import { projectDataService } from '../services/ProjectDataService';
import { Project } from '../models/Project';

const ProjectsPage: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = () => {
    const newProjects = projectDataService.getPagedProjects(page);
    if (newProjects.length === 0) {
      setHasMore(false);
    } else {
      setProjects([...projects, ...newProjects]);
      setPage(page + 1);
    }
  };

  return (
    <main className="projects-page">
      <h1>Steve LeVesconte's Portfolio</h1>
      <p className="intro-paragraph">
        Welcome to my portfolio. Here you'll find a collection of my recent projects, 
        showcasing my skills in web development and design.
      </p>
      <ProjectList projects={projects} />
      {hasMore && (
        <div className="show-more-container">
          <button className="button" onClick={loadProjects}>Show More</button>
        </div>
      )}
    </main>
  );
};

export default ProjectsPage;