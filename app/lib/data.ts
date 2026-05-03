import { Project, Experience, NavLink } from "../types";

export const NAV_LINKS: NavLink[] = [
  { label: "about", href: "#about" },
  //Will get back to once I make some more projects!
  //{ label: "work", href: "#work" },
  { label: "experience", href: "#experience" },
  { label: "contact", href: "#contact" },
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Test Project",
    description:
      "A test project that will one day exist!",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Redis"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    year: 2036,
  },
  {
    id: "2",
    title: "Test Project",
    description:
      "A test project that will one day exist!",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Redis"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    year: 2036,
  },
  {
    id: "3",
    title: "Test Project",
    description:
      "A test project that will one day exist!",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Redis"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
    year: 2036,
  },
];

export const EXPERIENCE: Experience[] = [
  {
    company: "Nexthink",
    role: "Full Stack Web Developer",
    period: "Jul 2022 – Apr 2026",
    description: [
      "Optimised Node.js/TypeScript backend and implemented Next.js SSR, reducing average page load times by ~40% and boosting organic search rankings by 25%+.",
      "Converted Figma designs into accessible, responsive React interfaces with Tailwind CSS, increasing cross-device engagement by ~30% and average session length by 20%.",
      "Designed scalable GraphQL schemas in Hygraph, cutting redundant API calls by ~35%.",
      "Migrated WordPress to headless CMS, slashing marketing team time-to-publish from days to under an hour.",
      "Built RESTful API integrations, reducing client-side errors by ~45%.",
      "Improved web accessibility to WCAG 2.1 AA compliance and drove a ~30% reduction in production incidents via disciplined Git workflows.",
    ],
    tech: ["Next.js", "TypeScript", "Node.js", "React", "Tailwind CSS", "GraphQL", "Hygraph"],
  },
  {
    company: "BreakFree Solutions",
    role: "Full Stack Developer / DevOps",
    period: "Dec 2021 – Jul 2022",
    description: [
      "Developed automated CI/CD pipelines for web application deployments, cutting release cycle time by 80%.",
      "Supported migration of web services to AWS and Azure, achieving 99.9% uptime across production environments.",
      "Collaborated with front-end and back-end teams to optimise deployment workflows and ensure timely feature releases.",
    ],
    tech: ["AWS", "Azure", "CI/CD", "Node.js"],
  },
];

export const SKILLS = {
  frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Figma"],
  backend: ["Node.js", "GraphQL", "REST APIs", "Hygraph", "WordPress"],
  devops: ["AWS", "Azure", "CI/CD", "Git"],
};
