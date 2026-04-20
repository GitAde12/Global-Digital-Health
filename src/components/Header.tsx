import React, { useState } from 'react';
import { Menu, X, Activity, Globe, LogOut, User as UserIcon, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/components/ui/use-toast';

interface HeaderProps {
  onEmergency: () => void;
  onSignIn: () => void;
}

const Header: React.FC<HeaderProps> = ({ onEmergency, onSignIn }) => {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, profile, signOut, loading } = useAuth();

  const links = [
    { label: 'Find a Doctor', href: '#doctors' },
    { label: 'AI Health', href: '#ai' },
    { label: 'Family Plans', href: '#family' },
    { label: 'How It Works', href: '#how' },
    { label: 'For Doctors', href: '#doctors-cta' },
  ];

  const handleSignOut = async () => {
    await signOut();
    setMenuOpen(false);
    toast({ title: 'Signed out', description: 'See you soon!' });
  };

  const initial = (profile?.full_name || profile?.email || 'U').charAt(0).toUpperCase();

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0A2E5C] to-[#1E88E5] flex items-center justify-center">
              <Activity className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <div>
              <div className="font-bold text-[#0A2E5C] text-lg leading-none">MediConnect</div>
              <div className="text-[10px] text-slate-500 font-medium tracking-wider uppercase">Global Digital Hospital</div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-7">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-medium text-slate-700 hover:text-[#1E88E5] transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={onEmergency}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-50 hover:bg-red-100 border border-red-200 text-red-700 text-sm font-semibold transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              SOS
            </button>
            <button className="hidden md:flex items-center gap-1 text-sm text-slate-600 px-2 py-1.5 hover:bg-slate-100 rounded-lg">
              <Globe className="w-4 h-4" /> EN
            </button>

            {!loading && user && profile ? (
              <div className="relative">
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="flex items-center gap-2 pl-1 pr-3 py-1 rounded-full hover:bg-slate-100 border border-slate-200"
                >
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#1E88E5] to-[#0A2E5C] text-white grid place-items-center text-xs font-bold">
                    {initial}
                  </div>
                  <span className="text-sm font-semibold text-[#0A2E5C] hidden sm:inline">
                    {profile.full_name.split(' ')[0]}
                  </span>
                </button>
                {menuOpen && (
                  <>
                    <div className="fixed inset-0 z-30" onClick={() => setMenuOpen(false)} />
                    <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden z-40">
                      <div className="p-4 bg-gradient-to-br from-slate-50 to-blue-50 border-b border-slate-200">
                        <div className="text-sm font-semibold text-[#0A2E5C]">{profile.full_name}</div>
                        <div className="text-xs text-slate-600 break-all">{profile.email}</div>
                        <div className="mt-2 flex items-center gap-2">
                          <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                            profile.role === 'doctor' ? 'bg-blue-100 text-blue-700' :
                            profile.role === 'admin' ? 'bg-purple-100 text-purple-700' :
                            'bg-emerald-100 text-emerald-700'
                          }`}>{profile.role}</span>
                          {profile.email_verified ? (
                            <span className="text-[10px] text-emerald-600 flex items-center gap-0.5">
                              <ShieldCheck className="w-3 h-3" /> Verified
                            </span>
                          ) : (
                            <span className="text-[10px] text-amber-600">Email unverified</span>
                          )}
                        </div>
                      </div>
                      <button className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50">
                        <UserIcon className="w-4 h-4" /> My Profile
                      </button>
                      <button
                        onClick={handleSignOut}
                        className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 border-t border-slate-100"
                      >
                        <LogOut className="w-4 h-4" /> Sign Out
                      </button>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <>
                <Button variant="ghost" size="sm" onClick={onSignIn} className="hidden md:inline-flex">Sign In</Button>
                <Button size="sm" onClick={onSignIn} className="bg-[#0A2E5C] hover:bg-[#1E88E5] text-white">Get Started</Button>
              </>
            )}

            <button className="lg:hidden p-2" onClick={() => setOpen(!open)}>
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden pb-4 space-y-1 border-t border-slate-100 pt-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
