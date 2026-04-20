import React, { useState } from 'react';
import { Users, Check, Globe2, Shield, Crown, AlertCircle } from 'lucide-react';
import { FAMILY_PLANS } from '@/data/doctors';
import { Button } from '@/components/ui/button';

interface Props { onSubscribe: (members: number, region: string) => void; }

const REGIONS = [
  { id: 'africa', label: 'Africa', flag: '🇳🇬', color: 'from-amber-500 to-orange-500' },
  { id: 'asia', label: 'South / SE Asia', flag: '🇮🇳', color: 'from-rose-500 to-pink-500' },
  { id: 'latam', label: 'Latin America', flag: '🇲🇽', color: 'from-emerald-500 to-teal-500' },
  { id: 'na', label: 'North America / Europe', flag: '🇺🇸', color: 'from-blue-500 to-indigo-500' },
];

const FamilyPlans: React.FC<Props> = ({ onSubscribe }) => {
  const [region, setRegion] = useState<'africa' | 'asia' | 'latam' | 'na'>('africa');
  const [selectedSize, setSelectedSize] = useState(6);

  return (
    <section id="family" className="py-20 bg-[#0A2E5C] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(circle at 30% 20%, #1E88E5 0%, transparent 50%), radial-gradient(circle at 70% 80%, #00C853 0%, transparent 50%)'
      }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold tracking-wider uppercase mb-4">
            Family Care Plans
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ fontFamily: 'Merriweather, serif' }}>
            Cover up to 10 family members on one plan
          </h2>
          <p className="text-blue-200 max-w-2xl mx-auto">
            Affordable concierge medicine, priced fairly for your region. One Primary Subscriber manages billing — every member has their own private health profile.
          </p>
        </div>

        <div className="flex justify-center mb-8 flex-wrap gap-2">
          {REGIONS.map((r) => (
            <button
              key={r.id}
              onClick={() => setRegion(r.id as any)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                region === r.id ? `bg-gradient-to-r ${r.color} text-white shadow-lg` : 'bg-white/10 text-blue-100 hover:bg-white/20'
              }`}
            >
              <span className="mr-1.5">{r.flag}</span> {r.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-10">
          {FAMILY_PLANS.map((p) => {
            const price = (p as any)[region];
            const active = selectedSize === p.members;
            return (
              <button
                key={p.members}
                onClick={() => setSelectedSize(p.members)}
                className={`p-4 rounded-2xl border-2 text-center transition-all ${
                  active ? 'bg-emerald-500 border-emerald-400 scale-105 shadow-2xl' : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
              >
                <Users className={`w-5 h-5 mx-auto mb-1 ${active ? 'text-white' : 'text-blue-200'}`} />
                <div className={`text-xs font-medium ${active ? 'text-white' : 'text-blue-200'}`}>Family of</div>
                <div className={`text-2xl font-bold ${active ? 'text-white' : 'text-white'}`}>{p.members}</div>
                <div className={`text-xs mt-1 ${active ? 'text-emerald-100' : 'text-blue-200'}`}>${price}/mo</div>
              </button>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-5 h-5 text-emerald-400" />
              <h3 className="font-bold text-lg">Permission Hierarchy</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-blue-200 text-xs uppercase tracking-wider border-b border-white/10">
                    <th className="py-2 pr-3">Capability</th>
                    <th className="py-2 px-3 text-center"><Crown className="w-4 h-4 inline text-amber-400" /> Primary</th>
                    <th className="py-2 px-3 text-center">Member</th>
                    <th className="py-2 pl-3 text-center">Doctor</th>
                  </tr>
                </thead>
                <tbody className="text-blue-50">
                  {[
                    ['Consult a doctor personally', true, true, false],
                    ['View own health history', true, true, true],
                    ['Manage billing & payments', true, false, false],
                    ['Add / remove family members', true, false, false],
                    ['Trigger Emergency Button (anyone)', true, true, false],
                    ['Issue prescriptions', false, false, true],
                  ].map(([cap, p, m, d], i) => (
                    <tr key={i} className="border-b border-white/5">
                      <td className="py-2.5 pr-3">{cap as string}</td>
                      <td className="py-2.5 px-3 text-center">{p ? <Check className="w-4 h-4 text-emerald-400 mx-auto" /> : <span className="text-slate-500">—</span>}</td>
                      <td className="py-2.5 px-3 text-center">{m ? <Check className="w-4 h-4 text-emerald-400 mx-auto" /> : <span className="text-slate-500">—</span>}</td>
                      <td className="py-2.5 pl-3 text-center">{d ? <Check className="w-4 h-4 text-emerald-400 mx-auto" /> : <span className="text-slate-500">—</span>}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 flex gap-2 p-3 rounded-lg bg-amber-500/10 border border-amber-500/30">
              <AlertCircle className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
              <p className="text-xs text-amber-100">
                <strong>Emergency Exception:</strong> In a crisis, every family member — regardless of role — can trigger the emergency button on behalf of any other member. Time is life.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-6 flex flex-col">
            <div className="text-xs uppercase tracking-wider text-emerald-100 font-semibold">Your Selection</div>
            <div className="text-4xl font-bold mt-2">${(FAMILY_PLANS.find((p) => p.members === selectedSize) as any)?.[region]}<span className="text-base font-normal text-emerald-100">/mo</span></div>
            <div className="text-sm text-emerald-100 mt-1">Family of {selectedSize} · {REGIONS.find((r) => r.id === region)?.label}</div>
            <ul className="space-y-2 mt-5 text-sm flex-1">
              {[
                'Unlimited AI health scans',
                'Multilingual consultations',
                '24/7 Emergency button for all',
                'Personal health records',
                'IoT device integration',
              ].map((f) => (
                <li key={f} className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-200 shrink-0" /> {f}</li>
              ))}
            </ul>
            <Button
              onClick={() => onSubscribe(selectedSize, region)}
              className="w-full mt-5 bg-white text-emerald-700 hover:bg-emerald-50 font-bold"
            >
              <Globe2 className="w-4 h-4 mr-2" /> Subscribe Now
            </Button>
            <p className="text-[10px] text-emerald-100 text-center mt-2">Cancel anytime · Secure billing</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FamilyPlans;
