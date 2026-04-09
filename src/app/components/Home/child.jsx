"use client";

import { useState, useEffect } from "react";

const FONT_STYLE = {
  heading: "font-[Playfair_Display]",
  body: "font-sans",
  weight: "font-medium",
};

const CHILD_WEAR_CONFIG = {
  sectionTitle: "Kids' Collection",
  sectionSubtitle: "Adorable fashion for your little ones",
  images: [
    {
      id: 1,
      src: "/child1.jpg",
      alt: "Kids Formal Wear",
      title: "Little Prince Suit",
      category: "Formal Wear",
      price: "$89",
      rating: 4.8,
      age: "2-8 Years",
    },
    {
      id: 2,
      src: "/child2.jpg",
      alt: "Kids Party Dress",
      title: "Princess Gown",
      category: "Party Wear",
      price: "$79",
      rating: 4.9,
      age: "2-10 Years",
    },
    {
      id: 3,
      src: "/child3.jpg",
      alt: "Kids Casual Wear",
      title: "Comfy Play Set",
      category: "Casual Wear",
      price: "$49",
      rating: 4.7,
      age: "1-8 Years",
    },
  ],
};

const ChildWear = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-full bg-gradient-to-br from-[#fef9f0] to-[#fdf5e6] py-16 md:py-24">
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
          <div
            className={`transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="text-pink-500 text-sm tracking-[0.2em] uppercase mb-2 inline-block">
              🧸 For Little Stars
            </span>
          </div>
          
          <h2
            className={`text-4xl text-black md:text-5xl ${FONT_STYLE.heading} ${FONT_STYLE.weight} mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100" : "opacity-0 translate-y-6"
            }`}
          >
            {CHILD_WEAR_CONFIG.sectionTitle}
          </h2>

          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-[1px] bg-pink-300"></div>
            <div className="w-24 h-[2px] bg-pink-500"></div>
            <div className="w-10 h-[1px] bg-pink-300"></div>
          </div>

          <p
            className={`text-gray-500 max-w-xl mx-auto ${FONT_STYLE.body} transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100" : "opacity-0 translate-y-6"
            }`}
          >
            {CHILD_WEAR_CONFIG.sectionSubtitle}
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {CHILD_WEAR_CONFIG.images.map((item, index) => (
            <div
              key={item.id}
              className={`group transition-all duration-700 ${
                isVisible ? "opacity-100" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${200 + index * 120}ms` }}
            >

              {/* IMAGE CARD */}
              <div className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-500">

                {/* IMAGE */}
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-[420px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* KIDS BADGE */}
                <div className="absolute top-4 left-4 bg-pink-500/90 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full font-semibold z-10 flex items-center gap-1">
                  <span>🧸</span> Kids' Special
                </div>

                {/* AGE BADGE */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-pink-600 text-xs px-3 py-1 rounded-full font-semibold z-10">
                  👶 {item.age}
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
                    <div>
                      <span className="text-xl font-semibold">{item.price}</span>
                      <span className="text-xs opacity-60 ml-1 line-through">$129</span>
                    </div>
                    <button className="text-sm border-b border-white/70 hover:border-white transition pb-0.5">
                      Shop Now →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SHOP ALL BUTTON */}
        <div className="text-center mt-14">
          <button className="px-10 py-3.5 border-2 border-pink-500 text-pink-600 hover:bg-pink-500 hover:text-white transition-all duration-300 text-sm tracking-wider uppercase font-semibold rounded-full">
            Explore Kids' Collection 🧸
          </button>
        </div>
      
      </div>
    </section>
  );
};

export default ChildWear;