import { createClient } from '@supabase/supabase-js';


// Initialize database client
const supabaseUrl = 'https://dnfdmjokqphuqzwfrxwr.databasepad.com';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImExYjE0M2YxLWVlYWUtNDZmYy04MDQ4LTM2YWQ1NGExNjQ2NCJ9.eyJwcm9qZWN0SWQiOiJkbmZkbWpva3FwaHVxendmcnh3ciIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNzc2MjUwMjcxLCJleHAiOjIwOTE2MTAyNzEsImlzcyI6ImZhbW91cy5kYXRhYmFzZXBhZCIsImF1ZCI6ImZhbW91cy5jbGllbnRzIn0.PdKr91cUHRTDVdv8qEkXCXrsk6Ib3NnxWoGlLuChCnY';
const supabase = createClient(supabaseUrl, supabaseKey);


export { supabase };