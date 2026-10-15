export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  demoUrl?: string;
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    id: "project-one",
    title: "Project One",
    description:
      "A sample portfolio piece. Replace this with a real project — what it does, who it helps, and what you built.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    image: "/projects/project-one.svg",
    demoUrl: "https://example.com",
    repoUrl: "https://github.com/danielsindunata/project-one",
  },
  {
    id: "project-two",
    title: "Project Two",
    description:
      "Another placeholder project. Swap in a screenshot under public/projects and update the links in data/projects.ts.",
    tags: ["React", "API", "UI"],
    image: "/projects/project-two.svg",
    demoUrl: "https://example.com",
    repoUrl: "https://github.com/danielsindunata/project-two",
  },
  {
    id: "project-three",
    title: "Project Three",
    description:
      "Showcase a tool, experiment, or client work. Keep the description short and focused on the outcome.",
    tags: ["Full Stack", "Design"],
    image: "/projects/project-three.svg",
    repoUrl: "https://github.com/danielsindunata/project-three",
  },
];
