"use client";

const FONT_STYLE = {
  heading: "font-[Playfair_Display]",
  body: "font-sans",
  weight: "font-medium",
};

const Footer = () => {
  return (
    <footer className="w-full bg-[#faf8f5] border-t border-gray-200">
      
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* BRAND */}
          <div>
            <h2 className={`text-2xl text-black ${FONT_STYLE.heading} ${FONT_STYLE.weight} mb-4`}>
              SARAVANAA
            </h2>
            <p className={`text-gray-600 text-sm leading-relaxed ${FONT_STYLE.body}`}>
              We bring you affordable fashion and trusted gold jewellery
              designed for everyday elegance and festive occasions.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {["Home", "About", "Collections", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-black transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CATEGORIES */}
          <div>
            <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-4">
              Categories
            </h3>
            <ul className="space-y-2 text-sm">
              {["Men", "Women", "Kids", "Jewellery"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-black transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-4">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>Usilampatti, Tamil Nadu</li>
              <li>+91 98765 43210</li>
              <li>info@yourbrand.com</li>
            </ul>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-200 my-8"></div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          
          <p>© {new Date().getFullYear()} YourBrand. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-black transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-black transition">
              Terms
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;