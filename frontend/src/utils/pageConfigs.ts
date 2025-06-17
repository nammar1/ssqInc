export interface PageConfig {
  title: string
  tagline: string
  showText: boolean
  quote?: string
}

export const pageConfigs: Record<string, PageConfig> = {
  home: {
    title: 'SSQ Inc',
    tagline: 'Smart Solution Quorum',
    showText: true,
    quote: "Smart Solution Quorum Inc (SSQ) is a forward thinking tech consultancy specializing in turning bold ideas into production ready technology. Because we deliver agile solutions at enterprise quality, you move from concept to market faster than ever, no matter your industry or scale.",
  },
  about: {
    title: 'About SSQ',
    tagline: 'Your Vision, Our Solution',
    showText: true,
    quote: "Smart Solution Quorum Inc (SSQ) is a forward thinking tech consultancy specializing in turning bold ideas into production ready technology. Because we deliver agile solutions at enterprise quality, you move from concept to market faster than ever, no matter your industry or scale."
  },
  services: {
    title: 'Our Services',
    tagline: 'Empowering Business Growth',
    showText: true,   
    quote: "We offer a wide range of services to help you achieve your goals. Whether you're a startup, enterprise, government, or NGO, we have a solution for you."
  },
  contact: {
    title: 'Contact Us',
    tagline: 'Let\'s Build Together',
    showText: true,
    quote: "We're here to help you build the future. Whether you're a startup, enterprise, government, or NGO, we're here to help you achieve your goals. Let's build something great together."
  },
  blog: {
    title: 'Blog & Insights',
    tagline: 'Latest in Technology',
    showText: true,
    quote: "We're on a mission to share our expertise and insights with the world. From the latest trends in AI and technology to practical tips for building successful digital solutions, our blog is your go-to source for all things tech and innovation."
  },
  careers: {
    title: 'Join Our Team',
    tagline: 'Shape the Future',
    showText: true,
    quote: "Join our team and help shape the future of technology. We're always looking for talented individuals who are passionate about innovation and making a difference. Whether you're a developer, designer, or business professional, we'd love to hear from you."
  },
  investor: {
    title: 'Investor Relations',
    tagline: 'Growth & Opportunity',
    showText: true,
    quote: "We're here to help you build the future. Whether you're a startup, enterprise, government, or NGO, we're here to help you achieve your goals. Let's build something great together."
  },
  privacy: {
    title: 'Privacy Policy',
    tagline: 'Your Data, Protected',
    showText: true,
    quote: "We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and share your data when you visit our website.",
  },
  notfound: {
    title: '404 - Not Found',
    tagline: 'Lost in the Web',
    showText: true,
    quote: "404 - Not Found"
  },
  dataengineering: {
    title: 'Data Engineering',
    tagline: 'Data Clarity for Decisions',
    showText: true,
    quote: "We unlock the latent value in your data estate. By engineering trustworthy pipelines and intuitive analytics, we help teams move from raw data to actionable insights with confidence and speed.",
  },
  software: {
    title: 'Software Development',
    tagline: 'Custom Solutions',
    showText: true, 
    quote: "We turn ideas into robust, high-performing products. From concept to continuous delivery, our cross-functional teams blend engineering excellence with domain insight to craft software that is scalable, resilient, and delightful to use.",
  },
  aisolutions: {
    title: 'AI & ML Solutions',
    tagline: 'Future Ready Intelligence',
    showText: true,
    quote: "We embed intelligence into products and processes. Our experts transform data into machine-learning models that anticipate needs, personalize experiences, and automate decisions—driving measurable impact across the enterprise."
  },
  cloudcyber: {
    title: 'Cloud & Cybersecurity',
    tagline: 'Secure Cloud Solutions',
    showText: true,
    quote: "We architect and protect the digital core of modern enterprises. By unifying cloud engineering with zero-trust security, we help organizations innovate rapidly without compromising resilience or compliance.",
  },
  digital: {
    title: 'Digital Transformation',
    tagline: 'Innovation Strategy',
    showText: true,
    quote: "We partner with organizations to accelerate their digital evolution. From reimagining strategy to modernizing operations and customer experiences. Our approach blends business insight with technology execution to deliver lasting value."
  },
  ourprocess: {
    title: 'Our Process',
    tagline: 'How We Turn Vision into Reality',
    showText: true,
    quote: "Our proven process ensures successful delivery of your projects from conception to completion.",
  },
  pricing: {
    title: 'Pricing',
    tagline: 'Ways to Work With Us',
    showText: true, 
    quote: "We offer flexible pricing options to suit your needs. Whether you're a startup, enterprise, government, or NGO, we have a solution for you.",
  },
  partners: {
    title: 'Partners',
    tagline: 'Building a Future of Shared Success',
    showText: true,
    quote: "We believe in the power of technology to transform lives and communities. Our Foundation is dedicated to supporting initiatives that drive positive change and create lasting impact. Through strategic partnerships, innovative solutions, and impactful investments, we empower organizations to build a better future for all.",
  },
  clients: {
    title: 'Clients',
    tagline: 'Guiding Visionaries to Build the Future',
    showText: true,
    quote: "Our clients are creators, leaders, and problem-solvers shaping tomorrow. SSQ Inc. is proud to serve a diverse portfolio of startups, enterprises, governments, and NGOs. What unites them all is ambition — and our commitment to turning their bold ideas into transformative realities. Through personalized engagement, agile execution, and future-proof technology, we’re not just a vendor — we’re your most trusted partner on the path to innovation.",
  },
  foundation: {
    title: 'Foundation',
    tagline: 'Technology for Empowerment and Equity',
    showText: true,
    quote: "At SSQ Inc., we believe in the power of technology to transform lives and communities. Our Foundation is dedicated to supporting initiatives that drive positive change and create lasting impact. Through strategic partnerships, innovative solutions, and impactful investments, we empower organizations to build a better future for all.",
  },
  sustainability: {
    title: 'Sustainability',
    tagline: 'Responsible Innovation, Lasting Impact',
    showText: true,
    quote: "At SSQ Inc., we believe in the power of technology to transform lives and communities. Our Foundation is dedicated to supporting initiatives that drive positive change and create lasting impact. Through strategic partnerships, innovative solutions, and impactful investments, we empower organizations to build a better future for all.",
  },
  accelerators: {
    title: 'Accelerators',
    tagline: 'Fueling Growth for Purpose-Driven Initiatives',
    showText: true,
    quote:"Through our Accelerator Programs, SSQ Inc. supports early-stage ventures with the technology, mentorship, and strategic insight they need to thrive. We look for founders with bold missions and help them scale smarter — providing everything from data infrastructure to AI modeling, security, and go-to-market advisory. When your startup stands for something greater, we stand behind you.",
  },
  aqira: {
    title: 'Aqira',
    tagline: 'The Future of Business Management',
    showText: true,
    quote: "Aqira is a platform that empowers businesses to build and deploy AI solutions quickly and efficiently. It provides a comprehensive suite of tools and services to help businesses build, deploy, and manage AI solutions.",
  }
}

export const getPageConfig = (pageName: string): PageConfig => {
  return pageConfigs[pageName] || pageConfigs.home
} 