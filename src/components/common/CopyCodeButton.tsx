"use client";

import { useState } from "react";

export default function CopyCodeButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — fail silently, button simply won't confirm.
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? "Code copied to clipboard" : "Copy code to clipboard"}
      className="rounded-md border border-neutral-700 px-2.5 py-1 text-xs font-medium text-neutral-300 hover:bg-neutral-800 hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-400"
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}
