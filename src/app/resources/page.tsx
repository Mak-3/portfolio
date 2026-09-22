import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, BadgeCheck, BookOpen, Download, Library, Sparkles } from "lucide-react";

const SITE_URL = "https://www.mohammedabdullahkhan.com";
const PAGE_URL = `${SITE_URL}/resources`;

const TITLE = "Free AWS Certification Notes (CLF-C02, SAA-C03, AIF-C01) & Accessibility Handbook";
const DESCRIPTION =
  "Free, downloadable AWS certification notes for Cloud Practitioner (CLF-C02), Solutions Architect Associate (SAA-C03) and AI Practitioner (AIF-C01), written by a 3× AWS Certified engineer and used by 20+ students to pass their exams. Plus a code-first web accessibility handbook.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "AWS notes",
    "free AWS notes",
    "AWS certification notes",
    "AWS exam notes PDF",
    "AWS Cloud Practitioner notes",
    "CLF-C02 notes",
    "CLF-C02 study guide",
    "AWS Solutions Architect Associate notes",
    "SAA-C03 notes",
    "SAA-C03 study guide",
    "AWS AI Practitioner notes",
    "AIF-C01 notes",
    "AWS cheat sheet",
    "AWS exam preparation",
    "AWS study material free download",
    "AWS certification study guide PDF",
    "accessibility handbook",
    "web accessibility guide",
    "WCAG 2.2 guide",
    "React Native accessibility",
  ].join(", "),
  authors: [{ name: "Mohammed Abdullah Khan", url: SITE_URL }],
  creator: "Mohammed Abdullah Khan",
  category: "Education",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "Mohammed Abdullah Khan Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Free AWS certification notes and accessibility handbook",
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

type Resource = {
  title: string;
  eyebrow: string;
  examCode?: string;
  description: string;
  covers: string;
  driveId: string;
  cover: string;
  readPath?: string;
};

type Collection = {
  id: string;
  label: string;
  badge?: string;
  heading: string;
  blurb: string;
  stat: { value: string; caption: string };
  resources: Resource[];
};

const collections: Collection[] = [
  {
    id: "aws-certification-notes",
    label: "AWS certifications",
    badge: "3× AWS Certified",
    heading: "AWS certification notes",
    blurb:
      "These are the exact notes I wrote and revised from to clear all three of my own AWS certifications — domain breakdowns, service comparisons, and the details that actually show up in the exam. Free to download as PDFs, no sign-up.",
    stat: {
      value: "20+",
      caption: "students have cleared their AWS exams with these notes, and the Reddit community has been generous with its thanks.",
    },
    resources: [
      {
        title: "AWS Cloud Practitioner Notes",
        eyebrow: "Foundational",
        examCode: "CLF-C02",
        description:
          "A practical revision companion for core cloud concepts, services, security, and billing.",
        covers:
          "Cloud concepts and the AWS global infrastructure, core services such as EC2, S3, RDS and Lambda, IAM and the shared responsibility model, pricing models, support plans and billing tools.",
        driveId: "1YDi1PnzyekBb5OiCcUqjctJszQyYXklR",
        cover: "/covers/aws-cloud-practitioner.png",
      },
      {
        title: "AWS Solutions Architect Associate Notes",
        eyebrow: "Architecture",
        examCode: "SAA-C03",
        description:
          "Architecture patterns and service notes gathered while preparing for the associate-level exam.",
        covers:
          "VPC and networking design, EC2 and auto scaling, S3 storage classes, RDS and DynamoDB, high availability and fault tolerance, decoupling with SQS and SNS, security, and cost optimisation.",
        driveId: "1JShHvYaLQKsyrLoh2nyn6GgFd8FjMfxr",
        cover: "/covers/aws-solutions-architect.png",
      },
      {
        title: "AWS AI Practitioner Notes",
        eyebrow: "AI & machine learning",
        examCode: "AIF-C01",
        description:
          "A focused set of notes for revising the foundations of AI and machine learning on AWS.",
        covers:
          "AI and machine learning fundamentals, generative AI concepts, Amazon Bedrock and SageMaker, prompt engineering, the managed AI services, and responsible AI practices.",
        driveId: "18ktStAAftMvdiVY5BHmkDwmljryk5_Hv",
        cover: "/covers/aws-ai-practitioner.png",
      },
    ],
  },
  {
    id: "accessibility",
    label: "Accessibility",
    heading: "Open guides",
    blurb:
      "Written for developers who want to build accessible products properly, not just pass an audit.",
    stat: {
      value: "In depth",
      caption: "read by developers who wanted accessibility implementation explained, line by line.",
    },
    resources: [
      {
        title: "Accessibility Handbook",
        eyebrow: "Open guide",
        description:
          "A code-first guide to WCAG, semantic HTML, ARIA, keyboard navigation, and React Native accessibility.",
        covers:
          "WCAG 2.2 and the POUR principles, semantic HTML, ARIA roles and live regions, keyboard navigation and focus management, colour contrast, React Native accessibility props, and testing with VoiceOver and TalkBack.",
        driveId: "1OdD2AF0x4dPZMdrVhnQPGzxmRZSmTvIc",
        cover: "/covers/accessibility-handbook.png",
        readPath: "/accessibility-handbook",
      },
    ],
  },
];

const allResources = collections.flatMap((collection) => collection.resources);

const faqs = [
  {
    q: "Are these AWS notes free to download?",
    a: "Yes. Every set of notes on this page is free to download as a PDF, with no sign-up, email capture, or payment. They are shared with the community exactly as they were written.",
  },
  {
    q: "Which AWS certifications do these notes cover?",
    a: "Three exams: AWS Certified Cloud Practitioner (CLF-C02), AWS Certified Solutions Architect – Associate (SAA-C03), and AWS Certified AI Practitioner (AIF-C01). Each set follows the domains in that exam's official guide.",
  },
  {
    q: "Which AWS certification should I start with?",
    a: "Start with Cloud Practitioner (CLF-C02) if you are new to AWS — it establishes the vocabulary, the global infrastructure, and the billing model that every other exam assumes you already know. Move to Solutions Architect Associate (SAA-C03) once you are comfortable designing with core services. AI Practitioner (AIF-C01) is a separate foundational track for AI and machine learning on AWS.",
  },
  {
    q: "Are these notes enough to pass the AWS exam on their own?",
    a: "They are written to be your revision layer, not your only resource. I used them alongside hands-on practice in the console and a set of practice exams. The notes are strongest in the final weeks before the exam, when you need to consolidate rather than learn from scratch.",
  },
  {
    q: "Who wrote these AWS notes?",
    a: "Mohammed Abdullah Khan, a 3× AWS Certified full-stack and React Native developer. These are the same notes used to clear all three certifications, since shared publicly and used by more than 20 other students to pass their own exams.",
  },
  {
    q: "What format are the notes in?",
    a: "PDF. Each one opens in Google Drive for reading in the browser, or downloads directly so you can annotate it offline.",
  },
  {
    q: "Can I share these notes with my study group?",
    a: "Please do. They were written to be passed around — share the link with anyone preparing for the same exams.",
  },
  {
    q: "What does the Accessibility Handbook cover?",
    a: "WCAG 2.2 and the POUR principles, semantic HTML, ARIA roles and live regions, keyboard navigation and focus management, colour contrast requirements, React Native accessibility props, and how to test with VoiceOver and TalkBack. It is code-first, so nearly every concept comes with the markup to implement it.",
  },
];

function getDownloadUrl(resource: Resource) {
  return `https://drive.google.com/uc?export=download&id=${resource.driveId}`;
}

function getViewUrl(resource: Resource) {
  return `https://drive.google.com/file/d/${resource.driveId}/view`;
}

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Free AWS Certification Notes & Accessibility Handbook",
  description: DESCRIPTION,
  url: PAGE_URL,
  inLanguage: "en-US",
  isAccessibleForFree: true,
  author: {
    "@type": "Person",
    name: "Mohammed Abdullah Khan",
    url: SITE_URL,
  },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: allResources.map((resource, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "LearningResource",
        name: resource.examCode ? `${resource.title} (${resource.examCode})` : resource.title,
        description: `${resource.description} ${resource.covers}`,
        url: getViewUrl(resource),
        encodingFormat: "application/pdf",
        learningResourceType: "Study notes",
        educationalLevel: resource.examCode ? "Professional certification" : "Practitioner guide",
        isAccessibleForFree: true,
        inLanguage: "en-US",
        thumbnailUrl: `${SITE_URL}${resource.cover}`,
        author: {
          "@type": "Person",
          name: "Mohammed Abdullah Khan",
          url: SITE_URL,
        },
      },
    })),
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Resources", item: PAGE_URL },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

function ResourceCard({ resource, index }: { resource: Resource; index: number }) {
  return (
    <article className="group">
      <a
        href={getViewUrl(resource)}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open ${resource.title}`}
        className="block"
      >
        <div className="relative aspect-[1/1.294] overflow-hidden rounded-[2px] border border-[#d7d9cf] bg-white shadow-[10px_12px_0_#d9ded6] transition-transform duration-300 group-hover:-translate-y-1">
          <Image
            src={resource.cover}
            alt={
              resource.examCode
                ? `${resource.title} (${resource.examCode}) PDF cover`
                : `${resource.title} PDF cover`
            }
            fill
            sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
            className="object-contain"
          />
          <span className="absolute left-4 top-4 rounded-full bg-[#f5f1e9]/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#17332f] backdrop-blur-sm">
            0{index + 1}
          </span>
        </div>
      </a>
      <div className="flex items-start justify-between gap-4 pt-7">
        <div>
          <p className="mb-2 flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#277da1]">
            {resource.eyebrow}
            {resource.examCode && (
              <span className="rounded-full border border-[#b8c9c2] px-2 py-0.5 tracking-[0.12em] text-[#17332f]">
                {resource.examCode}
              </span>
            )}
          </p>
          <h3 className="max-w-md font-heading text-xl font-bold leading-tight text-[#17332f]">{resource.title}</h3>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-[#61736d]">{resource.description}</p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-[#61736d]">
            <span className="font-semibold text-[#49635e]">Covers:</span> {resource.covers}
          </p>
        </div>
        <div className="flex shrink-0 gap-2 pt-1">
          <a
            href={getDownloadUrl(resource)}
            target="_blank"
            rel="noreferrer"
            aria-label={`Download ${resource.title} PDF`}
            className="grid h-11 w-11 place-items-center rounded-full bg-[#17332f] text-white transition-colors hover:bg-[#277da1]"
          >
            <Download size={17} />
          </a>
          {resource.readPath && (
            <Link
              href={resource.readPath}
              aria-label={`Read ${resource.title} online`}
              className="grid h-11 w-11 place-items-center rounded-full border border-[#b8c9c2] text-[#17332f] transition-colors hover:border-[#277da1] hover:text-[#277da1]"
            >
              <ArrowUpRight size={17} />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}

export default function ResourcesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f1e9] text-[#17332f]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-8 lg:px-12">
        <Link href="/" className="group inline-flex items-center gap-2 text-sm font-semibold text-[#17332f]">
          <ArrowLeft size={17} className="transition-transform group-hover:-translate-x-1" />
          Back to portfolio
        </Link>
        <div className="flex items-center gap-2 font-heading text-sm font-bold tracking-tight">
          <Library size={19} className="text-[#277da1]" />
          Community library
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 pb-14 pt-10 sm:px-8 lg:px-12 lg:pb-20 lg:pt-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end">
          <div>
            <p className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-[#277da1]">
              <BookOpen size={15} /> Notes, guides &amp; useful things
            </p>
            <h1 className="max-w-4xl font-heading text-5xl font-bold leading-[0.98] tracking-tight sm:text-7xl">
              To the community, with care.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[#49635e] sm:text-xl">
              Complete study notes for the AWS Cloud Practitioner (CLF-C02), Solutions Architect Associate (SAA-C03) and AI Practitioner (AIF-C01) exams, plus a code-first accessibility handbook. Free to download, no sign-up.
            </p>
          </div>
          <aside className="border-l border-[#b8c9c2] pl-5 text-sm leading-relaxed text-[#49635e]">
            <p className="font-heading text-3xl font-bold text-[#17332f]">0{allResources.length}</p>
            <p className="mt-2">resources available to read, save, and share.</p>
          </aside>
        </div>
      </section>

      {collections.map((collection) => (
        <section key={collection.id} id={collection.id} className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:px-12 lg:pb-24">
          <div className="mb-12 border-t border-[#c9d3cc] pt-8">
            <div className="mb-3 flex flex-wrap items-center gap-3">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#277da1]">{collection.label}</p>
              {collection.badge && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#17332f] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#f5f1e9]">
                  <BadgeCheck size={13} strokeWidth={2.2} />
                  {collection.badge}
                </span>
              )}
            </div>
            <h2 className="font-heading text-3xl font-bold leading-tight tracking-tight text-[#17332f] sm:text-4xl">
              {collection.heading}
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#49635e]">{collection.blurb}</p>
            <p className="mt-5 flex max-w-3xl items-baseline gap-2 text-base leading-relaxed text-[#49635e]">
              <Sparkles size={16} className="relative top-[3px] shrink-0 text-[#277da1]" />
              <span>
                <span className="font-heading text-lg font-bold text-[#17332f]">{collection.stat.value}</span>{" "}
                {collection.stat.caption}
              </span>
            </p>
          </div>

          <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {collection.resources.map((resource, index) => (
              <ResourceCard key={resource.title} resource={resource} index={index} />
            ))}
          </div>
        </section>
      ))}

      <section id="faq" className="mx-auto max-w-7xl px-5 pb-24 sm:px-8 lg:px-12">
        <div className="border-t border-[#c9d3cc] pt-8">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#277da1]">Questions</p>
          <h2 className="font-heading text-3xl font-bold leading-tight tracking-tight text-[#17332f] sm:text-4xl">
            Before you download
          </h2>
          <div className="mt-10 grid gap-x-12 gap-y-9 md:grid-cols-2">
            {faqs.map((item) => (
              <div key={item.q}>
                <h3 className="font-heading text-lg font-bold leading-snug text-[#17332f]">{item.q}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#61736d]">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-[#d1d8d1] px-5 py-8 text-center text-sm text-[#61736d] sm:px-8">
        Created and shared by Mohammed Abdullah Khan · <Link href="/" className="font-semibold text-[#17332f] hover:text-[#277da1]">mohammedabdullahkhan.com</Link>
      </footer>
    </main>
  );
}
