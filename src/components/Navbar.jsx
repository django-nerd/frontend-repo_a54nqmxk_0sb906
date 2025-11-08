import React from 'react';
import { GraduationCap, BookOpen, Users, Calendar } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <GraduationCap className="h-7 w-7 text-indigo-600" />
            <span className="font-semibold text-lg tracking-tight">Bluecrest University</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#programs" className="text-gray-600 hover:text-gray-900 transition">Programs</a>
            <a href="#community" className="text-gray-600 hover:text-gray-900 transition">Community</a>
            <a href="#events" className="text-gray-600 hover:text-gray-900 transition">Events</a>
            <a href="#admissions" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">
              <BookOpen className="h-4 w-4" />
              Apply Now
            </a>
          </nav>
          <div className="md:hidden">
            <details className="relative">
              <summary className="list-none cursor-pointer inline-flex items-center gap-2 border rounded-md px-3 py-2 text-sm">
                Menu
              </summary>
              <div className="absolute right-0 mt-2 w-48 rounded-md border bg-white shadow-lg p-2 flex flex-col">
                <a href="#programs" className="px-3 py-2 rounded hover:bg-gray-50">Programs</a>
                <a href="#community" className="px-3 py-2 rounded hover:bg-gray-50">Community</a>
                <a href="#events" className="px-3 py-2 rounded hover:bg-gray-50">Events</a>
                <a href="#admissions" className="mt-1 inline-flex items-center gap-2 bg-indigo-600 text-white px-3 py-2 rounded-md hover:bg-indigo-700">
                  <BookOpen className="h-4 w-4" />
                  Apply Now
                </a>
              </div>
            </details>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
