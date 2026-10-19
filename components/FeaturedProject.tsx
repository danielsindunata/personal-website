import Image from "next/image";
import Link from "next/link";
import { featuredProject, getProjectHref } from "@/data/projects";

export function FeaturedProject() {
  const project = featuredProject;
  const hasMobile = Boolean(project.mobileImage);
  const objectFit = project.objectFit ?? "contain";

  return (
    <section id="featured" className="scroll-mt-20 bg-surface py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-status-soft">
            Featured project
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-ink sm:text-4xl">
            {project.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted">
            {project.longDescription ?? project.description}
          </p>

          {project.features && project.features.length > 0 ? (
            <ul className="mt-6 space-y-3">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-sm text-foreground"
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
          ) : null}

          <ul className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="border border-border bg-background px-3 py-1 text-xs font-medium text-muted"
              >
                {tag}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={getProjectHref(project)}
              className="bg-ink px-5 py-3 text-sm font-semibold text-on-dark transition hover:bg-ink-soft"
            >
              View project →
            </Link>
            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-border bg-background px-5 py-3 text-sm font-semibold text-ink transition hover:border-ink"
              >
                View live site
              </a>
            ) : null}
            {project.repoUrl ? (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-border bg-background px-5 py-3 text-sm font-semibold text-ink transition hover:border-ink"
              >
                View on GitHub
              </a>
            ) : null}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          {hasMobile ? (
            <div className="relative aspect-[5/4]">
              <div className="absolute inset-x-0 top-0 bottom-[12%] overflow-hidden rounded-lg border border-border bg-background shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
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
                    className={
                      objectFit === "cover"
                        ? "object-cover object-top"
                        : "object-contain object-top"
                    }
                    sizes="(max-width: 1024px) 90vw, 45vw"
                  />
                </div>
              </div>
              <div className="absolute bottom-0 right-4 w-[30%] overflow-hidden rounded-[1.1rem] border border-border bg-ink shadow-lg">
                <div className="mx-auto mt-1.5 h-1 w-8 rounded-full bg-white/25" />
                <div className="relative mt-1.5 aspect-[9/16] bg-[#121514]">
                  <Image
                    src={project.mobileImage!}
                    alt={`${project.title} mobile preview`}
                    fill
                    className="object-contain object-top"
                    sizes="140px"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="overflow-hidden rounded-lg border border-border bg-background shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
              <div className="flex h-7 items-center gap-1.5 border-b border-border bg-surface px-3">
                <span className="h-2 w-2 rounded-full bg-border" />
                <span className="h-2 w-2 rounded-full bg-border" />
                <span className="h-2 w-2 rounded-full bg-border" />
              </div>
              <div className="relative aspect-[16/10] bg-[#121514]">
                <Image
                  src={project.heroImage ?? project.image}
                  alt={`${project.title} preview`}
                  fill
                  className={
                    objectFit === "cover"
                      ? "object-cover"
                      : "object-contain p-2 sm:p-3"
                  }
                  sizes="(max-width: 1024px) 90vw, 45vw"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
