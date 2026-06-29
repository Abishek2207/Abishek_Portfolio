import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectShowcase from "@/components/ProjectShowcase";
import { Metadata } from "next";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = projects.find((p) => p.id === params.slug);
  if (!project) return { title: "Project Not Found" };
  
  return {
    title: `${project.title} - AI/ML Project Showcase`,
    description: project.description,
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.id === params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectShowcase project={project} />;
}
