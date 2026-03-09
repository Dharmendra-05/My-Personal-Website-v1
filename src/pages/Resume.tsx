import React from 'react';
import { Download, FileText, GraduationCap, Briefcase } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION, EXPERIENCE } from '../data';

const Resume = () => (
  <div className="pt-32 pb-24">
    <div className="max-w-5xl mx-auto px-6">

      {/* Header */}
      <div className="text-center mb-16 animate-fade-up">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-amber-500/10 text-amber-400 mb-6">
          <FileText size={40} />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-zinc-100 tracking-tight mb-4">
          My <span className="gradient-text">Resume</span>
        </h1>
        <p className="text-zinc-400 text-base max-w-xl mx-auto leading-relaxed mb-8">
          A detailed overview of my academic background, research experience, and technical skills.
        </p>

        {/* Download / View buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            download="Dharmendra_Pradhan_Resume.pdf"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_24px_rgba(245,158,11,0.4)] flex items-center justify-center gap-2"
          >
            <Download size={18} />
            Download PDF
          </a>
          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-xl glass-card hover:border-zinc-600 text-zinc-100 font-medium transition-all duration-300 hover:scale-[1.04] flex items-center justify-center gap-2"
          >
            <FileText size={18} />
            View Online
          </a>
        </div>
      </div>

      {/* Quick Summary preview */}
      <div className="grid md:grid-cols-2 gap-6 animate-fade-up delay-200">
        {/* Education snapshot */}
        <div className="p-7 rounded-3xl glass-card">
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2 bg-emerald-500/10 rounded-xl text-emerald-400">
              <GraduationCap size={20} />
            </div>
            <h2 className="font-bold text-zinc-100">Education</h2>
          </div>
          {EDUCATION.map((edu, i) => (
            <div key={i}>
              <h3 className="font-bold text-zinc-200 text-sm">{edu.degree}</h3>
              <p className="text-zinc-500 text-sm mb-2">{edu.institution} · {edu.period}</p>
              {edu.details.map((d, j) => (
                <p key={j} className="text-xs text-zinc-400 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />{d}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Experience snapshot */}
        <div className="p-7 rounded-3xl glass-card">
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2 bg-amber-500/10 rounded-xl text-amber-400">
              <Briefcase size={20} />
            </div>
            <h2 className="font-bold text-zinc-100">Experience</h2>
          </div>
          {EXPERIENCE.map((exp, i) => (
            <div key={i}>
              <h3 className="font-bold text-zinc-200 text-sm">{exp.role}</h3>
              <p className="text-zinc-500 text-sm mb-2">{exp.company} · {exp.period}</p>
              <p className="text-xs text-zinc-400 italic">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>


    </div>
  </div>
);

export default Resume;
