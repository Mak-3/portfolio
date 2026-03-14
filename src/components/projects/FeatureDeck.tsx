"use client";

import React from "react";
import { motion } from "framer-motion";
import featureDeckDemo from "../../assets/gifs/featureDeck-demo.gif";

interface IPhoneMockupProps {
  src: string;
  alt: string;
}

const IPhoneMockup = ({ src, alt }: IPhoneMockupProps) => {
  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[300px] h-[420px] bg-orange-500/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative w-[260px] sm:w-[290px] md:w-[310px]">
        <div className="relative bg-[#1a1a1a] rounded-[3rem] p-[10px] shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_30px_70px_-15px_rgba(0,0,0,0.5),0_0_50px_rgba(232,93,4,0.06)]">
          <div className="absolute -right-[2.5px] top-[120px] w-[3px] h-[50px] bg-[#2a2a2a] rounded-r-sm" />
          <div className="absolute -left-[2.5px] top-[100px] w-[3px] h-[30px] bg-[#2a2a2a] rounded-l-sm" />
          <div className="absolute -left-[2.5px] top-[140px] w-[3px] h-[30px] bg-[#2a2a2a] rounded-l-sm" />
          <div className="absolute -left-[2.5px] top-[72px] w-[3px] h-[16px] bg-[#2a2a2a] rounded-l-sm" />

          <div className="relative bg-black rounded-[2.4rem] overflow-hidden">
            <div className="absolute top-[10px] left-1/2 -translate-x-1/2 z-20 w-[90px] h-[26px] bg-black rounded-full" />

            <div className="relative aspect-[9/19.5]">
              <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const pillVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 + i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const leftPills = ["Feature Requests", "Roadmap View", "Dark Mode"];
const rightPills = ["Upvote System", "Optimistic UI", "Zero Config"];

interface FeatureDeckProps {
  onBack: () => void;
}

const FeatureDeck = ({ onBack }: FeatureDeckProps) => {
  return (
    <div className="bg-white text-gray-900 font-sans space-y-12">
      {/* Hero showcase */}
      <div className="relative bg-[#0a0a0a] overflow-hidden">
        {/* Dot grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Gradient edges */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-20 bg-linear-to-b from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

        <div className="relative z-20 max-w-6xl mx-auto px-6 py-16 sm:py-20">
          {/* Title */}
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-white/40 text-sm tracking-[0.3em] uppercase mb-3">
              React Native SDK
            </h2>
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
              FeatureDeck
            </h1>
            <p className="text-white/50 mt-3 max-w-md mx-auto text-sm sm:text-base">
              Drop-in feature requests, voting & roadmap for any mobile app.
            </p>
          </motion.div>

          {/* Phone + floating pills */}
          <div className="relative flex items-center justify-center">
            {/* Left pills — hidden on mobile */}
            <div className="hidden md:flex flex-col gap-3 items-end mr-10 lg:mr-16">
              {leftPills.map((label, i) => (
                <motion.span
                  key={label}
                  custom={i}
                  variants={pillVariants}
                  initial="hidden"
                  animate="visible"
                  className="px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-white/6 text-white/70 border border-white/10 backdrop-blur-sm whitespace-nowrap"
                >
                  {label}
                </motion.span>
              ))}
            </div>

            {/* Mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <IPhoneMockup
                src={featureDeckDemo.src}
                alt="FeatureDeck Demo"
              />
            </motion.div>

            {/* Right pills — hidden on mobile */}
            <div className="hidden md:flex flex-col gap-3 items-start ml-10 lg:ml-16">
              {rightPills.map((label, i) => (
                <motion.span
                  key={label}
                  custom={i + 3}
                  variants={pillVariants}
                  initial="hidden"
                  animate="visible"
                  className="px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-white/6 text-white/70 border border-white/10 backdrop-blur-sm whitespace-nowrap"
                >
                  {label}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Mobile pills row */}
          <div className="flex md:hidden flex-wrap justify-center gap-2 mt-8">
            {[...leftPills, ...rightPills].map((label, i) => (
              <motion.span
                key={label}
                custom={i}
                variants={pillVariants}
                initial="hidden"
                animate="visible"
                className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/6 text-white/70 border border-white/10 backdrop-blur-sm"
              >
                {label}
              </motion.span>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 pb-10">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h1 className="text-3xl font-semibold leading-snug mb-4">
            FeatureDeck – User-Driven Feature Request SDK
          </h1>

          <p className="text-gray-700 mb-8">
            A drop-in React Native SDK that lets users browse, submit, and
            upvote feature requests — complete with a visual roadmap, optimistic
            UI, full theming support, and zero-config integration via a
            full-screen modal.
          </p>

          <div className="space-y-4 text-sm">
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span className="font-medium text-gray-500">Tech Stack</span>
              <span className="text-gray-900">
                React Native, TypeScript, Expo
              </span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span className="font-medium text-gray-500">Key Features</span>
              <span className="text-gray-900">
                Roadmap, Voting, Theming, Optimistic UI
              </span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span className="font-medium text-gray-500">Type</span>
              <span className="text-gray-900">React Native SDK</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-2 gap-6">
              <span className="font-medium text-gray-500 whitespace-nowrap">
                Role
              </span>
              <p className="text-gray-900 leading-relaxed max-w-[70%]">
                Sole Developer (End-to-end designed, developed, and published
                FeatureDeck)
              </p>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span className="font-medium text-gray-500">Platform</span>
              <span className="text-gray-900">iOS & Android</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span className="font-medium text-gray-500">Website Link</span>
              <a
                href="https://www.featuredeck.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Try Out →
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-3">Problem Statement</h2>
            <p className="text-gray-700 leading-relaxed">
              Mobile app teams often lack a lightweight, in-app channel for
              collecting user feedback. Users resort to app store reviews or
              external forms, causing fragmented insights and slow iteration.
              There&apos;s no simple, embeddable solution for React Native that
              combines feature requests, voting, and a public roadmap in one
              package.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">Outcome</h2>
            <p className="text-gray-700 leading-relaxed">
              FeatureDeck provides a polished, zero-config modal that plugs into
              any React Native app. Users can submit ideas, upvote others, and
              view a live roadmap — all with instant optimistic feedback. Teams
              gain a direct line to user priorities without leaving the app,
              accelerating product decisions and boosting engagement.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">Features</h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              <li>
                <span className="font-semibold">Feature Requests</span> — Let
                users browse, submit, and upvote feature ideas
              </li>
              <li>
                <span className="font-semibold">Roadmap</span> — Show planned,
                in-progress, and completed items
              </li>
              <li>
                <span className="font-semibold">Optimistic UI</span> — Instant
                feedback on votes and submissions
              </li>
              <li>
                <span className="font-semibold">Theming</span> — Fully
                customizable colors, dark mode support
              </li>
              <li>
                <span className="font-semibold">Zero Config UI</span> — Drop-in
                full-screen modal with two tabs
              </li>
              <li>Pull-to-refresh & infinite scroll built in</li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default FeatureDeck;
