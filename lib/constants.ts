export interface SiteConfig {
  name: string;
  role: string;
  bio: string;
  location: string;
  email: string;
  linkedin: string;
  image: string;
}

export interface Project {
  title: string;
  category: string;
  image: string;
  url: string;
  large: boolean;
}

export interface TechGroup {
  group: string;
  skills: string[];
}

export interface ExperienceItem {
  year: string;
  company: string;
  role: string;
  highlights: string[];
}

export interface NavigationItem {
  label: string;
  href: string;
}

export const SITE_CONFIG: SiteConfig = {
  name: "SHYAMA PATRO",
  role: "Full Stack Developer",
  bio: "Designing high-performance digital artifacts where technical precision meets editorial elegance.",
  location: "India",
  email: "shyama.patro@gmail.com",
  linkedin: "https://www.linkedin.com/in/shyama-patro-0to1/",
  image: "/profile.jpg",
};

export const PROJECTS: Project[] = [
  {
    title: "Essence",
    category: "Luxury E-commerce / Perfume Brand",
    image: "/essence.png",
    url: "https://v0-perfume-brand-website-seven.vercel.app/",
    large: true,
  },
  {
    title: "Chronos",
    category: "Productivity / Pomodoro Watch",
    image: "/chronos.png",
    url: "https://pomodoro-watch-kappa.vercel.app/",
    large: false,
  },
  {
    title: "Epoch",
    category: "Utility / Time Converter",
    image: "/epoch.png",
    url: "https://time-converter-alpha.vercel.app/",
    large: false,
  },
];

export const TECH_STACK: TechGroup[] = [
  { 
    group: "Languages", 
    skills: ["JavaScript", "TypeScript", "Python"] 
  },
  { 
    group: "Frontend", 
    skills: ["React.js", "Next.js", "TailwindCSS", "HTML5", "CSS3"] 
  },
  { 
    group: "Backend", 
    skills: ["Node.js", "Express.js", "NestJS", "FastAPI", "Socket.IO"] 
  },
  { 
    group: "Databases", 
    skills: ["MongoDB", "Redis", "MySQL", "PostgreSQL"] 
  },
  { 
    group: "Cloud / DevOps", 
    skills: ["Git", "GitHub", "GCP", "AWS", "Docker", "CI/CD"] 
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    year: "Jul 2025 — Present",
    company: "Clapingo (Remote)",
    role: "Full Stack Developer",
    highlights: [
      "Architected scalable backend systems using Node.js, Express.js, WebSocket, and MongoDB, supporting 1M+ annual users.",
      "Cut API latency by 40% using Redis caching and optimized MongoDB aggregation pipelines.",
      "Implemented idempotent payment webhook handlers for Razorpay and Stripe, ensuring 99.9% reliability.",
      "Led frontend performance initiative, lifting Google Lighthouse score to 85+ via lazy loading and code splitting."
    ],
  },
  {
    year: "May 2025 — Jul 2025",
    company: "Xerago (Onsite)",
    role: "Sr Associate — Application Engineering",
    highlights: [
      "Maintained reliability of Node.js and Python payment APIs in a regulated banking environment.",
      "Optimized high-traffic database queries, improving response times for internal services.",
      "Delivered backend enhancements and bug fixes within strict SLA requirements."
    ],
  },
  {
    year: "Jan 2023 — Apr 2025",
    company: "Clapingo (Hybrid)",
    role: "Backend Developer",
    highlights: [
      "Architected 30+ production REST APIs using Node.js/NestJS, supporting 1M+ annual users.",
      "Integrated Slack, Exotel, and Zoho APIs; leveraged Amplitude for user behaviour analytics.",
      "Implemented RBAC-based admin audit logs for secure activity tracking.",
      "Automated reporting workflows, saving ~5 hrs/week of operational effort."
    ],
  },
  {
    year: "Apr 2022 — Oct 2022",
    company: "Applify (Onsite)",
    role: "Full Stack Intern",
    highlights: [
      "Built JWT-secured REST APIs and React.js interfaces for a CRM platform.",
      "Improved dashboard load performance by 25% through optimized API design.",
      "Delivered features across bi-weekly Agile release cycles."
    ],
  },
];

export const NAVIGATION: NavigationItem[] = [
  { label: "Works", href: "#works" },
  { label: "Experience", href: "#experience" },
  { label: "Stack", href: "#stack" },
  { label: "Connect", href: "#connect" },
];
