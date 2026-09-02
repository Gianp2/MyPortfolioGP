export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  role?: string;
  impact?: string;
  description: string;
  technologies: string[];
  url?: string;
  image?: string;
  highlights?: string[];
  accentColor?: string;
  badge?: string;
}

export interface SocialLinks {
  email: string;
  github: string;
  githubUser: string;
  linkedin: string;
  linkedinUser: string;
  instagram: string;
  instagramUser: string;
  whatsapp?: string;
  whatsappUser?: string;
}

export interface FocusArea {
  number: string;
  title: string;
  description: string;
}

export interface StackGroup {
  category: string;
  items: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  title: string;
  tagline: string;
  introHeading: string;
  introDescription: string;
  about: {
    heading: string;
    paragraphs: string[];
  };
  focus: FocusArea[];
  stackGroups: StackGroup[];
  process: ProcessStep[];
  interests: {
    heading: string;
    paragraphs: string[];
    tags: string[];
  };
  goal: {
    heading: string;
    description: string;
  };
  contact: {
    headingLine1: string;
    headingLine2: string;
    subheading: string;
    ctaButton: string;
  };
  social: SocialLinks;
}

