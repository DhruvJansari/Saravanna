// app/men/page.jsx
"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function MensCollection() {
  // All men's wear collections - different types of clothing and accessories
  const sections = [
    {
      title: "Premium Suits",
      description:
        "Experience the pinnacle of tailoring with our handcrafted suits, designed for the discerning gentleman.",
      category: "Clothing",
      items: [
        "https://images.unsplash.com/photo-1592878897400-43fb1f1cc324?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1585412459212-8def26f7e84c?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1740710748146-a15d840d6f40?q=80&w=798&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://i.pinimg.com/1200x/aa/2a/ac/aa2aac870c53989e8ae89a0855e1c41f.jpg",
      ],
      names: [
        "Midnight Tuxedo",
        "Charcoal Wool Suit",
        "Navy Blazer",
        "Italian Silk Suit",
        "Classic Pinstripe",
      ],
    },
    {
      title: "Casual Shirts",
      description:
        "Effortless elegance meets comfort in our collection of premium casual shirts.",
      category: "Clothing",
      items: [
        "https://i.pinimg.com/1200x/d4/10/a4/d410a4137f357310685fef6b702b0362.jpg",
        "https://i.pinimg.com/736x/5b/bb/a4/5bbba44cabc974f50c831ae23eaa153f.jpg",
        "https://i.pinimg.com/1200x/f9/51/8d/f9518da191c649a6b6ede60ac03e1e12.jpg",
        "https://i.pinimg.com/1200x/2b/02/60/2b0260ac59060d9246e62e01143171a6.jpg",
        "https://i.pinimg.com/1200x/65/7c/3c/657c3c7944c0c0ff3844b44b97b886a6.jpg",
        "/Men/Half-sleev.jpg",
      ],
      names: [
        "Luxury Flannel",
        "Silk Casual",
        "Cotton Poplin",
        "Denim Button Down",
        "Linen Oxford Plain Shirt",
        "Half Sleeve Shirt",
      ],
    },
    {
      title: "Pants",
      description:
        "Impeccably tailored pantsthat define sophistication and comfort.",
      category: "Clothing",
      items: [
        "/Men/jeans.jpg",
        "/Men/formal.jpg",
        "/Men/Cotton.jpg",
        "/Men/Six-pocket.jpg",
        "/Men/Baggie.jpg",
        "/Men/tone.jpg",
      ],
      names: [
        "Jeans Pant",
        "Formal Pant",
        "Cotton Pant",
        "Six Pocket Pant",
        "Baggie Pant",
        "Tone Pant",
      ],
    },
    // {
    //   title: "Casual Bottomwear",
    //   description:
    //     "Everyday comfort with versatile and stylish casual pants for modern wear.",
    //   category: "Clothing",
    //   items: [
    //     "https://i.pinimg.com/1200x/e6/1b/31/e61b31478c28b1c71a9a0496b0ca38e9.jpg",
    //     "https://i.pinimg.com/736x/70/86/79/708679a0c8bfba33e6a838ab94d8edf4.jpg",
    //     "https://i.pinimg.com/1200x/9f/b9/9d/9fb99d01c03a77feba1b4588878a02ed.jpg",
    //     "https://i.pinimg.com/736x/c2/24/2a/c2242a98d8b46cda0c65147031cca87b.jpg",
    //   ],
    //   names: [
    //     "Jeans Pant",
    //     "Cotton Pant",
    //     "Six-Pocket Pant",
    //     "Casual Fit Trousers",
    //   ],
    // },
    {
      title: "T-shirt, Track & Shorts",
      description:
        "Premium Adidas activewear designed for comfort, performance, and everyday style.",
      category: "Sportswear",
      items: [
        "/Men/tishirt.jpg",
        "/Men/Track.jpg",
        "/Men/Shorts.jpg",
        "/Men/Full-Track-Suit.jpg",
      ],
      names: [
        "T-Shirt",
        "Track Pant",
        "Shorts",
        "Full Track Suit",
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
          background: #2c1810;
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

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes slowZoom {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.08);
          }
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

      {/* Hero Section - Multiple Men with Different Outfits */}
      <div className="relative h-[85vh] md:h-screen flex items-center justify-center overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70 z-10" />

        {/* 🔥 RESPONSIVE IMAGE GRID */}
        <div className="absolute inset-0 z-0 grid grid-cols-1 md:grid-cols-3">
          {/* Man 1 (VISIBLE ON MOBILE) */}
          <div className="relative overflow-hidden">
            <Image
              src="https://i.pinimg.com/736x/cf/cd/58/cfcd587d9c9c84fbafa770234e5de8dc.jpg"
              alt="Man in formal suit"
              fill
              className="object-cover object-center scale-105"
              style={{ animation: "slowZoom 20s ease-out forwards" }}
              priority
            />
            <div className="absolute inset-0 bg-black/50 md:bg-gradient-to-r md:from-black/30 md:to-transparent" />
          </div>

          {/* Man 2 (HIDDEN ON MOBILE) */}
          <div className="relative overflow-hidden hidden md:block">
            <Image
              src="https://i.pinimg.com/736x/49/26/06/492606c1f030112d631618ad03edd825.jpg"
              alt="Man in casual outfit"
              fill
              className="object-cover object-center scale-105"
              style={{ animation: "slowZoom 22s ease-out forwards" }}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />
          </div>

          {/* Man 3 (HIDDEN ON MOBILE) */}
          <div className="relative overflow-hidden hidden md:block">
            <Image
              src="https://i.pinimg.com/736x/b4/40/f9/b440f9be151b995d26f07f575fbfc989.jpg"
              alt="Man in leather jacket"
              fill
              className="object-cover object-center scale-105"
              style={{ animation: "slowZoom 18s ease-out forwards" }}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-l from-black/30 to-transparent" />
          </div>
        </div>

        {/* CONTENT */}
        <div className="relative z-20 text-center px-4 sm:px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <h1 className="font-['Playfair_Display'] text-white tracking-wide font-normal leading-[1.05] text-[34px] sm:text-[50px] md:text-8xl lg:text-9xl">
              {/* MOBILE */}
              <span className="block md:hidden">Men's Collection</span>

              {/* DESKTOP */}
              <span className="hidden md:block">
                Men's <br /> Collection
              </span>
            </h1>
          </motion.div>

          {/* LINE */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "70px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-px bg-white/60 mx-auto mt-5 sm:mt-8"
          />

          {/* TEXT */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-white/80 mt-4 sm:mt-6 font-['Cormorant_Garamond']
      text-[11px] sm:text-base tracking-[0.25em] sm:tracking-[0.3em] font-light"
          >
            SOPHISTICATED APPAREL FOR THE MODERN GENTLEMAN
          </motion.p>

          {/* BUTTON */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-6 sm:mt-10 px-6 sm:px-10 py-2.5 sm:py-3
      border border-white/30 text-white
      hover:bg-white/10 hover:border-white/50
      transition-all duration-500
      font-['Cormorant_Garamond']
      text-[11px] sm:text-sm tracking-[0.2em] font-light backdrop-blur-sm"
          >
            EXPLORE COLLECTION
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
              <div className="flex items-start justify-between border-b border-[#2C1810]/10 pb-8">
                <div className="flex-1">
                  <span className="text-xs tracking-[0.3em] text-[#8B7355] font-['Cormorant_Garamond'] uppercase">
                    {section.category}
                  </span>
                  <h2 className="section-title mt-2">{section.title}</h2>
                  <div className="w-12 h-px bg-[#2C1810] mt-5 mb-6" />
                  <p className="section-description max-w-xl">
                    {section.description}
                  </p>
                </div>

                {/* Navigation Arrows */}
                <div className="flex gap-3">
                  <button
                    onClick={() => scrollTo(index, "left")}
                    className="arrow-btn w-12 h-12 rounded-full border border-[#2C1810]/20 flex items-center justify-center text-[#2C1810] hover:bg-[#2C1810] hover:text-white transition-all duration-300"
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
                    className="arrow-btn w-12 h-12 rounded-full border border-[#2C1810]/20 flex items-center justify-center text-[#2C1810] hover:bg-[#2C1810] hover:text-white transition-all duration-300"
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
      <div className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://i.pinimg.com/1200x/32/16/8e/32168e0467f1a6a8e9dbbdc0525d28d4.jpg"
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
              Limited Edition
            </span>
            <h2 className="font-['Playfair_Display'] text-5xl md:text-6xl text-white font-normal tracking-wide mt-4 leading-tight">
              Bespoke Tailoring
            </h2>
            <div className="w-16 h-px bg-[#C4A77D] mt-6 mb-6" />
            <p className="text-white/60 font-['Cormorant_Garamond'] text-lg max-w-md font-light">
              Experience personalized craftsmanship with our master tailors.
              Each piece is meticulously crafted to your exact measurements.
            </p>
            <button
              className="mt-8 px-10 py-3 border border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-500 font-['Cormorant_Garamond'] text-sm tracking-[0.2em] font-light"
              style={{ cursor: "pointer" }}
            >
              INQUIRE NOW
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
