export interface Project {
  slug: string;
  title: string;
  titleAr: string;
  location: string;
  locationAr: string;
  country: 'saudi' | 'egypt';
  year: string;
  category: string;
  categoryAr: string;
  description: string;
  descriptionAr: string;
  client: string;
  clientAr: string;
  scope: string[];
  scopeAr: string[];
  images: string[];
  featured: boolean;
}

export interface Service {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  features: string[];
  featuresAr: string[];
  icon: string;
}

export interface CompanyInfo {
  name: string;
  nameAr: string;
  tagline: string;
  taglineAr: string;
  founded: number;
  description: string;
  descriptionAr: string;
  vision: string;
  visionAr: string;
  mission: string;
  missionAr: string;
  ceoMessage: string;
  ceoMessageAr: string;
  contact: {
    phone: string;
    email: {
      info: string;
      sales: string;
    };
    address: string;
    addressAr: string;
    city: string;
    cityAr: string;
    country: string;
    countryAr: string;
  };
  social: {
    linkedin: string;
    facebook: string;
  };
  stats: {
    years: number;
    projects: number;
    countries: number;
  };
}

export type Locale = 'en' | 'ar';
