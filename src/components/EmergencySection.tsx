import React from 'react';
import { Siren, MapPin, Ambulance, Phone, ShieldCheck, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Props { onEmergency: () => void; }

const EmergencySection: React.FC<Props> = ({ onEmergency }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-red-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-semibold tracking-wider uppercase mb-4">
              <Siren className="w-3.5 h-3.5" /> Emergency System
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A2E5C] mb-4" style={{ fontFamily: 'Merriweather, serif' }}>
              One button. One tap. Help is on the way.
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              The MediConnect emergency button connects you instantly to the nearest partnered hospital and ambulance service. Your blood group, allergies, and chronic conditions are auto-shared with the receiving team — saving precious minutes.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {[
                { icon: MapPin, title: 'Live Location', desc: 'GPS-precise dispatch to your exact location.' },
                { icon: Ambulance, title: 'City Partners', desc: 'Integrated with local ambulance networks worldwide.' },
                { icon: Phone, title: 'On-Call Doctor', desc: 'A MediConnect doctor stays on the line until help arrives.' },
                { icon: ShieldCheck, title: 'Profile Auto-Share', desc: 'Critical health data sent to receiving hospital instantly.' },
              ].map((f) => (
                <div key={f.title} className="flex gap-3 p-3 rounded-xl bg-white border border-slate-200">
                  <div className="w-9 h-9 rounded-lg bg-red-100 grid place-items-center shrink-0">
                    <f.icon className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-[#0A2E5C]">{f.title}</div>
                    <div className="text-xs text-slate-600 mt-0.5">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-3 text-xs text-slate-600">
              <Clock className="w-4 h-4 text-emerald-600" />
              Average response time: <strong className="text-[#0A2E5C]">7 min 32 sec</strong> (across 67 cities)
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-red-500 to-red-700 rounded-3xl p-8 text-center text-white shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-white animate-ping" style={{ animationDuration: '3s' }} />
              </div>
              <div className="relative">
                <button
                  onClick={onEmergency}
                  className="w-40 h-40 mx-auto rounded-full bg-white text-red-600 grid place-items-center shadow-2xl hover:scale-105 active:scale-95 transition-transform"
                >
                  <div className="text-center">
                    <Siren className="w-12 h-12 mx-auto mb-1" />
                    <div className="font-bold text-sm tracking-wider">EMERGENCY</div>
                  </div>
                </button>
                <div className="mt-6">
                  <div className="font-bold text-lg">Tap to dispatch ambulance</div>
                  <div className="text-sm text-red-100 mt-1">Your location & medical profile will be shared instantly</div>
                </div>
                <Button
                  onClick={onEmergency}
                  className="mt-4 bg-white/20 hover:bg-white/30 text-white border border-white/30"
                >
                  <Phone className="w-4 h-4 mr-2" /> Call MediConnect Doctor
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencySection;
