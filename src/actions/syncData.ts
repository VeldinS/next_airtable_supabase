const axios = require('axios');
const { createClient } = require('@supabase/supabase-js');

const AIRTABLE_API_KEY = 'patruJV3zJKeEKqT3.90f2fbb9778a41b1fb8ced468e281a89cba21da66d533f414e59859e719adf7b';
const AIRTABLE_BASE_ID = 'app1NKWpTe7oSKYls';
const AIRTABLE_TABLE_NAME = 'Task table';
const SUPABASE_URL = 'https://fsseoukaxwtazmarzdlv.supabase.co';
const SUPABASE_API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZzc2VvdWtheHd0YXptYXJ6ZGx2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIyNjg0NzQsImV4cCI6MjAzNzg0NDQ3NH0.xV-VHvM-UaqyJstdukpaRLmFYvhqt3plO5BTNFjk6UQ';

const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY);

interface AirtableFields {
    Title: string;
    Image?: { url: string }[];
    'Short Description': string;
}

interface AirtableRecord {
    id: string;
    fields: AirtableFields;
}

interface SupabaseItem {
    title: string;
    image: string | null;
    short_description: string;
}

async function syncData() {
    const airtableResponse = await axios.get(
        `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`,
        {
            headers: {
                Authorization: `Bearer ${AIRTABLE_API_KEY}`,
            },
        }
    );

    console.log('Successfully connected!')

    const airtableData: SupabaseItem[] = airtableResponse.data.records.map((record: AirtableRecord) => ({
        title: record.fields.Title,
        image: record.fields.Image && record.fields.Image[0] ? record.fields.Image[0].url : null,
        short_description: record.fields['Short Description'],
    }));

    console.log('Successfully mapped records!')

    for (const item of airtableData) {
        const { data, error } = await supabase
            .from('items')
            .upsert([item], { onConflict: 'title' });

        if (error) {
            console.error('Error inserting data:', error);
        } else {
            console.log('Data field inserted successfully');
        }
    }
}

syncData().catch((error) => console.error('Error syncing data:', error));
