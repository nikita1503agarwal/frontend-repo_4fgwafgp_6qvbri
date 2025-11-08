import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="min-h-[80vh] flex items-center">
          <div className="relative z-10 max-w-2xl py-24">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-br from-white to-neutral-400 bg-clip-text text-transparent">Hi, I'm Flame —
              </span>
              <br />
              <span className="text-neutral-200">a creative full‑stack engineer</span>
            </h1>
            <p className="mt-6 text-neutral-300 leading-relaxed">
              I craft playful, performant, and modern web experiences. I love blending
              interactive 3D with clean product design.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-md bg-white text-neutral-900 px-4 py-2.5 text-sm font-semibold hover:bg-white/90 transition">
                View work <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-md border border-white/20 px-4 py-2.5 text-sm font-semibold hover:bg-white/10 transition">
                <Mail className="h-4 w-4" /> Contact
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/30 to-neutral-950" />
    </section>
  );
};

export default Hero;
