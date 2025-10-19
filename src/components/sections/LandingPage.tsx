"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import React, { useRef } from "react";
import Eye from "../animations/Eye";
import Image from "next/image";
import myPic from "../../assets/images/MyPic.png";
import charminar from "../../assets/images/Charminar.jpg";
import Lottie from "lottie-react";
import wavingHand from "../../assets/animations/handWave.json";
import { colors } from "@/src/lib/colors";
import dynamic from "next/dynamic";

// Disable SSR for this client-only component
const RotatingText = dynamic(() => import("../animations/RotatingText"), {
  ssr: false,
});

const LandingPage = () => {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springX = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 200, damping: 20 });

  const lightX = useMotionValue(0);
  const lightY = useMotionValue(0);
  const opacity = useMotionValue(0);

  const cardRef = useRef(null);

  const handleMouseMove = (e: any) => {
    const card = cardRef.current as any;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateAmountY = ((x - centerX) / centerX) * 1.5;
    const rotateAmountX = -((y - centerY) / centerY) * 1.5;

    rotateX.set(rotateAmountX);
    rotateY.set(rotateAmountY);

    lightX.set(x);
    lightY.set(y);
    opacity.set(1);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    opacity.set(0);
  };

  return (
    <div
      className="App antialiased h-screen overflow-hidden relative perspective-distant"
      aria-label="Landing page main container"
    >
      <motion.div
        ref={cardRef}
        initial={{ y: "100vh" }}
        animate={{ y: 0 }}
        style={{
          backgroundColor: "#3D90D7",
          borderRadius: "30px",
          transformStyle: "preserve-3d",
          rotateX: springX,
          rotateY: springY,
        }}
        className="w-[90vw] h-[85vh] sm:h-[80vh] absolute left-[5vw] cursor-pointer overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        transition={{ duration: 0.8, ease: "easeOut" }}
        aria-label="Animated intro card"
      >
        <motion.div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            pointerEvents: "none",
            background:
              "radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 80%)",
            x: lightX,
            y: lightY,
            translateX: "-50%",
            translateY: "-50%",
            opacity,
          }}
          aria-hidden="true"
        />
        <div
          className="relative h-full flex flex-col justify-center items-center bg-gray-900 px-6 sm:px-10"
          aria-label="Hero content section"
        >
          <svg
            className="absolute top-0 left-0 w-full h-full pointer-events-none hidden sm:block"
            aria-hidden="true"
          >
            <circle cx="10%" cy="20%" r="30" fill="#1890ff">
              <animate
                attributeName="r"
                values="30;40;30"
                dur="6s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="90%" cy="70%" r="20" fill="#52c41a">
              <animate
                attributeName="r"
                values="20;25;20"
                dur="4s"
                repeatCount="indefinite"
              />
            </circle>
          </svg>

          <div className="text-center px-4">
            <motion.h1
              className="text-2xl md:text-4xl lg:text-6xl font-heading leading-snug text-white text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <span className="flex flex-col sm:flex-row justify-center items-center gap-2">
                <span className="flex items-center gap-2">
                  <span className="w-10 h-10 md:w-12 md:h-12">
                    <Lottie animationData={wavingHand} loop={true} />
                  </span>
                  <span>I&apos;m</span>
                </span>

                <span className="flex flex-row md:flex-row items-center gap-2">
                  <span className="relative group">
                    <Image
                      src={myPic}
                      alt="Abdullah Khan Picture"
                      sizes="(max-width: 768px) 40px, 60px"
                      className="rounded-full shadow-lg group-hover:cursor-pointer w-[35px] h-[25px] md:w-[80px] md:h-[60px]"
                      placeholder="blur"
                    />
                    {/* Tooltip */}
                    <div className="absolute top-8 left-full ml-2 bg-blue-600 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition duration-300 flex">
                      <span role="img" aria-label="me">
                        😊
                      </span>{" "}
                      That&apos;s me
                    </div>
                  </span>

                  <span
                    className="font-heading"
                    style={{ color: colors.blue.light }}
                  >
                    Abdullah Khan
                  </span>
                </span>
              </span>

              {/* Software Engineer line */}
              <span className="mt-4 block">
                a{" "}
                <span>
                  c<Eye />
                  <Eye />l
                </span>{" "}
                <span
                  className="font-heading"
                  style={{ color: colors.pink.light }}
                >
                  Software Engineer
                </span>
              </span>

              {/* Location */}
              <span className="mt-2 block">
                from{" "}
                <span
                  className="font-heading"
                  style={{ color: colors.orange.light }}
                >
                  India
                </span>
                <span className="inline-block ml-2 relative group">
                  <Image
                    src={charminar}
                    alt="Charminar, Hyderabad"
                    sizes="(max-width: 768px) 40px, 60px"
                    className="rounded-full shadow-lg group-hover:cursor-pointer w-[25px] h-[35px] md:w-[60px] md:h-[70px]"
                    placeholder="blur"
                  />
                  {/* Tooltip */}
                  <div className="absolute top-8 left-full ml-2 bg-blue-600 text-white px-2 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition duration-300 flex">
                    <span role="img" aria-label="charminar">
                      📍
                    </span>{" "}
                    Charminar, Hyderabad
                  </div>
                </span>
              </span>
            </motion.h1>
          </div>

          <motion.p
            className="mt-6 text-gray-400 max-w-xl text-base md:text-lg font-body text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            I have 2+ years of experience contributing to a low-code product’s
            core codebase, combining full-stack and mobile expertise to solve
            real-world challenges.
          </motion.p>
          <motion.a
            href="https://drive.google.com/uc?export=download&id=1p3w9kLc64Em62v-3w-qe1_4fAtj3K9dO"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block px-6 py-3 rounded-lg bg-white text-gray-900 font-body font-semibold shadow-md hover:bg-gray-200 transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500
"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
            }}
          >
            Download Resume
          </motion.a>
          <div
            className="md:absolute left-10 bottom-10 mt-8 md:mt-0"
            onClick={() => {
              const target = document.getElementById("projects");
              target?.scrollIntoView({ behavior: "smooth" });
            }}
            aria-label="Scroll to projects section"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                const target = document.getElementById("projects");
                target?.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <RotatingText />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LandingPage;
