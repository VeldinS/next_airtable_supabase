'use client'

import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import { useEffect, useState } from 'react';

interface Data {
    title: string;
    image: string;
    short_description: string;
}

export default function Home() {

    const [data, setData] = useState<Data[]>([]);

    useEffect(() => {
        fetch('/api/data')
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);

    return (
        <section className={'w-screen h-auto px-[10%] py-16 items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'}>
            {data.map((item, index) => (
                    <Card className="py-4 w-full flex items-start justify-start" key={index}>
                        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                            <p className="text-tiny uppercase font-bold">{item.title}</p>
                            <p className="text-default-500">{item.short_description}</p>
                        </CardHeader>
                        <CardBody className="overflow-visible py-2">
                            <Image
                                alt="Card background"
                                className="object-cover rounded-xl"
                                src={item.image}
                                width={270}
                            />
                        </CardBody>
                    </Card>
            ))}
        </section>
    );
};
