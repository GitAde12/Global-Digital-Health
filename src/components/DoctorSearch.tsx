import React, { useMemo, useState } from 'react';
import { Search, MapPin, Filter, SlidersHorizontal } from 'lucide-react';
import { DOCTORS, Doctor } from '@/data/doctors';
import DoctorCard from './DoctorCard';
import { Button } from '@/components/ui/button';

interface Props {
  initialQuery?: string;
  onBook: (d: Doctor) => void;
  onView: (d: Doctor) => void;
}

const DoctorSearch: React.FC<Props> = ({ initialQuery = '', onBook, onView }) => {
  const [query, setQuery] = useState(initialQuery);
  const [location, setLocation] = useState('');
  const [maxPrice, setMaxPrice] = useState(200);
  const [onlineOnly, setOnlineOnly] = useState(false);
  const [nightOnly, setNightOnly] = useState(false);
  const [homeOnly, setHomeOnly] = useState(false);

  React.useEffect(() => { setQuery(initialQuery); }, [initialQuery]);

  const filtered = useMemo(() => {
    return DOCTORS.filter((d) => {
      const q = query.toLowerCase();
      const matchQ = !q || d.name.toLowerCase().includes(q) || d.specialty.toLowerCase().includes(q) || d.category.toLowerCase().includes(q);
      const matchLoc = !location || d.city.toLowerCase().includes(location.toLowerCase()) || d.country.toLowerCase().includes(location.toLowerCase());
      const matchPrice = d.price <= maxPrice;
      const matchOn = !onlineOnly || d.status === 'online';
      const matchNight = !nightOnly || d.nightHours;
      const matchHome = !homeOnly || d.homeVisit;
      return matchQ && matchLoc && matchPrice && matchOn && matchNight && matchHome;
    }).sort((a, b) => {
      // Internal ranking — rating + experience weighted
      const score = (d: Doctor) => d.rating * 20 + d.experience * 0.5 + (d.status === 'online' ? 5 : 0);
      return score(b) - score(a);
    });
  }, [query, location, maxPrice, onlineOnly, nightOnly, homeOnly]);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-6 md:p-8 border border-slate-200 mb-8">
          <div className="grid md:grid-cols-12 gap-3">
            <div className="md:col-span-5 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Symptoms, condition, or specialty (e.g. 'fever', 'cardiologist')"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 bg-white focus:border-[#1E88E5] focus:ring-2 focus:ring-blue-100 outline-none text-sm"
              />
            </div>
            <div className="md:col-span-4 relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="City or country"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 bg-white focus:border-[#1E88E5] focus:ring-2 focus:ring-blue-100 outline-none text-sm"
              />
            </div>
            <div className="md:col-span-3 flex gap-2">
              <Button className="flex-1 bg-[#0A2E5C] hover:bg-[#1E88E5] text-white py-3" onClick={() => { /* triggers filter */ }}>
                <Search className="w-4 h-4 mr-2" /> Search
              </Button>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 text-xs text-slate-600 mr-2">
              <SlidersHorizontal className="w-4 h-4" /> Filters:
            </div>
            <label className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 cursor-pointer text-xs hover:border-[#1E88E5]">
              <input type="checkbox" checked={onlineOnly} onChange={(e) => setOnlineOnly(e.target.checked)} className="accent-[#1E88E5]" />
              Online now
            </label>
            <label className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 cursor-pointer text-xs hover:border-[#1E88E5]">
              <input type="checkbox" checked={nightOnly} onChange={(e) => setNightOnly(e.target.checked)} className="accent-[#1E88E5]" />
              Night hours
            </label>
            <label className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 cursor-pointer text-xs hover:border-[#1E88E5]">
              <input type="checkbox" checked={homeOnly} onChange={(e) => setHomeOnly(e.target.checked)} className="accent-[#1E88E5]" />
              Home visits
            </label>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-xs">
              <span>Max price: <strong className="text-[#0A2E5C]">${maxPrice}</strong></span>
              <input type="range" min={10} max={200} value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} className="w-24 accent-[#1E88E5]" />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-6">
          <div className="text-sm text-slate-600">
            <strong className="text-[#0A2E5C]">{filtered.length}</strong> doctors match your search
            <span className="ml-2 text-xs text-slate-400">· Ranked by MediConnect's fair-rating algorithm</span>
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-16 bg-slate-50 rounded-2xl">
            <Filter className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <div className="font-semibold text-[#0A2E5C]">No doctors match these filters</div>
            <div className="text-sm text-slate-500 mt-1">Try widening your search criteria.</div>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filtered.map((d) => (
              <DoctorCard key={d.id} doctor={d} onBook={onBook} onView={onView} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default DoctorSearch;
