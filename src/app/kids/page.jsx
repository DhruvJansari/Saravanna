// app/kids/page.jsx
"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function KidsCollection() {
  // All kids' wear collections - different types of clothing and accessories
  const sections = [
    {
      title: "Little Royals",
      description:
        "Exquisite formal wear for your little ones, perfect for weddings, parties, and special occasions.",
      category: "Formal Wear",
      items: [
        "https://i.pinimg.com/1200x/97/1c/b5/971cb57b06a3d45a1ccfe4d4afda876a.jpg",
        "https://i.pinimg.com/1200x/07/65/1c/07651cfed20e86a1e1941e655b9b0242.jpg",
        "https://i.pinimg.com/1200x/6a/c3/dd/6ac3dda76f47f801e3b06df82589facb.jpg",
        "https://i.pinimg.com/1200x/bc/b3/93/bcb3930ae142a88efe6affdfcad72d4e.jpg",
        "https://i.pinimg.com/1200x/dd/c3/35/ddc335afabd1b60c8794e0fa0e791341.jpg",
      ],
      names: [
        "Mini Tuxedo Set",
        "Velvet Blazer",
        "Princess Gown",
        "Silk Bow Dress",
        "Formal Suit Set",
      ],
    },
    {
      title: "Playful Comfort",
      description:
        "Soft, breathable fabrics designed for maximum comfort during playtime and daily adventures.",
      category: "Casual Wear",
      items: [
        "https://i.pinimg.com/736x/ab/eb/d6/abebd66d7a7984919e55824f9cbe8efe.jpg",
        "https://i.pinimg.com/736x/a8/92/26/a89226318f967dcbd0cc62a2bc55620e.jpg",
        "https://i.pinimg.com/1200x/72/5f/f8/725ff82937d4205688617e10293aa7c4.jpg",
        "https://i.pinimg.com/1200x/62/3b/9d/623b9dcafdb00022d5a684b96234075b.jpg",
        "https://i.pinimg.com/1200x/af/f0/7a/aff07a2e0d1095d72dfa316de9c29849.jpg",
      ],
      names: [
        "Cotton Romper",
        "Denim Overalls",
        "Striped Tee Set",
        "Printed Leggings",
        "Hoodie Jumpsuit",
      ],
    },
    {
      title: "Outerwear",
      description:
        "Cozy and stylish jackets and coats to keep your little ones warm during colder months.",
      category: "Outerwear",
      items: [
        "https://i.pinimg.com/1200x/6e/6d/6c/6e6d6c0e4d2129d6e0d4b3d509e9c15c.jpg",
        "https://i.pinimg.com/1200x/37/17/cc/3717cca156e0268633263e1f514efe05.jpg",
        "https://i.pinimg.com/1200x/ef/42/b7/ef42b714aab6a12a9727415876b267c5.jpg",
        "https://i.pinimg.com/1200x/e3/85/fd/e385fd890f709a8dead992763ef78c79.jpg",
        "https://i.pinimg.com/1200x/cc/13/d7/cc13d7d79fc5e659817e11625c208019.jpg",
      ],
      names: [
        "Quilted Puffer Jacket",
        "Wool Peacoat",
        "Raincoat Set",
        "Fleece Zip-Up",
        "Denim Jacket",
      ],
    },
    {
      title: "Party Dresses",
      description:
        "Beautiful dresses for birthday parties, family gatherings, and festive celebrations.",
      category: "Party Wear",
      items: [
        "https://i.pinimg.com/1200x/0d/38/88/0d3888d2fb0b1627bc3ec5813485a983.jpg",
        "https://i.pinimg.com/1200x/5f/11/9e/5f119e6ea1c404b8a56baa9b0ad6f75f.jpg",
        "https://i.pinimg.com/736x/3d/1d/66/3d1d66de1ab12a72c4f98fcb4a872e28.jpg",
        "https://i.pinimg.com/1200x/79/d6/a6/79d6a6edc5f9cde9a837f204468a5cca.jpg",
        "https://i.pinimg.com/1200x/54/4f/a5/544fa5ec2349c33328ea44256cc6a71c.jpg",
      ],
      names: [
        "Tulle Tutu Dress",
        "Floral Print Dress",
        "Sparkle Sequin Gown",
        "Lace Trim Dress",
        "Satin Bow Dress",
      ],
    },
    {
      title: "Footwear",
      description:
        "Comfortable and durable shoes that support growing feet while keeping style in mind.",
      category: "Footwear",
      items: [
        "https://i.pinimg.com/1200x/ec/ba/21/ecba2174a7b213f462bad9c7b84bc5f3.jpg",
        "https://i.pinimg.com/1200x/7a/12/06/7a1206eea2fec0d2f9c85b2944c7ed45.jpg",
        "https://i.pinimg.com/736x/bc/67/f1/bc67f17bfb8e5dd178207d9209640d61.jpg",
        "https://i.pinimg.com/1200x/9f/a7/89/9fa789b1a04783830bb3dd024f361fab.jpg",
        "https://i.pinimg.com/736x/30/21/44/3021443bf3af62181b69f7660a7947d3.jpg",
      ],
      names: [
        "Leather Sneakers",
        "Patent Leather Shoes",
        "Velcro Sandals",
        "Ankle Boots",
        "Ballet Flats",
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

      {/* Hero Section - Multiple Children with Different Outfits */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Cinematic Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70 z-10" />

        {/* ✅ Responsive Image Grid */}
        <div className="absolute inset-0 z-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {/* Child 1 */}
          <div className="relative overflow-hidden">
            <Image
              src="https://i.pinimg.com/736x/9a/34/46/9a34463c9fd974ad167823f995ee8483.jpg"
              alt="Child in formal wear"
              fill
              className="object-cover object-center scale-110 animate-zoomSlow"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />
          </div>

          {/* Child 2 */}
          <div className="relative overflow-hidden hidden sm:block">
            <Image
              src="https://i.pinimg.com/736x/70/95/49/7095494380a462f0b2bef7b0fe4097be.jpg"
              alt="Child in casual outfit"
              fill
              className="object-cover object-center scale-110 animate-zoomSlow2"
              priority
            />
            <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />
          </div>

          {/* Child 3 */}
          <div className="relative overflow-hidden hidden md:block">
            <Image
              src="https://i.pinimg.com/1200x/65/d8/d0/65d8d0e6f917aa510a10516803eb6dd0.jpg"
              alt="Child in party dress"
              fill
              className="object-cover object-center scale-110 animate-zoomSlow3"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-l from-black/50 via-black/20 to-transparent" />
          </div>
        </div>

        {/* ✅ Content */}
        <div className="relative z-20 text-center px-4 sm:px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-[34px] sm:text-[52px] md:text-[90px] lg:text-[120px] font-['Playfair_Display'] text-white leading-[1] tracking-tight">
              Kids'
              <br />
              Collection
            </h1>
          </motion.div>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "70px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-px bg-white/40 mx-auto mt-5"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-white/70 mt-5 font-['Cormorant_Garamond'] text-[10px] sm:text-sm tracking-[0.25em]"
          >
            PLAYFUL STYLE • TIMELESS ELEGANCE
          </motion.p>

          {/* CTA */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-8 sm:mt-10 px-6 sm:px-10 py-2.5 sm:py-3 border border-white/40 text-white text-[10px] sm:text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-500 font-['Cormorant_Garamond']"
          >
            Explore Collection
          </motion.button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-6 py-24">
        <div className="space-y-40">
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
      <div className="relative py-28 mt-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://i.pinimg.com/736x/eb/c9/fe/ebc9fe55096d7b69cfbf59290bd59e77.jpg"
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
              Mini Couture
            </h2>
            <div className="w-16 h-px bg-[#C4A77D] mt-6 mb-6" />
            <p className="text-white/60 font-['Cormorant_Garamond'] text-lg max-w-md font-light">
              Experience personalized craftsmanship with our master designers.
              Each piece is meticulously crafted for your little one.
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
