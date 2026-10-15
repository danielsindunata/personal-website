import { profile } from "@/data/profile";

export function About() {
  return (
    <section id="about" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="font-display text-4xl tracking-tight text-ink">About</h2>
        <p className="mt-3 max-w-2xl text-muted">
          A short introduction — who I am and how I like to work.
        </p>
        <div className="mt-10 max-w-2xl space-y-5 text-lg leading-relaxed text-foreground/90 whitespace-pre-line">
          {profile.bio}
        </div>
        <p className="mt-8 text-sm text-muted">{profile.location}</p>
      </div>
    </section>
  );
}
