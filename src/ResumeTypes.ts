export interface ContactInfo {
  email: string;
  phone: string;
}

export interface BasicInfo {
  name: string;
  contact: ContactInfo;
  location: string;
  github: string;
  portfolio: string;
  linkedin: string;
}

export interface TechStack {
  languages: string[];
  backend: string[];
  database: string[];
  infrastructure: string[];
  tools: string[];
}

export interface Education {
  university: string;
  major: string;
  double_major?: string;
  gpa: string;
  period: string;
}

export interface WorkExperience {
  company: string;
  role: string;
  period: string;
  project: string;
  responsibilities: string[];
  annual_salary: string;
  primary_role: string;
}

export interface Project {
  name: string;
  period: string;
  description: string;
  tech_stack: string[];
  features: string[];
}

export interface Activity {
  organization: string;
  activity: string;
  period: string;
  tasks: string[];
}

export interface AdditionalInfo {
  blog: string;
  languages: {
    korean: string;
    english: string;
    japanese: string;
  };
}

export interface Profile {
  basic_info: BasicInfo;
  summary: string;
  tech_stack: TechStack;
  education: Education;
  work_experience: WorkExperience[];
  projects: Project[];
  activities: Activity[];
  certifications: string[];
  additional_info: AdditionalInfo;
}

export interface UserProfile {
  ko: Profile;
  en: Profile;
}
