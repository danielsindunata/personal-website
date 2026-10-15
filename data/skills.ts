export type SkillGroup = {
  title: string;
  skills: { name: string; color: string }[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: [
      { name: "Next.js", color: "#000000" },
      { name: "React", color: "#61DAFB" },
      { name: "TypeScript", color: "#3178C6" },
      { name: "Tailwind CSS", color: "#06B6D4" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", color: "#339933" },
      { name: "Prisma", color: "#2D3748" },
      { name: "MariaDB", color: "#C32129" },
      { name: "SQL", color: "#336791" },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", color: "#F05032" },
      { name: "Docker", color: "#2496ED" },
      { name: "Nginx", color: "#009639" },
      { name: "Power BI", color: "#F2C811" },
    ],
  },
];
