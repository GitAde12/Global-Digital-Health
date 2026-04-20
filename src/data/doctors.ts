export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  category: string;
  country: string;
  city: string;
  rating: number;
  reviews: number;
  consultations: number;
  experience: number;
  price: number;
  currency: string;
  status: 'online' | 'away' | 'offline';
  lastSeen: string;
  homeVisit: boolean;
  nightHours: boolean;
  languages: string[];
  image: string;
  verified: boolean;
  hours: string;
}

export const DOCTORS: Doctor[] = [
  {
    id: 'd1', name: 'Dr. Amara Okafor', specialty: 'General Practitioner', category: 'General Illness',
    country: 'Nigeria', city: 'Lagos', rating: 4.9, reviews: 1240, consultations: 3420, experience: 12,
    price: 15, currency: 'USD', status: 'online', lastSeen: 'now', homeVisit: true, nightHours: true,
    languages: ['English', 'Yoruba', 'French'],
    image: 'https://d64gsuwffb70l.cloudfront.net/69df6d812d6d6ef2ff600f6c_1776250416631_9a20771d.jpg',
    verified: true, hours: 'Mon–Sat, 8am–10pm WAT'
  },
  {
    id: 'd2', name: 'Dr. Wei Chen', specialty: 'Cardiologist', category: 'Heart Problems',
    country: 'Singapore', city: 'Singapore', rating: 4.95, reviews: 2180, consultations: 5210, experience: 18,
    price: 80, currency: 'USD', status: 'online', lastSeen: 'now', homeVisit: false, nightHours: false,
    languages: ['English', 'Mandarin', 'Malay'],
    image: 'https://d64gsuwffb70l.cloudfront.net/69df6d812d6d6ef2ff600f6c_1776250418224_fb12eca4.jpg',
    verified: true, hours: 'Mon–Fri, 9am–6pm SGT'
  },
  {
    id: 'd3', name: 'Dr. Sofia Martinez', specialty: 'Pediatrician', category: 'Child Health',
    country: 'Mexico', city: 'Mexico City', rating: 4.85, reviews: 980, consultations: 2740, experience: 9,
    price: 25, currency: 'USD', status: 'away', lastSeen: '15 min ago', homeVisit: true, nightHours: true,
    languages: ['Spanish', 'English'],
    image: 'https://d64gsuwffb70l.cloudfront.net/69df6d812d6d6ef2ff600f6c_1776250418173_60e930b5.jpg',
    verified: true, hours: 'Mon–Fri, 10am–8pm CST'
  },
  {
    id: 'd4', name: 'Dr. James Whitfield', specialty: 'Neurologist', category: 'Headaches',
    country: 'United Kingdom', city: 'London', rating: 4.92, reviews: 1560, consultations: 3890, experience: 22,
    price: 120, currency: 'USD', status: 'online', lastSeen: 'now', homeVisit: false, nightHours: false,
    languages: ['English', 'German'],
    image: 'https://d64gsuwffb70l.cloudfront.net/69df6d812d6d6ef2ff600f6c_1776250455545_6f730866.png',
    verified: true, hours: 'Tue–Sat, 9am–5pm GMT'
  },
  {
    id: 'd5', name: 'Dr. Priya Sharma', specialty: 'Gynecologist', category: 'Pregnancy',
    country: 'India', city: 'Mumbai', rating: 4.88, reviews: 2010, consultations: 4520, experience: 14,
    price: 18, currency: 'USD', status: 'online', lastSeen: 'now', homeVisit: true, nightHours: true,
    languages: ['English', 'Hindi', 'Marathi'],
    image: 'https://d64gsuwffb70l.cloudfront.net/69df6d812d6d6ef2ff600f6c_1776250420280_3c620868.jpg',
    verified: true, hours: '24/7 Availability'
  },
  {
    id: 'd6', name: 'Dr. Kwame Mensah', specialty: 'Dermatologist', category: 'Skin Conditions',
    country: 'Ghana', city: 'Accra', rating: 4.78, reviews: 670, consultations: 1820, experience: 7,
    price: 12, currency: 'USD', status: 'offline', lastSeen: '2 hours ago', homeVisit: false, nightHours: false,
    languages: ['English', 'Twi', 'French'],
    image: 'https://d64gsuwffb70l.cloudfront.net/69df6d812d6d6ef2ff600f6c_1776250434670_0c375f35.png',
    verified: true, hours: 'Mon–Fri, 9am–5pm GMT'
  },
  {
    id: 'd7', name: 'Dr. Elena Rossi', specialty: 'Psychiatrist', category: 'Mental Health',
    country: 'Italy', city: 'Milan', rating: 4.94, reviews: 1380, consultations: 2940, experience: 16,
    price: 65, currency: 'USD', status: 'online', lastSeen: 'now', homeVisit: false, nightHours: true,
    languages: ['Italian', 'English', 'French'],
    image: 'https://d64gsuwffb70l.cloudfront.net/69df6d812d6d6ef2ff600f6c_1776250424480_0e516cf3.jpg',
    verified: true, hours: 'Mon–Sat, 11am–9pm CET'
  },
  {
    id: 'd8', name: 'Dr. Marcus Johnson', specialty: 'Orthopedic Surgeon', category: 'Bone & Joint Pain',
    country: 'United States', city: 'Boston', rating: 4.91, reviews: 1820, consultations: 3650, experience: 20,
    price: 150, currency: 'USD', status: 'away', lastSeen: '30 min ago', homeVisit: false, nightHours: false,
    languages: ['English', 'Spanish'],
    image: 'https://d64gsuwffb70l.cloudfront.net/69df6d812d6d6ef2ff600f6c_1776250454605_6a443a37.png',
    verified: true, hours: 'Mon–Fri, 8am–4pm EST'
  },
];

export const SPECIALTIES = [
  { name: 'General Practice', icon: 'Stethoscope', count: 4280 },
  { name: 'Cardiology', icon: 'Heart', count: 1240 },
  { name: 'Pediatrics', icon: 'Baby', count: 980 },
  { name: 'Neurology', icon: 'Brain', count: 670 },
  { name: 'Dermatology', icon: 'Sparkles', count: 1450 },
  { name: 'Gynecology', icon: 'Flower2', count: 1120 },
  { name: 'Psychiatry', icon: 'Smile', count: 890 },
  { name: 'Orthopedics', icon: 'Bone', count: 540 },
  { name: 'Pulmonology', icon: 'Wind', count: 380 },
  { name: 'Oncology', icon: 'Shield', count: 290 },
  { name: 'Ophthalmology', icon: 'Eye', count: 460 },
  { name: 'Dentistry', icon: 'Smile', count: 1820 },
];

export const FAMILY_PLANS = [
  { members: 4, africa: 5, asia: 8, latam: 10, na: 25 },
  { members: 5, africa: 7, asia: 10, latam: 13, na: 30 },
  { members: 6, africa: 9, asia: 12, latam: 15, na: 35 },
  { members: 7, africa: 11, asia: 14, latam: 18, na: 40 },
  { members: 8, africa: 13, asia: 16, latam: 20, na: 44 },
  { members: 9, africa: 15, asia: 18, latam: 22, na: 48 },
  { members: 10, africa: 17, asia: 20, latam: 25, na: 52 },
];
