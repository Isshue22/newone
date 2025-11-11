
export interface ExperienceItem {
  company: string;
  location: string;
  role: string;
  period: string;
  description: string[];
}

export interface ProjectItem {
  title: string;
  period?: string;
  description: string[];
  imageUrl: string;
  githubUrl: string;
  tags: string[];
}
