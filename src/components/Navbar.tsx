import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Experience', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setIsOpen(false); }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-zinc-950/85 backdrop-blur-xl border-b border-zinc-800/60 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold tracking-tighter text-zinc-100 hover:text-amber-400 transition-colors">
          {PERSONAL_INFO.name.split(' ')[0]}
          <span className="text-amber-400">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(link => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-amber-400'
                    : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/60'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-amber-400" />
                )}
              </Link>
            );
          })}
          <div className="w-px h-5 bg-zinc-800 mx-3" />
          <Link
            to="/resume"
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
              location.pathname === '/resume'
                ? 'bg-amber-500 text-zinc-950 border-amber-500'
                : 'border-zinc-700 text-zinc-300 hover:border-amber-400/50 hover:text-amber-400 hover:bg-amber-500/5'
            }`}
          >
            <Download size={14} />
            Resume
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl glass-card text-zinc-400 hover:text-zinc-100 transition-colors"
          onClick={() => setIsOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-zinc-950/95 backdrop-blur-xl border-t border-zinc-800/50 px-6 py-4 flex flex-col gap-1">
          {NAV_LINKS.map(link => (
            <Link
              key={link.name}
              to={link.path}
              className={`px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                location.pathname === link.path
                  ? 'text-amber-400 bg-amber-500/10'
                  : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/60'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/resume"
            className="mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-amber-500 text-zinc-950 font-semibold text-sm transition-all"
          >
            <Download size={16} />
            View Resume
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
