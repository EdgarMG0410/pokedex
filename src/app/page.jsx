"use client";
import PokeLoader from "../components/PokeLoader";
import FireAnimation from "../components/FireAnimation";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeBottom, fadeIn } from "../utils/animations";
import Link from "next/link";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center relative overflow-hidden">
      <div className="flex absolute items-center justify-center w-full h-screen bg-pk-red">
        <div className="flex z-20 w-[calc(100%-26px)] lg:w-[calc(100%-80px)] overflow-hidden h-[calc(100%-30px)] lg:h-[calc(100%-80px)] relative m-auto rounded-[40px] border-4 lg:border-[16px] border-black">
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
                <p className="text-4xl text-white capitalize">Cargando ...</p>
              </div>
            ) : (
              <div className="relative w-full h-full bg-black">
                <motion.div 
                  initial={"hidden"}
                  whileInView={"visible"}
                  variants={fadeIn(0.3, 0.1)}
                  className="absolute z-50 top-16 left-0 lg:left-16 w-[clamp(200px,_30vw,_600px)] h-[clamp(100px,_10vw,_200px)]">
                  <Image
                    src="/images/pokemon.png"
                    alt="pokelogo"
                    className="object-contain"
                    fill
                  />
                </motion.div>
                <motion.div 
                initial={"hidden"}
                whileInView={"visible"}
                variants={fadeBottom(0.6, 0.3)}
                className="absolute z-50 top-[35vw] lg:top-[10vw] left-12 lg:left-[14vw] w-[clamp(100px,_10vw,_200px)] h-[clamp(100px,_10vw,_200px)]">
                  <Image
                    src="/images/firered.png"
                    alt="pokelogo"
                    className="object-contain"
                    fill
                  />
                </motion.div>
                <motion.div 
                initial={"hidden"}
                whileInView={"visible"}
                variants={fadeIn(0.6, 0.5)}
                className="absolute z-50 bottom-24 lg:bottom-16 left-12 lg:left-[14vw] w-fit h-fit">
                  <button className="text-[clamp(16px,_2vw,_40px)] text-white font-pressStart uppercase">
                    <Link href="/list">Click to start</Link>
                  </button>
                </motion.div>
                <motion.div
                  initial={"hidden"}
                  whileInView={"visible"}
                  variants={fadeBottom(0.6, 0.1)}
                  className="absolute bottom-0 -right-32 z-40 lg:right-0 w-[clamp(400px,_50vw,_650px)] h-[clamp(500px,_40vw,_900px)]"
                >
                  <Image
                    src="/images/charizard.png"
                    alt="pokelogo"
                    className="object-contain"
                    fill
                  />
                </motion.div>
                <div className="flex items-center h-full w-full">
                  <motion.div 
                  initial={"hidden"}
                  whileInView={"visible"}
                  variants={fadeIn(0.6, 1)}
                  className="flex items-center justify-center bg-pk-green w-full h-[55%] relative z-10 overflow-hidden">
                    <FireAnimation />
                  </motion.div>
                </div>
              </div>
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
