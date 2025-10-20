import "./globals.css";
import { Space_Grotesk, Inter } from "next/font/google";
import { Analytics } from '@vercel/analytics/next';

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Mohammed Abdullah Khan | Full Stack & React Native Developer",
  description: "Portfolio of Mohammed Abdullah Khan – Full Stack Developer and React Native Specialist. Explore projects, experience, and contact details.",
  keywords: "Mohammed Abdullah Khan, portfolio, React Native, Full Stack Developer, MERN, TypeScript, JavaScript, software engineer, mobile app developer",
  authors: [{ name: "Mohammed Abdullah Khan" }],
  creator: "Mohammed Abdullah Khan",
  metadataBase: new URL("https://www.mohammedabdullahkhan.com"),
  openGraph: {
    title: "Mohammed Abdullah Khan | Full Stack & React Native Developer",
    description: "Showcasing work, skills, and achievements of a modern software engineer focused on building impactful applications.",
    url: "https://www.mohammedabdullahkhan.com",
    siteName: "Mohammed Abdullah Khan Portfolio",
    type: "website",
    locale: "en_US",
    images: [
    {
      url: "https://www.mohammedabdullahkhan.com/og-image.png",
      width: 1200,
      height: 630,
      alt: "Mohammed Abdullah Khan Developer Portfolio",
    },
  ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Abdullah Khan | Developer Portfolio",
    description: "Explore the developer portfolio of Mohammed Abdullah Khan, a passionate full-stack and mobile app developer.",
    creator: "@MohammedAb86610",
    images: ["https://www.mohammedabdullahkhan.com/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <title>Mohammed Abdullah Khan | Full Stack & React Native Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="F-3BijcciQLBcKa0qGz_zjFwsVwM_4D-_KDKrjBrdGE" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-S3MLK25EVM" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-S3MLK25EVM');
            `,
          }}
        />
      </head>
      <body className="font-inter">
        {children}
        <Analytics />
      </body>
    </html>
  );
}