import React, { useState } from 'react';
import { ExternalLink, Github, Search, X } from 'lucide-react';
import { PROJECTS } from '../data';

/* ── Collect unique tags ── */
const ALL_TAGS = ['All', ...Array.from(new Set(PROJECTS.flatMap(p => p.tags)))];

const Projects = () => {
  const [activeTag, setActiveTag] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = PROJECTS.filter(p => {
    const matchTag = activeTag === 'All' || p.tags.includes(activeTag);
    const matchSearch =
      search.trim() === '' ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase());
    return matchTag && matchSearch;
  });

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-12 animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-100 tracking-tight mb-3">
            All <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-zinc-400 max-w-2xl text-base">
            A showcase of academic, personal, and professional projects across physics simulation, tools, and automation.
          </p>
        </div>

        {/* Search + Filter bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10 animate-fade-up delay-100">
          {/* Search */}
          <div className="relative flex-1 max-w-sm">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search projects…"
              className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800 text-zinc-100 text-sm focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/30 placeholder-zinc-600 transition-all"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300"
              >
                <X size={14} />
              </button>
            )}
          </div>

          {/* Tag filters */}
          <div className="flex flex-wrap gap-2">
            {ALL_TAGS.slice(0, 8).map(tag => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 border ${
                  activeTag === tag
                    ? 'bg-amber-500 text-zinc-950 border-amber-500 shadow-[0_0_16px_rgba(245,158,11,0.35)]'
                    : 'glass-card text-zinc-400 hover:border-amber-500/30 hover:text-amber-400'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-24 text-zinc-500">
            <p className="text-xl font-medium">No projects match your filter.</p>
            <button
              onClick={() => { setActiveTag('All'); setSearch(''); }}
              className="mt-4 text-amber-400 hover:text-amber-300 text-sm"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, idx) => (
              <article
                key={project.id}
                className="group rounded-3xl overflow-hidden glass-card transition-all duration-500 hover:border-amber-500/30 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] flex flex-col animate-fade-up"
                style={{ animationDelay: `${idx * 60}ms` }}
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={`${import.meta.env.BASE_URL}${project.image.replace(/^\//, '')}`}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-75 group-hover:opacity-95"
                    referrerPolicy="no-referrer"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent" />
                  {/* Date badge */}
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md text-amber-400 font-mono text-xs border border-zinc-700/50">
                    {project.date}
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-zinc-100 mb-2 leading-tight group-hover:text-amber-200 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map(tag => (
                      <button
                        key={tag}
                        onClick={() => setActiveTag(tag)}
                        className="tag-pill cursor-pointer"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-5 pt-4 border-t border-zinc-800/50">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-zinc-500 hover:text-amber-400 transition-colors text-sm font-medium"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-zinc-500 hover:text-amber-400 transition-colors text-sm font-medium"
                    >
                      <ExternalLink size={16} />
                      View
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
