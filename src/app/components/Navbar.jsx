"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Playfair_Display } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Jewellery", href: "/jewellery" },
  { name: "Men", href: "/mens" },
  { name: "Women", href: "/womens" },
  { name: "Kids", href: "/kids" },
  { name: "Contact", href: "/contact" },
];

// ─────────────────────────────────────────────────────────────────────────────
// TIMING - Total 2.2 seconds animation
//  0.0s → bars start closing
//  0.6s → bars fully closed
//  0.6s → progress starts
//  1.6s → progress reaches 100%
//  1.6s → bars start opening
//  2.2s → bars fully open, curtain unmounts
// ─────────────────────────────────────────────────────────────────────────────
const CLOSE_DUR = 0.6; // Bars close faster
const LINE_START = 0.6; // Progress starts when bars meet
const LINE_DUR = 1.0; // Progress fills over 1 second
const OPEN_START = 1.6; // Bars start opening after progress
const OPEN_DUR = 0.6; // Bars open faster
const TOTAL = 2.2; // Total animation time

const NAVIGATE_AT_MS = (LINE_START + 0.05) * 1000; // navigate just after bars close
const UNMOUNT_AT_MS = TOTAL * 1000 + 150; // unmount after all done

// ─────────────────────────────────────────────────────────────────────────────
// Percentage counter: animates 100→0 during the LINE window (reversed)
const PercentCounter = ({ startMs, durationMs }) => {
  const [pct, setPct] = useState(100);
  useEffect(() => {
    const origin = performance.now() + startMs;
    let raf;
    const tick = (now) => {
      const elapsed = now - origin;
      if (elapsed < 0) {
        raf = requestAnimationFrame(tick);
        return;
      }
      const p = Math.max(0, Math.round(100 - (elapsed / durationMs) * 100));
      setPct(p);
      if (p > 0) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [startMs, durationMs]);
  return <span>{pct}%</span>;
};

// ─────────────────────────────────────────────────────────────────────────────
// The curtain — mounts ONCE, runs the full sequence internally
const ScreenTransition = ({ onNavigate, onDone }) => {
  useEffect(() => {
    const t1 = setTimeout(onNavigate, NAVIGATE_AT_MS);
    const t2 = setTimeout(onDone, UNMOUNT_AT_MS);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onNavigate, onDone]);

  const T = TOTAL;

  // normalised time helpers
  const t = (s) => s / T;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {/* ── TOP BAR ────────────────────────────────────────────────────── */}
      <motion.div
        initial={{ y: "-100%" }}
        animate={{
          y: ["-100%", "0%", "0%", "-100%"],
        }}
        transition={{
          duration: T,
          times: [0, t(CLOSE_DUR), t(OPEN_START), 1],
          ease: ["easeInOut", "linear", "easeInOut"],
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "50%",
          backgroundColor: "#ffffff",
          zIndex: 1,
        }}
      />

      {/* ── BOTTOM BAR ─────────────────────────────────────────────────── */}
      <motion.div
        initial={{ y: "100%" }}
        animate={{
          y: ["100%", "0%", "0%", "100%"],
        }}
        transition={{
          duration: T,
          times: [0, t(CLOSE_DUR), t(OPEN_START), 1],
          ease: ["easeInOut", "linear", "easeInOut"],
        }}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "50%",
          backgroundColor: "#ffffff",
          zIndex: 1,
        }}
      />

      {/* ── PROGRESS TRACK (gray line background) ───────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 0, 1, 1, 0],
        }}
        transition={{
          duration: T,
          times: [
            0,
            t(LINE_START),
            t(LINE_START + 0.05),
            t(OPEN_START),
            t(OPEN_START + 0.1),
          ],
          ease: "linear",
        }}
        style={{
          position: "absolute",
          top: "50%",
          left: "15%",
          right: "15%",
          height: "2px",
          backgroundColor: "rgba(0,0,0,0.1)",
          transform: "translateY(-50%)",
          zIndex: 2,
        }}
      />
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────────
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showCurtain, setShowCurtain] = useState(false);
  const pendingHref = useRef(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const handleNavigation = (e, href) => {
    e.preventDefault();
    if (pathname === href) {
      setIsMenuOpen(false);
      return;
    }
    setIsMenuOpen(false);
    pendingHref.current = href;
    setShowCurtain(true);
  };

  return (
    <>
      {showCurtain && (
        <ScreenTransition
          onNavigate={() => {
            if (pendingHref.current) {
              router.push(pendingHref.current);
            }
          }}
          onDone={() => {
            setShowCurtain(false);
            pendingHref.current = null;
          }}
        />
      )}

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-lg shadow-sm border-b border-gray-100 py-3"
            : "bg-white py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              onClick={(e) => handleNavigation(e, "/")}
              className="flex items-center gap-2"
            >
              {/* Logo Image */}
              <div className="relative w-[110px] md:w-[180px] h-[50px]">
                <Image
                  src="/logo3.png"
                  alt="Logo"
                  fill
                  className="object-contain mix-blend-multiply"
                  priority
                />
              </div>

              {/* Mobile Text Only */}
              <span className="block font-['Playfair_Display'] text-lg text-black font-semibold tracking-wide translate-x-2 xs:-translate-x-15 sm:translate-x-40 md:-translate-x-10 lg:-translate-x-12">
                SRI SARAVANA
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
              <div className="flex items-center gap-1 bg-gray-100 rounded-full px-2 py-1.5 shadow-sm">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavigation(e, link.href)}
                      className={`${playfair.className} font-medium px-4 py-2 text-sm lg:text-base rounded-full transition-all duration-300 whitespace-nowrap ${
                        isActive
                          ? "bg-black text-white shadow-md"
                          : "text-gray-800 hover:text-black hover:bg-gray-200"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Right spacer */}
            <div className="hidden md:block w-[130px] md:w-[180px]" />

            {/* Mobile toggle */}
            <button
              onClick={() => setIsMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              className="md:hidden p-2 rounded-lg text-black hover:bg-gray-100 transition"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                key="mobile-menu"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.28, ease: "easeInOut" }}
                className="md:hidden overflow-hidden"
              >
                <div className="bg-white rounded-2xl shadow-md p-4 space-y-2 border mt-4">
                  {NAV_LINKS.map((link, i) => {
                    const isActive = pathname === link.href;
                    return (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.045, duration: 0.22 }}
                      >
                        <Link
                          href={link.href}
                          onClick={(e) => handleNavigation(e, link.href)}
                          className={`${playfair.className} font-medium block px-4 py-3 rounded-xl text-base transition ${
                            isActive
                              ? "bg-black text-white"
                              : "text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          {link.name}
                        </Link>
                      </motion.div>
                    );
                  })}
                  <motion.button
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: NAV_LINKS.length * 0.045 + 0.05 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full mt-2 py-2.5 rounded-xl bg-black text-white hover:bg-gray-900 transition font-medium"
                  >
                    Shop Now
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      <div className="h-[65px] md:h-[75px]" />
    </>
  );
};

export default Navbar;
