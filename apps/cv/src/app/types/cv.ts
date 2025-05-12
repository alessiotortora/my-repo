export interface CVData {
  about: About;
  projects: Projects;
  contact: Record<string, string>;
  languages: Language[];
  skills: string[];
  soft: Soft;
  experience: TimelineEntry[];
  volunteering: TimelineEntry[];
  education: EducationEntry[];
}

export interface About {
  summary: string;
}

export interface Projects {
  summary: string;
  link: string;
}

export interface Soft {
  [key: string]: string;
}

export interface Language {
  language: string;
  level: string;
}

export interface TimelineEntry {
  period: string;
  role: string;
  location: string;
  link?: string;
  details?: string[];
}

export interface EducationEntry {
  period: string;
  school: string;
  degree: string;
  link?: string;
}
