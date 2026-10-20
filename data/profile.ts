export const profile = {
  name: "Daniel Sindunata",
  title: "Full-Stack Developer",
  headline: "Turning real-world problems into practical digital solutions.",
  heroSubtitle: "Full-Stack Developer building practical digital solutions.",
  heroImage: "/assets/hero-developer-workspace-4k.png",
  tagline:
    "A developer with an operational mindset. I build practical software that solves real business problems, combining experience in operations, data, and full-stack development.",
  bio: [
    "I build practical software that solves real business problems, combining experience in operations, data, and full-stack development.",
    "That usually means internal tools teams actually use: event platforms, company portals, and reporting that replaces messy spreadsheets with something they can trust.",
  ],
  email: "daniel.sindunata@gmail.com",
  location: "Semarang, Indonesia",
  availability: "Open to opportunities",
  cvUrl: "/cv.pdf",
  workspaceImage: "/assets/company-portal.webp",
  workspaceImageAlt:
    "RSP Company Portal interface showing internal documents and navigation",
  contactImage: "/contact/bg.svg",
  social: {
    github: "https://github.com/danielsindunata",
    linkedin: "https://www.linkedin.com/in/daniel-sindunata1/",
  },
  stats: [
    { label: "Full-Stack", detail: "End-to-end applications" },
    { label: "Data", detail: "Insights and reporting" },
    { label: "Operations", detail: "Process-first design" },
    { label: "3 Projects", detail: "Production-minded builds" },
  ],
  experience: [
    {
      dates: "Jul 2026 – Present",
      role: "Full-Stack Developer",
      company: "Right Side People Pte Ltd",
      description:
        "Internal apps for master data, finance, reporting, and collaborative tools.",
    },
    {
      dates: "Mar 2026 – Jul 2026",
      role: "Business Operational Developer",
      company: "Saladayo (F&B)",
      description:
        "Operational dashboards and tools for store ops, production, and procurement.",
    },
    {
      dates: "2024 – 2026",
      role: "Internal System Developer",
      company: "Dallas Meat Semarang",
      description:
        "Inventory, Accurate setup, and automation for the family meat business.",
    },
  ],
  education: [
    {
      dates: "Jan 2026 – Aug 2026",
      program: "Data Analyst Bootcamp",
      school: "Dibimbing.id",
    },
    {
      dates: "2015 – 2017",
      program: "Advanced Diploma of Hospitality Management",
      school: "William Angliss Institute, Melbourne",
    },
  ],
  languages: [
    { name: "Indonesian", level: "Native" },
    { name: "English", level: "Professional" },
  ],
} as const;
