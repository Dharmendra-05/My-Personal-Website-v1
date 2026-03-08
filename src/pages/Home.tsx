import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Github, Linkedin, ChevronDown, Atom, Code2, FlaskConical } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

/* ── Typewriter hook ── */
function useTypewriter(words: string[], speed = 80, pause = 1800) {
  const [display, setDisplay] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx % words.length];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplay(current.slice(0, charIdx + 1));
        if (charIdx + 1 === current.length) {
          setTimeout(() => setDeleting(true), pause);
        } else {
          setCharIdx(c => c + 1);
        }
      } else {
        setDisplay(current.slice(0, charIdx - 1));
        if (charIdx - 1 === 0) {
          setDeleting(false);
          setWordIdx(w => w + 1);
          setCharIdx(0);
        } else {
          setCharIdx(c => c - 1);
        }
      }
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

/* ── Stats ── */
const STATS = [
  { icon: <Atom size={16} />, label: 'CGPA', value: '8.56 / 10' },
  { icon: <FlaskConical size={16} />, label: 'Class Rank', value: '#1' },
  { icon: <Code2 size={16} />, label: 'Projects', value: '5+' },
];

const ROLES = ['Physics Undergraduate', 'Research Intern @ VECC', 'C++ & Python Developer', 'Linux Enthusiast'];

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const typed = useTypewriter(ROLES);

  /* subtle mouse parallax on blobs */
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const handleMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (clientX - cx) / cx;
      const dy = (clientY - cy) / cy;
      const blobs = hero.querySelectorAll<HTMLElement>('.parallax-blob');
      blobs.forEach((blob, i) => {
        const factor = (i + 1) * 18;
        blob.style.transform = `translate(${dx * factor}px, ${dy * factor}px)`;
      });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[92vh] flex items-center justify-center overflow-hidden"
      >
        {/* Dot grid background */}
        <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

        {/* Animated blobs */}
        <div className="parallax-blob absolute top-1/4 left-1/4 w-[480px] h-[480px] bg-amber-500/8 rounded-full blur-[140px] pointer-events-none transition-transform duration-700 ease-out" />
        <div className="parallax-blob absolute bottom-1/4 right-1/4 w-[380px] h-[380px] bg-emerald-500/8 rounded-full blur-[140px] pointer-events-none transition-transform duration-700 ease-out" />
        <div className="parallax-blob absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none transition-transform duration-700 ease-out" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 w-full flex flex-col items-center text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800/60 backdrop-blur-md mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">Available for Research & Collaboration</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-zinc-100 mb-4 leading-[1.07] animate-fade-up delay-100">
            Hi, I'm{' '}
            <span className="gradient-text">{PERSONAL_INFO.name.split(' ')[0]}</span>
          </h1>

          {/* Typewriter */}
          <div className="h-12 flex items-center justify-center mb-6 animate-fade-up delay-200">
            <p className="text-2xl md:text-3xl font-semibold text-zinc-300">
              {typed}
              <span className="animate-blink text-amber-400 ml-0.5">|</span>
            </p>
          </div>

          {/* Sub-text */}
          <p className="max-w-2xl text-base md:text-lg text-zinc-500 mb-10 leading-relaxed animate-fade-up delay-300">
            {PERSONAL_INFO.about}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-16 w-full sm:w-auto animate-fade-up delay-400">
            <Link
              to="/projects"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_32px_rgba(245,158,11,0.4)] flex items-center justify-center gap-2"
            >
              View Projects
              <ChevronRight size={18} />
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl glass-card hover:border-zinc-600 text-zinc-100 font-medium transition-all duration-300 hover:scale-[1.04] flex items-center justify-center"
            >
              Contact Me
            </Link>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-6 py-4 rounded-xl glass-card hover:border-zinc-600 text-zinc-400 hover:text-amber-400 font-medium transition-all duration-300 hover:scale-[1.04] flex items-center justify-center gap-2"
            >
              <Github size={18} />
              GitHub
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-6 py-4 rounded-xl glass-card hover:border-blue-500/40 text-zinc-400 hover:text-blue-400 font-medium transition-all duration-300 hover:scale-[1.04] flex items-center justify-center gap-2"
            >
              <Linkedin size={18} />
              Connect
            </a>
          </div>

          {/* Stats Pills */}
          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-up delay-500">
            {STATS.map((stat, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-5 py-3 rounded-2xl glass-card hover:border-amber-500/30 hover:bg-amber-500/5 transition-all duration-300 group cursor-default"
              >
                <span className="text-amber-400 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </span>
                <div className="text-left">
                  <p className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">{stat.label}</p>
                  <p className="text-zinc-100 font-bold text-sm">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600 animate-float">
          <span className="text-[10px] uppercase tracking-widest font-semibold">Scroll</span>
          <ChevronDown size={18} />
        </div>
      </section>

      {/* Quick links */}
      <section className="py-16 border-t border-zinc-800/40">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { to: '/about', label: 'About Me', desc: 'Education, skills & more', icon: '👤' },
              { to: '/projects', label: 'Projects', desc: 'C++, Python & physics', icon: '🔬' },
              { to: '/contact', label: 'Contact', desc: "Let's collaborate", icon: '📬' },
            ].map(item => (
              <Link
                key={item.to}
                to={item.to}
                className="group flex items-center gap-4 p-5 rounded-2xl glass-card hover:border-amber-500/30 hover:bg-amber-500/5 transition-all duration-300 hover:-translate-y-1"
              >
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="font-bold text-zinc-100 group-hover:text-amber-400 transition-colors">{item.label}</p>
                  <p className="text-xs text-zinc-500">{item.desc}</p>
                </div>
                <ChevronRight size={16} className="ml-auto text-zinc-700 group-hover:text-amber-400 transition-all group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
