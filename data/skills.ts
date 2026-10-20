export type Skill = {
  name: string;
};

export type SkillGroup = {
  title: string;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: [
      { name: "Next.js" },
      { name: "React" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js" },
      { name: "Prisma" },
      { name: "MariaDB" },
      { name: "SQL" },
    ],
  },
  {
    title: "Data & Analytics",
    skills: [
      { name: "Python" },
      { name: "PostgreSQL" },
      { name: "Power BI" },
      { name: "Looker Studio" },
      { name: "Excel" },
    ],
  },
  {
    title: "Tools & Others",
    skills: [{ name: "Git" }, { name: "Docker" }, { name: "Nginx" }],
  },
];
