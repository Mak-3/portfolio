"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

import mainPage from "../../assets/images/projects/slayDayMainPage.png";
import calender from "../../assets/images/projects/slayDayCalender.png";
import checklist from "../../assets/images/projects/slayDayChecklist.png";
import checklistOverview from "../../assets/images/projects/slayDayChecklistOverview.png";
import eventForm from "../../assets/images/projects/slayDayEventForm.png";
import pomodoro from "../../assets/images/projects/slayDayPomodoro.png";

const images = [
  mainPage,
  checklistOverview,
  checklist,
  calender,
  eventForm,
  pomodoro,
];

interface SlayDayProps {
  onBack: () => void;
}

const SlayDay = ({ onBack }: SlayDayProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const slider = sliderRef.current;

    if (!container || !slider) return;

    let interval: NodeJS.Timeout | null = null;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const containerTop = container.offsetTop;
      const sliderWidth = slider.scrollWidth;
      const windowWidth = window.innerWidth;

      const maxScroll = sliderWidth - windowWidth;

      // Only scroll slider while within container
      if (scrollTop >= containerTop && scrollTop <= containerTop + maxScroll) {
        slider.style.transform = `translateX(-${scrollTop - containerTop}px)`;
      } else if (scrollTop > containerTop + maxScroll) {
        slider.style.transform = `translateX(-${maxScroll}px)`;
      } else {
        slider.style.transform = `translateX(0px)`;
      }
    };

    const setup = () => {
      const isMobile = window.innerWidth <= 1024;

      if (interval) clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);

      slider.style.transform = `translateX(0px)`;

      if (isMobile) {
        let scrollPos = 0;
        const scrollStep = 1;
        const maxScroll = slider.scrollWidth - window.innerWidth;
        container.style.height = "auto";
        interval = setInterval(() => {
          scrollPos += scrollStep;
          if (scrollPos > maxScroll) scrollPos = 0;
          slider.style.transform = `translateX(-${scrollPos}px)`;
        }, 16);
      } else {
        const totalScrollWidth = slider.scrollWidth;
        const viewportWidth = window.innerWidth;
        const scrollDistance = totalScrollWidth - viewportWidth;
        container.style.height = `${scrollDistance + window.innerHeight}px`;

        window.addEventListener("scroll", handleScroll);
      }
    };

    setup();
    window.addEventListener("resize", setup);

    return () => {
      if (interval) clearInterval(interval);
      window.removeEventListener("resize", setup);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-white text-gray-900 font-sans sm:p-10 space-y-12">
      <div ref={containerRef} className="relative w-full">
        <div className="md:sticky top-0 overflow-x-hidden">
          <div
            ref={sliderRef}
            className="flex space-x-6 md:transition-transform md:duration-100 md:ease-out"
          >
            {images.map((img, idx) => (
              <Image
                key={idx}
                src={img}
                alt={`SlayDay Screenshot ${idx + 1}`}
                width={300}
                className="rounded-xl flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto p-6 sm:p-0">
        <div className="space-y-6">
          <h1 className="text-3xl font-semibold leading-snug mb-4">
            SlayDay – Productivity App
          </h1>

          <p className="text-gray-700 mb-8">
            A comprehensive productivity app built with Expo and React Native,
            featuring checklists, events, Pomodoro timer, and automatic backups.
            Designed to help users stay disciplined, productive, and organized —
            anywhere, anytime — even offline.
          </p>

          <div className="space-y-4 text-sm">
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span className="font-medium text-gray-500">Tech Stack</span>
              <span className="text-gray-900">Expo, React Native</span>
            </div>

            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span className="font-medium text-gray-500">Key Features</span>
              <span className="text-gray-900">
                Offline First App, Automatic Backup
              </span>
            </div>

            <div className="flex justify-between border-b border-gray-200 pb-2 gap-6">
              <span className="font-medium text-gray-500 whitespace-nowrap">
                Role
              </span>
              <p className="text-gray-900 leading-relaxed max-w-[70%]">
                Sole Developer (End-to-End designed, developed, and published
                independently)
              </p>
            </div>

            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span className="font-medium text-gray-500">Timeline</span>
              <span className="text-gray-900">3 months</span>
            </div>

            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span className="font-medium text-gray-500">Project Link</span>
              <a
                href="https://play.google.com/store/apps/details?id=com.mak3.slayday"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View Project →
              </a>
            </div>
          </div>
        </div>

        <div>
          <div>
            <h2 className="text-2xl font-semibold mb-3">Problem Statement</h2>
            <p className="text-gray-700 leading-relaxed">
              Many people struggle to stay consistent with their daily goals and
              lose track of their progress due to lack of structure and
              motivation. Existing productivity tools often require constant
              internet access or fail to integrate multiple productivity methods
              like task lists, events, and focused work sessions in one seamless
              experience.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">Outcome</h2>
            <p className="text-gray-700 leading-relaxed">
              SlayDay delivers an all-in-one productivity solution that works
              both online and offline. It empowers users to plan tasks, track
              habits, and maintain focus using the Pomodoro technique. The app
              intelligently backs up data automatically and ensures a smooth
              user experience. Over the 3-month development timeline, SlayDay
              evolved into a reliable daily companion that helps users stay
              disciplined and productive — every single day.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlayDay;
