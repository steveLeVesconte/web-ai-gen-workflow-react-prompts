import React, { Suspense } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projectDataService } from '../services/ProjectDataService';

const ProjectContainerPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projectDataService.getProjectById(id || '');

  if (!project) {
    return <div>Project not found</div>;
  }

  const ProjectPage = React.lazy(() => import(`./projects/ProjectPage${id}.tsx`));

  const goToNextProject = () => {
    const nextProject = projectDataService.getNextProject(id || '');
    if (nextProject) {
      navigate(`/project/${nextProject.id}`);
    }
  };

  const goToPreviousProject = () => {
    const prevProject = projectDataService.getPreviousProject(id || '');
    if (prevProject) {
      navigate(`/project/${prevProject.id}`);
    }
  };

  return (
    <div className="project-container">
      <Suspense fallback={<div>Loading...</div>}>
        <ProjectPage />
      </Suspense>
      <div className="navigation-buttons">
        <button onClick={goToPreviousProject} disabled={!projectDataService.getPreviousProject(id || '')}>
          Previous
        </button>
        <button onClick={goToNextProject} disabled={!projectDataService.getNextProject(id || '')}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ProjectContainerPage;
