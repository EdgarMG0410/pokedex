"use client"
import PokeLoader from "../components/PokeLoader";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center relative overflow-hidden">
      <div className="flex absolute items-center justify-center w-full h-screen bg-pk-red">
        <div className="flex z-20 w-[calc(100%-80px)] overflow-hidden h-[calc(100%-80px)] relative m-auto  rounded-[40px] border-[16px] border-black">
          <div
            className={`absolute flex items-center z-20 justify-center w-full h-full ${
              isLoading ? "bg-black" : "bg-white"
            } `}
          >
            {isLoading ? (
              <div className="flex flex-col gap-y-6">
                <div className="relative pb-24">
                  <PokeLoader />
                </div>
                <p className="text-4xl capitalize">Cargando ...</p>
              </div>
            ) : (
              <div></div>
            )}
            <div className="absolute bg-black w-full h-fit -bottom-2 border-none flex justify-center py-6 pb-6 uppercase">
              <Image
                src="/images/gblogo.png"
                width={200}
                height={0}
                className="object-contain"
                alt="logo"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
