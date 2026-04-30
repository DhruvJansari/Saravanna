"use client";

import { useState, useEffect } from "react";

const FONT_STYLE = {
  heading: "font-[Playfair_Display]",
  body: "font-sans",
  weight: "font-medium",
};

const TRENDING_WEAR_CONFIG = {
  sectionTitle: "Trending Now",
  sectionSubtitle: "Most sought-after styles this season",
  images: [
    {
      id: 1,
      src: "/trending1.jpg",
      alt: "Designer Saree",
      title: "Silk Saree Collection",
      category: "Traditional",
      price: "$299",
      rating: 4.8,
    },
    {
      id: 2,
      src: "/trending2.jpg",
      alt: "Designer Lehenga",
      title: "Embroidered Lehenga",
      category: "Festival Wear",
      price: "$599",
      rating: 4.9,
    },
    {
      id: 3,
      src: "/trending3.jpg",
      alt: "Designer Kurta",
      title: "Cotton Kurta Set",
      category: "Casual",
      price: "$149",
      rating: 4.7,
    },
  ],
};

const TrendingWear = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-full bg-white py-16 md:py-24">
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
            {TRENDING_WEAR_CONFIG.sectionTitle}
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
            {TRENDING_WEAR_CONFIG.sectionSubtitle}
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {TRENDING_WEAR_CONFIG.images.map((item, index) => (
            <div
              key={item.id}
              className={`group transition-all duration-700 ${
                isVisible ? "opacity-100" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${200 + index * 120}ms` }}
            >

              {/* IMAGE CARD */}
              <div className="relative overflow-hidden rounded-2xl shadow-sm">

                {/* IMAGE */}
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-[420px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* HOT TRENDING BADGE */}
                <div className="absolute top-4 left-4 bg-red-500 text-white text-xs px-3 py-1 rounded-full font-semibold z-10">
                  🔥 Trending
                </div>

                {/* GRADIENT OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition"></div>

                {/* CONTENT */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">

                  <div className="flex items-center justify-between mb-1">
                    <p className="text-xs tracking-widest uppercase opacity-80">
                      {item.category}
                    </p>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400 text-xs">★</span>
                      <span className="text-xs opacity-80">{item.rating}</span>
                    </div>
                  </div>

                  <h3
                    className={`text-xl ${FONT_STYLE.heading} ${FONT_STYLE.weight}`}
                  >
                    {item.title}
                  </h3>

                  <div className="flex items-center justify-between mt-2">
                    <span className="text-lg font-semibold">{item.price}</span>
                    <button className="text-sm border-b border-white/70 hover:border-white transition">
                      Shop Now →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* VIEW ALL BUTTON */}
        <div className="text-center mt-14">
          <button className="px-8 py-3 border border-black text-black hover:bg-black hover:text-white transition-all duration-300 text-sm tracking-wider uppercase font-medium">
            View All Trending
          </button>
        </div>
      
      </div>
    </section>
  );
};

export default TrendingWear;