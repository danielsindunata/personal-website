export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  image: string;
  heroImage?: string;
  features?: string[];
  featured?: boolean;
  demoUrl?: string;
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    id: "corporate-event-platform",
    title: "Corporate Event Platform",
    description:
      "Registration, check-in, and QR workflows for large year-end company events.",
    longDescription:
      "A full event platform built for corporate year-end gatherings — guest registration, QR check-in, and live ops views so hosts can run the floor without spreadsheets.",
    tags: ["Next.js", "Prisma", "MariaDB"],
    image: "/projects/project-one.svg",
    heroImage: "/projects/project-one.svg",
    features: [
      "Guest registration and invite flows",
      "QR-based check-in on mobile",
      "Live attendance and ops dashboard",
      "Role-based access for event staff",
    ],
    featured: true,
    demoUrl: "https://example.com",
    repoUrl: "https://github.com/danielsindunata/corporate-event-platform",
  },
  {
    id: "rsp-company-portal",
    title: "RSP Company Portal",
    description:
      "Internal portal for documents, announcements, and day-to-day team ops.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    image: "/projects/project-two.svg",
    demoUrl: "https://example.com",
    repoUrl: "https://github.com/danielsindunata/rsp-company-portal",
  },
  {
    id: "operations-dashboard",
    title: "Operations Dashboard",
    description:
      "KPI views and reporting that replace scattered Excel trackers.",
    tags: ["React", "SQL", "Power BI"],
    image: "/projects/project-three.svg",
    demoUrl: "https://example.com",
  },
  {
    id: "guest-experience-tools",
    title: "Guest Experience Tools",
    description:
      "Lightweight tools for hospitality teams to track service and feedback.",
    tags: ["Full Stack", "UI", "API"],
    image: "/projects/project-one.svg",
    repoUrl: "https://github.com/danielsindunata/guest-experience-tools",
  },
];

export const featuredProject =
  projects.find((project) => project.featured) ?? projects[0];
