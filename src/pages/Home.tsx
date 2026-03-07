import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Code2, Database, Wrench, Palette, ExternalLink, Github } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, SKILLS } from '../data';

const Home = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[128px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[128px] pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800/50 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Physics Undergraduate & Developer</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-zinc-100 mb-6 leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">{PERSONAL_INFO.name.split(' ')[0]}</span>.
          </h1>
          
          <p className="max-w-2xl text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed">
            {PERSONAL_INFO.title}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link to="/projects" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-semibold transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2">
              View My Work
              <ChevronRight size={18} />
            </Link>
            <Link to="/contact" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 text-zinc-100 font-medium transition-all duration-300 hover:scale-[1.02] backdrop-blur-sm flex items-center justify-center">
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 relative bg-zinc-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 tracking-tight mb-4">About Me</h2>
            <p className="text-zinc-400 max-w-3xl text-lg leading-relaxed">
              {PERSONAL_INFO.about}
            </p>
          </div>
        </div>
      </section>

      {/* Skills Bento Grid */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 tracking-tight mb-4">Arsenal & Expertise</h2>
            <p className="text-zinc-400 max-w-2xl text-lg">A comprehensive look at the tools and technologies I use to bring ideas to life.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
            {/* Hard Skills */}
            <div className="md:col-span-2 group rounded-3xl bg-zinc-900/50 backdrop-blur-md border border-zinc-800/50 p-8 transition-all duration-300 hover:border-amber-500/30 hover:bg-zinc-900/80">
              <div className="w-12 h-12 rounded-2xl bg-zinc-800/50 flex items-center justify-center mb-6 text-amber-400 group-hover:scale-110 transition-transform duration-300">
                <Code2 size={24} />
              </div>
              <h3 className="text-xl font-semibold text-zinc-100 mb-3">Hard Skills</h3>
              <ul className="text-zinc-400 leading-relaxed mb-6 space-y-2">
                {SKILLS.hard.map((skill, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-amber-400 mt-1">•</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Soft Skills */}
            <div className="group rounded-3xl bg-zinc-900/50 backdrop-blur-md border border-zinc-800/50 p-8 transition-all duration-300 hover:border-amber-500/30 hover:bg-zinc-900/80">
              <div className="w-12 h-12 rounded-2xl bg-zinc-800/50 flex items-center justify-center mb-6 text-amber-400 group-hover:scale-110 transition-transform duration-300">
                <Palette size={24} />
              </div>
              <h3 className="text-xl font-semibold text-zinc-100 mb-3">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {SKILLS.soft.map(skill => (
                  <span key={skill} className="px-3 py-1 text-xs font-medium text-zinc-300 bg-zinc-800/50 rounded-full border border-zinc-700/50">{skill}</span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="md:col-span-3 group rounded-3xl bg-zinc-900/50 backdrop-blur-md border border-zinc-800/50 p-8 transition-all duration-300 hover:border-amber-500/30 hover:bg-zinc-900/80">
              <h3 className="text-xl font-semibold text-zinc-100 mb-3">Languages</h3>
              <div className="flex flex-wrap gap-4">
                {SKILLS.languages.map(lang => (
                  <span key={lang} className="text-zinc-400 font-medium">{lang}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-24 relative bg-zinc-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 tracking-tight mb-4">Featured Works</h2>
              <p className="text-zinc-400 max-w-2xl text-lg">A glimpse into my recent projects.</p>
            </div>
            <Link to="/projects" className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-medium transition-colors">
              View all projects <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.slice(0, 2).map((project) => (
              <div key={project.id} className="group rounded-3xl overflow-hidden bg-zinc-900/50 border border-zinc-800/50 transition-all duration-500 hover:border-amber-500/30 flex flex-col">
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-60" />
                </div>
                <div className="p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-zinc-100 mb-4">{project.title}</h3>
                    <p className="text-zinc-400 mb-6 line-clamp-3">{project.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 text-xs font-medium text-zinc-300 bg-zinc-800/30 rounded-full border border-zinc-700/30">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
