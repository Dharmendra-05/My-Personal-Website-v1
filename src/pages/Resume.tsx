import React from 'react';
import { Download, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

const Resume = () => {
  return (
    <div className="pt-32 pb-24 min-h-[80vh] flex flex-col items-center justify-center">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-amber-500/10 text-amber-400 mb-8">
          <FileText size={40} />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-zinc-100 tracking-tight mb-6">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">Resume</span>
        </h1>
        
        <p className="text-zinc-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
          You can view or download my complete resume below. It contains a detailed overview of my academic background, professional experience, and technical skills.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href="/resume.pdf" 
            download="Dharmendra_Pradhan_Resume.pdf"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-semibold transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
          >
            <Download size={20} />
            Download PDF
          </a>
          <a 
            href="/resume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 text-zinc-100 font-medium transition-all duration-300 hover:scale-[1.02] backdrop-blur-sm flex items-center justify-center gap-2"
          >
            <FileText size={20} />
            View Online
          </a>
        </div>
        
        <div className="mt-16 p-8 rounded-3xl bg-zinc-900/30 border border-zinc-800/50 backdrop-blur-sm">
          <p className="text-zinc-500 text-sm">
            * Note: Please ensure you have uploaded your actual `resume.pdf` file to the `public` directory for these links to work correctly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Resume;
