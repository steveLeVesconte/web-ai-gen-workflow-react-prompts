import React, { useState, useEffect } from 'react';
import { projectDataService } from '../services/ProjectDataService';
import ProjectList from '../components/ProjectList';
import '../styles/projects.css';

const ProjectListPage: React.FC = () => {
  const [projects, setProjects] = useState(projectDataService.getPagedProjects(1));
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const loadMoreProjects = () => {
    const nextPage = currentPage + 1;
    const newProjects = projectDataService.getPagedProjects(nextPage);
    if (newProjects.length > 0) {
      setProjects([...projects, ...newProjects]);
      setCurrentPage(nextPage);
    } else {
      setHasMore(false);
    }
  };

  return (
    <div className="project-list-page">
      <h1>My Projects</h1>
      <p className="intro-paragraph">
        Explore a collection of my latest projects, showcasing my skills in web development and design.
      </p>
      <ProjectList projects={projects} />
      {hasMore && (
        <button className="show-more-button" onClick={loadMoreProjects}>
          Show More
        </button>
      )}
    </div>
  );
};

export default ProjectListPage;
