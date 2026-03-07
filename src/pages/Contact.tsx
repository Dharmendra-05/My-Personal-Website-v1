import React from 'react';
import { Mail, Phone, Linkedin, Github, Youtube, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

const Contact = () => {
  return (
    <div className="pt-32 pb-24 min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Contact Info */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-100 tracking-tight mb-6">
              Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">Connect</span>
            </h1>
            <p className="text-zinc-400 text-lg mb-12 max-w-xl leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 flex items-center justify-center text-amber-400 group-hover:bg-amber-500/10 group-hover:scale-110 transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-1">Email</p>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="text-xl font-semibold text-zinc-100 hover:text-amber-400 transition-colors">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 flex items-center justify-center text-amber-400 group-hover:bg-amber-500/10 group-hover:scale-110 transition-all duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-1">Phone</p>
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="text-xl font-semibold text-zinc-100 hover:text-amber-400 transition-colors">
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 flex items-center justify-center text-amber-400 group-hover:bg-amber-500/10 group-hover:scale-110 transition-all duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-1">Location</p>
                  <p className="text-xl font-semibold text-zinc-100">
                    India
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-16 border-t border-zinc-800/50">
              <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-6">Social Profiles</p>
              <div className="flex items-center gap-4">
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-zinc-900/50 border border-zinc-800/50 flex items-center justify-center text-zinc-400 hover:text-amber-400 hover:border-amber-500/30 hover:bg-amber-500/5 transition-all duration-300">
                  <Linkedin size={20} />
                </a>
                <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-zinc-900/50 border border-zinc-800/50 flex items-center justify-center text-zinc-400 hover:text-amber-400 hover:border-amber-500/30 hover:bg-amber-500/5 transition-all duration-300">
                  <Github size={20} />
                </a>
                <a href={PERSONAL_INFO.youtube} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-zinc-900/50 border border-zinc-800/50 flex items-center justify-center text-zinc-400 hover:text-amber-400 hover:border-amber-500/30 hover:bg-amber-500/5 transition-all duration-300">
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-zinc-900/50 border border-zinc-800/50 rounded-3xl p-8 md:p-12 backdrop-blur-md">
            <h3 className="text-2xl font-bold text-zinc-100 mb-8">Send a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-zinc-400">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950/50 border border-zinc-800 text-zinc-100 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-zinc-400">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950/50 border border-zinc-800 text-zinc-100 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-zinc-400">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950/50 border border-zinc-800 text-zinc-100 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all"
                  placeholder="How can I help you?"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-zinc-400">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-950/50 border border-zinc-800 text-zinc-100 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all resize-none"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-semibold transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
