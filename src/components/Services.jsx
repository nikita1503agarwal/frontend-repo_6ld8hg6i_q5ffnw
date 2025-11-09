import React from 'react';
import { Film, PlayCircle, MousePointerClick } from 'lucide-react';

const Card = ({ icon: Icon, title, desc }) => (
  <div className="group rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur transition hover:bg-white/10">
    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#4a91f2] to-blue-600 text-white shadow-lg shadow-[#4a91f2]/30">
      <Icon className="h-6 w-6" />
    </div>
    <h3 className="text-xl font-semibold text-white">{title}</h3>
    <p className="mt-3 text-sm leading-relaxed text-white/80">{desc}</p>
  </div>
);

const Services = () => {
  return (
    <section id="services" className="relative w-full bg-gradient-to-b from-black to-[#0b1220] py-28 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Services Designed for Measurable Impact</h2>
          <p className="mt-4 text-white/70">Each deliverable is engineered to reduce friction, increase clarity, and move users to action.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <Card
            icon={Film}
            title="Explainer Videos"
            desc="Simplify complex SaaS products and accelerate user understanding"
          />
          <Card
            icon={PlayCircle}
            title="Product Demo Videos"
            desc="Showcase your product's value and drive feature adoption"
          />
          <Card
            icon={MousePointerClick}
            title="Motion Graphics & UI Animation"
            desc="Enhance user experience and guide users through workflows"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
