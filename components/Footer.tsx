import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © 2026 {profile.name}
        </p>
        <p>Built with Next.js · Deployed on Vercel</p>
      </div>
    </footer>
  );
}
