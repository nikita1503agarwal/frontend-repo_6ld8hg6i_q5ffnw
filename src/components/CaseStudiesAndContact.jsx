import React from 'react';
import { Quote, Mail, MapPin, Twitter, Linkedin, Phone } from 'lucide-react';

const CaseCard = ({ quote, name, role, result }) => (
  <div className="rounded-xl border border-white/10 bg-white/5 p-6">
    <Quote className="mb-3 h-6 w-6 text-[#4a91f2]" />
    <p className="text-white/90">“{quote}”</p>
    <div className="mt-4 text-sm text-white/70">— {name}, {role}</div>
    <div className="mt-2 rounded-lg bg-green-500/10 p-3 text-sm text-green-300">
      {result}
    </div>
  </div>
);

const CaseStudiesAndContact = () => {
  return (
    <section id="contact" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 grid gap-6 md:grid-cols-3">
          <div className="md:col-span-1">
            <h2 className="text-3xl font-bold sm:text-4xl">Case Studies with Social Proof</h2>
            <p className="mt-2 text-white/70">Specific numbers. Real outcomes. Trusted by marketing leaders.</p>
          </div>
          <div className="md:col-span-2 grid gap-6 md:grid-cols-3">
            <CaseCard
              quote="Our trial-to-paid jumped dramatically after launch — the videos clarified our value prop fast."
              name="Maya K."
              role="VP Marketing, DevOps SaaS"
              result="+83% trial → paid in 60 days"
            />
            <CaseCard
              quote="We deflected a huge portion of repetitive tickets with concise motion guides."
              name="Alan P."
              role="Head of Support, Analytics SaaS"
              result="-42% support tickets QoQ"
            />
            <CaseCard
              quote="The feature adoption series unlocked dormant usage and educated users without docs overload."
              name="Rita S."
              role="Growth Lead, Fintech SaaS"
              result="2.7x increase in key feature usage"
            />
          </div>
        </div>

        {/* Contact form */}
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-2xl font-semibold">Get Your ROI Analysis</h3>
            <p className="mt-2 text-sm text-white/70">Share a bit about your goals. We’ll map the fastest path to measurable impact.</p>
            <form className="mt-6 space-y-4">
              <div>
                <label className="text-xs text-white/60">Full Name</label>
                <input type="text" className="mt-1 w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-sm text-white placeholder-white/40 outline-none ring-[#4a91f2]/40 focus:ring" placeholder="Jane Doe" />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-xs text-white/60">Work Email</label>
                  <input type="email" className="mt-1 w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-sm text-white placeholder-white/40 outline-none ring-[#4a91f2]/40 focus:ring" placeholder="jane@company.com" />
                </div>
                <div>
                  <label className="text-xs text-white/60">Company</label>
                  <input type="text" className="mt-1 w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-sm text-white placeholder-white/40 outline-none ring-[#4a91f2]/40 focus:ring" placeholder="Acme SaaS" />
                </div>
              </div>
              <div>
                <label className="text-xs text-white/60">Goal</label>
                <select className="mt-1 w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-sm text-white outline-none ring-[#4a91f2]/40 focus:ring">
                  <option className="bg-black">Increase conversions</option>
                  <option className="bg-black">Reduce support tickets</option>
                  <option className="bg-black">Boost feature adoption</option>
                  <option className="bg-black">Other</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-white/60">Message</label>
                <textarea rows={4} className="mt-1 w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 text-sm text-white placeholder-white/40 outline-none ring-[#4a91f2]/40 focus:ring" placeholder="Tell us about your product and audience..." />
              </div>
              <button type="submit" className="group inline-flex items-center justify-center rounded-md bg-[#4a91f2] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#4a91f2]/30 transition hover:brightness-110">
                Request Strategy Session
              </button>
              <p className="text-xs text-white/60">We respond within 1 business day. Your data stays private.</p>
            </form>
          </div>

          <div className="space-y-6">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h4 className="font-semibold">Contact</h4>
              <ul className="mt-4 space-y-3 text-sm text-white/80">
                <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-[#4a91f2]"/> hello@metricmotion.studio</li>
                <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-[#4a91f2]"/> +1 (415) 555-0131</li>
                <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[#4a91f2]"/> Remote • San Francisco, CA</li>
              </ul>
            </div>
            <div className="flex items-center gap-3 text-white/70">
              <a href="#" aria-label="Twitter" className="rounded-full border border-white/10 p-2 hover:bg-white/10"><Twitter className="h-4 w-4"/></a>
              <a href="#" aria-label="LinkedIn" className="rounded-full border border-white/10 p-2 hover:bg-white/10"><Linkedin className="h-4 w-4"/></a>
            </div>
            <div className="rounded-xl bg-gradient-to-r from-[#4a91f2] via-blue-600 to-black p-6 text-white">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h4 className="text-lg font-semibold">Book Your Free Strategy Session (Limited Spots)</h4>
                  <p className="text-sm text-white/90">Reserve your time — sessions fill quickly each month.</p>
                </div>
                <a href="#contact" className="shrink-0 rounded-md bg-white/90 px-4 py-2 text-sm font-semibold text-black hover:bg-white">Book Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesAndContact;
