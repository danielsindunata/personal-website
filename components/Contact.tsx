import Image from "next/image";
import { profile } from "@/data/profile";

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 relative overflow-hidden py-24 text-on-dark md:py-32"
    >
      <Image
        src={profile.contactImage}
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
        aria-hidden
      />
      <div className="contact-mesh absolute inset-0" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <h2 className="font-display text-4xl tracking-tight sm:text-5xl md:text-6xl">
          Let&apos;s work together.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-on-dark-muted">
          Open to collaborations, interesting problems, and new opportunities.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="bg-on-dark px-5 py-3 text-sm font-semibold text-ink transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-teal"
          >
            Email me
          </a>
          <a
            href={profile.cvUrl}
            className="border border-white/30 px-5 py-3 text-sm font-semibold text-on-dark transition hover:border-white/60 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-teal"
          >
            Download CV
          </a>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-on-dark-muted">
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-on-dark"
          >
            LinkedIn
          </a>
          <a
            href={profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-on-dark"
          >
            GitHub
          </a>
          <span className="inline-flex items-center gap-2">
            <span aria-hidden>⌖</span>
            {profile.location}
          </span>
        </div>
      </div>
    </section>
  );
}
