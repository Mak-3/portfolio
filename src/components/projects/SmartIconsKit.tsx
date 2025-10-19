import React from "react";
import smartIconsKitGif from "../../assets/gifs/smart-icons-kit.gif";

interface SmartIconsKitProps {
  onBack: () => void;
}

const SmartIconsKit = ({ onBack }: SmartIconsKitProps) => {
  return (
    <div className="bg-white text-gray-900 font-sans p-10 max-w-6xl mx-auto space-y-12">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Smart Icons Kit</h1>
      </div>
      <div className="flex justify-center">
        <img
          src={smartIconsKitGif.src}
          alt="Smart Icons Kit Demo"
          className="w-full rounded-lg"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h1 className="text-3xl font-semibold leading-snug mb-4">
            Smart Icons Kit – Intelligent Cross-Platform Icon System
          </h1>

          <p className="text-gray-700 mb-8">
            A smart, high-performance icon component that works seamlessly
            across React Web and React Native. It supports intelligent synonym
            matching, fuzzy prefix search, prop spreading, and flexible fallback
            mechanisms — all optimized for speed and developer convenience.
          </p>

          <div className="space-y-4 text-sm">
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span className="font-medium text-gray-500">Tech Stack</span>
              <span className="text-gray-900">
                React, React Native, TypeScript, Lucide Icons
              </span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span className="font-medium text-gray-500">Key Features</span>
              <span className="text-gray-900">
                Smart Synonym & Fuzzy Matching
              </span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span className="font-medium text-gray-500">Type</span>
              <span className="text-gray-900">Cross-Platform NPM Library</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-2 gap-6">
              <span className="font-medium text-gray-500 whitespace-nowrap">
                Role
              </span>
              <p className="text-gray-900 leading-relaxed max-w-[70%]">
                Sole Developer (End-to-end implemented, and published the Smart
                Icons Kit)
              </p>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span className="font-medium text-gray-500">Timeline</span>
              <span className="text-gray-900">3 days</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span className="font-medium text-gray-500">package Link</span>
              <a
                href="https://www.npmjs.com/package/smart-icons-kit"
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
              Developers often face inconsistencies and redundant imports when
              managing icons across React web and React Native projects.
              Existing icon libraries lack synonym awareness, fuzzy search
              capabilities, or seamless cross-platform compatibility — leading
              to repetitive code, complex mappings, and reduced productivity.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">Outcome</h2>
            <p className="text-gray-700 leading-relaxed">
              Smart Icons Kit provides an elegant, unified icon management
              solution that eliminates redundancy and simplifies icon usage.
              With intelligent synonym matching, prefix-based fuzzy search, and
              O(1) performance for lookups, it significantly improves developer
              experience. It supports both React web and React Native
              environments, achieving full cross-platform consistency and
              scalability.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">Complexity</h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              <li>
                <span className="font-semibold">Algorithmic:</span> Optimized
                O(1) hash lookups and O(k) fuzzy matching using trie-like search
                strategies.
              </li>
              <li>
                <span className="font-semibold">Dataset Management:</span> 200+
                icons with over 1,000+ curated synonyms across 19 categories.
              </li>
              <li>
                <span className="font-semibold">Cross-Platform Handling:</span>{" "}
                Unified API for React and React Native with prop normalization.
              </li>
              <li>
                <span className="font-semibold">Extensibility:</span>{" "}
                Plugin-based architecture for adding new icon families
                dynamically.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">Key Features</h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              <li>🔍 Smart synonym and fuzzy prefix matching</li>
              <li>⚡ O(1) icon lookup performance for exact matches</li>
              <li>🧩 Full TypeScript support with strong typing</li>
              <li>📦 Cross-platform support for React and React Native</li>
              <li>🛠️ Fallback icon rendering for unmatched queries</li>
              <li>
                🌍 Extensible dataset supporting 200+ icons and 1,000+ synonyms
              </li>
              <li>🚀 Lightweight and tree-shakeable NPM package</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartIconsKit;
