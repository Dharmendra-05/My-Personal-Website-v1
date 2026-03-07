import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '../data';

const Projects = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-100 tracking-tight mb-4">
            All <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">Projects</span>
          </h1>
          <p className="text-zinc-400 max-w-2xl text-lg">
            A comprehensive list of my academic, personal, and professional projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group rounded-3xl overflow-hidden bg-zinc-900/50 border border-zinc-800/50 transition-all duration-500 hover:border-amber-500/30 flex flex-col h-full">
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-60" />
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md text-amber-400 font-mono text-xs border border-zinc-800/50">
                  {project.date}
                </div>
              </div>
              
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-zinc-100 mb-4">{project.title}</h3>
                  <p className="text-zinc-400 mb-6 leading-relaxed">{project.description}</p>
                </div>
                
                <div>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 text-xs font-medium text-zinc-300 bg-zinc-800/30 rounded-full border border-zinc-700/30">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-6 pt-6 border-t border-zinc-800/50">
                    <a href={project.githubUrl} className="text-zinc-400 hover:text-amber-400 transition-colors flex items-center gap-2">
                      <Github size={20} />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                    <a href={project.demoUrl} className="text-zinc-400 hover:text-amber-400 transition-colors flex items-center gap-2">
                      <ExternalLink size={20} />
                      <span className="text-sm font-medium">Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
