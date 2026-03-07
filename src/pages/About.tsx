import React from 'react';
import { Briefcase, GraduationCap, Award, Code2, Palette, Zap } from 'lucide-react';
import { EXPERIENCE, EDUCATION, AWARDS, SKILLS, PERSONAL_INFO, CURRENT_WORK } from '../data';

const About = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-zinc-100 tracking-tight mb-16">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">Me</span>
        </h1>

        {/* About Me Text */}
        <section className="mb-20">
          <p className="text-zinc-300 text-lg leading-relaxed">
            {PERSONAL_INFO.about}
          </p>
        </section>

        {/* Education */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400">
              <GraduationCap size={28} />
            </div>
            <h2 className="text-3xl font-bold text-zinc-100">Education</h2>
          </div>

          <div className="grid gap-6">
            {EDUCATION.map((edu, index) => (
              <div key={index} className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/30 hover:bg-zinc-900/80">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-zinc-100 mb-2">{edu.degree}</h3>
                    <span className="text-lg text-zinc-400 font-medium">{edu.institution}</span>
                  </div>
                  <span className="px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 font-mono text-sm self-start md:self-auto">
                    {edu.period}
                  </span>
                </div>
                <ul className="flex flex-col gap-2 text-zinc-300">
                  {edu.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Work Experience */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-amber-500/10 rounded-xl text-amber-400">
              <Briefcase size={28} />
            </div>
            <h2 className="text-3xl font-bold text-zinc-100">Research & Experience</h2>
          </div>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-800 before:to-transparent">
            {EXPERIENCE.map((exp, index) => (
              <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                {/* Icon */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-zinc-950 bg-amber-500 text-zinc-950 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <Briefcase size={16} />
                </div>
                
                {/* Content */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm transition-all duration-300 hover:border-amber-500/30 hover:bg-zinc-900/80">
                  <div className="flex flex-col mb-4">
                    <span className="text-amber-400 font-mono text-sm mb-1">{exp.period}</span>
                    <h3 className="text-xl font-bold text-zinc-100">{exp.role}</h3>
                    <span className="text-zinc-400 font-medium">{exp.company}</span>
                  </div>
                  <p className="text-zinc-300 mb-4 font-medium">{exp.description}</p>
                  <ul className="space-y-2 text-zinc-400">
                    {exp.achievements.map((ach, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-amber-500 mt-1.5 text-xs">▹</span>
                        <span className="leading-relaxed text-sm">{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications & Awards */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400">
              <Award size={28} />
            </div>
            <h2 className="text-3xl font-bold text-zinc-100">Certifications & Awards</h2>
          </div>

          <div className="grid gap-6">
            {AWARDS.map((award, index) => (
              <div key={index} className="p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm transition-all duration-300 hover:border-purple-500/30 hover:bg-zinc-900/80">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-zinc-100 mb-1">{award.title}</h3>
                    <span className="text-zinc-400 font-medium">{award.organization}</span>
                  </div>
                  <span className="text-purple-400 font-mono text-sm self-start md:self-auto">
                    {award.date}
                  </span>
                </div>
                <p className="text-zinc-300 leading-relaxed">
                  {award.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Bento Grid */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400">
              <Code2 size={28} />
            </div>
            <h2 className="text-3xl font-bold text-zinc-100">Tech Stack & Tools</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Hard Skills */}
            <div className="rounded-3xl bg-zinc-900/50 backdrop-blur-md border border-zinc-800/50 p-8 transition-all duration-300 hover:border-blue-500/30 hover:bg-zinc-900/80">
              <h3 className="text-xl font-semibold text-zinc-100 mb-6">Technical Skills</h3>
              <ul className="text-zinc-400 leading-relaxed space-y-4">
                {SKILLS.hard.map((skill, idx) => {
                  const [category, items] = skill.split(':');
                  return (
                    <li key={idx} className="flex flex-col">
                      <span className="text-zinc-200 font-medium">{category}:</span>
                      <span className="text-zinc-400">{items}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="flex flex-col gap-6">
              {/* Soft Skills */}
              <div className="rounded-3xl bg-zinc-900/50 backdrop-blur-md border border-zinc-800/50 p-8 transition-all duration-300 hover:border-blue-500/30 hover:bg-zinc-900/80 flex-grow">
                <h3 className="text-xl font-semibold text-zinc-100 mb-6">Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {SKILLS.soft.map(skill => (
                    <span key={skill} className="px-3 py-1 text-xs font-medium text-zinc-300 bg-zinc-800/50 rounded-full border border-zinc-700/50">{skill}</span>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div className="rounded-3xl bg-zinc-900/50 backdrop-blur-md border border-zinc-800/50 p-8 transition-all duration-300 hover:border-blue-500/30 hover:bg-zinc-900/80">
                <h3 className="text-xl font-semibold text-zinc-100 mb-4">Languages</h3>
                <div className="flex flex-wrap gap-4">
                  {SKILLS.languages.map(lang => (
                    <span key={lang} className="text-zinc-400 font-medium">{lang}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Current Work */}
        <section>
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-rose-500/10 rounded-xl text-rose-400">
              <Zap size={28} />
            </div>
            <h2 className="text-3xl font-bold text-zinc-100">What I'm Currently Working On</h2>
          </div>

          <div className="grid gap-6">
            {CURRENT_WORK.map((work, index) => (
              <div key={index} className="p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-sm transition-all duration-300 hover:border-rose-500/30 hover:bg-zinc-900/80">
                <h3 className="text-xl font-bold text-zinc-100 mb-2">{work.title}</h3>
                <p className="text-zinc-400 leading-relaxed">
                  {work.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
