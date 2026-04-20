import React from 'react';
import {
  Stethoscope, Heart, Baby, Brain, Sparkles, Flower2, Smile, Bone, Wind, Shield, Eye
} from 'lucide-react';
import { SPECIALTIES } from '@/data/doctors';

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Stethoscope, Heart, Baby, Brain, Sparkles, Flower2, Smile, Bone, Wind, Shield, Eye
};

interface Props {
  onSelect: (name: string) => void;
}

const SpecialtyGrid: React.FC<Props> = ({ onSelect }) => {
  return (
    <section id="doctors" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-[#1E88E5] text-xs font-semibold tracking-wider uppercase mb-4">
            Find Your Doctor
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A2E5C] mb-3" style={{ fontFamily: 'Merriweather, serif' }}>
            Browse 40+ medical specialties
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Search by what's wrong, by the kind of doctor you need, or by location. Our internal algorithm fairly surfaces the best match for you.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {SPECIALTIES.map((s) => {
            const Icon = ICONS[s.icon] || Stethoscope;
            return (
              <button
                key={s.name}
                onClick={() => onSelect(s.name)}
                className="group bg-white rounded-2xl p-5 border border-slate-200 hover:border-[#1E88E5] hover:shadow-lg transition-all text-left"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 group-hover:from-[#1E88E5] group-hover:to-[#0A2E5C] grid place-items-center mb-3 transition-all">
                  <Icon className="w-5 h-5 text-[#1E88E5] group-hover:text-white transition-colors" />
                </div>
                <div className="font-semibold text-sm text-[#0A2E5C]">{s.name}</div>
                <div className="text-xs text-slate-500 mt-0.5">{s.count.toLocaleString()} doctors</div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SpecialtyGrid;
