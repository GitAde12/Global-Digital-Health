import React from 'react';
import { Briefcase, TrendingUp, Globe, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Props { onJoin: () => void; }

const DoctorCTA: React.FC<Props> = ({ onJoin }) => {
  return (
    <section id="doctors-cta" className="py-20 bg-gradient-to-br from-[#0A2E5C] to-[#1E88E5] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-semibold tracking-wider uppercase mb-4">
              <Briefcase className="w-3.5 h-3.5" /> For Doctors
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ fontFamily: 'Merriweather, serif' }}>
              Practice globally. Earn fairly. Keep 80%.
            </h2>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Join 14,200+ verified doctors building borderless practices. We handle credentialing, payments, taxes documentation, and translation — you focus on care.
            </p>
            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              {[
                { icon: TrendingUp, t: '80% Earnings', s: 'Transparent split — no hidden fees' },
                { icon: Globe, t: 'Global Patients', s: 'Reach 67 countries with AI translation' },
                { icon: Calendar, t: 'Flexible Hours', s: 'Set your own availability & coverage' },
                { icon: Briefcase, t: 'Tax Statements', s: 'Monthly earnings reports for filing' },
              ].map((b) => (
                <div key={b.t} className="flex gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                  <b.icon className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-sm">{b.t}</div>
                    <div className="text-xs text-blue-200 mt-0.5">{b.s}</div>
                  </div>
                </div>
              ))}
            </div>
            <Button onClick={onJoin} size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold">
              Apply as a Doctor <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <div className="text-xs text-blue-200 mt-3">Verification typically takes 48–72 hours</div>
          </div>

          <div className="relative">
            <img src="https://d64gsuwffb70l.cloudfront.net/69df6d812d6d6ef2ff600f6c_1776250508587_57330537.png" alt="Family using MediConnect" className="rounded-2xl shadow-2xl ring-1 ring-white/20" />
            <div className="absolute -bottom-5 -left-5 bg-white text-slate-900 rounded-xl p-4 shadow-2xl max-w-xs hidden md:block">
              <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold">This Month</div>
              <div className="text-2xl font-bold text-[#0A2E5C]">$8,420</div>
              <div className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
                <TrendingUp className="w-3 h-3" /> +24% vs last month
              </div>
              <div className="mt-2 text-[11px] text-slate-500">Dr. Amara Okafor · 142 consultations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorCTA;
