import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-surface-dark py-6 text-on-dark-muted">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 {profile.name}</p>
        <p>Built with Next.js · Deployed on Vercel</p>
      </div>
    </footer>
  );
}
