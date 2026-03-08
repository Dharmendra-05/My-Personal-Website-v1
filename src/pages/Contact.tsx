import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Youtube, MapPin, Send, CheckCircle, Twitter } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

const SOCIALS = [
  { icon: <Linkedin size={20} />, href: PERSONAL_INFO.linkedin, label: 'LinkedIn' },
  { icon: <Github size={20} />, href: PERSONAL_INFO.github, label: 'GitHub' },
  { icon: <Youtube size={20} />, href: PERSONAL_INFO.youtube, label: 'YouTube' },
  { icon: <Twitter size={20} />, href: PERSONAL_INFO.twitter, label: 'Twitter' },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.message.trim()) e.message = 'Message cannot be empty';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    // Compose mailto link
    const subject = encodeURIComponent(form.subject || `Message from ${form.name}`);
    const body = encodeURIComponent(`Hi Dharmendra,\n\n${form.message}\n\n— ${form.name} (${form.email})`);
    window.open(`mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`);
    setSubmitted(true);
  };

  const field = (
    id: keyof typeof form,
    label: string,
    placeholder: string,
    type = 'text'
  ) => (
    <div className="space-y-1.5">
      <label htmlFor={id} className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">{label}</label>
      <input
        type={type}
        id={id}
        value={form[id]}
        onChange={e => { setForm(f => ({ ...f, [id]: e.target.value })); setErrors(er => ({ ...er, [id]: '' })); }}
        className={`w-full px-4 py-3 rounded-xl bg-zinc-950/60 border text-zinc-100 text-sm focus:outline-none transition-all ${errors[id] ? 'border-red-500/60 focus:border-red-500 focus:ring-1 focus:ring-red-500/30' : 'border-zinc-800 focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/30'}`}
        placeholder={placeholder}
      />
      {errors[id] && <p className="text-xs text-red-400">{errors[id]}</p>}
    </div>
  );

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-6 w-full">
        {/* Header */}
        <div className="mb-14 animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-100 tracking-tight mb-3">
            Let's <span className="gradient-text">Connect</span>
          </h1>
          <p className="text-zinc-400 text-base max-w-lg leading-relaxed">
            Open to research collaborations, developer opportunities, or just a friendly conversation about physics and tech.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* ─── Left: Contact info ─── */}
          <div className="lg:col-span-2 flex flex-col gap-6 animate-slide-l delay-100">
            {[
              {
                icon: <Mail size={22} />,
                label: 'Email',
                display: PERSONAL_INFO.email,
                href: `mailto:${PERSONAL_INFO.email}`,
              },
              {
                icon: <Phone size={22} />,
                label: 'Phone',
                display: PERSONAL_INFO.phone,
                href: `tel:${PERSONAL_INFO.phone}`,
              },
              {
                icon: <MapPin size={22} />,
                label: 'Location',
                display: 'India',
                href: undefined,
              },
            ].map(({ icon, label, display, href }) => (
              <div key={label} className="flex items-center gap-4 p-5 rounded-2xl glass-card hover:border-amber-500/30 hover:bg-amber-500/5 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {icon}
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-semibold mb-0.5">{label}</p>
                  {href ? (
                    <a href={href} className="text-zinc-100 font-semibold hover:text-amber-400 transition-colors text-sm truncate block">
                      {display}
                    </a>
                  ) : (
                    <p className="text-zinc-100 font-semibold text-sm">{display}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Social links */}
            <div className="p-5 rounded-2xl glass-card">
              <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-semibold mb-4">Social Profiles</p>
              <div className="flex items-center gap-3">
                {SOCIALS.map(({ icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    title={label}
                    className="w-11 h-11 rounded-xl glass-card flex items-center justify-center text-zinc-400 hover:text-amber-400 hover:border-amber-500/30 hover:bg-amber-500/5 transition-all duration-300 hover:scale-110"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ─── Right: Form ─── */}
          <div className="lg:col-span-3 animate-slide-r delay-200">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-12 rounded-3xl glass-card">
                <CheckCircle size={56} className="text-emerald-400 mb-6" />
                <h3 className="text-2xl font-bold text-zinc-100 mb-3">Message Sent!</h3>
                <p className="text-zinc-400 mb-8">Your email client has been opened. Thank you for reaching out!</p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                  className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-sm transition-all duration-300 hover:scale-[1.03]"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <div className="p-8 rounded-3xl glass-card">
                <h3 className="text-xl font-bold text-zinc-100 mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {field('name', 'Your Name', 'John Doe')}
                    {field('email', 'Your Email', 'john@example.com', 'email')}
                  </div>
                  {field('subject', 'Subject', 'How can I help you?')}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      value={form.message}
                      onChange={e => { setForm(f => ({ ...f, message: e.target.value })); setErrors(er => ({ ...er, message: '' })); }}
                      className={`w-full px-4 py-3 rounded-xl bg-zinc-950/60 border text-zinc-100 text-sm focus:outline-none transition-all resize-none ${errors.message ? 'border-red-500/60 focus:border-red-500 focus:ring-1 focus:ring-red-500/30' : 'border-zinc-800 focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/30'}`}
                      placeholder="Write your message here…"
                    />
                    {errors.message && <p className="text-xs text-red-400">{errors.message}</p>}
                  </div>
                  <button
                    type="submit"
                    className="w-full px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(245,158,11,0.4)] flex items-center justify-center gap-2"
                  >
                    <Send size={18} />
                    Send Message
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
