'use client'

import supabase from '@/lib/supabase';
import {NextResponse} from "next/server";
import { useEffect, useState } from 'react';

import ItemCard from "@/components/ItemCard";
import Explanation from "@/components/Explanation";

interface Data {
    title: string;
    image: string;
    description: string;
}

export default function Home() {

    const [data, setData] = useState<Data[]>([]);
    const [showExplanation, setShowExplanation] = useState(true);

    const toggleExplanation = () => {
        setShowExplanation(!showExplanation);
    };

    useEffect(() => {
        async function fetchData(){
            let { data, error } = await supabase
                .from('airtask')
                .select('*')

            if (error) {
                console.log('Error while connecting to database or while fetching data:', error);
                return NextResponse.json({ error: error.message }, { status: 500 });
            }
            else{
                if(data === null){
                    setData([]);
                    console.log('Connected to database successfully!');
                }else{
                    setData(data);
                    console.log('Connected to database successfully!');
                }
            }
        }
        fetchData();
    }, []);

    return (
        <section
            className={'bg-[#050B20] w-screen h-auto min-h-screen px-[10%] py-16 flex flex-col items-center justify-start gap-12 font-poppins'}>
            <button
                className={'text-white bg-red-500 px-4 py-2 rounded cursor-pointer'}
                onClick={toggleExplanation}
            >
                {showExplanation ? 'Hide explanation & credentials' : 'Show explanation & credentials'}
            </button>

            {showExplanation && <Explanation/>}

            <p className={'text-white text-xl uppercase font-bold tracking-wider'}>SOLUTION</p>

            <div className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'}>
                {data.map((item, index) => (
                    <ItemCard key={index} title={item.title} description={item.description} image={item.image}/>
                ))}
            </div>
        </section>
    );
};
