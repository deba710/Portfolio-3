export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  label: string;
}

export interface HonestPillarItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  tag: string;
}

export interface SkillItem {
  name: string;
  category: 'core' | 'fundamentals' | 'tools';
  status: string; // e.g. "Main Focus", "Active Practice", "In Progress"
  iconName: string;
  color: string;
  description: string;
  topics: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription?: string;
  technologies: string[];
  status: 'Completed' | 'Ongoing';
  featured: boolean;
  githubUrl: string;
  liveUrl?: string;
  imageUrl?: string;
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

export type PhotoFilterId = 'normal' | 'noir' | 'cyber' | 'warm' | 'cool' | 'contrast';

export interface PhotoFilter {
  id: PhotoFilterId;
  name: string;
  cssFilter: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'avatar' | 'workspace' | 'projects' | 'general';
  url: string;
  dateAdded: string;
  size?: string;
  filter?: PhotoFilterId;
  isAvatar?: boolean;
}

export interface PortfolioData {
  personal: {
    name: string;
    taglineLabel: string;
    greeting: string;
    role: string;
    headline: string;
    location: string;
    availabilityStatus: string;
    heroPhotoUrl: string;
    aboutPhotoUrl: string;
    aboutBio: string[];
    email: string;
    github: string;
    linkedin: string;
    resumeUrl: string;
  };
  learningValues: {
    title: string;
    icon: string;
    description: string;
  }[];
  honestPillars: HonestPillarItem[];
  skills: SkillItem[];
  projects: ProjectItem[];
  education: EducationItem[];
  certificates: CertificateItem[];
}

