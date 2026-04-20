import React, { useEffect, useState } from 'react';
import { X, Siren, MapPin, Phone, Ambulance, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Props { open: boolean; onClose: () => void; }

const EmergencyModal: React.FC<Props> = ({ open, onClose }) => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    if (!open) { setStage(0); return; }
    const t1 = setTimeout(() => setStage(1), 1200);
    const t2 = setTimeout(() => setStage(2), 2800);
    const t3 = setTimeout(() => setStage(3), 4400);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [open]);

  if (!open) return null;

  const steps = [
    { icon: MapPin, title: 'Locating you...', desc: 'Acquiring GPS coordinates' },
    { icon: Ambulance, title: 'Dispatching ambulance', desc: 'Nearest partner: City General Hospital (1.2 km)' },
    { icon: ShieldCheck, title: 'Sharing medical profile', desc: 'Blood group, allergies & conditions sent to receiving team' },
    { icon: Phone, title: 'Connecting on-call doctor', desc: 'Dr. Amara Okafor will stay on the line until help arrives' },
  ];

  return (
    <div className="fixed inset-0 z-[100] grid place-items-center p-4 bg-red-900/80 backdrop-blur-sm">
      <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-red-600 to-red-700 p-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-white/20 grid place-items-center"><Siren className="w-5 h-5" /></div>
            <div>
              <div className="font-bold">Emergency Activated</div>
              <div className="text-xs text-red-100">Help is being dispatched</div>
            </div>
          </div>
          <button onClick={onClose} className="p-1 rounded hover:bg-white/20"><X className="w-5 h-5" /></button>
        </div>
        <div className="p-6 space-y-3">
          {steps.map((s, i) => {
            const done = stage > i;
            const active = stage === i;
            return (
              <div key={i} className={`flex gap-3 p-3 rounded-xl border-2 transition-all ${done ? 'bg-emerald-50 border-emerald-200' : active ? 'bg-red-50 border-red-300' : 'bg-slate-50 border-slate-200 opacity-50'}`}>
                <div className={`w-10 h-10 rounded-lg grid place-items-center shrink-0 ${done ? 'bg-emerald-500' : active ? 'bg-red-500' : 'bg-slate-300'}`}>
                  <s.icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-sm text-[#0A2E5C]">{s.title}</div>
                  <div className="text-xs text-slate-600">{s.desc}</div>
                </div>
                {active && <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse mt-3" />}
                {done && <span className="text-emerald-600 text-xs font-bold mt-2">DONE</span>}
              </div>
            );
          })}
          <Button onClick={onClose} variant="outline" className="w-full mt-3 border-slate-300">Cancel Emergency</Button>
        </div>
      </div>
    </div>
  );
};

export default EmergencyModal;
