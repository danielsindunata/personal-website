"use client";

import { Component, type ErrorInfo, type ReactNode } from "react";

type Props = {
  children: ReactNode;
};

type State = {
  hasError: boolean;
};

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("[portfolio] Uncaught UI error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="mx-auto max-w-xl px-6 py-24 text-center">
          <h1 className="font-display text-3xl text-ink">Something went wrong</h1>
          <p className="mt-4 text-muted">
            An unexpected error occurred. Refresh the page or check the console
            for details.
          </p>
          <button
            type="button"
            className="mt-8 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition hover:bg-accent-deep"
            onClick={() => {
              console.error("[portfolio] User requested recovery reload");
              this.setState({ hasError: false });
              window.location.reload();
            }}
          >
            Reload page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
