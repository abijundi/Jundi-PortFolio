'use client'
import { useState, useEffect, useCallback } from "react";

function Navbar() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = useCallback(() => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY) {
            setIsVisible(false); // Hide navbar when scrolling down
        } else {
            setIsVisible(true); // Show navbar when scrolling up
        }
        setLastScrollY(currentScrollY);
    }, [lastScrollY]);

    useEffect(() => {
        const throttledHandleScroll = throttle(handleScroll, 200); // Throttle to improve performance
        window.addEventListener("scroll", throttledHandleScroll);
        return () => {
            window.removeEventListener("scroll", throttledHandleScroll);
        };
    }, [handleScroll]);

    return (
        <div
            className={`fixed z-30 w-full h-[75px] bg-[#1a1a19da] border-b-[2px] 
                      text-[#859f3d] text-[40px] transition-transform duration-300 ${
                          isVisible ? "translate-y-0" : "-translate-y-full"
                      }`}
        >
            <span className="text-center relative items-center poppins-bold top-2 pl-[50px] ">
                P o r t F O L I O
            </span>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            </div>
        </div>
    );
}

export default Navbar;

// Utility function for throttling
function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function (...args) {
        const context = this;
        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function () {
                if (Date.now() - lastRan >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}