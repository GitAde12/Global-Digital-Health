import React from 'react';
import { Star, Quote } from 'lucide-react';

const items = [
  {
    name: 'Adaeze N.', role: 'Mother of 3, Lagos', stars: 5,
    text: 'I added my whole family on the Family of 6 plan for $9/month. My mother in the village can now consult specialists in Mumbai with real-time translation. Life-changing.'
  },
  {
    name: 'Dr. Hiroshi Tanaka', role: 'Cardiologist, Tokyo', stars: 5,
    text: 'The doctor pre-brief is brilliant. By the time my patient joins the call, I already have their IoT trends, history, and AI summary. I save 10+ minutes per consultation.'
  },
  {
    name: 'Carlos M.', role: 'Patient, São Paulo', stars: 5,
    text: 'I had elevated BP for 3 days and the AI nudged me. Booked Dr. Chen the same day and got medication adjusted. The 80/20 transparency makes me trust the system.'
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-semibold tracking-wider uppercase mb-4">
            Trusted Globally
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A2E5C]" style={{ fontFamily: 'Merriweather, serif' }}>
            Loved by patients & doctors in 67 countries
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t) => (
            <div key={t.name} className="bg-gradient-to-br from-slate-50 to-blue-50/30 p-6 rounded-2xl border border-slate-200 relative">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-blue-100" />
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-500 fill-current" />
                ))}
              </div>
              <p className="text-sm text-slate-700 leading-relaxed mb-4">"{t.text}"</p>
              <div className="flex items-center gap-3 pt-3 border-t border-slate-200">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0A2E5C] to-[#1E88E5] grid place-items-center text-white font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-sm text-[#0A2E5C]">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
