import React from 'react';
import { Users, HeartHandshake, Trophy } from 'lucide-react';

const stats = [
  { label: 'Student Clubs', value: '120+' },
  { label: 'Research Labs', value: '40+' },
  { label: 'Alumni Worldwide', value: '85k+' },
];

const Community = () => {
  return (
    <section id="community" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full text-xs font-medium">
              <Users className="h-3.5 w-3.5" />
              Life at Bluecrest
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900">A community that supports your journey</h2>
            <p className="mt-3 text-gray-600">
              Whether you are exploring new interests, building lifelong friendships, or leading change, you will find your place here.
            </p>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li className="flex items-start gap-3"><HeartHandshake className="h-5 w-5 text-indigo-600 mt-0.5" /> Mentorship programs connecting students with faculty and alumni</li>
              <li className="flex items-start gap-3"><Trophy className="h-5 w-5 text-indigo-600 mt-0.5" /> Nationally ranked athletics and competitive teams</li>
              <li className="flex items-start gap-3"><Users className="h-5 w-5 text-indigo-600 mt-0.5" /> Inclusive clubs and cultural organizations</li>
            </ul>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-white border rounded-xl p-5 text-center">
                <div className="text-2xl font-bold text-gray-900">{s.value}</div>
                <div className="text-sm text-gray-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
