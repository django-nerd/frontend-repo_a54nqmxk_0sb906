import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-medium">
              <Sparkles className="h-3.5 w-3.5" />
              Spring Admissions Open
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Empowering minds to lead, innovate, and inspire
            </h1>
            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
              Join a vibrant academic community with world-class faculty, cutting-edge research, and a campus culture built on curiosity and collaboration.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#admissions" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-5 py-3 rounded-md hover:bg-indigo-700 transition">
                Start your application
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#programs" className="inline-flex items-center gap-2 bg-white text-gray-900 px-5 py-3 rounded-md border hover:bg-gray-50 transition">
                Explore programs
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1600&auto=format&fit=crop"
              alt="University campus"
              className="w-full h-80 object-cover rounded-xl shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
