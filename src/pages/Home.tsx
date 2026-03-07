import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

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
            Hi there, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">{PERSONAL_INFO.name}</span>!
          </h1>
          
          <p className="text-xl md:text-2xl font-medium text-zinc-300 mb-6">
            {PERSONAL_INFO.title}
          </p>
          
          <p className="max-w-3xl text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed">
            {PERSONAL_INFO.about}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link to="/projects" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-semibold transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2">
              View Projects
              <ChevronRight size={18} />
            </Link>
            <Link to="/contact" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 text-zinc-100 font-medium transition-all duration-300 hover:scale-[1.02] backdrop-blur-sm flex items-center justify-center">
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
