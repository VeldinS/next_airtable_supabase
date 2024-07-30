'use client';

import React, { useEffect, useState } from 'react';
import supabase from '@/lib/supabase';
import ItemCard from '@/components/ItemCard';
import Explanation from '@/components/Explanation';

interface Data {
    title: string;
    image: string;
    description: string;
}

const Home: React.FC = () => {
    const [data, setData] = useState<Data[]>([]);
    const [showExplanation, setShowExplanation] = useState(true);

    const toggleExplanation = () => {
        setShowExplanation(!showExplanation);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data, error } = await supabase.from('airtask').select('*');

                if (error) {
                    console.error('Error fetching data:', error);
                } else {
                    setData(data || []);
                    console.log('Connected to database successfully!');
                }
            } catch (error) {
                console.error('Unexpected error:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <section className="bg-[#050B20] w-screen h-auto min-h-screen px-[10%] py-16 flex flex-col items-center justify-start gap-12 font-poppins">
            <button className="text-white bg-red-500 px-4 py-2 rounded cursor-pointer" onClick={toggleExplanation}>
                {showExplanation ? 'Hide explanation & credentials' : 'Show explanation & credentials'}
            </button>

            {showExplanation && <Explanation />}

            <p className="text-white text-xl uppercase font-bold tracking-wider">SOLUTION</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {data.map((item, index) => (
                    <ItemCard key={index} title={item.title} description={item.description} image={item.image} />
                ))}
            </div>
        </section>
    );
};

export default Home;
