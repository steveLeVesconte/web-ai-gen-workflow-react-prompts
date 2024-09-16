import { Project } from '../models/Project';

class ProjectDataService {
  private projects: Project[] = [
    {
      id: '1',
      title: 'E-commerce Platform',
      listPageDescription: 'A full-featured e-commerce platform with user authentication, product management, and payment integration.',
      homePageDescription: 'Developed a scalable e-commerce solution using React and Node.js.',
      listPageImageUrl: 'https://picsum.photos/1200/600?random=1',
      homePageImageUrl: 'https://picsum.photos/1200/600?random=2',
      isFeatured: true,
      projectDate: new Date('2023-05-15'),
      isHidden: false,
      featureOrder: 1
    },
    {
      id: '2',
      title: 'Task Management App',
      listPageDescription: 'A collaborative task management application with real-time updates and team features.',
      homePageDescription: 'Built a responsive task manager using React and Firebase.',
      listPageImageUrl: 'https://picsum.photos/1200/600?random=3',
      homePageImageUrl: 'https://picsum.photos/1200/600?random=4',
      isFeatured: true,
      projectDate: new Date('2023-07-22'),
      isHidden: false,
      featureOrder: 2
    },
    {
      id: '3',
      title: 'Weather Forecast Dashboard',
      listPageDescription: 'An interactive weather dashboard with location-based forecasts and historical data visualization.',
      homePageDescription: 'Created a dynamic weather app using React and OpenWeatherMap API.',
      listPageImageUrl: 'https://picsum.photos/1200/600?random=5',
      homePageImageUrl: 'https://picsum.photos/1200/600?random=6',
      isFeatured: true,
      projectDate: new Date('2023-09-10'),
      isHidden: false,
      featureOrder: 3
    }
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
}

export const projectDataService = new ProjectDataService();
