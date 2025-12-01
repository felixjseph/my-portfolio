import React from 'react';

export default function Skills() {
  const front = ['HTML5','CSS3','JavaScript','React.js','Responsive Design'];
  const back = ['Spring Boot','Django','Node.js','RESTful APIs'];
  const db = ['MySQL','Postgres','Database Design','Git','Docker'];

  const block = (title, items) => (
    <div className="p-4 border rounded">
      <h4 className="font-semibold mb-2">{title}</h4>
      <ul className="text-sm text-slate-600 space-y-1">
        {items.map(i => <li key={i}>• {i}</li>)}
      </ul>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-6">Technical Expertise</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {block('Frontend Development', front)}
          {block('Backend Development', back)}
          {block('Database & Tools', db)}
        </div>
      </div>
    </section>
  );
}
