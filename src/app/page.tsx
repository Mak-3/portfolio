"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import DeviceNotice from "../components/DeviceNotice";
import LandingPage from "../components/sections/LandingPage";
import Skills from "../components/sections/Skills";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import BeyondCode from "../components/sections/BeyondCode";
import Projects from "../components/sections/Projects";
import SlayDay from "../components/projects/SlayDay";
import SmartIconsKit from "../components/projects/SmartIconsKit";
import HackDefense from "../components/projects/HackDefense";

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const projectParam = searchParams.get("project") as
    | "slayday"
    | "smart-icons-kit"
    | "hack-defense"
    | null;

  const scrollToParam = searchParams.get("scrollTo");

  const [selectedProject, setSelectedProject] = useState<
    "none" | "slayday" | "smart-icons-kit" | "hack-defense"
  >(projectParam ?? "none");

  const [bgColor, setBgColor] = useState("#FFFFFF"); // background color state
  const [prevProject, setPrevProject] = useState<string | null>(null);

  useEffect(() => {
    if (selectedProject !== "none") {
      setPrevProject(selectedProject);
    }

    setSelectedProject(projectParam ?? "none");
  }, [projectParam, selectedProject]);

  useEffect(() => {
    // When opening a project, scroll to top
    if (selectedProject !== "none") {
      window.scrollTo(0, 0);
    }
    
    // When closing a project and returning to main page
    if (selectedProject === "none" && (scrollToParam || prevProject)) {
      // First scroll to top, then scroll to target section
      window.scrollTo(0, 0);
      setTimeout(() => {
        const targetSection = scrollToParam || "projects";
        const section = document.getElementById(targetSection);
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        if (prevProject) {
          setPrevProject(null);
        }
      }, 300);
    }
  }, [selectedProject, scrollToParam, prevProject]);

  const openProject = (
    project: "slayday" | "smart-icons-kit" | "hack-defense"
  ) => {
    router.push(`/?project=${project}`, { scroll: false });
  };

  const goBack = () => {
    router.push("/?scrollTo=projects", { scroll: false });
  };

  const closeProject = () => {
    router.push("/", { scroll: false });
  };

  const renderProjects = () => {
    if (selectedProject === "slayday") return <SlayDay onBack={goBack} />;
    if (selectedProject === "smart-icons-kit")
      return <SmartIconsKit onBack={goBack} />;
    if (selectedProject === "hack-defense")
      return <HackDefense onBack={goBack} />;
    return <Projects onSelectProject={openProject} />;
  };

  return (
    <>
      <DeviceNotice />

      <motion.div
        className="font-body transition-colors duration-500"
        style={{ backgroundColor: bgColor }}
      >
        <Navbar
          isProjectOpen={selectedProject !== "none"}
          onCloseProject={closeProject}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedProject}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
          >
            {selectedProject === "none" && (
              <>
                <section id="home">
                  <LandingPage />
                </section>

                <section id="projects">{renderProjects()}</section>

                <section id="skills">
                  <Skills />
                </section>

                <section id="about">
                  <About />
                </section>

                <section>
                  <BeyondCode />
                </section>

                {/* Contact section with viewport enter/leave detection */}
                <motion.section
                  id="contact"
                  onViewportEnter={() => setBgColor("#0F0F0F")}
                  onViewportLeave={() => setBgColor("#FFFFFF")}
                  viewport={{ amount: 0.5 }} // optional, adjust in-view trigger
                >
                  <Contact />
                </motion.section>
              </>
            )}

            {selectedProject !== "none" && (
              <section>{renderProjects()}</section>
            )}
          </motion.div>
        </AnimatePresence>

        <Footer />
      </motion.div>
    </>
  );
}
