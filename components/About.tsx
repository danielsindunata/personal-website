import Image from "next/image";
import { profile } from "@/data/profile";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-surface py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden bg-ink/10 lg:mx-0 lg:max-w-none">
          <Image
            src={profile.workspaceImage}
            alt="Workspace"
            fill
            className="object-cover grayscale"
            sizes="(max-width: 1024px) 90vw, 40vw"
          />
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr]">
          <div>
            <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">
              A developer with an operational mindset.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/90 whitespace-pre-line">
              {profile.bio}
            </div>

            <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {profile.stats.map((stat) => (
                <li key={stat.label} className="border-t border-border pt-3">
                  <p className="text-sm font-semibold text-ink">{stat.label}</p>
                  <p className="mt-1 text-xs text-muted">{stat.detail}</p>
                </li>
              ))}
            </ul>

            <a
              href={profile.cvUrl}
              className="mt-8 inline-flex bg-ink px-5 py-3 text-sm font-semibold text-on-dark transition hover:bg-ink-soft"
            >
              Download CV
            </a>
          </div>

          <aside>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">
              Background
            </h3>
            <ol className="relative mt-6 space-y-8 border-l border-border pl-6">
              {profile.timeline.map((item) => (
                <li key={`${item.year}-${item.title}`} className="relative">
                  <span
                    className="absolute -left-[1.7rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-ink bg-surface"
                    aria-hidden
                  />
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                    {item.year}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-ink">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </div>
    </section>
  );
}
