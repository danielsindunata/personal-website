import { getTechIcon } from "@/data/techIcons";

type TechIconProps = {
  name: string;
  size?: number;
  className?: string;
};

function FallbackIcon({
  kind,
  size,
}: {
  kind: "database" | "canvas" | "websocket";
  size: number;
}) {
  if (kind === "canvas") {
    return (
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className="text-ink"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <rect x="3" y="3" width="18" height="18" rx="1.5" />
        <path d="M7 15l3-3 2 2 5-5" />
        <path d="M14 9h3v3" />
      </svg>
    );
  }

  if (kind === "websocket") {
    return (
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className="text-ink"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M8 9a4 4 0 0 1 0 6" />
        <path d="M16 9a4 4 0 0 0 0 6" />
        <path d="M5.5 7.5a7 7 0 0 1 0 9" />
        <path d="M18.5 7.5a7 7 0 0 0 0 9" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className="text-[#336791]"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
      <path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
    </svg>
  );
}

export function TechIcon({ name, size = 36, className = "" }: TechIconProps) {
  const icon = getTechIcon(name);

  if (icon.src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element -- local SVG brand logos
      <img
        src={icon.src}
        alt=""
        width={size}
        height={size}
        className={`object-contain ${className}`.trim()}
        style={{ width: size, height: size }}
        loading="lazy"
        aria-hidden
      />
    );
  }

  if (icon.fallback) {
    return <FallbackIcon kind={icon.fallback} size={size} />;
  }

  return (
    <span
      className="inline-flex items-center justify-center rounded-sm bg-ink text-[10px] font-bold text-on-dark"
      style={{ width: size, height: size }}
      aria-hidden
    >
      {name.slice(0, 2).toUpperCase()}
    </span>
  );
}
