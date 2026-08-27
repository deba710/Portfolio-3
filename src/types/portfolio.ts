export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  label: string;
}

export interface StatItem {
  id: string;
  label: string;
  value: string;
  numericValue: number;
  suffix: string;
  description: string;
}

export interface SkillItem {
  name: string;
  category: 'languages' | 'frontend' | 'tools' | 'core';
  proficiency: number; // 0 to 100
  level: string; // e.g. "Proficient", "Intermediate", "Familiar"
  iconName: string;
  color: string;
  description?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription?: string;
  technologies: string[];
  category: 'all' | 'web' | 'java' | 'other';
  featured: boolean;
  githubUrl: string;
  liveUrl?: string;
  highlights: string[];
  visualStyle: {
    accentColor: string;
    gradient: string;
    tagline: string;
    codeSnippet?: string;
  };
}

export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  status: 'In Progress' | 'Completed';
  grade?: string;
  highlights: string[];
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  credentialUrl?: string;
  skills: string[];
  status: string;
  iconColor: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    greeting: string;
    role: string;
    headline: string;
    location: string;
    availabilityStatus: string;
    aboutBio: string[];
    email: string;
    github: string;
    linkedin: string;
    resumeUrl: string;
  };
  interests: {
    name: string;
    icon: string;
    description: string;
  }[];
  stats: StatItem[];
  skills: SkillItem[];
  projects: ProjectItem[];
  education: EducationItem[];
  certificates: CertificateItem[];
}
