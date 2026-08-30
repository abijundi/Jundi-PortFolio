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
        <div className="absolute sm:scale-25 md:scale-85 sm:top-[-180px] md:top-[-180px] lg:top-[280px] xl:top-[300px]
         sm:left-[0px] md:left-[10px] lg:left-[180px] xl:left-[240px]
         p-4 text-[var(--dark2)] z-210
         w-auto h-auto bg-gradient-to-br from-[rgba(253,253,253,0.9)] to-[rgba(253,253,253,1)] backdrop-blur-md shadow-lg rounded-xl hover:shadow-2px-[0px_0px_5px_rgba(255,125,41,1)]">
            <div className={"flex sm:text[10px] md:text-3xl lg:text-4xl xl:text-[50px] goldman-bold"}>
                <h1 className="">Hello, I'm</h1>
                <h1 className="border-r-2 border-white pl-4 pr-1">{displayText}</h1>
            </div>
            <div className="pr-1.5 flex ">
                <h2 className="goldman-bold sm:text-[10px] md:text-3xl lg:text-4xl xl:text-[50px]" >GUGUGAGA MALES UPDATE</h2>
            </div>
        </div>
    );
}