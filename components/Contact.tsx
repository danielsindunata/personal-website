import { profile } from "@/data/profile";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="font-display text-4xl tracking-tight text-ink">
          Contact
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          Open to collaborations, interesting problems, and new opportunities.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-accent px-[18px] py-2.5 text-sm font-medium text-white transition hover:bg-accent-deep"
          >
            {profile.email}
          </a>
          <a
            href={profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border bg-surface px-[18px] py-2.5 text-sm font-medium text-ink transition hover:border-accent hover:text-accent"
          >
            GitHub
          </a>
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border bg-surface px-[18px] py-2.5 text-sm font-medium text-ink transition hover:border-accent hover:text-accent"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
