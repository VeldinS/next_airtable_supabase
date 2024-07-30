import React from 'react';
import { Card, CardBody, CardHeader, Image } from '@nextui-org/react';

interface ItemCardProps {
    title: string;
    image: string;
    description: string;
}

const ItemCard: React.FC<ItemCardProps> = ({ title, image, description }) => {
    return (
        <Card className="py-4 w-full flex flex-col items-center justify-start border border-gray-200/30 hover:border-gray-200 rounded-3xl transition-all duration-300">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center justify-start">
                <p className="text-tiny uppercase font-bold text-center">{title}</p>
                <p className="text-default-500 text-center">{description}</p>
            </CardHeader>
            <CardBody className="overflow-visible py-2 w-full">
                <Image alt="Card background" className="object-cover rounded-xl" src={image} width={300} height={200} />
            </CardBody>
        </Card>
    );
};

export default ItemCard;
