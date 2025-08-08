"use client";

import { useEffect, useState } from "react";
import NextIcon from "../../components/icons/next.svg";
import VercelIcon from "../../components/icons/vercel.svg";


export default function TextAnimation() {
    const texts = ["M. JUNDI J.H", "FrontEnd Dev.", "Creative Designer"];
    const [displayText, setDisplayText] = useState('');
    const [index, setIndex] = useState(0);
    const [textIndex, setTextIndex] = useState(0);

    useEffect(() => {
        if (index < texts[textIndex].length) {
            const timeout = setTimeout(() => {
                setDisplayText((prev) => prev + texts[textIndex][index]);
                setIndex(index + 1);
            }, 100);
            return () => clearTimeout(timeout);
        } else {
            setTimeout(() => {
                setDisplayText('');
                setIndex(0);
                setTextIndex((prev) => (prev + 1) % texts.length);
            }, 1500);
        }
    }, [index, textIndex, texts]);
    return (
        <div className="fixed sm:top-[180px] md:top-[250px] lg:top-[280px] xl:top-[300px]
         sm:left-[70px] md:left-[140px] lg:left-[180px] xl:left-[240px]
         p-4 [text-shadow:2px_2px_4px_rgba(255,255,255,0.3 ) z-20]
                        w-auto h-auto bg-white/55 backdrop-blur-md shadow-lg rounded-xl">
            <div className={"flex sm:text-2xl md:text-3xl lg:text-4xl xl:text-[50px] dark-green goldman-regular"}>
                <h1 className="">Hello, I'm</h1>
                <h1 className="border-r-2 border-white pl-4 pr-1">{displayText}</h1>
            </div>
            <div className="pr-1.5 flex ">
                <h2 className="dark-green goldman-regular sm:text-2xl md:text-3xl lg:text-4xl xl:text-[50px]" >Create with</h2>
                <div className="gap-3 flex items-center pl-4 black-green ">
                    <a href="https://nextjs.org/" className="" target="blank"><NextIcon className=" w-[78px] h-[70px]" /></a>
                    <a href="https://vercel.com/home" target="blank"><VercelIcon className="w-[30px] h-[30px]" /></a>
                </div>
            </div>
        </div>
    );
}