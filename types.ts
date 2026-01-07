
export enum Page {
  Home = 'home',
  About = 'about',
  Projects = 'projects'
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link?: string;
}

export interface Blog {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Greeting {
  lang: string;
  text: string;
}
