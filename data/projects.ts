import { existsSync } from "node:fs";
import path from "node:path";

export type ProjectGalleryItem = {
  src: string;
  alt: string;
};

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
  gallery?: Array<string | ProjectGalleryItem>;
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
      "Guest registration, QR check-in, admin tools, and stage displays for a large corporate year-end event.",
    longDescription:
      "A full-stack event platform for guest registration, QR check-in, administration, and on-site displays — built and tested with about 2,000 users ahead of a scheduled corporate year-end event.",
    overview: [
      "This platform supports a large corporate year-end gathering with guest registration, QR-based check-in, event administration, and stage/display screens for the floor.",
      "It has been developed and tested with about 2,000 users. The scheduled event has not yet taken place, so this case study reflects the product as built and validated in testing — not a post-event report.",
      "Built with Next.js, Prisma, and MariaDB, with role-based access for organizers, door staff, and display operators.",
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
    gallery: [
      {
        src: assetOrFallback(
          "/assets/event-platform-admin.webp",
          "/assets/project-event-platform.svg",
        ),
        alt: "Event administration dashboard",
      },
      {
        src: assetOrFallback(
          "/assets/event-platform-checkin.webp",
          "/assets/project-event-platform.svg",
        ),
        alt: "QR code scanner check-in interface",
      },
      {
        src: assetOrFallback(
          "/assets/event-platform-display.webp",
          "/assets/project-event-platform.svg",
        ),
        alt: "Stage and floor display screen",
      },
    ],
    features: [
      "Guest registration and invite flows",
      "QR-based check-in on mobile",
      "Event administration and attendance views",
      "Stage and floor display management",
      "Interactive on-site event features for staff and guests",
    ],
    featured: true,
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

export function normalizeGalleryItem(
  item: string | ProjectGalleryItem,
  projectTitle: string,
  index: number,
): ProjectGalleryItem {
  if (typeof item === "string") {
    return {
      src: item,
      alt: `${projectTitle} screenshot ${index + 1}`,
    };
  }
  return item;
}

export function getProjectGallery(project: Project): ProjectGalleryItem[] {
  if (project.gallery && project.gallery.length > 0) {
    return project.gallery.map((item, index) =>
      normalizeGalleryItem(item, project.title, index),
    );
  }
  const shots = [
    project.heroImage ?? project.image,
    project.mobileImage,
    project.image,
  ].filter((src): src is string => Boolean(src));
  return [...new Set(shots)].map((src, index) =>
    normalizeGalleryItem(src, project.title, index),
  );
}

export function getProjectStack(project: Project): string[] {
  return project.stack && project.stack.length > 0 ? project.stack : project.tags;
}
