import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://fsseoukaxwtazmarzdlv.supabase.co';
const SUPABASE_API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzc2VvdWtheHd0YXptYXJ6ZGx2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIyNjg0NzQsImV4cCI6MjAzNzg0NDQ3NH0.xV-VHvM-UaqyJstdukpaRLmFYvhqt3plO5BTNFjk6UQ';

const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY);

export async function GET() {
    const { data, error } = await supabase.from('items').select('*');

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
    console.log('Connected to database successfully!')
    return NextResponse.json(data, { status: 200 });
}
