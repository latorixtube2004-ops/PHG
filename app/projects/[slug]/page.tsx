import React from 'react';
import { notFound } from 'next/navigation';
import { projects } from '@/lib/data/projects';
import { ProjectDetailClient } from '@/components/projects/ProjectDetailClient';

export const instant = false;

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}
