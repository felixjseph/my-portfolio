import React from 'react';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Education</h2>
        <p className="text-slate-700 mb-6">Bachelor of Science in Information Technology — [Your University Name]</p>
        <div className="grid sm:grid-cols-3 gap-6">
          <div><div className="text-3xl font-bold">3.5+</div><div className="text-sm text-slate-600">GPA</div></div>
          <div><div className="text-3xl font-bold">10+</div><div className="text-sm text-slate-600">Projects Completed</div></div>
          <div><div className="text-3xl font-bold">5+</div><div className="text-sm text-slate-600">Technologies Learned</div></div>
        </div>
      </div>
    </section>
  );
}
