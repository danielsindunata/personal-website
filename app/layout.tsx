import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { profile } from "@/data/profile";
import "./globals.css";

const display = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Source_Sans_3({
  variable: "--font-source",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: `${profile.name} · Portfolio`,
  description: profile.tagline,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <ErrorBoundary>{children}</ErrorBoundary>
      </body>
    </html>
  );
}
