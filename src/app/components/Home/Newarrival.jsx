"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const FONT_STYLE = {
  heading: "font-[Playfair_Display]",
  body: "font-sans",
  weight: "font-medium",
};

const NEW_ARRIVALS_CONFIG = {
  sectionTitle: "New Arrivals",
  sectionSubtitle: "Discover our latest collection",
  images: [
    {
      id: 1,
      src: "https://i.pinimg.com/736x/71/5e/2b/715e2b633187ddc5d112d222eb61e78d.jpg",
      alt: "Summer Collection",
      title: "Summer Collection",
      category: "Women's Wear",
    },
    {
      id: 2,
      src: "https://i.pinimg.com/736x/44/66/05/446605bbe53fdcf8c733fb4ad2e9aa3d.jpg",
      alt: "Gold Collection",
      title: "Gold Collection",
      category: "Jewellery",
    },
    {
      id: 3,
      src: "https://i.pinimg.com/736x/c8/2b/36/c82b360907c51c41725a23d3362a40fa.jpg",
      alt: "Ethnic Collection",
      title: "Ethnic Collection",
      category: "Festival Wear",
    },
  ],
};

const NewArrivals = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-full bg-[#faf8f5] py-16 md:py-24">
      {/* Font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap');
        .font-\\[Playfair_Display\\] {
          font-family: 'Playfair Display', serif;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* HEADER */}
        <div className="text-center mb-14 md:mb-20">
          <h2
            className={`text-4xl text-black md:text-5xl ${FONT_STYLE.heading} ${FONT_STYLE.weight} mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100" : "opacity-0 translate-y-6"
            }`}
          >
            {NEW_ARRIVALS_CONFIG.sectionTitle}
          </h2>

          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-[1px] bg-gray-300"></div>
            <div className="w-24 h-[2px] bg-black"></div>
            <div className="w-10 h-[1px] bg-gray-300"></div>
          </div>

          <p
            className={`text-gray-500 max-w-xl mx-auto ${FONT_STYLE.body} transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100" : "opacity-0 translate-y-6"
            }`}
          >
            {NEW_ARRIVALS_CONFIG.sectionSubtitle}
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {NEW_ARRIVALS_CONFIG.images.map((image, index) => (
            <div
              key={image.id}
              className={`group transition-all duration-700 ${
                isVisible ? "opacity-100" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${200 + index * 120}ms` }}
            >

              {/* IMAGE CARD */}
              <div className="relative overflow-hidden rounded-2xl shadow-sm">

                {/* IMAGE */}
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-[420px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* GRADIENT OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-70 group-hover:opacity-90 transition"></div>

                {/* CONTENT */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">

                  <p className="text-xs tracking-widest uppercase opacity-80 mb-1">
                    {image.category}
                  </p>

                  <h3
                    className={`text-xl ${FONT_STYLE.heading} ${FONT_STYLE.weight}`}
                  >
                    {image.title}
                  </h3>

                  {/* <button className="mt-3 text-sm border-b border-white/70 hover:border-white transition">
                    Shop Now →
                  </button> */}
                </div>


              </div>
            </div>
          ))}
        </div>
<div className="text-center mt-14">
  <Link href="/womens">
    <button className="px-10 py-3.5 border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 text-sm tracking-wider uppercase font-semibold">
      Explore Collection
    </button>
  </Link>
</div>
      
      </div>
    </section>
  );
};

export default NewArrivals;