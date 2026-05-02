"use client";
import Link from "next/link";

const FONT_STYLE = {
  heading: "font-[Playfair_Display]",
  body: "font-sans",
  weight: "font-medium",
};

const Footer = () => {
  return (
    <footer className="w-full bg-[#faf8f5] border-t border-gray-200">
      {" "}
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-12 md:py-16">
        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* BRAND */}
          <div className="space-y-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <img
                src="/logo2.png"
                alt="SARAVANAA Logo"
                className="h-14 w-14 object-contain"
              />
              <h2
                className={`text-2xl text-black ${FONT_STYLE.heading} ${FONT_STYLE.weight}`}
              >
                SRI SARAVANA
              </h2>
            </div>

            <p className="text-black text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              We bring you affordable fashion and trusted gold jewellery
              designed for everyday elegance and festive occasions.
            </p>
          </div>

          {/* QUICK LINKS + CATEGORIES */}
          <div className="col-span-1 sm:col-span-2">
            <div className="grid grid-cols-2 gap-8 text-center md:text-left">
              {/* QUICK LINKS */}
              <div>
                <h3 className="text-sm uppercase tracking-wider text-black mb-4">
                  Quick Links
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="/"
                      className="text-black hover:opacity-70 transition"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-black hover:opacity-70 transition"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* CATEGORIES */}
              <div>
                <h3 className="text-sm uppercase tracking-wider text-black mb-4">
                  Categories
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/mens" className="text-black hover:opacity-70">
                      Men
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/womens"
                      className="text-black hover:opacity-70"
                    >
                      Women
                    </Link>
                  </li>
                  <li>
                    <Link href="/kids" className="text-black hover:opacity-70">
                      Kids
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/jewellery"
                      className="text-black hover:opacity-70"
                    >
                      Jewellery
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CONTACT */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-sm uppercase tracking-wider text-black">
              Contact
            </h3>

            <ul className="space-y-2 text-sm text-black leading-relaxed">
              <li>94/95 main bajar, Theni road usilampatti,Pincode-625532</li>
              <li>Srisaravanagarmentsandjwelles@gmail.com</li>
              <li>kandhasamy2037@gmail.com</li>
              <li>+91 9090202037</li>
              <li>+91 9443052199</li>
            </ul>
          </div>
        </div>
      </div>
      {/* BOTTOM */}
      <div className="border-t border-gray-200"></div>
      <div className="flex justify-center items-center text-sm text-black py-4">
        <p>© {new Date().getFullYear()} SRI SARAVANA. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
