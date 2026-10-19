import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProjectDetail } from "@/components/ProjectDetail";
import { getProjectById, projects } from "@/data/projects";
import { profile } from "@/data/profile";

type ProjectPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    return { title: `Project · ${profile.name}` };
  }

  return {
    title: `${project.title} · ${profile.name}`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="flex-1">
        <ProjectDetail project={project} />
      </main>
      <Footer />
    </>
  );
}
