import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-4">Why Choose Me?</h2>
        <p className="text-slate-700 mb-6">
          I don't just write code — I solve business problems and create digital experiences that deliver measurable results.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2">Passionate About Technology</h3>
            <p className="text-slate-600 mb-4">As a 4th year BSIT student, I combine academic excellence with practical development experience. I focus on functional, user-first applications and continuous growth in modern web development.</p>
            <ul className="list-disc list-inside text-slate-600 space-y-1">
              <li>Strong foundation in full-stack development</li>
              <li>Proficient in modern frameworks and tools</li>
              <li>Responsive & mobile-first design</li>
              <li>Clean, well-documented code</li>
              <li>Active learner and fast adapter</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <a href="https://github.com/your-username" target="_blank" rel="noreferrer" className="block px-4 py-3 border rounded hover:shadow">GitHub</a>
            <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noreferrer" className="block px-4 py-3 border rounded hover:shadow">LinkedIn</a>
            <a href="mailto:franco.magno@example.com" className="block px-4 py-3 border rounded hover:shadow">Email</a>
          </div>
        </div>
      </div>
    </section>
  );
}
