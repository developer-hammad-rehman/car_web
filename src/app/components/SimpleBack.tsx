import React from "react";
import Image from "next/image";
import backGround from "../../../public/bacground-image2.jpg";

export default function SimpleBack() {
  return (
    <div className="w-full h-80 flex justify-center">
      <Image
        src={backGround}
        alt="BackGround"
        className="absolute w-full h-80 -z-50"
      />
      <div className="w-1/2 h-full flex flex-col justify-center items-center text-white font-bold">
        <h4 className="text-xl sm:text-4xl font-bold font-serif">
          We Make Finding The Right Car Simple
        </h4>
        <p className="text-xs sm:text-sm font-bold">
          At Voiture what matters to us is making your car search and buying
          experience as simple as possible, so you can find the right car
          quickly and get on with making it yours.
        </p>
      </div>
    </div>
  );
}
