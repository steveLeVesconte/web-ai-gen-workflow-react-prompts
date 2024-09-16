export interface Project {
  id: string;
  title: string;
  listPageDescription: string;
  homePageDescription: string;
  listPageImageUrl: string;
  homePageImageUrl: string;
  isFeatured: boolean;
  projectDate: Date;
  isHidden: boolean;
  featureOrder?: number;
}
