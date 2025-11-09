import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Shield, BarChart3 } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/UngO8SNLfLcyPG7O/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-36 pb-24 text-center sm:pt-40 lg:pt-44 lg:pb-28">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2.5 text-xs font-medium backdrop-blur">
          <BarChart3 className="h-4 w-4 text-[#4a91f2]" />
          Built for B2B SaaS growth teams
        </span>
        <h1 className="text-balance text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="bg-gradient-to-r from-[#4a91f2] via-white to-[#4a91f2] bg-clip-text text-transparent">
            Animation That Moves Your Metrics
          </span>
        </h1>
        <p className="mt-6 max-w-3xl text-pretty text-base leading-relaxed text-white/85 sm:text-lg">
          Proven to boost trial-to-paid conversion by <span className="font-semibold text-white">80%</span> and reduce support tickets by <span className="font-semibold text-white">40%</span>.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-5 sm:gap-6">
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 rounded-md bg-[#4a91f2] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#4a91f2]/30 transition hover:brightness-110"
          >
            Get Your ROI Analysis
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <div className="inline-flex items-center gap-2 rounded-md bg-white/10 px-5 py-3 text-xs text-white/85 backdrop-blur">
            <Shield className="h-4 w-4 text-[#4a91f2]" />
            Risk-free strategy call included
          </div>
        </div>

        <div className="mt-16 grid w-full grid-cols-2 gap-5 sm:grid-cols-4 lg:gap-6">
          {[
            { kpi: '80%', label: 'Trial → Paid Lift' },
            { kpi: '40%', label: 'Fewer Support Tickets' },
            { kpi: '2.5x', label: 'Feature Adoption' },
            { kpi: '3.2x', label: 'Explainer Watch Time' },
          ].map((item) => (
            <div key={item.label} className="rounded-xl bg-white/10 p-5 text-left backdrop-blur">
              <div className="text-2xl font-bold text-white sm:text-3xl">{item.kpi}</div>
              <div className="mt-1 text-xs leading-relaxed text-white/70 sm:text-sm">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
