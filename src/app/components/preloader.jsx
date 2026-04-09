"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ onComplete }) {
  const fullText = "SARAVANAA";
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    let start = null;
    let raf;

    const duration = 4200;

    const tick = (t) => {
      if (!start) start = t;
      const elapsed = t - start;

      let p = Math.min(elapsed / duration, 1);

      // 🔥 smooth natural easing
      p = 1 - Math.pow(1 - p, 2.2);

      setProgress(p * 100);

      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setExiting(true), 500);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500&family=Cormorant+Garamond:wght@300;400&display=swap');
      `}</style>

      <AnimatePresence
        mode="wait"
        onExitComplete={() => onComplete && onComplete()}
      >
        {!exiting && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              y: -80,
              filter: "blur(10px)",
              transition: {
                duration: 1.2,
                ease: [0.6, 0, 0.2, 1],
              },
            }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 9999,
              background: "#000",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "56px",
            }}
          >
            {/* 🔥 TEXT (PURE FADE + BLUR REVEAL) */}
            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 400,
                fontSize: "clamp(3rem, 8vw, 5.5rem)",
                letterSpacing: "0.35em",
                color: "#fff",
                display: "flex",
              }}
            >
              {fullText.split("").map((char, i) => {
                const charProgress =
                  progress / 100 * fullText.length - i;

                const visible = Math.max(
                  0,
                  Math.min(1, charProgress)
                );

                return (
                  <motion.span
                    key={i}
                    animate={{
                      opacity: visible,
                      filter: `blur(${(1 - visible) * 6}px)`,
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "linear",
                    }}
                    style={{
                      display: "inline-block",
                    }}
                  >
                    {char}
                  </motion.span>
                );
              })}
            </h1>

            {/* 🔥 PROGRESS BAR */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "14px",
              }}
            >
              <div
                style={{
                  width: "260px",
                  height: "1px",
                  background: "rgba(255,255,255,0.1)",
                  overflow: "hidden",
                }}
              >
                <motion.div
                  style={{
                    height: "100%",
                    width: `${progress}%`,
                    background: "#fff",
                  }}
                />
              </div>

              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 300,
                  color: "rgba(255,255,255,0.35)",
                  fontSize: "0.6rem",
                  letterSpacing: "0.4em",
                }}
              >
                {Math.floor(progress)
                  .toString()
                  .padStart(3, "0")} %
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}