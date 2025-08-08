"use client"
import { useEffect, useRef, useState } from "react";

export default function Card() {
  const [card1, setShowCard1] = useState(false);
  const [card2, setShowCard2] = useState(false);
  const [card3, setShowCard3] = useState(false);
  const outsideClick = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (outsideClick.current && !outsideClick.current.contains(event.target)) {
        setShowCard1(false);
        setShowCard2(false);
        setShowCard3(false);
      }
    }
    if (card1 || card2 || card3) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [card1, card2, card3]);

  return (
    <div className="pt-[70px] pb-[50px] flex flex-wrap justify-center items-center md:gap-[35px] xl:gap-[50px]">
      <div className="w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] xl:w-[350px] 2xl:w-[450px] p-3 rounded-2xl h-auto bg-linear-65 from-[#1a1a19] to-[#31511e] shadow-2xl justify-items-center"
        onClick={() => setShowCard1(true)}>
        <h2 className="text-3xl md:text-2xl text-[#f6fcdf] font-semibold mb-4 text-center">Thumbnail Design</h2>
        <p className="text-[#859f3d] md:text-[14px] lg:text-[18px] xl:text-[24px] w-[80%] mb-4 text-center">
          More Thumbnail Design.
        </p>
        <img src="/images/ThumbnailDesign.jpg" alt="Thumbnail Design" className="w-[90%] mx-auto h-auto rounded-4xl border-[1px] border-[#f6fcdf] shadow-[0px_2px_15px_rgba(133,159,61,0.5)]" />
      </div>

      <div className="w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] xl:w-[350px] 2xl:w-[450px]  p-3 rounded-2xl h-auto bg-linear-65 from-[#1a1a19] to-[#31511e] shadow-2xl justify-items-center"
        onClick={() => setShowCard2(true)}>
        <h2 className="text-3xl md:text-2xl text-[#f6fcdf] font-semibold mb-4 text-center">Social Media Design</h2>
        <p className="text-[#859f3d] md:text-[14px] lg:text-[18px] xl:text-[24px] w-[80%] mb-4 text-center">
          More Social Media Design.
        </p>
        <img src="/images/SocialMedia.png" alt="Social Media Design" className="w-[90%] mx-auto h-auto rounded-4xl border-[1px] border-[#f6fcdf] shadow-[0px_2px_15px_rgba(133,159,61,0.5)]" />
      </div>

      <div className="w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] xl:w-[350px] 2xl:w-[450px]  p-3 rounded-2xl h-auto bg-linear-65 from-[#1a1a19] to-[#31511e] shadow- justify-items-center"
        onClick={() => setShowCard3(true)}>
        <h2 className="text-3xl md:text-2xl text-[#f6fcdf] font-semibold mb-4 text-center">Other Design</h2>
        <p className="text-[#859f3d] md:text-[14px] lg:text-[18px] xl:text-[24px] w-[80%] lg:w-[95%] mb-4 text-center">
          combination of several designs.
        </p>
        <div className="w-[90%] aspect-[16/9] rounded-4xl border-[1px] border-[#f6fcdf] shadow-[0px_2px_15px_rgba(133,159,61,0.5)] overflow-hidden">
          <img src="/images/Dstore1.jpg" alt="Other Design" className="w-full h-full object-cover" />
        </div>
      </div>
      {/* Card 1/      -Thumbnail Design- */}
      {card1 && (
        <div className="fixed bg-[rgba(246,252,223,0.2)] backdrop-blur-xs z-60 top-0 left-0 w-full h-full flex justify-center items-center"
        >
          <div className="relative w-[90%] max-h-[90vh] border-b-4 border-t-4 border-[#f6fcdf] overflow-y-auto bg-[rgba(26,26,25,0.4)] backdrop-blur-xs p-4 rounded-xl shadow-xl text-center"
            ref={outsideClick}>
            <h2 className="white-green text-5xl font-bold">Thumbnail Design</h2>
            <div className="flex flex-wrap justify-center items-center">
              <img src="/images/ThumbnailDesign.jpg" alt="Thumbnail Design 1" className="w-[90%] h-auto rounded-4xl shadow-[0px_2px_15px_rgba(133,159,61,0.5)] mt-4" />
              <img src="/images/ValorantThumbnail.jpg" alt="Valorant Thumbnail" className="w-[90%] h-auto rounded-4xl shadow-[0px_2px_15px_rgba(133,159,61,0.5)] mt-4" />
              <img src="/images/RobloxThumbnail.jpg" alt="Roblox Thumbnail" className="w-[90%] h-auto rounded-4xl shadow-[0px_2px_15px_rgba(133,159,61,0.5)] mt-4" />
            </div>
          </div>
        </div>
      )}

      {/* Card/       -Social Media- */}
      {card2 && (
        <div className="fixed bg-[rgba(246,252,223,0.2)] backdrop-blur-xs z-60 top-0 left-0 w-full h-full flex justify-center items-center"
        >
          <div className="relative w-[90%] max-h-[90vh] border-b-4 border-t-4 border-[#f6fcdf] overflow-y-auto bg-[rgba(26,26,25,0.4)] backdrop-blur-xs p-4 rounded-xl shadow-xl text-center"
            ref={outsideClick}>
            <h2 className="white-green text-shadow-sm text-5xl font-bold">Social Media Design</h2>
            <div className="flex flex-wrap justify-center items-center gap-[50px]">
              <img src="/images/SocialMedia.png" alt="Social Media Design 1" className="w-[90%] h-auto rounded-4xl shadow-[0px_2px_15px_rgba(133,159,61,0.5)] mt-4" />
              <img src="/images/Pura1.jpg" alt="Social Media Design 2" className="w-[25%] h-auto rounded-4xl shadow-[0px_2px_15px_rgba(133,159,61,0.5)] mt-4" />
              <img src="/images/Pura2.jpg" alt="Social Media Design 3" className="w-[25%] h-auto rounded-4xl shadow-[0px_2px_15px_rgba(133,159,61,0.5)] mt-4" />
              <img src="/images/Pura3.jpg" alt="Social Media Design 4" className="w-[25%] h-auto rounded-4xl shadow-[0px_2px_15px_rgba(133,159,61,0.5)] mt-4" />
              <img src="/images/Pura4.jpg" alt="Social Media Design 3" className="w-[25%] h-auto rounded-4xl shadow-[0px_2px_15px_rgba(133,159,61,0.5)] mt-4" />
              <img src="/images/Pura5.jpg" alt="Social Media Design 4" className="w-[25%] h-auto rounded-4xl shadow-[0px_2px_15px_rgba(133,159,61,0.5)] mt-4" />
              <img src="/images/Pura6.jpg" alt="Social Media Design 4" className="w-[25%] h-auto rounded-4xl shadow-[0px_2px_15px_rgba(133,159,61,0.5)] mt-4" />
            </div>
          </div>
        </div>
      )}

      {/* Card3/      -Other- */}
      {card3 && (
        <div className="fixed bg-[rgba(246,252,223,0.2)] backdrop-blur-xs z-60 top-0 left-0 w-full h-full flex justify-center items-center">
          <div className="relative w-[90%] max-h-[90vh] border-b-4 border-t-4 border-[#f6fcdf] overflow-y-auto bg-[rgba(26,26,25,0.4)] backdrop-blur-xs p-4 rounded-xl shadow-xl text-center"
            ref={outsideClick}>
            <h2 className="white-green text-5xl font-bold">Other Design</h2>
            <div className="flex pt-5 pb-5 flex-wrap justify-center items-center gap-[50px]">
              <img src="/images/Cosmetic.jpg" alt="Cosmetic Ads" className="w-[45%] h-auto rounded-4xl shadow-[0px_2px_15px_rgba(133,159,61,0.5)] mt-4" />
              <img src="/images/Dlogo1.png" alt="Logo Mockup 1" className="w-[45%] h-auto rounded-4xl shadow-[0px_2px_15px_rgba(133,159,61,0.5)] mt-4" />
              <img src="/images/Dlogo2.png" alt="Logo Mockup 2" className="w-[45%] h-auto rounded-4xl shadow-[0px_2px_15px_rgba(133,159,61,0.5)] mt-4" />
              <img src="/images/Dstore1.jpg" alt="Game Store Menu 1" className="w-[45%] h-auto rounded-4xl shadow-[0px_2px_15px_rgba(133,159,61,0.5)] mt-4" />
              <img src="/images/Dstore2.jpg" alt="Game Store Menu 2" className="w-[45%] h-auto rounded-4xl shadow-[0px_2px_15px_rgba(133,159,61,0.5)] mt-4" />
              <img src="/images/Dmenu.jpg" alt="Menu Design" className="w-[45%] h-auto rounded-4xl shadow-[0px_2px_15px_rgba(133,159,61,0.5)] mt-4" />
              <img src="/images/Dmilad.jpg" alt="Milad Design" className="w-[45%] h-auto rounded-4xl shadow-[0px_2px_15px_rgba(133,159,61,0.5)] mt-4" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}