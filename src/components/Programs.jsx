import React from 'react';
import { FlaskConical, Code, Briefcase, Globe2 } from 'lucide-react';

const programs = [
  {
    title: 'Engineering & Technology',
    description:
      'From software engineering to AI and robotics, build future-ready skills with hands-on labs and industry mentorship.',
    icon: Code,
  },
  {
    title: 'Science & Research',
    description:
      'Explore biology, chemistry, physics, and environmental science with access to modern research facilities.',
    icon: FlaskConical,
  },
  {
    title: 'Business & Management',
    description:
      'Learn strategy, analytics, and entrepreneurship with real-world projects and startup incubator access.',
    icon: Briefcase,
  },
  {
    title: 'Global Studies',
    description:
      'Connect with cultures and ideas across borders through exchange programs and global classrooms.',
    icon: Globe2,
  },
];

const Programs = () => {
  return (
    <section id="programs" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Academic Programs</h2>
          <p className="mt-3 text-gray-600">Discover flexible pathways across disciplines to shape your future.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((p) => (
            <div key={p.title} className="group bg-white rounded-xl border p-6 hover:shadow-md transition">
              <div className="h-11 w-11 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{p.description}</p>
              <a href="#" className="mt-4 inline-block text-sm text-indigo-600 hover:text-indigo-700">Learn more →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
