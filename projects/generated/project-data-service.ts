import { Project } from '../models/Project';

class ProjectDataService {
  private projects: Project[] = [
    // ... (existing projects)
    {
      id: '4',
      title: 'Social Media Dashboard',
      listPageDescription: 'A comprehensive social media analytics dashboard with real-time data visualization.',
      homePageDescription: 'Developed a powerful social media analytics tool using React and D3.js.',
      listPageImageUrl: 'https://picsum.photos/1200/600?random=7',
      homePageImageUrl: 'https://picsum.photos/1200/600?random=8',
      isFeatured: true,
      projectDate: new Date('2023-11-05'),
      isHidden: false,
      featureOrder: 4
    },
    // ... (add more projects to have at least 12 items)
  ];

  getFeaturedProjects(): Project[] {
    return this.projects
      .filter(project => project.isFeatured && !project.isHidden)
      .sort((a, b) => (a.featureOrder || 0) - (b.featureOrder || 0));
  }

  getAllProjects(): Project[] {
    return this.projects.filter(project => !project.isHidden);
  }

  getProjectById(id: string): Project | undefined {
    return this.projects.find(project => project.id === id);
  }

  getPagedProjects(page: number, pageSize: number = 6): Project[] {
    const startIndex = (page - 1) * pageSize;
    return this.projects
      .filter(project => !project.isHidden)
      .sort((a, b) => b.projectDate.getTime() - a.projectDate.getTime())
      .slice(startIndex, startIndex + pageSize);
  }

  getNextProject(currentId: string): Project | undefined {
    const currentIndex = this.projects.findIndex(project => project.id === currentId);
    return this.projects[currentIndex + 1];
  }

  getPreviousProject(currentId: string): Project | undefined {
    const currentIndex = this.projects.findIndex(project => project.id === currentId);
    return this.projects[currentIndex - 1];
  }
}

export const projectDataService = new ProjectDataService();
