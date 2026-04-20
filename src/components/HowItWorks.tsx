import React from 'react';
import { UserPlus, Search, Video, FileText, CreditCard, ShieldCheck } from 'lucide-react';

const steps = [
  { icon: UserPlus, title: 'Sign up in 60 seconds', desc: 'Lightweight registration: name, age, blood group. Optional medical history.' },
  { icon: Search, title: 'Find your doctor', desc: 'Search by symptom, specialty, or location. Internal AI surfaces the best fit.' },
  { icon: Video, title: 'Live consultation', desc: 'Video, voice, or chat — with real-time translation in 12+ languages.' },
  { icon: FileText, title: 'Receive prescription', desc: 'Digital scripts, referrals, and follow-up plans saved to your record.' },
  { icon: CreditCard, title: 'Transparent pricing', desc: 'Pay per session or subscribe. Regional pricing keeps it affordable.' },
  { icon: ShieldCheck, title: '24h dispute window', desc: 'Not satisfied? Raise a verified dispute within 24 hours for review.' },
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-[#1E88E5] text-xs font-semibold tracking-wider uppercase mb-4">
            How It Works
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A2E5C] mb-3" style={{ fontFamily: 'Merriweather, serif' }}>
            From sign-up to prescription in minutes
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((s, i) => (
            <div key={s.title} className="relative bg-gradient-to-br from-slate-50 to-blue-50/40 rounded-2xl p-6 border border-slate-200 hover:shadow-md transition-all">
              <div className="absolute top-4 right-4 text-5xl font-bold text-blue-100 leading-none">0{i + 1}</div>
              <div className="w-11 h-11 rounded-xl bg-[#1E88E5] grid place-items-center mb-4">
                <s.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-bold text-[#0A2E5C] text-lg mb-1">{s.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
