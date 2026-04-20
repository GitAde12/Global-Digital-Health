import React, { useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import SpecialtyGrid from './SpecialtyGrid';
import DoctorSearch from './DoctorSearch';
import AIHealthDashboard from './AIHealthDashboard';
import FamilyPlans from './FamilyPlans';
import EmergencySection from './EmergencySection';
import HowItWorks from './HowItWorks';
import PaymentFlow from './PaymentFlow';
import Testimonials from './Testimonials';
import DoctorCTA from './DoctorCTA';
import Footer from './Footer';
import AuthModal from './AuthModal';
import EmergencyModal from './EmergencyModal';
import { Doctor } from '@/data/doctors';
import { toast } from '@/components/ui/use-toast';

const AppLayout: React.FC = () => {
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signup');
  const [emergencyOpen, setEmergencyOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const openAuth = (mode: 'signin' | 'signup') => { setAuthMode(mode); setAuthOpen(true); };

  const scrollToDoctors = () => {
    document.getElementById('doctors')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSpecialtySelect = (name: string) => {
    setSearchQuery(name);
    setTimeout(() => {
      document.getElementById('doctors')?.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  const handleBook = (d: Doctor) => {
    toast({ title: `Booking ${d.name}`, description: `${d.specialty} · $${d.price}/session · Sign in to confirm.` });
    openAuth('signin');
  };

  const handleView = (d: Doctor) => {
    toast({ title: d.name, description: `${d.specialty} · ${d.consultations.toLocaleString()} consultations · ${d.languages.join(', ')}` });
  };

  const handleSubscribe = (members: number, region: string) => {
    toast({ title: `Family of ${members} selected`, description: `Region: ${region}. Sign up to continue.` });
    openAuth('signup');
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      <Header onEmergency={() => setEmergencyOpen(true)} onSignIn={() => openAuth('signin')} />
      <main>
        <Hero onStart={scrollToDoctors} onEmergency={() => setEmergencyOpen(true)} />
        <SpecialtyGrid onSelect={handleSpecialtySelect} />
        <DoctorSearch initialQuery={searchQuery} onBook={handleBook} onView={handleView} />
        <AIHealthDashboard />
        <FamilyPlans onSubscribe={handleSubscribe} />
        <EmergencySection onEmergency={() => setEmergencyOpen(true)} />
        <HowItWorks />
        <PaymentFlow />
        <Testimonials />
        <DoctorCTA onJoin={() => openAuth('signup')} />
      </main>
      <Footer />
      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} defaultMode={authMode} />
      <EmergencyModal open={emergencyOpen} onClose={() => setEmergencyOpen(false)} />
    </div>
  );
};

export default AppLayout;
