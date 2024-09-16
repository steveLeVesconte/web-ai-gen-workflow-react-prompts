import { Project } from '../models/Project';

class ProjectDataService {
  private projects: Project[] = [
    // ... (your existing projects)
  ];

  private getVisibleProjects(): Project[] {
    return this.projects
      .filter(project => !project.isHidden)
      .sort((a, b) => (a.featureOrder || 0) - (b.featureOrder || 0));
  }

  getFeaturedProjects(): Project[] {
    return this.getVisibleProjects().filter(project => project.isFeatured);
  }

  getAllProjects(): Project[] {
    return this.getVisibleProjects();
  }

  getProjectById(id: string): Project | undefined {
    return this.projects.find(project => project.id === id);
  }

  getPagedProjects(page: number, pageSize: number = 6): Project[] {
    const visibleProjects = this.getVisibleProjects();
    const startIndex = (page - 1) * pageSize;
    return visibleProjects.slice(startIndex, startIndex + pageSize);
  }

  getNextProjectId(currentId: string): string {
    const visibleProjects = this.getVisibleProjects();
    const currentIndex = visibleProjects.findIndex(project => project.id === currentId);
    if (currentIndex === -1) return visibleProjects[0].id;
    return visibleProjects[(currentIndex + 1) % visibleProjects.length].id;
  }

  getPreviousProjectId(currentId: string): string {
    const visibleProjects = this.getVisibleProjects();
    const currentIndex = visibleProjects.findIndex(project => project.id === currentId);
    if (currentIndex === -1) return visibleProjects[visibleProjects.length - 1].id;
    return visibleProjects[(currentIndex - 1 + visibleProjects.length) % visibleProjects.length].id;
  }
}

export const projectDataService = new ProjectDataService();