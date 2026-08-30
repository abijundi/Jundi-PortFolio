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
      <div className="card-style"
        onClick={() => setShowCard1(true)}>
        <h2 className="card-h poppins-bold text-[var(--white1)]">Thumbnail Design</h2>
        <p className="card-p poppins text-[var(--white1)]">
          More Thumbnail Design.
        </p>
        <img src="/images/ThumbnailDesign.jpg" alt="Thumbnail Design" className="card-image-style"/>
      </div>

      <div className="card-style"
        onClick={() => setShowCard2(true)}>
        <h2 className="card-h poppins-bold text-[var(--white1)] ">Social Media Design</h2>
        <p className="card-p poppins text-[var(--white1)] ">
          More Social Media Design.
        </p>
        <img src="/images/SocialMedia.png" alt="Social Media Design" className="card-image-style" />
      </div>

      <div className="card-style"
        onClick={() => setShowCard3(true)}>
        <h2 className="card-h poppins-bold text-[var(--white1)]">Logo & Other Design</h2>
        <p className="card-p poppins text-[var(--white1)]">
          combination of several designs.
        </p>
        <div className="w-[90%] aspect-[16/9] rounded-4xl border-[1px] border-[#fdfdfd] hover:border-[#ff7d29] shadow-[0px_2px_15px_rgba(133,159,61,0.5)] overflow-hidden">
          <img src="/images/DirgahayuPoster.jpg" alt="Other Design" className="w-full h-full object-cover" />
        </div>
      </div>
      {/* Card 1/      -Thumbnail Design- */}
      {card1 && (
        <div className="fixed bg-[rgba(177,178,255,0.8)] backdrop-blur-xs z-300 top-0 left-0 w-full h-full flex justify-center items-center"
        >
          <div className="relative w-[90%] max-h-[90vh] border-b-4 border-t-4 border-[#f6fcdf] overflow-y-auto bg-[rgba(26,26,25,0.4)] backdrop-blur-xs p-4 rounded-xl shadow-xl text-center"
            ref={outsideClick}>
            <h2 className="text-5xl font-bold text-[var(--white1)]">Thumbnail Design</h2>
            <div className="flex flex-wrap justify-center items-center">
              <img src="/images/ThumbnailDesign.jpg" alt="Thumbnail Design 1" className="thumb-style" />
              <img src="/images/ValorantThumbnail.jpg" alt="Valorant Thumbnail" className="thumb-style" />
              <img src="/images/RobloxThumbnail.jpg" alt="Roblox Thumbnail" className="thumb-style" />
              <img src="/images/Thumb-2026-1.jpg" alt="Chill Stream Thumbnail" className="thumb-style" />
              <img src="/images/Thumb-2026-2.jpg" alt="Minecraft Thumbnail" className="thumb-style" />
              <img src="/images/Thumb-2026-3.jpg" alt="Roblox Thumbnail" className="thumb-style" />
              <img src="/images/Thumb-2026-4.jpg" alt="Stardew Valley Thumbnail" className="thumb-style" />
              <img src="/images/Thumb-2026-5.jpg" alt="Valorant-2 Thumbnail" className="thumb-style" />
            </div>
          </div>
        </div>
      )}

      {/* Card/       -Social Media- */}
      {card2 && (
        <div className="fixed bg-[rgba(246,252,223,0.2)] backdrop-blur-xs z-300 top-0 left-0 w-full h-full flex justify-center items-center"
        >
          <div className="relative w-[90%] max-h-[90vh] border-b-4 border-t-4 border-[#fdfdfd] overflow-y-auto bg-[rgba(26,26,25,0.4)] backdrop-blur-xs p-4 rounded-xl shadow-xl text-center"
            ref={outsideClick}>
            <h2 className="text-5xl font-bold text-[var(--white1)]">Social Media Design</h2>
            <div className="flex flex-wrap justify-center items-center gap-[50px]">
              <img src="/images/SocialMedia.png" alt="Social Media Design 1" className="w-[90%] h-auto rounded-4xl shadow-[0px_2px_15px_rgba(133,159,61,0.5)] mt-4" />
              <img src="/images/Pura1.jpg" alt="Social Media Design 2" className="social-media-style" />
              <img src="/images/Pura2.jpg" alt="Social Media Design 3" className="social-media-style" />
              <img src="/images/Pura3.jpg" alt="Social Media Design 4" className="social-media-style" />
              <img src="/images/Pura4.jpg" alt="Social Media Design 3" className="social-media-style" />
              <img src="/images/Pura5.jpg" alt="Social Media Design 4" className="social-media-style" />
              <img src="/images/Pura6.jpg" alt="Social Media Design 4" className="social-media-style" />
            </div>
          </div>
        </div>
      )}

      {/* Card3/      -Other- */}
      {card3 && (
        <div className="fixed bg-[rgba(246,252,223,0.2)] backdrop-blur-xs z-300 top-0 left-0 w-full h-full flex justify-center items-center">
          <div className="relative w-[90%] max-h-[90vh] border-b-4 border-t-4 border-[#f6fcdf] overflow-y-auto bg-[rgba(26,26,25,0.4)] backdrop-blur-xs p-4 rounded-xl shadow-xl text-center"
            ref={outsideClick}>
            <h2 className="text-5xl font-bold text-[var(--white1)]">Logo & Other Design</h2>
            <div className="flex pt-5 pb-5 flex-wrap justify-center items-center gap-[50px]">
              <img src="/images/Dlogo1.png" alt="Logo Mockup 1" className="other-design-style" />
              <img src="/images/Dlogo2.png" alt="Logo Mockup 2" className="other-design-style" />
              <img src="/images/Dlogo3.png" alt="Es Kristal LOGO" className="other-design-style" />
              <img src="/images/Dlogo4.png" alt="DS LOGO" className="other-design-style" />
              <img src="/images/HUT-81.jpg" alt="Indonesia HUT RI 81" className="other-design-style" />
              <img src="/images/DirgahayuPoster.jpg" alt="Indonesia HUT RI 80" className="other-design-style" />
              <img src="/images/Mouse.jpg" alt="Mouse Design" className="other-design-style" />
              <img src="/images/Cosmetic.jpg" alt="Cosmetic Ads" className="other-design-style" />
              <img src="/images/Dstore1.jpg" alt="Game Store Menu 1" className="other-design-style" />
              <img src="/images/Dstore2.jpg" alt="Game Store Menu 2" className="other-design-style" />
              <img src="/images/Dmenu.jpg" alt="Menu Design" className="other-design-style" />
              <img src="/images/Dmilad.jpg" alt="Milad Design" className="other-design-style" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}