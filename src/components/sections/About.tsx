"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { colors } from "@/src/lib/colors";
import Lottie from "lottie-react";
import educationAnimation from "../../assets/animations/Education.json";
import skillsAnimation from "../../assets/animations/Skills.json";
import VariableProximity from "../animations/VariableProximity";
import { MdLocationOn } from "react-icons/md";
import AnimatedSearchBar from "../animations/AnimatedSearchBar";
import StatsSection from "../StatsSection";
import BlurText from "../animations/BlurText";

const About = () => {
  const ref = useRef(null);
  const containerRef = useRef<any>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      id="about"
      ref={ref}
      className="p-6 md:p-12 flex flex-col items-center"
      role="region"
      aria-labelledby="about-heading"
    >
      <BlurText
        text="About me"
        delay={150}
        animateBy="words"
        direction="top"
        className="text-3xl sm:text-4xl md:text-5xl text-gray-800 font-heading font-normal text-center mb-12"
      />
      <h2 id="about-heading" className="sr-only">
        About Section
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 lg:grid-rows-4 gap-4 flex-grow max-w-5xl">
        {/* Hero Text */}
        <motion.div
          className="col-span-1 sm:col-span-2 lg:col-span-4 lg:row-span-2 rounded-4xl p-6 flex flex-col justify-between"
          style={{
            backgroundColor: colors.lavender.light,
            color: colors.lavender.dark,
          }}
          initial={{ scale: 0, transformOrigin: "0% 0%" }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          role="region"
          aria-labelledby="hero-title"
        >
          <div className="max-w-4xl w-full">
            <div
              ref={containerRef}
              className="relative break-words whitespace-normal leading-tight"
            >
              <VariableProximity
                label={"Focused on function. \nDriven by design."}
                className="variable-proximity-demo text-3xl md:text-6xl break-words whitespace-pre-line leading-tight cursor-default"
                fromFontVariationSettings="'wght' 400, 'opsz' 30"
                toFontVariationSettings="'wght' 1000, 'opsz' 80"
                containerRef={containerRef}
                radius={100}
                falloff="linear"
              />
              <div
                className="p-2 bg-amber-300 rounded-4xl absolute right-10 top-14 -rotate-35 hidden md:block"
                aria-hidden="true"
              >
                <p>Hover me</p>
              </div>
            </div>
            <p className="text-lg mt-4 max-w-2xl" id="hero-title" tabIndex={0}>
              I design and develop meaningful digital experiences that blend
              creativity with functionality.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-6 font-bold text-lg flex items-center gap-2"
            aria-label="Location: Hyderabad, India"
          >
            <motion.span
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              aria-hidden="true"
            >
              <MdLocationOn size={20} />
            </motion.span>
            <span>Hyderabad, India</span>
          </motion.div>
        </motion.div>

        {/* Free Time Highlights */}
        <motion.div
          className="col-span-1 sm:col-span-1 lg:col-span-2 lg:row-span-1 rounded-4xl p-6 flex flex-col relative overflow-hidden shadow-md"
          style={{
            backgroundColor: colors.blue.light,
            color: colors.blue.dark,
          }}
          initial={{ scale: 0, transformOrigin: "100% 0%" }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          role="region"
          aria-labelledby="free-time-heading"
        >
          <div className="relative z-10 text-sm space-y-4">
            <h3
              className="font-bold text-2xl text-center"
              id="free-time-heading"
            >
              🧠 Free Time Highlights
            </h3>
            <StatsSection />
          </div>
        </motion.div>

        {/* Journey So Far */}
        <motion.div
          className="rounded-4xl p-6 flex flex-col justify-center lg:row-span-2 lg:col-span-2"
          style={{
            backgroundColor: colors.pink?.light || "#A0F0ED",
            color: colors.pink?.dark || "#004B50",
          }}
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          role="region"
          aria-labelledby="journey-heading"
        >
          <h3
            className="font-bold text-2xl mb-6 text-center"
            id="journey-heading"
          >
            👨‍💻 Journey So Far
          </h3>
          <ul className="space-y-4 text-sm">
            {[
              {
                role: "Development Engineer",
                company: "Wavemaker",
                duration: "Apr 2025 – Present",
              },
              {
                role: "Associate Software Engineer",
                company: "Wavemaker",
                duration: "May 2023 – Mar 2025",
              },
              {
                role: "Development Intern",
                company: "Wavemaker",
                duration: "Jan 2023 – May 2023",
              },
            ].map((exp, idx) => (
              <li key={idx} className="bg-white/20 p-3 rounded-xl">
                <p className="text-base font-bold">{exp.role}</p>
                <p className="text-xs mt-1 opacity-90">
                  {exp.company} · {exp.duration}
                </p>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Education */}
        <motion.div
          className="rounded-4xl p-6 flex flex-col justify-between gap-4 lg:row-span-1 lg:col-span-2 relative"
          style={{
            backgroundColor: colors.green.light,
            color: colors.green.dark,
          }}
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1, transformOrigin: "left" } : {}}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          role="region"
          aria-labelledby="education-heading"
        >
          <div>
            <h3 className="font-bold text-2xl mb-4" id="education-heading">
              🎓 Education
            </h3>
            <p className="text-sm mt-2">B.Tech in Computer Science</p>
            <p className="text-sm">2019 – 2023</p>
          </div>
          <div className="absolute right-0 top-0" aria-hidden="true">
            <div className="w-32 md:w-40">
              <Lottie animationData={educationAnimation} />
            </div>
          </div>
        </motion.div>

        {/* What I Do */}
        <motion.div
          className="lg:row-span-2 lg:col-span-2 rounded-4xl p-6 flex flex-col justify-center items-center text-left space-y-2 text-base"
          style={{
            backgroundColor: colors.blue.light,
            color: colors.blue.dark,
          }}
          initial={{ scaleY: 0, transformOrigin: "bottom" }}
          animate={inView ? { scaleY: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          role="region"
          aria-labelledby="skills-heading"
        >
          <div>
            <h3 className="font-bold text-2xl mb-4" id="skills-heading">
              💼 What I Do
            </h3>
            <p className="text-sm mb-2">
              Specialized in building responsive mobile & web interfaces using
              React Native, React.js, and modern JS frameworks.
            </p>
            <div className="w-[80%] m-auto my-2" aria-hidden="true">
              <Lottie animationData={skillsAnimation} />
            </div>
          </div>
        </motion.div>

        {/* Beyond Code */}
        <motion.div
          className="rounded-4xl p-6 flex flex-col justify-center lg:row-span-1 lg:col-span-2"
          style={{
            backgroundColor: colors.orange.light,
            color: colors.orange.dark,
          }}
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1, transformOrigin: "left" } : {}}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          role="region"
          aria-labelledby="beyond-heading"
        >
          <h3 className="font-bold text-2xl mb-4" id="beyond-heading">
            ✨ Beyond Code
          </h3>
          <ol className="list-decimal list-inside text-sm leading-relaxed">
            <li>
              <span className="font-bold">Travel</span> lover exploring new
              places
            </li>
            <li>
              Enjoy <span className="font-bold">cooking</span> and trying new
              recipes
            </li>
            <li>
              Read <span className="font-bold">finance</span> books & investing
              guides
            </li>
          </ol>
        </motion.div>

        {/* Currently Learning */}
        <motion.div
          className="rounded-4xl p-6 flex flex-col items-center justify-center text-center font-bold text-base space-y-2 lg:col-span-2"
          style={{
            backgroundColor: colors.yellow.light,
            color: colors.yellow.dark,
          }}
          initial={{ scale: 0, transformOrigin: "bottom" }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          role="region"
          aria-labelledby="learning-heading"
        >
          <h3 className="text-2xl" id="learning-heading">
            📚 Currently Learning
          </h3>
          <AnimatedSearchBar />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
