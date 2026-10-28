export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Niche {
  icon: "skincare" | "beleza" | "fitness" | "lifestyle" | "wellness";
  label: string;
}

export interface MiniStat {
  value: string;
  label: string;
}

export interface VideoItem {
  id: string;
  label: string;
  tag: string;
}

export interface PhotoItem {
  id: string;
  src: string;
  label: string;
}

export interface ProcessStep {
  n: string;
  title: string;
  desc: string;
}

export interface Brand {
  id: string;
  label: string;
  logoSrc: string;
}

/** Conteúdo completo do portfólio — troque este objeto pra reaproveitar o template com outra criadora. */
export interface PortfolioContent {
  name: string;
  heroPhoto: string;
  heroSubheadline: string;
  nav: NavLink[];
  about: {
    heading: string;
    text: string;
    photo: string;
    stats: Stat[];
  };
  niches: {
    heading: string;
    items: Niche[];
    photo: string;
    text: string;
    miniStats: MiniStat[];
  };
  videos: VideoItem[];
  photos: PhotoItem[];
  photoFilters: string[];
  process: ProcessStep[];
  brands: Brand[];
  contact: {
    heading: string;
    text: string;
    email: string;
    instagram: string;
    tiktok: string;
    whatsapp: string;
  };
}
