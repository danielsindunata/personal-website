import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-dvh items-center overflow-hidden"
    >
      <div className="atmosphere absolute inset-0" aria-hidden />
      <div className="relative mx-auto w-full max-w-5xl px-6 pb-16 pt-28">
        <p className="animate-fade-in text-sm font-medium uppercase tracking-[0.2em] text-accent">
          Portfolio
        </p>
        <h1 className="animate-fade-up mt-4 font-display text-5xl leading-[1.1] tracking-tight text-ink sm:text-6xl md:text-7xl">
          {profile.name}
        </h1>
        <p className="animate-fade-up animate-delay-1 mt-4 text-xl text-muted sm:text-2xl">
          {profile.title}
        </p>
        <p className="animate-fade-up animate-delay-2 mt-6 max-w-xl text-lg leading-relaxed text-foreground/90">
          {profile.tagline}
        </p>
        <div className="animate-fade-up animate-delay-3 mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-accent px-[18px] py-2.5 text-sm font-medium text-white transition hover:bg-accent-deep"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-border bg-surface px-[18px] py-2.5 text-sm font-medium text-ink transition hover:border-accent hover:text-accent"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
