import React from 'react';
import { ShieldCheck, Languages, Heart, ArrowRight, PlayCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroProps {
  onStart: () => void;
  onEmergency: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStart, onEmergency }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0A2E5C] via-[#103a73] to-[#1E88E5] text-white">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(0,200,131,0.4) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(30,136,229,0.5) 0%, transparent 40%)'
      }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-medium tracking-wide">LIVE — 2,847 doctors online globally</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6" style={{ fontFamily: 'Merriweather, serif' }}>
              The world's <span className="text-emerald-400">online hospital</span> — built for everyone, everywhere.
            </h1>
            <p className="text-lg text-blue-100 mb-8 max-w-xl leading-relaxed">
              Concierge medicine for the next billion. Real-time multilingual consultations, AI-powered health monitoring, and 24/7 emergency care — at prices that work for your region.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <Button size="lg" onClick={onStart} className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold">
                Find a Doctor Now <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" variant="outline" onClick={onEmergency} className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                <PlayCircle className="w-4 h-4 mr-2" /> Watch Demo
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-6 text-sm text-blue-100">
              <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-emerald-400" /> HIPAA & GDPR Compliant</div>
              <div className="flex items-center gap-2"><Languages className="w-4 h-4 text-emerald-400" /> 12+ Languages</div>
              <div className="flex items-center gap-2"><Heart className="w-4 h-4 text-emerald-400" /> AI Health Triage</div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/20">
              <img src="https://d64gsuwffb70l.cloudfront.net/69df6d812d6d6ef2ff600f6c_1776250399265_c44867b5.jpg" alt="Doctor consultation" className="w-full h-auto" />
              <div className="absolute top-4 left-4 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" /> LIVE
              </div>
              <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur rounded-xl px-3 py-2 text-slate-900 text-xs font-semibold shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-emerald-500 text-white grid place-items-center text-[10px]">DR</div>
                  <div>
                    <div>Dr. Amara Okafor</div>
                    <div className="text-emerald-600 font-normal">● Translating EN → YO</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating cards */}
            <div className="hidden md:block absolute -left-6 top-10 bg-white text-slate-900 rounded-xl shadow-2xl p-3 w-52 border border-slate-100">
              <div className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold mb-1">Heart Rate (IoT)</div>
              <div className="flex items-end gap-2">
                <div className="text-2xl font-bold text-[#0A2E5C]">72</div>
                <div className="text-xs text-slate-500 mb-1">bpm · normal</div>
              </div>
              <div className="mt-2 flex gap-0.5 items-end h-8">
                {[40,55,30,70,45,80,50,65,55,75,60,50].map((h,i) => (
                  <div key={i} className="flex-1 bg-emerald-400 rounded-sm" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>

            <div className="hidden md:block absolute -right-4 -bottom-6 bg-white text-slate-900 rounded-xl shadow-2xl p-3 w-56 border border-slate-100">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-md bg-amber-100 grid place-items-center"><Heart className="w-3.5 h-3.5 text-amber-600" /></div>
                <div className="text-xs font-bold text-[#0A2E5C]">AI Nudge</div>
              </div>
              <div className="text-xs text-slate-600 leading-relaxed">Your BP has been elevated 3 days. Consider booking a checkup with Dr. Chen.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="relative bg-white/5 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { v: '2.4M+', l: 'Patients Served' },
            { v: '14,200', l: 'Verified Doctors' },
            { v: '67', l: 'Countries' },
            { v: '4.9/5', l: 'Avg. Rating' },
          ].map((s) => (
            <div key={s.l}>
              <div className="text-2xl md:text-3xl font-bold text-white">{s.v}</div>
              <div className="text-xs uppercase tracking-wider text-blue-200 mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
