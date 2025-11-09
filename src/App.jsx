import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import ProofAndSolutions from './components/ProofAndSolutions';
import CaseStudiesAndContact from './components/CaseStudiesAndContact';

function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-black text-white">
      {/* Hero with Spline animation */}
      <Hero />

      {/* Services */}
      <Services />

      {/* Portfolio with hover-play videos and filters */}
      <Portfolio />

      {/* Social proof, solutions grid, retainer & process with scarcity */}
      <ProofAndSolutions />

      {/* Case studies, contact, and final CTA */}
      <CaseStudiesAndContact />

      <footer className="border-t border-white/10 bg-black py-8 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Metric Motion Studio — Animation for B2B SaaS
      </footer>
    </div>
  );
}

export default App;
