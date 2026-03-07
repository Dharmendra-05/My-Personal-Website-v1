import React from 'react';
import { Github, Linkedin, Youtube, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

const Footer = () => {
  return (
    <footer className="relative border-t border-zinc-800/50 bg-zinc-950 pt-24 pb-12 overflow-hidden mt-auto">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-100 tracking-tight mb-6">Let's build something.</h2>
          <p className="text-zinc-400 max-w-xl text-lg mb-10">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <a href={`mailto:${PERSONAL_INFO.email}`} className="px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-semibold transition-all duration-300 hover:scale-[1.02] inline-flex items-center gap-2">
            <Mail size={20} />
            Get In Touch
          </a>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-zinc-800/50 gap-6">
          <div className="text-2xl font-bold tracking-tighter text-zinc-100">
            {PERSONAL_INFO.name.split(' ')[0]}<span className="text-amber-400">.</span>
          </div>
          
          <div className="flex items-center gap-6">
            <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-amber-400 transition-colors p-2 hover:bg-zinc-900 rounded-full">
              <Github size={20} />
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-amber-400 transition-colors p-2 hover:bg-zinc-900 rounded-full">
              <Linkedin size={20} />
            </a>
            <a href={PERSONAL_INFO.youtube} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-amber-400 transition-colors p-2 hover:bg-zinc-900 rounded-full">
              <Youtube size={20} />
            </a>
          </div>

          <div className="text-sm text-zinc-500 font-medium">
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
