import Image from "next/image";
import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectGallery } from "@/components/ProjectGallery";
import { TechIcon } from "@/components/TechIcon";
import {
  getOtherProjects,
  getProjectGallery,
  getProjectOverview,
  getProjectStack,
  type Project,
} from "@/data/projects";

type ProjectDetailProps = {
  project: Project;
};

export function ProjectDetail({ project }: ProjectDetailProps) {
  const overview = getProjectOverview(project);
  const gallery = getProjectGallery(project);
  const stack = getProjectStack(project);
  const others = getOtherProjects(project.id);
  const hasMobile = Boolean(project.mobileImage);
  const objectFit = project.objectFit ?? "contain";
  const hasFeatures = Boolean(project.features && project.features.length > 0);
  const hasRole = Boolean(
    project.role || (project.contributions && project.contributions.length > 0),
  );
  const hasTechnical = Boolean(
    project.technicalNotes && project.technicalNotes.length > 0,
  );
  const exploreHref = hasFeatures ? "#key-features" : "#screenshots";

  return (
    <article className="bg-background pt-24 md:pt-28">
      <div className="mx-auto max-w-6xl px-6">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted transition hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-teal"
        >
          <span aria-hidden>←</span>
          Back to projects
        </Link>

        <header className="mt-8 max-w-3xl">
          <h1 className="font-display text-3xl tracking-tight text-ink sm:text-4xl lg:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            {project.description}
          </p>
          {project.statusNote ? (
            <p className="mt-4 border-l-2 border-accent-teal/60 pl-4 text-sm leading-relaxed text-muted">
              {project.statusNote}
            </p>
          ) : null}
        </header>

        <div className="relative mt-10 w-full">
          {hasMobile ? (
            <div className="relative mx-auto aspect-[5/3] max-w-4xl">
              <div className="absolute inset-x-0 top-0 bottom-[10%] overflow-hidden rounded-lg border border-border bg-surface shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
                <div className="flex h-7 items-center gap-1.5 border-b border-border bg-surface px-3">
                  <span className="h-2 w-2 rounded-full bg-border" />
                  <span className="h-2 w-2 rounded-full bg-border" />
                  <span className="h-2 w-2 rounded-full bg-border" />
                </div>
                <div className="relative h-[calc(100%-1.75rem)] bg-[#121514]">
                  <Image
                    src={project.heroImage ?? project.image}
                    alt={`${project.title} desktop preview`}
                    fill
                    priority
                    className={
                      objectFit === "cover"
                        ? "object-cover object-top"
                        : "object-contain object-top p-2"
                    }
                    sizes="(max-width: 1024px) 100vw, 896px"
                  />
                </div>
              </div>
              <div className="absolute bottom-0 right-4 w-[28%] overflow-hidden rounded-[1.1rem] border border-border bg-ink shadow-lg sm:right-8">
                <div className="mx-auto mt-1.5 h-1 w-8 rounded-full bg-white/25" />
                <div className="relative mt-1.5 aspect-[9/16] bg-[#121514]">
                  <Image
                    src={project.mobileImage!}
                    alt={`${project.title} mobile preview`}
                    fill
                    className="object-contain object-top"
                    sizes="160px"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="overflow-hidden rounded-lg border border-border bg-[#121514] shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
              <div className="flex h-7 items-center gap-1.5 border-b border-border bg-surface px-3">
                <span className="h-2 w-2 rounded-full bg-border" />
                <span className="h-2 w-2 rounded-full bg-border" />
                <span className="h-2 w-2 rounded-full bg-border" />
              </div>
              <div className="relative aspect-[16/10]">
                <Image
                  src={project.heroImage ?? project.image}
                  alt={`${project.title} preview`}
                  fill
                  priority
                  className={
                    objectFit === "cover"
                      ? "object-cover"
                      : "object-contain p-3 sm:p-4"
                  }
                  sizes="(max-width: 1024px) 100vw, 1152px"
                />
              </div>
            </div>
          )}
        </div>

        <ul className="mt-8 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="border border-border bg-surface px-3 py-1 text-xs font-medium text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={exploreHref}
            className="bg-ink px-5 py-3 text-sm font-semibold text-on-dark transition hover:bg-ink-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-teal"
          >
            Explore Features
          </a>
          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border bg-background px-5 py-3 text-sm font-semibold text-ink transition hover:border-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-teal"
            >
              View live site
            </a>
          ) : null}
          {project.repoUrl ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border bg-background px-5 py-3 text-sm font-semibold text-ink transition hover:border-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-teal"
            >
              View on GitHub
            </a>
          ) : null}
        </div>

        <div className="mt-16 space-y-16 border-t border-border pt-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <section>
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                Overview
              </h2>
              {project.problem ? (
                <p className="mt-5 text-base font-medium leading-relaxed text-ink">
                  {project.problem}
                </p>
              ) : null}
              <div
                className={`space-y-4 text-base leading-relaxed text-foreground ${
                  project.problem ? "mt-4" : "mt-5"
                }`}
              >
                {overview.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
              </div>
            </section>

            {hasRole ? (
              <section>
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                  Role &amp; Contributions
                </h2>
                {project.role ? (
                  <p className="mt-5 text-base leading-relaxed text-foreground">
                    {project.role}
                  </p>
                ) : null}
                {project.contributions && project.contributions.length > 0 ? (
                  <ul
                    className={`space-y-3 ${project.role ? "mt-5" : "mt-5"}`}
                  >
                    {project.contributions.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-foreground sm:text-base"
                      >
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 bg-ink"
                          aria-hidden
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ) : null}
          </div>

          {hasFeatures ? (
            <section id="key-features" className="scroll-mt-28">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                Key Features
              </h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {project.features!.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-foreground sm:text-base"
                  >
                    <span
                      className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center bg-status text-[10px] font-bold text-white"
                      aria-hidden
                    >
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {hasTechnical ? (
            <section>
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                Technical Implementation
              </h2>
              <ul className="mt-5 space-y-3">
                {project.technicalNotes!.map((note) => (
                  <li
                    key={note}
                    className="flex items-start gap-3 text-sm text-foreground sm:text-base"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 bg-ink"
                      aria-hidden
                    />
                    {note}
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {gallery.length > 0 ? (
            <section id="screenshots" className="scroll-mt-28">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                Screenshots
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                A walkthrough of the interfaces that make up this project.
              </p>
              <ProjectGallery items={gallery} objectFit={objectFit} />
            </section>
          ) : null}

          <section>
            <h2 className="font-display text-2xl tracking-tight text-ink sm:text-3xl">
              Tech Stack
            </h2>
            <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {stack.map((item) => (
                <li
                  key={item}
                  className="flex flex-col items-center gap-3 border border-border bg-surface px-4 py-5 text-center"
                >
                  <TechIcon name={item} size={36} className="h-9 w-9" />
                  <span className="text-xs font-medium text-foreground">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {project.outcome ? (
            <section className="max-w-3xl">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                Outcome
              </h2>
              <p className="mt-5 text-base leading-relaxed text-foreground">
                {project.outcome}
              </p>
            </section>
          ) : null}
        </div>
      </div>

      {others.length > 0 ? (
        <section className="mt-20 bg-surface-dark py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex items-end justify-between gap-4">
              <h2 className="font-display text-2xl tracking-tight text-on-dark sm:text-3xl">
                More Projects
              </h2>
              <Link
                href="/#projects"
                className="shrink-0 text-sm font-semibold text-on-dark-muted transition hover:text-accent-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-teal"
              >
                View all →
              </Link>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {others.map((other) => (
                <ProjectCard key={other.id} project={other} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </article>
  );
}
