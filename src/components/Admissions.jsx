import React from 'react';
import { BookOpenCheck, Phone, Mail } from 'lucide-react';

const Admissions = () => {
  return (
    <section id="admissions" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Admissions & Financial Aid</h2>
            <p className="mt-3 text-gray-600">
              We welcome curious, driven learners from all backgrounds. Our admissions team guides you through every step, including scholarships and aid.
            </p>
            <ol className="mt-6 space-y-3 text-gray-700 list-decimal list-inside">
              <li>Submit your online application</li>
              <li>Upload transcripts and test scores</li>
              <li>Schedule an interview</li>
              <li>Receive your decision and enroll</li>
            </ol>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                <BookOpenCheck className="h-4 w-4" /> Apply Now
              </a>
              <a href="tel:+1234567890" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border hover:bg-white">
                <Phone className="h-4 w-4" /> Call us
              </a>
              <a href="mailto:admissions@bluecrest.edu" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border hover:bg-white">
                <Mail className="h-4 w-4" /> Email
              </a>
            </div>
          </div>
          <div className="bg-white rounded-xl border p-6">
            <h3 className="font-semibold text-gray-900">Upcoming Deadlines</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li><span className="font-medium">Jan 15:</span> Early Action</li>
              <li><span className="font-medium">Mar 1:</span> Regular Decision</li>
              <li><span className="font-medium">Apr 10:</span> Scholarship Priority</li>
            </ul>
            <div className="mt-6">
              <label className="text-sm font-medium text-gray-700">Get updates</label>
              <div className="mt-2 flex gap-2">
                <input type="email" placeholder="Your email" className="flex-1 rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admissions;
