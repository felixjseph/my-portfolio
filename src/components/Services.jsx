import React from 'react';

const ServiceCard = ({ title, children }) => (
  <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
    <h4 className="font-semibold mb-2">{title}</h4>
    <p className="text-slate-600 text-sm">{children}</p>
  </div>
);

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-6">Services That Drive Growth</h2>
        <p className="text-slate-700 mb-8">Comprehensive full-stack development services designed to transform your business digitally</p>

        <div className="grid md:grid-cols-3 gap-6">
          <ServiceCard title="Full Stack Web Development">
            Modern web applications built with cutting-edge technologies and best practices.
          </ServiceCard>

          <ServiceCard title="Frontend Development">
            Interactive and responsive user interfaces with React and mobile-first approaches.
          </ServiceCard>

          <ServiceCard title="Backend & Database">
            Scalable server-side solutions, RESTful APIs, and proper database design.
          </ServiceCard>
        </div>

        <div className="mt-8 grid md:grid-cols-4 gap-4">
          <div className="p-4 border rounded">React Applications</div>
          <div className="p-4 border rounded">Mobile-First Design</div>
          <div className="p-4 border rounded">API Development</div>
          <div className="p-4 border rounded">Performance Optimization</div>
        </div>
      </div>
    </section>
  );
}
