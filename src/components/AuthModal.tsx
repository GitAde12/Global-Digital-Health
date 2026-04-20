import React, { useState } from 'react';
import { X, Mail, Lock, User, Activity, Stethoscope, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { useAuth, UserRole } from '@/contexts/AuthContext';

interface Props { open: boolean; onClose: () => void; defaultMode?: 'signin' | 'signup'; }

type Stage = 'form' | 'verify-sent' | 'success';

const AuthModal: React.FC<Props> = ({ open, onClose, defaultMode = 'signup' }) => {
  const { signUp, signIn, resendVerification } = useAuth();
  const [mode, setMode] = useState<'signin' | 'signup'>(defaultMode);
  const [role, setRole] = useState<UserRole>('patient');
  const [form, setForm] = useState({ name: '', email: '', password: '', specialty: 'General Practice', policy: false });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [stage, setStage] = useState<Stage>('form');

  React.useEffect(() => {
    if (open) {
      setMode(defaultMode);
      setStage('form');
      setError(null);
    }
  }, [open, defaultMode]);

  if (!open) return null;

  const reset = () => {
    setForm({ name: '', email: '', password: '', specialty: 'General Practice', policy: false });
    setError(null);
    setStage('form');
  };

  const close = () => { reset(); onClose(); };

  const validate = () => {
    if (mode === 'signup' && !form.name.trim()) return 'Please enter your full name.';
    if (!form.email.includes('@') || !form.email.includes('.')) return 'Please enter a valid email.';
    if (form.password.length < 6) return 'Password must be at least 6 characters.';
    if (mode === 'signup' && role === 'doctor' && !form.policy) return 'You must accept the 80/20 payment policy.';
    return null;
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const v = validate();
    if (v) { setError(v); return; }
    setError(null);
    setLoading(true);

    if (mode === 'signin') {
      const { error } = await signIn(form.email, form.password);
      setLoading(false);
      if (error) {
        setError(error);
        return;
      }
      toast({ title: 'Welcome back!', description: 'You are now signed in.' });
      close();
    } else {
      const { error, needsVerification } = await signUp({
        email: form.email,
        password: form.password,
        fullName: form.name,
        role,
        specialty: role === 'doctor' ? form.specialty : undefined,
        acceptedPaymentPolicy: role === 'doctor' ? form.policy : undefined,
      });
      setLoading(false);
      if (error) {
        setError(error);
        return;
      }
      if (needsVerification) {
        setStage('verify-sent');
      } else {
        toast({
          title: 'Welcome to MediConnect!',
          description: role === 'doctor' ? 'Doctor verification pending review.' : 'Your health profile is ready.',
        });
        close();
      }
    }
  };

  const resend = async () => {
    setLoading(true);
    const { error } = await resendVerification(form.email);
    setLoading(false);
    if (error) {
      toast({ title: 'Resend failed', description: error });
    } else {
      toast({ title: 'Email sent', description: 'Check your inbox for the verification link.' });
    }
  };

  return (
    <div className="fixed inset-0 z-[100] grid place-items-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto" onClick={close}>
      <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden my-8" onClick={(e) => e.stopPropagation()}>
        <div className="bg-gradient-to-r from-[#0A2E5C] to-[#1E88E5] p-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-white/20 grid place-items-center"><Activity className="w-5 h-5" /></div>
            <div>
              <div className="font-bold">
                {stage === 'verify-sent' ? 'Verify your email' : mode === 'signin' ? 'Sign in to MediConnect' : 'Create your account'}
              </div>
              <div className="text-xs text-blue-200">
                {stage === 'verify-sent' ? 'Confirm your email to activate your account' : 'Join 2.4M+ patients globally'}
              </div>
            </div>
          </div>
          <button onClick={close} className="p-1 rounded hover:bg-white/20"><X className="w-5 h-5" /></button>
        </div>

        {stage === 'verify-sent' ? (
          <div className="p-6 text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 grid place-items-center mb-4">
              <Mail className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="font-bold text-lg text-[#0A2E5C] mb-2">Check your inbox</h3>
            <p className="text-sm text-slate-600 mb-1">
              We sent a verification link to
            </p>
            <p className="font-semibold text-[#0A2E5C] mb-4 break-all">{form.email}</p>
            <div className="text-xs text-slate-500 mb-5 p-3 bg-slate-50 rounded-lg text-left leading-relaxed">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 inline mr-1" />
              Click the link in your email to verify your account. Then return here to sign in.
              {role === 'doctor' && (
                <div className="mt-2 pt-2 border-t border-slate-200">
                  <AlertCircle className="w-4 h-4 text-amber-500 inline mr-1" />
                  After verification, submit your medical license for review (48–72 hours).
                </div>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <Button onClick={resend} disabled={loading} variant="outline" className="w-full">
                {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
                Resend verification email
              </Button>
              <Button onClick={() => { setStage('form'); setMode('signin'); }} className="w-full bg-[#0A2E5C] hover:bg-[#1E88E5]">
                I've verified — Sign me in
              </Button>
            </div>
          </div>
        ) : (
          <div className="p-6">
            {mode === 'signup' && (
              <div className="grid grid-cols-2 gap-2 mb-5 p-1 bg-slate-100 rounded-xl">
                <button
                  type="button"
                  onClick={() => setRole('patient')}
                  className={`py-2 rounded-lg text-sm font-semibold flex items-center justify-center gap-1.5 transition-all ${role === 'patient' ? 'bg-white shadow text-[#0A2E5C]' : 'text-slate-500'}`}
                >
                  <User className="w-4 h-4" /> I'm a Patient
                </button>
                <button
                  type="button"
                  onClick={() => setRole('doctor')}
                  className={`py-2 rounded-lg text-sm font-semibold flex items-center justify-center gap-1.5 transition-all ${role === 'doctor' ? 'bg-white shadow text-[#0A2E5C]' : 'text-slate-500'}`}
                >
                  <Stethoscope className="w-4 h-4" /> I'm a Doctor
                </button>
              </div>
            )}

            <form onSubmit={submit} className="space-y-3">
              {mode === 'signup' && (
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Full name"
                    className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-slate-300 focus:border-[#1E88E5] focus:ring-2 focus:ring-blue-100 outline-none text-sm"
                  />
                </div>
              )}
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="Email address"
                  autoComplete="email"
                  className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-slate-300 focus:border-[#1E88E5] focus:ring-2 focus:ring-blue-100 outline-none text-sm"
                />
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="password"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  placeholder="Password (6+ chars)"
                  autoComplete={mode === 'signin' ? 'current-password' : 'new-password'}
                  className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-slate-300 focus:border-[#1E88E5] focus:ring-2 focus:ring-blue-100 outline-none text-sm"
                />
              </div>

              {mode === 'signup' && role === 'doctor' && (
                <>
                  <div>
                    <label className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Specialty</label>
                    <select
                      value={form.specialty}
                      onChange={(e) => setForm({ ...form, specialty: e.target.value })}
                      className="w-full mt-1 px-3 py-2.5 rounded-lg border border-slate-300 focus:border-[#1E88E5] focus:ring-2 focus:ring-blue-100 outline-none text-sm bg-white"
                    >
                      {['General Practice','Cardiology','Pediatrics','Neurology','Dermatology','Gynecology','Psychiatry','Orthopedics','Pulmonology','Oncology','Ophthalmology','Dentistry'].map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <label className="flex gap-2 p-3 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-900 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={form.policy}
                      onChange={(e) => setForm({ ...form, policy: e.target.checked })}
                      className="mt-0.5 accent-amber-600"
                    />
                    <span>
                      I accept MediConnect's <strong>80/20 payment policy</strong>: MediConnect retains a 20% platform commission; my 80% share will be transferred to my registered account. Income tax on my 80% is my responsibility.
                    </span>
                  </label>
                </>
              )}

              {error && (
                <div className="flex gap-2 p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  {error}
                </div>
              )}

              <Button type="submit" disabled={loading} className="w-full bg-[#0A2E5C] hover:bg-[#1E88E5] py-5">
                {loading && <Loader2 className="w-4 h-4 animate-spin mr-2" />}
                {mode === 'signin' ? 'Sign In' : 'Create Account'}
              </Button>
            </form>

            <div className="text-center text-sm text-slate-600 mt-4">
              {mode === 'signin' ? "Don't have an account? " : 'Already have an account? '}
              <button onClick={() => { setMode(mode === 'signin' ? 'signup' : 'signin'); setError(null); }} className="text-[#1E88E5] font-semibold hover:underline">
                {mode === 'signin' ? 'Sign up' : 'Sign in'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthModal;
