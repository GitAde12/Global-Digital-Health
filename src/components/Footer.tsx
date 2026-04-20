import React, { useState } from 'react';
import { Activity, Mail, Twitter, Linkedin, Facebook, Instagram, Globe, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes('@')) {
      toast({ title: 'Invalid email', description: 'Please enter a valid email address.' });
      return;
    }
    toast({ title: 'Subscribed!', description: 'Welcome to the MediConnect community.' });
    setEmail('');
  };

  const cols = [
    { title: 'Patients', links: ['Find a Doctor', 'AI Health Scan', 'Family Plans', 'Emergency Care', 'Home Visits', 'Health Records'] },
    { title: 'Doctors', links: ['Apply to Practice', 'Doctor Dashboard', 'Earnings & Payouts', 'Verification', 'Doctor Resources', 'Tax Documents'] },
    { title: 'Company', links: ['About MediConnect', 'Our Mission', 'Careers', 'Press & Media', 'Partner Hospitals', 'Contact Us'] },
    { title: 'Legal & Trust', links: ['Privacy Policy', 'Terms of Service', 'HIPAA Compliance', 'GDPR', 'Dispute Policy', 'Refund Policy'] },
  ];

  return (
    <footer className="bg-[#061b3a] text-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-12 gap-10 mb-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1E88E5] to-emerald-500 grid place-items-center">
                <Activity className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <div className="font-bold text-white text-lg">MediConnect</div>
                <div className="text-[10px] text-blue-300 tracking-wider uppercase">The World's Online Hospital</div>
              </div>
            </div>
            <p className="text-sm text-blue-200 mb-5 leading-relaxed">
              Concierge medicine for everyone, everywhere. Available in 67 countries, 12 languages, with 14,200+ verified doctors.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2 mb-5">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Get health tips & updates"
                  className="w-full pl-10 pr-3 py-2.5 rounded-lg bg-white/10 border border-white/20 text-sm text-white placeholder:text-blue-300 outline-none focus:border-emerald-400"
                />
              </div>
              <Button type="submit" className="bg-emerald-500 hover:bg-emerald-600">Subscribe</Button>
            </form>
            <div className="flex gap-2">
              {[Twitter, Linkedin, Facebook, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-emerald-500 grid place-items-center transition-colors">
                  <Icon className="w-4 h-4 text-white" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {cols.map((c) => (
              <div key={c.title}>
                <div className="font-semibold text-white text-sm mb-3 uppercase tracking-wider text-xs">{c.title}</div>
                <ul className="space-y-2">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="text-sm text-blue-200 hover:text-emerald-400 transition-colors">{l}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-blue-300">© {new Date().getFullYear()} MediConnect Inc. All rights reserved. A globally licensed digital health platform.</div>
          <div className="flex flex-wrap items-center gap-4 text-xs">
            <span className="flex items-center gap-1.5 text-blue-200"><ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> HIPAA</span>
            <span className="flex items-center gap-1.5 text-blue-200"><ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> GDPR</span>
            <span className="flex items-center gap-1.5 text-blue-200"><ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> AES-256</span>
            <span className="flex items-center gap-1.5 text-blue-200"><Globe className="w-3.5 h-3.5 text-emerald-400" /> 67 Countries</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
