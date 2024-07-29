import React from 'react';

import Image from "next/image";

import airtableImg from "@/assets/airtable.png";
import supabaseLogo from "@/assets/supabase.png";
import airtableLogo from "@/assets/airtable.svg";
import githubLogo from "@/assets/github.svg";


function Explanation() {
    return (
        <div className={'flex flex-col items-center justify-start gap-8'}>
            <div className={'flex flex-col items-center justify-center gap-2'}>
                <p className={'text-white text-xl uppercase font-bold tracking-wider'}>EXPLANATION</p>
                <p className={'text-white text-base text-center tracking-wider'}>I have successfully completed the
                    task by creating
                    a Next.js application that uses Next UI for the interface, and implemented a one-way
                    synchronization from Airtable to Supabase. Any changes made in Airtable are instantly reflected
                    in Supabase, ensuring they are visible on the live website. Although I know how to implement
                    two-way synchronization, it requires a subscription plan on Airtable, which is why it hasn't
                    been included(you can see proof in image below). Therefore, editing in supabase is disabled.
                    Feel free to update the Airtable data to see
                    the real-time changes on the site. When it comes to UI, I was not focused on creating visually
                    appealling website, but rather a functional one(as requested). I would be happy to correct if there
                    was something that I missed!</p>
                <Image src={airtableImg} width={300} alt={'Airtable business plan image.'}/>
            </div>
            <p className={'text-white text-xl uppercase font-bold tracking-wider'}>CREDENTIALS</p>
            <div className={'w-full grid grid-cols-3 gap-4'}>
                <div
                    className={'p-3 flex flex-col items-center justify-center gap-2 rounded-2xl border-white border'}>
                    <Image src={supabaseLogo} alt={'Supabase logo'} width={30}/>
                    <p className={'text-white text-sm'}>veldintask@gmail.com</p>
                    <p className={'text-white text-sm'}>2C**n!UKNGCY@4k</p>
                </div>
                <div
                    className={'p-3 flex flex-col items-center justify-center gap-2 rounded-2xl border-white border'}>
                    <Image src={airtableLogo} alt={'Airtable logo'} width={30}/>
                    <p className={'text-white text-sm'}>veldintask@gmail.com</p>
                    <p className={'text-white text-sm'}>f63a%qfnHv%_GAU</p>
                </div>
                <div
                    className={'p-3 flex flex-col items-center justify-center gap-2 rounded-2xl border-white border'}>
                    <Image src={githubLogo} alt={'GitHub logo'} width={30}/>
                    <a target={'_blank'} href={'https://github.com/VeldinS/next_airtable_supabase'}
                       className={'text-white text-sm'}>https://github.com/VeldinS/next_airtable_supabase</a>
                </div>
            </div>
        </div>
    );
}

export default Explanation;