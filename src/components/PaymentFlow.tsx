import React from 'react';
import { Wallet, ArrowRight, Building2, UserCheck, ShieldAlert, CheckCircle2 } from 'lucide-react';

const PaymentFlow: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-semibold tracking-wider uppercase mb-4">
            Transparent Marketplace
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A2E5C] mb-3" style={{ fontFamily: 'Merriweather, serif' }}>
            Fair payment for doctors. Protected for patients.
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We collect securely, hold for 24 hours for dispute protection, then auto-release 80% to your doctor. Stripe, Paystack, Flutterwave & M-Pesa supported.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 md:p-10 border border-slate-200 shadow-sm">
          <div className="flex flex-col md:flex-row items-stretch gap-4 md:gap-2">
            <Step icon={UserCheck} title="Patient Pays 100%" sub="Day 0 · Stripe / Paystack / M-Pesa" color="blue" />
            <Arrow />
            <Step icon={Wallet} title="Held in Escrow" sub="Day 0–1 · 24hr dispute window" color="amber" />
            <Arrow />
            <Step icon={Building2} title="Platform Keeps 20%" sub="Auto-deducted commission" color="indigo" />
            <Arrow />
            <Step icon={CheckCircle2} title="Doctor Gets 80%" sub="Day 1 · Bank / Wallet / Mobile Money" color="emerald" />
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 mb-2" />
              <div className="font-semibold text-sm text-[#0A2E5C]">No dispute → Auto-release</div>
              <div className="text-xs text-slate-600 mt-1">Doctor paid out within 24 hours of consultation.</div>
            </div>
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200">
              <ShieldAlert className="w-5 h-5 text-amber-600 mb-2" />
              <div className="font-semibold text-sm text-[#0A2E5C]">Dispute filed → Frozen</div>
              <div className="text-xs text-slate-600 mt-1">Patient submits Government ID. Reviewed within 48–72 hrs.</div>
            </div>
            <div className="p-4 rounded-xl bg-blue-50 border border-blue-200">
              <Wallet className="w-5 h-5 text-[#1E88E5] mb-2" />
              <div className="font-semibold text-sm text-[#0A2E5C]">Doctor withdraws</div>
              <div className="text-xs text-slate-600 mt-1">Weekly or monthly to bank, PayPal, Stripe, or mobile money.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Step: React.FC<{ icon: any; title: string; sub: string; color: string }> = ({ icon: Icon, title, sub, color }) => {
  const colors: Record<string, string> = {
    blue: 'bg-blue-100 text-[#1E88E5]',
    amber: 'bg-amber-100 text-amber-600',
    indigo: 'bg-indigo-100 text-indigo-600',
    emerald: 'bg-emerald-100 text-emerald-600',
  };
  return (
    <div className="flex-1 text-center p-4 rounded-2xl bg-slate-50 border border-slate-100">
      <div className={`w-12 h-12 rounded-xl ${colors[color]} grid place-items-center mx-auto mb-2`}>
        <Icon className="w-6 h-6" />
      </div>
      <div className="font-bold text-sm text-[#0A2E5C]">{title}</div>
      <div className="text-[11px] text-slate-500 mt-0.5">{sub}</div>
    </div>
  );
};

const Arrow: React.FC = () => (
  <div className="flex items-center justify-center px-1">
    <ArrowRight className="w-5 h-5 text-slate-300 hidden md:block" />
    <div className="w-px h-4 bg-slate-300 md:hidden" />
  </div>
);

export default PaymentFlow;
