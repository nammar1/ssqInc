export interface PageConfig {
  title: string
  tagline: string
  showText: boolean
  minHeight: string
}

export const pageConfigs: Record<string, PageConfig> = {
  home: {
    title: 'SSQ Inc',
    tagline: 'Smart Solution Quorum',
    showText: true,
    minHeight: '60vh'
  },
  about: {
    title: 'About SSQ',
    tagline: 'Your Vision, Our Solution',
    showText: true,
    minHeight: '50vh'
  },
  services: {
    title: 'Our Services',
    tagline: 'Empowering Business Growth',
    showText: true,
    minHeight: '50vh'
  },
  contact: {
    title: 'Contact Us',
    tagline: 'Let\'s Build Together',
    showText: true,
    minHeight: '50vh'
  },
  blog: {
    title: 'Blog & Insights',
    tagline: 'Latest in Technology',
    showText: true,
    minHeight: '50vh'
  },
  careers: {
    title: 'Join Our Team',
    tagline: 'Shape the Future',
    showText: true,
    minHeight: '50vh'
  },
  investor: {
    title: 'Investor Relations',
    tagline: 'Growth & Opportunity',
    showText: true,
    minHeight: '50vh'
  },
  privacy: {
    title: 'Privacy Policy',
    tagline: 'Your Data, Protected',
    showText: true,
    minHeight: '40vh'
  },
  notfound: {
    title: '404 - Not Found',
    tagline: 'Lost in the Web',
    showText: true,
    minHeight: '60vh'
  },
  dataengineering: {
    title: 'Data Engineering',
    tagline: 'Data Clarity for Decisions',
    showText: true,
    minHeight: '50vh'
  },
  software: {
    title: 'Software Development',
    tagline: 'Custom Solutions',
    showText: true,
    minHeight: '50vh'
  },
  aisolutions: {
    title: 'AI & ML Solutions',
    tagline: 'Future Ready Intelligence',
    showText: true,
    minHeight: '50vh'
  },
  cloudcyber: {
    title: 'Cloud & Cybersecurity',
    tagline: 'Secure Cloud Solutions',
    showText: true,
    minHeight: '50vh'
  },
  digital: {
    title: 'Digital Transformation',
    tagline: 'Innovation Strategy',
    showText: true,
    minHeight: '50vh'
  }
}

export const getPageConfig = (pageName: string): PageConfig => {
  return pageConfigs[pageName] || pageConfigs.home
} 