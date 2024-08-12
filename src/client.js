import { createClient } from '@supabase/supabase-js';
const URL = 'https://rikzxfqnvlqazydehwor.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJpa3p4ZnFudmxxYXp5ZGVod29yIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxOTQ2MDQ2NSwiZXhwIjoyMDM1MDM2NDY1fQ.E32CWY4fPbeT29NmTI-osCECjN0SvxWgorxaKQ6MMc0';
export const supabase = createClient(URL,API_KEY);
