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
  problem?: string;
  role?: string;
  contributions?: string[];
  technicalNotes?: string[];
  outcome?: string;
  statusNote?: string;
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
      "A full-stack event operations platform covering guest registration, QR check-in, administration, and on-site displays — built and tested with about 2,000 users ahead of a corporate year-end event planned for December 2026.",
    problem:
      "Large corporate gatherings need a single system for invitations, door check-in, organizer oversight, and floor displays — instead of scattered spreadsheets, paper lists, and ad-hoc screens.",
    overview: [
      "This platform supports a corporate year-end gathering end to end: guest registration and invites, QR-based check-in at the door, event administration, and stage/floor display screens.",
      "It has been developed and tested with about 2,000 users. The event is planned for December 2026 and has not yet taken place, so this case study reflects the product as built and validated in testing — not a post-event report.",
      "Built with Next.js, Prisma, and MariaDB, with role-based access for organizers, door staff, and display operators.",
    ],
    role: "Full-stack developer responsible for product delivery across registration, check-in, administration, and display workflows.",
    contributions: [
      "Designed and implemented guest registration and invite flows",
      "Built mobile-friendly QR check-in for door staff",
      "Delivered administration views for attendance and event operations",
      "Implemented stage and floor display management for on-site screens",
      "Applied role-based access for organizers, door staff, and display operators",
    ],
    features: [
      "Guest registration and invite flows",
      "QR-based check-in on mobile",
      "Event administration and attendance views",
      "Stage and floor display management",
      "Interactive on-site features for staff and guests",
    ],
    technicalNotes: [
      "Next.js application with Prisma ORM against MariaDB",
      "Role-based authorization for organizers, door staff, and display operators",
      "QR check-in flow designed for reliable use on mobile devices at the door",
      "Display surfaces driven from the same admin-managed event data",
    ],
    outcome:
      "Platform built and validated in testing with about 2,000 users ahead of the scheduled event. Ready for on-site use when the December 2026 gathering takes place.",
    statusNote:
      "Pre-event. The corporate year-end event is planned for December 2026 and has not yet taken place.",
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
        alt: "Event administration dashboard with attendance and operations views",
      },
      {
        src: assetOrFallback(
          "/assets/event-platform-checkin.webp",
          "/assets/project-event-platform.svg",
        ),
        alt: "Mobile QR code scanner used for guest check-in at the door",
      },
      {
        src: assetOrFallback(
          "/assets/event-platform-display.webp",
          "/assets/project-event-platform.svg",
        ),
        alt: "Stage and floor display screen driven by the event platform",
      },
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
    problem:
      "Teams need a shared drawing surface that is not limited to a fixed slide or page size, where sketches and markup stay in sync as people work together.",
    overview: [
      "Sticky notes, sketches, and markup should live on one shared surface that does not stop at the edge of a slide. Multiple people need to draw without waiting for a turn.",
      "This whiteboard provides an infinite, zoomable canvas with real-time collaboration over WebSockets, so teammates can sketch and annotate together.",
      "Boards can be organized, shared, and exported — useful for workshops, design reviews, and day-to-day planning.",
    ],
    role: "Full-stack developer — product experience and engineering for the collaborative canvas application.",
    contributions: [
      "Built the infinite zoomable drawing canvas",
      "Implemented real-time multiplayer collaboration over WebSockets",
      "Added board organization and sharing flows",
      "Delivered export-friendly snapshot and PDF-oriented flows",
    ],
    features: [
      "Infinite zoomable canvas for sketching and annotation",
      "Real-time multiplayer collaboration",
      "Board organization and sharing",
      "Export-friendly snapshot and PDF flows",
    ],
    technicalNotes: [
      "Next.js and React front end with TypeScript",
      "HTML Canvas for the drawing surface",
      "WebSockets for live multiplayer updates",
      "Board persistence and export paths for workshop follow-up",
    ],
    outcome:
      "A working collaborative whiteboard covering drawing, live collaboration, board management, and export — suitable for workshops and planning sessions.",
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
      {
        src: assetOrFallback(
          "/assets/whiteboard-boards.webp",
          "/assets/project-whiteboard.svg",
        ),
        alt: "Board list and management view for organizing whiteboards",
      },
      {
        src: assetOrFallback(
          "/assets/whiteboard-pdf.webp",
          "/assets/project-whiteboard.svg",
        ),
        alt: "Export flow for capturing a whiteboard as a shareable snapshot or PDF",
      },
    ],
    objectFit: "contain",
  },
  {
    id: "rsp-company-portal",
    title: "RSP Company Portal",
    description:
      "Internal portal for documents, announcements, and day-to-day team ops.",
    longDescription:
      "An internal company portal that centralizes documents, announcements, payroll views, and operational planning so teams stop hunting across drives and chats.",
    problem:
      "Day-to-day company operations often live in scattered folders, group chats, and one-off spreadsheets. Staff waste time finding the latest announcement, form, or schedule.",
    overview: [
      "The RSP Company Portal brings documents, announcements, and operational tools into one Next.js internal app with a clear navigation model for teams.",
      "Modules I implemented include document and announcement surfaces, payroll-facing admin views, and Gantt-style planning timelines — so managers and staff share a clearer source of truth.",
      "This case study highlights the modules shown in the screenshots below. It does not claim that every company workflow is finished or rolled out company-wide.",
    ],
    role: "Frontend developer implementing internal business workflow modules for the company portal.",
    contributions: [
      "Built centralized documents and announcements views",
      "Implemented payroll and admin-facing interfaces",
      "Delivered Gantt-style operational planning timelines",
      "Established consistent internal navigation for team modules",
    ],
    features: [
      "Centralized documents and announcements",
      "Payroll and admin-facing views",
      "Operational planning timelines (Gantt-style)",
      "Consistent internal navigation for teams",
    ],
    technicalNotes: [
      "Next.js app with React, TypeScript, and Tailwind CSS",
      "Module-based navigation for internal team workflows",
      "UI patterns tailored to operations staff, not consumer marketing pages",
    ],
    outcome:
      "Implemented portal modules covering documents, payroll views, and planning timelines — demonstrated in the screenshots on this page.",
    statusNote:
      "Development showcase. The modules pictured are implemented; this is not a claim that the portal is fully deployed across every team or workflow.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
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
      {
        src: assetOrFallback(
          "/assets/company-portal.webp",
          "/assets/project-rsp-portal.svg",
        ),
        alt: "RSP Company Portal home with documents and announcements navigation",
      },
      {
        src: assetOrFallback(
          "/assets/company-portal-payroll.webp",
          "/assets/project-rsp-portal.svg",
        ),
        alt: "Payroll and admin-facing view inside the company portal",
      },
      {
        src: assetOrFallback(
          "/assets/company-portal-gantt.webp",
          "/assets/project-rsp-portal.svg",
        ),
        alt: "Gantt-style operational planning timeline in the portal",
      },
    ],
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
