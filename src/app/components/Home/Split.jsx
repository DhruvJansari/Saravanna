"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

const FONT_STYLE = {
  heading: "font-['Playfair_Display']",
  body: "font-['Inter']",
  weight: "font-medium",
};

const COUPLE_IMAGES = {
  manImage: "/jewellery/dhoti.png",
  womanImage: "/jewellery/sarees.png",
};

const FALLBACK_COUPLE = {
  manImage: "https://in.pinterest.com/pin/372250725476318472/",
  womanImage: "https://in.pinterest.com/pin/372250725476318472/",
};

const SplitScreenCouple = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState({
    man: false,
    woman: false,
  });
  const containerRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let newX = clientX - rect.left;
    let percentage = (newX / rect.width) * 100;
    percentage = Math.min(Math.max(percentage, 0), 100);
    setSliderPosition(percentage);
  }, []);

  const onMouseMove = useCallback(
    (e) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove],
  );

  const onTouchMove = useCallback(
    (e) => {
      if (!isDragging) return;
      e.preventDefault();
      handleMove(e.touches[0].clientX);
    },
    [isDragging, handleMove],
  );

  const onMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
      window.addEventListener("touchmove", onTouchMove, { passive: false });
      window.addEventListener("touchend", onMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onMouseUp);
    };
  }, [isDragging, onMouseMove, onTouchMove, onMouseUp]);

  const handleImageLoad = (side) => {
    setImagesLoaded((prev) => ({ ...prev, [side]: true }));
  };

  const leftClipPath = `inset(0 ${100 - sliderPosition}% 0 0)`;
  const rightClipPath = `inset(0 0 0 ${sliderPosition}%)`;

  return (
    <section className="w-full bg-gradient-to-br from-[#faf7f2] via-[#f5f0e8] to-[#faf7f2] py-12 md:py-20 overflow-x-hidden">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap");
        .font-\\[Playfair_Display\\] {
          font-family: "Playfair Display", serif;
        }
        .font-\\[Inter\\] {
          font-family: "Inter", sans-serif;
        }
        .no-select {
          user-select: none;
          -webkit-user-select: none;
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* HEADER */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            className={`text-3xl text-black md:text-5xl lg:text-6xl ${FONT_STYLE.heading} ${FONT_STYLE.weight} mb-4 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ letterSpacing: "-0.02em" }}
          >
            Timeless Together
          </h2>
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-12 h-px bg-amber-300/60"></div>
            <div className="w-28 h-[2px] bg-gradient-to-r from-amber-600 to-rose-600"></div>
            <div className="w-12 h-px bg-amber-300/60"></div>
          </div>
        </div>

        {/* MAIN SPLIT SCREEN COMPONENT */}
        <div
          ref={containerRef}
          className={`relative w-full md:h-140 aspect-[4/3] md:aspect-[16/10] lg:aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          style={{
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            // ✅ FIX 1: Prevent text/element selection while dragging
            userSelect: "none",
            WebkitUserSelect: "none",
            MozUserSelect: "none",
            cursor: isDragging ? "ew-resize" : "default",
          }}
        >
          {/* Loading placeholder */}
          {(!imagesLoaded.man || !imagesLoaded.woman) && (
            <div className="absolute inset-0 bg-gradient-to-r from-stone-800 to-stone-700 flex items-center justify-center z-30">
              <div className="text-center">
                <div className="w-12 h-12 border-4 border-amber-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-white font-['Inter']">
                  Loading couple's portrait...
                </p>
              </div>
            </div>
          )}

          {/* LEFT IMAGE - MAN */}
          {/* ✅ FIX 2: pointerEvents none on image wrappers so drag doesn't "grab" them */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: leftClipPath, pointerEvents: "none" }}
          >
            <img
              src={COUPLE_IMAGES.manImage}
              alt="Elegant gentleman - couple portrait left side"
              className="absolute inset-0 w-full h-full object-cover object-center"
              // ✅ FIX 3: Prevent native image drag ghost
              draggable={false}
              onLoad={() => handleImageLoad("man")}
              onError={(e) => {
                e.target.src = FALLBACK_COUPLE.manImage;
              }}
              style={{
                objectPosition: "center 30%",
                userSelect: "none",
                WebkitUserDrag: "none",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent pointer-events-none"></div>
            <div
              className="absolute bottom-6 left-6 md:bottom-8 md:left-8 text-white z-10 pointer-events-none transition-opacity duration-300"
              style={{
                opacity:
                  sliderPosition < 30 ? 1 : sliderPosition > 70 ? 0.3 : 0.7,
              }}
            >
              <p
                className={`text-xs md:text-sm tracking-wider uppercase ${FONT_STYLE.body} font-semibold bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full inline-block`}
              >
                His Story
              </p>
              <h3
                className={`text-xl md:text-3xl ${FONT_STYLE.heading} font-bold mt-2 drop-shadow-lg`}
              >
                Strength & Grace
              </h3>
            </div>
          </div>

          {/* RIGHT IMAGE - WOMAN */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: rightClipPath, pointerEvents: "none" }}
          >
            <img
              src={COUPLE_IMAGES.womanImage}
              alt="Elegant lady - couple portrait right side"
              className="absolute inset-0 w-full h-full object-cover object-center"
              draggable={false}
              onLoad={() => handleImageLoad("woman")}
              onError={(e) => {
                e.target.src = FALLBACK_COUPLE.womanImage;
              }}
              style={{
                objectPosition: "center",
                userSelect: "none",
                WebkitUserDrag: "none",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-l from-black/20 via-transparent to-transparent pointer-events-none"></div>
            <div
              className="absolute bottom-6 right-6 md:bottom-8 md:right-8 text-white z-10 pointer-events-none transition-opacity duration-300 text-right"
              style={{
                opacity:
                  sliderPosition > 70 ? 1 : sliderPosition < 30 ? 0.3 : 0.7,
              }}
            >
              <p
                className={`text-xs md:text-sm tracking-wider uppercase ${FONT_STYLE.body} font-semibold bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full inline-block`}
              >
                Her Elegance
              </p>
              <h3
                className={`text-xl md:text-3xl ${FONT_STYLE.heading} font-bold mt-2 drop-shadow-lg`}
              >
                Beauty & Radiance
              </h3>
            </div>
          </div>

          {/* CENTRAL VERTICAL DIVIDER / SLIDER LINE */}
          <div
            ref={sliderRef}
            className="absolute top-0 bottom-0 w-1 cursor-ew-resize z-20 group"
            style={{
              left: `${sliderPosition}%`,
              transform: "translateX(-50%)",
            }}
            onMouseDown={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onTouchStart={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
          >
            <div className="absolute top-0 bottom-0 w-0.5 bg-white/90 shadow-lg group-hover:bg-amber-300 transition-colors duration-200"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-xl flex items-center justify-center cursor-ew-resize hover:scale-110 transition-all duration-200 border-2 border-amber-400/50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 md:w-6 md:h-6 text-stone-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                />
              </svg>
            </div>
            <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <svg
                className="w-3 h-3 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </div>
            <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-6 h-6 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <svg
                className="w-3 h-3 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplitScreenCouple;
