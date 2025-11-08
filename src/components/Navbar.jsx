import React from 'react';
import { User, Github, Linkedin } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-tr from-cyan-500 to-fuchsia-500 text-neutral-900 font-bold">F</span>
            <span className="sr-only">Home</span>
            <span className="hidden sm:block text-sm tracking-wide text-neutral-200">Flame's Portfolio</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#projects" className="text-neutral-300 hover:text-white transition">Projects</a>
            <a href="#about" className="text-neutral-300 hover:text-white transition">About</a>
            <a href="#contact" className="text-neutral-300 hover:text-white transition">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a aria-label="GitHub" href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-white/10 transition">
              <Github className="h-5 w-5" />
            </a>
            <a aria-label="LinkedIn" href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-white/10 transition">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-white text-neutral-900 px-3 py-2 text-sm font-medium hover:bg-white/90 transition">
              <User className="h-4 w-4" /> Hire me
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
