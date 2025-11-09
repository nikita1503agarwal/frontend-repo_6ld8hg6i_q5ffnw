import React, { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Onboarding Flow Revamp',
    type: 'Explainer',
    industry: 'Analytics',
    logo: 'https://dummyimage.com/96x28/ffffff/000000&text=DataPulse',
    before: { conversion: 22, tickets: 100 },
    after: { conversion: 41, tickets: 58 },
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    thumb: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Feature Adoption Sprint',
    type: 'Demo',
    industry: 'Fintech',
    logo: 'https://dummyimage.com/96x28/ffffff/000000&text=LedgerIQ',
    before: { adoption: 18 },
    after: { adoption: 47 },
    video: 'https://www.w3schools.com/html/movie.mp4',
    thumb: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Support Deflection Series',
    type: 'Motion Graphics',
    industry: 'DevTools',
    logo: 'https://dummyimage.com/96x28/ffffff/000000&text=ShipKit',
    before: { tickets: 100 },
    after: { tickets: 60 },
    video: 'https://www.w3schools.com/html/mov_bbb.mp4',
    thumb: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop',
  },
];

const filters = ['All', 'Explainer', 'Demo', 'Motion Graphics'];

const Portfolio = () => {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? projects : projects.filter(p => p.type === active);

  return (
    <section id="portfolio" className="w-full bg-black py-28 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-3xl font-bold sm:text-4xl">Selected Work & Outcomes</h2>
          <div className="flex flex-wrap items-center gap-2">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`rounded-full px-4 py-2 text-sm transition ${active === f ? 'bg-[#4a91f2] text-white' : 'bg-white/10 text-white/80 hover:bg-white/20'}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {filtered.map(p => (
            <div key={p.id} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="relative aspect-video w-full overflow-hidden">
                <video
                  src={p.video}
                  muted
                  loop
                  playsInline
                  poster={p.thumb}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  onMouseEnter={e => e.currentTarget.play()}
                  onMouseLeave={e => e.currentTarget.pause()}
                />
                <img src={p.logo} alt="client" className="absolute left-3 top-3 h-5 opacity-90" />
              </div>
              <div className="space-y-4 p-5">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  {p.before.conversion !== undefined && (
                    <div className="rounded-lg bg-red-500/10 p-3 text-red-300">
                      <div className="font-semibold">Before</div>
                      <div>Conversion: {p.before.conversion}%</div>
                    </div>
                  )}
                  {p.after.conversion !== undefined && (
                    <div className="rounded-lg bg-green-500/10 p-3 text-green-300">
                      <div className="font-semibold">After</div>
                      <div>Conversion: {p.after.conversion}%</div>
                    </div>
                  )}
                  {p.before.tickets !== undefined && (
                    <div className="rounded-lg bg-red-500/10 p-3 text-red-300">
                      <div className="font-semibold">Before</div>
                      <div>Tickets: {p.before.tickets}</div>
                    </div>
                  )}
                  {p.after.tickets !== undefined && (
                    <div className="rounded-lg bg-green-500/10 p-3 text-green-300">
                      <div className="font-semibold">After</div>
                      <div>Tickets: {p.after.tickets}</div>
                    </div>
                  )}
                  {p.before.adoption !== undefined && (
                    <div className="rounded-lg bg-red-500/10 p-3 text-red-300">
                      <div className="font-semibold">Before</div>
                      <div>Adoption: {p.before.adoption}%</div>
                    </div>
                  )}
                  {p.after.adoption !== undefined && (
                    <div className="rounded-lg bg-green-500/10 p-3 text-green-300">
                      <div className="font-semibold">After</div>
                      <div>Adoption: {p.after.adoption}%</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
