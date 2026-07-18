import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { codeToHtml } from "shiki";
import CopyCodeButton from "../../components/common/CopyCodeButton";
import profileImage from "../../assets/images/MohammedAbdullahKhanProfile.png";

const SITE_URL = "https://www.mohammedabdullahkhan.com";
const PAGE_URL = `${SITE_URL}/accessibility-handbook`;

const TITLE =
  "Accessibility Handbook: WCAG, ARIA & React Native A11y Guide | Mohammed Abdullah Khan";
const DESCRIPTION =
  "A free, code-first accessibility guide: WCAG 2.2 & POUR principles, semantic HTML, ARIA, keyboard navigation, and React Native accessibility props for VoiceOver and TalkBack.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "accessibility handbook",
    "web accessibility guide",
    "WCAG 2.2 guide",
    "WCAG POUR principles",
    "ARIA roles and attributes",
    "aria-live regions",
    "semantic HTML accessibility",
    "keyboard navigation accessibility",
    "focus management React",
    "color contrast WCAG AA",
    "React Native accessibility",
    "accessibilityLabel accessibilityRole",
    "React Native accessibility props",
    "VoiceOver vs TalkBack",
    "mobile accessibility testing",
    "screen reader testing",
    "accessible forms and validation",
    "a11y checklist for developers",
  ].join(", "),
  authors: [{ name: "Mohammed Abdullah Khan", url: SITE_URL }],
  creator: "Mohammed Abdullah Khan",
  category: "Technology",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "Mohammed Abdullah Khan Portfolio",
    type: "article",
    locale: "en_US",
    publishedTime: "2025-11-16T00:00:00.000Z",
    authors: [SITE_URL],
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Accessibility Handbook cover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    creator: "@MohammedAb86610",
    images: [`${SITE_URL}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "Accessibility Handbook: A Practical Guide to Web & React Native Accessibility",
  description: DESCRIPTION,
  author: {
    "@type": "Person",
    name: "Mohammed Abdullah Khan",
    url: "https://www.linkedin.com/in/mohammed-abdullah-khan-7b82a31a5/",
  },
  datePublished: "2025-11-16",
  dateModified: "2025-11-16",
  image: `${SITE_URL}/og-image.png`,
  mainEntityOfPage: PAGE_URL,
  keywords:
    "WCAG, POUR principles, ARIA, semantic HTML, keyboard navigation, color contrast, React Native accessibility, VoiceOver, TalkBack",
  inLanguage: "en-US",
  isAccessibleForFree: true,
  publisher: {
    "@type": "Person",
    name: "Mohammed Abdullah Khan",
    url: SITE_URL,
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Accessibility Handbook",
      item: PAGE_URL,
    },
  ],
};

const faqs = [
  {
    q: "What are the WCAG POUR principles?",
    a: "POUR stands for Perceivable, Operable, Understandable, and Robust — the four principles WCAG 2.1/2.2 are built on. Perceivable means users can perceive the content (text alternatives, captions, contrast). Operable means the interface can be used, including by keyboard alone. Understandable means content and interactions behave predictably. Robust means the code works reliably across current and future assistive technologies.",
  },
  {
    q: "What color contrast ratio does WCAG AA require?",
    a: "WCAG 2.1 Level AA requires a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text (18pt+, or 14pt+ bold). UI components and focus indicators need at least 3:1 contrast against their background. Level AAA raises this to 7:1 for normal text.",
  },
  {
    q: "When should I use ARIA instead of semantic HTML?",
    a: "Only when there's no native HTML element or attribute that already provides the semantics and behavior you need. The first rule of ARIA is to prefer native HTML — a <button> already has the right role, keyboard support, and focus behavior for free. Incorrect ARIA is worse than no ARIA at all.",
  },
  {
    q: "What is the minimum touch target size for mobile accessibility?",
    a: "WCAG 2.1 requires at least 44×44 points on iOS or 48×48 dp on Android for any interactive element. Best practice is to use 48×48 dp as the minimum across both platforms, using props like hitSlop in React Native to enlarge the touchable area without changing the visual size of an icon.",
  },
  {
    q: "What's the difference between VoiceOver and TalkBack?",
    a: "VoiceOver (iOS) and TalkBack (Android) are the built-in mobile screen readers. They share similar gesture patterns — swipe to move between elements, double-tap to activate — but differ in verbosity (VoiceOver is more verbose by default), role pronunciation, navigation modes (VoiceOver's rotor vs. TalkBack's reading controls), and how custom actions are exposed. Always test with both.",
  },
  {
    q: "How do you make a React Native app accessible?",
    a: "Use the core accessibility props on every interactive element: accessibilityRole to describe what it is, accessibilityLabel for the text a screen reader announces, accessibilityHint for extra context, and accessibilityState for dynamic states like checked or selected. Manage focus explicitly when content changes, announce dynamic updates with AccessibilityInfo.announceForAccessibility(), and test with both VoiceOver and TalkBack.",
  },
  {
    q: "What does aria-live do?",
    a: "aria-live tells assistive technology that a region of the page will update dynamically. aria-live=\"polite\" announces the change when the user is idle; aria-live=\"assertive\" interrupts immediately for urgent messages. role=\"status\" is implicitly polite and role=\"alert\" is implicitly assertive.",
  },
  {
    q: "Why does focus management matter for accessibility?",
    a: "Screen reader and keyboard users navigate linearly through focus order. If focus isn't moved deliberately when content changes — like opening a modal or submitting a form — users lose their place and can't find the new content. Proper focus management moves focus intentionally to what changed and returns it to a sensible location afterward.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

// ---------- Presentational helpers ----------

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="scroll-mt-28 font-heading text-3xl md:text-4xl font-bold text-neutral-900 mt-20 mb-6 pb-3 border-b border-neutral-200"
    >
      {children}
    </h2>
  );
}

function H3({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h3
      id={id}
      className="scroll-mt-28 font-heading text-2xl font-semibold text-neutral-900 mt-12 mb-4"
    >
      {children}
    </h3>
  );
}

function H4({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="font-heading text-lg font-semibold text-neutral-900 mt-6 mb-2">
      {children}
    </h4>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="text-neutral-700 leading-relaxed mb-4">{children}</p>;
}

function UL({ children }: { children: React.ReactNode }) {
  return (
    <ul className="list-disc pl-6 space-y-2 text-neutral-700 leading-relaxed mb-4">
      {children}
    </ul>
  );
}

async function Code({
  code,
  lang = "tsx",
}: {
  code: string;
  lang?: "html" | "tsx";
}) {
  const html = await codeToHtml(code, { lang, theme: "github-dark" });

  return (
    <div className="my-5 overflow-hidden rounded-lg border border-neutral-800 bg-neutral-900">
      <div className="flex items-center justify-between border-b border-neutral-800 px-4 py-2">
        <span className="font-mono text-xs uppercase tracking-wide text-neutral-400">
          {lang}
        </span>
        <CopyCodeButton code={code} />
      </div>
      <div
        className="overflow-x-auto text-[13px] leading-relaxed [&_pre]:m-0 [&_pre]:bg-transparent! [&_pre]:p-4"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}

function Callout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-lg border border-teal-200 bg-teal-50 px-5 py-4 my-5">
      <p className="font-semibold text-teal-900 mb-1">{title}</p>
      <div className="text-teal-900/90 text-sm leading-relaxed">{children}</div>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-center">
      <div className="font-heading text-2xl font-bold text-teal-700">{value}</div>
      <div className="text-xs text-neutral-600 mt-1">{label}</div>
    </div>
  );
}

const toc = [
  {
    id: "what-is-accessibility",
    label: "1. Digital Accessibility",
    children: [
      { id: "understanding-disability", label: "Understanding Disability" },
      { id: "global-impact", label: "The Global Impact" },
      { id: "pour-principles", label: "The POUR Principles" },
      { id: "wcag-conformance", label: "WCAG Conformance Levels" },
      { id: "assistive-technologies", label: "Assistive Technologies" },
      { id: "testing-methodology", label: "Testing Methodology" },
    ],
  },
  {
    id: "web-accessibility",
    label: "2. Web Accessibility",
    children: [
      { id: "semantic-html", label: "Semantic HTML" },
      { id: "aria", label: "ARIA — When and How" },
      { id: "keyboard-navigation", label: "Keyboard Navigation" },
      { id: "forms-and-validation", label: "Forms & Input Validation" },
      { id: "color-contrast", label: "Color, Contrast & Visual Design" },
    ],
  },
  {
    id: "mobile-accessibility",
    label: "3. React Native Accessibility",
    children: [
      { id: "rn-fundamentals", label: "RN Accessibility Fundamentals" },
      { id: "screen-readers-mobile", label: "Screen Readers on Mobile" },
      { id: "touch-targets-gestures", label: "Touch Targets & Gestures" },
      { id: "rn-forms", label: "Forms & Input in React Native" },
      { id: "focus-management-navigation", label: "Focus Management & Navigation" },
      { id: "lists-navigation-components", label: "Lists, Navigation & Complex Components" },
      { id: "testing-rn-accessibility", label: "Testing React Native Accessibility" },
    ],
  },
  {
    id: "best-practices",
    label: "4. Best Practices & Examples",
    children: [],
  },
  {
    id: "faq",
    label: "5. FAQ",
    children: [],
  },
  {
    id: "resources",
    label: "6. Resources & Closing",
    children: [],
  },
];

export default function AccessibilityHandbookPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
          <Link
            href="/"
            className="flex items-center gap-2 font-heading font-semibold text-neutral-900 hover:text-teal-700 transition-colors"
          >
            <Image
              src={profileImage}
              alt=""
              className="h-8 w-8 rounded-full object-cover"
            />
            <span className="sr-only sm:not-sr-only">Mohammed Abdullah Khan</span>
          </Link>
          <a
            href="/accessibility-handbook.pdf"
            download
            className="rounded-md bg-neutral-900 px-4 py-2 text-sm text-white hover:bg-teal-700 transition-colors"
          >
            Download PDF
          </a>
        </div>
      </header>

      <div className="bg-white">
        {/* Hero */}
        <div className="mx-auto max-w-7xl px-6 pt-14 pb-10">
          <p className="text-teal-700 font-semibold text-sm tracking-wide uppercase mb-3">
            Accessibility Handbook · v1.0
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-neutral-900 max-w-4xl leading-tight">
            Accessibility Handbook: A Practical Guide to Web & React Native
            Accessibility
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-neutral-600 leading-relaxed">
            Everything a developer needs to build inclusive digital products —
            WCAG and the POUR principles, semantic HTML and ARIA, keyboard and
            screen-reader support, and a deep, code-first walkthrough of React
            Native accessibility for iOS VoiceOver and Android TalkBack.
          </p>
          <p className="mt-6 text-sm text-neutral-500">
            By{" "}
            <a
              href="https://www.linkedin.com/in/mohammed-abdullah-khan-7b82a31a5/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-neutral-800 hover:text-teal-700 underline underline-offset-2"
            >
              Mohammed Abdullah Khan
            </a>{" "}
             Version 1.0
          </p>
        </div>

        <div className="mx-auto max-w-7xl px-6 pb-24 lg:grid lg:grid-cols-[260px_1fr] lg:gap-14">
          {/* Desktop sticky TOC */}
          <aside className="hidden lg:block">
            <nav
              aria-label="Table of contents"
              className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pr-2"
            >
              <p className="font-heading text-sm font-semibold text-neutral-900 mb-3">
                Contents
              </p>
              <ol className="space-y-4 text-sm">
                {toc.map((part) => (
                  <li key={part.id}>
                    <a
                      href={`#${part.id}`}
                      className="font-medium text-neutral-800 hover:text-teal-700"
                    >
                      {part.label}
                    </a>
                    {part.children.length > 0 && (
                      <ul className="mt-1.5 space-y-1.5 border-l border-neutral-200 pl-3">
                        {part.children.map((child) => (
                          <li key={child.id}>
                            <a
                              href={`#${child.id}`}
                              className="text-neutral-500 hover:text-teal-700"
                            >
                              {child.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          {/* Mobile TOC */}
          <details className="lg:hidden mb-10 rounded-lg border border-neutral-200 bg-neutral-50 p-4">
            <summary className="font-heading font-semibold text-neutral-900 cursor-pointer">
              Contents
            </summary>
            <ol className="mt-4 space-y-3 text-sm">
              {toc.map((part) => (
                <li key={part.id}>
                  <a href={`#${part.id}`} className="font-medium text-neutral-800">
                    {part.label}
                  </a>
                </li>
              ))}
            </ol>
          </details>

          {/* Article */}
          <article id="main-content" className="max-w-3xl">
            <P>
              Accessibility (A11y) is about making digital experiences usable
              for everyone, including people with visual, auditory, motor, or
              cognitive disabilities. It&rsquo;s the practice of writing code,
              designing interfaces, and structuring content so that no user is
              left out, no matter how they interact with technology.
            </P>
            <P>
              As developers, accessibility isn&rsquo;t just another checklist
              — it&rsquo;s part of building quality software. It means using
              semantic HTML, managing focus correctly, testing with real
              assistive tools, and ensuring every component works for all
              users. Beyond empathy, it also improves performance, SEO, and
              usability: it&rsquo;s good for users, good for business, and
              good for developers who care about clean, future-proof
              solutions.
            </P>

            {/* ================= PART 1 ================= */}
            <H2 id="what-is-accessibility">Part 1 — Digital Accessibility</H2>
            <P>
              Digital accessibility ensures that digital products — websites,
              mobile apps, documents, and technologies — are designed so that
              people with disabilities can perceive, understand, navigate, and
              interact with them effectively.
            </P>

            <H3 id="understanding-disability">1.1 Understanding Disability</H3>
            <P>
              Disability is diverse and affects people in different ways.
              Digital accessibility addresses multiple types of disabilities:
            </P>
            <UL>
              <li>
                <strong>Visual:</strong> Blindness, low vision, color blindness
              </li>
              <li>
                <strong>Auditory:</strong> Deafness, hard of hearing
              </li>
              <li>
                <strong>Motor/Physical:</strong> Limited dexterity, tremors,
                paralysis
              </li>
              <li>
                <strong>Cognitive:</strong> Learning disabilities, memory
                impairments, attention disorders
              </li>
              <li>
                <strong>Neurological:</strong> Seizure disorders, vestibular
                disorders
              </li>
              <li>
                <strong>Speech:</strong> Difficulty or inability to speak
              </li>
            </UL>
            <Callout title="Temporary and situational disabilities">
              Accessibility also benefits people with temporary impairments
              (a broken arm, eye surgery) or situational limitations (bright
              sunlight, a noisy environment, slow internet).
            </Callout>

            <H3 id="global-impact">1.2 The Global Impact</H3>
            <P>According to the World Health Organization (WHO):</P>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-5">
              <Stat value="1.3B+" label="people experience significant disability (16% of the global population)" />
              <Stat value="253M" label="people are visually impaired" />
              <Stat value="466M" label="people have disabling hearing loss" />
              <Stat value="$13T" label="market represented by people with disabilities" />
            </div>
            <P>
              These numbers are growing as populations age. The business case
              extends well beyond compliance: accessible products expand
              market reach, avoid legal risk (ADA, Section 508, EN 301 549,
              AODA), rank better in search engines, improve usability for
              every user, strengthen brand reputation, and drive innovation
              (voice control, captions, dark mode all began as accessibility
              features).
            </P>

            <H3 id="pour-principles">2. The POUR Principles</H3>
            <P>
              WCAG 2.1 (and the newer WCAG 2.2) are organized around four
              principles, known by the acronym <strong>POUR</strong>. These
              apply to every digital platform, web or mobile.
            </P>
            <H4>Perceivable</H4>
            <P>Users must be able to perceive the information being presented.</P>
            <UL>
              <li><strong>Text Alternatives:</strong> provide text alternatives for non-text content</li>
              <li><strong>Time-based Media:</strong> provide alternatives for audio and video</li>
              <li><strong>Adaptable:</strong> content can be presented in different ways without losing information</li>
              <li><strong>Distinguishable:</strong> make it easier to see and hear content (contrast, text size, color)</li>
            </UL>
            <H4>Operable</H4>
            <P>Users must be able to operate the interface.</P>
            <UL>
              <li><strong>Keyboard Accessible:</strong> all functionality available from a keyboard</li>
              <li><strong>Enough Time:</strong> users have enough time to read and use content</li>
              <li><strong>Seizures:</strong> don&rsquo;t design content that causes seizures</li>
              <li><strong>Navigable:</strong> help users navigate, find content, and know where they are</li>
              <li><strong>Input Modalities:</strong> make it easier to operate functionality through various inputs</li>
            </UL>
            <H4>Understandable</H4>
            <P>Information and the operation of the UI must be understandable.</P>
            <UL>
              <li><strong>Readable:</strong> make text readable and understandable</li>
              <li><strong>Predictable:</strong> pages appear and operate in predictable ways</li>
              <li><strong>Input Assistance:</strong> help users avoid and correct mistakes</li>
            </UL>
            <H4>Robust</H4>
            <P>Content must work with current and future technologies.</P>
            <UL>
              <li><strong>Compatible:</strong> maximize compatibility with current and future user agents and assistive technologies</li>
              <li><strong>Valid Code:</strong> use valid, semantic code that assistive technologies can parse</li>
              <li><strong>Name, Role, Value:</strong> every component has an accessible name, role, and value</li>
            </UL>

            <H3 id="wcag-conformance">3. WCAG Conformance Levels</H3>
            <P>
              WCAG defines three levels of conformance, each building on the
              previous one:
            </P>
            <UL>
              <li>
                <strong>Level A</strong> — the most basic level. Failure to
                meet Level A creates significant barriers. Essential
                foundation.
              </li>
              <li>
                <strong>Level AA</strong> — deals with the biggest and most
                common barriers. The target level for most organizations and
                often legally required.{" "}
                <em>Recommended baseline for the whole site.</em>
              </li>
              <li>
                <strong>Level AAA</strong> — the highest level. Not required
                for entire sites, since some content can&rsquo;t meet AAA.
                Target it for specific critical content.
              </li>
            </UL>
            <P>Key Level AA requirements you&rsquo;ll encounter frequently:</P>
            <UL>
              <li><strong>Color Contrast:</strong> 4.5:1 for normal text, 3:1 for large text</li>
              <li><strong>Resize Text:</strong> resizable up to 200% without loss of content</li>
              <li><strong>Reflow:</strong> content reflows to a single column without horizontal scrolling</li>
              <li><strong>Non-text Contrast:</strong> 3:1 contrast for UI components</li>
              <li><strong>Text Spacing:</strong> no loss of content when text spacing is adjusted</li>
              <li><strong>Focus Visible:</strong> the keyboard focus indicator is visible</li>
              <li><strong>Consistent Navigation:</strong> navigation stays consistent across pages</li>
            </UL>

            <H3 id="assistive-technologies">4. Assistive Technologies</H3>
            <P>
              These technologies bridge users with disabilities and digital
              content — understanding them helps you build better experiences.
            </P>
            <H4>Screen Readers</H4>
            <P>
              Screen readers convert digital text into synthesized speech or
              refreshable Braille: <strong>JAWS</strong> (Windows, commercial),{" "}
              <strong>NVDA</strong> (Windows, free), <strong>VoiceOver</strong>{" "}
              (built into macOS/iOS/iPadOS), <strong>TalkBack</strong> (Android),
              and <strong>Narrator</strong> (Windows). They parse HTML
              structure and semantics, announce headings/landmarks/links/form
              controls, allow navigation by element type, and provide a
              virtual cursor with browse/forms/table navigation modes.
            </P>
            <H4>Screen Magnification</H4>
            <P>
              ZoomText, the built-in Windows/macOS Magnifier, and browser zoom
              all enlarge the screen for low-vision users. Design for it:
              content must reflow at 200% zoom, avoid horizontal scrolling at
              high zoom, and keep adequate spacing between interactive
              elements.
            </P>
            <H4>Voice Control and Dictation</H4>
            <P>
              Dragon NaturallySpeaking, macOS/iOS Voice Control, and Android
              Voice Access let users navigate by speaking. Use visible labels
              that match accessible names, give similar elements unique names,
              and label every interactive element.
            </P>
            <H4>Alternative Input Devices</H4>
            <P>
              Switch controls, eye tracking, head mice, mouth sticks, and
              sip-and-puff devices serve users with motor disabilities — most
              emulate a keyboard. Ensure full keyboard accessibility, target
              sizes of at least 44×44 px on mobile, generous input time, and
              avoid (or provide alternatives to) time-based interactions.
            </P>

            <H3 id="testing-methodology">5. Testing Methodology</H3>
            <P>A comprehensive testing strategy includes three layers, and all three are necessary:</P>
            <UL>
              <li><strong>Automated Testing (Foundation):</strong> catches 30–40% of issues, runs continuously</li>
              <li><strong>Manual Testing (Core):</strong> catches 50–60% of issues, requires expertise</li>
              <li><strong>User Testing (Peak):</strong> catches the rest, provides real-world validation</li>
            </UL>
            <H4>Automated Testing Tools</H4>
            <P>
              Browser extensions for manual audits: <strong>axe DevTools</strong>,{" "}
              <strong>WAVE</strong>, <strong>Lighthouse</strong>, and the{" "}
              <strong>IBM Equal Access Checker</strong>. For CI/CD:{" "}
              <strong>Pa11y</strong>, <strong>axe-core</strong>,{" "}
              <strong>jest-axe</strong> (React/Jest), and{" "}
              <strong>cypress-axe</strong> (Cypress E2E).
            </P>
            <H4>Manual Testing Checklist</H4>
            <UL>
              <li>Navigate the entire site using only Tab, Shift+Tab, Enter, Space, and arrow keys</li>
              <li>Confirm the focus indicator is always visible with 3:1 contrast</li>
              <li>Test with NVDA (Windows) or VoiceOver (Mac)</li>
              <li>Zoom to 200% and verify no content loss or horizontal scrolling</li>
              <li>Check all text and UI components meet minimum contrast ratios</li>
              <li>Confirm color isn&rsquo;t the only way information is conveyed</li>
              <li>Verify form errors are clearly announced and associated with fields</li>
              <li>Check every image has appropriate alt text and every video has accurate captions</li>
              <li>Check the heading hierarchy is logical, with no skipped levels</li>
            </UL>
            <H4>Screen Reader Testing Commands</H4>
            <UL>
              <li><strong>NVDA:</strong> Insert+Down Arrow (browse mode), Insert+Space (switch modes)</li>
              <li><strong>VoiceOver:</strong> VO+A (read all), VO+Cmd+H (next heading), VO+Cmd+L (next link)</li>
              <li><strong>TalkBack:</strong> swipe right (next), swipe left (previous), double-tap (activate)</li>
            </UL>
            <H4>User Testing with People with Disabilities</H4>
            <P>
              Nothing replaces testing with actual users who have
              disabilities — they surface issues automated tools and expert
              reviews miss. Recruit users across vision, motor, cognitive, and
              hearing disabilities; give them real scenarios; let them use
              their own assistive tech and settings; observe without
              interrupting; and compensate them fairly. Find testers through{" "}
              <strong>Fable (fable.io)</strong>, <strong>Access Works</strong>,
              local disability organizations, or existing customers who use
              assistive technologies.
            </P>

            {/* ================= PART 2 ================= */}
            <H2 id="web-accessibility">Part 2 — Web Accessibility</H2>

            <H3 id="semantic-html">6. Semantic HTML — The Foundation</H3>
            <P>
              Semantic HTML elements clearly describe their meaning to both
              browsers and assistive technologies. Using the correct elements
              gives you built-in accessibility (native keyboard support,
              roles, behaviors), proper screen reader support, better SEO,
              easier maintainability, and better cross-device compatibility.
            </P>
            <H4>Document Structure</H4>
            <Code
              lang="html"
              code={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Accessible Page</title>
</head>
<body>
  <header>
    <nav aria-label="Main navigation">
      <a href="/">Home</a> |
      <a href="/about">About</a> |
      <a href="/contact">Contact</a>
    </nav>
  </header>

  <main id="main-content">
    <h1>Page Title</h1>

    <article>
      <h2>Article Heading</h2>
      <p>Article content goes here...</p>
    </article>

    <aside aria-label="Related links">
      <h2>Related Articles</h2>
      <a href="/article1">Article 1</a>
    </aside>
  </main>

  <footer>
    <p>&copy; 2025 Company Name</p>
  </footer>
</body>
</html>`}
            />
            <P>Key semantic elements:</P>
            <UL>
              <li><code>&lt;header&gt;</code> — introductory content or navigation</li>
              <li><code>&lt;nav&gt;</code> — navigation links</li>
              <li><code>&lt;main&gt;</code> — the main content (use once per page)</li>
              <li><code>&lt;article&gt;</code> — self-contained content that could stand alone</li>
              <li><code>&lt;section&gt;</code> — a thematic grouping of content with a heading</li>
              <li><code>&lt;aside&gt;</code> — content tangentially related to the surrounding content</li>
              <li><code>&lt;footer&gt;</code> — footer information</li>
            </UL>

            <H4>Heading Hierarchy</H4>
            <P>
              Headings create a document outline that screen reader users
              navigate. Use one <code>&lt;h1&gt;</code> per page, never skip
              levels (h1 → h2 → h3, not h1 → h3), use headings for structure
              rather than styling, and make sure each heading accurately
              describes the content that follows.
            </P>
            <Code
              lang="html"
              code={`<!-- ✅ Good Heading Hierarchy -->
<section>
  <h1>Introduction to Web Accessibility</h1>

  <h2>What is Accessibility?</h2>
  <p>Content...</p>

  <h3>Types of Disabilities</h3>
  <p>Content...</p>

  <h3>Benefits of Accessibility</h3>
  <p>Content...</p>

  <h2>Getting Started</h2>
  <p>Content...</p>
</section>

<!-- ❌ Bad Heading Hierarchy: Skipped Levels -->
<section>
  <h1>Title</h1>
  <h4>Should be h2</h4>
</section>`}
            />

            <H4>Links and Buttons</H4>
            <P>
              Links (<code>&lt;a&gt;</code>) navigate to a different page or
              location; buttons (<code>&lt;button&gt;</code>) trigger an
              action on the current page. Use descriptive link text (never
              &ldquo;click here&rdquo;), indicate when a link opens in a new
              window, distinguish visited from unvisited links, and give
              links adequate spacing.
            </P>
            <Code
              lang="html"
              code={`<!-- ✅ Accessible icon button -->
<button aria-label="Close dialog">
  <span aria-hidden="true">&times;</span>
</button>

<!-- ✅ Toggle button -->
<button
  aria-pressed="false"
  onclick="this.setAttribute('aria-pressed',
    this.getAttribute('aria-pressed') === 'true' ? 'false' : 'true')"
>
  Bold
</button>

<!-- ✅ Expandable section -->
<button aria-expanded="false" aria-controls="details" onclick="toggleDetails()">
  Show Details
</button>
<div id="details" hidden>Details content...</div>

<!-- ✅ Current page in navigation -->
<nav aria-label="Main">
  <a href="/">Home</a>
  <a href="/about">About</a>
  <a href="/products" aria-current="page">Products</a>
</nav>`}
            />

            <H4>Form Elements</H4>
            <Code
              lang="html"
              code={`<form>
  <!-- Text input with explicit label -->
  <label for="name">Full Name:</label>
  <input type="text" id="name" name="name" required>

  <!-- Input with additional description -->
  <label for="email">Email Address:</label>
  <input
    type="email"
    id="email"
    name="email"
    aria-describedby="email-hint"
    required
  >
  <div id="email-hint">We'll never share your email.</div>

  <!-- Radio buttons (grouped) -->
  <fieldset>
    <legend>Choose your plan:</legend>
    <label><input type="radio" name="plan" value="basic"> Basic</label>
    <label><input type="radio" name="plan" value="pro"> Pro</label>
  </fieldset>

  <!-- Checkbox -->
  <label>
    <input type="checkbox" name="newsletter" value="yes">
    Subscribe to newsletter
  </label>

  <!-- Select dropdown -->
  <label for="country">Country:</label>
  <select id="country" name="country" required>
    <option value="">Select a country</option>
    <option value="us">United States</option>
    <option value="ca">Canada</option>
  </select>

  <button type="submit">Create Account</button>
</form>`}
            />

            <H3 id="aria">7. ARIA — When and How</H3>
            <P>
              ARIA (Accessible Rich Internet Applications) fills gaps in HTML
              semantics — but it must be used correctly, since incorrect ARIA
              is worse than no ARIA at all.
            </P>
            <H4>The Five Rules of ARIA</H4>
            <UL>
              <li>If a native HTML element or attribute already has the semantics and behavior you need, use it instead of repurposing an element with ARIA.</li>
              <li>Do not change native semantics, unless you really have to.</li>
              <li>All interactive ARIA controls must be usable with the keyboard.</li>
              <li>Do not use <code>role=&quot;presentation&quot;</code> or <code>aria-hidden=&quot;true&quot;</code> on a focusable element.</li>
              <li>All interactive elements must have an accessible name.</li>
            </UL>
            <H4>Common ARIA Roles</H4>
            <P>
              Roles are added via the <code>role</code> attribute (e.g.{" "}
              <code>&lt;div role=&quot;button&quot;&gt;</code>) and give
              meaning to non-semantic elements in the accessibility tree. Many
              HTML elements already carry an implicit role (a{" "}
              <code>&lt;button&gt;</code> is already <code>role=&quot;button&quot;</code>
              ).
            </P>
            <UL>
              <li><strong>Document Structure roles</strong> — heading, paragraph, term, definition (prefer semantic HTML for these)</li>
              <li><strong>Widget roles</strong> — button, checkbox, combobox, textbox, slider</li>
              <li><strong>Landmark roles</strong> — navigation, main, complementary, banner, contentinfo (use sparingly)</li>
              <li><strong>Live Region roles</strong> — alert, status</li>
              <li><strong>Window roles</strong> — dialog, alertdialog</li>
              <li><strong>Abstract roles</strong> — structure, range, widget (not for direct use — they define the ARIA role hierarchy)</li>
            </UL>
            <H4>ARIA States and Properties</H4>
            <UL>
              <li><code>aria-label</code> — provides an accessible name</li>
              <li><code>aria-labelledby</code> — references element(s) that label this element</li>
              <li><code>aria-describedby</code> — references element(s) that describe this element</li>
              <li><code>aria-hidden</code> — hides an element from assistive technologies</li>
              <li><code>aria-expanded</code> — indicates expanded or collapsed state</li>
              <li><code>aria-pressed</code> — indicates the pressed state of a toggle button</li>
              <li><code>aria-disabled</code> — indicates the element is disabled</li>
              <li><code>aria-invalid</code> — indicates a validation error</li>
              <li><code>aria-live</code> — indicates a region will update dynamically</li>
              <li><code>aria-current</code> — indicates the current item in a set</li>
            </UL>
            <H4>ARIA Live Regions</H4>
            <P>
              Live regions announce dynamic content changes:{" "}
              <code>aria-live=&quot;polite&quot;</code> announces when the
              user is idle, <code>aria-live=&quot;assertive&quot;</code>{" "}
              interrupts to announce immediately, <code>aria-atomic</code>{" "}
              announces the entire region rather than just the change,{" "}
              <code>role=&quot;status&quot;</code> is implicitly polite, and{" "}
              <code>role=&quot;alert&quot;</code> is implicitly assertive.
            </P>
            <Code
              lang="html"
              code={`<!-- ✅ Status message -->
<div role="status" aria-live="polite">
  Changes saved successfully
</div>

<!-- ✅ Alert message -->
<div role="alert">
  Error: Your session has expired
</div>

<!-- ✅ Loading state -->
<div aria-live="polite" aria-busy="true" aria-label="Loading content">
  Loading...
</div>

<!-- ✅ Search results counter -->
<div role="status" aria-live="polite" aria-atomic="true">
  Found <span id="result-count">0</span> results
</div>`}
            />

            <H3 id="keyboard-navigation">8. Keyboard Navigation</H3>
            <P>
              Keyboard accessibility ensures users with motor disabilities,
              blind users, and power users can fully operate a site without a
              mouse. Good keyboard UX rests on three pillars: everything must
              be focusable, focus must be visible, and focus must move in a
              logical, predictable order.
            </P>
            <H4>Focus Management</H4>
            <UL>
              <li>All interactive elements must be keyboard focusable</li>
              <li>The focus indicator must be visible with at least 3:1 contrast</li>
              <li>Focus order should follow the visual layout</li>
              <li>Never &ldquo;trap&rdquo; focus — except inside modals</li>
              <li>When content changes (e.g. opening a dialog), move focus intentionally to the new element</li>
            </UL>
            <H4>Tab Order and tabindex</H4>
            <UL>
              <li><code>tabindex=&quot;0&quot;</code> — makes an element focusable in natural tab order</li>
              <li><code>tabindex=&quot;-1&quot;</code> — makes an element programmatically focusable only</li>
              <li><code>tabindex=&quot;1+&quot;</code> — creates an explicit tab order (avoid unless necessary)</li>
            </UL>
            <P>
              Prefer native interactive elements (they carry built-in tab
              order), only use positive tabindex values when absolutely
              necessary, test tab order by hand, and implement skip links for
              long navigation menus.
            </P>
            <H4>Keyboard Event Handling</H4>
            <UL>
              <li><strong>Tab / Shift+Tab</strong> — navigate between elements</li>
              <li><strong>Enter / Space</strong> — activate buttons and links</li>
              <li><strong>Arrow keys</strong> — navigate within components (menus, tabs, radio groups)</li>
              <li><strong>Escape</strong> — close dialogs and menus</li>
              <li><strong>Home / End</strong> — jump to the first/last item in a list</li>
            </UL>
            <H4>Modal Dialogs and Focus Traps</H4>
            <P>A modal dialog must trap focus inside itself, return focus to the trigger element when closed, and prevent background content from receiving focus.</P>

            <H3 id="forms-and-validation">9. Forms and Input Validation</H3>
            <H4>Form Labels and Association</H4>
            <P>
              Every <code>&lt;input&gt;</code> needs a properly associated{" "}
              <code>&lt;label&gt;</code> using <code>for</code> + <code>id</code>{" "}
              — visual proximity alone is not enough for accessibility.
            </P>
            <H4>Error Handling and Validation</H4>
            <P>
              Error messages must be clear (describe exactly what&rsquo;s
              wrong), specific (not &ldquo;Invalid input&rdquo;), announced
              via <code>aria-live</code>, and paired with{" "}
              <code>aria-invalid=&quot;true&quot;</code> on the field.
            </P>
            <Code
              lang="html"
              code={`<label for="email">Email Address</label>
<input
  id="email"
  type="email"
  aria-invalid="true"
  aria-describedby="email-error"
/>

<p id="email-error" role="alert" aria-live="assertive">
  Please enter a valid email address.
</p>`}
            />
            <H4>Required Fields and Instructions</H4>
            <Code
              lang="html"
              code={`<form aria-labelledby="form-title" aria-describedby="form-instructions">
  <h2 id="form-title">Create Account</h2>
  <p id="form-instructions">
    Fields marked with <span aria-label="required">*</span> are required.
  </p>

  <!-- Required field -->
  <label for="name">
    Full Name <span aria-label="required">*</span>
  </label>
  <input type="text" id="name" name="name" required aria-required="true">

  <!-- Optional field -->
  <label for="phone">
    Phone Number <span class="optional">(optional)</span>
  </label>
  <input type="tel" id="phone" name="phone">

  <button type="submit">Create Account</button>
</form>`}
            />

            <H3 id="color-contrast">10. Color, Contrast, and Visual Design</H3>
            <H4>Color Contrast Requirements</H4>
            <UL>
              <li><strong>Normal text (AA):</strong> 4.5:1</li>
              <li><strong>Large text (AA):</strong> 3:1 (18pt+, or 14pt+ bold)</li>
              <li><strong>Normal text (AAA):</strong> 7:1</li>
              <li><strong>Large text (AAA):</strong> 4.5:1</li>
              <li><strong>UI components (AA):</strong> 3:1</li>
              <li><strong>Focus indicators:</strong> 3:1 against the background</li>
            </UL>
            <P>
              Check contrast with the WebAIM Contrast Checker, Chrome
              DevTools&rsquo; element inspector, or the Figma/Stark plugins.
            </P>
            <H4>Don&rsquo;t Rely on Color Alone</H4>
            <P>
              Never use color as the only way to convey information — users
              with color blindness need alternative indicators (icons, text
              labels, patterns).
            </P>
            <H4>Responsive and Zoom-Friendly Design</H4>
            <P>
              Users must be able to zoom to 200% without losing functionality
              or content: use relative units (<code>rem</code>,{" "}
              <code>em</code>, <code>%</code>) instead of fixed pixels, avoid
              horizontal scrolling at 200% zoom, use responsive design
              techniques, and test at multiple zoom levels.
            </P>

            {/* ================= PART 3 ================= */}
            <H2 id="mobile-accessibility">Part 3 — React Native Accessibility</H2>
            <P>
              Mobile accessibility has unique challenges and opportunities.
              React Native provides cross-platform accessibility APIs, but
              understanding platform differences — iOS VoiceOver versus
              Android TalkBack — is crucial for building truly accessible
              mobile apps.
            </P>

            <H3 id="rn-fundamentals">11. React Native Accessibility Fundamentals</H3>
            <H4>Core Accessibility Props</H4>
            <UL>
              <li><code>accessible</code> — groups children into a single accessibility element (default: true for touchables)</li>
              <li><code>accessibilityLabel</code> — text read by screen readers, like alt text</li>
              <li><code>accessibilityHint</code> — additional context about what happens on activation</li>
              <li><code>accessibilityRole</code> — describes the element type (button, link, header…)</li>
              <li><code>accessibilityState</code> — current state (selected, disabled, checked, expanded)</li>
              <li><code>accessibilityValue</code> — current value of an adjustable element (slider, progress bar)</li>
              <li><code>accessibilityActions</code> — custom actions available to the user</li>
            </UL>
            <Code
              code={`import React from 'react';
import { TouchableOpacity, Text, View, Alert } from 'react-native';

// Basic accessible button
function AccessibleButton() {
  const handleAddToCart = () => {
    Alert.alert('Item added to cart!');
  };

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <TouchableOpacity
        accessible={true}
        accessibilityLabel="Add to cart"
        accessibilityHint="Adds this item to your shopping cart"
        accessibilityRole="button"
        onPress={handleAddToCart}
        style={{
          backgroundColor: '#007AFF',
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 8,
        }}
      >
        <Text style={{ color: 'white', fontSize: 16 }}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
}

export default AccessibleButton;`}
            />

            <H4>Accessibility Roles</H4>
            <P>
              The <code>accessibilityRole</code> prop describes what an
              element is or does: <code>button</code>, <code>link</code>,{" "}
              <code>header</code>, <code>text</code>, <code>image</code>,{" "}
              <code>imagebutton</code>, <code>search</code>,{" "}
              <code>checkbox</code>, <code>radio</code>, <code>switch</code>,{" "}
              <code>adjustable</code> (sliders), <code>tab</code>,{" "}
              <code>menu</code>, <code>menubar</code>, and{" "}
              <code>menuitem</code>.
            </P>

            <H4>Accessibility State</H4>
            <Code
              code={`{/* Checkbox */}
<TouchableOpacity
  accessibilityRole="checkbox"
  accessibilityState={{ checked: isChecked }}
  onPress={() => setIsChecked(!isChecked)}
  style={styles.checkboxContainer}
>
  <View style={[styles.checkbox, isChecked && styles.checkedBox]}>
    {isChecked && <Text style={styles.checkmark}>✓</Text>}
  </View>
  <Text style={styles.checkboxLabel}>Accept terms and conditions</Text>
</TouchableOpacity>`}
            />

            <H4>Accessibility Value</H4>
            <Code
              code={`import React, { useState } from 'react';
import { View, Text, Button, AccessibilityInfo } from 'react-native';

export default function AccessibilityValueExample() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prev => prev + 1);
    // Optional: Announce change to screen readers
    AccessibilityInfo.announceForAccessibility(\`Counter value is \${count + 1}\`);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      accessible={true}
      accessibilityLabel="Counter example"
      accessibilityHint="Double tap to increase the counter"
      accessibilityRole="adjustable"
      accessibilityValue={{ min: 0, max: 10, now: count, text: \`\${count}\` }}
    >
      <Text style={{ fontSize: 24, marginBottom: 10 }}>Count: {count}</Text>
      <Button title="Increase" onPress={increment} />
    </View>
  );
}`}
            />

            <H3 id="screen-readers-mobile">12. Screen Readers on Mobile</H3>
            <H4>VoiceOver on iOS</H4>
            <P>
              Enable via Settings → Accessibility → VoiceOver, a triple-click
              of the home/side button, or by asking Siri. Gestures: swipe
              right/left to move between elements, double-tap to activate,
              triple-tap to double-click, two-finger tap to pause/resume
              speech, two-finger swipe up/down to read from the top or the
              current position, rotate two fingers for the <strong>rotor</strong>,
              and two-finger double-tap for &ldquo;Magic Tap&rdquo; (the main
              action). The rotor lets users navigate by headings, links, form
              controls, buttons, text fields, adjustable elements, images, and
              containers.
            </P>
            <H4>TalkBack on Android</H4>
            <P>
              Enable via Settings → Accessibility → TalkBack, holding
              Volume Up + Volume Down for 3 seconds, or asking Google
              Assistant. Gestures: swipe right/left to move between elements,
              double-tap to activate, swipe down-then-up to read from the
              top, swipe up-then-down to read from the current position,
              swipe right-then-left to go back, and L-shaped gestures for
              shortcuts. Two-finger swipes scroll or change reading
              granularity (characters → words → lines → paragraphs → pages).
            </P>
            <H4>Platform Differences</H4>
            <P>
              While React Native exposes cross-platform APIs, VoiceOver and
              TalkBack behave differently: VoiceOver is more verbose by
              default, TalkBack more concise; role pronunciation differs
              (&ldquo;button&rdquo; vs &ldquo;btn&rdquo;); gesture sets
              differ; navigation modes differ (rotor vs. reading controls);
              focus order can vary slightly; and custom actions are accessed
              differently. <strong>Always test on both platforms</strong> to
              ensure a consistent experience.
            </P>

            <H3 id="touch-targets-gestures">13. Touch Targets and Gestures</H3>
            <H4>Minimum Touch Target Sizes</H4>
            <P>
              WCAG 2.1 requires a minimum of 44×44 points (iOS) or 48×48 dp
              (Android); Apple HIG recommends 44×44 pt, Material Design
              recommends 48×48 dp. Best practice: use{" "}
              <strong>48×48 dp minimum</strong> for every interactive element.
            </P>
            <H4>Using hitSlop and pressRetentionOffset</H4>
            <P>
              Small icons — back buttons, delete icons, close (&ldquo;X&rdquo;)
              buttons — are hard to tap reliably. <code>hitSlop</code>{" "}
              increases the touchable area around a component without
              changing its visual size. <code>pressRetentionOffset</code>{" "}
              defines how far a finger can drift outside the button before
              the press is cancelled, keeping small controls responsive even
              with slight finger movement.
            </P>
            <Code
              code={`{/* ❌ BAD BUTTON - too small, hard to tap, no accessibility */}
<View>
  <Text>❌ Bad Icon Button</Text>
  <TouchableOpacity>
    <Image
      source={{ uri: "https://img.icons8.com/ios-filled/50/000000/chevron-left.png" }}
      style={{ width: 20, height: 20 }} // too small!
    />
  </TouchableOpacity>
</View>

{/* ✅ GOOD BUTTON - large touch area + accessibility */}
<View>
  <Text>✅ Good Icon Button</Text>
  <TouchableOpacity
    accessible
    accessibilityRole="button"
    accessibilityLabel="Go back"
    hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
    style={{
      padding: 12, // ensures minimum 48x48 touch area
      backgroundColor: "#E5E7EB",
      borderRadius: 8,
      width: 48,
      height: 48,
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Image
      source={{ uri: "https://img.icons8.com/ios-filled/50/000000/chevron-left.png" }}
      style={{ width: 20, height: 20 }}
    />
  </TouchableOpacity>
</View>`}
            />
            <H4>Gesture Conflicts with Screen Readers</H4>
            <P>
              Custom swipe, pinch/zoom, and multi-touch gestures can conflict
              with screen reader navigation or magnification gestures.
              Solution: always provide alternative controls, like buttons or
              menus.
            </P>

            <H3 id="rn-forms">14. Forms and Input in React Native</H3>
            <H4>Accessible Text Inputs</H4>
            <P>
              Text inputs must always have clear, descriptive labels, use{" "}
              <code>accessibilityLabel</code> when a visual label isn&rsquo;t
              programmatically connected, provide hints for expected input,
              announce errors and success states, and move focus to the input
              when needed.
            </P>
            <H4>Checkboxes and Radio Buttons</H4>
            <P>
              React Native has no built-in checkbox or radio component, so
              custom implementations must expose the correct roles, states,
              and labels — without them, screen readers can&rsquo;t tell
              whether an option is selected. Use{" "}
              <code>accessibilityRole=&quot;checkbox&quot;</code> or{" "}
              <code>&quot;radio&quot;</code>, pair it with{" "}
              <code>accessibilityState={"{{"} checked {"}}"}</code> (checkboxes)
              or <code>{"{{"} selected {"}}"}</code> (radios), wrap each option
              in a 48×48 touch target, and group radio buttons in a container
              with <code>accessibilityRole=&quot;radiogroup&quot;</code>.
            </P>
            <H4>Form Validation and Error Messages</H4>
            <P>
              Display errors close to the input, give them{" "}
              <code>accessibilityRole=&quot;alert&quot;</code> so screen
              readers announce them, move focus to the first invalid field,
              announce results like &ldquo;Email required,&rdquo; and never
              rely on color alone (e.g. a red border) to signal an error.
            </P>
            <Code
              code={`import React, { useState, useRef, useEffect } from "react";
import {
  View, Text, TextInput, TouchableOpacity,
  AccessibilityInfo, findNodeHandle
} from "react-native";

export default function AccessibleForm() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [terms, setTerms] = useState(false);
  const [error, setError] = useState("");
  const errorRef = useRef(null);

  const handleSubmit = () => {
    if (!name) return setError("Name is required");
    if (!gender) return setError("Select a gender");
    if (!terms) return setError("Accept terms to continue");
    setError("");
    AccessibilityInfo.announceForAccessibility("Form submitted");
  };

  useEffect(() => {
    if (error && errorRef.current) {
      const tag = findNodeHandle(errorRef.current);
      AccessibilityInfo.setAccessibilityFocus(tag);
    }
  }, [error]);

  return (
    <View style={{ padding: 20, gap: 12 }}>
      {/* Text Input */}
      <TextInput
        value={name}
        onChangeText={setName}
        accessibilityLabel="Name"
        accessibilityHint="Enter your name"
        style={{ borderWidth: 1, padding: 10 }}
      />

      {/* Radio Group */}
      <View accessibilityRole="radiogroup">
        {["Male", "Female"].map((option) => (
          <TouchableOpacity
            key={option}
            accessibilityRole="radio"
            accessibilityState={{ selected: gender === option }}
            onPress={() => setGender(option)}
          >
            <Text>{gender === option ? "●" : "○"} {option}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Checkbox */}
      <TouchableOpacity
        accessibilityRole="checkbox"
        accessibilityState={{ checked: terms }}
        onPress={() => setTerms(!terms)}
      >
        <Text>{terms ? "☑" : "☐"} Accept terms</Text>
      </TouchableOpacity>

      {/* Error */}
      {error && (
        <Text
          ref={errorRef}
          accessible
          accessibilityRole="alert"
          style={{ color: "red" }}
        >
          {error}
        </Text>
      )}

      <TouchableOpacity
        accessibilityRole="button"
        onPress={handleSubmit}
        style={{ padding: 12, backgroundColor: "#2563EB" }}
      >
        <Text style={{ color: "white" }}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}`}
            />

            <H3 id="focus-management-navigation">15. Focus Management and Navigation</H3>
            <P>
              In dynamic interfaces, content appears, updates, or moves based
              on user actions. Screen reader users can lose their place if
              focus isn&rsquo;t handled deliberately — managing it
              programmatically tells assistive technology exactly where the
              user should land next.
            </P>
            <Code
              code={`import React, { useRef, useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function ManageFocusExample() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // After submission, focus on the next important element
    if (submitted) {
      emailRef.current?.focus();
    }
  }, [submitted]);

  return (
    <View style={{ padding: 16 }}>
      <Text>Name</Text>
      <TextInput
        ref={nameRef}
        placeholder="Enter your name"
        accessibilityLabel="Name input"
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      />
      <Text>Email</Text>
      <TextInput
        ref={emailRef}
        placeholder="Enter your email"
        accessibilityLabel="Email input"
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      />
      <Button title="Next" onPress={() => setSubmitted(true)} />
    </View>
  );
}`}
            />
            <H4>Screen Reader Announcements</H4>
            <P>
              When your app updates content dynamically — loading data,
              showing an error, submitting a form, changing a section —
              screen reader users won&rsquo;t know unless it&rsquo;s
              announced. Use announcements for status updates, form errors,
              search/filter results, background events, and navigation
              changes that don&rsquo;t move focus automatically. Keep
              announcements short, clear, relevant, and triggered only when
              necessary to avoid noise.
            </P>
            <Code
              code={`import React, { useState } from 'react';
import { View, Text, Button, AccessibilityInfo } from 'react-native';

export default function ScreenReaderAnnouncement() {
  const [count, setCount] = useState(0);

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    AccessibilityInfo.announceForAccessibility(\`Count updated to \${newCount}\`);
  };

  return (
    <View style={{ padding: 16 }}>
      <Text accessibilityLiveRegion="polite">Count: {count}</Text>
      <Button title="Increase Count" onPress={increment} />
    </View>
  );
}`}
            />

            <H3 id="lists-navigation-components">16. Lists, Navigation, and Complex Components</H3>
            <H4>Accessible FlatList and SectionList</H4>
            <P>
              Lists need proper announcements when items load or refresh, a
              clear predictable focus order, roles that let screen readers
              identify list items, fallback labels for images/icons inside
              items, and keyboard navigation support where applicable.
            </P>
            <Code
              code={`<FlatList
  data={items}
  keyExtractor={(item) => item.id}
  accessibilityLabel="Product list"
  accessibilityRole="list"
  onEndReached={() => {
    AccessibilityInfo.announceForAccessibility("Loading more items");
  }}
  renderItem={({ item }) => (
    <View
      accessible
      accessibilityRole="button"
      accessibilityLabel={\`\${item.name}, price \${item.price}\`}
    >
      <Text>{item.name}</Text>
      <Text>{item.price}</Text>
    </View>
  )}
/>`}
            />
            <H4>Tab Navigation</H4>
            <P>
              Tab bars need a <code>tab</code> role per tab, state
              announcements (&ldquo;selected&rdquo; / &ldquo;not
              selected&rdquo;), clear focus movement on selection, and no
              decorative-only elements receiving focus.
            </P>
            <Code
              code={`<View accessibilityRole="tablist">
  {tabs.map((tab, index) => (
    <TouchableOpacity
      key={tab.key}
      accessibilityRole="tab"
      accessibilityState={{ selected: index === activeTab }}
      accessibilityLabel={tab.label}
      onPress={() => setActiveTab(index)}
    >
      <Text>{tab.label}</Text>
    </TouchableOpacity>
  ))}
</View>`}
            />
            <H4>Accessible Modals and Bottom Sheets</H4>
            <P>
              Modals and bottom sheets should announce themselves to screen
              readers and temporarily take over accessibility focus. Users
              must not be able to navigate to elements behind them while
              open; every control inside must be labeled and reachable by
              swipe navigation; and closing the sheet should return focus to
              the element that opened it, so the experience stays smooth and
              predictable for assistive technology users.
            </P>

            <H3 id="testing-rn-accessibility">17. Testing React Native Accessibility</H3>
            <H4>Automated Testing</H4>
            <P>
              Integrate accessibility checks into CI/CD so they run
              automatically on every commit, alongside manual and
              screen-reader testing.
            </P>
            <H4>Manual Testing Checklist</H4>
            <P><strong>iOS VoiceOver:</strong></P>
            <UL>
              <li>Navigate the whole app using swipe gestures and verify every interactive element announces correctly</li>
              <li>Test full user flows (login, checkout, etc.)</li>
              <li>Check images have appropriate labels, and form labels/errors are announced</li>
              <li>Confirm modals trap focus, rotor navigation works, and dynamic content is announced</li>
              <li>Test both portrait and landscape orientations</li>
            </UL>
            <P><strong>Android TalkBack:</strong></P>
            <UL>
              <li>Navigate using swipe gestures and test reading-granularity controls</li>
              <li>Verify custom actions work, and test across different Android versions (behavior varies)</li>
              <li>Check heading hierarchy and form validation announcements</li>
            </UL>
            <H4>Using Accessibility Inspector Tools</H4>
            <P>
              <strong>iOS Accessibility Inspector</strong> (built into Xcode)
              inspects element properties, runs an audit for common issues,
              simulates VoiceOver without enabling it system-wide, and
              simulates different text sizes. The{" "}
              <strong>Android Accessibility Scanner</strong> (Google Play)
              scans screens, suggests improvements, and checks touch target
              size, contrast, and labels. Also test with large text sizes,
              reduced motion, color-blindness simulators, and switch
              control/switch access.
            </P>

            {/* ================= BEST PRACTICES ================= */}
            <H2 id="best-practices">Part 4 — Best Practices, Patterns & Examples</H2>

            <Callout title="Essential React Native accessibility checklist">
              <ul className="list-none space-y-1.5 mt-1">
                {[
                  "Use the appropriate accessibilityRole for every interactive element",
                  "Provide a descriptive accessibilityLabel for buttons and images",
                  "Add accessibilityHint when the result of an action isn't obvious",
                  "Use accessibilityState for dynamic states (checked, selected, disabled)",
                  "Ensure minimum 48×48 dp touch targets",
                  "Use accessible={true} to group related elements",
                  "Set accessible={false} for purely decorative elements",
                  "Manage focus when content changes (modals, navigation)",
                  "Announce important changes with AccessibilityInfo.announceForAccessibility()",
                  "Test with both VoiceOver and TalkBack",
                  "Use accessibilityViewIsModal for modal dialogs",
                  "Provide custom actions for swipeable components",
                  "Support text scaling — avoid fixed pixel sizes",
                  "Maintain a proper heading hierarchy",
                  "Hide decorative images from screen readers",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden="true">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Callout>

            <H3 id="decorative-vs-informative">Decorative vs. Informative vs. Incorrect</H3>
            <P>
              Background images, purely stylistic icons, separator lines, and
              aesthetic illustrations convey no meaning and aren&rsquo;t
              necessary for a screen reader user. When an icon sits next to
              its own text label, hide the icon from the accessibility tree
              so the screen reader announces the label once, cleanly. When an
              icon stands alone, give it a label directly. The most common
              mistake is a standalone icon with no label at all — the screen
              reader then says nothing useful, or just &ldquo;button.&rdquo;
            </P>
            <Code
              code={`{/* ✅ Decorative: icon hidden, text carries the meaning */}
<TouchableOpacity accessibilityRole="button" accessibilityLabel="Go back" onPress={handleBack}>
  <Ionicons name="arrow-back" size={24} accessible={false} importantForAccessibility="no" />
  <Text>Go Back</Text>
</TouchableOpacity>

{/* ✅ Informative: icon alone, properly labeled */}
<TouchableOpacity accessibilityRole="button" accessibilityLabel="Go back" onPress={handleBack}>
  <Ionicons name="arrow-back" size={24} />
</TouchableOpacity>

{/* ❌ Incorrect: icon alone, no label — announces nothing useful */}
<TouchableOpacity onPress={handleBack}>
  <Ionicons name="arrow-back" size={24} />
</TouchableOpacity>`}
            />

            <H3 id="grouping-content">Grouping Content Into a Single Accessible Element</H3>
            <P>
              When a card contains an image, a title, and a subtitle, exposing
              every child individually can create noise, double
              announcements, or break the intended meaning. Treat the whole
              card as one accessible unit and hide its children from the
              accessibility tree — useful for product cards, profile cards,
              notification cards, or list items with an image, title, and
              subtitle. Set <code>accessible={"{true}"}</code> on the parent,
              and add <code>accessibilityElementsHidden={"{true}"}</code>{" "}
              with <code>importantForAccessibility=&quot;no-hide-descendants&quot;</code>{" "}
              on the inner wrapper. The screen reader then announces only the
              parent&rsquo;s <code>accessibilityLabel</code> and{" "}
              <code>accessibilityHint</code>, instead of a clutter of
              separately focusable items.
            </P>
            <Code
              code={`<TouchableOpacity
  accessible={true}
  accessibilityRole="button"
  accessibilityLabel={\`\${title}, \${subtitle}\`}
  onPress={onPress}
  style={styles.card}
>
  {/* Hidden internal elements (treated as one group) */}
  <View
    accessibilityElementsHidden={true}
    importantForAccessibility="no-hide-descendants"
    style={{ flexDirection: "row", alignItems: "center" }}
  >
    <Image source={{ uri: imageUri }} style={styles.avatar} />
    <View style={{ marginLeft: 15 }}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  </View>
</TouchableOpacity>`}
            />

            <H3 id="touch-and-contrast">Touch Areas and Color Contrast</H3>
            <P>
              Interactive elements need comfortable touch targets with real
              separation between controls — tight spacing hurts users with
              motor impairments, larger fingers, or small screens. Pair that
              with strong color contrast: WCAG requires at least 4.5:1 for
              normal text, 3:1 for large or bold text, and 3:1 for
              interactive components like buttons or icons against their
              background. Poor contrast blurs visual boundaries, increases
              eye strain, and creates real barriers for users with low vision
              or color-perception differences — choosing strong, accessible
              color pairs keeps interactions confident and inclusive for
              everyone.
            </P>

            {/* ================= FAQ ================= */}
            <H2 id="faq">Frequently Asked Questions</H2>
            <dl className="space-y-6 mb-4">
              {faqs.map((item) => (
                <div key={item.q}>
                  <dt className="font-heading font-semibold text-neutral-900 mb-1.5">
                    {item.q}
                  </dt>
                  <dd className="text-neutral-700 leading-relaxed">{item.a}</dd>
                </div>
              ))}
            </dl>

            {/* ================= RESOURCES ================= */}
            <H2 id="resources">Part 6 — Resources & Closing Remarks</H2>
            <P>Resources for continued learning:</P>
            <UL>
              <li>
                <a
                  href="https://reactnative.dev/docs/accessibility"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-700 underline underline-offset-2"
                >
                  React Native Docs — Accessibility
                </a>
              </li>
              <li>
                <a
                  href="https://developer.apple.com/accessibility/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-700 underline underline-offset-2"
                >
                  Apple Accessibility
                </a>
              </li>
              <li>
                <a
                  href="https://developer.android.com/guide/topics/ui/accessibility"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-700 underline underline-offset-2"
                >
                  Android Accessibility
                </a>
              </li>
              <li>
                <a
                  href="https://www.w3.org/TR/mobile-accessibility-mapping/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-700 underline underline-offset-2"
                >
                  WCAG Mobile Accessibility Mapping
                </a>
              </li>
              <li>
                <a
                  href="https://www.a11yproject.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-700 underline underline-offset-2"
                >
                  The A11y Project
                </a>
              </li>
            </UL>

            <Callout title="Thank you">
              I&rsquo;m truly fortunate to have the access, tools, and
              resources that enable me to build great experiences. If I can
              use that privilege to make these same experiences accessible to
              people with diverse abilities, we move one step closer to a
              world that&rsquo;s not only more inclusive, but genuinely
              equal. Thank you for taking the time to learn, improve, and
              contribute to a better, more accessible future for everyone.
            </Callout>

            <div className="mt-8 rounded-lg border border-neutral-200 p-6">
              <p className="font-heading font-semibold text-neutral-900 mb-1">
                Want the offline version?
              </p>
              <p className="text-sm text-neutral-600 mb-4">
                Download the full handbook as a PDF, complete with cover
                design and diagrams.
              </p>
              <a
                href="/accessibility-handbook.pdf"
                download
                className="inline-block rounded-md bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-teal-700 transition-colors"
              >
                Download Accessibility Handbook (PDF)
              </a>
            </div>
          </article>
        </div>
      </div>

      <footer className="border-t border-neutral-200 bg-neutral-50 py-8">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-neutral-600">
          <span>© {new Date().getFullYear()} Mohammed Abdullah Khan. All rights reserved.</span>
          <Link href="/" className="text-teal-700 hover:underline underline-offset-2">
            ← Back to portfolio
          </Link>
        </div>
      </footer>
    </>
  );
}
