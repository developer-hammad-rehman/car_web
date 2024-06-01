"use client";
import { CircleUser } from "lucide-react";
import React from "react";
import Link from "next/link";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function Navbar() {
  return (
    <header className="relative flex w-full px-4 py-5 justify-between bg-black items-center">
      <nav className="flex gap-3  sm:gap-6 items-center">
        <div className="flex items-center gap-3">
          <svg
            width="140"
            height="45"
            viewBox="0 0 140 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M60.0568 13.5455H56.5881L62.733 31H66.6364L72.7898 13.5455H69.3125L64.7784 27.2841H64.5994L60.0568 13.5455ZM79.2564 31.2557C83.0916 31.2557 85.5291 28.554 85.5291 24.5057C85.5291 20.4489 83.0916 17.7386 79.2564 17.7386C75.4212 17.7386 72.9837 20.4489 72.9837 24.5057C72.9837 28.554 75.4212 31.2557 79.2564 31.2557ZM79.2734 28.7841C77.1513 28.7841 76.1115 26.892 76.1115 24.4972C76.1115 22.1023 77.1513 20.1847 79.2734 20.1847C81.3615 20.1847 82.4013 22.1023 82.4013 24.4972C82.4013 26.892 81.3615 28.7841 79.2734 28.7841ZM88.1477 31H91.233V17.9091H88.1477V31ZM89.6989 16.0511C90.679 16.0511 91.4801 15.3011 91.4801 14.3807C91.4801 13.4517 90.679 12.7017 89.6989 12.7017C88.7102 12.7017 87.9091 13.4517 87.9091 14.3807C87.9091 15.3011 88.7102 16.0511 89.6989 16.0511ZM100.942 17.9091H98.3601V14.7727H95.2749V17.9091H93.4169V20.2955H95.2749V27.5739C95.2578 30.0369 97.0476 31.2472 99.3658 31.179C100.244 31.1534 100.849 30.983 101.181 30.8722L100.661 28.4602C100.491 28.5028 100.141 28.5795 99.7578 28.5795C98.9822 28.5795 98.3601 28.3068 98.3601 27.0625V20.2955H100.942V17.9091ZM111.866 25.4943C111.866 27.4886 110.443 28.4773 109.08 28.4773C107.597 28.4773 106.608 27.429 106.608 25.767V17.9091H103.523V26.2443C103.523 29.3892 105.312 31.1705 107.886 31.1705C109.847 31.1705 111.227 30.1392 111.824 28.6733H111.96V31H114.952V17.9091H111.866V25.4943ZM118.124 31H121.21V23.304C121.21 21.642 122.462 20.4659 124.158 20.4659C124.678 20.4659 125.326 20.5597 125.59 20.6449V17.8068C125.309 17.7557 124.823 17.7216 124.482 17.7216C122.982 17.7216 121.729 18.5739 121.252 20.0909H121.116V17.9091H118.124V31ZM132.896 31.2557C135.947 31.2557 138.044 29.7642 138.589 27.4886L135.709 27.1648C135.291 28.2727 134.268 28.8523 132.939 28.8523C130.945 28.8523 129.624 27.5398 129.598 25.2983H138.717V24.3523C138.717 19.7585 135.956 17.7386 132.734 17.7386C128.984 17.7386 126.538 20.4915 126.538 24.5312C126.538 28.6392 128.95 31.2557 132.896 31.2557ZM129.607 23.2188C129.7 21.5483 130.936 20.142 132.777 20.142C134.55 20.142 135.743 21.4375 135.76 23.2188H129.607Z"
              fill="white"
            />
            <circle cx="22.5" cy="22.5" r="22.5" fill="#F5C34B" />
            <path
              d="M30.382 20.7928L28.2148 15.7199C28.0293 15.282 27.5988 15 27.1238 15H17.8762C17.4012 15 16.9744 15.282 16.7852 15.7199L14.618 20.7928C13.6643 21.2307 13 22.1955 13 23.3125V26.4779C13 27.1311 13.5344 27.6654 14.1875 27.6654H14.5846V29.6434C14.5846 30.2965 15.1189 30.8309 15.7721 30.8309H17.3566C18.0098 30.8309 18.5441 30.2965 18.5441 29.6434V27.6654H26.4596V29.6434C26.4596 30.2965 26.9939 30.8309 27.6471 30.8309H29.2316C29.8848 30.8309 30.4191 30.2965 30.4191 29.6434V27.6654H30.8125C31.4656 27.6654 32 27.1311 32 26.4779V23.3125C32 22.1955 31.3357 21.2307 30.382 20.7928ZM17.5125 16.0316C17.5756 15.8869 17.7166 15.7904 17.8762 15.7904H27.1238C27.2834 15.7904 27.4244 15.8832 27.4875 16.0279L29.4172 20.5441C29.3541 20.5404 29.291 20.5367 29.2316 20.5367H15.7721C15.709 20.5367 15.6459 20.5404 15.5865 20.5441L17.5125 16.0316ZM17.75 29.6434C17.75 29.8623 17.5719 30.0404 17.3529 30.0404H15.7721C15.5531 30.0404 15.375 29.8623 15.375 29.6434V27.6654H17.75V29.6434ZM29.2279 30.0404H27.6434C27.4244 30.0404 27.2463 29.8623 27.2463 29.6434V27.6654H29.6213V29.6434H29.625C29.625 29.8623 29.4469 30.0404 29.2279 30.0404ZM30.8125 26.875H30.0221H26.8566H18.1471H14.9779H14.1875C13.9686 26.875 13.7904 26.6969 13.7904 26.4779V23.3125C13.7904 22.2215 14.6773 21.3346 15.7684 21.3346H29.2279C30.3189 21.3346 31.2059 22.2215 31.2059 23.3125V26.4779H31.2096C31.2096 26.6969 31.0314 26.875 30.8125 26.875Z"
              fill="white"
              stroke="#1A3760"
            />
          </svg>
        </div>
        <ul className="hidden sm:flex gap-3">
          <li className="cursor-pointer text-white  text-xs sm:text-lg font-bold hover:text-blue-300">
            <AlertDialog>
              <AlertDialogTrigger>Search</AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Search</AlertDialogTitle>
                  <AlertDialogDescription className="flex flex-col gap-5">
                    <input
                      type="search"
                      className="p-7 w-full font-bold"
                      placeholder="Search"
                    />
                    <div className="flex gap-3 w-full flex-wrap">
                      <Link
                        href={"/"}
                        className="bg-gray-100 border-2 rounded-full p-3"
                      >
                        Bmw
                      </Link>
                      <Link
                        href={"/"}
                        className="bg-gray-100 border-2 rounded-full p-3"
                      >
                        Bmw
                      </Link>
                      <Link
                        href={"/"}
                        className="bg-gray-100 border-2 rounded-full p-3"
                      >
                        Bmw
                      </Link>
                      <Link
                        href={"/"}
                        className="bg-gray-100 border-2 rounded-full p-3"
                      >
                        Bmw
                      </Link>
                      <Link
                        href={"/"}
                        className="bg-gray-100 border-2 rounded-full p-3"
                      >
                        Bmw
                      </Link>
                    </div>
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>
                    <Link href={"/search-filter"}>Continoue</Link>
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </li>
          <li className="cursor-pointer text-white text-xs sm:text-lg font-bold hover:text-blue-300">
            Sell
          </li>
          <li className="cursor-pointer text-white text-xs sm:text-lg font-bold hover:text-blue-300">
            Estimate
          </li>
          <li className="cursor-pointer text-white text-xs sm:text-lg font-bold hover:text-blue-300">
            Insure
          </li>
        </ul>
      </nav>
      <div className="flex gap-3 cursor-pointer text-white hover:text-blue-200">
        <h6 className="hidden sm:flex text-white text-xl font-semibold">Sigin</h6>
        <button>
          <CircleUser size={30} />
        </button>
      </div>
    </header>
  );
}
