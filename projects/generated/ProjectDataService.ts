import { Project } from '../models/Project';

class ProjectDataService {
  private projects: Project[] = [
    // ... (existing projects)
    {
      id: '4',
      title: 'Social Media Dashboard',
      listPageDescription: 'A comprehensive social media management dashboard with analytics and scheduling features.',
      homePageDescription: 'Built a powerful social media tool using React and Node.js.',
      listPageImageUrl: 'https://picsum.photos/1200/600?random=7',
      homePageImageUrl: 'https://picsum.photos/1200/600?random=8',
      isFeatured: false,
      projectDate: new Date('2023-11-05'),
      isHidden: false,
      featureOrder: 4
    },
    {
      id: '5',
      title: 'Fitness Tracking App',
      listPageDescription: 'A mobile-first fitness app for tracking workouts, nutrition, and progress.',
      homePageDescription: 'Developed a React Native app for comprehensive fitness tracking.',
      listPageImageUrl: 'https://picsum.photos/1200/600?random=9',
      homePageImageUrl: 'https://picsum.photos/1200/600?random=10',
      isFeatured: false,
      projectDate: new Date('2024-01-20'),
      isHidden: false,
      featureOrder: 5
    },
    {
      id: '6',
      title: 'AI-powered Chatbot',
      listPageDescription: 'An intelligent chatbot for customer support, built with natural language processing capabilities.',
      homePageDescription: 'Created an AI chatbot using React and TensorFlow.js.',
      listPageImageUrl: 'https://picsum.photos/1200/600?random=11',
      homePageImageUrl: 'https://picsum.photos/1200/600?random=12',
      isFeatured: false,
      projectDate: new Date('2024-03-15'),
      isHidden: false,
      featureOrder: 6
    },
    {
      id: '7',
      title: 'Virtual Event Platform',
      listPageDescription: 'A comprehensive platform for hosting and managing virtual events and conferences.',
      homePageDescription: 'Built a scalable virtual event solution using React and WebRTC.',
      listPageImageUrl: 'https://picsum.photos/1200/600?random=13',
      homePageImageUrl: 'https://picsum.photos/1200/600?random=14',
      isFeatured: false,
      projectDate: new Date('2024-05-01'),
      isHidden: false,
      featureOrder: 7
    },
    {
      id: '8',
      title: 'Cryptocurrency Portfolio Tracker',
      listPageDescription: 'A real-time cryptocurrency portfolio tracker with price alerts and historical data analysis.',
      homePageDescription: 'Developed a crypto tracking app using React and CoinGecko API.',
      listPageImageUrl: 'https://picsum.photos/1200/600?random=15',
      homePageImageUrl: 'https://picsum.photos/1200/600?random=16',
      isFeatured: false,
      projectDate: new Date('2024-06-20'),
      isHidden: false,
      featureOrder: 8
    },
    {
      id: '9',
      title: 'Smart Home Control System',
      listPageDescription: 'An IoT-based smart home control system with mobile app integration.',
      homePageDescription: 'Created a smart home solution using React Native and MQTT.',
      listPageImageUrl: 'https://picsum.photos/1200/600?random=17',
      homePageImageUrl: 'https://picsum.photos/1200/600?random=18',
      isFeatured: false,
      projectDate: new Date('2024-08-10'),
      isHidden: false,
      featureOrder: 9
    },
    // ... (add more projects to reach at least 12 items)
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
      .sort((a, b) => (b.projectDate.getTime() - a.projectDate.getTime()))
      .slice(startIndex, startIndex + pageSize);
  }
}

export const projectDataService = new ProjectDataService();