import React from 'react';
import ProjectCardList from '../components/ProjectCardList';
import { projectDataService } from '../services/ProjectDataService';

const HomePage: React.FC = () => {
  const featuredProjects = projectDataService.getFeaturedProjects();

  return (
    <div className="home-content">
      <div className="hero-image">
        <img src="https://picsum.photos/1600/900" alt="Developer at work" />
      </div>
      <h1>John Doe's Portfolio</h1>
      <p>
        Welcome to my portfolio! I'm a passionate full-stack developer with expertise in 
        React, Node.js, and modern web technologies. Below you'll find some of my featured projects.
      </p>
      <ProjectCardList projects={featuredProjects} />
    </div>
  );
};

export default HomePage;
