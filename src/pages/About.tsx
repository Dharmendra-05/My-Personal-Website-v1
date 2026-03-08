import React, { useState } from 'react';
import {
  Briefcase, GraduationCap, Award, Code2, Zap,
  ChevronDown, ChevronUp
} from 'lucide-react';
import { EXPERIENCE, EDUCATION, AWARDS, SKILLS, PERSONAL_INFO, CURRENT_WORK } from '../data';

/* ── Section header helper ── */
const SectionHeading = ({
  icon,
  color,
  title,
}: {
  icon: React.ReactNode;
  color: string;
  title: string;
}) => (
  <div className="flex items-center gap-4 mb-10">
    <div className={`p-3 ${color} rounded-xl`}>{icon}</div>
    <h2 className="text-3xl font-bold text-zinc-100">{title}</h2>
  </div>
);

/* ── Skill badge colours ── */
const SKILL_COLORS: Record<string, string> = {
  Python: 'bg-blue-500/10 text-blue-300 border-blue-500/20',
  'C++17': 'bg-purple-500/10 text-purple-300 border-purple-500/20',
  'C++': 'bg-purple-500/10 text-purple-300 border-purple-500/20',
  'C/C++': 'bg-purple-500/10 text-purple-300 border-purple-500/20',
  Docker: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
  LaTeX: 'bg-green-500/10 text-green-300 border-green-500/20',
};

function getBadgeClass(category: string) {
  return SKILL_COLORS[category] ?? 'bg-zinc-800/60 text-zinc-300 border-zinc-700/50';
}

/* ── Expandable Achievement List ── */
const AchievementList = ({ items }: { items: string[] }) => {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? items : items.slice(0, 2);
  return (
    <div>
      <ul className="space-y-2 text-zinc-400">
        {visible.map((ach, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-amber-500 mt-1.5 text-xs shrink-0">▹</span>
            <span className="leading-relaxed text-sm">{ach}</span>
          </li>
        ))}
      </ul>
      {items.length > 2 && (
        <button
          onClick={() => setExpanded(e => !e)}
          className="mt-3 flex items-center gap-1 text-xs text-amber-400 hover:text-amber-300 transition-colors font-medium"
        >
          {expanded ? <><ChevronUp size={14} /> Show less</> : <><ChevronDown size={14} /> Show {items.length - 2} more</>}
        </button>
      )}
    </div>
  );
};

const About = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-6">

        {/* Page header */}
        <div className="mb-16 animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-100 tracking-tight mb-4">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-3xl leading-relaxed">
            {PERSONAL_INFO.about}
          </p>
        </div>

        {/* ─── Education ─── */}
        <section className="mb-20 animate-fade-up delay-100">
          <SectionHeading
            icon={<GraduationCap size={26} className="text-emerald-400" />}
            color="bg-emerald-500/10"
            title="Education"
          />
          <div className="grid gap-6">
            {EDUCATION.map((edu, index) => (
              <div
                key={index}
                className="p-8 rounded-3xl glass-card transition-all duration-300 hover:border-emerald-500/40 hover:bg-zinc-900/80 hover:-translate-y-1"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
                  <div>
                    <h3 className="text-xl font-bold text-zinc-100 mb-1">{edu.degree}</h3>
                    <span className="text-zinc-400 font-medium">{edu.institution}</span>
                  </div>
                  <span className="self-start sm:self-auto px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 font-mono text-xs border border-emerald-500/20 whitespace-nowrap">
                    {edu.period}
                  </span>
                </div>
                <ul className="flex flex-col gap-2">
                  {edu.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-2 text-zinc-300 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Experience ─── */}
        <section className="mb-20 animate-fade-up delay-200">
          <SectionHeading
            icon={<Briefcase size={26} className="text-amber-400" />}
            color="bg-amber-500/10"
            title="Research & Experience"
          />
          {/* Simple vertical timeline – left-aligned always */}
          <div className="relative pl-6 border-l-2 border-zinc-800 space-y-10">
            {EXPERIENCE.map((exp, index) => (
              <div key={index} className="relative group">
                {/* Timeline dot */}
                <div className="absolute -left-[1.65rem] top-1.5 w-4 h-4 rounded-full border-2 border-zinc-950 bg-amber-500 ring-4 ring-amber-500/20 transition-all duration-300 group-hover:ring-amber-500/40" />

                <div className="p-6 rounded-2xl glass-card transition-all duration-300 hover:border-amber-500/40 hover:bg-zinc-900/80">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-zinc-100 leading-tight">{exp.role}</h3>
                      <span className="text-zinc-400 font-medium text-sm">{exp.company}</span>
                    </div>
                    <span className="self-start px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 font-mono text-xs border border-amber-500/20 whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-zinc-300 font-medium text-sm mb-4 italic">{exp.description}</p>
                  <AchievementList items={exp.achievements} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Awards ─── */}
        <section className="mb-20 animate-fade-up delay-300">
          <SectionHeading
            icon={<Award size={26} className="text-purple-400" />}
            color="bg-purple-500/10"
            title="Certifications & Awards"
          />
          <div className="grid sm:grid-cols-2 gap-6">
            {AWARDS.map((award, index) => (
              <div
                key={index}
                className="p-7 rounded-3xl glass-card transition-all duration-300 hover:border-purple-500/40 hover:bg-zinc-900/80 hover:-translate-y-1 flex flex-col gap-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-base font-bold text-zinc-100 leading-tight mb-0.5">{award.title}</h3>
                    <span className="text-zinc-500 text-sm">{award.organization}</span>
                  </div>
                  <span className="text-purple-400 font-mono text-xs bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-full whitespace-nowrap">
                    {award.date}
                  </span>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed">{award.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Skills ─── */}
        <section className="mb-20 animate-fade-up delay-400">
          <SectionHeading
            icon={<Code2 size={26} className="text-blue-400" />}
            color="bg-blue-500/10"
            title="Tech Stack & Skills"
          />

          <div className="grid md:grid-cols-3 gap-6">
            {/* Technical skills */}
            <div className="md:col-span-2 p-7 rounded-3xl glass-card transition-all duration-300 hover:border-blue-500/30">
              <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest mb-5">Technical</h3>
              <div className="space-y-5">
                {SKILLS.hard.map((skill, idx) => {
                  const [category, items] = skill.split(':');
                  const tags = items?.split(',').map(s => s.trim().replace(/[()]/g, '')) ?? [];
                  return (
                    <div key={idx}>
                      <p className="text-xs text-zinc-500 uppercase tracking-wider font-semibold mb-2">{category}</p>
                      <div className="flex flex-wrap gap-2">
                        {tags.map(tag => (
                          <span
                            key={tag}
                            className={`px-3 py-1 rounded-full text-xs font-semibold border transition-all duration-200 hover:scale-105 ${getBadgeClass(tag)}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Soft skills + Languages */}
            <div className="flex flex-col gap-6">
              <div className="p-7 rounded-3xl glass-card flex-1 transition-all duration-300 hover:border-blue-500/30">
                <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest mb-5">Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {SKILLS.soft.map(skill => (
                    <span key={skill} className="px-3 py-1 text-xs font-semibold text-zinc-300 bg-zinc-800/60 rounded-full border border-zinc-700/50 hover:border-blue-500/30 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-7 rounded-3xl glass-card transition-all duration-300 hover:border-blue-500/30">
                <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest mb-4">Languages</h3>
                <div className="flex flex-wrap gap-3">
                  {SKILLS.languages.map(lang => (
                    <span key={lang} className="flex items-center gap-1.5 text-sm font-medium text-zinc-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />{lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Currently Working On ─── */}
        <section className="animate-fade-up delay-500">
          <SectionHeading
            icon={<Zap size={26} className="text-rose-400" />}
            color="bg-rose-500/10"
            title="What I'm Currently Working On"
          />
          <div className="grid sm:grid-cols-3 gap-5">
            {CURRENT_WORK.map((work, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl glass-card transition-all duration-300 hover:border-rose-500/30 hover:bg-zinc-900/80 hover:-translate-y-1 group"
              >
                <div className="w-8 h-8 rounded-xl bg-rose-500/10 flex items-center justify-center mb-4 group-hover:bg-rose-500/20 transition-colors">
                  <Zap size={16} className="text-rose-400" />
                </div>
                <h3 className="text-base font-bold text-zinc-100 mb-2">{work.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{work.description}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default About;
