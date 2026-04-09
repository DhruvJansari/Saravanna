"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const FONT_STYLE = {
  heading: "font-[Playfair_Display]",
  body: "font-sans",
  weight: "font-medium",
};

const MENS_WEAR_CONFIG = {
  sectionTitle: "Men's Collection",
  sectionSubtitle: "Elevate your style with our premium menswear",
  images: [
    {
      id: 1,
      src: "https://i.pinimg.com/736x/52/12/77/521277477144a93e97abfc082ead10ae.jpg",
      alt: "Designer Sherwani",
      title: "Classic Sherwani",
      category: "Wedding Wear",
      price: "$499",
      rating: 4.9,
    },
    {
      id: 2,
      src: "https://i.pinimg.com/736x/2c/49/c0/2c49c05eeae85e0906f20a9daeb891c3.jpg",
      alt: "Designer Kurta",
      title: "Embroidered Kurta",
      category: "Festival Wear",
      price: "$199",
      rating: 4.8,
    },
    {
      id: 3,
      src: "https://i.pinimg.com/736x/be/4c/73/be4c73bdc42b64ac966dd8c7d2823708.jpg",
      alt: "Designer Blazer",
      title: "Premium Blazer",
      category: "Formal Wear",
      price: "$349",
      rating: 4.7,
    },
  ],
};

const MensWear = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-full bg-[#f5f3f0] py-16 md:py-24">
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
            {MENS_WEAR_CONFIG.sectionTitle}
          </h2>

          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-[1px] bg-gray-400"></div>
            <div className="w-24 h-[2px] bg-black"></div>
            <div className="w-10 h-[1px] bg-gray-400"></div>
          </div>

          <p
            className={`text-gray-600 max-w-xl mx-auto ${FONT_STYLE.body} transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100" : "opacity-0 translate-y-6"
            }`}
          >
            {MENS_WEAR_CONFIG.sectionSubtitle}
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {MENS_WEAR_CONFIG.images.map((item, index) => (
            <div
              key={item.id}
              className={`group transition-all duration-700 ${
                isVisible ? "opacity-100" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${200 + index * 120}ms` }}
            >

              {/* IMAGE CARD */}
              <div className="relative overflow-hidden rounded-xs shadow-lg">

                {/* IMAGE */}
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-[440px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

              

                {/* GRADIENT OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition"></div>

                {/* CONTENT */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">

                  <div className="flex items-center justify-between mb-1">
                    <p className="text-xs tracking-widest uppercase opacity-80">
                      {item.category}
                    </p>
                 
                  </div>

                  <h3
                    className={`text-xl ${FONT_STYLE.heading} ${FONT_STYLE.weight}`}
                  >
                    {item.title}
                  </h3>

                  <div className="flex items-center justify-between mt-2">
                    {/* <button className="text-sm border-b border-white/70 hover:border-white transition pb-0.5">
                      Shop Now →
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SHOP ALL BUTTON */}
      <div className="text-center mt-14">
  <Link href="/mens">
    <button className="px-10 py-3.5 border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 text-sm tracking-wider uppercase font-semibold">
      Explore Collection
    </button>
  </Link>
</div>
      
      </div>
    </section>
  );
};

export default MensWear;