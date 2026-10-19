import Image from "next/image";
import Link from "next/link";
import { getProjectHref, type Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  variant?: "featured" | "standard";
};

export function ProjectCard({
  project,
  variant = "standard",
}: ProjectCardProps) {
  const href = getProjectHref(project);
  const isFeatured = variant === "featured";
  const objectFit = project.objectFit ?? "contain";

  return (
    <article
      className={`group border border-white/10 transition duration-300 hover:border-accent-teal/40 focus-within:border-accent-teal/40 ${
        isFeatured
          ? "grid gap-0 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:items-stretch"
          : "flex h-full flex-col"
      }`}
    >
      <div
        className={`relative overflow-hidden bg-[#121514] ${
          isFeatured
            ? "aspect-[16/10] min-h-[240px] sm:min-h-[300px] lg:aspect-auto lg:min-h-[400px]"
            : "aspect-[16/10]"
        }`}
      >
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          className={`motion-safe-scale transition duration-500 ease-out group-hover:scale-[1.02] ${
            objectFit === "cover" ? "object-cover" : "object-contain p-2 sm:p-3"
          }`}
          sizes={
            isFeatured
              ? "(max-width: 1024px) 100vw, 60vw"
              : "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          }
        />
      </div>

      <div
        className={
          isFeatured
            ? "flex flex-col justify-center px-6 py-8 lg:px-10 lg:py-12"
            : "flex flex-1 flex-col p-5 sm:p-6"
        }
      >
        {isFeatured ? (
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-teal">
            Featured
          </p>
        ) : null}
        <h3
          className={`font-display tracking-tight text-on-dark ${
            isFeatured
              ? "mt-3 text-2xl sm:text-3xl lg:text-4xl"
              : "text-lg sm:text-xl"
          }`}
        >
          {project.title}
        </h3>
        <p
          className={`leading-relaxed text-on-dark-muted ${
            isFeatured ? "mt-4 max-w-md text-base" : "mt-2.5 text-sm"
          }`}
        >
          {isFeatured
            ? (project.longDescription ?? project.description)
            : project.description}
        </p>
        <ul
          className={`flex flex-wrap gap-1.5 ${isFeatured ? "mt-5" : "mt-4"}`}
        >
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="border border-white/10 px-2.5 py-0.5 text-[11px] font-medium text-on-dark-muted"
            >
              {tag}
            </li>
          ))}
        </ul>
        <Link
          href={href}
          className={`inline-flex items-center gap-2 text-sm font-semibold text-on-dark transition hover:text-accent-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-teal ${
            isFeatured ? "mt-8" : "mt-auto pt-5"
          }`}
        >
          View project
          <span
            aria-hidden
            className="transition group-hover:translate-x-0.5 motion-safe-translate"
          >
            →
          </span>
        </Link>
      </div>
    </article>
  );
}
