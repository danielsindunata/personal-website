"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[portfolio] Route error:", error);
  }, [error]);

  return (
    <div className="mx-auto flex min-h-dvh max-w-xl flex-col items-center justify-center px-6 text-center">
      <h1 className="font-display text-3xl text-ink">Something went wrong</h1>
      <p className="mt-4 text-muted">
        The page failed to load. Try again, or check the browser console for
        details.
      </p>
      <button
        type="button"
        onClick={() => {
          console.error("[portfolio] Retry after route error");
          reset();
        }}
        className="mt-8 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition hover:bg-accent-deep"
      >
        Try again
      </button>
    </div>
  );
}
