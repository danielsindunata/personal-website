import { skillGroups } from "@/data/skills";

function isLightColor(hex: string) {
  const value = hex.replace("#", "");
  const r = parseInt(value.slice(0, 2), 16);
  const g = parseInt(value.slice(2, 4), 16);
  const b = parseInt(value.slice(4, 6), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 160;
}

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
              <ul className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {group.skills.map((skill) => {
                  const light = isLightColor(skill.color);
                  return (
                    <li
                      key={skill.name}
                      className="flex flex-col items-start gap-3 rounded-lg border border-border bg-surface/60 p-4 transition hover:border-ink/20"
                    >
                      <span
                        className="inline-flex h-12 w-12 items-center justify-center rounded-md text-sm font-bold shadow-sm"
                        style={{
                          backgroundColor: skill.color,
                          color: light ? "#0a0a0a" : "#ffffff",
                        }}
                        aria-hidden
                      >
                        {skill.name.slice(0, 2).toUpperCase()}
                      </span>
                      <span className="text-sm font-medium text-ink">
                        {skill.name}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
