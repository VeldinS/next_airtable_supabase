import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://fsseoukaxwtazmarzdlv.supabase.co';
const SUPABASE_API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzc2VvdWtheHd0YXptYXJ6ZGx2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyMjI2ODQ3NCwiZXhwIjoyMDM3ODQ0NDc0fQ.u2AVNX-AdiTLAlQFOgM1Kkn1dnuYsjixy6rr2-CU7Mw';

const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY);

export default supabase;
