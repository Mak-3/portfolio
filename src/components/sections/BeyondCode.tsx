import React from "react";
import ImageSlider from "../animations/ImageGallery";
import BlurText from "../animations/BlurText";
import { motion } from "framer-motion";
import bgImage from "../../assets/images/BeachViewBackground.jpg";
import { colors } from "@/src/lib/colors";

const BeyondCode = () => {
  return (
    <section
      className="w-full py-10 px-4 flex flex-col items-center  bg-cover bg-center h-full" style={{ backgroundImage: `url(${bgImage.src})` }}
      aria-labelledby="contact-heading"
      role="region"
    >
      <div className="w-full flex flex-col items-center text-center">
        <BlurText
          text="Beyond debugging and development"
          delay={150}
          animateBy="words"
          direction="top"
          className="text-3xl sm:text-4xl md:text-5xl mb-8 text-white font-heading font-bold"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 text-md sm:text-xl"
          style={{color: colors.pink.light}}
        >
          Driven by flavors, movement, and journeys with meaning
        </motion.p>

        <div className="mt-20">
          <ImageSlider />
        </div>
      </div>
    </section>
  );
};

export default BeyondCode;
