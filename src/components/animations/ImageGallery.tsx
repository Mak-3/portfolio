import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import exploring from "../../assets/images/Exploring.jpg";
import cooking from "../../assets/images/Cooking.jpg";
import microWritting from "../../assets/images/MicroWritting.jpg";
import gym from "../../assets/images/Gym.jpg";
import eating from "../../assets/images/Eating.jpg";
import reading from "../../assets/images/Reading.jpg";
import beach from "../../assets/images/Beach.jpg";
import nature from "../../assets/images/Nature.jpg";
import Image from "next/image";
import { useState } from "react";

const images = [
  { src: exploring, title: "Exploring ⛰️" },
  { src: cooking, title: "Cooking 👨‍🍳" },
  { src: microWritting, title: "Micro writting ✍️" },
  { src: gym, title: "Gym 💪🏻" },
  { src: eating, title: "Eating 🍰" },
  { src: beach, title: "Beach 🏖️" },
  { src: nature, title: "Nature 📚" },
];

export default function ImageSlider() {
  // Duplicate images enough times for seamless loop
  const repeatedImages = [...images, ...images, ...images];
  const x = useMotionValue(0);
  const [speed, setSpeed] = useState(40); // pixels per second
  
  // Calculate the width of one set of images
  // Each image is 220px wide + 48px gap (12 * 4 = 48px in tailwind)
  const imageWidth = 220 + 48; // min-w-[220px] + gap-12
  const singleSetWidth = images.length * imageWidth;

  // Animate manually each frame
  useAnimationFrame((t, delta) => {
    const moveBy = (speed * delta) / 1000; // delta in ms
    let newX = x.get() - moveBy;
    
    // Reset seamlessly when one full set has scrolled
    if (newX <= -singleSetWidth) {
      newX = newX + singleSetWidth;
    }
    
    x.set(newX);
  });

  return (
    <div className="relative overflow-hidden py-20">
      <motion.div
        style={{ x }}
        className="flex gap-12 max-w-screen"
      >
        {repeatedImages.map((item, idx) => (
          <motion.div
            key={idx}
            className="min-w-[220px] rounded-2xl shadow-xl cursor-pointer bg-white p-4 flex -rotate-4 flex-col items-center"
            whileHover={{ scale: 1.1, y: -8, rotate: -10 }}
            onHoverStart={() => setSpeed(20)}
            onHoverEnd={() => setSpeed(40)}
            transition={{ type: "spring" }}
          >
            <Image
              src={item.src}
              alt={item.title}
              width={440}
              height={520}
              quality={95}
              className="w-full h-60 rounded-xl object-cover"
              priority={idx < images.length}
              sizes="(max-width: 768px) 220px, 220px"
            />
            <h1 className="mt-3 text-lg font-semibold text-gray-800 text-center">
              {item.title}
            </h1>
          </motion.div>
        ))}
      </motion.div>

      <div className="pointer-events-none absolute inset-0" />
    </div>
  );
}
