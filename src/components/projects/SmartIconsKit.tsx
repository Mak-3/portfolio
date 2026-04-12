import React, { useState } from "react";
import { HelpCircle } from "lucide-react";
import { SmartIcon } from "smart-icons-kit";

interface SmartIconsKitProps {
  onBack: () => void;
}

const SmartIconsKit = ({ onBack }: SmartIconsKitProps) => {
  const [query, setQuery] = useState("home");
  const [prefixMatch, setPrefixMatch] = useState(true);
  const [sentenceMatch, setSentenceMatch] = useState(true);

  const quickTryTerms = [
    "home",
    "house",
    "notification",
    "shopping",
    "phone outgoing",
    "I need a camera icon",
    "hotel",
    "social github",
  ];

  const sampleUseCases = [
    { label: "Synonym", value: "house" },
    { label: "Prefix Match", value: "shop" },
    { label: "Sentence Match", value: "I need a camera icon" },
  ];

  return (
    <div className="bg-white text-gray-900 font-sans p-6 sm:p-10 max-w-6xl mx-auto space-y-12">
      <div className="rounded-2xl border border-gray-200 bg-linear-to-br from-slate-50 to-blue-50 p-5 sm:p-7 space-y-5 shadow-sm">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold">Live Smart Icons Demo</h2>
            <p className="text-sm text-gray-600 mt-1">
              Type any icon intent and see Smart Icons Kit resolve the best match in real time.
            </p>
          </div>
          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-100 text-blue-700">
            Powered by `smart-icons-kit`
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr,0.8fr] gap-5">
          <div className="space-y-4">
            <div>
              <label htmlFor="icon-query" className="text-sm font-medium text-gray-700 block mb-2">
                Query
              </label>
              <input
                id="icon-query"
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Try: house, shopping, I need a camera icon..."
                className="w-full rounded-lg border border-gray-300 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {quickTryTerms.map((term) => (
                <button
                  key={term}
                  type="button"
                  onClick={() => setQuery(term)}
                  className="rounded-full border border-gray-300 bg-white px-3 py-1.5 text-xs text-gray-700 hover:bg-gray-100 transition"
                >
                  {term}
                </button>
              ))}
            </div>

            <div className="flex gap-6 flex-wrap">
              <label className="inline-flex items-center gap-2 text-sm text-gray-700">
                <input
                  type="checkbox"
                  checked={prefixMatch}
                  onChange={(event) => setPrefixMatch(event.target.checked)}
                  className="h-4 w-4 accent-blue-600"
                />
                Prefix match
              </label>
              <label className="inline-flex items-center gap-2 text-sm text-gray-700">
                <input
                  type="checkbox"
                  checked={sentenceMatch}
                  onChange={(event) => setSentenceMatch(event.target.checked)}
                  className="h-4 w-4 accent-blue-600"
                />
                Sentence match
              </label>
            </div>
          </div>

          <div className="rounded-xl border border-blue-100 bg-white p-4 flex flex-col justify-center items-center text-center min-h-[180px]">
            <SmartIcon
              name={query}
              prefixMatch={prefixMatch}
              sentenceMatch={sentenceMatch}
              fallbackIcon={HelpCircle}
              size={52}
              strokeWidth={2}
              className="text-blue-600"
            />
            <p className="mt-3 text-sm text-gray-600">
              Resolved icon for: <span className="font-medium text-gray-900">{query || "empty query"}</span>
            </p>
            <p className="text-xs text-gray-500 mt-1">Fallback icon appears when no match is found.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {sampleUseCases.map((sample) => (
            <div
              key={sample.label}
              className="rounded-lg border border-gray-200 bg-white px-3 py-3 flex items-center justify-between"
            >
              <div>
                <p className="text-xs text-gray-500">{sample.label}</p>
                <p className="text-sm font-medium text-gray-800">{sample.value}</p>
              </div>
              <SmartIcon
                name={sample.value}
                prefixMatch
                sentenceMatch
                fallbackIcon={HelpCircle}
                size={20}
                className="text-blue-600"
              />
            </div>
          ))}
        </div>
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
              <span className="font-medium text-gray-500">NPM Package Link</span>
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
