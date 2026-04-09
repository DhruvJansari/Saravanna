"use client";

import { useState, useEffect } from "react";

// ─── GLOBAL STYLE CONFIG ───────────────────────────────────────────────────────

// 🎨 Font Control (change here anytime)
const FONT_STYLE = {
  heading: "font-[Playfair_Display]", // change to: font-sans / font-mono / custom
  weight: "font-medium ",
};

// 🎨 Border Radius Helper (per corner control)
const getBorderRadius = (radius = {}) => ({
  borderTopLeftRadius: radius.tl || "0px",
  borderTopRightRadius: radius.tr || "0px",
  borderBottomLeftRadius: radius.bl || "0px",
  borderBottomRightRadius: radius.br || "0px",
});

// ─── IMAGE CONFIGURATION ───────────────────────────────────────────────────────
const IMAGE_CONFIG = [
  {
    id: "brown-shirt",
    src: "./womenss.png",
    alt: "Woman in brown shirt",
    top: "5%",
    left: "0%",
    width: "42%",
    height: "28%",
    aspectRatio: "3/4",
    radius: { tl: "10px", tr: "0px", bl: "10px", br: "0px" },
    zIndex: 10,
    shadow: true,
    // Mobile adjustments
    mobileTop: "5%",
    mobileLeft: "0%",
    mobileWidth: "45%",
    mobileHeight: "28%",
  },
  {
    id: "necklace",
    src: "./neck.jpg  ",
    alt: "Pearl necklace",
    top: "1%",
    left: "21.9%",
    right: "0%",
    width: "85%",
    height: "79%",
    radius: { tl: "0px", tr: "0px", bl: "0px", br: "0px" },
    zIndex: 5,
    shadow: false,
    // Mobile adjustments
    mobileTop: "2%",
    mobileLeft: "15%",
    mobileWidth: "85%",
    mobileHeight: "75%",
  },
  {
    id: "beige-shirt",
    src: "./menss.png",
    alt: "Woman in beige shirt",
    bottom: "12%",
    left: "3%",
    width: "42%",
    height: "30%",
    aspectRatio: "3/4",
    radius: { tl: "10px", tr: "0px", bl: "20px", br: "10px" },
    zIndex: 10,
    shadow: true,
    // Mobile adjustments
    mobileBottom: "10%",
    mobileLeft: "0%",
    mobileWidth: "45%",
    mobileHeight: "28%",
  },
  {
    id: "black-blazer",
    src: "./girls.png",
    alt: "Woman in black blazer",
    bottom: "12%",
    left: "64.9%",
    width: "42%",
    height: "30%",
    aspectRatio: "3/4",
    radius: { tl: "0px", tr: "0px", bl: "10px", br: "10px" },
    zIndex: 10,
    shadow: true,
    // Mobile adjustments
    mobileBottom: "2%",
    mobileLeft: "55%",
    mobileWidth: "45%",
    mobileHeight: "28%",
  },
];

// ─── COLLAGE HEIGHT ────────────────────────────────────────────────────────────
const COLLAGE_HEIGHT = "680px";
const MOBILE_COLLAGE_HEIGHT = "400px";

// ─── HERO TEXT CONFIG ──────────────────────────────────────────────────────────
const HERO_TEXT = {
  heading: ["Where", "Style", "Meets", "Elegance"],
  buttonLabel: "Shop Now",
  leftColWidth: "38%",
  mobileLeftColWidth: "100%",
};

// ──────────────────────────────────────────────────────────────────────────────

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Check if mobile on mount and on resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
<section className="w-full bg-white flex flex-col">
      {/* Hero */}
   <div className="flex items-center px-4 sm:px-6 md:px-0 lg:px-12 pt-2 md:pt-4 pb-6 max-w-7xl mx-auto w-full gap-4 md:gap-8 flex-col md:flex-row">  
        {/* Left: Text */}
        <div
          style={{ 
            width: isMobile ? HERO_TEXT.mobileLeftColWidth : HERO_TEXT.leftColWidth 
          }}
          className={`flex-shrink-0 transition-all duration-700 delay-100 mb-5 md:mb-0 text-center md:text-left ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h1
            className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl ${FONT_STYLE.weight} ${FONT_STYLE.heading} text-black leading-[1.1] sm:leading-[1.05] md:leading-[1.00] tracking-tight mb-1 md:mb-10`}
          >
            {HERO_TEXT.heading.map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </h1>

          <button className="mt-2 px-6 sm:px-7 py-2.5 sm:py-3 border-2 border-black rounded-full text-black font-bold text-sm sm:text-base hover:bg-black hover:text-white transition-all duration-300">
            {HERO_TEXT.buttonLabel}
          </button>
        </div>

        {/* Right: Image Collage */}
        <div
          style={{ 
            height: isMobile ? MOBILE_COLLAGE_HEIGHT : COLLAGE_HEIGHT 
          }}
          className={`flex-1 relative transition-all duration-700 delay-200 w-full ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Images */}
          {IMAGE_CONFIG.map((img) => {
            // Use mobile-specific values if on mobile, otherwise use desktop values
            const isMobileDevice = isMobile;
            
            return (
              <img
                key={img.id}
                src={img.src}
                alt={img.alt}
                style={{
                  position: "absolute",
                  top: isMobileDevice && img.mobileTop ? img.mobileTop : img.top ?? undefined,
                  left: isMobileDevice && img.mobileLeft ? img.mobileLeft : img.left ?? undefined,
                  right: isMobileDevice && img.mobileRight ? img.mobileRight : img.right ?? undefined,
                  bottom: isMobileDevice && img.mobileBottom ? img.mobileBottom : img.bottom ?? undefined,
                  width: isMobileDevice && img.mobileWidth ? img.mobileWidth : img.width,
                  height: isMobileDevice && img.mobileHeight ? img.mobileHeight : img.height ?? undefined,
                  aspectRatio: img.aspectRatio ?? undefined,
                  zIndex: img.zIndex,
                  objectFit: "cover",
                  ...getBorderRadius(img.radius),
                  boxShadow: img.shadow
                    ? "0 4px 12px rgba(0,0,0,0.12)"
                    : "none",
                }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;