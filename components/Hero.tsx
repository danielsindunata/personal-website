import Image from "next/image";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex h-dvh min-h-dvh items-center overflow-hidden text-on-dark"
    >
      <Image
        src={profile.heroImage}
        alt=""
        fill
        priority
        quality={95}
        sizes="100vw"
        placeholder="empty"
        className="object-cover object-[80%_center] md:object-[70%_center]"
        style={{ objectFit: "cover" }}
        aria-hidden
      />

      <div
        className="hero-overlay pointer-events-none absolute inset-0"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 pb-16 pt-28 md:pb-20 lg:pt-32">
        <div className="max-w-xl">
          <div
            className="animate-fade-in mb-5 h-px w-12 bg-accent-teal"
            aria-hidden
          />
          <h1 className="animate-fade-up font-display text-5xl leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="animate-fade-up animate-delay-1 mt-5 max-w-md text-base leading-relaxed text-white/80 sm:text-lg">
            <span className="text-accent-teal">{profile.title}</span>
            {profile.heroSubtitle.replace(profile.title, "")}
          </p>
          <div className="animate-fade-up animate-delay-2 mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:bg-white/90"
            >
              Explore My Work
            </a>
            <a
              href="#contact"
              className="border border-white/35 px-5 py-3 text-sm font-semibold text-white transition hover:border-accent-teal hover:text-accent-teal"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
