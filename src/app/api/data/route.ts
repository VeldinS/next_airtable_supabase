import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://fsseoukaxwtazmarzdlv.supabase.co';
const SUPABASE_API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzc2VvdWtheHd0YXptYXJ6ZGx2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyMjI2ODQ3NCwiZXhwIjoyMDM3ODQ0NDc0fQ.u2AVNX-AdiTLAlQFOgM1Kkn1dnuYsjixy6rr2-CU7Mw';

const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY);

export async function GET() {

    let { data, error } = await supabase
        .from('airtask')
        .select('*')

    if (error) {
        console.log('Error while connecting to database or while fetching data:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
    console.log('Connected to database successfully!')
    return NextResponse.json(data, { status: 200 });
}
