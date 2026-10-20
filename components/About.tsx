import Image from "next/image";
import { profile } from "@/data/profile";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.2fr_0.85fr] lg:gap-14">
          {/* Visual */}
          <div className="min-w-0 w-full">
            <div className="overflow-hidden rounded-lg border border-border bg-background shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
              <div className="flex h-7 items-center gap-1.5 border-b border-border bg-surface px-3">
                <span className="h-2 w-2 rounded-full bg-border" aria-hidden />
                <span className="h-2 w-2 rounded-full bg-border" aria-hidden />
                <span className="h-2 w-2 rounded-full bg-border" aria-hidden />
              </div>
              <div className="relative aspect-[16/10] bg-[#121514]">
                <Image
                  src={profile.workspaceImage}
                  alt={profile.workspaceImageAlt}
                  fill
                  className="object-contain object-top p-1.5 sm:p-2"
                  sizes="(max-width: 1024px) 90vw, 30vw"
                />
              </div>
            </div>
          </div>

          {/* Introduction */}
          <div className="min-w-0">
            <h2 className="font-display text-[2.125rem] leading-[1.15] tracking-tight text-ink sm:text-4xl sm:leading-[1.12] lg:text-[2.75rem] lg:leading-[1.12]">
              A developer with an
              <br className="hidden sm:block" /> operational mindset.
            </h2>

            <div className="mt-6 max-w-prose space-y-5 text-base leading-[1.75] text-foreground/90">
              {profile.bio.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>

            <ul className="mt-10 grid grid-cols-2 gap-x-5 gap-y-6 sm:grid-cols-4 sm:gap-x-4">
              {profile.stats.map((stat) => (
                <li
                  key={stat.label}
                  className="min-w-0 border-t border-border pt-3"
                >
                  <p className="text-sm font-semibold text-ink">{stat.label}</p>
                  <p className="mt-1.5 text-xs leading-snug text-muted">
                    {stat.detail}
                  </p>
                </li>
              ))}
            </ul>

            <a
              href={profile.cvUrl}
              className="mt-10 inline-flex bg-ink px-6 py-3.5 text-sm font-semibold text-on-dark transition hover:bg-ink-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-teal"
            >
              Download CV
            </a>
          </div>

          <aside className="min-w-0">
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">
              Experience
            </h3>
            <ol className="relative mt-6 space-y-8 border-l border-border pl-6">
              {profile.experience.map((item) => (
                <li key={`${item.dates}-${item.role}`} className="relative">
                  <span
                    className="absolute -left-[1.6875rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-ink bg-surface"
                    aria-hidden
                  />
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                    {item.dates}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-ink">
                    {item.role}
                  </p>
                  <p className="mt-0.5 text-sm text-ink/80">{item.company}</p>
                  <p className="mt-1 text-sm leading-snug text-muted">
                    {item.description}
                  </p>
                </li>
              ))}
            </ol>

            <h3 className="mt-12 text-sm font-semibold uppercase tracking-[0.16em] text-muted">
              Education
            </h3>
            <ol className="relative mt-6 space-y-8 border-l border-border pl-6">
              {profile.education.map((item) => (
                <li key={`${item.dates}-${item.program}`} className="relative">
                  <span
                    className="absolute -left-[1.6875rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-ink bg-surface"
                    aria-hidden
                  />
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                    {item.dates}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-ink">
                    {item.program}
                  </p>
                  <p className="mt-1 text-sm leading-snug text-muted">
                    {item.school}
                  </p>
                </li>
              ))}
            </ol>

            <h3 className="mt-12 text-sm font-semibold uppercase tracking-[0.16em] text-muted">
              Languages
            </h3>
            <ul className="mt-4 space-y-2">
              {profile.languages.map((language) => (
                <li
                  key={language.name}
                  className="flex items-baseline justify-between gap-3 text-sm"
                >
                  <span className="font-semibold text-ink">{language.name}</span>
                  <span className="text-muted">{language.level}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
