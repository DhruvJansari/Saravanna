"use client";

import { useEffect, useState } from "react";

// ─── FONT STYLE (UNCHANGED) ─────────────────────────────────────────────
const FONT_STYLE = {
  heading: "font-[Playfair_Display]",
  body: "font-sans",
  weight: "font-medium",
};

const AboutHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="w-full bg-[#f5f5f3] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* FLEX CONTAINER */}
        <div className="flex flex-col md:flex-row items-start gap-10">

          {/* LEFT SIDE (75%) */}
          <div
            className={`w-full md:w-[75%] transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            {/* TOP LINE */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-[1px] bg-amber-500"></div>
              <span className={`text-gray-500 text-sm tracking-wide ${FONT_STYLE.body}`}>
                Since 2021
              </span>
            </div>

            <div className="space-y-10">

              {/* OUR APPROACH */}
              <div>
                <h2
                  className={`text-3xl text-black md:text-4xl lg:text-5xl ${FONT_STYLE.heading} ${FONT_STYLE.weight} mb-3`}
                >
                  Our Approach
                </h2>
                <p
                  className={`text-gray-700 leading-relaxed text-base md:text-lg ${FONT_STYLE.body}`}
                >
                  We provide affordable garments and trusted gold jewellery retail
                  solutions designed to serve families, local customers, and
                  festive shoppers—bridging the gap between fashion needs and
                  reliable jeweller purchases through quality products, fair
                  pricing, and customer-focused retail service.
                </p>
              </div>

              {/* WHO WE ARE */}
              <div>
                <h2
                  className={`text-3xl text-black md:text-4xl lg:text-5xl ${FONT_STYLE.heading} ${FONT_STYLE.weight} mb-3`}
                >
                  Who We Are
                </h2>
                <p
                  className={`text-gray-700 leading-relaxed text-base md:text-lg ${FONT_STYLE.body}`}
                >
                  We are a retail garments and jewellery store serving fashionable
                  clothing and trusted gold jewellery. With over 20 years of
                  industry experience, our business focuses on delivering quality
                  products, fair pricing, and reliable customer service.
                </p>
              </div>

              {/* ESTABLISHED */}
              <div>
                <h2
                  className={`text-3xl text-black md:text-4xl lg:text-5xl ${FONT_STYLE.heading} ${FONT_STYLE.weight} mb-3`}
                >
                  Established
                </h2>
                <p
                  className={`text-gray-700 leading-relaxed text-base md:text-lg ${FONT_STYLE.body}`}
                >
                  Established in 2021 near Usilampatti Bus Stand, our mission is
                  to meet the everyday and festive needs of local customers by
                  offering a wide variety of garments and jewellery under one
                  trusted retail destination.
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE (25%) */}
          <div
            className={`w-full md:w-[25%] transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <img
              src="/dukan.jpg"
              alt="Store"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutHero;