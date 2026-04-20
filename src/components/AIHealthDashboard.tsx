import React from 'react';
import { Activity, Droplets, Thermometer, Wind, Brain, AlertTriangle, TrendingUp, Watch, Sparkles } from 'lucide-react';

const AIHealthDashboard: React.FC = () => {
  const metrics = [
    { icon: Activity, label: 'Heart Rate', value: '72', unit: 'bpm', status: 'normal', color: 'emerald' },
    { icon: Droplets, label: 'Blood Pressure', value: '128/84', unit: 'mmHg', status: 'elevated', color: 'amber' },
    { icon: Thermometer, label: 'Body Temp', value: '36.7', unit: '°C', status: 'normal', color: 'emerald' },
    { icon: Wind, label: 'SpO₂', value: '98', unit: '%', status: 'normal', color: 'emerald' },
  ];

  const nudges = [
    { type: 'alert', text: 'BP elevated for 3 consecutive days. Consider a cardiology check-in.', time: '2 min ago' },
    { type: 'reminder', text: 'Time for your evening Metformin (500mg).', time: '1 hr ago' },
    { type: 'insight', text: 'Sleep quality improved 18% this week. Keep it up!', time: '3 hrs ago' },
  ];

  return (
    <section id="ai" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold tracking-wider uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5" /> Agentic AI Layer
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A2E5C] mb-4" style={{ fontFamily: 'Merriweather, serif' }}>
              An AI doctor watching over you 24/7
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              MediConnect's AI continuously reads data from your Apple Watch, glucometer, blood pressure cuff, and pulse oximeter — autonomously flagging anomalies, sending nudges, and pre-briefing your doctor before consultations.
            </p>
            <div className="space-y-3">
              {[
                { icon: Watch, title: 'IoT Integration', desc: 'Apple HealthKit, Google Fit, Bluetooth BP cuffs & glucometers — all in one stream.' },
                { icon: Brain, title: 'Autonomous Triage', desc: 'AI suggests the right specialist the moment you log in with symptoms.' },
                { icon: TrendingUp, title: 'Doctor Pre-Brief', desc: 'Your full history, IoT trends, and AI summary appear instantly for your doctor.' },
              ].map((f) => (
                <div key={f.title} className="flex gap-3 p-3 rounded-xl hover:bg-white transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 grid place-items-center shrink-0">
                    <f.icon className="w-5 h-5 text-[#1E88E5]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#0A2E5C] text-sm">{f.title}</div>
                    <div className="text-xs text-slate-600 mt-0.5">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
              <div className="bg-gradient-to-r from-[#0A2E5C] to-[#1E88E5] p-5 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-blue-200 uppercase tracking-wider">Health Dashboard</div>
                    <div className="font-bold text-lg">Live Vitals</div>
                  </div>
                  <div className="flex items-center gap-2 bg-white/15 backdrop-blur rounded-full px-3 py-1 text-xs">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Streaming from Apple Watch
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 p-5">
                {metrics.map((m) => (
                  <div key={m.label} className={`p-3 rounded-xl border ${m.color === 'emerald' ? 'bg-emerald-50 border-emerald-200' : 'bg-amber-50 border-amber-200'}`}>
                    <div className="flex items-center justify-between mb-1">
                      <m.icon className={`w-4 h-4 ${m.color === 'emerald' ? 'text-emerald-600' : 'text-amber-600'}`} />
                      <span className={`text-[10px] font-semibold uppercase ${m.color === 'emerald' ? 'text-emerald-700' : 'text-amber-700'}`}>{m.status}</span>
                    </div>
                    <div className="text-xl font-bold text-[#0A2E5C]">{m.value}<span className="text-xs text-slate-500 font-normal ml-1">{m.unit}</span></div>
                    <div className="text-[11px] text-slate-600 mt-0.5">{m.label}</div>
                  </div>
                ))}
              </div>

              <div className="border-t border-slate-100 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="w-4 h-4 text-amber-500" />
                  <div className="font-semibold text-sm text-[#0A2E5C]">AI Nudges</div>
                </div>
                <div className="space-y-2">
                  {nudges.map((n, i) => (
                    <div key={i} className="flex gap-3 p-2.5 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors">
                      <div className={`w-1 rounded-full ${n.type === 'alert' ? 'bg-amber-500' : n.type === 'reminder' ? 'bg-blue-500' : 'bg-emerald-500'}`} />
                      <div className="flex-1">
                        <div className="text-xs text-slate-700 leading-snug">{n.text}</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">{n.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIHealthDashboard;
