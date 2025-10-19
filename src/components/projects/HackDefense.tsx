import React from "react";
import hackDefenseLandingPage from "../../assets/images/projects/hackDefenseLandingPage.png";

interface HackDefenseProps {
  onBack: () => void;
}

const HackDefense = ({ onBack }: HackDefenseProps) => {
  return (
    <div className="bg-white text-gray-900 font-sans p-6 sm:p-10 max-w-6xl mx-auto space-y-12">
      <div className="flex justify-center shadow-2xl">
        <img
          src={hackDefenseLandingPage.src}
          alt="Smart Icons Kit Demo"
          className="w-full rounded-lg"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h1 className="text-3xl font-semibold leading-snug mb-4">
            HackDefense
          </h1>

          <p className="text-gray-700 mb-8">
            A minimal landing page built with React and styled using Tailwind
            CSS for a cybersecurity service called Hack Defence, hosted on
            Hostinger. The website presented information about the cybersecurity
            services offered by the client.
          </p>

          <div className="space-y-4 text-sm">
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span className="font-medium text-gray-500">Tech Stack</span>
              <span className="text-gray-900">
                React, Tailwind CSS, TypeScript, Hostinger
              </span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-2 gap-6">
              <span className="font-medium text-gray-500 whitespace-nowrap">
                Role
              </span>
              <p className="text-gray-900 leading-relaxed max-w-[70%]">
                Sole Developer (Designed, developed, and published)
              </p>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span className="font-medium text-gray-500">Timeline</span>
              <span className="text-gray-900">3 days</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span className="font-medium text-gray-500">Website Link</span>
              <a
                href="https://hackdefense.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View Website →
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h2 className="text-2xl font-semibold mb-3">Problem Statement</h2>
            <p className="text-gray-700 leading-relaxed">
              Client requirement was a minimal monochromatic static website: a
              simple landing page for HackDefence.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">Outcome</h2>
            <p className="text-gray-700 leading-relaxed">
              The website displayed a list of services provided and detailed
              information about each service. The design focused on simplicity,
              readability, and quick access to key service information, keeping
              the overall user experience clean and minimalistic.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HackDefense;
