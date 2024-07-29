import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.SUPABASE_URL as string;
const SUPABASE_API_KEY = process.env.SUPABASE_API_KEY as string;

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
