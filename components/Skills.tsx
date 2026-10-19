import { TechIcon } from "@/components/TechIcon";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">
          Tools I work with
        </h2>
        <p className="mt-3 max-w-xl text-muted">
          A practical stack for shipping full-stack products, data views, and
          reliable deployments.
        </p>

        <div className="mt-12 space-y-12">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">
                {group.title}
              </h3>
              <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
                {group.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex flex-col items-start gap-3 border border-border bg-surface/50 px-4 py-4 transition hover:border-ink/15"
                  >
                    <span className="flex h-9 w-9 items-center justify-center">
                      <TechIcon name={skill.name} size={36} />
                    </span>
                    <span className="text-sm font-medium text-ink">
                      {skill.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
