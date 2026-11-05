/**
 * Portfolio Architect Type Definitions
 */

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string; // e.g. 'web', 'backend', 'ai', 'AI Systems', 'Cloud Infra'
  categories: string[]; // e.g. ['web', 'backend']
  description: string;
  fullCaseStudy: string;
  architectureDetails: string[];
  techStack: string[];
  metrics: string;
  demoUrl?: string;
  repoUrl?: string;
  imageUrl: string;
  imageAlt: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: number; // 1-100
    experience: string;
    context: string;
  }[];
}

export interface SkillTableRow {
  area: string;
  tools: string;
  level: 'Advanced' | 'Intermediate' | 'Expert' | string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  clientRole: string;
  clientCompany: string;
  clientAvatar: string;
  avatarAlt: string;
  rating: number;
  quote: string;
  projectDelivered: string;
  verifiedDate: string;
}

export interface BusinessEntityDetails {
  legalName: string;
  tradeName: string;
  registrationNumber: string;
  jurisdiction: string;
  taxVatId: string;
  dunsNumber: string;
  registeredAddress: string;
  dpoEmail: string;
  primaryContact: string;
  governingLaw: string;
  gstin?: string;
}

export interface LocalNewsItem {
  id: string;
  headline: string;
  publication: string;
  date: string;
  category: string;
  readTime: string;
  summary: string;
  url: string;
}

export interface MediaLicensing {
  copyrightNotice: string;
  proprietaryAssetsStatement: string;
  openSourceLicense: string;
  dmcaAgent: string;
  imageAttribution: string;
}

export interface LegalPolicies {
  privacyPolicy: {
    lastUpdated: string;
    content: string[];
  };
  termsAndConditions: {
    lastUpdated: string;
    content: string[];
  };
  cookiePolicy: {
    lastUpdated: string;
    content: string[];
  };
  refundPolicy: {
    lastUpdated: string;
    content: string[];
  };
  userDataCollected: {
    lastUpdated: string;
    categories: {
      category: string;
      dataPoints: string[];
      purpose: string;
      retentionPeriod: string;
    }[];
  };
  embedsPolicy?: {
    lastUpdated: string;
    content: string[];
  };
  accessibilityStatement?: {
    lastUpdated: string;
    content: string[];
  };
  creditsAndCopyright?: {
    lastUpdated: string;
    content: string[];
  };
}

export interface CookiePreferences {
  strictlyNecessary: boolean;
  analytical: boolean;
  marketing: boolean;
  hasResponded: boolean;
  consentTimestamp?: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  organization: string;
  subject: string;
  message: string;
  privacyConsent: boolean;
}

export interface PortfolioData {
  userName: string;
  roleTitle: string;
  tagline: string;
  bio: string;
  bioParagraphs?: string[];
  location: string;
  availability: string;
  experienceYears: string;
  currentlyRole: string;
  heroPortraitUrl: string;
  heroPortraitAlt: string;
  stats: {
    label: string;
    value: string;
    detail: string;
  }[];
  projects: ProjectItem[];
  skillCategories: SkillCategory[];
  skillsTable: SkillTableRow[];
  testimonials: TestimonialItem[];
  businessDetails: BusinessEntityDetails;
  localNews: LocalNewsItem[];
  mediaLicensing: MediaLicensing;
  policies: LegalPolicies;
}
