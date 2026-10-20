export type TechIcon = {
  src?: string;
  /** Inline fallback when no brand logo exists */
  fallback?: "database" | "canvas" | "websocket";
};

const techIconByName: Record<string, TechIcon> = {
  "next.js": { src: "/icons/nextdotjs.svg" },
  react: { src: "/icons/react.svg" },
  typescript: { src: "/icons/typescript.svg" },
  "tailwind css": { src: "/icons/tailwindcss.svg" },
  tailwind: { src: "/icons/tailwindcss.svg" },
  "node.js": { src: "/icons/nodedotjs.svg" },
  prisma: { src: "/icons/prisma.svg" },
  mariadb: { src: "/icons/mariadb.svg" },
  sql: { fallback: "database" },
  git: { src: "/icons/git.svg" },
  docker: { src: "/icons/docker.svg" },
  nginx: { src: "/icons/nginx.svg" },
  "power bi": { src: "/icons/powerbi.svg" },
  python: { src: "/icons/python.svg" },
  postgresql: { src: "/icons/postgresql.svg" },
  "looker studio": { src: "/icons/looker.svg" },
  looker: { src: "/icons/looker.svg" },
  canvas: { fallback: "canvas" },
  websockets: { fallback: "websocket" },
};

export function getTechIcon(name: string): TechIcon {
  return techIconByName[name.toLowerCase()] ?? {};
}
