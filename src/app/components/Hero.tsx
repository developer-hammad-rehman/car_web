import React from "react";
import Image from "next/image";
import backGroundImage from "../../../public/bacground-image.jpg";
export default function Hero() {
  return (
    <div>
      <div className="w-full h-[35rem]">
        <Image
          src={backGroundImage}
          alt="car"
          className="w-full h-3/4  absolute -z-20"
        />
        <div className="z-50 relative text-white flex flex-col gap-6 w-full h-full justify-center items-center">
          <h3 className="text-white flex font-bold gap-1 text-base sm:text-2xl  md:text-5xl">
            <span>
              Find
              <svg
                className="hidden lg:flex"
                width="119"
                height="15"
                viewBox="0 0 119 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 13.5C21 4.16666 72 -3 118 6"
                  stroke="#F5C34B"
                  stroke-width="3"
                />
              </svg>
            </span>
            Your Next Match
          </h3>
          <h4 className="text-white font-bold italic text-xs sm:text-lg md:text-xl">
            Find the right price, dealer and advice.
          </h4>
          <button className="text-white font-bold bg-purple-300 text-xs sm:text-base px-2 py-3 sm:p-5 rounded-full">
            Getting Started
          </button>
        </div>
      </div>
    </div>
  );
}
