import React from 'react';
import { Github, Linkedin, Youtube, Mail, ArrowUpRight, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PERSONAL_INFO } from '../data';

const FOOTER_LINKS = [
  { name: 'Experience', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Resume', path: '/resume' },
  { name: 'Contact', path: '/contact' },
];

const SOCIALS = [
  { icon: <Github size={18} />, href: PERSONAL_INFO.github, label: 'GitHub' },
  { icon: <Linkedin size={18} />, href: PERSONAL_INFO.linkedin, label: 'LinkedIn' },
  { icon: <Youtube size={18} />, href: PERSONAL_INFO.youtube, label: 'YouTube' },
  { icon: <Twitter size={18} />, href: PERSONAL_INFO.twitter, label: 'Twitter' },
];

const Footer = () => (
  <footer className="relative border-t border-zinc-800/40 bg-zinc-950 overflow-hidden mt-auto">
    {/* Glow  */}
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-48 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

    <div className="max-w-5xl mx-auto px-6 relative z-10 pt-20 pb-10">
      {/* CTA block */}
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 tracking-tight mb-4">
          Let's build something <span className="gradient-text">great</span>.
        </h2>
        <p className="text-zinc-500 max-w-md text-base mb-8">
          Open to research, dev projects, and conversations.<br />I always reply!
        </p>
        <a
          href={`mailto:${PERSONAL_INFO.email}`}
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-sm transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_24px_rgba(245,158,11,0.4)]"
        >
          <Mail size={16} />
          Get In Touch
          <ArrowUpRight size={14} />
        </a>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-zinc-800/40 gap-6">
        {/* Brand */}
        <Link to="/" className="text-xl font-bold tracking-tighter text-zinc-100 hover:text-amber-400 transition-colors">
          {PERSONAL_INFO.name.split(' ')[0]}<span className="text-amber-400">.</span>
        </Link>

        {/* Nav links */}
        <div className="flex items-center gap-6">
          {FOOTER_LINKS.map(link => (
            <Link
              key={link.name}
              to={link.path}
              className="text-zinc-500 hover:text-amber-400 text-sm font-medium transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-3">
          {SOCIALS.map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              title={label}
              className="w-9 h-9 rounded-full glass-card flex items-center justify-center text-zinc-500 hover:text-amber-400 hover:border-amber-500/30 hover:bg-amber-500/5 transition-all duration-300"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      <p className="text-center text-xs text-zinc-700 mt-8 font-medium">
        © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
