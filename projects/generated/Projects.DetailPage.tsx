import React, { lazy, Suspense } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projectDataService } from '../services/ProjectDataService';
import Layout from '../components/Layout';

const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const ProjectPage = lazy(() => import(`../pages/ProjectPage${id}.tsx`));

  const handleNext = () => {
    const nextId = projectDataService.getNextProjectId(id || '');
    navigate(`/project/${nextId}`);
  };

  const handlePrevious = () => {
    const prevId = projectDataService.getPreviousProjectId(id || '');
    navigate(`/project/${prevId}`);
  };

  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <ProjectPage />
      </Suspense>
      <div className="navigation-buttons">
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </Layout>
  );
};

export default ProjectDetailPage;