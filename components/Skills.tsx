import { skillGroups } from "@/data/skills";

function SqlIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width={36}
      height={36}
      className="h-9 w-9 text-[#336791]"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
      <path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
    </svg>
  );
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
                {group.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex flex-col items-start gap-3 rounded-lg border border-border bg-surface/60 p-4 transition hover:border-ink/20"
                  >
                    {skill.iconSrc ? (
                      // eslint-disable-next-line @next/next/no-img-element -- local SVG brand logos
                      <img
                        src={skill.iconSrc}
                        alt={`${skill.name} logo`}
                        width={36}
                        height={36}
                        className="h-9 w-9 object-contain"
                        loading="lazy"
                      />
                    ) : (
                      <SqlIcon />
                    )}
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
