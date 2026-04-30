// app/jewellery/page.jsx
"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function jewelleryCollection() {
  // All jewellery collections - different types of jewellery
  // const sections = [
  //   {
  //     title: "Necklaces",
  //     description:
  //       "Discover elegance that adorns your neckline with our exquisite necklace collection, perfect for every occasion.",
  //     category: "Necklaces",
  //     items: [
  //       "https://i.pinimg.com/1200x/81/28/21/812821effc86bf1d4b45aa057d100ba3.jpg",
  //       "https://i.pinimg.com/1200x/9d/6d/7c/9d6d7c1ef92f1fcbde353f81c20b0378.jpg",
  //       "https://i.pinimg.com/736x/86/0e/23/860e2341ee10a731cc1bc8f838b48b45.jpg",
  //       "https://i.pinimg.com/736x/ab/4e/5d/ab4e5d4f759b3928473f7a7bdc3a06f3.jpg",
  //       "https://i.pinimg.com/736x/1b/73/02/1b730284588a878d79c10a2367074a80.jpg",
  //     ],
  //     names: [
  //       "Diamond Pendant",
  //       "Pearl Cascade",
  //       "Sapphire Choker",
  //       "Gold Locket",
  //       "Ruby Necklace",
  //     ],
  //   },
  //   {
  //     title: "Earrings",
  //     description:
  //       "Frame your face with sparkle and sophistication from our stunning earring collection that catches every eye.",
  //     category: "Earrings",
  //     items: [
  //       "https://i.pinimg.com/1200x/61/99/a2/6199a2c1d0d05ae9ed3416fa2331fc8b.jpg",
  //       "https://i.pinimg.com/1200x/35/a4/ba/35a4bafc5d91f0ac9382f5e4c96d10b6.jpg",
  //       "https://i.pinimg.com/1200x/aa/59/05/aa59057f200a5e7a308af5ddac011adc.jpg",
  //       "https://i.pinimg.com/1200x/72/93/44/7293445cd29a076753b627d5664ccd4b.jpg",
  //       "https://i.pinimg.com/1200x/84/3b/36/843b367f4ed6e012684620e6dc239d11.jpg",
  //     ],
  //     names: [
  //       "Diamond Drops",
  //       "Pearl Studs",
  //       "Gold Hoops",
  //       "Emerald Tears",
  //       "Sapphire Studs",
  //     ],
  //   },
  //   {
  //     title: "Rings",
  //     description:
  //       "Celebrate life's precious moments with our timeless and elegant ring collection that symbolizes forever.",
  //     category: "Rings",
  //     items: [
  //       "https://i.pinimg.com/736x/64/62/91/6462913b7c5397f10b3e8e02e535fcad.jpg",
  //       "https://i.pinimg.com/736x/f8/30/82/f83082961e79ee29b30b5c177313aac7.jpg",
  //       "https://i.pinimg.com/736x/b9/78/1b/b9781b4bb9d62b3aaac44077821cf33d.jpg",
  //       "https://i.pinimg.com/736x/17/81/65/1781654fc4f7efa40c9ae758b8fdcfe5.jpg",
  //       "https://i.pinimg.com/736x/65/fd/b1/65fdb17b08f4aa6142998fb66112a69b.jpg",
  //     ],
  //     names: [
  //       "Solitaire Ring",
  //       "Emerald Halo",
  //       "Vintage Gold",
  //       "Eternity Band",
  //       "Sapphire Crown",
  //     ],
  //   },
  //   {
  //     title: "Bracelets",
  //     description:
  //       "Add the perfect finishing touch to any ensemble with our elegant bracelet designs that grace your wrist.",
  //     category: "Bracelets",
  //     items: [
  //       "https://i.pinimg.com/736x/e1/e9/58/e1e9585cc8127a823cd0600c5b292d9b.jpg",
  //       "https://i.pinimg.com/736x/82/9e/a8/829ea80ecd133622f095ce32bc4107b6.jpg",
  //       "https://i.pinimg.com/1200x/81/25/45/812545403ac407a98940373cf4f99df9.jpg",
  //       "https://i.pinimg.com/736x/e1/35/07/e135072ab8afb8a22701fbcb550e8e9c.jpg",
  //       "https://i.pinimg.com/1200x/13/a0/2e/13a02e6e4edc1639665a0f578f0bd98d.jpg",
  //     ],
  //     names: [
  //       "Tennis Bracelet",
  //       "Gold Chain",
  //       "Diamond Bangle",
  //       "Pearl Bracelet",
  //       "Sapphire Cuff",
  //     ],
  //   },
  //   {
  //     title: "Pendants",
  //     description:
  //       "Express your personal style with our meaningful pendant collection, each piece tells a unique story.",
  //     category: "Pendants",
  //     items: [
  //       "https://i.pinimg.com/1200x/19/b2/28/19b22895f70a378443a1124b8da7c087.jpg",
  //       "https://i.pinimg.com/736x/8a/b7/30/8ab730225c0bef77e9986916bb4f4b24.jpg",
  //       "https://i.pinimg.com/1200x/d8/4d/1c/d84d1cdc9a293d79e670587e6247d7dc.jpg",
  //       "https://i.pinimg.com/736x/69/f9/97/69f997ea2205a0338375afad42c72169.jpg",
  //       "https://i.pinimg.com/736x/df/e3/7e/dfe37e1d74f25cd688405338b455cb90.jpg",
  //     ],
  //     names: [
  //       "Infinity Pendant",
  //       "Heart Locket",
  //       "Star Charm",
  //       "Cross Pendant",
  //       "Evil Eye",
  //     ],
  //   },
  //   {
  //     title: "Accessories",
  //     description:
  //       "Complete your look with our curated selection of jewellery accessories that add that extra sparkle.",
  //     category: "Accessories",
  //     items: [
  //       "https://i.pinimg.com/736x/5e/00/d6/5e00d6489fb27e55e5966c8b16e67e21.jpg",
  //       "https://i.pinimg.com/1200x/dc/f1/7e/dcf17e9bad4394e33b5e51368ec0977c.jpg",
  //       "https://i.pinimg.com/1200x/0e/a9/41/0ea9410f8aee06525c96faa1d948f2f8.jpg",
  //       "https://i.pinimg.com/1200x/d9/49/ce/d949ce5916da10d2c4d41fda0a155604.jpg",
  //       "https://i.pinimg.com/736x/41/e5/db/41e5dbe05e305b6d236f63dcd6fc4d14.jpg",
  //     ],
  //     names: [
  //       "Brooch Pin",
  //       "Hair jewellery",
  //       "Anklet Set",
  //       "Cufflinks",
  //       "Tie Pin",
  //     ],
  //   },
  // ];

  const sections = [
    {
      title: "Fancy malai & Fancy Necklace",
      description:
        "Elegant Fancy malai & Fancy Necklace designs inspired by timeless craftsmanship.",
      category: "Necklaces",
      items: [
       
        "/jewellery/antique/img3.jpeg",
        "/jewellery/antique/img6.jpeg",
        // "/jewellery/antique/img5.jpeg",
        // "/jewellery/antique/img4.jpeg",
      ],
      names: [
        "Fancy Malai",
        "Turkey",
        "Antique Necklace",
        "Antique Necklace",
      ],
    },

    {
      title: "Fancy chains",
      description:
        "Beautiful Fancy chains designs crafted with precision and style.",
      category: "Necklaces",
      items: [
        "/jewellery/cfmalai/img1.jpeg",
        "/jewellery/Nagas malai/img1.jpeg",
        "/jewellery/cfchain/img11.png",
        "/jewellery/cfchain/img44.png",
        "/jewellery/cfchain/img2.jpeg",
        "/jewellery/cfchain/img3.jpeg",
      ],
      names: [
        "Nagas Malai",
        "Temple Design Malai",
        "Indho Itali",
        "Cocktail Chain",
        "Fancy Chain",
        "Casting Cocktail Chain",
      ],
    },

    {
      title: "Fancy Rings",
      description:
        "Elegant rings crafted to make every moment special and memorable.",
      category: "Rings",
      items: [
        "/jewellery/cfring/img11.png",
        "/jewellery/cfring/img5.png",
        "/jewellery/Maharaja Ring/img11.png",
        "/jewellery/cfring/img44.png",
      ],
      names: [
        "Casting Fancy Ring",
        "Gens Casting Ring",
        "Maharaja Ring",
        "Ladies Casting Ring",
        ,
      ],
    },
    {
      title: "Fancy Earrings",
      description:
        "Stylish earrings that enhance your beauty with traditional and modern appeal.",
      category: "Earrings",
      items: [
        "/jewellery/Fancy earring/img1.jpeg",
        "/jewellery/Fancy earring/img2.jpeg",
        "/jewellery/Fancy earring/img3.jpeg",
        "/jewellery/Fancy earring/img4.jpeg",
        "/jewellery/Fancy earring/img5.jpeg",
      ],
      names: [
        "Fancy Earring",
        "Casting Fancy Earring",
        "Fancy Earring",
        "Fancy Earring",
        "Fancy Earring",
      ],
    },

    {
      title: "Jimki Earrings",
      description:
        "Stylish earrings that enhance your beauty with traditional and modern appeal.",
      category: "Earrings",
      items: [
        "/jewellery/Jimki earring/img1.jpeg",
        // "/jewellery/Jimki earring/img3.jpeg",
        "/jewellery/Jimki earring/img4.jpeg",
        "/jewellery/Jimki earring/img5.jpeg",
        "/jewellery/Jimki earring/img2.jpeg",
      ],
      names: [
        "Jimki Earring",
        "Jimki Earring",
        "Jimki Earring",
        "Emposing earings",
      ],
    },
  ];

  const scrollRefs = useRef([]);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHoveringImage, setIsHoveringImage] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, scrollLeft: 0 });
  const [activeIndex, setActiveIndex] = useState(null);
  const [velocity, setVelocity] = useState(0);
  const [lastX, setLastX] = useState(0);
  const [animationFrame, setAnimationFrame] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const applyInertia = (container, vel) => {
    if (!container || Math.abs(vel) < 0.5) {
      setAnimationFrame(null);
      return;
    }

    container.scrollLeft -= vel;
    const newVelocity = vel * 0.95;
    setVelocity(newVelocity);

    const frame = requestAnimationFrame(() =>
      applyInertia(container, newVelocity),
    );
    setAnimationFrame(frame);
  };

  const handleMouseDown = (e, index) => {
    if (animationFrame) {
      cancelAnimationFrame(animationFrame);
      setAnimationFrame(null);
    }

    const container = scrollRefs.current[index];
    setIsDragging(true);
    setActiveIndex(index);
    setVelocity(0);
    setLastX(e.pageX);

    setDragStart({
      x: e.pageX - container.offsetLeft,
      scrollLeft: container.scrollLeft,
    });
    container.style.cursor = "grabbing";
    container.style.scrollBehavior = "auto";
  };

  const handleMouseMoveDrag = (e, index) => {
    if (!isDragging || activeIndex !== index) return;
    e.preventDefault();

    const container = scrollRefs.current[index];
    const x = e.pageX - container.offsetLeft;
    const walk = (x - dragStart.x) * 1.2;
    container.scrollLeft = dragStart.scrollLeft - walk;

    const currentX = e.pageX;
    const deltaX = currentX - lastX;
    setVelocity(deltaX * 0.8);
    setLastX(currentX);
  };

  const handleMouseUp = () => {
    if (isDragging && Math.abs(velocity) > 0.5) {
      const container = scrollRefs.current[activeIndex];
      if (container) {
        applyInertia(container, velocity);
      }
    }

    setIsDragging(false);
    setActiveIndex(null);
    sections.forEach((_, index) => {
      if (scrollRefs.current[index]) {
        scrollRefs.current[index].style.cursor = "grab";
        scrollRefs.current[index].style.scrollBehavior = "smooth";
      }
    });
  };

  const scrollTo = (index, direction) => {
    const container = scrollRefs.current[index];
    if (container) {
      const scrollAmount = direction === "left" ? -400 : 400;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mouseup", handleMouseUp);
      return () => window.removeEventListener("mouseup", handleMouseUp);
    }
  }, [isDragging, velocity, activeIndex]);

  return (
    <div className="bg-[#FDFBF7] min-h-screen overflow-x-hidden">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600&display=swap");

        * {
          cursor: default;
        }

        .section-title {
          font-family: "Playfair Display", serif;
          font-size: 32px;
          letter-spacing: 0.02em;
          color: #1a1a1a;
          font-weight: 500;
        }

        .section-description {
          font-family: "Cormorant Garamond", serif;
          font-size: 18px;
          color: #666;
          font-weight: 300;
          line-height: 1.6;
        }

        .image-card {
          position: relative;
          overflow: hidden;
          border-radius: 2px;
          cursor: grab;
          transition: all 0.5s cubic-bezier(0.22, 1, 0.36, 1);
          flex-shrink: 0;
          width: 320px;
          background: #fff;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
          will-change: transform;
        }

        .image-card:active {
          cursor: grabbing;
        }

        .image-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 35px rgba(0, 0, 0, 0.08);
        }

        .image-card img {
          transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
          width: 100%;
          height: 420px;
          object-fit: cover;
          will-change: transform;
        }

        .image-card:hover img {
          transform: scale(1.04);
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(0, 0, 0, 0.7) 0%,
            rgba(0, 0, 0, 0.8) 100%
          );
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1);
          gap: 15px;
        }

        .image-card:hover .image-overlay {
          opacity: 1;
        }

        .view-btn {
          font-family: "Cormorant Garamond", serif;
          font-size: 14px;
          letter-spacing: 3px;
          color: white;
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(8px);
          padding: 12px 28px;
          border-radius: 30px;
          border: 1px solid rgba(255, 255, 255, 0.25);
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
          text-transform: uppercase;
          font-weight: 400;
        }

        .view-btn:hover {
          background: rgba(255, 255, 255, 0.22);
          transform: scale(1.05);
          letter-spacing: 4px;
          border-color: rgba(255, 255, 255, 0.5);
        }

        .product-name {
          font-family: "Cormorant Garamond", serif;
          font-size: 22px;
          color: white;
          text-align: center;
          font-weight: 500;
          letter-spacing: 1px;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }

        .custom-cursor {
          position: fixed;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: rgba(30, 25, 22, 0.9);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
          z-index: 9999;
          transition:
            transform 0.12s ease,
            width 0.2s ease,
            height 0.2s ease;
          transform: translate(-50%, -50%);
          box-shadow: 0 0 30px rgba(0, 0, 0, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .custom-cursor span {
          color: #fdfbf7;
          font-family: "Cormorant Garamond", serif;
          font-size: 13px;
          letter-spacing: 3px;
          font-weight: 300;
          text-transform: uppercase;
        }

        .scroll-container {
          scroll-behavior: smooth;
          scrollbar-width: none;
          -ms-overflow-style: none;
          cursor: grab;
          user-select: none;
          -webkit-overflow-scrolling: touch;
          overflow-x: auto;
          overflow-y: hidden;
        }

        .scroll-container:active {
          cursor: grabbing;
        }

        .scroll-container::-webkit-scrollbar {
          display: none;
        }

        .arrow-btn {
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .arrow-btn:hover {
          background: #1a1a2e;
          color: white;
          transform: translateX(5px);
        }

        .back-btn {
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .back-btn:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateX(-5px);
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes zoomSlow {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.1);
          }
        }

        @keyframes zoomSlow2 {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.12);
          }
        }

        @keyframes zoomSlow3 {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.08);
          }
        }

        .animate-zoomSlow {
          animation: zoomSlow 20s ease-out forwards;
        }

        .animate-zoomSlow2 {
          animation: zoomSlow2 22s ease-out forwards;
        }

        .animate-zoomSlow3 {
          animation: zoomSlow3 18s ease-out forwards;
        }
      `}</style>

      {/* Custom Cursor */}
      {isHoveringImage && (
        <div
          className="custom-cursor"
          style={{
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
          }}
        >
          <span>DRAG</span>
        </div>
      )}

      {/* Hero Section - Multiple jewellery Pieces */}
      <div className="relative h-[85vh] md:h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Cinematic Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/80 z-10" />

        {/* 🔥 RESPONSIVE IMAGE GRID */}
        <div className="absolute inset-0 z-0 grid grid-cols-1 md:grid-cols-3">
          {/* jewellery 1 - (VISIBLE ON MOBILE) */}

          {/* jewellery 2 (HIDDEN ON MOBILE) */}
          <div className="relative overflow-hidden hidden md:block">
            <Image
              src="/jewellery/img2.png"
              alt="Gold Earrings"
              fill
              className="object-contain object-center scale-80 animate-zoomSlow2"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
          </div>
          <div className="relative overflow-hidden">
            <Image
              src="/jewellery/img3.png"
              alt="Diamond Necklace"
              fill
              className="object-cover object-center scale-110 md:scale-110 animate-zoomSlow"
              priority
            />
            <div className="absolute inset-0 bg-black/50 md:bg-gradient-to-r md:from-black/50 md:via-black/20 md:to-transparent" />
          </div>
          {/* jewellery 3 (HIDDEN ON MOBILE) */}
          <div className="relative overflow-hidden hidden md:block">
            <Image
              src="/jewellery/img5.png"
              alt="Maharaja Ring"
              fill
              className="object-contain object-center scale-80 animate-zoomSlow3"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-l from-black/50 via-black/20 to-transparent" />
          </div>
        </div>

        {/* CONTENT */}
        <div className="relative z-20 text-center px-4 sm:px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-white/50 tracking-[0.25em] text-[10px] sm:text-xs font-['Cormorant_Garamond'] block mb-3 sm:mb-4">
              LUXURY COLLECTION
            </span>

            <h1 className="font-['Playfair_Display'] text-white tracking-tight leading-[0.95] text-[34px] sm:text-[50px] md:text-[90px] lg:text-[120px]">
              {/* MOBILE → SINGLE LINE */}
              <span className="block md:hidden">Fine jewellery</span>

              {/* DESKTOP → SPLIT */}
              <span className="hidden md:block">
                Fine <br /> jewellery
              </span>
            </h1>
          </motion.div>

          {/* LINE */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "60px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-px bg-white/40 mx-auto mt-5 sm:mt-6"
          />

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-white/60 mt-4 sm:mt-6 
      font-['Cormorant_Garamond'] 
      text-[10px] sm:text-sm tracking-[0.25em] sm:tracking-[0.3em] font-light"
          >
            TIMELESS ELEGANCE • EXQUISITE CRAFTSMANSHIP
          </motion.p>

          {/* BUTTON */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-6 sm:mt-10 px-6 sm:px-10 py-2.5 sm:py-3 
      border border-white/40 text-white 
      text-[10px] sm:text-xs tracking-[0.2em] uppercase 
      hover:bg-white hover:text-black 
      transition-all duration-500 font-['Cormorant_Garamond']"
          >
            Explore Collection
          </motion.button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-6 py-24">
        <div className="space-y-20">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-10"
            >
              {/* Section Header */}
              <div className="flex items-start justify-between border-b border-[#1a1a2e]/10 pb-8">
                <div className="flex-1">
                  <span className="text-xs tracking-[0.3em] text-[#1a1a2e]/60 font-['Cormorant_Garamond'] uppercase">
                    {section.category}
                  </span>
                  <h2 className="section-title mt-2">{section.title}</h2>
                  <div className="w-12 h-px bg-[#1a1a2e] mt-5 mb-6" />
                  <p className="section-description max-w-xl">
                    {section.description}
                  </p>
                </div>

                {/* Navigation Arrows */}
                <div className="flex gap-3">
                  <button
                    onClick={() => scrollTo(index, "left")}
                    className="arrow-btn w-12 h-12 rounded-full border border-[#1a1a2e]/20 flex items-center justify-center text-[#1a1a2e] hover:bg-[#1a1a2e] hover:text-white transition-all duration-300"
                    style={{ cursor: "pointer" }}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={() => scrollTo(index, "right")}
                    className="arrow-btn w-12 h-12 rounded-full border border-[#1a1a2e]/20 flex items-center justify-center text-[#1a1a2e] hover:bg-[#1a1a2e] hover:text-white transition-all duration-300"
                    style={{ cursor: "pointer" }}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Horizontal Scroll Carousel */}
              <div
                ref={(el) => (scrollRefs.current[index] = el)}
                className="scroll-container pb-6"
                onMouseDown={(e) => handleMouseDown(e, index)}
                onMouseMove={(e) => handleMouseMoveDrag(e, index)}
                onMouseEnter={() => setIsHoveringImage(true)}
                onMouseLeave={() => {
                  setIsHoveringImage(false);
                  if (!isDragging) {
                    setIsDragging(false);
                  }
                }}
                style={{
                  userSelect: "none",
                  overflowX: "auto",
                  overflowY: "hidden",
                }}
              >
                <div className="flex gap-7" style={{ width: "max-content" }}>
                  {section.items.map((img, i) => (
                    <div key={i} className="image-card group">
                      <div className="relative overflow-hidden">
                        <Image
                          src={img}
                          alt={section.names[i]}
                          width={400}
                          height={550}
                          className="w-full h-[440px] object-cover"
                          draggable={false}
                          priority={index === 0 && i < 3}
                        />

                        {/* Clean Hover Overlay - Single Background */}
                        <div className="image-overlay">
                          <span className="product-name">
                            {section.names[i]}
                          </span>
                          <button
                            className="view-btn"
                            style={{ cursor: "pointer" }}
                            onMouseEnter={() => setIsHoveringImage(false)}
                            onMouseLeave={() => setIsHoveringImage(true)}
                          >
                            DISCOVER
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Featured Banner */}
      <div className="relative py-24 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/jewellery/img4.png"
            alt="Featured Collection"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 text-left">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-[#C4A77D] tracking-[0.3em] text-xs font-['Cormorant_Garamond'] uppercase">
              Bespoke Collection
            </span>
            <h2 className="font-['Playfair_Display'] text-5xl md:text-6xl text-white font-normal tracking-wide mt-4 leading-tight">
              Custom Creations
            </h2>
            <div className="w-16 h-px bg-[#C4A77D] mt-6 mb-6" />
            <p className="text-white/60 font-['Cormorant_Garamond'] text-lg max-w-md font-light">
              Experience personalized luxury with our master craftsmen. Each
              piece is meticulously crafted to your unique vision.
            </p>
            <Link href={"/contact"}>
              <button
                className="mt-8 px-10 py-3 border border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-500 font-['Cormorant_Garamond'] text-sm tracking-[0.2em] font-light"
                style={{ cursor: "pointer" }}
              >
                INQUIRE NOW
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
