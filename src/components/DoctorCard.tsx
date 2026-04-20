import React from 'react';
import { Star, MapPin, Languages, Home, Moon, ShieldCheck, Clock } from 'lucide-react';
import { Doctor } from '@/data/doctors';
import { Button } from '@/components/ui/button';

interface Props {
  doctor: Doctor;
  onBook: (d: Doctor) => void;
  onView: (d: Doctor) => void;
}

const statusStyles: Record<string, string> = {
  online: 'bg-emerald-500',
  away: 'bg-amber-500',
  offline: 'bg-slate-400',
};

const DoctorCard: React.FC<Props> = ({ doctor, onBook, onView }) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-[#1E88E5] transition-all flex flex-col">
      <div className="relative">
        <img src={doctor.image} alt={doctor.name} className="w-full h-48 object-cover" />
        {doctor.verified && (
          <div className="absolute top-3 left-3 bg-white/95 backdrop-blur rounded-full px-2 py-1 flex items-center gap-1 text-xs font-semibold text-[#0A2E5C] shadow">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Verified
          </div>
        )}
        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur rounded-full px-2 py-1 flex items-center gap-1.5 text-xs font-semibold text-slate-700 shadow">
          <span className={`w-2 h-2 rounded-full ${statusStyles[doctor.status]}`} />
          {doctor.status === 'online' ? 'Online' : doctor.lastSeen}
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-bold text-[#0A2E5C] text-base leading-tight">{doctor.name}</h3>
            <div className="text-sm text-[#1E88E5] font-medium">{doctor.specialty}</div>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-1 text-amber-500">
              <Star className="w-4 h-4 fill-current" />
              <span className="font-bold text-[#0A2E5C] text-sm">{doctor.rating}</span>
            </div>
            <div className="text-[10px] text-slate-500">{doctor.reviews.toLocaleString()} reviews</div>
          </div>
        </div>

        <div className="mt-3 space-y-1.5 text-xs text-slate-600">
          <div className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-slate-400" /> {doctor.city}, {doctor.country}</div>
          <div className="flex items-center gap-1.5"><Languages className="w-3.5 h-3.5 text-slate-400" /> {doctor.languages.join(', ')}</div>
          <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-slate-400" /> {doctor.hours}</div>
        </div>

        <div className="flex flex-wrap gap-1.5 mt-3">
          {doctor.homeVisit && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-semibold">
              <Home className="w-3 h-3" /> Home Visit
            </span>
          )}
          {doctor.nightHours && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 text-[10px] font-semibold">
              <Moon className="w-3 h-3" /> Night Hours
            </span>
          )}
          <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[10px] font-semibold">
            {doctor.experience}+ yrs
          </span>
        </div>

        <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-wider text-slate-500">From</div>
            <div className="text-xl font-bold text-[#0A2E5C]">${doctor.price}<span className="text-xs text-slate-500 font-normal">/session</span></div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={() => onView(doctor)} className="border-slate-300">View</Button>
            <Button size="sm" onClick={() => onBook(doctor)} className="bg-[#1E88E5] hover:bg-[#0A2E5C] text-white">Book</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
