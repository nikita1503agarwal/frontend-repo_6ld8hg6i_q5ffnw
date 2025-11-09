import React from 'react';
import { CheckCircle2, Users2, Gauge, Clock } from 'lucide-react';

const logos = [
  { name: 'Segment', src: 'https://dummyimage.com/96x28/ffffff/000000&text=Segment' },
  { name: 'HubSpot', src: 'https://dummyimage.com/96x28/ffffff/000000&text=HubSpot' },
  { name: 'Datadog', src: 'https://dummyimage.com/96x28/ffffff/000000&text=Datadog' },
  { name: 'Amplitude', src: 'https://dummyimage.com/96x28/ffffff/000000&text=Amplitude' },
];

const SolutionCard = ({ title, subtitle, points }) => (
  <div className="rounded-xl border border-white/10 bg-white/5 p-6">
    <h3 className="text-lg font-semibold text-white">{title}</h3>
    <p className="mt-1 text-sm text-white/70">{subtitle}</p>
    <ul className="mt-4 space-y-2 text-sm text-white/80">
      {points.map((p) => (
        <li key={p} className="flex items-start gap-2">
          <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#4a91f2]" />
          <span>{p}</span>
        </li>
      ))}
    </ul>
  </div>
);

const ProofAndSolutions = () => {
  return (
    <section className="bg-[#0b1220] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Social proof with contrast */}
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Trusted by data-driven SaaS teams</h2>
            <p className="mt-3 text-white/70">Contrast that converts: see the before/after impact of animation on key metrics.</p>

            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-lg bg-red-500/10 p-4 text-red-300">
                <div className="text-xs font-semibold uppercase tracking-wide text-red-400">Before</div>
                <div className="mt-1">Trial-to-paid: 22%</div>
                <div>Support tickets/mo: 100</div>
                <div>Feature adoption: 18%</div>
              </div>
              <div className="rounded-lg bg-green-500/10 p-4 text-green-300">
                <div className="text-xs font-semibold uppercase tracking-wide text-green-400">After</div>
                <div className="mt-1">Trial-to-paid: 40%+</div>
                <div>Support tickets/mo: -40%</div>
                <div>Feature adoption: 2.5x</div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-6 opacity-80">
              {logos.map((l) => (
                <img key={l.name} src={l.src} alt={l.name} className="h-6" />
              ))}
            </div>
          </div>

          {/* Solutions grid with value anchoring */}
          <div className="grid gap-4 md:grid-cols-3">
            <SolutionCard
              title="Onboarding Videos"
              subtitle="Turn confused trials into paying customers"
              points={[
                'Reduce time-to-value',
                'Clarify core workflows',
                'Preempt objections',
              ]}
            />
            <SolutionCard
              title="Support Reduction"
              subtitle="Deflect 40% of support tickets visually"
              points={[
                'Cut repetitive tickets',
                'Scale help center content',
                'Fewer escalations',
              ]}
            />
            <SolutionCard
              title="Feature Adoption"
              subtitle="2.5x higher feature engagement"
              points={[
                'Drive discovery',
                'Explain advanced features',
                'Boost activation',
              ]}
            />
          </div>
        </div>

        {/* Retainer with cost comparison psychology */}
        <div className="mt-20 rounded-2xl border border-white/10 bg-gradient-to-br from-[#0b1220] to-black p-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold">Your Animation Department, Without the Overhead</h3>
              <p className="mt-2 text-white/70">Dedicated resources, consistent quality, and a fraction of the cost of hiring in-house.</p>

              <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <div className="rounded-lg bg-white/5 p-4">
                  <div className="mb-1 flex items-center gap-2 font-semibold text-white"><Users2 className="h-4 w-4 text-[#4a91f2]"/>In-House Team</div>
                  <ul className="space-y-1 text-white/70">
                    <li>Hiring + onboarding</li>
                    <li>Capacity constraints</li>
                    <li>Higher fixed costs</li>
                  </ul>
                </div>
                <div className="rounded-lg bg-white/5 p-4 ring-1 ring-[#4a91f2]/40">
                  <div className="mb-1 flex items-center gap-2 font-semibold text-white"><Gauge className="h-4 w-4 text-[#4a91f2]"/>Our Retainer</div>
                  <ul className="space-y-1 text-white/70">
                    <li>Dedicated team on demand</li>
                    <li>Predictable capacity</li>
                    <li>Fraction of the overhead</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-white/5 p-6">
              <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-white/60">Process & Scarcity</div>
              <ol className="space-y-4 text-sm text-white/80">
                <li><span className="font-semibold text-white">Week 1:</span> Strategy + scripting</li>
                <li><span className="font-semibold text-white">Week 2:</span> Design + storyboards</li>
                <li><span className="font-semibold text-white">Week 3-4:</span> Animation + delivery</li>
              </ol>
              <div className="mt-4 rounded-lg bg-[#4a91f2]/10 p-4 text-[#4a91f2]">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold">Free strategy call — limited slots this month</p>
                  <Clock className="h-4 w-4" />
                </div>
              </div>
              <a href="#contact" className="mt-4 inline-flex items-center justify-center rounded-md bg-[#4a91f2] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#4a91f2]/30 hover:brightness-110">Book Your Free Strategy Session</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofAndSolutions;
