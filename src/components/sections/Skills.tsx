import React from "react";
import SkillsStore from "../SkillsStore";
import BlurText from "../animations/BlurText";

const Skills = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center px-4 py-12">
      <BlurText
        text="My Skill Store"
        delay={150}
        animateBy="words"
        direction="top"
        className="text-3xl sm:text-4xl md:text-5xl mb-12 text-gray-800 font-heading font-bold text-center"
      />

      <div className="w-full max-w-6xl flex items-center justify-center">
        <SkillsStore />
      </div>
    </section>
  );
};

export default Skills;