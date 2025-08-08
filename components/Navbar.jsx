"use client"
import React, { useState, useEffect } from 'react';
import { Poppins } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-poppins",
});

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY) {
                setIsVisible(false); // Hide navbar when scrolling down
            } else {
                setIsVisible(true); // Show navbar when scrolling up
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return (
        <div className={`fixed z-30 w-full h-[55px] bg-[#1a1a19da] border-b-[2px] 
                      text-[#859f3d] text-2xl transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <span className='text-center relative items-center poppins-bold top-2 pl-[50px] '>P o r t F O L I O</span>
            <div className='gap-[20px] flex justify-items-center justify-center items-center relative bottom-[23px] poppins'>
                <div className="w-[120px] h-[33px] bg-[#f6fcdf] text-center rounded-full
                                transform scale-100 hover:scale-100 hover:ring-2 hover:shadow-[0_0_30px_rgba(133,159,61,1)]
                                transition-all duration-500 hover:animate-scale">
                    <a href="">About Me</a>
                </div>
                <div className="w-[140px] h-[33px] bg-[#f6fcdf] text-center rounded-full
                                hover:shadow-[0_0_30px_rgba(133,159,61,1)] hover:ring-2 transition-all duration-500 hover:animate-scale">
                    <a href="">Contact Me</a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
