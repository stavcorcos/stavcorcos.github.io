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
    title: "FlowBoard",
    description:
      "A project management app that combines a Kanban ticket board with a time-blocking week calendar. Create tickets with statuses, priorities, and due dates, then drag work blocks onto the calendar to schedule when you'll actually do the work — keeping planning and scheduling in one place. Built with Next.js 15, TypeScript, and Tailwind CSS on the frontend, with a Node.js API layer and raw SQL queries against a Vercel Postgres database.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Node.js", "React"],
    liveUrl: "https://flowboard-eta.vercel.app",
    githubUrl: "https://github.com/stavcorcos/flowboard",
    featured: true,
    year: 2026,
  },
  {
    id: "2",
    title: "MEGA",
    description:
      "A Discord RPG bot featuring dungeon crawling, turn-based combat, character progression, and a full item/inventory system. Renders all game UI as dynamically generated images sent directly to Discord. Based on World of Warcraft.",
    tags: ["Python", "discord.py", "Pillow", "MySQL", "PyMySQL"],
    liveUrl: "https://megapy.netlify.app/",
    githubUrl: "https://github.com/stavcorcos/MEGA",
    featured: true,
    year: 2021,
  },
  {
    id: "3",
    title: "ASFC11 Chess Bot",
    description:
      "A birthday gift I made for my girlfriend, a chess bot that plays on a custom react frontend and uses a stockfish engine running on a python backend. The bot is trained on her games and has a custom opening book based on her favourite openings, so it plays in a similar style to her.",
    tags: ["React", "Python", "Stockfish", "Chess"],
    liveUrl: "https://asfc11.com",
    githubUrl: "https://github.com/stavcorcos/asfc11-backend",
    featured: false,
    year: 2026,
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
