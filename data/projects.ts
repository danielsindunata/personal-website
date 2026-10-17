import { existsSync } from "node:fs";
import path from "node:path";

export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  image: string;
  heroImage?: string;
  mobileImage?: string;
  features?: string[];
  featured?: boolean;
  demoUrl?: string;
  repoUrl?: string;
  objectFit?: "contain" | "cover";
};

function assetOrFallback(preferred: string, fallback: string): string {
  const absolute = path.join(process.cwd(), "public", preferred.replace(/^\//, ""));
  return existsSync(absolute) ? preferred : fallback;
}

export const projects: Project[] = [
  {
    id: "corporate-event-platform",
    title: "Corporate Event Management Platform",
    description:
      "Registration, QR check-in, and live ops for large corporate year-end events.",
    longDescription:
      "A full event platform built for corporate year-end gatherings — guest registration, QR check-in, and live ops views so hosts can run the floor without spreadsheets.",
    tags: ["Next.js", "Prisma", "MariaDB"],
    image: assetOrFallback(
      "/assets/event-platform.webp",
      "/assets/project-event-platform.svg",
    ),
    heroImage: assetOrFallback(
      "/assets/event-platform.webp",
      "/assets/project-event-platform.svg",
    ),
    mobileImage: assetOrFallback(
      "/assets/event-platform-checkin.webp",
      assetOrFallback(
        "/assets/event-platform.webp",
        "/assets/project-event-platform.svg",
      ),
    ),
    features: [
      "Guest registration and invite flows",
      "QR-based check-in on mobile",
      "Live attendance and ops dashboard",
      "Role-based access for event staff",
    ],
    featured: true,
    repoUrl: "https://github.com/danielsindunata/corporate-event-platform",
    objectFit: "contain",
  },
  {
    id: "collaborative-whiteboard",
    title: "Collaborative Infinite Whiteboard",
    description:
      "Real-time infinite canvas for teams to sketch, annotate, and collaborate.",
    tags: ["Next.js", "Canvas", "WebSockets"],
    image: assetOrFallback(
      "/assets/whiteboard.webp",
      "/assets/project-whiteboard.svg",
    ),
    repoUrl: "https://github.com/danielsindunata/collaborative-whiteboard",
    objectFit: "contain",
  },
  {
    id: "rsp-company-portal",
    title: "RSP Company Portal",
    description:
      "Internal portal for documents, announcements, and day-to-day team ops.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    image: assetOrFallback(
      "/assets/company-portal.webp",
      "/assets/project-rsp-portal.svg",
    ),
    repoUrl: "https://github.com/danielsindunata/rsp-company-portal",
    objectFit: "contain",
  },
  {
    id: "saladnyoo-operational-bi",
    title: "Saladnyoo Operational BI",
    description:
      "Operational dashboards and reporting that replace scattered spreadsheet trackers.",
    tags: ["React", "SQL", "Power BI"],
    image: assetOrFallback(
      "/assets/saladnyoo-bi.webp",
      "/assets/project-saladnyoo-bi.svg",
    ),
    repoUrl: "https://github.com/danielsindunata/saladnyoo-operational-bi",
    objectFit: "contain",
  },
];

export const featuredProject =
  projects.find((project) => project.featured) ?? projects[0];

export function getProjectHref(project: Project): string | undefined {
  return project.demoUrl ?? project.repoUrl;
}
