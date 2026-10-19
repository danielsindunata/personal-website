"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

const links = [
  { href: "/", label: "Home" },
  { href: "/#projects", label: "Projects" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [homeScrolled, setHomeScrolled] = useState(false);
  const scrolled = !isHome || homeScrolled;

  useEffect(() => {
    if (!isHome) {
      return;
    }

    const hero = document.getElementById("top");
    if (!hero) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHomeScrolled(!entry.isIntersecting);
      },
      { rootMargin: "-64px 0px 0px 0px", threshold: 0 },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, [isHome]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "bg-surface-dark/85 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:h-20">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-on-dark transition hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-teal"
        >
          {profile.name}
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-on-dark-muted md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-on-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-teal"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={profile.cvUrl}
            className="inline-flex items-center gap-2 border border-white/25 px-4 py-2 text-sm font-medium text-on-dark transition hover:border-white/50 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-teal"
          >
            Download CV
            <span aria-hidden>→</span>
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center text-on-dark md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-5 bg-on-dark transition ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-on-dark transition ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-on-dark transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-4 text-sm text-on-dark-muted">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-1 transition hover:text-on-dark"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={profile.cvUrl}
              className="mt-2 inline-flex w-fit items-center gap-2 border border-white/25 px-4 py-2 text-on-dark"
              onClick={() => setOpen(false)}
            >
              Download CV
              <span aria-hidden>→</span>
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
