import React from 'react';
import { Mail, Send, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Let’s build something great</h2>
            <p className="mt-3 text-neutral-400">
              I’m open to freelance, full‑time roles, and interesting collaborations. Drop me a line
              and I’ll get back within 24 hours.
            </p>
            <div className="mt-6 space-y-3 text-sm text-neutral-300">
              <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> flame@example.com</p>
              <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> +1 (555) 000‑1234</p>
            </div>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="rounded-xl border border-white/10 bg-neutral-900/40 p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label className="block text-sm text-neutral-300 mb-1">Name</label>
                <input required type="text" className="w-full rounded-md bg-neutral-950 border border-white/10 px-3 py-2 text-sm outline-none focus:border-white/20" placeholder="Your name" />
              </div>
              <div className="sm:col-span-1">
                <label className="block text-sm text-neutral-300 mb-1">Email</label>
                <input required type="email" className="w-full rounded-md bg-neutral-950 border border-white/10 px-3 py-2 text-sm outline-none focus:border-white/20" placeholder="you@example.com" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-neutral-300 mb-1">Message</label>
                <textarea rows="5" className="w-full rounded-md bg-neutral-950 border border-white/10 px-3 py-2 text-sm outline-none focus:border-white/20" placeholder="Tell me about your project" />
              </div>
            </div>
            <button type="submit" className="mt-4 inline-flex items-center gap-2 rounded-md bg-white text-neutral-900 px-4 py-2.5 text-sm font-semibold hover:bg-white/90 transition">
              Send message <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
