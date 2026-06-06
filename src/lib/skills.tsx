import { JSX } from "react";
import {
  FaReact,
  FaHtml5,
  FaJs,
  FaServer,
  FaDatabase,
  FaGitAlt,
  FaNodeJs,
  FaPython,
  FaMobileAlt,
  FaCode,
  FaBrain,
  FaSearch,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiFramer,
  SiRedis,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiPostman,
  SiVercel,
  SiExpo,
  SiRealm,
  SiLangchain,
  SiOpenai,
} from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";
import reactNative from "../assets/images/React_Native.png";
import mernStack from "../assets/images/MERN_Stack.png";
import { StaticImageData } from "next/image";

export type SkillItem = {
  name: string;
  desc: string;
  icon: JSX.Element;
  badge: string;
};

export type FeaturedItem = {
  name: string;
  desc: string;
  badge: string;
  icon: JSX.Element;
  banner?: string;
  image?: StaticImageData | string;
};

export type CategoryData = {
  featured: FeaturedItem[];
  skills: SkillItem[];
  learning: SkillItem[];
  recent: SkillItem[];
};

export type SkillsData = {
  [category: string]: CategoryData;
};

const skillsData: SkillsData = {
  Frontend: {
    skills: [
      {
        name: "React.js",
        desc: "Used to build interactive UIs in web projects and dashboards using reusable components.",
        badge: "TOP SKILL",
        icon: <FaReact className="text-cyan-400" />,
      },
      {
        name: "HTML5 & CSS3",
        desc: "Built responsive layouts and semantic markup for client websites and projects.",
        badge: "CORE WEB",
        icon: <FaHtml5 className="text-orange-500" />,
      },
      {
        name: "Bootstrap",
        desc: "Used for responsive design during internships and personal projects.",
        badge: "UI TOOLKIT",
        icon: <BsBootstrap className="text-indigo-400" />,
      },
      {
        name: "JavaScript",
        desc: "Used in React Native and web projects, including state and DOM manipulation.",
        badge: "Most Used",
        icon: <FaJs className="text-yellow-300" />,
      },
      {
        name: "TypeScript",
        desc: "Used in React Native and web projects for better type safety and maintainability.",
        badge: "MODERN STACK",
        icon: <SiTypescript className="text-blue-500" />,
      },
      {
        name: "Tailwind CSS",
        desc: "Utilized for fast and custom UI design in portfolio and product-based UIs.",
        badge: "UI TOOLKIT",
        icon: <SiTailwindcss className="text-sky-400" />,
      },
      {
        name: "Angular",
        desc: "Used to build structured, component-driven SPAs with scalable frontend architecture.",
        badge: "FRAMEWORK",
        icon: <FaCode className="text-red-500" />,
      },
      {
        name: "TanStack Query",
        desc: "Used for robust server-state handling, caching, retries, and background data sync.",
        badge: "DATA FETCHING",
        icon: <FaCode className="text-rose-500" />,
      },
      {
        name: "shadcn/ui",
        desc: "Built polished, accessible UI components on top of Tailwind CSS for modern product UIs.",
        badge: "UI SYSTEM",
        icon: <FaCode className="text-neutral-200" />,
      },
    ],
    recent: [
      {
        name: "Tailwind CSS",
        desc: "Used in recent portfolio redesigns for rapid prototyping.",
        badge: "UI TOOLKIT",
        icon: <SiTailwindcss className="text-sky-400" />,
      },
      {
        name: "TypeScript",
        desc: "Use TypeScript regularly in both my professional React Native work and personal projects to maintain type safety and catch bugs early.",
        badge: "MODERN STACK",
        icon: <SiTypescript className="text-blue-500" />,
      },
    ],
    featured: [
      {
        name: "Tailwind CSS",
        desc: "Utilized for fast and custom UI design in portfolio and product-based UIs.",
        badge: "DESIGN TOOLKIT",
        icon: <SiTailwindcss className="text-sky-400 text-4xl" />,
        banner: "from-sky-400 via-blue-300 to-blue-500",
      },
      {
        name: "Next.js",
        desc: "Built my portfolio using it to ensure good SEO and fast load times.",
        badge: "FULLSTACK",
        icon: <SiNextdotjs className="text-black text-4xl" />,
        banner: "from-neutral-800 via-gray-900 to-black",
      },
    ],
    learning: [
      {
        name: "Next.js",
        desc: "Exploring for advanced server-side rendering and API routes.",
        badge: "FRAMEWORK",
        icon: <SiNextdotjs className="text-black" />,
      },
      {
        name: "Framer Motion",
        desc: "Used for animations and smooth transitions in this portfolio.",
        badge: "ANIMATION",
        icon: <SiFramer className="text-pink-400" />,
      },
    ],
  },

  Backend: {
    skills: [
      {
        name: "Node.js",
        desc: "Built backend services and REST APIs for full-stack apps using Express.",
        badge: "Backend Favorite",
        icon: <FaNodeJs className="text-green-500" />,
      },
      {
        name: "Express.js",
        desc: "Used with Node.js to create RESTful APIs and middleware for projects.",
        badge: "FULL-STACK",
        icon: <FaServer className="text-gray-300" />,
      },
      {
        name: "Python",
        desc: "Used for AI/ML projects, scripting, and solving 550+ LeetCode DSA problems.",
        badge: "VERSATILE & POPULAR",
        icon: <FaPython className="text-blue-400" />,
      },
    ],
    recent: [
      {
        name: "Node.js",
        desc: "Used recently in full-stack project with MongoDB and Firebase integration.",
        badge: "Backend Favorite",
        icon: <FaNodeJs className="text-green-500" />,
      },
    ],
    featured: [
      {
        name: "Node.js",
        desc: "Efficient backend runtime used in scalable full-stack projects.",
        badge: "Backend Favorite",
        icon: <FaNodeJs className="text-green-500 text-4xl" />,
        banner: "from-green-400 via-emerald-500 to-green-600",
      },
    ],
    learning: [
      {
        name: "Redis",
        desc: "Exploring for caching strategies and session storage while learning URL shortening",
        badge: "CACHE",
        icon: <SiRedis className="text-red-500" />,
      },
    ],
  },

  Database: {
    skills: [
      {
        name: "MongoDB",
        desc: "Used as NoSQL database for full-stack project with Mongoose ORM.",
        badge: "FLEXIBLE STORAGE",
        icon: <SiMongodb className="text-green-600" />,
      },
      {
        name: "Firestore",
        desc: "Integrated with Firebase for real-time database syncing in react native based app and client web sites.",
        badge: "REAL-TIME DB",
        icon: <SiFirebase className="text-yellow-400" />,
      },
      {
        name: "RealmDB",
        desc: "Used for offline-first local storage in React Native projects.",
        badge: "LOCAL SYNC",
        icon: <SiRealm className="text-indigo-500" />,
      },
      {
        name: "MySQL",
        desc: "Used in Spring Boot projects during internship to store structured data.",
        badge: "TRUSTED DB",
        icon: <SiMysql className="text-blue-500" />,
      },
      {
        name: "SQL",
        desc: "Proficient in writing complex queries for relational data analysis.",
        badge: "DATA ACCESS",
        icon: <FaDatabase className="text-purple-400" />,
      },
      {
        name: "Supabase",
        desc: "Used for Postgres-backed storage, auth, and realtime features in full-stack apps.",
        badge: "POSTGRES + BaaS",
        icon: <FaDatabase className="text-emerald-400" />,
      },
    ],
    recent: [
      {
        name: "RealmDB",
        desc: "Recently used for persistent storage in mobile app(SlayDay) built with Expo.",
        badge: "LOCAL SYNC",
        icon: <SiRealm className="text-indigo-500" />,
      },
    ],
    featured: [
      {
        name: "Firestore",
        desc: "Used for live syncing and user authentication data in mobile apps.",
        badge: "REALTIME DB",
        icon: <SiFirebase className="text-orange-500 text-4xl" />,
        banner: "from-yellow-300 via-orange-400 to-red-500",
      },
    ],
    learning: [],
  },

  AI: {
    skills: [
      {
        name: "RAG",
        desc: "Built retrieval-augmented generation flows to ground LLM responses with custom knowledge.",
        badge: "LLM PATTERN",
        icon: <FaSearch className="text-violet-400" />,
      },
      {
        name: "AI",
        desc: "Designed AI-powered features with prompt workflows, evaluation, and production-focused thinking.",
        badge: "CORE",
        icon: <FaBrain className="text-fuchsia-400" />,
      },
      {
        name: "LangChain",
        desc: "Used LangChain to orchestrate LLM chains, tools, and context-aware AI pipelines.",
        badge: "ORCHESTRATION",
        icon: <SiLangchain className="text-green-400" />,
      },
      {
        name: "Vector DB",
        desc: "Worked with vector databases for semantic search, embeddings storage, and retrieval pipelines.",
        badge: "SEMANTIC SEARCH",
        icon: <FaDatabase className="text-cyan-400" />,
      },
    ],
    recent: [
      {
        name: "RAG",
        desc: "Recently used for contextual Q&A and knowledge-assisted response generation.",
        badge: "LLM PATTERN",
        icon: <FaSearch className="text-violet-400" />,
      },
    ],
    featured: [
      {
        name: "LangChain + RAG",
        desc: "Composed AI workflows that combine retrieval, prompting, and response orchestration.",
        badge: "AI STACK",
        icon: <SiOpenai className="text-emerald-400 text-4xl" />,
        banner: "from-violet-500 via-fuchsia-500 to-cyan-500",
      },
    ],
    learning: [
      {
        name: "Vector DB",
        desc: "Going deeper into indexing strategies and retrieval quality tuning for RAG systems.",
        badge: "SEMANTIC SEARCH",
        icon: <FaDatabase className="text-cyan-400" />,
      },
    ],
  },

  Tools: {
    skills: [
      {
        name: "Firebase",
        desc: "Implemented user auth, analytics, and database in mobile/web apps.",
        badge: "CLOUD",
        icon: <SiFirebase className="text-yellow-400" />,
      },
      {
        name: "Git",
        desc: "Used for version control and collaborative development across teams.",
        badge: "CONTROL",
        icon: <FaGitAlt className="text-orange-400" />,
      },
      {
        name: "Postman",
        desc: "Used for API testing, debugging, and sharing during backend development.",
        badge: "TESTING",
        icon: <SiPostman className="text-orange-300" />,
      },
      {
        name: "Vercel",
        desc: "Deployed portfolio with seamless CI/CD workflows.",
        badge: "DEPLOY",
        icon: <SiVercel className="text-black" />,
      },
    ],
    recent: [],
    featured: [
      {
        name: "Firebase",
        desc: "Used for user authentication, real-time DB, and hosting.",
        badge: "CLOUD",
        icon: <SiFirebase className="text-yellow-400 text-4xl" />,
        banner: "from-yellow-300 via-orange-400 to-amber-500",
      },
    ],
    learning: [
      {
        name: "Postman",
        desc: "Exploring advanced API test automation with collections.",
        badge: "TESTING",
        icon: <SiPostman className="text-orange-300" />,
      },
    ],
  },

  "Mobile Development": {
    skills: [
      {
        name: "React Native",
        desc: "Built animated, cross-platform mobile components with charts and Firebase in work and personal projects",
        badge: "MOBILE DEV",
        icon: <FaReact className="text-cyan-400" />,
      },
      {
        name: "Expo",
        desc: "Used to streamline React Native development, updates, and builds.",
        badge: "MOBILE",
        icon: <SiExpo className="text-black" />,
      },
      {
        name: "RealmDB",
        desc: "Integrated into mobile apps to support offline data and local sync.",
        badge: "LOCAL SYNC",
        icon: <SiRealm className="text-indigo-500" />,
      },
      {
        name: "NativeWind",
        desc: "Used to bring Tailwind-like utility-first styling to React Native apps, improving dev speed and consistency.",
        badge: "UTILITY STYLE",
        icon: <SiTailwindcss className="text-sky-400" />,
      },
    ],
    recent: [],
    featured: [
      {
        name: "React Native",
        desc: "Built cross-platform mobile app components with animations and accessibility improvements in my professional work.",
        badge: "MOBILE DEV",
        icon: <FaReact className="text-cyan-400 text-4xl" />,
        banner: "from-blue-400 via-cyan-500 to-teal-400",
      },
    ],
    learning: [],
  },

  All: {
    skills: [
      {
        name: "React Native",
        desc: "Built animated, cross-platform mobile components with charts and Firebase in work and personal projects",
        badge: "MOBILE DEV",
        icon: <FaReact className="text-cyan-400" />,
      },
      {
        name: "Expo",
        desc: "Used to streamline React Native development, updates, and builds.",
        badge: "MOBILE",
        icon: <SiExpo className="text-black" />,
      },
      {
        name: "Python",
        desc: "Used for AI/ML projects, scripting, and solving 550+ LeetCode DSA problems.",
        badge: "VERSATILE & POPULAR",
        icon: <FaPython className="text-blue-400" />,
      },
      {
        name: "React.js",
        desc: "Used to build interactive UIs in web projects and dashboards using reusable components.",
        badge: "TOP SKILL",
        icon: <FaReact className="text-cyan-400" />,
      },
      {
        name: "Next.js",
        desc: "Built my portfolio using it to ensure good SEO and fast load times.",
        badge: "FULLSTACK",
        icon: <SiNextdotjs className="text-black text-4xl" />,
      },
      {
        name: "TypeScript",
        desc: "Use TypeScript regularly in both my professional React Native work and personal projects to maintain type safety and catch bugs early.",
        badge: "MODERN STACK",
        icon: <SiTypescript className="text-blue-500" />,
      },
      {
        name: "Tailwind CSS",
        desc: "Utilized for fast and custom UI design in portfolio and product-based UIs.",
        badge: "UI TOOLKIT",
        icon: <SiTailwindcss className="text-sky-400" />,
      },
      {
        name: "Angular",
        desc: "Used to build structured, component-driven SPAs with scalable frontend architecture.",
        badge: "FRAMEWORK",
        icon: <FaCode className="text-red-500" />,
      },
      {
        name: "TanStack Query",
        desc: "Used for robust server-state handling, caching, retries, and background data sync.",
        badge: "DATA FETCHING",
        icon: <FaCode className="text-rose-500" />,
      },
      {
        name: "shadcn/ui",
        desc: "Built polished, accessible UI components on top of Tailwind CSS for modern product UIs.",
        badge: "UI SYSTEM",
        icon: <FaCode className="text-neutral-200" />,
      },
      {
        name: "NativeWind",
        desc: "Used to bring Tailwind-like utility-first styling to React Native apps, improving dev speed and consistency.",
        badge: "UTILITY STYLE",
        icon: <SiTailwindcss className="text-sky-400" />,
      },
      {
        name: "HTML5 & CSS3",
        desc: "Built responsive layouts and semantic markup for client websites and projects.",
        badge: "CORE WEB",
        icon: <FaHtml5 className="text-orange-500" />,
      },
      {
        name: "JavaScript",
        desc: "Used in React Native and web projects, including state and DOM manipulation.",
        badge: "Most Used",
        icon: <FaJs className="text-yellow-300" />,
      },
      {
        name: "Bootstrap",
        desc: "Used for responsive design during internships and personal projects.",
        badge: "UI TOOLKIT",
        icon: <BsBootstrap className="text-indigo-400" />,
      },
      {
        name: "Node.js",
        desc: "Built backend services and REST APIs for full-stack apps using Express.",
        badge: "Backend Favorite",
        icon: <FaNodeJs className="text-green-500" />,
      },
      {
        name: "Firestore",
        desc: "Integrated with Firebase for real-time database syncing in react native based app and client web sites.",
        badge: "REAL-TIME DB",
        icon: <SiFirebase className="text-yellow-400" />,
      },
      {
        name: "RealmDB",
        desc: "Used for offline-first local storage in React Native projects.",
        badge: "LOCAL SYNC",
        icon: <SiRealm className="text-indigo-500" />,
      },
      {
        name: "Firebase",
        desc: "Implemented user auth, analytics, and database in mobile/web apps.",
        badge: "CLOUD",
        icon: <SiFirebase className="text-yellow-400" />,
      },
      {
        name: "Vercel",
        desc: "Deployed portfolio with seamless CI/CD workflows.",
        badge: "DEPLOY",
        icon: <SiVercel className="text-black" />,
      },
      {
        name: "MongoDB",
        desc: "Used as NoSQL database for full-stack project with Mongoose ORM.",
        badge: "FLEXIBLE STORAGE",
        icon: <SiMongodb className="text-green-600" />,
      },
      {
        name: "MySQL",
        desc: "Used in Spring Boot projects during internship to store structured data.",
        badge: "TRUSTED DB",
        icon: <SiMysql className="text-blue-500" />,
      },
      {
        name: "SQL",
        desc: "Proficient in writing complex queries for relational data analysis.",
        badge: "DATA ACCESS",
        icon: <FaDatabase className="text-purple-400" />,
      },
      {
        name: "Supabase",
        desc: "Used for Postgres-backed storage, auth, and realtime features in full-stack apps.",
        badge: "POSTGRES + BaaS",
        icon: <FaDatabase className="text-emerald-400" />,
      },
      {
        name: "RAG",
        desc: "Built retrieval-augmented generation flows to ground LLM responses with custom knowledge.",
        badge: "LLM PATTERN",
        icon: <FaSearch className="text-violet-400" />,
      },
      {
        name: "AI",
        desc: "Designed AI-powered features with prompt workflows, evaluation, and production-focused thinking.",
        badge: "CORE",
        icon: <FaBrain className="text-fuchsia-400" />,
      },
      {
        name: "LangChain",
        desc: "Used LangChain to orchestrate LLM chains, tools, and context-aware AI pipelines.",
        badge: "ORCHESTRATION",
        icon: <SiLangchain className="text-green-400" />,
      },
      {
        name: "Vector DB",
        desc: "Worked with vector databases for semantic search, embeddings storage, and retrieval pipelines.",
        badge: "SEMANTIC SEARCH",
        icon: <FaDatabase className="text-cyan-400" />,
      },
      {
        name: "Git",
        desc: "Used for version control and collaborative development across teams.",
        badge: "CONTROL",
        icon: <FaGitAlt className="text-orange-400" />,
      },
      {
        name: "Postman",
        desc: "Used for API testing, debugging, and sharing during backend development.",
        badge: "TESTING",
        icon: <SiPostman className="text-orange-300" />,
      },
      {
        name: "Express.js",
        desc: "Used with Node.js to create RESTful APIs and middleware for projects.",
        badge: "FULL-STACK",
        icon: <FaServer className="text-gray-300" />,
      },
    ],

    recent: [
      {
        name: "Tailwind CSS",
        desc: "Used in recent portfolio redesigns for rapid prototyping.",
        badge: "UI TOOLKIT",
        icon: <SiTailwindcss className="text-sky-400" />,
      },
      {
        name: "TypeScript",
        desc: "Actively used in React Native codebases for type safety and bug prevention.",
        badge: "MODERN STACK",
        icon: <SiTypescript className="text-blue-500" />,
      },
      {
        name: "Node.js",
        desc: "Used recently in full-stack project with MongoDB and Firebase integration.",
        badge: "Backend Favorite",
        icon: <FaNodeJs className="text-green-500" />,
      },
      {
        name: "RealmDB",
        desc: "Recently used for persistent storage in mobile app(SlayDay) built with Expo.",
        badge: "LOCAL SYNC",
        icon: <SiRealm className="text-indigo-500" />,
      },
    ],

    featured: [
      {
        name: "MERN Stack",
        desc: "Full-stack JavaScript development using MongoDB, Express, React, and Node.js.",
        badge: "Web Favorite",
        icon: <FaCode className="text-green-400 text-4xl" />,
        banner: "from-green-400 via-green-500 to-green-600",
        image: mernStack,
      },
      {
        name: "React Native",
        desc: "Build native mobile apps using JavaScript and React.",
        badge: "Mobile Favorite",
        icon: <FaMobileAlt className="text-blue-400 text-4xl" />,
        banner: "from-blue-400 via-blue-500 to-blue-600",
        image: reactNative,
      },
    ],

    learning: [
      {
        name: "Next.js",
        desc: "Exploring for advanced server-side rendering and API routes.",
        badge: "FRAMEWORK",
        icon: <SiNextdotjs className="text-black" />,
      },
      {
        name: "Framer Motion",
        desc: "Used for animations and smooth transitions in this portfolio.",
        badge: "ANIMATION",
        icon: <SiFramer className="text-pink-400" />,
      },
      {
        name: "Redis",
        desc: "Exploring for caching strategies and session storage while learning URL shortening",
        badge: "CACHE",
        icon: <SiRedis className="text-red-500" />,
      },
      {
        name: "Postman",
        desc: "Exploring advanced API test automation with collections.",
        badge: "TESTING",
        icon: <SiPostman className="text-orange-300" />,
      },
    ],
  },
};

export default skillsData;
