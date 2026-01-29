export interface Profile {
  name: string;
  title: string;
  summary: string;
  social: {
    github: string;
    linkedin: string;
  };
}

export interface SkillCategory {
  name: string;
  items: string[];
}

export interface Skills {
  categories: SkillCategory[];
}

export interface Position {
  title: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface Experience {
  positions: Position[];
}

export interface Degree {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface Education {
  degrees: Degree[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  github: string;
  live: string;
  image: string;
}

export interface Projects {
  projects: Project[];
}
