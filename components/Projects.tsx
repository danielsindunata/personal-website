import Image from "next/image";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="font-display text-4xl tracking-tight text-ink">
          Projects
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          Selected work. Replace the placeholders with your real projects and
          screenshots.
        </p>

        <ul className="mt-12 grid gap-10">
          {projects.map((project) => (
            <li
              key={project.id}
              className="group overflow-hidden rounded-xl border border-border bg-surface shadow-[0_2px_6px_rgba(0,0,0,0.06)] transition hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)]"
            >
              <div className="grid md:grid-cols-2">
                <div className="relative aspect-[16/10] bg-ink/5 md:aspect-auto md:min-h-[260px]">
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="flex flex-col justify-center p-6 md:p-8">
                  <h3 className="font-display text-2xl text-ink">
                    {project.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted">
                    {project.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium">
                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent transition hover:text-accent-deep"
                      >
                        Live demo
                      </a>
                    ) : null}
                    {project.repoUrl ? (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-ink transition hover:text-accent"
                      >
                        Source
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
