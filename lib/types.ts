export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  photo: string;
  description: string;
}

export interface Education {
  id: string;
  institution: string;
  period: string;
  description: string;
}

export interface ProfessionalPractice {
  id: string;
  organization: string;
  period: string;
  description: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string;
  practices?: ProfessionalPractice[];
}

export interface Skill {
  id: string;
  name: string;
  level: number;
}

export interface Language {
  id: string;
  name: string;
  level: string;
  proficiency: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  education: Education[];
  experience: Experience[];
  skills: Skill[];
  languages: Language[];
  contact: ContactInfo;
}

