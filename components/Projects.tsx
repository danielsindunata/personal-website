import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export function Projects() {
  const featured = projects.find((project) => project.featured) ?? projects[0];
  const others = projects.filter((project) => project.id !== featured.id);

  return (
    <section
      id="projects"
      className="scroll-mt-20 bg-surface-dark py-20 text-on-dark md:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-teal">
            Selected work
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-on-dark sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
            Projects built to solve real problems.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-on-dark-muted">
            A selection of business applications, internal tools, and data
            systems I&apos;ve built or developed.
          </p>
        </div>

        <div className="mt-14 md:mt-16">
          <ProjectCard project={featured} variant="featured" />
        </div>

        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3 lg:gap-8">
          {others.map((project) => (
            <li key={project.id}>
              <ProjectCard project={project} variant="standard" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
