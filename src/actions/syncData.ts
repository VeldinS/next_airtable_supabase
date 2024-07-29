const axios = require('axios');
const { createClient } = require('@supabase/supabase-js');

const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY!;
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID!;
const AIRTABLE_TABLE_NAME = process.env.AIRTABLE_TABLE_NAME!;
const SUPABASE_URL = process.env.SUPABASE_URL!;
const SUPABASE_API_KEY = process.env.SUPABASE_API_KEY!;

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
