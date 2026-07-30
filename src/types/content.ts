export type Lang = 'es' | 'en';

export interface Localized {
  es: string;
  en: string;
}

export interface LocalizedArray {
  es: string[];
  en: string[];
}

export interface NavItem {
  label: Localized;
  href: Localized;
}

export interface SiteData {
  siteName: string;
  navigation: NavItem[];
  footer: {
    copyright: Localized;
  };
}

export interface AwardItem {
  logo?: string;
  title: Localized;
  year: string;
}

export interface HomeData {
  hero: {
    image: string;
    alt: Localized;
    statement: Localized;
  };
  recentAwards: {
    heading: Localized;
    items: AwardItem[];
  };
}

export interface ProjectImage {
  src: string;
  alt: Localized;
}

export interface Project {
  id: string;
  slug: Localized;
  title: Localized;
  subtitle: Localized;
  description: Localized;
  summary: Localized;
  year: string;
  category: Localized;
  tags: Localized[];
  coverImage: string;
  images: ProjectImage[];
  featured: boolean;
  order: number;
}

export interface ProjectsData {
  projects: Project[];
}

export interface CVItem {
  year: string;
  title: Localized;
  organization: Localized;
  location: Localized;
  description?: Localized;
}

export interface CVSection {
  id: string;
  title: Localized;
  order: number;
  items: CVItem[];
}

export interface CVData {
  downloadLabel: Localized;
  downloadUrl: string;
  sections: CVSection[];
}

export interface SocialLink {
  platform: string;
  url: string;
}

export interface AboutData {
  heading: Localized;
  statement: Localized;
  bio: LocalizedArray;
  portrait: {
    src: string;
    alt: Localized;
  };
  contact: {
    email: string;
    location: Localized;
    social: SocialLink[];
  };
}
