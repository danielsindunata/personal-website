export type Skill = {
  name: string;
  iconSrc?: string;
};

export type SkillGroup = {
  title: string;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: [
      { name: "Next.js", iconSrc: "/icons/nextdotjs.svg" },
      { name: "React", iconSrc: "/icons/react.svg" },
      { name: "TypeScript", iconSrc: "/icons/typescript.svg" },
      { name: "Tailwind CSS", iconSrc: "/icons/tailwindcss.svg" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", iconSrc: "/icons/nodedotjs.svg" },
      { name: "Prisma", iconSrc: "/icons/prisma.svg" },
      { name: "MariaDB", iconSrc: "/icons/mariadb.svg" },
      { name: "SQL" },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", iconSrc: "/icons/git.svg" },
      { name: "Docker", iconSrc: "/icons/docker.svg" },
      { name: "Nginx", iconSrc: "/icons/nginx.svg" },
      { name: "Power BI", iconSrc: "/icons/powerbi.svg" },
    ],
  },
];
