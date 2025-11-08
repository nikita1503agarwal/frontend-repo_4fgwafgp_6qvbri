import React from 'react';
import { ExternalLink, Code2, Globe } from 'lucide-react';

const projects = [
  {
    title: 'Interactive 3D Homepage',
    description: 'A Spline-powered landing page with real-time lighting and responsive performance.',
    tags: ['React', 'Spline', 'Tailwind'],
    link: '#',
  },
  {
    title: 'Realtime Chat App',
    description: 'Full‑stack chat with WebSocket messaging, optimistic UI, and dark mode.',
    tags: ['FastAPI', 'MongoDB', 'React'],
    link: '#',
  },
  {
    title: 'Design System Kit',
    description: 'Composable UI library with tokens, primitives, and motion presets.',
    tags: ['TypeScript', 'Radix', 'Framer Motion'],
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Featured Projects</h2>
            <p className="mt-2 text-neutral-400">A mix of experiments and production builds I’m proud of.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 rounded-md border border-white/15 px-3 py-2 text-sm hover:bg-white/10">
            <Globe className="h-4 w-4" /> Available for freelance
          </a>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-xl border border-white/10 bg-neutral-900/40 p-5 hover:border-white/20 transition">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                  <p className="mt-1 text-sm text-neutral-400">{p.description}</p>
                </div>
                <Code2 className="h-5 w-5 text-neutral-400 group-hover:text-white transition" />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-neutral-300">{t}</span>
                ))}
              </div>
              <a href={p.link} className="mt-4 inline-flex items-center gap-1 text-sm text-cyan-300 hover:text-cyan-200">
                Visit <ExternalLink className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
