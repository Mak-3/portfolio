"use client";
import Image from "next/image";
import SmartIconsKitBanner from "../../assets/images/projects/smartIconsKitBanner.png";
import HackDefenceMockup from "../../assets/images/projects/Thumbnail.png";
import SlayDayCover from "../../assets/images/projects/slayDayCover.png";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import BlurText from "../animations/BlurText";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import chefAnimation from "../../assets/animations/chef.json";
import Lottie from "lottie-react";
import { useInView } from "framer-motion";

const projectData = [
  {
    id: "slayday",
    title: "SlayDay",
    category: ["react native"],
    image: SlayDayCover,
  },
  {
    id: "smart-icons-kit",
    title: "Smart Icons Kit",
    category: ["npm", "react", "react native"],
    image: SmartIconsKitBanner,
  },
  {
    id: "hack-defense",
    title: "Minimal landing page for client",
    category: ["Web Dev", "Data Science"],
    image: HackDefenceMockup,
  },
];

const Cooking = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  const lottieRef = useRef<any>(null);

  useEffect(() => {
    if (isInView && lottieRef.current) {
      lottieRef.current.play();
    } else if (!isInView && lottieRef.current) {
      lottieRef.current.stop();
    }
  }, [isInView]);

  return (
    <div
      ref={ref}
      className="flex flex-col justify-center items-center h-full gap-8 text-center"
    >
      <div className="w-32 md:w-40">
        <Lottie
          lottieRef={lottieRef}
          animationData={chefAnimation}
          loop={false}
          autoplay={false}
        />
      </div>
      <span className="text-gray-700">
        Might be cooking something new for my next project.
      </span>
    </div>
  );
};

const Projects = ({ onSelectProject }: any) => {
  const [hovered, setHovered] = useState<string | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  return (
    <section className="py-12 px-6 justify-center items-center flex flex-col">
      <div>
        <BlurText
          text="Featured Work"
          delay={150}
          animateBy="words"
          direction="top"
          className="text-3xl sm:text-4xl md:text-5xl text-gray-800 font-heading font-normal text-center mb-12"
        />
        <div className="grid md:grid-cols-2 border border-gray-300 rounded-3xl overflow-hidden">
          {projectData.map((project, index) => {
            return (
              <div
                key={index}
                className="group relative overflow-hidden border-b border-gray-300 md:border-b md:border-r last:border-none md:[&:nth-last-child(-n+2)]:border-b-0 even:md:border-r-0 transition-all duration-300 p-4 cursor-pointer"
                onClick={() => onSelectProject(project.id)}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  setCursorPos({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                  });
                }}
                onMouseEnter={() => setHovered(project.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="overflow-hidden rounded-3xl shadow-md">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 md:h-60 2xl:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {hovered === project.id && (
                  <motion.div
                    className="absolute px-4 py-2 rounded-full pointer-events-none z-10 flex items-center gap-2 font-semibold
               border border-white/10 backdrop-blur-md bg-black/40 text-white shadow-[0_0_20px_rgba(0,0,0,0.4)]
               transition duration-300"
                    style={{
                      top: cursorPos.y,
                      left: cursorPos.x,
                      transform: "translate(-50%, -50%)",
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRightIcon className="w-4 h-4 -rotate-45 text-neutral-300" />
                    <span className="text-sm text-neutral-200">Explore</span>
                  </motion.div>
                )}
                <div className="p-5">
                  <h3 className="font-medium text-lg flex items-center gap-2">
                    {project.title}
                  </h3>

                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.category.map((tag, i) => (
                      <span key={i} className="text-xs rounded-full px-3 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
          <div
            key="cooking"
            className="border-b border-gray-300 md:border-b md:border-r last:border-none even:md:border-r-0 transition-all duration-300 p-4 cursor-default"
          >
            <Cooking />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
