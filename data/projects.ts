import { existsSync } from "node:fs";
import path from "node:path";

export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  overview?: string[];
  tags: string[];
  stack?: string[];
  image: string;
  heroImage?: string;
  mobileImage?: string;
  gallery?: string[];
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
    overview: [
      "Corporate year-end events involve hundreds of guests, last-minute list changes, and staff who need a clear picture of who has arrived. Spreadsheets and paper badges break down under that pressure.",
      "This platform covers the full event lifecycle: invite and registration, QR-based check-in on mobile, and live ops views so hosts can run the floor without chasing updates across tools.",
      "Built as a production Next.js app with Prisma and MariaDB, it supports role-based access for organizers, door staff, and display screens on site.",
    ],
    tags: ["Next.js", "Prisma", "MariaDB"],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma", "MariaDB"],
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
    gallery: [
      assetOrFallback(
        "/assets/event-platform.webp",
        "/assets/project-event-platform.svg",
      ),
      assetOrFallback(
        "/assets/event-platform-checkin.webp",
        "/assets/project-event-platform.svg",
      ),
      assetOrFallback(
        "/assets/event-platform-admin.webp",
        "/assets/project-event-platform.svg",
      ),
      assetOrFallback(
        "/assets/event-platform-display.webp",
        "/assets/project-event-platform.svg",
      ),
    ],
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
    longDescription:
      "An infinite canvas whiteboard where teammates sketch, annotate, and share ideas in real time — built for workshops, planning sessions, and async follow-up.",
    overview: [
      "Teams need a shared surface that does not stop at the edge of a slide or a fixed page. Sticky notes, sketches, and markup should live together and update live.",
      "This whiteboard provides an infinite canvas with real-time collaboration over WebSockets, so multiple people can draw and annotate without stepping on each other.",
      "Boards can be organized and exported, making it useful for workshops, design reviews, and day-to-day planning.",
    ],
    tags: ["Next.js", "Canvas", "WebSockets"],
    stack: ["Next.js", "React", "TypeScript", "Canvas", "WebSockets"],
    image: assetOrFallback(
      "/assets/whiteboard.webp",
      "/assets/project-whiteboard.svg",
    ),
    heroImage: assetOrFallback(
      "/assets/whiteboard.webp",
      "/assets/project-whiteboard.svg",
    ),
    gallery: [
      assetOrFallback("/assets/whiteboard.webp", "/assets/project-whiteboard.svg"),
      assetOrFallback(
        "/assets/whiteboard-boards.webp",
        "/assets/project-whiteboard.svg",
      ),
      assetOrFallback(
        "/assets/whiteboard-pdf.webp",
        "/assets/project-whiteboard.svg",
      ),
    ],
    features: [
      "Infinite zoomable canvas",
      "Real-time multiplayer collaboration",
      "Board organization and sharing",
      "Export-friendly snapshot flows",
    ],
    repoUrl: "https://github.com/danielsindunata/collaborative-whiteboard",
    objectFit: "contain",
  },
  {
    id: "rsp-company-portal",
    title: "RSP Company Portal",
    description:
      "Internal portal for documents, announcements, and day-to-day team ops.",
    longDescription:
      "An internal company portal that centralizes documents, announcements, payroll views, and operational planning so teams stop hunting across drives and chats.",
    overview: [
      "Day-to-day company ops often live in scattered folders, group chats, and one-off spreadsheets. Staff waste time finding the latest announcement or form.",
      "The RSP Company Portal brings documents, announcements, and operational tools into one Next.js internal app with a clear navigation model for teams.",
      "Modules cover payroll-facing views and planning surfaces such as Gantt-style timelines, so managers and staff share the same source of truth.",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind"],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    image: assetOrFallback(
      "/assets/company-portal.webp",
      "/assets/project-rsp-portal.svg",
    ),
    heroImage: assetOrFallback(
      "/assets/company-portal.webp",
      "/assets/project-rsp-portal.svg",
    ),
    gallery: [
      assetOrFallback(
        "/assets/company-portal.webp",
        "/assets/project-rsp-portal.svg",
      ),
      assetOrFallback(
        "/assets/company-portal-payroll.webp",
        "/assets/project-rsp-portal.svg",
      ),
      assetOrFallback(
        "/assets/company-portal-gantt.webp",
        "/assets/project-rsp-portal.svg",
      ),
    ],
    features: [
      "Centralized documents and announcements",
      "Payroll and admin-facing views",
      "Operational planning timelines",
      "Consistent internal navigation for teams",
    ],
    repoUrl: "https://github.com/danielsindunata/rsp-company-portal",
    objectFit: "contain",
  },
];

export const featuredProject =
  projects.find((project) => project.featured) ?? projects[0];

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}

export function getProjectHref(project: Project): string {
  return `/projects/${project.id}`;
}

export function getOtherProjects(id: string): Project[] {
  return projects.filter((project) => project.id !== id);
}

export function getProjectOverview(project: Project): string[] {
  if (project.overview && project.overview.length > 0) {
    return project.overview;
  }
  if (project.longDescription) {
    return [project.longDescription];
  }
  return [project.description];
}

export function getProjectGallery(project: Project): string[] {
  if (project.gallery && project.gallery.length > 0) {
    return project.gallery;
  }
  const shots = [
    project.heroImage ?? project.image,
    project.mobileImage,
    project.image,
  ].filter((src): src is string => Boolean(src));
  return [...new Set(shots)];
}

export function getProjectStack(project: Project): string[] {
  return project.stack && project.stack.length > 0 ? project.stack : project.tags;
}
