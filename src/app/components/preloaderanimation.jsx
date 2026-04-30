const transitions = {
    // 1. Curtain Close/Open Effect
    curtain: (
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "#000000",
          zIndex: 99999,
          transformOrigin: "left",
        }}
      >
        <div style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          textAlign: "center",
          fontFamily: playfair.className,
        }}>
          <motion.div
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            style={{ fontSize: "24px", letterSpacing: "4px" }}
          >
            {Math.floor(progress)}%
          </motion.div>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: progress * 2 }}
            style={{
              height: "2px",
              background: "white",
              marginTop: "20px",
              transition: "width 0.1s linear"
            }}
          />
        </div>
      </motion.div>
    ),

    // 2. Circle Reveal Effect
    circleReveal: (
      <motion.div
        initial={{ clipPath: "circle(0% at 50% 50%)" }}
        animate={{ clipPath: "circle(100% at 50% 50%)" }}
        exit={{ clipPath: "circle(0% at 50% 50%)" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "#0a0a0a",
          zIndex: 99999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          style={{
            width: "80px",
            height: "80px",
            border: "2px solid rgba(255,255,255,0.2)",
            borderTop: "2px solid #ffffff",
            borderRadius: "50%",
          }}
        />
      </motion.div>
    ),

    // 3. Slide Door Effect
    slideDoor: (
      <>
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "50%",
            height: "100%",
            backgroundColor: "#000000",
            zIndex: 99999,
          }}
        />
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{
            position: "fixed",
            top: 0,
            right: 0,
            width: "50%",
            height: "100%",
            backgroundColor: "#000000",
            zIndex: 99999,
          }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            zIndex: 100000,
            fontFamily: playfair.className,
            textAlign: "center",
          }}
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.6, repeat: Infinity }}
          >
            ✨
          </motion.div>
        </motion.div>
      </>
    ),

    // 4. Pixel Fade Effect
    pixelFade: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "#000000",
          zIndex: 99999,
          display: "grid",
          gridTemplateColumns: "repeat(20, 1fr)",
          gridTemplateRows: "repeat(20, 1fr)",
        }}
      >
        {Array.from({ length: 400 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: Math.random() * 0.5, duration: 0.3 }}
            style={{
              backgroundColor: "#ffffff",
              opacity: 0.1,
              margin: "1px",
            }}
          />
        ))}
      </motion.div>
    ),

    // 5. Spiral Swirl Effect
    spiralSwirl: (
      <motion.div
        initial={{ rotate: 0, scale: 0 }}
        animate={{ rotate: 360, scale: 20 }}
        exit={{ rotate: 0, scale: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          width: "100px",
          height: "100px",
          marginLeft: "-50px",
          marginTop: "-50px",
          background: "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
          borderRadius: "50%",
          zIndex: 99999,
        }}
      />
    ),

    // 6. Glitch Effect
    glitch: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "#000000",
          zIndex: 99999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 0.4,
              delay: i * 0.1,
              repeat: Infinity,
              repeatDelay: 0.1,
            }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: `${33}%`,
              backgroundColor: i === 0 ? "#ff000033" : i === 1 ? "#00ff0033" : "#0000ff33",
              transform: `translateY(${i * 33}%)`,
            }}
          />
        ))}
        <motion.div
          animate={{ opacity: [1, 0, 1, 0, 1] }}
          transition={{ duration: 0.3, repeat: 5 }}
          style={{
            color: "white",
            fontSize: "24px",
            fontFamily: "monospace",
            zIndex: 100000,
          }}
        >
          LOADING...
        </motion.div>
      </motion.div>
    ),

    // 7. ✨ Star Burst Effect
    starBurst: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "#000000",
          zIndex: 99999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, x: 0, y: 0, rotate: 0 }}
            animate={{
              scale: [0, 1, 0],
              x: [0, (Math.random() - 0.5) * 500],
              y: [0, (Math.random() - 0.5) * 500],
              rotate: [0, Math.random() * 360],
            }}
            transition={{ duration: 0.8, delay: Math.random() * 0.3 }}
            style={{
              position: "absolute",
              width: "4px",
              height: "4px",
              backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`,
              borderRadius: "50%",
            }}
          />
        ))}
        <motion.div
          animate={{ scale: [0, 1.5, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: "60px",
            position: "absolute",
          }}
        >
          ⭐
        </motion.div>
      </motion.div>
    ),

    // 8. 🌊 Wave Effect
    wave: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "#000000",
          zIndex: 99999,
          overflow: "hidden",
        }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "-100%", opacity: [0, 0.5, 0] }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: `${100 / 5}%`,
              background: `linear-gradient(180deg, rgba(255,255,255,${0.3 - i * 0.05}), transparent)`,
              transform: `skewY(${i * 5}deg)`,
            }}
          />
        ))}
      </motion.div>
    ),

    // 9. 🔥 Fire Effect
    fire: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "#000000",
          zIndex: 99999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: "100%", scale: 0 }}
            animate={{ y: "-100%", scale: [0, 1, 0] }}
            transition={{ duration: 0.6, delay: Math.random() * 0.5 }}
            style={{
              position: "absolute",
              bottom: 0,
              left: `${Math.random() * 100}%`,
              width: "20px",
              height: "20px",
              background: `radial-gradient(circle, #ff4500, #ff0000)`,
              borderRadius: "50%",
              filter: "blur(4px)",
            }}
          />
        ))}
        <motion.div
          animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 0] }}
          transition={{ duration: 0.6 }}
          style={{ fontSize: "40px" }}
        >
          🔥
        </motion.div>
      </motion.div>
    ),

    // 10. 💎 Crystal Shard Effect
    crystalShard: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "#0a0a2a",
          zIndex: 99999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, rotate: i * 45 }}
            animate={{ scale: [0, 2, 0], rotate: i * 45 }}
            transition={{ duration: 0.8, delay: i * 0.05 }}
            style={{
              position: "absolute",
              width: "100px",
              height: "100px",
              background: `linear-gradient(135deg, #667eea, #764ba2)`,
              clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
              opacity: 0.5,
            }}
          />
        ))}
      </motion.div>
    ),

    // 11. 🎨 Paint Splash Effect
    paintSplash: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "#ffffff",
          zIndex: 99999,
          overflow: "hidden",
        }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, x: "50%", y: "50%" }}
            animate={{
              scale: [0, Math.random() * 2],
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
            }}
            transition={{ duration: 0.6, delay: Math.random() * 0.3 }}
            style={{
              position: "absolute",
              width: `${Math.random() * 50 + 20}px`,
              height: `${Math.random() * 50 + 20}px`,
              background: `hsl(${Math.random() * 360}, 80%, 60%)`,
              borderRadius: "50%",
              filter: "blur(8px)",
            }}
          />
        ))}
      </motion.div>
    ),

    // 12. 🌈 Rainbow Effect
    rainbow: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "#000000",
          zIndex: 99999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {[...Array(7)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: [0, 1, 0] }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            style={{
              position: "absolute",
              width: "80%",
              height: "20px",
              background: `hsl(${i * 60}, 100%, 50%)`,
              transform: `translateY(${(i - 3) * 30}px)`,
              borderRadius: "10px",
            }}
          />
        ))}
      </motion.div>
    ),

    // 13. 🎪 Portal Effect
    portal: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "#000000",
          zIndex: 99999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: [0, 5, 0], rotate: 360 }}
          transition={{ duration: 0.8 }}
          style={{
            width: "200px",
            height: "200px",
            background: "radial-gradient(circle, #667eea, #764ba2, transparent)",
            borderRadius: "50%",
          }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.6 }}
          style={{
            position: "absolute",
            fontSize: "50px",
          }}
        >
          🌀
        </motion.div>
      </motion.div>
    ),

    // 14. ⚡ Lightning Effect
    lightning: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "#000000",
          zIndex: 99999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 1, 0] }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            style={{
              position: "absolute",
              width: "2px",
              height: "200px",
              background: "linear-gradient(180deg, #fff, #ffff00)",
              transform: `rotate(${i * 30}deg)`,
            }}
          />
        ))}
        <motion.div
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.2, repeat: 3 }}
          style={{
            position: "absolute",
            fontSize: "40px",
          }}
        >
          ⚡
        </motion.div>
      </motion.div>
    ),

    // 15. 🎭 Mask Effect
    maskEffect: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "#000000",
          zIndex: 99999,
        }}
      >
        <motion.div
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.6 }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "linear-gradient(135deg, #667eea, #764ba2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.6, repeat: Infinity }}
            style={{ fontSize: "60px" }}
          >
            🎭
          </motion.div>
        </motion.div>
      </motion.div>
    ),

    // 16. 🌟 Galaxy Effect
    galaxy: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "radial-gradient(ellipse at center, #0a0a2a 0%, #000000 100%)",
          zIndex: 99999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, x: 0, y: 0 }}
            animate={{
              scale: [0, Math.random()],
              x: [0, (Math.random() - 0.5) * 800],
              y: [0, (Math.random() - 0.5) * 800],
            }}
            transition={{ duration: 0.8, delay: Math.random() * 0.5 }}
            style={{
              position: "absolute",
              width: "2px",
              height: "2px",
              backgroundColor: `rgba(255,255,255,${Math.random()})`,
              borderRadius: "50%",
            }}
          />
        ))}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            width: "150px",
            height: "150px",
            background: "radial-gradient(circle, rgba(255,255,255,0.2), transparent)",
            borderRadius: "50%",
          }}
        />
      </motion.div>
    ),
  };