export interface IProjectItem {
  id: number;
  title: string;
  description: string;
  type: string;
  technologies: ITechnologies[];
  image: string;
  websiteLink: string;
}

export interface ITechnologies {
  name: string;
  icon: any;
  color: string;
}