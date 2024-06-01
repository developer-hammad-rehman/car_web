import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image, { StaticImageData } from "next/image";
import React from 'react';

interface IProps {
  title: string;
  image: StaticImageData;
  price: number;
  badge: string;
  bgBadgeClass : string;
}

export default function Cards({ title, image, price, badge , bgBadgeClass }: IProps) {
  return (
    <Card className="relative w-80">
      <CardHeader>
        <CardTitle className="text-xl text-gray-600">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <Image src={image} alt="demo" className="hover:scale-110 transition-all duration-1000 cursor-pointer"/>
          <Badge
            variant="outline"
            className={`absolute top-2 left-2 z-10 border-0 ${bgBadgeClass}`}
          >
            {badge}
          </Badge>
        </div>
      </CardContent>
      <CardFooter>
        <p className="font-bold text-lg font-mono">
          <span className="text-2xl font-bold text-gray-700">PRICE : </span> {price}$
        </p>
      </CardFooter>
    </Card>
  );
}
